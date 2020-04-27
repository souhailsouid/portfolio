import React from 'react'
import PropTypes from 'prop-types'
import WishListPage from '../wish-list/wish-list.component'
import OrderList from '../../components/order-list/orderList.component'
import Profile from '../../components/profile/profile.component'
import './profile.styles.scss'

const ServicesPage = ({ match }) => (
    <div className="collection-page">
        <h2 className="title">{match.params.serviceId === "profile" ?
            "Votre profile" : null ||
                match.params.serviceId === "commandes" ? "Vos commandes" : null

        } </h2>
        <div className="items">
            {match.params.serviceId === "profile" ? <Profile /> : null}
            {match.params.serviceId === "commandes" ? <OrderList /> : null}
            {match.params.serviceId === "favoris" ? <WishListPage /> : null}
        </div>
    </div>
)

ServicesPage.propTypes = {
    match: PropTypes.object
}

export default ServicesPage
