import React from "react";

import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";

import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Check from "@material-ui/icons/Check";


import styles from "assets/jss/nextjs-material-kit/pages/landingPage.js";


import ProductSection from "pages-sections/LandingPage-Sections/ProductSection.js";
import TeamSection from "pages-sections/LandingPage-Sections/TeamSection.js";
import WorkSection from "pages-sections/LandingPage-Sections/WorkSection.js";
import SectionCarousel from "pages-sections/Components-Sections/SectionCarousel.js";


const dashboardRoutes = [];

const useStyles = makeStyles(styles);


export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="UAS Pemrograman Web"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter responsive image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Your Story Starts With Us.</h1>
              <h4>
                Saya Pribadi Kurniawan berkuliah di STIKOM PGRI Banyuwangi. Transfer dari program D3 ke S1 Teknologi Informatika. Landing Page ini saya buat untuk memenuhi tugas Ujian Akhir Semester dari Mata Kuliah Pemrograman Web.
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Youtube Stikom
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      

      <div className={classNames(classes.main, classes.mainRaised)}>
      <GridContainer justify="center">
          <GridItem md={1} sm={12} xs={12}>
            <h2>Carousel</h2>
           </GridItem>
        </GridContainer>
        <div className={classes.container}>
          <SectionCarousel />
          <TeamSection />

          <div className={classes.space50} />
        <div id="inputs">
          <div className={classes.title}>
            <h3>Daftarkan Diri</h3>
          </div>
          <GridContainer>
          <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                labelText="Email"
                id="float"
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                labelText="Password"
                id="float"
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                labelText="Alamat"
                id="float"
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                labelText="Kabupaten"
                id="float"
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                labelText="Provinsi"
                id="float"
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={6} md={4} lg={3}>
            <div id="checkRadios">
            <div
                className={
                  classes.checkboxAndRadio +
                  " " +
                  classes.checkboxAndRadioHorizontal
                }
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      tabIndex={-1}
                      onClick={() => handleToggle(24)}
                      checkedIcon={<Check className={classes.checkedIcon} />}
                      icon={<Check className={classes.uncheckedIcon} />}
                      classes={{
                        checked: classes.checked,
                        root: classes.checkRoot
                      }}
                    />
                  }
                  classes={{ label: classes.label, root: classes.labelRoot }}
                  label="Check Me Out"
                />
              </div>
              </div>
            </GridItem>
            <Button color="primary" round>
                Sign In
            </Button>
          </GridContainer>
        </div>
          <ProductSection />
          
          <WorkSection />
          
        </div>
      </div>
      <Footer />
    </div>
  );
}
