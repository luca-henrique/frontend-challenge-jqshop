import { Box, IconButton, Typography } from "@mui/material";
import { EditIcon, TrashIcon } from "../../atoms/Icons/Icons";
import { Lesson } from "../../../@types/lesson";

interface ICardLesson extends Lesson {
  deleteLesson: (lessonId: string) => void
}

export const CardLesson = ({ title, description, content, id, deleteLesson }: ICardLesson) => {

  return (
    <Box
      key={id}
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "start",
        justifyContent: "space-between",
        marginLeft: 1,
        mt: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        <Typography> - {title}</Typography>
        <Typography>{description}</Typography>
        <Typography>{content}</Typography>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <IconButton size="small">
          <EditIcon />
        </IconButton>
        <IconButton
          size="small"
          onClick={() => deleteLesson(id)}
        >
          <TrashIcon />
        </IconButton>
      </Box>
    </Box>
  );
};