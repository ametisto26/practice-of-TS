class Member {
       readonly name: string = " ";
       age: number = 0; //private age: number = 0;

       constructor(name: string, age: number) {
              this.name = name;
              this.age = age;
       }

       public isAdult(): boolean {//public を記述しなくても動作は変わらない。
              return this.age >= 20;
       }
}

const john = new Member("John Smith", 51);
console.log(john.name);
console.log(john.age);
console.log(john.isAdult());

const liam: Member = new Member("Liam Connor", 24);

class AdminMember extends Member {
       adminRole: number = 1;

       constructor(name: string, age: number, adminRole: number) {
              super(name, age); //override
              this.adminRole = adminRole;
       }

       public sayAdminRole() {
              console.log(`My adminRole is ${this.adminRole}.`);
       }

       public override isAdult(): boolean { //overrideは書かなくても問題ない。
              return true;
       }
}

const emma = new AdminMember("Emma Steiner", 19, 3);
console.log(emma.name);
console.log(emma.age);
console.log(emma.adminRole)
console.log(emma.isAdult());
emma.sayAdminRole();




