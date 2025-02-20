import React, { useState } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Box,
  AppBar,
  Toolbar,
  Alert,
  Avatar,
  Button,
  ButtonGroup,
  Fab,
  ToggleButtonGroup,
  ToggleButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Autocomplete,
  Backdrop,
  Badge,
  Breadcrumbs,
  Checkbox,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Drawer,
  TextField,
  Link,
  List,
  ListItem,
  Menu,
  MenuItem,
  Pagination,
  Paper,
  Popover,
  CircularProgress,
  Radio,
  Rating,
  Select,
  Skeleton,
  Slider,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tabs,
  Tab,
  Tooltip,
  Stepper,
  Step,
  StepLabel,
  Stack,
  Typography,
  FormControlLabel,
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineDot,
  TimelineContent,
} from '@mui/lab';
import { DataGrid } from '@mui/x-data-grid';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TreeView, TreeItem } from '@mui/x-tree-view';

const LandingPage = () => {
  // State for interactive components
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [backdropOpen, setBackdropOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [toggleValue, setToggleValue] = useState('');
  const [selectedValue, setSelectedValue] = useState('');

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleToggleChange = (event, newValue) => {
    setToggleValue(newValue);
  };

  // Sample data for DataGrid
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 130 },
  ];
  const rows = [
    { id: 1, name: 'Sample Row 1' },
    { id: 2, name: 'Sample Row 2' },
  ];

  return (
    <>
      {/* Header */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">MUI Components</Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container sx={{ mt: 4 }}>
        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Avatar src="https://via.placeholder.com/150" alt="Landing Avatar" />
          <Typography variant="h2" component="h1" sx={{ mt: 2 }}>
            Welcome to Our Landing Page
          </Typography>
          <Typography variant="subtitle1" sx={{ mt: 1 }}>
            Explore our amazing UI components.
          </Typography>
          <Button variant="contained" sx={{ mt: 2 }}>
            Get Started
          </Button>
        </Box>

        <Grid container spacing={2}>
          {/* Alerts & Messages */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader title="Alerts & Messages" />
              <CardContent>
                <Alert severity="info">
                  This is an info alert using our custom Alert component.
                </Alert>
              </CardContent>
            </Card>
          </Grid>

          {/* Buttons Showcase */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader title="Buttons Showcase" />
              <CardContent sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                <Button variant="contained">Standard Button</Button>
                <ToggleButtonGroup
                  value={toggleValue}
                  exclusive
                  onChange={handleToggleChange}
                >
                  <ToggleButton value="toggle">Toggle Button</ToggleButton>
                </ToggleButtonGroup>
                <Fab color="primary" size="small">+</Fab>
                <ButtonGroup>
                  <Button>Left</Button>
                  <Button>Center</Button>
                  <Button>Right</Button>
                </ButtonGroup>
              </CardContent>
            </Card>
          </Grid>

          {/* Form Elements */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader title="Form Elements" />
              <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField label="Text Input" />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Accept Terms"
                />
                <FormControlLabel
                  control={<Radio />}
                  label="Option 1"
                />
                <Select
                  value={selectedValue}
                  onChange={(e) => setSelectedValue(e.target.value)}
                  label="Select"
                >
                  <MenuItem value="">None</MenuItem>
                  <MenuItem value="1">Option 1</MenuItem>
                </Select>
                <Autocomplete
                  options={['Option 1', 'Option 2', 'Option 3']}
                  renderInput={(params) => <TextField {...params} label="Autocomplete" />}
                />
              </CardContent>
            </Card>
          </Grid>

          {/* Navigation Components */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader title="Navigation Components" />
              <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Breadcrumbs>
                  <Link href="#">Home</Link>
                  <Link href="#">Library</Link>
                  <Typography>Current</Typography>
                </Breadcrumbs>
                <Button onClick={handleMenuClick}>Open Menu</Button>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                  <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
                </Menu>
                <Button onClick={() => setDrawerOpen(true)}>Open Drawer</Button>
                <Drawer
                  anchor="right"
                  open={drawerOpen}
                  onClose={() => setDrawerOpen(false)}
                >
                  <Box sx={{ width: 250 }}>
                    <List>
                      <ListItem>Drawer Content</ListItem>
                    </List>
                  </Box>
                </Drawer>
              </CardContent>
            </Card>
          </Grid>

          {/* Data Display & Interaction */}
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Data Display & Interaction" />
              <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ height: 200 }}>
                  <DataGrid rows={rows} columns={columns} />
                </Box>
                <Timeline>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Timeline Item</TimelineContent>
                  </TimelineItem>
                </Timeline>
                <Tabs value={0}>
                  <Tab label="Tab 1" />
                  <Tab label="Tab 2" />
                </Tabs>
                <Pagination count={10} />
              </CardContent>
            </Card>
          </Grid>

          {/* Interactive Elements */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader title="Interactive Elements" />
              <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Button onClick={() => setDialogOpen(true)}>Open Dialog</Button>
                <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
                  <DialogTitle>Dialog Title</DialogTitle>
                  <DialogContent>
                    <Typography>Dialog Content</Typography>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={() => setDialogOpen(false)}>Close</Button>
                  </DialogActions>
                </Dialog>
                <Tooltip title="This is a tooltip">
                  <Button>Hover me</Button>
                </Tooltip>
                <Button onClick={(e) => setAnchorEl(e.currentTarget)}>Open Popover</Button>
                <Popover
                  open={Boolean(anchorEl)}
                  anchorEl={anchorEl}
                  onClose={() => setAnchorEl(null)}
                >
                  <Box sx={{ p: 2 }}>Popover Content</Box>
                </Popover>
                <Slider defaultValue={50} />
                <Switch />
              </CardContent>
            </Card>
          </Grid>

          {/* Miscellaneous Components */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader title="Miscellaneous Components" />
              <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Chip label="Chip Example" />
                <Badge badgeContent={4}>
                  <Avatar src="https://via.placeholder.com/40" alt="Badge Avatar" />
                </Badge>
                <Accordion>
                  <AccordionSummary>Accordion Summary</AccordionSummary>
                  <AccordionDetails>Accordion Details</AccordionDetails>
                </Accordion>
                <Paper elevation={3}>Paper Component Content</Paper>
                <Skeleton variant="text" />
                <CircularProgress />
                <Rating defaultValue={3} />
                <Stepper activeStep={1}>
                  <Step>
                    <StepLabel>Step 1</StepLabel>
                  </Step>
                  <Step>
                    <StepLabel>Step 2</StepLabel>
                  </Step>
                </Stepper>
                <Stack direction="row" spacing={2}>
                  <Typography>Item 1</Typography>
                  <Typography>Item 2</Typography>
                  <Typography>Item 3</Typography>
                </Stack>
                <DatePicker label="Pick a date" />
                <TreeView
                  defaultCollapseIcon={<span>-</span>}
                  defaultExpandIcon={<span>+</span>}
                >
                  <TreeItem itemId="1" label="Item 1">
                    <TreeItem itemId="2" label="Item 1.1" />
                  </TreeItem>
                </TreeView>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Backdrop open={backdropOpen} onClick={() => setBackdropOpen(false)} />
    </>
  );
};

export default LandingPage;
