import { Container } from "@mui/material"
import { AvailableCourses } from "../../components/organisms/AvailableCourses/AvailableCourses"
import { Header } from "../../components/molecules/Header/Header"

export const Home = () => {
  return (
    <Container maxWidth="xl" sx={{ padding: "10px" }} >
      <Header />
      <AvailableCourses />
    </Container>
  )
}


