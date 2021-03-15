"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPhoto = exports.getPhotos = void 0;
const getPhotos = async (req, res) => {
    return res.json({ message: 'Photos sended' });
};
exports.getPhotos = getPhotos;
const createPhoto = async (req, res) => {
    console.log(req.body);
    return res.json({ message: 'Photo successfully saved' });
};
exports.createPhoto = createPhoto;
