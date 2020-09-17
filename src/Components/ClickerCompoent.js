import React, { useState } from "react";

function ClickerComponent() {
  const [count, increment] = useState(0);
  const [dataObject, updateObject] = useState({ count: 1, name: "Ashok" });
  return (
    <div>
      <button onClick={() => increment(count + 1)}>
        click count is:{count}
      </button>
      <button onClick={() => updateObject({ count: 0, name: "dsfdsfd" })}>
        {dataObject.count} {dataObject.name}
      </button>
    </div>
  );
}
export default ClickerComponent;
