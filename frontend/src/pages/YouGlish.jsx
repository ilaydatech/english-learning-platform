import { useEffect, useRef } from "react";

const YouGlish = ({ query }) => {
  const ref = useRef(null);

  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://youglish.com/public/emb/widget.js";
    tag.async = true;
    document.body.appendChild(tag);

    window.onYouglishAPIReady = () => {
      let count = 0; // ⟵ oynatılan cümle adedi

      const widget = new window.YG.Widget(ref.current, {
        width: 640,
        components: 8, // sadece altyazı + oynatıcı
        events: {
          onCaptionConsumed: () => {
            count += 1; // her biten cümlede art
            if (count === 2) widget.pause(); // 2. cümle bitti → dur
          },
        },
      });

      widget.fetch(query, "english");
    };
  }, [query]);

  // timeline'ı tıklanamaz hâle getirmek için saydam katman
  return (
    <div style={{ position: "relative", width: 640 }}>
      <div id="widget-1" ref={ref} />
      <div
        style={{ position: "absolute", inset: 0, background: "transparent" }}
      />
    </div>
  );
};

export default YouGlish;



// import React, { useEffect, useRef } from "react";

// const YouGlish = ({ query }) => {
//   const widgetRef = useRef(null);

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://youglish.com/public/emb/widget.js";
//     script.async = true;
//     document.body.appendChild(script);

//     script.onload = () => {
//       if (window.YG && widgetRef.current) {
//         const widget = new window.YG.Widget(widgetRef.current, {
//           width: 640,
//           components: 8, // Arama kutusu ve başlık
//         });

//         widget.fetch(query, "english");
//       }
//     };
//   }, [query]);

//   return (
//     <div>
//       <div id="widget-1" ref={widgetRef}></div>
//     </div>
//   );
// };

// export default YouGlish;
