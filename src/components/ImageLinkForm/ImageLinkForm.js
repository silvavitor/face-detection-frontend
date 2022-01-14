import './ImageLinkForm.css';

import Button from '../Button/Button';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className='imageForm'>
      <p className='imageForm__text'>Insert the image URL below</p>
      <div className='imageForm__wrapper'>
        <input className='imageForm__input' onChange={onInputChange} ></input>
        <Button content='DETECT' customClass='button--black' onButtonSubmit={onButtonSubmit} />
      </div>
    </div>
  );
};

export default ImageLinkForm;