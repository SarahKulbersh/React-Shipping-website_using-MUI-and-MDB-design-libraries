import { Route } from "react-router";
import { Link } from "react-router-dom";
import { MDBContainer } from "mdb-react-ui-kit";

export function Home() {

    return (
        <>
        <br/>
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

            <h1 style={{color:"grey"}}>Welcome to Rocket Mail</h1>
        <img src="../post pics/banner.gif" style={{width:"100%"}}></img>
            <Link to="/logIn"><button style={{ borderRadius: "60px", position:"absolute", top:"65%", left:"44%", width:"200px", height:"60px" }} className="btn btn-primary"  >Log In</button></Link>
    </MDBContainer>
        </>
    )

}
