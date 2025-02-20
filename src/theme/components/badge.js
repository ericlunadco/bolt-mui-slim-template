export const badge = {
  MuiBadge: {
    styleOverrides: {
      dot: {
        width: 8,
        height: 8,
        borderRadius: '50%',
      },
      standard: ({ theme }) => ({
        minWidth: 20,
        height: 20,
        padding: theme.spacing(0.5, 1),
      }),
      root: ({ theme, ownerState }) => ({
        zIndex: 9,
        ...(ownerState.variant === 'dot' && {
          '& .MuiBadge-badge': {
            width: 8,
            height: 8,
            borderRadius: '50%',
          },
        }),
        '& .MuiBadge-badge': {
          backgroundColor: theme.palette?.common?.white,
          color: theme.palette?.common?.black,
          ...(ownerState.color === 'success' && {
            backgroundColor: theme.palette?.success?.main,
            color: theme.palette?.success?.contrastText,
          }),
          ...(ownerState.color === 'warning' && {
            backgroundColor: theme.palette?.warning?.main,
            color: theme.palette?.warning?.contrastText,
          }),
          ...(ownerState.color === 'info' && {
            backgroundColor: theme.palette?.info?.main,
            color: theme.palette?.info?.contrastText,
          }),
          ...(ownerState.color === 'error' && {
            backgroundColor: theme.palette?.error?.main,
            color: theme.palette?.error?.contrastText,
          }),
          ...(ownerState.color === 'default' && {
            backgroundColor: theme.palette?.text?.disabled,
          }),
        },
      }),
    },
  },
};
