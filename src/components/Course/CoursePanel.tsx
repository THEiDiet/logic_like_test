import { FC } from 'react';
import { CourseT } from '../../pages/Courses/course.type';
import Course from './Course';
import classes from './Courses.module.scss'

type Props = {
  courses: CourseT[]
}

const CoursePanel: FC<Props> = ({ courses }) => {
  return (
    <div>
      <div className={classes.panel} data-testid="course-panel">
      {courses.map(course => <Course key={course.id} course={course} />)}
    </div>
    </div>
  );
};

export default CoursePanel;