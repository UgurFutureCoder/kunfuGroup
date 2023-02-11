import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Icon } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NavBar = () => {
    const [anchorNav, setAnchorNav] = React.useState(null)
    const [anchorUser, setAnchorUser] = React.useState(null)
    const handleOpenNavMenu = (event) => {
        setAnchorNav(event.currentTarget)
    }
    const handleOpenUserMenu = (event) => {
        setAnchorUser(event.currentTarget)
    }
    const handleCloseNavMenu = () => {
        setAnchorNav(null);
      };

      const handleCloseUserMenu = () => {
        setAnchorUser(null);
      };

      const [state, setState] = React.useState({
        left: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
        <Box
          sx={{ width: 'left' === 'top' || 'left' === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer('left', false)}
          onKeyDown={toggleDrawer('left', false)}
        >
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      );
    
    
    return (
        <AppBar sx={{ width: '100%',margin: 0,backgroundColor: `#000000`,borderRadius: 5}} position='static'>
            <Container maxWidth="xl">
                <Toolbar   disableGutters>
                    <AdbIcon sx={{display: {xs: 'none', md: 'flex',}}} />
                    <Typography
                    variant='h6'
                    noWrap
                    component='a'
                    href='/'
                    sx={{
                        mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              color: `#666666`
                    }}
                    >LOGO</Typography>

{/* 3 кнопокчки */}
                   <Box color={`#ffffff`} sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}> 
        <React.Fragment key={'left'}>
          <Button onClick={toggleDrawer('left', true)}>
          <IconButton
                        size='large'
                        aria-label='account of user'
                        aria-controls='menu-appbar'
                        aria-haspopup="true"
                        color='inherit'
                        ><MenuIcon sx={{color: `#FFFFFF`}} /></IconButton>
          </Button>
          <Drawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
          >
            {list('left')}
          </Drawer>
        </React.Fragment>
                    </Box>
                    <AdbIcon sx={{display: { xs: 'flex', md: 'none' }, mr: 1}} />
                    <Typography
                    variant='h5'
                    noWrap
                    component='a'
                    href=''
                    sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'none' },
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        color: `#666666`
                    }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
                    {pages.map((page) => (
              <Button
              variant="outlined"
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, borderColor: `#FFFFFF`,color: `#FFFFFF`,display: 'block', marginLeft: 5,
              ":hover": {borderColor: `#f70707`}
              
              }}
                
              >
                {page}
              </Button>
            ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorUser)}
              onClose={handleCloseUserMenu}
            >{settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}</Menu>
              </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavBar