import { useEffect, useState } from "react";
import template from "./DesktopSidebar.jsx";
import clsx from 'clsx';
import { StylesMedium, StylesBig } from './DesktopSidebar.style'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import getMetaInfo from 'lib/getMetaInfo'

import { useSelector, useDispatch } from "react-redux";
import { selectCircuit, updateCircuitsAsync} from 'slices/circuits/circuitSlice'



const DesktopSidebar = (props) => {
  let classes;
  const [metaInfo, setMetaInfo] = useState({ all_time: undefined, current: undefined })
  const [menuClicked, setMenuClicked] = useState(false)

  const largeScreen = useMediaQuery('(min-width:1400px)');
  const drawerOpen = largeScreen || (!largeScreen && menuClicked)

  if (largeScreen) {
    classes = StylesBig();
  } else {
    classes = StylesMedium();
  }
  
  const circuits = useSelector(selectCircuit);
  const dispatch = useDispatch();

/*
  useEffect(() => {
    getMetaInfo().then((response) => {
      setMetaInfo(response.data)
    }).catch((error) => {
      console.log('Something Went Wrong')
      console.log(error)
    })
  }, []) 
*/
  useEffect(() => {
    dispatch(updateCircuitsAsync())
  }, [dispatch])

  const handleMenu = () => {
    setMenuClicked(!menuClicked)
  }
  const ignoreIds = [parseInt(metaInfo['all_time']), parseInt(metaInfo['current'])]
  const majors = circuits.tournaments.majors.filter((major) => !ignoreIds.includes(major.id))
  const minors = circuits.tournaments.minors

  return template({ classes, majors, minors, metaInfo, drawerOpen, clsx, handleMenu });
}

export default DesktopSidebar;