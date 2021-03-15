import { Router, Request, Response } from 'express'
import * as controller from '../controllers/index.controller'
const router = Router()

router.route('/photos').post(controller.createPhoto).get(controller.getPhotos)

export default router
