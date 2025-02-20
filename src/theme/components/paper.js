export const paper = {
  MuiPaper: {
    defaultProps: {
      elevation: 0,
    },
    styleOverrides: {
      root: ({ theme, ownerState }) => ({
        backgroundImage: 'none',
        backgroundColor: theme.palette?.background?.paper,
        ...(ownerState.variant === 'outlined' && {
          borderColor: theme.palette?.divider,
        }),
      }),
    },
  },
};
