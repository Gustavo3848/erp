const modelTable = require('../model/tables.js')
class controllerTable{
    async insert(req,res){
        var columns = [{ name: "clie",descr: "descr", type: "C", size: 100, table: "PEDIDO"},{name: "nume",descr: "Numero", type: "N", size: 8, table: "PEDIDO"}]
        var ret = await modelTable.createTable("PEDIDO", columns, 'descricao')
        console.log(ret)
        res.json(req.body.cliente)
        res.status(200).end()
    }

}
module.exports = new controllerTable()