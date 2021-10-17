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

import { Box, CircularProgress } from "@material-ui/core";

const Ranking = () => {
  const classes = useStyle();

  const [displayedRanking, setDisplayedRanking] = useState(null);
  const [displayedStanding, setDisplayedStanding] = useState(null);

  const rankings = useSelector(selectRankings);
  const search = useSelector(selectSearch);
  const navigation = useSelector(selectNavigation);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(updateSearch(e.target.value));
  };

  const handlePlacement = () => {
    dispatch(togglePlacement());
  };

  // Navigation handler
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
  }, [navigation, rankings]);

  // Display & Filtring Stadings handler
  useEffect(() => {
    if (displayedRanking !== null) {
      const onGoingPlacement = search.placement
        ? displayedRanking.tmp_standing
        : displayedRanking.standing;

      if (search.value.length > 0)
        setDisplayedStanding(
          onGoingPlacement.filter((player) =>
            player.name.toLowerCase().includes(search.value.toLowerCase())
          )
        );
      else {
        setDisplayedStanding(onGoingPlacement);
      }
    }
  }, [search.value, displayedRanking, search.placement]);

  useEffect(() => {
    if (displayedRanking !== null)
      if (search.placement === true)
        setDisplayedStanding(displayedRanking.tmp_standing);
      else setDisplayedStanding(displayedRanking.standing);
  }, [displayedRanking, search.placement]);

  if (displayedRanking === null || displayedStanding === null) {
    return (
      <Box display="flex" alignItems="center" justifyContent="center">
        <CircularProgress />
      </Box>
    );
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
