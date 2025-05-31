import React, { ReactNode } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import parse from "html-react-parser";

interface LayoutProps {
  isHomePage: boolean;
  children: ReactNode;
}

interface GeneralSettings {
  title: string;
  description: string;
}

interface LayoutQueryData {
  wp: {
    generalSettings: GeneralSettings;
  };
}

const Layout: React.FC<LayoutProps> = ({ isHomePage, children }) => {
  const data: LayoutQueryData = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `);

  const { title } = data.wp.generalSettings;

  return (
    <div className="global-wrapper" data-is-root-path={isHomePage}>
      <header className="global-header">
        {isHomePage ? (
          <h1 className="main-heading">
            <Link to="/">{parse(title)}</Link>
          </h1>
        ) : (
          <Link className="header-link-home" to="/">
            {title}
          </Link>
        )}
      </header>

      <main>{children}</main>

      <footer>
        © {new Date().getFullYear()}, Built with <a href="https://www.gatsbyjs.com">Gatsby</a> and{" "}
        <a href="https://wordpress.org/">WordPress</a>
      </footer>
    </div>
  );
};

export default Layout;
