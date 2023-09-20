import React, { createRef, useState } from 'react';
import Image from 'next/image';
import {
  ChevronDownIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  BellIcon,
  ChatBubbleLeftEllipsisIcon,
  GlobeAltIcon,
  PlusIcon,
  SparklesIcon,
  MegaphoneIcon,
  VideoCameraIcon,
  Bars3Icon,
  UserCircleIcon,
  XMarkIcon,
  TrophyIcon,
  PresentationChartBarIcon,
  PlayCircleIcon,
  CurrencyPoundIcon,
  TvIcon,
  EllipsisHorizontalIcon,
} from '@heroicons/react/24/outline';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Router, useRouter } from 'next/router';
import Link from 'next/link';
import { usePopper } from 'react-popper';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

function Header() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [open, setOpen] = React.useState(false);
  const [homeOpen, setHomeOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleHomeOpen = () => {
    setHomeOpen(!homeOpen);
  };

  return (
    <div
      className="flex p-2  bg-white shadow-md sticky top-0 z-50
    items-center md:space-x-3 space-x-3 "
    >
      {/* Logo */}
      <div
        className="relative h-[43.2px] w-[76.8px] flex-shrink-0 cursor-pointer
   xl:mr-2 mr-1 "
      >
        <Link href="/">
          <Image
            alt="Logo"
            width={384}
            height={216}
            src="https://logos-world.net/imageup/Reddit/Reddit-Logo-PNG5.png"
          />
        </Link>
      </div>
      {/* Home */}
      <div className="flex items-center space-x-1 lg:px-3 cursor-pointer">
        <div className="relative flex  text-left">
          <button
            onClick={handleHomeOpen}
            className="flex w-full justify-center "
            aria-label="Home Button"
            tabIndex={0}
          >
            {!homeOpen ? (
              <div className="flex md:space-x-1 md:pt-1 ">
                <HomeIcon className="h-5 w-5 " />
                <p className="flex-1 ml-2 hidden md:inline ">Home</p>
                <ChevronDownIcon className="h-4 w-4 pt-1 " />
              </div>
            ) : (
              <XMarkIcon className="h-6 w-6 lg:w-7 lg:h-7 mx-2 cursor-pointer" />
            )}
          </button>
        </div>
        {homeOpen ? (
          <Transition
            as={Fragment}
            show={true}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <div
              className="absolute left-15 top-8 z-10 mt-5 mr-5 w-56 origin-top-left rounded-md bg-white 
          shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none "
            >
              <ul className="space-y-3 p-5 text-gray-500  ">
                <li className="menuDrop">
                  <TrophyIcon className="icon" />
                  <p>Gaming</p>{' '}
                </li>
                <li className="menuDrop">
                  <PlayCircleIcon className="icon" />
                  <p>Sports</p>
                </li>
                <li className="menuDrop">
                  <PresentationChartBarIcon className="icon" />
                  <p>Business</p>
                </li>
                <li className="menuDrop">
                  <CurrencyPoundIcon className="icon" />
                  <p>Crypto</p>
                </li>
                <li className="menuDrop">
                  <TvIcon className="icon" />
                  <p>Television</p>
                </li>
                <li className="menuDrop">
                  <EllipsisHorizontalIcon className="icon" />
                  <p>More Topics</p>
                </li>
              </ul>
            </div>
          </Transition>
        ) : (
          <div></div>
        )}
      </div>

      {/* Search box */}
      <div className="flex sm:hidden w-[170px]"></div>
      <form
        className="hidden sm:inline-flex flex-1 items-center border border-gray-200 rounded-lg lg:min-w-[400px]
        bg-gray-100 px-3 py-1  "
        action=""
      >
        <MagnifyingGlassIcon className="h-5 w-5 " />
        <input
          className="pl-5 flex-1 bg-transparent outline-none "
          placeholder="Search Reddit"
          type="text"
        />
        <button
          hidden
          type="submit"
          aria-label="Submit Button"
          tabIndex={0}
        />
      </form>

      {/* Icons Right */}
      <div
        className=" text-gray-500 items-center text-right mx-3 space-x-3 
      hidden lg:inline-flex"
      >
        <SparklesIcon className="icon " />
        <GlobeAltIcon className=" icon " />
        <VideoCameraIcon className=" icon " />
        <hr className="h-10 border border-gray-200" />
        <BellIcon className=" icon  " />
        <ChatBubbleLeftEllipsisIcon className=" icon " />
        <PlusIcon className=" icon  " />
        <MegaphoneIcon className=" icon  " />
      </div>
      <div className="flex items-center lg:hidden ml-5 ">
        <div className="relative inline-block text-left">
          <button
            onClick={handleOpen}
            className="inline-flex w-full justify-center pt-2 "
            aria-label="Menu Button"
            tabIndex={0}
          >
            {!open ? (
              <Bars3Icon className="h-6 w-6 lg:w-7 lg:h-7 cursor-pointer " />
            ) : (
              <XMarkIcon className="h-6 w-6 lg:w-7 lg:h-7 cursor-pointer" />
            )}
          </button>
        </div>

        {open ? (
          <Transition
            as={Fragment}
            show={true}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <div
              className="absolute right-12 top-8 z-10 mt-5 mr-5 w-56 origin-top-right rounded-md bg-white 
          shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none "
            >
              <ul className="space-y-3 p-5 text-gray-500  ">
                <li className="menuDrop">
                  <SparklesIcon className="icon " />
                  <p>Popular</p>
                </li>
                <li className="menuDrop">
                  <GlobeAltIcon className=" icon " />
                  <p>Happening Now</p>
                </li>
                <li className="menuDrop">
                  <VideoCameraIcon className=" icon " />
                  <p>Videos</p>
                </li>
                <li className="space-y-3">
                  <hr className=" border border-gray-200 pb-[-2] " />
                  <div className="menuDrop">
                    <BellIcon className=" icon  " />
                    <p>Notifications</p>
                  </div>
                </li>
                <li className="menuDrop">
                  <ChatBubbleLeftEllipsisIcon className=" icon " />
                  <p>Chat</p>
                </li>
                <li className="menuDrop">
                  <PlusIcon className=" icon  " />
                  <p>Create Post</p>
                </li>
                <li className="menuDrop">
                  <MegaphoneIcon className=" icon  " />
                  <p>Advertise</p>
                </li>
              </ul>
            </div>
          </Transition>
        ) : (
          <div></div>
        )}
      </div>

      {/* Sign in / sign out */}
      {session ? (
        <div
          onClick={() => signOut()}
          className="flex items-center space-x-3 border  border-gray-100 rounded-full
       p-2 bg-gray-100 cursor-pointer "
        >
          <div className="relative h-6 w-6 flex-shrink-0 ">
            <Image
              alt=""
              fill
              sizes="(max-width: 768px) 100vw"
              src="https://links.papareact.com/23l"
            />
          </div>
          <div className="">
            <div className="hidden lg:inline  ">
              <p
                className="text-gray-500 text-[0.8rem] line-clamp-1
              "
              >
                Hello{' '}
                <span className="text-blue-500">{session?.user?.name}</span>
              </p>
            </div>

            <ChevronDownIcon className=" h-3 w-3 lg:hidden" />
          </div>
        </div>
      ) : (
        <div
          onClick={() => signIn()}
          role="button"
          aria-label="Sign in Button"
          tabIndex={0}
          className="flex items-center space-x-2  rounded-full
       p-2 cursor-pointer "
        >
          <div className="relative h-6 w-6 shrink-0">
            <Image
              alt="Logo user"
              fill
              src="https://links.papareact.com/23l"
            />
          </div>
          <div className="p-1.5 px-3 hidden sm:inline-flex text-xs md:text-sm w-full rounded-full bg-[#EB5629]">
            <p className=" text-white font-bold tracking-wide">Sign In</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;

// https://links.papareact.com/fqy
