import { createSelector } from "reselect";

const selectDirectory = (state) => state.directory;

export const directorySections = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);
