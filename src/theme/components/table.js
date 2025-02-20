import { alpha } from '@mui/material/styles';
import { tableRowClasses } from '@mui/material/TableRow';
import { tableCellClasses } from '@mui/material/TableCell';

export const table = {
  MuiTableContainer: {
    styleOverrides: {
      root: ({ theme }) => ({
        position: 'relative',
        scrollbarColor: alpha(theme.palette?.text?.disabled || '#000', 0.4),
        scrollbarWidth: 'thin',
      }),
    },
  },
  MuiTable: {
    styleOverrides: {
      root: ({ theme }) => ({
        '--palette-TableCell-border': theme.palette?.divider,
      }),
    },
  },
  MuiTableRow: {
    styleOverrides: {
      root: ({ theme }) => ({
        '--palette-TableCell-border': theme.palette?.divider,
        '&.Mui-selected': {
          backgroundColor: alpha(theme.palette?.primary?.dark || '#000', 0.04),
          '&:hover': {
            backgroundColor: alpha(theme.palette?.primary?.dark || '#000', 0.08),
          },
        },
        '&:last-of-type': {
          [`& .${tableCellClasses.root}`]: {
            borderColor: 'transparent',
          },
        },
      }),
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderBottom: '1px dashed var(--palette-TableCell-border)',
      }),
      head: ({ theme }) => ({
        fontSize: 14,
        color: theme.palette?.text?.secondary,
        fontWeight: theme.typography?.fontWeightSemiBold,
        backgroundColor: theme.palette?.background?.neutral,
      }),
      stickyHeader: ({ theme }) => ({
        backgroundColor: theme.palette?.background?.paper,
        backgroundImage: `linear-gradient(to bottom, ${theme.palette?.background?.neutral}, ${theme.palette?.background?.neutral})`,
      }),
      paddingCheckbox: ({ theme }) => ({
        paddingLeft: theme.spacing(1),
      }),
    },
  },
  MuiTablePagination: {
    defaultProps: {
      backIconButtonProps: { size: 'small' },
      nextIconButtonProps: { size: 'small' },
      slotProps: {
        select: { name: 'table-pagination-select' },
      },
    },
    styleOverrides: {
      root: ({ theme }) => ({
        width: '100%',
        borderTop: `solid 1px ${theme.palette?.divider}`,
      }),
      toolbar: {
        height: 64,
      },
      actions: {
        marginRight: 8,
      },
      select: ({ theme }) => ({
        paddingLeft: 8,
        display: 'flex',
        alignItems: 'center',
        '&:focus': {
          borderRadius: theme.shape?.borderRadius,
        },
      }),
      selectIcon: {
        right: 4,
        width: 16,
        height: 16,
        top: 'calc(50% - 8px)',
      },
    },
  },
};
