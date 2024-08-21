import { Box, IconButton, Typography } from "@mui/material";
import { LessonList } from "../LessonList/LessonList";
import { Button } from "../../atoms/Button/Button";
import { EditIcon, PlusIcon, TrashIcon } from "../../atoms/Icons/Icons";
import { useAppDispatch } from "../../../hook/useStore";
import { changeVisibilityModalCreateLesson, changeVisibilityModalEditLesson, changeVisibilityModalEditModule, deleteLesson, deleteModuleByCourse } from "../../../store/reducer/course/actions";
import { Module } from "../../../@types/module";
import { useParams } from "react-router-dom";
import { CardModule } from "../CardModule/CardModule";


interface IModuleList {
  modules?: Module[]
}

export const ModuleList = ({ modules = [] }: IModuleList) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", mt: 2, gap: 2 }}>
      {modules.map((module) => {
        return (
          <CardModule {...module} />
        )
      })}
    </Box>
  )
}