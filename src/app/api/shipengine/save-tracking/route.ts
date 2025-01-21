/* eslint-disable @typescript-eslint/no-explicit-any */
import { client } from '@/sanity/client';
import type { NextApiRequest, NextApiResponse } from 'next';
interface TrackingData {
    labelId: string;
    status: string;
    details: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const { labelId, status, details }: TrackingData = req.body;

            // Create a new document in Sanity
            const result = await client.create({
                _type: 'shipmentTracking',
                labelId,
                status,
                details,
            });

            return res.status(200).json({ message: 'Tracking data saved successfully', result });
        } catch (error:any) {
            return res.status(500).json({ error: 'Error saving tracking data', message: error.message });
        }
    }

    res.status(405).json({ error: 'Method Not Allowed' });
}
