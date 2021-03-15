"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePhoto = exports.deletePhoto = exports.createPhoto = exports.getPhoto = exports.getPhotos = void 0;
const Photo_model_1 = __importDefault(require("../models/Photo.model"));
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const getPhotos = async (req, res) => {
    try {
        const photos = await Photo_model_1.default.find().lean();
        return res.json({ message: 'Photos sended', photos });
    }
    catch (err) {
        console.log('>>>' + err);
        return res.send({ error: err });
    }
};
exports.getPhotos = getPhotos;
const getPhoto = async (req, res) => {
    try {
        const { id } = req.params;
        const Photo = await Photo_model_1.default.findById(id).lean();
        return res.send({ message: 'Photo sended', Photo });
    }
    catch (err) {
        console.log('>>>' + err);
        return res.send({ error: err });
    }
};
exports.getPhoto = getPhoto;
const createPhoto = async (req, res) => {
    try {
        const { title, description } = req.body;
        console.log(req.file);
        const newPhoto = new Photo_model_1.default({
            title,
            description,
            imagePath: req.file.path,
        });
        await newPhoto.save();
        return res.json({ message: 'Photo successfully saved', newPhoto });
    }
    catch (err) {
        console.log('>>>' + err);
        return res.send({ error: err });
    }
};
exports.createPhoto = createPhoto;
const deletePhoto = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedPhoto = await Photo_model_1.default.findByIdAndDelete(id).lean();
        if (deletedPhoto) {
            await fs_extra_1.default.unlink(path_1.default.resolve(deletedPhoto.imagePath));
        }
        return res.send({ message: 'Photo sended', deletedPhoto });
    }
    catch (err) {
        console.log('>>>' + err);
        return res.send({ error: err });
    }
};
exports.deletePhoto = deletePhoto;
const updatePhoto = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        console.log(req.body, req.params);
        const updatedPhoto = await Photo_model_1.default.findByIdAndUpdate(id, {
            title,
            description,
        }, { new: true });
        return res.json({ message: 'successfully updated', updatedPhoto });
    }
    catch (err) {
        console.log('>>>' + err);
        return res.send({ error: err });
    }
};
exports.updatePhoto = updatePhoto;
