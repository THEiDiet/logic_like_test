import { FC } from 'react';
import { CourseT } from '../../pages/Courses/course.type';
import classes from './Courses.module.scss';


type Props = {
  course: CourseT
}

const Course: FC<Props> = ({ course }) => {
  return (
    <div className={classes.item}>
      <div
        className={classes.item__img}
        style={{ backgroundColor: course.bgColor }}
      >
        <img
          src={course.image}
          alt={course.name}

        />
      </div>
      <div data-testid="course-item" className={classes.item__title}>{course.name}</div>
    </div>
  );
};

export default Course;