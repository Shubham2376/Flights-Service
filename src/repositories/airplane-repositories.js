const crudRepository = require("./crud-repository"); //import the parent class from crud-repository file
const {Airplane} = require("../models"); // import the Airplane which was export from the model file 
class AirplaneRepository extends crudRepository{ // As parent class is crudRepository and we know that crudRepository excepts the model using super() keyword you can actually call the constructor of the parent class 
    constructor(){
        super(Airplane);
    }
}
module.exports = AirplaneRepository;