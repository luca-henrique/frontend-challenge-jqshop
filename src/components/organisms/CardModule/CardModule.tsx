import { Box, IconButton, Typography } from "@mui/material";
import { EditIcon, PlusIcon, TrashIcon } from "../../atoms/Icons/Icons";
import { CardLesson } from "../CardLesson/CardLesson";
import { changeVisibilityModalCreateLesson, changeVisibilityModalEditLesson, changeVisibilityModalEditModule, deleteLesson, deleteModuleByCourse } from "../../../store/reducer/course/actions";
import { useAppDispatch, useAppSelector } from "../../../hook/useStore";
import { Module } from "../../../@types/module";


interface ICardModule extends Module {
  courseId: string
}

export const CardModule = ({ title, id, description, lessons, courseId }: ICardModule) => {


  const dispatch = useAppDispatch()

  const handleDeleteLesson = (
    lessonId: string
  ) => {
    dispatch(deleteLesson({ courseId, moduleId: id, lessonId }));
  };

  const deleteModule = (courseTitle: string, moduleId: string) => {
    dispatch(deleteModuleByCourse({ courseId, moduleId }));
  };

  const editLesson = (lessonId: string) => {
    dispatch(changeVisibilityModalEditLesson({ courseId, moduleId: id, lessonId }));
  };

  const handleAddNewLesson = (
    moduleId: string,
  ) => {
    dispatch(changeVisibilityModalCreateLesson({ courseId, moduleId }))
  }

  const handleOpenModalEditModule = (moduleId: string) => {
    dispatch(changeVisibilityModalEditModule({ courseId, moduleId }))
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
          <IconButton size="small" onClick={() => handleAddNewLesson(id)}>
            <PlusIcon />
          </IconButton>
          <IconButton size="small" onClick={() => handleOpenModalEditModule(id)}>
            <EditIcon />
          </IconButton>
          <IconButton
            onClick={() => deleteModule(courseId, id)}
            size="small"
          >
            <TrashIcon />
          </IconButton>
        </Box>
      </Box>
      <Typography>{description}</Typography>
      {lessons?.map((lesson) => (
        <CardLesson {...lesson} deleteLesson={handleDeleteLesson} editLesson={editLesson} key={lesson.id} />
      ))}
    </>
  );
}