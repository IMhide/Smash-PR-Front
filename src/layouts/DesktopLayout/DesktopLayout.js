import useMediaQuery from '@material-ui/core/useMediaQuery';
import template from "./DesktopLayout.jsx";
import { makeStyles } from "@material-ui/core";

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


  const largeScreen = useMediaQuery('(min-width:1400px)');
  if (largeScreen) {
    classes = StylesLarge()
  } else {
    classes =  Styles()
  }

  return template({ props, classes });
}

export default DesktopLayout;
