import * as React from 'react';

import IconButton, { IconButtonProps } from '@mui/material/IconButton';

import ModeNightRoundedIcon from '@mui/icons-material/ModeNightRounded';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import { useTheme } from '../../../hook/useTheme';

interface ToggleChangeThemeProps extends IconButtonProps {
}

export const ToggleChangeTheme = ({
  ...props
}: ToggleChangeThemeProps) => {

  const { mode, onChangeThemeMode } = useTheme()

  return (
    <IconButton
      onClick={onChangeThemeMode}
      color="primary"
      aria-label="Theme toggle button"
      {...props}
    >
      {mode === 'dark' ? (
        <WbSunnyRoundedIcon fontSize="small" />
      ) : (
        <ModeNightRoundedIcon fontSize="small" />
      )}
    </IconButton>
  );
}
