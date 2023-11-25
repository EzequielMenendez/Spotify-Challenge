import {Router} from 'express'
import trackRouter from './tracksRoute'

const router = Router()

router.use('/tracks', trackRouter)

export default router