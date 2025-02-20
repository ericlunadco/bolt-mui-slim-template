import { alpha } from '@mui/material/styles';
import { checkboxClasses } from '@mui/material/Checkbox';

export const checkbox = {
  MuiCheckbox: {
    defaultProps: {
      size: 'small',
    },
    styleOverrides: {
      root: ({ theme }) => ({
        padding: theme.spacing(1),
        '&:hover': {
          backgroundColor: theme.palette?.primary?.main ?
            alpha(theme.palette.primary.main, 0.08) :
            'rgba(0, 0, 0, 0.08)',
        },
        [`&.${checkboxClasses.disabled}`]: {
          color: theme.palette?.action?.disabled,
        },
      }),
    },
  },
};
