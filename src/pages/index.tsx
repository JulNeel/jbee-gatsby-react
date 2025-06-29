import { PageProps } from "gatsby";
import * as React from "react";
import HeaderHome from "../components/HeaderHome";
import { lightTheme } from "../styles/themes/lightTheme.css";

const App: React.FC<PageProps> = () => {
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      import("jarallax").then(({ jarallax }) => {
        jarallax(document.querySelectorAll(".jarallax"), {});
      });
    }
  }, []);
  return (
    <div className={`${lightTheme} app`}>
      <HeaderHome></HeaderHome>
    </div>
  );
};

export default App;
