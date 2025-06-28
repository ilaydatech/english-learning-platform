import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Progress() {
    try{
     await axios.post("/update-progress", { userId, level, part });

    }catch(error){

    }
  return (
    <div>Progress</div>
  )
}
