import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      {/* Navbar */}
      <div className="fixed pl-3 w-full bg-blue-900 shadow-xl rounded-xl shadow-blue-950 py-4 z-50">
        <span className="text-xl sm:text-2xl inline-flex gap-1 text-white">
          Developed By <p className="font-bold underline text-yellow-300">Hammad</p>
        </span>
      </div>
      <Outlet />
    </>
  )
}
