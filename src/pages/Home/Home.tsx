import { Box, Typography } from "@mui/material"
import { CardCourse } from "../../components/organisms/CardCourse/CardCourse"

import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hook/useStore"
import { useEffect } from "react"
import { readCourseRequest } from "../../store/reducer/course/actions"

export const Home = () => {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(readCourseRequest())
  }, [])

  const { course: { courses } } = useAppSelector(state => state)

  return (
    <Box>
      <Link to="/create" >Adicionar</Link>
      <Typography variant="h3">All Courses</Typography>
      <Box sx={{ display: "flex", flexDirection: "row", gap: 4, flexWrap: "wrap", padding: 2 }}>
        {courses.map(course => {
          return (
            <CardCourse key={course.title} {...course} />
          )
        })}
      </Box>
    </Box>
  )
}


