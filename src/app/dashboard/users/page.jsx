'use client'

import Button from "@/components/button";
import User from "@/components/pages/dashboard/users/user";
import { getAllUsers } from "@/services/dashboard/users";
import { UserAdd } from "iconsax-reactjs";
import Link from "next/link";
import { useEffect, useState } from "react";

const UsersPage = () => {

  const [users , setUsers] = useState([])

  const getUsers = async ()=>{
    const userList = await getAllUsers()
    setUsers(userList)
  }

  useEffect(()=>{
    getUsers()
  },[])

  return (
    <>
      <h2 className="w-full text-center sm:hidden mx-auto font-[600] text-[24px] text-[#2E353A] mt-[20px] mb-[42px]">
        User
      </h2>
      <div className="flex flex-col gap-[72px] sm:gap-[48px] bg-[#F5F6FA]">
        <Link
          href="/dashboard/users/add"
          className="sm:mt-[32px] w-full px-[16px] order-1 sm:order-0"
        >
          <Button
            icon={<UserAdd size={24} color="white" />}
            className="w-full max-w-[486px] mx-auto h-[48px] sm:h-[54px]"
            color="green"
            leftIcon
          >
            Add New User
          </Button>
        </Link>

        <div className="w-screen flex flex-col">
          {users.map((u, i) => (
            <User key={u.id} bgWhite={i % 2 === 0} {...u} />
          ))}
        </div>
      </div>
    </>
  );
};

export default UsersPage;