import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import CoursePanel from './CoursePanel';
import { CourseT } from '../../pages/Courses/course.type';
import Course from './Course';

const mockCourse:CourseT = {
  name: "Шахматы",
  id: "course:1",
  image: "https://s3.logiclike.com/s3/logic-training/side-courses/files/MkHAmnYuhotzMc91WydqA7dkFrVPO3KoclrIJX2O.png",
  bgColor: "#FF9966",
  tags: [
      "Головоломки",
      "Шахматы",
      "Логика и мышление"
  ]
}

const mockCourses:CourseT[] = [
  mockCourse,
  {
      name: "Собаки",
      id: "course:18",
      image: "https://s3.logiclike.com/s3/logic-training/side-courses/files/SipSNNV06bIX5xx0IN8TG3vRi7dy9wImuYWe2e8Q.png",
      bgColor: "#A0D982",
      tags: [
          "Окружающий мир"
      ]
  },
  {
      name: "Загадки-обманки",
      id: "course:474",
      image: "https://s3.logiclike.com/s3/logic-training/side-courses/files/47Ytuui6AiAMrsHX1saHcFwK3QXKxtNRs4kgXUP5.png",
      bgColor: "#E055A6",
      tags: [
          "Загадки",
          "Логика и мышление"
      ]
  }
]

describe('Courses Panel', () => {
  it('children amount should be equal 3', () => {
    const { getByTestId, unmount } = render(<CoursePanel courses={mockCourses} />);

    expect(
      getByTestId('course-panel').children.length
    ).toBe(3);
    unmount();
  });

  it("component should render list of courses", () => {
    const { getByTestId, unmount } = render(<Course course={mockCourse} />);

    expect(getByTestId('course-item').innerHTML).toEqual(mockCourse.name);
    unmount()
  });
})