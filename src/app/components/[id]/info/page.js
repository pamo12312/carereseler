"use client"
import React, { useEffect, useState } from 'react';
import Header from "@/app/components/header";

const GameEditPage = () => {
    const [id, setId] = useState(null);
    const [carInfo, setCarInfo] = useState(null);

    useEffect(() => {
        const url = window.location.href;
        const regex = /\/components\/(\d+)\/info/;
        const match = url.match(regex);
        const gameId = match ? match[1] : null;
        setId(gameId);

        // Fetch car info if ID is available
        if (gameId) {
            fetch(`https://auto.dev/api/listings?apikey=ZrQEPSkKdHN0YXN0bnk2NThAZ21haWwuY29t`)
                .then(response => response.json())
                .then(data => {
                    const filteredCar = data.records.find(car => car.id === parseInt(gameId));
                    setCarInfo(filteredCar);
                })
                .catch(error => console.error('Error fetching car info:', error));
        }
    }, [id]);

    return (
        <div>
            <Header></Header>
            <p>ID z URL: {id}</p>
            {carInfo && (

                <div>
                    <h2>{carInfo.make} {carInfo.model} ({carInfo.year})</h2>
                    <p>VIN: {carInfo.vin}</p>
                    <p>Color: {carInfo.displayColor}</p>
                    <p>Price: {carInfo.price}</p>
                    <p>Mileage: {carInfo.mileage}</p>
                    <p>Location: {carInfo.city}, {carInfo.state}</p>
                    <p>Dealer: {carInfo.dealerName}</p>

                    <div className={"flex flex-wrap"}>
                        {carInfo.photoUrls.map((photoUrl, index) => (
                            <img key={index} src={photoUrl} alt={`Car ${index + 1}`}
                                 style={{marginRight: '10px', marginBottom: '10px'}}/>
                        ))}
                    </div>
                    <a href={carInfo.clickoffUrl} target="_blank" rel="noopener noreferrer">More Info</a>
                </div>
            )}
        </div>
    );
};

export default GameEditPage;
