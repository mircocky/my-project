import Link from "next/link"
import { prisma } from "@/prisma"

export default async function Home() {

  // await prisma.user.create({
  //   data: {
  //     name: 'Elssdfa Prisma',
  //     email: '7@prisma.io',
  //   },
  // })


  return (
    <main>
    <h1>Main</h1>
    <Link
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          href="/clients"
        >
          go to clients
    </Link>
    </main>
  )
}
