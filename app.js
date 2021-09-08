const cors = require("cors");
const uuid = require("uuid");
const express = require('express');

const { inventory } = require("./inventory.js");
const {trainers} = require("./gymTrainers"); 
const app = express();
const port = 3000;


app.use(cors());
app.use(express.json());

app.get('/inventory', (req, res) => {
    res.send(inventory);
})
app.get('/inventory/:id', (req, res) => {
    const { id } = req.params;
    if (!id || id.length < 5)
        res.status(404).json(
            {
                errorCode: "invalid_Request",
                errorString: "Неверные параметры"
            }
        );
    const item = inventory.find(item => item.id === id);

    if (!item) {
        res.status(404).json({
            errorCode: "invalid_NOT_FOUND",
            errorString: "Предмет не faund"
        })
    }
    else {
        res.send(item);
    }

})

app.get('/trainers', (req, res) => {
    res.send(trainers);
})
app.get('/trainers/:id', (req, res) => {
    const { id } = req.params;
    if (!id || id.length < 5)
        res.status(404).json(
            {
                errorCode: "invalid_Request",
                errorString: "Неверные параметры"
            }
        );
    const item = trainers.find(item => item.id === id);

    if (!item) {
        res.status(404).json({
            errorCode: "invalid_NOT_FOUND",
            errorString: "Предмет не faund"
        })
    }
    else {
        res.send(item);
    }

})

app.post("/inventory/create", (req, res) => {
    const body = req.body;
    try {
        const {
            name,
            isInGoodContion,
            quantuty,
            weight,
            producedBy
        } = body;

        const newObj = {
            id: uuid.v4(),
            name,
            isInGoodContion,
            quantuty,
            weight,
            producedBy
        }
        inventory.push(newObj);
        res.send(newObj); 
    } catch (error) {
        res.status(500).json({
            errorCode: "INTERNAL_SERVER_ERROR",
            errorString: "Внутреняя ошибка сервиса!"
        })
    }


})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
