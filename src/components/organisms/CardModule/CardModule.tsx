import { Box, IconButton, Typography } from "@mui/material";
import { EditIcon, PlusIcon, TrashIcon } from "../../atoms/Icons/Icons";
import { CardLesson } from "../CardLesson/CardLesson";
import { changeVisibilityModalCreateLesson, changeVisibilityModalEditLesson, changeVisibilityModalEditModule, deleteLesson, deleteModuleByCourse } from "../../../store/reducer/course/actions";
import { useAppDispatch } from "../../../hook/useStore";
import { Module } from "../../../@types/module";


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

  const editModule = (lessonId: string) => {
    dispatch(changeVisibilityModalEditLesson({ courseTitle, moduleId: id, lessonId }));
  };

  const handleAddNewLesson = (
    moduleId: string,
  ) => {
    dispatch(changeVisibilityModalCreateLesson({ courseTitle, moduleId }))
  }

  const handleOpenModalEditModule = (moduleId: string) => {
    dispatch(changeVisibilityModalEditModule({ courseTitle, moduleId }))
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
            onClick={() => deleteModule(courseTitle, id)}
            size="small"
          >
            <TrashIcon />
          </IconButton>
        </Box>
      </Box>
      <Typography>{description}</Typography>
      {lessons?.map((lesson) => (
        <CardLesson {...lesson} deleteLesson={handleDeleteLesson} editLesson={editModule} key={lesson.id} />
      ))}
    </>
  );
}