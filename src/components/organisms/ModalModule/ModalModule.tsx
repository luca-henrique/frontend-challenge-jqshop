import { Box, Modal, Typography } from "@mui/material";
import { Button } from "../../atoms/Button/Button";
import { Input } from "../../atoms/Input/Input";
import { useAppDispatch, useAppSelector } from "../../../hook/useStore";
import {
  addNewModuleByCourseId,
  editModuleByCourse,
} from "../../../store/reducer/course/actions";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect } from "react";
import { InputTextArea } from "../../atoms/InputTextArea/InputTextArea";
import { Module } from "../../../@types/module";
import { uuidv4 } from "../../../util/uuidv4";

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

export const ModalModule = ({ open, handleClose }: ICreateLesson) => {
  const dispatch = useAppDispatch();

  const { course: { courseId, selectedModule, openModalCreateModule, openModalEditModule } } = useAppSelector(state => state)

  const isEditModule = courseId && openModalEditModule


  const defaultValues = {
    title: "",
    description: "",
    lessons: [],
  }

  const { handleSubmit, reset, control } = useForm<Module>({
    defaultValues,
  });


  const onSubmit: SubmitHandler<Module> = (data: Module) => {
    if (!openModalCreateModule) {
      dispatch(editModuleByCourse({ courseId, moduleId: selectedModule.id, updatedModule: data }));
    } else {
      dispatch(addNewModuleByCourseId({ courseId, module: { ...data, id: uuidv4() } }));
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
      reset(selectedModule)
    } else {
      reset(defaultValues)
    }
  }, [isEditModule, selectedModule, reset])


  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} component="form" onSubmit={handleSubmit(onSubmit)}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {isEditModule ? "Editar " : "Criar "} modulo
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
            {isEditModule ? "Editar " : "Criar"}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
