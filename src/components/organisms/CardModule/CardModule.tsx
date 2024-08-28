import { Box, IconButton, Typography } from "@mui/material";
import { EditIcon, PlusIcon, TrashIcon } from "../../atoms/Icons/Icons";
import { changeVisibilityModalCreateLesson, changeVisibilityModalEditLesson, changeVisibilityModalEditModule, deleteLesson, deleteModuleByCourse } from "../../../store/reducer/course/actions";
import { useAppDispatch } from "../../../hook/useStore";
import { Module } from "../../../@types/module";
import { Button } from "../../atoms/Button/Button";
import { LessonList } from "../LessonList/LessonList";
import { useParams } from "react-router-dom";


interface ICardModule extends Module {

}

export const CardModule = ({ title, id, description, lessons }: ICardModule) => {
  const dispatch = useAppDispatch();
  const { courseId } = useParams();

  const handleAddNewLesson = () => {
    dispatch(changeVisibilityModalCreateLesson({ courseId, moduleId: id }));
  };


  const handleDeleteLesson = (lessonId: string) => {
    dispatch(
      deleteLesson({ courseId, moduleId: id, lessonId })
    );
  };

  const handleEditLesson = (lessonId: string) => {
    dispatch(
      changeVisibilityModalEditLesson({
        courseId,
        moduleId: id,
        lessonId,
      })
    );
  };

  const handleOpenModalEditModule = () => {
    dispatch(changeVisibilityModalEditModule({ courseId, moduleId: id }));
  };

  const handleDeleteModule = () => {
    dispatch(deleteModuleByCourse({ courseId, moduleId: id }));
  };

  return (
    <Box
      sx={{
        border: "1px solid rgb(0 0 0 / 0.08)",
        borderRadius: "0.5rem",
        padding: 3,
      }}
      key={id}
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
            onClick={() => handleOpenModalEditModule()}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            size="small"
            sx={{
              border: "1px solid rgb(0 0 0 / 0.08)",
              borderRadius: "0.5rem",
            }}
            onClick={() => handleDeleteModule()}
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
          onClick={() => handleAddNewLesson()}
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