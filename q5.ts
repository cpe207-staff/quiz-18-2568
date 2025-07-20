/* define interface for Yakusa objects */
interface Yakusa {
  id: number;
  power: number;
}

/* assign interface/type to the function definition properly */
const q5 = (yakusas, fights) => {
  /* Your code here */
};

//Test case
const yakusas = [
  { id: 1, power: 5 },
  { id: 2, power: 30 },
  { id: 3, power: 60 },
  { id: 4, power: 42 },
  { id: 5, power: 70 },
];
const fights = [5, 2, 4, 3, 1, 3];
console.log(q5(yakusas, fights));

export default q5;
