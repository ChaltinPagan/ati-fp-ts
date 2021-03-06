import * as React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

interface Props {
  spacer?: number;
  multiplier?: number;
  itemsPerRow?: number;
  style?: ViewStyle;
}

export default class GridSlot extends React.PureComponent<Props> {
  public static isGridSlot = true;

  public getStyles = () => {
    const { style, itemsPerRow = 1, spacer = 10, multiplier = 1 } = this.props;

    const styles = StyleSheet.create({
      item: {
        flexBasis: `${(100 / itemsPerRow) * multiplier}%`,
        padding: spacer / 2
      }
    });

    return [styles.item, style];
  };

  public render() {
    return <View style={this.getStyles()}>{this.props.children}</View>;
  }
}
