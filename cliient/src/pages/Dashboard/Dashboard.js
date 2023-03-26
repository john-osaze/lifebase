import 'chart.js/auto';
import Line from '../../components/Charts/Line';
import Bar from '../../components/Charts/Bar';
import MyCalendar from '../../components/Charts/Calendar';
import MyVideo from '../../components/Charts/MyVideo';
import Navbar from '../../components/Navbar/Navbar';
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="container Dashboard">
        <Navbar/>
        <main>
            <section>
                <div className="bold"><p>Hi, Anthony.</p><p>Check your Health!</p></div>
                <div>
                    <div id="green"><img className="sm-icon" src="https://cdn2.iconfinder.com/data/icons/funtime-objects-part-2/60/005_056_okay_approve_check_test_good_vote-64.png" alt="check" /> Healthy</div>
                    <div>
                        <p className="fade">March 20 2023</p>
                        <div className="spread">
                           <div>
                                <img className="icon" src="https://cdn0.iconfinder.com/data/icons/Pry_Black_png/256/Stethoscope_Black.png" alt="folder"/>
                                <p>Annual <br/> Check Up</p>
                           </div>
                            <img src="https://cdn2.iconfinder.com/data/icons/user-interface-16x16-vol-1/16/download-64.png" alt="load" className="sm-icon" />
                        </div>
                    </div>
                </div>
                <div className='charts'><Line/></div>
                <div className='charts'><Bar/></div>
            </section>
            <section>
                <div className='charts'>
                    <p id='book'>Book an appointment!</p>
                    <MyCalendar/>
                </div>
                <div>
                    <div className='spread'><p>Information</p><p className='fade'>See All</p></div>
                    <div className='details'>
                        <p>Details</p> 
                        <div className='details-cont'>
                        <div>
                            <p>Blood</p>
                            <p>O-</p>
                        </div> 
                        <div>
                            <p>Height</p>
                            <p>6ft</p>
                        </div> 
                        <div>
                            <p>Weight</p>
                            <p>60kg</p>
                        </div>
                        </div>
                    </div>
                <div>
                    <p>Allergies</p> 
                    <div className='details-cont'>
                        <img className="icon" src= "https://cdn3.iconfinder.com/data/icons/food-1061/136/41-64.png" alt="allergy" />
                        <img className="icon" src="https://cdn3.iconfinder.com/data/icons/foods-beverages/512/Honey-64.png" alt="allergy" />
                        <img className="icon" src="https://cdn1.iconfinder.com/data/icons/food-5-7/128/Vigor_Chocolate-Bar-Dark-Sweet-Cocoa-Yummy-64.png" alt="allergy" />
                        <img className="icon" src="https://cdn0.iconfinder.com/data/icons/lifestyle-entertainment-vol-2/512/whisk_mixer_beater_egg-64.png" alt="allergy" />
                    </div>
                </div>
                <div>
                    <p>Lifebase ID</p>
                    <div>
                    <div className='details-cont'>
                        <p className='bold'>220090XHD</p>
                    </div>
                    <p id='appoint'>Appointments</p>
                    <div className='details-cont green'>
                        <p>No pending appointments!</p>
                    </div>
                    </div>
                </div>
                </div>

            </section>
            <section>
                <p>Recommendation</p>
                <h2>Reasons why you should stay away from carbonated drinks!</h2>
                <MyVideo identity={'o4djUG8wExs'}/>
            </section>
            <section>
                <p>Recommendation</p>
                <h2>Weight reduction secrets!</h2>
                <MyVideo identity={'jAleN08I57w'}/>
            </section>
        </main>
    </div>
  )
}

export default Dashboard