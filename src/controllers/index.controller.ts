import { RequestHandler, Response } from 'express'
import PhotoModel from '../models/Photo.model'
import path from 'path'
import fs from 'fs-extra'

export const getPhotos: RequestHandler = async (
	req,
	res,
): Promise<Response> => {
	try {
		const photos = await PhotoModel.find().lean()
		return res.json({ message: 'Photos sended', photos })
	} catch (err) {
		console.log('>>>' + err)
		return res.send({ error: err })
	}
}

export const getPhoto: RequestHandler = async (req, res): Promise<Response> => {
	try {
		const { id } = req.params
		const Photo = await PhotoModel.findById(id).lean()
		return res.send({ message: 'Photo sended', Photo })
	} catch (err) {
		console.log('>>>' + err)
		return res.send({ error: err })
	}
}

export const createPhoto: RequestHandler = async (
	req,
	res,
): Promise<Response> => {
	try {
		const { title, description } = req.body
		console.log(req.file)
		const newPhoto = new PhotoModel({
			title,
			description,
			imagePath: req.file.path,
		})
		await newPhoto.save()
		return res.json({ message: 'Photo successfully saved', newPhoto })
	} catch (err) {
		console.log('>>>' + err)
		return res.send({ error: err })
	}
}

export const deletePhoto: RequestHandler = async (
	req,
	res,
): Promise<Response> => {
	try {
		const { id } = req.params
		const deletedPhoto = await PhotoModel.findByIdAndDelete(id).lean()
		if (deletedPhoto) {
			await fs.unlink(path.resolve(deletedPhoto.imagePath))
		}
		return res.send({ message: 'Photo sended', deletedPhoto })
	} catch (err) {
		console.log('>>>' + err)
		return res.send({ error: err })
	}
}

export const updatePhoto: RequestHandler = async (
	req,
	res,
): Promise<Response> => {
	try {
		const { id } = req.params
		const { title, description } = req.body
		console.log(req.body, req.params)
		const updatedPhoto = await PhotoModel.findByIdAndUpdate(
			id,
			{
				title,
				description,
			},
			{ new: true },
		)
		return res.json({ message: 'successfully updated', updatedPhoto })
	} catch (err) {
		console.log('>>>' + err)
		return res.send({ error: err })
	}
}
