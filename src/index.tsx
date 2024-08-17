import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routers/routers';


import "./styles/normalize.css"
import "./styles/global.css"
import { ModeThemeProvider } from './context/ThemeProvider';
import { CssBaseline } from '@mui/material';

import { Provider } from 'react-redux'
import { makeStore } from './store';

const root = createRoot(
  document.getElementById('root') as HTMLElement
);


const Container = () => {
  return (
    <Provider store={makeStore()}>
      <ModeThemeProvider>
        <CssBaseline />
        <RouterProvider router={router} />
      </ModeThemeProvider>
    </Provider>
  )
}

root.render(<Container />);