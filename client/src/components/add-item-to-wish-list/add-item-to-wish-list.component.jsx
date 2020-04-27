import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import CustomButton from '../custom-button/custom-button.component'
import { HeartIcon } from '../icon/icon.component'
import { selectCollection } from '../../redux/shop/shop.selector'
import { addItemToWishList } from '../../redux/wishList/wish-list.actions'
import { selectWhishListCartItems } from '../../redux/wishList/wish-list.selectors'
import ReactTooltip from "react-tooltip";

const AddItemToWishList = ({ collection, addItemToWishList, wishLists, match }, props) => {

    const { items } = collection
    const item = items.filter((item, id) => id === match.params.id - 1)
    const itemToAdd = Object.assign({ collection: match.params.collectionId, ...item[0] }, props)
    const itemByIdMatchParamsId = wishLists.find(el => el.id === parseInt(match.params.id) && el.collection === match.params.collectionId)

    return (
        <Fragment>
            <a href={(e) => match.url(e)} data-tip={itemByIdMatchParamsId ? "Retirer cette article de votre liste favoris" : "Ajouter l'article à votre liste favoris"}>
                <CustomButton
                    onClick={() => addItemToWishList(itemToAdd)} wishList>
                    <HeartIcon selection={itemByIdMatchParamsId} style />
                </CustomButton>
            </a>
            <ReactTooltip place="right" type="dark" effect="float" />
        </Fragment >
    )
}
AddItemToWishList.propTypes = {
    collection: PropTypes.object.isRequired,
    item: PropTypes.object.isRequired,
}
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state),
    wishLists: selectWhishListCartItems(state),
})
const mapDispatchToProps = (dispatch) => ({
    addItemToWishList: item => dispatch(addItemToWishList(item))

})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddItemToWishList))
