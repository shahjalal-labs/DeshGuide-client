Generate a professional, modern, and production-ready `README.md` file based on my project. Your entire output **must be enclosed within a single markdown code block** using triple backticks and `markdown` as the language. Absolutely **no text should be outside** the code block. The structure, formatting, and content should follow **industry best practices** for open-source projects, with clearly separated sections (e.g., Features, Tech Stack, Installation, Folder Structure, License, etc.).

The markdown must:

- Use clear section headers (`##`) and subheaders (`###`) consistently
- Include emoji icons in section titles for modern visual appeal
- Apply bullet lists, tables, and code fences (` ``` `) for commands and code
- Be **ready to paste directly** into a markdown previewer with no extra modification
- Contain no redundant explanations or system-generated text outside the markdown block

Make sure this `README.md` looks visually appealing, easy to read, and suitable for developers on GitHub or other platforms. Output strictly in one markdown code block.

## 📁 File Structure

```bash
.
├── 03_37_অপরাহ্ণ_28_07_25.mp4
├── bun.lock
├── .env
├── eslint.config.js
├── generate_aboutus_refactor.sh
├── .gitignore
├── index.html
├── package.json
├── public
│   └── CNAME
├── readmeGenerateFull.md
├── readmeGenerate.md
├── README.md
├── refactor_project_info.sh
├── showCase.mp4\012
├── src
│   ├── animation
│   │   ├── auth-lottie.json
│   │   ├── index.js
│   │   ├── LottieAnimation.jsx
│   │   └── motion.js
│   ├── App.jsx
│   ├── assets
│   │   └── images
│   │       ├── favicon.jpg
│   │       ├── index.js
│   │       ├── notfound3.jpg
│   │       └── preview
│   ├── console
│   │   ├── error.json
│   │   └── log.json
│   ├── contexts
│   │   ├── AuthContext
│   │   │   ├── AuthContext.jsx
│   │   │   └── AuthProvider.jsx
│   │   └── refractorContextsPrompt.md
│   ├── docs
│   │   ├── cli.md
│   │   ├── DATA_MODEL.md
│   │   ├── deployment.md
│   │   ├── fbPost.md
│   │   ├── note.md
│   │   ├── paste.md
│   │   ├── prompt.md
│   │   ├── Requirement.md
│   │   └── taskRemained.md
│   ├── firebase
│   │   └── firebase.init.js
│   ├── hooks
│   │   ├── useAuth.jsx
│   │   ├── useAxiosSecure.jsx
│   │   ├── useFetchData.js
│   │   ├── useHelmet.jsx
│   │   ├── useInversionToggle.js
│   │   ├── usePostData.jsx
│   │   ├── useScrollToTop.js
│   │   ├── useSecureQuery.jsx
│   │   ├── useSecureUpdate.js
│   │   └── useUserRole.jsx
│   ├── index.css
│   ├── loggerClient.js
│   ├── main.jsx
│   ├── modules
│   │   ├── Auth
│   │   │   ├── AuthLayout.jsx
│   │   │   ├── AuthRoute.jsx
│   │   │   ├── components
│   │   │   ├── index.js
│   │   │   └── pages
│   │   ├── Dashbaord
│   │   │   ├── AddStories
│   │   │   ├── Admin
│   │   │   ├── DashboardLayout.jsx
│   │   │   ├── dashbourdRoutes.jsx
│   │   │   ├── ManageProfile
│   │   │   ├── ManageStories
│   │   │   ├── TourGuides
│   │   │   └── Tourist
│   │   ├── landing
│   │   │   ├── home
│   │   │   └── index.js
│   │   ├── Packages
│   │   │   ├── PackageDetails
│   │   │   └── Packages
│   │   └── shared
│   │       ├── Layout
│   │       └── ui
│   ├── pages
│   │   ├── AboutUs
│   │   │   ├── AboutUs.jsx
│   │   │   ├── components
│   │   │   ├── constants
│   │   │   └── index.js
│   │   ├── Community
│   │   │   ├── CommunityPage.jsx
│   │   │   └── components
│   │   ├── ContactUs
│   │   │   └── ContactUs.jsx
│   │   ├── CookiePolicy
│   │   │   └── CookiePolicy.jsx
│   │   ├── faq
│   │   │   ├── faq.constant.js
│   │   │   └── FAQ.jsx
│   │   ├── Forbidden
│   │   │   └── Forbidden.jsx
│   │   ├── PartnerSignup
│   │   │   └── PartnerSignup.jsx
│   │   ├── PrivacyPolicy
│   │   │   └── PrivacyPolicy.jsx
│   │   ├── ProjectInfoPage
│   │   │   ├── components
│   │   │   ├── constants
│   │   │   ├── hooks
│   │   │   ├── index.js
│   │   │   └── ProjectInfoPage.jsx
│   │   ├── ProjectInfoPagePrev
│   │   │   ├── ProjectInfoPage.jsx
│   │   │   └── refractorProjectInfoPagePrompt.md
│   │   └── TermsOfUse
│   │       └── TermsOfUse.jsx
│   ├── router
│   │   ├── ErrorPage.jsx
│   │   ├── ProtectedRoute.jsx
│   │   └── router.jsx
│   ├── routes
│   │   ├── AdminRoute.jsx
│   │   ├── routeCheck.md
│   │   └── TourGuideRoute.jsx
│   └── utils
│       ├── axiosInstance.js
│       ├── customAlert.js
│       ├── darkModeToggle.js
│       ├── deleteData.js
│       ├── ErrorMessage.jsx
│       ├── fetchData.js
│       ├── PageIntro.jsx
│       ├── postData.js
│       ├── TypeWriterEffect.jsx
│       └── updateData.js
├── structure.md
├── .vite
│   └── deps
│       ├── _metadata.json
│       └── package.json
├── vite.config.js
└── vite.logger.plugin.js

55 directories, 92 files

```

## 📦 package.json

```json
{
  "name": "client-workelebate",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@stripe/react-stripe-js": "^3.8.0",
    "@stripe/stripe-js": "^7.6.1",
    "@tailwindcss/vite": "^4.1.8",
    "@tanstack/react-query": "^5.80.6",
    "aos": "^2.3.4",
    "axios": "^1.9.0",
    "clsx": "^2.1.1",
    "date-fns": "^4.1.0",
    "dayjs": "^1.11.13",
    "firebase": "^11.8.1",
    "framer-motion": "^12.23.9",
    "k-form": "^1.0.3",
    "lottie-react": "^2.4.1",
    "lucide-react": "^0.513.0",
    "motion": "^12.16.0",
    "react": "^19.1.0",
    "react-countup": "^6.5.3",
    "react-datepicker": "^8.4.0",
    "react-day-picker": "^9.7.0",
    "react-dom": "^19.1.0",
    "react-fast-marquee": "^1.6.5",
    "react-helmet-async": "^2.0.5",
    "react-hook-form": "^7.57.0",
    "react-hooks-testing-library": "^0.6.0",
    "react-hot-toast": "^2.5.2",
    "react-icons": "^5.5.0",
    "react-intersection-observer": "^9.16.0",
    "react-responsive": "^10.0.1",
    "react-responsive-carousel": "^3.2.23",
    "react-router": "^7.6.1",
    "react-select": "^5.10.2",
    "react-share": "^5.2.2",
    "react-simple-typewriter": "^5.0.1",
    "react-tabs": "^6.1.0",
    "sweetalert2": "^11.22.0",
    "swiper": "^11.2.10",
    "tailwindcss": "^4.1.8"
  },
  "devDependencies": {
    "@eslint/js": "^9.25.0",
    "@tailwindcss/typography": "^0.5.16",
    "@types/react": "^19.1.2",
    "@types/react-dom": "^19.1.2",
    "@vitejs/plugin-react": "^4.4.1",
    "daisyui": "^5.0.43",
    "eslint": "^9.25.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.19",
    "globals": "^16.0.0",
    "vite": "^6.3.5"
  }
}
```

## 🗺️ Routes

```js

// File: src/modules/Auth/AuthRoute.jsx

import { Signin, SignUp } from "../Auth";
import AuthLayout from "../Auth/AuthLayout";
import ForgotPassword from "../Auth/pages/ForgotPass";
const AuthRoute = {
  path: "/auth",
  element: <AuthLayout />,
  children: [
    {
      path: "signin",
      Component: Signin,
    },

    {
      path: "signup",
      element: <SignUp />,
    },
    {
      path: "forgot-pass",
      Component: ForgotPassword,
    },
  ],
};

export default AuthRoute;


// File: src/modules/Dashbaord/dashbourdRoutes.jsx

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
      path: "bookings/:bookingId",
      element: <BookingDetails />,
    },
  ],
};

export default dashbourdRoutes;


// File: src/router/ProtectedRoute.jsx

import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import Spinner from "../modules/shared/Layout/Spinner";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <Spinner />;
  if (!user)
    return <Navigate to="/auth/signin" state={{ from: location }} replace />;

  return children;
};

export default ProtectedRoute;

/* import { Navigate } from "react-router";
import useAuth from "../hooks/useAuth";
import Spinner from "../modules/shared/Layout/Spinner";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  // console.log(user, "ProtectedRoute.jsx", 6);
  if (loading) return <Spinner />;
  if (!user) return <Navigate to="/auth/signin"></Navigate>;

  return children;
};

export default ProtectedRoute; */


// File: src/router/router.jsx

import { createBrowserRouter } from "react-router";
import { RootLayout } from "../modules/shared/Layout";
// import ProtectedRoute from "./ProtectedRoute";
import AuthRoute from "../modules/Auth/AuthRoute";
import Errorpage from "./ErrorPage";
import PackageDetails from "../modules/Packages/PackageDetails/PackageDetails";
import Home from "../modules/landing/home/Home";
import GuideProfile from "../modules/Dashbaord/TourGuides/GuideProfile/GuideProfile";
import TourGuides from "../modules/Dashbaord/TourGuides/TourGuides";
import dashbourdRoutes from "../modules/Dashbaord/dashbourdRoutes";
import ProtectedRoute from "./ProtectedRoute";
import Packages from "../modules/Packages/Packages/Packages";
import Stories from "../modules/landing/home/Overview/Stories/Stories";
import AboutUs from "../pages/AboutUs";
import StoryDetails from "../modules/Dashbaord/ManageStories/StoryDetails/StoryDetails";
import TermsOfUse from "../pages/TermsOfUse/TermsOfUse";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import CookiePolicy from "../pages/CookiePolicy/CookiePolicy";
import ProjectInfoPage from "../pages/ProjectInfoPage";
import PartnerSignup from "../pages/PartnerSignup/PartnerSignup";
import ContactUs from "../pages/ContactUs/ContactUs";
import Forbidden from "../pages/Forbidden/Forbidden";
import TourGuideRoute from "../routes/TourGuideRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        Component: Home,
      },

      {
        path: "/all-trips",
        element: <Packages apiEndpoint="packages" />,
      },
      // guide profile page
      {
        path: "/guides/:id",
        element: (
          <ProtectedRoute>
            <GuideProfile />
          </ProtectedRoute>
        ),
      },

      {
        path: "tour-guides",
        element: <TourGuides />,
      },
      // package  details page
      {
        path: "packages/:id",
        element: (
          <ProtectedRoute>
            <PackageDetails />
          </ProtectedRoute>
        ),
      },

      {
        path: "community",
        element: <Stories apiEndpoint="stories?limit=0" />,
      },

      {
        path: "community/:id",
        element: (
          <ProtectedRoute>
            <StoryDetails />
          </ProtectedRoute>
        ),
      },

      {
        path: "partner-signup",
        element: <PartnerSignup />,
      },

      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "terms-of-use",
        element: <TermsOfUse />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "cookie-policy",
        element: <CookiePolicy />,
      },

      {
        path: "project-info",
        element: <ProjectInfoPage />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "forbidden",
        element: <Forbidden />,
      },
    ],
  },

  dashbourdRoutes,
  AuthRoute,
]);

export default router;


// File: src/routes/AdminRoute.jsx

import { Navigate } from "react-router";
import useAuth from "../hooks/useAuth";
import useUserRole from "../hooks/useUserRole";
import Spinner from "../modules/shared/Layout/Spinner";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { role, roleLoading } = useUserRole();

  if (loading || roleLoading) {
    return <Spinner />;
  }

  if (!user || role !== "admin") {
    return (
      <Navigate state={{ from: location.pathname }} to="/forbidden"></Navigate>
    );
  }

  return children;
};

export default AdminRoute;


// File: src/routes/TourGuideRoute.jsx

import { Navigate } from "react-router";
import useAuth from "../hooks/useAuth";
import useUserRole from "../hooks/useUserRole";

const TourGuideRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { role, roleLoading } = useUserRole();

  if (loading || roleLoading) {
    return <span className="loading loading-spinner loading-xl"></span>;
  }

  if (!user || role !== "tour-guide") {
    return (
      <Navigate state={{ from: location.pathname }} to="/forbidden"></Navigate>
    );
  }

  return children;
};

export default TourGuideRoute;


```

## 📄 Existing README

```md
# 🌟 DeshGuide-client

## 📂 Project Information

| 📝 **Detail**           | 📌 **Value**                                                                                                         |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------- |
| 🔗 **GitHub URL**       | [https://github.com/shahjalal-labs/DeshGuide-client](https://github.com/shahjalal-labs/DeshGuide-client)             |
| 🌐 **Live Site**        | [http://shahjalal-mern.surge.sh](http://shahjalal-mern.surge.sh)                                                     |
| 💻 **Portfolio GitHub** | [https://github.com/shahjalal-labs/shahjalal-portfolio-v2](https://github.com/shahjalal-labs/shahjalal-portfolio-v2) |
| 🌐 **Portfolio Live**   | [http://shahjalal-labs.surge.sh](http://shahjalal-labs.surge.sh)                                                     |
| 📁 **Directory**        | `/run/media/sj/developer/web/L1B11/12mi/ass/DeshGuide/DeshGuide-client`                                              |
| 👤 **Username**         | `sj`                                                                                                                 |
| 📅 **Created On**       | `21/07/2025 10:48 অপরাহ্ণ সোম GMT+6`                                                                                 |
| 📍 **Location**         | Sharifpur, Gazipur, Dhaka                                                                                            |
| 💼 **LinkedIn**         | [https://www.linkedin.com/in/shahjalal-labs/](https://www.linkedin.com/in/shahjalal-labs/)                           |
| 📘 **Facebook**         | [https://www.facebook.com/shahjalal.labs](https://www.facebook.com/shahjalal.labs)                                   |
| ▶️ **YouTube**          | [nil](nil)                                                                                                           |

---

### `Developer info:`

![Developer Info:](https://i.ibb.co/kVR4YmrX/developer-Info-Github-Banner.png)

Live client: https://deshguide.surge.sh
github client: https///github.com/shahjalal-labs/DeshGuide-client
github server: https///github.com/shahjalal-labs/DeshGuide-server
live server: https://deshguide-server.vercel.app

Admin email: admin@example.com
Admin password: admin@example.com
sample tour guide email: tourguide@example.com
sample tour guide password: tourguide@example.com
sample tourist email: tourist@example.com
sample tourist password: tourist@example.com
```

