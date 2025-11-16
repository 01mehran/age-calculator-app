function Age({ value, unit }) {
  return (
    <article className="small:text-7xl flex items-center gap-4 text-5xl font-extrabold italic">
      <span className="text-purple tracking-normal">
        {value || value === 0 ? value : "- - "}
      </span>
      <h1 className="text-black-500 tracking-tight">{unit}</h1>
    </article>
  );
}

export default Age;
