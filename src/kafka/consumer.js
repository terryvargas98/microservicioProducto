var kafka = require('kafka-node');
const Producto = require('../model/Producto');
var client = new kafka.KafkaClient({ kafkaHost: '23.98.219.230:9092' });
var consumer = new kafka.Consumer(client, [{ topic: 'Ventas' }]);

consumer.on('message', async(venta) => {
    try {
        const data = JSON.parse(venta.value);
        console.log(data);
        const update = await Producto.findOneAndUpdate({ producto_id: data.producto_id }, { $set: { cantidad: data.cantidad } }, { urpset: false });
        console.log('Cambio realizado con exito');
    } catch (error) {
        throw error;
    }
});