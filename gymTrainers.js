const uuid = require("uuid"); 

exports.trainers = [
    {
        id: uuid.v4(), 
        name: "Игорь",
        age: 23, 
        specialization: "Фитнес",
        salary: 16000, 
    },
    {
        id: uuid.v4(), 
        name: "Виталия",
        age: 20, 
        specialization: "Бокс",
        salary: 15000, 
    },
    {
        id: uuid.v4(), 
        name: "Николашка",
        age: 25, 
        specialization: "Йога",
        salary: 15000, 
    },
    {
        id: uuid.v4(), 
        name: "Алиса",
        age: 22, 
        specialization: "Карате",
        salary: 16000, 
    }
]