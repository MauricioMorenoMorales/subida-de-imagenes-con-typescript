import { RequestHandler, Response } from 'express'

export const getPhotos: RequestHandler = async (
	req,
	res,
): Promise<Response> => {
	return res.json({ message: 'Photos sended' })
}

export const createPhoto: RequestHandler = async (
	req,
	res,
): Promise<Response> => {
	console.log(req.body)
	return res.json({ message: 'Photo successfully saved' })
}
