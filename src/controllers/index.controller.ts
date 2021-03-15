import { RequestHandler, Response } from 'express'
import PhotoModel from '../models/Photo.model'

export const getPhotos: RequestHandler = async (
	req,
	res,
): Promise<Response> => {
	const photos = await PhotoModel.find().lean()
	return res.json({ message: 'Photos sended', photos })
}

export const createPhoto: RequestHandler = async (
	req,
	res,
): Promise<Response> => {
	const { title, description } = req.body
	console.log(req.file)
	const newPhoto = new PhotoModel({
		title,
		description,
		imagePath: req.file.path,
	})
	await newPhoto.save()
	return res.json({ message: 'Photo successfully saved', newPhoto })
}
