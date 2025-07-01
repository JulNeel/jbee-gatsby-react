import React, { Fragment, useEffect, useState } from "react";
import { Box } from "./Box";
import {
  hamburgerButton,
  hamburgerLine,
  hamburgerLineOpened,
  menuItemsStyle,
  menuLinkStyle,
  navMenu,
  navMenuOpened,
  noScroll,
  homeMenu,
  defaultMenu,
} from "./ResponsiveMenu.css";
import clsx from "clsx";
import { Link } from "gatsby";

type MenuItem = {
  label: string;
  path: string;
};

export type ResponsiveMenuProps = {
  menuItems: MenuItem[];
  context?: "home";
};

const ResponsiveMenu: React.FC<ResponsiveMenuProps> = ({ menuItems, context }) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  useEffect(() => {
    if (isMenuOpened) {
      document.body.classList.add(noScroll);
    } else {
      document.body.classList.remove(noScroll);
    }
  }, [isMenuOpened]);
  return (
    <Fragment>
      <Box
        as="button"
        className={hamburgerButton}
        onClick={() => setIsMenuOpened(!isMenuOpened)}
        aria-expanded={isMenuOpened}
        aria-label="Menu"
        aria-controls="main-menu"
      >
        <span className={clsx(hamburgerLine, { [hamburgerLineOpened]: isMenuOpened })}></span>
      </Box>
      <Box
        as="nav"
        id="main-menu"
        className={clsx(
          navMenu,
          { [navMenuOpened]: isMenuOpened },
          { [homeMenu]: context === "home" },
          { [defaultMenu]: context === undefined }
        )}
        aria-hidden={!isMenuOpened}
        role="navigation"
      >
        <Box as="ul" className={menuItemsStyle}>
          {menuItems.map((menuItem) => (
            <Box
              as="li"
              fontFamily="oswald"
              fontSize={{ mobile: "xxLarge", tablet: "xxLarge", smallDesktop: "xxLarge", largeDesktop: "xxLarge" }}
              key={menuItem.label}
            >
              <Link className={menuLinkStyle} color="default" to={menuItem.path ?? "#"}>
                {menuItem.label}
              </Link>
            </Box>
          ))}
        </Box>
      </Box>
    </Fragment>
  );
};

export default ResponsiveMenu;
