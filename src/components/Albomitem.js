import React from 'react';

function Albomitem(props) {
  const { id, thumbnailUrl, title } = props.data;
  console.log(thumbnailUrl);
  return (
    <div className="img-info-container">
      <div className="img-wrapper">
        <img
          src={thumbnailUrl}
          alt="Finovation Img"
          className="img-responsive"
        />
        <p className="img-tital">{title}</p>
        <p>id:{id}</p>
      </div>
    </div>
  );
}

export default Albomitem;
