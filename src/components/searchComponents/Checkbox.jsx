import React from "react";

const App = () => {
  //state
  const [checked, setChecked] = React.useState(false);

  //handler
  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div>
      <Checkbox label="My Value" value={checked} onChange={handleChange} />

      <p>Is &quot;My Value&quot; checked? {checked.toString()}</p>
    </div>
  );
};

export const Checkbox = ({ label, value, onChange }) => {
  return (
    <label>
      <input type="checkbox" checked={value} onChange={onChange} />
      {label}
    </label>
  );
};
