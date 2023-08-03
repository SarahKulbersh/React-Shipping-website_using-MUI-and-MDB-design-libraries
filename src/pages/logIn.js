import { useState, useEffect, useRef } from "react";
import React, { useContext } from "react";
import { UserContext } from "../App.js";
import {MDBContainer, MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane, MDBBtn,MDBIcon, MDBInput,MDBCheckbox} from 'mdb-react-ui-kit';
import { connect } from "react-redux";
import Alert from '@mui/material/Button';
import { useNavigate } from "react-router";
import axios from "axios";
import { Checkbox } from "@mui/material";
import { CheckBox } from "@mui/icons-material";

export const LogIn = () => {

    const ref = useRef(null);

    const [users, setUsers] = useState([]);

    const [checkBox, setCheckBox] = useState(false);

    // to get the users input
    const [inputUser, setInputUser] = useState({
        id: 0,
        name: '',
        email: '',
        password: ''
    });
    // to get the global variable
    const [user1, setUser1] = useContext(UserContext);

    // changing the email and password according to what the user is putting in
    const changeHandler = (e) => {
        setInputUser({ ...inputUser, [e.target.name]: e.target.value })
    }

    const navigate = useNavigate();

    // when the user presses submit this function checks if a user with those details exsists in the data
    const checkUser = () => {
        console.log(users[0]);
        console.log(inputUser.email);
        console.log(inputUser.password);
        const usercheck = users.find(u => u.email === inputUser.email && u.password === inputUser.password);
        console.log(usercheck);
        if (usercheck) {
            console.log("Login successful");
            setUser1(usercheck);
            navigate("/order");
        } else {
            console.log("Wrong password or email");
            setJustifyActive('tab2')
        }
    }

    const checkSignUp = () => {
        const usercheck = users.find(u => u.password === inputUser.password);
        const usercheckemail = users.find(u => u.email === inputUser.email);
        if (usercheckemail != null) {
            alert("This email exsists, please log in");
            setJustifyActive('tab1');
        }
        if (!inputUser.email.includes('@'))
        alert("uncorrect email");
        else if (usercheck != null)
            alert("This password already used");
        else if (inputUser.password.length < 6)
            alert("password must be at least 6 charachters");
            else if (!ref.current?.checked)
            alert ("In order to sign up you need to agree to terms of use")
        else
        {
            addUser();
            navigate("/order");

        }

    }

    const addUser = async () => {

        const res = await axios.put('https://localhost:44326/api/users', { name: inputUser.name, password: inputUser.password, email: inputUser.email });
        console.log(res.data)
        const m = await res.data
        setUsers(m)
        setUser1(inputUser);
    }
    // for form
    const [justifyActive, setJustifyActive] = useState('tab1');;

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }

        setJustifyActive(value);
    };

    // end form

    const fetchUsers = async () => {
        const res = await axios.get('https:/localhost:44326/api/users');
        console.log(res.data);
        setUsers(res.data);
    }
    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <>
            {/* form */}
            <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
                <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
                            Login
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
                            Register
                        </MDBTabsLink>
                    </MDBTabsItem>
                </MDBTabs>
                <br />
                <MDBTabsContent>
                    <MDBTabsPane show={justifyActive === 'tab1'}>
                        <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='text' name="email" value={inputUser.email} onChange={changeHandler} />
                        <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' name="password" value={inputUser.password} onChange={changeHandler} />
                        <MDBBtn className="mb-4 w-100" onClick={checkUser} >Sign in</MDBBtn>
                    </MDBTabsPane>

                    <MDBTabsPane show={justifyActive === 'tab2'}>
                        <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text' name="name" value={inputUser.name} onChange={changeHandler} />
                        <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email' name="email" value={inputUser.email} onChange={changeHandler} />
                        <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password' name="password" value={inputUser.password} onChange={changeHandler} />
                        <div className='d-flex justify-content-center mb-4'>
                            {/* <MDBCheckbox name='checkBox' id='flexCheckDefault' label='I have read and agree to the terms'  ref={ref}/> */}
                            <MDBCheckbox name='checkBox' id='flexCheckDefault' label='I have read and agree to the terms' inputRef={ref} />

                        </div>
                        <MDBBtn className="mb-4 w-100" type="submit" onClick={checkSignUp} >Sign up</MDBBtn>
                    </MDBTabsPane>
                </MDBTabsContent>
            </MDBContainer>

            {/* end form */}

        </>
    )

}
