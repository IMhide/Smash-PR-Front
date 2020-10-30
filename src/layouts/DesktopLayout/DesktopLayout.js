import useMediaQuery from '@material-ui/core/useMediaQuery';
import template from "./DesktopLayout.jsx";
import { makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { updateMetaDatasAsync } from 'slices/metaDatas/metaDatasSlice'

const StylesLarge = makeStyles({
  content: {
    flexGrow: 1,
  },
  layout: {
    display: 'flex',
  }
})

const Styles = makeStyles({
  content: {
    flexGrow: 1,
    marginTop: '85px'
  },
  layout: {
    display: 'flex',
  }
})

const DesktopLayout = (props) => {
  let classes;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateMetaDatasAsync())
  })

  const largeScreen = useMediaQuery('(min-width:1400px)');
  if (largeScreen) {
    classes = StylesLarge()
  } else {
    classes =  Styles()
  }

  return template({ props, classes });
}

export default DesktopLayout;
