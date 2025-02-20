import { alpha } from '@mui/material/styles';
import { listItemButtonClasses } from '@mui/material/ListItemButton';
import { listItemIconClasses } from '@mui/material/ListItemIcon';
import { listItemTextClasses } from '@mui/material/ListItemText';

export const list = {
  MuiList: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: theme.spacing(1),
      }),
    },
  },
  MuiListItemButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: theme.spacing(1),
        borderRadius: theme.shape?.borderRadius,
        '&:hover': {
          backgroundColor: alpha(theme.palette?.primary?.main || '#000', 0.08),
        },
        '&.Mui-selected': {
          backgroundColor: alpha(theme.palette?.primary?.main || '#000', 0.16),
          '&:hover': {
            backgroundColor: alpha(theme.palette?.primary?.main || '#000', 0.08),
          },
        },
      }),
    },
  },
  MuiListItemIcon: {
    styleOverrides: {
      root: ({ theme }) => ({
        minWidth: 'auto',
        marginRight: theme.spacing(2),
        color: theme.palette?.text?.secondary,
        [`&.${listItemIconClasses.selected}`]: {
          color: theme.palette?.primary?.main,
        },
      }),
    },
  },
  MuiListItemText: {
    styleOverrides: {
      root: ({ theme }) => ({
        margin: 0,
        [`& .${listItemTextClasses.primary}`]: {
          color: theme.palette?.text?.primary,
        },
        [`& .${listItemTextClasses.secondary}`]: {
          color: theme.palette?.text?.secondary,
          marginTop: theme.spacing(0.5),
        },
      }),
    },
  },
  MuiListSubheader: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: theme.spacing(1),
        color: theme.palette?.text?.secondary,
      }),
    },
  },
};
