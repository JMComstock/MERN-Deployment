const mongoose =require('mongoose');

const database = "pets";
mongoose.connect(`mongodb://localhost/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("You are now in the mainframe!!"))
    .catch(err => console.log(`Oh oh spaghetti ohs ..... ${err}`))