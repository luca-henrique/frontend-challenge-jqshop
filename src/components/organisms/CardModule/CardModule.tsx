import { Box, IconButton, Typography } from "@mui/material";
import { EditIcon, PlusIcon, TrashIcon } from "../../atoms/Icons/Icons";
import { CardLesson } from "../CardLesson/CardLesson";
import { addLessonByModule, deleteLesson, deleteModuleByCourse } from "../../../store/reducer/course/actions";
import { useAppDispatch } from "../../../hook/useStore";
import { Module } from "../../../@types/module";
import { Lesson } from "../../../@types/lesson";
import { uuidv4 } from "../../../pages/CreateCourse/CreateCourse";

interface ICardModule extends Module {
  courseTitle: string
}

export const CardModule = ({ courseTitle, title, id, description, lessons }: ICardModule) => {

  const dispatch = useAppDispatch()


  const handleDeleteLesson = (
    lessonId: string
  ) => {
    dispatch(deleteLesson({ courseTitle, moduleId: id, lessonId }));
  };

  const deleteModule = (courseTitle: string, moduleId: string) => {
    dispatch(deleteModuleByCourse({ courseTitle, moduleId }));
  };

  const handleAddNewLesson = (
    courseTitle: string,
    moduleId: string,
  ) => {

    const lesson: Lesson = { title: "Modulo de exemplo", description: "123123", id: uuidv4(), content: "" }
    dispatch(addLessonByModule({ courseTitle, moduleId, lesson }))
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6"># {title}</Typography>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <IconButton size="small" onClick={() => handleAddNewLesson(title, id)}>
            <PlusIcon />
          </IconButton>
          <IconButton size="small">
            <EditIcon />
          </IconButton>
          <IconButton
            onClick={() => deleteModule(courseTitle, id)}
            size="small"
          >
            <TrashIcon />
          </IconButton>
        </Box>
      </Box>
      {lessons?.map((lesson) => (
        <CardLesson {...lesson} deleteLesson={handleDeleteLesson} key={lesson.id} />
      ))}
    </>
  );
}