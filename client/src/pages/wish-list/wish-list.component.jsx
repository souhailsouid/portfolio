import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'
import { Grid, Image } from 'semantic-ui-react'
import CartItem from '../../components/cart-item/cart-item.component'
import { selectWhishListCartItems } from '../../redux/wishList/wish-list.selectors'
import { withRouter } from 'react-router-dom'
import './wish-list.styles.scss'
const WishListPage = ({ WishListItems, match }) => (
  <article className="wish-list-page">
    <section className='wish-items' >

      {WishListItems.length
        ?
        <Fragment>
          <h1 className="wish-list-title">Les produits que vous avez sauvegardés pour plus tard</h1>
          {WishListItems.map(WishListItem =>
            <CartItem key={WishListItem.id} item={WishListItem} />)}
        </Fragment>
        : (

          <article>
            <span className="empty-wish-list">
              {match.params.serviceId === "favoris" ? "Votre liste est vide" : "Votre panier est vide"}
            </span>
            <br /><br />
            <Grid>
              <Grid.Column width={4}>
                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
              </Grid.Column>
              <Grid.Column width={9}>
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
              </Grid.Column>
              <Grid.Column width={3}>
                <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
              </Grid.Column>
            </Grid>

          </article>
        )}

    </section>

  </article>
)

WishListPage.propTypes = {
  WishListItems: PropTypes.object,
  match: PropTypes.object

}
const mapStateToProps = createStructuredSelector({
  WishListItems: selectWhishListCartItems,

})


export default withRouter(connect(mapStateToProps)(WishListPage))
