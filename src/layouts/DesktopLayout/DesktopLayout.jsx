import "./DesktopLayout.css";
import DesktopSidebar from "components/DesktopSidebar"
import { Container, Grid } from '@material-ui/core';
import React from "react";

const template = ({props, classes}) => {
  return (
    <div className={classes.layout}>
      <DesktopSidebar />
      <main className={classes.content}>
        <Container maxWidth='lg' spacing={1}>
            {props.children}
        </Container>
      </main>
    </div>
  );
};

export default template;
