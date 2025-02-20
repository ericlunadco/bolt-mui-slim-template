import { alpha } from '@mui/material/styles';
import { paginationItemClasses } from '@mui/material/PaginationItem';

export const pagination = {
  MuiPagination: {
    defaultProps: {
      shape: 'rounded',
      variant: 'outlined',
    },
    styleOverrides: {
      root: ({ theme }) => ({
        button: {
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        },
      }),
    },
  },
  MuiPaginationItem: {
    styleOverrides: {
      root: ({ theme }) => ({
        fontWeight: theme.typography?.fontWeightSemiBold,
        '&.Mui-selected': {
          backgroundColor: theme.palette?.primary?.main ?
            alpha(theme.palette.primary.main, 0.08) :
            'rgba(0, 0, 0, 0.08)',
          '&:hover': {
            backgroundColor: theme.palette?.primary?.main ?
              alpha(theme.palette.primary.main, 0.16) :
              'rgba(0, 0, 0, 0.16)',
          },
        },
        [`&.${paginationItemClasses.disabled}`]: {
          opacity: 0.48,
        },
      }),
      outlined: ({ theme }) => ({
        borderColor: theme.palette?.grey?.[500] ?
          alpha(theme.palette.grey[500], 0.24) :
          'rgba(145, 158, 171, 0.24)',
      }),
      outlinedPrimary: ({ theme }) => ({
        '&.Mui-selected': {
          backgroundColor: theme.palette?.primary?.main ?
            alpha(theme.palette.primary.main, 0.08) :
            'rgba(0, 0, 0, 0.08)',
          borderColor: theme.palette?.primary?.main ?
            alpha(theme.palette.primary.main, 0.24) :
            'rgba(0, 0, 0, 0.24)',
        },
      }),
    },
  },
};
