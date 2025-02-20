export const fab = {
  MuiFab: {
    defaultProps: {
      color: 'primary',
    },
    styleOverrides: {
      root: ({ theme, ownerState }) => ({
        boxShadow: theme.customShadows?.z8,
        '&:hover': {
          boxShadow: 'none',
          backgroundColor: theme.vars?.palette?.[ownerState.color]?.dark,
        },
      }),
      primary: ({ theme }) => ({
        '&:hover': {
          backgroundColor: theme.vars?.palette?.primary?.dark,
        },
      }),
      secondary: ({ theme }) => ({
        '&:hover': {
          backgroundColor: theme.vars?.palette?.secondary?.dark,
        },
      }),
      extended: ({ theme }) => ({
        '& svg': {
          marginRight: theme.spacing(1),
        },
      }),
    },
  },
};
