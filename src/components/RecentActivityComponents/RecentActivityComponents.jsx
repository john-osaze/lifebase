import React from 'react';
import './RecentActivityComponents.css';

const RecentActivityComponents = () => {
    return (
        <>
            <div className="activity-feed">
                <div className="feed-item">
                    <div className="date">Sep 25</div>
                    <div className="text">Added a personal <a href="./appointments">“comment”</a></div>
                </div>
                <div className="feed-item">
                    <div className="date">Sep 24</div>
                    {/* <div className="text">Responded to need <a href="#">“Medical Checkup”</a></div> */}
                    <div className="text">Booked a Doctor's “Appointment”</div>
                </div>
                <div className="feed-item">
                    <div className="date">Sep 23</div>
                    <div className="text">Joined the group <a href="#">“Boardsmanship Forum”</a></div>
                </div>
                <div className="feed-item">
                    <div className="date">Sep 21</div>
                    <div className="text">Completed a <a href="/prescriptions">“Prescription</a> Dosage</div>
                </div>
                <div className="feed-item">
                    <div className="date">Sep 18</div>
                    <div className="text">Booked a Doctors <a href="./appointments">“Appointment”</a></div>
                </div>
                <div className="feed-item">
                    <div className="date">Sep 17</div>
                    <div className="text">Responded to need <a href="./medical-reports">“Medical Checkup”</a></div>
                    {/* <div className="text">Attending the event <a href="#">“Some New Event”</a></div> */}
                </div>
            </div>
            
        </>
    )
}

export default RecentActivityComponents
