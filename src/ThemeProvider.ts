import { createTheme } from "@mui/material/styles";

import { WebApp } from "./api/webapp";

export const createTelegramTheme = () => {
  const {
    bg_color,
    text_color,
    hint_color,
    link_color,
    button_color,
    button_text_color,
    secondary_bg_color,
  } = WebApp.themeParams;

  return createTheme({
    palette: {
      background: {
        default: bg_color,
        paper: secondary_bg_color,
      },
      text: {
        primary: text_color,
        secondary: hint_color,
      },
      primary: {
        main: link_color,
      },
      secondary: {
        main: button_color,
      },
      action: {
        active: button_text_color,
      },
    },
  });
};
