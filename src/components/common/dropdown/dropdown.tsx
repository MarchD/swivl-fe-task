import { memo, useCallback, useEffect, useRef } from 'react';
import { useToggle } from 'src/hooks/useToggle';
import { DownIcon } from 'src/assets';
import { DropDownProps } from 'src/models/props/dropdown';
import {
  DropDownContainer,
  DropDownField,
  DropDownList,
  DropDownListContainer,
  DropDownItem
} from './dropdown-styled';


function DropDown({value, options, onChange}: DropDownProps<number>) {
  const [ isOpen, toggleOpen, setOpen ] = useToggle(false);
  const field = useRef<HTMLDivElement>(null);

  const handleClick = useCallback((event: any) => {
    if (event.target !== field.current) {
      setOpen(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  const onOptionClicked = useCallback((value: number) => () => {
    onChange(value);
    toggleOpen();
  }, []);

  return (
    <DropDownContainer>
      <DropDownField onClick={toggleOpen} ref={field}>
        {value} {!isOpen && <DownIcon width={20} height={20}/>}
      </DropDownField>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {options.map(option => (
              <DropDownItem onClick={onOptionClicked(option)} key={option}>
                {option}
              </DropDownItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
}

export default memo(DropDown);
