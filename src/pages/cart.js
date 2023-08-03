import { Link } from "react-router-dom";
import React, { useContext } from "react"
import { cartContext } from "../App.js";
import { Alert } from "@mui/material";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';

export const Cart = () => {

    const removeFromCart = (productToRemove) => {
        setCart(
            cart.filter((prod) => prod !== productToRemove)
        )
    }
    const [cart, setCart] = useContext(cartContext);
    if (cart.length == 0)
        return (
            <>
                <div >
                    <br />
                    <Alert severity="info">No Products</Alert>
                    <Link to="/shop">start shopping</Link>
                </div>
            </>
        )
    else

        return (
            <>
                <br />
                <Link to="/checkOut">check out</Link>
                <br />
                <Link to="/shop">continue shopping</Link>
                <br />
                {cart.map((prod, idx) => (
                    <div key={idx} style={{ display: "inline-table", gridTemplateColumns: "1fr 1fr 1fr ", padding: "10px", width: "250px" }} >
                        <MDBCard>
                            <MDBCardImage src={prod.picLink} position='top' alt={prod.name} />
                            <MDBCardBody>
                                <MDBCardTitle>{prod.name}</MDBCardTitle>
                                <MDBCardText>{prod.price}</MDBCardText>
                                <MDBBtn href='#' onClick={() => removeFromCart(prod)}>Remove</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </div>
                ))}

            </>)
}