module.exports = app =>{

        const Add = require('../controller/add.controller')
        const FindAll = require('../controller/findAll.controller')
        const FindOne = require('../controller/findOne.controller')
        const Update = require ('../controller/update.controller')
        const Delete = require ('../controller/delete.controller')

        var router = require('express').Router()

        router.post('/',Add.add)
        router.get('/',FindAll.findAll)
        router.get('/:id',FindOne.findOne)
        router.put('/:id',Update.update)
        router.delete('/:id',Delete.delete)


        app.use('/api/asset',router)
        
};