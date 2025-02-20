export const popover = {
  MuiPopover: {
    styleOverrides: {
      root: ({ theme }) => ({
        '& .MuiBackdrop-root': {
          backgroundColor: 'transparent',
        },
      }),
      paper: ({ theme }) => ({
        boxShadow: theme.customShadows?.dropdown,
        borderRadius: theme.shape?.borderRadius * 1.5,
      }),
    },
  },
};
