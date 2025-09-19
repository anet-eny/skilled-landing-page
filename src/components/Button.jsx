export default function Button({ children, variant = "link" }) {
  const base = "text-preset-7 py-4 px-8 rounded-full";
  const variants = {
    link: "text-rose-400 hover:text-rose-300",
    black: "text-white bg-blue-950 hover:opacity-60",
    orange:
      "text-white bg-gradient-to-b from-orange-500 to-fuchsia-500 hover:opacity-60",
    purple:
      "text-white bg-gradient-to-b from-indigo-600 to-fuchsia-500 hover:opacity-60",
  };

  return <button className={`${base} ${variants[variant]}`}>{children}</button>;
}
