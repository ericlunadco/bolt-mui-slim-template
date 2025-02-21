import { Box, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Container>
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to Our App
        </Typography>
        <Button
          component={Link}
          to="/dashboard"
          variant="contained"
          size="large"
        >
          Go to Dashboard
        </Button>
      </Box>
    </Container>
  );
};

export default Landing;
