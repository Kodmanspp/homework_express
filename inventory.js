const uuid = require("uuid"); 

exports.inventory = [
    {
        id: uuid.v4(), 
        name: "Штанга",
        isInGoodContion: true, 
        quantuty: 15,
        weight: 20, 
        producedBy: "Nike"
    },
    {
        id: uuid.v4(), 
        name: "Блины",
        isInGoodContion: true, 
        quantuty: 50,
        weight: 20, 
        producedBy: "Xiomi"
    },
    {
        id: uuid.v4(), 
        name: "Гантели",
        isInGoodContion: false, 
        quantuty: 30,
        weight: 35, 
        producedBy: "LC"
    },
    {
        id: uuid.v4(), 
        name: "Беговая дорожка",
        isInGoodContion: false, 
        quantuty: 4,
        weight: 150, 
        producedBy: "Runner TEch"
    }
]