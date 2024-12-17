import { BaseSyntheticEvent } from 'react';
import useCombinedState from '../../hooks/useCombinedState';
import CommonInput from '../atoms/Input';
import { handleBlurChecking } from '../../utils/helper';

interface UpdateCompanyProps {
  selectedCompanyId: number | null;
}

const UpdateCompany = ({ selectedCompanyId }: UpdateCompanyProps) => {
  const [state, setField] = useCombinedState({
    company: '',
    id: '',
    companyError: '',
    idError: ''
  });

  const submitHandler = (e: BaseSyntheticEvent<Event, EventTarget & HTMLFormElement>) => {
    e.preventDefault();
    const formValues = Object.fromEntries(new FormData(e.target));
    console.log('Form values: ', formValues);
  };
  return (
    <div className='w-1/3 flex flex-col justify-start items-center bg-slate-100 rounded-md shadow-md shadow-slate-600 py-2 px-3'>
      <div className='w-full py-3'>
        <h2 className='text-2xl text-center font-bold text-slate-800'>Update Company {selectedCompanyId}</h2>
      </div>
      <form className='w-full' onSubmit={submitHandler}>
        <CommonInput
          onblur={() => handleBlurChecking('idError', state.id, setField)}
          inputValue={state.id}
          typeInput='text'
          setField={setField}
          field='id'
          error={state.idError}
          hidden={false}
          nameSelect='id'
          nameInput={'id'}
          label_title='Id'
          placeholder='Please, enter id'
        />
        <CommonInput
          onblur={() => handleBlurChecking('companyError', state.company, setField)}
          inputValue={state.company}
          typeInput='text'
          setField={setField}
          field='company'
          error={state.companyError}
          hidden={false}
          nameSelect='company'
          nameInput={'company'}
          label_title='Company'
          placeholder='Please, enter company'
        />
        <button
          className='w-full py-2 my-2 bg-blue-700 border border-transparent text-slate-50 text-xl font-bold rounded-md shadow-md shadow-slate-600 hover:border-blue-700 hover:bg-blue-600 active:shadow-slate-800'
          type='submit'
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateCompany;
