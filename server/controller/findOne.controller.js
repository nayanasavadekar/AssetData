exports.findOne = (req,res) =>{

    const db = require('../module')
    const asset = db.Asset;
    const id = req.params.id;

    asset.findById(id)
        .then( data =>{
            if(!data){
                res.status(404).send({
                    massege:`Data not found with ID ${id}`
                })
            }
            else res.send(data)            
        })
        .catch (err =>{
            res.status(500).send({
                massege:
                    err.massege || `Some Error occured`
            })
        })
}