import PropTypes from 'prop-types';
import { useMemo } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';

import { theme } from './index';

// ----------------------------------------------------------------------

export function ThemeProvider({ children }) {
  const memoizedValue = useMemo(() => ({ theme }), []);

  return (
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      {children}
    </CssVarsProvider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
};
