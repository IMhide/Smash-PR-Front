import { createSlice } from "@reduxjs/toolkit";
import updateMajorsAction from "./updateMajorsAction";
import updateMinorsAction from "./updateMinorsAction";
import getMajorCircuits from "lib/getMajorCircuits";

export const circuitsSlice = createSlice({
  name: "circuits",
  initialState: {
    majors: [],
  },
  reducers: {
    updateMajors: updateMajorsAction,
  },
});

export const { updateMajors } = circuitsSlice.actions;

export const updateCircuitsAsync = () => (dispatch) => {
  getMajorCircuits()
    .then((response) => {
      dispatch(updateMajors(response.data));
    })
    .catch((error) => {
      console.log("Something went wrong");
      console.log(error);
    });
};

export const selectCircuit = (state) => state.circuits;
export default circuitsSlice.reducer;
