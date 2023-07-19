"use strict";
class Member {
    name = " ";
    age = 0; //private age: number = 0;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    isAdult() {
        return this.age >= 20;
    }
}
const john = new Member("John Smith", 51);
console.log(john.name);
console.log(john.age);
console.log(john.isAdult());
const liam = new Member("Liam Connor", 24);
class AdminMember extends Member {
    adminRole = 1;
    constructor(name, age, adminRole) {
        super(name, age); //override
        this.adminRole = adminRole;
    }
    sayAdminRole() {
        console.log(`My adminRole is ${this.adminRole}.`);
    }
    isAdult() {
        return true;
    }
}
const emma = new AdminMember("Emma Steiner", 19, 3);
console.log(emma.name);
console.log(emma.age);
console.log(emma.adminRole);
console.log(emma.isAdult());
emma.sayAdminRole();
//# sourceMappingURL=constructor.js.map