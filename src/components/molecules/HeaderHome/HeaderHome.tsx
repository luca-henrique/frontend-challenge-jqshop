import { Box, IconButton, Typography } from "@mui/material"
import { ToggleChangeTheme } from "../ToggleChangeTheme/ToggleChangeTheme"
import { PlusIcon } from "../../atoms/Icons/Icons"
import { useAppDispatch } from "../../../hook/useStore"
import { changeVisibilityModalCreateCourse } from "../../../store/reducer/course/actions"


export const HeaderHome = () => {

  const dispatch = useAppDispatch()

  return (
    <Box sx={{ display: "flex", flexDirection: "row", padding: 2, justifyContent: "space-between", alignItems: "center", backgroundColor: "#000" }}>
      <Typography variant="h3" sx={{ color: "#fff" }}>Courses</Typography>
      <Box>
        <ToggleChangeTheme />
        <IconButton onClick={() => dispatch(changeVisibilityModalCreateCourse())}>
          <PlusIcon />
        </IconButton>
      </Box>
    </Box>
  )
}