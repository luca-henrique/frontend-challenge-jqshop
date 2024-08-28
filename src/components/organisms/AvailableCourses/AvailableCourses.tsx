import { Box } from "@mui/material"
import { CoursesList } from "../CoursesList/CoursesList"
import { HeaderCoursesList } from "../HeaderCoursesList/HeaderCoursesList"
import { ModalCourse } from "../ModalCourse/ModalCourse"

import { useHandleOpenModalCourse } from "./useHandleOpenModalCourse"

export const AvailableCourses = () => {
  const { openModalCourse, handleCloseModalCourse } = useHandleOpenModalCourse()

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", mt: 2 }}>
        <HeaderCoursesList />
        <CoursesList />
      </Box>
      <ModalCourse open={openModalCourse} handleClose={() => handleCloseModalCourse()} />
    </>
  )
}