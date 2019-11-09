module.exports = {
    getHouses(req, res) {
        const db = req.app.get('db')
        db.get_houses()
        .then(result => {
            res.satus(200).send(result)
        })
        .catch(err => {
            console.log(err)
        })
    }
}