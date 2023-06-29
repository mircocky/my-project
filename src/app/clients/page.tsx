import Link from "next/link"

import { prisma } from "@/prisma"

function getUsers() {
    return prisma.user.findMany()
  }

export default async function Clients() {

  const users = await getUsers()
  type users = {
    name:string,
    email:string
  }

  return (
    <main>

    <Link
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          href="/"
        >
          go to Main
    </Link>
    <Link
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          href="/clients/new"
        >
         create
    </Link>


<div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full text-left text-sm font-light">
          <thead className="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" className="px-6 py-4">id</th>
              <th scope="col" className="px-6 py-4">name</th>
              <th scope="col" className="px-6 py-4">email</th>
            </tr>
          </thead>
          <tbody>
          {users.map (user =>(
            <tr className="border-b dark:border-neutral-500">
              <td className="whitespace-nowrap px-6 py-4 font-medium">{user.id}</td>
              <td className="whitespace-nowrap px-6 py-4">{user.name}</td>
              <td className="whitespace-nowrap px-6 py-4">{user.email}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>


    </main>
  )
}
