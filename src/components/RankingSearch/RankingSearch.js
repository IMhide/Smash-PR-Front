import template from "./RankingSearch.jsx";
import useStyle from "./RankingSearch.style"

const RankingSearch = ({placement, search, handleSearch, handlePlacement}) => {
  const classes = useStyle()
  return template({ classes, search, handleSearch, handlePlacement, placement });
}

export default RankingSearch;
