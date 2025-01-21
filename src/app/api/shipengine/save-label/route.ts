/* eslint-disable @typescript-eslint/no-explicit-any */
// /api/save-label.ts

import { client } from '@/sanity/client';
import type { NextApiRequest, NextApiResponse } from 'next';

// Define the expected structure for the label data
interface LabelData {
    labelId: string;
    trackingNumber: string;
    labelUrl: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const { labelId, trackingNumber, labelUrl }: LabelData = req.body;

            // Create a new document in Sanity
            const result = await client.create({
                _type: 'shippingLabel',
                labelId,
                trackingNumber,
                labelUrl,
            });

            return res.status(200).json({ message: 'Label data saved successfully', result });
        } catch (error:any) {
            return res.status(500).json({ error: 'Error saving label data', message: error.message });
        }
    }

    res.status(405).json({ error: 'Method Not Allowed' });
}
