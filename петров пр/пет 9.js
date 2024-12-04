let user = {
  name: "Джо спин",
  age: 30
};
user.sayHi = function() {
  alert("Привет!");
};
user.sayHi(); // Привет!
let zxc = {
  name: "Чораев Ярослав",
  address: "ул. Большая ч, дом 6",
  phone: "+8 (800) 555-35-35",
  email: "YaCho@gmail.com",
  orderHistory: [] 
 };
 
 console.log(zxc.name); 
 console.log(zxc.address); 
 console.log(zxc.phone); 
 let children = {
  name: "Валера",
  isAdmin: false
 };
 let fff = {
userID: 1,
ZAKAZ: 2,
items: ["Man","Plov"],
status: "Ожидание"
 }
 let restaurant = {
  id:2,
  name: "gg vp",
  address:"хз"
 };
 if (fff.status === "Ожидание") {
  console.log(`Заказ ${fff.userId} от пользователя ${children.name} в ресторане ${restaurant.name} ожидание.`);
}
function GroupMember(name) {
  this.name = name;
 }
 
 const member1 = new GroupMember("Ярослав");
 const member2 = new GroupMember("Валера");
 const member3 = new GroupMember("Женя");
 
 console.log(`Члены группы: ${member1.name}, ${member2.name}, ${member3.name}`);
 function Student(name, group, courses) {
  this.name = name;
  this.group = group;
  this.courses = courses;
 
  this.sayHi = function() {
   console.log(`Меня зовут ${this.name}, я учусь в группе ${this.group}.`);
  };
 
  this.showCourses = function() {
   console.log(`Я учусь на следующих курсах: ${this.courses.join(', ')}`);
  };
 }
 
 const vasya = new Student("Ярослав", "ИСП-309", ["WEB"]);
 
 vasya.sayHi(); 
 vasya.showCourses();