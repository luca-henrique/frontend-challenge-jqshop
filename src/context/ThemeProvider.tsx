import { createTheme, PaletteMode, ThemeProvider } from "@mui/material";
import { createContext, ReactNode, useState } from "react"
import getCustomThemeTheme from "../theme/custom-theme";

interface IThemeProvider {
  children: ReactNode
}

export type Mode = 'light' | 'dark';

interface ThemeContextType {
  mode: Mode;
  onChangeThemeMode: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ModeThemeProvider = ({ children }: IThemeProvider) => {

  const [mode, setMode] = useState<Mode | PaletteMode>('light');

  const onChangeThemeMode = () => {
    const changeMode = mode === 'dark' ? 'light' : 'dark'
    setMode(changeMode)
  }



  const customTheme = createTheme(getCustomThemeTheme(mode));

  return (

    <ThemeContext.Provider value={{ mode, onChangeThemeMode }}>
      <ThemeProvider theme={customTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}


