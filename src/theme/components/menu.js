import { menuClasses } from '@mui/material/Menu';
import { menuItemClasses } from '@mui/material/MenuItem';

export const menu = {
  MuiMenu: {
    styleOverrides: {
      root: ({ theme }) => ({
        [`& .${menuClasses.paper}`]: {
          boxShadow: theme.customShadows?.dropdown,
        },
        [`& .${menuClasses.list}`]: {
          padding: theme.spacing(0.5),
        },
      }),
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: ({ theme }) => ({
        minWidth: 160,
        padding: theme.spacing(1),
        borderRadius: theme.shape?.borderRadius,
        '&:hover': {
          backgroundColor: theme.palette?.action?.hover,
        },
        [`&.${menuItemClasses.selected}`]: {
          backgroundColor: theme.palette?.action?.selected,
          '&:hover': {
            backgroundColor: theme.palette?.action?.hover,
          },
        },
        [`&.${menuItemClasses.disabled}`]: {
          opacity: 0.48,
        },
      }),
    },
  },
};
