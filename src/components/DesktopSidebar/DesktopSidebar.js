import { useEffect, useState } from "react";
import template from "./DesktopSidebar.jsx";
import clsx from 'clsx';
import { StylesMedium, StylesBig } from './DesktopSidebar.style'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useSelector, useDispatch } from "react-redux";
import { selectCircuit, updateCircuitsAsync } from 'slices/circuits/circuitSlice'
import { selectMetaDatas } from 'slices/metaDatas/metaDatasSlice'



const DesktopSidebar = (props) => {
  let classes;
  const [menuClicked, setMenuClicked] = useState(false)

  const largeScreen = useMediaQuery('(min-width:1400px)');
  const drawerOpen = largeScreen || (!largeScreen && menuClicked)

  if (largeScreen) {
    classes = StylesBig();
  } else {
    classes = StylesMedium();
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateCircuitsAsync())
  }, [dispatch])

  const handleMenu = () => {
    setMenuClicked(!menuClicked)
  }

  const circuits = useSelector(selectCircuit);
  const metaDatas = useSelector(selectMetaDatas);
  const ignoreIds = [metaDatas.allTimeId, metaDatas.currentId]
  const majors = circuits.majors.filter((major) => !ignoreIds.includes(major.id))
  const minors = circuits.minors

  return template({ classes, majors, minors, metaDatas, drawerOpen, clsx, handleMenu });
}

export default DesktopSidebar;