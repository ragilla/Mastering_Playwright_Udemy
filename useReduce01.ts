const people = [
    { name: 'Alice', age: 25, city: 'NY' },
    { name: 'Bob', age: 30, city: 'LA' },
    { name: 'Charlie', age: 25, city: 'NY' },
    { name: 'David', age: 30, city: 'LA' },
    { name: 'Alice', age: 35, city: 'Chicago' }
];

const grouped = people.reduce((acc, person) => {
    //const key = person.age;
    //const key = person.city;
    const key = person.name;

    // initialize array if not present
    if (!acc[key]) {
        acc[key] = [];
    }
    acc[key].push(person);
    return acc;
}, {});
console.log(grouped);