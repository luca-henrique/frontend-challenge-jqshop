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
    <Box sx={{
      display: "flex", flexDirection: "row", flexWrap: "wrap", mt: 2, width: "100%", justifyContent: {
        xs: 'space-between',
        sm: 'flex-start',
        md: 'flex-start',
        lg: 'flex-start',
        xl: 'space-between',
      }, gap: {
        xs: '14px',
        sm: '13px',
        md: '14px',
        lg: '14px',
        xl: '14px 0px',
      },

    }}>
      {courses.map(course => {
        return (
          <CardCourse key={course.id} {...course} />
        )
      })}
    </Box>
  )
}