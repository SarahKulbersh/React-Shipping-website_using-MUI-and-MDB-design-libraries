import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import { Home } from './pages/home';
import { LogIn } from './pages/logIn';
import { Shop } from './pages/shop';
import { Cart } from './pages/cart';
import { CheckOut } from './pages/checkOut';
import { Orders } from './pages/orders';
import { HorizontalLinearStepper } from './pages/stepper';
import './App.css';
import React, { useState } from 'react';
import { MDBFooter, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBBadge,
  MDBCollapse
} from 'mdb-react-ui-kit';
export const UserContext = React.createContext();
export const cartContext = React.createContext();

function App() {

  const [inputUser, setInputUser] = useState({
    id: 0,
    name: 'Geust',
    email: '',
    password: ''
  });

  const [cart, setCart] = useState([]);

  const [showNavColorThird, setShowNavColorThird] = useState(false);

  return (
    <>
      <div>
        {/* logo */}
        <MDBNavbar expand='lg' sticky light style={{ backgroundColor: 'lightgrey' }}>
          <MDBContainer fluid>
            <MDBNavbarBrand href='#'>
              <img src="/post pics/logo.png"
                height="40px"
                loading="lazy"
              />
            </MDBNavbarBrand>
            {/* end logo */}
            <MDBNavbarToggler
              type='button'
              data-target='#navbarColor02'
              aria-controls='navbarColor02'
              aria-expanded='false'
              aria-label='Toggle navigation'
              onClick={() => setShowNavColorThird(!showNavColorThird)}
            >
              <MDBIcon icon='bars' fas />
            </MDBNavbarToggler>
            <MDBCollapse show={showNavColorThird} navbar>
              <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>

                <MDBNavbarItem>
                  <MDBNavbarLink style={{ fontFamily: "Microsoft JhengHei UI Light" }} > <Link to="/logIn">Personal Account</Link></MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink style={{ fontFamily: "Microsoft JhengHei UI Light" }} > <Link to="/order">Orders</Link></MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink style={{ fontFamily: "Microsoft JhengHei UI Light" }} ><Link to="/shop">Shop</Link></MDBNavbarLink>
                </MDBNavbarItem>

                {/* shopping cart */}
                <MDBNavbarItem>
                  <MDBNavbarLink style={{ fontFamily: "Microsoft JhengHei UI Light" }}><Link to="/cart">
                    <MDBBadge pill color='danger'>{cart.length}</MDBBadge>
                    <span>
                      <MDBIcon fas icon='shopping-cart'></MDBIcon>
                    </span>
                  </Link>
                  </MDBNavbarLink>
                </MDBNavbarItem>
                {/* end shopping cart */}


                <MDBNavbarItem>
                  <MDBNavbarLink style={{ fontFamily: "Microsoft JhengHei UI Light" }} >Welcome {inputUser.name}</MDBNavbarLink>
                </MDBNavbarItem>

              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>

        <div style={{ minHeight: "300px" }}>
          <cartContext.Provider value={[cart, setCart]}>
            <UserContext.Provider value={[inputUser, setInputUser]}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/order" element={<Orders />} />
                <Route path="/logIn" element={<LogIn />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkOut" element={<CheckOut />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/stepper" element={<HorizontalLinearStepper />} />
              </Routes>
            </UserContext.Provider>
          </cartContext.Provider>
        </div>
      </div>

      <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>

        <section className=''>
          <MDBContainer className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
              <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>
                  <MDBIcon color='primary' icon='gem' className='me-3' />
                  Rocket Mail
                </h6>
                <p>
                  Since 1980 serving happy customers. Express mailing service.
                </p>
              </MDBCol>



              <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>

                <p>
                  <MDBNavbarLink ><Link to="/shop" className='text-reset'>shop</Link></MDBNavbarLink>
                </p>
                <p>
                  <MDBNavbarLink ><Link to="/order" className='text-reset'>Orders</Link></MDBNavbarLink>
                </p>
                <p>
                  <MDBNavbarLink ><Link to="/cart" className='text-reset'>shopping cart</Link></MDBNavbarLink>
                </p>
                <p>
                  <MDBNavbarLink ><Link to="/logIn" className='text-reset'>Register</Link></MDBNavbarLink>
                </p>
              </MDBCol>

              <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                <p>
                  <MDBIcon color='primary' icon='home' className='me-2' />
                  New York, NY 10012, US
                </p>
                <p>
                  <MDBIcon color='primary' icon='envelope' className='me-3' />
                  info@rocketmail.com
                </p>
                <p>
                  <MDBIcon color='primary' icon='phone' className='me-3' /> + 01 234 567 88
                </p>
                <p>
                  <MDBIcon color='primary' icon='print' className='me-3' /> + 01 234 567 89
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

      </MDBFooter>

    </>
  )

}

export default App;