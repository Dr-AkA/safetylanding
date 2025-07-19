"use client"
import { signOut } from "next-auth/react"

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: '/schimal' })}
      className="hover:bg-gray-700 p-2 rounded text-left w-full"
    >
      Logout
    </button>
  )
}