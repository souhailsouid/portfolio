import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CustomButton from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.actions";

import "./collection-item.styles.scss";

const CollectionItem = ({ item, history, match }) => {
  const { name, price, imageUrl, id } = item;
  return (
    <article className="collection-item">
      <img
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
        alt=""
      />
      <section className="collection">
        <span className="name">{name}</span>
        <span className="price">{price}&nbsp;€</span>
      </section>
      {match.params.collectionId ? (
        <CustomButton
          data-test="custom-button"
          onClick={() =>
            history.push(`/product/${match.params.collectionId}/${id}`)
          }
          inverted
        >
          Voir le produit
        </CustomButton>
      ) : (
        <CustomButton inverted> Voir la collection</CustomButton>
      )}
    </article>
  );
};
CollectionItem.propTypes = {
  history: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
  addItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default withRouter(connect(null, mapDispatchToProps)(CollectionItem));
