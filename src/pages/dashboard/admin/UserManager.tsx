import { useState } from 'react';
import ModalCommon from '../../../components/atoms/Modal';
import Decentralization from '../../../components/Decentralization';

const UserManager = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  const handleOpenModal = (userId: number) => {
    setOpenModal(!openModal)
    setSelectedUserId(userId);
  };
  return (
    <div className='relative w-full min-h-screen pt-24 flex flex-col items-center justify-start'>
      <h2 className='text-3xl font-bold py-3'>User Manager</h2>
      <div className='w-[80%] h-[70vh] m-auto overflow-y-auto overflow-hidden'>
        <table cellPadding={2} cellSpacing={2} className='w-full py-2 px-2 table-fixed'>
          <thead className='md:w-full py-2 text-slate-100'>
            <th className='sticky top-0 bg-blue-500 w-1/6 truncate py-2 border border-blue-500'>#Id</th>
            <th className='sticky top-0 bg-blue-500 w-1/5 truncate py-2 border border-blue-500'>First Name</th>
            <th className='sticky top-0 bg-blue-500 w-1/5 truncate py-2 border border-blue-500'>Last Name</th>
            <th className='sticky top-0 bg-blue-500 w-1/3 truncate py-2 border border-blue-500'>Email</th>
            <th className='sticky top-0 bg-blue-500 w-1/5 truncate py-2 border border-blue-500'>Role</th>
            <th className='sticky top-0 bg-blue-500 w-1/4 truncate py-2 border border-blue-500'>Action</th>
          </thead>
          <tbody className='md:w-full bg-slate-100 text-slate-800'>
            {Array.from({ length: 10 }, (_, index) => (
              <tr key={index} className='w-full text-center truncate'>
                <td className='py-2 border border-blue-500 truncate px-2'>1</td>
                <td className='py-2 border border-blue-500 truncate px-2'>Dang</td>
                <td className='py-2 border border-blue-500 truncate px-2'>Trieu</td>
                <td className='py-2 border border-blue-500 truncate px-2'>dangbinhtrieu123@gmail.com</td>
                <td className='py-2 border border-blue-500 truncate px-2'>ROLE_USER</td>
                <td className='py-2 border border-blue-500 truncate px-2 flex items-center justify-center gap-3'>
                  <button
                    onClick={() => handleOpenModal(index + 1)}
                    className='bg-green-500 text-xs text-slate-100 font-bold px-2 py-1 rounded-md'
                  >
                    role
                  </button>
                  <button className='bg-red-500 text-xs text-slate-100 font-bold px-2 py-1 rounded-md'>Del</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ModalCommon isOpen={openModal} setIsOpen={setOpenModal}>
        <Decentralization selectedUserId={selectedUserId} />
      </ModalCommon>
    </div>
  );
};

export default UserManager;
