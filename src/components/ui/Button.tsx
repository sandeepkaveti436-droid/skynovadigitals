export default function Button({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button
      className="
      bg-[#F0B400]
      text-black
      px-6
      py-3
      rounded-full
      font-semibold
      transition-all
      hover:scale-105
      "
    >
      {children}
    </button>
  );
}