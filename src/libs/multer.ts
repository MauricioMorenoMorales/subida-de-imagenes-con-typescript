import multer from 'multer'
import { v4 as uuid } from 'uuid'
import path from 'path'

multer.diskStorage({
	destination: 'uploads',
	filename: (req, file, cb) => {
		cb(null, uuid() + path.extname(file.originalname))
	},
})
