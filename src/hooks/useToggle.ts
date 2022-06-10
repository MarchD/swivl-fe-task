import { useState } from 'react';

export const useToggle = (initialState: boolean): [ boolean, () => void, (value: boolean) => void ] => {
  const [ value, setValue ] = useState(initialState);

  const toggle = () => {
    setValue(current => !current);
  };

  const changeValue = (newValue: boolean) => {
    setValue(newValue);
  };

  return [
    value,
    toggle,
    changeValue
  ];
};
