// import knexfile from '../knexfile'
const knexfile = require('../knexfile')
import Knex, {Config} from 'knex'

const postgres = Knex(knexfile)

export {postgres as db}
