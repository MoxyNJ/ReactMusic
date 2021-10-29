import { Map } from "immutable";

const defaultState = Map({
  currentSong: {},
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case 0:
      return 1;
    default:
      return state;
  }
}
