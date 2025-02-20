export const breadcrumbs = {
  MuiBreadcrumbs: {
    styleOverrides: {
      root: ({ theme }) => ({
        whiteSpace: 'nowrap',
        '.MuiSvgIcon-root': {
          width: 20,
          height: 20,
          marginBottom: -1,
        },
      }),
      separator: ({ theme }) => ({
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        color: theme.vars?.palette?.text?.disabled,
      }),
      li: ({ theme }) => ({
        display: 'inline-flex',
        alignItems: 'center',
        '& > *': {
          color: 'inherit',
        },
      }),
    },
  },
};
