import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../reducers/user';
import 'antd/dist/antd.variable.min.css';
import { Button, Modal } from 'antd';
import Link from 'next/link';
// import Moment from 'react-moment';
import styles from '../styles/Accueil.module.css';

function Accueil() {
    const dispatch = useDispatch();
    const user = useSelector((state)=> state.user.value);
    console.log(user); 

const [isModalOpen, setIsModalOpen] = useState(false);;
const [signUpFirstname, setSignUpFirstname] = useState('');
const [signUpUsername, setSignUpUsername] = useState('');
const [signUpPassword, setSignUpPassword] = useState('');

const registers = () => {
    fetch('http://localhost:3000/users/signup', {
        method: 'POST',
        headers : { 'Content-Type': 'application/json' },
        body: JSON.stringify({firstname:signUpFirstname, username:signUpUsername, password:signUpPassword }),
    }).then(response => response.json ())
      .then(data => {
        if(data.result){
            dispatch(login({firstname:signUpFirstname, username:signUpUsername })) ;
            setSignUpFirstname();
            setSignUpUsername();
            setSignUpPassword();
            setIsModalVisible(false);   
        }
      })
}

// const showModal = () => {
//     setIsModalOpen(true);
//   };

//   const handleOk = () => {
//     setIsModalOpen(false);
//   };
  
//   const handleCancel = () => {
//     setIsModalOpen(false);
//   };


  
// let Modal:
// if(!user.token){
//     modalContent=(
//         <div className={styles.registerContainer}>
//             <div className={styles.registerSection}>
//             <Button type="primary" onClick={showModal}>
//         Open Modal
//       </Button>
//       <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
//         <p>Some contents...</p>
//         <p>Some contents...</p>
//         <p>Some contents...</p>
//       </Modal>
                /* <p>Sign-up</p>
                <input type="text" placeholder="Firstname" id="signUpFirstname" onChange={(e) => setSignUpFirstname(e.target.value)} value={signUpFirstname} />
        <input type="text" placeholder="Username" id="signUpUsername" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} />
          <input type="password" placeholder="Password" id="signUpPassword" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} />
          <button id="register" onClick={() => registers()}>Register</button>       */
            /* </div>
        </div>
    )
} */
return (
  
         <>
    {/* //     <Button type="primary" onClick={showModal}>
    //       Open Modal
    //     </Button>
    //     <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
    //       <p>Some contents...</p>
    //       <p>Some contents...</p>
    //       <p>Some contents...</p>
    //     </Modal> */}
      </>
      )
}


export default Accueil;