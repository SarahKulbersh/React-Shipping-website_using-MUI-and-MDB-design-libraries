import React, { useContext, useState } from "react";
import { UserContext } from '../App.js';
import './stepper.css';
import { HorizontalLinearStepper } from './stepper';
import { Alert } from "@mui/material";
import { Link } from "react-router-dom";
import { MDBContainer } from "mdb-react-ui-kit";


export const Orders = () => {

    const [user, setUser] = useContext(UserContext);

    let order = [
        {
            id: 1,
            customer: "sara levi",
            stage: 2,
            deliveryDate: "01/01/2022"
        },
        {
            id: 6,
            customer: "sara levi",
            stage: 1,
            deliveryDate: "01/16/2023"
        },
        {
            id: 2,
            customer: "leah levi",
            stage: 1,
            deliveryDate: "01/01/2022"
        },
        {
            id: 3,
            customer: "rochel levi",
            stage: 3,
            deliveryDate: "03/08/2020"
        },
        {
            id: 4,
            customer: "shifra levi",
            stage: 4,
            deliveryDate: "06/12/2021"
        },
        {
            id: 1,
            customer: "adina levi",
            stage: 2,
            deliveryDate: "01/01/2022"
        },
        {
            id: 1,
            customer: "adina levi",
            stage: 4,
            deliveryDate: "01/14/2022"
        }
    ]

    let currentUserOrders = order.filter(checkUser);


    function checkUser(userDeatails) {
        return userDeatails.customer == user.name;
    }

    // if the user didn't log in
    if (user.name == '') {
        return (
            <>
                <br />
                <Alert severity="info" style={{ margin: "100px" }}>In order to see info you must log in</Alert>
                <Link to="/logIn"><button className="btn btn-primary" >Log In</button></Link>
            </>
        )
    }
    // if there are no orders under his name
    else if (currentUserOrders.length == 0) {

        return (
            <>
                <br />
                <Alert severity="info" >There are no orders under the current user</Alert>
            </>
        )
    }

    // returns all the orders under the users name
    else
        return (
            <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

                <HorizontalLinearStepper currentUserOrders={currentUserOrders} />
            </MDBContainer>
        )


}