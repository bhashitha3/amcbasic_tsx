import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5005;

const mongoURI = 'mongodb+srv://bhashitha:AZaz09$$@cluster0amc.zcisnub.mongodb.net/test';


mongoose.connect(mongoURI);


interface Movie {
  title: string;
  genre: string;
  year: number;
  imageUrl: string;
}

const movieSchema = new mongoose.Schema<Movie>({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  year: { type: Number, required: true },
  imageUrl: { type: String, required: true },

});


const MovieModel = mongoose.model<Movie>('Movie', movieSchema);

app.use(bodyParser.json());
app.use(cors());


app.get('/movies', async (req: Request, res: Response) => {
  try {
    const movies = await MovieModel.find();
    res.json(movies);
  } catch (error) {
    // res.status(500).json({ error:message });
  }
});

// POST a new movie
app.post('/movies', async (req: Request, res: Response) => {
  try {
    const movie = new MovieModel(req.body);
    await movie.save();
    res.status(201).json(movie);
  } catch (error) {
    // res.status(400).json({ error: error.message });
  }
});

// PUT (update) a movie
app.put('/movies/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const movie = await MovieModel.findByIdAndUpdate(id, req.body, { new: true });
    res.json(movie);
  } catch (error) {
    // res.status(400).json({ error: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
