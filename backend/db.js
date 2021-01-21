const mongoose = require('mongoose');

mongoose.connect(
	'mongodb+srv://Ermz:6@Acjrnfkj@cluster0.jwfl5.mongodb.net/test?retryWrites=true&w=majority',
	{useNewUrlParser: true, useUnifiedTopology: true}
);

const paymentSchema = new mongoose.Schema({
	id: String,
	itemId: String,
	paid: Boolean
});

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = {
	Payment
}