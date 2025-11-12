// Hooks;
import Input from "../components/Input";
import arrowIcon from "../assets/images/icon-arrow.svg";

function AgeCalculatorBox() {
  return (
    <div className="flex h-dvh items-center justify-center">
      <section className="small:pl-8 mx-2 h-[400px] w-full max-w-152 rounded-2xl rounded-br-[5rem] bg-white px-4 py-6 shadow-md">
        {/* Input fields */}
        <form className="mb-12 flex items-center space-x-5">
          <Input label="day" placeholder="DD" />
          <Input label="month" placeholder="MM" />
          <Input label="year" placeholder="YYYY" />
        </form>

        {/* Icon arrow */}
        <div className="bg-primary-100 small:mr-6 relative h-px">
          <img
            src={arrowIcon}
            alt="icon arrow"
            className="bg-purple small:translate-x-0 small:left-auto small:right-0 small:w-16 small:p-3 hover:bg-black-500 absolute left-1/2 aspect-square w-14 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full p-2 transition-all duration-300 active:translate-y-px"
          />
        </div>
      </section>
    </div>
  );
}

export default AgeCalculatorBox;
