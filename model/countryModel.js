import mongoose from "mongoose";
// Define the schema for the document
const countrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
});

// Create the model using the schema
const CountryModel = mongoose.model("Country", countrySchema);
export default CountryModel;
