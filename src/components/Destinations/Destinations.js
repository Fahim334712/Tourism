import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Destinations.css';

const Destinations = () => {
    const history = useHistory();
    const [destinas, setDestinas] = useState([]);
    useEffect(() => {
        fetch('https://thawing-atoll-37082.herokuapp.com/datas')
            .then(res => res.json())
            .then(data => setDestinas(data));
    }, [])
    const handleBackHome = () => {
        history.push('/');
    }
    return (
        <div className="container mt-5">
            <h2 className="kk">Destination On the Go with <span className="text-danger">Evergreen Express</span></h2>
            <div className="dataDes container mt-5 mb-2">
                {
                    destinas.map(destina => <div className="card-deck">
                        <div className="card">
                            <img className="card-img-top" src={destina.picture} alt="" />

                            <div className="card-body">
                                <h5 className="card-title">{destina.name}</h5>
                                <p className="text fw-bold there">Regular Price : {destina.fee}</p>
                                <p className="text fw-bold there">Discount Price : {destina.fees}(after 20% discount)</p>
                                <Button variant="secondary">Details</Button>
                            </div>
                            <div class="card-footer">
                                <Button variant="success">Booking Now</Button>
                            </div>
                        </div>


                    </div>)
                }

            </div>
            <Button onClick={handleBackHome} variant="info text-white fw-bold mb-4 mt-3">Back To Home</Button>
        </div>
    );
};

export default Destinations;