import React from "react";
import { Box } from "./Box";

const Footer: React.FC = () => {
  return (
    <Box as="footer" py={"128"} px={"64"} backgroundColor="primarydark" color="white">
      © {new Date().getFullYear()}, Built with{" "}
      <Box as="a" color="white" href="https://www.gatsbyjs.com">
        Gatsby
      </Box>{" "}
      and{" "}
      <Box as="a" color="white" href="https://wordpress.org/">
        WordPress
      </Box>
    </Box>
  );
};

export default Footer;
