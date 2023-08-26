import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as CSSAnimationsblockRouterMetaData } from './CssAnimations/router-data';
import { blockRouterMetaData as CSSCasscadesblockRouterMetaData } from './SelectorsAndCascade/router-data';
import { blockRouterMetaData as TextFundamentsblockRouterMetaData } from './TextFundaments/router-data';
import { blockRouterMetaData as StandardTagsBlockRouterMetaData } from './StandardTags/router-data';
import { blockRouterMetaData as GoogleFontsBlockRouterMetaData } from './GoogleFonts/router-data';
import { blockRouterMetaData as ColorsBlockRouterMetaData } from './Colors/router-data';
import { blockRouterMetaData as ImageFilesBlockRouterMetaData } from './ImageFiles/router-data';
import { blockRouterMetaData as BackgroundsBlockRouterMetaData } from './Backgrounds/router-data';
import { blockRouterMetaData as CssFilterBlockRouterMetaData } from './CssFilter/router-data';
import { blockRouterMetaData as MediaFilesBlockRouterMetaData } from './MediaFiles/router-data';

export const blockRouterMetaData = [
  CSSAnimationsblockRouterMetaData,
  CSSCasscadesblockRouterMetaData,
  TextFundamentsblockRouterMetaData,
  StandardTagsBlockRouterMetaData,
  GoogleFontsBlockRouterMetaData,
  ColorsBlockRouterMetaData,
  ImageFilesBlockRouterMetaData,
  BackgroundsBlockRouterMetaData,
  CssFilterBlockRouterMetaData,
  MediaFilesBlockRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
