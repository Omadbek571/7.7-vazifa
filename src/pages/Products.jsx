import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Products() {
  const notifyRemove = () => toast("Productsdan malumot ochirildi!!!");
  const notifyClear = () => toast("Kartadan malumot tozalandi!!!");

  const cardProducts = useSelector(state => state.card.card);
  const dispatch = useDispatch();

  function handleRemove(id) {
    dispatch({ type: "REMOVE_CARD", payload: id });
    notifyRemove();
  }

  function handleCard(e) {
    e.preventDefault();
    dispatch({ type: "CLEAR_CARD" });
    notifyClear();
  }

  return (
    <div className='border-2 bg-white pb-5'>
      <div className='text-2xl text-black font-bold flex mt-3 justify-center'>Products</div>
      <div className='flex flex-wrap gap-5 p-5'>
        {
          cardProducts.length > 0 && cardProducts.map(cardProduct => (
            <div className='flex flex-col mx-auto' key={cardProduct.id}>
              <div className='border-2 p-4 w-40 rounded-2xl text-black gap-2 flex flex-col'>
                <h2><b>Id:</b> {cardProduct.id}</h2>
                <h2><b>Name:</b> {cardProduct.name}</h2>
                <h3><b>Price:</b> {cardProduct.price}</h3>
                <h3><b>Counter:</b> {cardProduct.count}</h3>
                <button className='btn btn-outline btn-error' onClick={() => handleRemove(cardProduct.id)}>Delete</button>
              </div>
            </div>
          ))
        }
      </div>
      <button onClick={handleCard} className='btn btn-outline btn-secondary flex mx-auto'>CLEAR CARD</button>
      <ToastContainer /> 
    </div>
  );
}

export default Products;
