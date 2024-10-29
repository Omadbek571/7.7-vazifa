import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Card() {
    const notify = () => toast("Productsga qoshildi!!!");

    const nameRef = useRef(null);
    const priceRef = useRef(null);
    const countRef = useRef(null);

    const dispatch = useDispatch();

    function handleCardAdd(e) {
        e.preventDefault();

        const data = {
            id: Date.now(),
            name: nameRef.current.value,
            price: priceRef.current.value,
            count: countRef.current.value,
        };

        dispatch({ type: "ADD_CARD", payload: data });

        notify();
    }

    return (
        <div className='border-2 bg-white'>
            <div className='flex flex-col max-w-96 gap-5 mx-auto items-center mt-40 mb-40'>
                <input ref={nameRef} type="text" placeholder='Enter name...' className='input input-bordered input-primary w-full max-w-xs' />
                <input ref={priceRef} type="number" placeholder='Enter price...' className='input input-bordered input-primary w-full max-w-xs' />
                <select ref={countRef} className='select select-primary w-full max-w-xs'>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button onClick={handleCardAdd} className='btn btn-outline btn-accent w-72'>ADD TO CART</button>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Card;
