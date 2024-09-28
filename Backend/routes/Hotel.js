import express from 'express';
import Hotel from '../models/Hotel.js'; 

const router = express.Router();

// GET all Hotels
router.get('/', async (req, res) => {
    try {
        const Hotels = await Hotel.find();
        res.json(Hotels);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST a new Hotel
// router.post('/', async (req, res) => {
//     const Hotel = new Hotel(req.body);
//     try {
//         await Hotel.save();
//         res.status(201).json(Hotel);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// });

export default router;
