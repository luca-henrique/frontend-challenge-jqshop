import { Box } from "@mui/material"
import ToggleColorMode from "../../organisms/checkout/ToggleColorMode"
import { Link, useLocation } from "react-router-dom"

export const Header = () => {
  const location = useLocation();
  const { pathname } = location;

  const isHome = pathname === '/'


  return (
    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: !isHome ? "space-between" : 'flex-end' }}>
      {!isHome ? <Link to={"/"}>Voltar</Link> : null}
      <ToggleColorMode />
    </Box>
  )
}