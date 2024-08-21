import { Box } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../../hook/useStore"
import { CardCourse } from "../CardCourse/CardCourse"
import { readCourseRequest } from "../../../store/reducer/course/actions"
import { useEffect } from "react"


export const CoursesList = () => {
  const { course: { courses } } = useAppSelector(state => state)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(readCourseRequest())
  }, [dispatch])

  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: 2, flexWrap: "wrap", mt: 2, width: "100%" }}>
      {courses.map(course => {
        return (
          <CardCourse key={course.id} {...course} />
        )
      })}
    </Box>
  )
}