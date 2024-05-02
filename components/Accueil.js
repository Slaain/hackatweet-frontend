import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../reducers/user';
import { Button, Modal } from 'antd';
import Link from 'next/link';
// import Moment from 'react-moment';
import styles from '../styles/Accueil.module.css';
import { useDispatch,useSelector } from 'react-redux';

function Accueil() {
    const dispatch = useDispatch();
    const user = useSelector((state)=> state.user.value);
    console.log(user); 

const [isModalOpen, setIsModalOpen] = useState(false);
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
        console.log(data)
        if(data.result){
            dispatch(login({firstname:signUpFirstname, username:signUpUsername })) ;
            setSignUpFirstname();
            setSignUpUsername();
            setSignUpPassword();
            setIsModalVisible(false);   
        }
      })
}

const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

let modalContent;
if(!user.token){
  modalContent=(
    <div className={styles.registerContainer}>
            <div className={styles.registerSection}>
    <Button type="primary" onClick={showModal}>
        Sign Up
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <input type="text" placeholder="Firstname" id="signUpFirstname" onChange={(e) => setSignUpFirstname(e.target.value)} value={signUpFirstname} />
      <input type="text" placeholder="Username" id="signUpUsername" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} />
      <input type="password" placeholder="Password" id="signUpPassword" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} />
      <button id="register" onClick={() => registers()}>Register</button>  
      
      </Modal>
      </div>
      </div>
  )
}
  
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
      
      {setIsModalOpen && <div id="react-modals">
        <Modal getContainer="#react-modals" className={styles.modal} visible={setIsModalOpen} closable={true} footer={null}>
          {modalContent}
        </Modal>
      </div>}
    </>
  );
}


export default Accueil;