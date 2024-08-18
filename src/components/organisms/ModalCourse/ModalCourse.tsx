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

interface ICreateLesson {
  open: boolean;
  handleClose: () => void;
  isEdit?: boolean;
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

  const { course: { courseTitle, courses, selectedCourse } } = useAppSelector(state => state)

  const isEdit = !!courseTitle


  const { handleSubmit, reset, control } = useForm<Course>({
    defaultValues: isEdit ? selectedCourse : {
      title: "",
      description: "",
      modules: [],
    },
  });

  const onSubmit: SubmitHandler<Course> = (data: Course) => {
    if (isEdit) {
      dispatch(editCourse("Novo Curso"));
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

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} component="form" onSubmit={handleSubmit(onSubmit)}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {isEdit ? "Editar " : "Criar "} curso
        </Typography>
        <Input control={control} label="Titulo" name="title" required />
        <Input
          control={control}
          label="Descrição"
          name="description"
          required
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
            {isEdit ? "Editar " : "Criar"}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
