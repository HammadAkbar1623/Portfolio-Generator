import { createFileRoute } from '@tanstack/react-router'
import { ProtectedRoute } from '../../ProtectedRoute'
export const Route = createFileRoute('/_layout/home/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
       <ProtectedRoute>

       <h1>Home Page</h1>
    
    
    </ProtectedRoute>
    </>
  )
}
