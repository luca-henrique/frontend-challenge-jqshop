import { Card } from "@mui/material";
import { Course } from "../../../@types/course";
import { CardCourseHeader } from "../../molecules/CardCourseHeader/CardCourseHeader";
import { ContentCardCourse } from "../ContentCardCourse/ContentCardCourse";

export const CardCourse = ({ title, description, id }: Course) => {
  return (
    <Card
      variant="outlined"
      sx={{
        width: "350px",
        display: "flex",
        flexDirection: "column",
        borderRadius: "4px",
        position: "relative",
      }}
    >
      <CardCourseHeader id={id} />
      <ContentCardCourse title={title} id={id} description={description} />
    </Card>
  );
};
