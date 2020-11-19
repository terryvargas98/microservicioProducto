const { Router } = require("express");
const router = Router();
const Producto = require('../model/Producto');
require('../kafka/consumer');


router.post('/addproducto', async(req, res) => {

    try {
        const producto = new Producto({
            producto_id: req.body.producto_id,
            nombre: req.body.nombre,
            cantidad: req.body.cantidad,
            Created: new Date()
        });
        await producto.save();
        res.status(200).send({ message: "register successful" });
    } catch (error) {
        res.status(500).send("Error save producto : " + error);
    }
});
router.get('/ListProducto', async(req, res) => {
    try {
        const Listproducto = await Producto.find({}).exec();

        res.status(200).send(JSON.stringify(Listproducto));
    } catch (error) {
        res.status(500).send("Error  : " + error);
    }

})


module.exports = router;