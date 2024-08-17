import { Box, Card, Typography } from "@mui/material"
import { Input } from "../../components/atoms/Input/Input"
import { Button } from "../../components/atoms/Button/Button"
import { Accordion } from "../../components/atoms/Accordion/Accordion"
import { Course } from "../../@types/course"
import { useState } from "react"
import { Lesson } from "../../@types/lesson"
import { useAppDispatch, useAppSelector } from "../../hook/useStore"
import { createCourse } from "../../store/reducer/course/actions"


export function uuidv4() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
    (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
  );
}


export const CreateCourse = () => {

  const [course, setCourse] = useState<Course>({ title: "", description: "", modules: [] })

  const { course: { courses } } = useAppSelector(state => state)

  console.log(courses)

  const dispatch = useAppDispatch()

  const addCourse = () => {
    dispatch(createCourse(course))
  }


  const addNewModule = () => {
    const modules = course.modules
    const module = { id: uuidv4(), title: `${modules?.length} - Modulo`, description: `${modules?.length} - descricao` }
    modules?.push(module)
    setCourse({ ...course, modules })
  }

  const addLessonToModule = (moduleId: string, newLesson: Lesson) => {
    setCourse(prevCourse => ({
      ...prevCourse,
      modules: prevCourse.modules?.map(module =>
        module.id === moduleId
          ? {
            ...module,
            lessons: module.lessons ? [...module.lessons, newLesson] : [newLesson]
          }
          : module
      )
    }));
  };

  return (<Box>
    <Typography variant="h5">Sobre o curso</Typography>
    <Input label="Nome do curso" />
    <Input label="Descrição do curso" />

    <Typography variant="h5">Informações sobre os modulos</Typography>

    <Input label="Nome do modulo" />
    <Input label="Descrição do modulo" />
    <Button variant="contained" onClick={() => addNewModule()}>Adicionar modulo</Button>

    <Card>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Accordion modules={course.modules} addNewLesson={addLessonToModule} />
      </Box>
    </Card>

    <Button variant="contained" onClick={addCourse}>Salvar Curso</Button>
  </Box>)
}