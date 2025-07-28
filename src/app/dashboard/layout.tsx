import Link from "next/link"
import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/authOptions"
export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/')
  }

  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-900 text-white p-4 flex flex-col">
        <h1 className="text-xl font-bold mb-4">Admin Dashboard</h1>
        <nav className="flex flex-col gap-2">
          <Link href="/dashboard/jobs" className="hover:bg-gray-700 p-2 rounded">Jobs</Link>
          <Link href="/dashboard/training" className="hover:bg-gray-700 p-2 rounded">Ausbildung</Link>
          <Link href="/dashboard/patches" className="hover:bg-gray-700 p-2 rounded">Patches</Link>
          <Link href="/dashboard/contacts" className="hover:bg-gray-700 p-2 rounded">Contacts</Link>
           <Link href="/dashboard/applicant" className="hover:bg-gray-700 p-2 rounded">Applicants</Link>

        </nav>
      </aside>
      <main className="flex-1 p-8 overflow-auto">{children}</main>
    </div>
  )
}
