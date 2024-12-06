import express from 'express'
import{
    getAllBarang,
    getBarangById,
    addBarang,
    updateBarang,
    deleteBarang
} from '../controllers/barang_controllers.js'

const app = express()
import { authenticate, authorize } from '../controllers/auth_controllers.js'
import { IsAdmin } from '../middleware/role_validation.js'

app.get('/', getAllBarang)
app.get('/barangId/:id',getBarangById)
app.post('/addBarang',authorize, [IsAdmin], addBarang)
app.put('/upBarang/:id',updateBarang)
app.delete('/:id',deleteBarang)

// app.post('/login', authenticate)

export default app