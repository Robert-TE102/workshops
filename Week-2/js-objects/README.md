JS: Objects
what is an object?
Examples of different objects.

Keywords:
Objects.
Data types.
Array. --> More than one value.
Porperties.
Key-value pairs.
Methods.
Dot notation.

What is an object:
A Way of storing data - Variable --> one value at a time.
We can store data in objects in a more specific way - Label our values, key-value pairs.
const favouriteThings =["Sun", 4, True, "Sea"] - no more context in this array.

//Each key-value pair is a property in our object.
//Keys are unique.

//Structure
const objectName = {
key: "value", - Property.
key: "value",};

const City = {
cityName: "...",
population: 99999,
hasTrainStation: true,
cityColor: ["Yellow", "Green"],
companies:{ or [
techEd:{

companyName:"Tech Educators",
staffNumber: 1000,
fields: ["Education", "Tech"],
},

{companyNames: "Fuel Studios",
staffNumber: 10,
Fields: ["infrastructure"],
}
};]

//access the data inside
//access the value of a property --> dot notation

city.cityName;
console.log(city.cityName);

// TODO: access the property staffNumber in the first item of the first companies property.
city.companies[0].staffNumber;

//add a new property - Dot-Notation.
//TODO add a property county to the city object.
//Update an existing value inside an object.

city.county = "Norfolk";
console.log(city)
city.county = "East Anglia";
