import { alpha } from '@mui/material/styles';
import { toggleButtonClasses } from '@mui/material/ToggleButton';

export const toggleButton = {
  MuiToggleButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: theme.shape?.borderRadius,
        fontWeight: theme.typography?.fontWeightMedium,
        border: `solid 1px ${alpha(theme.palette?.grey?.[500] || '#919EAB', 0.24)}`,
        '&.Mui-selected': {
          color: theme.palette?.primary?.main,
          backgroundColor: alpha(theme.palette?.primary?.main || '#00A76F', 0.08),
          '&:hover': {
            backgroundColor: alpha(theme.palette?.primary?.main || '#00A76F', 0.16),
          },
        },
      }),
    },
  },
  MuiToggleButtonGroup: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: theme.shape?.borderRadius,
        backgroundColor: theme.palette?.background?.paper,
        border: `solid 1px ${alpha(theme.palette?.grey?.[500] || '#919EAB', 0.16)}`,
      }),
    },
  },
};
