"use client"// Dashboard component
import { useState, useEffect } from 'react';
import Link from "next/link";
import InfoButton from "@/app/components/infoButton";

// Example API URL
const API_URL = 'https://auto.dev/api/listings?apikey=ZrQEPSkKdHN0YXN0bnk2NThAZ21haWwuY29t'; // Replace with the actual API endpoint

export default function Search() {
    const [carsData, setCarsData] = useState([]);
    const [manufacturer, setManufacturer] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [hitsCount, setHitsCount] = useState(0); // State to store hits count of records

    useEffect(() => {
        async function fetchCars() {
            try {
                const response = await fetch(API_URL);
                const data = await response.json();
                setCarsData(data.records); // Adjust according to the actual structure of your API response
                setHitsCount(data.hitsCount); // Set the hits count of records
            } catch (error) {
                console.error("Error fetching cars data:", error);
            }
        }

        fetchCars();
    }, []);

    const filterCars = car => {
        return (
            (!manufacturer || car.make.toLowerCase().includes(manufacturer.toLowerCase())) &&
            (!minPrice || parseInt(car.price) >= parseInt(minPrice)) &&
            (!maxPrice || parseInt(car.price) <= parseInt(maxPrice))
        );
    };

    const handleManufacturerChange = event => {
        setManufacturer(event.target.value);
    };

    const handleMinPriceChange = event => {
        setMinPrice(event.target.value);
    };

    const handleMaxPriceChange = event => {
        setMaxPrice(event.target.value);
    };

    return (
        <div>
            <div className={"flex justify-evenly pt-10 pb-10 text-5xl bg-black text-white"}>
                <div> Vyberte si svůj vůz</div>
                <p>Aut k dispozici: {hitsCount}</p></div>
            <div className={"flex justify-center gap-10 bg-black pb-10 flex-wrap"}>
                <input className={"rounded-xl"}  type="text" placeholder="Výrobce" value={manufacturer} onChange={handleManufacturerChange}/>
                <input className={"rounded-xl"} type="number" placeholder="Minimální cena" value={minPrice} onChange={handleMinPriceChange}/>
                <input className={"rounded-xl"} type="number" placeholder="Maximální cena" value={maxPrice} onChange={handleMaxPriceChange}/>

        </div>

            <div className={"flex flex-wrap justify-center gap-5 mt-10"}>
                {carsData.filter(filterCars).map(car => (
                    <div key={car.id} className=" max-w-sm rounded overflow-hidden shadow-lg">
                        {car.photoUrls.length > 0 && (
                            <img className="w-full" src={car.photoUrls[0]} alt={`Car`}/>
                        )}
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                                {car.make} {car.model}
                            </div>
                            <p className="text-gray-700 text-base">
                                <strong>Year:</strong> {car.year}
                            </p>
                            <p className="text-gray-700 text-base">
                                <strong>VIN:</strong> {car.vin}
                            </p>
                            <p className="text-gray-700 text-base">
                                <strong>Price:</strong> {car.price}
                            </p>
                            <p className="text-gray-700 text-base">
                                <strong>Mileage:</strong> {car.mileage}
                            </p>
                            <p className="text-gray-700 text-base">
                                <strong>City:</strong> {car.city}
                            </p>
                            <p className="text-gray-700 text-base">
                                <strong>Condition:</strong> {car.condition}
                            </p>
                            <p className="text-gray-700 text-base">
                                <strong>Trim:</strong> {car.trim}
                            </p>
                            <p className="text-gray-700 text-base">
                                <strong>Dealer:</strong> {car.dealerName}
                            </p>
                            <p className="text-gray-700 text-base">
                                <strong>Description:</strong> {car.displayColor}
                            </p>
                        </div>
                        <div className="px-6 py-4 flex justify-center items-center">
                            <button type="button"
                              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">

                            <Link href={`/components/${car.id}/info`}>
                            Info
                            </Link>     </button>



                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
