import { alpha } from '@mui/material/styles';

export const backdrop = {
  MuiBackdrop: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: alpha(theme.palette?.grey?.[900] || '#161C24', 0.8),
        backdropFilter: 'blur(6px)',
      }),
      invisible: {
        background: 'transparent',
      },
    },
  },
};
