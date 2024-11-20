import PropTypes from "prop-types";

const ShoppingCard = ({ singleItem }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      {/* <!-- Image Section --> */}
      <img
        className="w-full h-48 object-cover"
        src={
          singleItem?.image
            ? `${singleItem?.image}`
            : `https://via.placeholder.com/300`
        }
        alt="Product Image"
      />

      {/* <!-- Content Section --> */}
      <div className="p-4">
        {/* <!-- Category --> */}
        <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
          {singleItem?.category}
        </span>

        {/* <!-- Name --> */}
        <h2 className="mt-2 text-lg font-semibold text-gray-800">
          {singleItem?.name.charAt(0).toUpperCase() + singleItem?.name.slice(1)}
        </h2>

        {/* <!-- Company --> */}
        <p className="text-sm text-gray-500">
          by{" "}
          {singleItem?.company.charAt(0).toUpperCase() +
            singleItem?.company.slice(1)}
        </p>

        {/* <!-- Description --> */}
        <p className="mt-2 text-sm text-gray-600">
          {singleItem?.description?.length > 30
            ? singleItem.description.slice(0, 30) + "..."
            : singleItem.description}
        </p>

        {/* <!-- Price and Shipping --> */}
        <div className="mt-4 flex justify-between items-center">
          <span className="text-lg font-bold text-gray-800">
            ${singleItem?.price}
          </span>
          <span className="text-sm text-green-600">
            {singleItem?.shipping ? `Free Shipping` : `Paid Shipping`}
          </span>
        </div>

        {/* <!-- Action Button --> */}
        <button className="mt-4 w-full bg-purple-500 text-white text-sm font-medium py-2 rounded hover:bg-purple-700 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ShoppingCard;

ShoppingCard.propTypes = {
  singleItem: PropTypes.shape({
    image: PropTypes.string,
    category: PropTypes.string,
    name: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.number.isRequired,
    shipping: PropTypes.bool,
  }).isRequired,
};
