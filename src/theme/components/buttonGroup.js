import { alpha } from '@mui/material/styles';

export const buttonGroup = {
  MuiButtonGroup: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: theme.shape.borderRadius,
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none',
        },
        '& .MuiButtonGroup-grouped': {
          borderColor: theme.palette?.grey?.[500] ?
            alpha(theme.palette.grey[500], 0.24) :
            'rgba(145, 158, 171, 0.24)',
        },
      }),
    },
  },
};
