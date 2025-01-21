'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { z } from 'zod';
import { useCartContext } from '@/components/contextApi/AddToaCart';

const CheckoutPage = () => {
    const { cart } = useCartContext();
    const [formData, setFormData] = useState<any>({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        postalCode: '',
        country: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [trackingInfo, setTrackingInfo] = useState<any>(null);
    const [labelData, setLabelData] = useState<any>(null);  // To store label and tracking info
    const [selectedRateId, setSelectedRateId] = useState<string | null>(null);

    const schema = z.object({
        fullName: z.string().min(1, 'Full name is required'),
        email: z.string().email('Invalid email address'),
        phone: z.string().min(10, 'Invalid phone number'),
        address: z.string().min(1, 'Address is required'),
        city: z.string().min(1, 'City is required'),
        postalCode: z.string().min(5, 'Invalid postal code'),
        country: z.string().min(1, 'Country is required'),
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // const handleSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault();
    //     try {
    //         schema.parse(formData);
    //         setError('');
    //         setLoading(true);

    //         // 1. Fetch shipping rates from ShipEngine API
    //         const response = await fetch('/api/shipengine/get-rates', {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify({
    //                 shipToAddress: {
    //                     name: formData.fullName,
    //                     phone: formData.phone,
    //                     addressLine1: formData.address,
    //                     cityLocality: formData.city,
    //                     postalCode: formData.postalCode,
    //                     countryCode: formData.country,
    //                     addressResidentialIndicator: 'yes',
    //                 },
    //                 packages: cart.map((item: any) => ({
    //                     weight: { value: item.weight || 1, unit: 'ounce' },
    //                     dimensions: {
    //                         height: item.height || 5,
    //                         width: item.width || 5,
    //                         length: item.length || 5,
    //                         unit: 'inch',
    //                     },
    //                 })),
    //             }),
    //         });

    //         const data = await response.json();
    //         const shippingRates = data.rates || [];

    //         if (!shippingRates.length) {
    //             console.log('No shipping rates available');
    //         }
    //         setSelectedRateId(shippingRates[0]?.rateId); 
    //         setLoading(false);

    //         // 2. Save shipment to Sanity
    //         const saveShipmentResponse = await fetch('/api/shipengine/save-shipment', {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify({
    //                 recipient: formData,
    //                 packages: cart,
    //                 rates: shippingRates,
    //             }),
    //         });

    //         const saveShipmentData = await saveShipmentResponse.json();
    //         if (!saveShipmentData._id) {
    //             console.log('Failed to save shipment to Sanity');
    //         }

    //         // 3. Create shipping label
    //         const createLabelResponse = await fetch('/api/shipengine/create-label', {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify({ rateId: selectedRateId }),
    //         });

    //         const createLabelData = await createLabelResponse.json();
    //         console.log(createLabelData);
    //         setLabelData(createLabelData);

    //         // Save label data to Sanity
    //         await fetch('/api/shipengine/save-label', {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify({
    //                 labelId: createLabelData.labelId,
    //                 trackingNumber: createLabelData.trackingNumber,
    //                 labelUrl: createLabelData.labelUrl,
    //             }),
    //         });

    //         // 4. Track shipment
    //         const trackShipmentResponse = await fetch(`/api/shipengine/track-shipment/${createLabelData.labelId}`, {
    //             method: 'GET',
    //         });

    //         const trackShipmentData = await trackShipmentResponse.json();
    //         setTrackingInfo(trackShipmentData);

    //         // Save tracking data to Sanity
    //         await fetch('/api/shipengine/save-tracking', {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify({
    //                 labelId: createLabelData.labelId,
    //                 status: trackShipmentData.status,
    //                 details: trackShipmentData.details,
    //             }),
    //         });

    //     } catch (err: any) {
    //         setError(err.message || 'An error occurred.');
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-6 lg:px-12">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 lg:p-12">
                <h1 className="text-3xl font-bold text-center text-[#1D3178] mb-8">
                    Billing Information
                </h1>
                <form className="space-y-6">
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    {Object.keys(formData).map((key) => (
                        <div key={key}>
                            <label htmlFor={key} className="block text-sm font-semibold text-gray-700">
                                {key.charAt(0).toUpperCase() + key.slice(1)}
                            </label>
                            <input
                                type="text"
                                name={key}
                                id={key}
                                value={formData[key]}
                                onChange={handleInputChange}
                                className="mt-2 block w-full p-3 border rounded-md focus:ring focus:ring-pink-500 focus:outline-none"
                                required
                            />
                        </div>
                    ))}
                    <button
                        type="submit"
                        className="w-full py-3 bg-[#FB2E86] text-white rounded-md font-semibold hover:bg-pink-600"
                    >
                        {loading ? 'Processing Shipping...' : 'Complete Shipment'}
                    </button>
                </form>

                {trackingInfo && (
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold">Tracking Information</h3>
                        <p>Status: {trackingInfo.status}</p>
                        <p>Details: {trackingInfo.details}</p>
                    </div>
                )}

                {labelData && (
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold">Shipping Label</h3>
                        <p>Tracking Number: {labelData.trackingNumber}</p>
                        <a href={labelData.labelUrl} target="_blank" className="text-blue-500">View Shipping Label</a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CheckoutPage;
