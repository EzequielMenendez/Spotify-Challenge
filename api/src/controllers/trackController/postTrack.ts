import { Request, Response } from "express"
import multer from "multer"
import Track from "../../models/trackModel"

const postTrack = async(req:Request, res:Response) => {
    
    const storage = multer.memoryStorage()
    const upload = multer({
        storage,
        limits: {
            fields: 1,
            fieldSize: 10000000,
            files: 1
        }
    })
    const uploadMiddleware = upload.single('track') 

    uploadMiddleware(req, res, async (err) => {
        if (err) {
            return res.status(400).json({ message: err.message });
        }
    
        try {
            if (!req.file || !req.file.buffer) {
                return res.status(400).json({ message: 'No track file in request body' });
            }

            const {name} = req.query

            if (!name) {
                return res.status(400).json({ message: 'No track name in request body' });
            }

            console.log(req.file.buffer)

            const track = new Track({ name: name, track: req.file.buffer});
     
            const savedTrack = await track.save();
    
            return res.status(201).json({
                message: 'File uploaded successfully, stored under Mongoose ObjectID: ' + savedTrack._id
            });
        } catch (error) {
            return res.status(500).json({ message: 'Error uploading file' });
        }
    });
}

export default postTrack