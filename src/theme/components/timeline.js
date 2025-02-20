export const timeline = {
  MuiTimelineDot: {
    styleOverrides: {
      root: {
        boxShadow: 'none',
      },
    },
  },
  MuiTimelineConnector: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: theme.palette?.divider,
      }),
    },
  },
};
