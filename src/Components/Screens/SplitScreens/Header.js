import * as React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import { AppBar, Button, Toolbar, Typography, varient} from "@mui/material";
import { Link } from 'react-router-dom'

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Header(props) {
  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar sx={{paddingInline:"160px", background: 'linear-gradient(to right, rgba(32, 40, 119, 1), rgba(55, 46, 149, 1), rgba(83, 49, 177, 1), rgba(114, 48, 205, 1),rgba(150, 41, 230, 1))'    }}>
          <Toolbar className="flex">
          <Typography variant="h6" component="div" sx={{ flexGrow:1 }}>
            <h3 style={{color:'white'}} >code with sadiq</h3>
            </Typography>
           
            
            
            <Link to="/"><Button color="inherit">Home</Button></Link>
            <Link to="/line30"><Button color="inherit">Course</Button></Link>
            <Link to="/"><Button color="inherit" >Online Payment</Button></Link>
            <Link to="/apply"><Button color="warning" variant="contained">Apply for Admission</Button></Link>
             <Link to="/login"><Button color="inherit" className="outline-0 text-white no-underline font-semibold border underline-offset-0 py-1 mx-2">Login</Button></Link>


          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  );
}
