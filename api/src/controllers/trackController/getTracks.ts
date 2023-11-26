import { Request, Response } from 'express';
import Track from '../../models/trackModel';

const getTracks = async (_req: Request, res: Response) => {
    try {
        const tracks = await Track.find()

        if (!tracks || tracks.length === 0) {
            return res.status(404).json({ message: 'Tracks not found' });
        }

        return res.json(tracks);
    } catch (error) {
        return res.status(500).json({ message: 'Error retrieving tracks' });
    }
};

export default getTracks;