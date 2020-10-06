import { useEffect, useState } from "react";
import template from "./DesktopSidebar.jsx";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import getMinorCircuits from 'lib/getMinorCircuits'
import getMajorCircuits from 'lib/getMajorCircuits'
import getMetaInfo from 'lib/getMetaInfo'

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
}));




const DesktopSidebar = (props) => {
  let classes;
  const [majors, setMajors] = useState([])
  const [minors, setMinors] = useState([])
  const [metaInfo, setMetaInfo] = useState({ all_time: undefined, current: undefined })
  const [menuClicked, setMenuClicked] = useState(false)

  const largeScreen = useMediaQuery('(min-width:1400px)');
  const drawerOpen = !largeScreen && menuClicked 

  if (largeScreen) {
    classes = StylesBig();
  } else {
    classes = StylesMedium();
  }

  useEffect(() => {
    getMetaInfo().then((response) => {
      setMetaInfo(response.data)
    }).catch((error) => {
      console.log('Something Went Wrong')
      console.log(error)
    })
  }, [])

  useEffect(() => {
    getMajorCircuits().then((response) => {
      const ignoreIds = [parseInt(metaInfo['all_time']), parseInt(metaInfo['current'])]
      console.log(ignoreIds)
      const majors = response.data.filter((major) => !ignoreIds.includes(major.id))

      setMajors(majors)
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
  }, [metaInfo])

  const handleMenu = () => {
    setMenuClicked(!menuClicked)
  }

  return template({ classes, majors, minors, metaInfo, drawerOpen, clsx, handleMenu });
}

export default DesktopSidebar;
