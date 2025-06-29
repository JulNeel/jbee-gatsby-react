import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import ResponsiveMenu from "./ResponsiveMenu";
export type HeaderMenuProps = {
  isHome?: boolean;
};
const HeaderMenu: React.FC<HeaderMenuProps> = ({ isHome = false }) => {
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

  const menuItems =
    data.wpMenu?.menuItems?.nodes
      .filter((item): item is { label: string; path: string } => !!item.label)
      .map((item) => ({
        label: item.label!,
        path: item.path ?? undefined,
      })) ?? [];

  return menuItems ? <ResponsiveMenu menuItems={menuItems} colorSheme={isHome ? "secondary" : "primary"} /> : undefined;
};

export default HeaderMenu;
