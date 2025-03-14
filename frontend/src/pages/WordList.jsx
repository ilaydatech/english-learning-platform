import React from "react";
import { useParams, Link } from "react-router-dom"; // URL'den seviye bilgisini almak için React Router'dan useParams kullanılır.

function WordList({ wordsByLevel }) {
  const { level } = useParams(); // URL'den gelen seviyeyi al.
  const words = wordsByLevel[level] || []; // Eğer seviyeye ait kelime varsa getir, yoksa boş liste döndür.

  return (
    <div>
      <h2>{level} Seviyesindeki Kelimeler:</h2>
      <ul>
        {/* Seçilen seviyeye ait kelimeleri listele */}
        {words.map((word, index) => (
          <li key={index}>{word}</li> // Kelime listesi render edilir.
        ))}
      </ul>
      {/* Kullanıcıyı tekrar ana sayfaya yönlendiren buton */}
      <Link to="/">Geri Dön</Link>
    </div>
  );
}

export default WordList; // Bileşeni dışa aktar.
