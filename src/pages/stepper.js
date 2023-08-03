import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';
const steps = ['Waiting to be shipped', 'On the way ', 'Delivered successfuly'];

export const HorizontalLinearStepper = ({ currentUserOrders }) => {

    return (
        <>
            {currentUserOrders.map(((order, idx) => (
                <Box key={idx} style={{ width: "100%", minWidth: "350px", margin: "auto" }}>
                    <MDBCard style={{ padding: "10px" }}>
                        <MDBCardBody>
                            <MDBCardTitle>Order {idx + 1}</MDBCardTitle>
                            <MDBCardText>Estimated arrival date: {order.deliveryDate}</MDBCardText>
                            <Stepper activeStep={order.stage - 1}>
                                {steps.map((label, index) => {
                                    const labelProps = {};
                                    return (
                                        <Step key={label}>
                                            <StepLabel {...labelProps}>{label}</StepLabel>
                                        </Step>
                                    );
                                })}

                            </Stepper>
                        </MDBCardBody>
                    </MDBCard>
                    <br />
                </Box>
            )))}
        </>
    );
}