import { COUNT } from "../actions/actionTypes";
export default function reducer(
  state = {
    count: 0,
  },
  action
) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case COUNT.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case COUNT.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
  }
  return state;
}
