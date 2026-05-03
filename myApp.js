require('dotenv').config({ path: './secret.env' });

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ Connection error:", err));

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: Number,
  favoriteFoods: [String]
});

let Person = mongoose.model("Person", personSchema);

const createAndSavePerson = (done) => {
  const someone = new Person({
    name: "Rethabile",
    age: 24,
    favoriteFoods: ["mangwinya", "skopo", "Buns"]
  });

  someone.save((err, data) => {
    if (err) return done(err);
    done(null, data);
  });
};