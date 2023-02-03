const db = require('../../models')
const paginate = require('jw-paginate')

exports.getAllSubject = (req, res) => {
    db.Subjects.findAll({
        include: [{ model: db.Students }]
    }).then(data => {
        // get page from query params or default to first page
        const page = parseInt(req.query.page) || 1;
        const pager = paginate(data.length, page);
        const areMorePages = pager.currentPage === pager.totalPages;
        const pageOfItems = data.slice(pager.startIndex, pager.endIndex + 1);

        res.send({ data: pageOfItems, areMorePages: !areMorePages, status: 'success' })
    }).catch(err => res.status(500).send({ error: err, status: 'error' }))
}

exports.createSubject = async (req, res) => {
    try {
        const subjectData = await db.Subjects.create(req.body);
        await db.Student_Subject.create({ SubjectId: subjectData.id, StudentId: req.body.StudentId })
        res.send({ message: 'Subject Created Successfully', status: 'success' })
    } catch (error) {
        res.status(500).send({ error, status: 'error' })
    }
}

exports.updateSubject = (req, res) => {
    db.Subjects.update(req.body, {
        where: {
            id: req.params.id
        }
    }).then(() => res.send({ message: 'Subject Created Successfully', status: 'success' })).catch(err => res.status(500).send({ error: err, status: 'error' }))
}

exports.deleteSubject = (req, res) => {
    db.Subjects.destroy({
        where: {
            id: Number(req.params.id)
        }
    }).then(() => res.send({ message: 'Subject Destroy Successfully', status: 'success' })).catch(err => res.status(500).send({ error: err, status: 'error' }))
}