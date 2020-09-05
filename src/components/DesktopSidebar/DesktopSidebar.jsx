import "./DesktopSidebar.css";
import React from "react";
import { Divider, Drawer, List, ListItem, Tooltip, ListItemText, ListItemIcon } from '@material-ui/core';
import logo from 'assets/images/logo.png';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { NavLink } from "react-router-dom";

function template({ classes, majors, minors }) {
  return (
    <Drawer variant="persistent" anchor="left" open={true} className={classes.drawer} classes={{ paper: classes.drawerPaper }}>
        <img src={logo} className="pr-logo" alt="Logo PR France" />
        <Divider />
        <List>
          {majors.map((major) => (
            <NavLink key={major['id']} to={`/rankings/${major['id']}`} activeClassName='menu-active' className='item-link'>
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
            <ListItem key={minor['id']} button text={`Minor - ${minor['name']}`}>
              <ListItemText primary={`Minor - ${minor['name']}`} />
            </ListItem>
          ))}
        </List>
    </Drawer>
  );
};

export default template;