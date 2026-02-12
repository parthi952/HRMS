import { createBrowserRouter } from "react-router-dom";

import MainLayout from "./Components/Layout/MainLayout";
import { Dashboard } from "./Features/Dashbord/Dashboard";
import { Attendance } from "./Features/Dashbord/Attendance";
import Leaves from "./Features/Dashbord/Leaves";
import { Department } from "./Features/Dashbord/Department";
import Payroll from "./Features/Dashbord/Payroll";
import { Employee } from "./Features/Dashbord/Employee";
import { EMPleaves } from "./Features/Dashbord/Leaves/EMPleaves";
import { LeaveRequest } from "./Features/Dashbord/Leaves/LeaveRequest";
import { UpHolidays } from "./Features/Dashbord/Leaves/UpHolidays";
import { LeaveBalance } from "./Features/Dashbord/Leaves/LeaveBalance";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "attendance",
        element: <Attendance />,
      },
      {
        path: "/leaves",
        element: <Leaves />,
      },
      {
        path: "/department",
        element: <Department />,
      },
      {
        path: "/payroll",
        element: <Payroll />,
      },
      {
        path: "/employee",
        element: <Employee />,
      },
      {
        path:"/employeeleave",
        element:<EMPleaves/>
      },

      {
        path:"/leaverequests",
        element:<LeaveRequest/>
      },
      {
        path:"/upcomingholidays",
        element:<UpHolidays/>
      },
      {
        path:"/leavebalance",
        element:<LeaveBalance/>
      }
    ],
  },
]);
