exports.add = (req,res) =>{

    const db = require('../module')
    const asset = db.Asset;

    if(!req.body.assetcode){

        res.status(400).send ({
            massege: "Content cannot be empty!"

        })     
    }

    const Asset = new asset({
            assetcode:req.body.assetcode,
            assettype:req.body.assettype,
            location:req.body.location,
            ponumber:req.body.ponumber,
            installationdate:req.body.installationdate
    })
    Asset.save(Asset)
        .then(data =>{
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                massege:
                    err.massege || `Some Error occured!`
            })
        })

}