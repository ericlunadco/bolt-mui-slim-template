import { alpha } from '@mui/material/styles';
import { inputBaseClasses } from '@mui/material/InputBase';
import { inputLabelClasses } from '@mui/material/InputLabel';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';

export const textField = {
  MuiTextField: {
    defaultProps: {
      variant: 'outlined',
    },
    styleOverrides: {
      root: ({ theme }) => ({
        '& .MuiInputBase-root': {
          borderRadius: theme.shape?.borderRadius,
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: theme.palette?.grey?.[500] ?
              alpha(theme.palette.grey[500], 0.24) :
              'rgba(145, 158, 171, 0.24)',
          },
        },
        '& .MuiFilledInput-root': {
          borderRadius: theme.shape?.borderRadius,
          backgroundColor: theme.palette?.grey?.[500] ?
            alpha(theme.palette.grey[500], 0.08) :
            'rgba(145, 158, 171, 0.08)',
          '&:hover': {
            backgroundColor: theme.palette?.grey?.[500] ?
              alpha(theme.palette.grey[500], 0.16) :
              'rgba(145, 158, 171, 0.16)',
          },
          '&.Mui-focused': {
            backgroundColor: theme.palette?.grey?.[500] ?
              alpha(theme.palette.grey[500], 0.16) :
              'rgba(145, 158, 171, 0.16)',
          },
        },
      }),
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: ({ theme }) => ({
        [`&.${inputLabelClasses.shrink}`]: {
          transform: 'translate(14px, -9px) scale(0.75)',
        },
      }),
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: ({ theme }) => ({
        [`&.${inputBaseClasses.disabled}`]: {
          '& svg': {
            color: theme.palette.text.disabled,
          },
        },
      }),
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: ({ theme }) => ({
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: alpha(theme.palette.grey[500], 0.24),
        },
        '&.Mui-disabled': {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.action.disabledBackground,
          },
        },
      }),
      input: ({ theme }) => ({
        padding: theme.spacing(1, 1.5),
      }),
      notchedOutline: ({ theme }) => ({
        borderColor: alpha(theme.palette.grey[500], 0.24),
        transition: theme.transitions.create(['border-color']),
      }),
    },
  },
};
