import './FaceRecognition.css';

const FaceRecognition = ({ boxes, imageUrl }) => {
  return (
    <div className='image-container'>
      <div className='image-wrapper'>
        <img id='inputimage' alt='' src={imageUrl} className='image' />
        <div>
          {
            boxes.map((box, index) => (
              <div key={index}
                className='bounding-box' 
                style={{ 
                  top: box.topRow, 
                  right: box.rightCol, 
                  bottom: box.bottomRow, 
                  left: box.leftCol 
                }}>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default FaceRecognition;