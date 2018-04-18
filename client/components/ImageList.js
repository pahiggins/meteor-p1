import React from 'react';
import ImageDetail from './ImageDetail';

const ImageList = (props) => {
  console.log(props.images);
  const validImages = props.images.filter(image => !image.is_album);

  console.log(validImages);
  const renderImages = validImages.map(image => <ImageDetail key={image.title} image={image}/>);

  return (
    <ul className="media-list list-group">
      {renderImages}
    </ul>
  );
}

export default ImageList;