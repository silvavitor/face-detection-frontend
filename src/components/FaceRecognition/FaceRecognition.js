import './FaceRecognition.css';

const FaceRecognition = ({ box, imageUrl }) => {
  return (
    <div className='image-container'>
      <div className='image-wrapper'>
        <img id='inputimage' alt='' src={imageUrl} className='image' />
        <div className='bounding-box' style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>
      </div>
    </div>
  );
};

export default FaceRecognition;