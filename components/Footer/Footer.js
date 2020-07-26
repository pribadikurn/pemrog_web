/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "assets/jss/nextjs-material-kit/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.dummydonkey.my.id"
                className={classes.block}
                target="_blank"
              >
                My Site
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="http://stikombanyuwangi.ac.id/new_stikom/"
                className={classes.block}
                target="_blank"
              >
                STIKOM Banyuwangi
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="http://smkgajahmadabwi.sch.id"
                className={classes.block}
                target="_blank"
              >
                My Working Ground
              </a>
            </ListItem>

          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} , made with{" "}
          <Favorite className={classes.icon} /> by{" "}
          <a
            href="https://www.dummydonkey.my.id/about/"
            className={aClasses}
            target="_blank"
          >
            Pribadi Kurniawan
          </a>{" "}
          for a better web.
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
