import { alpha } from '@mui/material/styles';
import { avatarGroupClasses } from '@mui/material/AvatarGroup';

const COLORS = ['primary', 'secondary', 'info', 'success', 'warning', 'error'];

const colorByName = (name) => {
  const charAt = name?.charAt(0).toLowerCase();

  if (['a', 'c', 'f'].includes(charAt)) return 'primary';
  if (['e', 'd', 'h'].includes(charAt)) return 'secondary';
  if (['i', 'k', 'l'].includes(charAt)) return 'info';
  if (['m', 'n', 'p'].includes(charAt)) return 'success';
  if (['q', 's', 't'].includes(charAt)) return 'warning';
  if (['v', 'x', 'y'].includes(charAt)) return 'error';

  return 'default';
};

export const avatar = {
  MuiAvatar: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: theme.palette?.background?.neutral,
        fontSize: 14,
        fontWeight: theme.typography?.fontWeightMedium,
      }),
      colorDefault: ({ theme }) => ({
        color: theme.palette?.primary?.dark,
        backgroundColor: theme.palette?.primary?.lighter,
      }),
    },
  },

  MuiAvatarGroup: {
    defaultProps: {
      max: 4,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        display: 'flex',
        '& .MuiAvatar-root': {
          border: `2px solid ${theme.palette?.background?.paper}`,
          '&:first-of-type': {
            zIndex: 9,
          },
          '&:nth-of-type(n+2)': {
            marginLeft: -8,
          },
        },
      }),
      avatar: ({ theme }) => ({
        fontSize: 16,
        fontWeight: theme.typography?.fontWeightSemiBold,
        '&:first-of-type': {
          fontSize: 12,
          color: theme.vars?.palette?.primary?.dark,
          backgroundColor: theme.vars?.palette?.primary?.lighter,
        },
      }),
    },
  },
};
