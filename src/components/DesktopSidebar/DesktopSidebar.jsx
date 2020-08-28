import "./DesktopSidebar.css";
import React from "react";
import { Divider, Drawer, List, ListItem, Container } from '@material-ui/core';
import WifiTetheringIcon from '@material-ui/icons/WifiTethering';
import PortableWifiOffIcon from '@material-ui/icons/PortableWifiOff';
import logo from 'assets/images/logo.png';

function template(classes) {
  return (
      <Drawer variant="persistent" anchor="left" open={true} className={classes.drawer} classes={{ paper: classes.drawerPaper }}>
        <img src={logo} className="pr-logo" alt="Logo PR France" />
        <Divider />
        <List>
          <ListItem> <PortableWifiOffIcon /> Offline </ListItem>
          <ListItem> <WifiTetheringIcon /> Online </ListItem>
        </List>
      </Drawer>
  );
};

export default template;