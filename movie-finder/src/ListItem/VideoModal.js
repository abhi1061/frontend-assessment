import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';

import { getTrailer } from '../Actions';

export default function VideoModal(props) {
  const [video, setVideo] = useState(null);
  const { id, mediatype } = props;

  const getTrailerVideos = async () => {
    const videos = await getTrailer(id, mediatype);
    setVideo(videos.results[0]);
  };

  useEffect(() => {
    getTrailerVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Modal
        {...props}
        className="playback-modal"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src={
                video && `https://www.youtube.com/embed/${video.key}?autoplay=0`
              }
              id="video"
              title={id}
            ></iframe>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
