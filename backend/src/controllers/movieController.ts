import { Request, Response } from 'express';
import Movie from '../models/movie';

export const getAllMovie = async (req: Request, res: Response): Promise<void>=> {
    try {
        const Movies = await Movie.find();
        res.status(200).json(Movies);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        res.status(500).json({ error: errorMessage });
    }
};

export const createMovie  = async (req: Request, res: Response): Promise<void> => {
    try {
        const newMovie = new Movie(req.body);
        await newMovie.save();
        res.status(201).json(newMovie);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        res.status(500).json({ error: errorMessage });
    }
};

export const getMovieById = async (req: Request, res: Response): Promise<void> => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) {
            res.status(404).json({ message: 'Movie not found' });
        } else {
            res.status(200).json(movie);
        }
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        res.status(500).json({ error: errorMessage });
    }
};
