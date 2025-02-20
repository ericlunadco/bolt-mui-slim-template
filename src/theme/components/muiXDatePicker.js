export const muiXDatePicker = {
  MuiDatePicker: {
    defaultProps: {
      slotProps: {
        textField: { size: 'small' },
        actionBar: { actions: ['cancel', 'accept'] },
      },
    },
    styleOverrides: {
      root: ({ theme }) => ({
        '& .MuiPickersDay-root': {
          borderRadius: theme.shape?.borderRadius,
        },
      }),
    },
  },
  MuiPickersLayout: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: theme.shape?.borderRadius * 2,
      }),
    },
  },
};
