export const link = {
  MuiLink: {
    defaultProps: {
      underline: 'hover',
    },
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme.palette?.primary?.main,
        '&:hover': {
          color: theme.palette?.primary?.dark,
        },
        '&.Mui-disabled': {
          color: theme.palette?.text?.disabled,
        },
      }),
    },
  },
};
