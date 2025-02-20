export const muiXDataGrid = {
  MuiDataGrid: {
    defaultProps: {
      density: 'compact',
      disableColumnMenu: true,
      disableRowSelectionOnClick: true,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: theme.shape?.borderRadius,
        border: 'none',
        backgroundColor: theme.palette?.background?.paper,
      }),
      cell: ({ theme }) => ({
        borderBottom: `1px dashed ${theme.palette?.divider}`,
      }),
      columnHeader: ({ theme }) => ({
        backgroundColor: theme.palette?.background?.neutral,
        color: theme.palette?.text?.secondary,
        borderBottom: `1px dashed ${theme.palette?.divider}`,
      }),
      toolbarContainer: ({ theme }) => ({
        padding: theme.spacing(2),
        backgroundColor: theme.palette?.background?.paper,
      }),
      paper: ({ theme }) => ({
        boxShadow: theme.customShadows?.dropdown,
      }),
    },
  },
};
