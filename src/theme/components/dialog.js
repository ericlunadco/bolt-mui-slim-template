import { alpha } from '@mui/material/styles';
import { dialogClasses } from '@mui/material/Dialog';
import { dialogActionsClasses } from '@mui/material/DialogActions';
import { dialogContentClasses } from '@mui/material/DialogContent';
import { dialogTitleClasses } from '@mui/material/DialogTitle';

export const dialog = {
  MuiDialog: {
    styleOverrides: {
      root: ({ theme }) => ({
        '& .MuiBackdrop-root': {
          backgroundColor: alpha(theme.palette?.grey?.[900] || '#000', 0.8),
        },
      }),
      paper: ({ theme }) => ({
        boxShadow: theme.customShadows?.dialog,
        backgroundImage: 'none',
        margin: theme.spacing(2),
        borderRadius: theme.shape?.borderRadius * 2,
        [`&.${dialogClasses.paperFullScreen}`]: {
          borderRadius: 0,
        },
      }),
      paperFullScreen: {
        margin: 0,
      },
    },
  },
  MuiDialogTitle: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: theme.spacing(3),
        [`&.${dialogTitleClasses.withClose}`]: {
          paddingRight: theme.spacing(9),
        },
      }),
    },
  },
  MuiDialogContent: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: theme.spacing(3),
        [`&.${dialogContentClasses.withTitle}`]: {
          paddingTop: theme.spacing(0),
        },
        [`&.${dialogContentClasses.withFooter}`]: {
          paddingBottom: theme.spacing(0),
        },
      }),
      dividers: ({ theme }) => ({
        borderTop: `1px solid ${theme.palette?.divider}`,
        borderBottom: `1px solid ${theme.palette?.divider}`,
      }),
    },
  },
  MuiDialogActions: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: theme.spacing(3),
        [`&.${dialogActionsClasses.spacing}`]: {
          '& > :not(:first-of-type)': {
            marginLeft: theme.spacing(1.5),
          },
        },
      }),
    },
  },
};
