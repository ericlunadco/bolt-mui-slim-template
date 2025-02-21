import { Box, Typography } from '@mui/material';
import DashboardLayout from '../components/DashboardLayout';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <Box>
        <Typography variant="h4" gutterBottom>
          Welcome back 👋
        </Typography>
        <Typography variant="body1" color="text.secondary">
          If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.
        </Typography>
      </Box>
    </DashboardLayout>
  );
};

export default Dashboard;
