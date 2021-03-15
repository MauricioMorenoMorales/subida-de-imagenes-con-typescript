"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPhoto = exports.getPhotos = void 0;
const Photo_model_1 = __importDefault(require("../models/Photo.model"));
const getPhotos = async (req, res) => {
    const photos = await Photo_model_1.default.find().lean();
    return res.json({ message: 'Photos sended', photos });
};
exports.getPhotos = getPhotos;
const createPhoto = async (req, res) => {
    const { title, description } = req.body;
    console.log(req.file);
    const newPhoto = new Photo_model_1.default({
        title,
        description,
        imagePath: req.file.path,
    });
    await newPhoto.save();
    return res.json({ message: 'Photo successfully saved', newPhoto });
};
exports.createPhoto = createPhoto;
