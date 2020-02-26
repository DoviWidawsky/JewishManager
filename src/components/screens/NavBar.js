import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "../../index.css";
import App from "../../App";
import util from "../util";
import { Report, Edit } from "./index";
import Login from "./Login/login";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isUnlocked, setIsUnlocked] = React.useState(false);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogin = () => {
    setIsUnlocked(true);
  };

  return (
    <div>
      {!isUnlocked && <Login setIsUnlocked={handleLogin} />}
      {isUnlocked && (
        <Router>
          <div className={classes.root}>
            <AppBar position="static">
              <Toolbar>
                <IconButton
                  onClick={handleClick}
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>
                    <Link to="/">Home</Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link to="/report">Reports</Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link to="/edit">Edit</Link>
                  </MenuItem>
                </Menu>
                <Typography variant="h6" className={classes.title}>
                  Manager
                </Typography>
              </Toolbar>
            </AppBar>
            <Route exact path="/report" component={Report} />
            <Route path="/report" component={Report} />
            <Route path="/edit" component={Edit} />
          </div>
        </Router>
      )}
    </div>
  );
}
