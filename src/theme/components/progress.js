export const progress = {
  MuiLinearProgress: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: theme.shape?.borderRadius,
        overflow: 'hidden',
      }),
      bar: ({ theme }) => ({
        borderRadius: theme.shape?.borderRadius,
      }),
    },
  },
  MuiCircularProgress: {
    styleOverrides: {
      root: ({ ownerState, theme }) => ({
        ...(ownerState.variant === 'determinate' && {
          '& circle': {
            strokeLinecap: 'round',
          },
        }),
      }),
    },
  },
};
