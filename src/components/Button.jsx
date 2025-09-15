export default function Button({ children, variant = "black" }) {
  const base = "text-white text-preset-7 py-4 px-8 rounded-full";
  const variants = {
    black: "bg-blue-950 hover:opacity-60",
    orange: "bg-gradient-to-b from-orange-500 to-fuchsia-500 hover:opacity-60",
    purple: "bg-gradient-to-b from-indigo-600 to-fuchsia-500 hover:opacity-60",
  };

  return <button className={`${base} ${variants[variant]}`}>{children}</button>;
}
