import React from "react";
import { ProfileFormsWrapper } from "../ProfileFormsWrapper.tsx";

export const AdditionalInfoForm = () => {
  return (
    <ProfileFormsWrapper title="Additional Info">
      <fieldset style={{ padding: "24px" }}>
        <legend>Programming Languages:</legend>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4px",
          }}
        >
          <div>
            <input type="checkbox" id="ruby" name="ruby" />
            <label style={{ marginLeft: "12px" }} htmlFor="ruby">
              Ruby
            </label>
          </div>
          <div>
            <input type="checkbox" id="python" name="python" />
            <label style={{ marginLeft: "12px" }} htmlFor="python">
              Python
            </label>
          </div>
          <div>
            <input type="checkbox" id="php" name="php" />
            <label style={{ marginLeft: "12px" }} htmlFor="php">
              PHP
            </label>
          </div>
          <div>
            <input type="checkbox" id="javascript" name="javascript" />
            <label style={{ marginLeft: "12px" }} htmlFor="javascript">
              JavaScript
            </label>
          </div>
          <div>
            <input type="checkbox" id="c" name="c" />
            <label style={{ marginLeft: "12px" }} htmlFor="c">
              C
            </label>
          </div>
          <div>
            <input type="checkbox" id="c++" name="c++" />
            <label style={{ marginLeft: "12px" }} htmlFor="c++">
              C++
            </label>
          </div>
          <div>
            <input type="checkbox" id="rust" name="rust" />
            <label style={{ marginLeft: "12px" }} htmlFor="rust">
              Rust
            </label>
          </div>
          <div>
            <input type="checkbox" id="go" name="go" />
            <label style={{ marginLeft: "12px" }} htmlFor="go">
              Go
            </label>
          </div>
        </div>
      </fieldset>
    </ProfileFormsWrapper>
  );
};
