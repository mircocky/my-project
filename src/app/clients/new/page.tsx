import { prisma } from "@/prisma"
import { redirect } from "next/navigation"


async function createUser(data: FormData) {
    
  "use server"

  // const name = data.get("name")?.valueOf()
  // // const email = data.get("email")?.valueOf()
  // if (typeof name !== "string" || name.length === 0) {
  //   throw new Error("Invalid Title")
  // }
  
  // if (typeof email !== "string" || email.length === 0) {
  //   throw new Error("Invalid Title")
  // }

  // await prisma.user.create({ data: { name, eamil } })
  //  redirect("/clients")
}

export default async function Page() {

const result = await prisma.user.create({
    data: {
          name:"hahaha",
          email:"hohoho@hohooho.com"
    },
});

  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">New</h1>
      </header>
      <form action={createUser} className="flex gap-2 flex-col">
        <input
          type="text"
          name="name"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <input
          type="text"
          name="email"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <div className="flex gap-1 justify-end">
          <button
            type="submit"
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            Create
          </button>
        </div>
      </form>
    </>
  )
}