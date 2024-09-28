import express from 'express';
import RealEstate from '../models/RealEstate.js'; 

const router = express.Router();

// GET all RealEstates
router.get('/', async (req, res) => {
    try {
        const RealEstates = await RealEstate.find();
        res.json(RealEstates);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST a new RealEstate
// router.post('/', async (req, res) => {
//     const RealEstate = new RealEstate(req.body);
//     try {
//         await RealEstate.save();
//         res.status(201).json(RealEstate);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// });

export default router;
