import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Products = () => {
    const {userObj} = useFirebase();
    return (
        <div>
            <h2>Knock Knock who is there!</h2>
            <h3>{userObj ? userObj.displayName : 'Bhooooot'}</h3>
        </div>
    );
};

export default Products;