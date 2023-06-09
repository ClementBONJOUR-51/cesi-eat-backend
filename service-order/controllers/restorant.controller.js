//like post controller but for Restaurant
const mongoose = require("mongoose");
const Restorant = require("../models/restorant.model.js");
const { ObjectId } = mongoose.Types;

// Tous les Restorants avec date_in et date_out
const getAllRestorants = async (req, res) => {
    try {
        const restorant = await Restorant.find({ date_out: null });
        const count = await Restorant.countDocuments({ date_out: null });
        res.status(200).json({ restorant, count });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//get one Restorant
const getOneRestorant = async (req, res) => {
    try {
        const restorant = await Restorant.findOne({
            _id: req.params.id,
            date_out: null
        });
        res.status(200).json(restorant);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//create Restorant
const createRestorant = async (req, res) => {
    const RestorantObj = new Restorant({
        restorant_name : req.body.restorant_name,
        restorant_type : req.body.restorant_type,
        phone_number : req.body.phone_number,
    });
    try {
        const newRestorant = await RestorantObj.save();
        res.status(201).json(newRestorant);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//update Restorant
const updateRestorant = async (req, res) => {
    try {
        const restorant = await Restorant.findById(req.params.id);
        restorant.restorant_name = req.body.restorant_name,
        restorant.restorant_type = req.body.restorant_type,
        restorant.phone_number = req.body.phone_number,
        await restorant.save();
        res.status(200).json(restorant);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//delete Restorant (just change date_out)
const deleteRestorant = async (req, res) => {
    try {
        const restorant = await Restorant.findById(req.params.id);
        restorant.date_out = Date.now();
        await restorant.save();
        res.status(200).json(restorant);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = { getAllRestorants, getOneRestorant, createRestorant, updateRestorant, deleteRestorant };