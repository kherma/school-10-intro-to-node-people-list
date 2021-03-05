const fs = require("fs");

const sampleData = {
  gender: ["M", "F"],
  male: ["Nick", "Richard", "Steve", "Josh", "Mitis"],
  female: ["Sarah", "Rachel", "Lauren", "Kate", "Sam"],
  surname: ["Amar", "Bowler", "Crunnel", "Derie", "Eerson"],
  age: [18, 78],
};

const randomNumberRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const createUserData = (data) => {
  const gender = data.gender[randomNumberRange(0, 1)];
  const firstName =
    gender === "M"
      ? data.male[randomNumberRange(0, 4)]
      : data.female[randomNumberRange(0, 4)];
  const lastName = data.surname[randomNumberRange(0, 4)];
  const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`;

  return {
    gender: gender,
    firstName: firstName,
    lastName: lastName,
    age: randomNumberRange(data.age[0], data.age[1]),
    email: email,
  };
};

const data = [...Array(20)].map(() => {
  return createUserData(sampleData);
});

fs.writeFile("people.json", JSON.stringify(data), (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});
