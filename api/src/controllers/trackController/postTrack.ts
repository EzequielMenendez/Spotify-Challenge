import { Request, Response } from "express"
import Track from "../../models/trackModel"

const postTrack = async(req:Request, res:Response) => {
    
    try {
        const {name, track} = req.body

        if (!name || !track) {
            return res.status(400).json({ message: 'No track or name in request body' });
        }

        const newTrack = new Track({ name: name, track: track});
    
        const savedTrack = await newTrack.save();

        return res.status(201).json({
            message: 'File uploaded successfully, stored under Mongoose ObjectID: ' + savedTrack._id
        });
    } catch (error) {
        return res.status(500).json({ message: 'Error uploading file' });
    }
}

export default postTrack