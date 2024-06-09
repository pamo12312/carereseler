
import React, { useState, useEffect } from 'react';

export default function CarInfo({ match }) {
    const [carData, setCarData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchCarData() {
            const carId = match.params.id;
            try {
                const response = await fetch(`https://auto.dev/api/listings/${carId}?apikey=ZrQEPSkKdHN0YXN0bnk2NThAZ21haWwuY29t`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setCarData(result);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }
        fetchCarData();
    }, [match.params.id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">Car Info</h1>
            {carData && (
                <div className="p-4 border rounded-lg shadow-md">
                    <img
                        src={carData.primaryPhotoUrl}
                        alt={`${carData.make} ${carData.model}`}
                        className="w-64 h-48 object-cover rounded-md mb-4"
                    />
                    <h2 className="text-2xl font-semibold">
                        {carData.year} {carData.make} {carData.model}
                    </h2>
                    <p className="text-gray-600">{carData.displayColor}</p>
                    <p className="text-gray-600">{carData.mileage}</p>
                    <p className="text-gray-600">{carData.price}</p>
                    <p className="text-gray-600">{carData.city}, {carData.state}</p>
                    <p className="mt-4">{carData.description}</p>
                </div>
            )}
        </div>
    );
}
