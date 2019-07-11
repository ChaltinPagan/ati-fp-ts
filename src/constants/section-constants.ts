export enum SECTION_TYPES {
  AD = 'ad',
  RECENT = 'recent',
  TAG_TILE_BOX = 'tagTileBox',
  INSTAGRAM = 'instagram',
  NEWSLETTER = 'newsletter',
  TRENDING = 'trending',
  TAG = 'tag',
  SPLIT_TAG_BOX = 'splitTagBox',
  TAG_OVERLAP_TITLE = 'tagOverlapTitle',
  RECENT_AND_TRENDING = 'recentAndTrending',
  PREV_NEXT_BUTTONS = 'prevNextButtons'
}

export enum SECTION_SPACING_VARIANTS {
  NONE = 'none',
  SMALL = 'small',
  LARGE = 'large'
}

export const SECTION_SPACERS = {
  [SECTION_SPACING_VARIANTS.NONE]: 0,
  [SECTION_SPACING_VARIANTS.SMALL]: 30,
  [SECTION_SPACING_VARIANTS.LARGE]: 70
};

export const SMALL_SECTIONS = [SECTION_TYPES.AD];

export const PAGE_SPACING = {
  TOP: SECTION_SPACERS[SECTION_SPACING_VARIANTS.SMALL],
  BOTTOM: SECTION_SPACERS[SECTION_SPACING_VARIANTS.SMALL]
};
