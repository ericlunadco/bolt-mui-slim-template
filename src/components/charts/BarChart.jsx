import PropTypes from 'prop-types';
import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
import { Card, CardHeader, Box } from '@mui/material';
import { useChartStyles } from './ChartStyles';

export default function BarChart({ title, subheader, chart, ...other }) {
  const { labels, colors, series } = chart;
  const chartStyles = useChartStyles();

  const options = merge(chartStyles, {
    colors,
    xaxis: {
      categories: labels,
    },
    tooltip: {
      y: {
        formatter: (value) => {
          return typeof value === 'number' ? `${value.toFixed(0)}` : value;
        },
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '28%',
        borderRadius: 4,
      },
    },
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />
      <Box sx={{ p: 3, pb: 1 }}>
        <ReactApexChart
          type="bar"
          series={series}
          options={options}
          height={364}
        />
      </Box>
    </Card>
  );
}

BarChart.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  chart: PropTypes.object,
};
