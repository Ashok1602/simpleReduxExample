import { DEMO_API_CONST } from "../actions/actionTypes";
export default function reducer(
  state = {
    demoApiData: [],
  },
  action
) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case DEMO_API_CONST.REQUEST:
      return {
        ...state,
        demoApiData: [],
        isReuqest: true,
      };
    case DEMO_API_CONST.SUCCESS:
      return {
        ...state,
        demoApiData: action.payload.data,
        isRequest: false,
      };
    case DEMO_API_CONST.FAILURE:
      return {
        ...state,
        demoApiData: [],
        isRequest: false,
      };
  }
  return state;
}
