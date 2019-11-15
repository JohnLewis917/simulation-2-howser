module.exports = {
    getHouses(req, res) {
        const db = req.app.get('db')
        db.get_houses()
        .then(result => {
            res.status(200).send(result)
        })
        .catch(err => {
            console.log(err)
        })
    },
    addHouse(req, res) {
        const db = req.app.get('db')
        const {name, address, city, state, zip, image, mortgage, rent} = req.body
        console.log(req.body)
        db.add_house({
            name: name,
            address: address,
            city: city,
            state: state,
            zip_code: zip,
            image: image,
            mortgage: mortgage,
            rent: rent
        })
        .then(result => {
            res.status(200).send(result)
        })
        .catch(err => {
            console.log(err)
        }) 
    },
    deleteAHouse(req, res){
        const db = req.app.get('db')
        db.delete_house(req.params.id)
        .then(result => {
            res.status(200).send(result)
        })
    }
}