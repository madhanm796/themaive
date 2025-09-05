import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import SignUp from './pages/auth/SignUp.jsx'
import HomePage from './pages/HomePage.jsx'
import SignIn from './pages/auth/SignIn.jsx'
import ForgotPassword from './pages/auth/ForgotPassword.jsx'
import ResetCode from './pages/auth/ResetCode.jsx'
import NewPassword from './pages/auth/NewPassword.jsx'
import NotFound from './pages/NotFound.jsx'
import CheckOut from './pages/order/CheckOut.jsx'
import PaymentSucces from './pages/order/PaymentSucces.jsx'
import PaymentFailed from './pages/order/PaymentFailed.jsx'
import Products from './pages/products/Products.jsx'
import ViewDetails from './pages/products/ViewDetails.jsx'
import Terms from './pages/policies/Terms.jsx'
import Privacy from './pages/policies/Privacy.jsx'
import Refund from './pages/policies/Refund.jsx'
import Shipping from './pages/policies/Shipping.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path={'/'} element={<App />}>
          <Route path={''} element={<HomePage/>}></Route>
          <Route path={'home'} element={<HomePage/>}></Route>
          <Route path={'/auth'}>
            <Route path={'sign-up'} element={<SignUp/>}></Route>
            <Route path={'sign-in'} element={<SignIn/>}></Route>
            <Route path={'forgot-password'} element={<ForgotPassword/>}></Route>
            <Route path={'reset-code'} element={<ResetCode/>}></Route>
            <Route path={'new-password'} element={<NewPassword/>}></Route>
          </Route>
          </Route>
          <Route path={'order/checkout'} element={<CheckOut />} />
          <Route path={'payment'}>
            <Route path={'success'} element={<PaymentSucces/>}></Route>
            <Route path={'failed'} element={<PaymentFailed/>}></Route>
          </Route>
          <Route path={'products/'} element={<Products></Products>}>
          </Route>
          <Route path={'/product/details'} element={<ViewDetails></ViewDetails>} />

          
          <Route path={'/terms-and-conditions'} element={<Terms></Terms>}></Route>
          <Route path={'/privacy-policy'} element={<Privacy></Privacy>}></Route>
          <Route path={'/return-and-refund'} element={<Refund></Refund>}></Route>
          <Route path={'/shipping-and-delivery'} element={<Shipping></Shipping>}></Route>

        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </HashRouter>
  </StrictMode>
)
