import { updateProfile } from 'firebase/auth';
import 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { auth, logout, upload, useAuth } from '../../../firebaseConfig';
// import { images } from '../images/images';
const Profile = () => {
  const navigate = useNavigate();

  const currentUser = useAuth();
  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [photoURL, setPhotoURL] = useState(
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png'
  );
  // const [show, setShow] = useState(false);

  const [inputName, setInputName] = useState('');
  const nameRef = useRef();
  const user = auth.currentUser;

  // Handle Log out
  const handleLogout = async () => {
    try {
      await logout();
      localStorage.removeItem('token');
      navigate('/sign-in');
    } catch (error) {
      console.log(error);
    }
  };

  // Handle Change Avatar
  const handleChangeAvt = () => {
    if (photo) {
      upload(photo, currentUser, setLoading);
      toast.success('Update successful, please reload the page');
    }else {
      toast.warning('Please choose a photo');
    }

  };
  const handleChoice = (e) => {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };
  useEffect(() => {
    if (currentUser?.photoURL) {
      setPhotoURL(currentUser.photoURL);
    }
  }, [currentUser]);

  // Handle Change Name
  const handleChangeName = (e) => {
    setInputName(e.target.value);
  };
  const db = getFirestore();

  const handleUpdateName = async () => {
    if(inputName) {
      await updateProfile(currentUser, {
        displayName: inputName,
      });
      toast.success('Update successful, please reload the page');
    } else {
      toast.warning('Please enter your name');
    }
  };
  if (user !== null) {
    user.providerData.forEach((profile) => {
      if (profile.displayName) {
        try {
          nameRef.current.textContent = 'Your Name: ' + profile.displayName;
        } catch (error) {
          console.log(error);
        }
      }
    });
  }
  return (
    <div className="col l-6 l-o-3 mt-[60px] mb-10">
      <div className="mx-auto text-center w-[30%] sm:w-[50%]">
        <img
          className="object-cover object-center w-32 h-32 mx-auto mb-4 rounded-full"
          alt="avatar_Profile"
          src={photoURL}
        ></img>
        <input
          className={'mb-5'}
          accept="image/*"
          type="file"
          onChange={handleChoice}
        />
        <button onClick={handleChangeAvt} className={loading || !photo ? 'w-full h-8 text-white bg-black opacity-60' : 'w-full h-8 text-white bg-black'}>
          Change your profile
        </button>
        {/* {
                    show && (
                        <input accept='image/*' type='file' onClick={handleChoice}></input>
                    )
                } */}
        <div className="flex items-center justify-center mt-3 mb-8">
          <h2 className="text-text__color-second">Welcome {currentUser?.email}!</h2>
          {/* <img className='w-8' src={images.loveGif} alt="loveGif" /> */}
        </div>
      </div>
      <div className="ml-5">
        <h1 className="text-2xl font-semibold">Account information</h1>
        <div className="py-5">
          <p className="font-bold text-lg">Your Email</p>
          <p>{currentUser?.email}</p>
        </div>
        <div className="pb-5">
          <p className="font-bold text-lg">Password</p>
          <p>*******</p>
        </div>
        <div className="pb-5">
          <p className='font-bold text-lg'>Full Name</p>
          
          <input
            type="text"
            className="w-[50%] bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg block p-2.5 mb-3 mt-2"
            value={inputName}
            ref={nameRef}
            onChange={handleChangeName}
            placeholder="Enter to change your name"
          />         
          <p type="text" ref={nameRef} className="mb-4 uppercase">
           * You have not entered your name
          </p>
          <button className={inputName ? "w-[160px] h-8 text-white bg-black" : "w-[160px] h-8 text-white bg-black opacity-60"} onClick={handleUpdateName}>
            Change Your Name
          </button>
        </div>
        <button className="mt-4 w-20 h-8 text-white bg-red-600" onClick={handleLogout}>
          Log Out
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Profile;
