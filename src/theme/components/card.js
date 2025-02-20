import { alpha } from '@mui/material/styles';
import { cardClasses } from '@mui/material/Card';
import { cardHeaderClasses } from '@mui/material/CardHeader';
import { cardActionsClasses } from '@mui/material/CardActions';

export const card = {
  MuiCard: {
    styleOverrides: {
      root: ({ theme }) => ({
        position: 'relative',
        boxShadow: theme.customShadows?.card,
        borderRadius: theme.shape?.borderRadius * 2,
        [`&.${cardClasses.horizontal}`]: {
          flexDirection: 'row',
          '& > *:first-of-type': {
            minWidth: 200,
          },
        },
      }),
    },
  },
  MuiCardHeader: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: theme.spacing(3, 3, 0),
        [`&.${cardHeaderClasses.action}`]: {
          alignItems: 'center',
        },
      }),
      action: ({ theme }) => ({
        marginTop: 0,
        marginRight: 0,
      }),
      avatar: ({ theme }) => ({
        marginRight: theme.spacing(2),
      }),
    },
  },
  MuiCardContent: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: theme.spacing(3),
      }),
    },
  },
  MuiCardActions: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: theme.spacing(3),
        [`&.${cardActionsClasses.spacing}`]: {
          '& > :not(:first-of-type)': {
            marginLeft: theme.spacing(1.5),
          },
        },
      }),
    },
  },
};
