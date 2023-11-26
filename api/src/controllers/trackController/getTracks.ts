import { Request, Response } from 'express';
import Track from '../../models/trackModel';

const getTracks = async (_req: Request, res: Response) => {
    try {
        const tracks = await Track.find({}, 'name')
            .lean()
            .exec();

        if (!tracks || tracks.length === 0) {
            return res.status(404).json({ message: 'Tracks not found' });
        }
        console.log(tracks[0])

        const simplifiedTracks = tracks.map((track: any) => ({
            _id: track._id,
            name: track.name,
        }));

        return res.json({ tracks: simplifiedTracks });
    } catch (error) {
        return res.status(500).json({ message: 'Error retrieving tracks' });
    }
};

export default getTracks;