import React from "react";
import { FaCirclePlus } from "react-icons/fa6";

export const AdditionalInfoForm = () => {
  return (
    <>
      <fieldset>
        <legend>Programming Languages:</legend>
        <div>
          <input type="checkbox" id="ruby" name="ruby" checked />
          <label for="ruby">Ruby</label>
        </div>
        <div>
          <input type="checkbox" id="python" name="python" />
          <label for="python">Python</label>
        </div>
        <div>
          <input type="checkbox" id="php" name="php" />
          <label for="php">PHP</label>
        </div>
        <div>
          <input type="checkbox" id="javascript" name="javascript" />
          <label for="javascript">JavaScript</label>
        </div>
        <div>
          <input type="checkbox" id="c" name="c" />
          <label for="c">C</label>
        </div>
        <div>
          <input type="checkbox" id="c++" name="c++" />
          <label for="c++">C++</label>
        </div>
        <div>
          <input type="checkbox" id="rust" name="rust" />
          <label for="rust">Rust</label>
        </div>
      </fieldset>
    </>
  );
};
