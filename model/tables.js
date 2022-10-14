const dataBase = require('../database/db.js')
class tableModel {
    async createTable(tableName, columns, descr) {
        var ret
        var exist = await dataBase.schema.hasTable(tableName)

        if (!exist) {
           await  dataBase.schema.createTable(tableName, function (t) {
                t.increments('id').primary();
                columns.forEach(column => {
                    console.log(columns)
                    if (column.type == 'C') {
                        t.string((column.name).toUpperCase(), column.size);
                    } else if (column.type == 'T') {
                        t.text((column.name).toUpperCase());
                    } else if (column.type == 'N') {
                        t.float((column.name).toUpperCase(), column.size);
                    } else if (column.type == 'D') {
                        t.date((column.name).toUpperCase(), column.size);
                    }
                })
            })
            await dataBase('table').insert({ name: tableName, descr: descr })
            await dataBase('column').insert(columns)
            ret = { valid: true, msg: "Tabela criada com sucesso!" }
        } else {
            ret = { valid: false, msg: "Tabela já existe!" }
        }

        return ret
    }
}
module.exports = new tableModel()