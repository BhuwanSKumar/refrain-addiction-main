import { AiOutlineAppstore } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { sbIcon } from '../assets';
import { RiLogoutBoxLine } from 'react-icons/ri';

function Sideadmin() {
  return (
    <div className='w-56 h-screen border-x-2 fixed bg-white'>
        <div className="flex items-center gap-2.5 font-medium border-b py-3 border-slate-300  mx-3">
          <img src={sbIcon} width={45} alt="" />
          <span className="text-xl whitespace-pre">ReClaimYou</span>
        </div>

        <div className="flex flex-col  h-full">
          <ul className="whitespace-pre px-2.5 text-[1.0rem] py-4 flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[68%] h-[70%]">
            <li className="hover:text-blue-600 hover:font-medium">
              <NavLink to={'/admindashboard'} className="link">
                <AiOutlineAppstore size={23} className="min-w-max" />
                Dashboard
              </NavLink>
            </li>
            <li className="hover:text-blue-600 hover:font-medium">
              <NavLink to={'/userdata'} className="link">
                <BsPerson size={23} className="min-w-max" />
                Users Data
              </NavLink>
            </li>
            

            <li className="hover:text-blue-600 hover:font-medium">
              <div className="border-y py-4 border-slate-300 ">
                <NavLink to={'/'} className="link">
                <RiLogoutBoxLine size={23} className="min-w-max" />
                Logout
              </NavLink>
              </div>
            </li>
          </ul>
        </div>




    </div>
  )
}

export default Sideadmin