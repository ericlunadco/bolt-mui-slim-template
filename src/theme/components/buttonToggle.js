import { alpha } from '@mui/material/styles';
import { toggleButtonClasses } from '@mui/material/ToggleButton';

export const buttonToggle = {
  MuiToggleButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: theme.shape.borderRadius,
        color: theme.palette.text.secondary,
        border: `solid 1px ${alpha(theme.palette.grey[500], 0.24)}`,
        '&:hover': {
          backgroundColor: theme.palette.action.hover,
        },
        [`&.${toggleButtonClasses.selected}`]: {
          color: theme.palette.primary.main,
          backgroundColor: alpha(theme.palette.primary.main, 0.08),
          '&:hover': {
            backgroundColor: alpha(theme.palette.primary.main, 0.16),
          },
        },
      }),
    },
  },
  MuiToggleButtonGroup: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.background.paper,
        border: `solid 1px ${alpha(theme.palette.grey[500], 0.16)}`,
      }),
    },
  },
};
