export default function Info({ label, children }) {
  return (
    <div>
      <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#FD3DB5]">
        {label}
      </p>
      <div className="mt-1 text-sm leading-6 text-[#111820]">{children}</div>
    </div>
  );
}
