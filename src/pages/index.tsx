import * as React from "react";
import jbee_header_image_bg from "../images/jbee_header_image_bg.jpg";
import logo from "../images/logo_jbee_dev_800_blanc.png";
import "../styles/global.css";

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
  flexFlow: "column wrap",
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
        <p>Petite pause café... on revient bientôt ! </p>
      </div>
    </div>
  );
}
