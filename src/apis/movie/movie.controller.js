const movieService = require('./movie.service.js');

const createMovie = async (req, res) => {
    try {
        const { title,duration,price} = req.body;
        const movie = await movieService.createMovie(title,duration,price);
        res.status(201).json({ message: "Movie created successfully", data: movie });
    } catch (error) {
        res.status(500).json({ message: "Error creating movie", error: error.message });        
    }
}

const getAllMovie = async(req,res)=>{
    try {
        const movie = await movieService.getAllMovie();
        res.status(200).json({message:"movie data found successfully",data:movie});
    } catch (error) {
        res.status(500).json({message:"Error fetching movie data",error:error.message});
    }
}

module.exports = {
    createMovie,
    getAllMovie,
}