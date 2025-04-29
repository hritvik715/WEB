let peoples = [
    { firstName: "Macom", lastName: "Reynolds" },
    { firstName: "Kaylee", lastName: "Frye" },
    { firstName: "Jayne", lastName: "Cobb" },
];


const results = peoples.map((person) => {
    return [person.firstName, person.lastName]
});

console.log(results);