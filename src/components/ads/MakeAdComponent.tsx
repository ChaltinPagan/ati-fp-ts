// @flow

import React, { PureComponent } from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import LazyView from '../utils/LazyView';

import { isDevEnv } from '../../utils';
import { displayAd, getMinAdDimensions, registerAd } from './ad-utils';

interface Props {
  style?: ViewStyle;
}

interface State {
  adId?: string;
}

const MakeAdComponent = (adType: string) => {
  const minDimensionsForType = getMinAdDimensions(adType);

  return class Ad extends PureComponent<Props, State> {
    public static defaultProps = {
      style: {}
    };

    public state: State = {};

    public render() {
      const { style } = this.props;
      const { adId } = this.state;
      const emptyAdStyle = adId ? {} : styles.adPlaceholder;
      if (adId) {
        setTimeout(() => displayAd(adId));
      }

      return (
        <LazyView
          lazyLoader={() => this.setState({ adId: registerAd(adType) })}
          style={[minDimensionsForType, emptyAdStyle, style]}
        >
          <div id={adId} />
          {!adId && isDevEnv() && <div>{adType}</div>}
        </LazyView>
      );
    }
  };
};

export default MakeAdComponent;

const styles = StyleSheet.create({
  adPlaceholder: {
    backgroundColor: '#ebebeb',
    borderColor: '#ddd',
    borderWidth: 1
  }
});
