const {Logger} = require('../config')
class crudRepository{
    constructor(model){
        this.model = model
    }
    // async create(data){
    //     console.log("Inside Repository")
    //     try{
    //         const response = await this.model.creat(data);
    //         return response
    //     }
    //     catch(error){
    //         Logger.error('something went wrong in crud repository : create');
    //         return error
    //     }
    // }
    async create(data){
        console.log("Inside repository");
        const response = await this.model.create(data);
        return response;
    }

    async destroy(data){
            const response = await this.model.destroy({
                where : {
                    id : data
                }
            });
            return response
    }

    async get(data){
            const response = await this.model.findByPk(data);
            return response
    }

    async getAll(){
            const response = await this.model.findAll();
            return response
    }

    async update(id,data){ // data that we passing should be object i.e data->{col:value,.....}
            const response = await this.model.update(data,{
                where : {
                    id : id
                }
            });
            return response
    }
}

module.exports = crudRepository
