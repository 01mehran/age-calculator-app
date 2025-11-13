// Libraries;
import { useReducer } from "react";

// Components;
import Age from "@/components/Age";
import Input from "@/components/Input";

// Images;
import arrowIcon from "@images/icon-arrow.svg";

const initialState = {
  day: "",
  month: "",
  year: "",
  dayError: "",
  monthError: "",
  yearError: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "input/change":
      return { ...state, [action.payload.name]: action.payload.value };
    case "input/empty":
      return { ...state, [action.payload.name]: action.payload.message };
    default:
      return state;
  }
}

function AgeCalculatorBox() {
  const [{ day, month, year, dayError, monthError, yearError }, dispatch] =
    useReducer(reducer, initialState);

  // Update input fields;
  function handleInputChange(e) {
    dispatch({
      type: "input/change",
      payload: {
        name: e.target.name,
        value: e.target.value,
      },
    });

    // Delete error when user start typing;
    dispatch({
      type: "input/empty",
      payload: { name: `${e.target.name}Error`, message: "" },
    });
  }

  // Sybmit;
  function handleSubmit(e) {
    e.preventDefault();

    const currentDate = new Date().getFullYear();
    console.log(currentDate);
    // Day;
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
    } else if (year > currentDate) {
      dispatch({
        type: "input/empty",
        payload: { name: "yearError", message: "Must be in the past" },
      });
    }
  }

  return (
    <div className="flex h-dvh items-center justify-center">
      <section className="small:pl-8 mx-2 w-full max-w-152 rounded-2xl rounded-br-[5rem] bg-white px-4 py-8 shadow-md">
        {/* Input fields */}
        <form
          className="small:space-x-5 mb-12 flex items-center space-x-2"
          onSubmit={handleSubmit}
        >
          <Input
            label="day"
            placeholder="DD"
            value={day}
            onChange={handleInputChange}
            name="day"
            error={dayError}
          />
          <Input
            label="month"
            placeholder="MM"
            value={month}
            onChange={handleInputChange}
            name="month"
            error={monthError}
          />
          <Input
            label="year"
            placeholder="YYYY"
            value={year}
            onChange={handleInputChange}
            name="year"
            error={yearError}
          />
          <input type="submit" className="hidden" />
        </form>

        {/* Icon arrow */}
        <div className="bg-primary-100 small:mr-6 relative mb-14 h-px">
          <img
            src={arrowIcon}
            alt="icon arrow"
            className="bg-purple small:translate-x-0 small:left-auto small:right-0 small:w-16 small:p-3 hover:bg-black-500 absolute left-1/2 aspect-square w-14 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full p-3 transition-all duration-300 active:translate-y-px"
            onClick={handleSubmit}
          />
        </div>

        {/* Age calculation result*/}
        <div className="flex flex-col space-y-3">
          <Age unit="years" />
          <Age unit="months" />
          <Age unit="days" />
        </div>
      </section>
    </div>
  );
}

export default AgeCalculatorBox;
