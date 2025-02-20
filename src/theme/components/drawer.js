import { alpha } from '@mui/material/styles';

export const drawer = {
  MuiDrawer: {
    styleOverrides: {
      root: ({ theme }) => ({
        '& .MuiBackdrop-root': {
          backgroundColor: theme.palette?.grey?.[800] ?
            alpha(theme.palette.grey[800], 0.8) :
            'rgba(33, 33, 33, 0.8)',
        },
      }),
      paper: ({ theme }) => ({
        boxShadow: theme.customShadows?.drawer,
        backgroundImage: 'none',
      }),
    },
  },
};
