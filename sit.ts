interface Person {
  name: string;
  age: number;
  occupation: string;
  isEmployed: boolean;
}

let jobayer: Person = {
  name: "Jobayer",
  age: 30,
  occupation: "Software Developer",
  isEmployed: true
};

// Function to display person's details
function displayPersonDetails(person: Person): void {
  console.log(`Name: ${person.name}`);
  console.log(`Age: ${person.age}`);
  console.log(`Occupation: ${person.occupation}`);
  console.log(`Employment Status: ${person.isEmployed ? 'Employed' : 'Unemployed'}`);
}

// Call the function to display Jobayer's details
displayPersonDetails(jobayer);
