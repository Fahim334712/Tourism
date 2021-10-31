import React, { useEffect, useState } from 'react';

const Booking = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://thawing-atoll-37082.herokuapp.com/datas')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])
    return (
        <div className="mt-5 mb-5">
            <h1 className="text-danger mb-4 hiro">Your selected booking information here</h1>

            {orders._id ?
                <h2>Thanks For booking</h2>
                :

                <h3 className="text-warning">You have not yet seleted<br />any destination!</h3>}
        </div>
    );
};

export default Booking;