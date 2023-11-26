import { Request, Response } from "express"
//import multer from "multer"

const getTracks = async(_req:Request, res:Response) => {
    res.send('track')
}

export default getTracks