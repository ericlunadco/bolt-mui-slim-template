export const rating = {
  MuiRating: {
    defaultProps: {
      size: 'small',
    },
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme.palette?.warning?.main,
        '& span': {
          lineHeight: 1,
        },
      }),
      iconEmpty: ({ theme }) => ({
        color: theme.palette?.grey?.[400],
      }),
      sizeSmall: {
        '& svg': {
          width: 20,
          height: 20,
        },
      },
      sizeMedium: {
        '& svg': {
          width: 24,
          height: 24,
        },
      },
      sizeLarge: {
        '& svg': {
          width: 28,
          height: 28,
        },
      },
    },
  },
};
