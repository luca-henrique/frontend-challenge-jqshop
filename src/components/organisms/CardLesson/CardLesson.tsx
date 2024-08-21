import { Box, IconButton, Typography } from "@mui/material";
import { EditIcon, TrashIcon } from "../../atoms/Icons/Icons";
import { Lesson } from "../../../@types/lesson";

interface ICardLesson extends Lesson {
  handleDeleteLesson: (lessonId: string) => void
  handleEditLesson: (lessonId: string) => void
}

export const CardLesson = ({ title, description, content, id, handleDeleteLesson, handleEditLesson }: ICardLesson) => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6"># {title}</Typography>
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
            onClick={() => handleEditLesson(id)}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            size="small"
            sx={{
              border: "1px solid rgb(0 0 0 / 0.08)",
              borderRadius: "0.5rem",
            }}
            onClick={() => handleDeleteLesson(id)}
          >
            <TrashIcon />
          </IconButton>
        </Box>
      </Box>
      <Typography variant="subtitle1" color={"#212121"}>{description}</Typography>
      <Typography variant="body1">
        {content}
      </Typography>
    </Box>
  );
};