import React from 'react';

interface OptionInterface {
  value: string;
  label: string;
}

interface SelectionComponentProps {
  optionList?: (OptionInterface | undefined)[];
  selectValue?: string;
  setSelectValue: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  setField: (field: string, value: string) => void;
  name?: string
}
const SelectionComponent = ({ optionList, selectValue, setSelectValue, name }: SelectionComponentProps) => {
  return (
    <div
      className={`w-full border text-[13px] truncate text-[#1c1c1c] dark:text-[#f9f9f9] rounded-sm py-2 px-3 placeholder:text-[#1c1c1c] dark:placeholder:text-[#464646] outline-[#3a3a3a] focus:outline-blue-600 focus:placeholder:text-transparent dark:focus:outline-blue-600`}
    >
      <select className='w-full' name={name} value={selectValue} onChange={setSelectValue}>
        {optionList?.map((option, index) =>
          option ? (
            <option className='w-full' key={index} value={option.value}>
              {option.label}
            </option>
          ) : null
        )}
      </select>
    </div>
  );
};

export default SelectionComponent;
