import { Box, IconButton, Typography } from "@mui/material"
import { CardCourse } from "../../components/organisms/CardCourse/CardCourse"


import { useAppDispatch, useAppSelector } from "../../hook/useStore"
import { useEffect } from "react"
import { changeVisibilityModalCreateCourse, changeVisibilityModalCreateLesson, changeVisibilityModalCreateModule, changeVisibilityModalEditCourse, changeVisibilityModalEditLesson, changeVisibilityModalEditModule, readCourseRequest } from "../../store/reducer/course/actions"
import { PlusIcon } from "../../components/atoms/Icons/Icons"
import { ModalCourse } from "../../components/organisms/ModalCourse/ModalCourse"
import { ModalModule } from "../../components/organisms/ModalModule/ModalModule"
import { ModalLesson } from "../../components/organisms/ModalLesson/ModalLesson"

export const Home = () => {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(readCourseRequest())
  }, [])

  const { course: { courses, openModalCreateCourse, openModalEditCourse, courseTitle, openModalCreateModule, openModalEditModule, openModalCreateLesson, openModalEditLesson, courseId } } = useAppSelector(state => state)

  const openModal = openModalCreateCourse || openModalEditCourse

  const openModalModule = openModalCreateModule || openModalEditModule

  const openModalLesson = openModalCreateLesson || openModalEditLesson

  const isEditCourse = courseId && openModalEditCourse

  const isEditModule = courseId && openModalEditModule

  const handleCloseModalCourse = () => {
    if (isEditCourse) {
      dispatch(changeVisibilityModalEditCourse(''))
    } else {
      dispatch(changeVisibilityModalCreateCourse())
    }
  }

  const handleCloseModalModule = () => {
    if (isEditModule) {
      dispatch(changeVisibilityModalEditModule(''))
    } else {
      dispatch(changeVisibilityModalCreateModule(""))
    }
  }

  const handleCloseModalLesson = () => {
    if (openModalEditLesson) {
      dispatch(changeVisibilityModalEditLesson(''))
    } else if (openModalCreateLesson) {
      dispatch(changeVisibilityModalCreateLesson(""))
    }
  }

  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: "row", padding: 2, justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h3">All Courses</Typography>
        <IconButton onClick={() => dispatch(changeVisibilityModalCreateCourse())}>
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
      <ModalModule open={openModalModule} handleClose={() => handleCloseModalModule()} />
      <ModalLesson open={openModalLesson} handleClose={() => handleCloseModalLesson()} />
    </Box>
  )
}


