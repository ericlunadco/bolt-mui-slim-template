import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
  IconButton,
  Divider,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  ShoppingCart as EcommerceIcon,
  Analytics as AnalyticsIcon,
  AccountBalance as BankingIcon,
  Book as BookingIcon,
  Description as FileIcon,
  School as CourseIcon,
  Person as UserIcon,
  Inventory as ProductIcon,
  ShoppingBasket as OrderIcon,
  Receipt as InvoiceIcon,
  Article as BlogIcon,
  Work as JobIcon,
  Tour as TourIcon,
  KeyboardArrowLeft as KeyboardArrowLeftIcon,
  KeyboardArrowRight as KeyboardArrowRightIcon,
} from '@mui/icons-material';

const drawerWidth = 240;
const collapsedWidth = 65;

const menuItems = [
  {
    category: 'OVERVIEW',
    items: [
      { text: 'App', icon: <DashboardIcon />, path: '/dashboard' },
      { text: 'Ecommerce', icon: <EcommerceIcon />, path: '/ecommerce' },
      { text: 'Analytics', icon: <AnalyticsIcon />, path: '/analytics' },
      { text: 'Banking', icon: <BankingIcon />, path: '/banking' },
      { text: 'Booking', icon: <BookingIcon />, path: '/booking' },
      { text: 'File', icon: <FileIcon />, path: '/file' },
      { text: 'Course', icon: <CourseIcon />, path: '/course' },
    ]
  },
  {
    category: 'MANAGEMENT',
    items: [
      { text: 'User', icon: <UserIcon />, path: '/user' },
      { text: 'Product', icon: <ProductIcon />, path: '/product' },
      { text: 'Order', icon: <OrderIcon />, path: '/order' },
      { text: 'Invoice', icon: <InvoiceIcon />, path: '/invoice' },
      { text: 'Blog', icon: <BlogIcon />, path: '/blog' },
      { text: 'Job', icon: <JobIcon />, path: '/job' },
      { text: 'Tour', icon: <TourIcon />, path: '/tour' },
    ]
  }
];

const Sidebar = ({ open, onClose }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const drawer = (
    <Box sx={{
      overflow: 'auto',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Box sx={{
        p: 2,
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        transition: theme.transitions.create(['width', 'padding'], {
          easing: theme.transitions.easing.easeInOut,
          duration: theme.transitions.duration.standard,
        }),
      }}>
        <img src="/assets/logo.png" alt="Logo" style={{
          height: 32,
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.standard,
          }),
          marginLeft: isCollapsed ? '-8px' : '0',
        }} />
        <Typography
          variant="subtitle1"
          sx={{
            opacity: isCollapsed ? 0 : 1,
            transition: theme.transitions.create(['opacity', 'width'], {
              easing: theme.transitions.easing.easeInOut,
              duration: theme.transitions.duration.standard,
            }),
            width: isCollapsed ? 0 : 'auto',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
          }}
        >
          Your App
        </Typography>
      </Box>
      <Box sx={{ overflow: 'auto', flexGrow: 1 }}>
        {menuItems.map((category) => (
          <Box key={category.category}>
            <Typography
              variant="overline"
              sx={{
                px: 3,
                mt: 2,
                mb: 1,
                display: 'block',
                color: 'text.secondary',
                fontSize: '11px',
                opacity: isCollapsed ? 0 : 1,
                transition: theme.transitions.create('opacity', {
                  easing: theme.transitions.easing.easeInOut,
                  duration: theme.transitions.duration.standard,
                }),
                height: isCollapsed ? 0 : 'auto',
                overflow: 'hidden',
              }}
            >
              {category.category}
            </Typography>
            <List>
              {category.items.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton
                    component={Link}
                    to={item.path}
                    onClick={!isDesktop ? onClose : undefined}
                    sx={{
                      px: isCollapsed ? 2 : 3,
                      py: 1,
                      minHeight: 48,
                      justifyContent: isCollapsed ? 'center' : 'flex-start',
                      transition: theme.transitions.create(['padding', 'background-color'], {
                        easing: theme.transitions.easing.easeInOut,
                        duration: theme.transitions.duration.standard,
                      }),
                      '&:hover': {
                        bgcolor: 'rgba(0, 0, 0, 0.04)',
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: isCollapsed ? 36 : 36,
                        mr: isCollapsed ? 0 : 3,
                        justifyContent: 'center',
                        transition: theme.transitions.create(['margin', 'min-width'], {
                          easing: theme.transitions.easing.easeInOut,
                          duration: theme.transitions.duration.standard,
                        }),
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      sx={{
                        opacity: isCollapsed ? 0 : 1,
                        transition: theme.transitions.create(['opacity', 'width'], {
                          easing: theme.transitions.easing.easeInOut,
                          duration: theme.transitions.duration.standard,
                        }),
                        width: isCollapsed ? 0 : 'auto',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                      }}
                      primaryTypographyProps={{
                        fontSize: '14px',
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        ))}
      </Box>
    </Box>
  );

  return isDesktop ? (
    <Box sx={{ position: 'relative' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: isCollapsed ? collapsedWidth : drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: isCollapsed ? collapsedWidth : drawerWidth,
            boxSizing: 'border-box',
            borderRight: '1px solid rgba(0, 0, 0, 0.12)',
            transition: theme.transitions.create(['width', 'margin'], {
              easing: theme.transitions.easing.easeInOut,
              duration: theme.transitions.duration.standard,
            }),
            bgcolor: 'background.paper',
            overflowX: 'hidden',
          },
        }}
      >
        {drawer}
      </Drawer>
      <IconButton
        onClick={handleToggleCollapse}
        sx={{
          position: 'absolute',
          right: -10,
          top: 100,
          zIndex: theme.zIndex.drawer + 1,
          border: '1px solid',
          borderColor: 'divider',
          bgcolor: 'background.paper',
          transition: theme.transitions.create(['right', 'left'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.standard,
          }),
          '&:hover': {
            bgcolor: 'background.paper',
          },
          width: 20,
          height: 20,
          '& .MuiSvgIcon-root': {
            fontSize: 16,
            transition: theme.transitions.create('transform', {
              easing: theme.transitions.easing.easeInOut,
              duration: theme.transitions.duration.shorter,
            }),
            transform: isCollapsed ? 'rotate(0deg)' : 'rotate(180deg)',
          },
        }}
      >
        <KeyboardArrowRightIcon />
      </IconButton>
    </Box>
  ) : (
    <Drawer
      variant="temporary"
      open={open}
      onClose={onClose}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          bgcolor: 'background.paper',
        },
      }}
    >
      {drawer}
    </Drawer>
  );
};

export default Sidebar;
