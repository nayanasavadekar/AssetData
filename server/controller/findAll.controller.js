exports.findAll = (req,res) =>{

    const db = require('../module')
    const asset = db.Asset;

    asset.find()
    
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            massege:
                err.massege || `Operation cannot be done due to error`
        })
    })
    
}