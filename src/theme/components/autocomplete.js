import { alpha } from '@mui/material/styles';
import { autocompleteClasses } from '@mui/material/Autocomplete';
import { svgIconClasses } from '@mui/material/SvgIcon';

export const autocomplete = {
  MuiAutocomplete: {
    defaultProps: {
      popupIcon: null,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        '& .MuiOutlinedInput-root': {
          padding: theme.spacing(1, 1, 1, 1.5),
        },
        '& .MuiFilledInput-root': {
          padding: theme.spacing(1, 1, 1, 1.5),
          borderRadius: theme.shape?.borderRadius,
        },
        [`& .${autocompleteClasses.inputRoot}`]: {
          padding: theme.spacing(1, 1, 1, 1.5),
        },
        [`& .${autocompleteClasses.input}`]: {
          padding: theme.spacing(0, 1, 0, 0),
        },
        [`& .${autocompleteClasses.endAdornment}`]: {
          right: theme.spacing(1),
        },
        [`& .${autocompleteClasses.clearIndicator}`]: {
          [`& .${svgIconClasses.root}`]: {
            fontSize: 16,
            color: theme.vars?.palette?.text?.disabled,
            '&:hover': {
              opacity: 0.8,
              backgroundColor: 'transparent',
            },
          },
        },
        [`& .${autocompleteClasses.popupIndicator}`]: {
          [`& .${svgIconClasses.root}`]: {
            fontSize: 16,
            color: theme.vars?.palette?.text?.disabled,
            '&:hover': {
              opacity: 0.8,
              backgroundColor: 'transparent',
            },
          },
        },
      }),
      paper: ({ theme }) => ({
        boxShadow: theme.customShadows?.dropdown,
        borderRadius: theme.shape?.borderRadius * 1.5,
      }),
      listbox: ({ theme }) => ({
        padding: theme.spacing(1),
      }),
      option: ({ theme }) => ({
        padding: theme.spacing(1),
        margin: theme.spacing(0.5, 0),
        borderRadius: theme.shape.borderRadius,
        '&:hover': {
          backgroundColor: theme.palette?.primary?.main ?
            alpha(theme.palette.primary.main, 0.08) :
            'rgba(0, 0, 0, 0.08)',
        },
        '&.Mui-focused': {
          backgroundColor: theme.palette?.primary?.main ?
            alpha(theme.palette.primary.main, 0.08) :
            'rgba(0, 0, 0, 0.08)',
        },
        [`&.${autocompleteClasses.selected}`]: {
          backgroundColor: alpha(theme.palette.primary.main, 0.08),
        },
      }),
    },
  },
};
