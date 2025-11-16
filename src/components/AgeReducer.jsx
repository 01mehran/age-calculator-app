export const initialState = {
  day: "",
  month: "",
  year: "",
  dayError: "",
  monthError: "",
  yearError: "",
  ageYear: null,
  ageMonth: null,
  ageDay: null,
};

export function ageReducer(state, action) {
  switch (action.type) {
    case "input/change":
      return { ...state, [action.payload.name]: action.payload.value };
    case "input/empty":
      return { ...state, [action.payload.name]: action.payload.message };
    case "age/setYear":
      return { ...state, ageYear: action.payload };
    case "age/setMonth":
      return { ...state, ageMonth: action.payload };
    case "age/setDay":
      return { ...state, ageDay: action.payload };
    case "input/reset":
      return { ...state, day: "", month: "", year: "" };
    default:
      return state;
  }
}
