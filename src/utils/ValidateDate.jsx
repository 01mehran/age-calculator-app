const ValidateDate = ({ day, month, year, dispatch }) => {
  //   Get current year;
  const currentYear = new Date().getFullYear();

  if (!day) {
    dispatch({
      type: "input/empty",
      payload: { name: "dayError", message: "This field is required" },
    });
  } else if (day < 1 || day > 31) {
    dispatch({
      type: "input/empty",
      payload: { name: "dayError", message: "Must be a valid day" },
    });
  }
  // Month;
  if (!month) {
    dispatch({
      type: "input/empty",
      payload: { name: "monthError", message: "This field is required" },
    });
  } else if (month < 1 || month > 12) {
    dispatch({
      type: "input/empty",
      payload: { name: "monthError", message: "Must be a valid month" },
    });
  }

  // Year;
  if (!year) {
    dispatch({
      type: "input/empty",
      payload: { name: "yearError", message: "This field is required" },
    });
  } else if (year < 1900) {
    dispatch({
      type: "input/empty",
      payload: { name: "yearError", message: "Must be greater 1900" },
    });
  } else if (year > currentYear) {
    dispatch({
      type: "input/empty",
      payload: { name: "yearError", message: "Must be in the past" },
    });
  }
};

export default ValidateDate;
