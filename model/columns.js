const dataBase = require('./database/db.js')
class columnsModels{    
    async insert(columns){
        var ret 
        dataBase('column').insert(columns)

        return ret
    }
}
module.exports = new columnsModels()