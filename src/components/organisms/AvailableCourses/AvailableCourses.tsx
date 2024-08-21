import { Box } from "@mui/material"
import { CoursesList } from "../CoursesList/CoursesList"
import { HeaderCoursesList } from "../HeaderCoursesList/HeaderCoursesList"
import { ModalCourse } from "../ModalCourse/ModalCourse"

import { useHandleOpenModalCourse } from "./useHandleOpenModalCourse"

export const AvailableCourses = () => {
  const { openModalCourse, handleCloseModalCourse } = useHandleOpenModalCourse()

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", width: "76%", mt: 12 }}>
        <HeaderCoursesList />
        <CoursesList />
      </Box>
      <ModalCourse open={openModalCourse} handleClose={() => handleCloseModalCourse()} />
    </>
  )
}