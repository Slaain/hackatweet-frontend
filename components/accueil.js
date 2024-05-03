import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../reducers/user';
import { Button, Modal } from 'antd';
import styles from '../styles/Accueil.module.css';

function Accueil() {
    const router = useRouter()
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.value);

    const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
    const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
    const [signUpFirstname, setSignUpFirstname] = useState('');
    const [signUpUsername, setSignUpUsername] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');
    const [signInUsername, setSignInUsername] = useState('');
    const [signInPassword, setSignInPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    
    const registerUser = (setErrorMessage) => {
        fetch('http://localhost:3000/users/signups', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ firstname: signUpFirstname, username: signUpUsername, password: signUpPassword }),
        }).then(response => response.json())
            .then(data => {
                if (data.result) {
                    dispatch(login({ firstname: signUpFirstname, username: signUpUsername }));
                    setSignUpFirstname('');
                    setSignUpUsername('');
                    setSignUpPassword('');
                    setIsSignUpModalOpen(false);
                    window.location.href = '/home';
                    console.log('vous etes connectés')
                }
                // else{
                //     setErrorMessage('Utilisateur déjà connu.');
                // }
            });
    };

    const signInUser = () => {
        fetch('http://localhost:3000/users/signins', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: signInUsername, password: signInPassword }),
        }).then(response => response.json())
            .then(data => {
                if (data.result) {
                    dispatch(login({ username: signInUsername, token: data.token }));
                    setSignInUsername('');
                    setSignInPassword('');
                    setIsSignInModalOpen(false);
                    router.push('/home')
                    console.log('vous etes connecté');
                }
            });
    };

    const showSignUpModal = () => {
        setIsSignUpModalOpen(true);
    };

    const showSignInModal = () => {
        setIsSignInModalOpen(true);
    };

    const handleSignUpCancel = () => {
        setIsSignUpModalOpen(false);
    };

    const handleSignInCancel = () => {
        setIsSignInModalOpen(false);
    };

    return (
        <>
        <div className={styles.containerB}>
            <Button type="primary" onClick={showSignUpModal} className={styles.signIn}>Sign Up</Button>
            <p>Already have an account?</p>
            <Button type="primary" onClick={showSignInModal} className={styles.signUp}>Sign In</Button>
      </div>    
            <Modal visible={isSignUpModalOpen} onCancel={handleSignUpCancel} footer={null}>
                <input type="text" className={styles.champs} placeholder="Firstname" value={signUpFirstname} onChange={(e) => setSignUpFirstname(e.target.value)} />
                <input type="text" className={styles.champs} placeholder="Username" value={signUpUsername} onChange={(e) => setSignUpUsername(e.target.value)} />
                <input type="password" className={styles.champs} placeholder="Password" value={signUpPassword} onChange={(e) => setSignUpPassword(e.target.value)} />
                <Button type="primary" className={styles.buttonzz} onClick={registerUser((setErrorMessage))} value={errorMessage}>Register</Button>
            </Modal>
    
            <Modal visible={isSignInModalOpen} onCancel={handleSignInCancel} footer={null} >
                <input type="text" placeholder="Username" value={signInUsername} onChange={(e) => setSignInUsername(e.target.value)} />
                <input type="password" placeholder="Password" value={signInPassword} onChange={(e) => setSignInPassword(e.target.value)} />
                <Button type="primary" onClick={signInUser}>Sign In</Button>
            </Modal>
            
        </>
    );
}

export default Accueil;
