const initialState = {
  name: "",
  address: "",
  city: "",
  state: "",
  zip: 0,
  image: "",
  mortgage: 0,
  rent: 0
};

export const STEP_ONE = "STEP_ONE";
export const STEP_TWO = "STEP_TWO";
export const STEP_THREE = "STEP_THREE";

export function stepOne(e) {
  const { name, value } = e.target;
  return {
    type: STEP_ONE,
    payload: value,
    name: name
  };
}
export function stepTwo(e) {
  const { name, value } = e.target;
  return {
    type: STEP_TWO,
    payload: value,
    name: name
  };

}
export function stepThree(e) {
  const { name, value } = e.target;
  return {
    type: STEP_THREE,
    payload: value,
    name: name
  };
}

export default function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case STEP_ONE:
      return { ...state, [action.name]: action.payload };
    case STEP_TWO:
      return { ...state, [action.name]: action.payload };
    case STEP_THREE:
      return { ...state, [action.name]: action.payload };
    default:
      return state;
      break;
  }
}
