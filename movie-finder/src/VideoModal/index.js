import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';

import { getTrailer } from '../Actions';

// There is a bug for react-bootstrap https://github.com/LeGroupeDeFer/infom114_LaboMDL/issues/55
export default function VideoModal(props) {
  const [video, setVideo] = useState(null);
  const [loading, setloading] = useState(true);
  const { id, mediatype } = props;

  const getTrailerVideos = async () => {
    const videos = await getTrailer(id, mediatype);
    setVideo(videos.results[0]);
    setloading(false);
  };

  useEffect(() => {
    getTrailerVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderNoVidMessage = () => {
    return <h6>No Trailers Available</h6>;
  };

  const renderLoading = () => {
    return <i className="fa fa-lg fa-spinner fa-pulse"></i>;
  };

  return (
    <div>
      <Modal
        {...props}
        className="playback-modal"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <h5>{video && video.name}</h5>
        </Modal.Header>
        <Modal.Body>
          {loading ? (
            renderLoading()
          ) : video ? (
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                src={
                  video &&
                  `https://www.youtube.com/embed/${video.key}?autoplay=0`
                }
                id="video"
                title={id}
              />
            </div>
          ) : (
            renderNoVidMessage()
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}
