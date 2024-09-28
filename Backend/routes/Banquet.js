import express from 'express';
import Banquet from '../models/Banquet.js'; 

const router = express.Router();

// GET all banquets
router.get('/', async (req, res) => {
    try {
        const banquets = await Banquet.find();
        res.json(banquets);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST a new banquet
// router.post('/', async (req, res) => {
//     const banquet = new Banquet(req.body);
//     try {
//         await banquet.save();
//         res.status(201).json(banquet);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// });

export default router;
