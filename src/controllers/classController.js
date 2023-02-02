const db = require('../../models')

exports.getAllClass = (req,res)=>{
    db.Classes.findAll({}).then(data=>res.send(data)).catch(err=>res.status(500).send({error:err}))
}

exports.createClass = (req,res)=>{
    db.Classes.create(req.body).then(data=>res.send({message:'Class Created Successfully'})).catch(err=>res.status(500).send({error:err}))
}

exports.updateClass = (req,res)=>{
    db.Classes.update(req.body,{
        where:{
            id:req.params.id
        }
    }).then(data=>res.send({message:'Class Created Successfully'})).catch(err=>res.status(500).send({error:err}))
}

exports.deleteClass = (req,res)=>{
    db.Classes.delete({
        where:{
            id:req.params.id
        }
    }).then(()=>res.send({message:'Class Created Successfully'})).catch(err=>res.status(500).send({error:err}))
}