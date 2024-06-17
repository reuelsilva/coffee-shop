const express = require("express")
const cors = require("cors")

const server = express()

server.use(cors())

const products = {
    results: [
        {
        image_path: "https://i.ibb.co/XkGk0YY/menu-1.png",
        name: "Café Coado",
        new_price: "15.99",
        old_price: "29.99"},
        {
            image_path: "https://i.ibb.co/4PvZRWh/menu-2.png",
            name: "Tasty And Healty",
            new_price: "15.99",
            old_price: "29.99"
        },
        {
            image_path: "https://i.ibb.co/T1KGT8s/menu-3.png",
            name: "Tasty And Healty",
            new_price: "15.99",
            old_price: "29.99"
        },
        {
            image_path: "https://i.ibb.co/bP461r8/menu-4.png",
            name: "Tasty And Healty",
            new_price: "15.99",
            old_price: "29.99"
        },
        {
            image_path: "https://i.ibb.co/6NxVCdw/menu-5.png",
            name: "Tasty And Healty",
            new_price: "15.99",
            old_price: "29.99"
        },
        {
            image_path: "https://i.ibb.co/tb0H4tV/menu-6.png",
            name: "Tasty And Healty",
            new_price: "15.99",
            old_price: "29.99"
        },
    ]
}

server.get("/products", (request, response) => {

    return response.send(JSON.stringify(products))
})

server.listen(3001)
