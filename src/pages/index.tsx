import * as React from "react";
import jbee_header_image_bg from "../assets/images/jbee_header_image_bg.jpg";
import logo from "../assets/images/logo_jbee_dev_800_blanc.png";

const pageStyles = {
  color: "white",
  backgroundImage: `url(${jbee_header_image_bg})`,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  display: "flex",
  width: "100%",
  minHeight: "100vh",
  alignItems: "center",
  justifyContent: "center",
  padding: 0,
  backgroundPosition: "center",
  backgroundSize: "cover",
};

const logoWrapperStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};
export const logoStyles = {
  maxWidth: "50vw",
  marginBottom: 200,
};
export default function MaintenancePage() {
  return (
    <div style={pageStyles}>
      <div style={logoWrapperStyles}>
        <img style={logoStyles} src={logo} alt="logo"></img>
        <h1>Pour l'instant, ce site ne marche qu'en local... ¯|_(ツ)_/¯</h1>
        <h1>A bientôt...</h1>
      </div>
    </div>
  );
}
