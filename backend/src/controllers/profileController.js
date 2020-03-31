const connection = require('../database/connection')

module.exports = {

    async myIndex(req, res){

        const ong_id = req.headers.authorization 

        const incidentsOf = await connection('incidents')
            .where('ong_id', ong_id)
            .select('*')

        return res.json(incidentsOf)  
    }, 

    async indexOf(req, res){

        const { id } = req.params 

        const ong = await connection('ongs')
            .where('name', id)
            .select('*')
            .first()

        const ong_id = ong.id 
            
        const ong_incidents = await connection('incidents')
            .where('ong_id', ong_id)
            .select('*')

        return res.json(ong_incidents)
        
    }

    
}