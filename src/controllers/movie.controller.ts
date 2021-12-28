import { Request, Response } from 'express';
import { Movie } from '../models/movie.model';
import { paginate } from '../middlewares/pagination';

function index(req: Request, res: Response) {
    const page: string = req.query.page as string;

    Movie.find((error, result) => {
        if (error) {
            return res.status(500).json({
                error
            });
        }

        return res.status(201).json(
            paginate(result, 10, parseInt(page))
        );
    });
}

async function create(req: Request, res: Response) {
    const { name, category, description, media_type, poster, backdrop } = req.body;

    const movieExists = await Movie.findOne({ name });

    if (movieExists) {
        return res.status(409).json({
            message: 'Filme já existe.'
        });
    }

    const movie = new Movie({ name, category, description, media_type, poster, backdrop });

    movie.save((error: any, result: any) => {
        if (error) {
            return res.status(500).json({
                error
            });
        }

        return res.status(201).json({
            result
        });
    });
}

function view(req: Request, res: Response) {
    const { id } = req.params;

    Movie.findById(id, (error: any, result: any) => {
        if (error) {
            return res.status(500).json({
                error
            });
        }

        return res.status(200).json({
            result
        });
    });
}

async function search(req: Request, res: Response) {
    const { search } = req.params;

    const regex = new RegExp(search, 'gi');

    const result = await Movie.find({ name: regex }).catch(error => {
        console.log(error);

        return res.status(500).json({
            message: error
        });
    });

    if (!result) {
        return res.status(500).json({
            message: 'Não foi possível encontrar'
        });
    }

    return res.status(200).json({
        result
    });
}

export { index, create, view, search }
