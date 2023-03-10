const db = require('../../models')
const paginate = require('jw-paginate')

exports.getAllSchool = (req, res) => {
    db.Schools.findAll({})
    .then((data) =>{
        // get page from query params or default to first page
        const page = parseInt(req.query.page) || 1;
        const pager = paginate(data.length, page);
        const areMorePages = pager.currentPage === pager.totalPages;
        const pageOfItems = data.slice(pager.startIndex, pager.endIndex + 1);

        res.send({data:pageOfItems,areMorePages:!areMorePages,status:'success'})
    })
    .catch(err => res.status(500).send({ error: err, status:'error' }))
}

exports.createSchool = (req, res) => {
    db.Schools.create(req.body).then(() => res.send({status:'success', message: 'School Created Successfully' })).catch(err => res.status(500).send({ error: err, status:'error' }))
}

exports.updateSchool = (req, res) => {
    db.Schools.update(req.body, {
        where: {
            id: req.params.id
        }
    }).then(() => res.send({ status: 'success', message: 'School Updated Successfully' })).catch(err => res.status(500).send({ error: err, status:'error' }))
}

exports.deleteSchool = (req, res) => {
    db.Schools.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => res.send({ status: 'success', message: 'School Deleted Successfully' })).catch(err => res.status(500).send({ error: err, status:'error' }))
}