type Employee = {
    id: number;
    name: string;
}

type Manager = {
    department: string;
    role: string;
}

type ManagerWithEmployeeInfo = Employee & Manager;

const manager12: ManagerWithEmployeeInfo = {
    id: 123,
    name: "Alex maerson",
    department: "engineering",
    role: "Team lead",
}


console.log(manager12.id)
console.log(manager12.name)
console.log(manager12.department)
console.log(manager12.role)  