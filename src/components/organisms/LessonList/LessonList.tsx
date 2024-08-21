import { Box } from "@mui/material";
import { Lesson } from "../../../@types/lesson";
import { CardLesson } from "../CardLesson/CardLesson";

interface ILessonList {
  lessons?: Lesson[];
  handleEditLesson: (lessonId: string) => void;
  handleDeleteLesson: (lessonId: string) => void;
}

export const LessonList = ({
  lessons = [],
  handleEditLesson,
  handleDeleteLesson,
}: ILessonList) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        mt: 1,
      }}
    >
      {lessons.map((lesson) => {
        return (
          <CardLesson
            key={lesson.id}
            handleDeleteLesson={handleEditLesson}
            handleEditLesson={handleEditLesson}
            {...lesson}
          />
        );
      })}
    </Box>
  );
};
