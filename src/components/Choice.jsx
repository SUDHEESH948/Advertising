export default function Choice({ label, options, value, set }) {
  return (
    <div>
      <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[.17em] text-[#111820]/75">
        {label}
      </p>
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {options.map((x) => (
          <button
            type="button"
            key={x}
            onClick={() => set(x)}
            className={`rounded-full border px-3 sm:px-4 py-2 text-[10px] font-bold uppercase tracking-[.08em] sm:tracking-[.1em] transition active:scale-95 cursor-pointer ${
              value === x
                ? "border-[#111820] bg-[#111820] text-white shadow-xs"
                : "border-black/15 bg-white text-black/70 hover:border-[#FD3DB5] hover:text-[#FD3DB5]"
            }`}
          >
            {x}
          </button>
        ))}
      </div>
    </div>
  );
}
