import Button from "./Button";

export default function CourseCard({ icon, title, description }) {
  return (
    <div className="px-8 pt-18 pb-10">
      <div className="w-14 h-14 rounded-full bg-gradient-to-b from-gradient1-start to-gradient1-end flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-preset-4 lg:text-2xl">{title}</h3>
      <p className="text-preset-5 text-gray-500 my-6">{description}</p>
      <Button>Get Started</Button>
    </div>
  );
}
