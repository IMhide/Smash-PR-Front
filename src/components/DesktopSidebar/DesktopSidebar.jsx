import "./DesktopSidebar.css";
import React from "react";
import { Divider, Drawer, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import logo from 'assets/images/logo.png';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { NavLink } from "react-router-dom";

function template({ classes, majors, minors, metaInfo }) {
  return (
    <Drawer variant="persistent" anchor="left" open={true} className={classes.drawer} classes={{ paper: classes.drawerPaper }}>
      <img src={logo} className="pr-logo" alt="Logo PR France" />
      <Divider />
      <List>
        <NavLink key={metaInfo['current']} to={`/`} activeClassName='menu-active' className='item-link' exact>
          <ListItem key={metaInfo['current']} button text="Ranking saison en cours" className="menu-item">
              <ListItemIcon className='menuIcon'><ArrowRightIcon /></ListItemIcon>
              <ListItemText primary="Ranking saison en cours" />
          </ListItem>
        </NavLink>
        <NavLink key={metaInfo['all_time']} to={`/circuits/${metaInfo['all_time']}`} activeClassName='menu-active' className='item-link'>
          <ListItem key={metaInfo['all_time']} button text="Ranking All Time" className="menu-item">
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
              <ListItemText primary={`Major - ${major['name']}`} />
            </ListItem>
          </NavLink>
        ))}
      </List>
      <Divider />
      <List>
        {minors.map((minor) => (
          <NavLink key={minor['id']} to={`/circuits/${minor['id']}`} activeClassName='menu-active' className='item-link'>
            <ListItem key={minor['id']} button text={`Minor - ${minor['name']}`} className="menu-item">
              <ListItemIcon className='menuIcon'><ArrowRightIcon /></ListItemIcon>
              <ListItemText primary={`Minor - ${minor['name']}`} />
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
  );
};

export default template;