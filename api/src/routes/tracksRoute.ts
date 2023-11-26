import {Router} from 'express'
import getTrackById from '../controllers/trackController/getTrackById'
import postTrack from '../controllers/trackController/postTrack'
import getTracks from '../controllers/trackController/getTracks'

const trackRouter = Router()

trackRouter.get('/', getTracks)

trackRouter.get('/:id', getTrackById)

trackRouter.post('/', postTrack)

export default trackRouter