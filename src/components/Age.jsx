function Age({ value, unit }) {
  return (
    <article className="small:text-7xl flex items-center gap-4 text-5xl font-bold max-[322px]:text-green-400">
      <span className="text-purple tracking-normal">
        {value || value === 0 ? value : "- - "}
      </span>
      <h1 className="text-black-500 tracking-tight">{unit}</h1>
    </article>
  );
}

export default Age;
