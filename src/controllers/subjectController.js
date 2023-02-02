const db = require('../../models')

exports.getAllSubject = (req,res)=>{
    db.Subjects.findAll({
        include:[{model:db.Students}]
    }).then(data=>res.send(data)).catch(err=>res.status(500).send({error:err, status:'error'}))
}

exports.createSubject = (req,res)=>{
    db.Subjects.create(req.body).then(()=>res.send({message:'Subject Created Successfully'})).catch(err=>res.status(500).send({error:err, status:'error'}))
}

exports.updateSubject = (req,res)=>{
    db.Subjects.update(req.body,{
        where:{
            id:req.params.id
        }
    }).then(()=>res.send({message:'Subject Created Successfully'})).catch(err=>res.status(500).send({error:err, status:'error'}))
}

exports.deleteSubject = (req,res)=>{
    db.Subjects.delete({
        where:{
            id:req.params.id
        }
    }).then(()=>res.send({message:'Subject Created Successfully'})).catch(err=>res.status(500).send({error:err, status:'error'}))
}