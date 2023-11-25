import {Router} from 'express'
import getTracks from '../controllers/trackController/getTracks'

const trackRouter = Router()

trackRouter.get('/', getTracks)

export default trackRouter