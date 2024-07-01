import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react'; // Make sure this import is correct

function Pricing() {
    const pricing = [
        {
            imgUrl: '/pricing.jpg',
            title: "QUARTERLY",
            price: 3000,
            length: 3
        },
        {
            imgUrl: '/pricing.jpg',
            title: "HALF-YEARLY",
            price: 5500,
            length: 6
        },
        {
            imgUrl: '/pricing.jpg',
            title: "YEARLY",
            price: 10000,
            length: 12
        }
    ];

    return (
        <section className='pricing'>
            <h1>MuscleMind FITNESS PLANS</h1>
            <div className="wrapper">
                {pricing.map(element => (
                    <div className="card" key={element.title}>
                        <img src={element.imgUrl} alt={element.title} />
                        <div className="title">
                            <h1>{element.title}</h1>
                            <h1>Package</h1>
                            <h3>Rs {element.price}</h3>
                            <p>{element.length} months</p>
                        </div>
                        <div className="description">
                            <p>
                                <Check /> Equipment
                            </p>
                            <p>
                                <Check /> All-day training
                            </p>
                            <p>
                                <Check /> Free Restroom
                            </p>
                            <p>
                                <Check /> 24/7 Skilled trainer and support
                            </p>
                            <Link to="/">Buy Plan</Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Pricing;
