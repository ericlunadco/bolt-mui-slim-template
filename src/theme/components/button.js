import { alpha } from '@mui/material/styles';
import { buttonClasses } from '@mui/material/Button';

export const button = {
  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      root: ({ ownerState, theme }) => ({
        borderRadius: theme.shape?.borderRadius * 1.5,
        fontWeight: theme.typography?.fontWeightSemiBold,
        ...(ownerState.size === 'large' && {
          height: 48,
          padding: theme.spacing(1, 2),
          fontSize: 15,
        }),
        ...(ownerState.size === 'medium' && {
          height: 40,
          padding: theme.spacing(0.75, 1.5),
          fontSize: 14,
        }),
        ...(ownerState.size === 'small' && {
          height: 32,
          padding: theme.spacing(0.5, 1),
          fontSize: 13,
        }),
        ...(ownerState.variant === 'neumorphic' && {
          color: theme.palette?.text?.secondary,
          backgroundColor: theme.palette?.background?.neutral,
          boxShadow: `inset 0px 2px 2px ${alpha(theme.palette?.common?.white || '#fff', 0.4)}, inset -1px -2px 4px ${alpha(
            theme.palette?.common?.black || '#000',
            0.12
          )}`,
          '&:hover': {
            backgroundColor: theme.palette?.background?.neutral,
          },
        }),
        ...(ownerState.variant === 'soft' && {
          color: theme.palette?.[ownerState.color]?.dark,
          backgroundColor: alpha(theme.palette?.[ownerState.color]?.main || '#000', 0.16),
          '&:hover': {
            backgroundColor: alpha(theme.palette?.[ownerState.color]?.main || '#000', 0.32),
          },
        }),
      }),
      sizeLarge: {
        height: 48,
        fontSize: 15,
      },
      sizeMedium: {
        height: 40,
        fontSize: 14,
      },
      sizeSmall: {
        height: 32,
        fontSize: 13,
      },
      contained: ({ ownerState, theme }) => ({
        color: theme.palette?.[ownerState.color]?.contrastText,
        backgroundColor: theme.palette?.[ownerState.color]?.main,
        boxShadow: 'none',
        '&:hover': {
          backgroundColor: theme.palette?.[ownerState.color]?.dark,
          boxShadow: 'none',
        },
      }),
      outlined: ({ ownerState, theme }) => ({
        borderColor: alpha(theme.palette?.[ownerState.color]?.main || '#000', 0.48),
        '&:hover': {
          backgroundColor: alpha(theme.palette?.[ownerState.color]?.main || '#000', 0.08),
          borderColor: theme.palette?.[ownerState.color]?.main,
        },
      }),
      text: ({ ownerState, theme }) => ({
        [`&.${buttonClasses.disabled}`]: {
          color: theme.palette?.text?.disabled,
        },
        '&:hover': {
          backgroundColor: alpha(theme.palette?.[ownerState.color]?.main || '#000', 0.08),
        },
      }),
    },
  },
};
