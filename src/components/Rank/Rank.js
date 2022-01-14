import './Rank.css';

const Rank = ({ user, entries }) => {
  return (
    <div className='rank__wrapper'>
      <p className='rank__text'>{`${user.toUpperCase()}, YOUR CURRENT ENTRY COUNT IS ${entries}`}</p>
    </div>
  );
};

export default Rank;