import { alpha } from '@mui/material/styles';

export const skeleton = {
  MuiSkeleton: {
    defaultProps: {
      animation: 'wave',
    },
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: theme.palette?.grey?.[500] ?
          alpha(theme.palette.grey[500], 0.12) :
          'rgba(145, 158, 171, 0.12)',
      }),
    },
  },
};
