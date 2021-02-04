import "./Select.scss";
export function Select({ modes, onChange, selectValue }) {
  const modeNames = Object.keys(modes);
  return (
    <div className='select'>
      <select onChange={onChange} value={selectValue}>
        <option value={"Pick up mode"}>Pick up mode</option>
        {modeNames.map((mode, index) => (
          <option key={index} value={mode}>
            {mode}
          </option>
        ))}
      </select>
    </div>
  );
}
