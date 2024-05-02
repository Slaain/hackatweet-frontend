import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../reducers/user';
import { Modal } from 'antd';
import Link from 'next/link';
import Moment from 'react-moment';
import styles from '../styles/Header.module.css';

function Accueil() {
    const dispatch = useDispatch();
    const user = useSelector((state)=> state.user.value);
    console.log(user); 

const [isModalVisible, setIsModalVisible] = useState(false);
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
        }
      })
}










}