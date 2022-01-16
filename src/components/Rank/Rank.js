import './Rank.css';

const Rank = ({ user, entries }) => {
  return (
    <div className='rank__wrapper'>
      <p className='rank__text'>{`${user.toUpperCase()}, YOU DETECTED ${entries} FACES`}</p>
    </div>
  );
};

export default Rank;