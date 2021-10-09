import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import template from "./Ranking.jsx";
import useStyle from "./Ranking.style";
import { selectNavigation } from "slices/navigation/navagationSlice.js";

import {
  updateSearch,
  togglePlacement,
  selectSearch,
} from "slices/search/searchSlice";
import { selectRankings } from "slices/rankings/rankingsSlice.js";

import WaitingCircle from "components/WaitingCircle/WaitingCircle.js";

const Ranking = () => {
  const classes = useStyle();

  const [displayedRanking, setDisplayedRanking] = useState(null);

  const rankings = useSelector(selectRankings);
  const search = useSelector(selectSearch);
  const navigation = useSelector(selectNavigation);
  const dispatch = useDispatch();

  let displayedStanding = [];

  const handleSearch = (e) => {
    dispatch(updateSearch(e.target.value));
  };

  const handlePlacement = () => {
    dispatch(togglePlacement());
  };

  useEffect(() => {
    if (navigation.ranking_id === null) {
      setDisplayedRanking(rankings.current);
    } else {
      setDisplayedRanking(
        rankings.previous.find(
          (ranking) => navigation.ranking_id === ranking.id
        )
      );
    }
    console.log("Effect called");
  }, [navigation, rankings]);

  if (displayedRanking !== null) {
    displayedStanding = displayedRanking.standing;
  }
  console.log(displayedRanking);
  console.log(displayedStanding);

  if (displayedRanking === null || displayedStanding === null) {
    return <WaitingCircle />;
  } else {
    return template({
      classes,
      displayedRanking,
      displayedStanding,
      handlePlacement,
      handleSearch,
    });
  }
};

export default Ranking;
