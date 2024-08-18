import { Box, IconButton, Typography } from "@mui/material"
import { CardCourse } from "../../components/organisms/CardCourse/CardCourse"


import { useAppDispatch, useAppSelector } from "../../hook/useStore"
import { useEffect } from "react"
import { changeVisibilityModalCreateCouse, changeVisibilityModalEditCourse, readCourseRequest } from "../../store/reducer/course/actions"
import { PlusIcon } from "../../components/atoms/Icons/Icons"
import { ModalCourse } from "../../components/organisms/ModalCourse/ModalCourse"

export const Home = () => {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(readCourseRequest())
  }, [])

  const { course: { courses, openModalCreateCourse, openModalEditCourse, courseTitle } } = useAppSelector(state => state)

  const openModal = openModalCreateCourse || openModalEditCourse

  const handleCloseModalCourse = () => {
    if (openModalEditCourse && courseTitle.length > 0) {
      dispatch(changeVisibilityModalEditCourse(''))
    } else if (openModalCreateCourse) {
      dispatch(changeVisibilityModalCreateCouse())
    }
  }

  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: "row", padding: 2, justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h3">All Courses</Typography>
        <IconButton onClick={() => dispatch(changeVisibilityModalCreateCouse())}>
          <PlusIcon />
        </IconButton>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "row", gap: 4, flexWrap: "wrap", padding: 2 }}>
        {courses.map(course => {
          return (
            <CardCourse key={course.title} {...course} />
          )
        })}
      </Box>

      <ModalCourse open={openModal} handleClose={() => handleCloseModalCourse()} />
    </Box>
  )
}


