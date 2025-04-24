import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function SubLevel() {
  const location = useLocation();
  const navigate = useNavigate();
  const level = location.state?.level || "A1";

  const subLevels = ["1", "2", "3", "4", "5"].map((num) => `${level}.${num}`);

  const handleSubLevelSelect = (subLevel) => {
    navigate("/wordlist", { state: { level, subLevel } });
  };

  return (
    <div>
      <h1>{level} Seviyesi - Bir alt seviye seç</h1>
      {subLevels.map((subLevel) => (
        <button key={subLevel} onClick={() => handleSubLevelSelect(subLevel)}>
          {subLevel}
        </button>
      ))}
    </div>
  );
}

export default SubLevel;

