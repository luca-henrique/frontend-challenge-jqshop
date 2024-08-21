import { Box } from "@mui/material"
import { ToggleChangeTheme } from "../ToggleChangeTheme/ToggleChangeTheme"

export const Header = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "end", width: "76%", mt: 2 }}>
      <ToggleChangeTheme />
    </Box>
  )
}