import PropTypes from 'prop-types';
import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
import { Card, CardHeader, Box } from '@mui/material';
import { useChartStyles } from './ChartStyles';

export default function PieChart({ title, subheader, chart, ...other }) {
  const { labels, colors, series } = chart;
  const chartStyles = useChartStyles();

  const options = merge(chartStyles, {
    labels,
    colors,
    stroke: {
      show: false,
    },
    legend: {
      position: 'bottom',
      horizontalAlign: 'center',
    },
    plotOptions: {
      pie: {
        donut: {
          size: '90%',
        },
      },
    },
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />
      <Box sx={{ p: 3, pb: 1 }}>
        <ReactApexChart
          type="pie"
          series={series}
          options={options}
          height={364}
        />
      </Box>
    </Card>
  );
}

PieChart.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  chart: PropTypes.object,
};
