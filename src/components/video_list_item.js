import React from 'react';

const VideoListItem = ({video, onVideoClick}) => {
  return (
    <li onClick={() => {onVideoClick(video)}} className="video-list media">
      <div className="media-left">
        <img src={video.snippet.thumbnails.default.url} alt="" className="media-object"/>
      </div>
      <div className="media-body">
        <div className="media-heading">{video.snippet.title}</div>
      </div>
    </li>
  );
}

export default VideoListItem;
