import { Router, Request, Response } from 'express'
import * as controller from '../controllers/index.controller'
const router = Router()

router.route('/').get(controller.GetPhoto)

export default router
