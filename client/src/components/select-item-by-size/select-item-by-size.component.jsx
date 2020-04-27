import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import CustomButton from '../custom-button/custom-button.component'
import { ShoppingIcon } from '../icon/icon.component'
import { selectCollection } from '../../redux/shop/shop.selector'
import QuantitySelect from '../select-quantity/select-quantity.component'
import SelectComponent from '../select/select.component'
import { addItem } from '../../redux/cart/cart.actions'
import './select-item-by-size.styles.scss'


const SelectItemBySize = ({ collection, props, addItem, match }) => {

    const { items } = collection
    const [size, setSize] = useState(null)
    const [notification, setNotification] = useState('')
    const [quantity, setQuantity] = useState(1)

    const item = items.filter((item, id) => id === props.match.params.id - 1)
        .map(item => (item))
    const { price, stocks, imageUrl, name } = item[0]

    const sizeOptions =
        stocks ? stocks.map((item, i) => {
            const { size } = item
            return (
                Object.assign({ value: size, label: size.toUpperCase() })
            )
        }) : null

    function search(sizeKey, stock) {
        for (var i = 0; i < stock.length; i++) {
            if (stock[i].size === sizeKey) {
                return stock[i];
            }
        }
    }
    const sizeValue = size ? size.value : null
    const resultObject = search(sizeValue, stocks);
    const quantityBySize = resultObject ? resultObject.quantity : null

    const arr = []
    for (let i = 1; i <= quantityBySize; i++) {
        arr.push(i)
    }

    const quantityOptions = arr.map(el => Object.assign({ value: el, label: el }))
    const handleSubmit = async (event) => {
        event.preventDefault()

        if (size === null)
            setNotification("Veuillez selectionner une taille de vêtement")
        else if (quantityBySize !== 0) {
            const add =
                Object.assign({
                    name: name,
                    imageUrl: imageUrl,
                    quantity: quantity,
                    size: sizeValue,
                    price: price,
                    collection: match.params.collectionId
                })
            const add_item_to_basket_and_update_stock = () => (
                // eslint-disable-next-line
                addItem(add),
                resultObject.quantity -= quantity
            )
            add_item_to_basket_and_update_stock()
        }

    }

    function decrement() {
        setQuantity(quantity > 2 ? quantity - 1 : 1)
    }
    const notificationStock = quantityOptions.length - quantity + 1

    return (
        <article>

            <span className="price"> {price}&nbsp;€ </span>
            <section className="notification">
                {notificationStock === 1 && notificationStock !== 0 ? <p className="message">Attention dernier article !</p> : null}
                {notificationStock > 1 && notificationStock <= 6 && notificationStock !== 0 ? <p className="message">Stock limité !</p> : null}
                {notificationStock >= 7 && notificationStock !== 0 ? <p className="message-success">Disponible !</p> : null}
            </section>
            <section className="select">
                <SelectComponent
                    type="submit"
                    placeholder={size ? size : "Selectionner votre taille"}
                    isRequired
                    value={size}
                    error={notification && !size}
                    onChange={(option) => setSize(option)}
                    size={sizeOptions} />
                {quantityOptions.length
                    ?
                    <span className="quantity" >
                        <QuantitySelect
                            increment={() => setQuantity(quantityOptions.length > quantity ? quantity + 1 : quantity)}
                            decrement={decrement}
                            // eslint-disable-next-line
                            value={quantityBySize === 0 ? 0 : quantity, quantityBySize < quantity ? setQuantity(1) : quantity}
                        />

                    </span>
                    : null}
            </section>
            <footer className="footer">
                <form onSubmit={(e) => handleSubmit(e)}>
                    {quantityBySize === 0 ?
                        <CustomButton outOfStock  >
                            Article en rupture de stock !
                    </CustomButton> :
                        <CustomButton type="submit" inverted>
                            {ShoppingIcon}  &nbsp;  Ajouter au panier
                    </CustomButton>}
                </form>
            </footer>

        </article>
    )
}

SelectItemBySize.propTypes = {
    collection: PropTypes.object.isRequired,
    addItem: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state),
    props: ownProps,
    sta: state
})
const mapDispatchToProps = (dispatch) => ({
    addItem: item => dispatch(addItem(item)),

})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SelectItemBySize))
