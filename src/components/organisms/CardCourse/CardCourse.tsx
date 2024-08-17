import {
  Box,
  Card,
  IconButton,
  Modal,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { Course } from "../../../@types/course";
import { useDispatch } from "react-redux";
import {
  addLessonByModule,
  addNewModuleByCourseId,
  deleteLesson,
  deleteModuleByCourse,
} from "../../../store/reducer/course/actions";
import { Lesson } from "../../../@types/lesson";
import { useAppDispatch } from "../../../hook/useStore";
import { useState } from "react";
import { Input } from "../../atoms/Input/Input";
import { Button } from "../../atoms/Button/Button";
import { InputTextArea } from "../../atoms/InputTextArea/InputTextArea";
import { Module } from "../../../@types/module";
import { uuidv4 } from "../../../pages/CreateCourse/CreateCourse";
import { CardLesson } from "../CardLesson/CardLesson";
import { EditIcon, PlusIcon, TrashIcon } from "../../atoms/Icons/Icons";
import { CardModule } from "../CardModule/CardModule";

export const CardCourse = ({ title, description, modules }: Course) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = (moduleTitle: string) => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const deleteModule = (courseTitle: string, moduleId: string) => {
    dispatch(deleteModuleByCourse({ courseTitle, moduleId }));
  };

  const handleAddNewLesson = (courseTitle: string, moduleId: string) => {
    const lesson: Lesson = {
      title: "Modulo de exemplo",
      description: "123123",
      id: uuidv4(),
      content: "",
    };
    dispatch(addLessonByModule({ courseTitle, moduleId, lesson }));
  };

  const handleAddNewModule = (courseTitle: string) => {
    const module: Module = {
      title: "Modulo de exemplo",
      description: "123123",
      id: uuidv4(),
      lessons: [],
    };
    dispatch(addNewModuleByCourseId({ courseTitle, module }));
  };

  return (
    <>
      <Card
        sx={{
          width: "500px",
          display: "flex",
          flexDirection: "column",
          borderRadius: "4px",
          position: "relative",
        }}
      >
        <img src="https://fakeimg.pl/500x300/" alt="img" />
        <Box
          sx={{
            gap: 0.5,
            display: "flex",
            flexDirection: "column",
            padding: 2,
          }}
        >
          <Typography variant="h5">{title}</Typography>
          <Typography>{description}</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", padding: 2 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              mb: 2,
            }}
          >
            <Typography variant="h6">Modulos</Typography>
            <IconButton size="small" onClick={() => handleAddNewModule(title)}>
              <PlusIcon />
            </IconButton>
          </Box>
          {modules?.map((module) => (
            <CardModule courseTitle={title} key={module.id} {...module} />
          ))}
        </Box>
      </Card>
      <CreateLesson open={open} handleClose={handleClose} />
    </>
  );
};

const style = {
  position: "absolute" as "absolute",
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

interface ICreateLesson {
  open: boolean;
  handleClose: () => void;
}

export function CreateLesson({ open, handleClose }: ICreateLesson) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Adicionar nova lição
          </Typography>
          <Input label="Titulo" type="textarea" />
          <Input label="Descrição" />
          <InputTextArea color="primary" minRows={6} label="Conteudo" />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "end",
              gap: 1,
              marginTop: "8px",
            }}
          >
            <Button variant="outlined" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="contained">Adicionar</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
