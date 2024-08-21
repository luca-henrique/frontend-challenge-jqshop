import { Box, IconButton, Typography } from "@mui/material";
import { EditIcon, PlusIcon, TrashIcon } from "../../atoms/Icons/Icons";
import { CardLesson } from "../CardLesson/CardLesson";
import { changeVisibilityModalCreateLesson, changeVisibilityModalEditLesson, changeVisibilityModalEditModule, deleteLesson, deleteModuleByCourse } from "../../../store/reducer/course/actions";
import { useAppDispatch, useAppSelector } from "../../../hook/useStore";
import { Module } from "../../../@types/module";
import { Button } from "../../atoms/Button/Button";
import { LessonList } from "../LessonList/LessonList";
import { useParams } from "react-router-dom";


interface ICardModule extends Module {

}

export const CardModule = ({ title, id, description, lessons }: ICardModule) => {
  const dispatch = useAppDispatch();
  const { courseId } = useParams();

  const handleAddNewLesson = (moduleId: string) => {
    dispatch(changeVisibilityModalCreateLesson({ courseId, moduleId }));
  };


  const handleDeleteLesson = (lessonId: string) => {
    dispatch(
      deleteLesson({ courseId, moduleId: module.id, lessonId })
    );
  };

  const handleEditLesson = (lessonId: string) => {
    dispatch(
      changeVisibilityModalEditLesson({
        courseId,
        moduleId: module.id,
        lessonId,
      })
    );
  };

  const handleOpenModalEditModule = (moduleId: string) => {
    dispatch(changeVisibilityModalEditModule({ courseId, moduleId }));
  };

  const handleDeleteModule = (moduleId: string) => {
    dispatch(deleteModuleByCourse({ courseId, moduleId }));
  };

  return (
    <Box
      sx={{
        border: "1px solid rgb(0 0 0 / 0.08)",
        borderRadius: "0.5rem",
        padding: 3,
      }}
      key={module.id}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h5"># {title}</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 1,
          }}
        >
          <IconButton
            size="small"
            sx={{
              border: "1px solid rgb(0 0 0 / 0.08)",
              borderRadius: "0.5rem",
            }}
            onClick={() => handleOpenModalEditModule(module.id)}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            size="small"
            sx={{
              border: "1px solid rgb(0 0 0 / 0.08)",
              borderRadius: "0.5rem",
            }}
            onClick={() => handleDeleteModule(module.id)}
          >
            <TrashIcon />
          </IconButton>
        </Box>
      </Box>
      <Typography variant="subtitle2">
        {description}
      </Typography>

      <Box
        sx={{
          mt: 2,
          mb: 2,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h5">Lições</Typography>
        <Button
          variant="contained"
          startIcon={<PlusIcon />}
          onClick={() => handleAddNewLesson(module.id)}
        >
          Adicionar nova lição
        </Button>
      </Box>

      <LessonList
        handleDeleteLesson={handleDeleteLesson}
        handleEditLesson={handleEditLesson}
        lessons={lessons}
      />
    </Box>
  );
}