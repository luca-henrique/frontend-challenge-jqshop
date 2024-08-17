import { Box, Card, Typography } from "@mui/material"
import { textShrink } from "../../../util/text-shrink"
import { Course } from "../../../@types/course"

export const CardCourse = ({ title, description, countLessons, countModules }: Course) => {
  return (
    <Box>
      <Card sx={{ width: "250px", borderRadius: "2px", padding: 2, gap: 2, display: "flex", flexDirection: "column" }}>
        <img src="https://fakeimg.pl/250x200/" alt="img" />
        <Box sx={{ gap: 0.5, display: "flex", flexDirection: "column" }}>
          <Typography>{textShrink(title, 25)}</Typography>
          <Typography>{textShrink(description, 55)}</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          <Box>
            <Typography>{countModules} Modulos</Typography>
          </Box>
          <Box>
            <Typography>{countLessons} Modulos</Typography>
          </Box>
        </Box>
      </Card>
    </Box>
  )
}