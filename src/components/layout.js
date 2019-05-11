import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import grey from "@material-ui/core/colors/grey";
import red from "@material-ui/core/colors/red";
import NavBar from "./navbar";

class Layout extends React.Component {
  render() {
    return this.renderMain();
  }

  renderMain() {
    // FIX ME: Shadows array, WTF?
    const theme = createMuiTheme({
      breakpoints: {
        values: {
          xs: 0,
          sm: 770,
          md: 960,
          lg: 1280,
          xl: 1920
        }
      },
      palette: {
        primary: { main: "#C8C9CE" },
        secondary: { main: grey[500] },
        error: { main: red[500] }
      },
      typography: {
        fontFamily: "'Gothic A1', sans-serif",
        useNextVariants: true
      },
      shadows: [
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none"
      ],
      shape: { borderRadius: 0 },
      overrides: {
        MuiAppBar: {
          positionFixed: { height: "64px" }
        },
        MuiToolbar: {
          root: { height: "64px" }
        },
        MuiButton: {
          root: { textTransform: "none" },
          raisedPrimary: {
            lineHeight: 1,
            textTransform: "none",
            backgroundColor: "#C8C9CE",
            padding: "14px 16px 12px",
            color: "#ffffff"
          },
          disabled: {
            textTransform: "none",
            padding: "14px 16px 12px",
            lineHeight: 1
          },
          label: {
            whiteSpace: "nowrap",
            overflow: "ellipsis"
          }
        },
        MuiTab: {
          label: { textTransform: "capitalize" }
        },
        MuiChip: {
          root: {
            backgroundColor: grey[100],
            color: grey[600]
          },
          avatar: {
            backgroundColor: grey[100],
            paddingLeft: "3px",
            color: grey[600]
          },
          label: {
            paddingTop: "3px",
            paddingLeft: "4px"
          }
        }
      }
    });

    return (
      <MuiThemeProvider theme={theme}>
        <NavBar />
      </MuiThemeProvider>
    );
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }
}

export default Layout;
