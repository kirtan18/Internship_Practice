const getAllProducts = async(req,res) =>{
    res.status(200).json({msg : "Get all procuts"});
};

const getAllProductsTesting = async(req,res) =>{
    res.status(200).json({msg : "Get all products Testing"});
};

module.exports = { getAllProducts , getAllProductsTesting};