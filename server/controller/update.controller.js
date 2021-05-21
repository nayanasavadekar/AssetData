exports.update = (req,res) =>{

    const db = require ('../module')
    const asset = db.Asset;
    const id = req.params.id;

    if(!req.body){
        res.status(500).send({
            massege:`Data to Update cannot be empty!`
        })
    }
    asset.findByIdAndUpdate(id,req.body,{
        useFindAndModify:false
    })
    .then( data =>{
        if(!data){
            res.status(404).send({
                massege:`Cannot update data with ID ${id}`
            })
        }
        else res.send({
            massege:'Updated Successfully!'
        })
    })
    .catch (err =>{
        res.send(500).send({
            massege:
                err.massege || `Some error occured`
        })
    })
}