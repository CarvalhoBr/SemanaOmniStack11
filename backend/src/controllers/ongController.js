const crypto = require('crypto')
const connection =  require('../database/connection')

module.exports = ({

    async index(req, res){
        const ongs = await connection('ongs').select('*')
        return res.json(ongs)
    },

    async checkOngExists(req, res, next){
        const { name } = req.body

        const exists = await connection('ongs')
            .where('name', name)
            .select('*')

        if ( exists.length === 0 ){
            next()
        }else{
            return res.send('The name has already taken')
        }
    },

    async create(req, res){
        const { name, email, whatsapp, city, uf } = req.body
        const id = crypto.randomBytes(4).toString('HEX')
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })

    return res.json({"id": id})
    }, 

})