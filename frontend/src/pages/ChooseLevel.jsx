import React, { useState, useEffect } from "react"; // React bileşenlerini ve hook'ları içe aktarır.
import { useNavigate } from "react-router-dom"; // Sayfa yönlendirmesi için React Router'dan useNavigate kullanılır.

function ChooseLevel() {
  const [wordsByLevel, setWordsByLevel] = useState({}); // JSON verisini saklamak için state kullanıyoruz.
  const navigate = useNavigate(); // Kullanıcıyı farklı sayfalara yönlendirmek için navigate hook'u kullanılıyor.

  useEffect(() => {
    // JSON dosyasından kelime seviyelerini çekiyoruz.
    fetch("/src/word.json") // JSON dosyasını okuyor.
      .then((response) => response.json()) // Yanıtı JSON formatına çeviriyor.
      .then((data) => setWordsByLevel(data)) // Veriyi state'e kaydediyor.
      .catch(
        (error) =>
          console.error("Kelime listesi yüklenirken hata oluştu:", error) // Hata olursa konsola yazdırıyor.
      );
  }, []);


  // Kullanıcı bir seviyeyi seçtiğinde ilgili kelime listesi sayfasına yönlendirilir.
  const handleLevelSelect = (level) => {
    navigate(`/words/${level}`); // Seçilen seviyeye göre sayfaya yönlendir.
  };

  return (
    <div>
      <h1>Lütfen seviyeni seç</h1>
      {/* JSON verisinden gelen seviyelere göre butonları oluştur */}
      {Object.keys(wordsByLevel).map((level) => (
        <button key={level} onClick={() => handleLevelSelect(level)}>
          {level} {/* Buton içinde seviyenin ismi yazdırılır. */}
        </button>
      ))}
    </div>
  );
}

export default ChooseLevel; // Bileşeni dışa aktar.

// import React, { useState, useEffect } from "react";

// function ChooseLevel() {
//   const [selectedLevel, setSelectedLevel] = useState(null);
//   const [wordsByLevel, setWordsByLevel] = useState({});

//   useEffect(() => {
//     fetch("/src/word.json")
//       .then((response) => response.json())
//       .then((data) => setWordsByLevel(data))
//       .catch((error) =>
//         console.error("Kelime listesi yüklenirken hata oluştu:", error)
//       );
//   }, []);

//   return (
//     <div>
//       <h1>Lütfen seviyeni seç</h1>
//       {Object.keys(wordsByLevel).map((level) => (
//         <button key={level} onClick={() => setSelectedLevel(level)}>
//           {level}
//         </button>
//       ))}

//       {selectedLevel ? (
//         <div>
//           <h2>{selectedLevel} Seviyesindeki Kelimeler:</h2>
//           <ul>
//             {wordsByLevel[selectedLevel]?.map((word) => (
//               <li key={word}>{word}</li>
//             ))}
//           </ul>
//         </div>
//       ) : (
//         <p>Bir seviye seçiniz.</p>
//       )}
//     </div>
//   );
// }

// export default ChooseLevel;
