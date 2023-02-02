const db = require('../../models')

exports.getAllStudent = (req, res) => {
    db.Students.findAll({
        include: [{ model: db.Schools }]
    }).then(data => {
        // get page from query params or default to first page
        const page = parseInt(req.query.page) || 1;
        const pager = paginate(data.length, page);
        const areMorePages = pager.currentPage === pager.totalPages;
        const pageOfItems = data.slice(pager.startIndex, pager.endIndex + 1);
        res.send({ status: 'success', data: pageOfItems, areMorePages })
    }).catch(err => res.status(500).send({ error: err, status: 'error' }))
}

exports.createStudent = (req, res) => {
    db.Students.create(req.body).then(() => res.send({ status: 'success', message: 'Student Created Successfully' })).catch(err => res.status(500).send({ error: err, status: 'error' }))
}

exports.updateStudent = (req, res) => {
    db.Students.update(req.body, {
        where: {
            id: req.params.id
        }
    }).then(() => res.send({ status: 'success', message: 'Student Updated Successfully' })).catch(err => res.status(500).send({ error: err, status: 'error' }))
}

exports.deleteStudent = (req, res) => {
    db.Students.delete({
        where: {
            id: req.params.id
        }
    }).then(() => res.send({ message: 'Student Created Successfully' })).catch(err => res.status(500).send({ error: err, status: 'error' }))
}