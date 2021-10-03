import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  updateSearch,
  togglePlacement,
  selectSearch,
} from "slices/search/searchSlice";
import template from "./Ranking.jsx";
import useStyle from "./Ranking.style";
import {
  selectRankings,
  updateRankingsAsync,
} from "slices/rankings/rankingsSlice";

const Ranking = () => {
  const { id } = useParams();
  const classes = useStyle();

  const rankings = useSelector(selectRankings);
  const search = useSelector(selectSearch);

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(updateSearch(e.target.value));
  };

  const handlePlacement = () => {
    dispatch(togglePlacement());
  };

  // let displayedRanking = rankings.current.standing;

  let displayedRanking = 12;

  if (search.value.length > 0)
    displayedRanking = rankings.current.standing.filter((player) =>
      player.name.toLowerCase().includes(search.value)
    );

  return "";

  return template({
    classes,
    currentCircuit: rankings.current,
    displayedRanking,
    handlePlacement,
    handleSearch,
  });
};

export default Ranking;
