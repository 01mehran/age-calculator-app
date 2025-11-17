// Libraries;
import { useReducer } from "react";

// Components;
import Age from "@/components/Age";
import Input from "@/components/Input";

// Images;
import arrowIcon from "@images/icon-arrow.svg";
import ValidateDate from "@/utils/ValidateDate";

import { initialState, ageReducer } from "@/components/AgeReducer";

function AgeCalculatorBox() {
  const [
    {
      day,
      month,
      year,
      dayError,
      monthError,
      yearError,
      ageYear,
      ageMonth,
      ageDay,
    },
    dispatch,
  ] = useReducer(ageReducer, initialState);

  //Get dates;
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth() + 1;
  const currentDay = date.getDate();

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

  // Get the number of days in the previous month-(29/30/31)
  function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }

  // َ Handle age calucalte;
  function handleAgeCalculate(e) {
    e.preventDefault();

    // Returns the last day of the previous month;
    const getDaysInSelectedMonth = getDaysInMonth(year, month);

    if (day > getDaysInSelectedMonth) {
      dispatch({
        type: "input/empty",
        payload: { name: "dayError", message: "Must be a valid day" },
      });
      return;
    }

    const isValid = ValidateDate({ day, month, year, dispatch, currentYear });
    if (!isValid) return;

    let calculateYear = currentYear - year;
    let calculateMonth = currentMonth - month;
    let calculateDay = currentDay - day;

    // Borrow day if needed;
    if (calculateDay < 0) {
      let prevMonth = currentMonth - 1;
      let prevYear = currentYear;

      if (prevMonth === 0) {
        prevMonth = 12;
        prevYear -= 1;
      }

      const daysInPreviousMonth = getDaysInMonth(prevYear, prevMonth);
      calculateDay += daysInPreviousMonth;
      calculateMonth -= 1;
    }

    if (calculateMonth < 0) {
      calculateMonth += 12;
      calculateYear -= 1;
    }

    dispatch({ type: "age/setYear", payload: calculateYear });
    dispatch({ type: "age/setMonth", payload: calculateMonth });
    dispatch({ type: "age/setDay", payload: calculateDay });

    // Empty inputs;
    dispatch({ type: "input/reset" });
  }

  return (
    <div className="flex h-dvh items-center justify-center">
      <section className="small:pl-8 mx-3 w-full max-w-152 rounded-2xl rounded-br-[5rem] bg-white/80 px-4 py-8 shadow-sm">
        {/* Input fields */}
        <form
          className="small:space-x-5 mb-12 flex items-center space-x-2"
          onSubmit={handleAgeCalculate}
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
            onClick={handleAgeCalculate}
          />
        </div>

        {/* Age calculation result*/}
        <div className="flex flex-col space-y-3">
          <Age unit="years" value={ageYear} />
          <Age unit="months" value={ageMonth} />
          <Age unit="days" value={ageDay} />
        </div>
      </section>
    </div>
  );
}

export default AgeCalculatorBox;
