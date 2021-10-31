import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Home.css';



const Home = () => {
    const historyDestination = useHistory();
    const hist = useHistory();
    const histre = useHistory();
    const [destinations, setDestinations] = useState([]);
    const [tours, setTours] = useState([]);
    useEffect(() => {
        fetch('https://thawing-atoll-37082.herokuapp.com/datas')
            .then(res => res.json())
            .then(data => setDestinations(data));
    }, [])
    useEffect(() => {
        fetch('./domesticData.json')
            .then(res => res.json())
            .then(data => setTours(data));
    }, [])
    const handleMoreDestination = () => {
        historyDestination.push('/destination');
    }
    const handleBooking = () => {
        hist.push('/order');
    }
    const handleDetails = () => {
        histre.push('/order/details');
    }
    return (
        <div className="homeColor ">
            <div className="banner">
                <img className="container" src="./images/banner.jpg" alt="" />
            </div>
            <section className="secondHome container mb-2 mt-5">
                <div>
                    <img className="klSize" src="./images/kl.jpg" alt="" />
                </div>
                <div>
                    <h4 className="fw-bold text">A Simply Perfect Place To Get Lost</h4><br /><br />
                    <p className="text">Treat yourself with a journey to your inner self. Visit a mystique Tibet and start your spiritual adventure. We promise, you’ll enjoy every step you make.</p>
                    <Button variant="secondary">Details</Button>
                </div>
            </section>
            <section className="mt-5">
                <h1 className="text-danger mb-4 hiro">Our Destinations </h1>
                <div className="dataDesi container">
                    {
                        destinations.map(destination => <div key={destination._id} className="card-deck">
                            <div className="card">
                                <img className="card-img-top" src={destination.picture} alt="" />
                                {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
                                <div className="card-body">
                                    <h5 className="card-title">{destination.name}</h5>

                                    <p className="text fw-bold there">Regular Price : {destination.fee}</p>
                                    <p className="text fw-bold there">Discount Price : {destination.fees}(after 20% discount)</p>
                                    <Button onClick={handleDetails} variant="secondary">Details</Button>
                                </div>
                                <div className="card-footer">
                                    <Button onClick={handleBooking} variant="success">Booking Now</Button>
                                </div>
                            </div>


                        </div>)
                    }

                </div>
                <Button onClick={handleMoreDestination} className="mt-2 mb-2" variant="primary">See more destinations.....</Button>
            </section>
            <section>
                <h1 className="text-danger mt-4 mb-4 hiro">Tours(Domestic)</h1>
                <div className="theGridi container">
                    {
                        tours.map(tour => <div className="theDesigni pb-4" key={tour._id}>
                            <img className="tourSize" src={tour.picture} alt="" />
                            <h6> {tour.name}</h6>
                            <p className="fw-bold">Package : {tour.fee}</p>
                            <Button className="text-white" variant="secondary">Explore</Button>
                            <Button variant="success">Book Now</Button>

                        </div>)
                    }
                </div>
            </section>
            <section className="mt-5 Explor ">
                <div>
                    <img className="ExplotImg" src="https://images.pexels.com/photos/2087391/pexels-photo-2087391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                </div>
                <div>
                    <img className="ExplotImg" src="https://images.pexels.com/photos/5486953/pexels-photo-5486953.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                </div>
            </section>
            <section className="mt-5">
                <h1 className="text-danger mt-4 mb-4 hiro">About Us</h1>
                <div className="gaffa  container">
                    <div>
                        <img className="samo" src="./images/oi.png" alt="" />
                    </div>
                    <div className="mt-5">
                        <p>Evergreen Express is the country’s first and leading online travel aggregator. Initially started with the name Travel Booking BD, we had a dream to make travel easier for people. And that is what we did since our inception. And now with our new, innovative, easy to use app, travel services are on your palm. The dynamic app lets you book your flight, find your perfect holiday from our thousands of holiday packages around the globe.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;