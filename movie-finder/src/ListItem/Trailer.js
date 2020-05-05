import React, { useState } from 'react';

import VideoModal from './VideoModal';

export default function Trailer(props) {
  const { id, mediatype } = props;
  const [modalShow, setModalShow] = useState(false);

  const getTrailerData = () => {
    setModalShow(true);
  };
  return (
    <div>
      <button
        className="btn btn-success btn-sm pl-3 pr-3"
        onClick={() => getTrailerData()}
      >
        <i className="fa fa-play mr-2"></i>
        Play Trailer
      </button>
      {modalShow ? (
        <VideoModal
          key={id}
          show={modalShow}
          id={id}
          mediatype={mediatype}
          onHide={() => setModalShow(false)}
        />
      ) : null}
    </div>
  );
}
