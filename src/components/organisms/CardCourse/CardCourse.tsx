import {
  Box,
  Card,
  IconButton,
  Typography,
} from "@mui/material";
import { Course } from "../../../@types/course";
import { useDispatch } from "react-redux";
import {
  changeVisibilityModalCreateModule,
} from "../../../store/reducer/course/actions";


import { PlusIcon } from "../../atoms/Icons/Icons";
import { CardModule } from "../CardModule/CardModule";
import { CardCourseHeader } from "../../molecules/CardCourseHeader/CardCourseHeader";

export const CardCourse = ({ title, description, modules, id }: Course) => {
  const dispatch = useDispatch();

  const handleAddNewModule = () => {
    dispatch(changeVisibilityModalCreateModule(id))
  };


  return (
    <Card
      sx={{
        width: "500px",
        display: "flex",
        flexDirection: "column",
        borderRadius: "4px",
        position: "relative",
      }}
    >
      <CardCourseHeader id={id} />
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
          <IconButton size="small" onClick={handleAddNewModule}>
            <PlusIcon />
          </IconButton>
        </Box>
        {modules?.map((module) => (
          <CardModule courseId={id} key={module.id} {...module} />
        ))}
      </Box>
    </Card>
  );
};
