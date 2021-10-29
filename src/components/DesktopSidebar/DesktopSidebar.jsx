import "./DesktopSidebar.css";
import React from "react";
import { Divider, Drawer, List, ListItem, ListItemText, ListItemIcon, Toolbar, IconButton, AppBar } from '@material-ui/core';
import logo from 'assets/images/logo.png';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import appbarLogo from 'assets/images/logo_appbar.png'
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from "react-router-dom";

function template({ rankings, classes, drawerOpen, clsx, handleMenu }) {
  return (
    <React.Fragment>
      <AppBar position="fixed" className={clsx(classes.appBar, classes.bgb, { [classes.appBarShift]: drawerOpen })}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" onClick={handleMenu} edge="start" className={clsx(classes.menuButton)} >
            <ArrowBackIosIcon className={clsx({ [classes.hide]: !drawerOpen })} />
            <MenuIcon className={clsx({ [classes.hide]: drawerOpen })} />
          </IconButton>
          <img src={appbarLogo} className="pr-logo-appbar" alt="Logo PR France" />
        </Toolbar>
      </AppBar>
      <Drawer variant="persistent" anchor="left" open={drawerOpen} className={classes.drawer} classes={{ paper: classes.drawerPaper }}>
        <img src={logo} className="pr-logo" alt="Logo PR France" />
        <Divider />
        <List>
          {rankings && rankings.current &&
          <NavLink key={rankings.current.id} to={`/`} activeClassName='menu-active' className='item-link' exact>
            <ListItem key={rankings.current.id} button text={rankings.current.name} className="menu-item">
              <ListItemIcon className='menuIcon'><ArrowRightIcon /></ListItemIcon>
              <ListItemText primary={rankings.current.name} />
            </ListItem>
          </NavLink>
          }
        </List>
        <Divider />
        <List>
          {rankings.previous && rankings.previous.map((ranking) => (
            <NavLink key={ranking['id']} to={`/rankings/${ranking['id']}`} activeClassName='menu-active' className='item-link'>
              <ListItem key={ranking['id']} button text={ranking['name']} className="menu-item">
                <ListItemIcon className='menuIcon'><ArrowRightIcon /></ListItemIcon>
                <ListItemText primary={ranking['name']} />
              </ListItem>
            </NavLink>
          ))}
        </List>
        <Divider />
        <List>
          <NavLink to='/faq' activeClassName='menu-active' className='item-link'>
            <ListItem button text="FAQ">
              <ListItemIcon className='menuIcon'><ArrowRightIcon /></ListItemIcon>
              <ListItemText primary="FAQ" />
            </ListItem>
          </NavLink>
        </List>
      </Drawer >
    </React.Fragment>
  );
};

export default template;
