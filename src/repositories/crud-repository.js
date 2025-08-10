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
        try{
            const response = await this.model.destroy({
                where : {
                    id : data
                }
            });
            return response
        }
        catch(error){
            Logger.error('something went wrong in crud repository : destroy');
            return error
        }
    }

    async get(data){
        try{
            const response = await this.model.get(data);
            return response
        }
        catch(error){
            Logger.error('something went wrong in crud repository : get');
            return error
        }
    }

    async getAll(){
        try{
            const response = await this.model.getAll();
            return response
        }
        catch(error){
            Logger.error('something went wrong in crud repository : getAll');
            return error
        }
    }

    async update(id,data){ // data that we passing should be object i.e data->{col:value,.....}
        try{
            const response = await this.model.update(data,{
                where : {
                    id : id
                }
            });
            return response
        }
        catch(error){
            Logger.error('something went wrong in crud repository : update');
            return error
        }
    }
}

module.exports = crudRepository
