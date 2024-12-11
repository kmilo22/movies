"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMovie = exports.getMovieById = exports.createMovie = exports.getAllMovie = void 0;
const movie_1 = __importDefault(require("../models/movie"));
const getAllMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Movies = yield movie_1.default.find();
        res.status(200).json(Movies);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        res.status(500).json({ error: errorMessage });
    }
});
exports.getAllMovie = getAllMovie;
const createMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newMovie = new movie_1.default(req.body);
        yield newMovie.save();
        res.status(201).json(newMovie);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        res.status(500).json({ error: errorMessage });
    }
});
exports.createMovie = createMovie;
const getMovieById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const movie = yield movie_1.default.findById(req.params.id);
        if (!movie) {
            res.status(404).json({ message: 'Movie not found' });
        }
        else {
            res.status(200).json(movie);
        }
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        res.status(500).json({ error: errorMessage });
    }
});
exports.getMovieById = getMovieById;
const deleteMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield movie_1.default.findByIdAndDelete(req.params.id);
        return res.sendStatus(204);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Error al eliminar el producto';
        return res.status(500).json({ error: errorMessage });
    }
});
exports.deleteMovie = deleteMovie;
