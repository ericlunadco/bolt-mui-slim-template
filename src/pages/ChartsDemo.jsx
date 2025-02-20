import { Container, Grid } from '@mui/material';
import LineChart from '../components/charts/LineChart';
import BarChart from '../components/charts/BarChart';
import PieChart from '../components/charts/PieChart';
import AreaChart from '../components/charts/AreaChart';

export default function ChartsDemo() {
  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    series: [
      {
        name: 'Series 1',
        data: [30, 40, 35, 50, 49, 60, 70],
      },
      {
        name: 'Series 2',
        data: [23, 12, 54, 61, 32, 56, 81],
      },
    ],
    colors: undefined, // Will use theme colors
  };

  const barChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    series: [
      {
        name: 'Series 1',
        data: [44, 55, 41, 67, 22, 43, 21],
      },
      {
        name: 'Series 2',
        data: [13, 23, 20, 8, 13, 27, 33],
      },
    ],
    colors: undefined, // Will use theme colors
  };

  const pieChartData = {
    labels: ['Category A', 'Category B', 'Category C', 'Category D', 'Category E'],
    series: [44, 55, 13, 43, 22],
    colors: undefined, // Will use theme colors
  };

  const areaChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    series: [
      {
        name: 'Series 1',
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: 'Series 2',
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    colors: undefined, // Will use theme colors
  };

  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <LineChart
            title="Line Chart"
            subheader="Sample line chart with multiple series"
            chart={lineChartData}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <BarChart
            title="Bar Chart"
            subheader="Sample bar chart with multiple series"
            chart={barChartData}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <PieChart
            title="Pie Chart"
            subheader="Sample pie chart showing distribution"
            chart={pieChartData}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AreaChart
            title="Area Chart"
            subheader="Sample area chart with gradient fill"
            chart={areaChartData}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
