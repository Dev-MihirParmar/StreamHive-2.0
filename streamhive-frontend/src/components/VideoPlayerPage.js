import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function VideoPlayerPage() {
  const { id } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await axios.get(`/api/videos/${id}`);
        setVideo(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVideo();
  }, [id]);

  return (
    <div>
      {video ? (
        <div>
          <h2>{video.title}</h2>
          <video controls>
            <source src={video.url} type="video/mp4" />
          </video>
          <p>{video.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default VideoPlayerPage;
