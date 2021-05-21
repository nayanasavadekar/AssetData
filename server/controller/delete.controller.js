exports.delete = (req,res) =>{

    const db = require('../module')
    const asset = db.Asset;
    const id = req.params.id;

    asset.findByIdAndRemove(id)

    .then(data =>{

        if(!data){
            res.status(404).send({
                massege:`Cannot delete data with ID ${id}`
            })
        }
        else res.send({
            massege:'Deleted successfully!'
        })
    })
    .catch (err =>{
        res.status(505).send({
            massege:
                err.massege || `Some Error Occured`
        })
    })
}