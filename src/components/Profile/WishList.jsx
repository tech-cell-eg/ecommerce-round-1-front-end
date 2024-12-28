import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import deletefromwhishlist from "../../api/wishlist/deletfromwishlist";
import { getWishList } from "../../redux/wishlistSlice";

export default function WishList() {
  const wishlist = useSelector((state) => state.wishlist.wishlist)
  const id = useSelector((state) => state.user.id);
  const dispatch =useDispatch()


  console.log(wishlist);
  
  useEffect(() => {
    if (id) {
      dispatch(getWishList(id)); 
      
    }
  }, [id, dispatch])
  


  const handeldeletefromwhishlist = async (id) => {
    await deletefromwhishlist(id);
    dispatch(getWishList(id))
  };

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {wishlist.length > 0 ? (
          wishlist.map((item) => (
            <div key={item.id} className="space-y-1">
            <div className="relative group">
                <img src={item.image || "/Group-1.png"} alt={item.name} className="w-full" />
                <div className="absolute top-0 bg-black bg-opacity-0 w-full h-full opacity-0 group-hover:opacity-100 transition-all duration-200 flex items-center justify-center">
                  <button className="btn-primary text-black bg-white absolute bottom-2 left-[10%] w-[80%]">
                    Move to Cart
                  </button>
                  <div className="flex items-center justify-center p-2 rounded-full bg-white absolute right-3 top-6 " onClick={()=>{handeldeletefromwhishlist(item.id)}}>
                    <RiDeleteBin6Line className="text-red-600 text-xl cursor-pointer"  />
                  </div>
                </div>
              </div>
              <div>
                <h2 className="font-bold">{item.name}</h2>
                <p>{item.description}</p>
                <div className="flex gap-4">
                  <p>{item.price}EGP</p>
                  {item.discountedPrice && (
                    <p className="line-through text-gray-300">{item.discountedPrice}EGP</p>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center">
            <p className="text-gray-500 text-lg">Your wishList is empty.</p>
          </div>
        )}
      </section>
    </>
  );
}