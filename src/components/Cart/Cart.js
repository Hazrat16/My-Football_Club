import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(props);
    const totalSalary = cart.reduce((sum, player) => sum + player.salary, 0)
    // let info = [];
    // for (let i = 0; i < cart.length; i++) {
    //     const element = cart[i].name;
    //     info.push = element;
    //     console.log(element);
    // }
    return (
        <div>
            {/* <h3>This is cart : {cart.length}</h3> */}
            <h6>Players list: </h6>
            <div>
                {cart.map(player => (
                    <p key={player.id}>{player.name} For: ${player.salary}</p>
                ))}
            </div>
            <h5>Total Budget : ${totalSalary}</h5>
        </div>
    );
};

export default Cart;