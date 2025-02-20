import { alpha } from '@mui/material/styles';
import { chipClasses } from '@mui/material/Chip';

export const chip = {
  MuiChip: {
    styleOverrides: {
      root: ({ ownerState, theme }) => ({
        fontWeight: theme.typography?.fontWeightMedium,
        fontSize: 13,
        borderRadius: theme.shape?.borderRadius,
        '&:hover': {
          backgroundColor: theme.palette?.action?.hover,
        },
        '&.Mui-disabled': {
          opacity: 0.48,
        },
        ...(ownerState.size === 'medium' && {
          height: 24,
          padding: theme.spacing(1, 0.75),
        }),
        '& .MuiChip-deleteIcon': {
          fontSize: 16,
        },
        ...(ownerState.variant === 'soft' && {
          color: theme.palette?.[ownerState.color]?.dark,
          backgroundColor: alpha(theme.palette?.[ownerState.color]?.main || '#000', 0.16),
          '&:hover': {
            backgroundColor: alpha(theme.palette?.[ownerState.color]?.main || '#000', 0.32),
          },
          '&.Mui-disabled': {
            color: alpha(theme.palette?.[ownerState.color]?.dark || '#000', 0.48),
          },
          [`& .${chipClasses.deleteIcon}`]: {
            color: alpha(theme.palette?.[ownerState.color]?.dark, 0.48),
            '&:hover': {
              color: theme.palette?.[ownerState.color]?.dark,
            },
          },
        }),
        ...(ownerState.variant === 'outlined' && {
          color: theme.palette?.[ownerState.color]?.dark,
          '&.Mui-disabled': {
            color: theme.palette?.[ownerState.color]?.dark ?
              alpha(theme.palette[ownerState.color].dark, 0.48) :
              'rgba(0, 0, 0, 0.48)',
          },
          borderColor: theme.palette?.[ownerState.color]?.main ?
            alpha(theme.palette[ownerState.color].main, 0.32) :
            'rgba(0, 0, 0, 0.32)',
        }),
        ...(ownerState.variant === 'filled' && {
          color: theme.palette?.[ownerState.color]?.contrastText,
          backgroundColor: theme.palette?.[ownerState.color]?.main,
          '&:hover': {
            backgroundColor: theme.palette?.[ownerState.color]?.dark,
          },
        }),
      }),
      label: {
        lineHeight: 1.6,
      },
    },
  },
};
