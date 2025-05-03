import React, { useEffect, useState } from "react";
import axios from "axios";

const YouTubePlayer = ({ word }) => {
  const [videoId, setVideoId] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/youtube/search?q=${word}`
        );
        setVideoId(res.data.videoId);
      } catch (err) {
        console.error("Video alınamadı:", err);
      }
    };

    fetchVideo();
  }, [word]);

  return videoId ? (
    <iframe
      width="640"
      height="360"
      src={`https://www.youtube.com/embed/${videoId}`}
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
      title="YouTube video player"
    ></iframe>
  ) : (
    <p>Video yükleniyor...</p>
  );
};

export default YouTubePlayer;
