import { alertClasses } from '@mui/material/Alert';
import SvgIcon from '@mui/material/SvgIcon';

// Alert Icons
const AlertInfoIcon = (props) => (
  <SvgIcon {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-10 5.75a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75M12 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2"
      clipRule="evenodd"
    />
  </SvgIcon>
);

const AlertSuccessIcon = (props) => (
  <SvgIcon {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M9.97 15.53l7.78-7.78a.75.75 0 0 1 1.06 1.06l-8.31 8.31a.75.75 0 0 1-1.06 0l-3.78-3.78a.75.75 0 1 1 1.06-1.06l3.25 3.25Z"
      clipRule="evenodd"
    />
  </SvgIcon>
);

const AlertWarningIcon = (props) => (
  <SvgIcon {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.485 2.495c1.664-2.77 5.716-2.77 7.38 0l7.693 12.822c1.664 2.77-.416 6.308-3.69 6.308H4.482c-3.274 0-5.354-3.538-3.69-6.308l7.693-12.822Zm3.515 5.13a.75.75 0 0 1 1.5 0v4.5a.75.75 0 0 1-1.5 0v-4.5Zm1.499 8.625a.999.999 0 1 1-1.498-.999a.999.999 0 0 1 1.498.999Z"
      clipRule="evenodd"
    />
  </SvgIcon>
);

const AlertErrorIcon = (props) => (
  <SvgIcon {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m3.53 7.53l-3.53 3.53l3.53 3.53a.75.75 0 0 1-1.06 1.06L11 14.12l-3.53 3.53a.75.75 0 0 1-1.06-1.06l3.53-3.53l-3.53-3.53a.75.75 0 0 1 1.06-1.06L11 11.88l3.53-3.53a.75.75 0 0 1 1.06 1.06"
      clipRule="evenodd"
    />
  </SvgIcon>
);

const alert = {
  styleOverrides: {
    root: {
      borderRadius: 8,
    },
    standardSuccess: {
      backgroundColor: 'var(--mui-palette-success-lighter)',
      borderColor: 'var(--mui-palette-success-light)',
      color: 'var(--mui-palette-success-dark)',
      [`& .${alertClasses.icon}`]: {
        color: 'var(--mui-palette-success-main)',
      },
    },
    standardInfo: {
      backgroundColor: 'var(--mui-palette-info-lighter)',
      borderColor: 'var(--mui-palette-info-light)',
      color: 'var(--mui-palette-info-dark)',
      [`& .${alertClasses.icon}`]: {
        color: 'var(--mui-palette-info-main)',
      },
    },
    standardWarning: {
      backgroundColor: 'var(--mui-palette-warning-lighter)',
      borderColor: 'var(--mui-palette-warning-light)',
      color: 'var(--mui-palette-warning-dark)',
      [`& .${alertClasses.icon}`]: {
        color: 'var(--mui-palette-warning-main)',
      },
    },
    standardError: {
      backgroundColor: 'var(--mui-palette-error-lighter)',
      borderColor: 'var(--mui-palette-error-light)',
      color: 'var(--mui-palette-error-dark)',
      [`& .${alertClasses.icon}`]: {
        color: 'var(--mui-palette-error-main)',
      },
    },
    icon: {
      fontSize: '1.5rem',
    },
  },
  defaultProps: {
    iconMapping: {
      info: <AlertInfoIcon />,
      success: <AlertSuccessIcon />,
      warning: <AlertWarningIcon />,
      error: <AlertErrorIcon />,
    },
  },
};

export { alert };
