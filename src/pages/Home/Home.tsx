import { Box } from "@mui/material"
import { CardCourse } from "../../components/organisms/CardCourse/CardCourse"

import { Link } from "react-router-dom"
import { useAppSelector } from "../../hook/useStore"

export const Home = () => {
  const { course: { courses } } = useAppSelector(state => state)

  return (
    <Box>
      <Link to="/create" >Adicionar</Link>
      <Box sx={{ display: "flex", flexDirection: "row", gap: 4, flexWrap: "wrap" }}>
        {courses.map(course => {
          return (
            <CardCourse key={course.title} {...course} />
          )
        })}
      </Box>
    </Box>
  )
}


