import React, { Suspense } from "react";
import "./assets/tailwind.css";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";


const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const User = React.lazy(() => import("./pages/User"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const MainLayout = React.lazy(() => import("./Layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./Layouts/AuthLayout"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));
const Loading = React.lazy(() => import("./components/Loading"));
const GuestLayout = React.lazy(() => import("./Layouts/GuestLayout"));
const Guest = React.lazy(() => import("./pages/Guest"));


function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/error/:code" element={<ErrorPage />} />
        <Route path="/*" element={<NotFound />} />

        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/user" element={<User />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        <Route element={<GuestLayout />}>
          <Route path="/guest" element={<Guest />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
