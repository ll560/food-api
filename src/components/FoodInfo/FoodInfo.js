import React from 'react';

const FoodInfo = ({item}) => {
    return (
        <div className='item'>
            <h1>{item.restaurantChain}</h1>
            <p>{item.title}</p>
            <img src={item.image} />

        </div>
    );
}

export default FoodInfo;