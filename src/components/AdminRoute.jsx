import { Navigate, Outlet } from 'react-router-dom';
import { isAdminAuthenticated } from '../lib/admin';

export default function AdminRoute() {
  return isAdminAuthenticated() ? <Outlet /> : <Navigate to="/admin/login" replace />;
}
