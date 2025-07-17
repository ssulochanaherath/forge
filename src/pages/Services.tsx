import React from 'react';
import Navbar from "../components/Navbar.tsx";

const services = [
    {
        title: 'service 01',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit.',
    },
    {
        title: 'service 02',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit.',
    },
    {
        title: 'service 03',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit.',
    },
];

const Service = () => {
    return (
        <div>
            <Navbar /> {/* <== Reusable Component */}


        <div className="px-6 md:px-16 lg:px-24 py-10">
            {/* Top Header Section */}
            <section className="max-w-3xl">
                <h1 className="text-2xl md:text-4xl font-semibold leading-snug">
                    Flexible and results<br />
                    driven—so that your<br />
                    game is never off.
                </h1>
                <p className="text-sm md:text-base text-gray-600 mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit.
                </p>
            </section>

            {/* Services List */}
            <div className="mt-16 flex flex-col gap-20">
                {services.map((service, index) => (
                    <div key={index} className="flex flex-col md:flex-row items-start justify-between gap-8">
                        {/* Text Content */}
                        <div className="flex-1">
                            <h2 className="text-xl font-semibold">{service.title}</h2>
                            <p className="text-sm text-gray-600 mt-2">{service.text}</p>
                            <p className="text-sm text-gray-600 mt-2">{service.text}</p>
                        </div>

                        {/* Scroll Animation Box */}
                        <div className="flex-1 bg-blue-100 text-center py-20 text-gray-600">
                            scroll <br /> animation
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default Service;
