export * from './section-constants';
export * from './nav-constants';
export * from './social-links';
export * from './elevation';

export const HEADER_HEIGHT = 50;
export const FOOTER_HEIGHT = HEADER_HEIGHT;

export const ATI_INSTAGRAM_URL = 'https://www.instagram.com/all_thats_interesting/';
export const HU_INSTAGRAM_URL = 'https://www.instagram.com/realhistoryuncovered/';
export const THUMBER_URL = 'https://allthatsinteresting.com/thumb';

export const POST_CATEGORIES = {
  MYSTERY: 'mystery',
  WEIRD: 'weird',
  BAD_NEWS: 'bad news',
  BELIEVE_IT: 'believe it'
};

export const COLOR_MAP = {
  VIOLET: '#4200ff',
  PURPLE: '#673fb4',
  INDIGO: '#4036ff',
  LIGHT_BLUE: '#0098f9',
  GREEN: '#2abd68',
  ORANGE: '#ffbb2c',
  RED: '#ff3000',
  LIGHT_RED: '#f1453d',
  VERMILION: '#f72666',
  SITE_BG: '#f7f7f9',
  BLUE: '#0255f9',
  TEXT_COLOR: '#242424'
};

export const CATEGORY_COLOR_MAP = {
  [POST_CATEGORIES.MYSTERY]: COLOR_MAP.VIOLET,
  [POST_CATEGORIES.WEIRD]: COLOR_MAP.LIGHT_BLUE,
  [POST_CATEGORIES.BAD_NEWS]: COLOR_MAP.RED,
  [POST_CATEGORIES.BELIEVE_IT]: COLOR_MAP.GREEN
};

export const FONT_FAMILIES = {
  SANS_SERIF: 'Work Sans',
  SERIF: 'Libre Baskerville'
};

export const BREAKPOINTS = {
  XS: 0,
  SM: 576,
  MD: 768,
  LG: 1020,
  XL: 1200
};

export const CONTAINER_PADDING = {
  MOBILE: 15
};

export const IMG_DIMS = {
  // 375*250
  MOBILE_MAIN: {
    width: 1020,
    height: 680
  },
  MREC: {
    width: 300,
    height: 250
  }
};

export enum ASYNC_STATES {
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  DEFAULT = 'DEFAULT'
}

// 27 is max size for "Archaeological Discoveries"
export const TITLE_FONT_SIZE = 27;
