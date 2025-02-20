import { alpha } from '@mui/material/styles';
import { grey, primary, info, error, common } from './palette';

// ----------------------------------------------------------------------

export function createCustomShadow(color) {
  const transparent = alpha(color, 0.16);
  return {
    z1: `0 1px 2px 0 ${transparent}`,
    z4: `0 4px 8px 0 ${transparent}`,
    z8: `0 8px 16px 0 ${transparent}`,
    z12: `0 12px 24px -4px ${transparent}`,
    z16: `0 16px 32px -4px ${transparent}`,
    z20: `0 20px 40px -4px ${transparent}`,
    z24: `0 24px 48px 0 ${transparent}`,
    //
    card: `0 0 2px 0 ${alpha(color, 0.2)}, 0 12px 24px -4px ${alpha(color, 0.12)}`,
    dialog: `-40px 40px 80px -8px ${alpha(common.black, 0.24)}`,
    dropdown: `0 0 2px 0 ${alpha(color, 0.24)}, -20px 20px 40px -4px ${alpha(color, 0.24)}`,
  };
}

// ----------------------------------------------------------------------

export const customShadows = {
  light: {
    ...createCustomShadow(grey[500]),
    primary: `0 8px 16px 0 ${alpha(primary.main, 0.24)}`,
    info: `0 8px 16px 0 ${alpha(info.main, 0.24)}`,
    error: `0 8px 16px 0 ${alpha(error.main, 0.24)}`,
  },
  dark: {
    ...createCustomShadow(grey[700]),
    primary: `0 8px 16px 0 ${alpha(primary.main, 0.24)}`,
    info: `0 8px 16px 0 ${alpha(info.main, 0.24)}`,
    error: `0 8px 16px 0 ${alpha(error.main, 0.24)}`,
  },
};
