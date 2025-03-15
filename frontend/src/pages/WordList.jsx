import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function WordList() {
  const location = useLocation();
  const navigate = useNavigate();
  const { level, words } = location.state || {};

  // if (!level || !words) {
  //   return <h2>Bir hata oluştu, lütfen tekrar deneyin.</h2>;
  // }

  return (
    <div>
      <h1>{level} Seviyesi Kelimeleri</h1>
      <ul>
        {words.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
      <button onClick={() => navigate("/chooselevel")}>Geri Dön</button>
    </div>
  );
}

export default WordList;

// import React from "react";

// function WordList({ level, words }) {
//   // Eğer props'tan gelen level veya words boşsa, hata mesajı gösteriyoruz.
//   if (!level || !words) {
//     return <h2>Bir hata oluştu, lütfen tekrar deneyin.</h2>;
//   }

//   return (
//     <div>
//       {/* Seçilen seviyeyi başlık olarak ekrana yazdırıyoruz */}
//       <h1>{level} Seviyesi Kelimeleri</h1>

//       {/* Kelimeleri liste halinde gösteriyoruz */}
//       <ul>
//         {words.map((word, index) => (
//           <li key={index}>{word}</li> // Her kelime için liste öğesi oluşturuluyor
//         ))}
//       </ul>

//       {/* Kullanıcıyı tekrar seviye seçme sayfasına yönlendiren buton */}
//       <button onClick={() => window.history.back()}>Geri Dön</button>
//     </div>
//   );
// }

// export default WordList;
