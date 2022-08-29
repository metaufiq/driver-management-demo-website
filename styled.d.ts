// import original module declarations
import 'styled-components';

import { themes } from './src/configs/themes';

type ThemeInterface = typeof themes;

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeInterface {}
}