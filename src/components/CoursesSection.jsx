import coursesData from "../data/coursesData";
import CourseCard from "./CourseCard";
import HighlightCard from "./HighlightCard";

export default function CoursesSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <HighlightCard />
        {coursesData.map((course) => (
          <CourseCard
            key={course.id}
            title={course.title}
            description={course.description}
            icon={course.icon}
          />
        ))}
      </div>
    </section>
  );
}
