/**
 * Tipos de parâmetros:
 * 
 * Query params: Parâmetros nomeados apresentados na rota após "?" (filtros, paginação)
 *      Exemplos: http://localhost:3333/users?name=Brandon -- {queryParams = req.query}
 * Route params: Parâmetros utilizados para identificar recursos (Dados de um único usuário por ex)
 *      Exemplos: http://localhost:3333/users/1 -- na requisição
 *                                   /users/:id -- na declaração -- {routeParams = req.params}
 * Request Body: Corpo da requisição, usado para criar ou editar um dado   
 *                                         
 */


const express = require('express')
const routes = require('./routes')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333)