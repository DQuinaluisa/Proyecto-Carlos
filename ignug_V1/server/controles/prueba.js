let prueba = (req, res) => {
    return res.status(200).json({
        mensaje: "la prueba es OK1"
    })
}

let prueba1 = (req, res) => {
    return res.status(200).json({
        mensaje: "la prueba es OK21"
    })
}

module.exports = {
    prueba,
    prueba1
}