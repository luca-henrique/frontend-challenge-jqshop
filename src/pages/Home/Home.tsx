import { Box } from "@mui/material"
import { AvailableCourses } from "../../components/organisms/AvailableCourses/AvailableCourses"
import { Header } from "../../components/molecules/Header/Header"

export const Home = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", height: '100vh' }}>
      <Header />
      <AvailableCourses />
    </Box>
  )
}


