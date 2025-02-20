export const tooltip = {
  MuiTooltip: {
    defaultProps: {
      arrow: true,
    },
    styleOverrides: {
      tooltip: ({ theme }) => ({
        backgroundColor: theme.palette?.grey?.[800],
      }),
      arrow: ({ theme }) => ({
        color: theme.palette?.grey?.[800],
      }),
    },
  },
};
