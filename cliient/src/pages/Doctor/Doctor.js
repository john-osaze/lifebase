import { useState } from 'react';
import Select from 'react-select';

import './Doctor.css';

import Navbar from "../../components/Navbar/Navbar";
import Profiles from "../../components/Profiles/Profiles";
import { countries } from "../../Data/countries";
import { speciality } from '../../Data/specialty';
import { medicalQualifications } from '../../Data/qualification';
import { experiences } from '../../Data/experience';

const Doctor = () => {

    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedSpecialty, setSelectedSpecialty] = useState(null);
    const [selectedQualification, setSelectedQualification] = useState(null);
    const [selectedExperiences, setSelectedExperiences] = useState(null);
    
  return (
    <div className="container Doctor">
        <Navbar/>
        <main>
            <div className='top'>
                <h1>Search Doctor, Make an Appointment</h1>
                <p>Discover the best doctors, clinic & hospital the city nearest to you.</p>
            </div>
            <form>
                <div className='medical'>
                    <p className='fade'>{"(Only for Medical Treatment)"}</p>
                    <div id='inquiry'>
                        <p>Treatment inquiry for</p>
                        <div>
                            <input name="self" id="self" type="radio"/>
                            <label htmlFor="self">My Self</label>
                        </div>
                        <div>
                            <input name="self" id="someone" type="radio"/>
                            <label htmlFor="someone">Someone</label>
                        </div>
                    </div>
                </div>
                <div className='patient-input'>
                    <label htmlFor="name-input">Name</label>
                    <input id="name-input" type="text" placeholder="Patient Name"/>
                </div>
                <div className='patient-input'>
                    <label htmlFor="phone-input">Phone or Email</label>
                    <input id="phone-input" type="text" placeholder="Patient Phone or Email"/>
                </div>
                <div className='patient-input'><button>Submit</button></div>
            </form>
            <section>
                <div className='first'>
                    <div className='search'>
                        <label className='bold'>Search</label>
                        <div><input type="search" placeholder='search'/> <img src='https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-search-64.png' alt='search' className='sm-icon'/> </div>
                    </div>
                    <div className='select'>
                        <label className='bold'>Country</label>
                        <Select
                            options={countries}
                            value={selectedCountry}
                            isMulti
                            onChange={setSelectedCountry}
                            placeholder="Select Country"
                            filterOption={(option, inputValue) =>
                                option.label.toLowerCase().includes(inputValue.toLowerCase())
                            }
                        />
                    </div>
                    <div className='select'>
                        <label className='bold'>Specialty</label>
                        <Select
                            options={speciality}
                            value={selectedSpecialty}
                            isMulti
                            onChange={setSelectedSpecialty}
                            placeholder="Select Speciality"
                            filterOption={(option, inputValue) =>
                                option.label.toLowerCase().includes(inputValue.toLowerCase())
                            }
                        />
                    </div>
                    <div className='select'>
                        <label className='bold'>Qualification</label>
                        <Select
                            options={medicalQualifications}
                            value={selectedQualification}
                            isMulti
                            onChange={setSelectedQualification}
                            placeholder="Select Qualification"
                            filterOption={(option, inputValue) =>
                                option.label.toLowerCase().includes(inputValue.toLowerCase())
                            }
                        />
                    </div>
                    <div className='select'>
                        <label className='bold'>Experiences</label>
                        <Select
                            options={experiences}
                            value={selectedExperiences}
                            isMulti
                            onChange={setSelectedExperiences}
                            placeholder="Select Experience"
                            filterOption={(option, inputValue) =>
                                option.label.toLowerCase().includes(inputValue.toLowerCase())
                            }
                        />
                    </div>
                    </div>
                    <div className='second'>
                        <Profiles name={'Dr Jubemi Anthony'} title={'Cardio Surgeon'} image={'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=600'}/>
                        <Profiles name={'Dr Jubemi Anthony'} title={'Cardio Surgeon'} image={'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=600'}/>
                        <Profiles name={'Dr Jubemi Anthony'} title={'Cardio Surgeon'} image={'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=600'}/>
                        <Profiles name={'Dr Jubemi Anthony'} title={'Cardio Surgeon'} image={'https://images.pexels.com/photos/12495583/pexels-photo-12495583.jpeg?auto=compress&cs=tinysrgb&w=600'}/>
                        <Profiles name={'Dr Jubemi Anthony'} title={'Cardio Surgeon'} image={'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=600'}/>
                        <Profiles name={'Dr Jubemi Anthony'} title={'Cardio Surgeon'} image={'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400'}/>
                        <Profiles name={'Dr Jubemi Anthony'} title={'Cardio Surgeon'} image={'https://images.pexels.com/photos/3902881/pexels-photo-3902881.jpeg?auto=compress&cs=tinysrgb&w=400'}/>
                        <Profiles name={'Dr Jubemi Anthony'} title={'Cardio Surgeon'} image={'https://images.pexels.com/photos/3846038/pexels-photo-3846038.jpeg?auto=compress&cs=tinysrgb&w=400'}/>
                        <Profiles name={'Dr Jubemi Anthony'} title={'Cardio Surgeon'} image={'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=400'}/>
                    </div>
            </section>
        </main>
    </div>
  )
}

export default Doctor