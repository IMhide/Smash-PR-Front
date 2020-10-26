import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 300

const StylesBig = makeStyles({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    boxShadow: '0 0 2rem 0 rgba(136,152,170,.15)',
  },
  menuIcon: {
    display: 'none'
  },
  appBar: {
    display: 'none',
  },

});

const StylesMedium = makeStyles((theme) => ({
  drawer: {
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    boxShadow: '0 0 2rem 0 rgba(136,152,170,.15)',
  },
  menuIcon: {
    display: 'none'
  },
  hide: {
    display: 'none',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  bgb: {
    background: '#000',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
}));

export {StylesBig, StylesMedium, drawerWidth}