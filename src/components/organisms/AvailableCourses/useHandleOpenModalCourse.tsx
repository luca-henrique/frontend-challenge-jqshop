import { useAppDispatch, useAppSelector } from "../../../hook/useStore"
import { changeVisibilityModalCreateCourse, changeVisibilityModalEditCourse } from "../../../store/reducer/course/actions"



export const useHandleOpenModalCourse = () => {

  const { course: { openModalCreateCourse, openModalEditCourse, courseId } } = useAppSelector(state => state)
  const isEditCourse = !!courseId && openModalEditCourse
  const dispatch = useAppDispatch()


  const openModalCourse = openModalCreateCourse || openModalEditCourse

  const handleCloseModalCourse = () => {
    if (isEditCourse) {
      dispatch(changeVisibilityModalEditCourse(''))
    } else {
      dispatch(changeVisibilityModalCreateCourse())
    }
  }

  return {
    openModalCourse,
    handleCloseModalCourse
  }
}