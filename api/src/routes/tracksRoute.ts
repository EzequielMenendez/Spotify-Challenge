import {Router} from 'express'
import postTrack from '../controllers/trackController/postTrack'
import getTracks from '../controllers/trackController/getTracks'

const trackRouter = Router()

trackRouter.get('/', getTracks)

trackRouter.post('/', postTrack)

export default trackRouter