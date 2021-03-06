// @flow

import React, { PureComponent } from 'react';
import { ScrollView, StyleSheet, ViewStyle } from 'react-native';
import LazyView from '../utils/LazyView';

interface Props {
  children: React.ReactNode;
  contentContainerStyle?: ViewStyle;
  style?: ViewStyle;
}

interface State {
  contentHeight: number;
}

class Main extends PureComponent<Props, State> {
  public static defaultProps = {
    contentContainerStyle: {},
    style: {}
  };

  public render() {
    const { children, contentContainerStyle, style } = this.props;
    return (
      <ScrollView
        onScroll={LazyView.onScroll}
        scrollEventThrottle={32}
        keyboardShouldPersistTaps="handled"
        style={[styles.scrollView, style]}
        contentContainerStyle={[styles.contentContainer, contentContainerStyle]}
      >
        {children}
      </ScrollView>
    );
  }
}

export default Main;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    width: '100%'
  },
  contentContainer: {
    flexGrow: 1,
    width: '100%',
    alignItems: 'center'
  }
});
