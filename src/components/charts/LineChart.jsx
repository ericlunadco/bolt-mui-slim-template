import PropTypes from 'prop-types';
import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
import { Card, CardHeader, Box } from '@mui/material';
import { useChartStyles } from './ChartStyles';

export default function LineChart({ title, subheader, chart, ...other }) {
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
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />
      <Box sx={{ p: 3, pb: 1 }}>
        <ReactApexChart
          type="line"
          series={series}
          options={options}
          height={364}
        />
      </Box>
    </Card>
  );
}

LineChart.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  chart: PropTypes.object,
};
