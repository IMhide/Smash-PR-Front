import { useEffect, useState } from "react";
import template from "./DesktopSidebar.jsx";
import { makeStyles } from '@material-ui/core/styles';
import getMinorCircuits from 'lib/getMinorCircuits'
import getMajorCircuits from 'lib/getMajorCircuits'

const drawerWidth = 300 

const useStyles = makeStyles({
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
  }
});

const DesktopSidebar = (props) => {
  const classes = useStyles();
  const [majors, setMajors] = useState([])
  const [minors, setMinors] = useState([])

  useEffect(() => {
    getMajorCircuits().then((response) => {
      setMajors(response.data)
    }).catch((error) => {
      console.log('Something went wrong')
      console.log(error)
    })

     getMinorCircuits().then((response) => {
      setMinors(response.data)
    }).catch((error) => {
      console.log('Something went wrong')
      console.log(error)
    })
  },[])

  return template({classes, majors, minors});
}

export default DesktopSidebar;
