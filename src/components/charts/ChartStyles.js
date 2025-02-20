import { useTheme } from '@mui/material/styles';

export const useChartStyles = () => {
  const theme = useTheme();

  return {
    chart: {
      background: 'transparent',
      toolbar: {
        show: false,
      },
      fontFamily: theme.typography.fontFamily,
    },
    colors: [
      theme.palette.primary.main,
      theme.palette.info.main,
      theme.palette.warning.main,
      theme.palette.success.main,
      theme.palette.error.main,
    ],
    grid: {
      borderColor: theme.palette.divider,
      strokeDashArray: 3,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: theme.palette.text.secondary,
          fontSize: '12px',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: theme.palette.text.secondary,
          fontSize: '12px',
        },
      },
    },
    tooltip: {
      theme: theme.palette.mode,
      x: {
        show: false,
      },
      marker: {
        show: false,
      },
      style: {
        fontSize: '12px',
        fontFamily: theme.typography.fontFamily,
      },
    },
    legend: {
      labels: {
        colors: theme.palette.text.primary,
      },
      itemMargin: {
        horizontal: 8,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: theme.shape.borderRadius,
        columnWidth: '40%',
      },
      pie: {
        donut: {
          labels: {
            show: true,
            value: {
              fontSize: '20px',
              fontWeight: 600,
              color: theme.palette.text.primary,
            },
            total: {
              show: true,
              fontSize: '16px',
              fontWeight: 400,
              label: 'Total',
              color: theme.palette.text.secondary,
            },
          },
        },
      },
    },
    states: {
      hover: {
        filter: {
          type: 'lighten',
          value: 0.04,
        },
      },
      active: {
        filter: {
          type: 'darken',
          value: 0.88,
        },
      },
    },
  };
};
