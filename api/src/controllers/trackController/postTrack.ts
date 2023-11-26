import { Request, Response } from "express"
import multer from "multer"
import Track from "../../models/trackModel"

const postTrack = async(req:Request, res:Response) => {
    const {name} = req.body
    
    const storage = multer.memoryStorage()
    const upload = multer({
        storage,
        limits: {
            fields: 1,
            fieldSize: 100000000,
            files: 1,
            parts: 3
        }
    })
    const uploadMiddleware = upload.single('track') 

    uploadMiddleware(req, res, async (err) => {
        if (err) {
            console.log(err);
            return res.status(400).json({ message: err.message });
        } else if (name) {
            return res.status(400).json({ message: 'No track name in request body' });
        }
    
        try {
            if (!req.file || !req.file.buffer) {
                return res.status(400).json({ message: 'No track file in request body' });
            }
    
            const track = new Track({ name, track: req.file.buffer});
     
            const savedTrack = await track.save();
    
            return res.status(201).json({
                message: 'File uploaded successfully, stored under Mongoose ObjectID: ' + savedTrack._id
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error uploading file' });
        }
    });
}

export default postTrack