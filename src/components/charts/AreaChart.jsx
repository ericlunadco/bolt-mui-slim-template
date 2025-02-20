import PropTypes from 'prop-types';
import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
import { Card, CardHeader, Box } from '@mui/material';
import { useChartStyles } from './ChartStyles';
import { alpha } from '@mui/material/styles';

export default function AreaChart({ title, subheader, chart, ...other }) {
  const { labels, colors, series } = chart;
  const chartStyles = useChartStyles();

  const options = merge(chartStyles, {
    colors,
    xaxis: {
      categories: labels,
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (value) => {
          return typeof value === 'number' ? `${value.toFixed(0)}` : value;
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.1,
        stops: [0, 100],
      },
    },
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />
      <Box sx={{ p: 3, pb: 1 }}>
        <ReactApexChart
          type="area"
          series={series}
          options={options}
          height={364}
        />
      </Box>
    </Card>
  );
}

AreaChart.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  chart: PropTypes.object,
};
