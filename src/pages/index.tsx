import { PageProps } from "gatsby";
import * as React from "react";
import HeaderHome from "../components/HeaderHome";
import PostsList from "../components/PostsList";
import { Box } from "../components/Box";
import { lightTheme } from "../styles/themes/lightTheme.css";
import clsx from "clsx";

const App: React.FC<PageProps> = () => {
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      import("jarallax").then(({ jarallax }) => {
        jarallax(document.querySelectorAll(".jarallax"), {});
      });
    }
  }, []);
  return (
    <div className={clsx(lightTheme, "home")}>
      <HeaderHome></HeaderHome>
      <Box as={"div"} className={"content"} py="32">
        <PostsList />
      </Box>
    </div>
  );
};

export default App;
