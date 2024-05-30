import { useCallback, useEffect, useMemo, useState } from 'react';
import CoursePanel from '../../components/Course/CoursePanel';
import TagPanel from '../../components/Tags/TagPanel';
import classes from './Courses.module.scss';
import { CourseT } from './course.type';

const ALL_TOPICS = 'Все темы'

const Courses = () => {
  const [availableTags, setAvailableTags] = useState<string[]>([])
  const [chosenTag, setChosenTag] = useState(ALL_TOPICS)
  const [chosenCourses, setChosenCourses] = useState<CourseT[]>([])
  const [allCourses, setAllCourses] = useState<CourseT[]>([])

  const getCourses = async () => {
    try {
      const courses: CourseT[] = await fetch(`${import.meta.env.VITE_API_URL}/docs/courses.json`).then(data => data.json())

      const tags: string[] = Array.from(new Set(courses.reduce((acc, cur) => {
        return [...acc, ...cur.tags]
      }, [ALL_TOPICS])))

      setAllCourses(courses)
      setChosenCourses(courses)
      setAvailableTags(tags)
    } catch (e) {
      console.error(e);
    }
  }

  const filterCourses = useCallback((tag: string) => {
    if (tag === ALL_TOPICS) {
      setChosenTag(ALL_TOPICS)
      setChosenCourses(allCourses)
      return
    }

    setChosenTag(tag)
    setChosenCourses(allCourses.filter(course => course.tags.includes(tag)))
  },[allCourses])

  useEffect(() => {
    getCourses()
  }, [])

  return (
    <div className={classes.wrapper}>
      <TagPanel
        tags={useMemo(() => availableTags, [availableTags])}
        chosenTag={chosenTag}
        setChosenTags={filterCourses}
      />

      <CoursePanel courses={chosenCourses} />
    </div>
  );
};

export default Courses;