import express from 'express';
import Gym from '../models/Gym.js'; 

const router = express.Router();

// GET all Gyms
router.get('/', async (req, res) => {
    try {
        const Gyms = await Gym.find();
        res.json(Gyms);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST a new Gym
// router.post('/', async (req, res) => {
//     const Gym = new Gym(req.body);
//     try {
//         await Gym.save();
//         res.status(201).json(Gym);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// });

export default router;
