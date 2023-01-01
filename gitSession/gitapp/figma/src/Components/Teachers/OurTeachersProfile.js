import React from 'react';
import './teacherProfile.css';
import profileImage from './Images/profileImage.jpg';

function OurTeachersProfile() {
  return (
    <div className='teacherprofile_container'>
     <div className="teacherProfile">
        <div className="profilImage">
            <img src = {profileImage}></img>
        </div>
        <div className="profileInfo">
            <div className="name">Aaran Finch</div>
            <div className="designation">Marketing Teacher</div>
            <div className="about">Aaran Finch is one of the best digital marketing course mentor of our paltform. He is very generous.</div>
            <div className="profile_btn">
                <button>View Profile</button>
            </div>
        </div>
     </div>
     <div className="teacherProfile">
     <div className="profilImage">
     <img src = {profileImage}></img>
     </div>
        <div className="profileInfo">
        <div className="name">Aaran Finch</div>
            <div className="designation">Marketing Teacher</div>
            <div className="about">Aaran Finch is one of the best digital marketing course mentor of our paltform. He is very generous.</div>
            <div className="profile_btn">
                <button>View Profile</button>
            </div>
        </div>
     </div>
     <div className="teacherProfile">
     <div className="profilImage">
     <img src = {profileImage}></img>
     </div>
        <div className="profileInfo"> <div className="name">Aaran Finch</div>
            <div className="designation">Marketing Teacher</div>
            <div className="about">Aaran Finch is one of the best digital marketing course mentor of our paltform. He is very generous.</div>
            <div className="profile_btn">
                <button>View Profile</button>
            </div>
            </div>
            
     </div>
     <div className="teacherProfile"> <div className="profilImage">
     <img src = {profileImage}></img>
     </div>
        <div className="profileInfo">
        <div className="name">Aaran Finch</div>
            <div className="designation">Marketing Teacher</div>
            <div className="about">Aaran Finch is one of the best digital marketing course mentor of our paltform. He is very generous.</div>
            <div className="profile_btn">
                <button>View Profile</button>
            </div>
            </div></div>
    </div>
  )
}

export default OurTeachersProfile