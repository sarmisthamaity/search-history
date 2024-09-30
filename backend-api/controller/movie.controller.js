const message = require("../message/msg");
const movieService = require("../service/movie.service");

const searchMovie = async (req, res) => {

    try {
        const { title } = req.query;        
        const filterData = await movieService.filterMovie(title);

        return res.status(message.statusCode.sucess)
            .send({
                status: message.statusCode.sucess,
                message: message.sms.sucessfull,
                data: filterData
            });
    } catch (error) {
        return res.status(message.statusCode.serverError)
            .send({
                status: message.statusCode.serverError,
                message: error
            });
    }
}

module.exports = {
    searchMovie
}

