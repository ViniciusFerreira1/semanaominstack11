const express = require('express');
const cors = require('cors');
const routes  =require('./routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
/**
 * Rota / Recurso
 */
/**
 * Método HTTP:
 * GET Buscar informação Back-end
 * POST Criar uma informação no Back-end
 * PUT: Alterar uma informação no Back-end
 * DELETE: Deletar uma informação no Back-end
 */

 /**
  * Tipos de parametros
  * Route : Parametros utilizados para identificar recursos
  * Query: Parametros nomeados enviados na rota apos"?" (Filtros,Paginação)
  * Request Body: Corpo da requisição utilizado para criar alterar recursos
  */

app.listen(3333);