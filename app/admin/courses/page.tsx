import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function CoursesPage() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="">Your Courses</h1>
        <Link className={buttonVariants()} href="/admin/courses/create">
          Create Courses
        </Link>
      </div>
      <div className="">
        <h1 className="">Here you will see all of the courses</h1>
      </div>
    </>
  );
}
