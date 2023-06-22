import { Props } from './Select.types';
import { useEffect, useState } from 'react';
import useClickOutside from '../../../utils/useClickOutside';
import { styled } from 'styled-components';
import { ReactComponent as TriangleIcon } from '../../../assets/icons/trinagleIcon.svg';

export const SelectRoot = styled.div`
  border: 1px solid black;
  min-width: 7.3rem;
  min-height: 1rem;
  width: fit-content;
  box-shadow: 0px 2px 5px 0px rgba(51, 51, 51, 1);
  background-color: white;
  position: relative;
  cursor: pointer;
`;

export const Selected = styled.div`
  padding: 0.5rem;
  box-shadow: 0px 2px 5px 2px rgba(120, 120, 120, 1);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DropDown = styled.div<{ $isOpen: boolean }>`
  height: ${({ $isOpen }) => ($isOpen ? 'fit-content' : '0')};
  overflow: hidden;
  box-shadow: 0px 2px 5px 0px rgba(51, 51, 51, 1);
  background-color: white;
  position: absolute;
  width: 100%;
`;

export const DropdownArrow = styled(TriangleIcon)`
  width: 1rem;
  height: 1rem;
`;

export const Select = ({ children, value }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [value]);

  const ref = useClickOutside<HTMLDivElement>(() => {
    setIsOpen(false);
  });

  return (
    <SelectRoot ref={ref}>
      <Selected onClick={handleClick}>
        {value}
        <DropdownArrow />
      </Selected>
      <DropDown $isOpen={isOpen}>{children}</DropDown>
    </SelectRoot>
  );
};
