You are a **senior full-stack developer**.

## 📌 Task

You are given a real-world code module located at:

```
/run/media/sj/developer/web/L1B11/12mi/ass/DeshGuide/DeshGuide-client/src/modules/shared/Layout/Footer
```

Refactor the entire codebase **without modifying any UI or changing behavior**. Instead, improve it using:

- ✅ Clear separation of concerns
- ✅ Consistent, semantic naming conventions
- ✅ Modular architecture (hooks, services, utils, components)
- ✅ Scalable file/folder structure
- ✅ Industry-standard project layout and architecture
- ✅ Readable, testable, production-grade code
- ✅ 100% behavior and API compatibility

👉 Output the refactored code to a new folder: `Footer_refactored`

Also return a `.sh` script that will:
- Create that folder
- Write all refactored files
- Run `git add` and `git commit` with message: `refactor: added improved Footer version`

---

## 🌲 Full Project Structure (cwd)

```bash
/run/media/sj/developer/web/L1B11/12mi/ass/DeshGuide/DeshGuide-client
├── 03_37_অপরাহ্ণ_28_07_25.mp4
├── bun.lock
├── eslint.config.js
├── generate_aboutus_refactor.sh
├── index.html
├── package.json
├── public
│   └── CNAME
├── README.md
├── refactor_project_info.sh
├── src
│   ├── animation
│   │   ├── auth-lottie.json
│   │   ├── index.js
│   │   ├── LottieAnimation.jsx
│   │   └── motion.js
│   ├── App.jsx
│   ├── console
│   │   ├── error.json
│   │   └── log.json
│   ├── contexts
│   │   └── AuthContext
│   │       ├── AuthContext.jsx
│   │       └── AuthProvider.jsx
│   ├── docs
│   │   ├── cli.md
│   │   ├── DATA_MODEL.md
│   │   ├── deployment.md
│   │   ├── note.md
│   │   ├── prompt.md
│   │   └── Requirement.md
│   ├── firebase
│   │   └── firebase.init.js
│   ├── hooks
│   │   ├── useAuth.jsx
│   │   ├── useAxiosSecure.jsx
│   │   ├── useFetchData.js
│   │   ├── useHelmet.jsx
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
│   │   │   │   ├── AuthSidebar.jsx
│   │   │   │   ├── constant.js
│   │   │   │   ├── SideBarCard.jsx
│   │   │   │   ├── SigninForm.jsx
│   │   │   │   ├── Signout.jsx
│   │   │   │   ├── SignUpForm.jsx
│   │   │   │   └── SocialLogin.jsx
│   │   │   ├── index.js
│   │   │   └── pages
│   │   │       ├── ForgotPass.jsx
│   │   │       ├── Signin.jsx
│   │   │       └── SignUp.jsx
│   │   ├── Dashbaord
│   │   │   ├── AddStories
│   │   │   │   └── AddStories.jsx
│   │   │   ├── Admin
│   │   │   │   ├── AddPackage
│   │   │   │   │   └── AddPackage.jsx
│   │   │   │   ├── Bookings
│   │   │   │   │   ├── AllBookings.jsx
│   │   │   │   │   └── BookingDetails.jsx
│   │   │   │   ├── ManageCandidate
│   │   │   │   │   ├── CandidateCard.jsx
│   │   │   │   │   └── ManageCandidate.jsx
│   │   │   │   ├── ManageUsers
│   │   │   │   │   ├── ManageUsers.jsx
│   │   │   │   │   └── UsersRow.jsx
│   │   │   │   └── Payments
│   │   │   │       ├── AllPayments.jsx
│   │   │   │       └── PaymentCard.jsx
│   │   │   ├── DashboardLayout.jsx
│   │   │   ├── dashbourdRoutes.jsx
│   │   │   ├── ManageProfile
│   │   │   │   └── ManageProfile.jsx
│   │   │   ├── ManageStories
│   │   │   │   ├── components
│   │   │   │   │   ├── EditStoryModal.jsx
│   │   │   │   │   └── StoryCard.jsx
│   │   │   │   ├── ManageStories.jsx
│   │   │   │   └── StoryDetails
│   │   │   │       └── StoryDetails.jsx
│   │   │   ├── TourGuides
│   │   │   │   ├── AssignedTour
│   │   │   │   │   ├── AssignedTourCard.jsx
│   │   │   │   │   ├── AssignedTour.jsx
│   │   │   │   │   └── refractorAssignedTourPrompt.md
│   │   │   │   ├── GuideProfile
│   │   │   │   │   └── GuideProfile.jsx
│   │   │   │   └── TourGuides.jsx
│   │   │   └── Tourist
│   │   │       ├── Bookings
│   │   │       │   ├── BookingCard.jsx
│   │   │       │   └── MyBookings.jsx
│   │   │       ├── JoinTourGuide
│   │   │       │   └── JoinTourGuide.jsx
│   │   │       └── PaymentBooking
│   │   │           ├── PaymentBooking.jsx
│   │   │           ├── PaymentForm.jsx
│   │   │           └── refractorPaymentBookingPrompt.md
│   │   ├── landing
│   │   │   ├── home
│   │   │   │   ├── Bannnerr
│   │   │   │   │   └── Banner.jsx
│   │   │   │   ├── CallToActionFull
│   │   │   │   │   └── CallToActionFull.jsx
│   │   │   │   ├── Home.jsx
│   │   │   │   ├── HowItWorks
│   │   │   │   │   └── HowItWorks.jsx
│   │   │   │   ├── LiveStats
│   │   │   │   │   └── LiveStats.jsx
│   │   │   │   ├── NewsletterSignup
│   │   │   │   │   └── NewsletterSignup.jsx
│   │   │   │   ├── Overview
│   │   │   │   │   ├── Overview.jsx
│   │   │   │   │   └── Stories
│   │   │   │   │       ├── refractorStoriesPrompt.md
│   │   │   │   │       ├── Stories.jsx
│   │   │   │   │       └── StoryCard.jsx
│   │   │   │   ├── PartnerWithUs
│   │   │   │   │   └── PartnerWithUs.jsx
│   │   │   │   ├── RandomGuides
│   │   │   │   │   └── RandomGuides.jsx
│   │   │   │   ├── Testimonials
│   │   │   │   │   ├── TestimonialCard.jsx
│   │   │   │   │   └── Testimonials.jsx
│   │   │   │   ├── TourismAndGuides.jsx
│   │   │   │   ├── TrendingDestinations
│   │   │   │   │   └── TrendingDestinations.jsx
│   │   │   │   └── WhyChooseUs
│   │   │   │       └── WhyChooseUs.jsx
│   │   │   └── index.js
│   │   ├── Packages
│   │   │   ├── PackageDetails
│   │   │   │   └── PackageDetails.jsx
│   │   │   └── Packages
│   │   │       ├── PackageCard.jsx
│   │   │       └── Packages.jsx
│   │   └── shared
│   │       ├── Layout
│   │       │   ├── CommonFooter.jsx
│   │       │   ├── Footer
│   │       │   │   └── CommonFooter.jsx
│   │       │   ├── index.js
│   │       │   ├── NavbarDrawer.jsx
│   │       │   ├── Navbar.jsx
│   │       │   ├── navbarLinksConstant.jsx
│   │       │   ├── RootLayout.jsx
│   │       │   ├── SidebarLink.jsx
│   │       │   ├── sidebarLinks.js
│   │       │   └── Spinner.jsx
│   │       └── ui
│   │           ├── Avatar.jsx
│   │           ├── Brand.jsx
│   │           ├── Button.jsx
│   │           ├── DropDown.jsx
│   │           ├── index.js
│   │           ├── Input.jsx
│   │           └── swalToast.js
│   ├── pages
│   │   ├── AboutUs
│   │   │   ├── AboutUs.jsx
│   │   │   ├── components
│   │   │   │   ├── AboutDeveloper.jsx
│   │   │   │   ├── AboutIntro.jsx
│   │   │   │   ├── ContactCards.jsx
│   │   │   │   ├── DesignPhilosophy.jsx
│   │   │   │   ├── FooterNote.jsx
│   │   │   │   └── LiveProjects.jsx
│   │   │   ├── constants
│   │   │   │   └── about.constants.js
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
│   │   ├── PartnerSignup
│   │   │   └── PartnerSignup.jsx
│   │   ├── PrivacyPolicy
│   │   │   └── PrivacyPolicy.jsx
│   │   ├── ProjectInfoPage
│   │   │   ├── components
│   │   │   │   ├── ClientInfoSection.jsx
│   │   │   │   ├── DeveloperInfoSection.jsx
│   │   │   │   └── ServerInfoSection.jsx
│   │   │   ├── constants
│   │   │   │   └── projectInfo.js
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
│   └── utils
│       ├── axiosInstance.js
│       ├── customAlert.js
│       ├── deleteData.js
│       ├── ErrorMessage.jsx
│       ├── fetchData.js
│       ├── PageIntro.jsx
│       ├── postData.js
│       ├── TypeWriterEffect.jsx
│       └── updateData.js
├── structure.md
├── tmuxShow03_25_অপরাহ্ণ_19_07_25.mp4
├── vite.config.js
└── vite.logger.plugin.js

73 directories, 157 files
```

## 📁 Target Module Tree (Footer)

```bash
/run/media/sj/developer/web/L1B11/12mi/ass/DeshGuide/DeshGuide-client/src/modules/shared/Layout/Footer
└── CommonFooter.jsx

1 directory, 1 file
```

## 📄 Module Files & Contents

### `CommonFooter.jsx`
```javascript
import { Link } from "react-router";

const CommonFooter = () => {
  return (
    <div className="max-container" data-aos="flip-down">
      <footer className="bg-gradient-to-b from-[#0e0e0e] to-[#1a1a1a] text-gray-300 px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h6 className="footer-title text-cyan-400 mb-2">Let's Connect </h6>
            <ul className="space-y-1">
              {[
                {
                  name: "GitHub",
                  url: "https://github.com/shahjalal-labs/DeshGuide-client",
                  icon: "👨‍💻",
                },
                {
                  name: "Portfolio",
                  url: "http://shahjalal-labs.surge.sh",
                  icon: "🎨",
                },
                {
                  name: "LinkedIn",
                  url: "https://www.linkedin.com/in/shahjalal-labs/",
                  icon: "💼",
                },
                {
                  name: "Twitter",
                  url: "https://twitter.com/shahjalal_labs",
                  icon: "🐦",
                },
                {
                  name: "Facebook",
                  url: "https://www.facebook.com/shahjalal.labs",
                  icon: "📘",
                },
              ].map((item) => (
                <li
                  key={item.name}
                  className="transition hover:translate-x-1 hover:text-cyan-400 duration-200"
                >
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>{" "}
          <div>
            <h6 className="footer-title text-cyan-400 mb-2">Company</h6>
            <ul className="space-y-1">
              {[
                { name: "About Us", path: "/about-us" },
                { name: "Contact Us", path: "/contact-us" },
                { name: "Project Info", path: "/project-info" },
              ].map((item) => (
                <li
                  key={item.name}
                  className="transition hover:translate-x-1 hover:text-cyan-400 duration-200 cursor-pointer"
                >
                  <Link to={item.path} className="block w-full">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h6 className="footer-title text-cyan-400 mb-2">Legal</h6>
            <ul className="space-y-1">
              {[
                { name: "Terms of use", path: "terms-of-use" },
                { name: "Privacy policy", path: "privacy-policy" },
                { name: "Cookie policy", path: "cookie-policy" },
              ].map((item) => (
                <li
                  key={item.path}
                  className="transition hover:translate-x-1 hover:text-cyan-400 duration-200 cursor-pointer"
                >
                  <Link to={item.path} className="block w-full">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>{" "}
          </div>
        </div>
      </footer>

      <footer className="border-t border-gray-700 bg-[#111111] text-gray-400 px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            className="fill-cyan-400 animate-pulse"
          >
            <path d="M22.672 15.226l-2.432.811...z" />
          </svg>
          <p className="text-sm">
            <span className="text-cyan-300 font-semibold">DeshGuide</span> —
            Your Trusted Travel Partner
          </p>
        </div>
        <div className="flex gap-4 text-cyan-300">
          {[twitterPath, ytPath, fbPath].map((d, i) => (
            <a key={i} className="hover:text-white transition duration-200">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current hover:scale-110 transition duration-300"
              >
                <path d={d} />
              </svg>
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
};

const twitterPath = `M24 4.557c-.883.392-1.832...`;
const ytPath = `M19.615 3.184c-3.604-.246...`;
const fbPath = `M9 8h-3v4h3v12h5v-12h3.642...`;

export default CommonFooter;
```
