import { useState, useEffect } from "react";
import "./Main.scss";

import { Select } from "../Select/Select";
import { History } from "../History/History";
import { Field } from "../Field/Field";

const MODES_API = "http://demo1030918.mockable.io/";
const DEFAULT_SELECT_VALUE = "Pick up mode";
export function Main() {
  const [gameModes, setGameModes] = useState({});
  const [selectValue, setSelectValue] = useState(DEFAULT_SELECT_VALUE);

  useEffect(() => {
    fetch(MODES_API)
      .then((response) => response.json())
      .then((modes) => {
        console.log(modes);
        setGameModes(modes);
      });
  }, []);

  function handleSelect({ target }) {
    setSelectValue(target.value);
  }
  return (
    <main>
      <Select modes={gameModes} selectValue={selectValue} onChange={handleSelect} />
      <Field />
      <History />
    </main>
  );
}
