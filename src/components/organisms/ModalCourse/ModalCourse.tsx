import { Box, Modal, Typography } from "@mui/material";
import { Button } from "../../atoms/Button/Button";
import { Input } from "../../atoms/Input/Input";
import { Course } from "../../../@types/course";
import { useAppDispatch, useAppSelector } from "../../../hook/useStore";
import {
  createCourse,
  editCourse,
} from "../../../store/reducer/course/actions";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect } from "react";
import { InputTextArea } from "../../atoms/InputTextArea/InputTextArea";

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

export const ModalCourse = ({ open, handleClose }: ICreateLesson) => {
  const dispatch = useAppDispatch();

  const { course: { courseId, selectedCourse, openModalEditCourse } } = useAppSelector(state => state)
  const isEditCourse = courseId && openModalEditCourse

  const defaultValues = {
    title: "",
    description: "",
    modules: [],
  }

  const { handleSubmit, reset, control } = useForm<Course>({
    defaultValues,
  });

  const onSubmit: SubmitHandler<Course> = (data: Course) => {
    if (isEditCourse) {
      dispatch(editCourse({ courseId, updatedCourse: data }));
    } else {
      dispatch(createCourse(data));
    }
    reset();
    handleClose();
  };

  const onClose = () => {
    reset();
    handleClose();
  }

  useEffect(() => {
    if (isEditCourse) {
      reset(selectedCourse)
    } else {
      reset(defaultValues)
    }
  }, [isEditCourse, selectedCourse, reset])


  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} component="form" onSubmit={handleSubmit(onSubmit)}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {isEditCourse ? "Editar " : "Criar "} curso
        </Typography>
        <Input control={control} label="Titulo" name="title" required />
        <InputTextArea
          control={control}
          label="Descrição"
          name="description"
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
            {isEditCourse ? "Editar " : "Criar"}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
