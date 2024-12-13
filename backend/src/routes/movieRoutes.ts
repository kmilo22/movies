import { Router } from 'express';

import {
    getAllMovie,
    createMovie,
    getMovieById,

} from '../controllers/movieController';

const router = Router();

router.get('/', getAllMovie);
router.post('/', createMovie);
router.get('/:id', getMovieById);

export default router;