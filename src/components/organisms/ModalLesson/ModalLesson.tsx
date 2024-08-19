import { Box, Modal, Typography } from "@mui/material";
import { Button } from "../../atoms/Button/Button";
import { Input } from "../../atoms/Input/Input";
import { useAppDispatch, useAppSelector } from "../../../hook/useStore";
import {
  addLessonByModule,

  editLesson,
} from "../../../store/reducer/course/actions";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect } from "react";
import { InputTextArea } from "../../atoms/InputTextArea/InputTextArea";
import { Lesson } from "../../../@types/lesson";

interface ICreateLesson {
  open: boolean;
  handleClose: () => void;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 550,
  bgcolor: "#fff",
  p: 3,
  borderRadius: 1,
  gap: 2,
  display: "flex",
  flexDirection: "column",
};

export const ModalLesson = ({ open, handleClose }: ICreateLesson) => {
  const dispatch = useAppDispatch();

  const { course: { courseId, selectedLesson, openModalCreateLesson, openModalEditLesson, moduleId } } = useAppSelector(state => state)


  const isEditModule = courseId && openModalEditLesson

  const defaultValues = {
    title: "",
    description: "",
    content: "",
  }

  const { handleSubmit, reset, control } = useForm<Lesson>({
    defaultValues,
  });



  const onSubmit: SubmitHandler<Lesson> = (data: Lesson) => {
    if (isEditModule) {
      dispatch(editLesson({ courseId, moduleId, lessonId: selectedLesson.id, updatedModule: data }));
    } else {
      dispatch(addLessonByModule({ courseId, moduleId, lesson: data }));
    }
    reset();
    handleClose();
  };

  const onClose = () => {
    reset();
    handleClose();
  }

  useEffect(() => {
    if (isEditModule) {
      reset(selectedLesson)
    } else {
      reset(defaultValues)
    }
  }, [isEditModule, reset, openModalCreateLesson])


  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} component="form" onSubmit={handleSubmit(onSubmit)}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {isEditModule ? "Editar " : "Criar "} lição
        </Typography>
        <Input control={control} label="Titulo" name="title" required />
        <InputTextArea control={control} minRows={2} label="Descrição" name="description" required />
        <InputTextArea
          control={control}
          label="Conteudo"
          name="content"
          required
          minRows={6}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "end",
            gap: 1,
            marginTop: "8px",
          }}
        >
          <Button variant="outlined" onClick={onClose}>
            Cancelar
          </Button>
          <Button variant="contained" type="submit">
            {isEditModule ? "Editar " : "Criar"}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
