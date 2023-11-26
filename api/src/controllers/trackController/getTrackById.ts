import { Request, Response } from 'express';
import Track from '../../models/trackModel';

const getTrackById = async (req: Request, res: Response) => {
    try {
        const track = await Track.findById(req.params.id);

        if (!track) {
            res.status(404).json({ message: 'Track not found' });
            return
        }

        res.set('Content-Type', 'audio/mpeg'); 
        res.set('Content-Disposition', `attachment; filename="${track.name}.mp3"`);

        res.send(track.track);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving track' });
    }
};

export default getTrackById;