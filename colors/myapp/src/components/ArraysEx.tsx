import { useState } from "react";
import { Pet } from "../models/Pet";

export function ArraysEx() {
  const [colors, setColors] = useState<string[]>(["red", "orange", "purple"]);
  const [pets, setPets] = useState<Pet[]>([
    { id: 0, name: "Jemmy", type: "dog" },
    { id: 1, name: "Ki-ki", type: "cat" },
    { id: 2, name: "Goldie", type: "fish" },
  ]);
  function addColor(color: string): void {
    setColors([...colors, color]);
  }
  return (
    <div>
      <ol>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ol>
      <button onClick={() => addColor("Violet")}>Violet</button>
      <table>
        <tr>
          <td>Name</td>
          <td>Type</td>
        </tr>
        {pets.map((pet) => (
          <tr key={pet.id}>
            <td>{pet.name}</td>
            <td>{pet.type}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
