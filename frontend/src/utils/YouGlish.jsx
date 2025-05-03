import React, { useEffect, useRef } from "react";

const YouGlish = ({ query }) => {
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
          components: 8,
          events: {
            // ① sitcom sonucu yoksa → animation’a düş
            onFetchDone: (e) => {
              if (e.totalResult === 0)
                widget.fetch(`${query} #animation :r`, "english");
            },
            // ② uzun altyazıyı atla
            onCaptionChange: (e) => {
              const wc = e.caption
                .replace(/\[\[\[|\]\]\]/g, "")
                .split(/\s+/).length;
              if (wc > 8) widget.next();
            },
          },
        });

        // ilk deneme: #sitcom
        widget.fetch(`${query} #sitcom :r`, "english");
      }
    };
  }, [query]);

  return (
    <div>
      <div id="widget-1" ref={widgetRef}></div>
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
//           components: 8, //Arama kutusu ve başlık
//           // 1-2 satır ekle, uzun altyazıları otomatik atla
//           events: {
//             onCaptionChange: (e) => {
//               const wc = e.caption
//                 .replace(/\[\[\[|\]\]\]/g, "")
//                 .split(/\s+/).length;
//               if (wc > 8) widget.next(); // 8 kelimeden uzunsa sıradaki klibe geç
//             },
//           },
//         });

//         // YouGlish.jsx  (yalnızca fetch satırını değiştiriyoruz)
//         widget.fetch(`${query} #sitcom :r`, "english");

//       }}
//      }, [query]);

//   return (
//     <div>
//       <div id="widget-1" ref={widgetRef}></div>
//     </div>
//   );
// };

// export default YouGlish;
