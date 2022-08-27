const Database = require("../../../database/Database");

module.exports = async (req, res) => {

    const records = await Database.read_many("User", {});

    return new Response();

}