import "./DesktopSidebar.css";
import React from "react";
import { Divider, Drawer, List, ListItem, Tooltip, ListItemText, ListItemIcon } from '@material-ui/core';
import WifiTetheringIcon from '@material-ui/icons/WifiTethering';
import PortableWifiOffIcon from '@material-ui/icons/PortableWifiOff';
import logo from 'assets/images/logo.png';

function template(classes) {
  return (
    <Drawer variant="persistent" anchor="left" open={true} className={classes.drawer} classes={{ paper: classes.drawerPaper }}>
      <img src={logo} className="pr-logo" alt="Logo PR France" />
      <Divider />
      <List>
        <ListItem button text="Offline - All Time">
          <ListItemIcon><PortableWifiOffIcon /></ListItemIcon>
          <ListItemText primary="Offline - All Time"/>
        </ListItem>
        <ListItem button text="Online - All Time">
          <ListItemIcon><PortableWifiOffIcon /></ListItemIcon>
          <ListItemText primary="Online - All Time"/>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default template;