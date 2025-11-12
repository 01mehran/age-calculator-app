function Age({ value = " - -", unit }) {
  return (
    <article className="small:text-7xl flex items-center gap-4 text-5xl max-[322px]:text-green-400 font-bold">
      <span className="text-purple tracking-normal"> {value} </span>
      <h1 className="text-black-500 tracking-tight">{unit}</h1>
    </article>
  );
}

export default Age;
