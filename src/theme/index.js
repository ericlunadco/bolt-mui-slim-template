import { createTheme as createMuiTheme, experimental_extendTheme as extendTheme } from '@mui/material/styles';

import { palette } from './core/palette';
import { shadows } from './core/shadows';
import { customShadows } from './core/custom-shadows';
import { typography } from './core/typography';
import { components } from './core/components';
import { mixins } from './core/mixins';

// ----------------------------------------------------------------------

export const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: palette.light,
      shadows: shadows.light,
      customShadows: customShadows.light,
    },
    dark: {
      palette: palette.dark,
      shadows: shadows.dark,
      customShadows: customShadows.dark,
    },
  },
  typography,
  shape: { borderRadius: 8 },
  mixins,
  components,
});
