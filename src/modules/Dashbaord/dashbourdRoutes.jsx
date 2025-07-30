import ProtectedRoute from "../../router/ProtectedRoute";
import AdminRoute from "../../routes/AdminRoute";
import AddStories from "./AddStories/AddStories";
import AddPackage from "./Admin/AddPackage/AddPackage";
import AllBookings from "./Admin/Bookings/AllBookings";
import BookingDetails from "./Admin/Bookings/BookingDetails";
import ManageCandidate from "./Admin/ManageCandidate/ManageCandidate";
import ManageUsers from "./Admin/ManageUsers/ManageUsers";
import AllPayments from "./Admin/Payments/AllPayments";
import DashboardLayout from "./DashboardLayout";
import ManageProfile from "./ManageProfile/ManageProfile";
import ManageStories from "./ManageStories/ManageStories";
import AssignedTour from "./TourGuides/AssignedTour/AssignedTour";
import MyBookings from "./Tourist/Bookings/MyBookings";
import JoinTourGuide from "./Tourist/JoinTourGuide/JoinTourGuide";
import PaymentBooking from "./Tourist/PaymentBooking/PaymentBooking";
import TourGuideRoute from "../../routes/TourGuideRoute";
import AdminHome from "./Admin/AdminHome";

const dashbourdRoutes = {
  path: "/dashboard",
  element: (
    <ProtectedRoute>
      <DashboardLayout />
    </ProtectedRoute>
  ),
  children: [
    // tourist routes
    {
      index: true,
      element: <ManageProfile />,
    },
    {
      path: "my-bookings",
      element: <MyBookings />,
    },
    {
      path: "payment-booking/:bookingId",
      element: <PaymentBooking />,
    },

    {
      path: "tourist/join-tour-guide",
      element: <JoinTourGuide />,
    },
    // common routes
    {
      path: "manage-profile",
      element: <ManageProfile />,
    },

    {
      path: "manage-stories",

      element: <ManageStories />,
    },
    {
      path: "add-stories",
      element: <AddStories />,
    },
    // guide routes
    {
      path: "guide/my-assigned-tours",
      element: (
        <TourGuideRoute>
          <AssignedTour />
        </TourGuideRoute>
      ),
    },

    // admin routes
    {
      path: "admin/add-package",
      element: (
        <AdminRoute>
          <AddPackage />
        </AdminRoute>
      ),
    },
    {
      path: "admin/candidates",
      element: (
        <AdminRoute>
          <ManageCandidate />
        </AdminRoute>
      ),
    },
    {
      path: "admin/manage-users",
      element: (
        <AdminRoute>
          <ManageUsers />
        </AdminRoute>
      ),
    },
    {
      path: "admin/bookings",
      element: (
        <AdminRoute>
          <AllBookings />
        </AdminRoute>
      ),
    },
    {
      // http://localhost:5173/dashboard/admin/candidates
      path: "admin/payments",
      element: (
        <AdminRoute>
          <AllPayments />
        </AdminRoute>
      ),
    },
    {
    path: "admin/overview",
      element: <AdminRoute>
        <AdminHome />
      </AdminRoute>,
    },
    {
      path: "bookings/:bookingId",
      element: <BookingDetails />,
    },
  ],
};

export default dashbourdRoutes;
