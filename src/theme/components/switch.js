import { alpha } from '@mui/material/styles';
import { switchClasses } from '@mui/material/Switch';

export const switch_ = {
  MuiSwitch: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: theme.spacing(1),
        width: 64,
        height: 40,
        '& .MuiSwitch-input': {
          left: '-2px',
          width: '38px',
        },
      }),
      thumb: ({ theme }) => ({
        width: 16,
        height: 16,
        backgroundColor: theme.palette?.common?.white,
        boxShadow: theme.customShadows?.z1,
        '&.Mui-checked': {
          backgroundColor: theme.palette.common.white,
        },
      }),
      track: ({ theme }) => ({
        opacity: 1,
        borderRadius: 14,
        backgroundColor: theme.palette?.grey?.[500] ?
          alpha(theme.palette.grey[500], 0.48) :
          'rgba(145, 158, 171, 0.48)',
      }),
      switchBase: ({ theme }) => ({
        padding: 12,
        '&.Mui-checked': {
          transform: 'translateX(24px)',
          color: theme.palette.common.white,
          '& + .MuiSwitch-track': {
            backgroundColor: theme.palette.primary.main,
            opacity: 1,
            border: 0,
          },
          '&.Mui-disabled + .MuiSwitch-track': {
            opacity: 0.5,
          },
          '& .MuiSwitch-thumb': {
            backgroundColor: theme.palette?.common?.white,
          },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
          color: theme.palette.primary.main,
          border: `6px solid ${theme.palette.common.white}`,
        },
        '&.Mui-disabled': {
          '& .MuiSwitch-thumb': {
            opacity: theme.palette?.grey?.[500] ?
              alpha(theme.palette.grey[500], 0.48) :
              'rgba(145, 158, 171, 0.48)',
          },
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.3,
        },
      }),
    },
  },
};
