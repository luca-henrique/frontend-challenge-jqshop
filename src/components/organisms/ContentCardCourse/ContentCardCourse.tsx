import { Box, Typography } from "@mui/material"
import { textShrink } from "../../../util/text-shrink"
import { useNavigateRouter } from "../../../hook/useNavigateRouter"
import { Course } from "../../../@types/course"
import { Button } from "../../atoms/Button/Button"


export const ContentCardCourse = ({ id, title, description }: Course) => {

  const { navigation } = useNavigateRouter()

  const navigateDetailCourse = () => {
    navigation(`/course/${id}`)
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 2,
        gap: 0.5,
      }}
    >
      <Typography variant="h5">{textShrink(title, 30)}</Typography>
      <Typography>{textShrink(description, 80)}</Typography>
      <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "end" }}>
        <Button
          sx={{
            mt: 2,
            width: "fit-content"
          }}
          variant="outlined"
          onClick={navigateDetailCourse}
        >
          Veja os detalhes
        </Button>
      </Box>
    </Box>
  )
}