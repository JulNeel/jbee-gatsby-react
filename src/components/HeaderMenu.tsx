import { graphql, useStaticQuery } from "gatsby";
import React, { Fragment, useEffect, useState } from "react";
import { Box } from "./box";
import {
  hamburgerButton,
  hamburgerLine,
  hamburgerLineOpened,
  menuItemsStyle,
  menuLinkStyle,
  navMenu,
  navMenuOpened,
  noScroll,
} from "./HeaderMenu.css";
import clsx from "clsx";

const HeaderMenu: React.FC = () => {
  const data: Queries.HeaderMenuQuery = useStaticQuery(graphql`
    query HeaderMenu {
      wpMenu(locations: { eq: GATSBY_HEADER_MENU }) {
        menuItems {
          nodes {
            label
            path
          }
        }
      }
    }
  `);

  const menu = data.wpMenu?.menuItems?.nodes;

  const [isMenuOpened, setIsMenuOpened] = useState(false);
  useEffect(() => {
    if (isMenuOpened) {
      document.body.classList.add(noScroll);
    } else {
      document.body.classList.remove(noScroll);
    }
  }, [isMenuOpened]);
  return menu ? (
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
      <Box as="nav" className={clsx(navMenu, { [navMenuOpened]: isMenuOpened })}>
        <Box as="ul" className={menuItemsStyle}>
          {menu.map((menuItem) => (
            <Box
              as="li"
              fontFamily="oswald"
              fontSize={{ mobile: "xxLarge", tablet: "xxLarge", smallDesktop: "xxLarge", largeDesktop: "xxLarge" }}
              key={menuItem.label}
            >
              <Box as="a" className={menuLinkStyle} color="default" href={menuItem.path ?? undefined}>
                {menuItem.label}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Fragment>
  ) : undefined;
};

export default HeaderMenu;
