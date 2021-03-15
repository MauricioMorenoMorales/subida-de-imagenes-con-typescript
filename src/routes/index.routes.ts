import { Router, Request, Response } from 'express'
import * as controller from '../controllers/index.controller'
const router = Router()
import multer from '../libs/multer'

router
	.route('/photos')
	.post(multer.single('image'), controller.createPhoto)
	.get(controller.getPhotos)

export default router
