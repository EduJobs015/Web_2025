import express, {Request, Response} from "express"

const app = express()
const PORT = process.env.PORT ?? 3000

app.use(express.json())


app.get ('/api/ product /: id ', filtraProdutoPorID )
app.get ('/api/ product ', filtrarProdutoPorNome )
app.post ('/api/ product ', novoProduto )
