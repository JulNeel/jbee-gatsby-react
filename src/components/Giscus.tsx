import React, { useEffect, useRef } from "react";

const Giscus: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";

    script.setAttribute("data-repo", "JulNeel/jbee-gatsby-react");
    script.setAttribute("data-repo-id", "R_kgDOOv1PGw");
    script.setAttribute("data-category", "JBEE comments");
    script.setAttribute("data-category-id", "DIC_kwDOOv1PG84CvwyS");
    script.setAttribute("data-mapping", "og:title");
    script.setAttribute("data-reactions-enabled", "0");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-theme", "light");
    script.setAttribute("data-lang", "fr");

    containerRef.current?.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return <div ref={containerRef} />;
};

export default Giscus;
