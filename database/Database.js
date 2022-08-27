const mongoose = require("mongoose");
const Models = require("./models");


module.exports = class Database {

    /**
     * @param {string} modelname 
     * @returns {Array}
     */
    static async read_many (modelname, query, limit, offSet) 
    {
        try {
            /** @type {mongoose.Model} */
            const Model = Models[modelname];
            
        } catch (e) {
            
        }
    }

}