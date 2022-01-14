import "./Button.css";

const Button = ({ content, customClass, onButtonSubmit }) => {
  return (
    <p className={`button ${customClass}`} onClick={onButtonSubmit}>
      {content}
    </p>
  );
};

export default Button;