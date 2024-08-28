import { useNavigate } from "react-router-dom";


export const useNavigateRouter = () => {
  const navigate = useNavigate();

  const navigation = (path: string) => {
    navigate(path)
  }

  return {
    navigation
  }
}