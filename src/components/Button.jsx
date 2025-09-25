export default function Button({ children, variant = "link" }) {
  const base = "text-preset-7 rounded-full";
  const variants = {
    link: "text-rose-400 hover:text-rose-300",
    black: "py-4 px-8 text-white bg-blue-950 hover:opacity-60",
    orange:
      "py-4 px-8 text-white bg-gradient-to-b from-gradient1-start to-gradient1-end hover:opacity-60",
    purple:
      "py-4 px-8 text-white bg-gradient-to-b from-gradient2-start to-gradient2-end hover:opacity-60",
  };

  return <button className={`${base} ${variants[variant]}`}>{children}</button>;
}
