import CountryModel from "../model/countryModel.js";
import { seedCountry } from "../seederCountry.js";

console.log(seedCountry);

const seedDatabase = async () => {
  try {
    console.log("first");
    const result = await CountryModel.insertMany(seedCountry, { wtimeout: 0 });

    console.log(result);
    console.log(`${result.length} documents inserted`);
  } catch (err) {
    console.error("Error seeding database:", err);
  }
};

export default seedDatabase;
