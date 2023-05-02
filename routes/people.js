const express = require('express')

const router = express.Router()
const {
    getPeople,
    createPeople,
    createPeoplePostman,
    updatePeople,
    removePeople
} = require('../controllers/people')

// router.get('/',getPeople )
// router.post('/',createPeople)
// router.post('/postman',createPeoplePostman)
// router.put('/:id',updatePeople)
// router.delete(':id',removePeople)

//another way of doing same as above

router.route('/').get(getPeople).post(createPeople)
router.route('/postman').post(createPeoplePostman)
router.route(':/id').put(updatePeople).delete(removePeople)


module.exports = router