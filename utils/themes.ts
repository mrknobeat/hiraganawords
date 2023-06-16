import { Roboto, Poppins } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';


export const poppins = Poppins({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#32ff9c',
    },
    secondary: {
      main: '#a400ff',
    },
    background: {
      default: '#0c0c0c',
      paper: '#1a1a1a',
    },
    text: {
      primary: 'rgba(247,247,247,0.87)',
      secondary: 'rgba(236,236,236,0.54)',
      disabled: 'rgba(255,255,255,0.38)',
      // hint: 'rgba(255,255,255,0.38)',
    },
    error: {
      main: '#f70003',
    },
    divider: 'rgba(98,96,96,0.12)',
    info: {
      main: '#0024ff',
    },
    success: {
      main: '#32ff9c',
    },
  },
});

export default theme;