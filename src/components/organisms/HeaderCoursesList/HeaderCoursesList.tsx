import { Box, Button, Typography } from "@mui/material"
import { PlusIcon } from "../../atoms/Icons/Icons"
import { useHandleOpenModalCreateCourse } from "./useHandleOpenModalCreateCourse"

export const HeaderCoursesList = () => {

  const { handleOpenModalCreateCourse } = useHandleOpenModalCreateCourse()

  return (
    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
      <Typography variant="h4">Cursos</Typography>
      <Button startIcon={<PlusIcon />} variant="contained" onClick={handleOpenModalCreateCourse}>Adicionar novo curso</Button>
    </Box>
  )
}