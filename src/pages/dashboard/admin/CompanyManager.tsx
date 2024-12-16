import { Link } from 'react-router';
import ModalCommon from '../../../components/atoms/Modal';
import AddCompany from '../../../components/AddCompany';
import { useState } from 'react';
import UpdateCompany from '../../../components/UpdateCompnay';

const CompanyManager = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [openUpdModal, setOpenUpdModal] = useState<boolean>(false);
  const [selectedCompanyId, setSelectedCompanyId] = useState<number | null>(null);

  const handleOpenModal = () => {
    setOpen(!open);
  };

  const handleOpenUpdModal = (companyId: number) => {
    setOpenUpdModal(!openUpdModal);
    setSelectedCompanyId(companyId);
  };

  return (
    <div className='relative w-full min-h-screen pt-24 flex flex-col items-center justify-start'>
      <h2 className='text-3xl font-bold py-3'>Company Manager</h2>
      <Link
        onClick={handleOpenModal}
        className='bg-green-500 text-xs text-start text-slate-100 font-bold px-2 py-1 rounded-md'
        to={``}
      >
        Add company
      </Link>
      <div className='w-[80%] h-[70vh] m-auto overflow-y-auto overflow-hidden'>
        <table cellPadding={2} cellSpacing={2} className='w-full py-2 px-2 table-fixed'>
          <thead className='md:w-full py-2 text-slate-100'>
            <th className='sticky top-0 bg-blue-500 w-1/6 truncate py-2 border border-blue-500'>#Id</th>
            <th className='sticky top-0 bg-blue-500 w-1/3 truncate py-2 border border-blue-500'>Company Name</th>
            <th className='sticky top-0 bg-blue-500 w-1/5 truncate py-2 border border-blue-500'>Number of User</th>
            <th className='sticky top-0 bg-blue-500 w-1/4 truncate py-2 border border-blue-500'>Action</th>
          </thead>
          <tbody className='md:w-full bg-slate-100 text-slate-800'>
            {Array.from({ length: 10 }, (_, index) => (
              <tr key={index} className='w-full text-center'>
                <td className='py-2 border border-blue-500'>1</td>
                <td className='py-2 border border-blue-500'>FPT Software</td>
                <td className='py-2 border border-blue-500'>5</td>
                <td className='py-2 border border-blue-500 flex items-center justify-center gap-3'>
                  <button
                    onClick={() => handleOpenUpdModal(index + 1)}
                    className='bg-purple-600 text-xs text-slate-100 font-bold px-2 py-1 rounded-md'
                  >
                    Edit
                  </button>
                  <button className='bg-red-500 text-xs text-slate-100 font-bold px-2 py-1 rounded-md'>Del</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {open && (
        <ModalCommon isOpen={open} setIsOpen={setOpen}>
          <AddCompany />
        </ModalCommon>
      )}
      {openUpdModal && (
        <ModalCommon isOpen={openUpdModal} setIsOpen={setOpenUpdModal}>
          <UpdateCompany selectedCompanyId={selectedCompanyId} />
        </ModalCommon>
      )}
    </div>
  );
};

export default CompanyManager;
