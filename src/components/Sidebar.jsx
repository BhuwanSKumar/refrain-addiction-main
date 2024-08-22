import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { IoIosArrowBack } from 'react-icons/io';
import { AiOutlineAppstore } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { useMediaQuery } from 'react-responsive';
import { MdMenu } from 'react-icons/md';
import { NavLink, useLocation } from 'react-router-dom';
import { MdOutlineAssessment, MdChat, MdVideoCall } from 'react-icons/md';
import { BsGraphUpArrow } from 'react-icons/bs';
import { sbIcon } from '../assets';
import SubMenu from './SubMenu';
import { SiHandshake } from 'react-icons/si';
import { RiLogoutBoxLine } from 'react-icons/ri';

const Sidebar = ({ email }) => {
  let isTabletMid = useMediaQuery({ query: '(max-width: 768px)' });
  const [open, setOpen] = useState(isTabletMid ? false : true);
  const sidebarRef = useRef();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

  useEffect(() => {
    isTabletMid && setOpen(false);
  }, [pathname]);

  const Nav_animation = isTabletMid
    ? {
        open: {
          x: 0,
          width: '16rem',
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: '16rem',
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: '4rem',
          transition: {
            damping: 40,
          },
        },
      };

  const subMenusList = [
    {
      name: 'Appointment',
      icon: SiHandshake,
      menus: ['Book an Appointment', 'Your Appointments'],
      path: ['new', 'past'],
    },
  ];

  return (
    <div>
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${
          open ? 'block' : 'hidden'
        } `}
      ></div>
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? 'open' : 'closed'}
        className=" bg-white text-gray shadow-xl z-[999] max-w-[16rem]  w-[16rem] 
            overflow-hidden md:relative fixed
         h-screen "
      >
        <div className="flex items-center gap-2.5 font-medium border-b py-3 border-slate-300  mx-3">
          <img src={sbIcon} width={45} alt="" />
          <span className="text-xl whitespace-pre">ReClaimYou</span>
        </div>

        <div className="flex flex-col  h-full">
          <ul className="whitespace-pre px-2.5 text-[1.0rem] py-4 flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[68%] h-[70%]">
            <li className="hover:text-blue-600 hover:font-medium">
              <NavLink to={'/home'} className="link">
                <AiOutlineAppstore size={23} className="min-w-max" />
                Dashboard
              </NavLink>
            </li>
            <li className="hover:text-blue-600 hover:font-medium">
              <NavLink to={'/profile'} className="link">
                <BsPerson size={23} className="min-w-max" />
                Profile
              </NavLink>
            </li>
            <li className="hover:text-blue-600 hover:font-medium">
              <NavLink to={'/assessment'} className="link">
                <MdOutlineAssessment size={23} className="min-w-max" />
                Assessment
              </NavLink>
            </li>
            <li className="hover:text-blue-600 hover:font-medium">
              <NavLink to={'/chat'} className="link">
                <MdChat size={23} className="min-w-max" />
                Chat with Me
              </NavLink>
            </li>

           

            <li className="hover:text-blue-600 hover:font-medium ">
              <NavLink to={"/track"} className="link">
                <BsGraphUpArrow size={23} className="min-w-max" />
                Analytics
              </NavLink>
            </li >
            {(open || isTabletMid) && (
              <div className="border-y py-4 border-slate-300 ">
                <small className="pl-3 text-slate-500 inline-block mb-2">
                  Connect With Us
                </small>
                {subMenusList?.map((menu) => (
                  <div key={menu.name} className="flex flex-col gap-1">
                    <SubMenu data={menu} />
                  </div>
                ))}
              </div>
            )}

              <li className="hover:text-blue-600 hover:font-medium">
              <NavLink to={'/meet'} className="link">
                <MdVideoCall size={23} className="min-w-max" />
                Meet now
              </NavLink>
            </li>
            <li className="hover:text-blue-600 hover:font-medium border-y py-4 border-slate-300">
              <NavLink to={'/'} className="link">
                <RiLogoutBoxLine size={23} className="min-w-max" />
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
        <motion.div
          onClick={() => {
            setOpen(!open);
          }}
          animate={
            open
              ? {
                  x: 0,
                  y: 0,
                  rotate: 0,
                }
              : {
                  x: -10,
                  y: -200,
                  rotate: 180,
                }
          }
          transition={{ duration: 0 }}
          className="absolute w-fit h-fit md:block z-50 hidden right-2 bottom-12 cursor-pointer"
        >
          <IoIosArrowBack size={25} />
        </motion.div>
      </motion.div>
      <div className="m-3 md:hidden  " onClick={() => setOpen(true)}>
        <MdMenu size={25} />
      </div>
    </div>
  );
};

export default Sidebar;
