// @flow

import React, { PureComponent } from 'react';
import PageSections from '@/PageFactory';
import { AppWrap, Header, Footer, Main } from '@/components/general';
import { Skybox } from '@/components/ads';
import { startAds } from '@/components/ads/ad-utils';
import { Section } from '@/components/primitives';

import { SECTION_SPACING_VARIANTS } from '@/constants/index';

type Props = {
  data: any;
};

class TagPage extends PureComponent<Props> {
  componentDidMount() {
    startAds();
  }

  render() {
    const { data } = this.props;

    const tagPageData = data.filter((el:any) => {
      const excludedTypes = ['recent', 'tagTileBox', 'instagram', 'newsletter'];
      return !excludedTypes.includes(el.type);
    });

    if (!data) {
      throw new Error('cannot load post data');
    }

    return (
      <AppWrap>
        <Header />
        <Main>
          <Section>
            <Skybox />
          </Section>

          <Section topSpacing={SECTION_SPACING_VARIANTS.LARGE}>
              <PageSections data={tagPageData} />
          </Section>
      
          <Footer />
        </Main>
      </AppWrap>
    );
  }
}

export default TagPage;
