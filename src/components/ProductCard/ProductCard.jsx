import React from 'react';
import { useCart } from '../../context/CartContext'; // Import useCart
import PropTypes from "prop-types";
import formatToIDRCurrency from "../../utils/formatToIDRCurrency";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function ProductCard({ product }) {
  const { addToCart } = useCart(); // Destructure addToCart from useCart

  return (
    <Link to={`/products/${product.slug}`} className="flex flex-col max-w-[370px] flex-wrap p-[16px] bg-[#081116] hover:ring-opacity-40 active:ring-5 active:ring-[#6247eb] hover:ring-4 active:ring-2 active:ring-opacity-90">
      <img 
        src={product?.imageUrl ?? ''} 
        alt={product?.name ?? 'No Title'} 
        className="block w-full h-48 object-cover mb-4" // Set width and height
      />
      <div className="flex flex-col gap-2">
        <h4 className="font-medium text-[20px] text-white">{product?.name ?? 'No Title'}</h4>
        <span className="block font-medium text-[14px] text-[#eaeaea]">{product?.category ?? "Uncategorized"}</span>
        <span className="block font-medium text-[20px] text-white">
          {product?.price > 0 ? formatToIDRCurrency(product.price) : 'Not For Sale'}
        </span>
        <div>
          {product.stock <= 0 ? (
            <p className="text-xl font-semibold text-center text-red-500">Out of Stock</p>
          ) : (
            <Button 
              type="button" 
              className="inline-flex items-center justify-center gap-2 p-4 bg-[#6173E6] text-center hover:bg-[#5969cf] text-white active:bg-[#4956ab] mt-[28px]"
              onClick={() => addToCart(product)} // Add to cart functionality
            >
              <FontAwesomeIcon icon={faCartShopping} />
              Add to Cart
            </Button>
          )}
        </div>
      </div>
    </Link>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
    stock: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
};