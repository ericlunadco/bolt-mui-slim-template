import { alpha } from '@mui/material/styles';
import { sliderClasses } from '@mui/material/Slider';

const SIZE = {
  rail: { small: 6, medium: 10 },
  thumb: { small: 16, medium: 20 },
  mark: { small: 4, medium: 6 },
};

export const slider = {
  MuiSlider: {
    styleOverrides: {
      root: ({ theme }) => ({
        '&.Mui-disabled': {
          opacity: 0.48,
        },
        '& .MuiSlider-rail': {
          opacity: 0.32,
        },
        '& .MuiSlider-thumb': {
          width: 12,
          height: 12,
          '&:before': {
            boxShadow: 'none',
          },
          '&:hover, &.Mui-focusVisible': {
            boxShadow: 'none',
          },
        },
        '& .MuiSlider-valueLabel': {
          backgroundColor: theme.palette?.grey?.[800] ?
            alpha(theme.palette.grey[800], 0.96) :
            'rgba(33, 33, 33, 0.96)',
        },
      }),
      markLabel: ({ theme }) => ({
        fontSize: 13,
        color: theme.palette?.text?.disabled,
      }),
      valueLabel: ({ theme }) => ({
        borderRadius: theme.shape?.borderRadius,
        backgroundColor: theme.palette?.grey?.[800] ?
          alpha(theme.palette.grey[800], 0.96) :
          'rgba(33, 33, 33, 0.96)',
      }),
      track: {
        opacity: 1,
      },
      thumb: ({ theme }) => ({
        border: `2px solid ${theme.palette?.background?.paper}`,
        boxShadow: theme.palette?.grey?.[500] ?
          `0 2px 8px ${alpha(theme.palette.grey[500], 0.16)}` :
          '0 2px 8px rgba(145, 158, 171, 0.16)',
      }),
    },
  },
};
