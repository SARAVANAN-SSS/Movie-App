import { useState } from "react";
import { ColorBox } from "./ColorBox";

export function AddColor() {
  const [color, setColor] = useState("red");
  const styles = { backgroundColor: color };
  const [colorList, setColorList] = useState(["pink", "yellow", "green"]);
  return (
    <div>
      <input value={color} onChange={(event) => setColor(event.target.value)} style={styles} placeholder="Pick the Color" name="value" />
      <button onClick={() => setColorList([...colorList, color])}>Add Color</button>
      {colorList.map((clr) => <ColorBox clr={clr} />)}
    </div>
  );
}
