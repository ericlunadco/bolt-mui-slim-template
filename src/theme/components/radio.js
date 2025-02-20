import { alpha } from '@mui/material/styles';
import { radioClasses } from '@mui/material/Radio';

export const radio = {
  MuiRadio: {
    defaultProps: {
      size: 'small',
    },
    styleOverrides: {
      root: ({ theme }) => ({
        padding: theme.spacing(1),
        '&.Mui-disabled': {
          color: theme.palette?.action?.disabled,
        },
        '&.Mui-checked.Mui-disabled': {
          color: alpha(theme.palette?.primary?.main || '#00A76F', 0.48),
        },
      }),
    },
  },
};
