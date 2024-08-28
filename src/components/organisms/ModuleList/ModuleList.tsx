import { Box } from "@mui/material";
import { Module } from "../../../@types/module";
import { CardModule } from "../CardModule/CardModule";
interface IModuleList {
  modules?: Module[]
}

export const ModuleList = ({ modules = [] }: IModuleList) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", mt: 2, gap: 2 }}>
      {modules.map((module) => {
        return (
          <CardModule {...module} key={`${module.id} - ${module.title}`} />
        )
      })}
    </Box>
  )
}