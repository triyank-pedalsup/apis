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

const deleteMovie = async(req,res)=>{
    try {
        const movie = await movieService.deleteMovie(req.params.id);
        res.status(200).json({message:"movie deleted successfully",data:movie});
    } catch (error) {
        res.status(500).json({message:"Error deleting movie",error:error.message});
    }
}

const updateMovie = async(req,res)=>{
    try {
        const movie = await movieService.updateMovie(req.params.id,req.body);
        res.status(200).json({message:"movie updated successfully",data:movie});
    } catch (error) {
        res.status(500).json({message:"Error updating movie",error:error.message});
    }
}

module.exports = {
    createMovie,
    getAllMovie,
    deleteMovie,
    updateMovie,
}