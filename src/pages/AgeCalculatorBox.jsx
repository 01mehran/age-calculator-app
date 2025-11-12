// Hooks;
import Input from "../components/Input";

function AgeCalculatorBox() {
  return (
    <div className="flex h-dvh items-center justify-center">
      <section className="small:px-4 mx-2 w-full max-w-152 rounded-2xl rounded-br-[5rem] bg-white px-1 py-6 shadow-md">
        {/* Input fields */}
        <form className="m-4 flex items-center space-x-5">
          <Input label="day" placeholder="DD" />
          <Input label="month" placeholder="MM" />
          <Input label="year" placeholder="YYYY" />
        </form>
      </section>
    </div>
  );
}

export default AgeCalculatorBox;
