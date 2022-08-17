const express = require('express');
const mongoose = require('mongoose');
const app = express();
mongoose.connect("mongodb://localhost:27017/API", { useUnifiedTopology: true, use;
NewUrlParser: true });
module.exports = mongoose;
mongoose.connection
.once("open", () => console.log("Connected"))
.on("error", error => {
console.log("Your Error", error);
});
const bookRouter = express.Router();
var port = process.env.PORT || 4000;
const Libro = require('./models/libroModel')
bookRouter.route("/libro")
.get((req, res) => {
Libro.find((err, libros) => {
if (err) {
res.send(err);
} else {
    return res.json(libros);
}
});
});
app.use('/api', bookRouter);
app.get('/', (req, res) => {
res.send('buenas');
});
app.listen(port, () => {
    console.log(`Puerto ${port}`);
})