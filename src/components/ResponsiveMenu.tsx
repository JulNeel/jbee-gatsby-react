import clsx from "clsx";
import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import { Box } from "./Box";
import {
  hamburgerButton,
  hamburgerLine,
  hamburgerLineOpened,
  menuItemsStyle,
  menuItemStyle,
  menuLinkStyle,
  navMenuOpened,
  navMenuStyle,
  noScroll,
  transparentBackgroundMenu,
  whiteBackgroundMenu,
} from "./ResponsiveMenu.css";

type MenuItem = {
  label: string;
  path: string;
};

export type ResponsiveMenuProps = {
  menuItems: MenuItem[];
  theme: "whiteBackgroundMenu" | "transparentBackgroundMenu";
};

const ResponsiveMenu: React.FC<ResponsiveMenuProps> = ({ menuItems, theme }) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  useEffect(() => {
    if (isMenuOpened) {
      document.body.classList.add(noScroll);
    } else {
      document.body.classList.remove(noScroll);
    }
  }, [isMenuOpened]);

  return (
    <>
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
          navMenuStyle,
          { [whiteBackgroundMenu]: theme === "whiteBackgroundMenu" },
          { [transparentBackgroundMenu]: theme === "transparentBackgroundMenu" },
          { [navMenuOpened]: isMenuOpened }
        )}
        aria-hidden={!isMenuOpened}
      >
        <Box as="ul" className={menuItemsStyle}>
          {menuItems.map((menuItem) => (
            <Box
              as="li"
              className={menuItemStyle}
              fontFamily="oswald"
              fontSize={["xxLarge", "xxLarge", "large", "xLarge"]}
              key={menuItem.label}
            >
              <Link className={menuLinkStyle} to={menuItem.path ?? "#"}>
                {menuItem.label}
              </Link>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default ResponsiveMenu;
