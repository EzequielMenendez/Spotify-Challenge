import { Request, Response } from "express"

const getTracks = async(_req:Request, res:Response) => {
    res.send('track')
}

export default getTracks