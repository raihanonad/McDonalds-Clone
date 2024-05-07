function RemoveWishlist() {
    
    return (
        <button
          onClick={remove}
          className="btn btn-outline btn-error"
        >
          <h1 className="hover:text-gray-100">Remove from Wishlist</h1>
        </button>
      );
}

export default RemoveWishlist;