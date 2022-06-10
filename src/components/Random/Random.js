import React from 'react';

const Random = ({ random }) => {
    return (
        <div className='random'>
            <h1>{random.title}</h1>
            <img src={random.image}></img>
            {random.instructions && <div>
                <h3>Instructions</h3> <p>{random.instructions}</p>
            </div>}
            {/* <p>{random.summary}</p> */}
            {random.sourceUrl && <p><a target="_blank" href={random.sourceUrl}>Go to Foodista.com for full recipe!</a></p>}
            {random.dishTypes &&
                random.dishTypes.map(item => <p>{item}</p>)}
        </div>
    );
}

export default Random;