import React, { useContext } from "react"
import { cartContext } from "../App.js";
import { useState } from "react";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';
export const Products = () => {

    const [cart, setCart] = useContext(cartContext);

    const click = (prod) => {
        setCart([...cart, { ...prod }]);
    }
    const [prod] = useState([
        {
            id: 1,
            name: "american stamps",
            picLink: "./post pics/american stamps.jpg",
            price: "$5"
        },
        {
            id: 10,
            name: "colorful envolopes",
            picLink: "./post pics/colorful envolopes.jpg",
            price: 100
        },
        {
            id: 9,
            name: "Cardboard gift box",
            picLink: "./post pics/Cardboard gift box.jpg",
            price: 100
        },

        {
            id: 11,
            name: "colorful exspress seal bags",
            picLink: "./post pics/colorful exspress seal bags.jpg",
            price: 100
        },
        {
            id: 3,
            name: "USA stamps",
            picLink: "./post pics/usa stamps.jpg",
            price: "$4"
        },
        {
            id: 5,
            name: "beutiful stamps",
            picLink: "./post pics/beutiful stamps.jpg",
            price: "$5"
        },
        {
            id: 4,
            name: "stamps",
            picLink: "./post pics/stamps.jpg",
            price: "$5"
        },

        {
            id: 2,
            name: "american money stamps",
            picLink: "./post pics/american money stamps.jpg",
            price: "$10"
        },
        {
            id: 6,
            name: "brown paper a4 envolopes stamps",
            picLink: "./post pics/brown paper a4 envolopes.jpg",
            price: "$4"
        },
        {
            id: 7,
            name: "cardboard box",
            picLink: "./post pics/cardboard box.jpg",
            price: "$6"
        },
        {
            id: 8,
            name: "cardboard envolope",
            picLink: "./post pics/cardboard envolope.jpg",
            price: "$3"
        },

        {
            id: 12,
            name: "us flag stamps",
            picLink: "./post pics/us flag stamps.jpg",
            price: 100
        },
        {
            id: 13,
            name: "large cardboard",
            picLink: "./post pics/large cardboard.jpg",
            price: 100
        },
        {
            id: 14,
            name: "pink bubble shipping envolope",
            picLink: "./post pics/pink bubble shipping envolope.jpg",
            price: 100
        },
        {
            id: 15,
            name: "white cardboard envolope",
            picLink: "./post pics/white cardboard envolope.jpg",
            price: 100
        }
    ]);


    return (
        <>

            {prod.map((prod, idx) => (
                <div key={idx} style={{ display: "inline-table", gridTemplateColumns: "1fr 1fr 1fr ", padding: "10px", width: "250px" }} >
                    <MDBCard>
                        <MDBCardImage src={prod.picLink} position='top' alt={prod.name} />
                        <MDBCardBody>
                            <MDBCardTitle>{prod.name}</MDBCardTitle>
                            <MDBCardText>{prod.price}</MDBCardText>
                            <MDBBtn href='#' onClick={() => click(prod)}>Add to cart</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </div>
            ))}

        </>

    )
}