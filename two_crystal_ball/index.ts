export default function ball_problem(floors: boolean[]): number {
   const jump = Math.floor(Math.sqrt(floors.length));
   let i = jump;

   for (; i < floors.length; i+=jump) {
       if (floors[i]) {
           break;
       }
   }

   i -= jump;

   for (let j = 0; j <= jump && i < floors.length; j++, i++) {
       if (floors[i]) {
           return i;
       }
   }

   return -1;
}

const floors = [false, false, false, false, false, false, false, true, true, true];
console.log(ball_problem(floors));

