import { Link } from 'react-router';
import { useParams } from 'react-router-dom';

const CompanyDetail = () => {
  const params = useParams<{ id: string }>();
  console.log('ids: ', params.id)
  return (
    <div className='w-full min-h-screen pt-24 flex flex-col items-center justify-start'>
      <h2 className='text-3xl font-bold py-3'>Company List {params.id}</h2>
      <div className='w-[80%] flex flex-col items-start gap-2 py-3'>
      <h2 className='text-2xl font-bold'>Company Name : {params.id}</h2>
      <h2 className='text-2xl font-bold'>Number of User : {params.id}</h2>
      </div>
      <div className='w-[80%] h-[60vh] m-auto overflow-y-auto overflow-hidden'>
        <table cellPadding={2} cellSpacing={2} className='w-full py-2 px-2 table-fixed'>
          <thead className='md:w-full py-2 text-slate-100'>
            <th className='sticky top-0 bg-blue-500 w-1/12 truncate py-2 border border-blue-500'>#Id</th>
            <th className='sticky top-0 bg-blue-500 w-1/4 truncate py-2 border border-blue-500'>First Name</th>
            <th className='sticky top-0 bg-blue-500 w-1/4 truncate py-2 border border-blue-500'>Last Name</th>
            <th className='sticky top-0 bg-blue-500 w-1/3 truncate py-2 border border-blue-500'>Email</th>
            <th className='sticky top-0 bg-blue-500 w-1/5 truncate py-2 border border-blue-500'>Company</th>
            <th className='sticky top-0 bg-blue-500 w-1/5 truncate py-2 border border-blue-500'>Action</th>
          </thead>
          <tbody className='md:w-full bg-slate-100 text-slate-800'>
            <tr className='w-full text-center'>
              <td className='py-2 border border-blue-500'>1</td>
              <td className='py-2 border border-blue-500'>Dang</td>
              <td className='py-2 border border-blue-500'>Trieu</td>
              <td className='py-2 border border-blue-500'>dangbinhtrieu123@gmail.com</td>
              <td className='py-2 border border-blue-500'>FPT Software</td>
              <td className='py-2 border border-blue-500 flex items-center justify-center gap-3'>
                <Link className='bg-green-500 text-xs text-slate-100 font-bold px-2 py-1 rounded-md' to={'/'}>
                  View
                </Link>
                <Link className='bg-purple-600 text-xs text-slate-100 font-bold px-2 py-1 rounded-md' to={'/'}>
                  Edit
                </Link>
                <Link className='bg-red-500 text-xs text-slate-100 font-bold px-2 py-1 rounded-md' to={'/'}>
                  Del
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompanyDetail;
