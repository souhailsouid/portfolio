import React from 'react'
import { Route, Switch} from 'react-router-dom'
// Component
import HomePage  from '../../pages/homepage/homepage.component'
import CheckoutPage from '../../pages/checkout/checkout.component'
import LoadingComponent from '../loading/loading.component'
// import DeliveryPage from '../delivery/delivery.component'
import ShopPage from '../../pages/shop/shop.component'
import SignInAndSignUp from '../../pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { withCookies} from 'react-cookie';
import ServicePage from '../../pages/service/service.component'
import ProductPage from '../../pages/product/product.component'
const Routes = (props) =>  (
    <section className='container'>
      <Switch>
      <Route exact path="/login" component={SignInAndSignUp} />
      <Route exact path='/'  
            render={() => (<HomePage cookies={props.cookies}/>)}
      />
      <Route exact path="/checkout" component={CheckoutPage}/>
      <Route exact path="/profile" component={ServicePage} />
      <Route path="/services" component={ServicePage} />
      <Route exact path="/loading" component={LoadingComponent}/>
      <Route path="/shop" component={ShopPage} />
      <Route path="/product" component={ProductPage} />
      </Switch>
    </section>
)

export default  withCookies(Routes)
