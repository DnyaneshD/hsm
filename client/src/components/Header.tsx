import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import Registration from "./Registration";
import YourSocieties from "./YourSocieties";
import Members from "./Members";

const useStyles = makeStyles(theme => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none"
    }
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbar: {
    flexWrap: "wrap"
  },
  toolbarTitle: {
    flexGrow: 1
  },
  link: {
    margin: theme.spacing(1, 1.5)
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6)
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[700]
        : theme.palette.grey[200]
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2)
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6)
    }
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <Router>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}>
            HSM
          </Typography>
          <nav>
            <Link
              variant="button"
              color="textPrimary"
              href="/"
              className={classes.link}>
              Home
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="/registration"
              className={classes.link}>
              Registration
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}>
              Support
            </Link>
          </nav>
          <Button
            href="#"
            color="primary"
            variant="outlined"
            className={classes.link}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route exact path="/registration">
          <Registration />
        </Route>
        <Route exact path="/yourSocieties">
          <YourSocieties />
        </Route>
        <Route exact path="/members">
          <Members />
        </Route>
      </Switch>
    </Router>
  );
}
