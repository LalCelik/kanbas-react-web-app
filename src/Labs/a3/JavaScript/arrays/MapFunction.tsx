function MapFunction() {
let numberArray1 = [1, 2, 3, 4, 5, 6];
const square = (a: number) => a * a;

const squares = numberArray1.map(square);
const cubes = numberArray1.map(a => a * a * a);
return (
    <>
     <h3>Map</h3>
     squares = {squares}<br />
     cubes = {cubes}<br />
    </>
   )
}
export default MapFunction