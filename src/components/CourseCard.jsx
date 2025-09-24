import Button from "./Button";

export default function CourseCard({ icon, title, description }) {
  return (
    <div className="px-8 pt-18 pb-10">
      <div className="w-14 rounded-full bg-gradient-to-b from-orange-500 to-fuchsia-500">
        {icon}
      </div>
      <h3 className="text-preset-4">{title}</h3>
      <p className="text-preset-5 my-6">{description}</p>
      <Button />
    </div>
  );
}
