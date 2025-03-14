import React, { useEffect, useRef } from "react";

const userPanel = ({ query }) => {
  const widgetRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://youglish.com/public/emb/widget.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.YG && widgetRef.current) {
        const widget = new window.YG.Widget(widgetRef.current, {
          width: 640,
          components: 9, // Arama kutusu ve başlık
        });

        widget.fetch(query, "english");
      }
    };
  }, [query]);

  return (
    <div>
      <h2>YouGlish Pronunciation: "{query}"</h2>
      <div id="widget-1" ref={widgetRef}></div>
    </div>
  );
};

export default userPanel;
