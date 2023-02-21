import "./VideoItem.css";
import React from "react";

export default function VideoItem({ video, onVideoSelect }) {
  return (
    <div className="video-item item" onClick={() => onVideoSelect(video)}>
      <img
        alt="avatar"
        src={video.snippet.thumbnails.medium.url}
        className="ui image"
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
}
