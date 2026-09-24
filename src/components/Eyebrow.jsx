export default function Eyebrow({ children }) {
  return (
    <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.24em] text-[#FD3DB5]">
      <span className="h-px w-8 bg-[#FD3DB5]" />
      {children}
    </p>
  );
}
