import template from "./RankingSearch.jsx";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  searchInput: {
    width: '100%'
  }
})

const RankingSearch = ({placement, search, handleSearch, handlePlacement}) => {
  const classes = useStyle()
  return template({ classes, search, handleSearch, handlePlacement, placement });
}

export default RankingSearch;
