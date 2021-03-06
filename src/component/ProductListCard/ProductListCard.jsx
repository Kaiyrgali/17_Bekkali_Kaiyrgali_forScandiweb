import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ProductListCard.scss';

function ProductListCard({
  id, name, inStock, picture, price,
}) {
  const pictureStyle = {
    backgroundImage: `url(${picture})`,
  };
  const grayscale = (inStock) ? '' : ' outStock';
  const urlDetails = (inStock) ? `/details/${id}` : '#';

  return (
    <Link to={urlDetails} className="contents">
      <div className={`card${grayscale}`}>
        <div className="card__img" style={pictureStyle} alt="Product photo" title="##Descriptions##">
          <span className="cart__text">out of stock</span>
        </div>
        <img className="card__cart" src="../productCardCart.svg" alt="cart" />
        <div className="card__content">
          <p className="card__title">{name}</p>
          <p className="card__price">{price}</p>
        </div>
      </div>
    </Link>
  );
}

ProductListCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  inStock: PropTypes.bool.isRequired,
  picture: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default ProductListCard;
