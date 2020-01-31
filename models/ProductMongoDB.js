const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
	name: { type: String, match: /^[0-9a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/ },
	description: { type: String },
    price : {  type: Number },
    image: { type: String },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', ProductSchema);
