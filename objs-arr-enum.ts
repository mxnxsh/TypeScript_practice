// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // tuple
// } = {
//   name: 'Manish',
//   age: 22,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author'],
// };
enum Role {
  ADMIN = 'ADMIN',
  AUTHOR = 'AUTHOR',
  READ_ONLY = 100,
}
const person = {
  name: 'Manish',
  age: 22,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN,
};
if (person.role === Role.ADMIN) {
  console.log('Is Admin');
}
// person.role.push('admin');
// console.log(person.role);
// person.role = [0,'admin','user']

console.log(person.name);
for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // hobby.map() sjow error
}
