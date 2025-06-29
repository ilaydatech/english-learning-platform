import { Link, useParams } from "react-router-dom";
import words from "../word.json";

function SubLevel() {
  const { level } = useParams();
  const subLevels = Object.keys(words[level] || {});
  
  const handleChoosePart = (part) => {
    const userId = localStorage.getItem("userId"); // Kullanıcı id'yi buradan al
    axios
      .post("http://localhost:5000/update-progress", {
        userId,
        level,
        part,
      })
      .then((res) => {
        console.log("Backend cevabı:", res.data);
      })
      .catch((error) => {
        console.error("Hata:", error);
      });
  
  };

  return (
    <section className="sublevel-page">
      <h1>{level} – Choose a sub-level</h1>
      <div className="sublevel-list">
        {subLevels.map((part) => (
          <Link
            key={part}
            to={`/wordlist/${level}/${part}`}
            onClick={() => handleChoosePart(part)}
          >
            <button className="sublevel-btn">{part}</button>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default SubLevel;

