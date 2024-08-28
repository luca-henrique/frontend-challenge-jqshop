import { useAppDispatch } from "../../../hook/useStore"
import { changeVisibilityModalCreateCourse } from "../../../store/reducer/course/actions"



export const useHandleOpenModalCreateCourse = () => {
  const dispatch = useAppDispatch()

  const handleOpenModalCreateCourse = () => {
    dispatch(changeVisibilityModalCreateCourse())
  }

  return {
    handleOpenModalCreateCourse
  }
}