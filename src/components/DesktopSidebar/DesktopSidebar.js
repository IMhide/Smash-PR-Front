import { useEffect, useState } from "react";
import template from "./DesktopSidebar.jsx";
import { makeStyles } from '@material-ui/core/styles';
import getMinorCircuits from 'lib/getMinorCircuits'
import getMajorCircuits from 'lib/getMajorCircuits'
import getMetaInfo from 'lib/getMetaInfo'

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
  const [metaInfo, setMetaInfo] = useState({all_time: undefined, current: undefined})

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
  },[metaInfo])

  return template({classes, majors, minors, metaInfo});
}

export default DesktopSidebar;
