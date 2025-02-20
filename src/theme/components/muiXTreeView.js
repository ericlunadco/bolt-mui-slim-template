export const muiXTreeView = {
  MuiTreeView: {
    defaultProps: {
      defaultCollapseIcon: null,
      defaultExpandIcon: null,
      defaultEndIcon: null,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        padding: theme.spacing(1),
      }),
    },
  },
  MuiTreeItem: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: theme.spacing(0.5),
      }),
      content: ({ theme }) => ({
        padding: theme.spacing(0.5),
        borderRadius: theme.shape?.borderRadius,
      }),
      label: ({ theme }) => ({
        fontSize: theme.typography?.body2?.fontSize,
      }),
    },
  },
};
