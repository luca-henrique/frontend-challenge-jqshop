import { Box, IconButton } from "@mui/material"
import { EditIcon, TrashIcon } from "../../atoms/Icons/Icons"
import { useDispatch } from "react-redux";
import { changeVisibilityModalEditCourse, deleteCourse } from "../../../store/reducer/course/actions";


interface ICardCourseHeader {
  title: string
}

export const CardCourseHeader = ({ title }: ICardCourseHeader) => {
  const dispatch = useDispatch();


  const handleEditCourse = () => {
    dispatch(changeVisibilityModalEditCourse(title))
  }

  const handleDeleteCourse = () => {
    dispatch(deleteCourse(title))
  }

  return (
    <Box>
      <img src="https://fakeimg.pl/500x300/" alt="img" />
      <Box sx={{
        display: "flex",
        flexDirection: "row",
        position: "absolute",
        top: 10,
        right: 10
      }}>
        <IconButton size="small" onClick={() => handleEditCourse()}>
          <EditIcon />
        </IconButton>
        <IconButton size="small" onClick={() => handleDeleteCourse()}>
          <TrashIcon />
        </IconButton>
      </Box>
    </Box>
  )
}