module.exports = mongoose =>{

    var mongoose = require('mongoose')
    var schema = mongoose.Schema(

        {
            assetcode:String,
            assettype:String,
            location:String,
            ponumber:String,
            installationdate:String          
        },
        {
            timestamp:true,
        }

    );

    schema.method ("toJSON",function() {

        const {__v,_id,...object} = this.toObject();
        object.id=_id;
        return object;
    });

    const Asset = mongoose.model("asset", schema);
    return Asset

};