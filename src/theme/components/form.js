import { alpha } from '@mui/material/styles';

export const form = {
  MuiFormLabel: {
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme.palette?.text?.secondary,
      }),
    },
  },
  MuiFormHelperText: {
    defaultProps: {
      component: 'div',
    },
    styleOverrides: {
      root: ({ theme }) => ({
        marginTop: theme.spacing(1),
      }),
    },
  },
  MuiFormControlLabel: {
    styleOverrides: {
      root: ({ theme }) => ({
        '& .MuiFormControlLabel-label': {
          color: theme.palette?.text?.primary,
          '&.Mui-disabled': {
            color: theme.palette?.text?.disabled,
          },
        },
      }),
    },
  },
  MuiFormControl: {
    styleOverrides: {
      root: ({ theme }) => ({
        '&.MuiFormControl-fullWidth': {
          width: '100%',
        },
      }),
    },
  },
  MuiFormGroup: {
    styleOverrides: {
      root: ({ theme }) => ({
        '&.MuiFormGroup-row': {
          flexDirection: 'row',
        },
      }),
    },
  },
};
