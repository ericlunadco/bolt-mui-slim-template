import { alpha } from '@mui/material/styles';

export const select = {
  MuiSelect: {
    defaultProps: {
      size: 'small',
    },
    styleOverrides: {
      root: ({ theme }) => ({
        '&.Mui-focused': {
          backgroundColor: 'transparent',
        },
      }),
      select: ({ theme }) => ({
        '&:focus': {
          backgroundColor: 'transparent',
        },
      }),
      icon: ({ theme }) => ({
        right: theme.spacing(1),
        width: 20,
        height: 20,
        top: 'calc(50% - 10px)',
      }),
    },
  },
  MuiNativeSelect: {
    styleOverrides: {
      icon: ({ theme }) => ({
        right: theme.spacing(1),
        width: 20,
        height: 20,
        top: 'calc(50% - 10px)',
      }),
    },
  },
};
