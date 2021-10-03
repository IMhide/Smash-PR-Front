import "./DesktopSidebar.css";
import React from "react";
import { Divider, Drawer, List, ListItem, ListItemText, ListItemIcon, Toolbar, IconButton, AppBar } from '@material-ui/core';
import logo from 'assets/images/logo.png';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import appbarLogo from 'assets/images/logo_appbar.png'
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from "react-router-dom";

function template({ classes, majors, minors, metaDatas, drawerOpen, clsx, handleMenu }) {
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
          <NavLink key={metaDatas.currentId} to={`/`} activeClassName='menu-active' className='item-link' exact>
            <ListItem key={metaDatas.currentId} button text="Ranking saison en cours" className="menu-item">
              <ListItemIcon className='menuIcon'><ArrowRightIcon /></ListItemIcon>
              <ListItemText primary="Ranking saison en cours" />
            </ListItem>
          </NavLink>
          <NavLink key={metaDatas.allTimeId} to={`/circuits/${metaDatas.allTimeId}`} activeClassName='menu-active' className='item-link'>
            <ListItem key={metaDatas.allTimeId} button text="Ranking All Time" className="menu-item">
              <ListItemIcon className='menuIcon'><ArrowRightIcon /></ListItemIcon>
              <ListItemText primary="Ranking All Time" />
            </ListItem>
          </NavLink>
        </List>
        <Divider />
        <List>
          {majors.map((major) => (
            <NavLink key={major['id']} to={`/circuits/${major['id']}`} activeClassName='menu-active' className='item-link'>
              <ListItem key={major['id']} button text={`Major - ${major['name']}`} className="menu-item">
                <ListItemIcon className='menuIcon'><ArrowRightIcon /></ListItemIcon>
                <ListItemText primary={`Nat. - ${major['name']}`} />
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
