import { Box } from "@mui/material"
import ToggleColorMode from "../../organisms/checkout/ToggleColorMode"

export const Header = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "end" }}>
      <ToggleColorMode />
    </Box>
  )
}