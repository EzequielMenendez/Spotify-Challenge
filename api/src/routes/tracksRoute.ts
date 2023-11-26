import {Router} from 'express'
import getTracks from '../controllers/trackController/getTracks'
import postTrack from '../controllers/trackController/postTrack'

const trackRouter = Router()

trackRouter.get('/', getTracks)

trackRouter.post('/', postTrack)

export default trackRouter