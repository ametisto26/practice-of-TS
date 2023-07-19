class User {
       name: string = " "; //初期値がないとエラーになる。
       age: number = 0; //初期値がないとエラーになる。
       role?: string;
       readonly citizenship: string = "U.K.";

       isAdult(): boolean {
              return this.age >= 20;
       }

       setAge(age: number) {
              this.age =age;
       }
}

const olivia = new User();
console.log(olivia.name);
console.log(olivia.age);
console.log(olivia.isAdult());
console.log(olivia.role);
console.log(olivia.citizenship);

olivia.name = "Olivia";
olivia.setAge(23); //olivia.age = 31;
olivia.role = "leader"
console.log(olivia.name);
console.log(olivia.age);
console.log(olivia.isAdult());
console.log(olivia.role);
console.log(olivia.citizenship);
