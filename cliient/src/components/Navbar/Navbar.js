import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
        <div>  
            <h4>Lifebase</h4>
            <div id="boarder">
                <p>Dashboard</p>
                <p>Status</p>
                <p>Medicine</p>
            </div>
        </div>
        <div>
            <img className="sm-icon" src="https://cdn4.iconfinder.com/data/icons/buno-audio/32/bell_notification_ring-64.png" alt="bell" />
            <img className="icon" src="https://cdn4.iconfinder.com/data/icons/people-avatar-filled-outline/64/girl_long_hair_female_people_woman_user_avatar-2-64.png" alt="Icon" />
            <p>Anthony</p>
        </div>
    </nav>
  )
}

export default Navbar