import React from "react";

function Furniture() {
  return (
    <>
      <div>
        <tr>
          <th>
            <label>Height</label>
          </th>
          <td>
            <input
              type="text"
              placeholder="Please provide the height in CM"
              id="height"
            ></input>
          </td>
        </tr>
      </div>
      <div>
        <input
          type="text"
          placeholder="Please provide the width in CM"
          id="width"
        ></input>
      </div>
      <div>
        <input
          type="text"
          placeholder="Please provide the length in CM"
          id="length"
        ></input>

        <p>Please provide dimensions in HxWxL format</p>
      </div>
    </>
  );
}

export default Furniture;
