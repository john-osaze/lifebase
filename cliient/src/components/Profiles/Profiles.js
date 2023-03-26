import './Profile.css';

const Profiles = ({image, name, title}) => {
  return (
    <div className='Profile'>
        <div className='img'>
            <img src={image} alt="profile picture"/>
        </div>
        <p className='bold'>{name}</p>
        <p className='fade'>{title}</p>
        <button>Book An Appointment!</button>
    </div>
  )
}

export default Profiles