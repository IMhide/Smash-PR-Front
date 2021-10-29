import { useEffect, useState } from "react";
import template from "./DesktopSidebar.jsx";
import clsx from "clsx";
import { StylesMedium, StylesBig } from "./DesktopSidebar.style";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useSelector, useDispatch } from "react-redux";
import {
  selectRankings,
  updateRankingsAsync,
} from "slices/rankings/rankingsSlice";

const DesktopSidebar = (props) => {
  let classes;
  const [menuClicked, setMenuClicked] = useState(false);

  const largeScreen = useMediaQuery("(min-width:1400px)");
  const drawerOpen = largeScreen || (!largeScreen && menuClicked);

  if (largeScreen) {
    classes = StylesBig();
  } else {
    classes = StylesMedium();
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateRankingsAsync());
  }, [dispatch]);

  const handleMenu = () => {
    setMenuClicked(!menuClicked);
  };

  const rankings = useSelector(selectRankings);

  return template({
    rankings,
    classes,
    drawerOpen,
    clsx,
    handleMenu,
  });
};

export default DesktopSidebar;
