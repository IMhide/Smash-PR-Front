import "./DesktopSidebar.css";
import React from "react";
import { Divider, Drawer, List, ListItem, Tooltip, ListItemText, ListItemIcon } from '@material-ui/core';
import logo from 'assets/images/logo.png';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

function template({ classes, majors, minors }) {
  return (
    <Drawer variant="persistent" anchor="left" open={true} className={classes.drawer} classes={{ paper: classes.drawerPaper }}>
      <img src={logo} className="pr-logo" alt="Logo PR France" />
      <Divider />
      <List>
        {majors.map((major) => (
        <ListItem key={major['id']} button text={`Major - ${major['name']}`}>
          <ListItemIcon><ArrowRightIcon/></ListItemIcon>
          <ListItemText primary={`Major - ${major['name']}`}/>
        </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {minors.map((minor) => (
        <ListItem key={minor['id']} button text={`Minor - ${minor['name']}`}>
          <ListItemText primary={`Minor - ${minor['name']}`}/>
        </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default template;