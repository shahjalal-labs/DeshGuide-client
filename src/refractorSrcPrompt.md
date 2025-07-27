You are a **senior full-stack developer**.

## π“ Task

You are given a real-world code module located at:

```
/run/media/sj/developer/web/L1B11/12mi/ass/DeshGuide/DeshGuide-client/src
```

Refactor the entire codebase **without modifying any UI or changing behavior**. Instead, improve it using:

- β… Clear separation of concerns
- β… Consistent, semantic naming conventions
- β… Modular architecture (hooks, services, utils, components)
- β… Scalable file/folder structure
- β… Industry-standard project layout and architecture
- β… Readable, testable, production-grade code
- β… 100% behavior and API compatibility

π‘‰ Output the refactored code to a new folder: `src_refactored`

Also return a `.sh` script that will:
- Create that folder
- Write all refactored files
- Run `git add` and `git commit` with message: `refactor: added improved src version`

---

## π² Full Project Structure (cwd)

```bash
/run/media/sj/developer/web/L1B11/12mi/ass/DeshGuide/DeshGuide-client
β”β”€β”€ bun.lock
β”β”€β”€ eslint.config.js
β”β”€β”€ generate_aboutus_refactor.sh
β”β”€β”€ index.html
β”β”€β”€ package.json
β”β”€β”€ public
β”‚Β Β  β””β”€β”€ CNAME
β”β”€β”€ README.md
β”β”€β”€ src
β”‚Β Β  β”β”€β”€ animation
β”‚Β Β  β”‚Β Β  β”β”€β”€ auth-lottie.json
β”‚Β Β  β”‚Β Β  β”β”€β”€ index.js
β”‚Β Β  β”‚Β Β  β”β”€β”€ LottieAnimation.jsx
β”‚Β Β  β”‚Β Β  β””β”€β”€ motion.js
β”‚Β Β  β”β”€β”€ App.jsx
β”‚Β Β  β”β”€β”€ console
β”‚Β Β  β”‚Β Β  β”β”€β”€ error.json
β”‚Β Β  β”‚Β Β  β””β”€β”€ log.json
β”‚Β Β  β”β”€β”€ contexts
β”‚Β Β  β”‚Β Β  β””β”€β”€ AuthContext
β”‚Β Β  β”‚Β Β      β”β”€β”€ AuthContext.jsx
β”‚Β Β  β”‚Β Β      β””β”€β”€ AuthProvider.jsx
β”‚Β Β  β”β”€β”€ docs
β”‚Β Β  β”‚Β Β  β”β”€β”€ note.md
β”‚Β Β  β”‚Β Β  β””β”€β”€ prompt.md
β”‚Β Β  β”β”€β”€ firebase
β”‚Β Β  β”‚Β Β  β””β”€β”€ firebase.init.js
β”‚Β Β  β”β”€β”€ hooks
β”‚Β Β  β”‚Β Β  β”β”€β”€ useAuth.jsx
β”‚Β Β  β”‚Β Β  β”β”€β”€ useAxiosSecure.jsx
β”‚Β Β  β”‚Β Β  β”β”€β”€ useFetchData.js
β”‚Β Β  β”‚Β Β  β”β”€β”€ useHelmet.jsx
β”‚Β Β  β”‚Β Β  β”β”€β”€ usePostData.jsx
β”‚Β Β  β”‚Β Β  β”β”€β”€ useSecureQuery.jsx
β”‚Β Β  β”‚Β Β  β”β”€β”€ useSecureUpdate.js
β”‚Β Β  β”‚Β Β  β””β”€β”€ useUserRole.jsx
β”‚Β Β  β”β”€β”€ index.css
β”‚Β Β  β”β”€β”€ loggerClient.js
β”‚Β Β  β”β”€β”€ main.jsx
β”‚Β Β  β”β”€β”€ modules
β”‚Β Β  β”‚Β Β  β”β”€β”€ Auth
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ AuthLayout.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ AuthRoute.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ components
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ AuthSidebar.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ constant.js
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ SideBarCard.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ SigninForm.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ Signout.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ SignUpForm.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ SocialLogin.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ index.js
β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ pages
β”‚Β Β  β”‚Β Β  β”‚Β Β      β”β”€β”€ ForgotPass.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β      β”β”€β”€ Signin.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β      β””β”€β”€ SignUp.jsx
β”‚Β Β  β”‚Β Β  β”β”€β”€ Dashbaord
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ AddStories
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ AddStories.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ Admin
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ AddPackage
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ AddPackage.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ Bookings
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ AllBookings.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ BookingDetails.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ ManageCandidate
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ CandidateCard.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ ManageCandidate.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ ManageUsers
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ ManageUsers.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ UsersRow.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ Payments
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β      β”β”€β”€ AllPayments.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β      β””β”€β”€ PaymentCard.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ DashboardLayout.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ dashbourdRoutes.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ ManageProfile
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ ManageProfile.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ ManageStories
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ components
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ EditStoryModal.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ StoryCard.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ ManageStories.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ TourGuides
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ AssignedTour
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ AssignedTourCard.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ AssignedTour.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ refractorAssignedTourPrompt.md
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ GuideProfile
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ GuideProfile.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ TourGuides.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ Tourist
β”‚Β Β  β”‚Β Β  β”‚Β Β      β”β”€β”€ Bookings
β”‚Β Β  β”‚Β Β  β”‚Β Β      β”‚Β Β  β”β”€β”€ BookingCard.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β      β”‚Β Β  β””β”€β”€ MyBookings.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β      β”β”€β”€ JoinTourGuide
β”‚Β Β  β”‚Β Β  β”‚Β Β      β”‚Β Β  β””β”€β”€ JoinTourGuide.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β      β””β”€β”€ PaymentBooking
β”‚Β Β  β”‚Β Β  β”‚Β Β          β”β”€β”€ PaymentBooking.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β          β”β”€β”€ PaymentForm.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β          β””β”€β”€ refractorPaymentBookingPrompt.md
β”‚Β Β  β”‚Β Β  β”β”€β”€ landing
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ home
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ Bannnerr
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ Banner.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ CallToActionFull
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ CallToActionFull.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ Home.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ HowItWorks
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ HowItWorks.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ LiveStats
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ LiveStats.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ NewsletterSignup
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ NewsletterSignup.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ Overview
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ Overview.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ Stories
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β      β”β”€β”€ Stories.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β      β”β”€β”€ StoryCard.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β      β””β”€β”€ StoryCard.jsx~
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ PartnerWithUs
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ PartnerWithUs.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ RandomGuides
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ RandomGuides.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ Testimonials
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ TestimonialCard.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ Testimonials.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ TourismAndGuides.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ TrendingDestinations
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ TrendingDestinations.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ WhyChooseUs
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β      β””β”€β”€ WhyChooseUs.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ index.js
β”‚Β Β  β”‚Β Β  β”β”€β”€ Packages
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ PackageDetails
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ PackageDetails.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ Packages
β”‚Β Β  β”‚Β Β  β”‚Β Β      β”β”€β”€ PackageCard.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β      β””β”€β”€ Packages.jsx
β”‚Β Β  β”‚Β Β  β””β”€β”€ shared
β”‚Β Β  β”‚Β Β      β”β”€β”€ Layout
β”‚Β Β  β”‚Β Β      β”‚Β Β  β”β”€β”€ CommonFooter.jsx
β”‚Β Β  β”‚Β Β      β”‚Β Β  β”β”€β”€ index.js
β”‚Β Β  β”‚Β Β      β”‚Β Β  β”β”€β”€ NavbarDrawer.jsx
β”‚Β Β  β”‚Β Β      β”‚Β Β  β”β”€β”€ Navbar.jsx
β”‚Β Β  β”‚Β Β      β”‚Β Β  β”β”€β”€ navbarLinksConstant.jsx
β”‚Β Β  β”‚Β Β      β”‚Β Β  β”β”€β”€ RootLayout.jsx
β”‚Β Β  β”‚Β Β      β”‚Β Β  β”β”€β”€ SidebarLink.jsx
β”‚Β Β  β”‚Β Β      β”‚Β Β  β”β”€β”€ sidebarLinks.js
β”‚Β Β  β”‚Β Β      β”‚Β Β  β””β”€β”€ Spinner.jsx
β”‚Β Β  β”‚Β Β      β””β”€β”€ ui
β”‚Β Β  β”‚Β Β          β”β”€β”€ Avatar.jsx
β”‚Β Β  β”‚Β Β          β”β”€β”€ Brand.jsx
β”‚Β Β  β”‚Β Β          β”β”€β”€ Button.jsx
β”‚Β Β  β”‚Β Β          β”β”€β”€ DropDown.jsx
β”‚Β Β  β”‚Β Β          β”β”€β”€ index.js
β”‚Β Β  β”‚Β Β          β”β”€β”€ Input.jsx
β”‚Β Β  β”‚Β Β          β””β”€β”€ swalToast.js
β”‚Β Β  β”β”€β”€ pages
β”‚Β Β  β”‚Β Β  β”β”€β”€ AboutUs
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ AboutUs.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ components
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ AboutDeveloper.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ AboutIntro.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ ContactCards.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ DesignPhilosophy.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ FooterNote.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ LiveProjects.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ constants
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ about.constants.js
β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ index.js
β”‚Β Β  β”‚Β Β  β”β”€β”€ Community
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ CommunityPage.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ components
β”‚Β Β  β”‚Β Β  β””β”€β”€ faq
β”‚Β Β  β”‚Β Β      β”β”€β”€ faq.constant.js
β”‚Β Β  β”‚Β Β      β””β”€β”€ FAQ.jsx
β”‚Β Β  β”β”€β”€ router
β”‚Β Β  β”‚Β Β  β”β”€β”€ ErrorPage.jsx
β”‚Β Β  β”‚Β Β  β”β”€β”€ ProtectedRoute.jsx
β”‚Β Β  β”‚Β Β  β””β”€β”€ router.jsx
β”‚Β Β  β””β”€β”€ utils
β”‚Β Β      β”β”€β”€ axiosInstance.js
β”‚Β Β      β”β”€β”€ customAlert.js
β”‚Β Β      β”β”€β”€ deleteData.js
β”‚Β Β      β”β”€β”€ ErrorMessage.jsx
β”‚Β Β      β”β”€β”€ fetchData.js
β”‚Β Β      β”β”€β”€ PageIntro.jsx
β”‚Β Β      β”β”€β”€ postData.js
β”‚Β Β      β”β”€β”€ TypeWriterEffect.jsx
β”‚Β Β      β””β”€β”€ updateData.js
β”β”€β”€ structure.md
β”β”€β”€ tmuxShow03_25_ΰ¦…ΰ¦ªΰ¦°ΰ¦Ύΰ¦Ήΰ§ΰ¦£_19_07_25.mp4
β”β”€β”€ vite.config.js
β””β”€β”€ vite.logger.plugin.js

61 directories, 135 files
```

## π“ Target Module Tree (src)

```bash
/run/media/sj/developer/web/L1B11/12mi/ass/DeshGuide/DeshGuide-client/src
β”β”€β”€ animation
β”‚Β Β  β”β”€β”€ auth-lottie.json
β”‚Β Β  β”β”€β”€ index.js
β”‚Β Β  β”β”€β”€ LottieAnimation.jsx
β”‚Β Β  β””β”€β”€ motion.js
β”β”€β”€ App.jsx
β”β”€β”€ assets
β”‚Β Β  β””β”€β”€ images
β”‚Β Β      β”β”€β”€ index.js
β”‚Β Β      β””β”€β”€ notfound3.jpg
β”β”€β”€ console
β”‚Β Β  β”β”€β”€ error.json
β”‚Β Β  β””β”€β”€ log.json
β”β”€β”€ contexts
β”‚Β Β  β””β”€β”€ AuthContext
β”‚Β Β      β”β”€β”€ AuthContext.jsx
β”‚Β Β      β””β”€β”€ AuthProvider.jsx
β”β”€β”€ docs
β”‚Β Β  β”β”€β”€ note.md
β”‚Β Β  β””β”€β”€ prompt.md
β”β”€β”€ firebase
β”‚Β Β  β””β”€β”€ firebase.init.js
β”β”€β”€ hooks
β”‚Β Β  β”β”€β”€ useAuth.jsx
β”‚Β Β  β”β”€β”€ useAxiosSecure.jsx
β”‚Β Β  β”β”€β”€ useFetchData.js
β”‚Β Β  β”β”€β”€ useHelmet.jsx
β”‚Β Β  β”β”€β”€ usePostData.jsx
β”‚Β Β  β”β”€β”€ useSecureQuery.jsx
β”‚Β Β  β”β”€β”€ useSecureUpdate.js
β”‚Β Β  β””β”€β”€ useUserRole.jsx
β”β”€β”€ index.css
β”β”€β”€ loggerClient.js
β”β”€β”€ main.jsx
β”β”€β”€ modules
β”‚Β Β  β”β”€β”€ Auth
β”‚Β Β  β”‚Β Β  β”β”€β”€ AuthLayout.jsx
β”‚Β Β  β”‚Β Β  β”β”€β”€ AuthRoute.jsx
β”‚Β Β  β”‚Β Β  β”β”€β”€ components
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ AuthSidebar.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ constant.js
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ SideBarCard.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ SigninForm.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ Signout.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ SignUpForm.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ SocialLogin.jsx
β”‚Β Β  β”‚Β Β  β”β”€β”€ index.js
β”‚Β Β  β”‚Β Β  β””β”€β”€ pages
β”‚Β Β  β”‚Β Β      β”β”€β”€ ForgotPass.jsx
β”‚Β Β  β”‚Β Β      β”β”€β”€ Signin.jsx
β”‚Β Β  β”‚Β Β      β””β”€β”€ SignUp.jsx
β”‚Β Β  β”β”€β”€ Dashbaord
β”‚Β Β  β”‚Β Β  β”β”€β”€ AddStories
β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ AddStories.jsx
β”‚Β Β  β”‚Β Β  β”β”€β”€ Admin
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ AddPackage
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ AddPackage.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ Bookings
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ AllBookings.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ BookingDetails.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ ManageCandidate
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ CandidateCard.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ ManageCandidate.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ ManageUsers
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ ManageUsers.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ UsersRow.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ Payments
β”‚Β Β  β”‚Β Β  β”‚Β Β      β”β”€β”€ AllPayments.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β      β””β”€β”€ PaymentCard.jsx
β”‚Β Β  β”‚Β Β  β”β”€β”€ DashboardLayout.jsx
β”‚Β Β  β”‚Β Β  β”β”€β”€ dashbourdRoutes.jsx
β”‚Β Β  β”‚Β Β  β”β”€β”€ ManageProfile
β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ ManageProfile.jsx
β”‚Β Β  β”‚Β Β  β”β”€β”€ ManageStories
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ components
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ EditStoryModal.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ StoryCard.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ ManageStories.jsx
β”‚Β Β  β”‚Β Β  β”β”€β”€ TourGuides
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ AssignedTour
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ AssignedTourCard.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ AssignedTour.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ refractorAssignedTourPrompt.md
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ GuideProfile
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ GuideProfile.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ TourGuides.jsx
β”‚Β Β  β”‚Β Β  β””β”€β”€ Tourist
β”‚Β Β  β”‚Β Β      β”β”€β”€ Bookings
β”‚Β Β  β”‚Β Β      β”‚Β Β  β”β”€β”€ BookingCard.jsx
β”‚Β Β  β”‚Β Β      β”‚Β Β  β””β”€β”€ MyBookings.jsx
β”‚Β Β  β”‚Β Β      β”β”€β”€ JoinTourGuide
β”‚Β Β  β”‚Β Β      β”‚Β Β  β””β”€β”€ JoinTourGuide.jsx
β”‚Β Β  β”‚Β Β      β””β”€β”€ PaymentBooking
β”‚Β Β  β”‚Β Β          β”β”€β”€ PaymentBooking.jsx
β”‚Β Β  β”‚Β Β          β”β”€β”€ PaymentForm.jsx
β”‚Β Β  β”‚Β Β          β””β”€β”€ refractorPaymentBookingPrompt.md
β”‚Β Β  β”β”€β”€ landing
β”‚Β Β  β”‚Β Β  β”β”€β”€ home
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ Bannnerr
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ Banner.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ CallToActionFull
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ CallToActionFull.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ Home.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ HowItWorks
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ HowItWorks.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ LiveStats
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ LiveStats.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ NewsletterSignup
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ NewsletterSignup.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ Overview
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ Overview.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ Stories
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β      β”β”€β”€ Stories.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β      β”β”€β”€ StoryCard.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β      β””β”€β”€ StoryCard.jsx~
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ PartnerWithUs
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ PartnerWithUs.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ RandomGuides
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ RandomGuides.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ Testimonials
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ TestimonialCard.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ Testimonials.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ TourismAndGuides.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ TrendingDestinations
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ TrendingDestinations.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ WhyChooseUs
β”‚Β Β  β”‚Β Β  β”‚Β Β      β””β”€β”€ WhyChooseUs.jsx
β”‚Β Β  β”‚Β Β  β””β”€β”€ index.js
β”‚Β Β  β”β”€β”€ Packages
β”‚Β Β  β”‚Β Β  β”β”€β”€ PackageDetails
β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ PackageDetails.jsx
β”‚Β Β  β”‚Β Β  β””β”€β”€ Packages
β”‚Β Β  β”‚Β Β      β”β”€β”€ PackageCard.jsx
β”‚Β Β  β”‚Β Β      β””β”€β”€ Packages.jsx
β”‚Β Β  β””β”€β”€ shared
β”‚Β Β      β”β”€β”€ Layout
β”‚Β Β      β”‚Β Β  β”β”€β”€ CommonFooter.jsx
β”‚Β Β      β”‚Β Β  β”β”€β”€ index.js
β”‚Β Β      β”‚Β Β  β”β”€β”€ NavbarDrawer.jsx
β”‚Β Β      β”‚Β Β  β”β”€β”€ Navbar.jsx
β”‚Β Β      β”‚Β Β  β”β”€β”€ navbarLinksConstant.jsx
β”‚Β Β      β”‚Β Β  β”β”€β”€ RootLayout.jsx
β”‚Β Β      β”‚Β Β  β”β”€β”€ SidebarLink.jsx
β”‚Β Β      β”‚Β Β  β”β”€β”€ sidebarLinks.js
β”‚Β Β      β”‚Β Β  β””β”€β”€ Spinner.jsx
β”‚Β Β      β””β”€β”€ ui
β”‚Β Β          β”β”€β”€ Avatar.jsx
β”‚Β Β          β”β”€β”€ Brand.jsx
β”‚Β Β          β”β”€β”€ Button.jsx
β”‚Β Β          β”β”€β”€ DropDown.jsx
β”‚Β Β          β”β”€β”€ index.js
β”‚Β Β          β”β”€β”€ Input.jsx
β”‚Β Β          β””β”€β”€ swalToast.js
β”β”€β”€ pages
β”‚Β Β  β”β”€β”€ AboutUs
β”‚Β Β  β”‚Β Β  β”β”€β”€ AboutUs.jsx
β”‚Β Β  β”‚Β Β  β”β”€β”€ components
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ AboutDeveloper.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ AboutIntro.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ ContactCards.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ DesignPhilosophy.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ FooterNote.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ LiveProjects.jsx
β”‚Β Β  β”‚Β Β  β”β”€β”€ constants
β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ about.constants.js
β”‚Β Β  β”‚Β Β  β””β”€β”€ index.js
β”‚Β Β  β”β”€β”€ Community
β”‚Β Β  β”‚Β Β  β”β”€β”€ CommunityPage.jsx
β”‚Β Β  β”‚Β Β  β””β”€β”€ components
β”‚Β Β  β””β”€β”€ faq
β”‚Β Β      β”β”€β”€ faq.constant.js
β”‚Β Β      β””β”€β”€ FAQ.jsx
β”β”€β”€ router
β”‚Β Β  β”β”€β”€ ErrorPage.jsx
β”‚Β Β  β”β”€β”€ ProtectedRoute.jsx
β”‚Β Β  β””β”€β”€ router.jsx
β””β”€β”€ utils
    β”β”€β”€ axiosInstance.js
    β”β”€β”€ customAlert.js
    β”β”€β”€ deleteData.js
    β”β”€β”€ ErrorMessage.jsx
    β”β”€β”€ fetchData.js
    β”β”€β”€ PageIntro.jsx
    β”β”€β”€ postData.js
    β”β”€β”€ TypeWriterEffect.jsx
    β””β”€β”€ updateData.js

61 directories, 126 files
```

## π“„ Module Files & Contents

### `animation/auth-lottie.json`
```javascripton
{"nm":"5243320","mn":"","layers":[{"ty":4,"nm":"pot","mn":"","sr":1,"st":0,"op":321,"ip":0,"hd":false,"cl":"","ln":"","ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[214.5,222.00000000000003,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 72","ix":1,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0.142],[-15.119,0],[0,-0.14],[15.125,0]],"o":[[0,-0.14],[15.125,0],[0,0.142],[-15.119,0]],"v":[[-27.381,0],[-0.002,-0.256],[27.381,0],[-0.002,0.257]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[164.032,187.49],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 73","ix":2,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-27.58,-20.476],[27.58,-20.476],[27.58,-9.844],[21.912,-9.844],[17.138,20.476],[-16.958,20.476],[-21.867,-9.844],[-27.58,-9.844]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.47,0.47,0.47,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[164.231,197.557],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":1},{"ty":4,"nm":"light leaf","mn":"","sr":1,"st":0,"op":321,"ip":0,"hd":false,"cl":"","ln":"","ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[382.5,406.25,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[382.25,407,0],"ix":2},"r":{"a":1,"k":[{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[0],"t":0},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[10],"t":91},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[-10],"t":150},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":240}],"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"light color leaf start","ix":1,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0.008,-0.003],[-0.048,-0.14],[-0.09,-0.248],[-0.381,-0.992],[-1.542,-3.599],[-5.67,-10.521],[-2.667,-4.439],[-2.174,-3.257],[-1.28,-1.776],[-0.361,-0.5],[-0.107,-0.142],[-0.007,0.005],[0.078,0.126],[0.143,0.221],[0.59,0.883],[2.125,3.285],[2.666,4.431],[2.84,5.25],[3.16,7.156],[0.839,2.021],[0.242,0.567],[0.072,0.162]],"o":[[-0.008,0.004],[0.06,0.166],[0.221,0.576],[0.785,2.044],[3.081,7.198],[2.844,5.258],[2.691,4.424],[2.163,3.263],[0.623,0.862],[0.159,0.211],[0.09,0.116],[0.007,-0.005],[-0.095,-0.149],[-0.343,-0.513],[-1.232,-1.809],[-2.134,-3.277],[-2.643,-4.445],[-5.662,-10.507],[-1.58,-3.578],[-0.417,-0.976],[-0.107,-0.241],[-0.063,-0.133]],"v":[[-20.5,-37.969],[-20.439,-37.752],[-20.216,-37.136],[-19.312,-34.782],[-15.783,-26.208],[-2.47,1.331],[5.886,15.96],[13.243,27.582],[18.483,35.23],[19.959,37.273],[20.354,37.798],[20.501,37.967],[20.394,37.769],[20.04,37.217],[18.64,35.122],[13.531,27.392],[6.272,15.728],[-2.04,1.1],[-15.468,-26.346],[-19.137,-34.854],[-20.125,-37.172],[-20.393,-37.771]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[365.346,372.879],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 75","ix":2,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[-14.826,-1.344],[13.861,0.031]],"o":[[-10.793,-8.551],[11.39,9.357]],"v":[[20.344,8.305],[-20.344,-8.305]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.3198,0.419,0.5002,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[354.134,384.974],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 76","ix":3,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[-14.826,-1.345],[13.86,0.031]],"o":[[-10.793,-8.551],[11.389,9.357]],"v":[[20.343,8.305],[-20.344,-8.305]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.3198,0.419,0.5002,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[342.828,365.855],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 77","ix":4,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[-14.825,-1.345],[13.861,0.031]],"o":[[-10.792,-8.552],[11.389,9.358]],"v":[[20.344,8.305],[-20.344,-8.305]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.3198,0.419,0.5002,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[334.714,349.245],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 78","ix":5,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[-13.984,-2.518],[13.163,1.181]],"o":[[-9.63,-9.087],[10.139,9.909]],"v":[[18.719,9.644],[-18.719,-9.645]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.3198,0.419,0.5002,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[329.844,334.133],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 79","ix":6,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[-7.784,-11.196],[8.13,9.667]],"o":[[-0.405,-13.094],[0.196,14.035]],"v":[[6.194,19.58],[-6.194,-19.58]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.3198,0.419,0.5002,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[339.912,317.707],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 80","ix":7,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[-3.367,-13.551],[4.213,12.274]],"o":[[4.129,-12.308],[-4.648,13.095]],"v":[[-1.417,20.678],[0.571,-20.678]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.3198,0.419,0.5002,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[352.832,330.129],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 81","ix":8,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[-1.736,-13.909],[2.726,12.761]],"o":[[5.55,-11.627],[-6.157,12.336]],"v":[[-3.926,20.366],[2.936,-20.367]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.3198,0.419,0.5002,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[363.503,346.948],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 82","ix":9,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[-1.736,-13.909],[2.726,12.759]],"o":[[5.551,-11.627],[-6.158,12.336]],"v":[[-3.927,20.366],[2.937,-20.366]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.3198,0.419,0.5002,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[371.785,362.257],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"light color leaf end","ix":10,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[-1.735,-13.909],[2.726,12.761]],"o":[[5.551,-11.627],[-6.157,12.336]],"v":[[-3.927,20.367],[2.936,-20.367]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.3198,0.419,0.5002,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[381.02,377.311],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":2},{"ty":4,"nm":"dark leaf ","mn":"","sr":1,"st":0,"op":321,"ip":0,"hd":false,"cl":"","ln":"","ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[166.75,183.25,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[381.25,405.25,0],"ix":2},"r":{"a":1,"k":[{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[0],"t":0},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[-10],"t":51},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[1],"t":114},{"o":{"x":0.167,"y":0},"i":{"x":0.667,"y":1},"s":[-10],"t":174},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":240}],"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"dark color leave","ix":1,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0.009,0.002],[0.059,-0.165],[0.102,-0.3],[0.385,-1.203],[1.246,-4.458],[1.423,-5.953],[1.314,-6.941],[0.863,-6.061],[0.451,-4.607],[0.163,-2.583],[0.046,-0.72],[0.009,-0.204],[-0.009,0],[-0.022,0.173],[-0.035,0.314],[-0.121,1.257],[-0.504,4.598],[-0.862,6.055],[-1.295,6.938],[-1.37,5.959],[-1.209,4.465],[-0.728,2.482],[-0.197,0.693],[-0.053,0.198]],"o":[[-0.008,-0.003],[-0.065,0.193],[-0.218,0.687],[-0.787,2.467],[-1.254,4.456],[-1.398,5.959],[-1.297,6.947],[-0.838,6.064],[-0.459,4.606],[-0.079,1.261],[-0.014,0.315],[-0.005,0.175],[0.008,0.001],[0.024,-0.203],[0.069,-0.717],[0.224,-2.578],[0.497,-4.597],[0.887,-6.051],[1.312,-6.934],[1.396,-5.953],[1.2,-4.465],[0.345,-1.215],[0.082,-0.306],[0.042,-0.169]],"v":[[9.429,-50.148],[9.328,-49.903],[9.079,-49.169],[8.171,-46.33],[5.075,-35.813],[1.018,-20.066],[-3.116,-0.588],[-6.335,19.068],[-8.274,35.214],[-9.211,46.136],[-9.397,49.111],[-9.432,49.885],[-9.427,50.15],[-9.382,49.889],[-9.294,49.118],[-9.011,46.152],[-7.916,35.251],[-5.869,19.134],[-2.614,-0.493],[1.478,-19.959],[5.424,-35.719],[8.362,-46.272],[9.177,-49.138],[9.378,-49.888]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[176.047,136.365],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 85","ix":2,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[-11.829,-13.458],[11.935,11.511]],"o":[[-3.203,-16.411],[3.143,17.61]],"v":[[11.619,24.109],[-11.619,-24.109]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[157.737,137.641],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 86","ix":3,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[-11.829,-13.458],[11.936,11.511]],"o":[[-3.203,-16.412],[3.144,17.61]],"v":[[11.619,24.109],[-11.619,-24.109]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[161.637,111.574],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 87","ix":4,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[-11.831,-13.459],[11.935,11.512]],"o":[[-3.205,-16.411],[3.143,17.611]],"v":[[11.619,24.11],[-11.62,-24.11]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[166.5,90.342],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 88","ix":5,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[-10.264,-13.785],[10.511,11.936]],"o":[[-1.817,-15.916],[1.67,17.055]],"v":[[9.261,23.933],[-9.26,-23.933]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[173.089,73.108],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 89","ix":6,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[1.28,-16.23],[0.11,15.18]],"o":[[9,-11.773],[-9.854,12.422]],"v":[[-8.694,22.234],[8.585,-22.234]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[193.561,67.102],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 90","ix":7,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[6.773,-14.625],[-5.129,14.211]],"o":[[12.351,-7.329],[-13.36,7.588]],"v":[[-15.624,17.239],[15.624,-17.238]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[195.415,88.305],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 91","ix":8,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[8.436,-13.587],[-6.762,13.404]],"o":[[13.092,-5.557],[-14.122,5.673]],"v":[[-17.505,14.947],[17.506,-14.947]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[192.548,111.779],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 92","ix":9,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[8.437,-13.587],[-6.762,13.406]],"o":[[13.092,-5.557],[-14.122,5.674]],"v":[[-17.506,14.947],[17.505,-14.947]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[188.76,132.011],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"dark leaf end","ix":10,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[8.437,-13.587],[-6.762,13.404]],"o":[[13.092,-5.558],[-14.122,5.674]],"v":[[-17.505,14.947],[17.505,-14.947]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[185.977,152.813],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":3},{"ty":4,"nm":"User","mn":"","sr":1,"st":0,"op":321,"ip":0,"hd":false,"cl":"","ln":"","ddd":0,"bm":0,"hasMask":false,"td":1,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[214.5,272.125,0],"t":0,"ti":[0,13.198,0],"to":[0,-6.56,0]},{"o":{"x":0.333,"y":0},"i":{"x":0.833,"y":0.833},"s":[214.5,219.10699999999997,0],"t":23,"ti":[0,-0.482,0],"to":[0,-3.611,0]},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[214.5,222.00000000000003,0],"t":30,"ti":[0,0,0],"to":[0,0,0]},{"o":{"x":0.167,"y":0.167},"i":{"x":0.667,"y":1},"s":[214.5,222.00000000000003,0],"t":70,"ti":[0,-3.611,0],"to":[0,-0.482,0]},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[214.5,219.10699999999997,0],"t":77,"ti":[0,-6.56,0],"to":[0,13.198,0]},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[214.5,272.125,0],"t":100}],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"user","ix":1,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[19.005,2.87],[-0.027,5.602],[6.882,0.032],[0.03,-7.338],[-4.66,-1.94],[0,0],[0,0]],"o":[[4.61,-1.934],[0.03,-7.338],[-6.878,-0.032],[-0.023,5.653],[-19.171,2.888],[0,0],[0,0]],"v":[[4.614,0.866],[12.529,-11.423],[0.125,-24.768],[-12.386,-11.539],[-4.449,0.866],[-22.751,28.09],[22.584,28.299]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.851,0.8784,0.902,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[177.125,-133.893],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":4},{"ty":4,"nm":"user matt","mn":"","sr":1,"st":0,"op":321,"ip":0,"hd":false,"cl":"","ln":"","ddd":0,"bm":0,"tt":1,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[214.5,222.00000000000003,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Rectangle 1","ix":1,"cix":2,"np":3,"it":[{"ty":"rc","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Rect","nm":"Rectangle Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"s":{"a":0,"k":[66.625,53.5],"ix":2}},{"ty":"st","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":1,"lj":1,"ml":4,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"d":[],"c":{"a":0,"k":[0.6314,0.6784,0.7176,1],"ix":3}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.1572,0.5453,0.8628,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[174.938,-136.125],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":5},{"ty":4,"nm":"Enter OTP","mn":"","sr":1,"st":0,"op":321,"ip":0,"hd":false,"cl":"","ln":"","ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[74,44.25,0],"ix":1},"s":{"a":1,"k":[{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[0,0,100],"t":55},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[110.00000000000001,110.00000000000001,100],"t":70},{"o":{"x":0.167,"y":0},"i":{"x":0.667,"y":1},"s":[100,100,100],"t":74},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[100,100,100],"t":191},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[110.00000000000001,110.00000000000001,100],"t":195},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0,0,100],"t":210}],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[288.5,266.25,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"enter code start","ix":1,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,-0.145],[44.672,0],[0,0.143],[-44.687,0]],"o":[[0,0.143],[-44.687,0],[0,-0.145],[44.672,0]],"v":[[80.897,0.001],[0.004,0.26],[-80.897,0.001],[0.004,-0.26]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[74.087,11.716],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 111","ix":2,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,-1.352],[1.353,0],[0,1.353],[-1.353,0]],"o":[[0,1.353],[-1.353,0],[0,-1.352],[1.353,0]],"v":[[2.449,0],[0,2.45],[-2.449,0],[0,-2.45]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[17.222,4.814],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 112","ix":3,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,-1.352],[1.353,0],[0,1.353],[-1.353,0]],"o":[[0,1.353],[-1.353,0],[0,-1.352],[1.353,0]],"v":[[2.45,0],[0,2.45],[-2.45,0],[0,-2.45]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[10.291,4.814],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 113","ix":4,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,-1.352],[1.352,0],[0,1.353],[-1.353,0]],"o":[[0,1.353],[-1.353,0],[0,-1.352],[1.352,0]],"v":[[2.449,0],[0,2.45],[-2.449,0],[0,-2.45]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[3.231,4.814],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"under score","ix":5,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,-0.144],[2.891,0],[0,0.144],[-2.892,0]],"o":[[0,0.144],[-2.892,0],[0,-0.144],[2.891,0]],"v":[[5.234,0],[0,0.26],[-5.234,0],[0,-0.26]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.47,0.47,0.47,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[18.228,61.388],"t":131,"ti":[-4.75,0],"to":[4.75,0]},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[46.728,61.388],"t":132,"ti":[0,0],"to":[0,0]},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[46.728,61.388],"t":141,"ti":[-4.833,0],"to":[4.833,0]},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[75.728,61.388],"t":142,"ti":[0,0],"to":[0,0]},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[75.728,61.388],"t":150,"ti":[-4.542,0],"to":[4.542,0]},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[102.978,61.388],"t":151,"ti":[0,0],"to":[0,0]},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[102.978,61.388],"t":160,"ti":[-4.708,0],"to":[4.708,0]},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[131.228,61.388],"t":161}],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[100],"t":170},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":171}],"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"0","ix":6,"cix":2,"np":4,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,2.743],[1.857,0],[0,-2.744],[-1.857,0]],"o":[[0,-2.744],[-1.857,0],[0,2.743],[1.857,0]],"v":[[3.138,0.001],[0,-4.333],[-3.137,0.001],[0,4.334]]},"ix":2}},{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 2","ix":2,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,3.081],[-2.265,0],[0,-3.081],[2.265,0]],"o":[[0,-3.081],[2.265,0],[0,3.081],[-2.265,0]],"v":[[-3.855,0.001],[0,-4.994],[3.855,0.001],[0,4.994]]},"ix":2}},{"ty":"mm","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Filter - Merge","nm":"Merge Paths 1","mm":1},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.47,0.47,0.47,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[121.013,121.013],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[131.212,53.612],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":170},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[100],"t":171}],"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"7","ix":7,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[3.531,-4.923],[3.531,-4.418],[-0.704,4.923],[-1.492,4.923],[2.701,-4.277],[-2.827,-4.277],[-2.827,-2.392],[-3.531,-2.392],[-3.531,-4.923]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.47,0.47,0.47,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[121.013,121.013],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[103.552,53.612],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":160},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[100],"t":161}],"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"3","ix":8,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,-1.604],[2.265,0],[0.689,0.789],[0,0],[-1.351,0],[0,1.337],[1.97,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,1.632],[-1.449,0],[0,0],[0.605,0.689],[1.773,0],[0,-1.322],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[2.236,0.055]],"v":[[3.461,2.117],[0.014,4.959],[-3.461,3.636],[-3.095,3.088],[0.014,4.298],[2.729,2.117],[-0.141,-0.064],[-0.76,-0.064],[-0.76,-0.584],[2.153,-4.313],[-3.095,-4.313],[-3.095,-4.959],[3.081,-4.959],[3.081,-4.453],[0.127,-0.668]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.47,0.47,0.47,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[121.013,121.013],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[75.718,53.647],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":150},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[100],"t":151}],"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"4","ix":9,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[5.116,2.678],[2.591,2.678],[2.591,6.008],[1.734,6.008],[1.734,2.678],[-5.115,2.678],[-5.115,2.042],[1.407,-6.008],[2.385,-6.008],[-4.016,1.906],[1.751,1.906],[1.751,-1.029],[2.591,-1.029],[2.591,1.906],[5.116,1.906]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.47,0.47,0.47,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[46.755,53.674],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":141},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[100],"t":142}],"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"6","ix":10,"cix":2,"np":4,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,1.734],[2.026,0],[0,-1.614],[-2.249,0]],"o":[[0,-1.716],[-1.974,0],[0,1.407],[1.871,0]],"v":[[3.535,2.489],[0.274,-0.343],[-3.057,2.523],[0.377,5.338]]},"ix":2}},{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 2","ix":2,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,-2.163],[2.301,0],[0,3.76],[-3.176,0],[-0.738,-0.446],[0,0],[0.909,0],[0,-3.484],[-0.085,-0.55],[-1.821,0]],"o":[[0,2.198],[-3.158,0],[0,-4.068],[1.029,0],[0,0],[-0.617,-0.394],[-2.695,0],[0,0.361],[0.499,-1.579],[2.403,0]],"v":[[4.411,2.471],[0.411,6.095],[-4.411,0.068],[0.927,-6.094],[3.656,-5.477],[3.295,-4.772],[0.927,-5.322],[-3.537,-0.069],[-3.434,1.373],[0.395,-1.098]]},"ix":2}},{"ty":"mm","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Filter - Merge","nm":"Merge Paths 1","mm":1},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.47,0.47,0.47,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[19.055,53.674],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":131},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[100],"t":132}],"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 118","ix":11,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[2.183,0],[0,0],[0,2.183],[0,0],[-2.183,0],[0,0],[0,-2.184],[0,0]],"o":[[0,0],[-2.183,0],[0,0],[0,-2.184],[0,0],[2.183,0],[0,0],[0,2.183]],"v":[[7.342,15.386],[-7.341,15.386],[-11.294,11.434],[-11.294,-11.434],[-7.341,-15.386],[7.342,-15.386],[11.294,-11.434],[11.294,11.434]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.851,0.8784,0.902,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[103.667,53.769],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 119","ix":12,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[2.184,0],[0,0],[0,2.183],[0,0],[-2.184,0],[0,0],[0,-2.184],[0,0]],"o":[[0,0],[-2.184,0],[0,0],[0,-2.184],[0,0],[2.184,0],[0,0],[0,2.183]],"v":[[7.342,15.386],[-7.34,15.386],[-11.293,11.434],[-11.293,-11.434],[-7.34,-15.386],[7.342,-15.386],[11.293,-11.434],[11.293,11.434]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.851,0.8784,0.902,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[75.459,53.769],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 120","ix":13,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[2.183,0],[0,0],[0,2.183],[0,0],[-2.183,0],[0,0],[0,-2.184],[0,0]],"o":[[0,0],[-2.183,0],[0,0],[0,-2.184],[0,0],[2.183,0],[0,0],[0,2.183]],"v":[[7.342,15.386],[-7.341,15.386],[-11.294,11.434],[-11.294,-11.434],[-7.341,-15.386],[7.342,-15.386],[11.294,-11.434],[11.294,11.434]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.851,0.8784,0.902,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 120","ix":3,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[2.183,0],[0,0],[0,2.183],[0,0],[-2.183,0],[0,0],[0,-2.184],[0,0]],"o":[[0,0],[-2.183,0],[0,0],[0,-2.184],[0,0],[2.183,0],[0,0],[0,2.183]],"v":[[7.342,15.386],[-7.341,15.386],[-11.294,11.434],[-11.294,-11.434],[-7.341,-15.386],[7.342,-15.386],[11.294,-11.434],[11.294,11.434]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.851,0.8784,0.902,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[84.502,-0.356],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[47.252,53.769],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 121","ix":14,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[2.183,0],[0,0],[0,2.183],[0,0],[-2.183,0],[0,0],[0,-2.184],[0,0]],"o":[[0,0],[-2.183,0],[0,0],[0,-2.184],[0,0],[2.183,0],[0,0],[0,2.183]],"v":[[7.342,15.386],[-7.341,15.386],[-11.294,11.434],[-11.294,-11.434],[-7.341,-15.386],[7.342,-15.386],[11.294,-11.434],[11.294,11.434]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.851,0.8784,0.902,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[19.045,53.769],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 122","ix":15,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[2.34,1.9],[2.34,3.023],[-2.34,3.023],[-2.34,-3.022],[2.228,-3.022],[2.228,-1.899],[-0.95,-1.899],[-0.95,-0.587],[1.857,-0.587],[1.857,0.502],[-0.95,0.502],[-0.95,1.9]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[100.321,25.707],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 123","ix":16,"cix":2,"np":4,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,1.157],[1.2,0],[0,0],[0,0]],"o":[[1.2,0],[0,-1.157],[0,0],[0,0],[0,0]],"v":[[-0.362,1.875],[1.624,0.001],[-0.362,-1.873],[-1.64,-1.873],[-1.64,1.875]]},"ix":2}},{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 2","ix":2,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,-1.831],[1.979,0],[0,0]],"o":[[0,0],[1.979,0],[0,1.831],[0,0],[0,0]],"v":[[-3.04,-3.022],[-0.294,-3.022],[3.04,0.001],[-0.294,3.023],[-3.04,3.023]]},"ix":2}},{"ty":"mm","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Filter - Merge","nm":"Merge Paths 1","mm":1},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[93.885,25.707],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 124","ix":17,"cix":2,"np":4,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,1.148],[1.08,0],[0,-1.149],[-1.079,0]],"o":[[0,-1.149],[-1.079,0],[0,1.148],[1.08,0]],"v":[[1.891,0.001],[0,-1.934],[-1.892,0.001],[0,1.936]]},"ix":2}},{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 2","ix":2,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,1.796],[-1.908,0],[0,-1.806],[1.9,0]],"o":[[0,-1.797],[1.9,0],[0,1.805],[-1.908,0]],"v":[[-3.307,0.001],[0,-3.126],[3.307,0.001],[0,3.127]]},"ix":2}},{"ty":"mm","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Filter - Merge","nm":"Merge Paths 1","mm":1},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[86.482,25.707],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 125","ix":18,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,1.822],[-1.883,0],[-0.571,-0.691],[0,0],[0.604,0],[0,-1.141],[-1.131,0],[-0.406,0.474],[0,0],[1.053,0]],"o":[[0,-1.822],[1.045,0],[0,0],[-0.406,-0.466],[-1.131,0],[0,1.14],[0.604,0],[0,0],[-0.571,0.699],[-1.875,0]],"v":[[-2.885,0.001],[0.397,-3.126],[2.885,-2.055],[1.986,-1.226],[0.466,-1.934],[-1.469,0.001],[0.466,1.936],[1.986,1.218],[2.885,2.048],[0.389,3.127]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[79.856,25.707],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 126","ix":19,"cix":2,"np":4,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0.856,0],[0,0],[0,0],[0,0],[0,0.656]],"o":[[0,0],[0,0],[0,0],[0.856,0],[0,-0.665]],"v":[[-0.138,-1.882],[-1.278,-1.882],[-1.278,0.226],[-0.138,0.226],[1.149,-0.828]]},"ix":2}},{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 2","ix":2,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,-1.357],[0.785,-0.337],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[1.614,0],[0,0.906],[0,0],[0,0]],"v":[[1.175,3.023],[0.009,1.339],[-0.06,1.339],[-1.278,1.339],[-1.278,3.023],[-2.677,3.023],[-2.677,-3.022],[-0.06,-3.022],[2.565,-0.828],[1.322,1.08],[2.677,3.023]]},"ix":2}},{"ty":"mm","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Filter - Merge","nm":"Merge Paths 1","mm":1},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[71.234,25.707],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 127","ix":20,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[2.34,1.9],[2.34,3.023],[-2.34,3.023],[-2.34,-3.022],[2.228,-3.022],[2.228,-1.899],[-0.949,-1.899],[-0.949,-0.587],[1.856,-0.587],[1.856,0.502],[-0.949,0.502],[-0.949,1.9]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[65.1,25.707],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 128","ix":21,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-0.7,-1.882],[-2.634,-1.882],[-2.634,-3.022],[2.634,-3.022],[2.634,-1.882],[0.7,-1.882],[0.7,3.023],[-0.7,3.023]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[59.374,25.707],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 129","ix":22,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[2.773,-3.022],[2.773,3.023],[1.624,3.023],[-1.39,-0.647],[-1.39,3.023],[-2.772,3.023],[-2.772,-3.022],[-1.616,-3.022],[1.391,0.647],[1.391,-3.022]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[53.214,25.707],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 130","ix":23,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[2.341,1.9],[2.341,3.023],[-2.34,3.023],[-2.34,-3.022],[2.228,-3.022],[2.228,-1.899],[-0.949,-1.899],[-0.949,-0.587],[1.857,-0.587],[1.857,0.502],[-0.949,0.502],[-0.949,1.9]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[46.985,25.707],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 131","ix":24,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[-0.823,0.16],[-1.165,1.154],[-0.344,0.941],[-0.073,0.541],[0.004,0.6],[0.009,3.114],[0.035,22.27],[0.003,2.914],[0.001,1.489],[0.611,1.363],[1.343,0.673],[0.754,0.076],[0.782,0.01],[3.274,-0.003],[14.726,-0.008],[33.987,-0.007],[0.898,-0.477],[0.548,-0.853],[0.064,-1.009],[0.011,-1.039],[0,-4.14],[0.001,-8.014],[0.002,-7.71],[0.002,-3.771],[-0.031,-0.913],[-0.419,-0.793],[-1.735,-0.367],[-0.922,-0.02],[-0.909,-0.001],[-1.794,-0.001],[-3.489,-0.001],[-6.549,-0.003],[-11.138,-0.01],[-12.467,-0.02],[-3.289,-0.011],[-0.85,-0.006],[0,0],[0.841,-0.009],[1.632,-0.012],[6.222,-0.022],[22.271,-0.034],[13.097,-0.012],[6.976,-0.004],[3.588,-0.002],[1.817,-0.001],[0.914,0],[0.949,0.217],[0.91,1.712],[0.046,0.972],[0.008,0.948],[0.002,3.855],[0.002,8.015],[0.001,8.277],[0,4.197],[-0.053,1.093],[-0.587,0.925],[-0.959,0.539],[-1.105,0.005],[-29.453,-0.007],[-13.098,-0.008],[-3.16,-0.002],[-0.818,-0.062],[-0.713,-0.361],[-0.584,-1.455],[-0.013,-0.776],[-0.002,-0.746],[0.001,-1.458],[0.003,-2.785],[0.02,-12.467],[0.007,-2.4],[0.047,-0.56],[0.194,-0.475],[0.588,-0.579],[0.815,-0.161],[0.214,0.005]],"o":[[-0.002,-0.028],[0.804,-0.177],[0.574,-0.575],[0.186,-0.467],[0.041,-0.543],[-0.006,-2.4],[-0.02,-12.467],[-0.003,-2.785],[-0.001,-1.458],[-0.036,-1.49],[-0.551,-1.365],[-0.669,-0.337],[-0.743,-0.057],[-3.16,0.003],[-13.098,0.007],[-29.453,0.007],[-1.021,0.005],[-0.883,0.497],[-0.541,0.853],[-0.05,1.011],[0,4.197],[-0.001,8.277],[-0.002,8.015],[-0.002,3.855],[0.007,0.937],[0.043,0.9],[0.842,1.588],[0.856,0.202],[0.914,0],[1.817,0.001],[3.588,0.002],[6.976,0.005],[13.097,0.012],[22.271,0.035],[6.222,0.021],[1.632,0.011],[0.841,0.009],[0,0],[-0.85,0.005],[-3.289,0.011],[-12.467,0.019],[-11.138,0.01],[-6.549,0.004],[-3.489,0.002],[-1.794,0.001],[-0.909,0],[-0.902,-0.019],[-1.873,-0.395],[-0.452,-0.856],[-0.033,-0.959],[-0.001,-3.771],[-0.002,-7.71],[-0.001,-8.014],[0,-4.14],[0.012,-1.057],[0.07,-1.094],[0.595,-0.925],[0.973,-0.518],[33.987,0.007],[14.726,0.008],[3.274,0.002],[0.796,0.012],[0.804,0.083],[1.43,0.72],[0.297,0.725],[0.003,0.754],[-0.001,1.489],[-0.003,2.914],[-0.035,22.27],[-0.009,3.114],[-0.001,0.598],[-0.079,0.553],[-0.36,0.958],[-1.198,1.161],[-0.417,0.065],[-0.213,0.007]],"v":[[74.559,44.922],[75.816,44.771],[79.026,43.022],[80.472,40.739],[80.829,39.212],[80.858,37.491],[80.835,29.212],[80.752,-23.551],[80.743,-32.1],[80.739,-36.521],[80.286,-40.9],[77.329,-44.105],[75.172,-44.734],[72.835,-44.764],[63.183,-44.757],[21.364,-44.734],[-74.456,-44.712],[-77.387,-43.973],[-79.596,-41.924],[-80.561,-39.083],[-80.586,-35.952],[-80.587,-23.445],[-80.591,1.002],[-80.597,24.6],[-80.602,36.04],[-80.587,38.848],[-79.883,41.427],[-75.747,44.547],[-73.054,44.684],[-70.318,44.686],[-64.9,44.689],[-54.284,44.694],[-33.984,44.706],[2.452,44.739],[55.213,44.821],[69.557,44.87],[73.287,44.897],[74.559,44.922],[73.287,44.949],[69.557,44.976],[55.213,45.025],[2.452,45.106],[-33.984,45.138],[-54.284,45.152],[-64.9,45.157],[-70.318,45.16],[-73.054,45.161],[-75.847,45.017],[-80.311,41.657],[-81.073,38.872],[-81.091,36.04],[-81.095,24.6],[-81.101,1.002],[-81.105,-23.445],[-81.106,-35.952],[-81.08,-39.124],[-80.033,-42.208],[-77.636,-44.43],[-74.456,-45.234],[21.364,-45.212],[63.183,-45.188],[72.835,-45.182],[75.213,-45.146],[77.514,-44.471],[80.659,-41.049],[81.126,-38.771],[81.133,-36.521],[81.129,-32.1],[81.12,-23.551],[81.037,29.212],[81.014,37.491],[80.971,39.226],[80.594,40.783],[79.101,43.096],[75.826,44.823],[74.879,44.919]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[73.806,40.816],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Enter code end","ix":25,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[3.522,0],[0,0],[0,3.523],[0,0],[-3.523,0],[0,0],[0,-3.523],[0,0]],"o":[[0,0],[-3.523,0],[0,0],[0,-3.523],[0,0],[3.522,0],[0,0],[0,3.523]],"v":[[74.513,44.947],[-74.514,44.947],[-80.892,38.57],[-80.892,-38.57],[-74.514,-44.948],[74.513,-44.948],[80.891,-38.57],[80.891,38.57]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[1,1,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[73.852,40.792],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":6},{"ty":4,"nm":"OTP message","mn":"","sr":1,"st":0,"op":321,"ip":0,"hd":false,"cl":"","ln":"","ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[-64.938,-62.969,0],"ix":1},"s":{"a":1,"k":[{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[0,0,100],"t":82},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[110.00000000000001,110.00000000000001,100],"t":92},{"o":{"x":0.167,"y":0},"i":{"x":0.667,"y":1},"s":[100,100,100],"t":96},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[100,100,100],"t":130},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[110.00000000000001,110.00000000000001,100],"t":134},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0,0,100],"t":144}],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[149.563,159.031,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"0","ix":1,"cix":2,"np":4,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,2.743],[1.857,0],[0,-2.744],[-1.857,0]],"o":[[0,-2.744],[-1.857,0],[0,2.743],[1.857,0]],"v":[[3.138,0.001],[0,-4.333],[-3.137,0.001],[0,4.334]]},"ix":2}},{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 2","ix":2,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,3.081],[-2.265,0],[0,-3.081],[2.265,0]],"o":[[0,-3.081],[2.265,0],[0,3.081],[-2.265,0]],"v":[[-3.855,0.001],[0,-4.994],[3.855,0.001],[0,4.994]]},"ix":2}},{"ty":"mm","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Filter - Merge","nm":"Merge Paths 1","mm":1},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.47,0.47,0.47,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[-41.6,-91.045],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"7","ix":2,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[3.531,-4.923],[3.531,-4.418],[-0.704,4.923],[-1.492,4.923],[2.701,-4.277],[-2.827,-4.277],[-2.827,-2.392],[-3.531,-2.392],[-3.531,-4.923]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.47,0.47,0.47,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[-54.011,-91.044],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"3","ix":3,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,-1.604],[2.265,0],[0.689,0.789],[0,0],[-1.351,0],[0,1.337],[1.97,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,1.632],[-1.449,0],[0,0],[0.605,0.689],[1.773,0],[0,-1.322],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[2.236,0.055]],"v":[[3.461,2.117],[0.014,4.959],[-3.461,3.636],[-3.095,3.088],[0.014,4.298],[2.729,2.117],[-0.141,-0.064],[-0.76,-0.064],[-0.76,-0.584],[2.153,-4.313],[-3.095,-4.313],[-3.095,-4.959],[3.081,-4.959],[3.081,-4.453],[0.127,-0.668]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.47,0.47,0.47,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[-65.844,-91.009],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 97","ix":4,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[4.193,2.194],[2.125,2.194],[2.125,4.923],[1.422,4.923],[1.422,2.194],[-4.192,2.194],[-4.192,1.673],[1.154,-4.923],[1.956,-4.923],[-3.291,1.561],[1.436,1.561],[1.436,-0.845],[2.125,-0.845],[2.125,1.561],[4.193,1.561]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.47,0.47,0.47,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[-77.51,-91.044],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 98","ix":5,"cix":2,"np":4,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,1.42],[1.66,0],[0,-1.323],[-1.843,0]],"o":[[0,-1.408],[-1.618,0],[0,1.153],[1.534,0]],"v":[[2.898,2.041],[0.226,-0.282],[-2.504,2.069],[0.31,4.376]]},"ix":2}},{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 2","ix":2,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,-1.773],[1.886,0],[0,3.081],[-2.602,0],[-0.605,-0.365],[0,0],[0.746,0],[0,-2.856],[-0.07,-0.451],[-1.491,0]],"o":[[0,1.801],[-2.588,0],[0,-3.334],[0.845,0],[0,0],[-0.507,-0.323],[-2.208,0],[0,0.296],[0.408,-1.294],[1.97,0]],"v":[[3.615,2.026],[0.337,4.994],[-3.615,0.056],[0.76,-4.994],[2.998,-4.488],[2.702,-3.911],[0.76,-4.361],[-2.897,-0.056],[-2.813,1.126],[0.324,-0.9]]},"ix":2}},{"ty":"mm","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Filter - Merge","nm":"Merge Paths 1","mm":1},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.47,0.47,0.47,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[-90.005,-91.045],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 99","ix":6,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[1.958,0],[0,0],[0,1.958],[0,0],[-1.958,0],[0,0],[0,-1.958],[0,0]],"o":[[0,0],[-1.958,0],[0,0],[0,-1.958],[0,0],[1.958,0],[0,0],[0,1.958]],"v":[[31.347,10.168],[-31.349,10.168],[-34.894,6.622],[-34.894,-6.622],[-31.349,-10.168],[31.347,-10.168],[34.894,-6.622],[34.894,6.622]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.851,0.8784,0.902,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[-65.682,-90.264],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 100","ix":7,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[1.435,1.165],[1.435,1.853],[-1.435,1.853],[-1.435,-1.853],[1.366,-1.853],[1.366,-1.164],[-0.582,-1.164],[-0.582,-0.36],[1.139,-0.36],[1.139,0.307],[-0.582,0.307],[-0.582,1.165]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[-50.486,-106.178],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 101","ix":8,"cix":2,"np":4,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0.71],[0.736,0],[0,0],[0,0]],"o":[[0.736,0],[0,-0.709],[0,0],[0,0],[0,0]],"v":[[-0.222,1.149],[0.995,0],[-0.222,-1.149],[-1.007,-1.149],[-1.007,1.149]]},"ix":2}},{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 2","ix":2,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,-1.122],[1.213,0],[0,0]],"o":[[0,0],[1.213,0],[0,1.123],[0,0],[0,0]],"v":[[-1.863,-1.853],[-0.181,-1.853],[1.864,0],[-0.181,1.853],[-1.863,1.853]]},"ix":2}},{"ty":"mm","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Filter - Merge","nm":"Merge Paths 1","mm":1},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[-54.435,-106.178],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 102","ix":9,"cix":2,"np":4,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0.704],[0.662,0],[0,-0.704],[-0.661,0]],"o":[[0,-0.704],[-0.661,0],[0,0.704],[0.662,0]],"v":[[1.16,-0.001],[-0.001,-1.187],[-1.16,-0.001],[-0.001,1.185]]},"ix":2}},{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 2","ix":2,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,1.101],[-1.17,0],[0,-1.107],[1.165,0]],"o":[[0,-1.101],[1.165,0],[0,1.107],[-1.17,0]],"v":[[-2.027,-0.001],[-0.001,-1.917],[2.027,-0.001],[-0.001,1.917]]},"ix":2}},{"ty":"mm","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Filter - Merge","nm":"Merge Paths 1","mm":1},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[-58.977,-106.177],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 103","ix":10,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,1.117],[-1.154,0],[-0.35,-0.424],[0,0],[0.371,0],[0,-0.698],[-0.693,0],[-0.249,0.291],[0,0],[0.646,0]],"o":[[0,-1.117],[0.641,0],[0,0],[-0.249,-0.285],[-0.693,0],[0,0.699],[0.371,0],[0,0],[-0.35,0.429],[-1.149,0]],"v":[[-1.769,-0.001],[0.243,-1.917],[1.768,-1.26],[1.217,-0.753],[0.285,-1.187],[-0.901,-0.001],[0.285,1.185],[1.217,0.746],[1.768,1.254],[0.239,1.917]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[-63.042,-106.177],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 104","ix":11,"cix":2,"np":4,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0.525,0],[0,0],[0,0],[0,0],[0,0.402]],"o":[[0,0],[0,0],[0,0],[0.525,0],[0,-0.408]],"v":[[-0.085,-1.155],[-0.783,-1.155],[-0.783,0.137],[-0.085,0.137],[0.704,-0.508]]},"ix":2}},{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 2","ix":2,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,-0.831],[0.482,-0.206],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.99,0],[0,0.556],[0,0],[0,0]],"v":[[0.72,1.853],[0.005,0.821],[-0.037,0.821],[-0.783,0.821],[-0.783,1.853],[-1.641,1.853],[-1.641,-1.853],[-0.037,-1.853],[1.573,-0.508],[0.81,0.662],[1.641,1.853]]},"ix":2}},{"ty":"mm","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Filter - Merge","nm":"Merge Paths 1","mm":1},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[-68.331,-106.178],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 105","ix":12,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,1.091],[0,0],[0,0],[0,0],[-0.519,0],[0,0.704],[0,0],[0,0],[0,0],[1.054,0]],"o":[[0,0],[0,0],[0,0],[0,0.704],[0.524,0],[0,0],[0,0],[0,0],[0,1.091],[-1.053,0]],"v":[[-1.678,0.19],[-1.678,-1.885],[-0.82,-1.885],[-0.82,0.159],[0.006,1.154],[0.831,0.159],[0.831,-1.885],[1.678,-1.885],[1.678,0.19],[-0.001,1.885]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[-72.503,-106.146],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 106","ix":13,"cix":2,"np":4,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0.704],[0.662,0],[0,-0.704],[-0.662,0]],"o":[[0,-0.704],[-0.662,0],[0,0.704],[0.662,0]],"v":[[1.159,-0.001],[0,-1.187],[-1.16,-0.001],[0,1.185]]},"ix":2}},{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 2","ix":2,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,1.101],[-1.17,0],[0,-1.107],[1.165,0]],"o":[[0,-1.101],[1.165,0],[0,1.107],[-1.17,0]],"v":[[-2.028,-0.001],[0,-1.917],[2.028,-0.001],[0,1.917]]},"ix":2}},{"ty":"mm","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Filter - Merge","nm":"Merge Paths 1","mm":1},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[-76.827,-106.177],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 107","ix":14,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[0.426,0.54],[0.426,1.853],[-0.432,1.853],[-0.432,0.53],[-1.867,-1.853],[-0.956,-1.853],[0.035,-0.206],[1.024,-1.853],[1.867,-1.853]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[-80.694,-106.178],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 108","ix":15,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[-0.009,0.041],[-0.256,-0.006],[-0.471,-0.185],[-0.506,-0.553],[-0.121,-0.978],[-0.032,-7.119],[-0.011,-4.264],[-0.005,-2.295],[0.122,-0.612],[0.368,-0.501],[1.29,-0.047],[11.891,-0.017],[0,0],[2,-3.083],[0,0],[0,0],[2.396,3.07],[0,0],[9.664,-0.002],[1.121,0],[0.609,0.054],[0.512,0.3],[0.255,1.153],[0.006,0.537],[0,0],[-0.001,4.254],[-0.003,4.093],[-0.002,2.002],[0,0],[-0.19,0.489],[-0.921,0.474],[-0.511,0.053],[-0.486,0.006],[-0.953,-0.001],[-1.852,-0.002],[-3.477,-0.005],[-5.914,-0.01],[-6.63,-0.019],[-1.759,-0.011],[-0.464,-0.006],[0,0],[0.446,-0.008],[0.858,-0.011],[3.295,-0.021],[11.813,-0.035],[6.952,-0.011],[3.703,-0.005],[1.904,-0.002],[0.966,-0.001],[0.442,-0.043],[0.408,-0.211],[0.331,-0.87],[0.003,-0.469],[0,0],[-0.002,-2.047],[-0.002,-4.255],[-0.001,-4.395],[0,0],[-0.122,-0.499],[-0.903,-0.522],[-0.52,-0.058],[-0.551,-0.009],[-1.128,0],[-9.001,-0.002],[0,0],[0,0],[-2.189,-2.81],[0,0],[-1.821,2.797],[0,0],[0,0],[-9.795,-0.009],[-0.663,0.916],[-0.108,0.545],[-0.011,0.578],[-0.004,2.132],[-0.009,3.559],[-0.01,3.866],[0.489,0.532],[0.455,0.187]],"o":[[0,0],[0.252,0.026],[0.469,0.178],[0.512,0.538],[0.074,3.865],[0.009,3.559],[0.004,2.132],[-0.01,0.566],[-0.117,0.601],[-0.725,1.011],[-9.8,0.015],[0,0],[-1.816,2.799],[0,0],[0,0],[-2.192,-2.808],[0,0],[-9.001,0.002],[-1.128,0],[-0.57,-0.01],[-0.592,-0.066],[-1.026,-0.594],[-0.139,-0.583],[0,0],[0.001,-4.395],[0.002,-4.255],[0.001,-2.047],[0,0],[0.003,-0.527],[0.375,-0.981],[0.46,-0.236],[0.525,-0.048],[0.966,0.001],[1.904,0.002],[3.703,0.004],[6.952,0.011],[11.813,0.034],[3.294,0.022],[0.858,0.011],[0.446,0.009],[0,0],[-0.464,0.006],[-1.759,0.011],[-6.63,0.02],[-5.914,0.009],[-3.477,0.005],[-1.852,0.002],[-0.953,0],[-0.478,0.006],[-0.456,0.048],[-0.817,0.422],[-0.167,0.433],[0,0],[0.001,2.002],[0.002,4.093],[0.002,4.254],[0,0],[0.005,0.563],[0.224,1.011],[0.45,0.263],[0.504,0.047],[1.121,0],[9.664,0.002],[0,0],[0,0],[2.394,3.072],[0,0],[2.005,-3.08],[0,0],[0,0],[11.885,0.01],[1.168,-0.039],[0.335,-0.454],[0.112,-0.538],[0.005,-2.295],[0.011,-4.264],[0.019,-7.099],[-0.104,-0.941],[-0.481,-0.546],[-0.927,-0.366]],"v":[[38.979,-26.331],[39.363,-26.332],[40.474,-26.085],[42.016,-25.043],[43.083,-22.727],[43.176,-6.124],[43.206,5.629],[43.219,12.271],[43.139,14.04],[42.398,15.719],[39.168,17.452],[6.486,17.499],[6.688,17.391],[0.91,26.296],[0.719,26.587],[0.506,26.314],[-6.439,17.417],[-6.24,17.514],[-34.323,17.52],[-37.697,17.52],[-39.404,17.491],[-41.083,16.932],[-43.122,14.156],[-43.23,12.451],[-43.23,10.801],[-43.225,-2.178],[-43.218,-14.705],[-43.215,-20.78],[-43.214,-22.276],[-42.924,-23.818],[-40.883,-26.092],[-39.41,-26.539],[-37.932,-26.569],[-35.055,-26.565],[-29.419,-26.56],[-18.643,-26.547],[0.7,-26.514],[28.708,-26.432],[36.323,-26.384],[38.303,-26.358],[38.979,-26.331],[38.303,-26.305],[36.323,-26.279],[28.708,-26.229],[0.7,-26.146],[-18.643,-26.116],[-29.419,-26.102],[-35.055,-26.095],[-37.932,-26.094],[-39.355,-26.065],[-40.663,-25.665],[-42.471,-23.643],[-42.728,-22.276],[-42.725,-20.78],[-42.721,-14.705],[-42.715,-2.178],[-42.711,10.801],[-42.71,12.451],[-42.616,14.043],[-40.821,16.483],[-39.346,16.973],[-37.697,16.999],[-34.323,16.999],[-6.24,17.005],[-6.115,17.005],[-6.039,17.103],[0.896,26.008],[0.493,26.025],[6.285,17.129],[6.355,17.02],[6.486,17.02],[39.15,17.049],[42.083,15.488],[42.762,13.965],[42.84,12.271],[42.854,5.629],[42.884,-6.124],[42.928,-22.711],[41.928,-24.964],[40.445,-26.01]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[-65.712,-89.322],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"small code end","ix":16,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[2.237,0],[0,0],[0,-2.237],[0,0],[-2.238,0],[0,0],[0,0],[0,0],[0,0],[0,2.238],[0,0]],"o":[[0,0],[-2.238,0],[0,0],[0,2.238],[0,0],[0,0],[0,0],[0,0],[2.237,0],[0,0],[0,-2.237]],"v":[[38.949,-26.245],[-38.948,-26.245],[-43,-22.195],[-43,13.292],[-38.948,17.344],[-6.269,17.344],[0.672,26.245],[6.456,17.344],[38.949,17.344],[43,13.292],[43,-22.195]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[1,1,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[-65.682,-89.407],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":7},{"ty":5,"nm":"********","mn":"","sr":1,"st":10,"op":331,"ip":10,"hd":false,"cl":"","ln":"","ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[253.25000000000003,172.25,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"t":{"m":{"a":{"a":0,"k":[0,0],"ix":2},"g":1},"p":{},"a":[{"s":{"t":0,"xe":{"a":0,"k":0,"ix":7},"ne":{"a":0,"k":0,"ix":8},"a":{"a":0,"k":100,"ix":4},"b":1,"rn":0,"sh":1,"o":{"a":0,"k":0},"r":1,"sm":{"a":0,"k":0},"s":{"a":1,"k":[{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[0],"t":29},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[100],"t":50}],"ix":1},"e":{"a":0,"k":100}},"a":{"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[0,0]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":0,"k":0,"ix":9},"rx":{"a":0,"k":0},"ry":{"a":0,"k":0},"sw":{"a":0,"k":0},"fh":{"a":0,"k":0},"fs":{"a":0,"k":100},"fb":{"a":0,"k":100},"t":{"a":0,"k":0}}}],"d":{"k":[{"s":{"f":"Roboto-Bold","s":17,"t":"********","fc":[0.24,0.24,0.24,1],"lh":20.4,"tr":0,"j":2,"ca":0,"sw":0.00999999977648,"sc":[0,0,0,1]},"t":0}]}},"ind":8},{"ty":5,"nm":"username@gmail.com","mn":"","sr":1,"st":0,"op":321,"ip":0,"hd":false,"cl":"com","ln":"","ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[253.25000000000003,139.25,0],"ix":2},"r":{"a":0,"k":1,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"t":{"m":{"a":{"a":0,"k":[0,0],"ix":2},"g":1},"p":{},"a":[{"s":{"t":0,"xe":{"a":0,"k":0,"ix":7},"ne":{"a":0,"k":0,"ix":8},"a":{"a":0,"k":100,"ix":4},"b":1,"rn":0,"sh":1,"o":{"a":0,"k":0},"r":1,"sm":{"a":0,"k":0},"s":{"a":1,"k":[{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[0],"t":19},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[100],"t":40}],"ix":1},"e":{"a":0,"k":100}},"a":{"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[0,0]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":0,"k":0,"ix":9},"rx":{"a":0,"k":0},"ry":{"a":0,"k":0},"sw":{"a":0,"k":0},"fh":{"a":0,"k":0},"fs":{"a":0,"k":100},"fb":{"a":0,"k":100},"t":{"a":0,"k":0}}}],"d":{"k":[{"s":{"f":"Roboto-Bold","s":9,"t":"username@gmail.com","fc":[0.24,0.24,0.24,1],"lh":10.8,"tr":0,"j":2,"ca":0,"sw":0.00999999977648,"sc":[0,0,0,1]},"t":0}]}},"ind":9},{"ty":4,"nm":"Laptop","mn":"","sr":1,"st":0,"op":321,"ip":0,"hd":false,"cl":"","ln":"","ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[-91.25,22.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[123.25,244.49999999999997,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 1","ix":1,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[-0.091,-0.014],[-2.44,14.773],[0.092,0.015],[2.441,-14.778]],"o":[[0.091,0.016],[2.44,-14.778],[-0.091,-0.016],[-2.439,14.773]],"v":[[-4.419,26.753],[0.165,0.029],[4.418,-26.753],[-0.166,-0.025]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[-106.503,21.314],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 2","ix":2,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,-2.23],[-2.23,0],[0,2.229],[2.229,0]],"o":[[0,2.229],[2.229,0],[0,-2.23],[-2.23,0]],"v":[[-4.037,-0.001],[0,4.036],[4.037,-0.001],[0,-4.037]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[1,1,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[-72.58,20.673],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 3","ix":3,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[-0.002,0.025],[-0.665,-0.14],[-0.801,-1.085],[-0.094,-0.818],[0.104,-0.947],[0.349,-2.458],[2.514,-17.457],[0,0],[0,0],[39.389,-0.024],[0.921,0],[0.443,0.273],[0.178,0.49],[-0.926,0.488],[-0.422,-0.016],[0,0],[-3.549,0],[-6.663,-0.002],[0,0],[-2.122,14.085],[-0.716,0.599],[-0.88,0.137],[-0.849,0.029],[-0.837,0.006],[-3.121,0.021],[-5.24,0.033],[-5.745,0.03],[-1.509,0.003],[-0.396,-0.002],[0,0],[0.382,-0.011],[0.737,-0.015],[2.855,-0.041],[10.468,-0.116],[6.24,-0.062],[3.348,-0.031],[0.851,-0.007],[0.815,-0.129],[0.617,-0.552],[0.08,-0.881],[2.511,-16.835],[0,0],[0,0],[7.099,-0.003],[3.633,-0.001],[0,0],[0.361,-0.203],[-0.295,-0.75],[-0.35,-0.191],[-0.487,0.014],[-0.925,0],[-27.448,-0.017],[0,0],[-1.46,9.848],[-0.285,1.898],[0.094,0.791],[0.382,0.522],[0.632,0.167]],"o":[[0,0],[0.646,0.15],[0.4,0.53],[0.105,0.831],[-0.27,1.899],[-1.419,9.853],[0,0],[0,0],[-27.448,0.016],[-0.925,0],[-0.427,0.018],[-0.458,-0.252],[-0.386,-0.983],[0.442,-0.268],[0,0],[3.633,0.001],[7.099,0.003],[0,0],[2.536,-16.83],[0.074,-0.892],[0.7,-0.621],[0.897,-0.137],[0.851,-0.006],[3.348,-0.023],[6.24,-0.039],[10.469,-0.054],[2.856,-0.005],[0.738,0.004],[0.381,0.003],[0,0],[-0.395,0.008],[-1.509,0.022],[-5.746,0.064],[-5.241,0.052],[-3.121,0.03],[-0.837,0.009],[-0.848,0.029],[-0.819,0.129],[-0.634,0.552],[-2.102,14.087],[0,0],[0,0],[-6.663,0.002],[-3.549,0],[0,0],[-0.481,-0.014],[-0.706,0.374],[0.135,0.372],[0.363,0.206],[0.921,0],[39.389,0.024],[0,0],[2.588,-17.447],[0.369,-2.455],[0.114,-0.949],[-0.082,-0.791],[-0.764,-1.066],[-0.651,-0.156]],"v":[[53.603,-27.349],[54.619,-27.253],[57.082,-25.619],[57.879,-23.563],[57.642,-20.91],[56.712,-14.366],[50.733,27.143],[50.709,27.315],[50.536,27.315],[-52.371,27.376],[-55.141,27.376],[-56.606,27.096],[-57.598,25.932],[-56.597,23.257],[-55.144,22.983],[-53.78,22.983],[-43.002,22.984],[-22.326,22.991],[-22.574,23.206],[-15.549,-23.41],[-14.356,-25.866],[-11.89,-26.952],[-9.291,-27.045],[-6.759,-27.062],[2.949,-27.128],[20.2,-27.237],[44.76,-27.363],[51.33,-27.375],[53.027,-27.366],[53.603,-27.349],[53.027,-27.322],[51.331,-27.286],[44.761,-27.192],[20.202,-26.919],[2.95,-26.748],[-6.757,-26.655],[-9.289,-26.632],[-11.825,-26.539],[-14.073,-25.547],[-15.122,-23.345],[-22.077,23.28],[-22.109,23.494],[-22.326,23.494],[-43.002,23.501],[-53.78,23.503],[-55.144,23.503],[-56.346,23.711],[-57.109,25.754],[-56.352,26.642],[-55.141,26.854],[-52.371,26.854],[50.536,26.916],[50.339,27.086],[56.491,-14.399],[57.473,-20.936],[57.736,-23.548],[56.988,-25.552],[54.605,-27.197]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[-91.209,21.387],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 4","ix":4,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[2.589,0],[0,0],[0.313,-2.068],[0,0],[0,0],[0,-1.069],[-1.069,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[-2.091,0],[0,0],[0,0],[-1.069,0],[0,1.07],[0,0],[0,0],[0,0],[0,0],[0.388,-2.559]],"v":[[53.253,-27.232],[-11.226,-26.708],[-15.629,-23.636],[-22.676,23.36],[-55.888,23.36],[-57.824,25.295],[-55.888,27.232],[-23.256,27.232],[-17.062,27.232],[50.187,27.232],[57.436,-22.368]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.218,0.5722,0.862,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[-90.859,21.27],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":10},{"ty":4,"nm":"R-hand","mn":"","sr":1,"st":0,"op":321,"ip":0,"hd":false,"cl":"","ln":"","ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[-78.625,-18.125,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[-78.625,-18.125,0],"ix":2},"r":{"a":1,"k":[{"o":{"x":0.167,"y":0},"i":{"x":0.583,"y":0.357},"s":[0],"t":63},{"o":{"x":0.417,"y":0.409},"i":{"x":0.833,"y":1},"s":[7],"t":64},{"o":{"x":0.167,"y":0},"i":{"x":0.833,"y":1},"s":[18],"t":65},{"o":{"x":0.167,"y":0},"i":{"x":0.833,"y":1},"s":[25],"t":66},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[25],"t":75},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":85}],"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"phone hand start","ix":1,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0.146,-0.053],[0.913,1.178],[-0.105,0.135],[-0.96,-1.256]],"o":[[-0.157,0.067],[-0.904,-1.186],[0.089,-0.128],[0.967,1.25]],"v":[[1.652,2.206],[0.003,0.013],[-1.693,-2.145],[0.471,-0.347]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.42,0.739,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[-67.468,-27.87],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 59","ix":2,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0.093,-0.138],[1.022,0.947],[-0.126,0.098],[-0.988,-0.909]],"o":[[-0.088,0.133],[-1.025,-0.944],[0.131,-0.104],[0.984,0.913]],"v":[[1.829,1.659],[-0.296,0.323],[-1.796,-1.688],[0.105,-0.111]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.42,0.739,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[-70.833,-23.317],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 60","ix":3,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0.094,-0.136],[1.09,0.896],[-0.112,0.114],[-1.07,-0.875]],"o":[[-0.09,0.134],[-1.092,-0.893],[0.116,-0.118],[1.067,0.877]],"v":[[1.962,1.593],[-0.24,0.296],[-1.943,-1.608],[0.135,-0.16]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.42,0.739,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[-73.998,-18.28],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 61","ix":4,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[-0.031,-0.182],[0.965,-0.155],[1.461,0.345],[0.788,0.572],[-0.048,0.052],[-2.804,-0.643]],"o":[[0.019,0.068],[-0.962,0.156],[-1.459,-0.349],[-0.793,-0.573],[0.109,-0.149],[2.791,0.688]],"v":[[4.966,0.933],[3.463,1.4],[-0.336,1.227],[-3.805,-0.329],[-4.937,-1.423],[-0.199,0.653]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.42,0.739,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[-75.637,-15.552],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 62","ix":5,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[1.644,-0.691],[0.479,-2.393],[0,0],[0,0],[0,0],[-0.918,-0.628],[0,0],[0,0],[0,0],[-0.749,-1.562],[0,0],[0,0],[0,0],[-0.524,-1.194],[0,0],[0,0],[-0.302,0.924],[0,0],[-0.312,0.81],[0,0],[-0.325,1.461],[0.264,1.125],[0.107,0.316]],"o":[[0,0],[-0.478,2.393],[0,0],[0,0],[0,0],[0.917,0.627],[0,0],[0,0],[0,0],[0.75,1.562],[0,0],[0,0],[0,0],[0.522,1.194],[0,0],[0,0],[0.302,-0.925],[0,0],[0.312,-0.81],[0,0],[0.325,-1.461],[-0.265,-1.124],[-0.107,-0.316]],"v":[[9.27,-13.746],[7.917,-11.51],[5.895,-2.254],[1.312,-4.689],[-4.422,-3.942],[-4.755,-2.159],[-0.214,-0.884],[2.459,2.959],[-5.212,-0.739],[-7.022,1.49],[-1.1,7.939],[-4.943,7.648],[-9.513,4.873],[-10.391,6.131],[-5.117,11.64],[0.647,14.437],[4.094,13.266],[4.473,11.024],[6.455,9.764],[6.566,7.672],[9.514,6.671],[9.301,1.207],[10.311,-10.68]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.72,0.8693,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[-74.967,-27.897],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 63","ix":6,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[-0.005,-0.04],[1.226,-0.204],[2.121,-0.328],[1.284,-0.189],[0.35,-0.518],[0.397,-0.616],[1.843,-2.84],[2.473,-3.694],[0.754,-1.112],[0.034,0.022],[-0.649,1.061],[-1.141,1.819],[-3.707,5.684],[-1.617,2.466],[-0.386,0.583],[-0.684,0.048],[-1.113,0.141],[-1.335,0.158]],"o":[[0.005,0.041],[-1.327,0.205],[-1.109,0.163],[-0.618,0.056],[-0.377,0.585],[-1.605,2.474],[-3.707,5.685],[-1.205,1.778],[-0.709,1.022],[-0.034,-0.022],[0.714,-1.137],[2.384,-3.753],[1.856,-2.832],[0.405,-0.614],[0.43,-0.643],[1.289,-0.163],[2.134,-0.253],[1.237,-0.133]],"v":[[16.136,-16.413],[14.24,-16.036],[9.038,-15.232],[5.443,-14.704],[3.927,-13.811],[2.765,-12.009],[-2.439,-3.988],[-12.001,10.518],[-14.957,14.877],[-16.107,16.43],[-15.15,14.75],[-12.352,10.289],[-2.933,-4.311],[2.311,-12.306],[3.497,-14.103],[5.365,-15.188],[8.974,-15.645],[14.208,-16.264]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.3198,0.419,0.5002,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[-70.948,-36.428],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 64","ix":7,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[-0.209,-0.183],[-0.245,0.279],[0.209,0.183],[0.245,-0.279]],"o":[[0.209,0.183],[0.244,-0.279],[-0.21,-0.184],[-0.245,0.279]],"v":[[-0.443,0.505],[0.379,0.332],[0.443,-0.505],[-0.379,-0.332]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[1,1,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[-61.623,-49.66],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 65","ix":8,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0.578,-0.079],[0,0],[0.475,-0.73],[0,0],[0,0],[0,0],[0,0]],"o":[[-0.367,-0.454],[0,0],[-0.86,0.133],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[16.753,-16.808],[15.229,-17.413],[5.417,-16.062],[3.318,-14.706],[-17.061,16.616],[-15.494,17.492],[-4.642,17.15],[17.061,-16.426]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[-71.873,-36.415],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":11,"parent":12},{"ty":4,"nm":"R-arm","mn":"","sr":1,"st":0,"op":321,"ip":0,"hd":false,"cl":"","ln":"","ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[-101.375,3.25,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[113.12500000000001,225.25,0],"ix":2},"r":{"a":1,"k":[{"o":{"x":0.111,"y":0},"i":{"x":0.541,"y":0.978},"s":[87],"t":63},{"o":{"x":0.167,"y":0},"i":{"x":0.541,"y":3.651},"s":[0],"t":85},{"o":{"x":0.459,"y":0.022},"i":{"x":0.889,"y":1},"s":[0],"t":116},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[87],"t":138}],"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Shape 1","ix":1,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0.569,-6.588],[-1.813,0],[-1.625,0.875],[0,0]],"o":[[0,0],[0,0],[-0.531,6.156],[0.906,0],[0.778,-0.419],[0,0]],"v":[[-78.375,-22.125],[-99.125,-10.625],[-109.188,1.25],[-103,10.688],[-97.563,9.813],[-68.5,-19.063]]},"ix":2}},{"ty":"st","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":1,"lj":1,"ml":4,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"d":[],"c":{"a":0,"k":[0.6314,0.6784,0.7176,1],"ix":3}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.72,0.8693,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":12},{"ty":4,"nm":"L-arm","mn":"","sr":1,"st":0,"op":321,"ip":0,"hd":false,"cl":"","ln":"","ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[-149.25,16.75,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[25.124999999999996,240.75000000000003,0],"ix":2},"r":{"a":0,"k":6,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Shape 1","ix":1,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[1.063,0.313],[5.188,-5.75],[-1.063,-1.063],[0,0],[0,0],[0,0]],"o":[[-1.063,-0.313],[-5.095,5.647],[1.063,1.063],[0,0],[0,0],[0,0]],"v":[[36,232.063],[24.625,236.625],[24.5,253.188],[38.125,254.75],[87.344,254.781],[85.031,242.875]]},"ix":2}},{"ty":"st","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":1,"lj":1,"ml":4,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"d":[],"c":{"a":0,"k":[0.6314,0.6784,0.7176,1],"ix":3}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.72,0.8693,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[27,240.75],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[-149,16.75],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":13},{"ty":4,"nm":"L-hand","mn":"","sr":1,"st":0,"op":321,"ip":0,"hd":false,"cl":"","ln":"","ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[-87.877,24.248,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[-87.252,24.248,0],"ix":2},"r":{"a":1,"k":[{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[0],"t":0},{"o":{"x":0.167,"y":0},"i":{"x":0.667,"y":1},"s":[25],"t":5},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[0],"t":10},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[0],"t":19},{"o":{"x":0.167,"y":0},"i":{"x":0.667,"y":1},"s":[25],"t":24},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[0],"t":30},{"o":{"x":0.167,"y":0},"i":{"x":0.667,"y":1},"s":[25],"t":33},{"o":{"x":0.167,"y":0},"i":{"x":0.667,"y":1},"s":[0],"t":38},{"o":{"x":0.167,"y":0},"i":{"x":0.667,"y":1},"s":[25],"t":43},{"o":{"x":0.167,"y":0},"i":{"x":0.667,"y":1},"s":[0],"t":47},{"o":{"x":0.167,"y":0},"i":{"x":0.667,"y":1},"s":[25],"t":52},{"o":{"x":0.167,"y":0},"i":{"x":0.667,"y":1},"s":[0],"t":57},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[0],"t":129},{"o":{"x":0.167,"y":0},"i":{"x":0.667,"y":1},"s":[25],"t":132},{"o":{"x":0.167,"y":0},"i":{"x":0.667,"y":1},"s":[0],"t":137},{"o":{"x":0.167,"y":0},"i":{"x":0.667,"y":1},"s":[25],"t":142},{"o":{"x":0.167,"y":0},"i":{"x":0.667,"y":1},"s":[0],"t":146},{"o":{"x":0.167,"y":0},"i":{"x":0.667,"y":1},"s":[25],"t":151},{"o":{"x":0.167,"y":0},"i":{"x":0.667,"y":1},"s":[0],"t":156},{"o":{"x":0.167,"y":0},"i":{"x":0.667,"y":1},"s":[25],"t":161},{"o":{"x":0.167,"y":0},"i":{"x":0.667,"y":1},"s":[0],"t":166},{"o":{"x":0.167,"y":0},"i":{"x":0.667,"y":1},"s":[25],"t":171},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":176}],"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"hand stroke","ix":1,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[-0.011,-0.012],[-0.316,0.262],[-0.579,0.465],[-2.43,1.474],[0,0],[-1.89,-0.321],[0,0],[-0.084,-0.43],[-0.367,-0.37],[-0.225,-0.029],[-0.248,0.039],[-0.33,0.382],[-0.068,0.108],[0,0],[0,0],[0,0],[0,0],[-0.274,0.099],[0,0],[0,0],[0,0],[-0.228,-0.071],[-0.247,-0.044],[-0.135,-0.003],[-0.202,0.102],[-0.111,0.231],[-0.069,0.24],[-0.087,0.504],[0,0],[-0.467,0.615],[0.025,0.404],[0.085,0.322],[0.554,1.237],[0,0],[0,0],[0.647,1.025],[0.396,0.627],[0.559,0.546],[0.696,0.279],[0.677,0.071],[2.474,0.278],[0,0],[0,0],[0.446,-0.169],[0.309,-0.469],[0,0],[0.776,-0.517],[0.191,-0.778],[0,0],[1.601,-1.44],[0.445,-0.41],[-0.013,-0.014],[-0.426,0.35],[-0.767,0.646],[-2.79,2.411],[0,0],[0,0],[-0.644,0.398],[-0.743,-0.311],[0,0],[0,0],[-0.399,0.147],[-0.44,0.071],[0,0],[-2.774,-0.327],[-0.632,-0.273],[-0.486,-0.493],[-0.41,-0.63],[-0.401,-0.636],[-0.603,-0.954],[0,0],[-0.349,-1.21],[-0.013,-0.275],[0.154,-0.215],[0.51,0.083],[0,0],[0,0],[0.132,-0.451],[0.229,-0.173],[0.11,0.011],[0.107,0.017],[0.215,0.065],[0.209,0.081],[0,0],[0,0],[0,0],[-0.067,0.023],[0,0],[0,0],[0,0],[0,0],[0,0],[0.378,-0.057],[0.191,0.048],[0.129,0.111],[0.003,0.732],[0,0],[0,0],[1.551,0.242],[0,0],[0,0],[1.208,-1.007],[0.296,-0.287]],"o":[[0.011,0.012],[0.359,-0.288],[1.237,-0.957],[0,0],[1.547,0.264],[0,0],[-0.012,0.424],[0.087,0.422],[0.191,0.18],[0.231,0.059],[0.494,-0.071],[0.085,-0.094],[0,0],[0,0],[0,0],[0,0],[0.067,-0.026],[0,0],[0,0],[0,0],[0.219,0.087],[0.229,0.072],[0.125,0.021],[0.126,0.005],[0.292,-0.209],[0.104,-0.236],[0.144,-0.481],[0,0],[0.672,0.118],[0.21,-0.286],[-0.017,-0.363],[-0.363,-1.272],[0,0],[0,0],[-0.602,-0.954],[-0.402,-0.637],[-0.398,-0.608],[-0.538,-0.544],[-0.691,-0.299],[-2.775,-0.312],[0,0],[0,0],[-0.485,0.083],[-0.434,0.175],[0,0],[-0.887,-0.363],[-0.78,0.514],[0,0],[-2.742,2.466],[-0.738,0.68],[-0.401,0.379],[0.013,0.015],[0.463,-0.39],[1.629,-1.407],[0,0],[0,0],[0.176,-0.686],[0.626,-0.422],[0,0],[0,0],[0.18,-0.279],[0.404,-0.149],[0,0],[2.472,0.291],[0.707,0.078],[0.629,0.255],[0.494,0.477],[0.396,0.627],[0.648,1.024],[0,0],[0.545,1.21],[0.082,0.301],[0.028,0.238],[-0.301,0.426],[0,0],[0,0],[-0.079,0.475],[-0.125,0.428],[-0.012,0.006],[-0.101,0],[-0.217,-0.036],[-0.216,-0.065],[0,0],[0,0],[0,0],[0.273,-0.1],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.259,0.306],[-0.19,0.033],[-0.207,-0.028],[-0.494,-0.515],[0,0],[0,0],[-1.895,-0.297],[0,0],[0,0],[-2.43,1.528],[-0.601,0.509],[-0.295,0.286]],"v":[[-4.602,10.388],[-4.105,10.008],[-2.702,8.882],[2.803,5.09],[2.684,5.113],[7.866,5.995],[7.689,5.776],[7.785,7.044],[8.373,8.292],[9.061,8.607],[9.791,8.65],[11.081,7.936],[11.306,7.629],[11.354,7.546],[11.377,7.505],[11.388,7.483],[11.39,7.482],[11.085,7.592],[11.091,7.594],[11.102,7.599],[11.266,7.665],[11.936,7.902],[12.646,8.081],[13.032,8.122],[13.512,8.029],[14.02,7.343],[14.277,6.63],[14.611,5.163],[14.308,5.372],[16.24,4.713],[16.597,3.669],[16.413,2.665],[14.983,-1.064],[14.977,-1.079],[14.966,-1.095],[13.078,-4.086],[11.88,-5.981],[10.566,-7.817],[8.686,-9.066],[6.55,-9.51],[-1.345,-10.398],[-1.379,-10.401],[-1.407,-10.396],[-2.792,-10.032],[-3.995,-9.191],[-3.704,-9.282],[-6.394,-9.132],[-7.725,-7.01],[-7.662,-7.12],[-14.243,-1.202],[-20.782,3.509],[-21.376,4.108],[-20.706,3.595],[-14.097,-1.036],[-7.4,-6.823],[-7.355,-6.861],[-7.337,-6.932],[-6.163,-8.774],[-3.895,-8.872],[-3.712,-8.796],[-3.605,-8.963],[-2.629,-9.599],[-1.338,-9.927],[-1.399,-9.926],[6.491,-8.995],[8.49,-8.579],[10.189,-7.445],[11.429,-5.697],[12.626,-3.801],[14.517,-0.811],[14.501,-0.841],[15.909,2.803],[16.078,3.688],[15.831,4.398],[14.412,4.875],[14.151,4.832],[14.109,5.084],[13.798,6.488],[13.256,7.609],[13.045,7.632],[12.728,7.6],[12.078,7.441],[11.44,7.221],[11.286,7.16],[11.277,7.155],[11.273,7.154],[10.965,7.266],[10.963,7.268],[10.955,7.284],[10.937,7.318],[10.9,7.385],[10.724,7.626],[9.724,8.193],[9.154,8.16],[8.68,7.962],[8.112,5.796],[8.111,5.605],[7.935,5.577],[2.741,4.766],[2.674,4.755],[2.622,4.788],[-2.823,8.732],[-4.171,9.936]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.42,0.739,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[-13.563,6.406],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[-87.859,24.238],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"first finger line","ix":2,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[-0.001,-0.068],[-2.001,-0.231],[-1.756,-2.657],[-0.708,-1.871],[-0.11,0.01],[0.028,0.573],[0.341,0.973],[1.914,2.43],[0.612,0.456],[0.651,0.189],[1.015,0.082]],"o":[[0,0.08],[1.927,0.296],[1.903,2.416],[0.75,1.859],[0.028,0.001],[-0.024,-0.573],[-0.643,-1.976],[-0.488,-0.61],[-0.61,-0.466],[-1.321,-0.373],[-2.033,-0.136]],"v":[[-7.559,-6.491],[-4.305,-6.148],[2.462,-3.055],[6.691,3.515],[7.484,6.65],[7.532,5.763],[7.044,3.384],[2.88,-3.389],[1.252,-5.034],[-0.719,-5.96],[-4.269,-6.524]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.42,0.739,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[-20.188,7.938],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[-87.894,24.227],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"second finger line","ix":3,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[-0.115,0.003],[-0.04,0.578],[0.065,1.04],[0.143,0.609],[0.398,0.568],[1.335,0.888],[1.346,0.407],[1.033,0.046],[0.576,-0.022],[0.001,-0.036],[-2.04,-0.149],[-1.267,-0.413],[-1.285,-0.849],[-0.768,-1.107],[-0.125,-1.01]],"o":[[0.028,-0.006],[0.035,-0.578],[-0.035,-0.518],[-0.132,-0.612],[-0.755,-1.143],[-1.33,-0.878],[-1.336,-0.405],[-1.036,-0.037],[-0.576,0.023],[-0.003,0.086],[1.016,0.094],[1.257,0.403],[1.288,0.861],[0.81,1.057],[0.201,2.027]],"v":[[7.438,6.346],[7.544,5.454],[7.549,3],[7.315,1.302],[6.493,-0.523],[3.354,-3.737],[-0.652,-5.762],[-4.27,-6.312],[-6.716,-6.304],[-7.611,-6.214],[-4.294,-5.936],[-0.799,-5.292],[3.051,-3.297],[6.087,-0.245],[7.173,3.034]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.42,0.739,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[-17.313,5.594],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[-87.919,24.24],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"fourth finger line","ix":4,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[-0.004,-0.07],[-4.187,-0.245],[-0.028,0.156],[1.364,0.239],[2.112,0.121],[1.382,-0.084]],"o":[[0.01,0.159],[4.19,0.231],[0.012,-0.07],[-1.364,-0.241],[-2.11,-0.118],[-1.383,0.084]],"v":[[-7.6,-0.314],[0.005,-0.053],[7.593,0.548],[5.412,0.02],[0.035,-0.586],[-5.373,-0.594]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.42,0.739,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[-13.969,1.344],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[-87.9,24.261],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"third finger line","ix":5,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[-0.009,-0.059],[-1.789,-0.077],[-2.581,-0.879],[-1.044,-0.548],[-0.324,-0.738],[0.181,-0.271],[0.213,-0.088],[0.01,-0.05],[-0.542,0.142],[-0.244,0.312],[0.195,0.484],[0.445,0.312],[0.534,0.286],[1.32,0.444],[1.815,-0.009]],"o":[[0.009,0.087],[1.784,0.088],[1.29,0.434],[1.012,0.571],[0.163,0.361],[-0.177,0.269],[-0.44,0.181],[-0.02,0.012],[0.262,-0.071],[0.249,-0.297],[-0.181,-0.489],[-0.456,-0.298],[-1.054,-0.585],[-2.642,-0.9],[-1.823,0.019]],"v":[[-8.1,-3.084],[-5.188,-3.024],[1.648,-1.743],[5.172,-0.238],[7.564,1.538],[7.473,2.537],[6.841,3.072],[6.106,3.178],[6.908,3.267],[7.717,2.71],[7.914,1.398],[6.872,0.22],[5.405,-0.67],[1.818,-2.249],[-5.18,-3.4]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.42,0.739,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[-15.031,3.844],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[-87.877,24.191],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"hand","ix":6,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0.763,0.066],[0.164,0.053],[0,0],[0,0],[2.4,-2.884],[0,0],[0,0],[0,0],[-0.659,1.615],[0,0],[0,0],[0,0],[-0.928,-1.468],[0,0],[0.3,-0.938],[0,0],[0.697,-0.092]],"o":[[-0.344,0.683],[-0.151,-0.013],[-1.082,-0.347],[0,0],[0,0],[-2.4,2.884],[0,0],[0,0],[0,0],[0.658,-1.616],[0.467,-0.799],[0,0],[1.726,0.199],[0,0],[0,0],[-0.455,1.417],[0,0],[-0.697,0.093]],"v":[[11.412,4.925],[9.589,5.986],[9.115,5.891],[8.134,3.339],[2.946,2.492],[-6.2,9.726],[-14.723,10.274],[-21.613,2.293],[-7.297,-9.419],[-7.225,-10.519],[-3.566,-11.524],[-1.139,-12.609],[7.237,-11.644],[11.434,-9.007],[14.976,-3.4],[16.546,1.575],[14.594,2.676],[13.485,5.422]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.72,0.8693,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[-13.344,4],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[-87.875,24.279],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":14,"parent":13},{"ty":4,"nm":"head","mn":"","sr":1,"st":0,"op":321,"ip":0,"hd":false,"cl":"","ln":"","ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[55.75,144.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[56.00000000000001,144,0],"ix":2},"r":{"a":1,"k":[{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[10],"t":63},{"o":{"x":0.167,"y":0},"i":{"x":0.667,"y":1},"s":[0],"t":85},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[0],"t":111},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[10],"t":127}],"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Hair strand","ix":1,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[4.393,-0.636],[-2.287,-2.669],[0.043,-11.384],[0.158,4.436],[3.084,3.192]],"o":[[0.775,3.428],[4.364,5.092],[2.061,-3.932],[-0.158,-4.436],[-3.084,-3.192]],"v":[[-8.546,-14.012],[-0.273,-3.519],[4.908,14.648],[8.388,2.428],[3.512,-9.644]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[76.15,106.403],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Hair clip","ix":2,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0.19,0.006],[0.03,1.581],[-0.77,2.296],[-0.98,1.234],[-0.042,-0.043],[1.487,-4.518]],"o":[[-0.06,0.009],[-0.034,-1.576],[0.777,-2.295],[0.98,-1.241],[0.155,0.109],[-1.55,4.495]],"v":[[-2.564,7.943],[-2.879,5.415],[-1.909,-0.661],[0.996,-6.087],[2.775,-7.908],[-1.381,-0.483]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.47,0.47,0.47,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[32.769,106.89],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"pony","ix":3,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[1.637,4.058],[0,0],[2.566,0.597],[2.311,-1.266],[0.302,-1.511],[-1.443,0.541],[-1.44,-2.543],[-2.233,1.884],[2.083,-1.415],[-2.697,3.444]],"o":[[0,0],[0.027,-2.634],[-2.565,-0.596],[-1.352,0.74],[-0.303,1.511],[-2.765,0.946],[1.44,2.543],[-0.721,2.413],[4.332,0.618],[2.697,-3.445]],"v":[[8.184,-6.078],[8.184,-6.078],[2.355,-11.031],[-5.234,-9.582],[-8.249,-6.277],[-5.654,-3.506],[-8.381,3.676],[-0.82,5.032],[-5.198,11.009],[6.43,6.332]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[27.866,107.518],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"ear shadow","ix":4,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0.029,0.017],[0.252,-0.103],[0.431,0.184],[-0.028,1.519],[-0.299,0.592],[-0.452,0.059],[-0.092,-0.242],[-0.044,-0.016],[0.052,0.351],[0.19,0.171],[0.314,-0.019],[0.329,-0.649],[0.015,-0.862],[-1.201,-0.407],[-0.264,0.187]],"o":[[-0.036,-0.028],[-0.247,0.099],[-0.875,-0.367],[0.013,-0.768],[0.285,-0.604],[0.45,-0.083],[0.103,0.241],[0.022,0.023],[-0.027,-0.169],[-0.195,-0.173],[-0.651,0.016],[-0.364,0.651],[-0.023,1.699],[0.585,0.181],[0.27,-0.196]],"v":[[1.807,3.005],[1.404,3.204],[0.306,3.176],[-1.225,-0.156],[-0.719,-2.238],[0.435,-3.313],[1.282,-2.872],[1.367,-2.45],[1.502,-2.934],[1.195,-3.477],[0.393,-3.728],[-1.198,-2.491],[-1.813,-0.168],[0.161,3.566],[1.513,3.404]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.42,0.739,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[39.21,129.285],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"ear","ix":5,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[-0.116,3.176],[0.903,0.177],[0.28,-6.16],[-0.026,0.241]],"o":[[0.033,-0.92],[-2.411,-0.473],[-0.382,8.419],[0.021,-0.188]],"v":[[4.635,-3.522],[2.786,-6.829],[-4.285,-1.117],[3.89,5.709]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.72,0.8693,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[39.554,129.888],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"hair big strand","ix":6,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[-1.152,3.382],[-7.459,-0.67],[0,0],[3.973,-1.124],[1.29,-1.789],[1.23,-1.886],[1.296,-2.839],[0.588,-1.231],[1.721,0.583],[0.536,1.556],[-0.348,1.468]],"o":[[2.414,-7.09],[0,0],[-0.803,4.05],[-2.122,0.6],[-1.317,1.826],[-1.705,2.615],[-0.566,1.24],[-0.784,1.639],[-1.72,-0.584],[-0.915,-2.659],[0.824,-3.477]],"v":[[-15.168,-2.506],[5.244,-18.586],[17.029,-11.194],[9.044,-2.543],[3.089,-0.028],[1.236,6.396],[-6.278,11.634],[-7.18,15.605],[-13.913,18.674],[-16.115,13.586],[-16.256,8.098]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[53.021,106.131],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"R- eyebrow","ix":7,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0.14,-0.184],[1.412,0.073],[0.26,0.415],[-0.537,0.346],[-0.969,-0.067],[-0.476,-0.415]],"o":[[-0.315,0.375],[-1.408,-0.123],[-0.113,-0.201],[0.529,-0.345],[0.969,0.068],[0.484,0.417]],"v":[[2.868,0.783],[-0.017,0.637],[-2.895,0.38],[-2.268,-0.548],[0.104,-1.091],[2.376,-0.224]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[75.521,109.462],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"L-eyebrow","ix":8,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0.081,-0.217],[2.009,-0.163],[0.249,0.426],[-0.669,0.423],[-1.206,0.087],[-0.717,-0.325]],"o":[[-0.186,0.457],[-2.013,0.124],[-0.11,-0.203],[0.664,-0.423],[1.206,-0.085],[0.723,0.324]],"v":[[3.908,0.249],[0.019,0.583],[-3.878,0.803],[-3.021,-0.249],[-0.104,-1.144],[2.911,-0.671]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[58.404,111.994],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"mouth line","ix":9,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[-0.126,-0.015],[-1.533,-1.374],[-0.004,-0.259],[0.833,0.01],[0.938,0.841],[0.034,0.762]],"o":[[0.278,-0.005],[1.529,1.38],[0.021,0.117],[-0.818,-0.003],[-0.935,-0.843],[-0.041,-0.776]],"v":[[-2.464,-2.528],[-0.722,0.692],[2.793,2.2],[1.507,2.533],[-1.431,1.38],[-2.774,-1.316]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[64.923,133.779],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"lip","ix":10,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[1.071,-0.074],[0.473,-0.585],[-0.387,-0.59],[-0.822,0.199],[-0.686,0.508],[-0.122,0.199],[0.135,0.173]],"o":[[-0.581,-0.835],[-0.743,0.05],[-0.473,0.585],[0.435,0.665],[0.823,-0.2],[0.189,-0.141],[0.123,-0.197],[0,0]],"v":[[2.541,-0.635],[-0.169,-1.884],[-2.145,-0.921],[-2.359,1.107],[-0.147,1.759],[2.083,0.542],[2.589,0.057],[2.611,-0.577]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.42,0.739,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[64.101,134.984],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"nose","ix":11,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0.003,0.097],[-1.726,0.153],[-0.085,0.294],[0.191,0.514],[0.405,1.175],[-0.193,0.063],[-1.604,-4.789],[-0.35,-1.077],[0.248,-0.644],[0.282,-0.064],[0.216,-0.004]],"o":[[-0.004,-0.097],[0.437,-0.028],[0.115,-0.311],[-0.368,-1.07],[-1.604,-4.788],[0.193,-0.063],[0.385,1.18],[0.146,0.501],[-0.13,0.321],[-0.282,0.075],[-1.731,0.026]],"v":[[-2.058,7.082],[0.73,6.69],[1.667,6.298],[1.426,4.997],[0.268,1.632],[-2.286,-7.15],[0.969,1.406],[2.072,4.788],[2.232,6.505],[1.491,7.114],[0.748,7.188]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[69.58,123.185],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"L-eye shadow","ix":12,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0.1,-0.089],[1.704,0.062],[0.177,0.216],[-0.562,0.376],[-1.062,-0.045],[-0.498,-0.42]],"o":[[-0.205,0.198],[-1.702,-0.086],[-0.087,-0.096],[0.552,-0.374],[1.062,0.047],[0.507,0.422]],"v":[[3.113,0.816],[0.037,0.018],[-3.126,0.545],[-2.439,-0.292],[0.104,-0.969],[2.542,-0.076]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[59.294,116.487],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"L-eye","ix":13,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0.003,-0.838],[0.875,-0.013],[-0.003,0.838],[-0.873,0.013]],"o":[[-0.002,0.838],[-0.873,0.012],[0.002,-0.837],[0.875,-0.013]],"v":[[1.583,-0.023],[-0.006,1.516],[-1.583,0.024],[0.004,-1.515]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[60.578,121.66],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"R- eye shadow","ix":14,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0.101,-0.089],[1.705,0.062],[0.177,0.216],[-0.56,0.376],[-1.062,-0.046],[-0.498,-0.42]],"o":[[-0.204,0.199],[-1.702,-0.086],[-0.087,-0.096],[0.552,-0.374],[1.062,0.046],[0.508,0.423]],"v":[[3.113,0.815],[0.038,0.017],[-3.126,0.544],[-2.439,-0.293],[0.104,-0.969],[2.541,-0.077]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[75.482,116.902],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"R-eye","ix":15,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0.003,-0.837],[0.875,-0.013],[-0.002,0.838],[-0.873,0.013]],"o":[[-0.003,0.838],[-0.873,0.013],[0.003,-0.837],[0.875,-0.013]],"v":[[1.584,-0.023],[-0.006,1.516],[-1.584,0.023],[0.004,-1.516]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[75.858,122.043],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"face+neck","ix":16,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[7.414,-0.495],[0,0],[0.043,-2.257],[0,0],[-4.459,-1.789],[-0.001,-0.022],[-2.441,12.277],[0.199,8.253]],"o":[[0,0],[-2.252,0.15],[0,0],[3.606,3.579],[3.843,1.542],[0,0],[1.214,-6.105],[-0.18,-7.428]],"v":[[7.496,-38.987],[-15.787,-34.055],[-19.845,-29.799],[-19.568,4.212],[-2.618,13.624],[6.579,15.152],[18.548,1.671],[19.646,-22.771]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.72,0.8693,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[61.337,135.334],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"hair short strand","ix":17,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[-0.371,0.97],[-0.337,2.367],[-4.857,2.032],[-5.443,-1.76],[-2.488,-3.031],[1.455,-4.997],[0,0],[3.029,-1.152],[0.939,0.149],[0.223,0.924]],"o":[[0.854,-2.233],[0.744,-5.212],[4.519,-1.891],[3.731,1.206],[3.301,4.023],[0,0],[-2.497,2.065],[-0.889,0.338],[-0.939,-0.149],[-0.243,-1.01]],"v":[[-19.684,7.788],[-18.823,0.694],[-9.023,-10.73],[6.458,-10.448],[16.188,-4.108],[19.198,10.594],[-7.47,6.711],[-15.552,12.029],[-18.335,12.471],[-20.41,10.76]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[61.805,99.432],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"hair back","ix":18,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[5.806,0.852],[4.923,-3.29],[2.141,-5.521],[-1.733,-5.991],[-5.561,-2.825],[-6.794,5.136],[-0.326,8.511],[3.276,4.867]],"o":[[-5.838,-0.992],[-4.923,3.291],[-2.254,5.815],[1.733,5.991],[7.594,3.857],[6.793,-5.137],[0.225,-5.863],[-3.277,-4.868]],"v":[[5.239,-26.859],[-10.654,-22.313],[-21.425,-8.535],[-22.495,9.815],[-11.099,23.994],[13,21.369],[24.004,-0.772],[19.551,-17.501]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[53.484,114.228],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":15},{"ty":4,"nm":"5243320 Outlines","mn":"","sr":1,"st":0,"op":321,"ip":0,"hd":false,"cl":"","ln":"","ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[214.5,222,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[214.5,222.00000000000003,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"arm","ix":1,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[-0.837,-7.11],[-4.477,-3.02],[-2.169,5.508]],"o":[[0,0],[0,0],[0,0],[1.204,10.228],[0.86,0.58],[2.324,-5.901]],"v":[[-10.747,6.606],[-13.071,-28.258],[-37.591,-30.395],[-35.948,0.635],[-22.662,27.545],[-15.463,17.488]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.72,0.8693,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[46.952,225.6],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 12","ix":2,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[-0.034,0.012],[-0.292,-0.73],[-0.422,-1.341],[-0.526,-4.265],[0.175,-2.806],[0.113,-0.778],[0.036,0.004],[-0.045,0.781],[-0.038,1.398],[0.514,4.235],[0.752,2.693],[0.238,0.746]],"o":[[0.034,-0.013],[0.297,0.728],[0.847,2.681],[0.519,4.269],[-0.086,1.404],[-0.107,0.779],[-0.036,-0.004],[0.05,-0.782],[0.081,-2.794],[-0.522,-4.233],[-0.374,-1.347],[-0.232,-0.748]],"v":[[-2.2,-15.24],[-1.698,-14.126],[-0.6,-10.983],[1.702,-0.246],[2.058,10.732],[1.751,14.046],[1.532,15.249],[1.549,14.028],[1.69,10.716],[1.185,-0.182],[-0.953,-10.879],[-1.889,-14.059]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.3198,0.419,0.5002,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[88.403,194.818],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 13","ix":3,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[-3.8,5.205],[2.518,3.06],[2.03,0.889],[1.215,0.211],[0,0],[9.333,-0.551],[0,0],[3.608,-1.856],[3.12,-15.623],[0,0],[0,0],[0,0],[0,0],[-2.284,-0.614],[0,0]],"o":[[0,0],[-2.361,-2.869],[-1.13,-0.494],[0,0],[0,0],[-9.334,0.551],[0,0],[-3.608,1.856],[0,0],[0,0],[0,0],[0,0],[0,0],[2.284,0.615],[0,0]],"v":[[47.717,-19.354],[36.124,-37.547],[28.69,-42.997],[25.157,-44.042],[12.106,-46.932],[2.75,-37.473],[-14.443,-49.924],[-33.13,-45.736],[-45.527,-25.9],[-47.717,-10.616],[-21.718,-8.213],[-19.23,30.422],[-6.336,39.4],[31.695,49.309],[34.735,-8.213]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[55.598,205.43],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"neck shadow","ix":14,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[8.041,5.268],[-4.196,-2.389],[-4.616,0.252]],"o":[[0,0],[0,0],[2.486,1.415],[0,0]],"v":[[8.248,-2.395],[-8.842,-7.482],[-2.48,1.469],[8.05,3.679]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.42,0.739,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[59.731,149.788],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"face+neck","ix":20,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[7.414,-0.495],[0,0],[0.043,-2.257],[0,0],[-2.109,-2.72],[0,0],[-3.867,7.301],[-0.079,0.361],[-0.021,0.385],[0,0],[-0.001,-0.042],[-2.441,12.277],[0.199,8.253]],"o":[[0,0],[-2.252,0.15],[0,0],[0.019,3.442],[0,0],[5.063,6.529],[0.27,-0.51],[0.078,-0.454],[0,0],[0.227,-4.487],[0,0],[1.214,-6.105],[-0.18,-7.428]],"v":[[7.496,-38.987],[-15.787,-34.055],[-19.845,-29.799],[-19.565,20.587],[-16.284,30.089],[-14.064,32.953],[5.121,31.523],[5.657,30.205],[5.877,29.067],[6.32,24.155],[6.579,15.152],[18.548,1.671],[19.646,-22.771]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.72,0.8693,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[61.337,135.334],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 33","ix":23,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[-0.007,-0.034],[-2.737,-0.213],[-1.81,-0.209],[-2.054,-0.389],[-2.273,-1.518],[-0.079,0.078],[0.527,0.572],[1.145,0.797],[4.173,0.741],[1.814,0.187],[1.389,0.045],[0.768,-0.117]],"o":[[0.014,0.089],[1.366,0.096],[1.808,0.215],[4.122,0.734],[2.294,1.493],[0.022,-0.018],[-0.526,-0.569],[-2.26,-1.637],[-2.08,-0.394],[-1.813,-0.18],[-1.387,-0.05],[-0.769,0.117]],"v":[[-14.244,-3.702],[-9.808,-3.728],[-5.006,-3.213],[0.84,-2.365],[10.781,1.322],[14.228,4.099],[13.491,3.145],[11.005,0.99],[0.945,-2.922],[-4.949,-3.732],[-9.787,-4.127],[-13.07,-3.981]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.3198,0.419,0.5002,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[50.557,268.718],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 34","ix":24,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[-0.013,-0.036],[-0.905,0.285],[-1.531,0.493],[-5.089,0.784],[-3.289,-0.71],[-0.042,0.107],[0.874,0.379],[1.661,0.397],[5.152,-0.796],[3.197,-1.121],[0.882,-0.348]],"o":[[0.013,0.037],[1.007,-0.325],[3.223,-1.023],[5.089,-0.785],[3.304,0.684],[0.014,-0.029],[-0.873,-0.383],[-3.312,-0.823],[-5.15,0.793],[-1.6,0.568],[-0.882,0.35]],"v":[[-18.18,3.085],[-16.756,2.696],[-12.936,1.465],[-0.152,-1.766],[12.935,-1.598],[18.18,-0.078],[16.86,-0.745],[13.021,-1.988],[-0.237,-2.326],[-13.064,1.085],[-16.83,2.488]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.3198,0.419,0.5002,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[47.323,273.583],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 35","ix":25,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0.003,-0.008],[-0.161,-0.077],[-0.297,-0.138],[-1.202,-0.534],[-4.478,-1.951],[-14.677,-6.318],[0,0],[-0.514,-7.42],[-0.9,-12.653],[0,0],[0,0],[-5.307,0.466],[-1.432,0.134],[-0.39,0.04],[0.001,0.011],[0.361,-0.019],[0.677,-0.043],[2.613,-0.191],[9.241,-0.73],[0,0],[1.191,17.348],[0.468,6.64],[0,0],[0,0],[9.068,3.85],[2.505,1.051],[0.678,0.278],[0.191,0.074]],"o":[[-0.003,0.008],[0.185,0.086],[0.669,0.298],[2.491,1.085],[9.049,3.895],[0,0],[0.46,6.64],[1.234,17.344],[0,0],[0,0],[9.234,-0.81],[2.609,-0.244],[0.674,-0.07],[0.359,-0.041],[-0.001,-0.012],[-0.391,0.024],[-1.434,0.106],[-5.309,0.419],[0,0],[-0.869,-12.656],[-0.522,-7.418],[0,0],[0,0],[-14.709,-6.244],[-4.505,-1.888],[-1.217,-0.5],[-0.305,-0.12],[-0.167,-0.062]],"v":[[-42.943,-44.595],[-42.705,-44.467],[-41.985,-44.134],[-39.175,-42.884],[-28.629,-38.289],[7.781,-22.616],[7.617,-22.847],[9.089,-1.615],[12.361,44.374],[12.377,44.603],[12.605,44.583],[34.723,42.642],[40.812,42.073],[42.404,41.908],[42.946,41.829],[42.398,41.84],[40.801,41.94],[34.701,42.387],[12.567,44.134],[12.812,44.343],[9.654,-1.655],[8.159,-22.885],[8.147,-23.051],[7.995,-23.116],[-28.494,-38.605],[-39.102,-43.053],[-41.948,-44.221],[-42.686,-44.511]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.3198,0.419,0.5002,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[112.434,319.052],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 36","ix":26,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[1.501,-2.464],[0,0],[0,0],[0,12.732],[0,0]],"o":[[0,0],[-1.502,2.464],[0,0],[0,0],[0,-12.732],[0,0]],"v":[[31.727,-28.328],[38.11,-3.759],[16.333,8.843],[-34.401,28.328],[-39.612,7.307],[-21.965,-28.328]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[52.802,277.255],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 37","ix":27,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[-8.675,-1.807],[-1.446,-14.096],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[1.445,14.096],[0,0],[0,0],[0,0],[0,0]],"v":[[24.442,-46.828],[38.879,-33.771],[41.744,46.105],[11.384,48.634],[6.686,-18.59],[-41.744,-39.19]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[113.636,314.776],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 38","ix":28,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0.112,-0.184],[1.312,-0.103],[0.123,0.197],[-1.547,0.099]],"o":[[-0.095,0.213],[-1.314,0.076],[-0.137,-0.167],[1.546,-0.111]],"v":[[2.478,0.19],[0.001,0.196],[-2.453,0.525],[-0.054,-0.611]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[150.175,384.6],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 39","ix":29,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0.23,-0.026],[-0.584,1.278],[-0.1,-0.192],[0.462,-1.057]],"o":[[-0.211,0.05],[0.574,-1.282],[0.133,0.19],[-0.488,1.045]],"v":[[-0.695,2.065],[-0.657,-0.32],[1.108,-1.923],[0.08,0.014]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[161.729,396.285],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 40","ix":30,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[-0.007,-0.221],[0.779,-0.99],[0.232,0.008],[-0.992,1.212]],"o":[[0.055,0.225],[-0.808,0.968],[-0.217,0.038],[0.981,-1.222]],"v":[[1.646,-1.731],[-0.081,-0.111],[-1.309,1.914],[-0.708,-0.619]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[156.493,394.137],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 41","ix":31,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0.049,-0.214],[1.135,-0.759],[0.215,0.09],[-1.391,0.895]],"o":[[-0.005,0.232],[-1.155,0.728],[-0.215,-0.043],[1.382,-0.906]],"v":[[2.208,-1.186],[-0.093,-0.078],[-2.042,1.573],[-0.533,-0.757]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[150.92,391.579],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 42","ix":32,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[-0.227,-0.129],[-0.047,-0.656],[0,0]],"o":[[0,0],[0,0],[0,0],[0.915,0.796],[0,0],[0,0]],"v":[[-23.788,1.928],[-23.695,-1.928],[21.884,-0.948],[22.27,-0.752],[23.788,1.446],[-22.881,1.919]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.851,0.8784,0.902,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[153.601,402.613],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 43","ix":33,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0.915,0.796],[0.162,-1.086]],"o":[[0,0],[0,0],[-0.047,-0.656],[0.602,0.341],[0,0]],"v":[[-23.415,1.336],[-23.415,1.336],[23.253,0.863],[21.736,-1.335],[23.253,0.863]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[1,1,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[154.136,403.196],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 44","ix":34,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[-0.223,-0.928],[-0.923,0.245],[0.326,0.897],[0.836,-0.459]],"o":[[-0.918,0.261],[0.223,0.929],[0.922,-0.245],[-0.325,-0.898],[0,0]],"v":[[-0.523,-1.704],[-1.844,0.527],[0.355,1.856],[1.742,-0.514],[-0.7,-1.642]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.218,0.5722,0.862,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[138.151,390.434],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 45","ix":35,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[-0.325,-4.541],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-0.115,-14.409],[-0.51,0.938],[24.519,14.353],[-23.056,14.835],[-24.519,-14.835]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.3198,0.419,0.5002,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[152.87,389.706],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 46","ix":36,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[11.679,-12.177],[12.404,16.939],[-9.28,17.47],[-12.404,-17.47]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.72,0.8693,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[139.061,360.959],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 47","ix":37,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[2.53,4.337],[0,0],[13.011,-4.699],[-1.807,-9.036],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[-2.53,-4.337],[0,0],[-13.011,4.698],[1.807,9.035],[0,0],[0,0],[0,0],[0,0]],"v":[[36.687,66.451],[68.851,-14.044],[65.599,-32.115],[-13.553,-61.752],[-46.081,-61.752],[-67.044,-31.754],[-57.61,-16.081],[-1.265,-14.406],[29.447,-3.202],[8.765,56.071]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[85.444,337.337],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 48","ix":38,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0.182,-0.115],[1.223,0.487],[0.023,0.232],[-1.433,-0.595]],"o":[[-0.18,0.149],[-1.212,-0.513],[-0.049,-0.209],[1.436,0.583]],"v":[[2.219,1.141],[-0.006,0.053],[-2.353,-0.736],[0.303,-0.695]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[111.609,414.649],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 49","ix":39,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0.218,0.079],[-1.088,0.89],[-0.006,-0.217],[0.882,-0.743]],"o":[[-0.211,-0.047],[1.082,-0.897],[0.035,0.229],[-0.899,0.723]],"v":[[-1.602,1.47],[-0.515,-0.652],[1.777,-1.311],[-0.001,-0.028]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[116.964,430.186],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 50","ix":40,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0.091,-0.202],[1.137,-0.545],[0.204,0.109],[-1.426,0.65]],"o":[[-0.05,0.225],[-1.152,0.511],[-0.213,-0.061],[1.419,-0.663]],"v":[[2.191,-0.685],[-0.074,0.007],[-2.069,1.281],[-0.413,-0.727]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[113.199,425.731],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 51","ix":41,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0.138,-0.17],[1.354,-0.18],[0.154,0.176],[-1.643,0.189]],"o":[[-0.107,0.206],[-1.358,0.143],[-0.173,-0.134],[1.64,-0.203]],"v":[[2.534,0.125],[-0.021,0.105],[-2.499,0.726],[-0.115,-0.699]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[109.248,420.901],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 52","ix":42,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0.248,-0.61],[0,0],[0,0],[0,0],[0,0],[-0.146,-0.214]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0.471,1.121]],"v":[[21.326,11.995],[14.828,8.879],[-21.574,-8.574],[-19.789,-11.995],[20.676,9.005],[20.934,9.348]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.851,0.8784,0.902,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[106.191,432.005],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 53","ix":43,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0.627,-0.904],[0,0],[0,0],[0.471,1.121]],"o":[[0,0],[0,0],[0.248,-0.61],[0.389,0.571]],"v":[[2.936,1.558],[-3.563,-1.558],[2.936,1.558],[2.544,-1.088]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[1,1,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[124.581,442.442],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 55","ix":44,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[1.714,-4.219],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[11.188,-12.763],[4.058,0.831],[20.593,23.919],[-22.307,3.35],[-10.521,-23.919]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.3198,0.419,0.5002,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[106.924,420.081],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 56","ix":45,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[15.946,-5.532],[3.744,20.913],[-15.946,11.816],[-3.326,-20.913]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.72,0.8693,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 54","ix":3,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[0.21,-0.93],[-0.936,-0.187],[-0.104,0.949],[0.954,-0.043]],"o":[[-0.939,-0.171],[-0.21,0.932],[0.936,0.189],[0.104,-0.949],[0,0]],"v":[[0.384,-1.799],[-1.786,-0.381],[-0.399,1.782],[1.892,0.268],[0.199,-1.821]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.218,0.5722,0.862,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[98.224,414.492],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[112.062,388.169],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 57","ix":46,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[-0.11,0.035],[0.095,0.606],[0.611,0.931],[0.258,0.223],[0.406,-0.15],[0.071,-0.227],[-0.06,-0.185],[-0.167,-0.315],[-0.475,-0.705],[-0.493,0.085],[-0.353,0.248],[-0.519,0.603],[-0.217,0.315],[-0.091,0.435],[0.476,0.19],[0.269,-0.191],[0.333,-0.45],[0.198,-0.574],[-0.034,-0.01],[-1.288,1.687],[-0.443,0.338],[-0.171,-0.087],[0.059,-0.262],[0.209,-0.301],[0.248,-0.283],[0.645,-0.467],[0.314,-0.038],[0.208,0.271],[0.365,0.59],[0.091,0.257],[-0.188,0.077],[-0.293,-0.416]],"o":[[0.034,-0.001],[-0.1,-0.602],[-0.157,-0.227],[-0.244,-0.222],[-0.203,0.065],[-0.076,0.23],[0.133,0.381],[0.372,0.626],[0.24,0.36],[0.485,-0.061],[0.685,-0.497],[0.259,-0.301],[0.203,-0.313],[0.092,-0.42],[-0.483,-0.174],[-0.546,0.453],[-0.634,0.897],[-0.194,0.579],[0.098,0.04],[0.32,-0.399],[0.226,-0.162],[0.181,0.064],[-0.057,0.269],[-0.21,0.297],[-0.497,0.566],[-0.31,0.224],[-0.316,0.039],[-0.395,-0.574],[-0.175,-0.308],[-0.097,-0.271],[0.434,-0.178],[1.22,1.729]],"v":[[-0.52,2.408],[-0.548,1.461],[-1.506,-0.951],[-2.077,-1.647],[-3.149,-1.889],[-3.624,-1.412],[-3.602,-0.769],[-3.103,0.199],[-1.949,2.153],[-0.676,2.726],[0.554,2.181],[2.361,0.516],[3.073,-0.411],[3.608,-1.476],[3.065,-2.637],[1.92,-2.378],[0.713,-1.01],[-0.47,1.285],[-0.676,2.209],[1.035,-0.773],[2.195,-1.997],[2.875,-2.176],[3.097,-1.579],[2.628,-0.72],[1.942,0.152],[0.223,1.721],[-0.74,2.167],[-1.513,1.81],[-2.652,-0.064],[-3.129,-0.928],[-2.984,-1.45],[-1.835,-0.722]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[153.103,379.388],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"phone hand","ix":47,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[-0.794,-5.346],[1.903,-0.648],[4.448,5.565],[0,0]],"o":[[0,0],[0,0],[0.685,4.615],[-4.107,1.398],[-4.05,-5.067],[0,0]],"v":[[-13.961,-24.002],[0.127,1.73],[3.963,12.113],[1.372,22.349],[-14.962,18.437],[-30.798,-13.238]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.72,0.8693,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[115.347,209.577],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 67","ix":48,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,-0.056],[3.871,-2.008],[0.122,0.128],[-1.001,1.051],[-1.979,1.013],[-1.434,0.189]],"o":[[0.032,0.174],[-3.9,1.957],[-0.046,-0.034],[0.995,-1.05],[1.981,-1.007],[1.439,-0.195]],"v":[[6.853,-3.495],[-0.629,-1.25],[-6.839,3.492],[-5.411,1.64],[-0.866,-1.713],[4.516,-3.425]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[47.137,324.398],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 68","ix":49,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,-0.01],[0.212,-0.009],[0.392,-0.012],[1.55,-0.023],[5.614,-0.02],[17.2,-0.399],[11.277,0.171],[3.152,0.095],[0.865,0.029],[0.241,0.012],[0,0.01],[-0.213,0.005],[-0.392,0.002],[-1.55,-0.012],[-5.613,-0.054],[-17.207,0.571],[-11.278,-0.075],[-3.19,-0.028],[-0.865,-0.009],[-0.242,-0.006]],"o":[[0,0.009],[-0.241,0.007],[-0.865,0.012],[-3.19,0.011],[-11.279,0.019],[-17.209,0.572],[-5.64,-0.089],[-1.549,-0.053],[-0.392,-0.019],[-0.212,-0.013],[0,-0.009],[0.241,0],[0.865,0.005],[3.189,0.03],[11.278,0.077],[17.213,-0.4],[5.614,0.049],[1.55,0.019],[0.392,0.01],[0.212,0.009]],"v":[[62.326,-0.275],[62.005,-0.248],[61.06,-0.219],[57.428,-0.165],[44.069,-0.117],[0.007,0.174],[-44.076,0.477],[-57.431,0.183],[-61.061,0.059],[-62.005,0.013],[-62.326,-0.021],[-62.004,-0.041],[-61.059,-0.045],[-57.427,-0.019],[-44.071,0.109],[-0.006,-0.346],[44.07,-0.485],[57.428,-0.368],[61.06,-0.325],[62.005,-0.301]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[74.281,333.145],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 69","ix":50,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[-7.296,0],[0,0],[0.513,-7.39]],"o":[[0,0],[0,0],[-0.343,-7.287],[0,0],[7.408,0],[0,0]],"v":[[56.807,41.203],[-58.43,43.908],[-61.937,-30.524],[-49.168,-43.908],[49.014,-43.908],[61.767,-30.24]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.47,0.47,0.47,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[73.892,363.648],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 70","ix":51,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-6.136,20.152],[2.816,20.152],[6.136,-20.151],[-4.407,-20.151]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[118.41,419.899],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 71","ix":52,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[6.136,20.152],[-2.817,20.152],[-6.136,-20.151],[4.406,-20.151]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[28.547,419.899],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"star base","ix":53,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":1,"k":[{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[{"c":true,"i":[[5.146,0],[0,0],[0,5.146],[0,0],[-5.146,0],[0,0],[0,-5.146],[0,0]],"o":[[0,0],[-5.146,0],[0,0],[0,-5.146],[0,0],[5.146,0],[0,0],[0,5.146]],"v":[[0.412,9.891],[0.136,9.891],[-9.181,0.574],[-9.181,-0.573],[0.136,-9.891],[0.412,-9.891],[9.728,-0.573],[9.728,0.574]]}],"t":5},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":true,"i":[[5.146,0],[0,0],[0,5.146],[0,0],[-5.146,0],[0,0],[0,-5.146],[0,0]],"o":[[0,0],[-5.146,0],[0,0],[0,-5.146],[0,0],[5.146,0],[0,0],[0,5.146]],"v":[[52.991,9.891],[-52.989,9.891],[-62.306,0.574],[-62.306,-0.573],[-52.989,-9.891],[52.991,-9.891],[62.306,-0.573],[62.306,0.574]]}],"t":15}],"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.851,0.8784,0.902,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[252.898,161.977],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"user base","ix":54,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":1,"k":[{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[{"c":true,"i":[[5.146,0],[0,0],[0,5.146],[0,0],[-5.145,0],[0,0],[0,-5.146],[0,0]],"o":[[0,0],[-5.145,0],[0,0],[0,-5.146],[0,0],[5.146,0],[0,0],[0,5.146]],"v":[[1.301,9.891],[1.229,9.891],[-8.088,0.573],[-8.088,-0.574],[1.229,-9.891],[1.301,-9.891],[10.619,-0.574],[10.619,0.573]]}],"t":0},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[{"c":true,"i":[[5.146,0],[0,0],[0,5.146],[0,0],[-5.145,0],[0,0],[0,-5.146],[0,0]],"o":[[0,0],[-5.145,0],[0,0],[0,-5.146],[0,0],[5.146,0],[0,0],[0,5.146]],"v":[[52.99,9.891],[-52.99,9.891],[-62.307,0.573],[-62.307,-0.574],[-52.99,-9.891],[52.99,-9.891],[62.307,-0.574],[62.307,0.573]]}],"t":10}],"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.851,0.8784,0.902,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[251.982,134.853],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 160","ix":55,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0.035,-0.043],[0.202,0.147],[0.268,0.362],[-0.319,1.38],[-0.796,0.388],[-0.246,0.039],[-0.002,-0.017],[0.746,-0.434],[0.307,-1.272],[-0.471,-0.7]],"o":[[-0.009,0.014],[-0.203,-0.145],[-0.538,-0.704],[0.334,-1.377],[0.402,-0.203],[0.247,-0.04],[0.012,0.054],[-0.735,0.415],[-0.295,1.274],[0.472,0.722]],"v":[[0.175,3.683],[-0.161,3.492],[-0.902,2.736],[-1.612,-0.626],[0.53,-3.314],[1.53,-3.657],[1.919,-3.677],[0.627,-3.137],[-1.334,-0.561],[-0.736,2.621]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.9766,0.9802,0.9834,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[251.44,92.124],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 161","ix":56,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0.079,0],[0,4.542],[-0.08,0],[0,-4.543]],"o":[[-0.08,0],[0,-4.543],[0.079,0],[0,4.542]],"v":[[0.001,8.225],[-0.142,0],[0.001,-8.225],[0.143,0]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.9766,0.9802,0.9834,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[238.494,95.718],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 162","ix":57,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0,1.315],[-1.589,0],[0,-1.589],[1.205,-0.343]],"o":[[0,0],[0,0],[-1.205,-0.343],[0,-1.589],[1.588,0],[0,1.315],[0,0]],"v":[[0.785,4.967],[-0.785,4.967],[-0.785,0.665],[-2.877,-2.09],[0.001,-4.967],[2.877,-2.09],[0.785,0.665]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[1,1,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[253.869,94.209],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 163","ix":58,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[1.244,0],[0,0],[0,1.243],[0,0],[-1.244,0],[0,0],[0,0],[0,-1.244],[0,0]],"o":[[0,0],[-1.244,0],[0,0],[0,-1.244],[0,0],[0,0],[1.244,0],[0,0],[0,1.243]],"v":[[14.958,11.042],[-14.958,11.042],[-17.21,8.79],[-17.21,-8.789],[-14.958,-11.042],[-12.76,-11.042],[14.958,-11.042],[17.21,-8.789],[17.21,8.79]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.47,0.47,0.47,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[253.869,94.996],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"lock iron rod","ix":59,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[2.837,1.497],[0.032,0.016],[1.459,0],[1.625,-2.224],[0.028,-0.039],[0,-1.912],[0,0],[0,0],[0,0],[-7.042,0],[0,-7.042],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,-3.425],[-0.032,-0.017],[-1.218,-0.624],[-2.96,0],[-0.028,0.039],[-1.028,1.454],[0,0],[0,0],[0,0],[0,-7.042],[7.041,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[12.771,12.191],[8.927,12.191],[8.927,0.58],[4.151,-7.323],[4.056,-7.372],[0,-8.348],[-7.213,-4.677],[-7.297,-4.56],[-8.929,0.58],[-8.935,15.128],[-12.771,12.191],[-12.771,0.58],[0,-12.191],[12.771,0.58],[12.771,3.564],[12.771,3.674],[12.771,11.145],[12.771,11.317]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.47,0.47,0.47,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[-10.844,12.156],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[243.026,83.92],"ix":2},"r":{"a":1,"k":[{"o":{"x":0.41,"y":-0.01},"i":{"x":0.848,"y":0.999},"s":[0],"t":176},{"o":{"x":0.167,"y":0},"i":{"x":0.848,"y":1.036},"s":[-20],"t":189},{"o":{"x":0.152,"y":0.001},"i":{"x":0.59,"y":1.01},"s":[-20],"t":227},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":240}],"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 166","ix":60,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,-0.171],[0.171,0],[0,0.172],[-0.172,0]],"o":[[0,0.172],[-0.172,0],[0,-0.171],[0.171,0]],"v":[[0.311,0],[0.001,0.311],[-0.311,0],[0.001,-0.311]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.47,0.47,0.47,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[287.271,71.94],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 167","ix":61,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,-0.172],[0.171,0],[0,0.171],[-0.171,0]],"o":[[0,0.171],[-0.171,0],[0,-0.172],[0.171,0]],"v":[[0.311,0],[0,0.311],[-0.311,0],[0,-0.311]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.47,0.47,0.47,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[282.953,86.426],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 168","ix":62,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,-0.172],[0.172,0],[0,0.171],[-0.172,0]],"o":[[0,0.171],[-0.172,0],[0,-0.172],[0.172,0]],"v":[[0.311,0],[0,0.311],[-0.311,0],[0,-0.311]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.47,0.47,0.47,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[234.462,69.772],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 169","ix":63,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,-0.172],[0.171,0],[0,0.171],[-0.171,0]],"o":[[0,0.171],[-0.171,0],[0,-0.172],[0.171,0]],"v":[[0.311,0.001],[0,0.311],[-0.311,0.001],[0,-0.311]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.47,0.47,0.47,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[227.83,104.035],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"circle near lock","ix":64,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,-0.675],[0.676,0],[0,0.675],[-0.675,0]],"o":[[0,0.675],[-0.675,0],[0,-0.675],[0.676,0]],"v":[[1.223,0],[0,1.223],[-1.223,0],[0,-1.223]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.47,0.47,0.47,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":1,"k":[{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[288.183,62.125],"t":0,"ti":[0,0],"to":[0,-1.042]},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[288.183,55.875],"t":150,"ti":[0,-1.042],"to":[0,0]},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[288.183,62.125],"t":300}],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"circle near lock","ix":65,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[-0.477,-0.478],[0.478,-0.477],[0.477,0.478],[-0.478,0.477]],"o":[[0.478,0.477],[-0.477,0.478],[-0.478,-0.477],[0.477,-0.478]],"v":[[0.864,-0.865],[0.864,0.864],[-0.864,0.864],[-0.864,-0.865]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.47,0.47,0.47,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":1,"k":[{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[219.555,103.379],"t":0,"ti":[0,0],"to":[0,-1.25]},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[219.555,95.879],"t":150,"ti":[0,-1.25],"to":[0,0]},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[219.555,103.379],"t":300}],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"atom ring1","ix":66,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0.212,0.139],[0,0],[0,0],[0.239,0.066],[0.133,0.037],[0.15,0.03],[0.166,0.013],[0.181,-0.007],[0.915,-0.207],[2.292,-1.369],[2.529,-2.22],[2.575,-3.005],[2.387,-3.757],[1.064,-2.072],[0.82,-2.276],[0.227,-2.487],[-0.275,-1.231],[-0.297,-0.556],[-0.494,-0.398],[-0.607,-0.17],[-0.629,0.02],[-1.174,0.409],[-2.003,1.349],[-1.738,1.549],[-1.524,1.622],[-2.272,3.24],[-1.519,3.003],[-0.751,2.566],[0.056,1.882],[0.207,0.694],[0.051,0.159],[0.073,0.134],[0.061,0.124],[0.067,0.104],[0.122,0.143],[0,0],[0,0],[0,0],[-0.191,-0.168],[0,0],[0,0],[-0.126,-0.215],[-0.07,-0.12],[-0.069,-0.137],[-0.056,-0.158],[-0.039,-0.178],[-0.033,-0.942],[0.749,-2.569],[1.516,-3.01],[2.267,-3.251],[3.045,-3.256],[1.745,-1.551],[2.006,-1.367],[2.371,-0.846],[1.282,-0.04],[0.628,0.154],[0.524,0.392],[0.324,0.561],[0.141,0.624],[-0.104,1.248],[-0.811,2.283],[-1.07,2.074],[-1.194,1.881],[-2.579,3.009],[-2.538,2.219],[-2.307,1.364],[-1.847,0.408],[-0.727,-0.033],[-0.167,-0.011],[-0.149,-0.038],[-0.137,-0.029],[-0.118,-0.039],[-0.168,-0.084],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[-0.17,-0.081],[-0.118,-0.037],[-0.136,-0.027],[-0.148,-0.037],[-0.166,-0.01],[-0.723,-0.028],[-1.837,0.415],[-2.298,1.367],[-2.53,2.22],[-2.571,3.008],[-1.19,1.879],[-1.066,2.07],[-0.808,2.276],[-0.105,1.238],[0.139,0.613],[0.315,0.545],[0.507,0.379],[0.613,0.149],[1.26,-0.04],[2.352,-0.839],[2.001,-1.363],[1.743,-1.546],[3.044,-3.248],[2.269,-3.243],[1.519,-3.003],[0.754,-2.561],[-0.027,-0.938],[-0.038,-0.177],[-0.055,-0.158],[-0.067,-0.137],[-0.069,-0.119],[-0.124,-0.215],[0,0],[0,0],[-0.187,-0.171],[0,0],[0,0],[0,0],[0.123,0.143],[0.067,0.104],[0.062,0.125],[0.074,0.135],[0.052,0.159],[0.213,0.697],[0.064,1.89],[-0.745,2.574],[-1.516,3.011],[-2.272,3.247],[-1.526,1.625],[-1.741,1.553],[-2.01,1.355],[-1.184,0.414],[-0.641,0.02],[-0.624,-0.173],[-0.511,-0.411],[-0.305,-0.572],[-0.279,-1.252],[0.23,-2.506],[0.823,-2.284],[1.066,-2.075],[2.395,-3.761],[2.583,-3.006],[2.537,-2.218],[2.303,-1.365],[0.92,-0.204],[0.183,-0.006],[0.167,0.015],[0.151,0.032],[0.133,0.039],[0.239,0.069],[0,0],[0,0],[0.21,0.144]],"v":[[20.186,-26.039],[19.863,-26.247],[19.684,-26.364],[19.453,-26.478],[18.851,-26.729],[18.477,-26.849],[18.049,-26.935],[17.576,-27],[17.056,-27.036],[14.583,-26.751],[8.322,-24.029],[1.048,-18.609],[-6.646,-10.745],[-14.163,-0.598],[-17.562,5.327],[-20.426,11.846],[-22.137,18.998],[-21.971,22.737],[-21.325,24.504],[-20.113,25.941],[-18.42,26.759],[-16.547,26.946],[-12.883,26.176],[-6.382,22.737],[-0.782,18.337],[4.111,13.567],[12.063,3.757],[17.762,-5.654],[21.198,-14.049],[22.273,-20.79],[21.932,-23.256],[21.768,-23.75],[21.588,-24.193],[21.397,-24.586],[21.187,-24.917],[20.794,-25.437],[20.627,-25.634],[20.468,-25.777],[20.186,-26.039],[20.478,-25.788],[20.639,-25.647],[20.812,-25.452],[21.212,-24.934],[21.425,-24.602],[21.621,-24.209],[21.805,-23.765],[21.974,-23.268],[22.331,-20.791],[21.277,-14.026],[17.855,-5.607],[12.165,3.828],[4.211,13.66],[-0.688,18.443],[-6.3,22.856],[-12.834,26.314],[-16.542,27.093],[-18.457,26.901],[-20.203,26.058],[-21.454,24.576],[-22.115,22.769],[-22.284,18.985],[-20.562,11.797],[-17.687,5.262],[-14.278,-0.672],[-6.739,-10.825],[0.979,-18.687],[8.278,-24.1],[14.57,-26.807],[17.057,-27.08],[17.58,-27.04],[18.055,-26.972],[18.485,-26.881],[18.86,-26.757],[19.462,-26.498],[19.694,-26.38],[19.872,-26.259]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.47,0.47,0.47,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[254.409,85.188],"ix":2},"r":{"a":1,"k":[{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[0],"t":0},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[-10],"t":30},{"o":{"x":0.167,"y":0},"i":{"x":0.667,"y":1},"s":[10],"t":90},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[-10],"t":150},{"o":{"x":0.167,"y":0},"i":{"x":0.667,"y":1},"s":[10],"t":210},{"o":{"x":0.333,"y":0},"i":{"x":0.833,"y":1},"s":[-10],"t":270},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":300}],"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"atom ring 2","ix":67,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0.021,0.253],[0,0],[0.018,0.092],[0.095,0.23],[0.053,0.128],[0.067,0.137],[0.09,0.14],[0.117,0.139],[0.725,0.596],[2.486,0.973],[3.303,0.639],[3.953,0.194],[4.432,-0.416],[2.289,-0.429],[2.302,-0.747],[2.104,-1.344],[0.804,-0.971],[0.256,-0.576],[0.012,-0.634],[-0.239,-0.584],[-0.402,-0.485],[-1.042,-0.677],[-2.295,-0.756],[-2.29,-0.425],[-2.215,-0.21],[-3.953,0.189],[-3.305,0.639],[-2.488,0.979],[-1.453,1.197],[-0.42,0.589],[-0.094,0.138],[-0.062,0.14],[-0.06,0.124],[-0.042,0.116],[-0.04,0.184],[-0.011,0.078],[0,0],[0,0],[0.016,-0.254],[0,0],[0.017,-0.093],[0.093,-0.232],[0.051,-0.129],[0.066,-0.138],[0.091,-0.141],[0.116,-0.14],[0.726,-0.602],[2.49,-0.983],[3.308,-0.647],[3.959,-0.199],[4.441,0.413],[2.295,0.428],[2.31,0.749],[2.121,1.355],[0.819,0.989],[0.265,0.591],[0.011,0.655],[-0.246,0.599],[-0.407,0.494],[-1.052,0.682],[-2.301,0.758],[-2.294,0.425],[-2.218,0.209],[-3.959,-0.195],[-3.308,-0.647],[-2.491,-0.988],[-1.454,-1.21],[-0.42,-0.595],[-0.094,-0.139],[-0.061,-0.142],[-0.061,-0.125],[-0.042,-0.117],[-0.038,-0.185],[-0.01,-0.078],[0,0]],"o":[[0,0],[0,0],[-0.011,-0.078],[-0.04,-0.184],[-0.042,-0.116],[-0.061,-0.124],[-0.062,-0.14],[-0.094,-0.138],[-0.42,-0.589],[-1.453,-1.197],[-2.489,-0.978],[-3.305,-0.639],[-3.952,-0.189],[-2.215,0.21],[-2.289,0.425],[-2.293,0.755],[-1.042,0.676],[-0.4,0.485],[-0.239,0.583],[0.011,0.633],[0.257,0.576],[0.802,0.972],[2.105,1.345],[2.302,0.747],[2.29,0.429],[4.433,0.416],[3.953,-0.194],[3.303,-0.639],[2.486,-0.973],[0.725,-0.596],[0.118,-0.139],[0.091,-0.14],[0.067,-0.137],[0.053,-0.128],[0.095,-0.23],[0.018,-0.092],[0,0],[0.021,-0.253],[0,0],[0,0],[-0.01,0.079],[-0.038,0.185],[-0.041,0.117],[-0.06,0.125],[-0.061,0.141],[-0.093,0.139],[-0.421,0.595],[-1.453,1.209],[-2.491,0.988],[-3.308,0.647],[-3.958,0.195],[-2.218,-0.208],[-2.295,-0.425],[-2.302,-0.758],[-1.052,-0.683],[-0.408,-0.494],[-0.245,-0.6],[0.011,-0.655],[0.263,-0.592],[0.82,-0.987],[2.121,-1.354],[2.31,-0.748],[2.295,-0.428],[4.44,-0.412],[3.958,0.2],[3.308,0.647],[2.491,0.982],[0.725,0.603],[0.116,0.14],[0.091,0.141],[0.066,0.138],[0.051,0.129],[0.093,0.232],[0.017,0.092],[0,0],[0.016,0.254]],"v":[[32.96,0],[32.926,-0.383],[32.909,-0.596],[32.857,-0.85],[32.687,-1.479],[32.553,-1.848],[32.359,-2.238],[32.121,-2.652],[31.83,-3.085],[30.089,-4.866],[24.103,-8.146],[15.363,-10.574],[4.433,-11.836],[-8.191,-11.561],[-14.957,-10.617],[-21.865,-8.886],[-28.564,-5.857],[-31.417,-3.435],[-32.417,-1.841],[-32.811,-0.003],[-32.421,1.836],[-31.421,3.43],[-28.568,5.855],[-21.866,8.885],[-14.958,10.616],[-8.191,11.561],[4.434,11.836],[15.365,10.573],[24.103,8.145],[30.09,4.865],[31.83,3.085],[32.121,2.652],[32.359,2.238],[32.553,1.847],[32.687,1.478],[32.857,0.849],[32.909,0.595],[32.926,0.383],[32.96,0],[32.941,0.384],[32.928,0.598],[32.879,0.854],[32.715,1.487],[32.583,1.86],[32.392,2.255],[32.154,2.673],[31.866,3.11],[30.125,4.909],[24.134,8.222],[15.383,10.675],[4.441,11.958],[-8.204,11.696],[-14.984,10.755],[-21.911,9.023],[-28.647,5.978],[-31.535,3.524],[-32.556,1.894],[-32.96,-0.004],[-32.553,-1.899],[-31.531,-3.529],[-28.643,-5.98],[-21.91,-9.024],[-14.983,-10.755],[-8.204,-11.696],[4.439,-11.958],[15.382,-10.676],[24.132,-8.223],[30.125,-4.91],[31.866,-3.111],[32.154,-2.674],[32.392,-2.255],[32.583,-1.86],[32.715,-1.488],[32.879,-0.854],[32.928,-0.598],[32.941,-0.384]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.47,0.47,0.47,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[253.663,86.426],"ix":2},"r":{"a":1,"k":[{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[0],"t":0},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[10],"t":30},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[-10],"t":90},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[10],"t":149},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[-10],"t":211},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[10],"t":270},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":299}],"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"atom ring 3","ix":68,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[-0.154,0.202],[0,0],[0,0],[-0.083,0.234],[-0.046,0.13],[-0.041,0.147],[-0.024,0.165],[-0.006,0.181],[0.143,0.927],[1.208,2.381],[2.04,2.676],[2.82,2.776],[3.584,2.64],[1.994,1.204],[2.215,0.975],[2.465,0.397],[1.247,-0.189],[0.575,-0.258],[0.431,-0.465],[0.211,-0.594],[0.024,-0.629],[-0.327,-1.199],[-1.209,-2.091],[-1.425,-1.842],[-1.514,-1.631],[-3.076,-2.49],[-2.891,-1.723],[-2.508,-0.926],[-1.88,-0.074],[-0.706,0.159],[-0.162,0.04],[-0.14,0.064],[-0.128,0.052],[-0.11,0.058],[-0.152,0.111],[0,0],[0,0],[0,0],[0.18,-0.18],[0,0],[0,0],[0.224,-0.112],[0.124,-0.062],[0.142,-0.059],[0.162,-0.045],[0.179,-0.028],[0.943,0.033],[2.511,0.924],[2.898,1.719],[3.087,2.486],[3.038,3.263],[1.428,1.847],[1.226,2.096],[0.681,2.423],[-0.048,1.283],[-0.196,0.618],[-0.428,0.497],[-0.582,0.284],[-0.633,0.097],[-1.239,-0.191],[-2.223,-0.967],[-1.995,-1.21],[-1.795,-1.321],[-2.824,-2.78],[-2.04,-2.685],[-1.201,-2.395],[-0.281,-1.871],[0.083,-0.724],[0.022,-0.165],[0.048,-0.146],[0.038,-0.134],[0.047,-0.115],[0.095,-0.163],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0.092,-0.164],[0.045,-0.115],[0.037,-0.133],[0.047,-0.146],[0.021,-0.165],[0.077,-0.721],[-0.287,-1.861],[-1.206,-2.387],[-2.041,-2.677],[-2.824,-2.773],[-1.793,-1.318],[-1.991,-1.207],[-2.215,-0.963],[-1.229,-0.19],[-0.622,0.095],[-0.567,0.276],[-0.413,0.48],[-0.191,0.601],[-0.047,1.26],[0.675,2.404],[1.221,2.09],[1.424,1.844],[3.031,3.26],[3.079,2.487],[2.891,1.722],[2.504,0.929],[0.938,0.037],[0.179,-0.026],[0.161,-0.044],[0.141,-0.057],[0.124,-0.06],[0.223,-0.109],[0,0],[0,0],[0.184,-0.176],[0,0],[0,0],[0,0],[-0.151,0.113],[-0.109,0.06],[-0.129,0.052],[-0.14,0.065],[-0.163,0.041],[-0.71,0.164],[-1.889,-0.065],[-2.517,-0.921],[-2.9,-1.72],[-3.083,-2.489],[-1.517,-1.633],[-1.43,-1.845],[-1.214,-2.098],[-0.33,-1.209],[0.024,-0.64],[0.217,-0.61],[0.445,-0.481],[0.591,-0.266],[1.269,-0.192],[2.483,0.401],[2.221,0.979],[1.997,1.208],[3.587,2.647],[2.821,2.784],[2.038,2.684],[1.204,2.391],[0.14,0.932],[-0.006,0.182],[-0.026,0.166],[-0.042,0.147],[-0.048,0.131],[-0.085,0.235],[0,0],[0,0],[-0.157,0.199]],"v":[[24.593,21.973],[24.823,21.664],[24.952,21.495],[25.083,21.271],[25.374,20.688],[25.519,20.323],[25.635,19.903],[25.732,19.434],[25.804,18.919],[25.69,16.431],[23.406,9.997],[18.5,2.368],[11.184,-5.849],[1.58,-14.048],[-4.098,-17.847],[-10.404,-21.153],[-17.42,-23.353],[-21.162,-23.445],[-22.969,-22.921],[-24.487,-21.812],[-25.419,-20.179],[-25.735,-18.323],[-25.219,-14.615],[-22.236,-7.893],[-18.233,-2.002],[-13.811,3.207],[-4.573,11.817],[4.424,18.15],[12.562,22.156],[19.213,23.693],[21.697,23.523],[22.202,23.393],[22.656,23.243],[23.06,23.079],[23.406,22.894],[23.952,22.538],[24.16,22.384],[24.313,22.236],[24.593,21.973],[24.324,22.247],[24.171,22.398],[23.965,22.556],[23.42,22.92],[23.075,23.111],[22.669,23.278],[22.213,23.432],[21.707,23.566],[19.21,23.75],[12.534,22.233],[4.371,18.24],[-4.65,11.912],[-13.911,3.299],[-18.344,-1.916],[-22.361,-7.82],[-25.361,-14.577],[-25.882,-18.329],[-25.559,-20.227],[-24.597,-21.91],[-23.032,-23.055],[-21.184,-23.591],[-17.397,-23.498],[-10.345,-21.286],[-4.025,-17.968],[1.661,-14.157],[11.27,-5.937],[18.583,2.304],[23.479,9.96],[25.747,16.422],[25.847,18.923],[25.772,19.441],[25.671,19.912],[25.551,20.334],[25.401,20.699],[25.102,21.282],[24.967,21.505],[24.834,21.674]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.47,0.47,0.47,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[252.952,86.366],"ix":2},"r":{"a":1,"k":[{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[0],"t":0},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[-10],"t":30},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[0],"t":90},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[-10],"t":150},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[0],"t":210},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[-10],"t":270},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":300}],"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 175","ix":69,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,-0.144],[52.944,0],[0,0.144],[-52.962,0]],"o":[[0,0.144],[-52.962,0],[0,-0.144],[52.944,0]],"v":[[95.878,0],[0.005,0.26],[-95.878,0],[0.005,-0.26]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[250.458,41.485],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 176","ix":70,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,-1.831],[1.832,0],[0,1.831],[-1.83,0]],"o":[[0,1.831],[-1.83,0],[0,-1.831],[1.832,0]],"v":[[3.314,0],[-0.001,3.315],[-3.314,0],[-0.001,-3.315]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[185.101,32.081],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 177","ix":71,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,-1.831],[1.831,0],[0,1.831],[-1.831,0]],"o":[[0,1.831],[-1.831,0],[0,-1.831],[1.831,0]],"v":[[3.315,0],[0,3.315],[-3.315,0],[0,-3.315]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[175.419,32.081],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 178","ix":72,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,-1.831],[1.831,0],[0,1.831],[-1.83,0]],"o":[[0,1.831],[-1.83,0],[0,-1.831],[1.831,0]],"v":[[3.316,0],[-0.001,3.315],[-3.315,0],[-0.001,-3.315]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[165.736,32.081],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 179","ix":73,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[-0.312,0.02],[-0.593,0.171],[-0.733,0.551],[-0.507,1.095],[0.056,1.493],[0.005,1.771],[0.009,4.599],[0.035,32.894],[0.012,19.342],[0.009,4.993],[2.318,0.836],[1.287,0.003],[1.288,-0.001],[10.874,-0.004],[50.193,-0.007],[1.135,-0.988],[0.198,-1.485],[0.008,-0.779],[0,0],[0,-1.55],[0.001,-6.112],[0.002,-11.836],[0.005,-21.751],[0.004,-10.304],[-0.045,-0.609],[-0.238,-0.571],[-1.005,-0.701],[-1.219,-0.027],[-1.247,-0.004],[-4.836,-0.003],[-16.449,-0.009],[-18.403,-0.02],[-4.85,-0.011],[-1.247,-0.006],[0,0],[1.241,-0.009],[2.417,-0.012],[9.195,-0.021],[32.895,-0.036],[19.343,-0.011],[4.998,-0.002],[1.262,0.002],[1.081,0.745],[0.495,1.229],[0.072,0.659],[0.007,0.648],[0.004,10.876],[0.005,23.671],[0.002,12.225],[0.001,6.198],[0,1.555],[0,0],[-0.112,0.816],[-1.238,1.057],[-1.631,0],[-43.496,-0.006],[-10.304,-0.004],[-1.278,0],[-1.234,-0.513],[-0.122,-2.594],[-0.004,-4.84],[0.01,-16.45],[0.019,-18.405],[0.007,-3.542],[0.004,-1.495],[0.584,-1.087],[0.74,-0.546],[0.595,-0.177],[0.314,-0.013]],"o":[[0,0],[0.313,-0.021],[0.587,-0.185],[0.726,-0.546],[0.567,-1.081],[-0.004,-1.495],[-0.007,-3.542],[-0.02,-18.405],[-0.01,-16.45],[-0.008,-4.831],[-0.116,-2.422],[-1.148,-0.478],[-1.278,0.001],[-10.304,0.004],[-43.496,0.006],[-1.511,0.001],[-1.144,0.977],[-0.104,0.73],[0,0],[-0.001,1.555],[0,6.198],[-0.001,12.225],[-0.005,23.671],[-0.004,10.876],[0.005,0.64],[0.069,0.614],[0.461,1.146],[1.009,0.697],[1.257,0.003],[4.998,0.002],[19.343,0.011],[32.895,0.035],[9.195,0.021],[2.417,0.011],[1.241,0.008],[0,0],[-1.247,0.006],[-4.85,0.011],[-18.403,0.019],[-16.449,0.009],[-4.836,0.003],[-1.251,-0.002],[-1.302,-0.028],[-1.078,-0.75],[-0.256,-0.612],[-0.05,-0.673],[-0.003,-10.304],[-0.005,-21.751],[-0.001,-11.836],[0,-6.112],[0,-1.55],[0,0],[0.01,-0.775],[0.216,-1.608],[1.226,-1.07],[50.193,0.007],[10.874,0.004],[1.288,0],[1.251,0.004],[2.483,0.898],[0.005,5.002],[-0.011,19.342],[-0.035,32.894],[-0.009,4.599],[-0.004,1.771],[0.05,1.481],[-0.523,1.108],[-0.746,0.55],[-0.6,0.165],[-0.314,0.011]],"v":[[89.358,88.775],[89.829,88.738],[91.202,88.481],[93.242,87.444],[95.228,85.01],[95.854,81.07],[95.841,76.17],[95.818,63.943],[95.735,-13.978],[95.702,-67.786],[95.676,-82.524],[91.571,-88.062],[87.88,-88.466],[84.031,-88.464],[52.249,-88.453],[-89.26,-88.433],[-93.399,-86.89],[-95.506,-83.026],[-95.577,-80.729],[-95.577,-78.395],[-95.578,-73.739],[-95.579,-55.271],[-95.583,-19.165],[-95.598,49.091],[-95.609,80.876],[-95.581,82.784],[-95.149,84.58],[-92.88,87.422],[-89.448,88.542],[-85.692,88.553],[-70.939,88.56],[-17.129,88.591],[60.788,88.674],[81.972,88.723],[87.481,88.749],[89.358,88.775],[87.481,88.802],[81.972,88.828],[60.788,88.877],[-17.129,88.96],[-70.939,88.991],[-85.692,88.998],[-89.461,88.991],[-93.137,87.794],[-95.571,84.75],[-96.035,82.824],[-96.067,80.876],[-96.078,49.091],[-96.093,-19.165],[-96.097,-55.271],[-96.098,-73.739],[-96.098,-78.395],[-96.098,-80.729],[-96.022,-83.099],[-93.74,-87.283],[-89.26,-88.954],[52.249,-88.933],[84.031,-88.922],[87.88,-88.921],[91.729,-88.485],[96.12,-82.551],[96.134,-67.786],[96.103,-13.978],[96.02,63.943],[95.996,76.17],[95.984,81.07],[95.323,85.056],[93.289,87.508],[91.217,88.531],[89.831,88.765]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[250.418,108.475],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 180","ix":74,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[3.624,0],[0,0],[0,3.623],[0,0],[-3.622,0],[0,0],[0,-3.623],[0,0]],"o":[[0,0],[-3.622,0],[0,0],[0,-3.623],[0,0],[3.624,0],[0,0],[0,3.623]],"v":[[89.318,88.734],[-89.318,88.734],[-95.878,82.174],[-95.878,-82.174],[-89.318,-88.734],[89.318,-88.734],[95.878,-82.174],[95.878,82.174]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[1,1,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[250.458,108.516],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 181","ix":75,"cix":2,"np":4,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,-0.144],[118.209,0],[0,0.144],[-118.25,0]],"o":[[0,0.144],[-118.25,0],[0,-0.144],[118.209,0]],"v":[[214.069,0],[0.01,0.26],[-214.069,0],[0.01,-0.26]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.24,0.24,0.24,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[214.069,440.65],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 182","ix":76,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[12.438,4.936],[-12.438,4.936],[-12.438,-4.936],[12.438,-4.936]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[1,1,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[245.806,390.111],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 183","ix":77,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-9.687,-2.338],[-9.687,2.338],[9.687,2.338],[9.687,-2.338]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.218,0.5722,0.862,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[245.547,376.99],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 184","ix":78,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-24.716,19.873],[23.38,19.873],[23.38,-11.19],[26.722,-11.19],[26.722,-19.874],[-26.721,-19.874],[-26.721,-11.992]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.851,0.8784,0.902,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[294.646,380.833],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 185","ix":79,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-51.438,-4.342],[-51.438,4.342],[51.438,4.342],[51.438,-4.342],[-2.005,-4.342]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.851,0.8784,0.902,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[269.93,365.301],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 186","ix":80,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-47.763,-15.532],[-47.763,15.531],[-2.339,15.531],[47.763,15.531],[47.763,-15.532]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.851,0.8784,0.902,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[270.263,385.174],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 187","ix":81,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[12.438,4.936],[-12.438,4.936],[-12.438,-4.937],[12.438,-4.937]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[1,1,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[231.108,429.817],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 188","ix":82,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-9.686,-2.338],[-9.686,2.338],[9.686,2.338],[9.686,-2.338]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.218,0.5722,0.862,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[230.85,416.696],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 189","ix":83,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-24.716,19.874],[23.38,19.874],[23.38,-11.189],[26.72,-11.189],[26.72,-19.874],[-26.72,-19.874],[-26.72,-11.993]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.851,0.8784,0.902,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[279.949,420.538],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 190","ix":84,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-51.437,-4.342],[-51.437,4.342],[51.437,4.342],[51.437,-4.342],[-2.004,-4.342]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.851,0.8784,0.902,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[255.233,405.007],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"Group 191","ix":85,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-47.763,-15.531],[-47.763,15.531],[-2.338,15.531],[47.763,15.531],[47.763,-15.531]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.851,0.8784,0.902,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[255.567,424.88],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"star3","ix":86,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[4.404,0.023],[9.456,2.757],[7.184,6.559],[2.087,3.546],[2.179,9.156],[-2.178,9.156],[-2.132,3.499],[-7.231,6.559],[-9.456,2.757],[-4.404,0.023],[-9.456,-2.758],[-7.231,-6.559],[-2.132,-3.501],[-2.178,-9.156],[2.179,-9.156],[2.087,-3.501],[7.184,-6.559],[9.456,-2.758]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.218,0.5722,0.862,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[417.49,169.964],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":51},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[100],"t":52},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[100],"t":69},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":70}],"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"star2","ix":87,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[4.404,0.023],[9.457,2.757],[7.185,6.559],[2.087,3.546],[2.179,9.156],[-2.178,9.156],[-2.132,3.499],[-7.231,6.559],[-9.457,2.757],[-4.404,0.023],[-9.457,-2.758],[-7.231,-6.559],[-2.132,-3.501],[-2.178,-9.156],[2.179,-9.156],[2.087,-3.501],[7.185,-6.559],[9.457,-2.758]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.218,0.5722,0.862,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[396.447,169.964],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":42},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[100],"t":43},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[100],"t":80},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":81}],"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"star1","ix":88,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[4.403,0.023],[9.456,2.757],[7.184,6.559],[2.087,3.546],[2.179,9.156],[-2.178,9.156],[-2.132,3.499],[-7.231,6.559],[-9.456,2.757],[-4.404,0.023],[-9.456,-2.758],[-7.231,-6.559],[-2.132,-3.501],[-2.178,-9.156],[2.179,-9.156],[2.087,-3.501],[7.184,-6.559],[9.456,-2.758]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.218,0.5722,0.862,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[375.405,169.964],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":32},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[100],"t":33},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[100],"t":94},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":95}],"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"protection  shield lock hole","ix":89,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,3.749],[4.531,0],[0,-4.53],[-3.434,-0.978],[0,0],[0,0],[0,0]],"o":[[0,-4.53],[-4.53,0],[0,3.749],[0,0],[0,0],[0,0],[3.435,-0.979]],"v":[[8.203,-5.958],[-0.001,-14.161],[-8.203,-5.958],[-2.238,1.896],[-2.238,14.161],[2.238,14.161],[2.238,1.896]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.851,0.8784,0.902,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":1,"k":[{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[0,0],"t":87},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[110,110],"t":111},{"o":{"x":0.167,"y":0},"i":{"x":0.667,"y":1},"s":[100,100],"t":118},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[100,100],"t":144},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[110,110],"t":151},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0,0],"t":177}],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[99.899,53.989],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"protection shield","ix":90,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[4.106,1.178],[0,0],[0,0],[0,-3.436],[0,0],[-6.503,-10.393],[-13.045,-5.724],[-5.472,8.746],[0,11.88],[0,0]],"o":[[0,0],[0,0],[-3.746,1.742],[0,0],[0,11.88],[5.473,8.746],[11.992,-3.836],[6.504,-10.394],[0,0],[0,-4.9]],"v":[[29.626,-35.115],[0,-45.593],[-29.338,-35.257],[-36.369,-29.036],[-36.369,-11.929],[-26.704,22.117],[0.288,45.593],[26.704,22.784],[36.369,-11.261],[36.369,-26.645]]},"ix":2}},{"ty":"fl","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.851,0.8784,0.902,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":1,"k":[{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[0,0],"t":83},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[110,110],"t":111},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[100,100],"t":117},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[100,100],"t":144},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[110,110],"t":151},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0,0],"t":177}],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[98.262,55.53],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":16}],"ddd":0,"h":444,"w":429,"meta":{"a":"","k":"","d":"","g":"LottieFiles AE 0.1.20","tc":"#000000"},"v":"5.5.7","fr":30,"op":240,"ip":0,"fonts":{"list":[{"ascent":75.0099999997765,"fClass":"","fFamily":"Roboto","fStyle":"Bold","fName":"Roboto-Bold","fPath":"","fWeight":"","origin":0}]},"chars":[{"ch":"u","fFamily":"Roboto","size":9,"style":"Bold","w":55.96,"data":{"shapes":[{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"u","ix":1,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"u","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[4.785,0],[0,5.508],[0,0],[0,0],[0,0],[-2.979,-3.255],[-5.664,0],[-3.484,4.232]],"o":[[0,0],[0,0],[0,0],[0,0],[-1.791,3.325],[-5.013,0],[0,0],[0,0],[0,0],[0.065,6.283],[2.979,3.255],[6.152,0],[0,0]],"v":[[37.451,0],[50.732,0],[50.732,-52.832],[36.572,-52.832],[36.572,-15.387],[26.709,-10.4],[19.189,-18.661],[19.189,-52.832],[5.078,-52.832],[5.078,-18.213],[9.644,-3.906],[22.607,0.977],[37.061,-5.371]]},"ix":2}}]}]}},{"ch":"s","fFamily":"Roboto","size":9,"style":"Bold","w":51.42,"data":{"shapes":[{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"s","ix":1,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"s","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[1.383,-1.025],[2.702,0],[1.725,1.335],[0.13,2.507],[0,0],[-1.953,-2.75],[-3.435,-1.579],[-4.427,0],[-4.134,2.979],[0,4.818],[7.454,2.734],[3.516,0.7],[1.481,0.961],[0,1.563],[-1.302,1.074],[-2.377,0],[-1.302,-1.318],[0,-2.018],[0,0],[4.02,3.158],[6.705,0],[3.889,-3.141],[0,-4.688],[-12.566,-2.637],[-1.709,-0.993],[0,-1.725]],"o":[[-1.384,1.025],[-2.898,0],[-1.726,-1.334],[0,0],[0,3.191],[1.953,2.751],[3.434,1.579],[6.543,0],[4.134,-2.979],[0,-6.738],[-2.409,-0.879],[-3.516,-0.7],[-1.482,-0.96],[0,-1.66],[1.302,-1.074],[2.766,0],[1.302,1.318],[0,0],[0,-5.045],[-4.021,-3.157],[-6.283,0],[-3.89,3.142],[0,8.041],[3.776,0.781],[1.709,0.993],[0,1.66]],"v":[[31.958,-10.571],[25.83,-9.033],[18.896,-11.035],[16.113,-16.797],[2.734,-16.797],[5.664,-7.886],[13.745,-1.392],[25.537,0.977],[41.553,-3.491],[47.754,-15.186],[36.572,-29.395],[27.686,-31.763],[20.19,-34.253],[17.969,-38.037],[19.922,-42.139],[25.439,-43.75],[31.543,-41.772],[33.496,-36.768],[47.607,-36.768],[41.577,-49.072],[25.488,-53.809],[10.229,-49.097],[4.395,-37.354],[23.242,-21.338],[31.47,-18.677],[34.033,-14.6]]},"ix":2}}]}]}},{"ch":"e","fFamily":"Roboto","size":9,"style":"Bold","w":54.05,"data":{"shapes":[{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"e","ix":1,"cix":2,"np":5,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"e","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[-3.613,1.676],[-2.116,2.995],[0,0],[5.436,0],[2.295,2.084],[0.455,3.451],[0,0],[0,0],[4.15,4.558],[7.227,0],[3.76,-2.262],[2.051,-4.182],[0,-5.305],[0,0],[-4.867,-4.752],[-7.748,0]],"o":[[3.613,-1.676],[0,0],[-3.06,3.939],[-3.516,0],[-2.295,-2.083],[0,0],[0,0],[0,-8.366],[-4.15,-4.557],[-4.818,0],[-3.76,2.263],[-2.051,4.183],[0,0],[0,7.91],[4.866,4.753],[4.395,0]],"v":[[41.748,-1.538],[50.342,-8.545],[43.408,-16.309],[30.664,-10.4],[21.948,-13.525],[17.822,-21.826],[51.465,-21.826],[51.465,-27.588],[45.239,-46.973],[28.174,-53.809],[15.308,-50.415],[6.592,-40.747],[3.516,-26.514],[3.516,-25.146],[10.815,-6.152],[29.736,0.977]]},"ix":2}},{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"e","ix":2,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[-1.628,-1.717],[-0.066,-3.139],[0,0],[0,0],[-1.742,1.897],[-2.8,0]],"o":[[1.627,1.717],[0,0],[0,0],[0.488,-3.531],[1.741,-1.897],[2.995,0]],"v":[[35.059,-39.857],[37.598,-32.574],[37.598,-31.445],[17.969,-31.445],[21.313,-39.587],[28.125,-42.432]]},"ix":2}}]}]}},{"ch":"r","fFamily":"Roboto","size":9,"style":"Bold","w":36.47,"data":{"shapes":[{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"r","ix":1,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"r","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[1.563,0],[2.832,-4.85],[0,0],[0,0],[0,0],[0,0],[0,0],[-5.339,0],[-1.921,-0.26]],"o":[[-1.367,-0.423],[-5.013,0],[0,0],[0,0],[0,0],[0,0],[0,0],[1.66,-3.613],[1.465,0],[0,0]],"v":[[35.303,-53.174],[30.908,-53.809],[19.141,-46.533],[18.75,-52.832],[5.42,-52.832],[5.42,0],[19.531,0],[19.531,-34.57],[30.029,-39.99],[35.107,-39.6]]},"ix":2}}]}]}},{"ch":"n","fFamily":"Roboto","size":9,"style":"Bold","w":56.01,"data":{"shapes":[{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"n","ix":1,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"n","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[-3.972,0],[-1.302,-1.35],[0,-2.995],[0,0],[0,0],[0,0],[2.734,3.288],[5.598,0],[3.776,-4.72],[0,0]],"o":[[0,0],[0,0],[0,0],[1.985,-3.385],[3.027,0],[1.302,1.351],[0,0],[0,0],[0,0],[-0.066,-6.543],[-2.734,-3.288],[-6.348,0],[0,0],[0,0]],"v":[[5.127,-52.832],[5.127,0],[19.238,0],[19.238,-37.256],[28.174,-42.334],[34.668,-40.308],[36.621,-33.789],[36.621,0],[50.732,0],[50.732,-34.131],[46.533,-48.877],[34.033,-53.809],[18.848,-46.729],[18.408,-52.832]]},"ix":2}}]}]}},{"ch":"a","fFamily":"Roboto","size":9,"style":"Bold","w":53.61,"data":{"shapes":[{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"a","ix":1,"cix":2,"np":5,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"a","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0.032,5.013],[0,0],[3.825,3.271],[6.51,0],[3.45,-1.481],[1.888,-2.604],[0,-3.059],[0,0],[-1.351,1.14],[-2.377,0],[-1.254,-1.465],[0,-2.441],[0,0],[0,0],[4.15,-2.995],[0,-5.598],[-3.402,-2.995],[-5.176,0],[-3.418,3.809],[-0.652,-1.27]],"o":[[0,0],[-1.367,-2.571],[0,0],[0,-5.924],[-3.825,-3.271],[-4.297,0],[-3.451,1.482],[-1.888,2.605],[0,0],[0,-1.985],[1.35,-1.139],[2.702,0],[1.253,1.465],[0,0],[0,0],[-7.845,0.033],[-4.15,2.995],[0,4.558],[3.401,2.995],[5.469,0],[0.293,1.888],[0,0]],"v":[[50.293,0],[50.293,-0.83],[48.193,-12.207],[48.193,-35.107],[42.456,-48.901],[26.953,-53.809],[15.332,-51.587],[7.324,-45.459],[4.492,-36.963],[18.604,-36.963],[20.63,-41.65],[26.221,-43.359],[32.153,-41.162],[34.033,-35.303],[34.033,-32.275],[27.539,-32.275],[9.546,-27.734],[3.32,-14.844],[8.423,-3.516],[21.289,0.977],[34.619,-4.736],[36.035,0]]},"ix":2}},{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"a","ix":2,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[1.237,1.14],[0,1.758],[0,0],[-7.064,0],[0,0],[0,0],[1.758,-0.928],[2.083,0]],"o":[[-1.237,-1.139],[0,0],[0.455,-4.883],[0,0],[0,0],[-0.847,1.563],[-1.758,0.928],[-2.148,0]],"v":[[19.287,-11.523],[17.432,-15.869],[17.48,-16.699],[28.76,-24.023],[34.033,-24.023],[34.033,-14.941],[30.127,-11.206],[24.365,-9.814]]},"ix":2}}]}]}},{"ch":"m","fFamily":"Roboto","size":9,"style":"Bold","w":86.57,"data":{"shapes":[{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"m","ix":1,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"m","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[-4.004,0],[-1.205,-1.367],[0,-3.059],[0,0],[0,0],[0,0],[-4.232,0],[-1.172,-1.383],[0,-2.995],[0,0],[0,0],[0,0],[2.799,3.337],[5.729,0],[3.711,-5.371],[6.803,0],[3.743,-4.59],[0,0]],"o":[[0,0],[0,0],[0,0],[1.79,-3.32],[2.897,0],[1.204,1.367],[0,0],[0,0],[0,0],[1.627,-4.036],[2.962,0],[1.172,1.384],[0,0],[0,0],[0,0],[0,-6.705],[-2.8,-3.336],[-6.869,0],[-2.539,-5.371],[-6.38,0],[0,0],[0,0]],"v":[[5.42,-52.832],[5.42,0],[19.531,0],[19.531,-37.354],[28.223,-42.334],[34.375,-40.283],[36.182,-33.643],[36.182,0],[50.293,0],[50.244,-36.279],[59.033,-42.334],[65.234,-40.259],[66.992,-33.691],[66.992,0],[81.152,0],[81.152,-33.74],[76.953,-48.804],[64.16,-53.809],[48.291,-45.752],[34.277,-53.809],[19.092,-46.924],[18.652,-52.832]]},"ix":2}}]}]}},{"ch":"@","fFamily":"Roboto","size":9,"style":"Bold","w":89.5,"data":{"shapes":[{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"@","ix":1,"cix":2,"np":5,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"@","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[2.93,6.511],[5.891,3.5],[8.17,0],[6.396,-3.889],[3.711,-7.129],[0.391,-8.984],[-2.979,-6.754],[-6.055,-3.467],[-8.594,0],[-3.369,0.797],[-1.986,1.302],[0,0],[2.962,-0.603],[2.702,0],[5.143,6.299],[-0.521,11.523],[-2.832,5.876],[-4.916,3.191],[-6.283,0],[-5.127,-6.104],[0.553,-11.36],[2.018,-3.499],[2.995,0],[0.895,1.367],[-0.326,2.572],[0,0],[0,0],[4.655,0],[3.255,-2.246],[2.132,-4.182],[0.586,-5.371],[-2.605,-4.004],[-4.753,0],[-3.255,4.558],[-2.035,-1.204],[-2.8,0],[-3.76,4.9],[-0.359,8.334]],"o":[[-2.93,-6.51],[-5.892,-3.499],[-8.041,0],[-6.396,3.89],[-3.711,7.129],[-0.391,9.375],[2.979,6.754],[6.055,3.467],[3.418,0],[3.369,-0.798],[0,0],[-2.148,1.009],[-2.962,0.602],[-10.254,0],[-5.144,-6.299],[0.358,-7.584],[2.832,-5.875],[4.915,-3.19],[10.059,0],[5.127,6.104],[-0.195,5.664],[-2.019,3.5],[-1.953,0],[-0.896,-1.367],[0,0],[0,0],[-3.288,-2.148],[-3.777,0],[-3.255,2.246],[-2.132,4.183],[-0.652,6.576],[2.604,4.004],[5.241,0],[1.041,2.246],[2.034,1.204],[6.348,0],[3.76,-4.899],[0.358,-8.626]],"v":[[81.543,-48.877],[68.311,-63.892],[47.217,-69.141],[25.562,-63.306],[10.4,-46.777],[4.248,-22.607],[8.13,1.587],[21.68,16.919],[43.652,22.119],[53.833,20.923],[61.865,17.773],[60.01,10.254],[52.344,12.671],[43.848,13.574],[20.752,4.126],[13.818,-22.607],[18.604,-42.798],[30.225,-56.396],[47.021,-61.182],[69.8,-52.026],[76.66,-25.83],[73.34,-12.085],[65.82,-6.836],[61.548,-8.887],[60.693,-14.795],[63.184,-43.018],[60.107,-45.117],[48.193,-48.34],[37.646,-44.971],[29.565,-35.327],[25.488,-20.996],[28.418,-5.127],[39.453,0.879],[52.197,-5.957],[56.812,-0.781],[64.063,1.025],[79.224,-6.323],[85.4,-26.172]]},"ix":2}},{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"@","ix":2,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[-2.068,3.191],[-3.744,0],[-1.27,-0.423],[0,0],[1.432,-1.399],[1.595,0],[1.106,2.23],[-0.359,4.297]],"o":[[2.067,-3.19],[1.334,0],[0,0],[-0.945,2.637],[-1.433,1.4],[-2.474,0],[-1.107,-2.229],[0.618,-6.12]],"v":[[40.356,-34.961],[49.072,-39.746],[52.979,-39.111],[50.928,-16.016],[47.363,-9.961],[42.822,-7.861],[37.451,-11.206],[36.328,-20.996]]},"ix":2}}]}]}},{"ch":"g","fFamily":"Roboto","size":9,"style":"Bold","w":57.08,"data":{"shapes":[{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"g","ix":1,"cix":2,"np":5,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"g","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[-3.923,-4.964],[-6.348,0],[-3.255,3.679],[0,0],[2.083,-2.002],[3.743,0],[3.516,3.938],[0,0],[-3.679,-1.546],[-3.874,0],[-3.809,1.79],[-2.1,3.418],[0,4.622],[0,0],[0,0],[0,0],[5.794,0],[3.857,-4.948],[0,-8.105]],"o":[[0,8.203],[3.922,4.964],[5.305,0],[0,0],[0,3.678],[-2.084,2.002],[-5.013,0],[0,0],[1.888,2.441],[3.678,1.546],[5.11,0],[3.809,-1.791],[2.1,-3.418],[0,0],[0,0],[0,0],[-3.223,-3.971],[-6.543,0],[-3.857,4.948],[0,0]],"v":[[3.369,-26.221],[9.253,-6.47],[24.658,0.977],[37.5,-4.541],[37.5,-1.709],[34.375,6.812],[25.635,9.814],[12.842,3.906],[6.592,12.5],[14.941,18.481],[26.27,20.801],[39.648,18.115],[48.511,10.303],[51.66,-1.758],[51.66,-52.832],[38.867,-52.832],[38.281,-47.852],[24.756,-53.809],[9.155,-46.387],[3.369,-26.807]]},"ix":2}},{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"g","ix":2,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[-1.937,2.771],[-3.386,0],[-1.888,-3.227],[0,0],[4.297,0],[1.92,2.722],[0,4.793]],"o":[[1.936,-2.771],[4.199,0],[0,0],[-1.855,3.228],[-3.353,0],[-1.921,-2.722],[0,-5.509]],"v":[[20.386,-38.177],[28.369,-42.334],[37.5,-37.492],[37.5,-15.242],[28.271,-10.4],[20.361,-14.484],[17.48,-25.756]]},"ix":2}}]}]}},{"ch":"i","fFamily":"Roboto","size":9,"style":"Bold","w":26.51,"data":{"shapes":[{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"i","ix":1,"cix":2,"np":5,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"i","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[20.313,-52.832],[6.152,-52.832],[6.152,0],[20.313,0]]},"ix":2}},{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"i","ix":2,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[-1.449,-1.367],[-2.377,0],[-1.449,1.367],[0,2.148],[1.432,1.367],[2.409,0],[1.416,-1.367],[0,-2.116]],"o":[[1.448,1.367],[2.376,0],[1.448,-1.367],[0,-2.116],[-1.433,-1.367],[-2.441,0],[-1.416,1.367],[0,2.148]],"v":[[7.495,-61.23],[13.232,-59.18],[18.97,-61.23],[21.143,-66.504],[18.994,-71.729],[13.232,-73.779],[7.446,-71.729],[5.322,-66.504]]},"ix":2}}]}]}},{"ch":"l","fFamily":"Roboto","size":9,"style":"Bold","w":26.51,"data":{"shapes":[{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"l","ix":1,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"l","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[20.313,-75],[6.152,-75],[6.152,0],[20.313,0]]},"ix":2}}]}]}},{"ch":".","fFamily":"Roboto","size":9,"style":"Bold","w":29.05,"data":{"shapes":[{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":".","ix":1,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":".","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[-1.498,-1.383],[-2.312,0],[-1.498,1.384],[0,2.214],[1.514,1.4],[2.311,0],[1.514,-1.399],[0,-2.246]],"o":[[1.497,1.384],[2.344,0],[1.497,-1.383],[0,-2.246],[-1.514,-1.399],[-2.279,0],[-1.514,1.4],[0,2.214]],"v":[[8.398,-1.538],[14.111,0.537],[19.873,-1.538],[22.119,-6.934],[19.849,-12.402],[14.111,-14.502],[8.423,-12.402],[6.152,-6.934]]},"ix":2}}]}]}},{"ch":"c","fFamily":"Roboto","size":9,"style":"Bold","w":52.15,"data":{"shapes":[{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"c","ix":1,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"c","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[1.66,2.38],[0,5.445],[0,0],[-1.677,2.396],[-3.288,0],[-1.628,-1.718],[-0.066,-2.748],[0,0],[3.987,3.76],[6.608,0],[4.329,-4.85],[0,-8.138],[0,0],[-4.362,-4.801],[-7.552,0],[-3.337,1.643],[-1.921,2.979],[-0.033,3.581],[0,0],[1.627,-1.432],[2.604,0]],"o":[[-1.66,-2.38],[0,0],[0,-5.379],[1.676,-2.396],[2.669,0],[1.627,1.718],[0,0],[-0.066,-6.25],[-3.988,-3.76],[-7.552,0],[-4.33,4.851],[0,0],[0,8.464],[4.362,4.802],[4.036,0],[3.336,-1.643],[1.92,-2.979],[0,0],[-0.066,2.377],[-1.628,1.433],[-3.386,0]],"v":[[19.824,-13.97],[17.334,-25.707],[17.334,-27.174],[19.849,-38.837],[27.295,-42.432],[33.74,-39.854],[36.279,-33.154],[49.512,-33.154],[43.433,-48.169],[27.539,-53.809],[9.717,-46.533],[3.223,-27.051],[3.223,-26.123],[9.766,-6.226],[27.637,0.977],[38.696,-1.489],[46.582,-8.423],[49.512,-18.262],[36.279,-18.262],[33.74,-12.549],[27.393,-10.4]]},"ix":2}}]}]}},{"ch":"o","fFamily":"Roboto","size":9,"style":"Bold","w":56.54,"data":{"shapes":[{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"o","ix":1,"cix":2,"np":5,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"o","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[-4.541,-4.883],[-7.617,0],[-4.525,4.9],[0,8.105],[0,0],[4.508,4.362],[7.129,0],[3.792,-2.246],[2.018,-4.102],[0,-5.241]],"o":[[0,8.398],[4.541,4.883],[7.617,0],[4.524,-4.899],[0,0],[-0.521,-7.487],[-4.509,-4.362],[-5.013,0],[-3.793,2.246],[-2.019,4.102],[0,0]],"v":[[3.223,-26.27],[10.034,-6.348],[28.271,0.977],[46.484,-6.372],[53.271,-25.879],[53.174,-29.492],[45.63,-47.266],[28.174,-53.809],[14.966,-50.439],[6.25,-40.918],[3.223,-26.904]]},"ix":2}},{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"o","ix":2,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[-1.888,2.69],[-3.451,0],[-1.921,-2.705],[0,-4.922],[1.92,-2.625],[3.418,0],[1.888,2.657],[0,5.021]],"o":[[1.888,-2.689],[3.483,0],[1.92,2.706],[0,5.771],[-1.921,2.625],[-3.516,0],[-1.888,-2.657],[0,-5.64]],"v":[[20.166,-38.397],[28.174,-42.432],[36.279,-38.373],[39.16,-26.929],[36.279,-14.337],[28.271,-10.4],[20.166,-14.386],[17.334,-25.903]]},"ix":2}}]}]}},{"ch":"*","fFamily":"Roboto","size":17,"style":"Bold","w":45.31,"data":{"shapes":[{"ty":"gr","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Group","nm":"*","ix":1,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"cl":"","ln":"","hd":false,"mn":"ADBE Vector Shape - Group","nm":"*","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[6.104,-33.716],[13.867,-28.442],[22.656,-42.212],[31.543,-27.954],[39.307,-33.472],[29.053,-46.46],[44.678,-50.801],[41.797,-59.728],[27.002,-53.728],[27.979,-71.094],[18.408,-71.094],[19.385,-54.07],[4.199,-60.168],[1.318,-51.338],[16.65,-46.997]]},"ix":2}}]}]}}],"assets":[]}
```

### `animation/index.js`
```javascript
import authLottie from "./auth-lottie.json";

export { authLottie };
```

### `animation/LottieAnimation.jsx`
```javascript
import Lottie from "lottie-react";

const LottieAnimation = ({anime}) => {
  return <Lottie animationData={anime} />;
};

export default LottieAnimation;
```

### `animation/motion.js`
```javascript
export const leftToRight = {
  // Initial state: hidden and slightly moved to the left
  initial: { opacity: 0, x: -50 },
  // Animated state: fully visible and at its original position
  animate: { opacity: 1, x: 0 },
  // Transition properties: duration and easing
  transition: { duration: 0.6, ease: "easeOut" },
};

export const rightToLeft = {
  // Initial state: hidden and slightly moved to the left
  initial: { opacity: 0, x: 50 },
  // Animated state: fully visible and at its original position
  animate: { opacity: 1, x: 0 },
  // Transition properties: duration and easing
  transition: { duration: 0.6, ease: "easeOut" },
};

export const topToBottom = {
  // Initial state: hidden and slightly moved to the left
  initial: { opacity: 0, y: -50 },
  // Animated state: fully visible and at its original position
  animate: { opacity: 1, y: 0 },
  // Transition properties: duration and easing
  transition: { duration: 0.6, ease: "easeOut" },
};

export const bottomToTop = {
  // Initial state: hidden and slightly moved to the left
  initial: { opacity: 0, y: 50 },
  // Animated state: fully visible and at its original position
  animate: { opacity: 1, y: 0 },
  // Transition properties: duration and easing
  transition: { duration: 0.6, ease: "easeOut" },
};
```

### `App.jsx`
```javascript
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router";
import router from "./router/router";
import AuthProvider from "./contexts/AuthContext/AuthProvider";
import { HelmetProvider } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const App = () => {
  const queryClient = new QueryClient();

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
        </HelmetProvider>
      </QueryClientProvider>
    </div>
  );
};

export default App;
```

### `assets/images/index.js`
```javascript
import notfound3 from "../images/notfound3.jpg";

export { notfound3 };
```

### `assets/images/notfound3.jpg`
```jpg
ÿΨÿΰ
JFIF





ÿΫ
C
ÿΫ
Cÿΐ
``"
ÿΔ










	
ÿΔ
µ


}
!1AQa"q2‘΅#B±ΑRΡπ$3br‚	
%&'()*456789:CDEFGHIJSTUVWXYZcdefghijstuvwxyzƒ„…†‡‰’“”•–—™Ά£¤¥¦§¨©ª²³΄µ¶·ΈΉΊΒΓΔΕΖΗΘΙΚÒΣΤΥΦΧΨΩΪαβγδεζηθικρςστυφχψωϊÿΔ







	
ÿΔ
µ

w
!1AQaq"2B‘΅±Α	#3RπbrΡ
$4α%ρ&'()*56789:CDEFGHIJSTUVWXYZcdefghijstuvwxyz‚ƒ„…†‡‰’“”•–—™Ά£¤¥¦§¨©ª²³΄µ¶·ΈΉΊΒΓΔΕΖΗΘΙΚÒΣΤΥΦΧΨΩΪβγδεζηθικςστυφχψωϊÿΪ


?
ώμ•’xγ·cκ?<s‘yη'\‡ωιΫ
ΖH9δwυΰtÿ
dσψηιΥΥ&ΚΟKÿ
ΐ_vΊ(Ήcμ¶VξτϋώbG<pqM
sΤNOOΓΏ§γλΓθ¥vΏ―κΫΝΌ›Vώ¬‚ήƒ?†Gκ8Ο¦xΝΤP›Ί·uoΛςΠ›­tZ»τΣΡ4ÿ
―A
γλξz~gzw£ηsώ9Οÿ
«Χ+E
νυ»·―FΏGιδW4‘i§Oς
(Ά‹Ρθ¶·^ΦΪϋί’^‰ Ά)6ξµ½­ω/λΦύΐ(Ά5ώυύz=²~vΥ
I=I?Ri(Ά«^^Ώ―oΠAIοωρ¥Ά“RυΊ]V».ύν―]ΒώIϊ¤ϋwτ
(Ά«–JΪυÿ
.ÿ
“μΧάQEh’zΡEϋÿ
K¦ώϋ
}ΟέΎησ?Χ?η·zu-Kω»iηξ―Ίÿ
Φ¬jΛμΕϊ―λ²ϋ‚(¨εz_­Ί­΄KoTÒΦ_rÿ
.(΅¦ΊύΝmξΫ_όόΔQE+¶Φ­Ύ€΄V²ϋ——ωO­QNΟMVύΦ›Yικ―χ°’z’~΄”QUvμ®ΞκΧZ­ϋoΣΌ(¨I½ƒΛOΉ0Ιυÿ
#¥QZ>d΄k¥ÿ
ΧΧ]Ί|ΐΆ+!§em-ΣE§ΰ5†AλΣΤεÿ
λ¦*δ–ιIι“sη±τνήZ*®Ò¶ΧΥ>¶}½lΏαφ.΄m+®Ι+νΎ_QE!wkY}ΛΛόΏ­,QEυΏπ?―ΌKM­χ Ά)»θ›ΪΦΥiΆÿ
®ί}ΟΧP<υ¤άώgόϊήΤ΄RWΎ²ΧΥ[ττµ—ά•¶ΪήΦEV-κn―»§¦ΒώΏ―ΈCuΕ1IΟ9=»ρώ¤Ά¥¶®·σλ²ÿ
gίPΣGdμόµΫΛΛςμόςGςÿ
?QJΟM¶³Σe°ο¥­[/ψoΐ(ÿ
?Οόώ^R»½ϊιψl	χIό–ύέ:QV“Ρί{om½ίλξ¶­Λ·υύ%χ―ωόΟz(¥&οΎ,ύ}:~~cM'{'χ—υς――κ(Ώ‰&–W_σΩ5ϊ[Π|Λωcε§OκΑIzώdÿ
3KE+ΎβΏ’Ώ{//!r}Oζi(Ά›mΫ[ΫoΓϊυ„dsΘΗR)ΰη$ύNΟ$τΗ¥:WώΎοςEs-=Υt·ώ—QEΫoKθΏ―λώ	7Φϊ}Ϊ}ΑΦ“ηόχÿ
ς)h¤_2ώU~ϊoί`Ά*•ΫZ«τΎΊιλεψω‘ύmσωQC½χΎΪίK¤•ήÿ
_ΐ(§Ν-ϋvςίψ:ί²Ι=Iόι2GC(¤ΫΎλ£Σ½—―`’z’~¤J(¥w{φ·α°
I=I?ZJ(¥ύ_Χ¨'mB(ªZ5ªιΊΫEωtΧ£σ
Ά(–χΣ§m4^ΏªσzΨΏOΡ~{…QR¶ÿ
VAESΧNϋ-~ΰ
1ώrhΆ‹Ύμi¤µ~©yZϊ]Ϊέÿ
@Ά)λ½Φ–¶«²οΫOΉ(<χ?^τQOήΣUm:­6ίÒλp^‰ϊΩυώ»?0ÿ
?—λEU;΄¬υ¶Ί­ύίσύ:…—eχ]—ά»gΧσ#ωQELΪλ£~NΛ_Εμ
ΧΪϊ§λa1υόΙώyύihΆ£Πw_Λόy[§KVAEUr»―5u{m§®ÿ
πϊZΛξ_δ'©ΝQM¦­ο--ςΫώηΤAGωκΟÿ
[ςΆ‚“IkυΏOς
(Ά€RKtύωtΧος
(Ά€Rς^‰%Φύ§όD#=ΞOΉÿ
υ~”py$ϊr—ÿ
\ζE;»[ώ¦Ο~W_Λχ²ςι·OΛ¶¦IκhΆ5ΊΧ¶½»}Β
(Ά•ήχΧΈΣ¶–_rό?NAEU97o—ΝυΏ}A;=―χ~©…QK^ϋyϊmψHWτϋΉ>§σ¤Ι(ΆwΎªί…’ςώµ
<υ'σ¤ΗΏ――ωΟOΛ€)h§&ο{ϊtµÒιwoΤiΫΆ~©>ί>¨ÿ
§όÿ
zZ(¥wέ‡6›/[/κÿ
ζQE'χνω~›i=R~L(Ο8ηλΪ)έ»kv¶ό?ΘJΚϊ/Ή—’ΪΫ.ΒϊΌγ―Χόÿ
J“|ΩδΑ/ΠηGηιΈΉPJ qόωιΞ?®kTή—¶ªϊ|·ϋχNήBiYθ¶ςνη±(λν―eΣƒίJu0FHεFaqΓΗ§wΦOτ_’ώΏ#ImOΡQH€Ά(ώ®EU'gηώvίή^{όό€Ά+FΥ–ΊιΦΟu~»Ϋ»ΣΈQX€QE
QEIΪΪυΧοδΎώ€QEξ®Ό­gÿ
€ο«θΧλp
(ΆªχkΥmΧα}ZκύmΠ(ªΏιχ]KΞΐQEg)j¬ήίδϊ;z«~–(¦¤έµμ½v½υΧ―OΦΐQEO[o®Ώ/uχ^Z―> QEg+ν{―ψ	χ~^]€(Ά
(Ά©»ΫΚέν²σο}¬ET€QEοζÿ
«yω~δQEόίω
QE€(Άwωϊί²σς.ΪX
(ΆQ@QFίΧω
QEήκέ—δ€(Ά¥&’ςσÿ
όί»
Ά*[Ύώ_—υp
(ΆQ@QUwmίίιn½=?[ETÿ
_εύt
Ά(
Ά(
Ά(
Ά(
Ά(
Ά(
Ά(
Ά(
Ά(
Ά(
Ά(
Ά(
Ά(
Ά(
Ά(
Ά(
Ά(
Ά(
Ά(
Ά)έχΧό2ϋ€(Ά@QE5Ίυ@QE[’¶—oM_un—Ωώwυ
Ά*ΏυδΏΚΰQE 
(ΆυΣΛΟϊϋÒ(¤EPEQύ~_π?¤EPEPEPEPESoϊω/7ΫϊΩER
Ά(
Ά(
¨δ
ÿ
‡`x'ω*JN™Α8τηήΤ
έh•τΫϊίώΜ™;-4Χ~ίεψφ›·LsΗ
ϊÿ
>jZ…GΜ:vιΘϊ\υύκjΞgΡ]6_Eκÿ
@Ά*QE;ÿ
_rύ?Θ(΅n¶έuσZοιΫm
Ά*“I+θ½;yτωώ QE@QWm―ΦΦÿ
ΙWςωi`(Ά—ύkδΌίυ}­dQH(ªrzw_Ϋκο·αp
(Ά•ή^Ύ^~_πΪX
(Άν­¶Zό—ι|μQOUf¶Ρ­ow¥ϊχνωlQT¤τύ_ψoΌ½mΫο°QEL·ύ>KΝΫώάQREPESVλύmζΌÿ
­€Ά(³_Χ£ύPQH( ( ( ( ( ( (¦λUζΊ/λtQM«ώW•ΎΣÿ
ωET€QEΣ³Ώ§ΰEU©$—’λήλm}mQPέέύ?/λώ
QH(§k5ςνδϋωω|€(Άό—~ΛΟΛϊÒΐQE€(Ά
(Άz_/;wνώ@QE€(Ά
(Ά
(Ά
(Ά
(Ά
(Ά
(Ά
(Άm[ϊ^[k®ÿ
Χ@(Ά_Χ QOϊόΌϊtώ¬QH( (Άί€QEΧήES]»θER
Ά(
Ά(
Ά)ΫkυτςλΟEωEPϊ|Ώ%ηώ_Ά(΅+µςύ/Φύz~
Ά)Ώ/O[[Νχι·Θ(¤Ώ―Ώ®«ϊϋΐ(Ά@QE
QE
QE7ύ}ΛΝÿ
Vτ@QE€(Ά
(Άiκk~
r28ώt΄Χιώxδ~Χzhεπ®ν_π}έΎ!=µλeχΏλΠuQΣ?ώΏ―_Ζ§¨$qιΗ^Nÿ
ώΊ›JλΙ6ΎN#Z¤ϋ…QYΛwnΛς[k―Oι\(¥ΫϊύΛΝ€QEKK;όΫÒήξφ—Nί’ZEPυzyνΏήλ§o=UΠQEOUΫOλΧΦΐQEh¥µΊ$Ίuk]ίΛηζERζWΏWoύ·ΟO]²
Ά*^―ΧΡt^nίΧΆ(©
Ά(
Ά*ΧKwZ|γ}ήχ]µτΨ
(Ά‰[δόΫώW―½ΫϊΩ€QE:έ|ΊϊyιΣΠ(΅ÿ
—δΌίυΫ`
(Άιηϊ}ύ
Ά)
QEο·―–»ÿ
—―`(Ά«/›µ—έ¦²Ώ¦ΦWς
Ά)Y»|ΏφΫuσΣoς(΅«ZώΏ—Κώ_pQEHQ@Q@QFΰQEU­g¦¶ύ<ΧΝιΠ
(Ά“ÿ
/Ιyÿ
_‚(¦¥ϊ.έΌόιλΡET€QE
QE
QEÒΏυύw
Ά(i«yχΣ·ω€QEΣ·_ΧOw³μ¶ωzERnΰQE 
(Άυωyÿ
_QE 
(Ά€
(Ά€
(Ά€
(Ά€
(ΆΏNίηύu°QH( (¦·^«ϊθEV¦“Ώ]»½:sY[³Ϋσ(¬€(Ά
(Ά
(Ά
(Ά¥+5ςό-ηεσό€Ά)7wσύnER
Ά)ÿ
_—υωER
Ά)υ_ 
(Ά®Wv{uOÿ
σΣWωz (ΆΝωω~Z~
QE4ΪΫϊΫό€(ΆoλK~€QE€(Ά
(Ά«+_ϊϋ>~πέ
Ά*@(Ά?―λ_λΘ( (ªIi­§τστ@QE=χν®—ιζÿ
?» 21λζ)h# ZmY'}VΏϊN›ότό€¬2O#~§―αώ•€‘ςσΖAη®	ΗO^?
΄κ½ιηύ~il½υΧσaEVR~σ~}έΊ|ΖQEHQWωÿ
ι>/–ΧΡEPν}ιΦÿ
ΛΦÿ
{nΪYmp
(Ά (¦ξϊώ>}ÿ
­,€Ά)_ϊτ
Ά*ΣΩzmΏNΌΪ~]mu QEΥwÒΟÿ
ξυµÿ
ΛΘ
(Ά†½Iν«ΏόΠ
(Ά’Z®›|οΛηη~δQC½ΦϊµoΓΟwκΊ|€Ά*¬½Ϋ>«ÿ
mώυτμ¶ςέER·Ί[ΟαΣwk_ό΄Ψ
(Ά‡Ά^i[ξ—υΊ(¨
Ά(_ΧτμESΎήVό—―υΡlEU9'nκέ=<ÒέΓnET¶ίίεηεσίΠ
(ΆQ@QM+ÿ
KϊλύjES»Òή]Γηώ_…QE'Ωyuς^vέ|Ώ (Ά@QE4μΣ
Ά)ΚΪ[¶Ώrσ{~
QEHQ@Q[Coλ²σ~]½QS)/>ο³έ?/λp
(Ά³
Ά(
Ά(
Ά(
Ά(
Ά(
Ά)―λnώm_xQE΄Ώωyυ­€Ά)Ω&ΎOςσΏ^/ (Άύ®›ihυΊ]?«hQRυλύYt»Χkÿ
ΐΠ
(ΆQMn½WζEV­]Zύ>χuζ–Ώ―ήQX€QE
QE
QE
QE
QEμ­ÿ
εηζÿ
Λ{ER
Ά(
Ά(
Ά(
Ά+DφIφσ_g}tκΊ-ϊά(¨}ύ?%ζÿ
®Ϋ (Ά@QE
QE
QE5ύmέy―λζΠQE>gΡ½>]οεω€QE QE?λςÿ
 
(Ά…ΏkªvΏQO¶¶Ϋε¤|ϋuξΎΰ(ΆKuwΥy®}Ώ+
R1ΐ&–ίtÿ
υm]ΗªÒκϋ'Κ»υτΈωmλε`zλλ“τκ=sί§Ju0»
ώgΧΏύ\}4υIιΆ¶»νς}N·ΛΠ(ΆROφκΏO=υςοέ(Ά‡ώ_’σιςωl€Ά(½µλ§αkΓt°QEϋ·Ύϊί¦»ο§υ¥€Ά)¤›Zφύ<Σλ­Ύ^@QEv΄W›_Mό΄µ€(ΆΟªω~K»ιλχ
QE¦–]η=5¶λσΈQE_υύ\(¨“ΫΟ}vΩ­_Φ¨QB¶ίEΧmc½Ϋ¶½Z€QENέ_γζΌΦίΧQEdδξµΫ·Λ―3ΎέΧήτ(Άχήÿ
ΪowώZώ
QEυχ/7ύ}Θ
(Ά„¶υΧΙiΎΎ~^ QEhÒ\«υ³½γΧWς»ΫΙ4QYΏ[θΏ-Ύ[
QE€(Άi_ςό»ΏλδEQ§υςσυνϊ (ΆΫςΣΛΝwώµ°QE[VΫ]­kÿ
w}},½5@QECυΏόΌήΫ|·}
Ά)
QEήΎ QE 
(Ά€
(Ά€
(Άι­µίξίU§τ€Ά*Ϋ^νNϋmÒϊyλλέET?ψr_ΧτμQH( ( (ªv²Φÿ
¦‘ι}νWς`QE'ϊ/ΛΥÿ
]QEΏ$ϊu·υ­€Ά(ω°
(ΆμώKΏdϋÿ
_u€Ά(oΝ½ÿ
/7ΏnQE
ÿ
ωΗΝyJθ
(Ά“wώΌΎΧm€(Ά@QEF`
(Ά¶ζVMΎί¦–Χζ€(ΆΙΫϊτ^~ΏΦΐQE€(Ά
(Ά
(Άwό=|ΏΛϊΠ(¥wίϊώ’ϋ€(Ά{ώ»/?ςωjQE 
(Ά€
(Ά›ύεκÿ
®‹`
(Ά„μΧªόΐ(ΆΎeewm–›τμÿ
ΰύΞΰQE›ςώΏEPEP·_Χω~h(ªoEmν®―}5ήέ>Vτ°QEHQ@Q@Q@QM?λ_/5ΫΛξµ€Ά)έyτό9uµό¶_¦€Pqƒθ¤8ΑΟLsNOEgΣ§M­Υλ§υΈδξΞ;=ύ?§N sSΤarrp:uϊ;tνz’©§ξy$ϊy_–ΛΣϊκÿ
7κQEWMϊ­~kξΈΒ(©²Vwζz?ύ%wίªυμQQΥ&»~Jύl΄_ηδQIÿ
—ελύylEQ{mωϊ=“ώΌΠ
(Ά«φ^—{mo=ο{½4μEPΦΧΫMΪ·E¥¥·ΛόΠQEh¶^‹τ
Ά)€QE‹wωyω-µwόϊΏ (Άjώ};ÿ
wϋΛ§έωER»mk}–ώª»μφ(¥mΊmΫ²σσςωk`(Ά}µΫ_ΛΟς³Σξ(¥kµς]<Όÿ
―+;EU¨½.ϋuσgktϋΌ¬QI»Ω^λNΎQσ_Ίλ}€Ά*”ύΏO?'·}6@QED•Όÿ
α•ΊΏΣό€Ά*@(Ά>ί’σώ­­€(Άkϊώ» 
(Ά­M½νύ[ϋή―{ER“ΏυΎ‘ί_λΦφ(¨~^_–ΏQ@QM&ÿ
―Oσ@QEmÿ
²^oϊΫΘ
(ΆQO·υΫΟόΏΘ
(Ά…m;_Σµϊώ?Ò(£]:mΧΙyω/ψ$QH( ( (£ϊώ½@(Ά
(Άwυιέmo?//.–(¥wίϊώ’ϋ€(Ά
(Ά
(Άwσ}?%ζϋ~mQE 
(Ά€
(Ά€
(Ά€
(Ά€
(Ά€
(Ά€
(Ά€
(Ά€
(Ά€
(Ά»;ÿ
Vοςό
(Ά-Σ®^~ΏΦΐQE–λϊÿ
/Ν
QE?ςόΎΧm€(Ά¥―ί½ςιχμQREPEPEPEVΦ^‰;Ϋ[ςω«hΎδφά(¬ΐ(Ά
(ΆΧO/??λ[ER
Ά(
Ά(
¤a―σό:ÒΡEÿ
―@
(ΆΊΛΣµΏ‚[/Eω[QI¦ΪμµόWϊv¶½ΖQElϊ―’Υ«ÿ
ΐ_xQS--ϊ½υ[®ίΦθ
(Ά³κ»+uτσύ~λhQTϊ[Oν_]6ήΛΣvETφοÿ
e£ÒΪÿ
[EU·ΆτWϋβΣέwί@
(Ά…+Yzuÿ
|Ίw
Ά(”―³Ϋ[wΩλ­ττήÿ
 (ΆΜ(­SΡtÒ:Ϋ®SσKo½hES¶ΧwΫσuψυΩETKΛo/ϋwΟΣΆοζET
QE¬\Rί·]¶Ώ]΄τ¶€QEΧi.λªΏNΟΟ_ψ{EVo’όR
Ά*ΤÒIzvÿ
>ίάET·wGo’Ώ[ÿ
ΓzΨ
(Ά’έz―λ~Ύ«δEUςΫ]Ρ_§Ω·]WυkX(¬ίω~_?λ¶ΐQE
QETιεω/7ιςέ€QEFήχ·UησΫώ
QE7gk~ό+ω»yώ­EV‰Y.>―ώQYΛ'¶Ί}7Ρuιώ@QE++;u_ϋkκόίίΣ QE6ΦrΫM¬ξ¥¦«ΎΧ^`QEMϋ7Σ[ÿ
‡»^~_% QETµK]tΎέRξΧα§{
QEQMΏλδΌίoλdQH( (Άÿ
Χέώ@QE
QE
QE
QE5λoψuζ½~_pQE 
(Ά€
(Ά€
(Ά€
(Ά…ύZ
QEίθΏ%ύy
QE€(Ά
(Ά
(Ά
(Ά
(Ά¥Òέ,ώϋ{όΌνΠ
(Ά‹νςό£Ω®ίΧ@(ΆOΧϊ²σω|—Ά(£m­,ϊ;ÿ
ZyEU]iΎ–_w/®ªΟε QEKwwτό€(Ά@QE
QE?λςσΫΟϊ@QEϋ-u¶τVλώ_-QE'ΏΙ~KΝÿ
ΐΨ(¤EU+iκΏO?_λ`(ΆOϊώ®ΐ(Ά@QE
σψτΆά‚=qόΕ=^v_•ÿ
€κ(Ά·[/ψa-—Ά
(Ά²“j[νm:(ΆjOKµΫςσόmίΜ(ªq½ϋ]kªΣΝφιεκET»&–Ώζύί=6[νΣΈQI·Μ•ν²ίΡ»λί[ίη¦€QEI¤ÒΪΫχ·»ηεΏω
QE6•·Ω_ÿ
%³²–]€Ά(³vλχuwίρςΧ@(Ά€
(Ά€
(Ά¶‹ι­μ½6ZZύΏϊ
QE;τΏτΧ―γªκQYΙίελΩyωzχΦΰQEHQGυύlEUsmεmοÒή}ΧυΠ
(Ά“wώdΏO^ν€QE^ΝyYώΝÿ
]¶
Ά(m½_Eώ_Ò
Ά)mψ
QE\Οϊoόΐ(Ά
(Ά€
(Ά€
(Άÿ
ψ•΄
Ά)¦τÿ
=φί]ÒΨ
(Ά«›e~ΪύΧ»ΊσΏυ`(Άi7gζ·ν§›]Χ]=,QIέ½5ΫgεΫήΊΥkψΎ¨
(Ά§•έ/Οn~iiεθ€Ά*ÒοΩiιΛΩω.½.QVEV2Vrϋ’
Ά*@(Ά
(Ά
(Ά
(Ά§[U­―ªΣo??ΧDΐ(Ά
(ΆΧΛΟΧώ@(Άz+[Λτίήωτÿ
 (ΆO§_ψeηςιϊ (ΆθΏ 
(ΆQMΫOιθ—­¶ÿ
 (Ά?―ΎίΧΘ(¤EPEQζEPESτώ¶σο~ίΆ(ΆύΏ­ΏUÿ
EQλWΫΝvϋΊμEPίυς^o·υΆ@QE€(Άz;%ύmέÿ
—@
(Ά–ΐQE7ύ}ΛΝÿ
]¶@QE–λϊÿ
/Ν
QEξ΄ίςΫ]τ}ΏΘ
(ΆΏ½¬ϊ?λΙ­
Ά*“ΏΏό?ή]zÿ
–€QE8ΪΪόό΄]φWιÿ
QSΥ|Ώ­ÿ
_Έ(΅½Ό­ω%ίΛϊθQEΏ­?Οϊϋΐ(Ά@QE4Ώ­<»µίϊΦΐPΓτ4RLτγρώjΡ[Λϋu-.ÿ
­6°EVΆZ¥θ‚(¬ηΣΡώkϊΣ_’QEEk―kοώu}»/ΡEUJVi-ίMϋy«~Ύ@QEdώπ
(Άώύ5Ώψ½λÿ
ΪERέϊΫΟσ›
Ά)ς·m4vΧξσÿ
‡μEUm¦¶Σ[θΎ=:ωλ¦€QEM—O.ή_ήυ~[? (Ά
(Ά®2³]—ε~Ί[£ώQEku½τξEV_Γςώ¬EQλ]v½υςι`
(Ά—υύkύ~
(Ά€
(Ά€
(Ά«{/%ΫΙi®φίς]
Ά)>/Ιyÿ
—θ€Ά(ώΏ/?_λ`(Ά@QE
QEώΎοσ
Ά(
Ά(
Ά*’½­mϋϊ>χ{ZX
(Ά΄εW^^»ιgΎ›~€QE]WΟϊίτ 
(Ά€
(Ά€λεά(Ά†ί2KΏO=ΑbΎ¶ÿ
//PΆ*ίª^£
(Ά²•―§ηήήΆΣÒΰQEN~?‡―o^ΐQEΏ―λϊϋ€(Ά
(Ά
(Άwzyy½.–
Ά)
QE
QE
QE
QEm'³μΊk¤VΧί»W QIΕ―ιyyχ― QEJΡ§Ψ(§Ώ—τ—WύzlQH( (¦ίυς^o·υΆ@QE€(ΆΧίσ¶πώ@QE€(Ά
(Ά
(Ά
(Ά-ύ]_Χ“
Ά(
Ά*υΣ}-Χ§Ίÿ
›n½-¦έ
Ά*_ω~	yΏλ¶Θ
(Ά—υύ_pQV’οmώΫΎΊk·ί¦–(£DÒ½φΦύ=έtwΙλ`
(Ά›oMn•µφοΏΟΏΜ(¬ΐ(Ά?―λ_λπ@QEΣΫΧΣ·ν½ώλ
QE?Ρ~^―ϊθ¶
Ά(νλ®Ύελ¦€S[ξσήMoΊxΟÿ
―Ϊ©ίέZµ¦(ωϊoewΤMΫϊξ
σ8όÿ
—Lcθxτ§TKχ³qΘ:ώ{ΤµΆv²{Ϋο~ΏπlµΎ›χσ
(Ά³›ΧΣOΙίΡ“
(Ά¶¬ϊ^έm²σότυΩESrχ—m<΄i=uÿ
ήΰQE$ΦύΎÿ
vνέώQDΌύwΥG»λς¶½QJ+U―_-mm7ώ»v(­€(Ά[ώ QPτΣe§ΰ£Ύ©}ίπPQEGηη§o>—ΰQEώύ;®έoεύi`(ΆmZϊ+~‹Ώ—ζΐ(ΆvΫεω.οΟΛό€Ά)?λϊ»ώ»lER
Ά(
Ά(
Ά(
Ά)·ύ|—›νύhQE 
(Ά€
(Ά…ΊθES}=ϋÒσÿ
ƒψ
QE€(ΆjχZ7ιε`
*SIΧ$qθpqλΟδcέλ:mV[•gό‘αΫΏk§ΜγmΎ‰λλÒΛΎΪy­{oªΒ.ΝΚΉύώ±σφγ]«κ=π{δ~―©τβgρxύΠ“gΗ¨$ªρύG§Χκσ-Ο¤glIΑΟ
1ώρΌβ­BOΛΧΣηϊkσ9'¥oςίM?ψnΎ Κ
ΘΟεΗβxΗΣωT4+χ¦‰£Κ&aκ+Ι¥ΏΎ›>eέΛg¨σ¤Ηΰ»°?.>ΌΥ&Rη.ξη$δ±η8ΞrIύ{ΥªRλύ_‡myζIk/Ίύ-sΨÿ
OBwήΫ
3Òd?	ΤϊT'XÒGώάÿ
»*±γ®@λΙ€ νσώyοKT¨;nΏΛΤΙζsΎ‘_rς§Ί±ύ―¥vΎ‡ΏVPΘγ“‡8λνJ5]1°υΉ'·όP―&Ά‡Fίπ5ΧE¶ϊλ·pe;κ’V]4ι§eψzυ=™&¶|l&$d–#uΰ1ώΈγ=πςQΣ$vκ>„ηµβω#΅#§ x9κ*Hξο!lΕsqγξM ΑγΗ®sΑΖ9¨tΪ•ΣOϊÿ
#XζZΪIt½­εΧ©μtW–Gβf"?ÒZQ»*E&FV*rr~n Z°ψΒαJωφI ΘεHQ‡|ΰ‡†αωƒYΚ[m§Ν~Z»χ[¥ftΓJVΎ7τν>ή‡}Esφή&Σ.Ww¶sό3!Ϊ?νΆξ^Ύ¤t<VδsC2†T‘OFFΖ³q¨·NΛ®Ύ_=μtΖ½9m$ίeςÿ
=·ς$ΆU—’0:~>‡ΠϋmCOª·όwώ»Μ_Σ·wησι°QE·wώ——gζQES‹νÿ
νηηoλFQEOυχ€QE
QE
QE
QEtΏ―αoσ
Ά)·ύ|’ύ
(ΆKF`
(Ά­Κÿ
‡'ίΙΫ―ίtQRÿ
―ΉyΏλξ@QE€(Ά
(Ά
(Ά
(ΆκΫτ
Ά*μ¬ΪΧ­µv_ήτÒχΧM΄(¤ύoΧςΣ–Ύΰ(Ά^Φή}ίυΠ
(Ά—όλϊωΨ(§g§ί‡ω 
(Άλ§—υχ¤QFοξύWϊύΛ`(Ά§$­ΦΦλΎ‹¥τk¶ΧΈQRυΧ―όηϊ~¶(¤ESOϊϋΌΧoλ QE]Σ¶Ώψ½ώvήΧM€QEMl“ΣN―emµώΌ®EVMkχu^^oϊνm
Ά)
QE
QE
QE_ϊτ
¦Ώέ?ηΈ§S[΅ό?­/{+φυή6λη{ώ™mnν-νΏυΩϊΗΟάw8νqΔÿ
>ςΤa~aΫ
qί¦?sωsRSiήΩ.+υΫn―®ε-—υϊΏλ«
(Ά”–Ύ»~+οΏυvEU¥Ά·eσΫΞΫ/?σ(¬¤¬χΎί’ά(©
Ά+E­΄vΫΣΰÿ
/»·@(ΆΊΦΏΧ»}o·―έk0
(Άvή‰[O'ω€QEkϊϋ½_υχ°(ΆΞo]:ΐ}ύ:-@(Άιώ/ώ^½€Ά(·ιΫ­Όόÿ
αµ°QE=lµόmό―ΏM??@(Ά¥=Ώό—WwΣζΐ(ΆRΦΞϋϊy/ζ·λίΊ(©z]ÒΧυ`(Ά@QE
QEΧυύQMÿ
_rσΧά€Ά(ώΏ«?λΤ(¤EPEQΏΰ‰ζZλσοιι}Bd²Ε4“Θ±Ζ£,Ε†λΟ<c©ν\V¥βΠKC§ $ΏhqΖs‚Q	Ϋέ2;γmm
\Ν/ΒώπΜΖ®&$ξυ]?―U¦mΠμn.­νΙq2D€g,Γ<c8Q–b`23“\•ÿ
‹‘~M:&c’ΎtΚηA–Ζ}p{|έΈΉζΌ»Λsq$®OFΙ'ε\ήƒΒ‰·'§<ÿ
/λΟ~rk¦4Ò²ΡΎΪ4ΧΛ―KΏΔς«γε4Τt];τκΏΙ}ιWZ¥ύξEΕΜ„’Ε·dΞ³ΐΖ}O'―'κy<σÿ
Χ¥Ά·PKΆΏίΎϋΎϊίώΰ•j’ήOοςKξΣaάν=8λΐΙΟnγΟΣ¥6)¤—EςD7}ÿ
―λώQEΔQE
QE
QE&“έ\N½}θΆ“]£ςZyωώύ?ACζGςμ{Τ°Ν5Ή	¤ƒ‘µκQώ'—M4—ί}{tνΏcHΤ”ZqvKDΎδυσ±ΣYψς-Κ‹”ξύπrΰτ'ίµu–Zζ™{µVΰC+υR¬¦ά’$ÿ
w8Θν^[I€aΐδ2AΗPzΐΦ2¤–ϋ}λ§Χ«:θγ§sj—{ώ?ιάφ¬g·b:½?*Jσ+κ[QΩ®­Χ ¤€{ω‡ζκsΞ@=kΈΣυ›EG•*¤§†O‘ΑΗ dΓ ΰ‚qΖO5›ƒZ¥εω-Ότ·U±κRΖB¥ΎΜΏ—m4ιί¶¶Wϋυh¥Α$cµ%IΨjιέQS%λ»^k¦ªΠaEV{~ϋΧχ—ιo•ΠQEΧΆίOεώχό»@(Ά]~ολΧξ
Ά(ςτόRσϋÿ
M€(Άω~Kυ
Ά)
QE
QE[ÿ
_Χ QMÿ
_rσ~Φ
(Ά…ύmέy―λζΠQE[Oλdÿ
P
(Ά΄Ύ†»i½ÿ
_Π
(Ά§oΐ(¦ίυ―—›νύi`(Άi_·ήΊΫ¥ΧOςτW]Χή‚(¦Σ²}­o=·|Ξί/ψfQETbϊώ}Ή{;koΑy 
(Ά‡{ήύmωi¬–ύ’WϋQPϋ_oOξοοmύw°QE5µΫo]γo΄­―§ΛKETΎή|—›νψtΨ(§Ά³τυΣ—­τλώ]€Ά)Zύ{vςξÿ
«tΦΐQEΌΏ^ÿ
ΦΏQUσkoύ·Οηςϋ€Ά)σ;+ieo]·ΧEηψκμQCwKε§ΙtMyτϋQPEPEPEP·Vί 1ΞNΌ~«ϊSι8ΟαϊχφώΈχ«JΞ7λoΙ[«ΫNίu„ϊzÿ
WμµστuθN§πφυΗ~Ύξ¤Ύ0O__¥-h¶^εύZ‹eιύu›υ
(Ά“k«Ω§ψ­Υυϋ»ιέ…QEΣ¶¶ϋΏΊχΏN«Οgm@Ά*eΡήΧ·_πνªυΥzΫ@
(Ά΅ÿ
—δΌίυΆ(§wuεoΣ¥νΣΛ]νΠ
(Ά›i΄ίΟÿ
%Ϋ_ψ>ZhQMY=φ_ϊOυ®X(¦Ϋv³ν›gηηΫ­ΐ(Ά™I;~>v~[iχκETÿ
_§θEU§²ύ}?½λώ[¤QZ5Γϊÿ
ƒΠ(¬Φή‹§eηÿ
EU;«|ύ4¶—θο}»ϊET·{y%ω/7ύoΩER
Ά*–ΎΊ~ήυΣN€QElΥό¶~K­τό<΄Ψ
(Ά…ΊoΛ[λΣΟϊΧEm
Ά(Ωό–οΙ=οÿ
ωERεω/7ύvΨ)	
1
(Ι'€
κIμ(I·dbεw}mΥ^ΪuΎ£€$g··>γμ;g5‰ªλ–Ίjς&Ή ……Xπέ‹°Θ
dƒ{ΦµβSσΪΨd.
Ιr29ΖΔι·΅ηΫί<nY‰g$»Y‰$’z’ORNO§§©κ§O­—ΓΧδΌ—ίω[‡²΄m»]¥Ώ—]zφμ―usPΤ.µ6ΝΔ„ ?,@|‘ς	Σ’
Λ}k7i!}zν>Ύ=9κ{g“5Ò΅Ά³[|·]:¥g£λΡ<κNrm·­τ~~AEV–_ΧυδΒ( ( ( }/ίEεkQE(Ά
(Ά
(Ά
(Ά
(ΆΙΉ'Ύ―O»[oÿ
iΕλÒΦkΟG{ώ‘wG ’6e`Αƒ)Α^ΗNÒΡE›K»Χe²¶­ξ›ίΜ¥'¶΄KΚΪιε―ωkΡn—β™-ΚΑ~†Xr	2/b[¦α~π#®β»h. ΊMnαβa•`sυΓ΅g<u―?QΣότυ«v:Ξ0xHΫ‘Ί,’)$G7C•Ι$VR§ςυΧª[έ·§OΛVϋ°ψΧ(½U·ÿ
‡_πuµίO]Ά²΄½bΣTχ-²tΝ·s‡SΣ*OϊΕb
δκ+V±wNΝ?[i½·ό_όΨ…HΝ&αETJ=RΧώέ―ΕhQEe{ÿ
_/Π( ( (§ΏαχθΊ½?­ΊESkςς¶–[έχÿ
m€Ά*@(Ά{u·¥ΌΌϊtΣώ
QE/λϊΧρ
Ά*®ΣΣεΎ»vm;ώ7τ°Rγόώ_γU./­-A3Ο`c;g\ξ?€«q”­eΣΟΚιο}mÿ
kΓ©Ό’υ-Q\Μώ*Σ£Θ…fΈpzª”Ή9Α¶kίHΡα†HΓdeΑξνιΟBrqΫ†©IοΣ§—OΘη2”~Χ§[νÿ
ί¶§΅c―µ5—u@8%
`rG~+Λ%ΦυyΎυμ	9XφΆΰη @11Ιχξj—7S\LγΈyσxΘ#<Ο Η]#Jέ~wK%ΣΦη4³(¥t΄ύtΩz_―ό^3Ϋ|ψqο"}rqϊίY―[»qυ?ώ+υ― +‘Ι'ά“ϊsΖ;SB(υόIώ§όϊΡμRÿ
ƒσνύjfσ7§Ή½Ίϊn΄ί.ΝΑφϋωϋ¶ÿ
Ώρÿ
ρTΏn²'k·Ο§τ/zρύ«ιόθΨΉιιϊgΏ\sωΥ{>ÿ
=5ι·ªκό΄ν/³pµύ|Ώΰο®½Ρν	$oΚΘ=UΠώD6?―@{ώϊ‚Ό\3Λώλ2ÿ
"*Β__EƒέΒσΣΞ€ΑωYτ<π§μν»ΥΏύΏ=#™Fλ™[ηώΰoΎ·ΉμN3ΗΠNÿ
JJσ8<I«ΐ0gK…Αf@2mΙµ½{Mh<^AΕΥ3όp9#ΟΚγ χ1Ο=KƒMθτϋώνΞcθΙΩ»=>ηo^ηmEbΫx‹IΈ
ΗΩΨÿ
ΚTυυ―α~†µÒHδPρΊ:¬
ΔV2SώWn›ωooι_Ρ1­JjρOσESWvmZέ>ν~υ³-I7§Oψ§ό(ª((Ά‡»νΡνΆήύΎύ~@QE›OoO–‹{νΡv
Ά)«ιλÿ
ΘΎλϊτΊ(ªq³Vςοή+½νχΫΎΦ(¨mώZίΙyω¶°QE 
(Ά€
(ΆαχoδER
Ά(
Ά(Z4HέωοΧπλKMn‡ΎγF?Οÿ
®­»µςύΏ/!7oΣ¥ίΜhc»φχ¦FO%D-cn£·ÿ
\RΥ―³ώώ›o_Η`[/EύuόΨQE”―w}ϊύί1…QMJήwςoKω>ΧΏΘ(Άχ·K[ÿ
mΣuΥ_>νEQΏ§]vZw~›φςΠ
(Ά“όΰ+u~π6@QE€(Άk·αίUζΏ¥σ@QERoK7Ρκό•――ΟTµΈQQύ}ΰQE
QET^«ΆΎΏ‡Mÿ
ΰ
QE§2]φί_?=QPo¶ΧίΌvΌΌµ}QU&΄ΦοΛmΣοu{hEV@QE
QE	Ψ(ªo­υΣο²σύ?ΰERNίΥ€(Ά»κ΄J:νΎ},»Ϋ­έΐ(Ά‘™Yέ‚"ΜΔ€ª£©?N(~σ²ΧοΧmϊ®Ί|―ΌΚJ*νΩξ±£Hμª731Β€;“ΨWλΊϋή³ZΩ±KPpςbx9ΗΝ°@Ζ7nΙβ™―ko#ZΫ¶‘³ηf
fγξp6‚;δ‚zsΰΫ°οO\λΉ5ΧNέ²omu·υΧ£ΨρqX·wκΧΟgwΎλaδ
 Όu98ΗcΣ’}Oπi΄Q]	%ΣΛΤσ9~·ω…QLAEPERwÒΛªΎΪ. QE0
(Ά€ώΏΰ|‚( ( ( ( ( (¤βK{[ϊΏυςv{ΫΏό7QEE4¬έΒM6ΪtλΫλώyϊAόΓπζ–t―σθχό„5KwIawGF$BC‚ο»ΐέΔσ“‘ίhή"δ­­λξGΚηdΌ|Έc€χΞΠrO@+‚n‡θi™ ©Αάz‘ς9ΎδtΰrkΓ›um­ΦΫi¥ώZ?%¥ª‰Rkήλ·έελΥkgζ{iΑ
―CΣ$ψ1ώx&’ΈMΔ†=–Z‰b£Αε†Ndθ…S†κI$Χt¤2†RXH ƒΟdt#σ®yEΗ¥ν¦φ_…ϊύηΉC
©4υKm4Zy|χΫut-QY8kM>ο?^ΎθM½¶όzyΏ??^¥QPτόαζϊÿ
]QF–ώΌΌύuλωEP΄iφ·υύ~
QEmΣªξΌόÿ
αξ“(¬¤zφVό<ί§εΠ(©ό?ΰ―?ψτάΆ™$±Δ¥εu,Μΐ
=NHÿ
λώuΙκ+‚"a±ά8$HΔkΨ`½Ι'Η…k
rnϋ%ησώΏ¦cSJmΚο²ίuώ{lHÒK"".K30
ί’8ÿ
υύy«οΨ[e-”έΚ	e"τ9Ν‘ΒφοΕq—Χ—δ›«‡g!~κ£…\FγsΥ0€Gμ8„wυÿ
ΝtFΎ¶ΏWδν―Gψωϊyu³+¨Yiζϋ=:t7nΌC©])@βή2>δYΘδ?7δxμxΩvάδ³IbIΙ$O'$“ƒΗλ’ΫΩΖ;=]Ίo²οσώ›8e^swm®ϊ»[µ­ιύl(Ά’µÒI5u®½Φ¶Ώόv\Κν·¥ϊ>έl—γµνά(ΆΫεcΆ(ώΏ―λώ
QE&―Ώ}-Ϋώυάw¶ΧώΏΙυό‚(΅νΆΏe¶Β
(Ά΅&ΫoKÿ
ΐιζ΄Φώ{
Ζ@rqΧ©'€yΗCΨo¥Y‚ββΤξ·HOϋ,pzu^„t#†9έ―»ΣϊςιΩi’‹Oªλ{~_s«΄ρTρan­ΕΒρσΖΒ7F6¶Aν·‘“κμuΝ6ψIr‘ΜR-ΓvΑbN
Λu―)¦‘¨ηλψφιÿ
υ±”ι«ο―}|Ύÿ
“υμuΡΖΞW~κ·θ»yo§[ξ{q‚F{Ο\ϊxηύ}#―0°ρυ¬lΝq
ΐς¥bHΞ>δΈ# 2/R;]?]°Τ0©'“9λΈGΨ“µ‡Έ'ΤΖQ”UχΫ―§υwΧδz΄qP©»µώ}—έwnζΥ gΤd{η8ΗΧzφ‚λΗωÿ
<Ò:ξ©§?OσBQEΏυζΌΧoλfΒ(Άή~›ΩY.—ΫσΎΰQEC•Ίήι=ΪνΩυZν»υ
Ά*:―—δΊίΧµ»φ(¥ύZÿ
_‚( (ª{-«/7ύyZΐQE QE
QEώ®€)Σ§β;r?Oλ3O¦·B>NΆ©|Qÿ
·%ύV"{.χM]‡`z
(Ά¶[/OλΆό—΅KeθQEe;_Ο―υÿ

aET
QEφÿ
ςΧQH( (Άίεύ}ΰQERZ¦Ί5ΫΛ»σϋνµμ€Ά*¤ξνÿ
­­ΦέήΏπ@(Ά‡ύ}Ιw—ω (Ά@QE
QE=WΟώÿ
/ι
QE-?―ψ`
(ΆΪλ{uΏo?Υ|­ QE7oΛΟ·χοωzERεωzÿ
^[
QE?ςό—›ώ»l€Ά)
QEI®mϊy®©ÿ
[EP―uo/M}ίΝy/E.IJίΧGίτΏmΗsΤrGη3N¤υν^β=gνl-$RgΞu?λ[“wχƒg=@8κψ“Xϋ2}ΕΔ ‰…Aϋΐ·έ‚0qσηψΑ'ΧςOLχυ®ΊPo¦¶ÿ
-uιη«“ΕZτΧΞί-ΊhίΫφΫί§aΟjZ(®¤¬’μ!»¶ϋ…QLAERiέke}/Ώ_ς*ρ¶ΪϊΫ·―NΪQLΆ(
Ηό:ώ]”QE
QE
?gη¶Gυό=:je.N1ϊϋ`}8ώ^””
QE
QE
QE
QE5Χπ·—ω=|ϊ‡Ò( 4ωvÿ
ƒÿ
δQE
·ήίΰQE
(Ά€ΛyΑ?ύ|gρ=°}#5―¤λΣi°M™­p¤’Ρy(8'¦# "²ª6X’ΔΨ?Θtζ±M»λ~ιώΦ#ZUeN\ΙΫυΫτ=ήβΈRx$WGPApΓ$« `π@5-xυ£w¥L$·”νb7ΖI) ΖρψpWdΰσ^…¦x†ΛPUGu¶Έΰ4Rª[ώ™»a_$tΘ+Η5„ γωόίνωΫΫΓβγS{'ΩμφΦφϋ―kk΅ΏE
‚‚2¨4W+»z­_M±4ΪΧΆοfτσΩϊ/;…QHΠ(ΆϊώΏ­B(«\ΝΖΙτK/=¶μ“Έ®–ν_παE#²G–WXΠ–b@ώρ' εΝsώ(¶Ylρq7+“ΔJΓ
	—$»Η Φª2•®΄ξ—o-uϋΎM™N½8+έ?$ÿ
S©m‘©yQGήf!Tg%ωg΅ι\¦¥β›Kux¬ΐΊ—%w¬Jr
<Ώ9ΗέNkΎΤοµh™Ω{F>H—FΥΰη“’q3“G`θrpr;qιΗoÿ
_^kHRλΛέh–Ώ5ωo{XςρφύΨh{|Ώΰµ―{φ-ί_ήκLσ»rNά‰>UP
Ακzs¥•Θ8Θγ ώΤΙÒθPi$­ÒχZ­ΊυσΧe΅ζNr›wmφΧΣ»ώQErΛ™7m-ι¥΄KώzQE_*}?―λυξΐ(ΆQ»_®ϋv^»ίπνMί«Σfχϋ;[Ρυωά(Ά­{~?πίΧrB( ( ( ,ϋ_Σ_xQE
QE
P@=yΆM&¬ÿ
―κΐ!
”ΐ›NS‚F>Η ƒτΞ9©(¨qσΣDÿ
U½:ϊΏ'J.ρm™βk›=έ+ά@έ™GSς†
d
ΕqΧ•έΪ_Ϋ_Δ²ΫH–ωΧΊκ~`GCΐ_Lυ―!©-ξn,¦YνΗ eε~λύΙ8*zωyJ
ν+.Οmυλϊμz8|[”›jϋ;^ϊlίeςΪύdΆ°4~ΫR³ά+FΗ*HΖJ»ΩΞÒ
9'Φÿ
υησ¬βÒ³zΩΏιuί¦‡±J΄j«¦Ί~—ό_υ`Ά(5ώΏ/^ί QE•εςKΞÿ
β0Ά)ω_πΪER
Ά*ΆυZΫ_ςί_/ψ~€QEδο­ÿ
―wMόυλΣdET
QE
QE¦Φz»Ϋÿ
mι}Ο¥C)ΐϊ~ΌΣωΰ1STRφλώγωLg4ΥΉ—VΥχΫEÒο§ηΦΧS+]_΄ΏOÒδ΄QERΩ_{+l½QE¶σÿ
/?'¦Ί(Άµm6Z-:λkuοmZ
Ά*M]7ΣGgΩwÒΧWΏΰ€(Άλ·o?_λ`(ΆOόΏ/υΫ`
(Άªϋ|Ώ(υΏ—ό7@(ΆΫεΥιkl―έ|ύPQRέΐ(Άw}ίγεηε}:ώ
QE€(Ά¨ξΌίκλϊ}ο`(ΆÒI;^ΧΎΧιΧΦΐQEbEUtέÿ
\ΎoΛ§ΛM
Ά*@(Ά
(Άwω/ψo?+ÿ
JΐQE€(Ά
+7UΤcΣm$™ωvR§χ¤nγ#€NO#€qΞΡbYΨνU’x

rIτ―ΦΌ―YΤRΌvDΕ!PIπIr8τΟ9ΥJ2|Ί[§¥­―ηmνΧUc‡]R‹Ϊνi®ΊΫ[k½ϋlϋ%•η•ζ•‹I#nvλ“θ3Ξάδ*:(®Τ¬’μ|τ›“rnνξηόÿ
Κ(¦5g£Σ­ΧΙuΩuwτV
(Ά‚B( kλπώQEϊϋΒ( ( ( ;ÿ
VΥQ@Qυ ( ( (ΆλΈQ@Q@Q@Q@σώ4QRβl3i=O¦N9=xϊρΧ­1“Α8Ξ@γ³‘ΟιΣξ95ωÿ
?ώΊΝ§}mΣ~ί.ƒR”vmz–:ξ΅eµ%|Ύ\‡+η*Ωά§ƒτΰ‘c§¶ρm£ΰ\ΫMσ¦xΘcυδvΒQIΣζW²^—[Ωυ½χwωΨι.¬l®Ϊ^om/ωu=J=wI“osΪL¦1Χ9αVWRΣΫ¥ν®=LΘ?BAύ;ς&\χΗασώ}©»8ΖG\τλμNzVnSΩ^Φ¶Ά¶Χ•–ύQΜZ¶ιΡω~5σςg±ϋΦϊΣώÿ
§ψΥY5½& K^ΒΨη0υΑαrύZς γ=xη―|χΟωφβ€ g΅όΏ†@8νjτ·K[[Η²Ί_εΊµΑζR¶‰ί¥ώ^~_Θτi|W¦Ε%g™ΰνΨ2:sΧα?`άψ²ςbΒή‡';™‹²όέ@c€q’AR98κ+™£§ωιτ«T­η}½?iγ*MYiηχvτ±bκφςτ΄ά;ε‰ΖH#°®zwΙªª»F2O'μ=?OΗ©ζElΆ—Oλϊ_ΥΞiNrψ¤ίτΏΙQLΆ(
Ά(vώ½6ΣGη¨QE(Ά
Ίwχ}Z²¶ΙΫO=®ÿ
PΆ($(Ά>wiλ®ÿ
δQEΨ(ΆMj­Σ§}ΊξΌνχ=RΩ=――αΣ®‹ρΣ`Ά(WλύhΌ’ϋ΄%Ϋ£Ώυύv
(Άυύ]@(ΆπώΏ?ΉzQ@QI«ΫΙίϊώΏΰC΅`κC¬U²=r:Λg5Ψh& ¥® Ϋ†B­ΗΖpΰΐοΛΩΖk’¦κ@8ΘΗ^½}Ξzυχξ2”;­¶Zn·Zυυκ–ηMς¦Χ½ϊοkω_Χηηνc΅”†R9=9Χι+Ξ΄-zK&KKÒZΣ,±ΚrΝNAluLzύάΠϊ:ΘªθC+(e`A0Θύ1\²R‹Ρ'χ®Ϋ_¶ΏΦ‡»‡ΔΖ΄w΄¬΄oΛ{ωοΫ·›¨Ά[¥}τύ#¨(ΆΚZ?NήIi»µ»ί@
(Ά¤(΅;
QEΫΏυδ—θER
Ά(υ
Ά+NmΪνuΛη§ΟMξPΚ28$zϊϊSωΝL~H?_Δ{τϊχΕ(·ΜµΎ‹―’σϋύ6ιλϊ>—Wÿ
‡°ώÿ
η?•€suχιΣOΔc<qKZ+θόµν}l½QE—Όέν·ώΫηηλFQE-z7ΣKθφ·_ψktθQMήΙοuΥ½­>χώ’°QE@QMο¦ήΧυε°QFώεe¥ήϋΓlQH(§kνϊyyΎ―ϊΩESqjί'Ί·O>ξίQKªω[ώ«δESΊΊΥτΏα¥οεεfΎΰ(ΆΦλGέiψ|Ώ­
(ΆΞO]ήztσςιoΤ(©zχώ’σΥ½QE 
(Ά€
(Ά€
(ΆZ―ΓmτoªοίΛG°QQO:[A,ς$.IΐΞΰgτ8ΟLχ«[_Ι/>~„ΞJ1m»Yns^(Τ-„LV[€L¤»*vφ Ήq“Εp
`δqΗεΗΧ―5bξεοndΊ”Ò1`	?*‚v―Έ;t‚½
q²ΏeoΑj|ή*«©QλΆιΣeσώ®QEhr…Q@~΅EPEPRitΏτΌΌΏ®¥Q@›»ΈQE(Ά
(Ά
(Ά
pδ όΉÿ
=)΄Q@Q@Q@QYΙέ«kgΏ}ΌΝ’\ΎMjύzκQEhcύ.ΦEPEPEPEPEPEPG<ηίύz(΅¤χθEPAόΑόhΆ“W¶»5ΧοΈlQE0
(Ά€
(Άί²_uϋwτΫΜ(ΆQE
QE9ieσσΫ_]>‘EPHQE
QE
QE
QE›·}}_—ΛϊκEQe{υ_Χυκΐ(ΆI¥® QE0
(Ά€
(Ά‹®ÿ
ΧτΠzuχιψϋzΧE΅k’XΘ-n‰{F$#‚I€±δcΈΤc>Γ¤#?ησÿ
?Χβmωiχ-χιύuή•YBq¶‰5}οηύ[D{PΪΘ®Ή\R:A#ΏΟL0i+„πζ¶mΚX]¶abV		$ΔΞyÿ
tρτΑ8δΧwοAδΠƒΘ#`F;W,•[tΉτzΡ«5ηύ[]6IΎ—aEVrφÿ
‡ΫΝvώ™ÒQEfβϋv]<Όί_λΆ(¤ΥΏ―$ϋωÿ
Z¤QH( ( (­cΣÿ
m}νΣuÿ

Γ‚{ρΞO¨νÒHΓ#¤ΜV³Z½l»mΛΎ½{?ψ"~¶³_ª(­—Άό—υ¨QE·}?Νw·TΊ”QEBΡ«ΎέΒÿ
›όϊhΥ¬QW+5«·®ΫίΊμEVϊώ•ΐ(Ά
(ΆΥ-τέχεzk§§ΰΥQG*ήύ¶ΣM-ΧΛρΣdEUmku·θΊΎΪΑά
(Ά¦NΙuΫm΄³ο§Koψ€QEQ@QNοM}5Ϋo=?ΫΘ
(ΆQGυώ`QE7λ[v^oϊωΨ
(Άÿ
«v]_υι°QE 
(Άvk}ÿ
αΔέΎζώοΤ‘GΗ<υη>z{ηzdWβϋÿ
*8¬€dζΪyΨO'†η υ+υΩ™8έάνXΤΘΗ
89τ
a³ƒΣι^?¨έ5υμ³18-•ΙΟΘ…SΙ!sΤυι]”–·µφτέiσΊιϊv:·,9onkχ½®µωΫώ¬0=Έλκ?¦{Ξ(®¥²O{ww
(Ά…ΗχΕ%.―γp}Έ¤ 4ιύmϊά(Ά
(Ά
(Ά
(Ά
(Ά
(Ά
(Ά
(ΆZί¥½5όΐ(Ά`QE
QEKMµ¦mWυm4Ω¶]Χ#]o·έώ[…QM«-ϊ­ϊ-4ÒΪ/»ΏVKτ·υύ~:…QSΜοkv»Χªμόίά Ά*ΐ(Ά†υZΩ_M7ΩοηM¥¶τzω~_>EU(ΆNύ<Ώ5ϊ\(§­φΣ½ΐ(Ά
(Ά
(ΆσΫίθGOσώ4wυÿ
/Χ·ζΡE
QJAΟ~E&G­Ί{4Β(ΆΟ·υύ40Άσώ{wτ¤κ{Τtΰÿ
§γΪZ“~ξΎ^Zy~―Λ°Eηρ :9Ικ{cί½_,τχ_KλζΌΌυΨ‰ξ >dπΗ»εDΗΧs
Ο]Ρ-7Ζ•σΫQ³‹υ’e­>I»{―]W¦ζ­ΕήόFπ	½ρ—†-Κ‚JΙ®iΑ†@Έ=λ“Όψύπfΐβλβ7†²ΤΤβ”δ3η€}ΉS¨τενΧΣΛΧϊΩ9%»]χ=€ύqH23|zϊc5ρ¦―ÿ
ύ΄έx+^ψεα-Δ‰lςΫkeΛΈΜΠΘ—ÒΩ­“!`Έ›jΈ―cπ—νπΗB6πΖ?†ή#y€1E¥xΟ@Όχ
UDj-0'#εt,Ω£ΒΧJό’Jλ[>κύ6³άJpw΄£χ―λΛ±ν?ηΏυΆ«Αwmr‹%½ΔΖΓrΌ2Η"ώπ(μ1ωμ}ª`ΐγΎΰμH$g―~Υ„ιΤOΰ––}Rέo§λÿ
έw_Χό:ϋΗQNN@ϊ‘ΟαώυΒψ—βg€<!xtÿ
ψ·DΡ―|ξ¥ντά%²SΜΚ6ΖΫ†ΑΑΰ€γΛUm}Ίhÿ
%λΎƒzjτ_wDϊϊÿ
‘άG¨Ε 
uΕxUίν+πFΠώ=Σ&#8[TΊΉbTdcΙ‰³άυ ½Χν{π>ΧvίjD¶ΡoΫqΗ82$Cq“Χή΄T*4®»_®Ίt·Ο§ª”WUχOQ_έ~Ϋ΅έφ{έm‚Ίtp©ΗlΛt§$³Η½rΧ·w!$YψKΔ—`t--©ΐ%N1ρΗΎ-aª=~zy―_ΣεΊxΪι«wΦΪ=ΰt>λρμOδ2h―ΞϋΫχLύαέωΖ0nu¨8=ΩροτΧ7uϋ|λ°|?Σσµj—RχgΛX°8!±Τzv¨ΰ«I'k]v{7ίοΪ}΄<ώγτΤz~ƒόϊΠAA^+ς–ηφτψIk	ψNκÿ
΄g8Ξy?kB088λψΉ¥~ίΎ1αFµΰώά‘ΏμW¶S(4Οx„sΠ§)ύJΏoλOσό»θ*Π}Φέ=7σςWξΤΪ+δο‡Ώ¶ΒΟΙ†―-ηƒ5IΚF‰¬ªΎÒ7¤β‰{οΌKTθ%€―ª-®ν― †κΞx®­η@πΟ‹,2«
TΗ*FVΘΪΑ°IΐΙ±”έ¥ΣdίfΊ_qjQ–Ν2Α=‡_΅τφΈΝ"ƒ_ΣρηΟςνN*ΨΙξ;δqΟΖqί„>ΌuΞ9λθ}{τλψsΪJIµ¦{¤―v―ΣWψ•ÿ
ςΫυώµ(«ƒ8φτ>ÿ
ώΊο|9­­Ϊ—&ζ,Ψς%Qΐ
ρΘγ―±λ\$o%½Δw1ΐ–ÿ
ΎxΗ~8ΐ*AiΣ·•­Ώώ	Ω‡¬ιΙI=6—g§έλΫξgµσΟβ;RVv—¨¦¥iΰ4(Y“ψ‘ΐη#®δδϊ“Z5ΞΥΏ―/Ώώϊ
Sβ]ξ“λ¶ΧO@Ά*^t[λιζΏ_Η](©’ΣuΣηπλΏ—έχ€QEυλλ―εά(§¦¶ύτεσυ³όZERΎή^½>—ω
QE¤]Υ»yλΣ[ί½τν§¨Φϋ§πώtκFzγωΡ%ª~wΒ·ωV"{-m®ÿ
&-ƒςΰqιKTΧηb–ΛΡQJVÒξίπλ_—ίkΨaEQ¥—•ΊΫ·K¥χύέΐΆ+6ή½-ί¥ΌίιίΠ
(Ά¤(¦·^ΏΧUω―P
(Άµ\ΞΟϊw³οΣ_ςΤ(¥7²OΧ[uVλύnEVwΥjήΏεηώ[/QEί―υeζίυ§dQH( (§u¦ϊ’Ϋ_'Ϋ§Θ
(Ά…£^«σω
λk«φΊΈQENΪz+­{GΟ·¦ί4Β(¨λδQE
QETΊzyt²ξΥφΫ§~€QE•ξ­½Υ½H‰jΧ§_ψoΤηόKtmτΧE;dΉerAΨyc8
y#µζΐ`c9ϊύxόΊWKβ{³=π·Rvªª0x.ΰ3sΘΐΐδs\έzTΆÒMΫoΗώΧξ|ώ6Άν‡µ­²σλσÿ
"(­N Ά(
Ά(
£­Pϊρÿ
Φÿ
?Ζ’(ηύy|ύ( AEPEPEQύ_Q@Q@QIίK+κΎKΈPxΞqΗΈ#P}ιΪZZ-ιηnNÿ
Χ7ςώ’ίΝÿ
Z…dtκr;=ϊτιλώ1ΌΠΖ3$± υy{γψSQ–;ιψφώ½BλΎϋtΎίΦμ’Ν—YÒ ΝªiΡ™/mS $ύιG΅όkγΗ^	΄ΙΊρo‡mρ|έcNB\Χ κqΫ΅ΑΓP›ϋ/ϊ·ωλΊϋΡΥRgΗΣω{δβΌΎχγwΒ-<¦|Eπ¤L2
^ΞFc#lrΉΟJζnΏiV„™>"h’=-¤α^‹/‘νΣ®=j•
―μ΄ΏαΌΊλΧΏΘrέ―½?ΛΥοE|Υsϋ\|	¶Ξ<[-ΑΓm¤jRΘθZή48χaΠΧ3yϋl|µΟ•/‰―O<[h ƒ³έΒ:r=xηϊ½IYYκΧΚΟΣ§β„η»ωτϋÿ
―ΌϊξψλφρψWE―‡<c9Α’ΫM[λFVΟeθ{c'›ΊύΎΌ*ΎΗΰMvαΏƒΞΎ΄}·μ<…8ΗjΈα*ΫTτς¶ΦύΊkΡlOµƒϋKΣ®Χ±ϊF	θ3_›πP)@a§ό6“¦ο]“xΘ‚ΩnFk“»ύΏΌrμΒΣΐ·C¦[νRαΤςFΰ¦5Οlp8λUυ:ΦNώ~·ι°½΄<ώγυOωϊwΆΏ!o?nΟ‹³nϋ.•α;Pίt>κ}Ή92^©>ƒ ηλ\…ηνρÒνMoK±Rq¶ΗF΄]½xS8Έ vδ®jΎ΅Uξ—ΣΡ]u³ωϊiw΅/Mw~ν{/ψ'νVΣΟlqΙq}{ΤΆγÿ
_ΛλΕ~^~Υ/xÿ
„ςώΨ·µΣ Α9^‘Z/B>™Οq\ίΗί·¬Νqρ7ΕL’AνΥAμ«Lχ?JΥeςµΫώ΄vΫ·kοε¨±4έ’R}_¦ϋk®‡ο·ωϊϊªή>d–ÿ
~HΧΣ»09δτ―ηΒοβ‡Δ«πVχΗή.ΈVΞε}{RΪzv!A?AνΤΧ?/ΌEtΩΉρ·pOS>«})κI9yΫOηZG-o«_®ί/ΉχΣ¶og¤]½<–ϊ~ZθDWζ‡f»ο5½"ΡsάκVPυΖdGωι\ύίΔ‡Φ9^8πEz«xƒKέΗ^Ι<wο_Οα»Ί—uΝΤ¤υσ.$““ίΔgίάΤ"±ΙΈάx>Ό“ΘΟ?NΨΛμΦ«ΙέώΏ{µχωλ2oEkνu¦Οος?yο~:ό°PnΎ!x]Μ1§Λ–¶@ς0Η9;ppq\µΧνKπ"Μ²Ιγλ
‘oe¨ά¤ϋ«b;ϋς+ρ+ΐΗΠ`σϊφÿ
 ΤLΉ?uIξNsΞsSκ:Υÿ
gΓvΥΌίMZιωwZ‰β&Ρ?—§υω>ί³Wÿ
¶gΐ«-Ϋ5έRσεϋ.‰zCεL΅?Ψδ‘\ίνίπrΛg¦xΖόΰ®›mn¬yΐ5Χ
γ©\δβΏ#]8θ:cΨγΗΎ‚«Ώ§ωγλΧ¥ZΐΣÒιιk»iwΙι§ωhΓλΙyέZΪ-ολ·έ΅ϊ―wϋ~ψ)›xl³έXΔ1‚zFΜFGP}F;W3uÿ
µω…—Γ‹—ΟέkacR1ΖDPΉΗ¨½3Χσ]Pν―ςηή€gδvϊzχÿ
λυκ3KIθΌ»«μ·O·υs7V£nΦvμ――^‹WmtΤύΌύΏ|S(Ζ›πÿ
BµΑ­Nφε±ΣnΕοδσψW9qϋwόR›+m xZΤp^Ϊκ}ΉθW7J8δδƒίΎ3ρ.ΡΧr~Ήΰύ~αI‘Ο#µT¥―οΦχ½­Ύÿ
?4­UιwΊZ_M•­ϊ/Sλ‹ΟΫWγeΘ"―ΩgΠθ©#:4Ξ£λxΘ®^οφµψεtNο­Ή=νtΛ3—69g§α_7s~Έό*³¶:~ξ^Z>―BΧ΄U­kµ~–υιoκϊ^΄•Σvωέκ¶µΌ­έόo½ύ£>5ίσ~"ψ…$C4δ(Κ=0xΉΏ‹_υ¶λΗώ.sΚÿ
mίΆ’q’S(0ΦΌέΞN:gδςHτό8¨Φα3Χο‘Ψ‘ƒ‚qΣΏΎxλ\”RΪw^NύwΣΞδςΦvm6]ίo.¶Ϋ§Θμ§ρO‰ο2nόE―\Αo΄kΔγ8ζK–υης¬Ynο&fσnξe?τÒy¤Ξ}K1νΤNυEnP
KwΖIώΈ9όqΤυΕ;Ξ\δ:ςsΛθ>?ύz‡,<wδι¥Òσκϊvήεª8‡grιίΛM»iθο¥‹>η$ϊ’I?Ry4υ+ΖxηΤwΗlσή―02Ύ	ω>ξ8Η<γόƒ$NΟN¤γ'={`‘ÿ
=aU9\wjΦµϊ|½w¶Ώ8*Fρq]Σ[o}ÿ
†?ÿ
n³ϋAxQΘθΪ1,r[μΘΙΐ?xpA>ΌζΎDK© q$Ό2)ΚΛ$RAGµσw‘ΤΧΥί·φ‡ρJΰiΎνΞ“gGήό}+δ6ά9ΙΗςιω{z}M}
0T ¥μµΊΧ£ΧMτOσΤηΏυψ[ώιδzη…Ύ=|oπ;DήψΏρ3ΓB¦$Ò<mβ+XcΫ‰oΜJ σ΄ QΣ΅―§|!ÿ
EύΊόΡ;φ„ρn­;BΫψ¦ΣDρ<l‰΄y5}:βν†Υ9ύψ-’IέΝ|,Λ‘€U’AΗΈΤ‡Zύ)πόφψψα/xίΒÿ
,[Γ/Ρ4Ώh7Zt	ξ4fÒ+ν>ζ[34σΫ<φΣE+[Ξ# αςX©eΨtή%Q¥Άr²Σέ»W³kmτξpψlN%Κ4!9µÒ*ι^Κϊ/ιZθϊΑÿ
π^ΟΪÿ
ΓFόSαί…~:‚=©<—Ί£΅ίNΉωΈÒ/Ν¬N@<‹=Ή?tbΎΑπ§ν¬ώΩΊ=·ΕνoΒ¶~Ύ&_ΓR›R΄h―ΝΜsΟmm2­Μ—LΒ7BS
y‘_ΪΑÿ
ΰΆjοΰΟ‡A9ΘΤΎ Y‚0W†[k)ΈΟήΗdIϊ‘ϋ*Α*ΏjΟƒ-|β½/ΑΟ«_RΤ®%Σ<OΥ€Ν–¨Οo»•"Pω‹οr	ΞG‰Μ²:W”+ΡRJφRVΥGtgψν¦2lΪM'‡―$ν£Ό½υΧ―4²¶3 cρΫ”8$g―™νψγπΝ}·iÿ
χψχ6Ρ<ώ²έΧΞΥ§”©ι‚"³~}0ΨΉ®’Χώ	ΙρyΟϊWΌmΘί©LpNΩƒΖη}kΚ–w•%u^=-δ•µZω/Μξ\;Λ_«Λ¦ι®Ϊ~+ςZ£ΰV`
Α==3Ζ8λόωιΝWnΌωη'=Aη>ΰtη±―Ò?ΰ›5piψ‰αΘ[r™:~£.Υ9έι>£<„δ]%όZ]ΐίόS
8$YθώΉΪeΊAΗQλΐ=+ύeΛb΄«%«µ“ιηλ«ΧCxπΎg%eFΞΧ»Ώ–_cςµ8ιψÿ
‰ηJ	δ¨ÿ
_zύ‚¶ÿ
‚mψ(Δ?\ίeΣ4ϋpONσsΧ‚Ga[Φÿ
πN/„Q0σΌYγ•σ,!nΈ9+c2sιυ·.Κνvω|“έχΫ»Ύ‘αΝοkζ―wo_λΟCρ”:m9
F{σλάuνΟJƒ³p0Aτ#’OΑΟ#ΣΨΧξ-§όοΰ4Vζo^0ZMi"$gννΠύy ω±ρφ~M+\Φ‡ƒ.n$΄΄ΎΈ‚6φU–QSHªRδ„σε]CI8θqFRΧpO¬—Gmwυλk
Ώ	ζ4)σΚ7I&ω«n–ΏαΨω­I
ΨδpOc·Ώcρsγί΄―Γ­O~Ξÿ
µ]#ΔΪλΣΰΝaΆΦόβ›HyτλSIΰ³»mοl^ΞδHLm.μυkΪC²j:Uν®ÒΩi “ca%_nÒ§=‰ΐδΦRHU°Ο<c
γΖ9ΰ’0zφϊ
°Έ•£…O+έΫ¥΄Σ§«ΎηΝΧΓb0ΞΣ„ΰ“Ρµm»iψ_WΣ©›ϋ<ÿ
ΑΐZήΪψOφ§ψa©ψNώ¦κ0πDR_ΨZέE(‚βMSΓ7r®©fΚ$iΕ”ϊΨVςνX¨Zώ€ώόbψaρΗΒ~ψΧBρΗ…u4oªhw±ά¬RφwΦηeή¨[’κΖϊ{«wb²Β„‚…/ψ(GΒkO|G°ρζl Òώ A4χλ^!±1¥γ
.o΅– iVεΖγ’|―φ@ύ²ώ1~Εÿ
τÿ
ό6Υξnt®mΧΖ^ΌΊψsΕϊJΊ¤φ·–Ζ+}B(L¦j°¨Ί±†VhZ{yzkεP©G³kDϋi®.‰ωt"8§“w‹Σ]ΦΪίϊωnΆoιExμνρχΐ΄ΧΑίόhψyz.|?γ-*+¦³w―4MV1εjΪ¤¨O•¨ι7Ι5Μd
Ζ5™3¨ΝνΥσ©Jά%ΊότΤ’”Zi«¦¶h(ΆΕ¤χWνψZά¥&¶Σξf¦¨¶™zI0ΜΒ9—¶ώ“Ξr{`S¬)ά¤dΠƒΘ χξ8τΟZρ‚λ]χ…u&Ή·’ΚVm³|™<Όd1¦
pΌΥcfνvϊχιϊ_e―—OW]]BWΡ­t¶_}ªR0Οωÿ
”•‹W=­Β(¬¥tΧΆέϊv}Χί}μQPEPEPEVÿ
>ώ_/λ­΄)ΰώzύ\―m7Ί·ήθB¤δv'°η―n­OU±†>ΰgόώ1ΗηfΆzZή¦ύώ`QEO3m7«Ύ—ωz.€QE7/>Ϋ_²ΎΌΧοÿ
ª(¨·υtES·υ§—όμQBέz―Νy¥ύ}ΐQEµτ^v]ύzώ®ή`QEdξνμχςOΧ·έδERΎΟϊΡ/?»oΡERώΏ/ςώ΄
Ά("R³VΧΣ^ΦΡ5ψ>¨(Ά―]΄λώ;iÿ
¶”Ώ―»Υÿ
_{(ΆVώΎοσυύkύ~eQHΑ¶έϋzÿ
ÿ
Ά)ληÿ
oΟOΐΦ.λ/ΛΟ]ώwθQE—gχ2dΪz_Ύ—³ΫΟό·λΈQE‰r—vΏψ{…Q[%Άτ]ϋ/=Υ΄ΪέRΫ~ή―έώχιΧΙά¦JλR;FμsΣεB}G§­>°|Guφ}2`¬ηΜ)Χ#qΓ‚
γ υ#·4S‹φ—ιΏ%¦­Ύ¦uεΛοggλΣςςΥΫ©η3ΜΧ3Λ;L®\ƒsδ`cτζ£¤Q€°όπNίN9χΝ-zVKοϋÿ
#ζfω¤ίυ§―υΫ@Ά*
(Ά€<ιυοϊRRΰγ=³Ζ’‚­§›ΩwΪέ=uλχ…QI_Λσνkyn-5ήϊ[oÿ
―PΆ(Χόÿ
ΰΏ―ιuϋΠQEΐ(Άσÿ
†ÿ
‚QE
QL~ƒ―_Γ§ωύhΕ€8Ο?ηπόΝ3pf#<Ζ§'$qΞ{tΞx¦…$g§?§―ωλPΛ,vΡΛq4‹P£HςΘΑ#HΥI‘ΩQd³dγÒZµn«kχµ½}oakm›Σ[_G¦—OΟΎ–κZ‘–(ΪY]!†5/,²0HγE³<BΆªόΔ“Βϊdωβgν‰πχΑΧ7:W†΅›ΖΊ΄ÒG³[iΚ¤)C¨m΄mΐ‹d‘975ςoν/ϋNj>=Τo|ΰFk/ιΣ=¶΅}nζ)|Is—Gƒύ’¬?sέΉÿ
]0#ΙHώ5Yƒ}Σ“λ’I=ϊδ\ύsρθαπτδΉªI%£Υ­6µµΣ/S	N¥Ϊ$—GgεΫo—υ>εΤnÒ»/ΓΎΣΠ1(&KλΗI 1{ƒ0H\.VΫ[γLμDw΄χ·Ρ 3ϋιεAόzΧΘ.[#t*r8ξNΏLύJ$ΛΫ…”tφ$sΠ{χ5Ωμ°ΏΝ­ο%n›«ωχο}ύϋΪ5%ιΣ^ί3κΏΪΟγΠaÿ
	x·#ΪnΠs€
[ξΐΟ“Ο|τεξÿ
hΟ7Ώ,ίu°¤ύΨZW?‚% zύ8―Jÿ
*E+tΐHδΐlS‘ΟΏOΞΜZε|­7P‘‰ωV=>ν‹!9ΞsΗ±ΤΫ·©K}o(®ΪoΎo―b•\µT*zςΎ¶{ςύÿ
;…{ρsβ}ώ~ΡγίΎFp5KΖpGό³tΖyΰ}F+—ΉρoοOϊg‰µϋFDΪ­σNA™³’Τt©΅πwoϊ7„όI8#εςτ{φΠΗΏ9ΟςϊΦ¤	~*έ•6Ώ|_8rμΠ―rx9hΤ`ηϊ}·ΐAÿ
²ξΌ»k¥½,·{X|υ¤Ό¬ξξΦ‰Y~B[ΫΉ²ÒήέJz6κgΧύcϋqΪ³¤%X“οΈ{σÿ
zΧµZώΝÿ
oΥL
<XγkKeδη{
τΑχΝt¶±ÿ
ν|@‹α¶΅8Α»Ώ³µƒΧΝ“ΧόυΖo1ΚΦψJΪ­}6Ωίό‘΄2¬Κ[`λ+ϊwVΫ_“Φÿ
‡ΝL 
ηÿ
ψώªΨmέxθ:tη9δγ“υ―²m`ÿ
Ϊ:π)“Γ=–Fqwβ+%Ϋ –fΞ¦3ΕtΦ?πO·‚κλΒV‰άΟªΟp9#>Erx
sΉ¬ήs•Eµυm®‹WΣ§υΧη¬rΩν…M]τ½•ξΦ½_D»τ>άHΗ$wυόÿ
ψg9¦^O#ΣΓ―bkτjΧώ	µρ6PΆγΗ^µ$‚κ‘j“`ΚÒBέNΗÒΊK_ψ&o‰ÿ
β†q³θχs^hΟ©{tΕρY¨»+οdτΧΟ³ύ7§Γ9ΓiϋgΡ΄Òzhτώ¬~a‚N@'#~ƒχμGτÒΗ©'Χόϋΰυ?Jύcµÿ
‚hi ·όOΎvέ‚,΄uSΗ_ίήΉΐΙΑΗ=O@+¦²ÿ
‚jό>†Ώψƒβ›΅ΗΙhOcση 1ΐ=sΑ¬_eªφ½\tωα,έ΄ά`“λχy~>Gγ“7AΌƒΰρΫ_ς)ª3λΫduιϊΧξ―ό»ΰT
άώ-Τ\`}hΫ@ΖJΓj¨3Ψττ®†Χφύ­ψFρξ Kβ}IWΉςD²Iλ‘Ερn_·{l—Kl—―MμΞπvfή²τ½–›'χ=zο¶Ηα`/§ψ@2z“Ο?Κ«–PΨ8ϊqƒυΰgιƒξxώ„lΏbΩΚΝ@_
kΝcQΈ=Ίω—=}O|wοÒΩώΚ³ζΑ£ψ[αΗ εκΊΘδ€ήl’Ϋ#iέΠπsYK°―α§'Υ.[ΟΞφ~VςΩp^)Ϋi>¶kK[§ή·θ9γnΟ³έκ{o~EKnδmF|τXδώ
Aϊϊ«ϊV‡ΰ/Αl~ψ@>ΣΫ0~f‰‰88,rr3]—Βÿ
†zhΫaΰ?	ZΈ‡@Σe¶Θ–N+•ρ­4	έΪΝν§/α®―εδtSΰ™ής―m5Ϊύ½:|ό΄ώf#Σod#eά™γΪNδL,G>k[ψ[Δsΰ[xw]v0"ÒoάσθΤπIΈιΤτώ΅πώm…·Π΄kpΛÒμβ ƒχpΗεΗSZΪΪΖ@ΦΦ0»¶‰sθ8?NΓύtομΥ’ZY­ωuΊVÒνZΘκΣ·½YΏ’}·ιΡόΟζrία—Δk¬}ΐ>0΅Δ~Υ ‚	¶\ώ™γ^†Λΰ_Ζkέ¦Χα$ΨΡ.£ό	‘Tη0F3ζΏ¤Πρ·ΐ
1x9¦7gΏ―Ί@8sΧθ9λΗ>ΉΟÿ
®°β›|΄αoρ^χ¶‰/δχf±ΰΌ=µ¬υ²ιo³µυ²λgίmίσΉkϋ.|}Ό
'ΓΓ»=Μn§'>iNzτΝt–_±gν~΅“ΑΪ†9{­X[69$;–ΰsθ=M~ÿ
Μ>fb\τ<{N4`Ζο]Κ}†{Χ·\Φ/1¶j	'§Ωλt¶ΏΪί#Άΰ!ρIΚφΩ¥ΫΛMίγΫ_Β«ΨγύΘ_:ΟΓv%°qqβ(§;J‘dυn>RMnΩÿ
Α:Ύ5Ξΐάjώ³S™υ+ΙΟ9ΞV"H’I8ΗjύΈή”ό(N„tνJηƒΧΈΰ½Ea.,ΜΪΧMy}7Υ½6λΫSXπ[>WÒώσwΫΊΡoέΏ-Ζϋoψ&·Δ’Ϋ<}ΰΛpq‘¶³;¨$r	·N;ε€Αϊg¥³ÿ
‚gλeΧνί4Ψ€ΖE¶<‰ 5Μ…O#©`t<ΦΝωΰδsΖNI8’sνκsΦ—'Ηΐυλώrk)q6i(ΫΪ.—Ίk·εkυΧΜθ§Γd7¦•΄ι~ύ–ύ»¶ÿ
πM=Λχβªο€	¶ΠtΥΘΞ»° δηZΦίπM‡Ρ°7?ΌWsYc¶Ò­ΑΗQϋ¨	\φηƒύ(?wΏc8οΖ}ΐΗn‡*2OάυτηϊώU‹Οσ&¬λΎ›ΑΉ²αάª;aΆ¶ύ?ώχΉπM§ό―ΰΔJΆσ\ρζ1τϋxqΘΜVδάδυλΣφΏπOÿ
ΩξΩΥ§³ρ%θξ·ύή<‚#HpΗ=ΊfΎΪ\cο`ώ_―`Zcc΅oCόsίΣ¥c,η1–ψ‰ΫµίωG'Λ΅§ΥιιmΥÿ
—π²ςzy&Αϋ~Ν}οΟqΏiΦυi3UϋPιί1ΕoΪ~Θ³•™_Γ="V\mk‰u	syέw†ηδr=s_I“N?@1ÿ
κύ) dδ_ÿ
VsώzτΐO3ΗNΧΔOOοΙmklόc—`μτ–Φ|‹’ιeoO»Ην?g_¶ϋ7Γ	!eτγ+qΑ9gνΤΰτΝoΫ|ψSbOΩΎψJ3Όh¶n@Θ'&DlτAυ―E=Ι9Η_¦Oσϊ‰‰Η\
pq~ϊtλΦΉώΏr»―QμÒζzκ½6θνmϋC„KύήΊώU®Ϋ]_Mυς?ÿ
ΰ³ώ#ΡΎώΓ>1ΥΌ£ι^ρ7όSα/
θΎ¥iΦ†™5ξ΅φϋ››[”·β±ιΧ–I8IX`IΘ?„Ώlÿ
ώ’$“Ε±ψΩCΫψ‡O³½Δ
EΔqEr™ΑbVPέIλ_ÒOόgγ΅aπ?ΰgΓψδo7Δÿ
µmvζ!(Η“αΆg‹«ζ]h²ΉCΙηωή}ν’1Ώ‰ηυ―ΨΈR”ªeτκΥnR“Z·~ύυΡY=–½ΚΈªt΅•*1QJρ—*KTτιumόύnzoΖ/‰ΊΖ]ψοW°µΣυMFΚΖήξΦΙΪ+Ψ@¶Ι,[ΙeF¨Ε¶Fκςƒƒ8=ªfr=I<ϋzT'>έ³ω{c‘τφχ―³»tI­ϋh|¤\›I6υ_Υϋ~Ά|ψg©|hψΥπ§α>ÿ
ΗΎ=πΟ‡R6Ζί³]j6΅#1¬#Ί”‚0vΩ―τάπχ‡4―
ψwAπΖ‘l¶W‡΄}3EΣm[{=6Ξ+[xφ¨BΕ
ª®ξ
ΑΔwό[ΰPψ™ϋkGρS²^ψ!αkίΌ’Ε½ΔΊΜsi>eάBZφ`ζ_(®7ξ6IδrqΣ=ϊgΏ8λ_“qΖ>ψT©Τχ’Υ'ΥµΧΙytΧ±ϊ‡ΰα5λΤεΝΖϊΏ²ώwΡ­–ώD8ΐΘωO9>ΑΟ^I=3BΚϊ€s98η<cάυΕ0±lvόψ>Π‡όώΎέωιΟσΗ*“ΦSwςm-ΣςνΦύ-±χir«-¥χ/Ι€p	ϊκ?¨λΟ©¦σΑΑΰυ'$ƒΗ=ÿ
Cώ/$M `ϊÿ
ΣιοƒΖ‡®χ7ώb―~έώKM—―όNpy?ηπÿ
<
zρΞGoΣ――¦*\σΟιοΣή£Ο|ηΣ>Ό}ξ
όzg>‰E.‹σόΖ¤υΥ½¬υςς[oΣ§MPwwaΧ·QΗ¶8υόρIΗ#σλί¨ΗιSTOΧΣςοΗΏλΦ•ΊYik?Kn•··αθ8ΟU½Υ—Kύϋz:όFάνnΨκ°ό½½«ςΔªίΫΊΡ'si^ΏτέΟ®8φϊr3_«·χ›ccΑΖv‚ηÿ
®~Sxƒ®kG·φαλ;χΠ};ρUO›%eΛο6•µvυΎΞΫu6RζÒI4―eωοκη)smΒysΔ’©«ª°#2Tηÿ
3_xπΩYψγΔΊu²Ηvz‹Ζ!Rª΄Hμk€ªYΟF8Η^?CXdwΟ‘ Ηωφτ―Γ?Ϊ3ΕΊξϋ@όE“JΤe·	®νψ¶ύ–έ°ρ¶T―Sg&ΎΫ„ρ^-ΑΉ5Κέ®νεe{'³ΎϊXψn0ΓΣXZrQeΝk¥fμΧM4ΩιnμΰΏΰ ΎƒYύ¥ΥBƒsα―θΊ„22±έΝ.—2δ
v²ί#c=Qsό//qί' γ™γ$c #Ήύ…ψυρZ_όρί‡5λEϋeΝ®φw`)Έ΄Υμ.ΤΙ~RΒ‘±’0Ώ(5ω±ν#π=1Ο^{τ―Ψ°Òζ¥kY4Σ[ήΟς·ΙκG•ΪχΥ½»λώ_¦Ητÿ
ύ¦/|!ρΕ³.·¨Ιÿ
ΗΔ­*οΕ>΄Έ—0ΩxΟΓφΖ}VΦÒ3?¶t(ηΈ’8π] HIg9ώΈΤ`vΟ|}OοΌsΪΏΞ»φ,ρΜÿ
ÿ
k―ΩΟΖ¶ςΙι?|'Ϋ£•2iΊΎ£©ΐΫJζ)¬oξ"‘Xνd‘•†+ύS•±
0pyυλέzWΛη΄:±Isέιηo/Νψ9{®=’kςω?QΤQE|σinv…-λιΪ½ΪδªLΆU_γ…+ƒΣ8R[€sΪqϊώ§5ZaΟδy‡υϊpGjΝ΄δ΄ήΛ~――Λώ\Φ”euδώζrG,QKd@ΰ‚ΑΙ#ΉΞOcΑRW-α;γqblίύe«a2~g‰²GP?ΥW=†Ρρ]MsIYΎέ?ΰI‡ªªS‹[¤“_%ώ~΅EVzΫ·ω-―Τά(Ά—ϊ/Ιyÿ
ΐνΩER
Ά(ό@(ΆΈΚΟWώ]<ϋ/—!υÿ
?¥-rz_Ρώ+σβγGΣιΖ>Χ½MQσύ;uμ1Ψqο>¤’΅»ς®Ι_ηoOΟξ²ÿ
‡νζÿ
®―΅EP­ε¥¥φ|νήϊέΏΐ
(Ά΅ÿ
—εσώ»lESOϊϋΌΧυψEQ~Νÿ
VσςόΆ(¤EU)=5z?^ή~_Υτ(¥{Ω>^‹Ίνύ-€Ά)
QEΣϊÿ
0Ά	’p=M4›jΙί¥e+ΎΙZΩΏ½—y¬ιφ ‰ζύ£.ύEΘ^ρνϊ\µί¤bΛej¨0Γ|ΜXϊ΄w'’3[*sm_O5{½»ϊ-µέ[r'‹£―+»_MΎχσϋχρκqόκ¤ΧφVωσξ΅Au-ψ(;ετΙΌ¶}[RΌ'ΞΊ”.OΘ„Ά`ÿ
t.ά'8όsYΫ>|±gδ±'“ΙΙ=ry?–	ζµTφζÿ
=4ώΊτgLΕ]¨­»όΏΛ­υνΣΣfρ>–„m4Δ
G€y
γyΗ=:ρΨζ³Ζΰβ;Y°.α1σσΧÿ
―\M¬iYin–ΏΛ²ώ™ΚρΥ«};%ΡφςύuΠμO‹ΫχσςHκ/ψL%Γ>ζfλΟ\)γόύy:)8¤ν£¶+χ½­Ύδύv²Ωώ]­Ψλ‡kΌ“sυB3Ψp9ϊµ,™±41qΙωd
υυVμÿ
Jαθΐτÿ
=4(­6ς[Ύ–}vÿ
Π6ªµΫΣMϊiώ_ΥΫ=J-{H›nΥIν(hρΣΉ
qυξ2:ΡxfXδ¨κίΘÿ
_kΖΚ‚0FGZ|rKΜ,1σ#aτΖ?:€dθ'wΥykΆVέ'~―όΝαwJkNÿ
πέΊ»ΝEy­§‰µ+p«6Ϋ¤Qχ\βNΩΓ–8ΟlβΊέ?Δδ C?†_9Γ†η5“£ΊώΏ®ηu<U9ΪÒ³²}ϋ-ό¬·νάέ®Ζÿ
¤ZZƒ€ Κÿ
\
ΏL·υ8Έοζ‡ sGζΌ―Δ2ύ£Z» ‚±*B§#n	τΗΝυ>•TβΫ½νg·ω®ήZ¶τς#Q:z5ªιΧk_§ίΣMLΌgυύh'όώ
OΖ“?ΧυλEvQE
QEΡ―PΙΖ3Η\vΟ­QSkυiιωvΫη―kΩX¤νΡ[―w³ÿ
†ικQEQ!EPEPEPEPQJpηηηυχ©zT2“#ΉΗΤaΏ.sώx¤ΥΥ»§ψXi]®Χ_ÿ
C­Ρ΄(µ%»’FPduΒr6©'$ύμς}Α=x‡Δÿ
|?βÿ
κήΥ¥ΤγΣµ‹Y,oZΒρ­.Ϊb±Εq³E½w$ 1F ^“Βΐ’3$‡ισc^Ων]®9δr/Λ·_q_Μ1λΤ„*8ς΄—άόµύ/―ιfUƒ•Z”Τ¥$Ϋ»'ύkΩφ>?²ύ„ÿ
g%@|)©]	Ίρ¤α€γ$G,`’
η²:σ]%μyϋ:YGΓ›)°Gό|κ΄ΐ‘ΑΞo@ΗΠ}Gjϊq‹‡®{sϊz~α^}ϊσ―Jβy¦9ινηk3Ώυ§‘κΓ*ΐE]aιόβ΄z'ΣΊί§΅β6³/ΐ!›…ΟΝg%ΛυΈl61Ο^Όϊτ–ώX•ϋ/ΓDW;HΡl™†8ΛΒΔΞ}«Τ@ΐλΠ~}?Ο~›Ηbέο^¦Ώήwϋÿ
®ΎV¨ΰ°±~ξ’ΦΛάZm³kΣ~¦–δνόΰ‹E	mΰÿ
Bª6hZ`8^€jqάFO^+fίJΡ­ÿ
γίHÒνρym”XΣΛ€c΄ιA#¥fρ8‡½jψΌΌόΏ­-Ά£AΛ~ME&¶ς{Ψj¬jΈHΆN†$LtΗ@ΰς:σΤt¥AΖp}@Ϊ3ΟLg#άu< ΣωoWώ~Oÿ
-ολR•:khGξ[ϊ΄ίªΠV—³cυ,xΖ:v}‡ΏQε$η>ά{tθ*BλψsϊΣBγ=9ΟoΣινSν&ώάΎro―E²ό·τ.*	[•-¶λfΊΪλΏΎCΑq“ψφΐΖxΗLGfδ“ΣΏλθqο½‹Λωήϊ―ψ+ζR*Ρ-ο®½ΏΛξΣQΩ#“Ο ϊm ƒάΰύpNI¦Ω9υΟ tϊη©©h¥v¶•›ς}-{kψ|Ζ¦Òψtξ΄νo»o»ζ»±ΨtΗCΟΧNΏΦ_Aα¶y=³θE:γ<υΘÿ
Σ·Χz—¥ΫoN·μΊ§§θΎηΏο7Ώ}­o[iΡ/ξ'©uΟcq“ιίSQ‚[Έγλό²8ϊώTÿ
σώΟη(µ½ΎZvιeΩW©¥•ϊ+½tΣρΠ{}ήXL~~*^r8δ};ΰq“Σ>υ36}qά~_§·γτmXΉΪ¶·ΣόΌ–Ίo®β:pGOσΗ·γρ@Έ=L‘νΫ·|Ί	M¥dνύwάkπ?Nέÿ
Οj1	γ§>ίÒ§ÿ
?ησ¦…§―Ώψÿ
ϊΖ23Aq–·cΑ8Ξσ’3ΒΧwθxΟ½9yΟ'¦I>ηί<sΗ4δgπολΫώΎsτ¦n#§―ΏAΠu<{Ri>‹§άυ΅·»Ώυÿ

{/NOγτξ{tχζΆ#ρκ?ΟµJ­ΠΞOΗ=ψλ‹`ÿ
ϊÿ
g¶s,»/Ήh>gk_ξΣ±]†	όϊcςφ¦Τ¤ίηΫλό±L Ά™ªi¥ª½„¥‚9ΰÿ
_^)Κ \~ύεο—lτ|ÿ
―λ}=.'$›O΅ <}.Δ_ΞάIό>‡―υ'ζ–ΩΗ<τΖνλΦ…Ίθ.{Ω-.ΦΏw—ªό}"Ιdχιψώτ™>΄ε
‘Η―ηΫ½ιΐΨ‘‘ΧΧψq1“ψb›ωlΏ―λξZ¤ά’ΎM^τώ½<†drqώSΡ‰89?ηόϊφ§•·ωÿ
όw¤
Oσÿ
Φÿ
>DΉE§¦Ώ«σώ―bBIΠ`>—'Χ§
O “1μr2}*ΘPGΤτμ=/n>Ή®ΩΗΞGBGSƒΣ'§±ϊRQΌβ’έκ–οUύ?+.ΚzΪΡm|·ώΌγσώ#ψ·ϋAό#ψwou‹ΰ‡·μΉg†ϋΔ·ή|RL£]μμΰ+	‰‡9?Ξ„ξ {τΞzηωqιΧήΏMΏΰ―‡Δ/ΫχγεδR™¬Ό7®ι>
³mα”Γα]NΡηςΚδ,m}ktδ―ΚX“–ωύ[λΗ^Ήθ}ΊΟΨΧτ'αΥ―/Θ¤ύZVω%±ψv}]VΜ1Wv©4¶Ω>oεq7}ΊϊΖ7|”ρσΫ‘ΐώ/l‘IΛd`£Ύ3κ1½σΧ­^ÒτkύwTÒτ=2άέjzΖ¥g¥Ψ[«η^_\Gmo$—i6‚xRΩb{δ£J¤›K–[φW<|2©*²»rVΡ½ώNΛÒίsΉύΑΏΫΐΏ²—‰ώ,j6-mªόcρ¥ΕΖ5Δ;.G…ό5Σ,–)1—΄ΌΤύΒ®ΠΫΫHύν'?BI:SοΝxμΉπΣΰOμρπsα%ό ή
πή‹zª>ώ«™o6―1laΪΧ2³ΜKv'ήρΐ…Ώ¦xύ+ωο9―υ¬}Yσ'Ι)-{6ΧΆZλΧV~ο“PX|<Ό³¤¶θΟΆλλΠJ)qυιώ?§‡Ύ(Ηωÿ
?―¥y6wfΌ»z£Χ,}zΛΏαϊqά ==±ύΟζ*@£ƒΟ\cτΗ@yιΤwθ
€9ΖzϊηίΧ§?γΝ&gΞ•Ò[}έ5ΣϊΨ6ύGΣηor:\ΠOιό±ΣωS¨ ‹»Zϊ0¨cyΟ'ω:–€zÿ
Ο­grΡΕµΑτ‚cωFΥωK¬Ϊ®ªή·ΧgΫύkzÿ
έ…~­ί-.Ϋ€΄ηΣώY7ιΟθ{Χε©“¨κ^¦φησ25\>'ιώG]/y7δÿ
zσ²Ώ¥5Psΐμ?2? ιτ―ηϋφ¥ψΏÿ
ΐθΎ"`yλ‹;nψώUϋό™VΖzα8<\ΥόωώΤ[γηΔΗ'9ρ$ηάν†?ϋ_νΟΚ›ÿ
·—γχιψ|G'_ρRκΊ&΄ύSΫπωβΫgαοΑώ(#δάΔGω…~~μ¦Ύωψ¶α>ψ€‘’c„Ήω®βzuόkΰ‘ÿ
η+φ\?ΑεenΦ·CςjªΣ¶ϊ/Χϊσ=ΰΉ“γ_Β‘w<ÿ
ΎB™¥ρf”€Ό’όυτι_ι(‹¶%`ªF1θB¨ tγ¶1ΠJÿ
8Ωξ!/ΗοΛΤ?@τÿ
‘ΓH89όΏ:ÿ
G–'‘ηςν^Λ:={ό?–ίε±Χ»sΧEoΝ?σϋΖΡEς'kτw= ρEYv_Χό2]μΨκ0ΎNΙ$ς¤ΈΓsΨ zc$W©dγ‘ΨϊρsυΑƒθG η}{W¬ιwBφΖ€y(¨γΈtP­v#w~W5hκίήώJή―_λCΨΛª}–υ“ΫKn—ίωϊ"ύQ\³Z«-_όΏ®ÿ
#Ψ
(Ά]τοΧ—m­΄²
Ά+0
(Ά€
(Ά€
CΠυό:ÒΣ[ξσήµoEέΫσ^z}ÿ
2dμΊκν§ό:ΣΎ£ωσΣ'§ωΗώ½KP–c΅#Σ§p8Η®8ϊΤΥ2_·²VΊω~{μ5²τώΊΏλ«
(Ά¦ύ®¶κχΣυZ(Ά@QE
QE
QE
QE
QEU›Wτ]7Ρwώ΄Ϋ QE>Gω~mχΏ¦€(¨gΈ‚Ϊ6–y(Πe™
ζO Γ5Αj~'αΠΔ	SqÒGΟΛΐώΟ<cvG UΖ›Òϊφν§{ÿ
ΓΥ±0¤·MΪφΫώs­Τ5«9XK!’`ΨcΑrqΐbΘ	ΰδƒϋΔWχΕ’'ϋ<<΄ϋμ¬ΈΛ?\χγiΰγ<
Ε*Y·³Δ–$±$s’sίΠ=iΥΧN’ΊΣξν¦ιΪΛtxΥ±“‘v^[nιΧ_ΐ`SΙf,δύβsΖSί=σƒΕ8
:qΞx
ηψÒΡZrm¥φ½τνΡiήχίΉΗ)9nÿ
―λσaESJέΰ΄Σ}υO¶‚$(Ά 
(Ά—,{/Έ(ΆΛM6ΫΘ(¦g·=qϊgόϋΣ`η9ΘλοΙ$δρωt©(©q»Ώ]7Ω|ΏM†¤ΦΞΫ~Ύ®_ιϋcήχ}ÒrUwm$ΕΉδΨk2βcqu=ΖDÒI&‰ 1¶@ύωΗ”,ξλϊώKρΤΉU£Λ'uώ[yiύj‚(«3
(Ά€
(Ά€
(Ά€
(Ά€
(Ά€
(Ά€
(Ά€
(Ά€Θ?J­)ΰÿ
Ό8ÿ
Ύ³ϊϊqΙ«5«ς’3χ?NGoλψΫό†·^«σ=;ΒΗ%·»?ώ#ωγςτΠW9αƒΨd`3ΐΉ?§τ®΄’9λΣΈιΫσ©φόχ1VΕT}ίδ‘ϊΞZ­€ΓyΒÿ
‘ησΗΰzρQ―'9'ΧυλΟNς©`ώ~ίμ=?Ξ3οώ'όΗα=+&»ÿ
OοBÒΗόÿ
“ÿ
Φ¥Ά‚D'Λhlÿ
,>ΏEaΗ~½99φφη­D:¨ ΈΕ8ΎχΡύΕ‘wΟ==~™ιΗ<vλΪ•:γ~}xλΧπΚ@Γ<sθzÿ
‘ύzPM›Ω6NΓƒΗωÿ
=j_4ΐ:η uaΧµ'^Ψφÿ
$Π'¦ÿ
ΧυωθQQ1$ρ8γ=G'υώ”~Χ΅Qχ½ΏRSMύyώ]8vϊζ™–ΗLψη23Ξ:r8λÒ”cΒ£
yΑ8γκr:η·Φ[wwoKr­ΎW»Χ¶Ώ‘ª“K^Ύ‹Kτύ		Η599χΟωγϊSΞGDγ8$
qO8>ύN=MBΊsοΖ}Έ==ώΦΎΞ£WTζύ"ήνuµ½u±
Tγ§<[ΏuΎ~?Μµώ}ι2}?ύ|{{υόρPξ=2ΐSΤsƒOCάΖΖH8$€OLρr3Χ8~Σf­Μ}nό6‹WRMtµµ_zώΎβZ?ΟωόΏΞhÿ
υwÿ
?
zπtιA!E)u¤ ÿ
ΧόΏΒ\gΣί¥DΜAγΧίΠqτηÿ
­άΧυχ&έ‘.N1o|}}¦}j&'=ύ†A'Σ®3υνά
cΙ΄'ε_υ*ύξ„c“Οβ+ωΡύ§?ΰζΨWφqψΏρΰΣxcβΏΔύ{αΟ―|/«λΎΣτ	ό%w«i®"ΤaÒυ›έnt–WbkζΨGφ«i‘^E-έ‚Λ±y„Ή0”Y+6“JΧι―]τ·ήe[†Β.lDΤ=ZIj»ώkΎ/ύ©lϊσμλω~8νuώη――µ!:ΧόΣϋ6@<;ϋ.όdΤHε6£β?	X+2»ό«‹§›®:ίΏ΄ώΒίπr^…ϋo~Φÿ
	ÿ
fφ_Χ|oυ‹ρv¥γ½?Q:WφVªk~kιvΪ`7i°εEδ~^ÿ
0τλpΎoB”λΥΓΈS§)7m½ϊ'ψύά°Ν²κσTιΧ‹›vI/—Mυ―CϊγoσιΣ>Έγή‚‡ΈΟλιΣΫ§Χσ `¨μqΫ δ7LΠρτΕN?ΟωΐγÒΎ{gζCgΡΩξλO»εηΨ­€:qΞL~]ώ΄΄χ<s“ψϊ{uΟi”―έΏυ·θ8©υ<ÿ
_΅υ¦Τ£ζQΧ·γΐvγίΤΣ`χοÿ
κΠ?•§ΟσΫΟ}οωnG΄@9Ξxώ_Cίυγ £όΉτφφό•:€9ΐΟ=ΏΓΠ”έίυχϊÿ
V΄΅~ύ}Ίz΄ΐοlcΫ¥I
Η±νΣ®?xμNWΤƒΧιινΎΉό¬WP·Ò΄λνRξE†ΣN΄ΉΎ»G½έNο»A,IνΧΨkWΙί·Δ(ώώΙ΄¦)το…ώ+΄±`Ϋκ:Ύ›.‘§χσ›ΛθBrXqΘ®Ό)VΖP§Ϋ”β’ιρ-ÿ
N—άΓSΩaλΤ½ΉiO_—ωΨÿ
<5βΖ?Ύ7Ή•§“Δÿ
|U¬‰YΛ3Γw¬ήKήI,Z2Έlς1€+ΘLτΘΙΞOΧόOLϋt«R³7ήviΑc#;ƒΖA$Πφη"ª0Α?§ΣόOςqύ‚¦ιa¨S{Ζ^©~«ϊΉψ.*~ΣZΝRO_6=	Α'Χ9ιύ1Ζ?ύUϊgÿ
ψ/ΗΫ“α™sn.4_ή|Fρx’h>Ααkq5­΄κκTνJ[Kuƒ’{d~e£®
ΐώ½G^ΌtδδΧυ‹ÿ
ε|ϋ&ρ·φ…Τ *ϊ¥ζ•πγΓ$jκΦvϊ®»uvΊΈ±΄‘TΩΑΫΚβgΤςϊς½¥*n)μξνnϊ-7τΉνpξbqΤbβΪSRz'{rνεo.»Σ»ΰ(
ρΙώαωTp
p
ρ¦‘ό\;ς?AγΎ9Ε,™8μxθqγ#κ)Tp:τι@3ώ? ι_€T“”ωΫΦs—5ΊίUψÿ
Αz3φ¨ΕS§•­¤―²I-,•®­­–λΘ…‡9υ'σΒ›R?ωγAινΗ?ΧUΙφσώO5?Φÿ
Υύ‹χS}υψ[Χ΅(ϊ>qτντ¤
δqύÿ
ϋΏsθκ(2»ΧΟΏΛρΠ\g·Oλό©*AΘθOnΏOΘgΫ£8gα½=½ω Bν8Ξ?Δύ=@υsω&ΣιΧσνοÒ¦σώqόϊÒΠη#ΧΨzpνψ
£¨¦,/P-g'>Ρ·σÿ
όΤ[:† ΓέάόΥϊΗª1ώΟΎτw9=xς›'\qυΟq_“Ηύ2τcώ^'$“ί{2\­υΦΫme{υήΫvWσκΓ»'k_kΫU~ΟΏ™S<†φ9η―\Σϊv―η»φ|όzψ™“xεGΣΛ‹ϊεήΏ Σΐ?UE=?΄ΰ'γηΔοo]~B5<~c§s_gΒ*ψωÿ
Χ–ώι/ς>/ϋ6vªνΏeϊΏ+ύμωγΕ»Χ―ΩGηw{ΧΑªΗ {ΈιίρόzυχoΖαξΊvµÿ
£?ΟuηψAHÒΏbΓtÒ:|Ώ―ψcςzΦηνµί––ύOoύ›£iΏh―€―Y~2ό6Aυÿ
„·J#ωWϊ8WωΝώΛλΪOφb3³γ/Γ‡TρVίΣωWϊ2w#Π‘Χ=?Ο·ÒΎv ϋσ[¦Φ}mϊώtΰoyοf»uVλχ…Q_.z!EP]―„n.μΙ&gdΰr>Tΰ}yΟUlx~³jΦΜIΫ.θ[ 7*0Μ>Έ8¬ª+τΡυλψxIrΤψ­χΫ-PΆ”zRW!τ‘wKΡ\(Ά™]wϋόγ®λΣKoΣvΒ(¬Ώ―ΛΟΧ_ιER
Ά)­Χª·ήΌΧαÿ
MΊζ)ΤΧϋ§όχ£Χ—[Ω«ωκµόά‰μ½UΏΰΗ΅ΟεΫΣιά—Qϊ)¨ΪΞχΣε²W_wΜ¥²τ
(ΆΆQWί¶_ΆξΌίD­mQEJΦΧΪύ_Άού|΄(£OU£ϋν}/Ώ}{φΠ
(ΆψΦÿ
ΧQWΊ½}mΪΫ>ΦΪET»&µ½­³ήΦσΣ­ΏΛ`(¥η9θq^Ωφυ ϊqΓβ¶NϋkύmκL¤£Ώυ¶»―?ιjΰΉ9ό:§ηΫδj½¦—22fεΐΏ8K‘χA$`“’GN)k~ K%k[Oι”©|CL.αΘη ψ>u+Ι4­4ΞÒHδ³31Ι=0A'ΨvΕk
mω=ύ6ξΏΟ_CΝΔγ9έ¬ίkΫm|χz½ΧF[ΏΤnµ9<ΙΙUS”
ξδ
HΙ¤sΥ
ª½=3ίόχ>όΣΏΟ¥ΊƒV΄¬ÿ
®οSΖIMέΏ—@Ά+B( ( ( (©»ΊVvκÿ
ΙφοΧ¶ QEPQ@Q@Q@Q@QώLz
(Ά‹;υκ―¦Eφί§γmΝ/Y¤τ–ϋκµInόξQEY›τ°QE
QE
QE
QE
QE
S$8Fϊωρϊuϊ
}E7ά?QIμοψÿ
HkuκΏ3Σ|23£ΫοϊίtjNνƒω‘ό†ÿ
\βΉΏ4kaCH1ÿ
mγώs]*”υηÿ
WζkσΜ{oY=”΄ϋ—υψυ?ZΛ[ϊϊ¥eςW_έ:γ¦1Π<ύi•+(ηΨgωγ©ΰ§ΣÒ£Ο¨ΟΣόÿ
kν~^_–Ώm>‡όÿ
Γ½
@υ©N;~?γτΗµF£-ϊÿ
ψώΈΟZ
iκ8?Ζ΅{ξλ;ΟόϊΥΖ)φόΉª'ςδzώάΡkι®½―ΓSJ}~_©ƒγψgΐΧόqγ-bΟΓώπ¦‘¨kΎ!Χ5)γ¶°Ò΄*ΪK»ϋΫΉ¤`‰½Ό2JΔ@FΖqώuψ:#ώ	Y¥ή\ΩΫψ―γF®φΣI›¦ό ΤΪf™ ΈΈΦ­–X™Τ΄r…Π©Ζr+ΰ?ψ:#ώ
_'ƒ<'§ÿ
Α>ώkϋ<Gγm>ΟΔ_΄΅¦\bγJπ¬ζ…ΰe…ΑγΔ%cΥµ«y‘4xμmάyZ¬ª„ΐ†?ΰUΖzα3Σ rO'jύ‡8&9b±“"Ϊδ]›‹¶»;]YίOΑµςy·}J³ΓΠP”µζ•κI=zέ­<•ϊιώzοόmÿ
ΧÒΰytÿ
~Ρλ¦ηHlώhΦ¬ϋΰªϊ—μ£]ΐ7
ƒΫχφVύ£|ϋZώΟÿ
hΟ
iΊξ‘ΰοήOθ:o‰α³¶Χlν$ΈάA©Αay¨YΗt­[kΫ—!D­ρªΊlE!ΰώξNγεnO@©Ίÿ
¬όR#όΗφ0@α%”ªH¬Ί•ό™£λ‘‘Ψ‡πΎ#ΒÒ­CR©&½χεw·Σ}oιmrLζ®eVP`ΉUέ΄KNΝώGκ1br8ό;τÿ
Φ™QHN=‡<’
Hν€IφΏ?K[%«{.ÿ
Χsκ›QWθΏ―’"ΎΎ²Òμnυ=JξΪΓNΣνζ»ΎΎΌ™m­mmm£2ά\\Ο#$PΕJÒI$  $,?πQ_ψ9ÿ
ΰμω«ψ‡αWμuαΛΪβv•5Ζ›©xϋRΊΫα‡µ( ΈΒk)£ΤΌk4΅άtιτΝ-]w©έ‡dO‡?ΰδOψ,&Ή}®λÿ
πOίΩ³Ε“ιzΛgϋFxΧΓ·†+ΝgTuaπ»OΤmeY!Σ,E—ΕνΎ»xτ9m­58―‹uESΠpONCΙΑ<¶IΙ$rpI―Σ8Sƒ"”qψθΏdά]:r½δµi[Κί¦¶ψΌσ–RΓafΉυζφξ¬Ίίk½µΎΊ~Εόqÿ
‚μΑO~8_ί\j_΄ÿ
<£ή;²xgα­–—ΰέ&Ξ2†ήM2ΝuG«lY.µ‰Ι¥Ύaς­ό›φÿ
Σ®EΝνϋH[Μ®]Y~*ψ΅Π6xo¤( 
¥vq΄kβ{oqƒντΰΨΣƒηbοη Ξ;φGρΠηάώO'Κ)(ΣXz/έVMEΚι+οkn΄τσ>2yc99{Zφ½ΣΤlΪκ¬΄–ι6~ςώΝΏπqwόΏΰ«¦|TΣΎ?x:ΡΆMCΒtkΛλΫE*$ίΖd6^"µΊa»ΛΈβξ5'sΐό†ώΜÿ
ΰπ]/Ωoώ
=φo‡λζόύΆβ²ί|]©C4>!XcuyπσΔ†;K_Ϋ¦Σ,s[Ϊk6Ιe<a®kό»@WCΣ΅8ί#κ3Πώ9―α/ψ§ΐ,ποΌβOΒ~3π―e®ψgΔΊ-ά–:‹¬X\-Ε¥ν­Δ%Y|Ή&9£-Ρ»γη—γ¨ΝΡ¥UT[‡*Jν$Υ΄ΣΟE«κz9bθΤ‚­'(9$ΫΥ¥¶vNχ?ΪηΠηΣΎq3Ξ{©ΤΞ®|wύOα_πDΟψ)uό{φNÒuο]XCρÿ
αyµπΖMΡ‚}§T‚=Ί_‹ν-ΫtοYF·¦EbΏϋe°,π•²ωl’ΈΞpI'ςΑ ΐΙη…fΉ~&¦ª΄ ΪIοeέtgιt+SΔP§^”―¤νΥh·νψξ9ρΗlz
”σύsÿ
κΤ•Δh8·
cΫ?¦§Ο―σ€Ύ99#υθ3ΐη·<¥Jΰ¨ΟΎ¦x=ΗOπ=+ΒhοΪαΏμ±πWβΗ‹ZΥ¶‡ΰo‡^ΌΧµ[©έ<λΉ N‚σTΥ―ZήΓN³tΧ7sΕ`9¥
1΅N\¥6΅•έδΧόBHR§:“vnΫλd—ίÿ
ό—ÿ
‚σΑM,?`OΩ~ϋΑήΦ΅φψη¦κψyko:5ÿ
„τbk/xώβ%a%ΈΣbμz#ΈUY7BΙg:Χω^ήά_έOyw<·7W3Λqss<4χ73Κςά\K#Ο,ς³K,’i–f.Ν_gώίί¶ΔOΫΫφ—ψϋC|BΊ»x†ύμΌα©®$ΣΑ~ΣΪH|;α«™Ϊ8RΪΧύ"όΒª·µΖ΅{ i®ΔάΐυιμyΖLsίίΦΏ ψW‡(εX(N¬"ρ£JϊI)Y=[}μφm+ξΟΚΈƒ6xκς9/eÒki$φνξί~ΧΥξL	 }—ιΐύ+φkώφηώ
Σϋ)χ#Xρ±λΞ?αρ'?L~ζΏGAJύÿ
ƒ|wό³φVΰeu/1τΐψβAΣΨ~ΌW«ΔP‚Κqª1JΨi_nΛΥ7ΫΈσ²‰KλΨ{Ιÿ
;jήΏπί#ύMξ ν>θό™ª¨xPzγ'λίύόªΘo— r;vϊύ?–ν_Μ’έϊ³φ]ν¦φ·gσξ5ϊώηδ~΄ΐ3ΐ¥'$ZQOoσόιÿ
‚ώΏ―σ&}OΣΚΰυΑοϊqψ	Ο~?	)1ώrΞ=ΊPϋ»_Φ„ε#Ϋόώ_ώ®τ#Ώÿ
[ΫλψΠΏxuό?ΟO_jJF}σΣΦ…ο’ΟσΙόih Ώΰ½?Άπ'μ;yαtΌ[}OβΌ+α{HΡΟ4Ώπ‘_…ΐΙ[ι{eΓ΅”Ήύ±'·Ύr:0~Έύr3όΑΘίή1ύ~Η—ƒOΠ|Aρσ.JΗww|t2"QootΑ›‘„.	jϊ>Γ<FkGK¨T‹z_dληθy9υu‡ΚρzsΒJφω4έ§sω‘ mΙΖ@η@sΟ±#ρλΧ~Χ‡Z°ÒΎψΗΣ―SνώQ°NAΟ―_σηύφ1²θ¬•οδ’^}ΏαΟΓ\Τ›¶®νΎξοξΣΛOΜχb¨%2pt
ρdχ#σΕuπKoί±·Β―ΩΰΒγχΒ{O§†΅Φ<iΆ_xΏL°Τ£ρΌηRΧaΉ]Aν?yowuφHΠI U‰"V8γψXU'“ΣίΏωΟΪ¬.g$ΚΕNA$r§=pHιί“^y“ΌΫ¨σΊjχmuZ/ςώ¬{Ή6l²ΚΎΧ’3qΊiέ=RΫ]μµλµυ Ò<Cαÿ
[Gy΅kz6Ήg"ηHΤ¬µ%€R[IζB;ΑΥΖή	9ι”ΔΤδ½MO…>/|Tψ,7ψγΝ«FώρF±¥ν*r§m­άHFFμa Ώeψώ
Λÿ
ψ|m“Hύ£|SªY[2•°ρ]†βh$–fΥ4ω®dÿ
HVlξά‘ωΞ#€±p“φ5#>©6Φ¶[έ?—ι¥Ύξ‡ΰ¥e^”γ~©&­¥χΣΏζ΅A Τό m<χ’=1‘H2‡΅9γ¶ωwό+ψΒψwÿ
~ΥΎTƒβ/Γ―†`Xk‹;mCΑ·μ ~π³ΨΝ¨ΪyςιbHΰ}Χπχώ@ψ/¨-¤_>|CπΕΔ…VξοΒZΖ‰βΛrω/ζπύι@ΕHT…ά
Γp+ΖΔpo‡zΡηών›¶–κΏ«ω[ΦΓρ6Q‰χa^Ν΄”Z·•µόOιXzσώy©v;zύ=ΟNÿ
dΏΫ{ΰ?ν£΅λϊχΑWΔZ>’ΖΪλώΤ΄)t»Mn•«άέ!Σξξd[9δh¬/.Μ1*4¥‘ϊό6s;p{tϊΧι_=ZJ%J¬\'i'ΡΕ9Σ«Τ§.xI]8ΩιuΧυΫo;)Κΰÿ
?§µ%χÿ
?ηωRCώΓή³*Ο{iά”qώ3ΧΣ¶OγΝFNO<σλΧ\π9ÿ
<Lρσί§―­%z/κϋ'ώiwόªκδ.—¨·¥ΡνΠDΗ·oO―<Χδ¥λfςμ†β~;s#}9―ΦMdÿ
Δ£Tη¦yψ~βOÿ
_nkςZη›‹ƒλ4Ώϊ1«Hoχίπ·κtPZ7ύkoΥZδ]=Ηυÿ
?<ÿ
΄Γψσρ@ή+Ό^=V8—ϊs_ΠΙΰχΑγΣώwΏi&έρΧβ›Τα¨cΫ?_ÿ
Vs_mΑφxΪ‹ώ5χΙ_ρ]ώγβψΥ¥‡ ϊ:NUkϊήΚφΨωγ.Γ½lχ3Ωÿ
ΫΜYΟόβΎNIη=?―ÿ
―ÿ
―_u|fl|>Υ»–ΜuΗόΌΗ―Σό+αp0IυΗι_―a•©―Eω[¶Ϊyώ'δΥRζo«nÿ
yτμ£OϋP~Οp<ΟΏWΏύΊv;τρΟΣύΘΪHτ'ρζΏΞΓφ?Ψίµoμθ­Θ?ό
pqό> ²=ώ„¥Άƒ³sο^Ώΰm£“ÿ
Ò7_ΧnΗniϊÿ
Ϊ(£όÿ
ε_,w…QYΚνΫ[yvώ»ωFΙ]ΫGΏmΏ―ι…*Θa’);£‘qΗ*γΏλκ9ξ)*9Ngη’:y8όΈη/[_{ΪΪέΩ+;kÿ
¨7Α'¦νίW~έ|ύkY½Cκ
{ϊqνKYΪDn—e&rL
­ώςρκ{cΥ£\ÒVmIEή	ωEίεÿ
ζQEg'ύ_Ν4νuη―ι©°QE“ÿ
/Α
QE
QEΣ·Oκιώ€Φϋ§όχ§S_§ωύ}Ώ®)¦Ϋªύ<ÿ
ÿ
$ί5ω΅ΤQEl¶^—Άό‚(¬ζυό5z?…χ]υϋϊhΒ(¥}—k_―gΊ{έ}έ¬ET
QE
QEού}Φϋ­ ]w
(Ά[σ`(ΐ<ηέsΫυΖ}«’ΧuρmΊÒΡΊpUδAΰc9ύζ2ώ9λϊΙ³μφ¬ΆιΑΊζ<Έÿ

μCdzωή’ΞΕέ‰fbrYS“κy=:υ<μ£M4Ό·}όΧεΦΦ<|V/–π­θοδΣΧ¶΅)brΜw3d–f%“σnη–9ΗLΑ™ÿ
?ηιIίηÿ
­Eu$–Λϊώ‘δ99;¶ΨQEΔQE
QE
QE
QE
QE-Ν}Ϋmηχό€(¦’q‘Η·NΏΟ°ζ™8Ξ~Ύ½OOn)λΊιΤ–0O
Γcÿ
­Πγ8fΛ»-:q©_YΨ@£sM{s΄kΟwDU®I
{V5+Ρ¤ΉªU§MwγΧ»m%kνώgV‹ΖΥTpx\F&£µ΅BJ²wvI(FMΏDΙθ―%Φ~?|πλ΄zΗΕ_YΚ„«Δή ±•Τ‚VKi'aί9ΐγ¨<~Ϋφ¤ύ/&[όbπΝ…Y5Λh>οraQΧ’[ύρΑ,σ)ω%ΰγ.ΟOΚφ΄ΪΎί–ΗΣΓΓώ6«MΦ§Βωάι[›9v)«ΰ―συΎ‡½QX|)βVψ—AΧa`
Ι¥jΦ7θΓ
5΄ξ1Bs‘ΗzήxΩ\Τc9μ#νΪ8Ό6#ZUtΏξκF[ÿ
…ΏΐπρΩ6k–Λ“—βπ“ZΈβ(UΆΥνΊ©υΊσE&Gτώΰ*Zθ<»ÿ
_ΧζQE
QE
QE
QE
QE
QEύ/λΠ(Ά“ηόύ:tοΧ­.¶ς…ΏΟπOΏη¶-ΕΆ)*9~αÿ
=IL“ξ7Σÿ
­CΩίn£­z―ΜτίgϋΨρΛ?YυΚΊEΞ9ΖAΞ}±l~½+›πΑΞ‘jχÿ
Ξ=ϊΧL?,qιώE~yι­κΏ$~³–;ΰ0ΚΫA~I~ƒπzώ|ϋt
τ=Ο¥EώΞjFΗ<―Ύ=±Ϋ±γ½G\Gq01ψυιΠδπq¥"€3ωuΟεΗΈΟτΕ3wz“ψAΟσHωÿ
8υό;β€'8οτόψ―ÿ
ΰ _¶wΓίΨ/φ[ψ“ϋBxφζάΝαν"{ψyηEΌρu(d·πΟ‡¬#,F»Τ7Ί–<ύ–Β»Ή
[rΪWWΫC-ΕΔ©ΌΙ4σΘβ4†(“Νy;QUrΜFΡΠ•λ_ζ{ÿ
ΑLGνΉϋSΙπ“α½-ομυϋ;^_ψsA6s–Σ|iρ9µρO‹Θ†F‚φÒΞHΏ±4+€®km{*κ%ÒπΖM<ί0§^…9)V•›J1iµ}µ³ΊΧknm†_„ά­Rqq¦“ΦοHµg³zuvM®ηβgΖΏ=ύ΅Ύ-xÿ
γgΕnη_ρίΔj^(ρ¥u#Ή7ο2Ϋ[‰Μ66Qν,-ΤωvφvπΫΖª±€<•Ωrέύ±ίά?~+ΦΎόρνρ“αΑ‡¶}βÿ
‰ώ-Òό-¤ G’+5ΎCWΌX²ι§hΪtwz®΅(ΐΞΞcΓgϋfόÒΏfoΪ—γwΐX½Χτο„ή3o&±¨G7z•ή¤i“jwRΓ¤q,•Εΰ‚%\Gn±)w`Xÿ
AaΦ
X:N)ΒqQλ%w¶»oΧKέ’VUλΞx‰έ§-dορ;h›μ“~Vθ|ΗqƒƒύΗόASΧυγρλ_λSÿ
_Qÿ
°ύ;πSESλµjΊSΧάϋWω*Θ¬cot`=q΄τόλύl?ΰΚώ	kϋGά|Ρ€γn―°~‡=@οο_β3Ύ›ΣΪ;=νd“στιΣΉυΌΏΪλωÒωυw^ί΅ϊSίό?¥~|ΑS?kϋoΨkφψίρξ) ΕΊn'†~ΫΞΚEΧΔγHπΐς5l®η:Θ3ΊήΚ]ΚUΏBB;cΎμάπqÿ
Φ$Wρgÿ
yό{»ΣΌ7ϋ(ώΝΪv£4Vή ΥΌiρGΕ|N©ΚxrCπψ»P~m“k·—α†2ΐΜxsύ΅α©=`ª'+κ­ύ_δώgΪζψªΰ1vjE­οmόµκτ[φ?‰―x[ρn½­x§ΔΊήµβκΊΉ®jχΣIq{©λµΤΧΪ΅w<¥¤–ζξξyg™Ω‹σΜ~Π5ψƒDπ·‡4Ϋ­cΔ#ΥtύCÒ,c2ήjΖ­w›§ZΔ9’{»ΉΆ‚$Θ,Ò	5¬ΰυδϊƒΧn½»ϊΧξίό£ϋ6ΩώΠ?πSO†Z¶Ή¥®©αO~ρΖmYe·IνcΥτHβÒ|—LΖ|K«ΨίBwI§¤ΘώΗT¥–ΰ*IZθPN)++Ζ)+¥ήΧkΎωΘ°°xά\Ϋs«U]κχk·Ξέ΄ς?§ÿ
ψ&oόϋ-όψcα/ώΧ>	±ψίρϋ]Σ-umHΧ®o$ψ}ΰY/ΰYΣΓ:^–°κ·ϊj°µΤµ}T]››Δ™¬­¬-ΨΒί¥_ΰ‹?πLΏ~ΌπΦΉϋ(ό4πΔΧeiβ_i#Β>'Σ£®,υ]ΰΝnΜ$C8’6*΅–@Τ­Ε•IdA €ΐΗL`}	δƒ=±ϋ8χόΎΆΏqΌEΦΕT­UX¨Λ6“I$ΣΩ4Ίmg©ϊΦ(ΑΣΓF‹£x®fÒ½ΪW³ιω_}ςÿ
‚·Α5ΌUÿ
Μύ¦§ψ]-υχ‰~ψΫM›ΕίΌoyIµ―‹³_hϊ«D«ρ†/^;QcTK.4νN8΅QGω\η'σ½Oωη―^υώ_πuOΐKίπOmγD:jΛβ?Ωÿ
βΟ…uXµ‡}έ·„Όe#ψCΔV†TΦΚK»ύQΌΏ7L‚B7ΕΉΞdδ’:ΐ°ϊ¶G»δυΘτ―ΪΈK6©e4κUiΦ§hΞOW-ζΧ­ώ]υίσ<σ/ϊ:tauJ^ό‰o²µ¬—ή»χύΞÿ
ƒxÿ
kλÿ
Ωkώ
?πΏΓ·ϊ»Ψό:ύΆώψÒÒkƒu=P<ήΥg;MΕ—‰ήΒvοXµk•@ÿ
PοαΟ~
υldξ'$α²dqάÿ
o€<a¨ό?ρηό}¤Ι$:§‚|]αΏiσBώT‘^xwZ±ΥνJ0QΌΫ5
Wb	ΐ5ώΞ
Όkgρ'αΓv,–~;πG…<[lθw©ƒΔ:¦`p@[Σs_ψ‹…,U\R^Υ56’W~ξÿ
s>Ώ„λϋZ΅&νO[οµ•ΏΉwµϋ‚Η<qΨγκz½>”‹Χ9Ζ:ύ=?ΟψR`σνΦ9>έ~£ά™>Υω•ότκϊ%¥ÿ
t}b®’KVΌΎχϊ—$(!y$eH‘KΌΫUQ0ΜμάαBςIνΑ ÿ
9οψ9ώ
 µGΗ!ϋ$|ρ4—Ύλ2κ:MΩ:gΔ¶¥ΰΉί%Ό£¤x?uΕ“όΦςjνrήD·τyÿ
ΑS-ÿ
b/ΩΦoί
υψaύ£ώ<ιϊF›%ΒCαχ.!k=sΕ“*IζΩκ7‘Κϊvƒζ`‹–ΈΌQ‹U-ώiSΌ“Ο5ΜςΛqq<²Mq=Δ®σ\M+–i]‹<’Ι+frμX—κΖΏNΰN©RqΜρ4ί²¦οE5ρ½-&ϊk«vΥό‡βlΦ4Τ°4j{ÒMTqzFϊ=–½—“Ύφd“81χ=πI=‚€pΫ‰Β―γWθνAÿ
σψϋ#ώΙ_³Η‹u£xοφΥ5νk@πΠ§π·Γ­3I²½ΡοuΟ1RDΧόBΪ½οΨ>S¥X¤P\w4ρΓϊÿ
ÿ
ÿ
Α+ηύΊ><Ώ4;§ύ›ώλzeξ¬ΧVntίΎ<¶+}§x&ΦcζµÒ‘mυ_²±ΫΝghΚοw"§κwόΫig§θΏ±~eV¶¶GΗ°ΪYΐmν­ÒίH†8 TUQk
"!cD
ƒΣτLF}Mf”2Κ.w^ΩΗ^NenUΣD®•¬―µχω:YEIeυq³UΉ.­{Ϊο]ZK³wθΊΔΑl(
ηόϊύkφ‡ώξΟό=―φX?τÿ
γ®{σΰ/ƒÿ
΅Wγ
Qψώ8Ξ•~Σÿ
Α½p–ÿ
‚µώΛxΞγβύ<―ςzqώOΥΔ/ώqw{αεψ/σi/»Ά9²¨Ϋ…³ή΄}―·υ®κJ>PΌv£~½1ÿ
Χ«@πΓωgόΰυV=<|ύw7υÿ
λzU¥)υ9ΗNzqΟjώh©kχzέο{iΏυζ~ΠτPτ_‚[vωΠ=ω¥ ƒƒIYX¤ϊυού=ª=Ωθ:φλΠ
μ=}FiλΣ΅ώηη§ψϊtm/–^~~Ύ[Ψn	==ύ}½Ι¨Τr>Ώηόύ}*_Γ§=qΣΫΧιν@·sΧωz{}hτ…¤nέz^ώίΦ–“ϋg――α²?Ζ€±=εΗά$tΐ<ΰδsι_Αό#βl_ΰ 4«k©e΄ψmαο	ψ	RRQκ6Ίwφ¦¨mFν©\jKζ
™#bγ'5ύε9ΙΖlu
ϊΔΰ`•ψίροώ‹ϋώΠΌkρg]Τώ+θ>:ρώΉwβ/κG‹a½‚σUΎcηO­ιΪµΆ…ήά$1GqD}?ζx\―λβom-dΪωΫΝο¥ΎλxC—bs,$(α­µwkέΕ-ώofΟα(Θ0πsΫ<ρψdγΠγ8΅2[9θF=Οnzόη+ϊσρ_ό}πbξ9[Αί΄'Δ&l³Η®θΥΰςL’Y®ξ3ή8ƒkζoÿ
Α·ΏμÒWπ/νπχY °/hφΜΌγΜ—LMN=Νΐ;b#$’N~G2®Ξ£‹ξΥ½-{yu¶§η3αΪµ(΄»5®ΧΩ=ύ=ζΘ*νη3ιÿ
Τxη~•ϋ‘βψ7χφιΡΡίHΏψAβ…L…]3Ε—φrΙΗ­£Y¨άγ|£i δς+ζÿ
ΑΰΆ<Ώ³ξ¥―Ηs»Βή'π¦²ΜO+n5{iΞT
FΝΘI W΅KςΚ–_[¦Ώ•9rλΣVÿ
³LΰA™SΧκ•·qWIiªΣς~ηζ€Lηλψz~\Σ
Hτ5υ‰?boΫΒΰxφeψΫ§¥£2άNΏ|M}h…-‹½7O»¶‘
Ξ&d d1ΚωχΔ^ρG„η[_xw]πέΫ–Ϋkϊ>££\9BCƒQ¶µ”ΰ“υίG„Δ8ª5ιNM«%$ίFτλ£ΏΘΰΔΰ±XUzΨj±‹¶²ƒK¦νι¥όΞa”F??®ΐϊRνΰg‘΄X–b
\|Ωμ)†@NsίδsΨfΎσÿ
‚k~Νs~Υ_¶Βo‡76²Mα;XxΟΗ’χΑ…|*ΡκW0JHΨ£UΈίM@HΛ]†Pp³ΠΒαªb'nXS”¶λd­λκμ¬Έτ©Σ‹NsKE®ι7·nώ–¶§φ1ÿ
•ύ™Sφgύ~iΪΦ^7ψ‹iΔo‰%Τwή!‚;7KΉΰΪflνΪw?ΣyϊaΌΟ>£·Σρ"·ΪΪήΦΪ$‚ήήνΰ‰Q#†Ε(Ϊ0ª(APJΤΓϊυνιΗΦΏsKΕbλWnόσ“^—Σςμ­ξ~υƒ °ΨZ4’]έμ―µτ½΄²#$Ήÿ
λuώ§µ9sύ=zsυγsΣΦ΄?Χ<{{Ξ”gίτφΒΈάΥJΪ[|Ε wλΧΏωιώMƒΏ^½ÿ
§·ÿ
^‚/εΡ/ΊΪόνψ™ΪΡEΥΟ¦›{ÿ
Άσλ_“7#N}g“χΣστ―Φ-|‘΅κδΠ6τϊqφy3όΏ1_“χ_λf?τΥΟNΉcύ*α»νoςώΎσjRi%ηoΖÿ
«!~‹ίΎΏη~5όμ~Ρ7Ηgώ§-_ÿ
—`ννόλϊ$'§°Ηλστ―ηkφƒΎ6όQ'ψ¬µtηύ$ώyΙΗεν_sΑΛύ²£])νΚÿ
‰ρ\jΓaΣΊχε·ΚΫVΉρχΖ·αώ«“ÿ
/™ÿ
ΐ…?^υπΒp1lÿ
kξo'ώ-ώ―‚ζΤ~wϊÿ
O­|.N:ΰγόÿ
ϊλυκS[μ½-Ίÿ
ƒς?)ª­R^vz>ύ<ΙkΩΎ5ΞdψΡΰ5άkVΗΞ8όΖq_θ¶ΓήύM—μPρ³3°άγ__ψ›Δ2GB2Aφχ―τP“9ϊ’OΦΎs~*+ªRΣης;p;TΧk?Ε/λΠ(―;Β( γ#ιΧ§=;AδιΞ0ϊc)υ=ΠΞ{Ηηϊ7ζVήη¤ψVC&<ωrΟ$ς~_7
qΙο]r^|ιÒΗÿ
<§#―(Έ'ίƒΞ=»W[\³ψΛςGÒα$έ(ί{-¶²ÿ
‡ώ·eQXΛKωΫζ•ΌχOΙiΧ{υQPÿ
―Ήzφÿ
†Ψ(¤ESιχώ§ό
)p~†–ςΣ½ (­ΧK½mχνv%²τAETJVnΫ―/O?–έ<τaEVo_λϊώ¶
Ά)ÿ
_—λΆ(¤EQύ[ΣrVΫNΎjϊ_Σ¦δΰΞ3Ξz`Ξ²µB-.Ρευ­”8ΛHΓ¶)εαΝi΄‹O#¨Ή,Δpn	Ιό»η“ƒς=[P“T½yI";aLp¨Ώ.ΰ	`…CP
η4αοE­VήW²³ό‘Ν®©¦—Εm,ϋςτόΏB΄Σ=Δ―<„™$;»»H‰=ύ1QQEvΖ<«¥ό»i§Oλ£>~¤ωδΫΧ]ϊτΫ¦‰Yt
(Ά”®µMιη¥τ¶{y‹έjΡZ»jχKM―>ER‹“§N—ϋΎÿ
½•%Ί][µϊ_π¨QE΅ΎΏ¦?ΟLRQ(.)nÿ
―…ώ¶aEPL­}6ÿ
$ΎΧPΆ(RεKQ»ηΑόύF:@{χ<P'{{»ιoΌF9διδΨΟΏλ\―<qα†ώΎρguϋψO\ά_ίΚ;ν·µwOyu1`µµk‰Xβ8Xƒ‡ψΛΖ>π„υίxφ-?Aπυ„ϊ΅u!ΐ¬V$‡gΫ1³ΚΘ‹σ7Μ‡ν)ϋJxΟφρ½ΞΉ¬άάXxSNh<α%‘ÒΛKΣ‹7—y<*DW­β
χw‚λ•…
Δƒσξ=γ'ΰc(¥_0―}Z…Φ%yΞΪ¨«έu{Zθώ“ϊ:ύσσΧ*ΎΣΓΉ}H<ΓΘΪ“Ί“ΓΠ½”κΚ/Ò*χOgχ_ΗOψ*½¨\]θ_tXτM63,γ?ΫΗsª^*¶Ρ=†ζKk<ι®¦*Adς£σKΖ_~&όCΌ–σΖώ;ρ7ζ™ΩΩ/ukΓf›Ι%`°D³‚<E"
ΌΨ·®;“Ψr0@Η@y'δώhΣΠc9=€ÿ
υϊwΕ%gάsηυ§W«Ι®ZTg*tβ“M%ο§Wvώγύ™ΰ<4πσ/£‡ΛΈ{.zp‡΄Μ1t)ΦΕΞQRªΤM«οeΆ½¶-³g' ’0N2O όΕ‰'Ψÿ
υσDcσnΗλΫιψgΫdΌ†?½$kΠ|Ò 9>ƒw#·n}Αψξ#“ξ2¶q¬―¦};:fΎNU³iΊ•ξυζr“zYέ;ΫΡτΦΛcυzQα¨ΕαhÒΐ©%ogΡμ•”b••ήί«FΞ—«jώ»PΠ5mSEΎ‰·Εy¤κZ}Δn0r²ΫΚ’dΰulsΣ9―½ΎΑD>,ό3½΄Ò~$\ή|MπcΊErϊ±ÿ
ΒM¥@YQ§ΣµB‚KφI?eΤδ‘$«Ν΅f•Ώ>ζιΨd€FΟΰ~”·ρώr§^xηφ²^/ΟrLU:ψl}{BIΊS¥	j—+‹oM_ω	ΗxyΗ™V+/ΞψUβ©JΖB…*xΊS’χjS―N
¥γ+5οYuVΉύsό9ψΰο‹^Σ|oΰ]b_CΤβ3²βΦα3ιχφΔ™­/­X„	QXgz"dy;uΟNέ½G~xιΗ·_~?OΨ³φΥ~|SΣlυιίαίοm4OιΟ)6¶r\J°ιώ †}>iWΟ‘6™,β9s¶6_ι`2:Ε*0t‘QΦD9Vΐ*ϋ?)¤ΰυδcϋ/€xΒε1Δ4©γh~οE»{Ι+TήÒZλΪήkόAϊFxπ_‹Ώ³γΟΙsiΚ±²‹θ©ZTg²φ”®Άν¬•¥ml¦ΆsΞΓόÿ
ikοOη`Ά(
Ά(
Ά(
Ά(
Ά(
Ά(
Ά(
¦IΒÿ
O^ΌSι’rΏτ52ψ_υΤ¨όQÿ
όΟOπΏόν½Nβ}“Ώβ:WI\Χ…Ξ4{vΟ8ÿ
ΗσίΨρι]-~}»γ+Ώοΐ?XΛoυ7nK―Ήΐÿ
‡!aΙχϊ{ρωƒM©™sλΤ<s~~µβ;„¨W%†2rqΙ9=
ΞzχνΦ¤n‡®GαΧρΣΉΕy/Η/
ύ~|Aψέρ?Y·ΠΌπΧΓZ—‰µύFβDM–Φ6ζH­΅™~Ρ{pa²±µFσnn§”Ι"ƒ¥*U+U…(AΚSbΆ―Φ·«vοΧRάαF¤έΆµ}4ZιΥιςνηψ]ÿ
ΑKΗμ[ϋ/Ώΐÿ
†zψ΄ύ hΝ7Qπφ—-…Κ®¥ΰ‡¦?²xΕlcq=•εάsÿ
bθ’0o...ΰΐ±,?ΝPn‘όΙ]¥’V.ΜX–wfάμΜί1f’ZLΰσ–Ιμÿ
ΫϋφΙρηνγϋQόKύ΅Όssu%Υ¦΄π^ƒ4ÒI„ό§Ν4>Πm#iqlόΉο|²”ΧRΰοκΏπJOΨΕ?πQΪηΑ_,­/SαΦƒuiβίώ$cΠΌ§έΖΧv"λ
°κ%•F‹¥¦DκχSέΗ¥„Νο™_C‡ς¨ΉΈΣ­:2―Zrχmmd›}mΪΝΫΎÿ
—ζΈªΉ¶c*tύϊj\”m­ΥΦ¶ιdίάέυ?¨ÿ
ψ6+ώ	—iα_‡Ί—ννρkΓΡ·~ [άh?mu+Uθή·–h5ΟF“GΉ$ρmτqΫΨJ«Ξ“¦%ΜNbΤΘ?ΚOόrγνπRΏΫ™φ…	ϋL|K΄Aθ–:―ΨcυγeΈ―•­/ƒ|α―‡πί€|¤Ϊh^π†ƒ§ψ{@Ò, ΪΣNÒ΄›8μlνmβ‰R4xc¨αr=Oω*ÿ
ΑT/ό›φαλ‡ύ¥Ύ&MΟΛ¬Λ+ϋνΧ™ΓY»Νs|mU+ΣZSKnNkGζμ―ώHξΞp—a)µg9®g³“εΥ»tΏϋθ|0ω0ΞqΐRΟ μE­―ό΄*ÿ
Α/?b•Ηπ£ό6ώΩwΊv8Η©'ρ―ςM™O”ώ¦7#§]λμ:ÿ
ZΟψ#«lÿ
‚`ώΕ)’?βΖψ`zÿ
¤yΗ$ύk?“ϊT½ι;i―ΒΧΚέτVΨ85σb«?ξ[_%}·ΪΫι©ϊbΌuΰwϋΌsΣ’H>fΏΝ_ώψ…qβίψ)Χό"‹tÒΨό7ψ+ΰ+rΕÒΧRΥηΧµ­E£"6Ή·ΌΣ<εQσ}“µkύ(wpΔσ‡N	ϊ{qώZÿ
πqmμΧίπW?ΪY%έ:Οα•”A‰ϋΰ-μγw nΈ`
ΐγr+γΌ?£Ο›)?³%µϊwώ―χχ·υ›²–Ξέ—§d—™ψ „Ζ:#ί‘ϊχύ8―μγώπ=½ΟΏlΟr k­7ΓόlΜ8KPρΉrªq•ήϊ}΅+ΈnΨ	Ώε
"uΰσθ{ϊ€	ϊγώκΏΰΠm:Ύ~ΨϊªΆ‹‹―ό=²‘ΗVΟΓΪ‹Ζ¤Αξ% rΗΏ5ϊ—Ttς|D“~τbΊ-ωSvΫ«GΕpτa,ΖZVS‹Oηoσjϋ/–Ω9ϋΈΟCƒϊ}τ¨ιηξχΟΠρΪ™_ΞYI­®Σό]ΣΏ[~Gλέ­µ•­δΛψ-…­Ό[ÿ
®ύ³4›DΒ?„z«ςξ4OLΏo(ΒX7ΚT€AΟOςi–%Ή™ΜΐqηƒΞ=pkύvÿ
ΰ«©ίπMίΫ.QΎxά¶}#΄Fκp8NQΞ95ώCΡ
bƒΑ23ΧζΣ―γΧϋ7†άςΒβbΫkGεΊθ΄ξ΄zϊY›qrKJέ{in]ίÿ
ύIn%Ζο–7θ{ΰΞ9§Σ­―Wό·Ε2xΛώ	Εϋψ‚v2Oyϋ:|4†i’Z]?ΓφΊs§6„ ϊΰ΄£(ΐ€AP2{|Γ9>νυ=«ύhΏΰ‹ζTÿ
‚[~Δ±H
eψαδεΘ/O±ΪTύ=ª|K…π=4¤ÒΏ—-υ]UάΧ„uροM;tέ;ο­Σÿ
¦Ώ§ΝΗΌϊv8όϊτΗ¶3_.~ΨίµgΓ/Ψ·φvψ‹ϋBόWΤα²πχ‚tK›«-<HnρΏ*΄OιΘΛφ›ύ[P0ΪΑe‡Ò0Γι›™ν¬­®――gÒΞÒ	n®ξ®$Αod–Y¤o–4DVff*΅Aÿ
4ίψ8Cώ
‘/νΕϋD·Α„ή#–λφlψ©έiΊsYΞΛ§ψϋβνµΏ‘+C}¦ι²	4ΏΘΐΕ$qέκQ|·‘0όχ†²:Ή¶6”eπτζ½«¶)Ες½·KΦέ:W›ζ1ΐaκ7/ήΈµΗΌ•£χ»ΪλMu?ΏkΪ“βwν™ϋ@όFύ΅Ύ,jSήx£ΗϊΤχΠιο<Χ>ΠbwCπ®³ΘΒ3H°[D¨I"ΝpΰI;gμ‘ϋ1|Hύ±ÿ
h†?³·ΒΛ.όQρΔVz[^¬OiαΝJ²λ&ΥTωZn‰§‹ΩFA)-γ-$©9¦’+kx¤βζXΰ‚”ΌΣΟ3γ(Π3I,Α#E$ªM¤όΏÿ
®?±_ΐΙhOώΡίτ‹;„¶ΌµΝίΓ_‡—1¥ή›αε|­¶³¬΅®=°άμΦL]bjύ―7Μpό;”J0Q§ΙO’„!«r²³imw¦ϊk²JίεΨZΩΎ9ΚiΙJJueo5t―ek=υι½Ωϋoϋ ώΚ?bΟΩγαΗμλπLΛΒώΡ`µΈ½Ω_ψ‹Δ7Gν ρ>―*"›O\Τή{λ‰U–;tΫ1*$πwδ›nÿ
c7}θ<{ \ϊ5±μNΥττλϋo,HΑΫΐ
ύΰ9ΖH~\}Ι―βώύ$λΏ±rΊϊwΔlγ’YfÒΘγ¨1ΑυΖF+ςΕVΖq<D§*’«UΞ£z5~7{Fϋkχκ~αγ†Ι'N	F1¦•££·Ί•Χ[»ΏΑΕΈVΪ0FHοΖ9Ζ>ΎN•ϋgÿ
οÿ
ΑZ?f5ΐ8Ο$gΐZιb°Ο<ρΗρC&{υλθOψφο_µπoΜvίπVίΩxΘαyΎ!Α–ΐδψ{―,K“—r
<φυύ›—ό#βΧ_bνΥj•ή—ιµ®~i”ΖΨό5ΥνZ-%vµizΩ]οϊάÿ
R]΅zt+ƒΙΘcAƒ»Τ~Y*0
ƒΗωτ¨C£(%•€κ=Aιc-•88Ζ:rMIΟ§'¶rG8ΑχΟ^:ρλ_ΜΥS’i§ΜχVλύiΠύ•$Φ―UkΫt΄³ΫΆυήχΤV ’~Ol#ΧυοL9λΧÿ
†ÿ
^Tγ=Ώ§ψS
Ηη§ΣΪ λϊώ»υ$P:σΖzΐzηrsνBƒOΗΟA“οτΟσόΏΓωzR£^―ωβω]<νΣϊι>1ώΟεH§υύ3Σπ r:qΣΫπφτ4΄)€;‘Ζ?ύdrNAÒPdƒOσ§n½(b£―qώΗ~?
®P¨ΗNG8Ιγ'θyηπ«
δMsΑΑΟoΖΕΩ―_/ΏTφ*°#Ύsωχ§·ΞΘδηύyοωΤΠÿ
ς??Òƒ½;zÿ
υªΉ¥£ώÿ
ΛϊlΡKέmτόv·θ‰έΐέg† nΐ9λό8γκO^KsAΖ@χ/ήΑ;‡
ϊΈΝ.qΦΆέσδp	
τιΖ}}):•ΣkKήοK5Χ^,$”ΆτΧ»Χ_Ή~oΟΞΛmo”0ÒHSΑ8Ϋ¤Ήpyόbÿ
ΑΔt~Ρ_~hριΝΒί	Ν®x‚[hmΕβψƒΕ²Fιgu4jfO'M³µΈ3|τv@@jώΙ5½VΫCΡ5rρΥ-4}:χSΊb@	o%ΤΜK £|δη¦νώhµ§ΖkΟΪφ‘ψΙρ‚ξαξcρ―µ­KLy
‡opΦZ
s± Ò­¬βTTπH$ύηaκβ1.Όε'
KW{ήΪimυί½ΟγπΓΰ}’·=^TφΡ7½fΏ3ηpμIΟBΔgΜήΈγιΣcϋ&ÿ
ƒwfΌπGΖί΄ΗτΗ·Φ~-j_πx0έE‰aπW†§‹λA*	#ƒYΥΝΐf\$ιa	ύβ”+ό‘|ψ_―όjψ©πϋαG…νεΉΧ~ x³Eπ¶±#Κ"“VΎ‚ή[§%a΄‚I.g•Γ¬NGϊeόψaαί‚
>ό$π”mαÿ
‡ήΡ|-§"aL‘ιvQ[Kq1
nΈΌ7ΉL)yevΑΝ}ζ†KZΙ«m²VΏηΣ½υg…Αωk―x©Ϋ–ΊΎΧ[mo/UθΞϊ^ΰc=³κr3Ο― Ε*ησώqΟzqHψλΞO§L~ƒϊÒ'ÿ
n§Ή;ώ>ÿ
―ΧΏυΨύJώκ{mω¤Ι(Ά›»vΡ>Χ) =qτγΣ'γ·<vΛ©ω»γ?Cΐηξώρτ[[φvυΣo?ιθfψ€αύd‘i—άϊχoÿ
_5ω;t{'^doΔuώ£ς―Υ1Χ2?²oσξ>Μη―ΤzχΗZό είΣ{Φ΄‡ωώ6ωίOMQVO®ώZνσΫΛO23ύGσόξό};ώ3όO=ΫΖZΙη®EΜƒΧ±λΗ­D-ό?ο
ώw>;dόcψOoλΛΊΛλΗCν_sΑίοuRÒτtυrLψ~4maθέύ¶»Ώ³ΏόΩρχΗ
αξªG$έΩ/
wΈAƒΧ?‰ύkα„κ}‡ψWάί>κ~‡Q±ΰÿ
5Rkα”κ~ΤWλ΄ξ£kι»ω.ήgεuη½ΥΪZ_ΙmίsκoΨ’3/ν‡ϋ3Δ1σ|eπ1χjΠ·εΟώR»{?Zÿ
<Ψmΐύ³?f3Χώ/?‚‡Χ€ΰώCϊÿ
΅λ³V'υ―β$Ή¨»έΈ==9zίΎη^ώ^vχ―ΓnpΪ(ΆΎUίK[Ξÿ
΅θQLψΑΞ=σύ?ΟϊkƒνΟεQ5{>ΫόΪώ·CλΥ―ƒsε_ΪXψϊ‡ύxό±]­q>ΞΛσΧχΠΠυGηΏΦ»jδΕχ_ϊτ±τX'zKΙ5²ιk~Θ(ΆΚwΣόόΧό΄(ΆΘ( (ªKo]mλ??[ώ
RA ÒÒ7Cτ4΄·eΉ/λEσhΆίηÿ
ΜKeθ‚(¬­ΎμaER
Ά*ά΄I]Y/Σ³θET­Χ―υΥ~kΤ*¥υάv6³\Θx	™Έ
£$rXΧΎ{¨GIz?–ÿ
Χ—™„[g7β½GΛ4ψ\o†Έ γbΰ2'―Ν“{ΗαªIg–ζY'•ΌX†=2NSΐ
γTuίΣ²VΧ]-ώZµάωάMgR«ΦΦ·β—Kk¥Ίώ;QE]ΣµτοΫm]µ½›Ρz=N{«omwλφok/Α;ΫtQEVϊ5Ϊÿ
ƒώ―kϊ³υ[ΫΎφΏζQE1QI»i»ΊΏ’}TSΊ~zyΫΓ―ΛpΆ)ƒ•ÒVµΏ¥ϊ…QEΏ―ΣΠWv·υΣόΏ0Ά(ΧΣOΗώ
io?ÒΛρÿ
!ΰgπΗωϊTσƒΐ$tΙΗ·=σιΗ9γ0$q9ηθiδ“ΣΏ$ƒξ0>‡§Z‰;_~–νηªλΏθυ«Κ);7(―½―Πό‰ÿ
‚¦όVΉΣτ―|Σ/®IqγΗ…<ν:ΑΝg0R¬aΈ½kΛ‰#9V6y#εόUnHΰ“ΐrsΧΏ^nΎθÿ
‚λsjÿ
µ/‹mδ“tZαMΥ7nΗύuΠv]ΧWς³`ΈδO„σƒΏ<δΛσ―αί3jωf1&ª΅N)¶£8θ®Ί»·muΦοoϊ
ϊ&π†|α_ªΡ‚Δf7™βκΩ)Υ­|ΙΙΪο–©_³'Φκξh-m-§»Ί»k[[XΪ[›«™¤X­ν …Yζ•Φ8γUfgp Ψ/Ωοώ	yc©ι:Ύ?κΊ²άήΕά|;zΪlJ«"ΑβrΧΧyΦΊDφΪΈd…ο;>dÿ
‚sψ3Jρν)¤O¬ΪΗymα-Vρ-”3ªΌKªΫ›{;–F]νZνξ!$|“GΙ‡EeώZ@‚28θ$wΑΩsΙΧθ>p[›ΰªg™β·•jFπχR|ÒOέzέ+­ζί¦Ò8?6£ΐό'«•9`iβs}	8beνΫP΅FwΌR”£gªKDΟ΄―ΨΣφ\Ρ¬M¶ψ'ΰ;«uP»υm=jρΐB„Λ¨j­w{#°κΝrX±$ςs_;όgÿ
‚^~Ο΄λΫί‡:}ΟΑΟ¥“MΥ|/{|ή{Όu\άOe=¤µιÿ
`Έ‰9 )ύwoαθnÿ
}ύFp	2FxΟ^§yγ®3Χ―οψC‡«a*ag”a9%MΕ5F
QΊµβμk}ίΣόθΙΌlρ)Ν!™Ρβάκ¥xVU©«R$¥Λ8NN2‹Ω§tΥϊάώCό{ποΗ|qβ_†?΄δΣΌWαYαimέ¤Συm:ξ!>—¬iWL‘‹Ν?Q·+4sF‹εMηZΜ±άΫΝr',H§^{G¶Χ5ϊηÿ
pπε•Ώ~
ψΖ8ΡoυOkώΉ•v‰f¶Ò―βΤmc””ήSκ—~V	
$l
ς%ΰτdηΖxαp@#=y―βΞ4Ι)d\GΐΡÒ)©SM+¨ΝΖIZϊ4½vÒηϋ±ΰbόFπΟ‡x—MG_©β_IVΆΤ'4»I®eΩ»]ξ;aηiΗΠ―9<τ$ΐd?©οΩOΖ“xÿ
φzψWβK©Zζφ_Ϋi—σ»wΏΡEΔrI’Sf%bΔ1icΣωbδv<ς1ηλλΙύΑ9Ηό2Η…„δ€"ρ_ÿ
Λ³κ+"?(‘¥γsΧτορ•iηά2rtλaά¤µ·4kEκώÿ
‘όΕϋA².#€2,ΡΖ„Ν•*R²ζq―Oίμέ½Δμ¶kδ}ΡEώ°ΏΙΪÿ
ΣΨÿ
®ΑES
Ά(
Ά(
Ά(
Ά(
Ά(
Ά(
¦?OΗϊ}1Ξρ
~'ό3IμνΩ•7Ϋ™~g¦x`μkaΧ±υ?ΟιΝtγ Ο¥rώ?ρ'µ>…Ι8υ™‡olvϊΧQ_fοu—i>ΊZ-l~±–ÿ
ΈαΧύ;OοKό‚“
υ–Ξλύxώy®3ΉjÒξ2U€'
 #?O­ÿ
πsΟότόFρν·μ	πwΔγΑ?nμυΟ:¦•r~Λ­ψΩn4oK<2ωW6ήISΦaudM^]>έ±>rυωÿ
(ύ΅<Gϋ+ώΒ΄ÿ
Η―[Εqβο‡Ώ5λÿ
³δΪx‚ω"Òt­Na<zUζ£¤b$,ίeς\lv#ό†|CβMwΕΊώ·βίjΧχ‰|MªίλΊφ³¨Ν-Υώ©¬j—2^_ί^]LΝ$·7RΙ,#3f'ύ€²c±3ΖΝ9¬#IAΕ[›K;φ{/Mφ>g‰σIa¨B„$ΤκEΕ·£qΩί²¶ΝξΫά§¬χ³ΫΩZΓ5ΥέδρZΫZΐ<χWw$p[A`ΌÒΛ+ªEh]Ψ…PK
ΤώOÿ
ί²ύ€d-
ηΕϊTq|}ψίo¥ψχβΝΤΡ'Ϊτ1wiζψwΐ‹&¤~ΣξzHλΪέΖ£)RΆ5_σqύ–~=i³GΗO‡ί5†ψΑqπί]΄ρ.‡ΰΏήjΊΧ΄ωm#PΥN"βνt›•ϋu¥›:[½τVÒΟζG	†Oιηώβύ­+§ώΝ
­:μ[_βΰPΙώ§Rµ-όΐρϋ)ΒfxΪ+„U)λQΉZW²Moe­½ÿ
SζΈ~®RxMOy;Β:+5k΄χυ·–έ KθκG§δ¨ξNF={8ÿ
"―ψ*lΒoψ(χν®δ[φψ—zόεΜ|ίου85ϋ-­ΑΩ?·µς:ιÿ
g=²
θή>ΤJ>ΣγX·pF	#¦?›ΏίΌQρϋγΔ~5M‡ΕΏ|_­xΫΔ‘hπ\[iqλύδ·ΧΛcέΥνΜ6Ύ|²£ξζD\+JηΌΎαόΗ)ΔΥ©‰„#
Σ–Wz4φ·[ÿ
ΓjΧ_g\u*Q΅Ν)A«vµ·µ½6ωyyάΝ%cΪ)~α#ώ΄_πGΒ«ÿ
ΖύvΊ6~ψX’¬Λ$μG9Rv‘ηd’ΉuuΨΩ
‚’‚Ή®γΣτ—αΏό—ώ
π£αΏ„>ό7ύ©Ύ#x7αη4x4/
ψgB­‹¥[δEgm)ΡπΖ…‡βI	's^ίdU³ΊθQ«>ΝJMΝ7-ÿ
αο£<ήΜ¨eΥ§:‰ΪK—£JώοΧKθ½ΦΈ|Ρ8’¬ΉΙxcΙ
€η9ιƒ_εωÿ
#h3θπWsOEό-π£Δ„†Δ¶νΰm/NiUΨe”άXΞ›±Ρ°γϊ«ÿ
ƒgÿ
joΪφ¥ύÿ
hώΠÿ
|_ρwΔ^ψΫ¦hΪ©γΘo/4}ηΑeγι¶oα,δΌσ®|½§χ²ΘΩ%Έόÿ
ƒ΄>ΝαΏΫΏΰΗΔΨνΦ;?‰_³ν®χΖ«ΰoj6·›KΗa―iΚ	%ΩW'ε^>„psΚ³Ώ«U” ά—ΪΩ»uz;χθτGΤqeΚa§u%enρλKu{χ?—p€ƒίσ9ΐϋγωΧχ#ÿ
ψ†ή_ώΩ~fk¶ρwΓ½l'96χZN«j[·d
d`Έ―αΌ ιθ1ωgΨρΟηÒΏ¬οψ4{βΞα―ΪΣφψA¨]$?ώi^%Π­ε'Ϋ/ό―$Z”q®@yb²Χα”…άΖ8€6δ~‡Ζ4L·/ς&­­υ‹]^ύΌχ>G"†>…ν¤βΌ•ά|ϊ[ξ?Π χoθGτ¦T®01ΙΓIΞs–9όGω=j%Α'·ΧΉ8ΐδυ9
zc¶+ωΒj\ςΪκ―¦ϊyiΆωw?aJλ{ZzυΡzόΎγσώGβΘ|ÿ
Ίύ²5›‰I7Β=oCW$/οΌ@φΪ=²υi./cE
‚ΜΐώKΚ»Fx1¤iƒκªϋη ÿ
Iίψ:;γ­Γψ&έΧΓ®΅]{γοΔÿ
ψ2ΞΠ²ων£xrψψγ^»HςΕ>¶µ–P
¤·πΛ.Ν¤Η—f$ςKξλcΎHΞ―ZύΛΓ£–Υ―4ΤjΟ–=4V¶~ύΜΈ¶¬'5fγήϊ6ϋ=―ÿ
΅Λ¶Έ9ξΖΗ9Ηb=Ώ΅ÿ
_ίψ&w‚eψ{ϋ~Θ™Si?³οΓXηΧ“έxrΞϊHΨq‚’]0ξx “ςLψSπλUψ±ρ;αΧΒύ
ΦkνgβΌ#ΰ:Φ-$χ>(Χτύ
‹‚v¥γΘίέTfΑώΞπε—ƒΌ%α	ιρ¤6πώ‹ XΔ$vΊE…¶(ΐu€@Ηαηx‹‹§‚ƒέNnJϊΩΫ]5kΧ±έΒ4­*µμίΊ΅σχ~ύ?ΰm§σ§ÿ
4~ήώ8ύ‘dΟ	όψ]s{ΆxΫφ¥ΏΧ|%yγ9>π>ii/RΒd+4Z³m¨E¦ΫOΪ9.eR!ζζΛO'q,ΜΔ±$–<’Ν–$η$ƒ’	5ύΒΑβmh°ΧA'φίΖ$ύζH¬<$ªLª΄®px
δ+ψtG¶Oψc>¥{\‡£O)΅YF*U”¤Υ®―¦ªφ[lο§‘ηρ4λΛαΌc­έυΣMuZΩkÒώU~Η?ώόύΆ~όcψΝπ»RψΙΰÿ
‡zΜ(‹αν†·eαψµΝJqs ÿ
j__ιΪ¬/¥ΪjΗwwf–Χ^Lp–ηϊ°Τÿ
ΰούqΆπΧμG¥Εh™KuΥώ1N¬‘)Zm°π;E
,A@Q€F
―βΉz’£λΤuιύjtdλ•Ζ=;Ϋ·aψWΠζ47\κµU¦ξ––ΎΚϊοΧ­b°q΅dδοtµ»·ήΊ«θbχÿ
πwηΖ¤iΏ±—Γs©½ψ£βΛΖΰp[μώ΄‘“€{bΏÿ
ΰ©?πWO‰?πUο…7?Ύx#αr|%‡_‡IΒΎΏ«>ª5χ³y΅&¶T)¶ϋ. ϋ4QξσΜΒώKeJγς:qλΧΏn=κΡνΐ#‚ςόHδsε_Βω>_X5Z±wΏ΄›•–­7k-τKΚϊ+;ΜqTeF½YJµwZl΄Χ·―RΓ>άφ=>ΉηΏ'=ϊs^Εϋ>όψ¥ϋ0ό[πΖÿ
ƒ>#_
όFπMΝΝΧ‡u¶±³Τ…•Εε¤φ3·Ψυg¶”=µΔ‰ϋΔ gµx¨9μ§Σή¬&ή2@ΐ
s>½sΟσ―΅―NZr…XΖPi'k΄Ρ§§NΊ/$y4jΦ…HΞ\Zpiλuk[gÒϋ->Gμ'ΏΰΏπV=Ud”~Υ:Ύ›·tªΊW„Όjªίm@ΚHΑG^5ώ²Ώ‹uοώΝ³ÿ
όW¨>―βόψcβoj‰†µ­ψ7FΤ5+Ω$XΥξ®®%Β" icόgon-	“νƒεΘ0ΣF§;ΉΑέίημ+ύÿ
b΅εώΗί²Ί>U‡μνπT3ΙψqαΖυΙϋΐgΏ_P?γμ4°΄©BS”έ;;ό6»ΞΛSτΖc1’®ρ2cs'}Φ·jο®Ιοκ}E—ώύ8¨±ϊuοώE/ά¨#©Ζ#Σ}sΟJAΧ_στυφ―Λ®λώ}ύ}θQ’ÿ
?ηΏµ8ΰηƒΨη§z/Σ<r(;ηΏΣ<Ώ_Ò€$θ8€ÿ
?η­FΉέ?ΘΟωμd=ΣόώΏ­DΈά8?ηςγσιυ 	ª0qώoσνSΤ-Λψϋn(Η®?¦}½h'?NΓΠ•}ÿ
ϊΤ”ϊ[ϊ{’
LηΏωγÿ
ΥΧΎiδgρ9Η―Λ§~ΨΓh‡}ψόÿ
§―µAV*νΙΙ%}0S’Iφη4Ò»HÒuσώΏ―ψπWOMπφψ»«Ω]}›Δ8²‡αΟ†|©|‹¤Τ<VZή{Έ
ΞΦVέNΫp@%rΏΟnF+Η9 ƒ~ρqΗ\’@η:pkϊ~ÿ
ƒ~<.©βÿ
‚Ώ³Ζ—{Γα­7Rψ…β›hω‰ªj²3A†ΰ+`lΰΎΉΪω,.£u\¨5ό½2’rwy9η=O^	ΟNsΧν‚ϊΎUνχ«K™ϊYmkί§¥GδWϊΖb°ρw'ik³ΫE{-›Σ¦έθΟώαύ—ζρίΗ~ÒΪύ€oό"Ò‡|)$ρξλΗ>%·’©ΰέϋ°ϊF„³™O29µ;W‰ƒ®Wϋ-'sι’yΰηέIΰ{ƒΕ>ÿ
π@ΪΰF³ϋ3Ϋό
πεΜψΓΰύc\ΧΌm κw‘κ>1:½γΟoβ½+G-φ›o`l΄«›p¦}2{2³©†h.'ώ·ώ^¤~`bΎ1Ήγ8ΈÒ„­Mµ%tΫO½+ΎύΉα=*yd)©JJσIλ{+&·ÒήΓ
“Πγ―γ^§NΉΕ.ίRO―lυτνΙ?Ξ–Oεοωφÿ
=ΉωKώ/λΤϊε³{|ΏΙφAΏηόÿ
¥DΜ3“ƒψεωτ511Σωzύ)yΟ9Ο―_AΗoπξ(»_Ν~=Ta²έ;υλqΐγλψσRέzwώΥά6yρονΖp8τΞN3IµtΎοληϊτ*);θΦ‰vυϋτ¦Ίβψ§ΓZσgiότΐςΏÿ
ύ|ΰώPH
‘Ζz;ξύXρ|π·‰=¨cκ-ί―=ÿ
ΒΏ'δl»ΗΜOηΗτ­iχοΥk¦–όÿ
ΜÒ•Òµ·iώΊίm“λ#t?BkωΧψΰsρβaΟΖΎ #>Ϊsσλ@φΕDnΩR;ΟΧυγότ―ηKγSωΎ#0ηwό@3ώξ©p?‡Χw―Ίΰÿ
χΙ>Sϋβ›ό~^gΔqªn…³u]ύ*όÿ
SδΟ ‡Ί€nΏΣ[r~ΠΩόGÿ
«5π­}ΣρΕ‡ό 7ΐΰηP±>Σ–ύλο_c‚έ:`~$c?‘ώ•ϊώΏg(®ΙyY_σ?(ª―Q·Ρι®ªΦιΫυωTώΒ±™ÿ
mΩ‚5Ο?όέDΊ–R
AΝ΅σ}ζϊη_η™ϋΏ¶ΗμΌΔd\uϋΟr½?Οψ΅›u?Sόλη8λΨ§ΡKσώΏ¦wΰ~>φϋ΄(―”nή~Φ3Ό(Ά²½›ς°#ξύ-5ώλs?ηόÿ
*RΥy½®Ύÿ
M7μ8ξ½Wζvώζήψ‘ÿ
-γηΏίβFy®ΞΉ(W&ΰηίε\{ϊONψλ«oήΧM’ώΏ―Μϊ<mIy«ώ[}ΑEW<¥w£Ρ;―[/ΛΛΜμ
(Ά¤(΅nΏ―ς
Ά*›ÒΙΏκήnέόΧ{HέΠÒÒ‡2_σοR`ίΟγΤp=qΧs-FΟιΐ=½AΣώ½IW'gDΪ[wώΎ@¶_Χo7ύuaET
QE
QEνύiεηηύk`(Ά@ΐψΊω^Hμ$ΔD“
p²‚‘s2J‘‘kΉU‚frΔη8ώΣ9>µγΣΞΧ—άΙχδΉΖx<€2sΐM ΓΰuÒZ'¶‹Υν―υιλζγλrΒΙοΫ¶.»oίA€qί®Ο~ihΟό,ÿ
ÒΆΥzυό4}wίΛ],xm§ΊθµλÒώ]φVz0Ά+BB( ( (¬ΣwWNΞέ-®½υο·Bέ”lοηΣξι{ξQEh@QE
QE
‡G¨4Dxΰ6αΙθ{}»dqÒ–›–L	#x>™ηÿ
―‰«®[+?]<ξ¶]b£%E΄μ¤¶έjµω|ζΓώ
iν[ρ5
5ΞαKφΪ¥pntqΙ=‹
ό qΪΎ);IΖI=†G-<ΜσΞ9Ε@_¶μβΪ#β¶“ρΒ>*Π|8—Στ/ÿ
lC}<ΎfqxΦWΦQYΖRβY-/VΦhε–Χc‹l¤9ΫΛxώ	Cπ·J‰$ψ‡ρΕ,ΈΒ³ΫθQYψWOf%I+¬j{ςΐξ
_Κ<IαWfόK™b°Τ)}W•XΤ©;{²’kD›ΫFµw»άÿ
d<%ϊYψSΐΎp¦]›ζ•κfωvU#.ΓaεV²(¤5Τ"µ®ÿ
βψ&nΏc£ώΣ6zuΕΔqψOΔUΈ–@7έΔ Τ"‰
,λi.%‰\ώ!ύOηΠ~#ƒοΤwτόkηί†²wμρπvώΟYπ/Γ*ΛΔµ§5;‹ν{[‚FGI`Τu‹›ΙmΡΩZ¤Ge
)― ¥!Ήγ#®:Ω$γγΏNυϋΏ‡ό5αl‚v:P•XΝΤ΄qχÒΎώ?#όσϊJψ­“ψ½Ηu8‡"Γβ°5†¥‡εΕrΖu%¥Φ©­.μύu³ƒqΟ>ήτ¶α‹σcpΞ8%Ί¨ΙξOcΗQi­{p3Χ΅θqƒΣ=};kÿ
Ϊ»Hύό'&΅Οm¨|VρΛ iÒaΆ[Μ3βR Δ¤vΜΔΩ[JΪ§Q…hMίAfψ,Ηγ«*8j4ε9^IJNΚΡΪζmΩ$•ϋ.‹ςΎΰσψƒdx*ΈΜV2½(§J2”)ΒRκΙ+BWm½µ½ΟΞψ*Δύ3ΖΌ3ΰm"ζ+»o†Δ¬ρ"§‰uΩ"ξΘ:¥μlmνΚpΡK;FΑLdΜΆΑΉ8ΎΗ§ΞO½jjΊ†¥¬j:†­«_\jZ®«{q©jZ…Τ-Εφ΅w+Νuw4K4³HμIbqΠaqW$wόq“Ηl^2qƒτ―ΰξ(Νεη™†dΉΉkΦ~Ν=d ;ήφχlOΙΠοƒάOΓ²\ΩnΔΛFz‰J«Zki¶—θLΑ™v¨,νς"€K1e*X(ΖO`sΗυoϋ7x~|ψkα·ϋ=έ…΄ΛR6]®u]Nέ/υ# ΐ;ΕεΔΘΩΓ
€7+_ƒÿ
°μχyρΏβφ—®jΦ[ώό?Ό³Χ|E<ΚZίRΤν\i^F!D­w4i=τLGcΘοΊhƒJOΑ
pª«Π.

c€τ
ΰs_ΠΎπέ|βiΊnΏ%,/2»=¤»+«ηΣσΔμmδ\–bcWϋ.U±ω³”"iS£J\®ΚtγΝ'®—Z_QιΨ“ιBύΙχΕ/§oσΫ¥ύΫρώ½mψζf·mυώτ΄ϋΨQE|Ώ­?―QIήΪjÿ
ΰ€QE!
γΫ§ωÿ
?&Ϊq]χvτωzφhΆ 
(Ά€
(Ά€
(Ά€95δmο jR21λQJΏ&:σ‘ϊπ
ΟΏωι›½µIι}ούy?ςmu®ΌΛO.χ=7ΒΓώ$¶ÿ
Gÿ
ΡΉΣϊΧP9Ήq£[rKυƒωκ+σόz¶.ΏψώνϊΞZΏΨpÿ
ΰ_’ÿ
5χN5η©όO=>ΏηιS7Cί§Όÿ
•ΖFFAγΉγΪΈΏzόgzviΎ‡ε?ό!ÿ
‚SώΫΖαP]€oF	νΙ'8υΏΙΥrUG\*ςΗΏΧ‚qΞ3ΞkύiΩλαηνWπ+β7μυρZ-^o‡΄α―Γ κrθΪ³ι¦ώΣQÿ
AΤαYm'σ¬ C*)&-θFόDΣΰΧΟψ%e‡”$πOΕΝD ω…χΕέ|—η$9‚q™V§ΦΏAΰξ%ΒdT±λEΏk%$ΫÒΚΙ'·Ο]τΤω® ΙkfuiΚ•’iίΞΝ½ξμτÿ
6S‚«»ƒνlηΠΧΣςlMα£ΰuλ™ ’;γÿ
Pέ/ώΎÿ
‚Jiq"Ιϋ=k:΅L~χVψγ›–ls–	ªΒ‡8ηεώuίiÿ
πoÿ
όsKΪΠ~Κz¬Έ!―|Eβ‹ό•δnϋf«:78ϋΘΩΰΟcSΔ,¶ ΏΔΉn›¶Ϊλcη΅ΑΨΉ;*¶]mίK½ΊΓε2
μδ_ζ:ΠΪϋΝΣ„ÿ
‡CbΏΦLÿ
‚'ÿ
Α.thζώΗ	/A†UΫ­h0jªKFόζαKn υ'pΖCg‘ώ[΄.‡¤xcφ‚ψναΚΧLΠΌ=ρ‹βF‡Άi–1¬:v•¥ψ»Wµ±°³r"΄³¶+[hΑ>\1"gΧΉΓόGC<HR‹¦ι¥vÒϋVνϊλΦκΦ<άΣ"Δe*«S2i&ΊΏ5¶k~ΦΨρ·sνΣ'2GεΟ¥OΔjΑTίΞ#Ζw%‡$pA8η®AIδ#¨#‚\η=Ήηύ+ύTÿ
ΰ‘³χΐ[ψ'?μmβ8ώ|)ΔΟΐΏj:Ώn~ψFο]ΤυΈfςσPΦ'ΡδΤo.&»Ι,χ2HΔςHρ{ύ‰…Uέ5VσPQ“vι«·δÿ
ΘΗ'ΚΏµ+Κ”j{;GΚΫλ-–vNΫ3ςgώ!Iÿ
α™Ώjµ1KKρ»ΓMI‘+Ό	€¶ί5?Θ«wΘα…vπuημΗ¨όJύΎ~Ρ:–χ·Ώ³ίΔI-|Y<1Χΐί`ƒF–κm€ΏΩν|KoαπεΗά4„(Vjώ¦4Oψ{ΓφÒΫψ{@Ρtk‰Iντ]*ΓI†i#A<ΡΨAn’ΊF<¤wRΛΪΈW|~ψ)ΰίΪ/ΰ§Ε?,ÒσΒ|®ψ7Z‰£G0A«ΩKoόƒl»ΣξZΛI>W†βή)’ªGβΤ3ΩΛ<9¥NΊÒjΙ6Ή—Ν=^ώ}Ò*e_π’πMσΚ+ΎνE[ρWJΦς?ΖdTwΟΤ9λϊϋϋφ
ύ®ΌCϋ~ΧΏiΞ}V
x…£ρO‡νεIβOλ–ςi*ΡUέΦ΄O¥]Mq§}§ύ=VΦΒ{Ι	ΜώΪΏ²ΔΏΨwφ”ψ•ϋ8όTΣζ¶ΦΌ¬Μ4cΛ‘4οx6ϊF›Γ,ΡfΈ°Υτη‰άFΜφwΙyapζÒXΧε066σχ²:Σ9υοΘμkχ¶πΉ¶_hΎzui¤’Φ6’IΎmvλ®φΠό·®ΰΤ©M¶ΥÒ—G¦οΦϋκφbύ?i‚ÿ
µ―Β_όfψγ}Ηρ&k|$Σ/ “RΠο&&ΌΠΌG¦$―wΆkΊ\®φΊ†|‘ΝΔR2Ε¶GυψΏΒώπζ±γxƒHπ―…ό=cq©λzο5]'KΣ¬-#3O=ΥνόΠ[Β‹ΛHκ„zΧψΨ|+ύ ώ6|ΌmKαΕοΙΧ^	ρN± I!RΕ|ΥΣ®α\δ	,Ϋ²IΟ_ρcφΘύ¬><ιιΆόdύ£Ύ3όIΡ#ΞέΕί|EªθδςΪT·Ώ`ΰπd9Ν~e_Γ|D±’©O‡“i«Ι+¦“³όυκ}µ>3Γ¬-¥BJ²I+κοΆΧ²όOΤοψ/όΓEÿ
‚„ώΤznπªϊkοΩÿ
ΰ5¦«α‡ϊ£¤ΗγRΈ·>-ρ¬vÒς¬od°²Σ΄#$k4ΊU½e…µ πA“―άvτνιΪ‘πG^Ψξp
ΖNqΟ=G¶r+ πoƒΌUρΕΎπtGΕ4ρ–µcαίxsI·{GZΦµ)ÒήΚΚÒU™Ω¥uήHXαI$¬±£0ύ'…ΓδΩ|h&”)Bς›Ρ=¶ΣΧvϋω|>+[1ΕΚΊ‹η©+F:»+¤“³ΥΩκϋ^έήoψ6χφFΊύ¤?ΰΆ>ψ‰©ιÒΝΰ/Ω’Ζ_‹:υγGΎΡΌLf™ΰM*WΖΟ΄M¬ΞϊªEβ-"gJ―τΟυ'*>ρη<xo’½yΧδWό{ώ	»§Α8ÿ
dΑΎ!†Ζÿ
γΔ©mΌsρ³\…U—ώ+‹@–ΣζΪ΄Ω7φt#w—q~Ϊ Q~Ò?_•p\	ξ08zg
ύ:ό/‹³XζXωFπ§xΗDμΥ•ό¶ωθ~§`ή/‡:΄κZR½οgmtΦφΣΧΣOΔψ,Gόώψ*Φπ"ΡΎ4Oπ‚Oƒwώ4Ήyβπδ~!mnίΕ°θ‘’9n­’Ω­[H-ζ0”2Ο€§m~0iΏπg—€CΥÿ
m9ΓΟF;gc\3·$n¨9$ώΤc€IδqΧsƒλΧτυ$τbpλPΉθ{‘Ϋ9ΙƒβlΗ…§„£(ªTί»¬Ήµµ¶vZτ±µ|§‹¨κΤΫςτm7oΞήGρρaÿ
€ώΞπªGφ΄ψΙtΓ―†όf:»OΈ#=Ο?Jο4ψ4kφ6µ)ύ«ρϋφΥB°σ<›ί	ιΑΐ'pύΗ‡ΙU`8;²:ξ8ΕYΏ0Θ'<’pN@Ξ:q™:uΝ!bθz“Ψϋw?©ν[K‹σy[χ©>i'kwΦϊuξBΘrυÿ
."φΎΧ{_u«nϋόόÿ
™M'ώLÿ
‚sΩB«©ψ“γΞ΄ΐ|Ο/Δ΄wΗΟH)θÒyΖ;Wςÿ
γÿ
‚όÿ
‚u~Φώψ;πώ΄πg‰ώiΎ7Ό_kςψRώΪΈΦυ=>ηΚ½–vΧΙµ‹d;Λ`©XmΉ=ρQΑvκΑϊύ+όρÿ
ΰνΤώίΰ}ΗCϋ7iα³ÿ
c¦Ύό”τrxι_SΑάAcszT±“£(;ΕΙ=t][Σ£ω-lxάA”`°ωuZΤ((I%i-i¥ΣIuOοξ+ΈΪ§γΗΧι_®ίπBίÿ

?hοψ)7Α„ίό΅όDψ}­i7½Υ|'β+wΊΡυ΄ίίΩ}®έ^?5`Ί9Υ„­~E‚¥O=ριΑΰυώΈλΤΧξ·όykÿ
iψ
ϋ”“αίyΟό Ϊ«.Qgΰ“Ε~›ΔeG.ΔNδq¥'tυNΫίρ·Θψ\®”eΓΖqΌ]H®V¬Ί/»NηϊθΏπKψ'G‡<§Ò?bίΩÒΞX‚ªIÿ

ΏΓΘ‹†Sƒsa1l©*w’ΔϋJÒτΝLÒτ=ΒΧKΡτk=/JÒμ ΦΗNΣtϋhlμllν΅T†ήΦΞΦ­να‰U"$ETUς0=ΤcΌÿ
!θO¦{TƒΈΰcqΑ#υθ9ύkωΓΔβg%^µJ©Iς©ΝΛ•ω^λN‹οΦημtpΤ0Ρ½*q‹i]¤•φZι}ήΧιΈαχT³ύzgΣχητJSΫΗoRzg?%p–(ήώtτ<zcή1χΖOδ:ύάϋςsιΚª‚3‚N?§ “νLοÿ
ΧώΎΣΏz·Wκνψ―λώΓσΗÿ
[ΫπΙλυ`zώ£σνΝJΌΟΈυοFIη9όψώ_ΤP <Η·J‚§# Z`O_Σό?}¨΅Iηsιύ}ιUσώΟj—πφνΗÿ
[όβ_―OΓÿ
Υ@*8ΐ'yνÿ
ΦγΣύθUH ηπχϊύiτÒ:uΘ>Ώ―ήgµ
Fδ.p2A}{}:c9φΝP»»¶²¶ΈΎ»‘`µ΄k«™¤uXΰ·‚3,Ò;»*"F\³qςςW­]u8 ƒΧ}}ϊ{ΦF³ΆXx‡HΥtZ>™­iΧΪN£ζΝc¨[½­άDtdσ-¥pZ6»·ΊvSƒz¥$ή½.―¶»mέι®Ε¥xM/‰¦•»hνδÿ
ΛΘÿ
9ψ(ΗVύ£Ώk?’δάιΪ—‹/t]‘‰·>πΓG–Ωrκ‘]YXCvΫX‡yψ 0Ιύnsί¨OΫoψ*χό§Δ_±Ξ½wρsα5®­βΩΫΔZƒΌ’ys^κu;Ω™£ΡυιΒΘeΡ.¤}ΊVΉ6ΔσμWζ;ƒi5ηβBƒΈ9Ίppy—―Qµύb0Υςκ+(µEJ)¦Σ²ΊjχςΧ_–‹πΌλ‰ΓfύΌ_½6ΣΥ^7χmε§K»΄zΓO‰~7ψ;γΏόJψqβοψΟΒ:”¦‡¬ι³4S[ΛÒΑ(VQsey›[Ϋ)ƒEqm$‘H¥X‘ύΨÿ
Α2ΰ¨?nΕαOΛaΰίΪΒϊ|_π•x&k„†ΫΓ‰<Mΰγ3†Τ,$$5ύ{ξ΄™‹„ÒApίΐ®ÒW<}sΏCω~5ΥψΗΎ2ψ[γO|Bψ{β-OΒ~1π®©m«hφq%­ν…έ΄«(u‘yΘβΪPπάΐοΘρHκyΈƒ‡ιf”o¨Χ‚vi+·mίΥzν·VCΥΛkFMΠ—2nΦ»IΫ[Y.|Ου#Ηό:IΟLv<gΈυ©#O¨ϊt8ϊqλΧρÿ
ώ	‡ÿ
Lπν·α;oxΦηNπναΝ>5ΧΌ2ςΕmeγk[X€xE‚Κ'ΞΥt„/6™3Θρ	,Z)#ύc©ϊzg
gª€7€®r?Μ0ΎΌ¨Φ¬ύΧk6“]τΨύ‹Γc¨ª΄'FI_UuΆvB²η8ηgΞ;¦£#ηωtλώ&ΏΧ®qt{CΖzβNyόύ2I?―^}ϋW¨qϋηΧΏαϊσMΗυοω§Συζ¥ώ‡·τιυτηάTtOϊσWϋμTeΛ~·9_qαOΐ6΅γώ}Ψφγ
cώ5ωI 
ξ:€OιωτόkυoΗoƒόPκªΚΡÿ
¨Ώ(άεάς2I?Rμ}ύΏOA[AhΊο]>νΡξσYλΊ{t^}Υ΄µ―Υ‘°ΰτρβΏί„yΙ>4ρ'¶Υ―08ηηµF1={ώ$cιψz{Χσ™ρ|οψ£ρύ~&™Ϋ«ήρθW§―Zϋ®ÿ
z«ΦΤγ§MZWΫ·ό2λπΌixΠ£ηQΗηΛύ}ηΙί[ώ(K―}BΜγ“ζγή§ΣήΎΟωώύzϋ‡γ¦ΥπΗέ©ZχΫ?ΟSΗBrAθ;ϊη§ωη¥~½…ÒÒξέ>KόµιcςªΡΌ›ΫόΣJύοιmώgΦÿ
°M'νµϋ.¨ΰ>Ό‰n¦.:Χϊ7Γύ£όλόψ?ΰ±ξύ·ÿ
eΠyΟΖ7Nθ·’r?ΰ5ώƒΝΙ?SόλζxMΞ’}›τΥiÿ
ηΧ^ό
µ9y4¶Χ]Άz;yάJ(ΆΎaτυϋΞξÿ
ΥµAEPMltγ\tοΑΟlςxβQΙΐΟΊΉΟΈÿ
"Άiθϋ^ÿ
;" ―$Όÿ
®η¥x^0TL<Χ‘ωΖqΈ¨Ξ=—9η9όEYϊT^Ngq;Γq?^όϊΦ…yυ½u]WoΕuωO‡-(χ²ό“ς]{QY…Q@QM]:―5Χόύ
Ά(o·eσV_εύX£sΫη#τγλ‘ωΙQIτΟOζ;sΐΟ·ιNδ'·όyοςώ‘.ωÿ
?δσESV§ωzwθΏΰeιύv
(Ά aESVόUζΌÿ
Οª(ΆοΏnΎKΝφ_wM€(Ά²WΧT&μ›μs>,»X­²¶απέ³ΰ¶pztη'¨ΐηj»F=Ι>ÿ
©νπ+Εωϊ£Ζ‚$@πςΗ#®xΟΦ°«Π¥o~Ύ‰θΊy§Ξc&εQ¦οΏέ¥’μΏιΉEVηQE
QE
QE
QEκQE
QE
QE
?ιό¨Ά€€#<PΣ“Ο©…›κAΐϊsωÿ
¥¬―~ϋ™ΪΧΡθÿ
ςCυγ΅ΖO##―NγΣ?Κ2@1ΗΠ~x=Ί*R tοψϊÒ,`πA9ΰΰsΫΟNqΟ®
R•»ioε¥΄ϋΏO•S„κU§κά”RµΫm¤—_+ΑΣηΪ—φ‚ΡΏg/†w~)8oόS«»ι^Ρ%p>έ¬MΕΥΜ`‡]?LB.®Ϋ.Κσe™―xΗΔ<ρ6―βοκ·:ΧµΛ©.υBν™δg“ξΫΫ«’–φVγχ6φρ8ΥUύkϋ~|^Ίψ£ρχ_Σ­ξψy»Β$!xςÒFmoP
?tλRY"
	··€n8Ε|<Ν‚O®8=pO>Ξz“γ9Η?Ζ^.q';ΞλεZ8Ί£Ά©ΕµΦΉgQ¤Ϊ•―hοd–·?άÿ
Ά‚9gπYΔω†•N"β5,mJυ ¥S…«:T)¶Ή΅xZS¶­»=1ιυΗPyτΟ‘ΘνΘ'““ιÿ
>	xγγομ|ΰ]=¦Έv†γYΥηFώΛπή‘$ΛΪ¶«2$qλok»ωΤΫΪΗ#	-€ΏόsϋGxζx*5‚ÒΠΑsβ\ΖÒΩxcM’M‚βu<λΉ‚K’²ΙtΰόΙrJΏΣΐΟ~ύ|gΰίiκ¬M­λw)Η5?,Gq¨jw!U—φλ¶ΪΞ–φ±E…'†ήbψ“O¨ε”άf§%gpvδwÒλWΥ_r>“ÿ
Iμ«Βά―Γ\=Z–+‹1t%Τ΅–ΣyUZΝ6ύ²½αgΥι½ί‚ίόπαφπÿ
ΒαmμcYµ=NU_·λZΌΘΆÿ
TΎ‘F^[©²!%-΅ΫDP¨―T'O_\uÿ
==©^Fc“άπ;d€=8
 `<·03λώsϊσ_ΨΈ<JθΠ„a•¬’Ω/+ίSόGΟ³άΛ³<VmbªβρΈάEZυλV—4ε*’ζ“mΩΪοD¶ςNΒΡEΤyEPEPER¶©έιΣ§ΜwΡ«-zυAESQE
QE
QE
Trÿ
ϊ±ίλΣ¨γƒRS$8Qώπ‰ΎίΥΎc²σ_™ιώρ(¶Οpίϊγ]%s~ΟφE±'ύΞ>ή•ΡΘϊuÿ
ίόσ0ÿ
{­η+ύλπ?YΛάpÿ
υξ?’lzηό®={vΝDqΫ®zηόzτη>΄χυΗ¶sυγ§ψgσ¦Όνρύ	γΟµqΓ,:σό»=*0‡ιÿ
Χÿ
…YΖqΑΑ'υcΨc®aƒJqΏ§_Κ‚”VEfάω8>>ƒ­0’{Δ“VO ‚GCΗ΅γπ•.9όΈώ™Ζ=ύOLb“}σκ­Ϋτ.2½Σnο]4ΊΣM=>α’α-'~~X¤mΔwU'Η±τΕνν'ν#ϋ@2ζMÿ
>(ΙΈ/ήσ<i­9o|ξηί9Ζ1_μμΛ‘4R
b•YI*6Ίν8#•$yμ~j_πnό^ρ‰<mβ/‚>6ρ·β½Sρ&²u?ί΅³ΈΥ5‹ιυBH¬΄­_Nή)®®fd‚"©γφα²:•κΧS~ΡYFχ³V[++¶ύ6ΣCΐΟ²ªΩQ¥hς½S–½µVΡnΧ–ΎΏζ".…J8ά¤±Ϋha‚Δγh'$Ύµώ΄πGΘίώ‰ϋ,£χ‰π'Β±0 †Ϊ>Χεδξ―|'xζÿ
ώΑ!΄ϋxΰOΨοΓ7!TI¨xγβ~΅+`—’οΖ²ο$’G$g©5ϊ«π»αwΓÿ
‚Ώ|παW…μ<πλΐ:-Ώ‡ό!α]-ξΓCΡνK΄―{qwtρ#I#ξζiεΐ—ρ^:ΓB…J<³»rI'{>ϋϊ_]t9²ƒ–b':J2I«θν–―oVΞά.€9δσισωγτζ“i9ΙΘ\υτλΣΫΧµMΖγλqλÿ
λυ (,	η†
όωνΙ―ΟDΦzoΊjΪνo[|μ}O2½ή‹mΊ®―Kέ®§γηό·ώ	π‹ώ
…π®ΪΦςςΟαχνΰkίψU#³ύ•§"y</β¨ +6¥αmJζ(Δ¬ntΩήΩbO6)Ξ‹φΐÿ
‚Wώέ_°®µ¨Y|xψ#βh<)gw46_<%k/ΎjΦ¨Μ Ό‹_ÒRζ4\ΖΆT΄ΦO½%XbΏΧό t>@η¶yι9ιΙΥ4½/Z³—NΦτλ_O2Νa©ΩΫjs 0–Ϊξ9beuωX#Ίq_a’q†3*P΅eV„wNMέiε·K'­1ΘpΉ„¥5ΛNov£Ώ­Χ[[E£jοCόKΎΡ6—@Ϋ*ΜQ†	aΚπ02q€FqMκΠ±Ssnls4`d°
δδ‚1’NN3ΐÿ
aΑ9`χ—‡d?€^$Τ.έκϋQψqαΦΊ™έ™x¬β“,ΞΝW–8#²|=ÿ
‚n~ΐ_
―WRψϋό
πζ ¬·–ÿ
4©ΡΧ•xώΦιce$(ªT•φοΔ|7².ª©k»;Gek“ΣNΝ£ηΞ3oΫ%λ§M<­ΧΉώ^ί²oόφΦύµυ›;ΰwΐκZϋΒ³όBρΎψ{£ΫΚI…ο‰µxν­nΰUL[ιΪΞ@X­d,ΆΏ½?ψ$‡όgΰΟό°Ω|^ψ‹¨Yόfύ¨.,$ƒώK»†>CxΊÒό¤\ ¤ΫάψείTΌE+φ}΄¦Τ~ÿ
Ψi:V‘i†‘¦Ψiv6θήΛM΄·±΄

kDΤ(
* 
΄“Wv“ƒΐ'^sΰQΧ5ςYΗγ3
r΅OχP”ZjξςΏkYYi}/λcάΛψ{	ƒ”jOχ“‚ΡYnΥ;iχ·dGΈνi9ηψΘ
:ςiΚΩΙόύ†3υώU9>ƒτ
ÿ
_Έ§' ώgό+βrnRw•“oΦί«ΫMO¤vδ^ImΣbCώxΝC“}QίΧ¦=~υ7ZhPΟλώ?qά«_—έΠQ•“ϋÿ
­AίηόςΟζPϋ}:ώ}½κESτξ?Οqψφ<RμΏ§ιΙόΉόNxV[Ω_½‰»[6ΎevΘγ'¦Ιn9Ο#ό­>_πUίψ!ÿ
@ύ <!ρΓWύ£u…xSαµ‡ΓθΌ1¥x+NΧΎΤm5WW›T“T½½έκ1ΐ–ΡΩ…[—2Χτ Γ9ΑΗΣωu<ϊκ=­“Ιόσιψtϊ~Έ,mLhΧ΅ξΤωZm5·nλΧ^Ϋ‘£KEΡ­Κ/u-o·Λ§M½όuι_πhΐθγ‹ϋcφΏψ±tΰ(Σό!α+4~FDbβΞΰοε†23_z~Α?πn―ΐoΨ#φ™π_ν5ΰο<yβiή#²Σό;β{OYι72x‹GΊΡeΈΉ“JΣ-nΤΪΕvςΖ©0έ"&μ¦TDθ¤δΔςz2:c®}ΎlχΪ0Hόϊ`σ€3^Ζ+³\U9Q«VτζΉeI««$’Ρs[GΦφι­Όκy6]Fp©
1ζ†©¥kh–‰ξχ·γΤªr@ωJυω~πΖzδz:ΞzΤ€` •.:δ}xυΗ_ΣτΆΎm»¶ίWΌυe+ΫK[ϊω=T½?―§Σ{Σ)Κpp9ιώzΗΣ4I£~}Gµ9ό?ΟOZ‚r1ΗΧ:gZE\{{ÿ
υ‡^ώΩΘθΆσώΟÿ
X
Ά(
 ÿ
:( ›nδu>ΉόΈηΣ‘PΗκzgαLSΟ|ρ$ριλιΞ(d3υ'»cλΜ*9'w\ρƒςΎέ^Υ’2?/_ΤϊΈ¨ΥNrsΤυΏ_Oδ;vωώ?~ΟΘΑρO…<9γλ>ρv§x‡Γ^!Σ®΄kEΥ­΅½Συ>φ'‚ζΪζήΰ<E$R2α—δΞεΑ
ρ!ÿ
Vÿ
‚Iψ“φLΧ5Oίτϋÿ
ώΟ:µγΟ{cSήj.ξ¤vnΆ@y'πϋ;°Υ_-µιF0Ι/χνΗQ“Γ'ιΗqΟ§zΑΧτΕZ.©αίι–ZΦƒ­ΨάiΎ—ª[ΓyaayAukum8’	a–'e‘7R„±=Μ;ΔeU©Κ“¦¤Ή£{.[®ΛΧπ¶Ηδ΄sJRS,Τ_,ν­ν£οΫΛ«?Λ<πγνάςNL`σΑόª ξΙλs:‡υΝ~ϋÿ
ΑXÿ
ΰ‘zομΣ¬ό|ύt[ύΰ£tχή#πΥ’M}ª|)ΊΈ•έΐ\^x>GlΑxCΛ£ξϋ-λµΈ‚δώc‚bFλΧ=Ώ„δϋδdΧξfk‡ΝhBµ®gη.–έtτξ~9εuςΪ²…x;shφN7Ρ¦“¶›υ[u:ΏxΧΕόW xηΐ Τό)βÿ
κVΪΎ―θχ2Z_ι·φÒ,‘I±?—dΦξ	α/¨ρ³-q_πKψ*ο‚lΏiίώ'έιήύ¤4:8µ.FΛIψmkY<Eαο°^Ί―«h!ΎΡg3I5ΆΛdΚaώcγ§N‡ΧpsοήΊ/
ψ›Δ>	ρβί	jχώρ/‡ονυMZÒ®e΄Τ4ΫϋI[{›[™&GPX”l© ρqC‡Ν¨_–*ΌSε’VΧK~>_©θδ™έ\®¬Sr•Ò”nή—^{^ΏκVr:~„uG'¨γ£#―$ η>Δÿ
‡ÿ
[?Λ ό4ÿ
‚Vÿ
ΑZ</ϋWιZWΑOz–›α―ΪG°†Ι^;=/β΄{΄4 Ϋ ·ρ6Δί©ι!‡ΪX½έ²3ΫΓϋ”I““Τ‘ΣΗ\nƒΈ=λπόΗ-ΕeµηNΌlΪ‹oI$Υ¬»Ωτυ¶§μn‡Z2‹mEµ¥Σi;i―—Ra–‘μs€}9\φ4Ύƒ©
ztώ§ωSVRxΐγ§®?ΧΣΦ”¶Aέυγ±ΰ λ®kΟχ―µ¶σzΫΣ£ϋΧΙυ4Σ·S’ρΩÿ
3Ε
γBΤ†G^mdΐυττΐ―ΙΒΔη¨ΗιΟΏ^ÿ
ΞΏWΌ|Ϋ|βΆΩ θz‘Ο±¶qΟψζΏ(‚2=Ξ·ΏΣ•ΌRIy«ΏWΎ‡M;($νgί»³ν·΅&~\υγ?¥8ÿ
Ho‰[|eβsΑώφµ|®+ϊ8e"1ίόÿ
ΐgωΧσ…ρPηβ/	ΞO|H	οÿ
!{³Ϋθqkξ8?ύζ·(«z΄½:ΖΑΓΖϋΞ]?ΊµιΩΐ>Uψμβ„ΤRΠÿ
γξ?Ητ―‰λν_ς$L9ηQ΄όΓ±ώ•ρPηυύkυΜ;j³ÿ
†ÒλΟηÿ
όΎ²Φύn­ύ|NέΟ²ÿ
ΰªdύΉΏeΤτV΄6υΖΫME³ψbΏΠVΏΟΛώ	ΔΉύ»Ώe³λρ[Iγΰiϊ™9τιΦΏΠ6Ύo~:^q=ΏΛπ:p[M>ιώMQ_2w…Ύίη(¤έÒχό6ώΊl
N?OΧu΄iΌ‚Τu–dQ“ΨqΙλg΄ΪΩπΔma$#r[ω’±ΫG8ΖuϋΉΘκ"o¥χZiΦλ[ϊ7χ3jR©¶·ΏΝ%¦Ϋισω―N
Β
£=p£ΈνKAδ“λEpΝ]_·§VΏ®‡ΣΒ<±KΙ~H(ΆΔ°Ά(
Ά(ώΏΜ(  ”γ'ήΈκ=;Z£‘wc―χΘΖ}ΏΞ}jΟΧA;uλ§ίύzφ$ηΣόÿ
z)'¨Η
γΈ<ÿ
‘ψÒΦ^Ιλ¦½:ΖύΏ«yΩz/λ@Ά+.Ώvώ?λΘaER
Ά(
¦Ή
®Η
bsμ±ÿ
>iΥ—¬ΜaΣ/|–AΨεώ^ΉΏ§~•¥5y―Ώόχς3«.Zr~Zzaq+\\M;ςÒHΝf Ττΐ$5FΧ“υΐ§W¥eλ―ΰ–¨ά¦Ϋ}~λΪϊQTGΞΑERΏ—υηΡ}ϊ•%³οΫΡiϊόχaES$(Άίθ4®υώ½4z…QJϊ­¬Χίιισίn©ΩY½νΧ§O/7Ϋ`Ά)’QE
QE
QE
QE
’nϋ5Σ %ΦήROΝΌ!*
ξIΐύ:RΤπrOϋΉΟ Γ$ς8ΗηΣΓR•H'fιΝ-m―-“ω7ώG£”N4σ,I¥(ΓBrM]8Ζ¬$οςVΩιsψÿ
ρuνΕο‰ΌGuxΜχWξ°Σ΄ΘÒBγwI$¶ε$’IΞxΗΚCΎήΨ8μή΅Ή„W¬|sΠΒΎ)xn@Λύ‘γÿ
ΪΖv–€kwÒΪΈ―i$!ΐe#ε"Ό~YΟL	;G9ΰcΈη·―ωέΔ4«QΟ±π”¤±Ψ‹»]Λχ·³]owÿ

ÿ
¥―ρx<W‡Ό/΅8S¥<“αf£|%$®’I¶—D~νΑ%¬τ>όPΈ·΄†-Zo1Fθs=Ε«hva‰ω„0ΈΉςΠ|›¤‘‡ΜN?Vεnsc;u:όWÿ
‚Gψ®#©|gπsΉMkα?ZΔNr°Ι«i—¬½
9Θ3’J+φ±~‡―o―ψκµΌ3―ά!”rΣPq΅Ι5Κ£(Κ-«Ιi¬’»vΎΎjίαWÒΏW	γ?S«QΦU1ΛJ§?<}Zp’QΦΙFξ)+¤ΣCi
Ηωλυ¥ΆΏB?B( ( (¥moψ}ίΧΜ(ΆΪ½wιιΧόώ_6ένεύ^w
(Ά‚( ( “?1€εKL
δϊt¨Η°τ¶¬“ΘΚΆ›ξqΗΜ?―ευÿ
F'8<c3Θ?4Φ@Ov^ΈΟσ¬άΉKg¦ΊξΧM΄-E®WΧ™YoΥ[ζz‡†Ψÿ
c[ÿ
»Η¶_?Jθcn‡βγ2I=q\η‡3ύl=±ϊλ]cπqξqόkΰ3χªΏγ}»/ςΤύc-·Τ0ύω#χr―ΒδG9<c§ΏιλοQΣΨu8=Ώ‘ιΟN:caL®#΄tÿ
<}=½)Ή9Ζ3Ο©ύ8ΧϊζρΧ“‚G
dγ ÿ
λSU”™Αλqπ,ς2―­Ώ―κϊkς+–M^Δ8ιΠχ'τtγJ…ÿ
λOΣΧςΞiΜΨΙΪΨΞLuχΐϊcΏz®b~aΰδχι8γ#¶E1ΕYέιk[ΧGϊλÿ
)$υ?αωt¤©Q23‚Η―NΉ¨ΘΑ#ή—[Y«yiθΏΘΡ4ξ»{vϊÿ
§ΤR«ς}ΈΏΧλQÿ
σώϊΕ_τςk¶ηχϊZϊ~Ιλώ}0{‘ώzΘΞGoΓυώΆ ι™©δp}8οΟ―qΖΜ}Ιό3Οχξ:ρυ¤γΛªM}φjκύ~%΅.Ò[―^ίΧυbΓετ>ΥC·ΤAϊqψt©OείόσψzΧΜ΄ίν…ϋ6~ΗΠ<aϋK|XπχΒox§V›Bπώ£―¦΅"jϊµ­™ΏΈ²µN΄½•§ΠΫz"ΞÒXE3­>JiΞRVI-o£λÿ
χΆW,δÒΎ·v²^Ώuÿ
Ι\ϊP9AΘώ•ψο©Α}?ΰ’Ϊ`&_ΪοΒχ;sΖαΏ]“ΐ.ΉΟαΣ­q:‡όSÿ
°Veύ£5GhΞέ;αη‹§gφUk<}³^’Κs]a+5erW¶›χµοΫUσηϊώ_ίSΡΩήiv?pCβδcÿ
­ω”νάγdϋ~Ύώάχ―Ξ_Ψ³ώ
§ϋΑ@<WγO~Μ9ρ‹uί
i:v·βk}kΑχ…β¶Συk«›;mn5{xbΏig΄ΈWK_1΅¦]l{ΏF20Ήττ^8>ήυΛV…J3p«	FImµ΄OTυ]oΦϊ+BtκΗiήÒ‹MmΎ–όΏ1ΜHη cΫ'―#·)GO§ωγ“Η§ιΖ)ΉSΤΜΟβό)#Ο#¶qΟbxχτΟ½Ώ¦“ώ»ΘΪμΧuήέUοnÿ
-	ϋσλÿ
ΦλψSAΙ#ό=ςqιΫ>ΏJnπAΟώΌηΓΣ­"uΟo\wΑιΗOΛ·Ò‚y]λegί?Δ΄½·ÿ
――N§ϊsKcώsιρ¨Α
ΗCλάlzυϊ”‘ξ=»ρν­+®λ]ΌΕgΩύΓΩ{χΟ\ΧczcΤχ‹γΏJ—zϋδcƒσώMFXzqΟBy~=‡―~”έΧFτΎ‹§ψa¨IνϊlΙ@ΐχÿ
<}?ΟµFXη―΅ΰq8γλƒΟ4‚N1uωsΗς}΅οÒx<“ΤqΧ:vΘο­Kέ/Ki«ΩΎ–θ­ªξήΐ£wgtύ/ύ/1δό½rI$ϋρΫΠzg€¨±σ‘θ3½0>==M+sΣόρξj"#ΐω°"ΨνΖ1“”ιΖS”"―fμΫ[-/d—ΙvΧµ‹²dΫW¶ύΧKYiηv|ρ'φψύώxVπWΕΪ{ΰ·Ό_ \‹MkΓ~"ρζ‡¦λZ]ΡΕ­φ5ΧΪm¦h&UIβCεΊΈlΦ―ΑΫkφHύ¤ΌK©x?ΰ/νπΏβΏtm9u}WΓώρf™®jΊv”ς¬?mΊ²΄η†ΧΞe‹Οeς„¬vβπ_Ώψ#?ΕkίµόΕ~6xCUψ«ψσΓzκ|/M^‹ΔΦ:wηπο…XiN•ΊÒώY.KZ®Ε—ΝeZς/ψ4Ϊά·νίρRIϋ?μο¨ΘKΌΟxv;rrΨprK`r9a_bΈsS-«§¨¥N
N²z6μΣzι®θπi8bγ†•8ϋÒ²i«ς·£³m­5³{ί£?Πψ@#§lυΈ¥¨c'΅ΑχΖ8Ϊ1tηΎ<φ“όυÿ
?Στ¥Ά€
(Ά€
(Ά‚άtΏ’Ώΰ»λ®»wΧb7ÿ
©ΟεΣΤώqΣί9φχΗιί)½zχώΤKΘ
ΰ;{ΗϋΏ™ΘΙχ`ΞAυό:O~ƒ8§v¶IΘΞ=»9οΫ&‘G=8ϊώ½²2?ύx ‡sίΧ©ιξGεΫ©&«s¶~GF:π«2?Οÿ
[λψT'ϋPÿ
Λ_κήeΑ΄ν«Ώό~H―}§ΨjΪuξ“ªZZjZ^©i=†΅§ήΫΕse{isΕumsk:΄SA4NΡK‘΄o0e!›ΖΏόϋώ	{π"ÿ
Zύ¥Ώf―έ^|ΏΈ—Qρο€΄ΨήζλαάξdSΡνΤIqqΰωΩ„“B΅ΫBf`OφsFφίΩ~GLgΫ{c®Aγ―l―όuψ³πΗΰΏΒίψϋγµ¥hΎ
Ò΄«¥Φ[WO£Δ2Eύ“og(oν+»ςΝo„I,εΩΩAΓΉ¦/‹¦¨757ΣWwΥ&­«ÿ
+%¦ηεΈLnªΔµΚQ©oy5ki«iµ½ϊ£όΔγ`Λ>Ή$cΈ<ƒ€8¤f pH9$~mΎCΪ½›φ„ρoΓ―|lψ“γ„ήO
ό;ρµ-KΒV=+J–LF[ε¶7r¤—οcϊ5ƒέ5•¦m ΪN9ΙΗO|>ΉυοίΣχΚupτκN.3Sq}I»ύηα•Σ§Z¥8;¨MΕI+¶“²ελσ-θϊφ·α½kLρ‡umCDΧτkΘ―τcL»–ΗQ°½·u–‹KΈ&h™££©γ¨λ_Ϊ?ό_ώ
α¤ώΣv‡ϋ?ώΠ¥ργLΣΦΣΓή&Έhl΄ί‰φ¶1‘’ΝVή1έL—vψλβΫLπMόVΫΨέjVφ6³ήί]άEkgikMqwqq"Ε΄F“M+:¬Q ,μ@Uc€΄ψ$'όoGύ΄mφ‹ψσ΅‹ΏΝ»πΧ‡u${o†zF£n¦φVσ#_]Ϊ8[ϋ™U'ÒΡΫO8nΛΙρ\b²χ„½g¬Λ΄­Ν²Υ¥ªςΏ]{£νxAγ~Ήe*ƒW¨ΪΊIΩ-’Ϊϋ[];ÿ
@ €η9ΗUγσGCΈ"•XηΟ#υύ=?<σJNrέδd·¶ζ£G~GιΨσΪΏ²»νGΊιΣ®ΫΫCυ•ªΧησ³ÿ
/N›#’ψΫ<βΒ:Rϋgµ~W…·ΐsΟPAφτώΌΧκ_Δ¶Ϋΰ/ϊjκLωχÿ
9ωdXϊ¬1Σ‘μ~½Ου­ ί$<Φ½χZό―~έΡQÒ*7vMί¶λςcΫΎ›±ω+ωΉψΩψ‡γΌΰηΕή$=;^πχϊυλϊ@y6¨σΑχΙÿ
ΎµόΫόIbώ>ρ³dσβΟ^ΊΝΰιλΟγψΧήπjY«ÿ
^£ω«Ύύ=πΌfÿ
u‡ΪόÒω{©μΌΏαΊ/όw8π+ΰ¶©j\γ#°ΗυΕ|PqιόσΗεÿ
Φ―µ~<¶ί©jzλ/`9όxγy―ς
#vγΫkυχiy_ϊGεµsnϋ=·Ωyiσκ™φΟόr'—φού–Ρ9'β¦ΓώΩι:Μφ
„φόστοώΟσ―ΰώ	ϋ{~Λ®FBόL€ϋt=iAοΟΝώq_ίΑ$S}Ζxϊg―®zΧΝρΗEκύΧeέή+πίΛ^‡fi¶υΊKΟOΡJΒΡEσ);+½zυΏ―Λρ=
Ά(wÒΞΫίKίϊυ0sΠώ\Χgΰθ—wvΓύcΤΰτRIόW‘Ηµqχ[θxυγ§γ^©΅Ϊ‹M6Φ20Ξ‚Y9Ι- sξ3ίO¦Zi΄όΎZΑÿ
†;πωªσ5πν§¥Ώ―O­Q\“zΑλuύh}Ωz Ά+5k«χΧÒλΟϊόQERI%kκµψΊΫξΏα QE@QNΛϊ·—―υ{Ms…?‡σύ)ΤΗPΓ¦j¬“ΛΟ·Wύ5bd΄^«ώUΦέG“ΠuηΉηÿ
Φ}}zÒΣG^€qΟ<ρΣπΑΗ¨4κjV¶–Ρ~KΟΧWώe-—ΆΨ(ΆΏwό

(ΆQ@JζόS.Ν1“e‘dw?§SΑγπ5ÒW%βό›;eθΘΟΰ=Ίÿ
#ΦΗςΧέλS›νNOΙωu]―S„Ά+ΡZςΩμµ^–ώέΤωΙ[_w¶Ώ/ψm?¦QEFaETΉ$όΏα­nϋλÿ
{εmjυ²VΎΪ«'ΫΊ_®Ά*
(Ά¦I»$ύWV®Ώ.£NΝ0Ά(m+hό•ΌΧέΣ­½Gfοª²έλε}υooΑEUQE
QE
QE
QE
,Mµ³ΟΎ;NΔsz§ ¨¨σωRµΪΎ‰έ>ΟM*p”eσ&ZvwMZΟότΤόκψ­ÿ
Ϊπ7Εÿ
ώ,ψ—®όEρ>—iβBίP—Γz&¦Εφ[„³΄µΈuΥ.Τ’™-Ϊ~-ΖÒ™ψ®‡ΓπLΩ_@
Ϊ§‡ΌIγ	Υ@2x“ΕZ”δΔ½¦’ϊT9άΈ9R ϋgΕ~2πΧ€|5ªx³ΕϊΕ®…αύέξµFς]Επ—y¬p[Β$–yJΕnΔ)ό―ρηόwB±Τξm~ό7ΈΧτΨ¥dWρ¦ϊ_Ϋ#BA>Òε†'l•2άy
‰"ό£σ,χαοβ%Ν°ΨbλΞU+EU«76¤η΄ή²{΄—ΛSϊί€s¤ΩEƒσ,ÿ
”e”!†¤πΥη„ΒaιΣIF“®¥ΞJ)h¥&Υ΄κ~‰ό6ύ~όΌ½Τ~|>Πό#¨ίYÿ
gήήιΙrnξ¬ΌδΈϋ4σάάάΙ$^rE(άΔ†Ps’kΦ‚O\ηόυηωcÒΏ6ώ
ÿ
ΑK>|DΦ¬<1γΝo‡¶©:[Yj’j)©xjk—*ΓuzρZΟ¦Ι1#d“Ε-¨<MuW?¤ι$I,l$EWI†ΥςUΥΑΑVJ‘ΤskκΈo6Θs,°λagJJ• ιj·‚Wέχτ»ιψΧ<β/η2—α3*XόBΣη«υ•{Τρ-Κ5d¤ήώHuQ_H~VQE
QE
QE
QE
QE
QE
QE
ώ·J(¤ΥνΫ»oψ?Σÿ
ΥµBλλώqQΙΒf_Θu>Έ©j9>οΤγσΘ¤ÒζOkλσVω~®ÿ
uEΎhωIY|ΡιΎΗφ5·LαΏτ3ύ+|tι:z~Ό…`xtΔ–Ψϋ7ώ†qώ~µΎ9ό³ύkσμΒίZ­m½¤­ψ¬εΏξm-ξ~J*ÿ
=ΙΘΘ>ÿ
ώ®ψγωώ5ΖNÿ
?‡Σc½<±#@κz½{vΰsζΆnτ>ά~Έώ•Δµiw;V­.ηό\ρίΓΟ…?<ciυο‚όβΩΩέ[k«­D»Τ­ΰΈ1λ²ΐVL²«¶ά3όU~ΙπuWΖΟ~Τ
>~ΠώxSΰΗΌgiΰΏψ‡ΒOβ$Φό.ϊύίφV‹βwª_Οjϊu§-©Υγÿ
Bk›„–/ ‡ώΚΏi”ϋ9όwΈπoβ@>ƒώ)-YΉι~Zÿ
ν#αΟ‹ΌM¤xγΖ>Ònµ=α½­½γΛΊmIΤόC‰e¬Μ€‡KDΦ.μ­¤»@Λm%Μ.ϋQ‹¶α,£	SΖ}a$θΓέnV»·WΥ_u®·ΣDxΉΞ>¦TT4§Λ+>jϋ-ΫνΥ³ύ£―u%ζ¥fΡΜKΈΏµ}Λ$rªΪ=Μ
ό®’
¥O!χ

pώ+?ΰίπ\ΫΏφ―ÿ
‚ΆψOφ]ψΏ®|7…·ή(ψ·£^Xxkΐθ:”¶ώΣ5Ω΄o6όκ7­Ύ9­-ήw‰#YΪ,
ªN\?ΰ·αύµÿ
`λψΟ\‡ΖίΩφΓώ—Δ%Ί—~§«ι–ϊt£Αή*–6w–hυm(­®/›w›¨Ω^dοlδgώΙ"θπ^o	ΫΓ/Ζ?Z`Ο
¦HΌOjΓο!zηδZαrjTgZQ›dΰΪΎ¶j);>χ^—µξ1σ«³j2©R*VVΣKί[χιk―Ώύ7AΖNF2ΉΟl°>ΞyΗnΖκN2zGPH9ΐέάηÒΏ1ÿ
ΰ«πRί‡ΏπLΩÒϋβ·4Θ|]ρΕ73xsαΓ¶Ό6Ώπ’ψH³φέYΤ‹oh¨Λ{«O
4ÒΗ¶Φ’Ξ―π΅wÿ
.ÿ
‚γώέ,Χ|cπgΕίµ‹mGΏΉΠgίΨψKΒv M2YNϊ%„ϋ„Q΅
5KΫ‹Λ£!Λωx>Ζcª7;I5unΦOewςκuγ3<>J1|Ò²½®ΫΪχµήχ½ΦοΘÿ
NE
ρ‚O8ς‡ΫΰΥΰµ‡ΕGΰμΓϋ@|]Ρ®νlµΟ‡?ώ!ψΛC»Ό9ν΅Φt
κz—,ΠOn#MFήΨΌ
Κ£`C•―βΧώ	Kÿ
ώÒψααΩ«ώ
z5πW<I€dψ™­θΡψsβ/Γ_έ^2ΠψΚ;hm Φτ…ΤδΚώYμmu-Y®ηΈΈH±ύ±ÿ
%|$ÿ
‚ όI»Ήρ―μΕβ/ιÿ
±…~
άέόmƒΓ4―θ&{ΫύIυΨµmκv·ώ!³ώΐqyiΠ\ΕxaΉs΄8j®J–&PεsΌ―(µxϋ¶nΦ}ο½Ό?µ©ΤΓΞt―Νέ·ΡυKΥ=ΪκΌΟÿ
‚ΑbΏn/Ϋ³ώ
§ό*ψύρΓϊ§ΓΉ~ψÿ
Δ‹αΒzG‡-›ZÒG]:ι§΄Aq7“\μΞς™δ2fTΫύ¨Η28ά…Hΐς=H γΣΤÿ
 Ψφeύ©ÿ
jΪHψ[ϋ$j—z'Ε;λθΦmΌgwπώ?ΓΊzΪ¶Άχή ³;Έΰ‘ε¶νR9ώΣΉ…•I―τ”ÿ
‚0ώΛµμϋ'κΏl/Ϋx―βÿ
όYβKRΧΗwÿ
Απ¶­gΆΗ¦Α.»©,w1΄wV·Ϋ,J*A+ªƒ+*ϊ<Y“ΰπ4©Ξƒ©ΙΣVζ—5“ω]mm“Σ·IΦΔΚΆ©4¦Ϊ–½,έ­¥­oαϊβKΐηγ·σΟΣΏ½~<ΑlΏ`Ώ†Ώ¶ÿ
μβλÿ
k%ΠυΩΫΒ?>/ψ_Λh¶χΊώ•ΰ]Fd±Φα»¶Οa9ΣmΡΪ	`%iJ¶ϋό+ΗU
ϋ‘ΑΟΏ­|ΣϋeΏ²7νI»•ÿ
†wψΞΨν‘πλΔGϊ~ς+γ²Ίά3IFΥ©κÒΧήJΝ;§ΪΦΡ-l{ψ…†©u«§;oΊVούkkδέϋ~Κϊ§ν™ϋLό)ύτ_iήΦ>)λ7Z5—‰5kυ-;MΫM½ΤΜΧ6vΔΡ•²d&&¥”…cΧϊz³ÿ
ƒDΎ00DΤ?l‡¶Ρ‘Θ°ψs¬ά’A
gΏς'Έδu―ηώ	ΡϋRψGφ8ύ²ΎώΡ5ΠµίψgαΏ¨jΖα¦²ώΪ»‚οHΤ4ΨÒΐjSΫY΄Λ-Τe„³Δ«wΛ0ίΨ>©ÿ
lώΘφvÒK¥ώΞÿ
υKα,-ηΊπMv]Δ'uiΧ‘b>FNF9ύo8ΔζTύ‹ΐB
5Y*qΣH¶υW¶―Πψ·€©	<L¤κ:’/=µΊ²ίρωλsνΏψ#ΟόUÿ
‚\όPψ±ρVψλeρuώ&x7EπΒXZxAό8Ί<Ί>©s|nΔςjfβ;ξΪ=†8ΚΥ‹08_ΩOί΄―ΐ_ΩoΑÿ
hΎψWΰψ%Η«x»X΄ΣEυΣ)t΄Σ`–UΊΤοd
Ε-,aΈΈe,Dπr?f―ΪIύΆΏf_†_΄΄^½π>…ρΐΏΓϊΝύ­νξ…¦]ZK|_κ±Εi4±A’g51eµσ)ÿ
‚‰ώΥÿ
ÿ
ΰ«πPΫÿ
ψcPΥµέWψ—ΑΏΩοΐ"ς_μ=HΌ:ν­m ΉρΜSx‹ΔΟ$W>\³=­…΄Q|N.©bkΧΔO–+{YΖ
-·k¥έwΡφZ3θkbiε”©Σ¤›sIΕ_^Λ^·¶ΎZοcϋh½ÿ
ƒ—?ΰ”–ZψΡβ·δ¶&ΡόB|Zg!ΐΉΚ;™lΙeaq¬‘Λ©+Ιύ„ύiO?µG­>$~ΟΏ|#ρSΑχGΚmcΒµΎ ¶·Hª'°Τmγqu§_Ϋ91Οiy3Η 
Θ9ώ8~!ÿ
Α§‹αΩs\ρG‡Ώh}w_ύ£<;αK―Ιασ΅X[ό>Τυ‹;I/nΌ9¦`f1$™΄µ½ΈζuYd…S(??ΰ…¶ΔΨ—ώ
πΟΓ3κ:†›πογtο‚ÿ
Ό=ΤΡik}¬κKαύ[ΕΏrχ†όC$1¨ΐ™­Zς	έΣΛφΧα¬Ύ½
’ΑVu*RΪνko};θ―ι³9©ζυ©Υ‚ΔSqυΎκW³ω5~ΧOο?ΠΛώ
ÿ
ύΏΰ›π/ΔΪ
Ν΅όAρUί„t%πf‰·xΊ¥¦“.­!Ό†[λ†Ω­αdYQ¥s tPΩ®ώ	Ωÿ
?ύΏΰ¥ΊGΕ{ΰγ›…:·‡τo·΄HtigΊρ%΅{dΪzA{ηE:sωΫό¶S$AA%Ώ?ΰξθ…Ομ§ϋ.ΚFD_µU,%πeω}D`tιΫΌΓώ&‡¶Ε®>EρηΒY•9σ|3β έ‡Cης'¨σ°¨¬΅γ¤¤κΖnέ_™$νς}Σ·mΊcUftθE§	¨ΞΧ¶—§M΄Oς²?΅Οψ)―όSΐίπLÿ
€ΎψλγΟx‹β&“β‰:Γ4OjZv™¨[ήk:/υ•ΤmIZήK{xό<ρ<
Ι#µΪ21ΨΑΎvÿ
‚Wÿ
Αd>ÿ
ΑQόUρ“ΒώψEγ†Ηΰφ‰α-fϊϋΔϊΞ‘¨Ε­'‹oµ›(m¬΅ΣrΠ5φ<’Ν$ςβx–4Θvÿ
ΑΨH$ÿ
‚sό>nΓϋOxΗ7x7β4g§ |κsΤzώtΑ΅*«ρφΨdΐΗ„~)#©Vρ9lη†c€Η^µxl›<γ'Φ…IEk{¶Φ¶ξ»uΧ®΅‰ΗU†e4%ξMFZξ›k[ξΏ¥ΠϋCώ
#ÿ
0έ~Ζ_µ§ΖΏΩWΒί³§ξώkϊO‡ξΌk©|F—M¶Φ.µh!•γÒmό;,¶e“YkϋBs#Ω³ξEύ—ΰεÿ
€7ύ“ώ1ώΠ΄„μΎxΣα·¬<!ΰÿ
„ρ&ρ?Ε)υmjΪdz–”mQn–ξίWΎΊ/§ivΦÿ
hΈ»if‚ήOÿ
ƒcΟΩΏΒΏ±ΧΏiίό"π_‡>9ψ³γοΓγγ_‰:V‘Ώ|PΊ―ι²®―© 2Ξ―’Ίο‹hIRΚ)_πJOψ'??ΰ¦?΄¬μ<Iƒ<ΰύ
xσβg‰yΪ†αHuK,ΩhvΜΕfΧµ‹ΫΈ­,ΰ}Φ1=άώgMν`2§–ΌMZr‡³j3oDέβνuφtΧ[n/Γγ–2Ώ΄IBΧVRλ¦·κυzΫ΅ϊΩρ—ώΘύ΄5ÿ
έέ|ψGπcα·ƒ"™†£xOΦό{®Λl²3#jΐΤό=d&’›Ε¦—
Ff@ΣaM~όÿ
Α?ΰΉπς­oΕί>1xKCπΗÿ
xsώϋψFβ?
ψηΒ¶χvΦ¥ξ—gqwy§κΊEΝν‹jfζxΪώ)νd	βOΏΰ«πC/Ψcφxÿ
‚eόjψƒπOα΅πηΔÿ
‚ΎÒ<e§xώηYΦ5?λI¦λ:u®Ώk­=Υμ¶Wjz}εμΎRZΓ­ΐνΔKZό
ÿ
ƒi/ξtψ+GΑνέ£Mcαÿ
Εέ*ο
%³ψ.ςχcdδ΄Y@ό“Κ)κ2:κe™&a–bg„£ΤΓAΙΤ·½t΄³νuµ—FTqxό>cF–*§5:ΣZ­­dΊότσϋÿ
ÒγχΗ_†?³_Β/όnψΏβK_
ό>ψ}΅έkΪώ­rΩu·¶Κ³±·Sζ^κ:ν†g	3έήάCo
4’(?ΐονoÿ
NώΨ_|k«Z~Κz„~|2µΈϋ\πώ›γk(μ°_j“kmMt!΄ΣμB¥”^LWΜ?¤_πvχΗ―ψoαμΩϋ;ιZ•Ε–‡ρ7Ε#ρη‹-`’HγΤμό–vΪ=β£(Υ5]\κ7‚κΞΥΗΜ€?ΰΨψ&Gΐο>ψϋb|wπN‡ρώ_‡Ό)β­2ΣXπΞ©ize¥―ψΆοGΤ"ΈΣυ=Q_Q²±ÒΪς“OςnnΆg%N‹'ΑarΘfΨσ9ΚRW³χSJ)+i³»οιwΣfκc'‚Βi(µ­Εήι½Υήκϋ~ε—Ζοψ/ηνUϋV~ΖίcοΪOEπξ> Οα‹β–‹i„5x{ΔZf¶Φƒae&‘­[ήύ…ΆYm›LΈ†VL¨
WΩΏπiΙΩϋtόf
7	fνH•aγΛψΙν–
pΗ ΄Ώπr?μGϋ2Aÿ
ρρΖÿ
όπ‚>&ό'ρW§ποΌαΓ:„Ίn»βKTΡυ4[;EΏ±Ή³Ύi.όΕ†x•΅PΫ~/ÿ
Α¥Κ%ύ»>6‚OξΏfλχÿ
ζzπβΟ¨qΙΟ΅$υφηW[!Μ%…"O–ΝκKςώ–y”θβifΈXb%Ν){Ϊm―άτwvΏ΅ώ…£εΗN
ό
?Αsλ†`sÿ
λΟωÿ
λqΗ5sΐόιΟ?z―ωό½ϋύ0OγςV“υgά¤'½ϊ§ψφάBΐ}}?ΟoσΨÒo#η±Η==O―§ΧΦ
Iτ=qξ{zΗ>Ώ\…
lώΌΤg`3ΖsΧθzg΅οΗΦ‡#Ζ3όÿ
ϊώώψγ!k£θίNΪοΡΏM~CθΆ
›V·Γ¨Χ/Δÿ
j‡§σλS‘‘ύ=.j 9Α―ocΟΧπÿ
λPdHFTqογ¶sΗ?‡nΤ(Ζx#“Αντυ>Έφ§t¨Ϋ®\πyΰρΣ·§γιάΜp=ψΗηό½}ª«1$€yάΨδr0zc9υο9οN|‘ν’ c8ό1ψcσoνCϋR|"ύ‘ώjΏ~/x†'L³W‹GÒα’)µίk½¦‹ i―$O}ytΘUd†Φ"χ7“[[Dσhαλb*F(9ΚRQQmήκΞΧθό‹~ΔκΣΓÒ•Z²P‚MΉ=,—―ιδvΎ9ό3ύΎkÿ
ώ,xΗΒώπύ«M=Υδª³ή\0?eΣtΛ5&γPΤoeK;XδΈB8Ξ2?ƒΟψ(Ηό{βGνΡρuy―|/πWΓW³'€<
—
$‘δΖ<KβQ®υΫθΖδ‡2[ι09΄΄i$k»»®'φχÿ
‚€όWύΉΎ"I®ψªςγAψ{Ά\ά|8²»‘΄}ΞBQ//QJ¦¥βv-ζ§,HIg‚Ρ-­όάrAκN―ΉΗτ88γΧλά3ΒRPΔββv”΅YAiw-ΣoVόΟΛx‰g°Ψi[9ΆΏªΊλ}4ΊΫρ-“‘» Nr@πΰ
8«–··ZΪ[Λuwu,vφφ¶ρΌ·3Μβ8΅†$ςΙ#°
;
cZώπΖ½γkLπΧ…τ}G_Χυ«Έtύ+HÒ,ζΤuBςvςβ¶µ΄¶ζgl…EBKπ#ϊόÿ
‚RΑ ψ)7‡ΏhΪwHΣυO‰λ:§‚~ήAεΓωδ&KMk^-ζΪήx®$Ϋ%­‰lτIgigΤV1aτYΞ}…ΛpσS”]UvΊI'¦Ϋ+ίΝw<,›(―™Wξ¤©9.jn®―oΒλΦώmÿ
‚DΑ#l~Ψxsφ•ύ¤τ―~.jΫλ>ψªΪΗ%§Γ‹IUΛVΦmξ’_Λ¤Ιm"ªθJκ
D1·ώz·
η©ά:ΰuΙ81h‘‰Ζ8
πIηΣ®HΗ'κ0yOέ9=yΰηΓ―¦O­~ζ•σ,DκΤ¨ά\¬µ~κήΛΆWÒύ<ΟΩrμ·–Ò(Ε&’ζmZξΚχςvΧEΣ° Ψg'ÿ
_®1zzσQ`‚29ΞsgΏSΗÿ
^¦ÿ
?ηςÿ
<TmΧ=ΊτΗaΣc©ιτς•ΤµiίV―¥―ΡκφΏo]BλkkΣδpίyψβΜ±―ΙΟrΗόσ_•Αΐν…ϊ
oσν_©ί›ΌXAηϋτzύλv<υ³οΕ~W€p>€ΔwϊΧD|–VΡ§ε¶ΚΛΊό{—5Χ—]Z²ό]½	$]ΐγoΝωυ«ω³ψ€sγνβύuk¦ό~υύ#Ή"6γ ƒΘμqίΫµόΪxπρ·‹MΎ%Χ2:g:•ΙύΙτόE}ηέW«εµV²JϋϊοΫξ>n΅‡^rό—O-l|Ορμÿ
Ε£¨:­ ÿ
Ηf?—n8υζΎ+―΄~=¶<€ηZΤoυΈύ{kβΤSΘχ8ϊÿ
ΦόzϋΧλ8t4φvν½­ψ½?ΰ—ΤZί»Χuu§M}~οSξψ&j3ώί²ςψΉP“τ]\cϊ(όy―οΩA³λΗζΗρλ_ΐ_ό$νύΎeζ8ΐψΗ›BΦ—Μγÿ
Χ_ίΓu?Sόλη8‰kE­—7]v^‹s³®¤έώ+­4vK―έÿ

J(ΆΎ`τ(¬ηΣ¶·τΠiθόΧκ‹6P5Νε΄
	σ&En:&ΰ[9ΰ| σƒτΖHυπ΅@P0
 Η8zWψVάOy4μ>Ke
¤r<ΧΞ	P§¨8ΞGZτ.ΈΟ\ώωόλ£Ωz»ζ_ΙΜΦ―τ¶λτΫΛpΆ+zό―ΫwτΦ§¦QEFήOτΡ®ΏΧδQEήΧv
Ά)
QEώÒµΏ®–ϋ€¦ΉΐτχΟΈύ=OψΣ©’
WqύHÿ
?η­Z»o^ϊÿ
W&[k²jφίϊ½Ώαμ
y €;υΑ#ίπ
gλO¤ΐΙ=Ξ>Ώώ®?Οe«I{­λ¥ύ-ΛoΧοΩz Ά*fΣΫϊΫτ^δΒ(¨
Ά(
®KΕίριiΧώ>yϊμoι]mrή-±Ώ»tΉηΥHυχτ<ΧE%kuΎªΪn—υύXζΕ
^Kυ[ÿ
](®®VφKm5Zώ?τrλψ0Ά*µiFΝwΣEώzjόνΧB9½η+_ϊ^_ΧpΆ*e½»’υΧMuf‰έ__ÿ
_ληpΆ+c
Ά(
Ά(
Ά(
Ά(
£?αϊfiέd“λιΟηΖx>ΗΧΣT―κμMΗ4MZΛ@»Χt‹MwRIτύγR³‡VΎ‚ωΣYiÒL·wQEƒζI2$ΖW5¬ΉΙ'ΟSΙύ?υ=ΏΪγφAπηΔψ.ομ+ρ?WρΟ‹mνυ„^5ρΜ¶½XΓ¬|}Ϊ%¦™:2ΛNΧ\ϋV»m^ζK90Θ.δϊ)υÿ
υώ]k®½%S’έ―ΒΛξίΝλκg«΄ήΝ^Λt»?ώL(Άδ4Z¤ϋ…
dΩ 1ΟηAθ{ΣUπA<|ΰ}3£=	ΰς8ΙλS%–ªχ·£Vÿ
ƒψ?ΔΏ3πÿ
ώ
ρcRΤΌsα_ƒ³Α ψwE·ρo,γΗ¥­κςάΕ¥-Κ΅_54λY$…]J«ίΘαr“# ’Aη“HΟlrqο_§ΏπU‡Ϊ§‡ώ2ψkβJZLώρΏ…lτ†ΏT³ZλώiΡ¬§—”I.4λ›Y­‘¶™V;­ ωNGεβL­Π©Ξ
’ήΫ0s2F0+ψ‡ΕyζO‹±ÒΕ9ςΖQ†Ι>EE(Έr&Ò΄›ΏkϊοίΡΓ4|αΏμW…”κaω³
΄ύ›«υι?ί{[{ΞIΪάΪΩ]l\
¥@b
.}
9λΨ q‚	Ώ£ψ'GΕM[β7ΐ84½~κkνWαφ±sα_·\»K=Ζ”[ίιY\—y-­nΝζ$ω6‘I$ΧσgW’1’Ο^3ΙΗ@G\qήΏΆΟψ&ÿ
Βύ_αχμÿ
·®ΫΟg¨όGΧ/<]Β”’ίHkx4έ™
ύ¶ΚΝuΚΡήG_Wΰ…<Αρz”άήx9,F²φ|ΡiE½RO™»uµΟΙώίκά<2ΒΗ°±ΞήiEεΏΦ~έΗνς8οÒφ½Ίώ€§2qIA#?†yύ/κ+Δ!Ρό#αΟx³Δ7±iΊ…τMWΔZζ΅9ΫΆΨΟ©jwr²ΪΚΪy
IT8€υ΄c)Ξ0Ό¤μΎτΏ]ÿ
3ό\“»oϊΠΩ¤ΟQώzgόγ5όKόQÿ
ƒ―|}oρ{Qƒα7μέαGΰΞ¬=¦|]―kΎ:ρ‘Χ–u'ΉΣLΪN…w<¶Φmg©¥§±ΛqrP“ύg~Θ?µ?lΏΩΣα―νπή;ΛOόBÒ®'m+QhΫRΠ5Ν.ϊγJΧτ@ΔJ5Φ•«YέΫy&…"ΈEU(ξΔeΨ4#RΆ΄d®΄ίE¶οKω©®e4ΪΊ½•ϋµέ.Ί―σϊn(®Β( ( }1ώΟωκ΄Q®zλ·ωώ
QE
‡·ΧςΰΧ¥Ά€
(Ά“IΪύ6
¨δϋ£ύεώu%G'έο/σ©›µ“ν“Ώαω?βζQπθÿ
‰-²ÿ
²ΰsD­?Ξ?ήAηΫση?ÿ
=«Γg:= φnÿ
ν·ψΧDƒάυ―ΟqΧϊΥdÿ
Ώ[υϋ­Υώgλmώ¥‡MZΤγψΕuΘυΙόΟΓΠΗc‘ώ53ίo|φΐΟωΰΖΌ7=ΈόzzΧ!άxΟν ªί³ίΗlaΎ|IVΟ7ƒµφλΗΣΧ‘ώuÿ
πn'όρƒφΞψΣπβ^o―ψγGμΡρ?Α%Ò.ΆI"ΌΣ®υ;32ΔXGw`άY] —qAs$±΅θ—ϋJώΟ_
κίώ Ζ9ΰ3ψWWR8λΟίΧ_ηµÿ
ΓΫωπS‹iν|+ψ•&ΰ¤ρ%Ε@~ξdR02[95χ<+9SΒζh½tΎΚ–ϋιΫ{½9ƒ\εΏ5EσΥwΥΪÿ
ƒΥ½ϋ#ψϋΗ?πCοψ,gΎόKΤ5;‡?π™^|$ρνΝΣέZiή+ψGγIDή
ψΠ‘φ{“¥Α}¤x…/Z7xZ¥m™0¨ΰ60iπpΦ‡¦ΪΜd΄‹φύ΅’	A#Ν΄ΗVr‚Ϋ²·Gρ8(¶ν"Ώ ?ψ:φ΄ψ·πΓ·€Ό?ζ|EψΔ©tψ7\λ_µKΝ«¨y!Zcΰ­Zq~·Sy²[iw·ΚvΓ
”ώaΰƒ†±βψ,/μ­―k—³ίκ‰<g=ζ΅tΜσήKoπΛΔq¬“ΘΨi¦x-ΣΝ³I,d‘…Ψύn]Z;Vw΄…7νe&Ή,z>·ΩyΎθπ1t+αqt"άΤ%QJ6{'%³Ω%fΊθ΄σύ(ÿ
ƒΉΎ jΪΟνπαΔΧ2ψ7ΰό$6¶YRM_Ε0ΧaΌΉtή°Ό«m£Y@”©r0‹ύPÿ
Α>ψ/ΰχόφSµπ®•aiyγ†ϊoΔjVπΖ—Zχ<a$ϊ­υώ΅pª%Ή{xe‚Β+0·΄³‚Δj+π‡ώΨύόIβ;ΰ7ν›αm&σQÒό)eª|ψ΅5Ό—GΣ5[ΘυΟjΧ²Α`5―ι³NΡ”KBΖ2κdωό;ώ+ύÿ
eÿ
ΨϋΑΏ³_νiαΟ6ή"ψ+¦]xαχό΅Eβ};ΖK››έMΥ":…•Ξ…®iBΰi2O2Λ¦έΪEmt.mδσα^*ΚUςϊΓ7&΄‹jΞ-o²V¶ϊ/3ΠJ±3H»Jό®].υίΎφWϋΝ/ψ9Cα_ƒ~ÿ
ΑNΌo¨xΒΣDΎψβ,τψΦΪ(|Y|¦©jQΕAm6 Mδ‘ 7-ΐc$¬kϋ1ψ•βω~#ÿ
ΑΌCβ}jIΪmOφ¶ΊΎΈΈc%Δσιή
΄§™ά|Οs5;±mΩ|³9λό(όYρΕοψ-ηόυO
ψ#W/ρ‡ΕώΠ4?[yÿ
ΑΟ}–Òm[Δ:”1ύ›N‡MΡb»Υ5‹βΒΥ―¤··Λ
τkψλϋ5[άÿ
Α<Ύ*~Κÿ
¬όΨΰύυÿ
…ή²G‘ήζ};ΑÒiΊl Μ-έΝΊa°―(bFγlΒΌ(ÒΛγQ―mΝύεw¶Ϋ¤ΏΥηB¥zΈ§Υ.I$”tΎVwΣkο»?†ψ5»lπRΫr gώγβC°,w.ηΓƒΏ.ί8έιΑώ¨SχHΪ βΖ
ϊs‚;ςFÿ
‚v~Ϋ~7ÿ
‚aώΨVΏΫαΩρ>«α?ΕΏ|kπλ_ΌΓw—Z©M?VΣΦόΩέ\iΪwaΚΝ%”θd¶0Ις9jÿ
Dψ$Gό"Γώ
‹πΣβÿ
GΓΈΎ^ό5ψ…§xb
b]vπψwUπν¦¥¦κΧϊƒZXΕ$χ::ε¦mνcEb6΅K*§:±§‰„γ*q£Χ2rnπΩ'}έ}“:²±£ΟBtδª9µΝkYyλθΊ+Ψύz€ª21·{cƒΖ=x―›?ltσd―Ϊ‚>Ò~Ο?γΡΎψqυΟκ{σ_H7
γ‚G9ϊsΖpsΓω—φΜΊ[/Ωφ¤»s„·ύΎ1HΗ°ΐπ$γ % 9―ΐkΓήΠj΄^½Ή£«vι®ζ}"-αζΊςI-/«ΫΛ³ν}7?ΚΣώ	›ϋ,xφΞύ·Ύ~Ξ_υ?ι
ψ™―jΪ~½α{Ϋ}?_ΧLπΦ³®*ιχ·vz΄Λ>R<–sµrw/φΥkÿ
¥ÿ
Α7όΈόο~Ρχi~'iY9
1+„#\‘‚0 uμkω:ÿ
‚D&ÿ
‚®~Η ΎΟψ‚Y6+9Aÿ

ÿ
Ε-ΙΑ	–P8$ρΣύO‘p‘?Υ¨8δcχΙ9δq€1Ικ@βlσ…XZxJΌ°–©ςΩσ^1ΣªΫ­χ_#ζ2¶#RX6ύ¥γ}5ΣπzhφΧΤωR?ZΐΨ›[ύ~K¬\θΏώxΐ—XΊ†χ[j6Zs_^[ΫΩE=ά’2+Ν¬!Ϋ““ώ^_πIνoMπ—όχφIΤΌLΠ[ΗmϋEhUω»ϋ¶·ϊυφo$Ϋ”αΆΎ»ƒ”g|g‘‘ώ·F’Α$ªΌSFρΚ΅Υ‘Τ£«)0efΞ“θΓpηUÿ
ÿ
‚ώΣÿ
³ονγΟΪWφKπ‰~'|ρΟ®>#ΨY|7΄½½ρ―Β?]έÿ
kj3hΪX“Tϋ¦¬dΏΡ5­9VÒΪE¶έ$—‹…1τηO‡­8Σ«‡»)4““µ΄Ϋ}]ν§moΧΡ°ΥiΒρ¥-RMι¶«­µΏD΅_u­'ΓρG5{«{-#Eπζ³«κW·RE­½…†quss<Ò³Η
ΑÒIςνRNZΏΙ;φ~ÒuπRΏ†Φ
¶β‰¶F•―h†Ι	™4νKβ»ψKΨUαΣ΄S5όª#†FΚ„5υg?ΰ΅πZίΪ7αpύ‘όCβΪΕΎΦ¬΅π­α­+α«kγι"¶:|G¦ψbvφΖα6Ϋή,—=δ'ΛΏ–β6pίΠΏό#ώUρ;φsψ£~Ωÿ
¶kαΏ:.™wΑΟ„2Mή­ΰϋ^Φ[+ΟψΞβΚm΄«‰τύ'ΓφςάK¥‹«‹έJhο„6V~Τ<£©R­9:‘qI5gtΊ»ξΌ­ζyυρξ8Σ”\\›V·+ν}οÒÿ
=[=ώά‰Σφ5ύn
»%·ΗρHW 4ΎΦA9
Ωΐx§“^ÿ
‡ψ“LώΔύ΄|1%έªκ¬|$Χ—Ϊ"7dtίY,ÿ
gίζ­Έ–6C>ΡJξΟ_ΪΏψ/μ-γ/ΫΗφρg>i2λΏ~ψ£Cψ«πÿ
@•/|C} ¥έ®«΅Y+IIy©hΪ…βZFξ·QΓf
?Ξγα‡μνÿ
8ψ+ρZko‚??kο…?f·}ε|ΰ‰ΎΧε³Έ™]>βκΧEµ‚κΒI’7σd[5}’E"γ{NWSΙq87ZκªΌν¶ΊεΝuk_ª_Ò'O†Ν¨V…9Τ„h¥nVΥΥ­ªόϊ·«ήίΧ_ό—ϋD|0·ύΎ~Ν–/Òoώ*λί4Ώ—~±½‚λTÒΌ#α½Δ6­kΠHςi–ΧZ†―¦Χ«Ϋ¤ϋH¶‹K8Α ²A??n'FEΈ_|ΔD!µ—Qρ»oΔ3F&· ΈCdg$ηβΑΈπPί>/ώΣί΄OυΛoΪη@ώΪψyπΔΊΈρ—Δ―κ©,2M<C>¥sgαΧΈ²Y΅Òtx®―/cΊp/ÿ
³"‹μοΟΑ6?ΰ•_πVΟ‚¶Gμÿ
βΩ>|jψMΰ-?γΓ­WβΉeγ=;ΒΊEΟ‚4M~ήοVΔ¶ΪW‹#>#ÒΆ³7Μt««[ΥO2ΗnζVΞ²††O[	]'VςSqNMΩιgk¶ϊ7n½xιζ0ΔΛ7ÒΊNφMjτΣηΣΎώ’ΏΰιHΥΏΰ—Z“Δ/Η„Ο©—_Cλ	πrH'Aψ©ÿ
‰ΐ­ϋR~Υ¬c―ΐ―Ψ,3γλS°pΐ8Ckϊ>ÿ
‚ϋ~Κÿ
lψ'φ§π{φsπΏώ%\|Xψm―AαΈ5}D‘τ"χP“UΤÿ
_ΏΣ4ψγ΄D.Η›'«r1"Ώ1ΏΰάOψ&Gν©ϋ|tύ΅ΌuϋPό%ƒα§‡Όqπ³ΓΎπΜΏπ—xWΔwZ†―cβ΄Υ. {ojΪΦΡΗfΎ`δ$Nÿ
ΊF,_Ρ§chN΄=³¨¥_Y+­’[ξΏ#ΣΔa«TΝ°µω$αΉ½ΨΩ«φΦΟ¶φΡξ~ΡΑjbίÿ
°ύ·£=αEψ΅ΗΕ‚eγ’>ΰ#ίτώΏΰΪΨ~Υÿ
gψΓ?ΈπWΕIωχπ.§b?½“Χ“ƒΠηύΏΰ¦_|}ϋEώΑÿ
΄ÿ
Α/…:]¶·ρβOΒΝsΒώÒnυ]*ΦχWΤDQAϊ…γ%µ¬EDσJϋWiξkωZÿ
‚ ÿ
ΑΏΰ ±·νχπΫφ€ψϋπηΑ~ψkαΏxοJΥotÿ
Ϊ5X―µΟέiΪ`ƒLΣβy'έΚ©)Y‚ΓLiΟ#Μ(PΛ³
ukF3«ΛΩ;­,ΫΧΣδτi‚­_…•8>JrNιέϋ®-·χ_μϊόπ»Δi±ΗΖ‹;+‰ό3£έόHψ{―^G{}?QΦWΓϊΦ‡φ™2z–:”qAw‡fIΐ>Wÿ
Λÿ
ΑSfΩΧαΕ/ΩCφψ‘΅|#VργόGψqβΏΞ4Ώλªi–zo΄;―Ί‹#U΄ΈΣlξ­-υ9-aΤ »›μχRMo,Cϋύ³Ώd„?·/μωγΩΫγFχρuµ«iεcΓ> ΄ϊOtiεF_iΧ$H’³DÒ@ΔΗ#cψHψ§ÿ
¥ώήΎρΝξ“π—ΕΏΎ)ψM@¦“β½CΔχ>ΤβΣέ msAΤtΙΜ7PE·νGK½Υb–PΝ+ςO+Μ2όvT°ΊΡ ©NN/™.euµόνkkdµοΗΑc0Ω‹ΕΠ‚΄i΄·VQ[¥ςΥυ?Mÿ
ΰβOψ+?μ‡ρGφKρμ‰π'β6•ρΗΌCαWZΧ|	yo«x7Β7…uϋjA¨kΡHΦΪ…ξ¤φΒΦΪΗM{‡„οθΓIψ‘ÿ
υ~Ϋ?³ίμ%ϋX|Tψ›ϋIxΐx#Α'ψ%sΰν7ZώΞΏΤσ­ΝβνSάΪi¶χS”ΦsK#"±D^FO·±gό¥αψkΖZχν•ρFψ‡γkΒZΦ‹ΰ―x5‹Oψ#Δqmaβ½gXΈM7Xρ6§¤ά΄ZΩCc¦ιqIJγS&ε«oψ4γT¤¥ον—πΞΦ	%2Ϋό4ρUμλldχ2\k6‘Ι LΊ"οδδWBΖδXL+υ¦ΥDέÒnςΣ®Ίήϊ¥mUζ/›WΖPΕ:WδΡ]κ“iοeόήkSϋΆπ?‹τ>π·ό-x5xΗΓϊO‰tEcx…φ­ΨΑ©i·k΅d\Z\Η.ΗUeά(#ΥW–όψzί	>ό.ψXΪ’kαΧ€<)ΰ£ª¥»Z¦Ά|3ΆYiυ-™έ K‘h%XK±6έΔ
kΤ«σG'µ³mΓ™ς·»WΡύή[Xϊψs8Gγε\ίβ¶»ω‘?^ύ;ύOιLGoZ•Ης^qÿ
Χυβ£ξ0:ÿ
Ώnάζ±(“jγ ίάϋzcιψMCΞ?Θλώsώ4 {7uΗ8Χ§Σ=n(U9Ιύγ==|c―P>–»·o»¥τλΣώ”QEσώsώqÒ£“ΑώO3λί―¦3ªρ>¤g“ΨδsΣ'Ò€Jϋ$§Z®Μs¤όΨnΏ/l–^F3Ηπ+M–hβYft8w‘ΒF‘ ήξς¨¨¨2s£q °ώ{Ώΰ¤π[ό‹^ψ;ϋ.O¥ψÿ
βδbγOΦΌrÒ%οƒΌq—‚β;v†Mφµ6Vd[;9S72LΚΦνί—εΈΚ΄ia©ΚW~τ’ΌbVφ²ίΏmΩΝΗa²Ϊ2­’V^μΉ›μΎ}~νμ~ƒώήπR?°ΗƒηjVώ)ψ±©XK'„~ιW‰&«¨LΑ£·ΌΦΪ?0θΪ4RΰΝwsyΐxνb\…ώ?kΫγ?ν‘ρ.ÿ
β/ΕΟ\^7™<~πµ¬ΣΓαim)x΄½M2ΌPΆ¨_΄\¶λ»ΩSΞΊYσβώ!ψΫβ‹υΟόEρ>«βÿ
ψςkέ_\ΦnεΌΊΉVfΨ­#7‘kJ[ZΔ#†ή%X£EEQ\ÿ
‡τwΕ:ή›αίhϊ½―jχqXiF‘eq¨j:…ΤΜk;;hεβW'j".νΔ|§ΧμYa2:^Ϋα:ÿ
J³Ϊ+FωouuΣ¶‡εyΞΝfθQRTe+FΏ4•Φyυ]mΨΘ#'@ΗL’yπpΗ‚pp§#§r~ΕίπOοΪφΩρeΎ›πΗΒσXψ.Φφ+όJΧmξm|αθwfaφέƒϋ[SN±ιsKtϋ—Ξς"&dύ™ύ€ΰϊΗF‰ρ?φΟΈΉπξ‚ώN΅§|Ρ®zξ©Δ±―υΈYΞ•i8	ηhΪA7ΰ6%Υm%W·Υ€ΎxαW„τ|;π¶ΰο	hΨι>Πl΅Σμ,­β]RD’8_2[™L—1–YV2?<γ:8g,>©Ν]{T¶w³ελΊµνηu±ιd)Z²|dy`Ϊj›ZΫKήύμώδΟ‡Ώb_ψ&‡μοϋhΡ ρ—ΕG±Hµο$³¶\ΊEζΓαέ'ΝR!΄°+pρ7·—’ητEΙ cΤΧ‘3λNΩ"	#ξ“ίίr{όPHυ>‡ÿ
λ_”γ1ψ}WV΄ε+»¶ήϋh—―όu_¥ap40TcN!’Z%Ί·ΟΥ|ο°Ò0Λ“ήΌuΖ	οΟψÒ(+Υz‘ΟqσνRQώΞ?­yάΪY®ΊέΎϋwVω›Ε¶µίÒίΧΘ)8θ=ύΟSωvΝH‘pύ]:ώB›^»ÿ

ο}νgί¶ªÿ
!¦›²~zVκyίΕS·αί:MΘ$π?Υν=zÿ
υλςπvΐχμ=kυβΡαί—%Oφlª	'r}NqίΥω„Γ
‚rGϋ£Ύ?ϊέΖzΧT%Κ¶’[i}m;ύΫ4υJΪθυ]µτϋΙX‚U	:+‘Χ²1?ηλ_Ν—X7<XrολGωΤ. οιώ“®&γLίΟΧσΟJώj<hωρΊώ΄r=υ¬µχΌοV­―Ω_'Ά}oέ_Λ©πΌeπαϊήχϋΦηΜÿ
Α>
„ϊΪdΐΘώή‡§Εγ©ΰόΊÿ
*ϋGγΩΑψjΟ'ίh$~
ψΘ΅Ιΐγ<}?Jύb‚ύΪ~V·§ό9ω…[.o6»oeύu#ξψ&$FoΫλφb^›~#οÒ?kΟό—?­~§©ϊη_ΐΟόα?γ?Ώf]άγΗΣ“Χ—ÿ
g―ου?Sϊ_;Δ?ε/Ξ?δuΰ~ÿ
‰~_Χτ„Ά+ζΰ¨¥r£8Θ?εΖsτοRΤf6h LXγύζδύ=Τ`ΞRΦΦΎΧόνύ_r ―$ΌΟKπΕ¨·ÒΆr¤KtΝ<…Ύρ~@F3 2υκyμ:ΔPΕγU
c
Ζ1Ζ1Η&¤®:―W½®–ϊ®ÿ
“>
qK²ό“ώ½(¬ΏWύZύ―#pΆ)φΏ—δΌÿ
ΛΧΆ(¤ÿ
―ΉyύΪΐ(¤ES―®5ζ»oÿ
ΐR7CΧπ¥¤`H {:·%Ά[]]ϊ[mnΏ«	««_ƒBrzΠvΗ―|zc=½]MζΟΗ?OΟι:guK{YτW¶―Οώ°ϊ/Eχ4{ί_0Ά*@(Ά
(Ά
+ρ\{τ‰κ¥…ψΟxν‚r{WKYΤ?hÒ―Άυ›ρOwΐι“ιΦ·§+Ι/E―ό;Χ]τσμa5)y/ςύlyH Z<γ‘Ζ=ψκIλοRWr½γΫ—Λώ·τ’΄σ{QVHQE<ªχτνm-εδW6–ώ΄µΏ_-ΊhQEQ!EPEPEPEPLoΌƒά1}
Κp3ΉqΫΈϊt4κΏ4'³τgγ―νKύ™ÿ
ƒÿ
‚gν:ΧΑÿ
Ϊ«K'ϋΛƒ¤ήΟν9Θ+ύ†;‡ηρχΊγΤϊg§·ρ#φγΤ—Lÿ
‚Ύÿ
Α$OFΎΠÿ
iν5rHέφΏhπlΟ=]σΙσ‚9ΟνΚ‚:3’$‚{ΰτ==
―K¥μh7uxς?πZυξiΈΓo…Ωh›jOοΊKυ°κ(ΆΌγEΆK°Φ$_Ο­  pxΐ9η'ΧΏγ·\Όυ¤Η¶1Ξωÿ
Ζ–·}ήΏ§ΟεΤ5Ώυ{ϊ?ΔΟ†~
ψΓΰΝOΐ^?ΡΰΦΌ=©¨ε.-.“?fΏ±»B²ΩήΪΘζH'‰•ƒ|™ώAxΗώ	©ÿ
jΜÿ
Ύ0ΪY‹CgβίΝq¨ΨΒ\!―t{«K{µDTKφ+6fgi’ώΪγ1Η_―ωηΐ¨$ƒsΠuυΟP}ΗQΑΝ|Ξ}Αό?ΔRLΣMX(¨To’i&Ή΅fΦβ{>–?_πλΗό/…Z<)b0XjΟXYµ[ΜΣN^ΖΆ”TΖΟ½ΟΛ―€ίπK―‡ÿ
υ{όWρ4µ].βΝ?Aΐιζά―{e-Εεζ­²A»ΙΉΊΞ@£Ξ³”_¨ΏΊEή£·‚X †%	QF΅(β@«h£δ@ªª
*X‘ƒΟpNzφΟ<ώ9ώTΠ|wΞ>Ή¦}sΝwe?”δT―	K	Oν¨E)MιfεkΏFϋωψΖ^$fΪ<WβsJφ΄#VMQ΅λ£hSO­•ίWΠ›‘ΗÒΉ‰>ΡΎ*|8ψπΓΔOqƒρΑ^'π.µ5›ωw‘i^+Ρ/t+ιmeηeΔVΧÒIq RrΩmΟΧυÿ
&¦Mάγ‘ƒτ#wώ\WΉJ\µ!=Ή_}?«?»ΞώΫ³»ωkeηΆόςΦψ³ÿ
‘ψÿ
ποώ
I§Α94/x#Δόa¨Ϊέ|;ρ–£«O£xkWπ6¥¤jΎ%ÒΌQβ†ΧRΤ΄+”ΠτmJMWCƒOΤο’ώΚkM)5®,n―?Ρώ	ΛϋEϋώΘΏfΗρ$~-Υό(Φ·βΟΫE-Ύ©ψ»Ε­ΞΉ―>‘o8[4kk»―°ιkr©u%•¤\ΗÒΌQÿ
5Όsÿ
ΰλί†~TΛ4	|
>rB\Ιϋ>j­δ@Awβ)Ά9ΰΟφ|ΐδPHϊdδύ: 5τΩΞ&sΓa©½²rΣMt[ο®kώYΕs>gtÒΡ.—ι―k[η―›ztΆ“‰νττΘησΟ®)~µςΖΑEPEPEP‚’	<~\}ύ1Χτ¦dtΘΟ®ΐώ#ΰµ΄?Ήύ—~>7ΒΏ?Γv|]©xWΗ±iφϊ¤ΎΤτΝ*kυΤa°ΊY A΄ΠΔeGX¥•fνSπίόnοφ΅Χÿ
aoψσφ«ψ³qρ{Ζ_υίx³Β:φΆΪε—ΓΫ›ρa΅iΊνρ²°7χβσNΥ―Ά‘b”A§ίYΪ}ªΰΑΈn¨·KΪ~7]{λ¶Ώ"[χ’M=ό•µοιψχ_¬”STυ¨'όχÿ
<v§VQ@G!Β3Σ9όÿ
\’ ”pΗύΠ?―ςύj%ΡwλmV«ξoΝoΝΝ©α‘ÿ
ko£ΞO΅τÿ
λWG\η†yΡ­{εXτλ‡τχύ;ΧG_γÿ
ήλÿ
τGλYwϋ–ώ½Cÿ
IAQ…ΑΞO_Η―QΏ¦*J+ν9xJΗΗ
ρυ;‹‹Kxo\πέέέ ®m`Φ¬.tιn f'Ίσ#YΗe
Γ«ρSώ	ηÿ
ύΏΰ¦ύ ~|aψ­γίΙαMoΒQι/µπµ®…®½5”χWAt6ΪψέC%Ϋsφ½\¬'RC/ξΐ
υϊÒ0ΘδψυώΏδW]v'NtθΤpO‰+YτΦλ·™J4κΞ©)Sw‹zµι{λΩτ9ψ/Γ?<βoxΟL΄Χ|)βύPπÿ
t‹Ψ£ΟRÒ5;Y-o¬ηIΡγΈ†F‚»NNυlζΏ?dÿ
ψ7γφύ?h/ώÒ?
.>1\xϋαΥξ§}α¨|MγΛmOΓΦΣκΪ>£ έ‹*ΘάΑύ©ά‹x…Ò¤ΚΝ,‘‡?ΈτΟl8γ―^ύ§η)γ±4£(Σ­8);µ4¥²³¶¶µτ½Ό‚tiT’”ΰ¥(|-«ΩθΏ/M‘ΟxΣΑ^ψαsΑ<πΦ‰βÿ
x–ΒηHρ†ΌE¦ΫjΪ6³¦ή!βΟPΣοa–Ϊζr²GJ°9E#π‡β'ό7ÿ
«ρο&ρ5―Γ^†ζπ^\xkΑυΛnyL’ΫΪΨjpκσιΦΞBZΨή[ΫΑTcBÿ
@d‘Ι·ε‘Ja$ÿ
υ‡§Aώ}½+JY6Q§^q³µϊι{ξ»ύϊφ&xz5η‚v¶νmώγγοΩ3φύ’?bMαοΩ§ΰΗ…ΎµεΌvΪΏα‚MWΖZμQ–*ίυIo5­B0ΔΙφg»k)2Gm5φμ1Η;‡\dΘΖJηοpΗRlΟ$ςÿ
]F@Ξ8ΰφΖQί·&³―Δβ*F¥Z²” —-μÒkf»[¥½U‹¥Nc(Σ\Ϊ»Zίu―©ωορΏώ	Sÿ
υύ£|yyρ3γ'μ±πΟΕή9Τε[[ΔfΣTΠouyΥωΊΑπή§¤ΗªΘxσ^ύ.μI”ΉΙ―©>~ΟΏ?g/όψUΰ_„ώ‘ÒYτxoLΠ!Ό%d}J["ΈΤξ#Y$	s¨MspΫχ;gΪ~§OOσΣυτ§…·ÿ
_λλώqELn&¬*U”β¶MιÒΧJέ…
T©ΙΚ0oώηdύ~w¬ψΐ'ΤƒοN2sg9ΗnΖ†΅§iϊ½…ξ“ªYYκzf©ksa©iΊ…Ό7¶φ7Q<Vw¶—	%½Υ­Μ<SΑ<o±³#«+Z1ψÿ
€χ>ÿ
―jer§mUξΣNΦνχnk}jχΏ_Ν|―ÿ
η—xsΰ‡Α―jVΊΟ„ώό5πΦ±a“aªθπΖ‘¨ΩkKλ2›fς¤x‹A$lcfBJ±Σ¶“άdsΗ:qΧµ υφΰÿ
ΛΧάτ4σΧά{UΞ¬κ[NVV\Ν»-4I»[M­§®Ά ­£θ­ψ-?&Όt<{cΤρΗ>ÿ
Zhl‘O9ΞG®y±η¦ 3g ‚F:~yώ§―λÒ”&α.hΎYwZvµ­ΧBο’OΥhφνώ["!e`­ζ[_4ε|Ε‚=έγ€O^Ιg
m@Ζpp„ƒ“σΐϋΝπ	π;ΰς?β©ϊÿ
ΛΤύkIβjΝ(Κr’]›WΣΏM6ϋS5EέB)ΪΧJέΊΪϋ$λΡμ4|£ƒg’9## d:‡?Jªn/µKδϋqΗί΄“…ωqΣ΅φ«%G$ί¦>ΌsΠ~cΠΤEφλό€ϋbΆIΣ~μεΧ•µ[o²*ΡmstΩµ’ΣO_ΐ@r¤ eztμN™9κ 3€8χF3“Η\p1ς3Φ§Tΰr9έ:ÿ
,B)Α@Οzÿ
‡½Ώ¥¬›nνί][zι―αWpVJΙiΡ7{mΧOΒήw±QAυ'‘Ξ<v>‡Ò‘cλ»ω™€ΙzσΗσ£.WιΡ­ϋΫm<®R’IΩkÿ
ώWλ―®ΙΟl}yg9Ξ―©υ¨‚‘ΘΖ_§§scVAΗ^ωνΫω#…I€8νώ§”VÒΟΏυΤJMv~mkΫρJΜ¬δ‘sΐ<—ηΗ^γ©ϊΤY χΞ_§―υ«…n9Οÿ
[¨£o<Oo΅$γ9ξi©Ilÿ
­?Ιl―nξϋέ[ζοvολςªwΟ¦ΣΑΞ8'½4)ΰuΐδκjΫΣρνΟOΟς¦.3Ξ?^άM»ίϊΣOMΜ•¬–―Σ]7ΣΟΈθ—hδϊp{ϋ:cΏz–ίΟ4Tξdυmχέ;ρΟϊΛ}©2sΨ}ÿ
Z¤nΟΣÿ
ΤF=sΕFNΈύzϋ_¥
KI~ωυνΣΫΦ–
)…Ζρθsÿ
ΦόάO§'°ιÿ
®HΛ* Έ–
δ–άνΘ8'ƒ½4QM¶μ’ΥM[j)ue‚ÿ
ϊÿ
ΛζΎ.ό5ψΰ½_β'Ε_θήπ†‰o$χz¶­yPΟφk(οn¥ΪR+{t–yν3?7ÿ
n―ψ+μύϋ!ΨjΎπευΕ1$‘Αΰ­ϊ)τ½γ¶_kvμπX¬½…Ώ¨;!C;Λόh~ΥΏ¶ΗνϋcψΖOό]ρΥζ’.ΰέ9ΛΒµi‹}3LYLUFUφθΙ{>Εie|
>«(αl^`γVΏξ0χΌΉ“ε­―ΆΊλ}ϋ=q.zT—·®Υ”aÒ[+»l―·ή~–ΑJÿ
ΰ΄Ύ>ύΆξ5„_³¥ξ±πΫΰy¬µE$¶7ψ€Λ›‰ΰ™¥Ρ<;sΛ„ύ²ξ<Ι}*‡iψ³I;ό®ÒK,…‡δΌ“3bμμK3–Λ,	Λ–δγο_Ωgώ	±ϋWώΧχuΧΓ‡†›ΰ{ΩΔw?<_Ίƒa€$ΪξxΕΞ²Ρ2πθΦΧπZ=ΑΟυeϋÿ
ΑfΩ¨i>.ψ£akρλβªΓpΧώ)ΣΤψ'FΏFή$Π|-3άA#[ΛςΓw«=όª¨’G9 }ΫΖε9†Th(N¤b®£Κη&­w)hν}m¥υΦηΔύC9βώΦ³)¶T›QQΡμÒκχΎώΊÿ
6_±_όφ›ύ°eΣΌGq£Ιπ—α5ΓΗ$ί|mcs…΅8ψOΓ­φ}C_’D
Γvοc£±|@¶#?Χημuÿ
ΤύΏb½*	~ψM<Eρ[TVψ¥γ­µOήHP}΅4ι)iαύ=δ%‘®P¨Έι‘Ύύ·‚ΪΞ­lΰ†ΦÒέ{kh’+x v¬0Fª‘G.5U
t:ΰ.2?.8Ξzcuξ8―ƒΞx³™IÒ§9Q ›Q…7Κ›κδυΏv—α³ϋ«†°Ylc)ΕU―»µ|ΞΙΫK2>OcΓ)ΐ2@ΙθΔƒσc‡mΟήΏB{ώ]:w§cηιωρCSΫΗ_Λ§―5ςNs¨έε«³»nώvϋÿ
}ZI(Ϊ1KΆνn‹EΏαύϊσΫΧΏR,P8ΗlRwόύ:φzώQΛ$’_=wΫ®§Μ‹Ωέ_ΛΈ”ΐnN0Goπ;ϊώ”ΤηΨgιΓί―ΧÒB–κO9'¨ίΤοΣ²V_εnηΎχξkµf·ΣΥZΪΐVόIwq”γ=?Ϊ$O όψζξ¨	f^3’1yθ=‡lηª²]Η¶χΖ3‚F	 π;Ψλψ“Χ”ΎΥ^vdC„ΙάFν£ϊƒNs:ΨA^/®Ϊ_[y_οΡu}ϋpΨ^{;]uΊ»Υ­;+}ώZέs?5_ΐ^$O[ Kg‚<Ψÿ
†kσ]Ξ'qΤφ#§¶8τχι_}|Q—w‚Ό@	Οϊη« ϊdύ+ΰ	{Γ*?ψ―nGJΣ	WΪ¶ÿ
»}}VΧυ.µ(Σrµ²ΎvυΎϊ?;έ-ζτ0ΘsτSÿ
λό=λω«ρ‰ΌDFuέ\άgPΉφδzΒΏ¥`g&Qψl?η§ςόΦψµ‰ρOχµ­_?ψsόϊ¥~ΑzΤ«~Ρπ~σσ~3VϊΊΊλσΩό»ό>hψπOό!¶Γl[ύ~εΕ|y_a|wÿ
‘:Ϋ?τ·Ιÿ
¶sη§τ―kυ;ύΪVώ―§εψ—ΦίξτΥ}ύ?3οΏψ%ª?oÿ
Ω­W’<kzΗώyψc]sϊ-{½Ϋ|Ν¦M_πJγÿ
ύ›	Εϊ™φΑπ¶Ό:{ΧΧ‘Ε{Ή¶=Iιÿ
_―γ_7Δ?π»ωκΏ―‘Ωψ*‰~AEWΜ»τώµ_¥Ξΰ«ϊFλXµ‘	i°{ΖAιΨΰ9υªÒψJ!φϋ™?Ή
\ρΦG;„Ζ`ΫzυστωhσUέ~:>ί΅θηÿ
­ψQEΗ=mw»ÿ
-_β}4ΆΌυνΣ QE›ΧπόΏ«QE 
(Άούy%ϊ
QE€(Ά
)OΛπη―αΦ–ƒÿ
Φόωτÿ
υs@ϊ(:cΫΣΪΎ[Yί{>j»Ώ?NύÒ[/EζQE@Β( ( ™"	b’6ι$l‡θΓϋ~CO¥―ωό?…\¤µό»Όϋ“(σEΗΊ<nβo<Π±HΙΗCƒΤ{Υt)³ϋ=ό3 
—–ΰXcwσ‚Ή9=sƒ\ίÒ½(;¤›Υ|®΄ΧϊΫξ>^Ό*;ίWΥy Ά*ΜB(¤έ­£wνΣΤ(¦EPERoe½ΪυΡοςέμES
Ά(
£Έ>‡?΅ÿ
)Uιώ9ÿ
>Έ¤φωΗσ@~ΑG/>Αÿ
oÿ
‚6\ΟΧ~;X?τχeα‹rΎωsΣ―l
ύπ―ηOώ
Ι¬bÿ
ΑS?ΰjPψOώ*DKtÿ
JΎπ-°Q}γ!ONΌWτYΗγΗsΨ° ηΏO_[a°άΧIΑώ
;n­wχήφ3ί-ϊszόnϋ»uΥtΥY;Q^Q QΦ(
Ά(
=^Ίώυ
ηpΗLώ?n™ΝJyιQª1<qΟ§®9>γ<ϋRzΪΙ·¥·ξΏΛδzθ‰‡_σω~=*δ@‘ϋϊIοΙτλΒª£π60p2AΰψοΫύ®i·wλ§iΪ†£*ν‹O°½ΎΏ
#΄¶αΛ
I®1‘­:U%V’$ο$φΣΚο§υδ)4£¤•ν·nήΏΦηωφ|5ρδ^.ÿ
ƒυ?Η1Έ·›φΕρ_†b”Γπ«α[%BF4-
$
M Τ‹…ΐτηΧΨσιοΕόσΗΣψΏώ?π_βuΛ1Έρ―ν›β_Nεχηώ{ΕRΆy¤α•Vω¶H ÿ
P	>θ
π9Αιΐz‘ίƒtτΉε	Ò΅ƒ–²§+Η―Ε¦ύzμeΤovΆ›wλήιΫU»®¥Z)H#9Η?ςζ’ΎY«nlQE
QE
QECζm¥µΧm6{ξT\V―u·υέtυωϋXj-£~Κ?΄Ύª#{€ί.UΨ€EΰiΣ9γ–rqq^ÿ
Ν_+ώ	υϋ
fψΰ·9'/¦=το½®K’{±γ½vÿ
·ώªΊ7μ+ϋ\κ,»…―μωρE-ωΤbOυBF;rÿ
πMψ'ίμb„moψf―„nWΠΙΰν6LcώΣ―A&°z7tολ¬oχknέϋδÒφ­ήΞ1¶―K7¦ώOFν±φΚη#=ψΟ9?Μγÿ
­OΆβ,)23ÿ
ύlÒÒΣκzτθG>Τ
µ§εΗ©ÿ
ΩXÿ
J– gΓΣƒόύΗÒ“κΎIΫ½—ήΫι¦CλΥ~g©ψ`γF΄>τ1]%s^ηF΄Ηt?ϊtjυÿ
?ηλ_cÿ
ήλύg-ÿ
rΓÿ
ΧΈώHuQ\gpRμOΣϊϋτ΄PηόύΊUϋΓ―^ίη§―µ8“ΓO―ιΖ1ψζ£‘ΑυύzτιλψΠΗ΅ÿ
υTη
Όg―^ÿ
™ΟγSΣ6rηs_Lcÿ
> ÿ
―υοQw3Χωώ½x©( ύzγ§ωγή(ΟsΤtηΫ§§―nδ`
FF8η#ρ}Gε“ ιΣ°¨Λg€PO<zcιΣλ
AΣΩ§8Ηετ¨O__ώ·¦;ώ57n‡·q{δώ®j0§##Αδ~^γ±όE
 RyόΏιοΝ(_ΛςοΨυγ9οRΡ@	1’~ΏL{}ϊυ'‘Ιλ~ƒƒχO·¶¥£όώηρόθ3dηίΤvΑΖ3Η<γΉ'κWιΠώιΧΫ―=χ¨πIΰσλ@ÿ
σΣΣσ<Ρz‡γΞ8ζ—όυΟσνώx¤ΗΉΰδ~XΖ:cυχ 8οΟσγϊΏGS‡ώ]>µ®pH8ώύoστ
r®:πsλττώ_jq=Ήηόη―Aόÿ

ZLwώΎÿ
η4
µ	c“‚zÿ
SϊS™†η=ω<~}Ώ§nx‚“¶Ί;ιoΉίϊB“Οόΰvύ{~)E 9 nΪ-;^CΗΤ?sσΣ‘Ψυ>Ά¤QΧ―^yΘΟ|{gρυζΆÿ
>.ÿ
­HΌσυΟ?–?ΩλψγÒ‚G‘σεM
<ρλώ~Ώ:
)3Ορκ;c§cθxχ¥ΖsοώΟψΤxω²}xÿ
Ύ—όύX ύ¤Ύ9ψsφiψ!ργν®/΄O
hΓTO΄’8®µ+‰®­μ,4λyfW‰%Ό½»‚fRyv_µÿ
όΏφ”ύ¤mυ?
xδψπβϊ'µ“FπΕσΛβ½Rέχ#kx¦%µΉH¥•ZίIΒ0¥ΕΓ]®1ϋ…ÿ
|PO	~Ηπ»¨»ψ£ρ'D²”	ΒHΊg…`\½W€2™ΆνtθςTΆ8VΞςΈώjÿ
ΰ—ί,Ύ8~άΌªi6ΊΟ‡­uΛΟxΒφέ.΄ωτ	Ψ\κΣE}o"4RΫOu¥£¤ΐ¤†eχkτ>Κπ°ΑΟ0­OtΧ2RΫDΉmΣ[»νcβσάΗρ΄°jΎΡςΛ—«m_m·νζΌρÿ
fψ'νoϋ`έΫjΎπ6£kα-RθµίΔΏ™τo
DBΣάΗvw®H	0θφϊ„¬@·«ι·φ>ÿ
‚~ΝζÒόcρ¦κγγην7+i®Z­Γέ&ύ96>Fy5O)ώT—ZΊΊED°ΐε”~δΨXΨιVvΦ:u¥•¬QΑmigoµ­Ό1‰π¤PΑh#HΠ* 
ª8«ΰδO|σμNΠgρΞ|Ο±u':oάR…γξο¥•ϊ$­¶ήzΨτπ<7…£Λ_ϋκ®ÒnZ¤έ―{λ³ν§)“¦i:V…ak¤θΪu“¥ΩΒ–¶v}¤v6¶ρ¨TήÒή8Ά4\Ρ 
ρΣCσΞsδγ=sώzσ“A9<γ8<ςΟΧΧ2:ÿ
ΰkδκβ*Χ4κJR{ΙέήφVλε½•Ο¤!ΛIrΕ$½Τ·ÒΚφΩZν_KΨξyΟ9λΟl‘ΗjSΫώ\vÿ
8 ÿ
cÿ
¬)ΗqΦ²iέI]΄µΎ†pk-m{ifόΎ__‘&§~£ΧΠ“;ÿ
FIΘ
~|ώ'¦?I)\pr;ηΤÿ
^1φ¦1Hυgό	ΉI{©;-[v]/gΣwωZΓοΚΦύ-}]·λ―κ<λlθ:ιΫ­0°γΨCπηªAΟΘv=ς@νί§­TΉΌΥN]KφΘ^;§τ=Fξ"*V%yI=Òοt΄χv~½zXΈRr•Ά―²Iοψιλψ–eω2Μ
GP9μqιI'{c5ΟκΜPό|μΩΟ=1Πp9γ―ρY·Ί²ƒ‚ƒ	ΛgοΙ'θNυΔ1'oRO?^ΎήΓΫΏZς18ΞvΤuZ-Υ­§UΣWÿ
=z;$ζ΄σς¶Λξωz–gΊ’rK`g88ΖyΞ{qί<ƒ5@ΓΓ0A#·B=ωη΄W—*ÒΥήφΪκΪ®·Ϋ}ΎG©
jJΝ]ώOΟ±ηίς<βΖ~Θ§Σƒ<c··ρΗjψ	?—^½_πν_|T?ρAλίυκϊP•π+§'Χόύ:ρΞ;{ΧΠe)JλΛ{ik]tΏ}ÿ
©δγ5¨ύϋ’OσόΚστyΞ98λίkgΧΫυΕ4ώ+Ιρ»ΧgWγΨίάγωηÒΏ¥«΅‹iEIω? όkω¥ρ3ρΌρk±ΟÒφqΑυιΣ­~«Α–u+[NUΧ]—υ®Ύ·?/γ]ζίδ|Ϋρμπu§=u›pyλϋ«“ώ
ψδ0#?lώ_^;WΨ?›ώ)EΟMf~Νÿ
?®kγ΄#ΧΏσΗόσ_«αΧξυθ—ήΏSσΪNIφ^―ψφόΠψ%Boÿ
‚€~ΞaFvψX~“ΒΊιΰυγΫϊώυ=Ξ8όÿ
Α(όφw`p·µμsάxWY^‡λΞLΧχH%¶ϊΟόβΎo~:_α:π/έσύω…Q_2w…v\‹Ωz{tυΰ	χ>ΥΗ‡ίΟι]·ƒFm.υ3'―£c―ΏOΐV4ζ}­χΎΎ·ΧΜνΑ/ή§{ΐ·ζ›όΞΚ(―>Nνϊ΄}v^‹ς
(ΆΒ( ( ( ( ίtÿ
βQΉθ1ψηιϊ}{ύ9qWkϊÿ
/ΓQ=υσνÒϋ~#Η\ίΧπΗλKH:;uγΰ{c<g4µZθ½7αιuη·ΆΫAl½υΤ(Ά…Q@Q@QBΡ§Ψ?Ϊ½5¤PL–ΔL
«Γ‚:•Ζ[κ@y τΞ:υΗ8ώUν%UΡ£Ή"²°γ£~^ΉΘΖrJρνBΩ¬/§¶n²ΝgiΗLƒ€HγκRnΟ«—.ΪΏΉ>>“ζrK{›mn―ωtÿ
2
(ΆΊ“ΊΏsΗ
(Ά€
(Ά€
(Ά€
(Ά“W·“ΏάES
Ά(
¤Ξ
τκzϋώZN29ΖrιίΫ2{.ς_rkυωÿ
‚άκGKÿ
‚ÿ
Αn2b1|UρTm6pέψΣαm®ΜυΑYΫ½Ϋ¥NΚ~QΎώύ3οWς•ÿ
	jγAύµΏΰ’Z®ÿ
-μ>'xοΝθBCγο„¬Nr;Η½OηύZFCE(ΐh£`=™‡θkάΖΕύC'΄Σξν®Φςÿ
ƒ;r®χwΌ―ς³ύ- ϊ(ΆΌS@Ά{,ÿ
QXΗ4κΊ•µ΅ΌFΞfPpJΓgaΣ =FFF)kΫρώ¶ωΏHzqΗ_σώ}+Ζ―ώ8ψJΫrΪC©_8Θ`X#b1ΡεppyΑxηqχ_¦άE‡—―yxOC†1πxpΞ9
ΡuιλέτυMν―τΏ+κ{ΔOήψIΰ½β/Δοhπ'…l&Υ<Cβ―κVΪN¥YBωnοn¥$.HH"ReVHb¤tSό ώΨπuΒοkZΟƒ?cO‚Χ§±ΈΚ/Ώo/<5ΰ›©β&?µθ~ΣUΌI«ΨΌ7ÿ
‡xΒΊΫ}Γτοώ
-ϋ5Xÿ
ΑHΎψCα7Δίώ9ψuπλΓ&oκ~ψm6h<aªΗhlτΓβ+^ΣQk«m%»›NµDHVςφ[™RIa·h(΄Ώψ7Oφ#°lίxίγ®¬E“ΔΎ°P0yέeαδ ¶JόκΚ2a^Φ],ΎζΕNΞϋ4εΪφI5eηΎ¶±2γ$ω“z+;;wύ-§{ξ—δΔ?ψ8£ώ
}ρκYτίψ[a.JiΎψvΒΪ!”"^ψ‚Σ_ΥΙ
	%Ώ2Ώ‹5σΖ»ÿ
„ÿ
‚“ψ¦ΞοNΥk―wWφ—WEy¦ΩΕ5­άOΜL,τΨ
¬Ι"v@#ϊ%“ώσύ…Β±ρ¶#Ύ9³8 pϊ^sΖTύk»ÿ
ƒxÿ
cΙς4οΏτΖ9F»α;ΰ‡}ΫΏ	»ί—ΙξNkκpωEK•Η‘8ΪΧ¥'®έ­υίΝyίΛ­„ªΫ”nΊ«7w³»ω=5Ώ­ΟδΰοΔΏόψ§ΰo~Ό¶·ρ·Γίιώ1πνξ£kφΛ4ΦτΫ–Ή‚[»mρRΖhΔ‘οόέsύOώΟÿ
πu'Δ½.{;φ™ύtX―“ο‰ώkhΛ΄<ηΓΪρΉΣ&“ψή(u+Er[iLLΧΏΰάƒ²ώύΆ~$Ψg?»Χ<5αmXφ{τΆH8•<doρgό‘γ«hξdπ?ναMI‚·Ωm|QΰέOL•™AΒMs¦j·q&β9qj@ϋΨ8®ΜFa‘ζ…:•ax¦Άάi;]m¦ΛώηφXk;υiτΡkΏ¦ΏζVί±Οό³φύ·ΎΝ£ό(ψ±gΆ|EΈTπ£β,#ΑΎ>σ™Ι™§κ›ye\ΌΤue‰ΜΈξQ_¤½Ώη#φυ¨#ΏZÿ
4οÿ
ΑΏΰ΅ο΅Χ|αύΖχ:%Ò_ιΓΕk­Ϋ]Z2άAy§Η©ώΪζ)!W„Ϊ;ά,›ψ―κSώ}ϋe~Φ~4Ò|[ϋ*ώέρξ™ρ;α—o¬|?ψ™γ½χOΊρ…!4νK@ΧµΫ`±Φ|Eαϋ‰¬g±ΤΦiοµ}.κV½{‹>K‰~[2Λpqªα+)υ¶·ΫM·Ρ[_#·^£’…H5}9­mW~χÿ
?+ÿ
C΄R)VPUΦ@zΨ2γΧ ώ?Lςikζ@(Ά
(Ά
όχÿ
‚³kƒΓπMOΫ3U24[~
kϊ~υΖνΪεζΆF€g'Ν“QXψηηθyι°—φoμ=ϋ!Ψΰmϋ8ό‚0F<΅Ήv!™ΐζΎTÿ
‚ιk§Aÿ
‚VώΥsd)Τ΄θ™'nWQρί††2y91( }ξ1_j~Ζ–ΒΟφHύ™-
-ώ|%

Ζίh\Νz[­muoΊΣ¥τ¶}Μηή&•“KNι$ξυυόo®ÿ
JQEηQ@G)Β|ÿ
"?―%A7¦#Χπ¥+Yίmήÿ
―@[«45ΐυOόΊ5©Οπ‘ί9/νξ?ΦΊ?¥s^?ρ&΄Ο<ÿ
‘3ΞΧΏ^+¤$r:gάjόσώυWόoς_ζ~·—Έα­zqϋ”ck_6zsΫ―Nÿ
σγbqƒΞyλΘχτόOoΕδgÿ
―θyγ<w¨ΤΰγΏ8=qΌδc={χγ;Ih¦nθOB=η¶3Χ?‡½3Μ<ϊg$γ―RMK’M.ÿ
‡―bγNr½“IZνήΛηbB9όώΉϊγς¦ ό?αθ8 υΟ=)7··Lÿ
?ι@νλω…VνkΪν¥½­ωώhΏ«ΤvΣ{wλςώΊPΟωώη1οon™ολZMϋ@ϋ uυηκ}ϊÿ
ϊΞdΊΕθ¶•ίOEmwΈ<=Uφ?ς%Ά΅σ}ΧσΟυόιΎr®‹(ώΆ‡(®«ο_«σAυz―μώ~^^ybΆbyλqΗ^ί—η”Σ:c“ί,ς#Η§Z‹Ν?}~»”ηωφυ¥ν"µΌm{|Jύ:+χξRΒΧ{S—έ/ΏbΘ9
σΙΑλυϊώήΒ™‚O ώ_δεPύΆ5ΰΛω³χΣιάρκp8υκ)kNL±¬;ÿ
Ό){HΫβMδ–φόυ)`ρjSφμΌΏ»ηMK ΰt9';τγ§ÿ
a<δΗ ΐΐφΰ~xϊΤώΠ¶›Ή–<υχ|{t¨[S±Rw]ΫΉΜπWοωTΊΤβµ5ÿ
oΗΛ―Οπσ-eψ·µ
Ώ*UώΩύ[¶¦‰f=½{Ηπυ=A¥Ω
ƒί<ύ?.¥c¶·¤¦wκIνwlΏΞQΦªΏ‰ό=ίΦtµηίΪη7­GΦ¨+ήµn¬Sθ»ΫwύuÒ9Na+rα1οΛB³ΣNΤόÿ
­mΡο‡τÿ
MέφύOoo\v?€Χ*ώ4πY2x“E’Ϊΰzσ7ηT%ψ‘ΰοΌeαΉÿ
–ζ‡ÿ
Ήi<no Όέh%ΣΟΏυ½¶E›KαΛ±―Σ}»Rνwύkά“Χ ΰσΠdcχφ?ύ`€ηδqΫ°λΣΧιο^c?Ζ_…6ΩϋGΔ?E·®ÿ
i#ω7ΫΏ¥cΝϋBό·?½ψ«ΰXΘ'†ρ.’#ΨέΔf%ΰcΎ/ΊλZ·½αΓύOƒ'Μ§ΧέΑbΣ“Ϊφ#Δvμ?ΟγM,	θr=ΉνλΨώΌΪ“φ|¶$Mρ{ΐ‹άνρ–ήάΉΟ~N=+Ϋφh·$Kρ“Α9$jΝΊΨηθ2}«7ελ|nÿ

!εέωPΰΎ*°Θ3y-5Yv-­–οΩ$Ύ}¦qΚ™ϊτώ‘β‘XgΖΔγ·Ύ95ς¶Ημ½
~1x<ηϋΊ?@1,8οΧω+ΪόρCΐ_τα«xΕz¬}P‚ρ`›
L	$3
ΘΖ9R7
ΚΜªΝPΜπ8‰ªtqXz“jκ0«7¶Ι7¦¦ήβ³±Y†M™α(6Ò­_^•;¥}g:qώLz-σώxυόª0η
qςα²rxΑ8χμ{sκμδ3Π`η#=GAΫ=:ΧyσφΧM»ΫUu~ΔL0OQΟOπÿ
9¤¥n§λώ})1ΞΘϊP!dΏΖ@Ξ>η4΄P;ιo;ÿ
_πί¨S”ς8Ο>ωώxΗηΕ!―Ττό9ηλτ }3Ο®?_σώ
‰ι'Χ©τχιΠγγ<ΤlΩφΟ΅λÿ
Φ―­4Χƒώ™όθzΞ1Α$δzB{c}9©*&eΐ$ΰφυόΊl‘Ξ**ςήνiεuq¤µmΩ$Ϋÿ
†λύyΘOόmρE5ίΎΪά>ίψWρN£Β‘µο‹µ‹x-Έ#Ξ0Ϊψa•T‚!7.
,νµΰάΟ„²λΎ3όd»†AkΰοΪx+L­ΥβmOΔΪ‡φ…ώΙΟ\Cg¥Ϊw†ι²%—σcώ
ίρ_ώ·νηρΣS†β[?Γν―Γϋy„Ι~²ƒF½ά‡dH®5K}Fλbp^α“ι‹ώ'π…ΎώΔpψΚκ7ÿ
βχu―H!Ώ³t•²SΗ
ÿ
c–d'σH!ψΟκ8Ή<·‡)Ζ›εjqNν/*χVΧόύuόηβ:ZΖΫ{θΣ~εnφ?mΙ$ΰφQΧ‚Hγ¦Hν‘ƒ~E5[?\§N qΙ®Iΰγ©ύ{ϊÒ'qά/Λ?_~Ώ•Kί”―»iί―3Zυκϊ¥4άuΊµ—{%Λ}Ίiχy¶qνλ`ψ8λνΓ@ΗΧΫ§ÿ
\zg8νOΑ?BGaΧρΫΧ=z¶§•½WΧξχtιλoM‰­½νΣϊΈT{	'sΗΣ·~LT`σίρθ{φηΎª6Ϊ9=
=HΗIΙλΟω8£›—•σ$–—·UnφοχyΩ'{ΩjφΡ½;Oε ζΪƒ‚	γΤυη=ύΞ?^°³–ι΄g> ώα“QOs)–lr	δΰ”™“νΞ:sW»ΎV%Β¶FO?N22sΟ§Ήγ―„QkΪΎινÿ
wηtvQΓT¨ΥΣεΎ―Ώέ§_ΛΉ©¨jΛν„|ΰγ¶GΙη¨λcρ®Vi¤ƒ;ΙΘΟ s‚^n}ϋ
c?NNrsιΎΰ{τλÒr
ϊWƒ_*­­—K7ε®tkηδk…$¶Ώw―kς«^ϊwύF•ΟQΠsΙ§' ο^ΈΙ4A}yώ\ΧωΤ”ΗA¦1Ϋόÿ
‘\Χmjÿ
>λOΐήφ²WΡί]ο·τµσl”Τÿ
Λϊυ¦TΜ2ηώΟJ‹8ϊuÿ
υρήwΪϋ~kTZmΕ«7¦½τq·ΰϊήώgόXbΧIΰ SοΊxψώΎµπΑ^1Ο―
•χ_Εώ<¬ηώGγηF?π½}TÒ‹iθ•­έ;=zuÿ
4¬xψΕjέoΑύΪύϋίKRΎΗΨnƒςΫΞΨ=~γπ5όΝψ‰Χu†Εªκ§χΎ€πELΊ‡67£ώ.ώA“σιύy―ζ_]%υ}U±’uHηΨέΜ}ÿ
ΓΣΏ«π]λµΆε‚·E·βΟΜ8ΛώaόΧλΠω―φ€ώ+CΠ¶±οΙϋ<­ώ5ρκ}Ρψÿ
3_b|ρIX‚Ξ±ΟÒήAΣρ5ς
¦A=πΣ?η<WλXkΊoK»?ΪόO#ςϊΞυέυσΉϊ+ÿ
—C7όφyCΘ]gΔ’ΐμπ–²ψχθqξ―οϋΗϊzfΏ„Oψ$r¨ÿ
‚‚ώΟϋ‡Μ5?zuπnΊηιΌWχzy$ϊ’3_3Δ?/πΏΝx¤υΪ[^ϊY%χοήο­„Ά+ζO@+·π{³ή.:L‡σp}Αηÿ
Υ\Euώ”oΏ‡ώΉ°όΑΗ¦>χ'Ζª½όϊ.ι'ϊΈ'ϋΤΛηo»εωΝQ\N+]5ΏζΧτύwΏΡ-—MQEΒ( ( ( ( ΆwΗΤηιωS­KMq•?ηυQvkξΧ°1«χυοψqΖ\γ=‰ΙζJ`lτγ8γςγ|~΄ϊΡ%ξ½>oζ­o_ψ[/EύuόΨQEΒ( ( ( Ή?ιhoaΞ¶?Ό
2^αχ;	z€<ΦR¥++ ςAγΎψκ3ιIΕ­4}οΦίƒόΣ·–n¥6•®“µώOτξxΆτγ8νΧ§nΌπ09ητκΧΦ΄ΦΣnΪ0?q)i +΅IΙCΨ2qΧ±σYέ_¥¶¶ϊ_Ò>j¤%gϊτ¶τAEU™…Q@QG]ώ_¨Q@Q@Q@οcνΟCΗ·υxδ¥^£κ?'k«νxίΣ™έ_Ήό|ΑΞz‹iΏ΄ΟόιNΣkβ?έξ/|'?Άη=Ο½_ZdΎ~•¦ΟΗο΄ϋx Ωpx#8βΏÿ
ψ:agρ«ώ	Σ~Sg'ΔΫρ`ρΒΉTsΑγΧ©υ―μ;Α‹Ώx>λ ύ§ΒϊΑυ&m*ΪRrI<†'©ϊητηÿ
	ψH¨΄•4ο§UΊ^FT Τ¤•με6»|K®ΧΥ6··szΆ–βtyn&£¤–i(£P2Μξδ*ª$π9<Gρ[β„>x;Sρ―u±Ò΄τ+ †½Το1¶Σtψ7+\]ά2°XΖ
U’G)r:ώ|Qύ§~,ώΣή8Σ|§ήήx[Α:Ύ¦–¶ΎÒ&xΛXn-ήΉuGΤvρΌςΫΘ~ΗF0Β―ϋζρiαε5ΜτοςλσιώfΞ/[n΄ϋφσΧΠύρ—Η-*ϊ)τί
κ6ϊ–Η–½~ΡΦk8δL¤‘iΣ΅h®dEey£2D¥J΅‘‰Ωΰ·7³<χwάΟ!,σNο$Δδοgf'ƒξΈΞhZ5—‡τ;GΣβXlτϋHm΅F
X&IκμΔÒ6YΙάMkW4Ò»nΫ]|µ>oNΪB6KΝÿ
Γ~¥¦!†9<η¦?n{ϊΔ`‘ησό©ε†άwΖ8OσΫµGY«Ω¶ήΊZΦ}jÿ
qi[DÒ υ?Λωγ4κP3ιψ‘ÿ
λ©m§£}Χ½’ό?»ΠΆ=ΗΏαΧυθpi 6:^ÿ
ληλωώ~†“®9υ«½K|WΡYnυ·VΌ―Ώ@όC·ωÿ
=©w^Ψθ3­(RF{sϊυψ¦Σ\ΙέI7ΧV­·mΌΔ’ι¦ί‡υ―ΜU%y†ώ8 ‚F=ΊGδ)»T€7	l
Ω\ν;‡Ν:τη­<.y$
zgΏ8ύ?Ο­6©ΞrVη•Υ―«²z_Χoσ*Òι6Ίµζµλ―υΤθτ―ψ‡Eu}3XΏµƒε	ΪhowGΉOήΐ5λ^ψν}nρ[ψΐήΕ•W½³	λ“χ?,OΫ ψ|ά
π*+;«®Wδξ›ΎΦΎΫkιgΠ}-dΧg·δϋ#οÿ
ψ·ΓΎ'„K£κO&ά½³“Τ^ΆH%	'\®υR™ΖÒΔζΊ"1ώyΔv>ΥωΟkywc<w6W3Z\DΑβ	9†9VRΞ0pyWΡ>ψΟ#Ιo¥ψ΄†²(µ”e$όΏmFέ¤7Ν<k©2!Θ”νΎ½μ»kύuvj/f’Σ}tΥ|›jϋvθ}J½GΦ™‘ΝM‰b‘¤U‘‘†U•”•*WHχ8Ιzϊωγ―Σ§υύj$½λ5}UόΏKwΏΰ~ΑΖϊΩΡΰ•ί­Υ™O<}π―DT8“Δρ_2¶μξCφH9
F0HύOύ–νΦΧφiύmΤmX~
|,FAΒ§΄% €sΗ ς+ρ+ώ„ΦΞÿ
κπΎ’$toώΠή¶dB
–;ΕΟƒΙUtΐ
α”1ϋ£?Ήÿ
³μiΐo‚‘"νXΎό8/<ό£ »/·η^El=>(¦ίωώε¦ζwΌ’ν{/”nχσΤυΪ(ΆΌΒ‚(  ›§αϊ=§η ›ΏΠ~‡ωφόΏφωΗσAΦ?βώ”PπΨ?Ψ¶ƒύ–ύγυΗα]¤α‡®1Η©ηΫ~kπΧό­	λ΄ώeρψuώ•Ò€?<Οςιυξ+σΌ{ÿ
k¬ΊsΎmΏηεcυΌΊÿ
QΓvφq·―,oϊrGηό°};{­E»ΧϊΗpyNΉ©§ωόΊ‡APΓ‘–ο“ιΟΣΧΨWσΪκοn±Ϋε}{£Ρ§ρzΩ}ν-Ώ«'ϋB|oπομÿ
πΗYψ‰β7ί‹Ag¦Ψ!ΝΖ««^ΉΗO¶RpΟ3†w9Νq.#…Θό$Χΰ©΄mώ­{qΆΓα-Mβg±Σ›Gkι­mw&9nηύΆMΈg‘R5.HUUΒΌÿ
ΰ­#|πd+ΈFÿ
΄³ 
΄•2o§CΟoη©“€‘©'ΨΟ#?1ψ‡\Sε™¤0C΅IP„ε5u9¶–νύ”’JΦO―cύϊ.ψ9ΑUΑuΈƒςΊ9®*¶cΓS)sR¥J‚§nHt”›m»ί¦ΦKτoψ)§νHκvλΎ„_‡-	XdΓcƒ7ό›φ±•Ύ_θΡΤΗαm,γρhηίΉΖkα6AΗΣΟιύ{wβ›Ηκ3_>/β'Ύg‰Χ[*²¶­5³ΦΚηυ\|	πΆ’\‘»+ΊAφξ·Vί·άΎΰ›ώ
)ϋYJ8ψ‰gc¬^Ρ”ϊfΨLϊƒΗ›φόύ¬¦λρRβ1ι‰ΆΖ_Kξ?ύx―s8Θ9Ο^ίώ―Θqinδϋÿ
‰γόγ…fψ«>•”³,F©$Υi&φΣΆ·όª>ψeNKΩπvD’WΐΡ}΄΄ΆΧ«}ΊZMϋtώΥsgΕνe?ςΞΓFΣ4ϊΚ—φÒύ©.Ορ›Δκ22#M21νχlΊwτηΫζφόσώΟ`UG`>ύ1ώ{dδDΈ‹;¶Ή.ΦΩΧ•ϊ/λ·[Y#²ψuJκ'‘^=²ό>–kExtκν£Σ΅τ¬Ώµον-:•“γG0z•Έ³Lg―1Ϋ/ηΦ<ÿ
µ'ν9>oΖo79ω5y##yHƒΤρλλ^@HΙγϊwφ¨ƒΞ
υÿ
Υ‹ββσ2ΕΫkϋiξνηΦϋ]φΧKuSπΧ€©iΙ#ευ2ό5¦™μσώΡ_.	σ~/|@|<G¨FGΜΌ
γ#<zVDίώ1άηΟψ£γΗέηΕZΟχn‡Θφι^ZHÿ
υÿ
Οηµ48?Σ§>ώγ³ΜΝΪω+Άw­;tν²Ρy|ΞΚ\ΑΡpΦKÿ
Ωψ[ήλoέήϋοήέΟB›β·ΕΏΦ|Gρ»ηƒλdξθΞOÿ
ª±n> ό@;Η0“Cx\9Οsώ>ΏδΧ.wγυÿ
=ϊgπΗ1³)γ'ΤώC—ς©y¶c$”±‰h·­7u§Ώ¦µξ§ΑΌ!8w)¶ÿ
aΓY½/eμΌό―¦Ίρo‹'OβΝΆMWqί9σ.Ϋ<ρrÒªI«k2Ι¬jξ}[UΎcω™‰?‰¬ qΣρΗ·lυβΓi#Χÿ
ΧΗί9<Χ4ρψι5ώΡ_ΧΪΞÿ
;ΛNΪοΠλpτΉ’εq]–»tTοÿ
ϋ+\{Ϋχ}KRnΨ:…Ϋ‘ΣnxυΗρUƒΘΗ-qrμ?ΏupίOρΕB8ζ¤δr9λΣ'λy?Οl3νΟªΧI5o½ξtC!Ι U—Α[N\%χ5i}5Ϋ¤ω©o©‘ΫΏNIώ£Ϊ£hΤυQψªζ8ΏηιψΛΧ‘OόΩ?‹Ώ?‡Qÿ
]Y«ª“Ύy]»Ηmu[ίΧµ†Y•Σ“rό³ίκτΦΦιΛδ»ίΠ‡ΙΖ$¦v/Ώ·ÿ
«QJDQτP?©'9<ϊγ±ϊρM΅W«kϋI­–οΙwΧUΎϊΏQΛωya„ΓΕιπΡ‚¶Ο·υςΥCϋ§΅

HλΙγ#ί9δΫ>2ψΧΰGν7π»ΔήΦ―μν|Aβθ~*ΡVςΰiφ“©j§\ΫjώΟ3ΕΐΦVω
³FUΑc€Δmϊϊϋr–>ΌW9uψΩπ£Εή η‘ÿ
%Η©XπxώUοπή3C5Β:uª+Υ~ϋ[8υΏ[κ¶·–‡η+dΉV3³Ίx¬µ?©ΧqR¥βγIΙI5έ5tΧΞηχ[m8Έ΄‚b2Γ€πΞªΗ88ΟΛ9΄ΨtγΣ<zώΓΝΣ24ϋέ~Ιώ‹Lτχϊdη|—ΰp£§Χύ:γÿ
Υ_ΥΨyJPƒoμE―FΆυσώ–‡ψƒ:uλFRJΌτNϊ)θ·ϋ·ΣO0=ϊOÿ
UQώ'ΏΤχώ]Ύ•ΠyΔª£υϊÿ
‡µΏ^™ύ>½OR©$sτϊϋÿ
τοσώΟΦ€ ?Lϊϋ.τ”ζ ÿ
/oσΕ4wλΧΏωιώM
u8Άσλ@Y½•ΙϊNώªγΌuβK?ψ/Ε+Ώ–;{/ψg_Χ.ζμ‰-τ2βώBξ~UP°ΜzΒΊÒγi#ο2;~yΗ\υΝ~kÿ
Α[ώ)ΏΒ_Ψγζ±gtΦΪ<9Γύ&DoάψΚξίG™IQΉ¬'ΏΖΦά’ .GnWEβ±ψj+^j°ZmkΖξώWιχψΪª†½Vά\bνΊθύ6έoςλόxγΔϊ―Ε/‰Ύ,ρT‰%Φ«γÿ
λ:ΚΕg’[οk³Ο(Y›}β‡xUΐ―τ¦ύ–ΎZόύ>
ό1·‰ώÿ
‡^Ò®Ϊ8Δ>~§—nϊάΈ"[«ΗyaFb{Χωχÿ
Α=ώ_¶Ώμίΰ/²-Υ„ΏτU‰ρδÿ
bx>uρ&¥ΛΙ1MΦ¬>ξι— ΧϊFH•a%TEQµQPmUQΐ

γ€qρϋΞ5¨¨ΣΓ`α-!I9.ν¤ΎτΥ­d»j‘α8*f.[Ήhί[λΫN«ηd@ΓόgίΉÿ
Υ~AχσSΘAά}ΎίηΧ½B£'Ώασύ1γ¥~g›ιη®ΛΎ—[«[ΠϋΘθ―½υωΏλώ6'c>θ$“ά{pqLή	ϊ½ÿ
«όβ™σ)ΐ9γ<τvΟ°λψvª“\Ηo‚Μ£© ‘ΠρΗΈλβ*Nζwvω½’oώχΨΈΣr~μnή]Ά[Ψ€¤ξΓιτΐÿ
λφγσUXr€‚Δ2

<άΐsnζξ¬\ν`}ΣΙΞ1Α'Ω
sX&βΔ‚I9$ρ“ωg υΈ>>'.Wλ―.vVµ—ε¦ªχg―…ΑZάΛ]ή‹W§mu½ΏN¤σάΛ)Λ>AnάχλϊcΠ¨NqΨ:`ςy=qΑϊχ£CΟ=s§αÿ
Φ<¨9+λ““λ“λίÒΌ™T”ο~ΧΧ]ΏZKcΡεδ¬•ΫΣ―G{ÿ
Λv?`ύAϊγ=:PΞO~?ΞO―4΄VcmY$¶ZιΧOςωϊRgcυύ>ΎήδΠKÿ
/Λυτ?Χ§γQσvυ1Θ<v=Ήχόd¤γ wώ„κ9ÿ
υS[ΗΧΏ·λ~ϋE½΄ÿ
$µÿ
‡οδy‡Ζ2€5ά½ϊfξϊξώµπΏωÿ
?¥}Γρ•¶ψQΟ άY©η¨(ί®άΒΎ=υυ#ωÿ
u―΅ΛΥΆ»i²·k~—ς<|oΖΏ―³λξ)κGn¨7χl®ε†Ώ™Νe@Τυ<ζώÿ
ndιι_Òξ®ΫtΝPημλΟΐ‹iÿ
=9ζΏ™νM·ίκÿ
O—ΏψυΔ‡?Λ½~―Α.Ο¦Φ~Ί­ίεσ?-γ-]ήÿ
’·υψ7|ΐπ¦ΣώBκΠ[ΛύΝ|„δF~9οοΗoΓϊλφ‚γΒo^u‘ÿ
¤σΛΧρ―Ή
ϊ}I‡Σς―Φ°ΞΤ—£_‘ωWzΚΛπÿ
ƒ΅ϊCÿ
Ώΰ΅³ςΰσβΎ‡ΣΑϊΩtθυΕwC§β™―α+ώ	»ÿ
ΰ΅
8Θ[Οqÿ
B^ΌyΟ{ύvήΈγ“Χσώx―βέJjΪ(/]-ψoύ\ξΐό?ΔΏ ΆσώΟ4WΜΑ[›ΛΥσρ©ίªύ>NAΕaΤ¶3MJΚppΆt
#‘‚IΙΞ0ηρκ01“JJϋ>«ΎέόµΣΉΡ†—%E.Νkύ]ΟcΆ@#΅γΦ–Έ$άdΧυÒύ{§χΎηΣE§ΧeωQPμφΣϊ^}uοκχ((Ά-ύiώkϊτ`QERΡ]yyÿ
%ϊ«;ÿ
K@
(Ά ( π=)iΘ#ΤSΆό½_υΡl
:η¦:ς;γÒ–cuδ{{ύsK[k§{~ªύΟΧΊ[/EύuόΨQEƒςΤaEPEPEU&΄½τwό»Ώ'ψ
QENIΪΛU³ΎΫvϋ†§a¥jπ?ϊΑ—…ΟπΛ‚±Οέάy_βΙδyD‘I²A2”–&*κ}ry
F t δη5μΥΜψƒF±›»uξθ2J1Θ%Ίm9ΙξO
τS“jΧΧOF¬¶_ηgΦΜσqU5x­—eιΏ~Ώπ=ΆƒΜ¬…X‚¬ΚTς9ηƒΠ3ΤWJ•Ϊ[ι«σώΏ=<ό)EΕ΄τh(Ά±Q@Q@Q@Q@
α—Σ©όΆ23~½	¨ι“νόª]ω£Ϋ™mκ·]{%mΑnΏ]Ύgρ_ÿ
gjΣβOμ(ΐ•6zΕ»•lτoψH>H§ΉhKgΫ=+ϋψO­ΩΫό
ψkβMVζ+ΎψSSΏ½AπEαΛ)®'WωQhΞΜHΰcψΔÿ
ƒ½o§?c-”JΎψΑqβ8dΧ|«N
 7ZύªψοϋOM7μ§ϋ5ό&π®¤±Οβ<Eγk«iTH¶wΣΣHζH®$ΊR~h5l,®+λ*Su°ΈH-γfήΦV{i»ο}ύmª\ζέήVZ;»ΕχΫUχΫΜπίΪχφΏψϋρβK›|α‰ξ,<%¦–ΩΘW\λΧ0ηk]κF%hƒΫZaP%ϋD“Iϋ xmuλ ™wG΅hήU»’/5	Φ2Ψλ•·†e$τY2+δ&$8ί1Η>ΌsΧτoφ:ÒΕΏ‚υνeΣκzβΪ«°Γlβΰ)ξ¥δ`z€r:δ?ϋRI­RkkY®ώWοθφHΦχΥκΧόV­ΫµΟ²BδwΞ3νCΐηίΟ δ{γόύ?.΄ε9ΗlcσΓιϊR¶@ΰγϊϋW†οφZΧ]~W·K~z–—ά»-Α?\RRςqzΧ―$;χώ|R…$χΤ~™ζ“¥kvÿ
.‰wσzμgιόιλί9Ν'J“Λτ?¥ ‰νR@ÿ
'ΫΨΣpwNΦk{'®ΚΛKΫ§ό8YφΧό:ϋΔάp}?3Ϋ®1ΗλM©Ό²―~ΏΣ―#τ¤}ΏΟ·ΈΟZk­•ΎM'Άς·Θtc±ΰsΗNέI?‡­7;ύ9«"<g―ψ}ϊτΎ_Ώιÿ
Χ¤―wdµ{ί}ΌΎ}uΈ®―nΫθτυ{‘ςγΎ;ΨιΠt¨jΩB1Ος¨Κδ‚:Ϋόηόχ©W7}tΧ·AQSωY
ώ__σΣήΗΉ—ωÿ
>β…Λu^«ώΛο!υÿ
>ώΤΰΉθ}ψλΠηνλΣΰSΚƒoσώ€ΐΕ.Μm8ό}OωΟεEi®©όΎOώoΈrψ]ρ]{_kS³iSΘb΄Ί‘Λ	d?*³w·”αyΗ–Hn°―«SηΓΈe9x926Gr9λόα,Tp29ηΌrλΖϊλΰΏΉ¥Λ ήΚdΤ4ts—ΈΣΩ¶®IκmΞ±νu€rβξ­ιky[C5›Χ¦{mΡί¦›ίCωΚÿ
ƒ―uρcϋ$~ΝΎωo­ώΠSί{ΛΰνEYªΖΪyΪ[§5ύ"|€ΪόψMlzΑπΣΐϋgαm)κµό¨ÿ
ΑΪΎ 	αoΨ³Βi7(ψ―νηwϊ5―ƒ΄΄!xύΊLrx$c­X?#0ό0ψoΩΰ/¦=ψ{N_ι^ή"}?΄’ςKOWΦΪΩ©kΏ½―eξ«yνn½Ξς(― Ά(
ªσθ:ώ5b  χΘ΅¤φτ³ϋΖ•άRώhώhυh¶ƒύ“λΪ\vϊυσ]{Σ―ΏCΫόΐπΨÿ
‰%¨?άιυuχΗjθΧΖqΟ―ψυυώUωΦ=Ϋ[Ξϋjλλ§ό1ϊή]¨a®µδ_/v6ό;@#Χ­UqάHΑώGΫΤυ<bΛt>έ=­Vc’T¤c·§·Χ~•Ι®Λgo•vνΆg|7ω‘ωcÿ
aΗό(ίΈψ‘¦·<υΡ|@?®>ƒότ·ή?SΜηπιώq_Π—ό‘¶όπ`Γ|EΣ³ψhΪώ;ςxλΗoOηª^ΧκsΘϊΧσ_‰ν¬©j£υjM]k®Ο}wισξ¬DΧ…΄µΡζψζό½κvϋϊÿ
ΓYH¨¨~ι9
γjf8ΤZόν΄–ϊm§ιo.Ηυ”Sm[Ώά)#°ΐϊη―γÒ΅vΑ{c g―σόϊtλRr}pA^ϋϋ+xIψ“ϋE|)πn»άhϊ§‰~Σ¨Ϋ0ω.­4k½bkI9Κ»f”ε%`:ρΣ—a'Ζα°iΚ½Zt΅ε*’}n―w»κ—o7‰σª7Γ™Ύy^t²ΌΏ ½ι,=)Uq›εεέoΊέlxφ=ύ£Ύ#θ0x›Βί5I΄KΈΦk+νJλOΡVφ–{X5[ΛK‰­δSΊ”…­η)3dρoψΕ<G}α/h—ώρPάιΪF'ςδέδάA0&«Yφ"κΥζ·”¤‚9\£…ύyύ±~3~Òz―νcϋ9ώΞ·Z‰mαiWÿ
Ω~’ΛJ»Υ®¤²SYυƒ]>ΞΞβΚή+‘ ‘–]ρΘΕBψΖΏ‡_µΗ―‹<5ρλΐZ_Γδρ.©qΰέ[Σ?³nξ^(¬ΣZρζ¥5­u=κιΪd—Z|3ύΞ9RxÒd·ιy§ερΓΦΒεΗb3,-ZT*T”΅R¤εOD“§ΞI)9JχZ#ωc„<kβZΨΌoΕµΈSΓΩΎ_Ν(ΰ©cησƒ£Fuπσ²\•ZtΫ”(Σƒ¥%)(ς›…<‘Π‚'δ~τγς&=΅Έ'ΙΖyΗnί_ηνϋ¥uπ;φÒΎ-iΏ²^«α^O‰Χ½Κψ®I/£GΤ.΄ωo΅¶:Z„~^©=΄mx¶ρi©§δόΒ±ΙΪ+αTÿ
Ύ1xΫα|χί[θ7K¥^Μd»Òu;Hοtω/Θ]!“ΛrA9ΩΗΞηΙ°Τρ5q4kRsφ8—FRUΔYKΩTNΞ2I6ΣFξ~‘ΐ:pηfX¬§	—ζyf2|³<½fT(ζ8ΤPXΌ3S•ιΉYΪV’RW‰7g^	ψ?α?ΪΓi#Αώ3»³΄Ò#†ξgΥοa»	.-ΝΊΑn–¬0—R8f@Θ2Jθόύ|yρΏΑ|kαK½7αϊ·§sqΥΜIau¨ΊΨ¤6Χ»ω6rί<#8ΑΑ$~ΛEϋ<[~Ò?°'ΐ_	?4Ώ‡ζΒΧΓλk΄1άZÿ
ΆΑo% W»³A4¦ΰ2“?6ωHιΧό
ύ—|?ϋ7|ύ¤τν'β†•ρ.ηΕΦξ―gÒΰ¶·‹I6^ΥαήO#QΤΑG]ήPΔ*η5χΈo)VΖa*ςseµru‰›ϊΕ5)βg†R…•ωΤyυ²­u~§σΞeτ™ΜpΩ.oJtΈ·ΖU2Κc€―<"ΚiζΡΓΎz²£ν%…RN~Ρ>wΜ’mDώiVθ:‡ΘΓ(nΩΑ]Ψκsςα»Ή<c™VenγσιΗCΐ9§LύkψπCΰ7ΐίΩ/Jύª>;ψ>oΪ‰n ƒΓώάΚΪΪκςγOΣΰKiδKI.®RΪ{»›»ο9U8ΆD+–Ωψνπ[φ|ρ·Α…ί¶?Αο	xfίΖ_>Ò{=GΓχ>(·Ρ5«vΣΔ―aoªYά‡·Ym[_AqζΚ$a~f>βέQγpτλJ―υ99ΚΌp’JΎο*ψnί/‹υi}'²Y”°u2Ξ®_OS*Yε8Sϊ\γAJ®0έ_zΆ•(ΤδPSVζ¶«ρϋν©κ2nQο‚1r9Ο8qzΞd'Ϋ“Ο°?Σ υ―θογυ§μ}ϋ?xƒΰΏ®|Σµ]gΗϊ…§‚ό6n¥C i6Ί•Φ•φέg]°‘£µΈ»µώ=“›{‹™e7Η+γ²ώΚ?³Ε†Ϊ‹όΡµο|iΥmΌ?¶ΠZΗΆhWΫ4ύ>}I4»‘.Δ’κP–vK:«΄—
¨ύ—α$cΚ¦}†²[Ò¨άN^M9®ω’i|–ί)GιsCSOαξwV®..¦<UΗ,ΔςΏ…Ba')]Ϋ[&νη}$g#<sƒnΗ 23’1‘Ξz2IU0XR2¬ΐªΉηN0{ρƒ_Έ_ÿ
cΟ†(ύΉΎό?Ò4H<7ΰψΔ^9ρ•£±·½άM›Ke…•4ρ©Λ.›Ι³±·[—B²°jϋΗΰ½ήΏβOόρΏμίπγFύ¬4x,Όβ½;PÒδρέδ6πΏΌ±‚εομZi¦ΩήG¶£m5³Oq5ΗΪ7ΗΙ„π£Yβύ¶68Ρ«*4%s«5Τ¦“N'ΞWi»(»iΡ™ύ/ψsG$­„Θ±Ψ™f8JXά~¦"•®πς…ΫXªκtζΥ(ςΕΑ]Ν]_ω²γƒ=Ζzχη>J²ƒGΠχΗψs]ηΕίXό:ψ­ρΐ]Σ^ιρvµΆiΧM2O$Φ6wn–4¨±£ΜmΔ~qH£Q)a‚y―?GσψζΏ.Η`η‚ΕΧΒM§:5%JM;Ζπi6fοgηkΦyFi‡Ο2¬Ώ8Β©F†cƒ΅‹¤ªG’jxFpN/TμυOkkη+σΗµCSƒΈ~ ÿ
‰—O_ρ®hix½:ώ_πFϊ§Ϊί‚^©‰ώ_δϋΧyΏώ']ή-πvqνβ;>9'Ι"»Ζ#θ3ύEq6gώ/·ΒAηΖ^\½β{ΟN“lφ―s‡ίό*ΰξΦµaªΫγί%­ϋβ{Qΰ|ξOgΔλίχ3ώ­we©ύΞiίς³λ³Β9φr?01tϊbβ™‡¨ϊιΗ=ύ:§§γμVΈÿ
ze>UΥΐlηw<qΤυ9φχι_ΦψαΣήήΞ+ζ”WMδ†‚O^ΦΦ΄έ―Σ¶Βÿ
Sνώ=?Ζ ‘Qνωz~eρ“Αη®{ύ=E°gΫίÿ
ΥΣ§_zι<ψ4―λΛϊω’―ϋtγώ·\φγΤR‘σίάgÒg¶qώΟjB@κ@ϊΠ@‡§ωόΊ~:STυΑΛ<Γ§ÿ
¬Ò·#ƒωΉ8Pyÿ
λΤ@€W, ±ΐΙΙγΧ9#Ήτ£^/Rβ—+»µέ··nϊ_nύ	ÿ
Οωÿ
λΤeΏOΔ‡φυ9τΞx―Ζήπ&—6Ήγψ{ΒE²»Ο¨ψ“X°Ρ¬γTRμZ{ϋ#ΘPN7€0	#?’΄Oόÿ
φ7ψ4/τΟjΪΏΗΪy‰φ?D πΥ½ΒL]ψ―Qςld…%F6-Mƒ%
e5Ω‡Λ±x·gBr‹{¤νΣ®Ϋί};Ϋ―5lnΉªΦ†έo--·]ύOΩ„\®–ϋΑ€ ξγ<ΰcrqάζ“ώ9ψΟ§ι?
Ύ	ό²Τβ}KΕ~6Έρ~»¥[]ΐσZι~Σ|«)uH¥2Δ“ίκκΦΝ2l‘­δ1±hN?3Ώhψ-―νΏρςκοΓΏ
o΅ψ1αΛΙZΦ+α¦.£γ	 Έf8ΔΣCs|'”2 lR‰³ε`¨Η€|0ÿ
‚jÿ
ΑBΏk½|xΆϋανF²Β[ÿ
Ώµ-G@IΦBXΟηψ™ΔZ’w ΣτΫ¨Δ|*¨eφ™6Kªµ,v2½(Έ4ύ›µξΪΥ·mϊiάω<Ϋ8©£<&R§6i;4ν~ΛOΒΫ½O―ÿ
ΰή…1x»φ¶ρΟΔ«λeία‡ΓyΦΥΞ	ƒ\ρ^­oϋ	βΛNΤ`>[oC2±!w5i…ΎχΜ	,Gγ¶Oγ
ΧεGόΛώ	Υ{ϋ
ψΗφΎ)ρ¶•γΏ|SΥ4-S_½Ρt«‹/AµΠ¬.mmt:ζρζ£ά^έήKy-µ€’yr-Πηυ\νsΙΙχιχ³ OβsΟƒΕy1ωT“‚IFξΪ$–ΊόνΎΧ=~ΐK	‚J¤dªMήKfϋm§nΊ2	,3ΧύψόMBΜpΘΘΘη±χΑυνβζbΐΰp¥Ή8 r00=³Ζ@Νsz‹ΚYbfTάF`2;ςΗσ__ΖΡ–ΙjΦΦσσΩ?;[C)Έή.ένήÿ
~ϊώf­ξ¦°‚‰χπΐcsxυη
Ο®bβξIΜORI'¨ΑΞ
ΑΗ9η<σX™³Ψη=O\υλΧ=στ1uυγΉη φχλλυζΌjΈ©T’Ke{;ο·ιΊ_5ΉμQΓF2IFϊ^ϋ΄Ò]?Κύ['δΰƒGsΣηΧ‡΅„{`g$ώΎO_ΕΚsυ~½?¥.ηΦΈy›iωίςΩΑισ]QΣk]oΥ―πΪΪw¶«ΟB3‚½~9ΐ8Ώ\vSW¨ÿ
?δϊ{Τ¤Χόÿ
_sQ…δqλύϊn±ιψΡ{^έRWΫΧϊύnύΥ½<νώD΄RσλΣΏΎiiϊώΏ/Qnωÿ
?ήτφ§σωχν_zF―NGORq¨υόσJτλύ}ύθOαο`?98γρώ§?δS#·γÿ
Φÿ
?ΞΆθ[=qΤtώP·^¦‘Ώ—M6ν―{u}6µϊyOΖΣ·ΐWάγ7–YιΟο²sωgπ―XΰκG~ƒ#ωΧΫyπ%Ψυ½΄νύΩ[τΗρ®ό$ψΏδWΣeΚτΧαήφµ―ΣΏάxΨΟβό—δ­s#WoM*ύΏi69ό3ΫÒΏOςσ“wsQ™\ώ_η=kϊ\ΧΙώΖΦ}?²u3g9ηυ―ζÿ
›«³ωxΉιώϋρ?¥~§Α#³Ώw^ένεσ?/γ/’¶’vν·ΟKnÿ
αΎpύ΅F<)¤σΑΦz{ύ_Ο¦}«γΤsΧ9Ξ2sΟWΧÿ
΄!'Γ:PηώBÿ
ΚήoιϊWΘ‘©>τΟ·_σν_­aÿ
†·ω|Όϋ/;—Τώ$½ΛϊΫώι·όξ-ÿ
πPGuόhΗ©δψ+]ύ~έ+ϋ¥=Ojώΰό+ΰjdWΖΈΖz/‚uΣεπ―ξ|υ8υ5σ\A¥JNίςξέ7ΫόόΑ?ρ/ΘJ(ΆΎdξ
†^„r;~YηgΏR‘ώ{zϋzΤJΚ?‚ώ¶ιχiΤ¨¶ΥόµιΧ©κϊ=ΟΪτΛYΙωΚlq
ΛςώΈΟΣ΄«‡πΨS>Ηa4Ι' ωƒ°!zϋυ8®βΈjΕσ++¦ίOONύώ{I…=5w­’·Άόt·—nαETj~WZohωω.ί4uQW~ϋ¶ΏM7όΏ QE›zhϊy/εÒΙιΧοvξET
QE
RA£΄2ÿ
ΟιNχ·εN―oΙ
½Ίzδχύ?.sKGωΕI»―DµΏ^_5λ§βµ²τ_—«όΨQE
QE
QEώΏ―@
(Ά€
(Ά€
>ΎΉÿ
>ώτQZ¦I=lΊv·ίΫGάRWVώ—υψ4t­{h \(>d*0&
Όό²/<δδ“ΐ5ΐ!9*Αƒ/!‚¤r8η9zk®_ZΠ#Όsl«Ò‚p0©0
a_εnΑ†=9ΊaS['­ΌΌ―eÿ
cΚΕα—4Όχ¶®ϊ+½{®—Σ_?Ά4s[9β6@@*ΚGd
ηΈΘΗ5`{υυϊγπΟΞ3:Φκ{hοΆι«Òÿ
Χ¦Η‘(J¦μ:(« (Ά
(Ά
)B“γιΤτ$dJωφΔύ®ώ~Δ?³ÿ
?h?:ƒΓΎΣάiz-³ΖΊΗ|Ot„΄8ζe[ύ^π,!Ϋ0ΩΒ./.
Γnζµ£F¥z‘§¶δÒΣΧ_%oκέFÒNÿ
+~:uϋΟΆΌOβo	ψ@ΎρOόM xCΓzTs©λώ&Φ4ύF±‚5,ςέj:Εµ*σΎYgΈι_“ίΰ»ÿ
πKΏ…΄ϊ-ίνomeh®[α—„ΌUγ­:L‰ϋkJΣsµ”€m/®*Δg?Αν©ÿ
Eύ¤Ώΰ£?5=oβÿ
‰/4‡vΧ“Λΰ?‚Τ/­ό	α[#}MfeQ®λΎH_¶kΙ4ς΄VΖ;HΎ<UΪ
E@€`(ΰγ $π1ΑΙΞkξ²ξZjuδΤM«j΄‹Ω½uΎέ:wρ1Y££UΣP²‹έ;ίg®–zvξ~ΘΑΗπP―Ω§φξψϋ1kΏ³gµθψuγ½'Ε©ψ_]π¶΅¤λZη‰t[»[WµΧ--L†{=_Μ¶σβJ3ΫOθ‡μυγϋO~λφZέ®»|¤IskwΨ³“GΡml›LΈς¥”ΫάΨ3ΪΘΙ$.¬x?Κεφe¨Αφ{Ϋ[k[–H–@ΐ‚	S†ωNGΝµ°Ρό"ψίρKφ@ρD^7ψi«έκ>Ό½„ψΫΐ„ÒΝ£κV„¬sNΠξ+k%–ΛU„%έ±Ϊ·=£Iz¬από»PQµ–ΦZίmwvΧK«μwa3*XµN‡ΑRο•Ιι9;Z?έ“{toCϊκRΧzώ#ιηWκίμΕd,~xpUοfΤ―$'ψΧ“<φςΥq{gψƒπCγ?„>:ό8πίΔΏ^Δ‹+@μ†λLΎ‹έ.ω‰κΞ}ρΘ¬
$
«)―ήOv‚Λα_aΑ΄k†³ΞΟ3ώρ“#ƒΫ“_›ΣqSΡ»+kn–rΣ§m=5exΙrΈμώΊόϋXφ` ε€“Η
δϊ
:±'€;u“ÿ
¶?ό;φMύ‘µ-GΑ’κzΕΟZ{®|ΰ·.uψƒΔ³Ιύ•¤H­…’Φ3}¨Ζr_OΒÒÿ
Αb?kύ[φLύ’υwπV£&—ρ?βΕλxΑΊ»„ΌΡm® i|C®Ϊ0!ΆΌ³ÒΔΩLΌΓwsγ―ΰ6φςηPΊΉ½½ΈςςξigΊΊΊ‘¦ΉΉΈ•ΪIηΈBÒK4²³<#³331$’k|(†.
­Tάok-‹ηώVν΅”κΈν¶Ώ†νέ}ίΥÿ
¥/ΑΚ_nο.Α³‡Γ½'M±΄Oψ«ΔZΕα€–Ψ·§[θ3•ΑckΙ*s\Hÿ
ƒ‘j ΰΗπ?ΰ`Bίq¥ρΞHΘΰ·φΫΰσΧn3½+ωΪΙυ¥
®?ΓΦΎ²Iƒ‚IQ[-ό­―GΣςμ>²γd®Φ/ψ½VέvΎητ™kÿ
(~Ρ(ή~Ο_&γζ6ϊΟ"$ϋ	.\ΑΗ$ζΊέ?ώ]ψΡªώΛ~»Ηί{λ–yμJ¥Ζ—wΑ2ωσ_Μ1ΐ<=ωÿ
=i)Ό“Ϊύά[YιΆΏ]4¶„:σζMI―ψ=µςξV–πs<!AΦΏdΗ'€Ν¦|JPz.τ%ΰvΟε]Ζ™ÿ
1|(’D]cφ`ψ‰f§ίMρ―…οΒδΰΰ]Α§ώ0ΟCΧς ΙΈυό:Τb6Ϋ<τΟnsz|υ¬g‘ΰ¥or+fμ›νέΪϊtOmK"iYΝΎχ[ήή»%nή¨ώΣ΄Oψ9φQΌT:ίΒΊ$+ΈOκa2['n©Λ#¨Ζx8Θ
Χ―θ?πpWόÿ
U(Ί§ρ3Γm!QKΐZέÒ!?ή}6Ξδ
2ΐ0ΗNµό,ΰ‘·,GΤÿ
ιQΞyΗSΧ“ÿ
λΞ3\Σαά$¶χvϋ>ΧNΐ±	όIΏ;νµόµΥYiχθAαοψ-ό‹Δ*…h}FgΩόEαΟhμ¥ΗήηΓΛΰπΕ¤
;ΧΎψkώ
!ϋxΏΛώΑύ©>	έ4q.|u¤i’ς@PcΥf±tbO!€#ƒ›F#Ίϋκ?¥Gφt?yW©?uO―?0<“Σρ¬'ΓT>Δε~Ι-τ]ού;χ-VMώWΥ.ÿ
ΧδΏΤ“Γί>ψ²8επΏΔο‡ή$A”}Ζ^Υ„™
‚ΗQΈ$ς:ϊϋΟν”4QL*Ρ²Θ­ΑθP°νλ>•ώUΛqfΒK9§µ‘~e’Ϊim‚
΄,@ ƒΨΰgκψσρΟΑoΎψΑρCΓΟ@ÒΌwβk8γΪ>\CΆb*ΌaL{xΗBEsK†»S—Ek¥¥νΣΝ>‹δυΦtϊ[ξνκϊΫO»ύC”ξιγ9>Έν{“ΪΜTγ#‡^ƒtÿ
9―σ©πGό?ώ
ΰ/³φ™ψvΪxβΗΕLªFαΧl/•Τ€Cdΐγ=~~Νίπpÿ
Ζ―jϊv“ϋJψ3Cψƒαy$ÿ
ψ6Ξ?ψ¦Ξ"ΑZλϋ"9WAΤv+οxi’3/Ι)αG~ΔR‹”\geΡ///λ[φ4U”­kt»νµτωι©ύ‹’O_δ+―π$πΟτMX¬"ε-ξΐ +Ϊά°`ΩΘ;CPF =ΈωGφtύ¥ώ~ΤΏτÿ
‰?Όe¦x³Γχ±έ%΄¦-OEΎΨm/\Òηίι•±m²ΫέΫΔΔ,FH9_θ8Χ,¤γ¨#Χgu`¤ραKV…^IΕΕ«7}.•µI$Ό½]ύtψ“Χµ^[ωτνkχ?›oψ;7^ΏaίC*<_πƒψίY
―’[Tρ·†΄Έ]γηG
)ΗΏ³ΟΑφ_ψ2Χώ}|%α»oϋρ£YGϊmΗα_Α§ό·γ/ψLlÿ
ΨsK7iÿ
	΄]>δ4€ΘΧw_―-§„αAKH}ά¬ƒ%N{~Κπφ€‡&”0>Ku#®F1ί“θ+άΖµ,·Τ]Ύ5»ΊwΣn–IYώSK6ΏΐΫκµq{χ»Χ[_ΠΨΆ+ηΔQEύ?―Αώ@­u}―― TS}ΟΔcς?Σ5!8ηυνQK€¥±ωξώ§½dά“wΧ§[tΫcDοΙk'Μ—τΧηίΉκ>γD΄υςÿ
Q τϊVό`€8όϋΰΰτΞ1υΕ`xxÿ
Δ–Σ<ό8ÿ
®™8ώUΡ©?Ο_ώΏηÒΏ>Μ?ή«-}ιθϋY'§Οu£κΌΏXΛΏάpΙÿ
$Ηϊϋµ{‰'έ χ8ϊgόώµTη οcς
¶ΐ`η·?UlπRά}9qη\mμ·ΦΫκ›QΥY_e®©jzzώ7ν·υς?*ÿ
ΰ¬­‚>=βγιΚ9ÿ
¨>ΌOς?η"ΏΩ:Ήϊ2?—α_Π7ό®]|ίβ]}2O^8Λÿ
Χ―ηά±=zώ­ψzώΏ…4ψ οΔ\ΚΙ,=¬Ί­=ύuΨÿ
Z>‡ΠΏ…΄“λ›cÿ
ΐ©νψ¥ζ9ΉSOÿ
_JƒΞ}°9ν½Ή#Ò¬
η΅φªξΨ<¦tÿ
λÿ
υψόβ)ΏΏςσK_‘ύg’jύvς»σώ»·dƒΧ±οψσΫι_>"?Βo‹ψ–Òή/„όCi¨άΪDβ.¬Y^ΣP…$`Κ’Iaq:Η©r»€5ΧίιώΏÿ

‡lη δ#=2±ξ	®ά.xMU'jΈz΄κΑΈ­'	FIΫδοί]ΡΕε8\χ'Μ2|d[ΓfZψJϋ¦ιW¤ιM.Χ›ΊOV΄? /΄ΟΪkΖύ¥ÿ
fΟ^π'@ƒIρNΆΧr[ήΕeξK–HKΝi¨ΪΪ<–W¶:„QΕ4pΪxό¶Oν_ϋFxΐZημ‹¬it‰πσΗ·SxΟTÒu‹gPΚ/Β/ªjΊ„6SI¶κδjWχj’ IΥγi*kπbΪϊςΩ%ΉβeΩ*A4‘,«ςό²έCΑΟ!OQ‘E‚€v¨Rά“I#®' ώυϊ„όK^ΚU0ωtpψΌG²–&ª›΄κBtªsBκ<Ò¦Ή“»wÒIoό‚ϊ*ΉfxUρE\~I”QΖa²ΌΤhΡΕΗ΅ZΓβ1±|υ£EVN•”bΉmΚξΩύκÿ
>xοφ™πχν¥Η?Gα6ΗJΦdΠΆΌΣc†MGHΡηΣ¬η›U7κ`΄0Κ’έYΙj%Yβh‹FIΗγgνƒρgKψΩϋCxϋΗ7Γ·e θ·8eϋv Ϋ‹(οHVUΉ”Ν4a£V΄d“_: ;v‚U	ΙΨ‚b
ΰu'¨ΑΙΘ/d‰ΰg

Ψγ#΅8Ύ7ρΓΞ0―	…ΐΣΑC‹38Ξs–"Ί‚‚vk–IήΧο®§ήxmΰ;ΰΌζ¦s™ρ':©„ΚC’S©‡§AeΩk©ν])r£j1s’I(ν©ϊρΧΗ^Ώÿ
‚qόπ}—‰t‹Xkήϋf…oªZIªΓµΎΏ½ξ4θζ7‰~d^c4aΘΔÿ
ΰÿ
<ΰίƒ?µβ_ψ@ΌΧ|+2ivΊΞ«§ιrj3Ώ‡uΫe†Κ;Ή΅k©L’$b(ΉibΒΏ*AώξB±*88λΐγ··n)‚8Ι€m§<€Hωƒdn0zu¨Γρώ7ΰρκ‚ΒεπΐΌ?µ’¥(Β²F’ψ’΄–χ9±GΌ²Ώg9,Φ|Ω·Υβ®¬/kAΤΜ!XT“\ΡVpsR‹εwKK±Ώ>"|ύ§?c­'φ[ψγϋ?…^1πWφφ^«¬Οkmk¨Ε¦ίΛw§j^Νkmx¦‰4ϋέ<Ξ—0Θh
Π΄dσί΄ÿ
Εί‚ÿ
g
~Ηÿ
<Ioρ
ΰλΟ<Qep·zeVώ!·Φυ;ΉuS5“ή]^©hμm¦Z@\οζr&Z(ί•YG# `1ΘΘƒ$
xηΏ4ª›H8p½π0p9κ22zqNÿ
ψ‰8¥‡΄p4#‹•`εN\ÿ
U„”•[ς«―vS²vν-W†Ύ943YbªηΩ²7­›QΘcQ£O5ΔΓ–¦'Ϋ¨ϋYAIΚ¬)IΪ3{ςέ¬ÿ
·ÿ
Ζ?‡~?φp_ψΛAρπ®½§¬"ϊήϋϋ*Ώ±ΝηΩδslΓΚμ`<¦ωAR+3φλψΫπΓβ7ΔΩ³_π‡t?ιήΥ­.<Aq¥]}­tcΦ΄;™$»ςΉVÒ?F|Dό+ς΄:AλΰΰϊωΏ^E1‚’7/NsΥΈΙκIz“ωΦuΌDΗW–*oF/πξΙΙ¨ΗΛev7,o{λ³Koc/ϊ7δ8
9'.m“Ι(η)ΙΣ΅Χ§›σΊΆQmJ—;P”d―Ό”Ϋ?ΪφΚψsαΪƒΰ/ΖOλoΌ7αx‹Γ>.‡B¥ΈƒLΧf·cG^B$Φ¶ς—RZy%„H%N›βίΏaz±ρOΔ΄_Δ³ύΉh—rό9Π<}βΛXc½k5‰νμ|+ϋF%ΖΜΛg‚Α.H«.εό'.ΕBξ$

δδ
8
δ‘ί§Χ―_©ª’0	*»Ί‚2H8
;ϊγΡψ:Ώk‚ΒW£‰q¨©TE58SΌyf›‹QO–NQ½­»ΏΆΑeΑηΩΖ_‹Κ°Ο[Aa}®?ρΔ(VZ)Σ©	TqJ„Ή[WκtΎ!“CΔυΟ†ÿ
΄G‡ξ5BmjςωΪ―φD—R6u)71{γjbϋIg9”9Η¦&qΘγttθωΕH}ΦΏ7―_λ•νΚκΤ”ΪνΟ―*ΫDξ’ι¥‘ύC—`!—eψLΊ%V:¨BµT½¤γN	^V²»¶­$·²D©Θϊtλώ}½)' ΰrz.½Ίύ}ιTzδcΧΎΓΏΧ¥)δ΅©²ήΛ}νηωώ§CMimνΏ}/oΰU`I?§Στη“Σιωqzxÿ
‹υπ‰s“ÿ
	—‚€=9ÿ
„’Ι‡NzϋΧrG8ϊ~$ϊζkΣc'γÿ
Αΰ –>4π8γΥΌIf?Zυψy5ΰ―Ò΄}>(ο§–Ύ‡ΔxΆΏγΞ ÒμX†ό“΅/UΎτGχ%§δYΪθρ}>δ}‡ιωΰΥΡN2x°>{η9λτª¶_ριmωγε΄cόφ«2zg·§©λƒοώs_Χξαn°Ϋ+¨»ώZώ'ψaJυ«½Ώ{$Ό½η·®Ύ©
έN}±κxΗ―N;δϊw¦T„q–ΐ8ΰ^OΏ_λΟ85lυΓw1ƒy'=±Νov¬ΌÒΏάΎoVϊί®‹Ο„Szλg²ώ½t%γi8$τΗROυ=ΐΟQYϊ•ώ›£ΪO©k7φZ>›j¦KΝGUΊƒO²¶ηl“άέI0¨Α%ΒIΘ?…ΏπT/ψ)ÿ
ν'ϋxΛMψeπΣΰΆYψNϋΓΏ<_{¬5Ε¶x΅Τ#πÿ
‡¬[;­.Yαε5ΫΉ§ΜΡJtΤ‚X¥“σΗOύΏΰ®πPhτοόtψ©ÿ
'Γÿ
ZΪjz|Ύ3ρ ΄±GΤ"φΖοHψoΰt[&[i΅–ΥµXμe’27ΜAή=ά.KR¥b+ΤT©JΝ6Òm;mwΩ―ψ}όΊΩ­(β'‡£J¤ªΑ]¦Mik[§nύ—ύΐύ ÿ
ΰ­±μψ—Φ:‡Ε8~"x®ΛΝ/
|0¶>)½–ζ0†}Z"πεξά…ο5xπΑΨ_†ÿ
ΰΰO?/.ό1ϋ6ό4Σ>ΨήfÒΧXΥ —Η>8Ί2’‰%µ•¤)¤i²Ί”+[jl’.|ΗοΏƒ_πo‡μΥα­oΎ6όGψρƒWG%Φ§\[ψΓΜdxΜk{¬OnΞ®0Ϊ.ΚTδdύkψ5ϋώΛ
-­­Ύόπ…¥·@‘κqhpjΫA.µª‹ΝIδ%C4i‰Η§΅N¦O€zÒuη›χ—M]Σ_…ώhδ©K3Ζ?v^ΖΩ«τΡωξϊο£τ_ΗVϋΑPÿ
o½F?ψ»LψΆj“}΅|Eρ§Δχήπά++δΛ¤θ£ΗvΦ±’­z~aX²±¶0κΐψ7OΒzTΊf·ϋI|hΎρ\‘2O{ΰo‡{hK0Ϊοm7‰υPΈ:²ΞΡi6FMΘbΈ―ι°
UUU^B…UπªΈ@~Q·2sL'<¶yλ“Ή$sώyγΫOV·³ΑΣ†Ρ8E]¤•®ί¦ΘÒ‡Π~ώ%Κ΄τvoέ½Σ·ΊoeΏ/|ύ‹ÿ
fΩίO²²ψUπ{Β~Έ°P°λw|zΧ‘σM&µ«Λα+ΊG†XrΜ@PΏ(ϊt
0΅098
N8ηn@=t§± g Λ·―ÿ
"©\ήΕ
Ι`[8
dέxλΣ9ξz`|Φ+3ΔΤ|ΥkΞMτrv¶o+]uΧΟ_w€£Gέ£J1ÒήμnΪΣ――~½ξZ.#RΜέ9`{wμOSΗAλΨΕΌΦ!ΡΖ›› 9Ξχτ8 ~Uy©<ΜAωTdHιΣyδσΙΗ¥f–x,}XoRO?_Λ‘^'δχoώήΎΪ[_OΖϋ·ξPΑΕAs-wΪϊ«?M?«lM=ΓΚΔγ8'€GL:Oj®΅Ί6<η'°Ζ3ψηςΙΕ83~:ύ)Ώη5εΤ¨ζο―Οεψ_¥ΟF1\‰+Zύz=Ό――α³ΐοΫΤυβΆ £·ΧϊTΔύΞi…FRrNGαƒΫςηΏjΝhΥή›ιΏ•ΎvΎ[sDγμ¶K_UΫdέο°ª0ORyηÿ
2~ΎτϊoN99ΟN£xΙ=³@νώ<sΑτη―Τ~_ΧC4ΪzY·δÿ
¥ΌύaΤyτΟψϊ©h¦τz;ω‰½eÿ
ÿ
ησ
2C€δdR£M«΅hΆµkm-ω―Ζί‡SN3ΘΙ'LσνωϊS©3τΰς3Ξ?Η${{Σ[«νuKώ&­¤―²ΣΊ·m?CΘΎ6ΰxδχΦίvΗ―Ώ™―‰%9-Ξ2Xσίζ―ηύkνOLα”ΰκc§—?ΚΎ*”Ω|›ΎΌη_O–+ΣVέ;»φ\»_΅βbΧ5[τΡ>––1µςF­1ν¤κd:ÿ
Γρ―ζ³Q@..€ÿ
σΝcΧΏ―©ϊJ$mΧ?μªΐY\gΧÒΏ›;ΣΊ[“Χ2Μ3oι_ªpZWΔ[MRΫª¶ΙΩ~‡εόkόL;ώνΏ―Όω“φ…]ΎÒIΖµΫί¥¬§©Ο\η§jωN:{ΗO_Λϊχφ†9πΦ}\GύzΈώuςιψζkυ?π¶ισΡ―ΓΏ΅ω}_βKεω+§_πFδσ?ΰ΅ÿ
‡t΄ρόχΗ‚υϊ―ξ~Ώ†―ψ#4yÿ
‚†ό|³Iψ„ίπv¨?©ϋβΏΉZω~!ώ--v§½―ΚφσNθξΐόÿ
ό‚(―›;‚(¤ΥΥ'm‹V7MeyotΉύά‹Ώf6 8όΟ<pkΧΦEY†W”A29οϊύOZρΓ5θ½ϋM“[»%«`g’c~ΐ!ΠrΤ‹i5}ϋkÒϊkύ3ΨΐUQ—$Ίνδέ―ΩτΦϋ#¤Ά+΄ο³σςσΣεÿ
φ(¬ε{ΩίDΏ%ύ0
(Ά¤( ( ƒΐ'όÿ
Z)Lzρÿ
Χÿ
=π;ΠΡ@ιΟΈλ*δτ]Ò¶›_έ}4ÿ
'ς²ώΏ Ά*
(Ά
(Ά
(Ά
(ΆΔ(ΆζοdΧλς
F]ΐ‘Ώατ=ύF}sJxÿ
λRd`€πΤ^µQζΊjϋ¥u.ί‘πΖv΅¥Zκ1ηAΈr²+#
@ γuΓdψ5ηZ–‰6”κεΦX€²+Ω :dsΐΓΩκk­ΥΌM 0Ψ…εx%ξ£ηΙΰ±0`u<δgƒΉΊΈΎ›ΞF‘Χ8,pªFΥL
Η^;ΕvΖφΧW§έ¦fύ7λ}3*M5”¶½ϊ;y|―m:τEΏΞ?:+tΦΛ§Mÿ
{χΠς„<τÿ
?ησ¤VέΗCJFAητ¦ªNΟΣΫϊγΈªτQE
>5fa΄d{sΙΰsάτλΪΏψ9λφ¨Χ~,ώΣZ_μΣαέfY|ϋ<hΊv³βΦεΎΝyγίΩExΪ–£mεDΡgµµ·2£ύ›ν—L‚7]ίίd“Ηikwy3†Φή[‰π8£w•Ι$
£ÿ
#Ϊ«γÿ
ΗoΫ·φ€ψ§yu%Ν―ΔΎ:%Θ’hΝζ›¥[c.;m6ήΚ8
?"ΐ΅p8?]Βt#Sλ5Νμδ’MhέΥτkδÿ
ΘαΖσΈ>FΧ,e'Òφ·ι΅ς…•ΓZέΫέ)ζ9‘Ιηζ°ήƒrb1υξθUβVVJ‚t η>ιπνZΘιΪφzYέOYQΞΖ=z¨χΖ:Χ®θ³&ΖN9„!<ώN~ξ,WκT®Ϊθ¶ω-΄ΪΦlω¬RΌc$®έυ{½­ηχΐ=ΑΊD½υΔWJ^-Λ	R]›j‘ƒό οt9―β=*ς{EΞ›v±Θ»–{YΤΗ,d2wq0Fr+¤ψm"%ύόd|ÒΫΖSκ¬ΩΑνύ	βΊOΨ-Ζ—φΐ Ig6ό‘Ο–ΐ«δq:µ¥HΖqz-U¶ΊwΡ·¦½#“”\]¤¤i½Υ­ω}ΗΠ_πHΟwψ«ρ?φxΤ.¦“IΦγoxZXμ·ΊΣG~ ε}¦άXΜθ€φÒ9ω²kϋ·ψmiφ/xBΤ‚¦ι+ƒοgNνωυζΏΞgφmρGό+ÿ
ΫGΰ£som¬λv>Τ
±Q:_Λ6™sδαΓEsm•~κ§
ÿ
H?@-τ=αaÒ΄Θ€#GiO@A=qcΘψ’›£V4ϊ,Cv·Έ”ZΫ$ÒΧΆξ~ƒJ§·ΓQΔJΞU)§&΄ΌÒQ›¶»Ι_Υ½§ςqÿ
(xΎ{‰_³o€ÒαΕΎΰ―xΆ{]ΔΕφ­GYƒM·¨;K¬§OdqΕ1κLΗ# κ:
ώƒΏΰγM@Οϋ^ό,°δ‹‚;—<+έx―^”πGP=3ώ}6ςOL‚8χ9Ξkι²:i`i«+¶Ί·Άk²ΫΧ½Ξ9ΙθµΧϊ°Β@_~}‡N1υ§.ίL®z,σψr2)
±rδ““u$υΰwπ~ΕώΛ?πCOΫ‹φΆπv™ρΗHπ—Βoλ¶‰¨xwUψ©}«iϊ½cp«%µε†τM/VΦb°Ή¶½Τν΄ψξP¬ΦΒh$CσάoβOxy††3σΜS‡›ε±5΅Ξ[ςΣ¥wRnΫςΖVέ­νδ|1ρZ”ςά\G³µεIΖύSz/-Χ‘ψξTυοΫΠÒ_―ωτιλΪΏRÿ
lψ#Χν—ϋxrψΛΓΊ7ΔO‡v9:Ο~O«κΦ>^Ά}{JΥ4­/YΣ¬¶¶Άl&Σ# ¬χ°³ ΛDω†sΙ11 p{τ ƒ‚jψ/ΔNγό³Ξp™¶2P•L=jrtηΆp«MZ¤T¥¶µχ2Ξx4Θ1ΓζxZΈyΚ*IΞ-E§§»'ξ½vΧΧ`!xΘΛÿ
­ψ‹‚xυοΣ·γλψc½JΓ γ
υ'ΧΏγμEB9φm$ΦªχWΩ/ΊΛO?§x¤΄»σϋοnέ¶Ή0Qάέ½Ήδυζ—hτ•0?δ§ΣότόMIWdÒ[θΊΏσς&κΫkίξιύn&Π{ΐ…eόύΗ©θ§NΉιR‚ÿ
λίΏnpsODΌΌή-Ώαψ	ί¦ΎDeq‚:zuώXόT™9©Ω‚Γ _BIΰg t .Ήκ£-έ€n½1’IOLdf°©‰ΒΠqUªαιίXϋI¨σl¬“Jν7k__‘µ:5*&αNs¶όι-―£υωΐοΗζ?φSOP9θy§=}¨K€ΐ“1‚8'=lρΣµ*Έ®;uΟ·Ώ±υλυ­#:UbΉfe·Ϋ;rλ®­Τg¤γ(΄οο]>—²zχΣπ>Τύ…m?±Η/|Iπ®¥{7‚ο―μtΟ‰ώΙύ›β	<κ—΅νwS[Ò­ή{έP&‚ιZέ­®ξ"“ύ<γΗ^ποό3¨C©xΕ.›―θΊ„$o4έZÒ+Ϋ+„n–ήhί“ΙΞ9Ι―ςΡr9μ¶λΨ_¦kϋίÿ
‚+|HΤ|ÿ
ϊψ<uK™.ο|qβo
erΟφ/kWQi±,Iϋ6‘-+ΞDq¨c?)ΔHΖ4«$’R³ΫTÒoT—ιtfάωoΆ[iΡiλcρcώ6Σµ­;φΌύ•όe¦Eςiίξo¬c»‹6Rκ>ψ„ΗΩξφ4rIΝ{h³":1BΏdÿ
bOψ9α—ΔKοψφΏψbΏu›±e¥Eρ'Αw·zχΓ¥GΌrλZEÒ6½αλc&ί6ς	u›x·3\}‡σ·ώ9πϊΟΩ_ΕeWqÿ
…‹αη“aÿ
"Φ¦±±$~ν)΅=7­dέ.!¥²NN#³uΑΑξkΤΚςΊ†Sx·Q6Χς­’²ιdµ¶­υνεcρµ(Φ5+(έ«$―y_]5ZlΊ#ύwΌ7β=Ζ“βko|9®ΨΫκz6·£ήA¨iwΛkyeylςAqo<l¬’Dμ‡8ΰΦΥπAΏψ*ΞΏϋ9|MπΧμ…ρ―Δsκ
~'λqiυ]jυε?
|o«Θ"΄±µΈ”‘„|M¨J°Ic$‚/Unm‚Es:οα rOΎyΞG=N}kβσ²¦]U'rMςΛΎªώz-ΏK4va1qΔFΫMnΏ]:>EWvC1γχϊπ—\ϊTΥΨΫκs~‡ΣΠxΕfυζ]m~«ωoo»Ύ½·^«σ=CΓΓ5―Ί±όάΦθ<κ?l~'ΫΝbxώ@¶ΏυΜÿ
θΚάÿ
?ηόώUωώaώυWόrό£·λς?[ΛΏάpίυνι0ό‰²0?σΗ§εη³7#Ψή‰τκqRΣHRy8=3Ϋγοι\j¬›σέήρZό—Μτ)»uΦλπώω“πWδ?ΎΚªJ/Δ‹dvΞB»ψ{](	wm~ω8ιΑΗσξ£ζΞ@ηAΘgΤc§oLWφροΰ_ƒ?hO‡Χή
ρ¬W"Ξ[5:ώΚo#PÒµ[Q"ΫjR•uF“M¤±ΛΦσO¨ΘδWΰÿ
Ώΰ–Ώ΄†βFΟΐGΑ~+πΆΊ¶•«j^#mU’Ω!59΄ι£β"v;Aq$2ή(±Aψπ–o™ζ«ΓΛBtιΒΠjπ”RNρ½ϊ-“¶ΧV?ΡΆχ|	Βά#>βLÒ>3Δβ΅[΅^"QTf®”£¬\]›Jι=ίζλcoqΫ?Λάgόj3Χ·<γύ>ύqΗ­~Γÿ
ΐύ®ζ>πξΤ‘²x®i0?ν–Ιc8χ<γ/όΧφ¶,wGπΡ
9Λxχ‘Ζ@N9<φ=Ή'?β&“ώΟ¨­―½dο¥τΎ¶όϊ%©ύAÿ
α=ψΗ+Ί¶ªR}Ό—ήώϋj~|ώ£O―λοP0aΘ~rO―§Χ­~―ό·φ«~^οαΔyΙΦ―ΩxΞFρ`ΌΙ8ό:T«ÿ
ύª¤o›Δ
 ‚jγ>>‘ι=s‚Ε€ψ’ώξ]Qν{Έι{yιΦοΛK+Ωÿ
ΔΘx?wΕωuμ•“›vΣd£³λΥZΗζΗ#±ρ—Ύ)F	δΰt#ΜgιΕ~'όKφ `L0ψJ„`αο<Ks”ΡΙgv<w«ÿ
Α#Ώi|όώ;ψC:qβ™=@*η?^zγ½lψ‰Ώθ­υ ··G'µύ?#‚§ÒWΑυ>oυ·ξÿ
-:ΣVΣΆ‡^ίsκ~f P#σιωϋζ”€έΘϊΟΈζΏQSώ	ϋBªξβ'Β® b$ρ;cχΣW#ίάUÿ
ΰ‘_Y°ίΎB	acβyψΞe―Χ§αGόCξ$ÿ
 8·¶µiήϊwvςΫ£οs	}'<oύj£6·¶μ΄ΦήΞύυwmίΙ–&3κ??πΝ4GΟ@nΣ=½‡ΏNX“ώ		ρ¬¨2ό^ψxκ"ποe
ϋ*_α©Χώ	ρx°ρ›ΐΠuO
krΨ=Ϊυΐ<gσ¦Ό;βNΈ4­g­Zo·χ¬ο­Χ–‡3ϊRx?oω(ΦΦÿ
uΔθ’]+υΣmΦμό
ύή;‡Χ®?•4/pxΞ	ΘδγιΫ¦kυΩΰΐS?ΗO«g'Α7®Ήη8ίª΅ΗσΐΘΗ5n/ψ#ΟΓ~χγΦƒςxγ u?σ
ΫOγZ―ψ’JοkΪÿ
Ό§Ύ;σ'¥ίs	})Ό I_=sK~\.%i¥μ½–ϋyώ?*00HΘθy9τό}²)
3υχ$tτ?
ύ’_ψ#·Ϋo›ρώΩOρω^B{ϊΦ2O=F[πG=\[φ€ΘΞ0<χς5Ύ‡¶8Ε\|8βk§υjKΆζ­NΞφο/κΝ―<ÒΏΒ•³BΫ_©b$­Σh~lό[h<δvυησΟηMXΟϋC2¤C^+φΑΰχRΛρφμφΜ^΄μ_XεΑτΝYOψ#}ªί|zΧ‚2±xSK§^^φR:φ±ªÿ
oΔνÿ
»Π[+ΊτÒθ»οώ^zDΎ–ΎΕ{ΉΎ.vµ’ΐβ"ΊoxY'wfίίΧρ@`ΑόλώNiFr>ªqΫΎ>Ώη§νό_πG_›ώ*b;Ε΅hiΘΐ?~x=†FGPkJ?ψ#Η‚†|pΔΏf™αδεN[fΐό;uιUÿ
Ηχt¨'¦«MκΪΏ[ίuψκμrΤϊ]xMu‹ΜΡΩ`«5m/ªυιδ~ρΙ8ΑαxϊΗÿ
YκKGO^}{qϊΧξÒÿ
Αώΰ}£βχΔWÿ
®KαθγΫM|p8Ο·γj?ψ#ÿ
ΒDeσ~*|O`Μή„¤A3Ξr?•ÿ
Δ/βm0λOωÿ
6ΊΩωÿ
Wg$ώ—ή«ΙVΝµΊΑUΧαiλnν[π?ΚΗ—•–4d—
‹]ΙT	-ΗBxιΙ|(³»ρÿ
νSπ{EΠb’ψ·Δ―ΪΕ$Ò/—c«ΩήίLΕ—Ι†8ξ]¥&"-Έ®Hώ†.ΰ
ονΝ®£γΟΧQυΘ<C§Δ™ƒ$0`½zϊgφoύ€?gOΩ‡S“Δ>πέεÿ
δ‰ΰÿ
„§Ε:‹k½½³±g·±‘Φ+M=!]μν΅U
“I"€ήΘό8Ν0Xά>'ιrR’“δ¨δμvIG[ΫϊΨόηΔ/¥η\7™e™~'‹ΓΥ΅IΦ£μiΕΤƒ‚άΒ“oDή—{Ψϋ^Ω
[ΐ‡ªΕΑ@«
q“ψ~τυΑΘδt<τΐθGLtιΗςζώÿ
—nύλφϊqj*=£ωιmmΩ%έώ§ωΑ‹¨§)»$ηQΛGέήέ–ϊiÿ
Μzϋg―ψγ§ÿ
―8¨Λ`„<δnΙQΧ  φ ©ΗOb?ηΤΔΓΩ²
ΩjΥϊΩ'¦›=Zξÿ
ΰhΞh5kuίϊω[ϊΉψÿ
|?ώΧύ•>όL΄·κ~(Γ¦Έΐÿ
GÒ<a¤Μo@HύΫίx{M
€ν“ΛώΑ?ΌwΔΏΨΓφtρvc72|0πξ‹zΙ;¥χ…ΰÿ
„bδΚΘ\,’>—φ†Θp³©ΪΈ
yοόcαΜÿ
`_Ϊ#Jk?¶]θ>>5Σ±Mη„® Υ¥ΉQΥ„^–€pγ'?+ΑΌ|Ύ,ύ…l|9,Μχψƒβ
ε
c:€¶ΦbPΌ–P/Ηοΐώ#τυ%ν28ΈΉ^”Τ_Ι­SΎΙmm‘αFΡΝΫi.xhμ―uk[vμφλκχύ¬aΤ“pεxΖy<τΗ=ύι:GαÒ\8ιώΔzPHΑ,@UκG§$φγΧπ‘_/9ς]¶ϋόO¥Ί|ΏϊCΚV®ίkύϊ
%qP{c‘ηιΟ|TS\Gω9ΗηsΗnγΪ³―u8αVTbΕNp	 γΧω~Μ\^Λ3ΝΑ ντ9ΞyΖzοΟ―3KαZφκÿ
›yυ³W;pψYΙ«»GΝyoΥύύw:έ]JΖ
Ώ@wdσάΣ§jηdηvff#'‘QΤ{8ξJ6F~Ήώ§=ρυυο@ ώηozρªβ'Q­^π6ϋΊ£Ψ£‡§ήΚύ]·Z_ςιahΆ“}ϊÿ
π®vΫzΏλεύ|Ξ„––JΫϊiΎΎZ3ΫΧϊR@8ώ™cρΗζ£‘ΥΘΗ4gnpA’IΖ7S΄GZvJΝ½µ•νkhτθτΧ»aΕNsPo&βΆ’»m΄’^nνεTωzςG~9οQ–nBxΟnΌςz`v#Ύ+ρ―φ•ÿ
‚“k
ψΏqΰΏ†ZN‹βΒWΧΔχϊ‹JΠκ—Ρotέ:κΦTς%³ζ&Έq2‹κadƒώ™όψ·΅όmψiα―`–Ίε£I-«8g°Ώ‚V¶Ώ°”»Μµ»h²BξXΔ‹…t―3eΈάM\¬e£&¥τm4Ρλ¦k»{ΔρGdyfεΣ΅—ζ°πµ%ΏΏ(Ζ¤Z½7(>d»vG°3ωχΗλH¤dy|ΐƒÿ
κΕ0ΩΐΞ;Γ\σ‘ÿ
Φz£§ιΰwγόI―M§{]ιk_Ρ7δ’λςυ?>nWiο¦z;―»gÿ
ϊ(λώΟ#ωΡΣυ?γόκIιo_Ζίεδ5†Aÿ
?ηόύS©γ―Cύ?Ο¥<:ϋuuφοιÿ
λ¦)οsΤηάς;»θÿ
?ψ?-`Ύ–ιÿ
―αω’QE„ύN?LΤdυ<q·ϊΏ_\wβ¤¨[?‡ηΗεΤ}ΔÒνΕω$Όϊ;ϊ4υ<oγ«cΐψq©Ϊ~?+ρΫφ<η§·ΕΩ?A·c?άWΩί†|΄tώΥµχΚΘ‘ύ+γ{kις½)―’όύ}]µ±γβeοκ·wίmΎz~:φ0όNqαMW=}4Ϋ–ό:cυφ―ζΦπ2pδνΫ’sιέω―ι#Ες*ψ‡¶4=\ÿ
ε>λ?†2~•όΫ\$ΰd»‘ι‡ίόβΏUΰΝρΫ4ώλ/ιφ?/γmgCό/EΣoό1σ7νΗ‡taªΏώ“H{c§$cΥς|Χϊλφ8πώSªJ?ςY«δ$<γΧϊfΏWΓ=¥―n§εΥ>9y»Ϋ©ϊµÿ
_‡Μÿ
‚€ό)oωε |Aύ…oΠ“Χ³NΏχ_Δ'ό]ÿ
‚€|2†~!κ1t1υζΏ·³Τφ―™β{Z~PVως·ψύΗ΅‚V§.ΞIώ―ι}αEWΜ;¦»]_π^]όφ^gzε³ΏλεδΥ―ωμτaEU§΅ί5–©Μ%Ϋ£< Θ'θyRέ=+2΅pUόΤ$HΏ2φδ\xGzΞPΣK[{;ΎΫyιΧξ:(TQ©ό“o―ΟOΧοίΫ¨¬ντ_iΠMΈ49σΓ	Pa›²N}ÿ
Ρ®F¬Ϊμ}))E4Σλ§Λυώµ
(Ά°ΔΝB(©
Ά(
Ά(
¨e8Χuύ;yλΕMPH	ΘΑνωΫΣ?Ξ®Άÿ
ϊ=QS―ωλΣOψÒή‹oOWω…QH( ( ( (§oλξÿ
2ekk·υύΐ
(ªΧWPΪ@σΞα#eφÿ
tg€N*¨ΑΙθ΄ώ―ύlDΪ‚»kD“^]­ªλ¥ÿ
’M4PFςΚλ άΜΗ

ζOaO8Ο8σ½gΔrή9µ³-°8g
‡”Hκΰc<dtΕ[YU§ϊ»`p‘gΐηsγ d(ΰ”δ`ζ²ΥGR9σΖN
φη½‰ζΊ΅NΟmlΊ.ΛVύ_kφzλδbqrΥEΩ=4jϊ%εΦήvÒέΪ€9u'®9{u=ωυυ.ΆιjΛέί§Νÿ
[όΟ1·'vΫυ
(Ά¶σÒώ{_πQEΐ(ΆsΘÿ
hώΟί|\Ò4CΓ
<{­WοGφκ3‡ξ…wr1ΗJÿ
-:β[iΪ^k­z©Ν%Ζª%wn~σ	‰'ƒλ_λΛϋu,―ϋ~Υ©D­ϋ?|QU*pF|%©†Η―Κ[πυώBzωΎ‡HΏΣσΙ"κ":σ‚F=Ν}ηi
’JώύϊΪνΗ}4υΧ¶—oiη;κ­Ώ]•·σΊμzΔ+qoγ=~Έ{ θΜγ•'bΣxMχhφ£ϋ*υθw·δsύ:Χ7ρc?5ηΰ“}0lδς$“tN:ζ®xCRmΒG2Hς 8”pI
qΣ{φύ
;_»nέz-ϊΨπ«Εϋ­έµό.ÿ
­>G¬ψW:>§ή ύάª3–π€vηiη’8¥zο‰µM>O^ΛρHg…4Ξς7
Δ¨'π8ηΐΓ+γn=20}†F
λΧ¥LdΪ1Έxσνθp=+e$“Iέ­Όφοκφνsƒ•][KkςMiWηΏ΅c1±ψ―πSέ±μΎ,ψJ"ΐςγ]ΣΖ…vp	η>ΌWϊsx~1&‘£±ώ='KoΕν"sΟδηρΕ[H—Ύiφω’κO‹^*«ΙΗφΥ“HΰΊ=sΟ_τςπΔ΅τ	†0tm({8_`=Ύ•ωwΈύni¬_“—,SWσ¶ΏζΩφωrÿ
„ά2wΥUω'=¦―M›?‰οψ8’mί·?‡mςqkπKΒο΄Ν¬λ―ΗσλΙηΦΏΩ=;εύΦÿ
ƒ†ΥΗνοjX¶ΣπGΐ “¶£βΔ{:{ηψNω8€=sΧ―=;ηόυ―s(oϋ>΄m&Ό–‰ύΖ^«M]-_KιΫϊωκ~ΐΑf	~Òÿ
·&kρF±ρ‚>ψSTψ¥«θz”Kq§j—ϊUφ™¥xnÒώΦMΠέZ&·ªΪ_Kk:Ό+fΡΜ­eθΟ¤ΨΕooΒ‘ª¤hªB**(U0 
0¨΅UB€1ώtπC?ΪΓ³χνΗ΅YψΖώΫIπΗΖj	―u[Ή£¶¶Σu]^χOΤό3<Χ²%Όskϊ]–f-„7ΚNΥΛτÒόnϊ|BΦφ?<F¤ΘΚΧ›ƒaK2εƒ7dd	ÿ
Ώh_g~;ϊμxrΎI…I[–­L$jσΙbΫχ=―=•Ò”Ήwσώηπ(ΓγψUrψΡ«GZ8ΘG“ΫªiGΩ­ωΉV®Ϊou}σΖΡ|Kα=sLΧtλ=RΒλM»΄»±Ύ‚;‹[»;¨ZήκΚκ	UÒkk$h¤Υ•‘yΕό§ΰϋ2ώΪΎxfΪ;/	Yx†?xJΖ,ωz‡|_a΄ν6=άωzjίΎ€yv‹Cώ•ή"ψ‰o6•x€¥…6ΣM}w*E­¬™%’Gb#$oid`΅AΘ›?όχγΟ†ÿ
iΫ_γ_ΔΟά­χ…[¶π―‡5π`ΥtΨAαΈ5KwRCΪκΨά^ΪH%¶ΈLΔ³ύξs›ψ¬§λuΈR?OϋJuiΤ§‚–g*°ϊ³‡2Pφ¶DωW7/CΑϊ@eTrώΐΌ}:tσ:ΨευJNίX%Ο)$ΫQri+ξΫgηγγΏvώ‡ιύ}ω¤ ¶zÿ
ROυάυ¨λύ¤Ρ>©+®—v½ΊΪύÿ
αÿ
›Oo/]µιχ
	?ΟJ‘Aη<ÿ
Aϊu¨‡ωΟω4νΗΧςγωb³jΝ_ªNώOό‚κΦ·Ο―’Ziϊχ&Ξ?•7x τλνϊίΣ­@[Ι=qώsΪ‘ΉSί£ΏιT­ε}}•‰wοσZYrέ7y$Χ}—{Ω^οΏΘύAÿ
‚Zÿ
Α;υίψ(gΗYΌ'{¨^ψsα'-¬υί~+ΣΒhΑc<Ο›α½Iγ–Ϊ=s_’ΰΉ)a°΄‚ξϊH¦xα†OνΧαΧόΫώ	ρΰOΕα‹_Ω›α¶ΉnΦkgs¨ψ·IoλΧ€ΖK‹κ²O«-ΤΈσZx. (Ως–-ª«ψωÿ
ΚέhzwΐΪξ‡ϋjO‹ήƒSl/Ϊ[M‡ΑπM§ξΰH!7’jK
ΙV)1D$1Υυ…ύ΅9Tω¶ςOeΟ΅Ξ9Γ
vπG―ψwτ±ρ·qΎ3q_ÿ
¬Ή‡δΌ#Βap,&2x¬{L=:µq•¥QΚsχzF1Ρ^χώήπΛ‚2εy£ΐa±ΌΦ“ΔΧ―Z”jΪ2*¥¦’‚»Ρέ΄πXίψ"'Ύ|>ΦΏi―ΩfΧSΡ<)αΙΌÿ
&{^ΛIΣ'—πψjϊiφΟL΄iDw–Wοt°!YγΈEµό±Η»
Ο9Ηlq`‚'9τ―υWύ¬ίΓΎ-ψ5ρWΓªΫ\θZ―ΓiΪΚ\kw¶›G»YΌο3)µƒΖPαΚ‚?Κβϊ( ΌΉΈΈXX`«D%qΞsΖάr[ γϊοθβοψƒ‘ρOq&mWβ0‹+ΝλIT©W§5,=JϋΥΤ¤άZZ¤~Oγ	ε9²<Σ.ΓΣΐΛ6§]β0ΤΫQφ°’µEΆ¤M.Ξοb³&O`r=rqλδ{ζΏ¶?ψ7Ύιξ?aέbΩ°²ψΙβΨΠώοΜΣτy/P2K7Ψφ―βmΙ+μGOp?>Έ#>ΖΏµψ77φ*ρK°!_γ_‰Yr:©ΡτPέqΐ#ΣτΝvq#ÿ
c‡h΄χνΚ–«Ιt³W?
…”¥'ΊV{ο¦½ZίεχίΚΏΰβ8Νπ›φsΤΒ,~'x‚ΟqRd_νoP‡v·Ωρ‘σ*1Σωαπfc?†μγ¥ί¬ϋ‘KÒ9
]³ΡJA,
Ζ0q_ÒOόD‘Ω§ΰτ«ΝΜ_΅0χ¶
λaμ’±ƒυόΣxT·;‹g`°9kbΟ€H—+€© 
½<δW±Β’o/zΕΝ/“λ®v|ήh¤ρQ¶ΌΪΏ-¬eΣ]ύO,ρ‹sαλφ“KnπΚ—ΊUτ.πΝo<	­εxΟ›ΦΧ‘Ίκκ2ΰώίπKΪXώΦ°‡μωρςvΈρ%ίƒm|-γf–O2γώ/1πζΉ5Γ`-ύΕΤ@;/±,Ε›όÒΎ#Ί\%«+Ε'•s"©B£ε‡
\ρΐΑ'’Mkπkί¦Υ?bώ	–8x3γ¶―soHΞmν|M΅i7΅υhσΫO$j )c#Ι5ΙΕψXΤΐΊ«γ£Q{Ϊmξι¶ΚνiΎχ4ΙζΥ~Y6γ+§}m{mιeίoVKQώΟηH3ξs_–N-V”ώyφ#ύ*Α dΗωUy:1ηψχ―·§\pqΤ•ΥΫϋτΣ®–λώoΈγΊυVϋΧιsΥ|:3ΆZϊfOΤω™8ΰc®=³ψVθμ'®?3Ο=?:Γπί:-΅ÿ
¦G?‹ΦΰΰσΠƒώ?cΒΎώχ[Κnί=Ι|Φ²οχ2ÿ
§q|cωeξ?/Χ#`g”ΡΧπ#σντÿ
υφ§3g#vÿ
8ιΗωR)
δριιψΧΪT‚	γ p
<c΅τιΟ¦xζ΅ωCδ„‘Α§ιc>€U­λώGΏ_λÿ
Χ¨N?ύη-¬ΥΧm»yvVτ.p|Ιλί―δοθτAίΰdtυ¥ι?~ώ±IJΘώ¤T{8*όJφΥ/ρiΪΛΙuNΫΑ½3’NxχΎ¤ϋzÒΫάcιύΟ?ZSΧ®xΛ·¨χοR γ?ΣέσÒ,{/κίδΏ¦ΓΪIu{u~ωΰ5ψ®Αι©?Σόύi¤Θ
>cΣ·'tηΉγ$υ’°}Ώ^ÿ
O_ÿ
V_,{/Έ^ÒW½ίNΎ—ϋνύX2ώ„HΑ τGίÒsΫπΟυÿ
?ΚVaΖyιΟ?ηρό³Lλ€xηƒ_ΔqE—DΎεώAν%gο=—_Mvξ»­‘J£9`ΰ>Έ3J	<δcΫ?ΧϊΤΑ3ίτΟυτ¥	ÿ
Μ_ώΎ{Σ΄•_ΏέΣΥ~/ΤI5kÿ
Z_uέz.Δ,21™κO§~ί^j59γλΧ®{qΫΏ=»Υ²Ήφό=±λτό©›ΏείσιΫ8ϊβ-k'µ―ÒΒU$―®ΊYι¥ΎZ‘eΟ©~§¦yΗαι†δ―~?yοΧιR?^}_\ÿ
‰IF?Κ΄VZ%ΫΛm<½Gν'όΝόϊι―αÿ
©HΘΟƒά2}OηR8ιΟωώÿ
―AM@9θzUµM¤μ“ΧNύ7iι¦7σ-OέζΥ}ÿ
ΧEύ! g9η8κsΣ'ΈόωτΖi3Χ89λσ= γόÿ
/oJ›Gω///_ΌjόνΫ›oΐ„θ9ΟAΟ^zσ!qάqΗ²Σ}όγ§ανI¤φ²υIϊvΫ {YwkώήτξΌ†ΨΖx<co}
 ς?N΄ΐ¤“Σ#ΧνωzT¤dΛ΅β”{ÿ
ΣϊRΥ;&µWz.ko=·οnΒη›RkΊΎϋk¶Ίκϋh"«~gΠςqλψdsΟJz~‡§ηό<(γΫ'©<?ύgέ©F
τϊυοτ~=σQ~f΄³Òν^ύ―ύz]δήφώΏ―O!ΥYΨη†ΛrG#γϊγ°zπΟιή«7QξNΓ8μ1Ρ[	¥­’vλuί]>wΏVϋ_αgδOό#ώ
Qϋ*ό,ψOρ»ΰΤώ7‹Εί5ox£ΐSψ/Γv²ήΝ£jϊώ•y΅,ϊΥυΟ“¦E—qwΕν„w7Ο±£ΠΘr>Fÿ
ƒx|?ρ@ψQρφOxWΔ:ƒuοx^πFµ­ιWΊ\&iτΛΛ]VσK[¤‰g‚6µ³.ΡeU¤PInΓΌ7αÿ
ΑzΫDρo‡΄OψWΕ?4έFm[Σlµ%ηρ€­υ{+‰μ/ΰΈ¶Έ{-[U‚ξ’3²xRE(ΚΏ®Ο2ΫLµΪΒήΪΚΪ0"‚ÒΪνΰ‚1Β¬0@«H
P¨ª…Β€£#ίΜkSΛ²ψRΪΧ5ξΎ%Κυςτν§Kψω}	γ³•¤ξθΙΣWςέkµ¶wnνλc£hΆA–σλς:v<vη―u2CGΖp	#―AΞΗ9ΰσΕeOu$§,νΤczsλΰ{rsΕT`ΔυΗΣ®yόΏ_Sωφ'ε7ΘΫ­¥ΩΫ§DΏύΎκ†1JM7%k―’_ίeΫV²K»9<¤u'99''?ΤzσQ(δG\δΏβiΨωsάΤzη>ώΊ]½ύΞAηƒύzwνΦΌΩJRmί^–σ¶‹Dίό;;IY$—ω~_!WΗ ώ£<zυ¦γ‘‚x#Χ=ÿ
8<τ§ύύ_§αF
θεS¥¶Χ«ÿ
/ψ&—jΫσz§uίG¨€§αAιΣωζ—·ωΝ1νΗ\uιιΣΔϋ[[O7―M·―^ΓwQI.τkΎ¨ªΫ·vτοΫQΖ3ΨvλΧγ/Ϋkφ…¶ψπwYΎ²–/ψKόE„νIδΎΌ‰£’ψ*0Γ¦@οtδ`ξHγb»Ζ>ΏΌ»‚ΚÒκζyc‚{y.f–V8γ…YΝςΆ %ξγHώYm―Ϊ
ηγΧΖ=Zm.ςIΌΰΙnt?	Gζ³άyvj:ΑP@&ϊβ0!“iΝ²F>S‹su–e³…µ‹Δή–Ν+NVM½nΤΊm&ήόπκ\uΕΈzªQ“8ζ”Ϊ|’…))QΓήΦN¬γi+6ΰ¤΄Ρ(=ΝΕΓΛs;ΌσO#ά\O+3Λ4σ1’YdvΔΜμp[ ±cΞr?Tΰÿ
΄Oό!7Ίψ+β+ΰΎρ¤οα§@±Ψx8\YFz,Zµ¤*Ρ <^Zª*‰.ΨΡίΨ[φ7ψwϋ7x3Δή'π/‡|W―xίCMcSΥ|E¥Ψλ7(o³YΙyΒÒΪµ"[pnbΝ‚?ΏjΟi?ÿ
jΏθΦ}ΟΑ~$Ò5/¬WHΪuάΊn™«&YY¥XΆΏo*?»\1ό‰¶Ύ1πΎmΒ,£q8s§«RΊ©’RµΤ£vΪ~λIτLώ­«βψηγ²ό£…ΕdX\Rΐcλϋ?a*ωlΥR‚ΏMΣ¬Ά£wοΑ»¤®υp }εaµ”0Α‘Σ9ΗπιΟZ	 8Ο#n§9οτδ{ω—φNψχaϋ@όπÿ
ΡΆ‡_¶‹ϋ#Εx±ΦμθaΚμ½¶ή2mnc<ΥτΙΙ
‘Πτ=ÿ
όδzφ9Α5ϊήO„¥£.hUmÒι]uΥ]·Ωλ¥Οσ―>Ι±ΉkΚρτeGΔΥ΅Z2Ί|ΤεΛΝ¤ω^-χΡγΌÿ
:Nr:γ<cϊφΗχΟ«ίΏλΗg_ηKWcΖλώ?Ξ€ vÿ
?ηΏ_zZ(
Ά(i4νλ•ÿ
Ώ¨Ψe‡Ύ
ύÿ
Ο>½±ΝHN)ι‘ΟPIιτΑΗNΧ4γΊυ_™JOeεkjΥ­{.½υϋΟψλÿ
"hμN©oCςLqΧ―CLΧΖ½Gωυ―²~<xBάt/ªC»†\ώχ#w―οσΪΎ.MROη§¤uέ―»M¥F»iιΆΣe~χ9|ρ9Γ λίώA·dτΗτν_ΝΕΙI
η ιξkϊFρ΅Αώ*$τπξ¶qκ³.»t={ϊύkωµ™’B:oaνΠώ8'Χωτύ_‚—Ή]ωΖύϊ/Ώ_Ήρ·ρ0ν$½z[υυλ²>iύ£”Β=΅9:΄ƒλώδÿ
,ÿ
>z|€ƒ©ό?Οι_`~Ρ‡‚„ÿ
Μ^vψ¶#ΒΎEOΤÿ
}G«υZ)r$Ό—«²ώό?.«¤›ι¥½4^½Φψ"¤bOΫÿ
α±γ1xKβ<ΰa$ώψΧφν_Δ‡όA@ύΏ|
Gx/βυΞthΗι+ϋo# Qω!ώ4vΧk_ΛoΕ>Η΅‚»¦έύή{ωνω>©…Q_4wQ@7$η‡Χ®nΎÿ
:™6µV·_λπώ΄—ΒWΒ©,d«tK΅ές‰qΐΟ2“ηΨW΅µγ1HφσΓq;β•\~‘λvωμG±A2\Aθr²Ά°?Q’;δηΤρΣrΤZ§k_ΒΫωή_VιΕ½­½τZ'oM―·©%Q\ΣίώuomΏΥ
(Ά (£Τ(«vvKΏ~κ>oϊ[hLp8'=ϊg©φώtϊB2(·/.χ{ώ~‡¨—uωÿ
_¦ΆΡEihΌÒοΩuΏΦΛϊό΄ϋ‚(¬³·§—@
(ΆQ@QN;―Uύoύv
ΆBΑAf!UAfcΐP:’{ZΈσ4½O?Οώ	2’ΧΧώμ†Ο4VΡΙ4ξ±Εξf<@99“Ζ9ΫW­jσjΣ)j„Χ\ΰeίΞ@ΚηάuλwΔ»κ›h-alϊφΞ68+Α=‰Ο9Ο…ϊsΨt€c~$“ΝtB6IYήύ_t—έλκxΈΌKmΖ-%­ϋλkνwm}tξ@Ηr3ίÿ
ΧοΦE΄y“JΫέΎ―¥ήÿ
Χfy’w{ίEωkψ…QZ(Ά
(Ά
(ΆΏΧωεÿ
Ό,ώ6ψρ³ΑΡD³Kβ„Ώt8`|,Ϊ—…µ;XclrCK"tWψηxjΞH|i¥ι’d½»mg( €ÒτE*
t91Ξ΄Yς¦΅”+Ε24#«Η"e`A2’>Ώ…“νΏϋ;_~Μÿ
πPoΪ{αeΝ„¶O~-ψ§_ΡwΔcΌ―^?‰ό/=±}«$M¥κφP'”07Eÿ
VΑ~λƒªG­&νvnÒέοΆ8q®*Ώ™ΖΛM^©Yu{ίδ|_β›“uβrΰΏ©]ΰ’:	
OΈλτ5Ο†e`yV!Τ•aΰ―poΗ¥XΈΝqq+Ν,ςHΗΥ™Λg<υγ<’:t3c°9χώcΦΏ@τΣV―kΫGµÒό<«+E5ωυOξΉµo―κ¶¨;Ζeΰ9V^p2Γqΰχ'§¤›ΔzΌΗk^­ΑΨ™κq•\Χ}a$cΣΠ{cωvÒΑsλυ#―½ΉΗτ¥QΚ)έτΎώ~~εΈ½[VZμ΄OλΛσ=³φwÒξ<cϋQώΞώUyήOθz”ωΟ—c}τÒΞU-μ¥’έΉΙ
ώίξο‚ό)t+6…¦dϊ‘l½¶ÿ
LδWωήΑ*ό?ΏjΩΌ{4^nπΓΓχχ^~έΠ¦©«@Ϊ.›±T΄κs0;£΄ώ‚ÿ
³ζ¤§Β/]n%β°–Ξ@Η-ΊÒζβc¶)
σ‚1Α―Μψ™ϋj‘©ξϋ^_>T”o§ψn“ςΏcκιRT0Τ Ò\΄Ò}-&ΤοκΣ·[®§ρωÿ
ιiϋmψ3Q`<½_ΰW†Jz±°ΧυϋWηmη“ΟJό'‘ΙΟ8λΧ?Ζ}1ώ“?ΰεm)mΏhΟΩίYνώΣψ1­Ω4»q½τοάΘ‘ΤΆ^dΌϋΧσ_“Οδ}σόÿ
Zϊ™―©SIό6Vκώ¶ΏEÒέ4Χ^®*NIZΚή―NϊµΫn¤κς#,‘<Λ¬‘Ι4r#΅¤2²°YNA§Zύάύ“ΏΰΎΏ΄Χΐ?	ιΎψµΰνφ‹πΦ‰e†…«λϊέο†> iΦvΡ,¶w~+‚Λ[¶Χ- ‰1¶­΅\κ
Cª²Dό"S‘Ξ=ÿ
ύXχηRQτΟ―nΉ?Ολ_βOƒx³‚£—qΗ`³Ίd¥JXiΧΆΣNψ|Bq«Jφχ”egmS>†xΧΈB¬λδ9|κ§ª•I(TZ|TοΛ~‰¤–½΄?iΏlΏψ.'ν-ϋUx?Vψcα?h_
ώkΦÒXxNπ«¬ψ³ΔZl£ιzξcΣZίLΈl»ƒKÒτω.βi-®&’ΪY!oΕrΩΰ`ρΓ¦ήΌΖGlqCªOςλώqίΫβ3“υύzφÿ
#¦{ό?π―ό-ΚVOΑy&'ΑJju!‡¥R­K―~½mjT’JΛ΄¶µ¶ηβN.Ο8³ρ™ζc‰ΗWK–>Φrp§οΛ~XέΫmτ]	F·ΣΧάγ=±Ζ:ShΘ8η<zη—O§ΧWθvΏO-ΏΛπ±σI«~Zήύ?αϋub‚GJJ(©’ίKιδ¬—o½ΎΦυύvS‚η¦1ΫΏAωgβ“?§4#|Δ€‘Αδp:_Λ”n­kήύvM+µ+[™[MΧζ„ÒjξΪέ]Ϋ·^Φψ$ΗόίφψΣªΓ©jΎ'ΫYhώ>¶ΣPά]θWvS?φ/μ¬AVΎ›G7¶χ|R$ΧuύΠ…ξ4oξ7αηνIπβ―…l|_πογg€<MαΛλXο!»µρ~‘jφρ4Jνώuo{¦OG6—π[άΫKΊ9Ά?Μ\ύΠ@μ?¨γRz‚©¤ξζ
ΙΝΔ
γζXη’0Ω¶0Θ†υ=‚~’A>ρλ(q…σΒωτ¨Ò΅Δa)ΓC1§MF4η΅)S¶"tΣ’jΚQÒητ'†=ζ\–<›•ΠΞrθIΛ
ªΝΖt94΅4ο·+toMμώ
χÿ
bψ_α„,ύώ
xβΓΗόm7‡<Yβo^Γαÿ

ψftςµψΪΚφχώ$Υ!fΣν-4ω&ϋk›»ΩmΪ;h®?Fbδ@qΠcNHιΨsΙ¨TβX’X’IΙ<δ“Ιη― {R#§¦0§<ώ|ύ}λχΟ£χ€)ΰ	.αΟk‰Δb&«ζ™¦)GλXόG//<ÒχaN1χiΣ‘N][gΑψ‰β?Δέcρta†ΓÒN\%-iΠ¦έÒ]Ϊi+υzΩΑ―;ΰώCπνύΐÿ
ΑΏϊ{Ϋ~ΒKtλÿ
!/Ύ5»γ%Òeg“Ψ•kb=sΐΝeΖάσΤ<δϋqΦΏΎψ"O‡ΓίπNΟƒρδρχ<@ΐ¨V^ψΓX·…ΟοCl=Τ	―ΥΈ§.	FΦΥ5¶Χ~Ϋ[Χ}€£6Ϋήλ²Mikχ^‹ΏΟγοψ8τCπGΰ–H{ρSPΊH
­†oC¤η.Ζ3ΟZώ\Ό/®iφªΦΧζD‰tπ¤#(μ§
ΙϊfΏ¤ψ9ΔφΊ~‹ϋ)xzyΒKw«|EΦμΖ;K?iλ#hCvTd8γ8ώ\ Υ¬d ¥ά
νηtª¤ηΩϊρwχχ8gέΚθ4υquϊ«Ω[{/^ΦξΟΜ£'‰“Q²ÒΚικµzY=ν½ΡκΎ%ΦtϋΤΪΐ»*ΘΞσ2νάBό ξΔ†{Χφ=ÿ
¬yίπ§?k0ΐβΔD…ψ^όΜ«ι‘ε3cύ½Ώ‰ƒ«ιρ)i.νΙΚ‚Κμs€p‰ ΰjώνÿ
ΰΧ/έi±ΕοOlπΫxÿ
γΦªΊ]Δƒ`»ΣΌ/αέK2ΕD„·Φϋ†PK¨	e OTÿ
„όCm]ϋ6–ΊέΖχΎΊ®Ώ“½§.‡&"“i­|ϊ¤οΣ³Ώ—Cϊk$―JZny<χΗΈθ1ωγ<‘N―ΘΪw¶©k}uιέ;ymςÒÿ
RΔ…ϊ‘ψΰ―°Ο^:b§¨'ϋª}ÿ
?αRΪJKªI_½ÒW·υσw^«σ=SΓYώΕ΄λ·χ²?¨ξ}λn±<4φ- ξToΎΟλϊΦψN9Ξsÿ
ΦυδwνωWηΨÿ
χΊίβ?ZΛΏά°ÿ
υκϊJ#£ΧίόE)κqI\ghP2xΕ«ΤuφΗΦ€W'ιΫ―Χ<χ?΅®ΌάγΛ—°Θ gσκ8ÿ
υβ‘r9τιΟ
wιΈντ #w\ϊ{π~½9τΙό©ύψιΞ=±Σ<[x¦ςrNyΗONyδ½xόw`ΰδΰ’pO ηύρ@Σ·υηq¤·r{ocM§¶©λολωΞ?e
έϊ[Λυ
(¥Q’3λτ DΓόϊt=ΏύT΄:§¤~^ÿ
jZ
)	ΐΟ?‡ωιλKHFxηπώΎέ¨ΊΎέHOγΣÿ
”ΜuδυΟ_Σ―OΘΤ¬ι“ώΟω4Κ~ΪmεµΏ_σWƒΟ>¤ώÿ
uφT\™ιτϊώ~•=DΓΰ{Η―~‡ΧΧ#4ΊωώJίQΗ»ΣΞ€Ψ$γ©ΟSοΗλτφ °+`ρψÿ
τή΄k―yy|΄}—~„»³ινηΏ¦G¶
U9qΗcΗN΄Πsλλυτνƒμzτ§(Ζ{τύÿ
―π¦νΣ²όΏMH—-·ιΧ·υήγ¨¤'
Jsu§=^µ›ƒ”•΄Ϋ_;Ϋ¦½µ*?_ΡCc΅>ƒπγ―»πJ6―#――?όιωrHΗSΣ#'
tΟύz‰η0X1€9ξyιΤγ―πκFωΊ-οΪΚΪ­ΌΎνB”¤νfυ²·µ‹lΐ®{`~=Η§^Ό~5Ni£|Ν΄AΘΘχκ01’IΖ
'ΕΊΦ
ecXd΄‡΅ΐθxΖr8Ηα5ΣΚ^Y$
#ξÒ¨‰Y‰9!B®K1Td
δϊδ]HF·(¥¶―K[ª¶ΊmλΉΦπά΄η't’wmmm®ν~Ίξ»XώH?ΰΆΪ½Ώ‚Ώΰ΄ÿ

<Q
,Λβ―ΩλRΤ.&Μq…ϋ?@ΊΈ,Μ«²,ϋ•@F,@Ν[M/Ή*Κ	ΗΜ,¤IΟbs•*pxΗρKs¤Οÿ
ÿ
‚ΊH‰-έίeψ…#Ism(f΄ψkπ®5µ+δ[EΊjgND†t?%Ξ®Iv?µ8­γ³¶¶³…vΓk6Ρ#1vHΰbA$’aF[ζ99'·½ΕςK€§}R‹’ίuοω+ώlςxf”έ|dΫχg$υKF¶λιεκ)ΰuΖ;γ8ιK©£όÿ
ΤWη’w·γλίΣ·^ύΊ£'―—εΦΛΟ¦–cωΡE"χ½5υΫπύσιE υφ¦{{~~΄Ò»·ίιrϊΩ~V²ΡθÒΦοtΰdϊω†ϊzώ=N	γΎ}†gaΧ΅2Ό‚'®y
.ήΓ8Ο5Ε|AρΎ‰πλΑΎ ρ—―"°Ò46κώκζB "Al)9ΛΉwuQΛ`ΕJ%Q΄£σK™ΩY/y½V–ί]Ό¬ΎcΓα0ΤεS«
©Ε]Κu%¤–χm«-OΟψ)7ν>ό;α—…υ'Ζ~?†X―Ό…gÒό.¤Η¨]3+	"’ό“cm’bα”νΏÿ
)qµAΪUs‘΄A%±–‚0HΞIΟ­όkψ·®|mψβ/zγΘ%Φ―e:e£SLΠνΛC¤ΨF¤°A¨ηU
MΓΜΜ77HIη“‘λ§£ρη=9―ζώ*Ο§η©ΒRϊ½
±…$ΎΆβ¤ν­Ώό1ώ½x%α.
πώ­8Η4Μpί^Μ*¨¥9U«FρΆδΧ7-h$Φι»]ΨΗμp.ÿ
dΏ‚ς«ggƒν`ls†‚I nzΰΖ3ΤυόÒώέ—ρj_µΟΖλdΔ¶ΦdÒK#O¶“‘Τ‰#!²1Ζ'―τKÿ
ΪΥϋφ=ψ^α²ml5;6Ξ8k}Vÿ
ε8Ο@lτωύ§µeΦhίΪmΉ.>$xΊ¶Ϊ„–£ΫΙΐtΗjύ³ΔB|Γvvua†—v0πWK¦λΡυGς'Ρƒ(ψωβDάZϊ¥LΞι¦#3“εi®ΡϋΦέOrύ„Ώh>ό]°ΣµKΖ‡Α>;ΫBΧ£y[Y_Θα4gh*‘΄7φK™ΣφK—i2`‹Σ5­Μ7vρ\BDΜ‚DuεJΈ¤…Xΐτά[άΧρn¥ΙX«aJΊ¬X0`Ω+†_9―θηώ	εϋF§ΕΟ†«ΰ]«ψΣΐΦΪ}ΛM&ιµ])ΓS*δ3Ι²/³]ΏΜ<δ.XyΐWΔψqΔS©	eª—qζxfΪΩ΄εOW®«l―Χ®ϊYψRιF}“αZ§7>qPΡ9YRΔ΄’½Ύ	Ύά½Ρϊρώ{ÿ
wΝ&q~όόσψR7SΤrΓƒ‘€yηƒί¦M4|ΐη€0xÿ
'Σ¶+υφ®νΏgu®χςKϊwΣψ¤―Χk5ΧkίµΊZϋκΕ@γθzzgίΈϊbH0zsΗωÿ
{RΤ=?ΰc1Αÿ
8ύG―8όxqÿ
λϊγω
uγώΊϋu?η=™μ={c‘uυλλu§¥Όÿ
αΏΰ#6lϊ~™ινj0I=xηυύiϋr¤z“ΧυξGΣ§ςΕFAφ
ΗγBΡί¶¥ΖΚ-ιΖΪ~§‰|z'ώ;SΨj‘άsέyηΣΏ><$““_`|zÿ
‘bΙ2~mIOΉΔMΧισΦΎ@aƒϊώ8―¨Λÿ
‚·Ϋ·”uόW—ΜρqWφ’Ύ½>Kϊÿ
#“ρΣlπW‹[ΣΓzίΧ6δq_ΝΔά’Ϋ?ΦΏ¤_Θ“βοϋµΒp3ΐΣ.+ωΌ™8νΏ½ωχδÿ
!ι_«pF°Δz¥oNU•®~cΖÿ
kςΫ[muί½ήÿ
#ζ―Ϊ?ΓΨώ-Rλ?πcÿ
λό+δΈ°1Σίκ‘ιέkλ_Ϊ,gDπÿ
§φΠ#<Η°Θ}?…|?—δ3ϊζΏU£ό4ό“ο§Ί·υ?.›χ{ΫgΫϊθ~µÿ
ΑSwνυΰsω^ψÿ
φM²ρ’xόλϋg―βoώΛÿ
ρΰπHγΐΘχΝ=ΏΊ}ϊώΩ+ε³ϋϋhÿ
z»ZοΣ[3ΡΑ¦ι4­%kvIhούiΤ(ΆωΓ΄(Ά—{ο¦[Ο½{ÿ
W)rΩί~ώWZ/=ΒηΨ~ηόΨ~A Π	>§?OσώoFχ]΄Vk―υ n.φVΣόΌτλι
yzΧyαkο2ήK'#|4d“–BxΎÒ1Σ8ƒƒ­Mε­5yw0\2Σ:0―AΣ<ΦSέ¶·εύwΣΜλΒΟ’pkDτ~}οχΐ=R2#φ9ύ~Ρ\N-Ι―=όυψEttήQE'|έ’Òύ<ÿ
_ΟFQEHQM]?ΘέαόΕ:ίtÿ
ÿ
ηόσU{ΈξΪ·mτώΊ
[>ϊ[Φϊ~#Ήοόÿ
ϊΒ(­Λ®Ϋΐ²τAEVRέÿ
_Òνδ0Ά*@(Ά4ώ—ό
(Άέ[Θ¶ΟωώΆΉκTfΒY@3¶yHα›s£―#5νÒYZΟs!bR@8Λ8αTv$“Σ’{
ς)§’κβ[‰Y‹ΘεIθI!qB®¨θ+²{Ϋtών??ΛΧO3_‘8§«_4®­oWσDxη=ύqΫΣόχ¥ΆκZ+vµύl¶χ
(Ά‚( (΅ί½€(Ά
(Ά
’6 p+L.sότγΉΘώFΰεÿ
ψ&Ηώ!ιv·?Α/]λzΟ…τo
όxΡ΄kY.oεπn™ζO¤ψαmm•§Ίƒ@Μ¶ΫGΟo§Mo ΪΞβxÿ
®/_~%ΔP_[ΟeyoΥά2[][\Δ“[ά[Κ°M΅β’)£fIΤ««|΅"½«0–_YT±o^φΊΡλ·-όυμc^µ½ν{^.ΛG£·ΟΏίuΏψΑ:²®¬YJ°<δ2’H#ƒΉχ¨\g<ÿ
_πόkϋΪÿ
‚Α΄ώ:kΊηΕίΨΗΔZ/Αjς\κΗΒΝbÒαώkΝ$²\θ³Ϊyϊ‡‚ξ.ηqηZΪΪκZ(E²ΡτμI$ΏΜΏΔ?ψ!wό+αχ'Π_φQρ‡βVί_ψ}«ψ_Ε^ΎΜd[. Φ΅Ή΄‰ΐf«Ωi“„x5ϊ;ΒbiΒΆ"ΤUβεΚοe¥Ό®οη½ο―”θΝ7Ν¬ΦΙ½μ―µ’mτ½Ί\ό‡lΞzΰη―ίύlW?®κkajΡ©?iΊ(@λσ`1
ϋ‚NzkοOΪoώ	Υϋl~Ιό=²ψΧϋ>xΛΓϊ§Ε;mFXi-¦xΕο¦ÒΤ_ιχΣx:ϋ]΄Συ[dΌ·].βεo»™’"‘Lcχ?ΨΧώ	γ_ψ―Iψ£ϋHιψΓϊ=ΤZ†•πξρκΊΝέ¬‚[GΧbV‘,4teήΑ‰ΌΏ#eÒΫB;ρ™MF”ω΄ΊΏ,Uµm­/m’ΧCΤΛπiµ^½” ΣQΏ½6¬ÒλeµΫ²¶Χ{ώ„ÿ
Α0Ώg©ώ~ΟZwΌChm|eρNβκPΝ[›α1ψ{OU£“μ„ίΝ	
Η%ρVωΠΧτοϋk+¨ό2»ΣAύζ‹®έΒΙΈ³ο;ΈΫ“¬ο ‘ΣωMoP[[ΫΑΕ$QΗΪ‘ΗςγD€ªª…
Χά_±?‹bΣΌg―ψNκm±ψOξΖ7loΎΣ<Ζ‘cήG-ƒ»χXΞ+αs'νce~XΙ5vέµ_~—ϋϊ[Nϊ³snϋJJήW¶ÿ
ΦχΏδόΝαkΩKΗ‰†ϋβƒξ.ΉΊ‡@ΥμαgΖ?d½tLªΚ@ΐ&Ώ“¤lF9υΟL;ώώΏθ9ÿ
—ύ•uΪφ,ρe…tι5/|(Τν~)ψ:Ξ
Οw&k{g―ιE>dΧΏΤ„υ—pΪ…ω±_ηΎΛ,Ιρ<3C,‘M±΄o‘³,‘Θ­σ##†R¬0Fr{ΩhΊΚκπkKκνm7νήέΙ©I[ΝuΊÒΫΎέµλ½―lwΖ9ÿ
\qΗ\ΰG =xΐγίόύsτιCƒνόΏ8Η½HλΧίόΗάw―¦9nϋιΣΣOΧτ$aF3ώyύ3_z|ÿ
‚s|jψύπ–_‹^ΤΌ/§ιχW7vώÒ5««Έ5}4ω¤·ΌΉ‚K{[‹k8δ2ΪΫµΔσΝν"Α
Ε,ίƒΠυώµϊOϋ)ÿ
ΑH~!ώΟ•πσZπξ—γ_‡:[Μ¶12θΊφ•ΥΜ—3­¦¥RΫ^§›=ΔΎ^¥e5Γ»¤k}K΄vΰVUZΖΙΒ¶‹‚Υ=5{®χέΖµx¦†Q:Ό)K[1§8ΝÒ―%ϋΚqmΈΒ-¤δÒKY.Λ[_δ²οΗο…S[xΫα΄ΨbgΪVΪl¦‘ α£ΥtΏ¶ιξ
€ΑΡ•P‚κ„<2[kΈγΪh¤BU–H¤B¬ep¤~R:δJώ£Όÿ
;ύ•<s1λΊΦ«ΰkωy¶~,Π¦kU“€Sνϊoφ¥£ ΰo‘ άO–§φ+Ώ±—Δ­—?π”|Χήo›ώ&Rψ`]±nγΥ!t'ΎΰφΟZφYƒ«g‡Ζ&©MΒφiY$­·]μ~;ΈΟ(³ΟΈ1sƒ΄κΰάαΥ—4UZu[·i[³gς
Εϊtη
9χδγ―?Φ¤‚»‡Xΰ‚i*¤JÒ»1θP6s‘ψμΌϋΞtΩρ±σω<κ0Ϋ€‘Τ®kΏc‡ΚnΔÿ
ό7δ¬–>†t*2
¦―pΕ6aIδΰΡ<’χ§¦£{·Λ{®ΊΉZΦςvκ~=c*Z~Ο'UΪΚR•®Ϊµω0³vλmτGςέΰίΩΏγΗΔ	-ΣΒ
|q«Ηs*ξ/κXm9!δΤn!†ΖψlI=Β!Ϊΐ6AΗΡΪÿ
όoφπ·Γ]wβF±¤hιαλOνÿ
	Ε­%ΧM‚1ϋUΔvφ°M¥·Ω"WΈ3«	QΈ7}¨ί·^-ÿ
‚~ΘΎE¶ψ…ÿ
	%Β.ΗΒZ«~(bª'ΦΚΗkΗό}°κqkΰ―πV»MΓ>$π—Βo‡7Ο―ιWΪ/ό$ώ0Ό‰ΪΞΣQ‚K[™νtK θχ>\®Π5Ντ‘FΫYα“(«Κpτ¦εZ•FQZιk(¦έεζώlθΛΈγΕ<χ2Α¬/	C—Κ΄=µL\kΣj‹qζn¥gN2ikxC™ω‰ςldΗεΐ Ψ<ΤrF2zrΙϋό€SδbεύηΙn071%Θ`sΠ‡€#,~‡Ήgόδÿ
‘_0άot®―mτI[k«Ω|µυGτ]'5FQΆΦιI¤Ϊ^ZθήΎ„Υ#ί?ύoJ]δcsσωΣ:ΥIϋ­ω~eK'–¥Ί…μy
q‚$€1ήΏÒ'ώ	ηΰψWÿ
±/μΛα‡Γ=―Β/_έFλ±…ή»duΛΓΤΝ©88ΰAδÿ
?€ό#{γΟx;ΑΊlsβ―xsΓ–"³Ό³λ:½„hA'qQ’F:τϋπv‡iαoψ_ΒΦωV~πή… ΪDΌαÒ΄»k”¤+ΐ§8Ύ7‰ª)Bm«KmήΙ~6ό¶ΉΩAY7Σ—―{§ψΓjΏπr?“Xύ¤ώx)·|(Τ5K¨•ΏΥ]x§Δ2οPp¥νtNHP6πHΞIfϊΙ$cΣ¦ΖxΕ~ÿ
Αd~.[|Zÿ
‚…|u½±Όϋ^•ΰ›ύ'αΎ›"Θ²BƒτΨl5	^aµ8Ζ\¶@#ωtΞ}
ΐΞOΉη·O<
ϊ¬–Γ-Β©[T£e¶/Σό2Ό\ªΝ·u}ΛEκ΄νψ¬-―µλ=?O¶ϋPΤ.mμ¬,­byξ®οn¥Hm--αUg–{‰έ#†(Γ<’2ª+
ÿ
«χόΧφ^›φBύƒÿ
go‚­§ΨΌW¥x&ΫΔ~:€ήΕγΝ7<Ok#φWTΈΣΤ•Ρ@Έώ*Ώΰή?ψ&~ΉϋU~ÒΊν3ρ#Γ“Ωίΰ·Ώgy¨Ϋ7Ψ<}ρSJ’;x{O΅v>ΌςuνvtύΐΦΗNf’K©Φτ\•·—
aAα@'..8Ζ2N>wqΡεXh;θ½ΆΦΪY¥ΦιΪί‰xJ-Τu%΄UΆΌέ›z­νΣO“D%r=9ϊÿ
ΰtΕ(Θγπ¥ΆΎ	έΏΎώΏΥΟQE/έSÿ
 5KPΚ0¤υ;‰όΖΧ­L–ωvσ^WύΧªόΟWπΧόν2άιÿ
lÒ·
=ψιΣΓ·­axw?ΨφΉμ\«;ΦΡ'`ρΤςbsΞON+σΜϋέoρkχ-Ώ¤~·—ίκXvϊÒƒÿ
ΙPΓΤφÿ
?―Φ“σλώύ;χ(ÿ
=ώη·zδ;•FHλψÿ
==i)θsΞωυΧιΝ
KH8υλ1ΨΖ}:b–ƒώ}ÿ
ΟΏ
„px?†~γΫλQ…Ι>ƒΣλΨφηΧλΦ¤#9λψΏ®1λΣωRΑ'NOςφιÿ
PΪ1ά®3νΟoΧή™΄?Ι<γέ3•)ϊg‘όΗ?‡SνQγ'§κ3‘:(φτλθ
ν£	?_~ήέώ‡4Ε=ΏΟ―SΪ¤κ9·~OLρÿ
Χ=i΅}ηΧσό;g$ώ΄
β£QυΖ8ηόύ
(ΖxΗ=}};“ΣΦ”ώyχÿ
8ό?*AψυΑονΑ';AόZ
u„€	τÿ
~^Ύ^)ά‘Ι>έΧ§δ:s@##ό?Ο~BΞ:uννοÿ
λ©‰­A@BΩΙλΤγ?αιιλSS
σίσφ<qΡ{zφΗ9 ¨»6ίoΥΰγ?ηΏ?N(^£όύϊτφ^8ώ$luΰsΧή½Gφÿ
?ÿ
―!§5Σjώ]φυώ»SwΑώ^Ω§@'‡µB΅@Ιϊ©τφη΄¥%y4—™‡7—λΎs1dIΐώ~™ιξFj™#Ξξ<γ€1“Τ‘Ο¦^½*µΥτP‚7cnCqΟ}£'tυξW9s¨I1`¬ΑIι“N„tφ<σΝpWΖF·7¥ΎΦΟΥmι¦›΄wPΓJr²Z_Νίkοδmάκ±F
Ζ~`3ΨwυΟ΅
c κ9Ιoe•›%±»=p3’8η$`υΟ#°γ5‰Ι$υ=iΣ®9ηϊώγΦΕNM»ιΡ_W·§ΜυiaaNΝκΧ{;mώ]—ςs“Ι'““™θ?ϊίύ“nο°ώΟ?²7Ζο‰βλμZ¥ƒοτOJ$Xεÿ
„Δ΅t-ΘέΦX/o£ΉΒεΌΈ€XΧΦ
>Qτγϊv―ζÿ
ώψί=ΎώΟΊUΫ%ΟόCyγÿ
ΫΔYL¶Z	¦ψ~ΦuΌΘ―u]^ζP…χΦI Γ 5ιπφXάΗ9 ΥZQ…¤ήΝ.¶ΩΨαΟ±1ΒeυeπΉ¨Ζ
ϊΉI¥k»½οΏgάζÿ
ΰίO’yΏÿ
h­ZΩ]ξm,<	α»ΙβέpZξαυm}ΰ¨*΅­lcXοo23Ξxώδp2@ηώ@’Oγq_ÿ
Α;~/μωϋ|π5Ε’ΨλχΊx»ΕI’dώίρ0…Δr–Q–µµk;-Έϋ?pxϋTτ9Ιυυ5ΥΔΈΨβq’Qw…5ΙRΊµKk7λ―mΙΘ°ήΓIµiΥ<Ϋ]eΚυΣuΧηa:wλΗ'άώ·ÒώΏ¦_π8$
k`cλΣθsυ&‘ί§·=ΎΌWΙ½όΌΌύm·h–(§%gbΆμφίOΏo—ό>ΆΖF:ΏΛσÿ
Άdy9η=ωμ?O_nhΑ9=sψc η§ωΕ4όX9Ϋ½@\qσ3“Σ­MφΊω^ι6—koqήM­ή‹πΫ¶›½n9°ϊ°8;»‘{φ―Γoψ*?ν·χZΐ/ήΏ“jmυΛ£d²α$Σ4Y™UOτΫ¨]JΪρΈ~®ώΡτo
ΌMγΝMβy¬l^-ΚY9u=fθ4v:|@ςKάmί΄εcWn6%~-ρ.·γ_kή/ρδ—ϊΧυ;­[PΉ”’Ζ{©ZCξ'l0©@‹…HΡ
1ω·™ÿ
Τ0K…¨•|Wρ9[ζ§I4]Ϊ¶½ηφΡOΒΙq'Λ‹3<3–W’;a\αξWΗµξ΄“TSζΎ©NΪέ‡‘’:zp88γΧƒΤ	=i¬£ dσ:r{s\zυθhηη?Β¥
Ήυ$G?¦ΪzΧΰTδύª“wnjW}^-ΧOO#ύ9•5
‘µΉR}l’[.›m~»ΤόΛVYΏcί+2γNΧόWfΫ›κ,£Έ2®8Σ¥5?oF¥ρCβUϊΙ{ρΖw	';^7ρ¤Q”δ
―<®'9ϊ—φvύΊ> ~Ξ|MπηΓΊ†Ή¦kw7–W7χwpκφ"ζ[hmΆd”Hαfe‘ΆT'~3‰®'73ΛrΜΟ-Τ²Ο+1,ν,ΞΟ!fbY‹»;’ΐ6Xξν_­ρα³nα¬Ύ+F®‹X™NPη!N<“kήM'+«ξ¶?’|πΓ6α/<Pβt°«γa,·Ψβ!V¬©T­SQΤ„[•)AΤ>Y$δΥΥÒΈΈ@=8ϊ{{JφΟΩΧγ³π3β·‡Όw¥Κÿ
c‚κ+OΨ©o/PΠ.%D½‰”¦hύ¦Υ‰*“Δ¤†…x—alυόxΖOΚ”`‘λΤtΞsΘφΟCΧιω[_‹΅¥'Ò«FΝ¦υJΪ=SΥZητοδ>"Θ³›F8&;R…XM'u8Y5}9ΆÒ’·Uζμ―Β>)Ò<kαΕ:άWΪ^µ§[j6w0°d’–e#–ΐ=ΰG&:γΏγόÿ
AΣί?Ώΰ™΄kηόρEφ
,ϊ—‚&ΈvΪbΞνCD¤92BΕ―-γS\ª€¨΄ΐ†2Η'ªγ¶άγ―=ΊWυ6EÒΝςΪXΊrN|©T‰ΖVIοµχέβχ‰ΰ.*Μ²\U)Ζ•:σ©‚«(ΈªΨYΙΊRWΡΩ^2·ΪO°ριόΊnΤ΄P:λΧρ―M¥ι¥όνeoWδ΄]μ΄ψΙ+[}ύ΄µΌνf#t=ύΉιΗΧΣςϊΖ£§\ηΠΰvνιΦ¤ η§O~8ι`ΖA=sκ=^ωιsλΡit―¥Φ»z™’RqμOOώ·~)i9ΐη:ϊÿ
*ΡΕ&΄ώ―ϊ_¶~VoτίCΑ~?ΎÒωmLηΏK?,{ΧΘdηΓ©ÿ
ϊίφ?ρOθκ	Λjrρώμ?Χί’kδzϊ\ΎώΕz%ζξΆÿ
CΖΔΫΪ»wvω¨³‘ρωΫΰo¶pG†5³υÿ
‰uΒγ8=ΫzώpfηξΔη―¶;jώ>"¶ΟψΔφÿ
„g[ΟΣμι_Ξ3@φ?Χ?‡ϊ·ό†Ί8ό΄‚Ώήφÿ
‡?0γFέJ}:Ω«[¥·Χ]½6ωφ‘ω4_όZ­ή@ΗkB{}~‡?Zω[Η‡?―?―­Ώi6¥ψesÿ
1ηλιj£‘ψΧΙ*2?ΗαΧπΟκ+υjNτ£ΣDύ.Χm}}—?/¨›¨ήέϋτηΪΗλό-ÿ
·Ώ„›ϋΌ~OΠΩΨώdWφΝ_ΕWόζ oΞ?wπΫΗ­ΐμÒ“―γΒΏµZω\ύ§Z+΄uό6όΌ™ιΰφr¶––ΏrΧηÿ
 QEσg`QE
QE
Q’aΥHaυ^ώΗΨgPyÿ
λώΏ¥g$άVΫ_…[jk	5k[έiό®µÒΫkwώg­ι·&ξΒΪbAgCϋ:eOLώD’:UΪγΌ!sΊήβΡΎτ2‡RO%\ΖqςξLτκέ{Wc\•-δή–Ϋρ±τXZτ£έ%T’ςς
(Ά±”®τΏGλ¶^]~σ¤(ΆλϊώΎΰ
(Ά€
kτ?ηΈÿ
?•:ύωξ)­Zίt·ώΏΰ	ώ«σ@N0
οΈΖ=‡ΒMζΟCΗεο‚;tΰN­bή‹¥Ώ$¶wΥj0Ά+9ZξίΦ€QEHQM+ÿ
_πuώΎ@RΦ’΅Ή[A,μ@XΡ›`8<g$}zjαδ“NΙ¦ÿ
=7_Χ}	”"δφJώlβΌY~ÒΝόβIΉy$U8…lο=91ώ>µ$σ=ΝΔΣΘIw‘PίwίεQµsΠdS+Ύ΄Z½¶υΫ}u³ι·[XωLάκ6έΥέ»tΩy~w](«Ωήο[»ήϋiςυ_‰ΟίOψEU
QE
QE
QE
QE
RσΧόβ–“Ώ#ΣωπJOf“³¶€.β Η^Γ ϋ`’Ύ{‘Q²+›r=Aθ:η`rzΖ1Μ”V‘©Rτ“έ'κ“μÿ
D|ÿ
ψj|sϋ=]λ6|Γ½rΛΕv®ΦρΝqƒE>‘¬5³2–%® ·s²D6nNBΏΞr)υΙ'‚I=ssΐ%SΧWφ'¬ivφ‘©hz­Όwzf­cw§_ΪΚ»£Έ΄½‚K{dε$FWΗ;IζΏ—ίΪ[ΰFµπβf±α«λKƒαϋΛ«›ο	jÒFήF§ΆΛ1kt3®cϋe:[ήΒHtΈS!AΠ<Ύηfδά£v›{ν_CHΈΕ%ΆV·ύ½ώNφ»κΎgΟ¨ΈQO|γότ»WQΰ―ήψ7Ε4φd»Ρµn”)ΐ’ Ϋ'‰ϊζ9α/©8ΪI<W3ΉGτΗωγρΗµ*€
##Πΰÿ
_ÿ
WΩ4ηΫVΧ[“w'uΏOΣϊω»~ρ~γXλΊDιqeªΫohςDΜ¥n-'PHYbrρΚ¬»K©V?Ν§ό#ώ~+kzίΗίΩOÒ΄oκu©xΧα*΄ύ'ΕηmkΒ’–[M'W»]Λy¤ΈOΎΉ+s–wR\›―¶ώόiρΒΝCu“ύε“ϋCG–B±Ιƒ΄Ι
Β	Υ8&7–@ΰ¥?Ύ8ψβL0¦—ª¥®®Tyϊ5σ[τpρ»bα7
΅ΰi0
gςΩΥO*µπΉ©¶β­uδνλχ]®ϋ΅­s6K¦ΎoM–Ϋkδ™oΎ|BψUβKÿ
όHπ_‰<β}6g†σEρ6‘¥^ΖΡ»FY#»†/:`ή]Δ^d2®)0ΗBΐ€ΚFx
€N8δη§®3Χ¶+ύG>$όψ=ρ§K:OΕ/†ήρνR^'πώ›«Yw-έΌ’!
Z6ΞWoΛ‚|qÿ
_ÿ
‚uxαek€–>bΜn<β/xMrc‹JΥ!¶\ΉTΐQO$`βΎ†‡Òε«).®φ¶—σ{kχχfrΓ»μαΫηχμΊηΖ[ε
g?ΗΏΏωΝ
@ΑΟ'©$gπξ9N3οΖ?¶Oÿ
ΑΊΏ±V―$ÒψoΖό%Ό±+oizΥ΄$.±΅άΟ"®@ύεΛ6Δ±5σ‰?ΰΪ―‡²΄‡Αÿ
΄ηtξH/x3CΤ±θ­6›%ƒ‚Dc<f»γα$—Ό“Σ};w]nΌΜ^­\}[Iοnÿ
w“τ?’i>`H#=	οz0:ώ]κ ξη9ΰν=³Θό½~¦Ώ§sώ§ψ°…Ώαύ¦όz£qk>Φν½µ¥μ΅Iξv¶$W’kπmχνƒj]΄‹υ`*.uιnΰG£^ª“ί­l³,¬”ΆΏξ%―¶¶Ί[uΧE«Ρ,:jήΞ;ύ¤µ½Ν~^»Οq/·i@ΐΰΛ SλΖFανίΑyδ±ν3H<g9ΘΟ―Ώ5ϋ¥¨Α½ί·ΕρΧΑmShΐϋu‹`φ7~„(=²G|3\-ÿ
όgώ
'hΝδx#αώ§΄‘›/Ϊ>`ΈmXόγ<Jθg…i7Q$ν§΄½–›¦Χέδcυh%hΣ‚oª„ΏΙ-|ώγρΕT2Nόÿ
,s\sλοψ“ω{~y―Φ{Ώψ!ÿ
όΤ9τ›°ν<ΰΩwωCκ¨Η#  γη_ώΕÿ
ί³νΫcΌ~-π{=
κμO·φΝWφ–¥z΄–ΟFυµΊιέΫΈÒ4f­ξ­5NΛΚΫ]ωÿ
–§εΛp2
ΟOLoσοPΎΈΙ?–?ΟσύL_ψ#όiΑέπxΗϊΟxU{σΑΤ±ωεZ–πDψ(Ζ΅"'ό):ΘHB™―Όyαb@O&BΊ“²¨δ)Ζ€WφέΊΤφµω’Z¨ήφΣζ·¶Ϊ£Ofή®-»kwι½—KφΧΟ[~PS‚δƒ’p
yΑκ@ο_¶ώÿ
‚
~ίϊΔ‘.£aπΓpΉRςκΏΰ \‘Ή΅Ò4»ω¶Υ`''5ϊwϋ.Α»^πv­§x§φψ–~&Mfρ]ψ*ΪλAπ΄Σ΅ίφm_YΊs¬κ–΅€σ!±Hδ‘ή2Ρj™¶+B¤$ν²wΏΓ―eω4$ΪΊ}τν§Ο―•ϊΑ?asβΟΕύ;φ™ρΦƒ4?>]½ί„ηΏ·• ρG΅ΒΪΛb%U6~Pχ¦/νmbkiR/λƒγΕέΰ—Β5ωcΗΑ>Φµσo2_έXΨ\Oe§ΫΆygΎ»H­-γ‰ZIf•4.@2Λ©|*ύ<¥ψoH΄Ρ|) hv1iπ¶‡ooj°Ϋ[&Λ{-?N¶X„Qφ…‘ΡcAƒ,›‰c΅ϋ)ψ.ϋφψ›ρ7ΖyO…Ώζϋ?†Ό;t‹-ΉβI~μχαΠ‹ίμx
Ξα†ΕΊ$U+cδ±X•‹ΕΖsv£M¦ξωbγ}:έι―ε©ΣªtΪ‹³“Ρ=/έμ–Χo¥΄]σ!ρΎ/ψ΅γοk§NΥuίxίΕ:®·ymaey¨ί^k:ώ§5τφπ[Γ·Nχ…bΕS`aύήÿ
‚sΑΌίµνUγx³φ‡π‡‰gOΩκ)¬υMkSρe›iΌg¥¬‰3hΎπµκ.§¤F(ή#Χ¬μν- \Y[j’ÿ
E-α7Αÿ
ήÿ
jx{αΓ½Uσ|σªi~πνΆn7΄†γνφΪj]™ΪG,Ò|ΖcΈυθSH’
8ΐΘ
t
η€
Θό§SΝz5Έ™R£Xx&αXΉ;;h“JΛ­®ΣΡu9^rΥΝZνι¬ΎΛKmΥλ{1πSΰ―ΓOΩγα—„>ό"π–—ΰ―
ψH·Ρ4J·X ‚ΦΩ6΄χ’σQ»5Φ΅¨έ4·—Χ’Λus4“JΟ^¨Οηλψt™κp3ΠSΫγ@Gσÿ
λϋ’sM―“Δβg«)Τ—4¤ωΊϊuνύt:#eεωQXΗ	υ8όΑ©jώΰÿ
x#Cµφ¶ΎƒλΥ~gªψq³¤[g®ΡΑ8θάOα[Η3Θΰχφφ}OZηό<βSjyδ~-ψJΫÿ
?ηρ―ΞqίοU΄·½·ύΊΦ²ÿ
χ<?ύz‡ώ’€Η‡ƒόΈϊηϊSδη§'τ ϊσΐ§Π§ωΝrΙ΄ξ(φλώ/SΠTªΈυΟÿ
_·=8ΟNsο€ΥΑ πqΧόΏOΧ<<qώ~Ώ\N}Ύ …Ά{ΰ}Ήθ;νΗ|sÒ€~‡―oΟΏo^έ
φEοΗζsΧ°φΰc·εHOϋ$υυλνίGL{PΉτ#όOεΙÿ
Ηpz
V$·ΣΣυνήΆ^£όÿ
j•ΊψcΧΫόπj 	#?Λρφ 	ϊQE
T\’2>ύzτÿ
gΛ<ΤµL3Ηέΐηπ>Ά€‡
ΰϊdφνΫώΉιL΅υ9=†?O ¦Χ$ύΘόσ4Ν«ΫD8’®:T=σ^_ΓϊTΩ#$σΟβsω~¦
3ΌσΖ;τθG9δ‹I;§}ώ_ΣΉ%dcί?ΣΗΔ#'Ϋg§>γ§·4”wv&1ζv½„8Η?ΣΧ§=Z®Σ’@
Ζ~rxιΦ΅φGU'8ΪNsΫ®{ρΙυΦ¦Ò±ª	ΙλΠ―ƒ
Η®ΨΘΓαiόοgΫοίΦέ4ξ¥†“²³w{­ΊoΫ§¥ΧS¤ϊ7
Λ‘ΙΛvΨσιΗ#9&Ή›­ZWb‘:€έϊγSκxΘoCYRJς±$ÿ
υψοτηΦ£$ϋO®ϊδζΌªψιΚφι§εώvΎΚχZµ,)Ε6―ΆmtΥ-νΧK[Θs»>K’ηΌυ=0xγ·qΟ4άslσΪsΰΰη§ρϊηΫσ
Η“Χ'=ΙϊγϊΧκJZΚΟΧτWÿ
€uB1‘¬Ίn­mvΧΣWnφ@ΑΖN>£ι_λHsΨτλ’qΨSC0NzρΘ’{ησΘ¥d΄»ÒΪυΣ[·―§ΰ;oήΪkψιu¥Ώΰ;2`
RHω@ ¶8ΖzΰΤρ‚ΏΏΡOϋxÿ
Αa4[5Ξ³ΰo
|GΡΌ9pTyΠYx7α–/ΌM"•>JA«YκJ%I6»Ν³`)ΡWν‰ϋhόύ<γ;_xηGΡΎ$ΟΰgRπ_…®n<SVΤe΄&KtuΪπ}Ό'Α¶¬qΙ‘‘ƒωÿ

ψ­kzίΖ_ΪΧΖ67»υ»―ψRΥ-O™ªK}v5okV·S€χQ™ΦΓOiΧK-ΪrCχ>£€Αbρ²χ':N'mΥ›Σ]<sδsΈΛ0Δa0”εΟU«k·+NΦωi§όιmγ΅µ‰U#·D$LHγAª¨ΐP

£8QPuΟ'§nί¦sώqRH~n8€l·'°ÿ
λρΞsΗL~yϊvύkβρ5\κΞM¦ά®υΎ»ίO=ώGΥQ‡³§ΗΆI%},—~–ιϊ+qιλΘγς=―<W}φϊϋ}Θi­οn·ΣδτίΊ
(ΆƒD“kM•ώvωώΎb~>έzΞΨ]ΜΔUg?ΓΐδχAΑbz―/<¦=:ψ¬­fΥυ-#VΣ"Έ–ÒMCL½²κ5³][M
Έ‹υΖ{:©ΰÒ›” άSsQn+£m+hτ½Χό|4LMU$eR
sΥ¨ΒR\ÒJχ΄cvÒi¶•΄?ψ(—νÿ
βrψΓ·¬ώψqq=΅heίWρIύΥνα1’’Αb«φkRAΜªί½γσ°ΖΉμIχν;χ$lϊtύ'ρό+φ†µΥoβÒηπΖ·§-ΔΏcΤS’«θY‹-ΕΤ2ΒL7σI(,NΙuηΧώ	ϋKΙΘ³πª
qσλX'·πΐά>™5όρdG›ζ5ρ50UΫ•I(¤―ΕI(Akd”mλΧΉώ°xiβ7ƒ\ΑωVE‚β«,>—Φ'R£JΈ™%*σ©§Η:½om΄hόυd
u
δυόi€¨ωιΧƒίΗpzΩΗθTπLΪsµ―„[°#[n‡6½yττχÿ
‚cώΣφώ$‚¶&n™Ηέ΄'±δsΣδC„³κs„Y’‹NήΞϊ«$µmo¶µz£ξ¥γ‡…u!(Ηr¤Ϊi?oξμ—E³ι®Οcυ;ώ	Σ¦~Ο2~Λ:uΜΦΎ›Δ7K«ΗρυΘτ©µΈK»Εjfψ4Ιgύ-Ϊ)
Ϋy:΄„ώ|{ΐ¶ί~([|8Έ¶ΈπL^3ΥΧΓ’Ω”:Ψ|έÒG§yy…΄θ.LΠXΙςÒZ<©ύO'όσφ‘‹C/„·ΏΫWQθγμDvέΎ© ÿ
‚[ώΣHFηπJcεΘΦηΰ`zXη§Ώ©ϋ®%©ηΉU“Γ†yr‡6*•;T­hF/ΆεSÒSΌrMι²ό€qήπWρΧρv–k'―R΄2ΌMY:>zξ²;©5QΣoΩPε…5
V‹Osΰg χχ¤'―## 
Sτό‡'ιϊÿ
»ύ¥Ηό·π@­¬^ω­λΧ΅λƒ•"Α.ÿ
iLαο<€u?Ϊϊ›Ηn”}P+συΒB_φ~"χM~ο³OΊ{­>^§οpργΒ¨Ω>0Κ[ZλV-imΥµ{oχυ>πΏυψ‹Eρw‡ξδ²ΦΌ=¨Ϊκ|ρ
Οm*ΈWοΓ0)£8W‰¤Vΰώ°ÿ
go:OΗ…ΎρΦ•,Fkλ£Υ¬ΡΓΛ§κ°F©}i(μhηQX†h7θΰΧαΚÿ
Α-?h§'ΜΥό„zίκΝχy
¦ƒΓγ§'<ΧλμOϋ1λΏ³/€µ½ΔzύΎΉ«ψ“[ώΫ»[4ν9Ν½²YΪyΑ]¶y&I%1Δ^I3ε®Υ5ϊ—`σΜ·V/R–¤~Ρ%ΚΦΞ6nνίTτΣΙ3ω'ιCΕ>ρ¦K—ζ9uΗq©BTε:Zª©$—»”£ηΆz΄}¬H9γ§β	ρΟς£#8ξ~΄„ρΘτιΖq‘η;~)'¨ΗΟnΏηΏΏJύaΩΩ]kkiwι½ΥοωΒFμ΄{iθύ4Ψu!P―Ώ•3ÿ
¥ρΫόώ?ηµΣ]ϋνηζέί]-ύ?Mÿ
5¤ϊ_Ηθzώ<Zg$:9#ΙηΗ=Γ®έ^χ²Ώί­ιΧηÒΓϋ/Ο^Ύ[;wέzjxνθ:	[Sτ…Oυ?|’Nqμ?©?ΦΎ°ύ΅ίώ$ήA΄/§EΰύOς―“KΧίτ―¦ΛΏƒXώKοΣόΟόGoζ΅ΕόGΗό 5=Η…uζEΣn	ώ__JώqδωzuΓ}Oυ5ύόJ||>ρΗ<Β'βψ*η^0~µόζ6οL6:ηΆττΗυ―ΥΈ-^t“Χ•[®7nέ_αω~aΖOχ΄oζύ6Ρωλχ0~Ò:w†Ο¥υÿ
λo|?ΟΠώGς―¬Ώhοωψw——§§ύ0AΫ§ς―“
98Θ#<ϋγ?ηΧκtnιΑ$οk}ίΧSσ¶ΟηεΏΛϊέώΖΑSνΣ§?Υό-ρΫ“Χθiωe~Ύµύ¥Wρuÿ
.Ηό7Mª“Χα7ρ_µh''τ>‡―νΎW?··KkΕ>Ϋ$ÿ
®η΅Ώ$ο·2²ωoύoί@Ά+ηNΠΆ(
Ά(ώ_—θQE)ZΞϋi·¨ΣkUύzωΎΉjh„αn£ ­ΑRGαςyz]xάωN:Ε,g9ΗΤΣά}kΨΥƒ*°9ªΐυ½ÿ
_©λ\uctΌο―¥Ώ―™νeΣ½Σ}/o[kϊ!hΆεjΝ®ίδz΅ER
Ά(
¦ΏCÿ
ΦυηΣΦL~ηGωόΈγ"τχuΦλo’Χ]ΛReΣόJώζ
|έ‡¨γξO®Υτ€t8
γ±ύ:rωµih’Ϋ^ΞΛ[kk_Σ]µIχAEV#
(Ά€
(Άviω€β8Ο?_ΐ{zη§ΧεΌ[sεYEn„‡Έ”8DωΟ§ IΗWP=?_LρωzϊτβΌΛΔΧ?jΤ ~[UX†3γk1η©νΗχ{q]TΥέχΣNϊόΏ+oχργ'ΙKKkς{­½~οS¦;zQEΩ—΅σ’w{ιΣΛϊκQE%ϊjν~Y[Λό»κί•τzΩwΣπκμχΉEUQE
QE.Φÿ
€Χ­»mªΤ(¦EPERzk«ΫM?ΰ~/@
(Ά·ιoΔΌkγ‡ΐΏό{πUοƒόah΅4Ϊ.·h5TUo³ίΩLΐύΦ;n­0^Ϋ4¶σ)Y_fΑ=4δm¤ϋρ9Ξyγτ?¥]:’§%(»Yÿ
NΒvzz™όΉώΠ?²ίΕΩσZ–/ι…g™†“γM2.tKΘ70‰/eXιW¬ªΩ―Μ&L³Ι:|ΓηΈ?Pqx<~ƒ·ςι_Ψn«¤ι:ώu¤λZ}­¦^Dρ\Ψί[Ηuo,n6Θ―ªθΐ©#zτ5ωΧρsώ	¥π―ΖW―ΓRγαΞ©q+ΜΦ	nΪ‡εBY¶Y4©%NVΪU3χιμΡΕΒqχ΄iotοµϋ[ζNώλΊVz»5µώξΪoΗ_^? Ά	ζ·•.-¦’	γ`ΡΝ±²ΐ¤C) ΉΝ}ϋγψ&ίνα¦mΓ@ρ­’3΄OΆjπΫ^IδΦ΄ΨδR9¦ ¶Òs_-ψ“φ{ψγα%_ψUγ›…™^uπυυε¨ΖrEΥ”SΐWοήaZίΪBvI¦µυι¥όΦϊΩu¶ δ“Φλ[ήΞξφλoκζη…?iO‹~Hmαρ#κφp€‹i®AΆ»EΉm—1ΕΑ
c<ΧΠνµ7ξγρƒ#™Έσn4DΒΠ+osΈ―ό}A±ίiΊ¦–Αu-6ώΑ·{iqhΜFI'°ΪN
'
ρPDθA8lƒm#$g®GQ~<tΞXHTΌΉ[§n©χλ«ο΅Ό:rMΈχ}—_o4Υ+φ·ψ]zν°λk¶έΒβΝ'U=ώ{iεΘ€NΪ»½?φƒψ?©ΕV–μάβυM΅±ϋÒ	=r8=z~<ο*Ή”ςyBς?ΛυYηώσLΟLtΗLNυƒΛ›Υ_dέϋZ6ώ½R]ι®λϊΡόÿ
αά{ÿ
―Χ6^0πμΉν[$|u
¬²©μ;uΗ9­¨|C \‘δλZTΰ+Q²|ΰ{LNxΐμΰ΄—#¦O±Ι}€θIg=Έβ—Ξ‡εTΗ9Iΐ†ύ?™§υ	Ϋέil–­u[ί·υ®ΠκBφ»Ώ£·K=½o­·Ώοψ»°aΉn­uΚάFΩϊaΝ7νΩωe‹ί(‹φτΙΗ­~'µx‡TΤb•{sΘρ0υκ:`ζ­Ηβύuq·^ΥΗAν+ίLboΟ§½OΤ1γm6—§ε·ªKÒ\ΰΎΚϋ’κΌφοίEΤύγ{tj}εP2:γ-’9φΗ•IξνΧ6ΰri‘qτω‡β1ύkπΔψΛ^~Ή«8ι‡ΤοHοΠÿ
/Ο"5ύVbKκwο›―nHΞrs™?Δqτ>¥Y+ΉGEΆζ~]<―m½Pω©ΩI[£]5ΣΡ|½|ΟΫλ[H„.¥§Β£<Ιyn uξÒφϊF=y»οψ/Oÿ
ίθ‡ΥlΛΜ6¬Ή$ΗΧ€@5ψΞϊ…δ£ss!9α¦•Ίρd<L‚yΗ"›r7rxΙΘμrOA½?’ϊ­KκΥχΡ΄·]ύu³όBπ“VR»σV{~Φ§κΏhί…ΊH#ΧΖ«0­¶“—%#h›lvΨ'+“p
δΰΧΜώ9ύ­όOªΓ=‡ƒ΄ψΌ9lα£ώΡΊdΌΤΚ‘€ρ¦ΑkrN6\ΈΘ*κΐω—Γρ_/Oπ§†υ~υ™WΘÒ4λ›ηRΗhή-βF3Ζ_8άN	―Ρ_ÿ
πMίψ–ζΓ[ψΏz< †wΠl+―ήΖ@"WRφΊRH#΄ΧΩ_²)ω–Υ8Ò^όΆ΄[=φΊ^Ά[}νΉ¥Άήί.W―ΰΟ’~όψ›ϋMxκ-6Β}BζίΟ‚_ψΏQ3Ok΅ι―'ο&–βb|Ϋ–
ρΩiΠΊΝ4€ªª@“Oτ‹πηαΧ†Ύψ3Bπ?…,Ε‘΅ΩΕm;Zβξ`ΉΉΎΌσ®ξζέ<ςαw;α@EE<πσΑί<;mαθvZl46±:κ}ª†ξφε·Owu*€diΨΰBΕ’yΘ®,ExΚΚ–‰Ϊνu²WίΎZ·ΠÒiIό]-²ΪιiχωιάmQ\oWwεεªώΏΞύm_ΟϊθQE
(¤ΗΧ®zσn”_ζΤύΥÿ
Θρ©κ	ώκύ¥ΫοKοvw^«σ=KΓ‡ώ$Φ_ξcσoώΏγ[µαΏωΩύ?φ|Vύ~wÿ
{­ώ#υ¬»ύΗÿ
ιάWέÿ
[ΐ)G__σό½¤¥F?Zγ;IzοώΑ'ξώ9γ­(ϊυΗτνιF8δ}sόΟOj\ύΟωÿ
τ
„ΰtΟιωϋzώΌTCƒΟ§΅$cΨΞjR21τγ?ΧΣυτ¨¶Cί§=8ό?Z
”lcςτδρώM/ωÿ
?•3Η^Όγ§ΣαοίΠuαΐcρ `nΟιλΧιMpGNγόνλλr)δΰÿ
_εΝD#―^0!θ8όων@Ta†qΙηƒϋ~_)$sƒοωττθ2{γΌC¨ονλ@*"έ°G<‚Nάc·ψrώHΑΐ<γ>Έφόyθj"ΞG©νψΠoΣκΟΧÿ
ΥQΟ­9Ήδ^pGεΖ)¤―ωφ¤ΪZ¶—©΄#ΆZέÿ
_/λblqΗ¦xλθHθ>… ΖI8δγ¨#§<τώª΄·Ζ­’iω²@'
‘€N–^υΟήjΰ‘Cq
’H<uΐώΌW\\`ΪK¦οMtz/Ώ}φσ:(αg&ΉSoΟn›½­ίMΊ·–φΰ—eΞAνΙρί=}3“ΑΊΦΓ`FΗ9`HΞ}7c{ϊLΦΟ4‡η9nηk`’{§S΅β"Hκ3^8νΑΗ_΅ζΌΨχ>dΌν³Ίoeχÿ
Vυi`£¥4›ÒΫ­­Ϊέ΄ΧBΛΜς.K$“ΖGoλω}!8=@ϊvÿ
>ÿ
_Z(ΞkΟG7«ÿ
ƒ²-Ώ;#Ρ…:qQJ)i§wώ‚Bp3Ηÿ
§~}©22yώ―λϊtβ΅έωθΏΏέΏΜnZΩ[M^—²²³Z­5E  ς-ΪΪώΎ‹}·σΣA©]Ϊήz;®η¨R
	aƒΣΉγ2δ·^ή½{ηόÿ
΄αΐaAμO(Α=€^δώΈ―Ίkω~›ϊκfί*kw¶ϊ]-N—µΪΏ™όκΑΐτoψCg“ι°ήάψoβΟ…υHζ„Mmu¦ήXBÒΦς „<m6mΡ»o>E#χ+φhΌπµÿ
μσπVπ^“¤hΎΦ|	αΝcOΣ΄Km?L·ώΤΣ ΉZΪZGΌ{®$”Λ±2ε<~jÿ
Αw ΄φΊ3ΆµΜ?Ό-ƒξ
¤ΆEd1δ“–¤Vn2\dWΥπLΦΤφύ!ΤC%ΜτθβYΪοuhΜY‹`ΫN	+Έ\ΧάW“Y[sσ5mjΛΥί­ϊλ±ςΨH―νΜ|Ώ*ƒwΩ)%ª·V—m:q±IΗSyώy¦ϋύ=©qηωsE|LυnώVΎξÿ
πoΉυq·3ιd¬Ό]ÿ
pQEI¥k­ϊϊ5ειχRΣϊδcόύ(άkdÿ
ZύίMΔnε~F:σΐpq“ί§βztΫ<Νώ*§{y…νμμ"†Κ	n¦‘³µc†#$έ°¨sάδ•zª)U’J4βε&―Ά­ωΏΞΫXªt§V­8GIMΖ
Ν¦ά­u~¬µΉK6ΤQΞηΪ£#Υ‰pr9Θ¬Ωµν¶}FΒ3Uο-Χ‘θ‡δ“ά‘~O|Qψϋβÿ
j·πΨκ7Ί/†γΈ;->Ζw·ϋD*v%ΕΔΡ•w’`ωd•gq―·ήΏk¥[]]άέίΟµΊIy(/,¬¨δΗ$γq8ΙΞzόo3ρoC<.X…Ίjs•ª&Άωzοgχ|ΏgΛ<*ΕΦΐÒΕγ±πΑS©ΤQpζq’wΫKn»ΈβOφΥτΡι›Ϋ`:z‰=:}q}Ύ½ ΞαcΥtω°P©ydIAγ9Ο8‚+ςVoΩ«βδVΖε-νδ%C›uΦ‡Ι<Ξ«‡²I 9―/ρ'†Όiΰ[¨­µϋ}[E0ΫΜnfΚ|νΒHc"•$†8 ηΤgs
U"ªδ¥h©99(®f΄½Ήnχ¶ηkΓ|Ί¬gυ^&ΓW©Ϊ…>G+Ε&Ò³ΊσΡΪώ—ύΩXΧΚή¥
‘ΌΕΑS+‚x8_jΖ—SΣν™–KΫHΞγχ©ΞOVη΅η―n§?Λoΐoψ*ίΖKo6?	όG,ό+ΧΌA7„΄»ΆΧRψEΎΉΉzn¥ύ­5Τ‹uesrΆτί²Δ-’u’ΦhΪ	ουΊkGQΌΐξβζζB@i¥y%–NΈ«8σ‚}niΗRΒαπu!‚”§¦ δ¬»d¬ΌÒZώgΚεά,m\JxψΖ8z’ƒOdΧΎω΄³·ι¥Ρσ―θϋFνJΐCuνώΣ(ΟΎO¶d^ΡI]ΊqςέBOcσ‘pϊcσ~-ΔWΩπΪ_½ΰ]ν
σD‚>2εI^G$
=Ob[=_OΓv.­§@β–GVPzσρ®+Ζ^"bNYg,`ω[r’\Ρv’Υt²Ώkϊ_Χ^Σ©QS†k>U%]§m{kΫξσύ7‚βΚuΕ"Η*H	οΠ·NΌrGΜ1Ν>R¨Ή9
­Ζ;KατΖGWγgΗ―Ϊ7]ύΎxβ­›©^h‚ΦΫIΣ.gY_kΒΪιΠή¬n’5ΈItα‘U•2ς±‡νχγÿ
Ϋ'ΐ:Τ.±Òτx+SƒLρ—†’ξΫIΤ-u(λGΥμνn®®η‚;„κΥα’ς}·V3Όl#‘
ϊΟ—ΤΖΗ8ς>NXό2nΪί_]ώ_-αJlΦ_<eJ¤Τ¥e(¥Φή}:ι¥ΟΫFέ
-*C:ρΠÿ
{Ο\`{t„]Z’άD9Ξ7oo~zWΖPxcΖχ±‹°κ,¬+Ι;ΗΈ»r†§¨l`δή ½Π<Y§Dn.­ob…yyΞαp¤δνf#'$ϊ>―γ!ϋΟμιr%w&εgmτ}µ~‡Jα
ΛϋN‹“²QVnϊh’{λkt^{}Ί―D‘’9
2±<ΰγsΗAJΚ
εH<ηΌψΟ?
g­|'i®κφ$¶ϊμ.•"yιΠ£1	ΖM}πΛΗz†·q&ªΊΛ:Ζ^»$¨Γ+
HP:c8cr;ς,£Φ…ΣφR›²WλΫ[|“ϋ΄ΉΙ™π|XuVlΫΪIiªιo.μφv%@ηΧ―?OΚ~‡g¶3Ϋ¨ϋΎγ?#ηH$ÿ
>½M5‡ƒΑκ3λΞ{t<ώφªόΡkUdΦ½,“hψ»Y΄Φ¶-4λΣς>wύ΅σύ›αΕθ>Ϋyψώζ.§§=Ξp}kεθωÿ
<ΧΥΏ΄F?³ό43ÿ
/­ξI§ω5ς“υOÿ
Wυυν_U—―έEι«ό’όÿ
·±ββ5›υ£8‰ν·αΗXuΧύ{ι—ωίλΪΏ0rΈ=
ƒÿ
gΘόkϊ&ψ¬β?†<bq
kƒ?]>qτ―η[<~§°μ1ΧΠ~5ϊ―«Σ―ε'χϋ­~GεάiwZΊΕοΣ[ÿ
_yσνφw‡CφΫΎΌt…=ΏΙΗzω3΅λοΗωγόβΎ²ύ£Ψ-‡ οΉΌΗΧΚ@άϊ‡ςoSΫέ:―AΒΏQΆ³M­ΥΣΏ{wέΫKoΥ™Oβjϊ½zχZ~+Κί4~Θÿ
Α
ΤΏνΣnΨÿ
WπΗ¤ησΓΛΗ=λϋH?αωχύkψΗÿ
‚D­ϋoέ9ΗΙπsΖμ8Ιµ!Ζ=ΫώΝλεsν+«λx+}Ι|¬ΪόΟK~I·ΦI/’
(ΆΎtν
(Ά¥§tΣÒϋy}ϊώ—vθ5m}4υΊÿ
‚QEPƒ·βθ}½ύ¨Ά–›ΊΎή½<μΎΰΣ·®£_ξύ/›ϊ~uλ=ΐΉΣm$8…PωN9'‘υ5ε‘ΑΗαώηkΠΌ%/™¦<g9·™“ΰδφθ2O―aΒΆIivΥϊkmΎφzY|¨“Ω­;ΪρΥω+/—C§Ά+†[Ώ[}ΪπQE€(Ά
*N=xΗ|w§ρΝMQJ2ς3ωΣ―§­\tjύV›odÿ
_ΔR²ίΝ~ώηζKE ΑηΉλΞΟΦ–΄ν}ν―αΜ‰z Ά+…Q@Q@ªξΔTf9ΗEηΫ=ύ«Η®εϋEΥΜύεΨϊρ€9όΗjυMRQo¦^Km·~/…_NγΧσι^BΉ?Cϊ‚+²’²M§km²½–Ύ·ΏόΚΜ'{A?ΓΝ>Ίt}υEVρ“Ίνµ΄μ—•–—²ϋ&QIvΩ_ζ·¶αEV¦_Χυύΐ(£όÿ
Ξ
(Ά
(υÿ
?—·υΝΞ€
(Ά€
(Ά€
NsΫ―ωÿ
=ψZBp½O¶{ρτηΏoδZφKvΥΎÿ
κΒnΚο “ÿ
Qκσ8ξ3ΖsΕrώ0ρΟ‚~ιkώ=ρ‡†<Ά[†3κΎ*Χ΄½O ,ϋο5K›ktΪ$Ό€ƒήΏÿ
ΰ²πZοΑ<46ψGπ’'Ηίµ7‰t―΄Ϊθχ.τ/†}μ[l|Cγνηi/nL‹6‘ ,‘Oy5εΫΪXµ΄—ΑίΖΏΪφ‡ύªΌYyρφ‘ψΉγO‰ή Τ'–κ=wX»>Ργs-…αψ-G²·R!†ίL±¶O)G]ςντωWWΖ¥:ν6“»]οµό’Ύϊ%«βΔc*NΝΚφZ«µm“ΊσvςΊ?Σ‰ÿ
ΰ¦πOhu6Ρ¥ύ±ÿ
gΤΤ–S@Ώ4Y‘gΞΣ^ΫM%ΰΨSώTΗ$ΧΥΎψ‘πλβvίΓψOΗz<―§α?ιzύ‹+
Λϋύ2ζβ5ΗBƒ€ÿ
!/°Ϊªyg‡`ωvωJW
Αgί
ώΧπφψλϋ-ψλKψ‰πβoΎx‹LΊ†δbj7ΨΪFαδ±Χ4	M#YΣ§Q$wwφ“ΖΙ#Β>}ΊΌ£ΙVςKDΣµτ²νoςςΉη¬εsΕ8%v·ΦΛKÿ
V~gϊή¬Ζ98`ηΈγ ηlcKΔL1“χtΖNsΣ~X―δKφdÿ
ƒόiρκΓΓ_ΌUΰΟ|2ψα>εKβ¶•υxώςΪ?ή·†4λ†·ΥδDϋCθΪ•Ζ³Λ_OΈΩ¶O¬/ΏlίΪCRΜÿ
υ›f$“…Ύ™g‚~θήΖ5Hχΐ
dηε±Y>#7	ιgÒϋ{½φ·ζΣΫCΫ¥Vd•Τ’z=5KªίNφΏάHjwΟ§'==Ο­<eτc‘Ϋ¨#οΣπ―ζΧNύªÿ
j]cPµÒτ>+Ή½½;{xΪΘ^iH£6ΌI,Iΐ
qυW…υ―Ϋ|›½cγΤΦ„…v΄ϋ©,dR_3NX―‚K'9ΉΓ*R¤ΣrzkΊςκοΏ–ήθ£uξ¶“V²O§ό[φα?ΰδh@ÿ
‚IώΠ*ΠU4ιΎ#ψS–½¦*Yk6pίψÿ
F¶ΎΣRµXomώΥ΄fMρ;΅\Χω‰iίώ.Ω(ϋ7Ε?vύ0#ρ—WρΣPμFzqµώΏ¶ΗΑO·Oμ©γΩ[β—ΖK/Γ8»πεφ΅β]'ΒTΪΔψgZ΄Φ¬–eΦΤ¤·V‘Η0Ρ’#(H#ωη·ÿ
ƒ[Ύ$‹φ―ΪΛβΡ†εaψsα{rW ®ΪΜό;1Υί‚ΖÒ¥xΤjΞφ»Σ[]΄µί[tΧΡϊXZΈeJQεmυI¶―{-Òμ―«ΥνsωL·ύ¥?h+P>Νρ·β|
|i®‘Η@ή6=³ο’k¨Σÿ
l?Ϊ“L Ω|yψ–q7Δ—w@Ο.Α°qΖΣ}kϊΑ¶ÿ
ƒ^?gE	φΪSγδπlQ±δύί)Ψ)τ»ψΐΣπlÿ
Α8cBύ΅όWnιΒ>§ΰMςL`ΎXυΙl’£ΫΩ£ΐ;)ΧQZ;µ&ϊl•Ώ.ΞχqΕΠ‚^Κ“¨ίx¤―Ά»mi·Λπ?–Ν3ώ
ϋiYίΌU|«€ξ•£_η―¦ΣηΤΩν]Ε—ό›φΧ΄ΪÒψέ/UHνήΡ[αV0±Ο=ΝFz·όkfK#φΆ–Wδ_Q€=0~Ο­&φ=}1σέCώ»ρτ!‘ϋMψbιωVÿ
ΐzΜ ρΉ Χ'y8SΤ{
ξ…lς·kω£¥Ϊ^OΊ·m>XΪl;[y5wªΪΙmε¦ί/Γ{Oψ*Χνi§ΰ\_0Ζ~ΫαY‘‰r-o­†sΧΈ
u®Σώ
ύϋMAÿ
^ψcpΘΆkp|μΦΟcΗ|_¬ϊό•ϋJ*ΉÒΎ8|Τ
έ²;ν/Εϊs8κ2Ωίª’	ω±jρÿ
ΑΌ?¶uΘφPόρ
…m#ΖΊtψθuYDΖλH,
βως¦†*„›^λiΩνιk|ώα¬dtφ¤νw7φ~ΛλªΧGψ―ό?φ‚‰Ιΰ?…Σ€ϋ?ΆέH;5R@ ΖqλΖkϋΡύ™?ΰώψ»πΰΏΕΟ|Dρ}¦­ρ/α‚|y©hΊ.£[ιΪuΟΌ;a­O§ΩMt——r[ΪIxΠE,Μ$e@Ξ ’+ψ@ψ£ÿ
Fÿ
‚ψ-gΉ±ύΌE®Β¥†|-βψ•I9 ¬6Δw¬Έ
©ς7|ΛfΏΣ7φGΧ4/~Μ³·ƒµ}FίHΧ|-πSα‡u'Q±ήι¶ΰΝOΤl.΅'—=δ[Θ£ :1Κw5―NJ…JRK—ΰ’½ÿ
;wΥφο}jΛRηF’‹WζRM7eY_Ο¦ϋέθy.‘ÿ
Πύ΄Òqγiύ·]Φ6ΐ–66δ 
‚;γΩ|9ϋώΝ>xδ³ψYΆίΟ­Ν}¬Ήeώ&KΫ‰`b+ζΑkιu]6ιΡu++€ΐ0άC.οOΊδg¤σΗ^•er[±γr=z‚{ΌτΙξGΟKQ»©.{ΦΧO/ψ}:o*W΄c¦Χ{lυ}6·–¨ΜΡΌ9αΟ[%—‡τ-C³B%¶“§ZXFª½
KX£VΑ
δδ2zV›Θδ\ρμ9 uφCZΦ4iwΪηµ}3BΡtΘ$ΊΤu}fϊΧLÒμ-αS$ΣέίέΝµΌ1 %δ–TDά@Θ―‹Ώπ]ÿ
ψ&WΑύzοΓWÿ
ΣΖϊΞ9‚ς/…ώρ/tλyQΛΧτ{&πόΞmυy@!²r9ή–‹NTιNΆ[»4–ΫlMϋw9κT§Jκrώ΄ι―~½΄gμ©μ?/Aƒύzi8'“S‡Γπ―Θÿ
‚π\oψ&ÿ
Η=~ΫΒΪΗx|®κω:uΔΟκή‚ώRªBA¨κ‹&¬Iαn/΅'c9―Φ=;Q°Φ,mυM*φΣRΣo΅ζΛPΣξaΌ²»·™CΕ=½Υ»ΙρH§rI²°θH9¥_Γ$λR”W\Ι―λΛτ&θΤÒRke}SzΎ‹µ»oΥ—(Άγ4
(Ά€
(Ά€
―rpƒά?#V*½ΘΚχ±\ƒώGΎ*eπΏλ¨γ¬£nλσ=SΓhvgμ#ςίωsύ7+Γ™:-ΙϋΣ·ΞΨώC§?…oΫΓκ;cΏωξ?ύξ·ψΦrΧ|} –Ύ‘_v€Z)μ1λΠϋγΏtN?Jgωÿ
?ηÿ
­Ζwωχÿ
λγ'?\γ—―nΧ λΣιΞOΏjg=qϊqNCΟOσΗιωϋc
–›οΙφθ9ΗΣ?iΤPσύ>OρΆ(Π}j*sη?Λÿ
­ωώyϊGΦ€ΓCλψwη8χκz–q–O_ΗÒΜ1€;ΛΧ¶{tΝW;Sζb<zπ>cΗωυ‡8«λ·Οςβin]Φ¶ΩωξZcΖ|z~ΏΟzªJ³“Πϋtμ:sΧΤsΙυ£s¨Αηp’2yΑ#<
O\ΰϋuιƒsª;εc wγ·θ89$ϋϊwδ«‹SτιΣo7Σm~Guέ›WZ=·W_‡~ύ7FνΖ΅#Xyό€ϊτΐ5‹qª3gΚl.γvΘΞxγ#ΧΫ=k!δw$³IΟSΧυ5„ƒύnυγΦΗJZEΫΝ;υO―¦ίπη©K	ΩΈέφKM-χ¥oΙξO-Δ’»Glzη“}σΧΠUl`σ“–$`c»sΘΗΣΉΙ/ÿ
=i7υυόΖ3ϊzgτ®NS{Ύ»Ύ~Vώ¶]Q`­¥~ªή+i·ΟWΎΘ
Ι Έ#gό}ω§σύOzg$η'οΧ§ωΐλFξxδγ¦x#ΎNO~ΌVmλΣδϋiη7ώe+[UέίKω[ΊVwZ®ΎCψνψύhγ·ω4ΡƒσΫ‘ΧτμϊώΉ§{Σvÿ
ƒ―αΗπ²-;΄¬΄OUm6Υzφ·―Q§§
yΰ/_nΌΤdσ~?ΔgLgNqR‚NO=»R0Χφθyχδε-Ώ’ΏKξΊοm®Όµςlίmt²ΥιηΏUΆτy$€}zϋoΒ9Ζ3ψηÿ
―ώHιLτγ=zz“Τƒθ{υγ<~η9ουό;ζ…k«ώ~ZzyλΧ¥–λ¦«^Δ}qΞpη#Χ‚*)2sΐ9Ξ‹¶;g<sτγΡ™?ηϊz{γ―zxu2y;HΌyΔΣ¦}iΫf¬ξÒκ»7ώ^¶vΨ&Qλv¶Ύ–³m/>Ώ]??ΰΰ/?φYψeαδf+βO‹6ο(ψτΏίΝ‚ΏΖ<ΛΒ“Ή†9ϊϋ#x`ψ'φaψα'@’hί
όΉΝ—DµΊ²%ηlη£dc&Ώÿ
ΰΰ]Hκ‘~Κ­ΎΩ®xΛVΤ"sζΉΠ4ΘΒ¨
i/
π~ι#<ÿ
AήΣ‹αι@ώΙπφ‰¦c°ι–¶‡qώ« ϊSφY„<‹-ƒΡ¨MΎξν%%¥·μή‡Νΰ–sΥέJ4γθΣKOGΫ[_Θθ3ψΞ=ΈΖ;8κ?JJkΣΉΣΠυΟωώEΥρ’ΥύΧυ²ΉτΠψ¥'mTR^|µθ΄Ψ(ÿ
λώΏαΪaAώΗϊϋrQ-·ΏOΦί†ƒθ¦†Οl/¦}{Σ¨Z4T΄ύ/ύiύw+ƒψ£;Zό;ρ¬«ΓΓz¶
ΝΧυ<£·8®σΧόÿ
Γη_2ίόh
Ι>ΤΊvXώ
	ό+ΜΞYf6ΞΟκΥ­―jrκz™JΎaƒM+ύj5«owίk‹1Η¶5η9σ‚zrNG¦}»zWiπτ„ρΗ…Λ©#ϋnΐ
§¦vυΈ=x®F6„wΖG\ηυ®“Β.cρW‡^0®³a΄™σγ_qΠρϊΧρvΚ9Υ)].\\$ΣΦÿ
ΌWι}zχκhβΤe‘Ξ„RjXj®—ξ“Ύ‰Ω­zίΟ©ϊβmUΥϊn―ύ–“¤Χ7•»€μγª‘Ο0#¦‚~Φ1ιηαa3yCRϊ5°,Ή•–—i.Σχ”bΗ(e_— 0κ>=xΫ^π_†t+έμZ\έj+o4†(¦/³HΫ1*ΈP8Ζ{_xλΖ#ρ…΄³kϊΖΆ-a™΅…‚¤Q1hΆM±©`–U©ϊΞoeΨj•0M9βk{'(®Xσ(΄Υή–Σ³Ύ·Ύÿ
ποc«ςζ1a†ΒT­+―VMYΪϊ7{ωiΊ?™	΅ψα;JΝΔ]	ΓdπγΔΦΚztr	9$ζΏ±o‡0	|_£¤,¬ψγ‡ΪR:ΰ0Ϋƒ_ΗΟ†¶€;|GÒW©ρT[ΰ}2{~5ύ‡ό31―4•”€».Ο<|ι€sτcΟQa^¶g8Κ¶LτεR¤Ϊ{j ή–Ωλ}nΏ.<›8<ιΪWζ©wfΪΡκ·σÒφΫΜχΑkxψ•Ί]/NCΰ`ρ…wφγ-γΔίβ=ANp€dπ
τO~ά{|’#|D
]
’0δσ“nƒ―½xOόTΊ§#"TΎ~EΟεηQªK	[ΩYÿ
µΉ{–M&Ά΄ςm;ΫΞζ?9Ο7'Λ‡…ΫΡ¤­½ϋφz;φ?-?ΰ¨ςΩbρuρΑ±9κ>Ρ}6άuΫΊ%τθ|ΧΜπEV2|Rψ»g!ίk.›ΰ	6,ciSΧ‘K&p~Y~c¤έ1υό21'μ©u)!EΏΌ+’ωχ±―®3ΈξFO―ΛΏπE`Δ‹—-:w€’GXκγ(ιχb:
qϋQ|1fΣpΔ^KK¤εeo?=O–βYN<_I«ΏφYrς¶χ„—ΰίkΥv 





/
c
`
3Ο τªW¶Ιuiq«ςI)<dg
xΑΙμqΫ€*Π‘AR*Έ#ψΈΘ#“ωLΥ{Ωγ·³Ή™έQR'$’q…ςNIηυ'9λΦXªTMBΚ“Wχ^λΎΙmΣw§wΰaύ΄q0J3RuΫΎτnνΣϊμ|ut—Άƒ$Κ:‘χ―^¤ιτ…m³ΕΦ'<”dζ<cHϊόt®v4Ασ$vυεΨς?.8ΞkΉψaµ|a`άHƒmΔR®HλΧ―Ld~s“&³²Q―§{_³έtό|ΟΣ³W‘b9υn]τί•&―—WΠϊρΠδ“zΒ€
ιΐη®9ύ)¦{GαN_›o|γ§λΣόύκ•Ϊ¦―tαuoe{=χιΫCπYΪςΏ—δ―sζοΪ1€΄πΈυ—P'Ψ*@?ΟΣήΎRfΙγ ÿ
?Zϊkφ»V½πή¥wCiwtΐRg…p3εΏ^Έγ=kζ@	$t8<{ÿ
^ί‡zϊόmF;y~	ώOοΧsΓ®Χ<φmυλk_©ηΏ0>όB'
Β!―[§όxMƒΟ^q§5όν2ztφΫ}»γÿ
Υ_Ώ_΄Έψ#ρQ”®dΡ[M‰I#Μ“R™,Υ΅-ϋήnίeqς
ΉΗRªzδÿ
,Wκ|	S΅]µ»ΡΏE«ϋώgε|_%<U(®KζΪ_ηάωKφΪ–^QΑ7‹sθ NqΧ?Σ­|—’}ψΟΎOωΙ―¬Ώi¶kα@z™5zm‰Iÿ
ρ―’#Ζε>ωγΔOΟύ:‹~Κ)τ[ω[O.Ύ§ζυ4›]•Ώ_Όύµÿ
‚&m@ÿ
wΰίTϋgYπ®?QίέΕf5όmΑ£ϋhk²ωcπkΕ­τσ5ί―_ΓuύφLNI>§5ςΉÿ
ϋΔΐΏφίψ?Ò=,πεώ!(Άωγ°(Ά—{ττλgΧoΦή€QEWυύZ€QEε~·ΣG·θµώSKh¬ÒÒνΩω;§έ5·ε`®ΗΑοσ_G2|°'ω}?—]7„›mύΚgοΫίk©όΐ==ϊb¦i΄ΎKNΦ_ζ›ÿ
€uαZUa®›~[φΦΧ=
(®I««ÿ
NφGΠ-R}Ò
(Ά²QEHύωξ?Ο§κCΫπχ#τώ£Ϋ½’ιkϊ+yχ_wΙ–ί‹τ]ό―kΫ_QοdγΣΣάΆ¦¨pwtδH»ύ*j%}-­Òκϋ«k~ϋ=:λΪ‚(¨·υ§ωÿ
_xQH( O>Ν&Qÿ
=#9c!‰Ο¶οΧ µζ `Χλίÿ
Χή½ΕM65μg½#_εΙ?…yΝz4ÒjΪl›]ή~<ν±ΰγ›Unϋ/Òφιά(Ά¨Η[»«ΐΣÒΟηχ2•ÒK[¥~ύώ¬QEjfQE
QE
QG=ΏΙν@QG¨QώΙι@|ΙϋiώΣ^ύ?e΄wΦ9νώψ6χSÒtιdHίZρ5ϋΗ¤ψ[H{(y5zϊΒά¬{¤XLÒ„aτΡ85όάΑÒ7Φ|1ÿ
γπΟ‡tÒΗβν	ΰM]|eώΗ¥hΎ)ρ=jΩCκZ5©ps‘γΈτ2ªΔchBWKΪEΛ³Z?.Ώ~ήO*Νªm«ί§γϊΐ_Εο‹ώ9ψνρoΖ?>'kw&ρ§όOyβjw³4ςά]ήέ5Α·ΚXEimΛk+xΘΪÒ(-γT5QΤi7°κ6qάΓΈ/+†#z°κ	;`γR+Β¶§'Τ|Η©Ζ=s^±ΰ—VΡ‚©’β@Γ##'£Η§ÒΏcΒRTΆ©ΗHΖ)Ω%«i_ολψ?ΌΧ;“nέμ¶O¥ΊY–ύ•½›^]EnάμsΡωΙΖ1…-gWΉ[x?DOΥhΐY€ΔvΰΎG'$–Η#
3Ο’ψxΖΝ°—ξΘ“F§°rΌqΞNzβΎÒYM•°#cΩƒΚ–Rμx\p+Υ‚΅²m>‹]Χηkώ'‡4ωΥφο§ΛΣΆ·ά|Ϋβκ~Ύ·»Òο.l5ΈuMTµΑue©XΚ—³Α4dH’Α2DκTƒ0Ò_μ#ϋO§ν3πZΫZΦp|BπUΪxKβªUV¶·I,υ»tκ¶Ίε®.U@+¥Όƒ'ΚΙόρτi$xl)&6#8”0Qÿ
}n#NΗR=Οώ	cγωΌϋWψ·αά·4―‰ΈΊ™1Ύ"κ6’
Θ¶7Έχ€\1
_5ΔJs¦ªΕrΙ{­w••Ύz=RλΣ§Ώ“Υ›R„›’JκύβέZMϊ§mΟλ§φcΣαΤΎ#¤ÒF$M/K½Ύ]γq‘¬lr01φ—ΗAΫύ UΑό;qΞNG©ϊ{o€Ώd7Δ.»<ύ›F΄[ΏϊEθc\ύηλϊ_”cδΤμΊ_E§Hκν«σΪιk±τΤφZZιµι Tl„olqσÿ
Φ©(―5Ι¶¶ΏOΓΏυ«θh"‚	¥Ά·Ξ–χτKόΏ―ΘώΏΛώ
ΔuΙΉχÿ
λρωR^ƒΫεΟu<u4νzφgΏ<zρύM(σ=uίMtέtΣK_­‰rIΩÿ
_ΧυΠσqΖ
ΐό ¶=	φιόΙώUε=ΗηώqN5ª”’ZΛεv–ί…νΏω^‰«ίη­Ίom{έ@<cύ}}{0¨\θ;γÿ
­F>έh Ηρ¥yhΫ}uΦύχώΏ!Ϋ³Σ~χΥ=ÿ
™f;™!Α†i΅#΅YυΚ°ΐηζΊ/xΓJe{κ1…ϋ±Ο1Ή‡ΠΕr%’εz2¤σΚΡYΚΡ²K]ήϊ[όΊXkOψ'εGόÿ
φYύ®Ώo_θ:Γ+¥xgΑϊ|·?®<=αίkaήOνm_W°™cΤ5Ei¥ΨjΠ6“i$o<bΪ{‰g―β/βΒΟ|ρΖ«πΛβwƒυoxΧC»wϊ³lφ“†v+ΦÒΰΫήXάήZίZΙ=•Μed¶d%«ύ2Ζxύ}zϊώ―Μ?ψ)ΧμΰοΫΰΖµ«i]­‡Ζο‡ϊ5ώ±πλΔφΠ"ί^Λa—―αJHΥ^λLΧZ/²Gζ³>φX―`’U“μψw;	ÒΒΧTη8®{j―Κ».Ύvzv<lΗ:Τ¦φIςχ}ο}>ο–Ηρ'Γ}aΰD¶³>ΠΖ$Α •Λ*»–PΑιΑηυΟώ	_ÿ
ψΏÿ
ϊρήποβ†©βώΛΞ΅β/jΧSjz§ΓΘη•`ψ&{Ι[HlΪGΉ½Ρ•ώΛymςÒ)Dn?<<%w4{ΩjQIm©ιsΛ§κV’‚“[ά[~νÒUl0•\28ΖC@εώ%ψzΞζΦΧP0©c)·™¶€JΘ‡aΖ@ωYN	ξΐύ'ƒΓfzi¨8Κ6’[ς«6Φιι}z5NΌθU½Ϊχ’ΡμοΧςwvωh«‚ΌkαOώπΗΌ­ΨψΒ1Ρ4ÿ
xs\Σg[‹-SHΥ-£Ί²»‚U$$R.ε8hίtnΚ:zώFÿ
ΰΩ/Ϋ¦ϋΔΊΏ`ÿ
¬χW†λΗ?®υ	χΘώαΏα(π|V/³CΎ‘uM>lÒξκ(Τ,*υΘF	¨Θι―Σι_ζΨ)`±u)[έMς»tI~#κπΈ•^υΊΡυΧ~—}tθQEyg^αEPQJ^xη®_o¥KLp
η‚{cθsΝ+9{½τΎύ­§υ°Σ³O³Ήίx;S³Τ4Ή-ν¦GJΈ6w±ΛΑ3F—1¬‹ς•σ!7\πAγ=b¤ΐ“Ϋ€B=>ΏCΙόσψ)ρn'φ¥ψΉπΓV»X­ΌO>›w y²
ƒUΡτ›xδ΄@xίsfeeE$Θφγ†%kτ(=1ΟQάrx$d`gτΘζΎ5ΓΚ–"¤kMί£ΩoίªΏάΊ~΅’b![J*IΞ
ΝiΩ5ηΏ®½δaΑΗ_Η=ΐΟΪ£P	ΑΟαύ}±ΣΉeυν`ρΘΗoN0*?~Έ8?_Cς·=qμ
μG'ΏΊ~‡τϊ4uηΫΧόχ¥Ζy9=Ύ‡`	Αώ”εB'·oσωώ(ω8θΟΉησηΤR.qΟ\ÿ
§¦;b•†F
η··Aÿ
Φκ0½qοΧ<zpxχγ>™ RΰγΗϊϋOΧΪ°
Xs‚;ςq§¦*|δ… δgqγό1ΣόρIΙ/–ιZεF._Χ§ωϊyΝ€K}ΰ@ΫΠtΙ#―δE1AnY‚ΞIΖz{όϋϊΤr0Uί•#υΗ®IΣ9ώΈ®jÿ
S•NΘ	$τλΧ±γ
ck¶)SZ5η{έZΧZkσ·Ο΅ΫG}Z½φύ}>WÒύ,m]ίΕn„n±Λgιχ’=+RRΐ|©=H<ςzη·9υσY+ΉάΜKAΙκ	'‘_ΧEΙδώuϊ*ρkc%9YI®Ϋ[GmΊυ[o―CΧ£†RrWk¦Λ¥Ώ-Ϊ%•Ϊ\n9ΑΘόΖsη¦y=j!}°	=ΖIγπ#­>ε§%ΛΝtΦΝλςΎÿ
π;ΨμR­m­¥τΣo½yώ‰“τ>Ώ‡8ιλKHs9?ηόÿ
Rύk›ΩFΦΡ½›k­ÿ
&Φ­κNIθsύIΖ:ϊόt”η΅ΖωΙ¨πOQΞG·=±Ζ0zSƒIνύ^ΎBK}{Y­mªΫ§]zώ¨zΗαΧ§9ÿ
υsΤƒΙγ®1ΛσΙΎοΫΧε<wΟ_§OωχnÒ{w=Ζ~QΟoΒ]•οn©YτΡvOnξΫ+‰½•ϊίm―g¥νeδ­­ϊ48ΙΏbG
η=1ΗΣΫ4πr;gΨηόώΏZfΜg’~_ς3Ε8ϋ@9>„σξ½h΅¶ΊhήiληςVvΫ£ςςΦϋμΏ!Τ™ΰ}:u¥ΐτ£>ύ1JIήφιwΏM:λ¦P»jΧ]­fΊξ¬Ί»ÿ
M
Χώ½-!γ‘ϊλΟAKΟύOJVΎί¨(ωφθφΣm5ίfε
:δ8ΑΘ?ύfΣ”GΧqzηΠu>ΩϊΦ…ε.ά£o½?σ[ό»TΪεwM7m'gu¦¶_πΞίΝ·όώ.όwφ	ψV¬dί
έάΐuί¬ψώ¥ΰIm΅.A!JXcύ#μ(p@η`
φΒΏ?S―Δ―ψ/7Α];OΓΉ<)Π³—H[Cπ%Χ‹e’,»βηK62KΜG©ηΘΐ―bη€xΕ}njxLΊ†ΦΓ¦υκω^ϋήΛό‡ΜdΪb³–ΡΥQM¥Όz―Βύ™ωNHάOεοΫ¨ώGµKQδΔς ‘ÿ
κΐλωZpηuγ‡ÿ
Τ?ύ\ΧΗZϋ_ΙYίΧEmόΟ£P•9ϊϋχΗ~zÿ
>Υ5Eί$Hθyγ'=x?―>½Uµ·]‡o5ΣΏ[yyώΚθΊ~ÿ
^ή½G¨4α~cΣλάνΗλωΣς:qώz?_λF_\~Ύ1Ώδτª³}.—T·όÿ
=όΗοώ}ΎΙτΡνΈµβ*-oFΤτ™ΫlZybΰ†K¨ZϊsGZΨ$(Οω'όχ¤υυγΐγΣ?¨Ξ1‚8ζΔPXs¥%xΞ2·g£ϋΣw»±ΣB»£Z•hΏz”γQ=U¥Υν―ό:{ώ'xγΐ#ψ}¬έhΊώ›5ªΕ$‹c~G²Τ άDwσ…CLlD±’C@5Οhwÿ
ΩΖ—¨΄fU°Τ-ξ,„σRC¶+Έ\n`@Aλ_·ΪΖƒΆλφΖΣZΣ,υ+v4wp¤γ8# 888$dy'$Χ“_~Ξ_5	Gπ¥¥³¶]¤χ6αΎU&Uη#…\dg#ώ›xM–:®/-―J*SU!¶¤Σσ[λςσLύΫ*ρg²υ„Μ°µe/eμ§:M5(ς¨­μφvΫηmώψ©ρ~Ϋβ6¥ιρθΧcXέ–3\Γp¬<§*Β° ΎNε^Ψkΐ&ς®Ω«θT†$(ΟΚx#<γύ\ÿ
†bψBοψFή\gε}Jÿ
Σΰ`tλϊVµ‡μρπ‚Α•γπn#`έΙwt2“Ο"g…Ο=ψΙ®'αvΗG‹ΔΡζ~Οm»ώο•$’Ίnχλc\?‰;—ΰjα0<W³ghI­η«m¶έ®οg»Σ]—ς‡πoφψυγΪDKOκσ|7Ρ|oβέGΗζΓoαν3V]Ya†ωίdϊ­βΗΣ!ίyΜΜΣB¶πΛ:ÿ
@WVΊ‰¬HΡ΄ΦWΦsHUΧ+"66΅”πUΉc=~i6•¤Z%—akcilKk[x ‚5ηΆ UΞI'η¨5Μk?ό)®\5ή΅¤Ε5Γ’$™YβfΐκΕIΗ’	'¶ f<ΔPΑª5βªaιEjχqQΧπ¶Ϋ$―Τψ<›0ΨοkFSΓβj9E=dΉ¥{tO}~ο_‹Ό9βΛΝ/[—ZΤζΈΤn$¶kf-*)
H#
¦ά)
c9ΰσYϊώ²Φ±u}RF—„#2³+nd	
8σΣWΨπ¥|
ÿ
7φ[`·—Kψ`8όΏ:?ƒ~‰†έ'rδpσΜΐuλ™Εxÿ
κ>{8ªr―EΣSηzή_υχέΏiρΖE	ϋjX:πªΰΆΪiFJΡΡ­’ιΫ_SςΓφύuoΪgΰ>h>!Φm­―ό3qw½lβρu΅¥Ηu<jΖk©mώΓq.•ΛΎΦΪ
ρoψ'—μ7ρgφOπuv6?|}¬Ψ'φ6¨[κqi‡ÒτX4…›=«ήίM}ws$p;ΗlΌÒΑ|τθΪ";O·΄AΘ1Άδ°θ]¶ο$rΩω€#ΘΏ¨ιφgΎµ‚κAςζA ^ ±%xΰAρΣ'μrήΔΰςψ9bΏyZ\κΚΡMΫK_ρ»νΨωΓ°ΈΜζ†`°©B}›Ό―).;»tZέh|akβÿ
ZE1js²Dϋ”*¨Q—WnΑ%{b«j>'Χ5­Bi!o½ΪάηζΨƒpAwηυdίό.βϊ-°έσ’Mό6H0>{UψVώ
σΤyχ?3sΟψΧ•>ΞΪ”V1:{5ΞυZhÿ
­vΫoR<Y’sσ<NmοΛ­Άϊ_ΏªV½έ_ƒxΟ©:γ#η®=―ΰÿ
‡n§ΤfΦ&·–+{l¬:lI]Γ#¨-σ	ΐΐά0G8φ»x>Υ–HtkMκAΔ¦ΟcΔ¬λ0y·qΥF–¶θ"¶ @Δq*Ά.=”(Qΐ<~¦»2~N"ª” Τ’WΦVV½οΣC“8γxΜ$πΨj.Qn%oEχ½Ω.	H>™ΟαφιDXzέκ8οϋb¤*8{£ƒΗ=:wΟC:Χ‹ό`ψƒkα-m.ÒιµªDΡ*FΓΟ³µ~$Έp0c.l{€ΛeΘS_¥ΠΒήPJφ²OKν}σµγg―ΌΣΥm¥—β»Ϋδ|γρcΔ‰βOj—P6ϋ;6]>Ρ—£Gh<¦u ,²‘vΰΩlσ%<’Hθ:gσ'
ύqΣLΎaάX³?$’w6I'qησC‚Έÿ
ψηΓί<3©x«Δ·‘ΩιΪt oy9θφv‘1k‹‰ΗjAf;›Ή—λrό4κΚ©ΕΚO—Kh¶w»θ΄ΏEίM>‰§N3F •Ϊ»¶ΦWτό5ΨψΗφωρΔ6πΧ€-ξΣuέ@λ:„
ΰΌzfH€Μ£χ’'–Γyqχr?(Κ$ηzg'ÿ
ΥΏ§Zτί‹?υΎ8Φ|c«fΏ‘b°±ήΟ›¥ΐ,¬γΟuCζNαPIs$Σm_3`σWdDiª*#318UX±$π
$τ ϋώΛεςΒαiΒJÒ’\Ϊ=v{_]«»?ΗσΌtqxΚ“―¥΄ϊ+~ν{ήέΏiλΈΫRπΖ­™-μ/.ε\ƒ΄O8;I1
ϊ;ΧΛQψΛότΏώ&_xΧYΤ`rφ‘J–6D—μφ`EΉrpWV—‚_8―9>ηόγκE}8µ¥΄^§Λ_ςω
σ{]Ώς½ΎGξGό“φΕρ”Α’‚Ύ ήγ•IβOΖφ¨ÿ
µύ¦8σΫΧε_Λ·όΝπ®vΦΎ?|d»³•-­μό7πχGΌeei&’γ^ΦαCχ£1θη†δlQςμ£S_³}m§υÿ
zx5jMλ¬έ¦ίQEΰaEPEPERi6›ι·υύ!¦Òiuÿ
ύ~aΣΪ¶ό0ψΥγ#|L•
ΓΠχ=;t¬JΦπθÿ
‰½Ήη*η§cΑξxό:ϋ
ΚV»²ν·ηÿ
tα®κΣΎάρVιk―“ωφυ=J(®Imχ|υZ|Ο¤¬­ύ;jQE`PQENΦΣϊvϊω?.‹ΈVc“υ η?ν?QVj	
§qϊ‘ϊgό)ΓwήίΧθ'­ΧVΏψΐω€ΐ£9Η=Η©ΗSƒο% ®1ΗωηΠRΦ‹tόΏΛ»ώΊ½l½υΧσaEPμµ~{_εΒ(¬›O«ιω%έφυθό€Ά)-ΧªόΐζΌVΠ λƒ?ώΣ#ϊOαΞyεzρφzΰ\g§Ϋ€?^zq•ηµίMΩ+ίkvΣ£θ»kψέ9^¥―Ϋ§{Y~_pQEΠyΑEPEQύ^—ΤsνΧόβ*y®ÒVτΦÿ
&νΡίkιχEU
QE
RcσΨ{uÿ
?ΰih£ϊώΏ­@Qγ?ηΏOζ+ρ#ώύΟν	ÿ
ΖψΑwa2Η―ό
Υ4OΪ,rJ‘E{ƒν—‰,d’GHΓIα=g]ΈµRωk»[d#η5ϋl ±ΫκHΙΰt$δρ€
$Ι5ό1ÿ
ΑΚπVΉ<kβSώ	νϋ?x7‚<9sύ¤<QΆέOψΆΦxnμώΑy”“HπτΡΕwβµ”½ΦΕΎ‘!ιπή{9%Υ1”§N>ν9§)vµ»–ϋ!M®U¶®νu~ÿ
=―vτΊΤώAWR„•VVC•nª9τθ@`I#€1y®ΧΒZΒi—ÒA)ΝΫ#	;$„8Β±ΞOΕyy·–eJ–Ψ	γ
¤ƒƒΙδ©θν£ha3Γ(δηx<cόύc:‰·8ϋ®ΦΎΊYiΣόί’ΫΙΖQ¦ ωrzJ)ήΦει~[/F¤’]¦9α|²G"ό•lN>ΰv―UΡ|k§‹Xγ»•­ξHuYηΤ±ωΌC_ ιή#ΎΣ@XάK
¤%”gϋ§<Πΰγ§ΊρΒ…ΛY|ύΐάό»€Η>‡?¥z1©(«'kνu}ν£ιϊοcηκaªI««λo4΄²ωϊώW=ηΔή ƒP!-¤i²εΚ
Ήn¤‘Σ§η[±&£$_·ΒVµ‘ύ³es°ΰ¬3ψkVχ•Ξ
)c„qgεΫίάά)KxΦΨΪΜg*FΐΈ`ςyΟΩπK?	\ψΧφ½Ήρh®4οψSXΤ®.ΘfUΏΤ"ƒG±ΘΈU–Q-μ‚rιΣ^s[χ<’zΉEιέ%/^—Ύέ7=¬›8ΊΣÒωΙΖ)ιΎλώ®ÿ
ΈΨβΧ6Ύ5ΎΫ’χ] ~δGΔΕxτΤn>µχ|qϋΔOƒόOtH&}~qΔ|HF;d¶ύuφ=~EΦ½EwmµτΧΘϊHΏu.Χό7Μ(ΆβεjKMµτµϋuÿ
ΨbΰΰΓόqώύT„~Ώηÿ
―τ"¬…τί'?ϊζΆ`OAΈσΠcΗβ?½Tdδνk&ÒΎ―•ΏLίΊÿ
®¨ΔΥ5{ΚσSΥ/-tν;O‚k»Ϋλιβµ΄΄µ·G’β{›™!‚£Vy$•–8ΡK»*σ_Γ]|Cψ­w¨ιÿ
±χμΕρwφL[[h¶+ΰÿ
…«y† ³ρΟV+MH¬αΦo*–ΦζxΨ=vώψnΏπPoΪΕί5»ΛΘΏe/Ω–χI?΄ν:ξkAρβµβhi_υΫWIGƒ|1_Ϊ(΄†E}RύΒ}‘4§Ϋ¶7όφgÿ
‚~ΩθΌ#α{|B±°²³Ρ>ψ
ιÒ<)¥ΔZ|ZΝέ­΄ΦzΟ²i–z}ΥϋFRW²†ήHξΪΒ`ªΞ¥,>,n"§-Ά»ZΛF¬τÒιyμΘfζ[CΜs,Ϊ†M•αg*?\«%ΟV¤?‰Pm?rΝ7f―¥®~TψΣφ‡ÿ
‚‹ό*mgβoό—Ζ~΄Ynnο|!βσβί°ΩΔ­+IusΆizΔΈDcσ¬H΅pd
©®ίφqÿ
‚~Οίµ»]κ:‡Γ‰’ΜmΐΎ?t›«λΥ%ΫFΥ¦κw+.δKsmª1VeΣqΌGÿ
‚πό@ΌΥ-ζρ/μααµπτ²/Ϊ¬τ_6Ή«8VheΎπςι·wXd[8¦dΨg…[zφÿ
Ώe―Ψ«ώ
Υπ£Zψ›π:ΦΓα·ν Ϊ½Ν¶±ecmα―ι>&H$ΉΣ4οι¶`Ί²»Ό]Φϊύ¤—%έd–Φφy xSλq?‹ΒP§γ)–5czxΚ+“²«mc®Χΰ~?–ψ›’fy•z\3Ε|ςt\§,ΏKκΥλΣο	VόµZKefÿ
υpTnFΙ*AΫ9οΫ††:η<ϊριυλΫ=kς“ώ	έϋNόBΧuώΘ_΄‡Ϊ¬Ώh€Χwz<Χ«ΏΫ|]α½6qf/ε•Θ7†ζΉΌPVώΒ}?QHσΞWυ`sη°ηΨcΧ0|Fa—OZP“Òο’fQΡ©G¶φIwκ~λ’ζΤ3lM4¥Nv”*GβƒWέ4Σ[θDPÿ
“ÿ
Φϊ“Ε7Σ’9νΨΥ‚?§lg9νιΫ*λύΟÿ
\ϋφ[Υ΄ΥΪκΊνΊό=t=Αηόζ™ ¥[AΞ3F{sοΈβMq‘εω~zφ­©ΝΖtνtοu¦©ήΫy4¤~~ώ©ό2ÿ
ΑF~ΪώΞ·'ΕήcαoάAγέ8Τ`µρA’ϊd@
"΄Υ?΄,ΐ\Xϊΰ|mγVΚ]EΔ2<’Η$B7Iª¶οΊ¥§#qqΑ~ΞΑΓ~²Π~3~Ο~2™Vβo‡ώ&ΠηΊ	ΛΙαΝzγv
ƒεΗ®[Hΐΐ?Ξ.µβΛ+x;ΎΥq XgΚ‹#
–aσ•#Ϋ=s_¶d‡S*ΓΉ»»&®“¶‹ΧT®Ώ¦|N.„–2PΊ“M^ϊlήNκί†§κoόΖ7ώÿ
‚¬ώΜ­¥Ο$c_ρΉα‹Τ…ΘΧ…υHnΰ›<»σ(1–=―τΪ”άυλω’Gικ>Ψ'όαΰΫÿ
Ί·ΕΟψ)ώ!K¦Ι{α~ρwµΝI›Xkwαί¬#2άήκ7rB„~Η#’
ζΏΡά¶βHι“	Ο8γΉ<
0GΝ|?Έύn¶nN7³iύΪio3ΩΚ£hΥwΊζQ_φκ³Σ}ϊΩ~BQEρg®QE
Φι_lÿ
ÿ
YνN¦·UΟLγρ ÿ
.0i­ΧªόΑ«θ~2~Υ)­x'φΥόA£ά\i„‰΅ψ‡HΏ‚R²Η(·…xάγΉ΄
ηk@9―ΣΩ£φΑπΕ;OπΧ‹o­Ό=ρήΩ ήν–ΪΓ\h”)ΉΣgb#3ΛΓIi‘(bLK"SζΟΫ·α¥Φ―αύβ^—nf—ΓyÒ5Υ‰ΈÒ®¦ίitαGΪ]»Η'`/ƒ·ΚkςΦZ9h%heB²G*;#«)ά…XaΤ¨Αά§‚qΧ”ΠΝ0κΦUcµ’Nϊu·–ϋwμuε™½\³ΦtΣ»ƒ½_[m§MοcϊµRw«ξFωƒ%pΩΪw)#‘Ζ3Ζs`
g9οΟ'ϊ“ΗωβΏÿ
~ΥΏ<o–γΝJκΖT†ΗYXµ›dΘφµy‘q*ΚªGQΣόφ‹*µηƒηΗρΛαΐ¬}7―gΧ
Ζ+γλp®:2jS³[­]Ρ=>λΎGέPβάΎq\ιA»^.Ϋιχk£όm΅ϋΜ ατοψzϊdώGΛvώ•ψ6ΰ Ώ΄^2²x/¨Ζ<?/§Q›ί_―α#?πP?Ϊ4δ‹σαζΖGΦτϊsΦk†37ÿ
.ΧMΪ]Ύ}Λ³Ρρ>UΦ§mR[YyΫª]mσGοE@άίAωzηό“ώ
ϋIνωoΌ&½†<;Ώ]Σ1ό3Tφύύ¦\δjώQάΒ9oι^η§ÿ
ªΉ›kά]tΣΛΞο_>vϊΣ•ZΚªιΡknϊΏΘύτΟΚG―Ώοτ>ώα’EQΛωΉ=ΗoπΟ<~Ιϋ}ώΣ›~]wΓ(}Ό3hΓΨrΰπτ¬Ω?nΟΪrc“β_Ξ@πΥ ΰ1Γrzp=*jpg$Ò…›]νΡZΦΧ_].<[–FΛ™½u²ιe¥Σο¦έΝGRf%"o—-ά`rAΘΟqνqΕa¬Ν– ƒλΤuύrpG·ÿ
†―ϋmώΡl2Ϊο‡2|;i’=ϊuΙn*£~Ϊί΄x9MΓ‹κ?α΄ΐυ¶8Οyux'71ω·δύU®·ω5Κ`¬›V²ΥtΡnΊΫπ»?vud7·^Όc‚pqΟΎisξx9ιΟ<Sό«π~OΫ_φ—Ωβ?ςzΒ;n1gξΊσΣΏ_L¬ÿ
¶§ν=Υ|OαΡΟ!|=nGζΜέ†:ϊγΫυ6–®4·WχΌΦΫχΫ·CuΗYFκRoΚΟ·}νΏΛWϋΧ‘κ?1FW=FOΏτυύkπUÿ
moΪ‡
ÿ
ΒSαΠN:ψjΠ~	δΥ	mΪ΅›+γ ΟoΩθH'wlυψ΅pm{rSVµμΦφ^Zuwϋ–ώ½εOyKFΊ[¶Φwίe£±ϋςAOΎyύxό8¦¨lσΐοΞsΫί§ ψί¶gνTΚqγO·†τς§ήzvϊUύ±ÿ
jύί/Δπi½{τ‡=ϊt¦Ό?ΝvqΧΦIn—υςϋίϊω”[ªΫU­―Λψώ;yΠeώ΅ώ
ώ}WφΘύ¬φ‘ÿ
	ώ‘Θ8#ΓΊxΗετλΛ¨…ΏlΪΝÿ
‹‹§ τAΣ—ΣΦOη‘‘ƒδÿ
P3N‘‹ÿ
·―ϊ|Ι\y•Ϋy%~|½­½o«ίϊ#δBΟjOλ_ΟkώΧΏµ›®?αdXχ΄+Πqΐ‹FOΪΛφ³rό,ΫU?μhV\ΧΘoσιΑΈ3v|«½―ι§®ή]ƒύ|ΛΡΙΏEε³M½uό/ηύν>ίχΠÿ
i pHόΕ;§φ®ύ­qςόTN;hεΜ~]ΊUWύªk©9@ÿ
wHΣF=†,Ο―λΟ\#ΐ¦‰Ε%eΧΙlνλχωώΎεΛEtΧNΡσι―τθΐ)#qΠηάη¦L{η4‚:Χσÿ
µνlγ?π·'ΫOΣWλΗΨΈϊυκ³~Σ_µΓGΖ΄ιΣNΣO®G6$ΌqΝ5αώdχε¶Ϋ―ξυ·{τΏ–Ζorδ¬χNΛ–φÒνuΏωμG9Έόÿ
(ηΊώηΣ8ΝϋK~Φ…pÿ
µ¥ltετκώ_‘ªgφ‘ύ¬χ|bΤ@ÿ
jΣN'―%sb}8¤Ό>Η§ªθ¶wΎ±ς³οo?F³ÿ
…—%¤%}-~]4WΧΣ{w?¤‘΄Yqί?ώΡό)Λ·ζ
―~02r8η¦}xγζώ?ΪGφ­PόbΥ01Ziγ=±ςΩ~>£‘ήΆφύ«ξ‹γ>±γ*Rήΐy\Ψ•Θb
Κ‘Η5µ.ΗFQrI$Σ.]zk·ί£ΥΛ°2ƒ²z¦’VÒι.έ―­®ο~Χζÿ
fd‡β‡όƒφ„ρ\Lχ~Y%Κβ—HΣ΄ΑµΙa·/*®α†95ύ42®Μ9Ο$δΰrΰγoOδ“αη‡<uπ·β?‰Ύ-xΕwΔ/>¤ή(ρMΌρ3Φ―z5H]³Α*ΏΪο‘.mtRΈΗBÿ
Βυύ¦Ω·ΙρΔnλ²Ο^px―_5ΰόn9Π”e©Ò\[κ’]RZώ6v¶Η—q_ƒ…^e.zΥ\Ϋμ΄Σ^h—ιE—‚;L}yΑ?η4€ΑaΗ©η=ϋÿ
ϊ«ωµ?ÿ
i‚Έγ'‰PχΕΠΌά gιΖNj£όkύ¥έ(λΘ[¨ώ™Ι€g
π9θ=«Ζÿ
}^ώÒ+Kuς~}όχι΅λ/rΘ¥Ν·uk/Gw―KΏ»_?ι_τόΗψΣάςTώ^έσΟOOώΏσT~4ώÒd`|eρ^1ψάp κ~£΅¨γνΜ	ψΛβΑƒ–ύ”d}!Η¦xΑΟΦόCΜs·ο"έ΄VΣμίπ·EΏM…/2µfγ>5kΪϋ_³τWάώ—‚€	Ηr?ΤώTΞΌυδχγ¦;u8υΕ5πΈÿ
hμsρΖψÿ
Ϊsψg'¥U“βηνμψΟβελ»ύ7τγχΟΏ―vΌ;Μψαo—•τσ·fΊlJρ+f¦–νΦέ½5ό/¥Ώ¥ό0ϋΫqΤuΟ|z}yύi»Ίξ*=‰γ?νzxτο_Ν	ψ¥ϋCΈΛ|iρ–p8:‹¨ηΩa*7ψ›ϋBψΡγΰdBRHη΅(;gΪ®>γ—UΣªς}½P9sψa7ίE~­υΫδL»‡b?1J§q€zuΟΣ΅=82ΗβWν
ΐƒρ³Ζ:hΚ™όWiΟτυνQόϋA’Jόmρª“ƒ•Φ.TqΤ09ιΘ=ϋUΔ;Ζ·όXΗn·ν{όχλΎψYzΥÒ«eΎ‹]΄ού?#ϊxΨΛΧ~ΩΑγ™νψSqΟπό°ύy―ζΎ ό~?λ~6xζO®½¨ϊJB1Φ£ÿ
„σγ”΅Ύ1ψθtϋφ¦	υλΏ—ιUÿ
χÿ
?!χ+½·Χo.-fdόEΛέ­NªΦφ’¶φι+ΤpΈάΚ§έ€υνρΝ ”3ηDyΗ'§qΑ#§ΛόΒόk`<xΐώήΤ>™”ΰηQωβ³ψ³γWβχ£#’FΏ¨G`
Μ0}²9Χ5kΓ¬\’ύμnϋ¥n—ΎϊwΡµ~›xƒιNi7®Ϋιµχ½υΧΙΤb|΅°ι“Γ)υη―ψCΦ‘υ‰Ηn_Ο–λ‡·OZώ[ίΕηβÿ
ΔγΔΊª{u[¥φΰtοΟ5TkΏΩΓ7Είδα%Φ γ}Η­5αή.6\Τ^Ϊ+ίeΏ_]ΰΓρΥ•*Ύ­τΩ§ζώkMκpΊa“ίη_Γ~µMπY3θYΌώ5όΊÿ
nόY(ό-ίΗΔΪΘϊWψχΟZ®u‹Ω?|{χρ.¬sψkƒϊΗKΓΜUμκA7m.χvυΣKμΜΟύ~Α»/a%ηΝ}ν²ϋΏ#ϊσ#=08ώ5ώdύz~=)Ύl9 Λ>…Χ=½Ο·ι_ΛΐΤώ'¶KόZραγώ†=OΫ?ςπ=€υ¦οA8|sΟu,“Σ“ηχϊζ«ώ!ζ-Ϊυ£²λ―Ωίολ®ΎKπ‹jU4θ}Wωτÿ
;Q^u°Ζλg3"
{gs_¦eκ^&πΞM©λΊMj7Q¶I
IΩ“{1Ϊ@
¤v<ζ.Y|e4e'ψƒγiGρgΔZ®ωω'>ϊV$.―q –γΕή*•Θiu«ιsΠ;N[©κzuοÒ>Χ·µ‡έ²ΣϊΡτ^L—βKJS[nύ[―ΓNΦΫϊρΗν£X[Λeαύγ«)Τn[Κµ·$`ΌQ13αCL~a•?kώ6°Ό½ΊΥ|EβΈ™“\κ…ΌGύμ " 
"aUTa@
WζήΏ6ΙβΏFu‹¶ΚςNJqΐΘ#ιί›Έψ[¥ί6ouMnοwήσο]ήωlυ9Ξzΰη ®ό7{;:“R¶λΡ«Ϋ®»ÿ
Lγ­Η0„–‹ΟGkoÒώWz#νΏ_µΒο[\[ιz~.ΦΡ‡NΡ™f·2ΰμϋMώΣo{€Q¥s†ΔlFGεΏΕ―/ψΏ¬ÿ
ή΄Z}¬®ϊ^lξΊf­$n"{ΆƒkO)gδ…Ψ°ϋ|π³	―ΠqΒΜ€%£>I g g4ΘώψG#Ν›Pa™Π98Θ8Η£<c―¬Λr>•¨§$Σζλm5ιΦΪt>c2β:ΈδαΞγ-.΄^Jϊττ>@`
άJυΙ<η‚@9=3ά`φ$£η/_aΠ4›ιr“­jp”Έdl=•‹η{¬“©(£9Ϊÿ
ΈOΩ΄Ύ	|Πf-Ώα(ψ}nΓFπΫίΌ©leR#Τ5!γΦ±"aφ‹¦]‘O6xυ­sRρ.―}®jΣ	―u	iJ¨Hγίχa>‰K¶8pªΌγ'μ0Ψv­ΆjΚΦΎ‹O–Φ·m5κ|Μκ©Ι¨½»nυοη{χιάΜ|mΰNO,sΤƒί½Ήβ‹U–βζh"i§Xβ†VwiX$qF;³•
,@\δΤr7θ{ττΘϊχν_Ήÿ
πF―ψ'ζ£ρ»β>—ϋK|OΡY>|;ΤΪσΒ6—φϋbρηtΩµ0Ε2ÿ
¤h^»n―ζ Αu©Ε”G~tβ«F…;ΛOvήWσK­ί}S0)NVKηΎν_ΟόΪ?Άψ'μδ?f?Ω#α—5²ρ†µ¦/<qΉJάx™WPΚΰ~“fφYF9Cf@Ϊ0µχ8γ“Ο|ηΧ―ψq)KnΑΖ!GM£ϋ
xΗSΝωφ.»­VRξέήχωώ‡±N*0VΙZύόÿ
«zQ\¥…QRΤ―uoGκ―goΏώΦΉRΥkΏTϊZΫww](ªVνΣΎ½];…QGυύ}ΔmκΑ[>Vm^:ryτRz©ιΫλ¶<6λ1
ΰϋΰ7Lu zzVSΡ·½ΧεΫΟOΔιΓ4ªSo¤ÒΏ«Oo?ι£Τ(Άβm¦•ν{ώmυθ},vϋΎz+ώ!EVOΛϊόwοΡQE 
AΗίσΗ<
O=*ZO΅όΊς}Ώ™ύn―δΌυΧΛΟÒeΣm¤µvιλϊ?‘/|ϊθ¨όίΟιώqοοΧ2Φ‹K'ΡwτΎπ>zΨiY%ΩX(ΆΚoWεώHaET€QEi―wΥ}χWκϊ«κµ[Yκ3β¥'O‚α3ωύ?Q^{^™β(Tδυe$δg£
HχΑÿ
"ΌΘτσÿ
υWu+?Ή}λ—ÒΫKCΐΗ]TomΏhΆάσ‚( ( ( (£]?ψ
QE
/nÿ
Σÿ
όι)xUgbμΔ*€Ή'$ΰ
Α$πkΰΫ+ώ
Aϋ3~ΗΏώ(xÿ
[ψ™ΰψϋΐ~ΏΏΠώxΖ~ΏρηόH
Ϊi>µΠμο.υKss©ΝκOc*ιzz]jW46nz8Zψ‰F4΅&’m&ÒMο§NώDJ¤!ρI'ΫΛ¥Ώ®ΗΓπ^ψ*]—όχφu“αοΓ=jά~Ττ½GGπÒG-ο€<- k-wβ5μ!‹[Λh®Ϊw…γ•qs®JnBIo¥έFίζ”Wρn»qw{yw©κϊ½νΝώ©ª^Ν5έέΥεδΟ=ξ£ys3<ΣάO<²M<’»Λ,®ς;3»τνuϋR|eύ΄ώ?ψΫγχΖBλPρΟu/τm)EΒι^Πaf‹Cπw‡mnδ·Ρτ[B–φΰ“-Γ‰ο.ΪKΛ«‰_Β^MΑªυΐWΉn7!ΗΛ'<G’20’HΖ+υ<›+X:0ƒ‚ζj2¤µz'ÿ
v]“ΧΝΖγ#F<Ι§&—"OkY7θ―m.›»τ©¬x~ΚΓΒλmo‡³xη2νε“;ΰ|ΕχdόΨ

0ª
σ
Ό1―¦pA^ωªΐfΣ― dµ›ΗTFu8γψ”un'Δψϋ?ό`ύ¦>)ψkΰίΑ?k^;ψβ«µµΣt"Ω¥X" 4Ϊ–«xJΪi:EL%ΏΤυ	­μ¬βΜ“L ƒ^εW1»’I+―Edξ»ΐΤςπΥiΟίrΎ¶{έΪο«ΧÒέδE@\u9νΧ<g‡·½WfΑκ
ΰ‘’sΫί§τΟS_¨_πUψ%—Ζoψ%ό?$ρ·4Oώ“UρmΞƒgq.•ΰ_ZήΙΧ„F΅.Γ¨ΩIbΠΝ§jÒCh·χΪ¬Q[νΆi.ukϋγ‰®6©ΰ¤H°©'‚	±wτ8―>Y½Εσ½γµνªnκΫ[ηδ}&­V1¨εΜο«M­R³²z=tΊ²:MsZKTkkfY.$IC%[Κδo
ύPπΨΝFÿ
πH?‚—ψ#β‰Ϊέ›Zκυ&Òα]	'·±ΈΙω‘o/ξu9|΅νΌƒpe5ψqϋ"ώΜ^%ύ§~,ιΣ­ξ!π–“5Ύ©γΏβΫKΠΦl½ª\…Ϊu-P£ΪΨΒ¬dΣ\hν¤5ύ‹ψ_CΡό+αύΓ:”v‹ iΦ:F—am[->ή;h"F
Qcg#'$“^?ρ”¤μµεινª·EµϊΫEkυhSΒÒ…
z¶Σ©%£“ΊίªKΤύTύγUψw«°ώ/\€}Ϋ[AΫ·Ν‘ιΘοϊΪΎBύ._‡ΪόC¬>%›#ώΊYΪ‘ιΣnyτΗ½}|ΟΧwφ―€Ε ΡzΑύD¥'‚0HόΎ”ª@#?ηόÿ
k¥χτλθQ>NΦΑ9Αΰ}GΏ_Β«\IδΗ#ΰ±HΩ†FzΗ
~dφόs`τοωγΫ'όυªΞΦγrΰδLδN2xaÿ
‰RNi?5xίπmz³:ΚNΤ>.WΛ¥ύλ4΄υ~gΓ_°gΖΑϋ7Α)ΏiΪ‚cΌρήΉργw‹.g”G$·^3ΦΌaoΰÿ
}­Θc-Ύy&›pΠΚά[ωι…ώ[mόS­ψΣβ^7ρ¦±y®x‡^ρ7φΞΉ¬κ—S^έέίήέωσMq5ΓΚς~ύ·eΩ†:γοχΑ‹½Wφ#ÿ
‚¥ώΔ@Ι/~|LρGΕθ;q{¨|<Υυ]ΖΪf΅¥Ϊÿ
―Ή¶)α›‰f1eb}fΙ–Ήη$x'ή¤¬Α•‡'Nxδ
έ…η#5ϋΗaπτρQ•jxMΛβ^Λ’“]½ΥªΧi6¶?‚όjΕf5Ώ²²ϊ•jύ^u*΄—:¤ρ²ΕΥ…iΤvriΑ©K^[l}ύ`―Pzάν©όωΟ9―΅e"ύ?h/‡>?Ρυ	­τ+οhΎρφ–&+c¬ψ;Δ¥“¨¥Τ!„2\ιoq―¦I&<›λ±ς<ίΎψ½k„vΪδ3Όπ o-ΚΘfU\fd‘•ΌνΩ,αΉΙΪ§9μ>λW>5ό!ψcα»{ΗΎ%x3K2νin§7υΊbV)1ζqΔlάΜ6sϊf{S,­–c}¤£:~Βr*»ςΝΗ›έζIrοΦχκΥοό½ΒΉFw—q6_WKJ½~­*ι^sΑ5_2WΊwΣN‡ξ'όΐϋ4~ΫΏ±ην·ΰ¨Ώ³GΔYό/ψm¥¶©§iΟqv‰²-Ο‡uI³ο’I΄¨¥l”Τ+χ•²9 δςς¤R3ιΣ§Ν|Νÿ
ϋΡmυ/€²ƒ΅µέ{φ›π‹£*’θ	4Ϋθn%€6ό–kS!PNJƒ_KZΫ †& ω6πBHΞΗ΅~Iη#pΩ'ώ\ΜλF¶9k%ν ¤­wΤbή»ς¤ϋmkκÒ2Ηαy\Thΰ±o–5±iΞªQΩ?hηΆµ¶·kDχ=ΏσΗιP±ΙγιSΤzζ*=ÿ
‡τÿ
λώ•σJΙ»½o£{ZλΛ{lφόΡVΛ¦”9δγΌΤ›λϊ~ϋώ•
qΟ―§·½i£³ί·Ορό†νΧo3ωuÿ
ƒ—μ|%ϋ(κΉ(ρΔύ-Xg{¬Ϊw…oLc$o»®λ_ΙdHe”FΈ,N
ΖNsΣ
ϋύήησ_ΧGόίΏe2WβoΔC.2<ί
ιO€A9…[ƒGό‚Ϊ_ΛΔs†βt#
Η
Κd0Θ8Μ~±Γu/€΅τ―ªλg{[}-Ύ―Ν*‹U'8­ZΎ¶½νhΫww¥ο~Ηκ'όGφμψ™ÿ
λύ μ>0xJΡόEα^ή|OπAoγ	Ι8HaΈtu²Φτ§i―4kΧR±],J‚‰ZΏÒοφ[ύ©>~ΧΏό1ρ«ΰ‰νόGαOΪΖσ[—-gΓΊ²ΆοψMί$ϊ^µ¦ΜΖ«iw+€“ΫKqk,ΙώNUυ•υΈhφ‡eΜ‘`¬p\`$	οs‘_£ΏπN?ψ(ΗΕ_ψ'OΖ{?xRKΟό/ρΕ‡Ε…“_<:oτU‘c:†}Ύ›βέ&yt}LΆ$§~|νgrλA“C0Γϋzpύν8έ5vΪVΣΎΊµ_];?3‹¶ΡBRΌΥΣυk³WΦϋμϊ_ύ?Γ3ΐιΑΐχχϊqοN―ΚΨΰ΄πM‰|	ΰο\~Σ~ΣlΌg΅Ωλ–ZΜ:¬ή)Ò…Κn“Lρƒcgw{£κΦS,–·–·J1,2^hΚΘ~μψϋD|ύ¥Ό :ψρ?Αÿ
<2YbΈΤΌ-«Cxϊ}Γ)qi«iμcΤt‹½Ώ7Ωu;KYφα„eNσωu\ΏE·:5#O£”m}¶λ³ΏΊ\ϊ8b)T²ΥέMΪχWώΏανμΤRϋpAƒθΓυ¥®V¬ΪμlQE *jΊ^―θϊƒ«ΫΕw¦jΦW}ν΄Κ&¶»Ά6sΘ!”©Ώ_΄/μοβ/ƒ^ ΈΌ±µ»Τό}>ύ/Yo°	ιΪ®ΥΔΖ0°\>Θ®Τ–B³	aχη·Χςδ}9ϊύT½ΣμuKYμ5;KmBΒν+«+θcΊ¶909a›tN¤ve F:Ό.%Π–­µλnΛK~ΊzYU¤ªZΪIlν―MϋϊΝς§Μ1’p p{γώτπ >£Ϋ®yτητΝ~―ό`ύ…ό%βι%Υώk―ΰj]μΪuΕ«jώΈ•Ϋp‘μ„Π^Y
Δ³}–ν#Q€±d)―Ν?±ΟόΑσ“πϋΒ~)iλΘ–ΛΕΎ πΖ¦Κ2B¶¬YΟjWΩ¨8%‚τΧµOFvNImÒο¥Ύ{½<¶ΉΝ*5S³OeµµΡ=n΄{έmϊς0?Η®G'κAιΫ½2ΌΩώΑNaaΟμαΝΕyόCΣn!ωs)Xΰπ‘Σ―'†ƒπSΧζ/ΩKΒ zMρΒ<ψΘόόΕu)ΣίΪC^ϊι§ό3νσΊΚT¦¬Ή[}7Ϊή_δ½-°AΘιΞ9μ*η
dώ8τ'ωητη«π_ώ
zΉσeO<ΏφυέΣη4‚πT,“μ«ΰ½Ύ―ρ/KSB®ΛΗηTηMm(=Ύ[w{>ϋωλpT—‹ϋ½4ώΏkθdƒ‘΄tμΓƒώNΥ9Η=zπ>wύ=«_‚πSήLΏ²ΗƒσΔ}ϊη“™Αγ½ϋΤOπ+ώ
‚ΔΏeÿ
'ΌΏμ^@ω	ΟNΗυδO΄¥ΦpVί^®ΫϋΫ+ξ·fοπ»[³Υι»ΦΛΣ[_ΙΫ6G@ΏQτγÿ
―νή™ΰgΧ½p-π'ώ
 ξύ|Δ·Λψ§γσζJΌ}=~ώGό(―μΓΰ=ΏτΣβ6§Χ cύiª΄Ώy&ίO[oίεrγ	mΎφzv[λϊκz~¨Ψ€p
Οsώ±δύ+ÿ
…ÿ
He%ÿ
f?
+qχ~#Y7pH8+2sιωS[φzÿ
‚¨ω³_Γ΅pÿ
lOΉ-ΙλΟ·γTªΠvΌγεeήΫϋΦλ¶»οΈ{:­YG¦ιν§ί―CΉ$;ΰoo_ρΞME\#~ΟΏπU(ς_φeψ{ γ>_Δm0Τ`ƒt¤z—Ψb o€πUrqμΓπθw&_‰zZ}8ϋCέ³sΝÒ•υ”<Ϋiηέϊ®›8Σ’ΎΎϋ--ΧρÒϊ…Ηoηθ*-„@οΠγςΰΧΏ³ίό\ςÿ
³GΓ‘€8O‰[<qιί“Ν!ύ?ΰ«„+φnψlη|HΣ=e=ΟΈϊTΊΤΣΥΓKkkφΣWm:wΫÒ=”ÿ
Ό΄WΡίΛKλςo~Η΅Ηn8γÿ
ΥΧΏjLsΗ>sύk„_ΩΓώ
ΠCϋ8ό+ΐψZB1φ
ΙψφδW|g΄ÿ
‚„~ΟΊF―όYψΰιΞ ΪVsmγmnoΔ/qδ,Vj&){…N:ςΈN3v#~Q³z/;;%®ύυΈω'ήν5ζ»=_KokύΗΤ›xϋ§=σΗσ?Πÿ
Zpuΰ
={ΞΏ6?α§?iVώ-ÿ
‚—ÿ
ΗέΗsΠfψ`γ©γΕ9iΪO·€ό‘ÿ
OSΰW£>άώ>›*K¶φί¦έί―ϊZΔένgÿ
_²½Φ«ώεϊLW#΅φ<υιψΣDmΞyNÿ
Λ5ωYβOΫ;γΟ…®΅µΧ<α9nb3AςάΜ0ΔαΌ^kώγβ²δ·‡ό%»ύ‹}A{`u½9όyβµTφ}―µ¶ιύi6K”•ΊμχOM:ι³NφίΟsυτ!
π1ƒΤd^€€Ζ“ϊqώΟυ―Νo‚ί΄—νEϋC|FΡΎ|%π‚5οψ‚+ιτλ-Fωτ{3›lΧwÒΝ}yx±D!YφςΞFΤσ_·μ―ÿ
^^Α―ƒoΣ>OΔ-9”yΰ vΗ=λ³§I¨ΙΕ6ΦκΪ;5Σ_=Όϋ7Ξwi_ε{m²W³ωyφgRψΰγ΅ιOηP(‡¦{ÿ
υΙIϋ+ÿ
ΑY~ΓΜψƒ§‘ΧΎΩΧ8γςª£φRÿ
‚΄©ώηΑƒΗΗΦ‡ÿ
AvώΌτ¬ύµ+|qM¥o*ΣΎλόµnEφ_ΚΛkί]Όϊuτ³ίΨdΏΟλHHύ|{ÿ
ΞΈ_ψeψ+'*ίΎηxxξΫoO_5όΊqθiΏπΚ_πVγΜ_> Ζ1/αΟ_φr{c°ΰυ©φ΄ÒW©ΊhφΣWχlÿ
ª5;kψξ—ΛσΏαί2pyÿ
—ΏςΟαQ3ΑΙυΗ8χ8ÿ
ί?eψ+JηΞψMπ@‚8ψαd ÿ
γ
w>½*ύ”ÿ
ΰ­
ζ/„RKψΥ@οΟϊΞΌώC”{ZM_;/²¶Σ¦ÿ
s[h»―c6ΊιϊwΏ¦ίvΗ mqΗ΅ηϊυ¨υΟ=³μ9γ>½Η¥pΓφVÿ
‚΄™>όγδρ¤gι9λΟQHdίψ+Sr~	¨<‘ÿ
	’3Τzg_Ò«ΪΣV|ρς²Ϋo7m=>v°{)ιuµ·ΎΞΗxU@Ζ}ΗoOσΪ…
°ΘΟ^Ωÿ
?γαμ•ÿ
jU%ώόc‰γÿ
¬\~U~Ιÿ
πVψΫχ	ώΘy1²γοέ®?,ϋT:τ―οTΝwευWσυµϊ?eQ¤ΊιtίXν•½_ΛÒAΟ?CΏAλΟ^¨¶)$υηΫ·8όεΕ|ίρ“αοό§φ~π\>*ό6ψY¦xeυk-O¥kΦϊ­Βκ:ΚΦ±›{k§p-εάηεL
NHεSϋJ~Σ<7ΰΜρ±Kψψϊ^™®ΪQNΕΩ¦•Χv΄3’³µÒWÿ
;Yi~½OΤLφΠgcςυΟZyΘλΞ3ψcϊÿ
Wεχό4νBFSΓQaλ©.~©5…―ώΦ΄―†tιuMWBπlVΊ¤–―!νµΥΤέΉ'¨ΟJ”¤υΩτΫ·’zΫUΠZjυι¦Σλ²ϋΥ³νΙχΗ§Σπ¨1άcιόeoΫϋγC–ΟΒiÿ
p©Οώή*“OύΉΎ>k®›Άι6~RΦ5/O€ιrΖ%ΎΤnb²΄Θo6F%Έ4.ί*η,qj¨M-ΦµµΎΧOGÿ
―DJ~vωξτΡy―;²ƒΏNέωυΐμª=2O?Λιμ+‡¶ύÿ
ΰ­W–φχ#ΑίβΗή\ή(µ"Κ7*Θθ¨`§=ινϋÿ
ΑZσςψKΰwψª-ΐχλtί=³λΗν¨©5*‘ZνfΪz[ÒΝίg­ήμΡR¨φƒ~+~jÿ
®ηy ΗΏ?η·joΛφOQΧ·^y®5?bοψ+Yς+|^σ5Ϊg=Ώε£υη_N)§φ*ÿ
‚·1ω<;π*23Μ.µ
§–ίύoN•µονV–ϋ;­μ’ολm5¶µμjÿ
#ϋ½?Οπgq΄g<γiό;uΗΈτ¦l
ςzσιιτÿ

βμKÿ
uaΞπ>Ψ_Z¶©>Hνίς
~ΓίπWWΞΨ>―<ορ$ÿ
Ηmάώ§¦:ΣUθξªAυΊV²ΣÒΫυύ,Χ±«όξ{iχΩ½|Ώο­0Ξ:}ÿ
Oÿ
Uqƒφÿ
‚Ή*φίd#GβkLγÒΪ§Χ―µBaοψ+nΰ~Απ8»β(δφςsΗ¥7_»©;ό·{y~ξΊ{~ύ4]o{o¥Χ]@Hκ=}ϊ~Ϋ­0Ήτνόρ+°ίό±Η)π:φÿ
„—Nb:χKsΫΝDί°§ό΄°)?ΐΑίζρ―α’,vυΟΦ…Z†ώΦ-­–­ZΞί­­¦Γφ5ψ{Y'δ΄·ΟϊΠοάv€Χ}3ΠqH
'?—ÿ
―η¥pΓφÿ
‚¶Έύεÿ
ΐTρÿ
$yγΆi$ƒυ8<c5ύÿ
ΰ­dδkSΫκ,ιkλΠγ¨Yφτ–Υ"―²ςΡz_«ω½ΗμjιenΊ­οn¶τΩιΧ©θ‡
Ϋ’F2zώ>ΎψβΆά ηΎO~„φδcά½8―>—φÿ
‚·²ΰλ[ΎίΔ¶‹*ƒX+Y.p3Ο\φ'η:ίόώ
Ή«9Y|ΰΙcώρm|~Ίj€Iά£ΘÒ_ε•;Ίu"kQςςυVθ΄ιΎ«ΧΛaÒϋ?…»z]λ·Mχg®x―Η^πN&­βIΠμ!tΪυ½Ύφ
\G»W
Ei“Ε~u|lύΎ 6ΧΎψ?c ΓA75D vÒ¬Ii%'Ή
&,ΤzΞ±ÿ
Fÿ
‚‚λ—Fϋ^Ίψ{«\Θ~iµ‰7„£$±ΪΧZ„ωΉ;@εγ¨m?ΰƒί¶½ΩQs{πΑs†kκμ
}Ò¶ΊΕynάVΤq8TύιΖΛ―mµήέ{z¨T“Φ.ΪouΪήM;φλλoΖoXΥ<A©]κΪΞ΅s©κ7ΣΙ=ΥεδÒO<ÒΚΫέέδf9g$“€Tzc1A,xρΑd‘Χ±#1ΐώ„όÿ
υ|xΥ®£_?ώxCMΈώΐΣµίjFK¬	t²HΛ,»±ΉΨOΩ{ώύϋ"~Ν·Ίo‰µή|eρφρά[ψ›βJ[_i¶7±±tΉÒ|+oz$Ε7Οo=δ7χPFd|±ι«a©CχrRkV£mRiθήΦΣώΡajΏ‡–7κϊl“ςÿ
‚όΑ?ψ'όβν+¨θÿ
ώ9ιΪΟΓΟIo}­άRιΎ+ψa ³Ρm¤EΉÒτ…QηλÒΆ4πΈKYdssoύ†x/ΑψuαMΐήΠτοψOΒϊe®΅hz]ΊΪΨιϊu”b!‚$'`,®LΣΚ^Ydi¤yYςª$qΆGj©qΆΗh£
UQNB…ΗZ?ΟεΣωlviSμ΄­ÿ
y}ώ§e>Ιjω¤χv·k¥εχo®Ά=0>ΌιKGυΆΌΝR·γψ…Q@Β( .ϋ…Q@]§~΅EP6ού~?0­ο&uPΩ?,r1τqγ‘χΈη―αX5ΤxQ3};vίυ.1ύOαωa>Ί·³»Χ³Ώυ―mNΜ:N¥4τΦ/Kjτύ?«EWϊ|ÿ
Cθ£²τ_QEΒ(§oλO/??ψk;QH΅=?νΟ
uϊϋ–£“·ÿ
υj£~eζΏ]Υνηuχ§ώ^~‚)‡γ§qμqΧυ<µ-DΌ¶pG=;cέεοRΦ½½?―λQ­—]εκΒ(¬¦ΥμΊoλ§Β(¨
Ά(¥ό^u•ΤxΙh$ΐχ
HύkΘA> }r	Θθ8\u―haΈμΐ‚9δγΤqύJρΫL7wq΄Gq"¨=p­^σ85ίAϊλ{o¦Ο_λΟΣΕΜ•zk{Ύ·ζÿ
ƒψkb*(ΆΊO$(Ά
(Ά
)	ΗζζqKE
QE
9ls»ΑΗ=»€3Σ=@η¨’£ΪIn<δp;υΟ°οN6u#³kοΎέ†Όϊ_?NΧΤώN?ΰγοψ*—~ΑΆώΔÿ
³ÿ
‰ο<'γxfόfρ¶…w-§<?αYζ‹Cπv‹m$Wf΅β8!ΉΎΥο xο-τeµ¶µh†©4ƒψΠΠΰU‹O’[››ΝSXdwΌΊΈ–y¤δ—i¦Wi$ff-#HΕ™~cϋώΉ©kϊ‡ό[φΈ‹Δ&ηΟ΄ρ—‡¬tΔΉ,LzΌ2Ί0„1 ZΙhb–Ϊ΅ΪΏ8<βt„C§O!Yνϋ$Δ…}ªr	9έ (
3ΞkφΑαθα({S[»o}o}wόΜ%>iΤo[Έξωn–‰knώ_&ύ›ZψM¬ΐςνυmÿ
{εª‘,{T’p,rHΟN_a;°¬„¤€g!Γ`©Αΰξ\Αν–ÿ
γ](ΓynΟv°βΉCµdm»U1ΐa“–ΙήI
pπζγΏΌ¨κ3ιwώ#ψ;Βz¶©f©%ή™§xΔzv‘¨[¤ΏΈyν-odΈd3$[dά¤¨χªώβ2¨γξΑs΄ξτzu·‘δ')^ΧwΧ[»=/ςΧπέBώΖ±νϋ}|U·ψWπΓ/u¬¶Oγ―:΄SCΰ―‡%εΑ…µκAvΙ9X®NΠ,ΜΪΖ±$ΩZΙ7SΫÿ
Ά'όΏώ	›ϋ;ÿ
Α9>Ηα/…Ί?φχΔzήΚo‰?uθc“Ε~5Υΰ‰ƒ”u,‡mζyΏ²|;¦²ZYΒϋ®dΤ/ήηPΈϊφTύ“Ύ~ΖΌ?πcΰ?„,|3α­*ηΤoΔi6ΏβέnX‘oΌMβ­]]λΞ QZK›‡)oΓegµµµΌIFωb[‘¤γ―¶ry>•ω~sΔUq5]*7§»zνuem/ΎΏδ}F]ƒª•5””ZΣHϊlφλgkι}Οηoώ1ΰOόdρξ‘πΫβ‹Ώα]WαΜvχvW…¦Υ/Y.l.–[λy–;‹[Λ}—σΕ±Θ¬«ωRΉÿ
‚,ό=oK{mρ›Δφήk“2h#ΓtϊΪZ36Ϋ²ί-¦εU¥Σhμέα‘·3[ίπTω.ώιƒΰ>Γ¶§‘ΗoAξsΪΏ3υυο‘ΙaόΈ¬pΥ§:PrΡςο~Ϊÿ
[kΤφ)V©8ΒN*ΧzΩk®Ϊ%Ϋ{uθxΧΑ>
ψ>ΧΑ_΄tm*²ή\Oªλ…vI«jΆ[Λ©
³m†4Δ6πΓ
¬cΩ#—8θxό€ϊzÿ
*#άύiα‘ωύ=?ΟcU)ΉuvθΊ-»zΚR–­¶ο{½{_ο±ϊGϋ_πÿ
tςFψ5]:λδνΈ·–&γ―XG$ϋ•'Ϋιώιο_›_±6¬x»ΕΪ;Ύ¥£Y]Δ‡ψ¤±ΉelΞv\ƒ~θΞ
γτ©@όΟQο}}Ο―5σΨΨΪ¬­¥Φ½z.εviΙ~-ίξ€ÿ
/<ρΣλϊÿ
ϊι›6φοΧ―εώ}}8ΌσώqψPpAη‚=ύuηk¶Ύkώef83ΚΆ^9φ=z8ϋΰz‘Φ¦p0F~‡ρΖzτηϊγµD§ΏoC’q~^†µƒΡ[K=ϋZΞÿ
πΙω½ϋUψ/βΐ>ύΎ>xjγΕΎ$π™7„?h/…ϊt[ζψ½π3Q
Ίν½½΅ύΥη‰<3m»PÒD©$’µ½›΄w	¦Gg?ΐ?ΰϊ_ν΅ΕϋVΑ:µ]+βηΑ.ΏqπγM½΄µρ§ΓΝbθύ§Wπ³ιRΗ$WUΤ―ήΎ’ίYΡu¤q_Ω-¥Σÿ
Cμ‘Ί:Hγu*θλ•u9%H=›8δs·Ώ^0ύ‰υo|IΤώ:ώΖίΌCϋ2ό[Φ®~ΩβΝ+AEΤ~όEΈY7Ήρ§Γ»­ΪΕΥΔ›V]BΪΦ9c=ΒΔo%yΟΪδ<MS-|ΎÒ:Γ–IέΖjι»¤ξΌ΄v»V¶‡γΌwα®αV|ΣΫKΪ8ΕςJ…K{υh¶¬άτζƒΡ΄Ό­όÿ
iί°‡ν}ªjΡθ6³ΖIuYgίe_
xÒ9wlmηΨdΉh EΓΌªΉjώÿ
ΰ’πHKÿ
Ω«Δ~Ρ΄™/Ε¬/x-.-υo‡Ρ]ΔΙ{­κ—p,nΌU5³›XÒk«]ήK‰#Έςu{=?	ώΩπUoΨG΅λÿ
³μΏρ6φΙ-γ[ώ!πWφ RU/&πά§ΌΣmΌPίΫΖ€Τt'ρη‰ΏΰΆΏµxcγΔί~Νί	οΥαρƒ?g‰5[οx—M™XM¥έόGΦΪKήtsΛhVφÒM‘
• W:βάΓ5ΓKΟ†Βag¥J”κJ¥YΒΙ8¤£+Y4ήϊ&™ς|α.IΓά>g^–cfgν0Τ±8jt0”j+rJ¥ε>xΑΩ­Χ2O•‡νKγφγύ½|΅ψBς=kΰoμ2χΪ§‰|KdβηCρGΗνtΐ¶ώÒo"Ϊόψ'O²γX	ZκFK2A#wΦk‚	?xxΟR8Ξ@ΘΑΰώ9―=ψgπΗΐό£|?ψsαλx_D„¥­…Ά1y¥•‹άίκr΄—Z–©{1k«νNφiο/n¥grqίΟCƒΫqΧςιΠtλψU~e
pmÒ¥XiΎ‹Y|ξϊZύέάςΜΊ¦¦'ZQ©ΖTφµd•’Jά”Òι+¥κΙcΏ`=ψT-F\ΏύlχκGβ*RIγ?N~NΏ0ΰ‘Ο#Σκ?LZσΣ³Ήν‹L
37¨―=ÿ
λΧζ¤υηόρώ?¥ \#Σλyη:Γuªηvjύ4ό?Kÿ
VΫ³θόή‹ρ8o?°OμΥϋ~ό=Φ~ώÒ›ΔΪfÿ
ΑΪζ—«_θΎ$π?5il›ΔΤ,g5½XV5{]FίPÒο+ΫJώ"ÿ
ΰ§_πAΟΪoώ	ύ¬|CπE¶«ρχφgK»ΈΎ#xgJoxMΣEΔX$ΣiΡΫ[ηψΒ9<='–σ]>’ÒEk_θπ#
uι­6;€ΣηίΧ΅ι_Cά¤vσΩέΑέ¥ΤOΝ­Μqά[ΟªRXf†PρK΅*θκΚκHl‚Aϊ,›8­—¨§οÒ½ά[}m³έwqΛR”g®”µχΌ΄VΏTΥν½·²Υβύc¨Mm$sΫJΘΰ¤r‰!z‚8γ:zΏξδ1ZΨ~αΒªάL0ν$ΈΓ$[ΈTέΘ#0#5ύΏΑoΰ„
ΟΑΏ?¶·μ±¦'Βo?΄=Sβ7Δo†zH··ψoγ]Δ›Οκϊ6”„όM¨›RX΄·‹EΤΪ9c“K†φε―πµαHbΏΧτ8&ΖΙ®VV£ΜΈaΟR€rH;½ςHΐζτ³
xirκΉΰήΟέZ7½ούhySΐΒUeέ4δ–φvWήΫ7ζ}ΰ?O¨-όÒΖβiΙfJ7e >ξ„ΰ
ϋ?φHύ­ώ4~Α_΄o‹ί|Ayjϊmδψ³Β3άΛ‡|}α‘*}³ΓΎ!Σ£c¦{rηNΏhΝΖ—vbΌ¶dxίΜώΧ­tyξκ2πJΰδ1Κ•Κ€i,0Oln¦0<[β.Zÿ
SΞΘX΅U8]ªIω‹0}1^¶#F¶p­Κ.;µ­©οkοwmv<.zª³Qr½ΆIΩmώ_πυύ~:ψGφ™ψπ·γί†~)x;Iρ^m,‰-Ξ™5ύΈ:‹zc%Eφ©%ζ™zν6²β½¶ΏΰήM7Ζόÿ
α=Η‹bΏ·Zρ§Δ}{Βq_—ά<!©kΔιRZ«όΛasqύέ¶ΑεΈ¥L‰~ί+1Η§Nÿ
'“υτ―Ε3*1£―
fÒÿ
;vώ¶>―9N…7/‰¤ε}¶mίMυΣWεΉ%σÿ
ΧΆΌσ¨(Ά
vγ€3ΣΣnyΖzΜτΆMµΥ¥}mςZ½·vΫ1­oιίµΊunΫyω\‘deδϊs{
<ΓΧζÿ
ΎΟΦ£Ά­T—Όϊ=ÿ
^Ώ¨_Σξ_δJdΘΑύNF8νσΦ£γ9Ζ>„ÿ
,‘OΤJ(u*_β‹κΎKτέ_Pέ?›ιειψw²Z²Mό½|φφγ?ώ΅k=Ο®βσÿ
>Ψ¦ΡMT~–ώ΄_Χΰ_Ιΰ)vμΌ‡oqόoÿ
}7ψΡΉ³Οÿ
}¶?,β›E/iRÿ
όΔCχ·©ÿ
Ύ›ÿ
¤,Osω±ώdΣh§ν'όΜ/ύY]?«±Αά`=2ΟλI–?Δ3ΟΦ’~Φ§σΏκίδΎΰ‡8τΛ~}i¤“Χ――ÿ
―?_ΖF`ΆkSωεχ€β~\sσΞ0;φνΙΧψγÿ
’Κ|!ψLΰ“»βΪ›ίΨWDG^;zσ_±ΰzόxÿ
‚Ι
~|&$tψ‘?89΄ΐONΐΔsΟOC-©Qβ"ΉKέιΊ]tςςτ3ªύΙy[__“ίΧ[ΟX/·οχ‰ ‘θNyη<ΰvΣΆ	w8ϊ‘Λχ―­?+·¶ιÿ
ΦϊΤ=+λ/{mςΫcΞrvΦίs½τzλ·δ|ΣρζMϊΖ‰όKf>‡u{ϊγ¶3+ηÒzιί·lςM{ΟΗ†WΠΐ=tιÿ
/΄tύ?/jπ=γ}x#Σ§oΟόσΣI7£²K―ωΫKχΧζ?OΏΰmψ(Β
7i>’zκmΟ=φgχΰσ_Ϋζ9''“Γ'${ευζΏ‡ίψ#‘#ώ
	πsίNροεÿ
fªΏΝΏΟJώΰλεσΙΚ5iΩΩ5{/+oεΊWΏ_&»°ΏΏΕϊ ΗωυγΏ―\ύis™:Οσύ)(―ΪΥoY»im]τΧ_ίΤκΈϊΜϊ?&O©όΝ%½¥_ηvωωyΫΆϋ¶r}OηFO©όΝ%^Φ§σΛοώ»/Έnlc'Sώ8¤ΙοΟ±'όiΉφοΣ9ώZZkRκÒ•—[Ύ–ϋφZί§Ι„g=;φο_Οσ¤ά;¨λΟυÿ
&™E7R}dϊ-ώKa§ιn·_­›_#σ;ώ
Φψύ“Π7|Gπq«¨°‘Σ§ΈΟ§σΑ|2zÿ
>yλΞ>µύ9ÿ
Α[ίoμ§o‡βG…?υΗSτΟ_ÿ
_JώbΉΟ΅#λOΒΎ+”·&τVΏMωθqΥUZ©k¤[Ώ›ΫΝωφ4‘ΘP<Χ5εΏΉπ&­‘5©νΤά'n?ΟN•ι@:ΓσÒΌΓγƒώ-`“όV€ί7	ΐ}ΈυγΦ½jRm«χk²Ω}χίΧM49&­{-•ύvωo¦φ>(ϋη<uθ}Οψw®ΧαƒψZHδ~	Ζ8ηώ}+ƒΗBxγύ«‡Θΰη©}r1ωσί§«µψZT|RψfΗ8<ςζΣ5ί/αΞίΘνo•[χ’σ_Σώ•½Yώ“q°1p‹ΑηΠuτγθβIμ?
?Β£‹sλo	νύΐ}Oÿ
―ιO―Ξqj{yΪMjέΣΧKυ©νBά‘·ς―ΎΪώ#Γc¨ΰσΗ§aΗΠO¥Ο ύΖ™Ecν'όΟσ.ÿ
Φ›iεεΦÿ
pνΔπp?ρÿ
?€ 1Nβ›EO΄«m$ο¥ξίKm®ΫΎοªλ}­o_Ι+ϊ«zυ›xΖpqvλωÒyƒ°?Λόj**½¥N²ΧΛώÿ
MΝe³jίoΟOλQIΙ=³H2:ΰώύsE{Iÿ
31ΰzσPγΈΙγ νΟιτ”Qν'όΜb1 pOqτνό©ƒpκAΞsΙθ@8£Οµ-{Iέ>g§υψÿ
]
HΓΉόϊφ$=:γΫ<Τy9ΞNs©η®~ΉϊσE{Iÿ
3Ϋ›ΧωShΆ“ν€QE QE
QE
QE
QE
QE
ΩxI>{Ι0xX—8<ςη
τÿ
?—έnς®ϋΒ1‘a,ΔηΝΙ'j€Fsώφ8τΖxγoG¥Ί[πÿ
‡ξwαοaΦΚÿ
Ϋτς:Ί(ΆΉ&υ^[oύή½ÿ
+wGΠGeθΏ Ά*6QEiμ—“ω/K>%κMqΑφÿ
N¦·έ?η½T–ΝtkΥέ¥Ώω‘=—―θΕ
O―ωÿ
ληΉϊRÒ¦νιιψιΆΣ[%εώ^Χ~τ¶^(ΆΚ_ω~HaER·υ§—υχΨ
(Άy―νόNG
ΈD”c@έ	Ιΰyη®¥W!βΫrΠ[]/&)LL
ηl rNz)Aί7Lυθ΅'Ν―K[§Ιωiςέθu>jmΩιΫ―Gϊ5Q^σΑEPEPEPEPΧυψ…
ΰ―δ~ÿ
Oώ½¥³ΙΖI`ύpy΅¥―4Zέ]«otΧυχ…›ΡnπtόƒΕϊΖ«αψ(gΑ―
^λϊnαΫ_ώΡv‰i-Ξ£§Ϊθί'…~#άYΫFς¶—g§3θ!ΏDcc¶‹qpcµIη‹ψµΧτwuί}δ›(Λό@
®Aϋάη‘_κίÿ
,ÿ
‚©~ΜπN?†Φόj±Ήψ‰γOϊf¥kαƒ:5½¥ύÿ
τζF²Ό»ΧώάZΓIπ»M!±σPG[Ιk{KKΉ"#ÿ
0ΟϊoΒ‹ΏΎ'όJπ/Γ‹o„ρ―5_xOα†¬\κ6
Òυ)~ΠΊ5µμπΖd†9ic¶(­τυ”iφ¨-­΅'τ¬έ$γNRn:um¤ή4Φχµ΄9k<Ύ
RΖª°ζ\±tb¥'²³‹i;»μυΡzyμ>5H`XΫ^UUωAo5‚pΈG=NWª:ύÿ
‚UώΙÿ
ΏnOΫ+α'„Ό΅κΧ^π_|9γ‰~8Ώ±<!αjpκm>¥¨΄komw¨\Ω­—eζ»»‰Θ†)ή/ΟπΓX½%Σ’2	Ί¶J•έzÿ
C_ψ7³φΉύ‹oÿ
eΏ‡?²‡Γν?Β_	ΏhhΣ7<&Ϊ]¶ªό\ΥlΌωnόw¦λxy<cªάΨ,W΄7’jΊ`Ò8΄-~®oΖαp³²ζ£Λ.Fδ’}]ÒΡ{·^zµ«^m%”Τ†uΉδξύ¤#½:)5®ΦΪϋ·΅ύ„1ΕmΒ’Η‚Β%	’;“€xγ©Η4•ftnΈώ»qΑθ0G rN{b·τ―Ιª]Υη•ο'}¬µjϊlµ]:β‹JΝ$’·d’ό΄GΰΟό>"ό!>YΌηΓªάδaζWζ`q“ƒψγΏαούkυsώ
Ήl©ρ;α­ΐΘ3ψ&ϊ3‘|­N6#7Jό#Μr:}kέΓ»Ò‹Z]%ψ-4KBc¥Φίª²νkωιΥ\όÿ
R1οσΠϊφώA…ξ{υγ$wοÿ
ΧΰSTz‘zύkb΅?f―‡~.ψfGmκ²ΟΆJδα
Ώ¤,ηηπ3ΙΑ+φXιΐγωεΝ~θΪϊN§aª[1YτΫλKψ$2Φd™qωAΘ#δβΏs|+―[x£Γz'mZ[MµΌR¬kK
™#$IΉ[Πρσo™K£Òÿ
sόΣÿ
2 έν―ωφςÿ
‡GOσΣ―ÿ
^σώJ8ΐϊΈΝJwδϊτÿ
?η―%ΖΞΧVξτΣΣs[―7θ›ÿ
ψ•φόύÿ
_―ιQΥ—NA~η®:Ujµ²JΪ5{_U£½τω―Ι:.NHΐθHλΘ¶=ÿ
qLl7<‚px=Αι‘ƒƒώ#’JuΗcοΫ“‘υ?η1S‹•Ί]=zk~¶ZΏ?MΔΥΥΏ¤/όΗ―ηΈχ§.γύqa€9'ΏL{
e|ÒjάΞΝzιΏυΣΊd¨Et_5σόυυ%f99δu¨Ξ}ÿ
¨αƒ’
8ιωώ4Ϊ*lϋχέ/—mI-36?/ΗτΗ§|T9οόω£4RT|ίq“ƒηυ¤9η§Σoςxλ$gΣ΅¤¥ΘΌÿ
Λoκύ:μΣίΠµ§eθΝ9#–Lc΅ ηO§Π$1κ3ξωηΧ§µxOΐHvθΤΈζMV!vK`=Ζs|χΰ{½\[Jθ’vώΏ^¦Fόδp~h>όGψWβ„Y|7ρ+Α)π.»eί¥ψ§G½ΡξΏvγcΊΕx]Cr]W+ό”ΏnΨ“γ―μ	ρϋΔΏΎ-ψgSΡEΥυπΦΚζ?όBπΆά;iχ†uo)lok‡ϋGMYχKΊ2ΪίCΖ―NxΗ±Η=O
ϋ“ώt>-ϋA|6ύ~!|4ρ,ί΄wΓο‡<ψ}α]Vρ§ΔCΦτ.ΣK°ξξχΝΧ –ι iγ’&
G8―o$Μe‚«μ”e5Q«%ρ+΄΄τzί[~t’Σ²J=m¶‹ªΫ­·ί]lL5x|»ν%‘WWEc€~π‚I98
zp1Πό.ώΕ_‡Ύρ/4OxCΔ1Π4ψΏ^»‡IΠ</ ^j0G¬k¦΅(! Σ΄σqr¨ΒF–hγ†(¤–DgΗήΠ>#|XψγMDΣ|ΰΟxλΕZη…Ό Ω΄g‡ό?©k—·z>¤E=Δλo¦ιφΫZΫoy¤`¨”WQ¤θ^πεΈ[;DΞAί0ΞΜv–!Nz0@6€ΈΖ3_¦Cµ5νª{
sΖέ΄i­σό#[†n4©ϋjςχnΆ”`ΪZ§ήή‰;jΟυ‹ύ’uΩζσφψqαoΩ›ΖΎρΗΒ‡ήΡ<ανGΑΪ½­a¶ƒ§[ZΗΛΩHΖΧD\%ΔqLΣHΞΛ–$ύ«΄sΨqΫ0=8όΑΟ§ω³ÿ
Α)?hΫ‹φGψΑ}ρ7φqψργ7€όc£Λ ψΧα±Σ<Egΰ*ο—HΥΖ³oe5¦•«hwfK‹]B5a-½Νέ¬Κπά‚ά_μϋZ|ύ¦΄/ΝϋE~Μmϋ3x›BΏ±ÿ
„gI>;Σ|hΎ,Ρ.΅ΈkΛΗÒ{ν
οHΉn-―ΦT½KΤΦDϋ=ΕΌηx%FΌε
Ρ¨¤ε.dΣrκ¶Χ]΄7ΑΞU)Ζ2‡+Σ¥•¬­Ώwk¥®gθΜ~εϊÒ¦?Οωυ―;Σ³NΛ«zΏUύl-Q@Β(΅ÿ
Γ€QElETΈέ«6µ»ΥλkyθϋY}ΐQEPQI¤χόΨΣ·nƒΈQEÿ
M¦ΧΘAEPHFF)h 

?Lγ®ωο_•ίπVκΎ8ψOπΛOΡ¦΄βΧΗ—7R}²GJ)ΆP¦8ε$1‰$=kυFΎύΏ7|ή+ΈΗ?Ως·OªzzΧfmWVίDkµ―γϊ™ΥΦΌ­ÿ
¥/λώ	όηΩΫΗgu΅IΌw?τιυώ™Oψg/“Νχ‡ΐιÿ
—.Ωδ²ΰ`sCΪΎαcΗΡOσ5	byθFyÿ
ηJϊm$ϊ$΄ωvμ·Ρ~hσ¦WMmθ―ΆK½΄½µµΘΏ³η¬oτ&Τµm:)e°½kTµYgYs!e‘!ςςμ΅YCη'ƒ―-'Σο.l®“ΛΈ΄H&Cό/ΑρOλϋWϋP°ƒΫ±Σµ!υ?jΰφξ?Jόyρχό~$ώΤ”vΜqϊÿ
zτ°ς—%ΫÒΧλΎ=mψ¶Μ’—W¥ΎwλΣΤύÿ
‚8Ζ$ÿ
‚€όυ]#βψ„53ωΧφÿ
_Δ7ό¬¨ÿ
‚€ό%''Δ
	ÿ
kΒwΛΗ?©ι_ΫΝ|ή{­jwKJm­;[¦Ϊκφλχwα>ορν«ϊυΏQEσΗXQE
Rg=:zϊN3Fyγ¤gfή£8Χ?έηλσYΉI7Ω|Χίo?!¤»Ωÿ
Γ[Ά <ρωgςνυ§UE·»_ÒOυνΏ[)2rz

ώ_γωϊΠFA€Ζr8Η¨Ηωÿ
Q$τυ·^­vτλωΨΞψ*?„5ώΜιZ'ΩΝΰψƒα»·3PΗWας­Θ.½ΊΘΗ?Ξz~Ξÿ
ÿ
η”N;κH9κzΑί―Oλ_Τ'νΚβΛΪ©ώ/i_¤wG―^ά~5ω
"
ηΙΟ=ÿ
®1ΪΎ“.“TR]Άίαύzz5_οeζ£ψ%ώ}ϊ
ΩΣβQPV OνTγ“ΰώπzΧό[ψγ›/κÒk)aodςZΖf·Τ"Ήu”Ξ¦3δ¬{qΟ#‡½~§1 Ζ;υΑλWώΠαXκ™}®ΔcίΝλίηυ!Qσ-–«_ΏίΡ/MUΞyΖΡoΛU¦wλΫoσ?
όUα[ÿ
	κ)azUΔ‘¬φσGΚM,»Η§Μ ƒλ›_ΫoΔο†ΰΔzÿ
ΘΝ¦Jτg:‚yγNόΟ©ό3ο^kπΧεψπγψX>
ΗΤx›Lÿ

υΤ―FWÒπό½}v»υ0J:;oέuΊΫΛWoΧcύ(Ά?θφΐtρcρEγ½>™?f¶ΘΖmβϊÿ
«\ƒÿ
κiυωΞ)/oRΫ_OΧρ=Έ|ÿ

ό‚(¬

(Ά€
(Ά€ώΏ­ύ( ( ( ( (©wΏΕnΛE―O]wϋ¬Ri}›ωολ¦ήΥΚ(Ά…Μ·Χe§ζξοώ}—TΪ{+uω»_δΏΜ(ÿ
?•&3ϊ~‡"‘©?™'όÿ
Π…Ά(
Ά(
Ά(
Ά(λυώΌ†·έn‚q^95κzίL¶F1Rδ€7’F^„uφΗ·™C{x@'Ν$γ®‚OιΟµ{(DD^(P8 γ§ψtΥ]®―{Ω]ωZÿ
·κΟS.…εv‰­ΌΦΪvmÿ
ΐEW“[ί_ψυwΧςϋ½ΐΆ*@(Ά¥¥ω.«Οσÿ
‚€¦Ώέ?‡σ§S$ιΐ'ρΗqΧΫΏΰzÒχ²ξΧαgίΟΟόβ{/εύLp=
ÿ
#·ωη?R΄ƒ®{?o§}ihZ[»ZυZYw·υχÒΩz Ά+9|Mϊ~HaEU]YwI-_¦ΪιmOΓ@(Ά/ΛOΉέÿ
_pfκφΏlΣ®΅
Ω½3ύθΞρίΤc€O¦+Jΰ‚#cηΝ]6Τ―~•ΏC:±ζ§%kέi~ύ¨o\Σ4V®±iφ;λΐΒ<r

>θμ°#©ϊυ¬ªτa'(έÿ
Z#εªEΖm5mE―κQESvi[σKυώµ΄ΩY»ϊ.΅ESQE
QE
W…ώΡ?m>ό.ΦΎ"άhsψζΚkk'B¶»O–«|Ν¤:±\- dwΉ»[[·4>]ο„―s=ωό?ΚΎÿ
‚ΖίπΞ3Θγ?!\‘•xΓ#
ΉυyΞ”R•X'Ρ¦ύÿ
ςςZ”Ά¥{»^ªίπύ™ό®ώΪί³‡ΰ¨Ώ΄ƒρCγοΔkO‡+ΆψuΌ)α?|;Πÿ
Gπή‰Σj-$Ϊ¦µzoµ}NφζbχΧr¥Ό4Q-­­,+sEÿ
ƒvΎ;YOνρ-{x¥2[ψoΓ1Ε™γYc4…C.ηΘ\€3_bψ!Gό%kdόΎyλΗΜ™ ϊOqΠ{cυΓ2ΔKl€…΅υΑ/qΑτ?@E{ο6Εα)Ζh·Ω;|:ϊΩuz2~¥B¬\j'5mwqwZ§²NήΎvµΏλÿ
ψ6ΎΚώΐ\ψGφ™Χ­7£4Δ~	Ρο"q
Λ§_ZHάΰ’2z_6]ÿ
ΑmΩÿ
Εz'Ε?ΩηγgƒυΟό:Φΰρ„οtΙ/Όβu=6α&€ΪO¨=ώ“"ά΄fΪζΖώξΫi'΄»³ΚΒΏ³έΐπΥ›“¶FCs·ΜΘηί=ÿ

G\]3Λ+­+·$ρΉΫ§8ξ“ήµγkRφUZ©Wy^ΧΫdµΩώ¦RΚ°πεqN-µi6®ΣoΣKΪΗΏώΒ~>|Xύ™ΌβoΪwΑV?~9΅ΦτOψwOΊΣο,¥»Ρu{Ϋ7_³m/RΦ,βµρ&µ²jµ΄—’Ϋ±Λ>Ύ^ΈΘΟΈοΖxμxώ™θkζÿ
ΩΘ»ιzλόΫξg!q€Hγ΅p+ι
ΰ:ΨγΎcύωΚσnJ|¶»ϋ=6ώ—ιΧ©Sδ΄\¤άm«wVVεχy‹?πV[]#ψ?υΪ/νγ0\iÒνΟC6z‚:‘_λ‚sΗ
}0AφτφΑυ―Ϋψ+M‰mΰ¶¥°mMKΕ–&Nr¦kMuN
w”δΊp+ρAGιΣκWµƒΌ©+kh§ÿ
ςk¶ΖNΧiy?[­σ{Ϋµ”{ÿ
§Ò‘‘‘άΟ―Cώ“ι@ΙΦΊ@³€x8=yρ’?¦9γ=+τ£φ9ψ‡¥΅_xώp/4MΧϊJHΓtΊmΓ΄C=EµΑ-αDκ
Χζ°89τυ®»ΐή6Υ>ψ«GρfOΪ4»€ΣAΈξν$ύέΥ¤©4$ªƒς¤›$?pW>&’«NΟ¦½oΊΪήƒNΟ­ΊΨύΨ·|gσΙχηΧίίZγΌγ=#ΗΣ<M΅ά¤φz„
εw6Ϊδ`Oi:LsΕ)(θGd|¥YΊΌρχNϋρΧ§ψτ―«Bn2ΩhΌφό1²³w_―[tω/ΗΜt+2sύGσÿ
<U@2qώ?ησΕN{ύ;ÿ
_j03τώΌϊz}3Αλ1m)yjΏΟϊνκ1ΰ`cόÿ
ςsLr:qΧ―>ώέΧ®x©)6ηÿ
Υcιÿ
Z”Òww}~`BAi*vόΎµpG§ε\qλZΕίM]n€%)Aοώ>{ώCιQU
QE
Έϊt'ωώΌ*J)@Ιόϋ~΄¥{;;[ϊώ΄λΟ°y^Vγν:¥Ζ29ύÒΆƒΣ89<ϊβ½ΌηαE©µπ.‘ƒqφ‹–η9i&cΙΐθ»@ΟAςητjΛΡIέίΊOοÿ
nί«–4Ο'‘ƒΐΰ@δwχτυγωÿ
ƒΎ.~ΣόOπ›φύ—mucΓZ…ο~>\ψ_Qv·Ro…Ό'γί,πiφm¬Pjέήyr&Ύ›μsΛcuφhώ»Ά“a^ύΗ9ΗqΣzϊώqÿ
n‡6Ώ>?x’ίH°‹MÒ<_>/€[Gµ.ouI']VζYsΎY¤Ώs+9bªΡ―Lτ2ΩΖΤεgcηθϊ]_Q¨ΎhΫX΄οΫπλΛ£?οπDφ²Ρu?ΏVξ ¶ηΓ΄θ¤’|o¶>#Υ<Θς(2Ϋiα7ρΉ―ίÿ
Ωcώ	oϋό3³ƒRπÿ
ΒOx‹_²0Ώό$ÿ
xΧ\σ™7$ρk¬φv―!]Κmm΅Ϋ’ª
β±>jCTπ²ΔηtϊdΟjϋΘ."|K@η
1\‘Υxγύ	ψ­G‹{F<]ΫWΖ&²bΰ.θ™ΐ<1;}2}l^m¨εRNϋ±RÒ7I[¥Ό§θΰhΚ§7$\έχZ+Ω·¶Ϊo{ω^ΗyqπΛNΠtI²#¶΄†ΖΡΩYΩΫΩZΗ•dHΥsµU€;Oα~²ήρ¶‹z[eΌχ‘Ϊ]ƒΘ»"ΩΛδς©ζ™2F	U'^αp‹qgs2%†D#―ήB8ϋπ3Σ$WΛp»[^εr­όΑsƒάqΤπO¥xυ*Nnςϋ?NΦ¶§}JιA%kι£Ρ+ί%o[©<q`€F=#τυόΟZ+π¬5Οh `νua	”ƒMςεά:·n=zWE\mYµύ[΅ηKwη―ί¨QE„QEύ_xQE
QE
QE
QE
QE
QE
QE
WΑ·σνπ8π•Ξ}σύ›p}ο_Α@‡όP^=ÿ
α-ε2θÿ
σϋΔ|Ϊωk―έÒδUώΌÒÿ
Ò•Λ8^?CPΣΨδ{r;δzύ}ύ)‡΅Ο¥}ζΊΏW·¥–Ύ½zvΉζΞφWλΣΝ$ΏΟΚΦ><ύ©ΟτΙ²Υ=ΊOkΫ©ΖyζΏΌrωρ‡xλ©IΖ8ωÿ
=…~ΐ~Τ@5χƒΊό¶z―§yνΟτ―Η―ÿ
	—ΗώΣ“QεΕώO9ό+ΨΓ?έ¥¦¶KΧG―Kmίτ3{­Rυ{νÿ
εsτ“ώΰ›Ώo―„¤c#FριόΌ1yτό{τΕo5όEΑπo―…ιύƒγς3λÿ
µι‰8―νΦΎw>ώ4­jvΡ­ξ―ΆΩ^ώ«ΤοΒό3ÿ
ό‚(―:‚(Άÿ
ΧέώyΆQkδ―ε{uµ—όQE&“σώ—ί±QE(¥²
Ά(“²ΏfάΠ~ά`ƒΗϋΎ-ÒGyθύ;uϊ{Χδ%~Ώ~άLΰ½°?Εβ½(ώ!.ΗυώfΏυyθxόρΣή½άύΛΧt’ω%ηχχ8kιROge«]-νΏF
οσόλΓΏhfΗΓSEέ‡ζf#ό+Ϋ$ηΏΏ|ÿ
€όkΔ?h¥α†ªAγνq<φσΘόΉÿ
=½
Oή_ΦνI>GΥ―ΟεΣSρ[γwό„4#ÿ
NWς™N}Ίόϊpqζÿ
ÿ
ΒΟψsƒΘψΰΒ>£ΔΊ`'9Ιο^•ρΐfϋBώ|gοίΝ_λ^aπΨ•ψ›παΐΞ> ψ'ηώ(cς5ξ­hΏπώ‰ÿ
[Òm(Ύ¶υμ¥jΫZζΙ™))Tζaÿ
L"8τ;ό•%~y_ZΥ5ΎΊikÿ
WΉνCαψcω Ά+‚( (£_/2•ΉZλ}>vÿ
/ς
(Ά’iυυ³Vzίςÿ
=lώAEPΣ{;_'ψ‚in―Ώυ·@Ά)E·½Ώ^—λχΫ―a΄΄³ν{φ²·Eύ}ΑESm­»―Ν/Ζÿ
a¤―£Ϊή]ΌοίΣπ
(Ά…­ξνχνΕΥ›]‚(¦ Ά(ώΏΘ4σώ–ΏΰQE'{iΈÒMΩÿ
Zÿ
_ΦΆ(Wνύiÿ
³µ΄Έ?_[wλn[λnΦ
(ΆZϊ¤νε¨QE­®ΫύΪτ΄kτΩόϋzzάάπνΉTΨ6Θ”‘€ ΰ*ηΎ7€lb½2Έÿ
	Ϊ”κι”5’(Ο•@K€’^qψΒΈζξνΪξύοoλΤχπε§ΜΥ―{y.–ό/R(¬'ΣζΏ/?ΟΉήQEfEPMΊηώzΣ©Σ§ωχφώΈόz―Uψ[»ÿ
€&“άφΰ{wΖGnΉ>½O"UΑ ‘ιϋη·ΈγΦ¬VΪ+'ΫόΌχν»άίΧόΝϊ…QYIκνωο·Ϊ]QE QE
QE5Ίυ@s>(±σ­c½s$'lƒΜlqΈχω[φάI#­yν{4³FπΘ$Qι†9©ΎLyε³Ϊ]ά[ΎG—+lΘΖc'χl0OΌυΟ<Χu)5§wg~ΚΫm·Ο»έ:‡$”­{ίΏ—}όνς³+ΡEÒyEPEPEP_ΑGIÿ
†qeΟΚή4Π28ηκλΣπόE}γ_ΑHΩςΥ{?4%ΟÒE±οΣ8­°φuΆµιv»_o][ΨÒI?&­Υν΅ψsΰΥΗ¬Oύ3Α{ώUϊ›α°WEΣΟόƒμΎκΦΏ-ό"q―ΪΩ%Ηq30~¤ψtξΡ4’?‹N³#ί0!γΧ―κ+£ª‚W³“ύ-{iύhkM­-}lΏ+}ϋQis,^
I¶νÒ¦ QΈΖ02xιωΧΟν+όÿ
yχ=>Η>ύ=½–-Bπ
C"οk·ΪXήÒ6ƒδΏΚΌ\)bΐ{LσΗaς:Φ)4Ίτw}^λϊªή«Ό`Φ©|ΧOψ·σ>Σύ›Ά_ψDυ‹€9—[‘IΗόσ‚!ίb}?D*p@$υύ8ο^ϋ8Ε³ΐ7R²λΧηΈEGaθkήΥ°ΨΖy
ϋδwΰύ?*η«'+%{Yϊµ¥Ύ[[ΘεwkF¶M>ξχκύ7ξ~cÿ
ΑUt†½ψ1ΰ-]cb4y2HΗ£^ΈτPνh
=28ν_£ ‘Χ‚xυά{?L`ΧτΝϋxcώΩkΗΖ8Μ·—Fρ,
ªIΖ©ΑΫqό)§έή;’@Ψ‡<Χσ&¤z€G©¦x―w/’T®ϋiΧωtZυήήLΖIE®IwθΏΕ=ΰΗϊSGωΟωÿ
9£ΠώUΩ®ÿ
Φ–ÿ
4'f­{~­ΏΏ-ΙιΟωτδ~Έυ¤PqΟCΟ^άq‚:Rγ
ώ\ώ_―ιJΧΣΉ“½»[]ΣΩϊ®ϊ\χ―/ΎkΛΫOuαZhΧZ°C½­ΞJ®£d„νIΰΘ2)ηΒ―’DMλG‡|Q΅x³K¶ΦtJΧTΣξ£Ν³†²IύμRΔΩ"™RD'q_ƒ2¦9Ιύ
9ηπϊοώ|TρΓT_xkQ+lξΏlÒξI¦ήΖβXIΒ>2XΩ&'‚sΓ‰ΑσήΙ]λ¥―mΊφίG΅¬'ekήλ5dΫÿ
†ΤύΒ8υλΗGόρΝ7hλξ1ώz“Η?OJωαχνwΰ,^+†o	jrI¥-w¤Λ#–κ4B…Ύm³Β¨™Α™ΞXύS¦jΊf³mώ•i¨ΩΜ7Esg4sΓ 9ε$Ψ„zσΟOxz”ΫΊiywVο}ÿ
ΰyΕέowςώΎύ}6WΧq<γ‡ήί¥H:υΗΏωύi΅qλλΤυÿ
>ÿ
\ρ…Η=ϊίώ¬ε¬νkvυZθλb…Αΰ~\c?όzS‚}ÿ
‘θqΧΣ'ιRn8Ζύ__~ÿ
ώΊ…ΟOΗΏΤZ•ρ-΄]#n‹}4υςΩ\K^ί'q¬ΩόςχοΟΪ(«nΝj­Φώ«όό·½±ΗΧχ8ΘνΗδ8JPqλψS(κGωυΗJvμΏ­ΏΙ
λ~ίπÿ
κkH©’Δp	ηΔzz}+“ρO<3ΰΫ	µjφ|#>Ω]Zy°¤„‚&YπBΆ3ΫΎMπΟΖoγ—ΗΟ†?|".τί
έψΓMΉΤ¥@cΤ5}?Gκ—ÿ
lςέ…ΎΦΦs©¶G/4MΊwΗξ"Φ'Seeέτ·_Ό‰M¥ΆςΧ£Σ}tΌCχƒΒ–-¦ψkC±pντλQ"ƒÒV4΅‡¨rr‚~Bª*τUU
ΰ(§QΧ®;’³i§bÿ
%Φύ>bƒƒJό―ÿ
‚|>—„<ρ*ÒέηΓΪ¤ώΥ%r®›«§Ϊ-Z\tXo-<vFaΤώ•βί΄€΅ψ›πkβ'ƒΪ5Νχ‡ξ®τ±΄–¦›‹ϋ„C4φθ@r$cjειwΏ^/ΙΖχK¥οΣ§ό2?Οƒ:¶Φξτ·cεjVήbΰΛ)=Ν1ΗΘΫϋ›α†―.©<Q¶9aΉ€8dp³wΚXΈΙ8βΏ7<?}6ƒβ=6ff‰μ―Φ;„θΚΆ_&αu³“υν_tθίdΥ,ξΣqJ΅ΘΞRƒΈ€Μ
’@γ‘ψΚ©θύ©Ύ«ΟζΎ.ΊRε•Σµÿ
.κΪό—N½Σ«i–ζΦ+ΘΩ4)"α]Cc#<€ΩΖIγ­|Α©GεjΧΘ8}p
Οa4ƒ―=sqΣ®£Nψ‘“αψ΅Ή{DKxΨ&΅st±Β°σ±™4a‚ε¤F=:όΫβΏί΄n'ΉΦÿ
΄ηy$’HτxZψοgάκeύ”0ήpΏhdX{6ÒεR~^¶Υφµΰm]σEk{yλ­―{νkm§Ο―ιΟμÿ
¬‹ο	έiNα¦ΡοN°ά¶Χd
Nv‡Ac'5ξΥςχμ½gύ·ΰύ+β%W–zw‹¬ΕΕ½Ύ΅lφ—m§£H¶’42JΔ,³ςΐx2’®ύHκTδ“άώ§~ύx'·,τ“]{zΐΥφ<ΗvΫ}ϊ_oΓ(Ά
(ΆλOλώ}>ώΧυkQE&νύy¥ψ\AERRΎΛοΫΞέΡ3Τ(Άzιψω
QEΐ(ΆΪ_Χτÿ
0Ά(
Ά(
―ΰ Xÿ
„ΐΌτρlΗÿ
)—ςζΎϊ―ΰ +
xφ-λ2οωbΊ°ΗυΥΥώΎ_?*i¬zΨ=r}³Α§SίωΦΎ½S½μ“ZυÒχόvκyσ¶—μνnϊoδ|yϋPo|Ο&ΟSaΗ$	mΖ=:ρ_­~:ψμηΖ"ΰΰjrό*3τοÿ
λλ_°ÿ
΄θ-αΩ,µQψωΦ§σÿ
<ΧγίΧ1ρΟSϊÿ
Λ‡ψsίρ―_
ο-•Χ®_ήc.μkυ^_ªωμ~‘ÿ
ΑΉύΏ>ΟόH<~οέ~γ_ΫΥπF¬ΫϋαOlθT{ÿ
Ε-v@λμ}}OLνήΌ,ω9U§ηΧ­•ϊiψωv;°‰ςΝ·Υ/Γ^‹®ί?@Ά+ζµώ–½<υ[ίgΨμ
(ΆQ@Q@z~#Ύ;ΣΧΪ–Ls§ιρύ*%}Ί;-{έ_' ώάΏςFm:ÿ
ΘΧ¥ό…v΅&ΏΙΞΰ{F=?Cύ?ϋϋqcώέ¦{ψ«LΏςΖο·γ_ΜcιΛ’Ο~Ά½ΜnvΫζ£χώqΓ[Z’[5m~jί—nέυ@qώΟι^ϋFό/ΥΘηwOk¥Ξ{¨AΑδύztχα΄`ÿ
‹_ªγ
ύ―Oγϋ@'ιυχ―R–’_wί§υϊ[\¥π}Ϊ½χGβΖζÿ
NΠG±\v Jƒ>ύ{χΝyοΒπβΓE=β'‚β|S¥cϊσΪ½γΛ}ασλctG§ϊΤΖ/Οη_•ψ‹ΰl:ÿ
ΒU¤ƒψ+έ”e·ΒχνΚ―ψ_s’V²ΦφΏU{όο―T–¬ÿ
Jµÿ
Soÿ
\cÿ
ΡiGωό©-Ξsϋÿ
ΆρψP:~'ωόοÿ
Qyήύ==Or*Ρ‡ψ"ώψ¦-QX”QE
QE
QEJM=οΏK.Ώ­Κm4’[wω[zX(ΆΆB( (¤Υχιύkψω~•ΜΦέ».¶ΏMτµέξQEύ5Zmϊyÿ
χούuκQE0
(Ά€
(ΆυύL( ( ÒµήχσΣMΏ]›
C
Y™QG©b=ιάΰϊdvκyομ3ήµ4;Syª[&7G	¥ΰ*^Δί§Q¤υZ[MhEΚI-ξΏ4z>h¶VVφαpB~ωvnqΘιφΉNn½1Η¦>§ωΕ6ΈΫnοϊύΆ¥HF+[%ω Ά+ΫwfEPÿ
­ΌΌίλT€Ά)
S[ξσήHέyίη·ZÒΛέiυ_~—Ί»ΧΣΚϋ'eσ_ϋΆª±χπφϊ~\ώ¶ΘΞ1ώ•TU δρώzz{ώXφΈ:zSρο}?­—Ά
(Ά΅«z­ÿ
?>ίπQE QE
QE
Εψ―O$&£;”ηΐκ„ό®Ns”9Ξρ
p
ΗiQMO‘8’!Fr§ƒΧΣ9±δs[R•›Ρχz]Ώ4®sβ)ϋH5eN·_Φ¬ρΚ*φ£bΪ}ά–δ/% cΥα'εcΫ=;ƒΦ¨Χ|%Νχ]y―λώωªp“‹ω>θ(Ά²( ( όπQ_
ΑC|?®ψ‡ΰ$I΅ι—:ÒΌ_¥jΊ»[€ÿ
aÒ ΄Τcφd³C³ΐ―µY€“qUϋ®›4χPOkusΫ\FΠΟρ¬±M«,‰$N¥]	Xƒt¦΅UOΙ5“[οεΣ―“6†©E»_ςoOO“ΎίΚ^‚-τΫτΎΉ‘™bV%b‚bΩd`—(ΞO;‡
WΨναK>ΚΞλLΥAµ¶‚ά΄JΚE g»ΞOLτΗιΏ?`?€ώ.ΏΈΦ`Σµ}ζvm;FΥ¦µΣƒ™L°•m„…ΉIDω¶„PΗΏΰ²Ώόρ7β7‚οώό2»΄π<_α›Ύ‡Δv‚Yθ>"Τ΄ΛXυU•υ ΄EΊ‘"Zpε"Uχ)aΎΎ£μ“vΧH»_FξΦΪu-Ω½5*s¨¨ΎD®ο¬ΪI¥{κο²vλmΟνj?Ϊoΐ^P†Hυ«x‚wZ«ª@ΘU—Τ“ΐ$‘ΠΦÒÿ
h…ΪΒZΗ―›I¤!_Ϊ\ZΔY³…3Ίy
NμςΤηΣψ¬ψoÿ
wψΏρ7βWΓo‡φί~ι—9ψΰίΙuΟ.Ϊ<Iβ-7GΈ–^ώΪt†υΪ#Φ@¬Θλ•―τRψUϋ~Ξ®νuθ|/?υθ„sE}βλµΦ!³S*mtσ6ΌnI^ΪI”®|ΐk<NaUκI©>Ϊϊ;./½LjΣ©	rI>iY¦ΫJΪh—[Γt=[φ~¶’†Ίtμ±κ—χφξ~εΕ¬ÒΔD€)UCG"εYyV#½¥~R[ΉΐΓήψυ§$Kx#H£|Έγ#D\…DUΒ¨Q€
	ΚϊΰώΛόηγO~e²λkι¦–ΣEψ-Ώ'ΊΫvκώ[ξϋνÿ
ΟψΟΓV^4πw‰ό#~¨Φ~$Πu]ηzούΦ¥e5£2ƒόH%ά§<0wΗςβÿ
Β^%Χό-ªF`Τ|=­jZ5μD¶λN»–Ωφ‚ΪΖ2Θp2»NI9―μX>Σƒμ9ιί¨8γ€2zqέxόÿ
‚–ώΟΣψSΗqόhπυƒxΨ[Ϋψ›μΠ³ι>%¶„B·2•»Vµ7%¶†Όα‹nW§—ΤIJ:%χtO―{νχv3«Ό[OMο®k§Ξύ4ι±ωzƒ―ΣΞ™Θ>„~•>3•δxΞxδΰ~υγ4ΓΑγΟÿ
Ογό«Ψqv—ύRÿ
ƒεσbV»wήί¥Ώ®·_9‡ vβ–•°‡―ωΟµIεdηςγσÿ
>”F2NφόΛϊΣÒι¤ÒNϊ[kÿ
–ΏwάBάƒτ¨*Σ&τ9ÿ
'τ¨έπ_\t§(¶Χm:νχοίΜ+ΪΦΏnΏ£όIγƒΗΧύqώΊψΗΔή\x{_Υtyr2ΦΣΫ†ΞΒHΌ`«£IΘζΉ€ ®qΟΏϋzη§Qυ¥U δγ§λÿ
Φÿ
υTΞgkΕ=®Λ·ήΚZu>£πÿ
νkρ[FΗy¦ψ‚ή27OO‰'d
¦ζΝ­\η®χώ¤τ―]ÒΏmυP«­ψΛΏ.™«€§Δ6Ωyδπrkΰ8ÿ
ηό=κΟ^~µΝ<-6νe¥ΏGύiχZYϊήοϊλώGκνπή`¦σGρ-‰8Θϋ5µΘSάnuΞ9ηhτ­¨kοƒ’ÿ
­ΊΧ =0ϊEΑ¨ΗξΛΫΫ°Ξs_”‡8γJύμψ(ώU‹ΑR~^vςΫFΏσΛΏεύΓ­~Φ•wWUaύΥΡξσΣά½ÿ
—8χ_¶?ΒHAιβ;ΖZbΔ¤σόSLΈΗλςΘ®Fγuφη®ε§&£ΪAιΟNγΗωΝ%—Α½;zφΧ[|½}Y;ÿ
_Υ®~λ¶¶¨λ΅ψ2ώεΞDrjZ„V¨xΰ”·IΨς3‚Wx—?jο‰ϊΙΦ·ÿ
ψΧ(¤c"κγ{)ΘtXΨτΗΛ±ƒθ==σΨότ©†sΧλ:vγΛΦΤπP‡KίU²νÒύω¬έ—ό6ÿ
w­ύY³ªkΞΉq%ζµ©ήκ—’guΕνΜ³ΘAΞYmSΠ€ϊ]ÿ
Ύψbu―ή*ψ΅ylM‚τs¤i“:εNµ―†F…Ζψ4ΘoV@T]Δ[b“ω§αΟλ~0ρ“αoιχ¦Ή®^Α§i¶+I$ΧW;aQw‘Ψ„DVvΐRkϊ„ύ>ιÿ
>ψsΐΦΛκΙ
κ>%½
Ϊo£FΎ”·ρ@Um-·d­Ό†$±3T)΄’Υ(¤­ªÒξϊÿ
ΐΣryµVΥ+kΊ½Υµωέζδ=y=Ί™ΗC…2”στύ)+Εm·w»μΦÿ
Χεχ‡Zj $†GXr ƒ
psυΖ
4κCΫΨηωώyτυ¥ªi¦ΣOKz―λΚχ*/^ή}µίτ~Lώuÿ
j?ΩΛΗήψΧβΆψ;^Β:ώ©>»΅λf—y¦,WÒ››${(¦ςξ-ηy;gΪΜRΒ’Χγv—αÿ
νΰνcAΡ4»E~!Φt‹›Xόιδ»Eΰ©mθGAΘ―θΣΔή*π§ƒΌ7¬x§ΖΦ—αίψwN»ΥυΝ{\Ή†ΣIÒ΄Ν>ΈΌΎΌ»Έ>\6ρAfe'
*–`§ψήÿ
‚³ÿ
ΑΑΏ±—ΗΩΗφ‚ύ’~	ψ'βΔ	~!xsUπm—Ε›gΣ|α{RΕkMsIκK½wXΡ…ν΄rYi_Ϊ6…£δO^ξ…|e”(9ΕZν7Ύ›σoψύχ5ιFΚs{«Y5mWoΧ}w%ψΝϋsώΞί
΅Ί?h?
=ώ%σ<5¥kΙβO‹
ΦρxE:Υ΄¬ΐ$j‚Κ.ο$j¥‡;ÿ
Βÿ
‚£ώΟµ'νχΰ?ΩΝ~ΰhΎ0“KρΔ;Λa6§β}L‹iiαΔΑ¨-½α?Ϊ…ΔΗ(¶·ό@'‡nYΑ–MεΘθ¤η'<r~φzeNA8WΉ|2πγψwZΡΌK¥κzΞ‘β}:ς+­.ÿ
J»Ή°Ώ°Ί"›k›Gζ)nRΙ*D›Έ?KK ©Z0ji;Ν=·6«ΎΦέοr±8Όύη΄©ΚΉRmΩ¥Χm/»Ύήÿ
f­ΰµ‚+[hb···‰ ‚#`…$qA`"DDB€
j	3““Θνί·ψ{ΐρό,ÿ
Α7?ΰΎ>
kΎψ]ϋbjΕίwΧ6:,obώE;Ηmo{sψ§Γv^hϋ]ς¶«aiKiu$IφSύΔxwΕ>ρ‡τOψWU³Χ|5β=2ΛYΠµ:xξ,u-3R†;‹+ΛyΆ.πΘU€lωlΧ'Δe³^ΥsEθ¤––Òί§γ΅ζaρ΄ρNΠv“Υ§ΣNv•υΪΪnmQEγaEPEPΥχ
Ά)Y+i·υύ0
(ΆQ@QPοΜ¬ϊτήΪhÿ
?ψΈΈΫ]ώz­(« (Ά
+ΰψ(	Η€<?δlbΏφeΧείωWίπ?όβ€πN#ΕΟΟ›wόρψW^~ϊ/Ν/½―ς3«ό9uΡ~hό§γόι¬GCΞzγ}})Υ―ήΑκ8ΟrsΗ_ΔpΗέώΎσΞ’Υ·ΥiλΆ·υχξ|{ϋP\ψDξu¶ª8λΓΫηίλΗ?¥~<ψα³βοMEσξ|¨ΏΟβkφφ΅Ϊ/<§ΫjΏ‰2[ÿ
ÿ
…~>xαGό&>"
ρύ¥/~Έ1υνψ{p+ΩΓ¥μΥΎvΩmώ΅”µVοoΝ~¶ω=‡ιόΌ“ϋ|%PpγβH?υ*_`~?ύJώί+ψƒÿ
‚7¨ÿ
†ύψJshή>ϊψNόψς?—5ύΎWƒ¶«SΣjw_‡ιψ§mΟCπΛόKςAEWΞAEό?υΆ€
(ΆΛOςΏβEP
™ÿ
λÿ
 hÿ
?Λόÿ
ϊ¨¦δδρΧ§<ηςΗΏY—Βώ_γΏΫÿ
Ε΄υ5ιcÿ
!]ΛϊΧδ°9όAΟΤύ85ϊÿ
ϋqμ³ΞοicΏ
CxOενκ+ρύρηίόβ½ΜΑςΏέ©ΓV?½“ιeχθÿ
κAιπΟΪ(nψcªϊz²ÿ
Ρ ÿ
‘ωΧΉ)ΰσάύ01ψΝxν6ό0ΥΏΪ¬†>²…ώΏη¨υhκίD¬ώwώΎJήf2Φ2VΪΦZμύmηΧ½ϋΏΔÿ
ΓΎυϋΟλ*ϊϊ?5ψ^Hψ£πΫ‘ρΑL?ΰ>'Òÿ
λW¦|u―tE”έ}δ\ÿ
!ώzy—ΓΛρSα®qρΑ§‰t³ψ§©ΗÒ½ΘΩQw_aΫΦΫώ‡NΛMΪ·Ι―_λο?Ò®›kSλDϋ-2?
}Ensmn=!ÿ
@_Σ§ωΕH:½ÿ
Zόλόjβÿ
#έ¦­.Πό΄QEbXQE?-@(Ά”Ϋ{iσΏβ–ÒΈQTEPEPEPEPEPERnΦÒχkσώ­ζ8«½νepΆ)(Ά
(ΆRv^wV]υΤΦκέΏ!wapHΧυ<ϊpzΧsαK?.	oYpΧ,20ή\yΑπΔη®Ρ‘ΐΗs<6κ2f‘T3Ι‘ιτ<dπ#ΧmαK{x`bTc=‡9νΧ'#Ο9[^―m:ιwΩwÿ
3ΡΑSζ›“Ϋώ§ίΣ½¬MEW#nώ›Yώ:£ΪΨ(ΆΜ(¦ÿ
―ΉyΏλξ@QE€*):cN8ώο?Aύ=ªZ‚S‚N:cωσίsιWΉ/%ϊX—vνδίΞΦύG–<cΨsψqΖ=xφκjZ‰~χB=½8θqϊυηƒή¥­;m·ωm―KτΧkµ·έω-Ώαή·Τ(ΆΚNοM―χνηn^c
(Ά¤( (Άÿ
§ΰES[«wWMw0<A¥BΜΙζΨ e£υ$ΰ3€yγω|ωΖÒ «·F3Ξ:¨Ιλ^Ϊ?Οωώuη$ÒΗΫmΠ‹i™BρεΘF	8ΞΞ02:}k¶ΌϊvΧK5Ϋ®ιέV;
η‚Φÿ
>—ΣCΆzσώzÒΧJwÿ
†kσ<fvz4QE1Q@Eqsogm=έέΔ6¶¶°Λsuss2Αoomm-ΔσΜΕV(£…δ‘Ψ*"³ RΛλ_Ώπ_―~#ψÿ
Όψω―xKV»ΠΌAγΉό+πΣT±Ϋ^ZΩψγSϋ&Ί-ζB%…ξτ;kϋ?6"%Δ€cs
κΐαώµ‹¥Cωη->Λ²ττ{/-Ζδγ%f¶ΧΟϊΧΏεψÿ
oÿ
ƒ‰Ύ*ψ«Η>*ύ›ÿ
ΰ!>π/‡ξ/ό7βΟΪKςδρ‹οα?dΤ΅πΤ›΅Πό?hζx`ΧI¨jf4Ό²–ΞΧΙiΏ‘ύCαF½βOPρ/‰|NnµrφοRΥo/}GQΌΤof{‹»»λ©$ίqwuq,“Oq#»M4μΜΞΝ[ή[dΌ8†Ε‚Τ#e²ZR
’PzεΫ “W#&½ΛΓ³θIuo¶]9•ΖrΖLγ$η°#°ι_―ΰς|.	
j6m¦ά]Ίΐ·¦ªΚΗΟUΞ1tjΞi(ig)'&ΥΣέτΩ-²KSΑ|-πϋZψwγoψηΓύ¨Χ<β-ΕZ4ÒΪ°κΪ©mªιν5»D·6‘#Μ{ΖU―φyϋΑΡ:¬Ύ=πχΓοΫOαF‡¤xGY†;iώ/|/›TλΓ·εV(®µο_-Σ_θσ8k»ΡυD½°f2Η¦ίCΊ8Ώ“?M§\κΧ“iJEαδ™Pp2xΰ`eΈ«Ύ1ύ–?lν+αΎρΚOΩΗβ΄_ΌE¦®·αÿ
‰6^Τu_ήhΌΗ«Ι«iΠ^›cI&Iυ±#BV_υl®qΖεΉ|αjΠεc	Y¶ξ––Χd­®ƒ΅f8™ΗΪWƒ”³“¶[Ω9k{-v²Gχ‹ρ›ώ\ÿ
‚y|8ΧΓή—βoΗ-@°ϋMΧΌ.t]Ω	Rδκ^3ΉΠ^α•[mμηI%qϊ‰ϋÿ
Α@Ώgψ(ΓGΗÿ
µΫφΈπέτZWόβkHτΏψ?RKXu}5..Ά{;ψγ–M3S²ΉΊ°½X§X§Α<’†‰«KipΣ”FiTΞξΕ¤ΛΝbA]μΝΉΖ[ξδÿ
UΏπlυθ?nΏsq‡υÿ
ΩοQΤuλ8δqk5ζβ½=βxΎT3ΒuΨΰ•†υΚVΟΟf9
­J
j­5vνΛΌZ}^φnΧOΜλxªΡ―'xΚΙ¦ο«²Ί·g¶Ύ[ή³¶X‘‡―^Ώ‘Θ};εόiαόAπΖ―ΰÿ
ivΪ®…­ΩΛg}mr΅Χ)U–"Ω1MwΕ*•xδΪΚΫΉ®Τ®Π»ϊδδu=?Θ)ηςιω>kΰtδμίOΝi¥Υ­ωίCΥΊ~jΚώjΚÿ
#ωΌύ©Ώc|Υnu½ΦχΔnξτν~Ò'Έ›FY”ΣυΨ΅BΦοΚ^°\σ4Rƒό[ύ΅ÿ
nΩΣφqΌ›DρXρ|Q‰Β>·Φ±8dKσ±YιΖAχεΤNΔύΝ ‘ύ‰ΑH>5ήώΟ?°gνWρ{Nµ·»ΤΌπ{ΕshΠέ¬r[¶ΉªZFyb^9ORµ a
7s_δksh5½FχZΧεΈΦuέRfΏΥ5=Fβk›«έBσύ"ςyεv,ξΣ»¶I'lΧΨδΤ*γ¨]$ω²}/eδΫokvΥτ"”πΤ¥/mΟ%5ΪώZΎΞοWΩXύ©ρόΟD†i“Β5;»UbmηΧ<O¬²(–ΚΖp™~@Ήςΐ,Cp1΄oψ-Μ«r[ψ#Ωφm;Ε“Λqƒ·;Εή—δηƒ‚¤½WγνΎƒ¤Ό‘¬|Y•[nΰ~b]άΞXΧ§ΏΑ²@σ%―›qεβLΜ>
·[`κ3β½Υ‘Χ{8/UmνΪφοw·η«Μ²ΊvS¥4»έ7ΡέέυλΩχ½ξ—Γοψ,μέβ···ρf•β\Ξλ“^EiªX@Yοylδ[‘Κ³2Z9
νγΡO‡ί~όUΣ“Uψyγx²ΡΆYΨi:•½ΕΜHΨ \Ωο[«fΑ–xΡ”
δΧςg¨~Λ}υ·Ϊ4Έυ&ηέγ,»8d®Ο_>ΡΌ%ρ“ΰΎ½ώxQΣ―΄Ι–[{έ&ϊKΤ16ÿ
.kc&ΙγcΖΖ@ΰΰ©ΝqΧΚq4“³s^®™®MΏo>©NQV£Tª'¤+$·¶Λ™.¶½·Ήύ¬ΰ`m9οΤCξ3Ρ_–_πO―ΫΒÿ
φƒΉƒΰχΕ=tΟ¶²ζΪ>Νγ{k+wτΕQ°³Φμmβiξν‰ςnγqlΫΦXcύVΖώέ™%±ΊΠ•e’©C(Α±δcΌΊΤεMΖιΗ›k¦Κι«kΡ[Σ¦¦/έ“2•ΎÒi¦­}Σ³κτιΤ©°ϊύsΗίR?ΟΧ­JΒEϋΘPÿ
¶U{τΑlη§λQ9ΐΛcΩP:β'λί¥gξ·­›ςwΎΪ½νω_ε*Iυÿ
ƒ~Γi¥‡αλΨυόz uβίΏh‚ÿ
 yΎ#|FπΏ†A+as©C>―6έΑώΟ¤Z΄ϊεqσ$V²0Κδdόαψ―ÿ
ψCαΘξμώx/Δÿ
uή–ϊª†<<T“mΒI¬O›2ΛHΉΝj¨JZςKT­eÒϋν­―f―Ϋ±Ό)J{.6ÒWÒΧo½ÿ
¤~Ε®Φ~ηƒιιτϊυαε#Ò…†lsέ2G__q_ΚοΔψ*Oνwρ
I­<-ªiμn	H¬|'΅Aq~‘ΎUTjZ•ψp1™!kδ ΞΟ7?k/Nnµί?#cΝβ}jΠη8ϊs/…P‚6€k¦–µF•:S•Υοd—N²¶ί=zχΣ’…=q4Σµ—3ζι}[kΝ'λ«?³xΆR ©1μG±θz·ΣÒΊox3Δή8Χ΄οψGF½ΧuνZε-ltϋI¦”•Λ>!,ξβgSsΛ" .?	]ώΤ»ƒZ²ψιρ>Κ[v!“Ε^"Ή·bΌ†΄Τu‚a…I­1*
#"Ώ²ψ7;ώ
AρΕώ$ύώ;ι~½ψ¨4Ο|3ψ±g£Ωιzχ΄ύ ,Ύ#πΪ$H§ΧtΛi“VÒ/,V{έ6ίPζέ.¬Φβκq™~/BU¥EΗ•m&Ύηe{ιuϊ5ρ8>xΣ£]T½“iI%·xΕ»ίªΣ«? Ωφ0Πgύ>/x―μΊχΕ=FΠ	ο‚‡°π½Όλ™tέrόΧD.χT^PaΪoΉ‹x'
’NO$χδt=;Sδ“y8υιzς=ύN;p=*/ςkγkΥ•Y{έ?Ι{¶N½ού?ψ7
(Ά°QΔγ?ΣιΫ+Βÿ
iΏΎύ–gÿ
‹_΄7"ΊΉπ·Β_λ^1Τμ¬‚›νKϋ2άµ®—d$dCu©ή½µ…»;,k5Κ!A­)S•YΖSnM-=WυΫΎ¦—Ϊκηδό‹ρ/Sψaÿ
Έψ““}scqρΗ^ψyu=΄Ο’iΊ¥εφ¥©Z;΅VάΫι"T3²m&ΏΝwΓΪ?|aªZx_Βz³βί,‡OΠΌ;¦^kzΝβ[Βχ3}“MΣ΅ΉΌΈς-γyε1A 8έ„Rkυ·ώ
5ÿ
ύ¨ÿ
ΰ¥Ί<ή
ψ‡ύΰo‚φ)‹Ε~ψQα‹T’ΧOΌ°KΛ]ο[Χξ"]O]Υml―®#’iΪΘάO#Ϋi¶Κ«ϊ9ÿ
£ώΗΪΏÿ
k‰µΎ΄m„ώ
ψJχΐz4vλ<Ύ&Xym·+GÒ|3ixgg*δκΡ$`αΝ}ώ
2Ι°.­Hs9E4φI4M΄όΊoδΜ ΅VrN\®ν$υΎΦΊΡ%wλoΉÿ
5	±²¶ΥotMΛ\ΣeΪkJήkK«[$h®m.lξU&·½¶•q,3F²£d:)m²VΧ¶ΧIεΘH«‚"lG!v±9λΣ―νoώUÿ
)ύώ$ό=ύ Ώmÿ
‚Z–Ήπ§γΏ‡t|\ρ¶“βίψβχϊΨ}"αEΗ†µΝJήΥ§Kύ2υlλΜ–λL•¦2ΰγBψ‚ςΑ]΄ΐ\4ΕΑ9@pΫ‰ΙΞ9,ΓWΣε9®B”©K’¤[S‹ΥÒZήΛΦώgΐΧU¥V0s‘k¦Λ]‰χςν©υgo|64hμ΄y¥Έ2΄LζEcP¥¥ΪΗn	#a!³‚§ΏΈίψ6Λφ…Υ>0ώΓZοΓ-Q›QΥΏg—ΣdΈs%Βψ;^±‡Δ>‰™ΨΘa΄yυ+(Kp±[ª(PΈoσβ½ρbΛin X@εbg#iΐ`‚ΜyαGΜO9sχΟόώ
·ρ;ώ	Ήρ³Wρw‡4…ρΗΒ―C§iÿ
~Οv,›W·Σ^o°λZEρI£°ρ›ΕίΩ¤‘L76ς%½Θ
G.†ϊζΣΰζ®Υέ¬΄¶ΎW¶–Ω[IΡ3ζMξΞΧZµ¦Ίέλ­µίύNΏcόΟωQ__ΰΰψ&?ΕoXx·Zψβÿ

uya‰µoόAπΟaΧτ‹¦¦CΣµkψ#s…Ί±Ή–7y…jύοϋ7~έÿ
²'νuwªiΏ³ΏΗόIΦ4T3κZ›ws§x0ϋ?΄αΧ-΄έbM<·Κ/ ³–Π?ΘΣ+αOευ²ά].iJ”ΉSo›•ςΫ½ώ}{λ®—:»ι~½»φιΤϊΪV{Πχν§¨4•ημlQE
QE-oε―ιεo—ΟΈQL( ( ( ( ?―λϊϋ‚Ύÿ
‚€ψ Ό§΅ρ\;μΫ®½ϋcόζΎς―‚Ώoόx uÿ
½ςξzOψ{λΑ[Ϋ+ΎΦω5ώ~_…λ;RύΊώηÿ
ό¦#εR=σώ~ƒτϊTn8Ο§ψσψΥcsϊηόMBΛÿ
®Ύ%-^ή[?MΏΜσ]έυΫUήÒ·ε΅ρ§νJΏι~*9ς5lγ-¦ώ<_~8'ώ`RaƒΫσώµϋϋQγν^'µ¶®ς5­~;ψθcΖ>$τ:¤¤wΖb„‘ψ^¶αΡ_m7ΦίΥΧ–θΏέoλ―ªΠύÿ
‚8ÿ
·οΒ ?θγβxώο„οΫϊΐσνύΏΧρÿ
gLώίÿ

sΖέβ~'Β—ιτΖ~ΎΥύ½WΟgΏΕ‹ώδWΙΫόΎk^§~ΰ—ψΏDQE|ωΤQEKζΏ–ώwύ-ίξ―vΪήϊυτ·K%ΏwζQEQ!ER»{/›ύωΪή`wΟΣτΟψΡGωÿ
?¥Lοg®~υ·όΖί·'ό‘ΫΨx―Lÿ
ΡΏα_Ò‘ΞxQϊ·°ώOOΨ/ΫcΰΥ‰υρ^›ϊA}_oΟΰ3υηϊÿ
“^φ\ύέΎΞέz;zUο$ÿ
―ι[’½qηςΟ¶q^'ϋDaΎκΓ9ÿ
H²ΰϊnΏΟν`γόÿ
?cÿ
Φ―ύ΅p>j§Φk?\―QΧ9ϊφό+Σ¤¬ΣΎνmύyκ¦Ò‹½νo?ψ_ΔόWψζΌπωγ›;cΠHΈ…yΏΓ%ÿ
‹©πΧ
gώƒ1Ξzx›Lγρτχ―Kψκ
»πχµΘη―ϊΤτÿ
<fΌΏα›>*|4=‡Δ/η§8ρ6­{JώΞO§*_‡υχÒIκ·vznυK®ΫωyιK
ÿ
EƒώΈGÿ
 η®jaύOσ¨ΰθ¶ήπ'ώ€Ά¤―ΟqΖ©ώ/ς=|ÿ

ό‚(¬J
(Άλϊÿ
 
(Ά€
(Ά€
(Ά­Z]ÿ
?λΜ(ΆΜ—Ω_eί·ΟσlΆψώ¦6ΚΑEP Ά(
Ά(
Ά(
Ά(έ_k«…Sβζ•!wI#*(η±ΐΞ9ΰςύdc&ήϊvΣΣτυ5ayµiλΆµ½ώ»O…¬ZI$Ύ|‘“9θ['‚r	γ'
w™Ξ{φόΏΟ~jY[EnΈ;#Ξ@.ΔηζάΩ9=½Έ«•ΙY§k=―σnΛςÒώ‹mOIÒ†ªΝ­®¶³ϋΒ(¬°Ά(
Ά)·λΙ/Σό€(Ά@^aΧπώ§υb£Τ~=Έ#τΙοέªαΏΛό„ϋΪοeωυτ}ξ3Ϋ§8φ'΅§®{χ2Σ
Ξ¦@8ξ;γ#‚>Ότ§Υ΄έµ¶Ϋ®Ϊo~ϊοχ‚Υ/DQEdξ»«~ΧOΒ(΅τώΊ.—{~? 
(ΆQ@Q@G<1άFρL΅ÒA†ΑκG£z‚"¤Ά΄ΣK·K[dνί¦ϋ.–&QRM5tÿ
­ÿ
3Κµ]2M2δ£Γ&Z29RI@ ήΉ½fW­κ61j―€o91?xΫqΠ“Θτθ3ΘςΛ«ilη{y”«§<ΰ†Rx`FQÒ»aSΊvς·—¦¶k~Ηƒ‹ΒΚ”Ή–±mκϋiω7ψότQώΟλEnyϋ
sνÿ
Χÿ
?ώªJ\υχÿ
?ηµ|ρϋQώΥ_ÿ
c„zΗΖ1µπ‡ƒt©"΄ƒ1½ξ³―λ(Νc xoG¶{¬k:GH,-δ`$†(#–Xτ¥F¥z‘¥I79|)+¶ό—]=άRΥ½›~‹µµΫsθ•\πFrG§8τη¦{βΏ—Oψ:«γ§ΒφΠΏgΫθηγ/>/xΖ7€,οc»Χ…|1Ύu=wU±·w—MΣ[Λxm&½-εΤ‚+eΕ)Ζÿ
iOψ:gΑπ―5ν/φ^ύ<}Δ=R)τοx£βΔΎ²Π|>—ΌIβtkέΞ§ulϋ$¶ΡκÒ)$Ψ..Υ"’)?‹Ο‹Ώ>,ώÒ―Ό_γ}gΕΏώ0όKρGφ‹ƒy­ψƒ^Φµ{¥†ΛHÒ4θ„ÒF|ρΩi:M$p¨ΪΦ
WΧδω&…Hβ±?Ίφv’Ύ›ΫwΑ-ÿ
O®B¤γJ¥ªΎΧ}l•›·vμΎVg—ιϊ±$φμΈ	,gώz'2@
3ΞHΖIη>eγ›M.–ο€®v‰²πp
Ο'qιΫgφ¶ύiΨOΗ^π'να;ox―β€tί‰:.‡³cªάΑαέVϊώΒµ-$wÒυX/4λΈ.μ®€eΨ²FςΖλ!ωηZΤbΣÿ
΄[N¬ΕΒYÿ
h-µΙ΄[ΧC$vsε‹tΈ1ƒ ·2y­,—ζiΖ1§Ν'ξ%{¥{ς¥gιdνέlν©5r9W©BΣUZk’\²Z­κVw]Φ¶θ~~Ι³ΖΫ“γFπ/φyπάΎ+ρV κή Ήig§x7ΑκΊn›­xΛ[Έ½Φ8τ]RΠJ±™®®&ήΞÒΪβζζ8ΫύVΎ|#πηΑΏƒώi–¶·ΎψwΰOψή9νa6χΦήΡνt™'Έ΄eh?Σ»O4l„™ΓΟ?Αoό-{¤Ϋ~άÿ
Ξ·q>#Χÿ
f½^ίΓv³ε··ρίƒυZ8Θy%ς,νζe°ΐdcώ„rΙσ“ΧΫ’qΗχΖ9Ο§ΎC‰s:Ò©F”y©ΕΒ"φr»vo³KUΥ6ΣΤt04π“Sηq’†«KΪ-Ϊκν&ήªΧµΧsψÿ
ƒ bΩφpψ·πβοΐ½Kψuργμώ>βgΓ―ΫCgα­SώΗΠ&ƒβ%–••o΅κ:…φ±q¥κΠΪΓ–³?“¨-ΌφΊΕÿ
ΗΏπE_Ϋ³Α°'νI?Ύ(xr}[ΐ_ό+gπΣΔώ!±pu?Xάλ–Z¤>&‚ΣhMBΚ;«xΣYµΕp–	φI`ςdϋ'ώΕψkρ;Mύ®ώόgΤtύ^λΰÿ
ώΩxΓzΚ¥ΔΊ™γψ»ΕΗ‰4i%]Φ¶z•ώ•®θZ„I(MB%xLλ§Kε3ϊ­­x―PΡ|) iW:ΧuΛϋCÒt{y―5M_UΤg†ΟNΣllαIdΈ»ΌΉ( †1ΎY›jcέΚηFQ(Χ©ΜεM©9½V^_ΡέκΩΑ§9Wƒ¦Ήlο¦―V­®ξϊo»{nφ-Σu3Δ^—―h·°jZF³§Ωκ]ύ΄‹-½ξwvwpΘ¤«Εqo2M/©UΚωΓφ>π‹>~Κ_³ΓΘÒxΛΐί~x_Ε&G2:k/„τ»J³Ϊξ-ΪMΗΜ1$WΡύkσTcEXA§Ν¨χi[λ§ή{οΙήφWΎϋ#δ?ψ(μσϋUώΕ?΄μÿ
£—Δ_ώλz…όη1Δώ)ΣZkΓ°M  ¤7Ζ™go#d(YX·
ηό“uΟkήρ»α?iΊ‰Ό/¬j^ρ‡©ΫΛk¨ιξ‰y.©ιΧΦÒªΙέ¥ά2Ε,l΅\’IΛ³½r	ω²sΞrOrFGεΖΏ―ψ+όαΟνΙªλί΄'μω©i	?iΫ«7Ήρ,7vμ|ρv{;UΝ|CklΊvΑ”^)°I~ΡkZ~Άc¶Έ΄ϊ^Ν!„“£WHJI·Ωh–­όφμρ­JR“―®υνe{y/MtgωΫp0Λ1ƒONqΧΏγΦΊέ+Ζ·¶Q%­Ò-ά	Β—$N€r
f' u
cψΕπÿ
ΖΏ>+ψγΰ·ΕO
όCψy―ήxkΕ:<ΣΫήCi©ΩC}jοo<FΡάΑ<eRH%BU²"9Ά”¬Bδq΄Όzυ―Ò©β(΄¤¦efύ,νσ_…»Ul5KΎjrεk>λµ΄ΪέίgΊ>±ψ›[q«^ZFΓ¥Βÿ
w²μχ$;To―ιR΅wΥ-δ'$©ηύ“ƒ‚{p2yVT%A
ΝΠτnψΟA~}κΕµυνέ½…•έυυάρ[ΩΩΪΑ5ΝΥΥΔΜ©µµ΄*σ\M+Ί$PΖ­$’UF ¤ηFγ΄Φέ­vέ¤Υ½lp}Z1“Όfνe³ÒΪk«Ϋ²}t?BΏΰ™·zφ‡ÿ
ύ5/yÒλ7ÿ
΄Gƒ¬UmΝ’mZΌώΟρ2)bΦÿ
ΨΧW’\g‘G$€„Χϊ¨ήx;Β[Qπήƒ|μχΊ=„ξμΔ“½ζ·w9Ο$’NI=A?ΘOόΩÿ
xρχΒoΩώάµ‚υxΆΛHΫΰ?Γί[¤Ζ•»g5Ύ©ρΔ:lΑ®τ}B}.wÒό?¥ί%£iζ΅¨ή[G+ιβ?μDΉ#O9νξ{Sμ+σn&ΖΒuiΒ”]4”ωz½ί­ΥέΦΧ{{ΈO•Ή7gk'kΩmΣ―βίηΧΎNΔά|;πLΔKxgFl“Τ“φ<η<ϋt•‰{πSαΫ^IΓ‰γµΉΩ‡…tVeΈH$hqdΔ2HWh$γ=	―YλJ
cƒΣσ0sΟ8γΉM|Ν,UHΞ.Rn*QoWk+_ς~—ς=+l―ήΫm·έύh7Ζ	υβοΕcΔO<ή©ρ7ΗΧZ½Ό‘,Omxή(ΥΦF'άmΦΪEς#¶
ΎBF"Ϊ΅@£YIj’£Lx•όζ,
—UΪ0rxnƒ½?¨Ώψ/GόΏβηΑ_^>ύ­gΟjώ7ύώ(j~1ρ­…4ωυ=Wα'―OβGΥ΄{8¦Όÿ
„C[»3λ¶ύΌ2Yι—77Φ:Ώφr%„χΏΜq\Δν"ƒ¤?8\l’3Θ<c*ΫFά“Η#TΚjaq)J2qζΥ9]¥Σ«ώ΄ΥµωΪR”|–Φvλδ­µίΞφχ-"xLVΠGmƒ*F…YJd\drFΰyƒΓW―ψkWπν±y®.­EΛ’ΚΔ"α+…sΑ,„tδ>T__
Ò
ΐm,Qryη®sy#8©!Χ―$8k—©}Ώ…xωιΫΧ·ΖΡQΥ|)/'®λΫοΨπκΡ­9JRΧ]$άΉΊlÒόόΟ«όUγμ2C¦ίy—ΦwbήDq9%εΑv-ς(Η=03ϊÿ
%ΣόIβoψ*Ώμί/…γΉοΖzζ½=΄lΡΑαΛ/k°j3έ“Iqml^RΙ4QσώTόψ;ρφρΦ—πΗΰ—ΓοόQρΎ―<QΫhÒξ59bσIλT»E†§Frnu=ZβΞΒΪ5y..cEgθIÿ
Nÿ
‚Aψ'g‚u―_ξτ­{φψ΅ΆZιzβιέα—…L±ίhƒ(ώΠΥ.®£·ΕΝΊΗguqimc§	lmζ΅αη™•:XZ΄εΛΞ(έ;ό*Ι­­ΧΜΣ„ªκ¤ΣµΣ”¬Υ–›7―»j~ρ~Xλψη<ώ=3Ò9οθάtηωσE~G6¤ΦΝN•’]QE#
ω'φού&ύ®cÿ
Ϊφr΄Τ•©όTψq­ψBΤί&;"G©xzi€e&ΨkvιPφΒ`[8―­©ΚΫXI9γ ƒsυοΕmB―±«
Λ$Ϊξ“»^wWΣηΠ>vσήΗψαόUψρφ}ψ•®|ψ½πσΕ^ψα½Uτ{οκ:MοΪ®ξRγμΠMΆ΄pυ›-E}6χMσνο‘ÒKy¤fÿ
AΏψ6ίφHψ³ϋ/ώΖ+ρΖO
jώρGΗ_Λγέ3ΒZμ-g―i~±Π4νΓχzΖ›$q\ιWΊΊ[ά_ÿ
g]„½·µ–ΨίΓmtΟ@Zƒ|®κV:Φµα?λΞθϊv­ªθUώ©a"dG%•ύέ¤·V―bΘπK©f σΟI„ *ªª(ΰ
0
ΐ§Jϊ<~{υΜ2΅ς«FϊυVΎ>ZtΉ({όικµΎ¶Ύl¶σιΨςΏΎ¶ψ£π#γGΓ»π―gγ…>π¤ ®εΖ·α}SOSΑ,ωΖέ “°uώ2Χ?Ωw—¶Wvο¶ΗP»°i£_”=Δ–Ξ½1•tΪ@mΓqΘ―φ3ύ®~;xCφhύ™>5όiρ®―i£hή	ψβ;Θ&»-ώΫ­άi³ΪθzU™“{νGS–ήήΦΪ?2y$έ΅±ώL>ΟρCγΒ_Νmsρ#γ‚΄[µ‘Ζ_Εή4±†ΰH"Hυ†TΗ―O‡!UQ«5¤ΌΟmΊΩ¶―ωθ΄Òªb0τcj¶mµΦΪ^ΧO]­Ϋn‹―x£Γ~)π6΄ρ‡5ÿ
kW6―A¥ψJ½Ρυ	΄?i–ϊΎƒ¬Gk}36«i·–Ϊ†x±ξ­&h]£`Υύqψ3ώ5π{ώ
+ÿ
λύ›ΏjΨ«Δ:WΓΟ2ό,Σ4_‰Φnε“ΐώ7ψαδΠόUΧνρ=Ξ©a4Άp―cv—PΛ{n’Iη§{ÿ
f~Ηz?†­ÿ
eoΫ#ΐΪ5™d³wΔμψ!·/§Y[O―ό1Ύ–-%KΣΕΪ<“-Sι6ΓΕ‹ζίψ7›ώ
«gϋψηQύ›>;jrΩώΞυ{mWΓώ+Έ[‹_…Ώ®!Μ]]¤bO#Β~)Hν΅Υζ¬z]τϊ•Βω]K£S_…–'ήΡ”gμζ®¥υ‹wR³Wκ›qI΄µ3¬¨Z—3JOήV\²VΎ«¦ΛkYκη'Ηί> ώΝ|Wπ—γƒοΌ)ραζ½>‡βΏkkKΫR#qΎΛK»r—VVν-­ε¬°O€ΧΪί°ΖψSφρύ”|[π…/΄_ΏΖOxoμΪCΙκϊG‰µ«-^Ρnmν‚Gua}£έάΗqk:ΙΚ& ΄ΗφΫÿ
tÿ
‚|1ÿ
‚ψΓώ|GΣ>όl·Ρ,t}gΔ“h_πψKβG†"ςδΡ$Φm΄ϋΛ;¨υ+ÒΓX³–vΉ±•m®!–8mΩ<Ϋώ	ÿ
υ|(ύƒώ-XώΠ>(ÿ
ό3λπζΪίΒΗΒή	π΅y¶w^"µ°»Τu{ύsΔιg,φn£{-•¦“ΔχPio©‹Kϋ7_9ΑΤΐZ£*8ΪXwά$­{—dτZλ¦§<5hΚ½¤Υ•’ml¶ςήκητl~dΙrδ±ύ9χ=ª*RΕ³~9ΰ““Χ―Ϋx¤―Ν*ΙJ¤άl“m―NφΣπÿ
‚zΡVI=l’zοkW
(Ά³ΧM}|ίυ~£
(ΆQEϊ~σΨ( ( ¦ΣΡ.ΫoΣ¶ύwΧ_QE-R}Ι
(Ά€§·ωό+ΰΏΫρ³ΰO©8π•LΓλύ›t:σΫόGΎτ―‚?oΜx#?Γβ©AόtΫ―ώµuΰίο’σ_ƒ_ζΎFu΄§/—ώ”¶?+ρξ;ÿ
ΗΪ s“Σ¦GΧόÿ
µ1όΏΟ½Bδg9ΰÿ
ϊΏ_|Q^υ―{_DΎχeoΞΗμΫ{++~}Χ><ύ¨J ±¶ΥΘλ‡΄<uΗ'Ώÿ
«ργΗ#>1ρ¶§0Ηύ³„sψ}kφφΆΙΎπ`>ΗªσυΨcκ1µψχγGόGÿ
aIΟΤαÿ
?‡γ^ΖόG®‹―oΝ;y^Θ“τ—ώΠΉύΎώβ§AαkΆzϋυΉ―νΞΏ‰?ψ#0ϋ}ό-'>ψ†Έ8Αcα;Β:ρΧ©νν_Ϋiκqϊtό+η³Ϋϋh/ϊvφ·άΎVϋΞμ-Ήgeo{mϊ!(Άωσ¨(Ά
(Ά[Ϋ¶ϊ[0
(ΆQS-Λσ@|iϋsψ³vτρv™ΖήτcΫ“_ΟΤύ=ΊηόωζΏ`ÿ
nQƒV‡ώ¦ν$©‚μQ_®8ιιΟ±υφδtώ•ξ`4‚vÿ
‚΄Σόό™ΕUώφKΙ?Α$‡uθsΟo§Oλ^ϋEÿ

ΓVΖγζΛ§8qΞ>ΎΌuΟZχ1Σ°ύ?Cs^ϋD«†±RGϊE—CΑzυΗαό«Τ¥Òÿ
ΝλΫM5Χc)|/υÿ
ÿ
ς?>9¶nΌ?νiqλΣΜ\{zÿ
Jςί†άόQψlGo#ίώ*]3όÿ
•z—Η1›Νωσcώ§―ωφ―0ψl§ώΓR½GΔ?¨ό|Q¥λόϊΧ¶Ώ‚ό—ω?Τζ–λ[|υz―ψ~―²?Ò²›;CΣχγώψPxυ‰Ε-2~Ιk‘Ο“=Έ	ώ„~΄ϊόχόzίήίΥ#Ψ¦„oΩ~*ÿ
ΥϊωX(Άΐ°Ά(
Ά(
Ά(
Ά(ώΏΜυλΣ~EηςΆ€
(Ά€[«νΤ(Ά
(ΆZίΛώ}όϋm¨τ¶«]:ÿ
ΐόώΰΆ)(ΆZίunέz^Wκ=<φςίξÿ
‡ξ‚($“ΠSσώ}ρ]‡…tί0Ύ΅:¨LvκΓ ΏVqώο8#‚ζ¬lίPΉΦ1νϋΓƒ„OΞΔρ#―λπEkvπ±Ζ»@Ο^ΕϋMόGΏNΛ6’vv}<ώ~—ΦΛ§sΥΑPs’“ΩyzvΡwΡϊΡEΛ>?ΠφΦ‰.ΑET[ϊΣΛόÿ
­@(Ά@QE
QE
ώσ’Ά“pO―^™ Ο=~µPψ‘2{.Ίµχ?λk=»R:cφινΟΎζPΌ8Η##9Ζ:ς=;Ξ¦­n΄»ίϊσοέmω}ή―σ~΅EVRw“·υ Β(©
Ά(όv
Ά(
Ά(
Ά(»ξXϊΎ•¥>δρδΓ&
γXpYIΑΑΘοΑ¶(­£+5vÒ£{vΣυ»ΤΞ¥5R6–«πO	mδh¦C~e=Ή8 χF3€y¨kΣυ"-JΚª—Q‚a|`ΟΘψΙ “Η\q§–σ9Ά–ήV‚thεC†W9uΟLϊ`η<vF§Ί΄OEfΏΛ_§‰ΒΚ›IΫό­―•ΣZtziΉ#?^yΗ~γΗ9ΕπvΥ§cπ—μs­Ω®Άίl|[ρ&ΛVxS¦Cγ+Ν+CΊπΫί²β%Ί—J°ρvh.θ·©'v±Κωλφ£ύ—~ώΨίΌ_πγ†ΧΔ^ρ}ª$Ύ[‹}WDΥm$:O4ν¬ϊ~±¤^¤WV—(¥X«Αp“ZO<zΩN.8Lf5xΒΆmtµϊ«?ς¶ΊlyΥ!Ξ­mu[ΫtΦΏ―•Οςa±ρΖ–4‹{ΐ“^Iω+:π²pMΑ‰+Α
Έ‰SΉχQÿ
θÿ
Α0Ύ|6ύόϋl|RπnβOΏ#ΔΎρ‘οπΛαχΪnm4#α‹{ψδϋµβ›xΞΉw―Ϊ$7GJΎΣτλg[tΉ{―5ψUÿ
~ΞΎψ―iβ―‰΄—Δ/‰4½\jVΏ¬Ό'¥ψ:λX²q$:7‰|ak«jwΣιÒª5΅Xh——*H†ϊΟqΗμOό«φοψSÿ
ύΧΖ'‡τƒ®ΫΨιÿ
?gÿ
†6*–ΆΣΫD³Kx<¶·πί†΄λS©j²ΫάΨYω1£άOo·Μ³νCƒ—Ώ97'ΗGÒ[-›½}N&ΨT•KΉJνΫGg»µν¥―Ρ¤µΉόQÿ
ΑΘ?,~3ΑY~%hΠL—ϊgΑ
ό;ψbUIZ•¶ÿ
	6±
 νYaΤ<K$s!
ΚπάΤ_Ω?ώ	µ΅ώΨπm§<)αigγLΏ~+|sψk¨ΑclΊ®¥γ‡>)½²³Πκΐn^"πξ¨xnw£ώήR F)*ρ>0xΫΗώ&k―|Bψ›β½_Ζή0Φ&Ψ>Ϋ®λχ“jΆ”²[Ϊΐσ›{KHÿ
skg°$qΕτmÿ
ƒ~―4ΘΏΰ•³΄V
›Ο‰’_©δ-όίόNΧJCρΡ•·Θ'΅®Β—Τς¬2χTαZ’›vΥY{–nά©$ίÒΔÒΜ&±’P”ΉRƒz¥+­m~®ν|οΤÿ
;ΨOφ¦ψϋώΠÿ
hO‡ΦÒ'Ύx€sΓO%^!Ρ¦C¦ψ³ΒΆy-RΑ―-™¥Civ°έΌΛeΫώ¥_±§νµπφμψK£όXψβϋWΟ²΄oψ&βξΥ<iπλ] χρv²=ΝΔ7,vwY±Υ-•o4λ‹dΚÿ
›Ώό―ΰ^•ϋ,ΑSΏjοhφιΎΧΌzΏ|'cn]µ¶ρ?M²ρ―Ω­a*ª–Φ:–³¨ΨΑ-#µ»A‡μkϋVψηφXύ©>ό`ψOβ-SΓΪ•Ό)¥x§NΣοf·ΣΌiα=K]±±Χ|/β:'[MSOΏΣ¦8α½Qkr`Ό·][Ε(~]C4Λ΅YΙ,E8%-β­­Òλkω7ά*β*G'ΚTζ”®―hέ'h«kΛwί―—ϊ‰|tψπkφ™ψm«ό$ψρπχΓÿ
ώλmχ~ρΆΟWvΝζZ_ιΧHΡήiz³–kkϋ	νξbΫ%
μ‡γΏΩ›ώ	ÿ
ϊύ‘|fΏ>
~Οz—γ»w•΄―ψ›RΦ<k¬ψ}fή|97‰o5΄νΊÒ­νoΪxdΊx‘ΏGΥΔ±E2‚XÒES’TH΅φ’@9»υ9ΰwRsΧό>Ή
sψ7Δα”θF¤ Άμγ­¤΄O}Wυ΅ι8Βj2”μΊWΦΝ_µΎwκwgΣωOΓ±λM
σνεKEyÒnRζi6έΫλςΠ ©#b§Ύ{ϊΫωf£§'ήί§Χÿ
]kEµR6vχ“όWωώAΩ§}½l“gόδΤÿ
ΰ§_¶δ—Όh~=x¶ΝΰώζΥν΅‰w›QU
8―Μ£§*9ςΪh‰δ¦•―b:}op?Oÿ
ΰ«Ϋ.ÿ
ΰ¦_¶»Ϊ/Η(Iδe5$‰³λΈ#σ―–ξtM>ϊέ"Ξ…UVHΦ91Ργ
έG<ΰΰWλΈ3¬Υ8½·½―ηΩφλ¥Ξ:Ω‚ΒΟ•^*φ²oMΊlϊ~Gφmÿ
Bÿ
‚?~Α΄—όΟΰηΗΪΰl~%xΗWρτΊu_ψβΗν~‘γmoFÒm³΄Xi‹­„1K$’R¥¤’F$ΧτIπ+ώ	Ρϋ~ΝWΠκÿ
f„ή
Χ­Β<K†­υΒΙΚΌ>!ρΥuhφχQ?\±ΙΟΚπB|?ÿ
§ύ“¬•Jωήρ΅'ΟΎ΅ρ#Ζe³“ΥeLg 

ύ|8#ΣύωλψΧΐfΩ–*άEΧ«Bn1‚“I$’έigη­¥VJ¤ι¦εο]ων§¦ΎZl8νΰ
:``θ
u=
ώt”Q_=9Κ£ζ›mχgJJ*ΙYP:τοR=‰Ϊ(®"x¦)΅•Y%‚xΦheΥƒ$‘Έ(κΓ†VJεH ΰώΑdΏΰ›ÿ
±^―ϋ~Χÿ
tοΩΟα‡~5ψGα‹<m όBπΏ‡νό5®AβM.ΎMVετCcυΣK-μ3΄΅Ωdά cχ±Xΰ―9 ϊÿ
υ‡α_ÿ
ΑVOÿ
Τύ·•†sϋ8|Lγ―#ΓχL:υδίΫG£—b14ρTcN¬΅N)ΪM-βµο§έ£ΈTΧ½ΚέΣχ’i5mξιkmςv?ΘΡΏ΄Fφ…Ο*:±Ο<υξ=ΙτΙϊyÿ
iψπΫφÿ
‚ώΞΎ7θγ―†Ύ+Χυτρ…uΫλ}?W:o„uέ[M‚υ¬.m.^Υ5++I§.;…Γ8’‘σσΓΊ=Ύ―©ΩΪ\!eί.ά©dH·m¨ΛmδvΞ;ϋwÿ
@πφ•¥ΑRΏd§Σ,γAβοξ”—i
x—9yΫ·b
ΟηϊuJU^¥e6iJI¶τε§}›ΣΎΧτ918ΚQµ.HσΝ¤¥ΗέΥ$φΏ–ϊ/]?Ρΰ·μΫπφnπϊx_ΰ?Αÿ
‡ί
tM£Μ²πW†tΝ®X<Λϋ»XςώR	f–ςβiY‰l’kΩ½ϋϊώ9ό=ÿ
ζ$nqώ
m~Y‹ΔΦ―R^Ò¤§m.Ϋwω»»|ώύΞ¨Ζ1V²ύzνζQEq(Ά
(Ά
PHϊzv?QA'―NάqώM%Ζ?Oηύ)§ΚΣµμΧυύ\w{&Χ_αΫNΗρ5ÿ
`ώΡ>9‡Ηί³7μΏe¨ίιÿ
ΑΊΖ?iπM4~)ρίοό5Ά. ±°Kθό=eΆήΛiªΙou«K0.Β–ίxκΧΓ^2π|-Ψ|Iαox/ΔZP][RΡ<C§ήΫ*G­4)ΐ`  δ?ΡΟώ
λÿ
™πόοα―…„~$αΗΗ/…ΏΪ?π­ώ ½ΤtΙτΝ^H&Τό%β‹δ‚βλFΌΉ·κΞβΪXξ΄»Ρ-ΔK<w76ςώ$ώΔ?πkί|ρίΑίΏkO‹ώρ7ΓΏ‡ή"°ρE—Γ‡φzΣάψίTΡn#ΏÒ!ρ&­«Ae™αΤ½‚ήηSΣμ­onυ4C`nl"‘δ“οςΪ†.P•XΑ'οΕ­[vµ­m»οδ®„©Rtάo«ήνήν7um―εkιάύKÿ
ƒ„|	{ρwώαρcΔ“Y΄ΊΏƒGΑ ›¥¶6ώ/πΝ²T°ΜB;\ΤlH‡ΙGXdσ»π‰ν`Σ--%"βΩ\Ϋi
|¬Έ}ΩΐVMΈ*·'λΛρΰΧ€>?|ψπβ6‘ύ¥πϋβw‚υψ“O¶e·tVΙ­Ί|δk{§Ώ“{§LªΖΪζΪ	”1'ψΌΥÿ
ΰÒ―‘|AΊ¶πηνgπδ|+:ΉkWUπ_δρδ>y™£[ΞX΄ZΪfXµΛ;KΉ–Kb«7ΓΣUάQ”ikθN»τΫ²6ΔaªJmΙ¨;§®φΦΪ[MZςήΗνχόέϋIόBύ΅`-6Ϋβ­6½¨|ρζ»π£HΧo^I―5ι:v•ªθK<›βγN³ΥΣMσήG™΅¶‡Ν%Ι5ϋ›“Η§=ΈΖ:ΰc'©ΗNNqςμMϋό,ύ…gώΟ?	`Ί“DπιΈΤuΝ{S‘%Χ<_β½SdΊÿ
µ©βH£7Ί¥Δh"¶‚8ν4Ν>-2Ζm,αSυ¨ιλολο_)β)Τ―RTZJRmΩθ®ΣιgΧ¶»φ;0π•:Q‹mι­ϊνoE§ό>ΰ
g’?•-W™―–ίωQ@Q@Q@Q@Q@_ϊ²
(¤}GωγΤT4γkkmόϋuω/-£nÿ
Χ^―ζ-QV ―ΰ ÿ
„Α±ρLΩχoμλ?ς3_}WΐΏπPωΌÿ
c\Γ]6δώ}λ―όxφύn­·],g[ψs·TΏ4~Vξqκ;rwgυ―j‰ιόι}=ΏΔλHΓ ϊμΥ΄NΧΎ»¥}lΎzcMoύ=/σξ|…ϋO k―z‹]T~rΫ7Ϋ?ζΏΌr3γ/―χuYΑΟϋ©ίΏ¶>Ύ±΄ΈΕη„O_τmLgΣ2ΑΗςλυΟjόyρÒψMΌJ{ZΰώjΣ½zψgh+oιΥ­τΥοΫ§RΧ.ΧwΊν¶½΄·}½OÒψ#Z–ύΎΎ
?ζρΏψEo?—λ_Ϋm_πF­«ϋ|ό-μO‡Ύ υÿ
„bοϊΞΏ¶cΤύM|ώ}ώρ»jέ¬–;ψO†β_ϊJσÿ
/ΤJ(ΆΎtλ
(Ά€
(Ά“vωιύ]ΐ(Άa§Οώώΰϊ~?—jZLsΟN1νΤ™ό/ϊκΏ―λ@ψΫφζ'ώΥΆρƒβν'―΄7gΛÿ
Υίρϋx'ΫύύUϊϋϋtcώέ‰η'Ζ:@ρλ¨π―Ηί_σάW·€MΑυΡmΫOΤα«όi…~H°Αη¨#ρΗÿ
_π―ύ΅Θ?υ^9σμGÿ
…
c>yό=Ώ―ÿ
_ΫάΧ‡ώΡ
ΗπΟTnΉ»°_NωΟ?AΣΓ§«KIΩ½οΪϋΛαΧSρ‡γΖ€Iημ“ώ8uό±λ^cπΘƒρCα¨ÿ
ª…ΰ¦Τιgwγυ―MψδGΪ΄¶Sϋΰο^}O__ΞΌ«α£²|PψpΚrWβ‚Θχ3iΛι^β_ΉαΣΡ%ώOώζώνΦο§®½ÒΚ¥¨τ†.ωÿ
–jΣή΄΄ΘH6¶ή¦ÿ
τΟλύΧηxγTÿ
ωΕ5hG}“ΧΝ-Ό‚(¬K
(Ά€
(ΆΏΧαύ Σ_ΓώQE
QE
QE
QE
QE
QE
QE
QKƒύzϋηιICWάiµªώΏ―λp¦±3Ο©ηϊτÿ
wωόλΓΪWΫ®MΤκ>ΝnFΠΗY”ηn!‚’w;―FX›¶‹M?Ϋ~«ς5£MΤ¶Ιλ·ΛλΉΣψwMvΆy7#{η“ΉυΫςςΰc9\η^“€
O©ύ2}‡¥
ƒcƒ\3¨Ή¥¥ÿ
―_]mcι(SφtβΊΫσόΏ«κ-QX·ΓςIώ_ζlQE›ςΧ/λKER
Ά(
Ά)ÿ
_—ωÿ
]
ªςHΑÿ
υωσ±U¤\“υώd}xΗ'ÒªΏOΥώ'ώΑτΧ――ή/$ςΈ9ιχιΗj±Qm;»„φΗ\ζ:sί¬΄εv£ζ»ϊwπF¶^ΧWωΏPΆ+1…QOmΏ­GΣϊΫ@(Ά@QE
QE5ςωόΌΧυψER
Ά(
¬]_I‡Sδη
ζ
dpx|`²“ƒ“cΫTUΒn-vόΏ²θgRf’_wwΣVτ<zζÒ{)ήαHuΙRy
κ@
«sίpθj
υCO·ΏΆ@=RLα‘€ 2~Έ<zσ^q¨iw:lΌHβ)ΤeXgΗ
;^ζ»!=tς~Miώ}ΌΟƒ”Òχ{υz-Φÿ
π	Ζ©_ρχιο_Ι'όπ'βg>ώΝί|%Άjχ‚>ψΣΖΦί[L‚{΄πδ4Ò΄[}Δ”0‡)aΦq§Λw$o³ήD]£Bηϊά
ƒΙΫΟ‚G®>ΏJ¥«i:O4ΫύZΣtύcHΤν¤²Τ΄½bΞίPΣ5IΤΗ5µέΤrΫOΡ—Y"7”€Κ@}lΏ<*•dΤ”Zn-ίv―ω+=?‚Q’rIµ¦ύlτƒ·ή…­5ÿ
κZG…<7g©kzΦΏ¨Xιz7‡τkYου=[TΤ'>ΒΒyξn®¦–8`‰΄’$dªόkφcρwμϋ
~Οώ!ΫCmγΝΓ:<ec.—―xΣ\Υ<Wu£;‚c{­=^&ςhΙKΛ)&B}·α―μϋό!ρ¤ώ~ΛΏόγζΉε<] ψ@µΧ­$Ήe{Al}4»K*·Ψά#FΓ_YK n£ tΖ@ϊcΎM{Ή¶}uΠ§{M·-R–»ήνµ¥Ό›9θaaΉΚ+™νΫ£Ύίªgς‘ÿ

ÿ
Αώ4~Ω>-ψϋTώΚ~³ρΔοx\xβWΓθο¬τ­gΕ>Σξ¦Όπή» M¨Og§\κΊ/Ϋ/τϋ­:βζή{Ϋ)l4–Lί’ΏπLψ7οφΏρWν1πλβνqπΓVψ3πOαw‰΄k:o‹/ty<IγέW@½MGIπΖ¥i§,:Tϊ…΄ΊΞ±¨h’ΪΩ¥έΕΙ6ίθ4¬TπqΨϋϋ~ηφelnάv9ΐΟψλΣ9ΕsQβM,?°χt“kµ­{-uI»θμ΅Μ΄—-²µτΣKφ].D0TTTaWΧε
G©94QEx3ªNS“Ό¤ξί™Ώo$—ά¬‚(¨
¤ςΗO…®υ»[XTΌ·7—1[@34’Jα@VΛόª[hκόGΏzÿ
8ίψ8ηφ‰ψε©ΑIώ+όώ"Ω|(πG…>[θΏ΄ÿ
kΊwƒlξuoιϊ¶§¨ΨήΑ¦\^ί]^Ν-έΥΕ¬³ΙςF%TDUυr|ΏϋG©F\¶Υµ{YYκΧK2g.HΉ4έ•ό—kυλ΅ω›ÿ
)ΦtΏÿ
ΑEl=BΤ-υ]Vύ£Ύ άiΪ•‹=¥νΈΧζΟµ6x¦€ΞΙ#£`•m¤gΑΌν¨¤+98ωPξ98ιΣ®3ό«?ΒΊnq§ωβΪ)n2L0|ÒIgbεέΫ]‰bΩ'!χWΉιώ
ΠF•έδªΧMΆIεΒ› yHΐ¶:‘Π`_²`°ήΖ„i©+BM―D΄ΧΏ¥¬|–3ªT›i®Y=Ν;knλoψtϊ6ΑZΝÿ
ΰ—ί²"[MΓλτΉDtf†νΌWβ	gEΉ°†RT‚~¦¨ qν‘ϊzχ―σMÿ
‚KώΠ?ΎΑBf?ό>ψ›γΐ>+ψwΑή8πU¦µw'„ΌE΅k2Ki{k¨ψ~y.4™¦ΔΦχΒΝ/­$S-­ΔR3=¥«πμ81θr:ύOσ5ωOeςΒcκNROΪΝΤΥi$­Υϊ>ύzφ[^5h(­M>©μώλ_³ΊΏfΡEσzέmn«ΏψόΟD(ΆήΞΪ―λϊτ¶·ν§]—&HΙΐ8νλΤνΈρqΦΏ,?ΰ±~|3ÿ
‚y~ΧρΟΔox{Δώ2ψ#γψSΒΪ‰4ΫOψ‡]ΧμMÒτύA7?ΪΪ³άOΈ­¥¬ D―,νJξΏ©aΟΠuπιΗl9οÿ
-ψ.§¨λπVΫϋFώϊυ4―ϊf“¦Gws5ΔZ~iα/G•RΘΡΫZDΖVH U;»…μO½ΓΈΕΑ9|Rµέ·‹Z­:kχ§¥Μ±`ξΣIzie―}ό­d~Xψ2hνµAq8h΅Kg«Νς3’ΎξG#ύcÿ
‚P|zψYπώ
ϋ8όWψΉβhΌ%πσΓ"Φÿ
·όKqeyyi£®­α]oH±Ή»Ξ‹…¶:…ν¬3N‘2ΐ²ω²β$r>π&™c¨κΆΘ#–¶•™e%”•dTΑδ'η<σϋEη‡<9+¦›¦‚±Ήσ68uRΈέHΙR[”wϊΟΥγ,4¨¶­8J7].’ω_gn:)ΔΗΫFMIΩ¦Ί«FΪωφo_Έÿ
U…_Ύ|tπ­Ώ>|BπΔ	ά±kΎΦ¬υ›!!
ζήαν%v΄ΉE`d¶ΈX§pτªώ/?ΰΥNκ_¶‡ks<ZΎψe~ΊjM ±]BίXρU¨½[PΖΊ{i|–ΈTσ0ªξΘª£ϋBη=2qτ―ΘspΉQRζ²½ϋήΦνΣΘϊl-ooIOkhτΡθkWÿ
qhΆρΞΆ(
Ά*nήΪ+υ½ήήZvΏ©ZZΫ·Ϋ^ή~ΊopΆ(jφ»Υko=?/ΧtHGÿ
«±Ο΅οϊqLΗ=σ’x'ΰΐυ#xΐΰ
}ύ¥DΉT’OK]λ·υήΫlsκgιΣ>”3υύτ8κ=GOΤS¨ªRΪMlΌΊtΏ—~Ίά€Ψκ;~Η
ΰqΗS“Ξ)Gυγ―Σχÿ
υÒΡQ+»λeΥ½ΫΡήώ_ΐ(Άiέ—βΥϋ_τίAΩ&•Ί«Ϋ[¦–ίω°Ά*yϊYυΫ¶Ίότ¶–έΩ•e¥“}m«ΎΪl­Ύÿ
πQEdQ@„γρχοονκJÿ
Χώxό¨ΏOλ§ω A'mκΟL}}ύ©Τ‡xις?J
Z@1Όϊώ΄PEP_ώίγwΌΌΘΝ+tτΣ¦ΧσόkοψφύΘπOσΗόTχ®7_Ζ»0_Ζ^«ρ3«ό9i}ΛήNÿ
ωZP
NOCϊTDΰιVNΐυoθ==Ίώ•X‚=kήMέz―Ρ~It®ο³k/_λώό‘ϋL°ϋG„†96ϊϊ%°ώ§ιΐζΏ|tβ΄ρύ…&ψκ
ύ}ύ¦‹Ο	/\[jΔ¤¶ Σÿ
Υ_>:γΖ^"nΗT”φλ²<ϊϊλΦΓί•_k~?S&®γεwω}ΗιόΏΫχα0Ξ?βEρρΗ„οΫ¦
ώΪSS_Δόµw~ίί
OeΠ> ·ηα+υÿ
Ω½+ϋk―ΟΧ“ο»WΧπ=/Γ?ρ~(Άωσ¨(ΆNύ-σωtλχ ώΏ@Ά*dΣέ§²ZtλϊΏ»p
(Ά«V΄ΣmzyΫώ
ÿ
0
(Ά¦WεzτύVή]ύ@ψΗφιÿ
’5cΗ_ι+ι’muό―Ημc υΗυÒΏ`n–ΰζι_¥–¥ώ5ω
ΨΛ@ϊρ?ΟOΞ½μΏXθνξτέ­6ξqV_½“ιe¦½“ύ¨ΡΤ}ExwνHψc¨ηίΨΞV=9γΛ½ΙH'πϊΧ‡~Ρ?u:}ΏOόxγση―°―NΉή—ΌΎ[ιωΏΈΚ_?>9τ―φÿ
BΈ“^]πΤgβΓrα?πaΉ%Σ?–:Χ¨όsέx|ωτπύβΧ™|3~'ό8>>πϊΕE¦ÿ
ΛΦ½ΔΪ£-4δ²~»Ώ=40’N>­'χ―λ©ώ•Vη6Φÿ
υΖ3ƒΤe―§ΣƒϋfZ†Ϋώ=­ΟBaÿ
γ‹ύsS}kσΌGρª‹τG―‚?αδ‚(¬J
(Ά€
(Ά€
(Ά€
(Ά¦RΪΫ»[ο_ίεά¨¥»vKΚύΌuύlQE=R~›ιΥiΦήνσ"ÒzυΣΏυΫΡ…QJOλk%ÿ
Ϊα%kjυόoηkύαEU’QE
QE/—υ§υίτzi―ω/ΓΦÿ
3p§ύEC	μ9'Πzx?)'ιΧΉύ1ω})9&’8ΆRΟ#…P<G?CΟNέ
δ+ΪϊξτΎϋ-:[τέ”£ΜÒ]RWΥ+ιδÿ
Kώ.Ν…„ΊΒ[Εΐά²ΰβ$Δϊσ…XπΎ£Υm­b³‚+hF!·ύςcζnu3T4m6=:ΤG…3Θ7\IKα΅Eηhχγ
βµλ’¬ν}uίΞχΣ¶Ϊ=:ZΪoνα0κ1Ώ]5}6ΧN―Χ§{FF?Ο·λƒψSέÿ
‡τΟ=*J+•6“]υωhz[QH( ( ( ( Ά“ηπφ#τλς*ZQωκ9ª‡ΔΎ‘2ιΩέ;z?λfKE4B:τΟιΨdÿ
Σ«U²ΎφΩz Ά*%nd¶³OΛ§–KΛρΈΒ(¤ήΦςλkι_]=UtQKOλεύηm—o@(Ά
(ΆϋΏαύWυχ€QEmnϊkΫDΧ^›ZER
Ά(dϋ~=½ΗQPΝ71΄3ΆΙ`•a¤τηƒάG9#=qΆΦΊiχiζΏ;α^κιτι―_SΟ5oΛg™νΛl2YAΛΒ2Iχuΐά23Χ5Μ†έΟ~„>γ¨?^½kΪHΘΑδ}υυϊΧ1«ψzΌάΪ(†λ8Ν€z¨
+9οΣ5Σµηη―NέΏΛ^―ΛΔ`δ―(?;y+m¦φÿ
†κόÿ
'Τ§Κ’¤Έ[Y+ή£Αg φ==κ:Ϊ-ί~Ίωλo›<Κ‰Ηέq{hώ~«―PΆ+cΆ(
Ά(
μO¦\wδsΣΠgάq_ζ[ÿ
¨Oψ+ν¥HS ό$d%Hσ
ψkαΠεIηo]r»”Aδÿ
M,γ‘ώΟ―QΪΏ-oίψ#ημoÿ
iόMρcΒWήψΙ‘¤|hπΪι.·¶²Wm®·m,w?4λ7„¶ΦlgΈ†ΠΩ^Ω†,=άƒ0¥ΖsTMσςΗÒνkevχνϊ3:ΡsƒI»¤μ»½=ύ~ώ‡ω|x{[DΕ[χ–ςd:¶\sσR½Tη§LwΙγUς¶Eqb©Τ+E ΐμ3ίQ½8¨?kÿ
ƒ·²ΧνKρίφu‹Δ±x¶ƒΏuοΪψ•,–Θλvz]ΐ[=Fk/:qiq=Ό½Τ	4©ΐ•ΩB“δώΠµoψƒΓ¶7ήu—«k>™qD²Εm¨κΦ²ΝmΈί,qΘνu1o
>T‘_ªRΖ©ÒΌ#'	®e$µ}toϊΣ_¶^•κV”`M«λ­Όµσκ½ΥΟψ$\/γOψ)·μsai+Z|aΣ5w1DΘ†=#OΏΤ™”0'b­¤#v¶Υjÿ
Q†εÿ
΄µ~XώΐίπI_Ψ―φ·ποΔƒnu?—ή±µ»ψ­γRψΖH5[('Τ—Ni|Γ©~Ν¶κ?ιzY’ΦÒΌ1Cϊ›
γ¦δ8―Ν8—0§ΔΗ’ιÒ#Ώ[YΑΧ―¥C†JIέTQjΛK$µοgΏONΆQEσ'xQE
„ηΊgσνιΑ=Ή―ςσÿ
‚νψCΔήÿ
‚―~Υ7ή#Π5MρgτψgRΤ΄λΛ=?ΔZ£αM΅Υ4KΛRΫR³ωφ’\ZΙ4Q]ΪέZΘΛ<"¨e~sÿ
ΑT>|ψεϋ~Òρoαο†Όk7€>|Gρ―‚µ_M·›Xπ·<?α=[PÒυκα?΄t«ΈnαΩΟΜ€Γp³BΟ{Ή?κXΘ4›η”V«ϊςιεzj­9E·{]iΣDϊ~-­uΏCό΄mµY­ξv3.C&ÒW©RPηΑλΣV‹x¦hβ1Λ}9mekΙ•X|¤n=zG@sWƒC…„Jέ±…\ξbΨΰs’y# $cÒΏqΰΏ²gΓOΪgώ
α|zψs§όBψwiΰxχΓ^"Y¤Ònu.ΚÒ§Ώ²Hζn\ξ¶ΈcfηG(ΏM«rSφήΟέ„9ή―•$“zow·]vΠς*ΰ(¥δ¥;¥Ω&Ϋiy;]τOΙξ~ΧΑ¨¥w―~Χ>5^ Ί?ΓOΪλip4«N;ÿ
ί^ι–ΊƒΔ¶·Φvνgqyo}΄7–*lΏ³ΊΰΎό-ψqπ{ΓwΎψ#Βίό!¤Ηεiήπ†‹§θZ=‚ ²Σ ·ƒq+™&dσdmΖFf;«½―Λ3jΗbεU+'mύέ—EσΦΗ«†£μ)ς½Ϋ»]•φΡν¦/QEδEPEPEPET6ξ—¥ώvΏΛΆ}ΛI$ά·ιψ>«―κQEYEVRRΪν―=΄Iώ—λσw5‹$τ[k{/ύ¤Ο?η―ω>”΄S³χVΎmmkέkεης2nαEPβέ•οΎχςλ―ιΤÒ2IkΞφ²ωΐέ°Ά*φµ­mµω%ύuΨΜ(ÿ
?ηÿ
­E!8ÿ
?ΟΠzKvΏ®έΓqsά~_¦}?:bgwθz{ÿ
IΤr?ÿ
QΫόγµ ϊÿ
/aνΟ~w©²m5mξυνg·}}7Ύ¥'dΧΟOΣςEU’QE
QE
π'όγΑ^Ζ|Ktzυ"Β_ώ(ϊλοΊψώ

ίρD|?©ρ=ΰΙΗ#ϋ=ϋύGÿ
\ΧVώϊ+»_υχ3:®Τεςόÿ
‚~WδγΰgΫλI@δ¥#t?C_@ξvΪί}—λΏ©ζ»»»iΧo/ό;σ>Eύ¦\CΒC¨6΅ηΞ¶ό?―γ_9lψΗΔƒΣTτώxυ―ΧΟΪpν/c
}ƒS'ά‰νϊϊvΟB:ό|ρΗό#?ήΤζ#ίε―σοΪ½l7½—[kώ}α‰?KΰΚ_φϊψb9ω<5ρΏα[ΟώΏαϊmόMΑ0oΟ†g§όRÿ
?ρο
ή(_Ώ¶SΤΧkVgΙΎ-ιo>ϋτwξΒόÿ
θ‚(―:‚( 
€x4QE'ΣόνΫοϋφΎΰQE0
A0όϊzRΡQ7¥»ÿ
ΐβΏΫΌψSziτ9ι]ϊfΛRΏ sΟι~ ώ^ύΐν_°·VΑΝ8Τα¦qΥm―qΑΟεÒΏΑ8υ5ξeΝ*Mk~[kÒκ;v}ώο5ΕY>yo­»lÒWωka+ΒΏhΆαZ_―Poτόo4θ{­x?ν‘πΪτƒψX~'ÿ
[ό+Τ§~uΊΫO»½ÿ
―-¥¤_ΛT~6όqLέψ|φw?λª~Ή'σΝyΓn>&ό8ΗSγο~Ύ$Σ3OΛ¥z‡ΖΧηA-.zϋKΰωΕygΓΖΫρ3αΙ^Ώπ°<γβm/{cθx―uÿ
ώάώ»ϊώiigΫ_Εy~«[v?ÒΆί?c³'kx§T_σϊTµ·όyΩηώ} ÿ
ΡHK_β?Sό_Ά=|ÿ
$QEc―ΛώώΰPQE
QE
S@lςG\ÿ
υΉνώτκ(
Ά*.ΫZ5ΥνµΧWm;ΫΚνdέΣ½ΏKιλmύ|‚(«#ªωyϊ…QR“^ΊvKMφ³κϊΑmίeeΫδ—ιωά(ΆnϊY_Ύ»‚(¦E΄›KV4›i.ΏΧΟΠQƒ©8
u'sΤρή»ÿ
θ¦Ò1{rΏιέ#!Cσ)<pηίuΐώΡΓ•ΏΊBWƒoqΈƒ5Η\Ζ7ΰδφΖ:}?Οÿ
^ΉjΤ¶ªΟ­―§K?Υwυ±λα0II-›Wο¦ϊώWγϊζυω¥ΆΈΫm·άυγ’V·edQE!…Q@Q@Q@QBώΏ« 
(ΆΦΧNΞÿ
—ωL|qΑÿ
8ÿ
?\Sκ):τ=ΏΟΠwόiΓY//ψoλό„ÿ
+ΏΉ=όµΧGθ06XBηΛσ«T3‡#ιΐγΧά{dΪ\΄ε·υ¶ώC[+mΠ(ΆΝ»Ώ=5ω.·{wίΏQE·gΫΟ²^—ό€Ά)
QE
QE¬cΧΙm§gίόµω
QEGmt·}vσΡi}5ΫδQKM-ΏέΫ­τλ®δQCώΎδER
Ά)¦ΧυιώKξIθΚWΊ}­όF)γϋ®<©ρƒάp+ΟυάΨ–xΞYGΞΈΞ(κ@9δr2+ΣϊΗςδRPzηΏΧΧ―zθ…T—ΌολίOΓ»ΫªHε­†„Ò²Υι[—¥Ο	ΖyAΰƒθG­-z6©αΫ[ΰÒ[ª[\γAµX‘όJ1Η©\cΧ’Oya}§¶.!bΉ8‘pceΓγ Ήμ;ΧL*σ-―·–ÿ
/ςσG‹_:RψtµύvΪέuΫKy¨£―?ηÒΦλO=­wλΣΉΘQE?λϊώ»€SΠΰχκ20OγξN	¶1΅•, —Σ#¨=Gςÿ
υj©§νiΙ+ΈΙtΏUo»ΟO"dΪ‹ktς}ÿ
‚ªΨΖίπTΫ4Λ:ΏνβbAQ°†{w ƒχ•·‚wdzη―΄ bΧ<8!ω~!πώΝ „kxΗ`FΣWΣπU¶Xÿ
ΰ§Ώ¶qΟάύ ΌN	'ε6K’yΰ`ηθNqΝ|Νe,Qλ‡FTΧτ'b¬§5;FlF
ώYιώΥ—9<Ί>ξΒνÿ
+jΝ½ήΛσ>w0©)VmΩ«>ΛαΥ/-μ®ο€™Ϋΐ>g9sΰÿ
$υoμ{<ϋjκΎµΚxγ“αο$WWWπ‡†δWVRθφl®l‚ΥΥ@#zr:ώuψξ6X¬Cqvφ²IΩ«λkέ«?+t=Ϊ²¦“ZA-ϋ%ώh( ρΧ―W)ΈQE
WΘίπP!ΨWφΊ'ÿ
³ΟΕd8τ“Αϊ¬x?RΓΫ}λλω#ώ

Aύ…ÿ
ku$qϋ>όR'w@…5&9η°ίΜuΰuΕΠ[^¤WΟ™?»Gr*;BKΊ·βΏ[~[΄’η€­ΆώρΜH\[ΒΩC:η([‘‘ΗφΖ8―ιOώ΄uoψ(άi±Kƒ_¤Cί΄ςΨ{ρϊWσgΰ—uvΐ"'ΘΐΞx8η±τ―ή_ψ!Η„Ώ³§νΧΕ_Ό9πΫΐ:wΒΏιϊ‰<Mq5¶.µkXμ¬ΣΘ†y¦»ΈTAo3I)Vύ_NrΛk*qζ”¨4’M·x-–»΅σΈ‰Ιb©6τS§{7µγ{«ΫdΦ›j£a~Hιά“γ‡Σ·'u~xοώ#ÿ
‚gxBςk=3βWό|b•γ7ψaβϋ»6ΨΨ-Φµe΅Γ,d©ΨΡ±V η§1αοψ9ώ	«­^Γg―|dπΒJΚ®ό'Φ%.ω_G½Φ.Φ0Hf)hδ c·#ω“Ισ{ΛUί]bÿ
=­υ=µ‹Γέ§Q-tζMi§λÿ
®ΏΎWΗ?ΰ΅±Wν8φφ?hΏ‡/ΦnR7ΓΫCρ9i2VαΟC¥kFbAB‹dHΑ8ΑφAη{ΩΖ3ΤpFAγk¶‡v­Jp~i®ίηλ£7…Ju>	Ζ]ti»w¶φσ°”QEr¶Σψn»ά°Ά(“²ΣΠqWΧω Ά)sμ·z_πΏΟξH®FήΦ^ΏπtοΦήaEU^ϋ~—ι¦ΊuΧ]=HjΝ®ΑERm¦Ί-―ίÒΫkά(ªς‚( ?―@Ά)].«οC³{&ώAER“²}ΥΏ1Yφ
B3λψwφ>Τ΄Vkήwzυzv·Eχ
PύTRGςÿ
υU¶Σ]¶K¶ΧΫώ½6~΄ΠSΓ?‘φφ§S@Η'―Χ‘νξ=ΏbνIEΪΦήΦοηn€:(«
Ά*]ΫΊ]ώ]½@+σοώ
Ο‚>σ‚<Sw{ις~‡όΰWθ%~|ΑB	πύ7Xÿ
Αdη?Lπk³®"+Ξέ7mυΉoαΛKνω­?®ηεΆ”{uόθsΗΧÿ
ΧHΏwσνΟqϊ~C¨η8Ί>Ώ€ν^ϋwmχ<»οηΏυκ|‹ϋNφίζΛUφϋE―JόzρΞ?α0ρµ9Gδ‘Χμ'ν<	Ύπv:-W?_΄[ώΖ
όxρζWΖ^"?βk7β6Gνύ?φpEµσΏEdοΥοεÿ
cψY~Qÿ
ƒχ£τΛώΑσ~ί_ϋΕ/ρÿ
πΝΡ?ΛώΩΟύ{Χρ/ÿ
[ ώί‡ύJX}α”γϋΔώΏ¶©1Έγόÿ
^λΝ|ξ|Χµ¥kό2_}·ςϋ®ΧCΡΒόWϋMΫεψgύ]”QE|σ’[³¤(ΆwqψsƒιΟ~zf—2ΊI«?_—υω
ϊ(£όÿ
ΛιC{w¶–WΧMΌ·½Ϊ
Άύ}¨¬ωε§υ_ψ
¦d’qΠτθAΟΤ΄γώzγΣ·\ÿ
†iΌ‚Ήυ®rNGαΧΉ=“mούtύ¥~ί5―ζ»ό®|[ϋw|Ò$γ-1}pM¥ριτ_ΞΏ!,{‚ιάη?ηύ}ύ»ΗόYΝ,ÿ
Τη¦}¬υΗβr}ρ_UτiίΊWΧ­—ιn‡Uj’σ³ϋΧω…xOν§ώ¥η‹ϋρΘύγƒύ?θkήdΧόώ†Ό/φγαρ΄tÿ
ύslΞ½J_έWΛ]Ώΰτ±ώςόΡψΏρΔνΌΠAιφ[―ωkΏ#_nυεΫ?>γ¨ρχƒ?ψ©΄Όφό?Q^¥ρΜn»Πqÿ
>·λΆυ³τϊW–ό:Rώ7tροƒϋmρHυΗ¶:χnΥ¦ΠΣΝ4½^½tόNZ%¶®ίύ;m¥μ·ÿ
Ksώ‰iωχ‡ÿ
E§Ò¤¨νω³΄'―ΩΰύbCίθ1RWη8†ώ±4έ¶½χ½­ώZyiΨφ ­%―Ήύ%0Ά+&ÒκΏ§ΫοΧ§™_ÒσΨ(Άιώ―ωιΧ¥ΐ(ΆηόϋCC’M.ÿ
ΧυσhΆ‡6M?KώΏάQWu¦©ίkω[Λ~¶ήÿ
€QE0
(Ά£ϋo§U®ΧZυΥ―Ώ®ΤΥ’wί¥Ώ―ΏΣ£
(Ά‡%uΏΙ«kήΟ§υtHQEγ­9;vλϊh½όEsi­ϋ|χÿ
θÒxD{ΙξιJΪΖw"=Α$pqΟ]ωd`.…΅µλ-Νδem
©Θi›―Oωη‘Ξxo\W΅*ª*Ά(D@T8ΫςχΞ3\ς’]uώ›ΏΘυ0ΈW6¥+Ytϋ¶κΎOΡάP@UUFF
P:


qEW¤δξÿ
―ΕΚJ)%²
(Ά¤aEPEPEPESΣλ§ϋÿ
O@(Ά@QEU―moχmeηo$ΎώΘ
†NΉ9ΗΛΟn£ςλÿ
Χ©ª9
+‚3ψς9§®?Βι%ηϊκΏOψreΣΞρϋΧ›]†(Λg{uΐτ8υχ©κ0§vxψννΖ?ΐσΧ’©Ύg¬’{χioέiζRΩ~Ύ‹_έΩ°Ά*5ΎφΫ[τÒέ}?¤EPυ·ό7D»ÿ
[ϊER
Ά(
Ά+dμ•ήιzτσϋÿ
«EVOWς_—ΟϊμERτÿ
 
(Ά­jΦ¶Ϋ®ÿ
›ÿ
Vλk (ΆΎUλ·αo?-wpQY5gnΐQE#)οςÿ
0¨e†9Ρ£–5tlξWΨ‚;g¨#=ΘΑλ5Άs[-5ν¶›όί ¦”’Rwέ½ήÿ
Φ¶ςgªxaFfΣ\‚M»³rBυm1$πAδΝϊ;#ZΟΉN
Ι9ν†^ΰ€qΙξAΝ{!Py#'ΦΊGk5?»w«ιϊugL9»―w­¬φΎχί_ΓΜς1azq‹Yωιϋ¶ÿ
>†ΦΉ'μ—¨Γ8φιÿ
†zW¬?Λ§_ΟOΛπ¬mgYΣ<?¤κZξµ{m¥ι=…ζ©ªjw’¥½¥†ao%ΥεεΝΔ›c‚x#yd’WTERΔ¨Te)ΙF1ΌΛ}tI%kΏC	ΰa9ΚiF+[t²Wώ_—ω_ªήΩhmξ³βΛ=EΣmδΌΤυbκ7KΣ¬ΰRΣέ^ί]Ι­­Ό(’Ν4©qμΑrGσϋ`ÿ
ΑΚ²§ΐύgYπμΛα-Kφ¤ρΞ“-Νÿ
‰¬υ&πΒ-+R‚I tΔΣΪέκ~)[iγmοαύ4i—*Ϊkn­½?ψ,οόΗγ?νηρ3ΖΎψΏTπμyα}jϋAΣt}β]?TψΚt«Ήm$ρG‹―­Ω'—Γϊ„±4ϊ‡#t³[#ζ¥Υμ‘­β_† :4|€°λΈ¶ή$pqΓy$£ΏHΘΈiN„1Ϋ§&`΄¶ΚΦ]/ί·Μω|ΓμozΙhµξ–―O½&ν}{O~ΠuΪγ‡ΔοΎ"π7tOόUρn¥γ/C¦ιΧ7ΦVΪ–¤κ^8kW“Η+";†‘Ήn<fη_Υg`fΈEe`θ-ν,­„nΏuAoΒΈX¤TAτoNΣdΥ/νμ ΌΈrƒΎΥΖ]ϊƒ…\–η<tΕ}υ*’…*wPIFΟUΆµέώ^[ήΘω‰ΚRr”υmέ5ΣηΣϊςGΩ_?ΰ¦ί·ίΑ'°Ώj6V:h…-t]kY_θ‘ΑVίΩ^$ƒSµς/—εª*μΔ`€A»_±―όωγ½VΡ|#ϋlxOρ>…pπΩέόUψq§Η¤λZ»¤cQΦ|)ώΛΤ _}ΟφYΣ§QΎHγΈ`°ζ›ώ…›G†½Έ2‚ΘUOCςNyυ5ΕλώΎÒα’xΨ]ΐ™,Q
Κ§p+’Κ[FαΣΌ£γV4δ®η{ΚΦwο―­­ςµQΔΥ¥(ΎvβΧέh’z;θ»[²Ήώ²?>3ό-ύ¤~h_ώ	xΟEψƒΰoΫ¬ϊ~³ \­Κ,„5•όZ~¥hΩςΖςnmδω^1ς–υ…°½θ,ξ:gύSϊρ‘§ππÿ
1Ώψ%gόίβό_γΎ›®Ϊέj%ψβϋϋM?γΓq$–†]!oψzέΨΑ§xΏΓθZξÒβ ‰ª[Ηq¥_β9mÿ
ΣηαΔο|fψwΰί5Ϋ_x#ΗΎΣ|OαnΑχΫ_ι:­²\ΫKχ³ª²ysΒΰIΡΛ^2+ςÿ
(Y^ρNT&ύΙφώμ·~ϊκµϋlª­jQrε¨’n=φΪΝίu§ο­ΜΓ§ήωuώύ>GΧqΣ4-…α<ΫNrbaόΐγί΅―PΑ%8δ\vό}Nο»ηΧzw'zωΧ;^οµΥύ5·γωΣΛSΩνkλ~έµΩ_ΝbtλΓ’-fΫΎ\vΟuοΫΎkπλώqÿ
ύΏeίΩ?γΐ―xζÒχγΟΖ…~%πg‚ώψzHυOZιχ\^ ρ,6σγΓ^‚9eήκnoJ4v\ΛΉWκ?ψ,Οό£Kÿ
‚m~ΙΏ΄FΣuÿ
'ΉπwΑ_ή2J’kςΫ†Τ|W{fΔ4ϊ7ƒν¦‡P»^"ΉΌ›LΣe’?ν
Γό±~'όOψ…ρΗή'ψ΅ρKΕΪοόyγ=Zσ[ρ'‰<A¨\_κ΅{+Λ>χElα-νΆ+om
GΌq@‘ΆύδςΕΚ8©¦΅	'ίήµ½λvΡμΫΊmµΧΔΜ\(ϋw}_¶‰$ν®ο¥μSΠu;ΓρLΒέµΉ•!vΝ&
`¬.&s#9—c[+	Ζκτ+‹ΛΛxη»tz‰ήή4·‚ίζHΒGσ?Κ~ό…ήbΩ'ΕΖyη=0=ÿ
―ώµήψk[PΒε¶°ΐ·w<`’lxιΐCΐΗ
p+υ$£ύ¥YYθ–«Χ^ΦΠωD=χί«ι²µώI¥ϊχΰ
ΐΐΘΘΔ;u¤c†?LcΣµ `Γ#ΠΞ¶΄¶mZΐ]
π5Β	Κΐ•X
NÒΫwg#Ο΄b΄Z$¬΄μΪΣN―Οη±Α-ωΫmµΧδR΄»ΏÒο-υ>ζοOΤ-$I­/¬ηΞφήhΫrKmwΗ<2©cG"ΰΐώ’ÿ
ΰ—π_o‰
5?|ύ―µ]gβΑ+«»}7Oψ‘4ϊ·Δ†‘ΞρΫΕ%ύΜ†KxZέ^xnZMWK·G{)n-Χμƒπξÿ
E¶»‡bΫBρ΄a=€(€
ΓζΊWx‡Γ’ι2™‘Z¶Bω™c—γGAqΟ.7-Γβ)8Τ¥]4¤ΦΧ³NφOώ
τdΠΔT£5%'Μ’Wέ]'ύ_―d®…υ+ΖΎΠό_αFΟΔρ6—a®x]Ρξÿ
NΥ΄}Nέ.luKHε¶Ή‚U–)!€<‚D4λγÿ
.³¬oώό‚Α³ΏπRMN=^οφ
ψ·β	/4Ή-/όIϋ;κz­Ιytι-ΦKΟ|5y<–M›®xjΨ±ϋ#E«XΐLÒΏ΄τ*άΰq£ƒΑύ:g<Χβ™Ζ¦]©JJΚχƒ]b³σο―E}Π2ΕKATSχ•”Φ›Ω=»>›Ώ=εgMΎςλ9ϊFÿ
αGφuÿ
όϊOÿ
~Ϋό+Φ€°τθ;ρ`zΘW’κ§ΡΫ¶ηχvΨυ\›Ί•―dίέwgίίδΩΧΓώ].?οΣδ)…θλiqÿ
~ÿ
‰―]ΐτ…AκOµ];Ϋd»wϋ¶ΉO/²Ώ>Λ[ό»|Φÿ
΅δ`½ÿ
Kϋσ'ÿ
Iφάγμ—·ϊ—υΗ¥zξΥτ•@μ?ύT*½cεΧηªÿ
?» –^¤µk·]Χ·[}ΧΨςOμϋοωτΈÿ
Ώ/ύWωqIφοωτΉÿ
Ώ2ρ5λƒς¥£Ϊ§ζÿ
Εχtτ—/ζjΦέ/+τΏ}|ΎG‘ÿ
gίΟ¥Ηύϊπ¦}σ86—λ*υμAωQ΄zΚmgΦχοήΛ·ή»wφjΣήΪέ?ΓΪΫkχyIύ}Οϊ%ΗτΙΟαΒhώΟΎ$²\sÿ
Ld
}~_ώ·½zή ό…ƒς¦κί[k§§Oψ?ε®‰eρΫ›gΦ>qό|ύδίΩ·ίσν7ύϊπÿ
>”ΩΧίσλ?ύϊ“ÿ
‰―ZΒϊΘP6φΫψbµo[]­¬——―[ώΚYzjίÒσ~/;Iύ}ÿ
>—χιÿ
ΒμϋοωτΈÿ
ΏOώυλ‡ρψΤd/ ΞpG$ΐψÿ
Z^ÒοTΫΣk?%Υ_ϊςΌΌΎφχΧήΊ~½――Θςo°_Ο¥Ούω“ÿ
‰¥}ρÿ
—KΖώΛ^―Σ'h#΅κ=»χιΘ­ξΐÿ
…W;θ¤¶½Ύ^{υ·δ/μτνyvμ»[ςΫ®ΧΡQύ}ÿ
>—χιÿ
Β“μίσηsÿ
~dÿ
βkΦBAΙ g?¦?Nύύ)BςΟτ? #°ώGΉΪi΄ξμΧ_λΠ?³I~/ΛΊ^{υϋ“>ψΛ¥ΑϊC'ÿ
IφοωσΉÿ
Ώρ5λ»8ΘUΗΰ_ZΰpΖ!Χ?2τφη―γaΝ?hο{K}½OΛ_ΔO.vΏ¥ώzωΏ&y7Ψ/ΏηΞηώόIÿ
ΔΡφήdΉη§ξdÿ
βkΥKG“™΅\9‘qΟ_β=;Τf{uk«P9›@zεÿ
QTε'gΥ[{iµφ–Ηω―ΧGιΏnΏ¦Χ<Ώϋ>ϋώ}.?οΣÿ
… ±½=-n?οΣÿ
…z[κZ\\Λ©ιΘ3ƒΊξΨc―o4ΠττªΟβ %υέ!=sf;uζcΌuΑ΅ΚMοϊu]Ό―ψύ—T—›^]lώηÿ
ΩΧΉμΣÿ
Σ'ώEGψz‘_ÿ
πQ&·πgΓ±,RGΏΕΐoBιnN29 γύ―qΤ9<cα(Α-β=`dν+^p%ΖsίooΜ―ψ)τ-wΒ΅Ò5]?Q–jRΜ¶wPΞΡΖt—PΞ±Θμ«»€HΑcƒƒ]XΙb"ΧuΊ~Mo®η./P“Z->υϊ»ν«κ΄?(
ω>€ΰ΅ΧΪ£©S;@8ού?Δπz
Θΰώηόγ5τ§ΜΚ-6ν¥ÿ
―CδoΪwyΰÒzύ‹VόGΪ-ψό7nkρΛΗψΏΔ,]NoαAΧΣ~UϋϋODZχΑΔg‹-X{ΗΕ§εωυ―Ηή,ρ$ΘRδ +Α>zwΟ=kΨΑΟάnΪΫNΪ[WχΫNέ¶Φθ¬Ώς?M?ΰQ5Ηνÿ
πεέ|ρ …@Y_Ι“ά€ϋzdWφκΪuρ#³τÿ
mκxι_Δwό3XÒό5ϋό?Υυ«Ψ4ν6όJk«¦Ω
5Η‡p©bΛΏ
}qωώέΟΖ_…ªθΝ›&‘ύOECόσ‘Ε|Ξ}6λΣQWJλε²ίΧΧEcήΛpªµ)IΚήϊΏ‹nϋλςΡ•Nz?εΦϋτÿ
ΤσΦlnÿ
Òqάf&ώ€ώU3|jψX2?α1ΣΊµΑώVÿ
 ªΝρΛα\d†ρ†y=#Ό?–-ϊς;_;.fΫ³½ΧGΥ―=•ÿ
/¦²ψ+>g{χ·oςwυΥ’ύ‚σµ΄Ηιÿ
ρ4}†σ΅¶}caύ*Ήψρπ¤tρu‡ύψΏ9ιά[/εBόyψP	έβλά}P#>Ωµ>ƒΧΎ:Ροi£z%ηφW’λΪΟMUΑ`)ίWΩjύ5ώ­«Φθ°l.Ηό»Λψ#δ?'Ψo?ηΪoϋφίαU_γοΒe$ΒYeυϋ>΅ƒ¥¨Ε1~>ό(οβΛ>{{π>™µ$cκ{}*o$ώΛnΛΏΟ¨σ~6νιεχω—~Εwÿ
>Σίώ}οώ}¦ÿ
ΎρνλUOΗ―…dx¶Δÿ
Ο@g	µ
vητ4Αροαοω¬”‚y0κλΘ³# γÒªοGªΫΏαtΏα­έ°4όνώ%εήΦσ¶Χ·¥Σex?εΪϋφΩώT}ο }aϊfίαUΗ…Θρ†=Lχÿ
1Ϋ½7ώίΒ0AΨqΨ[ίγίώ]\ϊqJο·U½ϊΫ£KΏλδWΤ΅kέoo³εΫΎΎΎΗΖ·ΜΑπcH2Fθ?α4Σ”–FmoOR0r¨8φ―ΗDsΣ'Ί‘Ξr9'άώ~Υϊÿ
ϋyόJπG>hϊW†µϋ}Nξ?i·rA
άΖVή;-H<§Ν…”;Ζ»w’‚R? Qφφ<`zΐώ― ΛΏ…ÿ
Ϊ:ϊ>ύοΡ#ΔΖRδªΤnτΏό7ί§_"κg>έÿ
#ώ5ΰÿ
΄ΟΓ;±Η:ϊHηςι^πOΣίÿ
ΥωϋWƒ~Ò`Β³Ί'κΊjg―-$ώGλRψÒΥϊ;mύW8gπ½/ÿ
~3όmPnt_²άÿ
θΥÿ
?Jσ?‡@ΒΚπ
9ΙρΧ„±€I?ρPiΔίΏ―ιΕz—ΖµΝΞƒeΊυÿ
X„~G·Υε~ΫΔ/άHΑ#‡ΖήI	ωR8µύ9έ‰μG9Ηπ―iΝ{ε–ϋ~G*^Σ–:«4ή­ω?Λµÿ
ÒΪΦΖνμ,[NCYΪ°>Sτ0΅γΤpiÿ
Ωχ§8µΈ$sύ>SΗjΣΡ~#|?“JΣ6ψΓΓ¬NfxΥ-&ή>0$$ΔTπpkj?ψ&^cρV‚ΐzjvΏόs<sz~›Χ©/kQΫy}Χkώtό°¥€‹¥MΉ_ά‹·fΤ[ΏλσK­ω/μλοωυÿ
Ϋ)?ªi±½mn?οΣδ+·-π£ÿ
«ρύΎ]FΥΞ1ÿ
-}ς9ώ•j-wD—υ}.Lγξί[ΈΑβ_σι\όνΪι­tςΫÒΪΫώζΩπΪύΊϊOΥ~tϋΠ3φ[Χ>άώt‚Ζπγύγϊc'ÿ
ό³^50ÿ
?¨]Βέ}1(ιάS–ςΑΘΩwlωΔXΟlm‘ηύ@¦η=7Σ¦]Ί_Ξαύoλ®Ί5}7Oόήθσaz?εΦγώόKύPR+Βp-g'ώΉ?ÿ
^¬$€ύΩa>Έ”Τr›tόcυ?_OÒ”¥-ω]ήÿ
ÒΏθ%—Ε?‹m·ςο§{i§vyWφuχόϊ\ί©?ψgΨo?ηΦγώύ?ÿ
^Ή°wπ$φυΟ­4ªσΑγηΧ'zτ©φ΄”-ΆήΪ½7ώ­ΧΦΎ΅ητΡv]mδϊvΨςccz:Ϊάϋdÿ
αH,―K[ƒτ‰ΟώΛ^±·―ωgιϊ}:@£®}r――=sυηλU)¶—Ήχ;φνωvκϊOφzmrΙΎ»zvΥυυλ«Ήε_Ωχίσιqÿ
~_ό8¤6£­¥Ηύω“ÿ
‰―Xώζ~„ÿ
υιΉ9ε0?λƒλΫί<χ
ΤϋEkYύΛσήίπε¬¶³¶ΫΩi¦ΚήΎVξΡεa½ςιqÿ
~dόΎν'Ψο;Ϊ\¬MώκωH
zdέωνΧ―γι"ΰρ΄qΟωΟΧόΰQΞ»~ΏΧήKΛ£me·U¦ό½ΏΰοΦΗ’ύσ―Ωn1λε?ÿ
Iφ+Ώωφώύ?ÿ
^»µ}?.Υτ•Ρyώζ%—Fÿ
}zωtΧΟ~η‘}οϋ4ÿ
χκN>Ώ.?ύu½£ψ~K™{Τ’te"']²JT“’§¤y ‚OnEwψƒς¥©”ΫΪύ7ίu―έuoΟcΆ–1wzΫ£ΡinΊνσμ¨UUFΥQΠ(θ°¥ΆΒJMΩ¶όίΆΧε{~G|bΆ¬ΎεΆ^ET=ÿ
Zώ%QH( ( ( ( (¦•ÿ
¥εηÿ
EV–µµνÿ
¶­―ªό―Σ¨Ηιύ}9§ι{Sι?Ξxκ:φÿ
υΒ§yEΏ/Ι>λ«ÿ
‡ΨM]_ ϊ(Ά'~έ|μμνΏ—γζeθQET–©ω«λΎ±]τωvQE[T®τ³ΥµΦ=υιδµ@QEG];Ϋξ·χµωφ(¥Σς^Χΰ€Ά(mΎ―ϊ·uϊϊESNνz«oδ»ωtΧτ(¥-ό¬Ώ%―Μ(΅6Σ]Ώ―ς
Ά\Ooÿ
_¥m{­7vόmϊ0\q¨μ£ωύ=λ>ηTΣ,Α7z¶ΠIσξ €:πξ:uβ΅Α·}?Φÿ
{tΊΊξ»οΣΉ~βξώ#ψΗwΪόa΅BWο+_ΐXuΪ®Ν8ξkΉψγπ¦ΠβOiÒpDq7NΏκβlϊdzq*”'u£ι²nλOΝ~DΉ¥Ϊίπί¥ÿ
«­Ex]Χν#πί!uλ«|'P~~­kΟ<‚F@σXwµ7ΒψCy-®άF6iMξΉ
Ν2τξ9τ·NROέ“τ_–Òς'ΪEθνχ§Ϊίηχn}!E|§?νmΰ„ΟΩ΄/άc¦ε±„®λ–#Χ΅όλ"_ΪλDέ‹	j―’ο/m<σo
0p:=I8Ϊ/Koκ·ώ·%Ξό5υµΎεώ^¶ϋ®Fxούÿ
[τϊΧσ½ÿ
+~ΨWÿ
³όλUψ}α=Vm+βνAβ[o„L¶’ωw6Ύ6Òk/Sc¤Θ“h6« ΄±/φπA ΥiΏkΈJ‘‚gLΪ΄γB[7Sκήη ―α#ώύ«µ_ÿ
µ—Αÿ
†&Σ΄ƒ?$Τÿ
²ΦΰΟρ'Δ}Cνw—°.n‹΅hΡ1–)hΔ„‡πR­™PγξΣ—;Vκ¬ÿ
ΰ―4–<μΧ¨ΰ§Κ½ι[eΣNΎ–ήέYόΣνE
(
 
£
`)Ζ1ΰzg#―=o„5%βm:S•o·$δ,ƒ!—#ΖJ“k6υψγΧ$υτΖMD&x¥IcbH0$ƒλΧκ0O ―Ωα%Ζ*Κ+–Ϊ=6¶ΫtÒÿ
™πUcν―{ίΟWmo·^»o©τ
uδc#yΑξ?τϊγ‡ΓWι¥k6W’.δI
>HIABFs’ η¨ΰuο^q΅λΡjvλΌ…ΉUgBqΞ2yWΑ'®ΓA=rnϋΌ£„8Ινοϊq]0iΙ5v“Υ$υ¶Ί~Ώ―—84Ϊ½»®νyό½4ξ}im5½ΜaβpΐξέΝΑ*Ωϋ¬©
‚G"’x"ue•‘”«ƒχJrΧ tγ9γ9―4jZR,+¶Uivp«’ªNFε\ΰd(ΡΉψ…¬ΝEΫΖΞLΕ	dΘ „Pε	Α§
δΦΎΥ-mk[w§MτΫΐη”]Ί>»}ΦΏ­‡β}>]rϊή
1Μ6tα_Pρ†ωv‘1Νnίπk7ν‡}γ…ίÿ
cOj―y¨ό)?_EΥΑ’eπ7‰.Ϋ_Ρ-‘Ιq…βζQεEo­Ηcΰ³JΣΘÒI&ω\’ξΫ²]‰άI8ξ	γ
Χκηό;γ®½πώ
#πsZΠ¦Yx»ΐ…¥Ζσi{ΉΆΌΦ±έGΔÒ,Z†i,)Ώ2«€¥r>o°pΖΰ+ΖΛΪΣz|V‹µϋi­—}Οo'®θβιNM¥)E5«ΊÒ/{hυ·ίf¨	Θ#<δ`τγΫςξ0O„¥°pGP0IΖOÿ
[πωνÿ
MρΎo±hNGΩnρώ“λύ:Eÿ
†¨ψ€©Σ<="ASor¤πGά0ί™δ~1μgiGα–¶κ―ΫΛkwϋÒ½Ό9[Έιί¦–ΣηήΧzXώ?ΰηΪOUψΗÿ
#ΧΎΕ©Ν?„g?ψSΐϊV%&ΞίΔ^!Òmόgβ«ΘβW0ύ®i5­6Βζ`«#&•nqόζ	§<g=ÿ
Lu?οsΪΏ±ÿ
Ϋÿ
ώwγ/ΪΫφψ»ϋLψ7φ‚Πό=β_‹(›Εz―„<]α+Ωτ½2νμ,μ#±Σµν/P–ε­V+R3q§;D22ΫF#Όoÿ
ύ½Ό+4£Γ¶_>"Ϊ®γώρ«i“Κξÿ
Άkϊ^QέHΒ‰H$q_¬dy–
•hS’KIΙ.‹tμ¶ΧKn|v7^u¥>W$ΫΥ^Λo+υΏnΪ‹+ΰϊcΣόÿ
*p%H ΰƒGPsώ|Χθ_‰?ΰ”πPΟ
F΅ϋ0ψξώ8KnΈπόFΏ»&6Συ	E ΈΘ
r
π/~Ηµw„χ~Ξτ„†’ηαΏή
ΚHlOk¦\Bΐς$Ϊ@Θ8ζ½θcpςÒιJR¶kΙΏ+Yίg¦Η*R³§%ΆµΥ—O^ÿ
΅ζρ”-τ€L£l
›ηΖF2Fα“Χ―uΕ]]	Θ!SάΖF8χιΘΝp·Ύ.Y»-ΗΓ?6’ƒ†[Ώx¦Ω<yΊJΓ’xµ§cαί:N#½πG‹&…@&πξ¶ƒ§ΚβΐΈ q†ΧΡM&“s‡ΚKG§Άλÿ
CΞ«„¨δδ£ΣαiωtΪΧmΫη}Ρ<δΓ:„FfPL‡ζ<cpx'8+»
ιs^ρ†u¦άCs=ΔmΓ$kµ‚^Pν ηοιδ¶z_ξWx®ΘKαύc
OlΙ#	!xνί·πWn[_ψΖι›eΏ…υωKΔuΗ^‚·ϊέ>[*΄νe¬¦Ό¶ί³oΛΟS“κµ/g-;ί}·»n»­|Ξ“ΰ§ΕόψΓπΧγ7ƒξη±ρΓoψΖd–Ò¤y΄MFΩm]ƒsδP½θΗΚ’e@UΫ?λ―πsβ6‹ρƒαOΓ―Ύ•'Π>#ψ#Βώ6Ò$VY΄ÿ
θ¶ZΝ ,¤‚Ικ¬ƒ9¤c'ό•<)ϋ'ώΣÿ
8|ϋ>ό]ΦΔ΅JNΎ
ρ•]Γ-φύVΖΚΐ/Sσά
psΟ'ύ?ΰ‘ίµΏƒ?πOοΩλα'ν¦κώψ—πχΓwώ½Ρ®£‡RΈ¶Π΄ύwTÿ
„Yn.4ωξmÒhό9&™Ϊ‰]­„+αƒ*~uΖ±£§J­)BU ωd£mSεΧE~φwΎ‡ΥπΫ­FΌ©Τ„£
‘voα‹VqμφvΫξλϋ::‘ι§αωRΧ‡GϋDό)”5ϋ‰γχΪmΪγ9
3ίΗάVΝ·Η…—X	γ9	βtΉƒΗ¤Px³ν“ωιΞοN¶λ§τώ~Gά6®­4•’W~Ko-―{ksΦ(®ΫβW€/
ϋ7‹τIΖ
ΤmΡq€‡ΈόλΆ·Χ΄Kµέm«ι·Ή†ϊΦLg¦vΚzφÿ
:Iφo¥ÿ
/ÒΕ;4—2ΣΑ_ώΪξkQMWG]ΚΑ”τe!γ=T‘ϊÿ
Jq u }iΪi[ΣmΥΊmwςμO*ι$ÿ
¥ώ~½ΎΕuιΞ:ΡQgΩλ·™qM=ΫMyΫμχςΣΡ}ΕRwχΗΧ¶y―·z¥ρ$Ò[tΥmϊόμίRΖI$p£K4‘Ε³Θι(Ι,Δ
9ηη¥p·Ε‡ϊ.αβΝ&n–κl‚]°•²	ΑuχρχΕ…ΏuM[P½VΊρN‡$σ=•Ύ•~φιilY(›IέοDTΡG&ζ3’A?4κ>ρ>‘#GªhZµ£΅lύªΖιAΪHoΗ΄ΩΙ€qΞk¦4Τ­Χn·¶Ϊ½=;µ½ΞiΤ•νΚΥ¶έvΧnφ·ΘύΤ?i…Φ$ªj—ΧΜ+g¦ά°ΘΞFω–η|έzΧ}ϋZψ"
VΟBρΩγ+gl§Σ“<¤ΙϋΌqΕ|
βDΚΊΊΖT£γlu΅σ¬ΕAοΗ€{γΨϊ8>θ©E8έοgvύ:zνΏΟe“ªτΊvΡμό»ν§άΌÒ>ήΊύ―­@?`πeΔ„π­uª ΗϋΛ©φ8;£Έύ­όLωϋ'…4x'3ή]JGaςƒprq›Χ°ω8=ΏQοοΖqώz•#¦?ÿ
§ZΩQƒwzήΧΥmι–ή{¤Oµ“ΪϊωYm}t~_θ}CqϋSόAtύΝ–nIΐ+e4'΅Μ—LxδgχΧ;qϋJ|TΈ$.―gh3ΐ¶Σ­”OΌI:u#§<Χ‚.ξqΟN½±ΣΈÿ
"„υ?^ηόώ?αZ*0κµΣΟ³ύ<φ^„:Ò¶―Ϋy.Κήkοφ‰Ύ>όW”sβΛΟ9ς­¬γ
`χXG®―±gψΡρJr|Οk
tΠΕa¶.ϊφν^mψηςώ€QιUμ΅Ϋςÿ
"%ZjήσωΏE}ι¶‡u/Ε_³
$ρ`ƒ‹ηLηΧfί§ΏeΙγοM3ΕΎ |“’uK¬η9ωΟ―AωgζHΟδG―ZƒiΟφΘδ~~ίΦ©R¦τi[ξνψΎ½ν`ilε{νο_¶Ϊ+vοςNύ*ρ,ƒ2kϊΫ2_TΌ9<γΝ™Η~υ”ϊ®©#6ύORnφιΉ$η;¤?O|f©Κ0sτηρτη¦qή΅‰Ιέέ†FN8γ―ÿ
_5J”.¬££½ϊτιω'Φβu'fΉ’Z4οnέ»i―΅iξξΘΛ]]>Ξϋ™ΫωΉÿ
Ò«4²6’CdrOΤ–΅σοώ‡ςώΏ…GTι$΄KOΏK~·Òϋiδ
rkY_ΡΎΛΏ_Ηρ’xήΐΌΓ‘$ύzς}My7Ε―λ"Σt4›fΌ’ÒςY¥|jR3Ζ»D3ΉΔkΦ)¤ΐ_Χ?\ώyΕ:MBi¤®¶όδeQ{h8s4¥Ύ―Ώό>½Ρρ|
ρ#υΒΗ^pCώ=³ψVtρLLCθzϋwas‚ τϊφχ=yϊΤO^9Ζ=;σ“Η½wGϊz[Kzhÿ
«Xΰy|~··Kυ_πtτυ?!ÿ
h?‡>?Φ®<-.—ΰίjqA£Οa¥]έ,/$¶μ‹(†)f@alTγ8―Ο8a/Ϊ‹Ηώ)Φ®το†WΪF{ª\Ko¨xξΟB¶h\KδΟ+^”ΐΞVΥ›i&qκ!PγpγΉλΫδτφχΕ8du9υυΖ1ύ8Ξ?
λ§™Jm'gεσι®Ίνι+-]ο'Σ§uΩΎ—Τό”ύ‹ÿ
`/‰>*i_<kβOΙφW°ώΕΡΝνάζmZΤ[(kΉνν΅Μ§iά9RsΗλ³urHη<exΐϊέx4‘Ο°ξxγΧyώ½Χf#΅ϊπzzcvκ:Εpβ«ΌDΤi%¶ϋwjΛϊέ«υaιύ^0“³mίmn­δ–―^—τ'9?‰ÿ
'ρ¤©vδÿ
Β“aυOρ®»rχψwΫΣ·^¦ήΦΆϋoϊÿ
†D\ϊΛηύ(
χ9ό1ψΗ57–=M'—οΟωϊΣKeΆµ·NΪ[¥ϋλχλµi;―yτίυς c?NF?ΗΧΣ΅¨Ι'―ςώΊ™γοίρΑύ=ΎΎΥJWdοΩ=vοηoφΡ-#)43σϋΊYύώwΫaΐ‘ΗbυΟαυ4Ϊ(¥dΊ%o-‚NVvnχVό?αξ!88ΗΈÿ
ΥνθiΉ?uIτΫΧΫ ώu!SGOΗόÿ
υ©Έ‚•—eχΟ;Zχ[w^KM:mÿ

σ/:V΅«θPΫι–u,w±ΘρD£pc”g’7ΐη‘‘ά|ζ|β”'v¨Ά=	ΰγίςzc‘Σν‚ υ¥
£°όy®ΊΥ%ΛkuΏ}—_/–‹c’¶Ϊ;¶ΥχοΣ_ΓΣρ>!“Γτ8hΪ8ΞwΫIƒΧν1Ο ΗnkηίΪ3ΓΪφ΅πκk;WΏΉ:Ύ™ ·³±Ήb¨ςε„PΕ#²‚Γ$/ϊύ^hΥΊψώ‡Έ4$j¤«‘θ<η‘ϊρ§κz΅εjVM―Ήν}U•µυΏNάΟΣΩι­οΣοίkφάώ^Όgϋ/~Π?nτDπ—ΒoκkW*χι’iV‘nx‰.υ_±[&G9iGχΙυ?†_πJÿ
Ϊ6ÿ
\ΠµOΰοYXjϊf΅=­φ©&­©4vw°έΌB"«0μ±lΙΎXΰ‚:H1±aΟ<z`r
νΗ@³Χ$q'ÿ
_υηόk¦¦mRQpJ	5gw­΄τνΩt“»Ίiέ$υΊΧ³ΏΟΏB½ΌΒPΕ±b@Η=8νΜΎZÿ
΄?ΰMΫρ§ΣX6F?―λά~µβTIΙ¶–½{½ω-zz΄o¨©JΙ%Ύφξ(Θψÿ
}ΗςaυτΝH$t–aΖ8@<ηιιPόψκσώXÿ
υ~jg“ΠρΣ®;~=
Ο’=—υωμR”–Ν’yΧJsΥΪsΖΫ©—Iώ1ί;Τ‹ª)u=I=6ί\~Rη?¨ηόÿ
ηΒδ‡ς΅ΉΛ»ΦΧό?Λm(υ½r!„Χ5•Η<jw€~Ξβ΄aρwaΐΔΊμ`tΫ©έρΣώ8ι­s”Sδϋ+ϊ·ω/Έ9δ­ª~Ώ›ΩΌ_όw_|F
ιNα€ÿ
ΎΣί­^βΧΔNbρ®Ί9r’¤±Θ?OώΏQIΣƒϋ+ξ]-ώBudI­{=µ^ΎΊθυς=j_!ΪΖ:‹…ν$6nΤ4ϊϋµ¥νρjό$«(ΟIτΫγΠ‘όΰσ^'EK£ΣϊυίρίRΥY®ΏθΟ΅ΰύ¦~)D™s£άγ2iq΅>ΉΩ"r}@γ·ΎΌµ?Δe2ιή™Fw³Ν7ή°9θ½ωβΎfEsΐ8ÿ
>‡§ÿ
\Tª„cƒΣ9ΟλΟςΘ¨•i%m{k®«¶Ϊύΰλ5ew~»ώ~§Χ6ÿ
µ†°7±ƒδ_Ό·BAxfΐΐ8
Ιζ¶νΏk<`^x:υρmJ	λΖ$¶N=ψιΟlό^έ3ΧΏB?½8ªΜ3ΐ\υΑΞ0{ÿ
υ>Κ6µ’OΝ[£ΩφÒϊ1Ζ΄ή‰έv³ήήwιnζ}υkϋYψL}³Dρ΅8ΞΤ²Έ―΄CϊWOeϋM|+»1£ίκ–ύ~Σ¥Κ£IΚΏ‘?—5ω²@=@<χηςνN8ztό
?^ƒ¦²tcΣσzχτέiψ—ΝϊτΣό­o™ϊ±aρ—α£·Θρv–…±ΕΤg‚Δ€3r±δr3ωΧo§ψƒDΥT6™«iΧκz;Λ{£#ύTηΏ~µψιεΟ!Ϋ
3“Π"±Η¦v©?AίΦΊΒ?µ)‘Ό?Άxy
“XZήª©ΞA3B¨2Ξυηυ¨•&Ίÿ
Z.χίσKΧeRZΩ=’νΪέ4VΩυοΉϋΖ2>8Ο§^{Ρ_0|πΏΖ}πIγVξ/-¬Ά=TΉ‹PΌ3ΉT‘J­s=°―Μ²N ‚ΓΚ,~_§λ5ξΡΡάSi―]ίΜ(ΆΑ»ώϊjPQE€(Ά{Yυÿ
†συώ¶(¥ύv
Ά(
Ά(
Ά*γm6σϋγ«Ό΄ΦΫ/QU)[o'ΣΙΫGη®―-@)Σιωυ§sτϊktΗ―NG·N™χΐϊEξγ»³_§λre·Ν~hpΟq)Σÿ
ΔσKZ­—§Θkeθ‚(£ΣϊΫΟ·ωο»
(ΆQXµ®ϊ;ktϊ+υύ

(Ά“Ω]#ηψtόQE 
(Ά€
(Ά­­µ½ϊνÒ=ίgΟΘ
(Ά #ψΉρN†ZmΕ·‡ξµ‰u2­Θf[VΛ»tRC7›Ί58άΖμ©ΗΖχν+ρ#Wb¶7φΪ!Ψ΄ϋXΨΰΰÒάyÒΟΙ°‚Iΰ?Hnmm/a{kΫhn­δβHn"IΆeΑ4R­q“Πg<Χ”λ_ΎλΟ$“ψj9εΛ<ϊ|²Ψ¶γΥΌΈ$X:Ζyΐ
u=tε­S}¶½NφKmzΤ„δοiΫk|ϋy:—ΔκεΎέβ½mΓε™΅qd‘σa t@3Ζάqιδζ½½‹O{w;­-Μς“Οs#’AΰσΧϋγRύ“|;μύkY°\‚±³ΪέF§’ι W#'±Η'΅<Eχμ‹zΔÿ
fψΎΧnE»Σζ:nx§aΟ΄j0IΟ®ρ•/%o'δής½ΌΜ]:mχΧ}—dχωμ|lH9|Ψ
δδη9νΤΟÒΆn@tΟ'¶?,ϋφυ―©ξÿ
dΔXΫkΊ_α®αlΰwΔ@ΟN§“ψΧ5wϋ.όV·Λ¶Ò/'I"tσ¶@
yτβµR…΄qλ³σνu·ό>χ2p©kλoNΊ?Ηώ{|τΔπ£¶qƒώy<GΦΆ/?υγ^Οuϋ;ό`¶$
ΌΰΜ…” γΈύπ'9γ«
ηΰ―Ε{@LΎΥΘσΕa›πύΤθyιοZF¤RZ§¶ΦμΌÿ
αέΘε«Ϊ]Ώ-ΏWÿ
σmίξσώΡÿ
(C“1Θ'?^G<σΗΣή»†ÿ
-r.<β(HÒξ\uΑ8η>£ΧδΙαO@Ψ“Γ> B?½£κ§^¶γ=:=κ”βϊο®·ςώ½EiνitΩ?+mςϋόΚ8ΗΗ§γυΖ{fΏoίψ#‡ΒοΫcβÿ
Ζ[‰>&ψiρJÿ
HΣ4›λ…ΣμΌGα]RΡl΄Σs¤Lφ7φ³Ej‹ΝeªΖ ·wδ~ÒΎ‹®ΕΔ.³
?>™~?_³‘r
ΆΦ—ρΈσ,/Ά'―™kp„γΘx—?nk³	xJªµ9Ζ2KFοe~»[«ΣΏC
τ}΄%¬Z³Ρω[u§υήηρuγÿ
ψ7φ¶Π<ΗπΎxϊ‘¶-Υζ³α;η(ΒήγMΥmόΖAC~ª¥Θ¬kδΑΏΰ£yGό(yuψ'πο‹|'¨$€7EΊΥµΣΖέπ)9Px―τ•Α2κ¤#‘΄^8
w©XJ?ΗM¤`γά―Σ΅5τ4x«“•9®«vνΛΆΧΣΦέ:ω―)†ρfΊ'nm§β΅ÿ
Ρÿ
‚xro6Ωβ΄mbe±Ò ΤΪuεήε8ΟpqVr~Κ?¶V’vk³ΖV1ΦήρΞHλ»Θ±”g‚Ι=kύΤ?WVϋg¨ p1Έ¥.£?1®2Γ${~Ήόk®_Q+{8««'Μ·χV‰§ώ{Ϋ]ΉήJ¥―-»;τ}Ύÿ
?CόγμηϋK}Ιfο0>UΎx£ ηηLPpO|τκkZΛφYύ©o%§μΧρΖrΗ
/Γ›8Ζ[O
dw$σÒΏΡYΜmΙ«ÿ
F'ότΕCΗ@?έ/Ώl/―­Υ’²§NΛ[Ή&Ί;μΌό>ΈK I+GρΎξ:ωκυλ}wίόÿ
t/ψ'ίν½βvDΣ?fπ‰.«΅=	“R–ΥsΉ†:’~•~ΐπJΏΫΐΏ΄ΟΑί|!ΆψΒ_|UoβMR[ΔW Ί‚Ϊήζ/±ΨiΪ9Ύ‹ΝIQKάήΪª&ω	.6ώµ]‰
¨nδ·#†>ΌThγ;vδ{ϊς}R:8¬1ORµ)ΑΖ	N6Ό[Òφ_ÒΊ{ωΆπω<iN3iθΣ½Ϋ}φΧ·M<µ& ‚sκO―S‘’1“§Ή¦6N@ην\ςOαΕT–ηθΒ™η/Ώθ:c±ΐλ~ΎΏ#RΆ”ε$ΣmήΧ^_/_TΪΤχΪ|)_DΎλ],1ƒHη¦rN1Ο#ƒƒύιΝϋυΘ?‡Oδ?ZΚϋ¤‚;‚GςόΉ…
§LΗ¦~¤γλΗ½8Φ’¶®ΧΥE§¦ΏEϊ1v³Ύ‰φÿ
??Θx|
0Ζ22Ψ8όqοqιJ²πN29ΙηΠ~?΅Γ'c΅ιΗ<τιτ<#OL½ϋϊΎUGR.κrVΫU¶–Òϋ5ψ^φB/Wί£·•Όύo²μYs‹ϋΨc|ρσΆ8Ο®ÿ
* ϊ~ηζΣtφνσYΫ±<ηΗψχηηxE1ÿ
–2ÿ
ί¶'ς
Ξ¤[KΧ8ΞιΟµ΄Ηp¨OαZÿ
hW²^Òke»Ύ–Χ}΄ό^•…¦ÿ
εÒ{-’όνύ-3Ζ¥N~¶6ΏόdρνόªT·±+O°LrΞέC»#®~ΌυζµSGΥδ?&“©±τ[¶?O–#V£π§‰ζ#ΙπΦΉ&μ®—zA'ΨΒ3ώ>υ/0­Φ¬μΥό·[έωÿ
—t,%&ÿ
‚½y_—¦›6ύi2ΰ* ”*¨γ°Ο `cP Ζ@Οήω<y$“ΗΎk²‹αίfΑ‹Αώ#rqψ•\€F:όΙƒΠ:ΏΒo‰—y>
Χΐ<e­ O8ΞςγΗΏsYΥΔΞ¥”ªσ-=ΦοΩό»λ}{κk:¦ύΘ$ϋ¤ΣKNχkm-ΪΗI=ΟωΟγM8'―\dφνΧιψΧ®Ϋόψ³8xBυ	Α_>ζÒ!Ο‡›#ƒίΗ^Ά·-ÿ
f―‹nΡ¬νΑΖZmVΘ*ƒΩ‚3·Ή
0Nk™ΞF£ªΩΏMzi·ίη®ªW²–ΛΏ—ε»]·πC#=?ÿ
«±νυ§£Λ	fCΗ)#©Ξ0C_ώΈ―¦νΏe?²γΟ½πν΅88’ςy<νΘ$φΉ2kvΫφEρ΅β&γwΩνn'8ΰαCΑιΑγ9Η¦NTϋΑτέV_wM©Υθ·ο―o/5§sζ;?ψ«L*lΌI­ΑεΰªΗ©]*¨Ήζν £πιkΈÒώ=|MÒ-&»ΉHΞ<»δ†νr2¬fGΕ\g¦Ύ‘°ύ‘4ΚSΕzµΦ%lνννS8υ9ϊwδ©νΟ΅hί³WΒέ-ΥεΣυVDΫΈκ­eυ†η<rH#8Η ζεOou­4ΥφΏUΆÿ
†[FUΏ?ΗK}ÿ
3Ξ~ώÒ:ο‰υΛκήkΩofH…ξΉMΊΉ!®.m2yQπ]–eΨγεφ=ahΎπο‡"θZ.›¥ 
iiR8RHσeTΛ‚ε£5nΧ-Gθ––²ί¦·Z;~-Ω³ª
I+·Ϋ_+VθQEdέέΛGN½Ύ½ª)"`VxÒU'dT‘JγC―#<~ή¥Ά΄sI«kζΎ_ϊzkΈΥοƒ<#©‡†tK­ÿ
|Ι§[nlzΊ"·999οHΗί|ψU~XΝΰ½1M΄—ΗΏέςδIΟ±―UΆ©VjΦmmιm.»ύΔΈEιeoEϊλχ[©ΰ7_³7ΒkήV•¨Ω3w¶Τη8Ο Κ8Οη'ύ“ΎHs©βx:ΰΛ9gΡZΜgu=ΊΧΤ4V΄­ρ'¶¶λ§}uνηoIφTίΨ_Χυ―u΅ς%ίμ‰αΖ9°ρv³nyΘ»µµΉ?Υ:ηw°ηΩ
pI¶ρΔ-ΧhJp8<nΩ?~spx―¶h§υ‰-9–Λ¥ξ΄·―B]
ONEίϊ½τÒηΑΣώΘή&
ΖΧΕΊ•e³Ύ“Η@;ν=±ιX²ώΚ?P‘―α©q΄ή nΞlΫo~ΔϊΧθQ8ÿ
?ηπυ<SAcƒί' ώ_†=@η­VΧ²²z»ϊtÒώzXOM­#®Κχ{rτ³ήλΧη―η%Ημ³ρEξΫΓΣΘςυGNέ„¶iΨΈλΘ“φhψµ4­6|tςυkP	ΟOή*~αΧτΠ¨#?™φÿ
ψΠGΉόΘκz{z*―®JΫkι§NΞώ«σ½xH=Ά΄ήΛΣ}gψΎΊ~_Οϋ:|\…Iÿ
„eƒέjs„τ3§n};s‘Y|ψ¶|xήιsdγτΈυ―Υqύz@ΗΏ§ηξiΓ8Ζ}NHΗ<ρψ~uK'ΫMτόuύ]ÿ
YϊFΧ]SwVΎι}ή}4?(eψρb!“ΰYψιΩq‰σΗΣιΞ“αΕ³ζxΔC|¶Eωτω½Lψ―Χ ΓGβ}>Όÿ
,υ4pIΑΟ‰ΗψϊΠρrμΏ«'¥]ÿ
$S–nύ•®¶μµλΧ[ώ@IπΛβ,@—πG‰ϊ…άδ‡sΣ‘TΫΐ^8>g„<DυÒ®ΟαΔDηΫϋ“Σ'σ#ςηltϊσIvόΟ―ωύ~hXΞχω%¦ίΦΓϊΆθήΪωmµ—ªΥΰο&wψcΔ
Gc¤_}3δc―gΆώρ*¶ΓΊΜg‘ϋΝ2υA#λΣ1ϋEH@=@?P®—ςΩ=m»ΫΏέΎΆϊ®©σmΫMχθ~/[ϊF¤ƒύ«;…ιΗxϋιJhÒυ$Ιm2ψsm¦#ΎAΣσΝ~ΡFΘdRPTύr*?³ΑΣΘ‡―ξc=±έ§ÒΟEnύWoύοδ'„ΎNί/'ÿ
υ]ΖυAÿ
‰}ΰΐ#&Ϊa‚~¨^•ΩξΤΪ]v0J9νό>}
ΰσ_΄fΪΩ†ήάCDθΟ±Ys›;C““›hσ—Χ#Ωύοτ·γ―KθGΤ·³Ύ_Ύ«ιϊEΐ6Χμa”~»=ÿ
>)‚)ΑΑ‚Q“υn:χ9Zύ60Φ6${ΩΫρªιZYλ¦ιΗσcj}=aφÿ
<aΌZI^ύΣK}―¦›vwέϊ‹κNΪΙίΙ/ψωÿ
’?Ό™η”χΓ…FΑΤΰΖύΊίΥGσφ―ΩSΆιΘ+Mÿ
ΐCnbΕ7ϋCο£i<ÿ
{N²=Oύq?ηθϊδm{½ϋ///_»Μo¶―Kid»^νwΧΠόjbv‘ϊtσυª»\·άnΌ¤Lt—γ_³§@Π[ώ`ΊG?υ²ηλ1Σ¥7ώέ
ÿ
ΜHΰÿ
Π2Ηÿ
‘ÿ
_ΦΧ Φ—ΏΌΊν½ϋόa%λΪϋ>­vÿ
ψΣ†Α>\χΓvυωHτοΖj-Ln;γϊJύ>Π®‰¤cΣϋ2Η‘€Σαπχ9Π΄bx ÿ
eXdcίμόηπΖ)¬\VF―{έφόοΆ]¬Ό”pusΏM­o?ψ7±ψΞD9‰ÿ
ίΰ)?q¶ψfΏg?απχύ
΄oόΨÿ
ρpΠ4
04-gΣJ°ώ–ÿ
―§µOΧcΩωιιηλoΜT•¬§έέιωνςόe0Ι€D2ϋ¬Gηƒύ(X%'¥φύά‡‘Τπ§§¦=­~Νahƒώa:bΨΣ¬‡ngϊφώ”ÿ
μ]Μ+Mκ?εΒΣϊCzώΌfΧ#kώ~_•ίέqύN[s[o[;m«¶—™ψΡφ9qώΆlϋG/κ
QH¶“g?fϋy2dsγduβΏf†¤‘¥ιγ$gύ
Ϋ¶zb?~ωφΕJ4έ9FO±QώΝΊρθq4<lok?ΏM¬µÒΞΦ»ΏNoκίÒΧ{φέµύzΨόgϋ5Π_–Ξθφ
A)λ…8λOKKηΰX^ΰ<½xΰ|ƒ<ÿ
ϊλφel¬“ξΩΪ/ÒΪφ=ϋώ/“h H">‰PρziψΛkΫϊΦΦΤO	ΡNί.ΊΓyώγQΣµ&
.|}6ΪΞzuÿ
–}?Ο³ΣEΦdϋN¦ίK“ό£5ϋ$!„t†ΞN"g―ίΏΈ”π¨:"`ευωλOλÒ^KΧΞλς„¶ÒΡo§¦Ώ¦ΎZ«α8Μ~Φδ΅M2νχλϊώ4~ρ§	αO¶zmÒoOκa―ΏNkφ’F0:ηΨÿ
ψÒTΌ^Ϊ··–·Z½=}:jTMκώ{v{ού>ϊώD―Γ.»£πW‰\ρ*Ή\09O~ψΕZ‹α_ΔΙ#π7OoΙγηώΦΏ[)9ΰrG'%\ϊwκ{ύi<]ν«ιuoψ=<­ίpxH»]¶ÿ
%¦ύί—^ϊkωBΏ>,J
Oλc=7G
3ύωΤφϊώub?$eΟƒoΠοe³@Iμs?ωWκΉυοΣΏN8νιMΒύzΉ#“ύ_qUυµΥίδόΌÿ
ΰ§vϊέύR
έ{κΌ—UσΣΟΘόΘ‡φtψµ*ƒÿ
δ0τΈΥtψ°~{ήUΤύ™ώ,9Ptν&"H>³n@Θ=vC'Ldΰρξ+τ³ÿ
ΥλΣ#΅>άτ'ƒ¨ΐ?J®K¥ΎiΎή~Ίÿ
MύNυΣ²V·O%ΣσΠόη‡φXψγ2ΙαΘBU‘Θ9 δGfOΛ¶x:Vÿ
²\ώÿ
YπΥΈγ¤χΣx<-ªτυδρΙ5ϊI=I?ZJ>Ή;Ϋέ³¶©[]7Χ¶ε¬55ίοτϋ¶ϋ™πΌ²GHÿ
Iρf‹³½—'¦Z,σί8“[~Ι
ϋOH9…¶••=ΈinηΧψΖ~ΠΆ‰b'%k¥{;θΏ•vΎΎZ]Ωμ?«ΣνΫ}vµ»v>LƒφLπΨ]·+Φf$ ³·ιχίδ‚1ΐ#¨9Ο]‹_Ω_αΤe|ϋοέ`Γν–ρΟr¶Ω§έ
γί§ΣtT:ΣKdνζτΫM΄ιmWθνR¦­h«Ϋ¶ϋ—ζxM―μέπΨ3EΏ»a€ZγWΌ9Η¨‰Ά=πυ®ΆΛΰΗΒν<†ƒΑΪk²ΰ†Ί3]‚O"βIΙ<δr8'ΣΣ¨¨u_wςι¶φ}?«±ªp[E}Λ¥»z#ΛΒήΣ€Ρμρ€<>έ8
χ	» ‘HθkubcUGπΆ…^›~θ
tγ§JZ*e>ΪΎ·Ώm
²[$…$σώ~Ύ™ιIE›mξ0Ά)ΐό?―ς
Ά)»~^}–ίÒ(¤EPEPEPES_wυς
Ά(oϊω/7ΫϊΡ *)9φυ<ÿ
?ÿ
_§S-C(Οπ:Όπ=ΏΖwλ³ΫΓό§TnME `xοώz†–΄RΡ_{+ώ
ώώ}U„¶Wμ‚(¤ε­®­u®W»Ώ―OΒ(¥we®ώ{ί—Ξύξόϊ-€Ά*7jώKΛK.ώ]Χ¨QCθ½7}Òσ·υχER
Ά)ώ»ÿ
Wόΐ(Ά«θ–«nΏασϋ»_¦¶(¨ώΏ­u
Ά(
Ά(sΖ;dύ@Η­>§σ¤Ά3ξώχώ`“Τ“ψτϊQsψ?‘ÿ
υQE59-›ώΏ―κμV]—ά.N1“c©νÿ
κ‡¨κώcόzΡE?i?ζaeΩvΫ§a¦8›;΅δ`ζ5?Μυ½ªgdΐ‡³µ|ÿ
~ή&ϊυCΧ―n@«Vς²w}οΛΙέkκ«²(¶—¥7¥ιΞ?Ϋ²·oΟ1½ρUdπχ‡εϋϊήΉΣlωÿ
Θ5±EGµ};}έwιωχXφ_qƒÿ
―…Ο_hmώφ•d{cΓÒ£xBAσxWΓΔχoμ‹O―"
zσΦΊ*+E9=nΧMϊY>Χr\ χ9sΰO…|<O©Ò,OαΜ¥0ψΑg9π‡NzηG°τΗόπτ®®^ΡσZοΆ½ί—τΊhƒΩΓωQΘ
ψΊψGΓ‡ώΰφόb“ώÿ
‡Oψl}4m<(?Ο>¦Ίϊ)Ί­}¶ÿ
νηÒΫtτσωΨφpώTr_π€ψÿ
„CΓ_ψ%Σσÿ
¤τ£ΐ~	S•π†ΑΰδhΊxιΘιo]e)7­ήή}—]?ΰόω#ό±Χ²Kς9‘ΰ―¨ΐπ·‡€ÿ
°>ÿ
Θτρΰÿ
	―έπΗ‡ΧύέOσΰΧGEM[W―›ξrCωWέιώKΧ©„ΎπΚ/‡4 ?μcÿ
Ζ)ΓΓ^+αύG)¥Ω)αqΤBrΟtT:£ω¶υωiύ!ςΗ²ΣMΤΡ΄tM+MOχlm‡ "ν”iΦχ,­ΎRΦάgλϋΏεωΥΪ*]Iήιµύ/ς@’[$½4ώΊH΅a Gm°Ζ?’”ώ;rO1ι(¥Ο.ÿ
Ε$ÿ
υΙ'Χ<{„R›©8τΙςQOΪK£· Έγ?δcόϋσΦ“¶2qι(£M«Ι½χστίξϋΐ(Ά–ΫώΏΣςώ΄ώµΠ1ώΟ~΄QE+½ο―qQ@Q@Q@Q@Q@PΟωÿ
hΊώΏΛσD$δ^ΏΣϊuΗjTn~>}:~<.Β}==?>=~ΉυοNευγ>ώÿ
ύ|κδ”lµΊ·ΰµ/λF;[]>τÿ
ώhuQY>ίJ'αΧΏoOΔwΟαRQM6¶ώΏ―ψmέΑ 1’}=½»γω{z·κ9υΞ;‘ƒΗQτÿ
%ω½Ϋίo]­Ώυ®¥FΧΧρ·—{ωτ^΅ώΟΎ9Ηÿ
®>σΗωηή’ί/–ώOµΫύmάkς?#ƒΟÿ
^HδφοΧ― ÿ
<uΝ9#·~½ΈλΠγΧ¨γg>έ±ΣΫ}ωϊρTΉy[voΆϋΏ―Ιέi;µ²VIό=5οδ­{.–ξ§8λΟ·qιΟΏÒ$‘ί9ηϊ―'lvΐ©(¤“ZkΧ―§§‘)«λψ%ÒίΣÿ
‚ΒgΏσΞ~ΉΞ?ψZ)ι§ΆςΪύ-η¥Ώ­±EPHΦΞ88?ΟΫόϊ}j.sί==ώ•3tώ~γΣ=ΎΏ¨λQm?^oN08η¨η¦{ρΦ|τωΫOΐ
§“ω~:φQΈ§υΖ}<?Ni
'ωΗΏω{ƒ
;8φ?§ηιgƒDWΩΏ5ιύz‡κ―χn:(¬€(Άφÿ
†Oσ
(Ά€ΏOΡ~{…Q@ξνn Ά(QEµNή½}( —Eg§m6}»uωωcόδΡEQ@Q@Q@QNΚκοM/ψ7ηΦίΦ€QE;tΎΛ§’συζ€(Ά@QE
QE
QE
QEώΎος
Ά(
Ά*’Nή©~_ήΏαίn€QE/όΏ/υΫ`
(Ά€
(Ά€
(Ά€
LOζO§ηλΣΉτο-1Τ0ηƒ?R?OΓΤγΏ®›µΏ§γΏ ’s;t?LΖ?§J΅Α-‡‡ Η®;tΟ­MVΣj6νώ@¶]½oΫΧοκQEJVzω?5ªμξΏ?.ΐQEn[|ΊΩτί]o®ώ½.ΐΆ*Υ;φόίWÿ
Χ°QE&·¬οδΎλ]
QE€(ΆvΫ―Μ(­/t—];ÿ
uτjο[ÿ
ZERµ’ύ–Ό©λψΡ 
(Ά³ώΏ­―ΑEPESI½Ώ­mϊ€Rυÿ
ϊέ;uλνKEώ΄λo??λ[ER
Ά)¶ί¥­ω•ΐ(Ά@QEUν³θ»tKΟϊΫ½€Ά*@(ΆεoΏυaES»ιεψ[όQEξΧ]·~I?ΎΫ€QEΏ―κΰQE=Ϊω~KΟυϋ€(ΆOόΏEPEPEPEPEPEPEPEPEPEPEPEPEPEPEPEPEPEPEPΧ―ηώ>Ύβ›·xνΗΎxιΣ®IϊΣθ¦›[_Χ?ΣΫί½M-R
Ά(
Ά(
Ά(
Ά(
Ά(
Ά(
Ά(
Ά(
Ά(
Ά(
Ά(
Ά(
Ά(
Ά)¥¶½~νΌόύtιΠ
(Ά‡n—δΌίό

(ΆQ@Q@QGυύkψυό€Ά)­Χ―υΥ~kΤ(«•¬Ώ¥φwwΣKwύ@(ΆΜ( ( ‘ÿ
8χό:ÒΤnxΖ3ώ§ΧΣιM+΄Όÿ
Ά“²ώ½_ΰ™'Ύ9ΗωΆ+e²τ@¶^(Ά†ο-Uθώ?Σ§άΒ(ΆΦjΟM:­vIξ»vίΊΨ
(Ά‰ofο·eό·λ¥ύ;ϊ (Ά–οk;Y.ΏασΣ_.υ°QEHQNÿ
ΦΎ^~_Φ–(΅=Wªύ?Ι}ΐQE\‰_·g{σ_ΣΎΊμΐ(Ά‡ύ}ΛΟΏυΊ@QE€(ΆΈ΄–ίϊMήύ­€Ά(ζΧO~]νΡχ
Ά*―Αyÿ
—]¶@QE€(ΆΧO/??λ[ER
Ά(
Ά(
Ά(
Ά(
Ά)Ϋo?NΙχσώΊEQ®Ύ|“]}>ες(¤όόΏ-?

(Ά€
(Ά€
(Ά€
(Ά›VώΌ“ύ@(Ά@QE
QE
QE
QEV‰_―o»ª—υ®ΦΠ
(Ά¤( ( ( ( ( ( ( ( ( (ªJοξνεηηλϊET€QE
QE
QE
QEίυχ/7ύ}Θ
(Άλςσέυώ¬QH( ( ( ( ( ( ( (Άÿ
ΧυθEPEPES½ττύ;»tÿ
†θQC·O/Ι~·τό€Ά(oK[/7ΫπΣ²(£oλόQM¶μ½7τWω]_ρ
Ά*@(Ά?―Ό(§ύ|΄ώΏ@*>έράsτφÿ
λΤΥ€IΘ8>ΉηίιώzUCwιϊ΅=]»§ϊΡH3άΐΰγ―ΣOΖ–΄W²τωtμΧυψ°Ά+¬ΪΏυχθEUοk=’Ϋώάσÿ
-WΜ(©wΡΎΙοΏΒ»υ·kώ€QE-ZΏ—ζ—uΣΧυ@QEI[όώKΝώ›φ
Ά)[T»Ϋρ
Ά+^U¦ϋwk¶Ώ‚
Ά+)odξΊ}Θ(§tμ’ς[yω;ÿ
V(¦ν}moώο.ίΥ®€Ά*Ι_ΧΰES]>]Γύοςω[@(ΆOM=?%§Λ QBέz€QEM¦Χύ;yιΆί_^ΐQE]w—υι°QE'ΣεχY[«σύ<€Ά)
QEÿ
ΰ[ÿ
^@QE5£^V{λΣMών΄Ώm
Ά(nο_ψ;ΏςΩ|€Ά)½έlϊΩό/ΎϋμΏ+ (Ά—ÿ
ΥμΌίιϊ (Ά@QE
QEU•ΦΪΫεµο―υ®Ϊ
QERKEςÿ
Òv»νΣ]οζEV`QE
QE4®Χ―ψ)ύί 
(Ά‡ώ_’σεΫΘ
(ΆQ@Q@Q@Q@Q@Q@Q@Q@QBέ_εω 
(Ά›wοσώΏ®Λ`
(Ά‹ÿ
_uΎλhER
Ά(
Ά(
Ά(
Ά(
Ά(
Ά(
Ά(
Ά(
Ά(
Ά(
Ά(
Ά(
Ά(
Ά(
Ά(
Ά(
Ά)­ΧMPQU%kzoιeΥώKEψET
QE
QEÿ
―ΛΟϊό€Ά)¥vΊνEo?_ΣΘ
(ΆªZY|·Σ¦Κÿ
Φύ.€Ά*΄i;φλι~·ΣN»λfΐ*'λΣρΟΣ·ÿ
«“ωΛQH;ΰΗ―·Ύ1Ο?γ+I.ΦJÿ
%ηoΟ§‘2v·¤Ώ/Uϊλm‡©8ΗΎ;{tΑξxγω—TiΧp9>ωύF1Ϋ―~y’­[kνχ”QELµkΙώ±ΧuίϊέET-ΧΛ®―ασϋΏKhQW.—ΣΛη­ΧυΫp
(Ά³κΎ_¦›τυ_.€QEWΣÒΧσψ|Χg·NΧΈQR·^«σ@QEnEVwwδΌίωχ
Ά)
QEυvό?―Έ(ΆήKϊ¶›ύύUήέ
Ά(νίΧΙ[[ÿ
•Ώ (ΆθΏΌίυχ
QE€(Ά
(ΆwώµΧm»+]
Ά)
QE
QE
QEΫώΎKΝφώ¶@QE€(Ά®n—}?yω;ΑΠ
(Ά“ΦΎ^o·υΆ@QEΦ­_ΛΧKyώ>Ίv(¦ÒM%Ρ«¶ύ<οωym QE'ÒΟ·_%ένκ—α QERjΛ{θµΫGϊmεΤ(¨nξÿ
ΧβΨQH(¦Ώ―4χΊ¶Ϋÿ
Γ€QE;ΏΓς^oϊϋQE 
(Ά€
(Ά€
(Ά€
(Ά€
(Ά€
(Ά€
(ΆλϊΨ(§}<Ώα―ΧΛϊΩER
Ά(
Ά(
Ά(
Ά(
Ά(
Ά(
Ά(
Ά(
Ά*ΫΝ-ϊ=4ΥωίΛΣ`(Ά
(Άιλύu_§¨QM-WΛ·—ϊÿ
Γk`(Ά·Κί’σ}ÿ
ΛM€Ά)vµΎϋvσΣΧOΡESjΦμφΏΆ»ίKόΏΘ
(Ά¤( ( ( (­W*K]m®½νίΣξΨ(¨“NΦΧΞντ]m_ (Ά
(Ά€
(Ά€
(Ά®2³]¶ό•χςνΆΣΠ
(Ά¥{YϊύλΞΝ―λΘ
(Ά—5­εÿ
ΝΫgώJξΐS[ξσάS©΅λψΎΤω“εήκίϋφώΊ)+§ψzτÿ
"!Γΐώ ϋgρ©©;‘™δτγηΦB~ςΎφµο{έ_ϊήμkeÿ
QEhER¶·ε½—GεσΈQJZ΄Ώ¥¬|Χ—ΦξET5k+φνεΏ½δόμ®€Ά(}<Òÿ
Ϋtίτÿ
4QSµΊmλ²wίϊςθQM¶ΧόΦσzόΌχΨ
(Ά¤(¦ÿ
ΛςυώΌ¶
Ά([―U½
QEs{YύΟÒΧΧΥ§ικET-Φϋ―Σ­ÿ
­>@QE¤£t­Ρ|ϊ+ξΊ.―ώ
QEdÿ
Λςωÿ
]¶
Ά(
Ά(
Ά(
Ά)ί·υkyώ@QEoÿ
θΊΏλΡ
QEJΦMΎί‡/—kυμERi+uz}Φ^~»~V`QEHQ@QZ§dΧw¥ίEίu§ω
QEΫÿ
+Ώ/;τ]@(Ά­χηφWσw]zkθQPυό?`
(Άkόύ;
QE;twΡ~KΝÿ
ΐΩlER
Ά*›VIvύ#ηειΡ-.ET€QE
QEξÿ
―+’
Ά)
QEΦλΤ(ªΊMkΧΝ¥·K»νί¦ΫX
(Ά¥Ώλδ—wΫϊΡ (Ά@QEόΏ/υΫ`
(Ά€
(Ά€
(Ά€
(Ά€
(Ά€
(Ά€
(Ά€
(Ά€
(Ά€
(Ά›wKϊθΌίιϊ (Ά@QEΧήEU'·—ΛOuw]µώ(§'­»-ΧΙήχΧoψ}ΠQEJΣϊÿ
†
Ά)Ή7ηί§nΟΊώ― QEHQ@Q@Q@Q@Q@Q@QNÿ
§Wεηεÿ
e`(Ά.Ώ«ωyω?λ`(Ά@QE?Ώeϊyÿ
V_ (Ά@Φ<}NG'ƒΗ―ΰ;Σª=1‘ΟεΣΨuϊηUE]­¥σό„ήίΥύ5B†η8ΖqΖs©ι¤sή¥ªκ>θΗ¶?ϊγσ5b®ΙJ>½,ΊιλoΦΒΩz Ά*ΖQE
QEKΊk]ήΪ.ήiχο{Ω 
(Ά‹uΎφÒÿ
ασÿ
7―].QCvK^ΦσΥw―¨QQ-τλη£Ρ>ϋmωί°QEKυΊιψt»°QH( ( (§½½ΙuεχlQN;―UσΥiΏυωEVΐQEa-[ωuΏNχQH(ªµνmvÿ
ΫU―{υ]­­Ό€Ά)ZΝ_Λ—uςθQCιύt^oτύQE>‹ΊΫÿ
%Φόί§έΠ
(Ά“oΏoΫλεχώ
QE?λξ@QE 
(Άιλύu_§¨QMοkιd·Σeηmχ
Ά*@(Ά
(Ά
(Ά
(Ά7
Ά)ΫΣο_Χ_Ο³
Ά)
QE
QE
QE
QE
QE
QE
QE
QE
QE
QEόÿ
­-ύ|»
QE€(Ά
(Ά
(Ά
(Ά
(Ά
(Ά
(Ά
(Ά
(Άkuλύ_UκEUIνιw―~^—ςΩϊω€QE+uκEPυ·ΛΙl—/λ QE 
(Ά€
(Ά€
(Ά€
(Ά€
(Ά€
(ΆWώΌΧυΠ
(ΆQ@Q@Q@Q@Q@QMÿ
_rσΧά€¨_―CΤA;>sθ&¨άwΗ®OΣ―ωκΰμυνÿ
τ&Mmέ5«Ση―υσ#QΘΗ=	§^GQΧUWθqύzχυ9
ηυ%T±}Ώ―³zZ„]ΧασΣ­ÿ
®αEΟιώMiΉAE8Ψ7γΨώ]Ώ
m
QE&µ½ίγn.;ί QIΩ;&ΦΪ+χn«¥ϋ
QEν·—›ÿ
?.·
Ά(qMί_½ω}Ϋtόΐ(ΆE¦ΏK^Ϊι·Κώ–pΘ8νσÒ›C‚υ³IϊhΏ-~`QEfΧoΣ²σΧά€Ά(µέ—–ώ6EVΚ+O/UΫΟΙ
QE-+«?;z5ζ΄Σ·GΩ$QVEV2ίξέ®ΛσΨ(©εω~€QEiύzY_ΣΣ°σϊΡZ5λ¶ QEdμµιΧό>kοΫξΊ(¦Òο¥Ώ.TΦ’ÿ
ƒζμ€(Ά?Χό>kώδQZr§oΏ®··w}–ΐQEK‡ι¥½/φΏ®φΤ(§Λdµν}ϋ―5mµ>ΐQEΤW½|—gεύ$€(Ά9WεΥτ·–€(Ά‡ΏΛm—ό€Ά)rΏ>=?+φιλ`(Ά9_N—κ¶Ώυ­€Ά*·γηπ®ύΫwι@
(ΆΊµήΦΦϊie®¶νχ
QE.7jέmςVϊφ~Ώ-@(Ά|ΊύΫ_§/[®ύ΄^(©kςZuΪ=ί›ΣΛ¶ΐQE QE;W^^~kϊΈQB·ίoΡχ_ΰφ(¤EU[²OnΎΟ¥΄(¥mΌφΫΛΟΟϊΦΐQEάZvτόmϊ»\(¤•έΏ­m®λuχθ»
QE4ΣϋΎϋ+υστ
Ά(ώΊyyÿ
_z@QE%v—§o/?]Ώ QE7ψyyyχεΎ€QEω]—ελm5εª·`
(Ά¥«}ΙύκΰQEΫ¦ί’ΧwίϊΩEPÒιύmΎ®έα¶(§›ώΌΌώWσΫ°QE7y'ÿ
Ϊο­·ώ­°QE-χ¶WχWWÿ
ς²(¥mmιΫ­Όόÿ
ΞΐQE4“·Λη{i£σ}ΏΘΊούMQI­mιωw»_άEU$®Χυo>·όφ¶€QEJ)[Ώέ}·»όΏ
QE
QE;mηoΖίζESI.¶Ρ~q}ίw}Φ€QE®|’Χξλÿ
¶ QEG-έοuψ»Yo½ύΛ QTβ½6οÒίΆ°QJQνε¦ύ—~Λόί`(ΆΟ―έΫόÿ
_[
QEÒΫΞΪzΫΟΟ¦ΊtθQMΖΟξΧeΌnχΏωtξ€Ά(VΡ;λnΏασΩÿ
KM
¦·CΖxÿ
?γψS©΅ÿ
?ηίΪ†­ΛmooΣ­ÿ
'§}­2Zzmλύuθ-¬¥x?μyΗ”Ή¶µ’·^ΟσBqΎo§_“§θ‚(ªSξ’^KώΓR½΄}:iΣΟΟα‚:τ<Ψ{R`Ηϊ~t”SηZoχzyÿ
ω½}>_π―>¥QKUeϊΏ–Ύ½?=ΎΪ|ΏΝΐ·[θQEs]νψ_ªσοψΫkι-ΛM?ς—ηoP¥όωόι(ªROΊ}¬ίδVΊiΫky_Ώwχn/0sΣρύΟΧ€φ'qλοιΤsψ}—όÿ
σΗr2s-7»·GεΣό―σκ—5Ότί^‰wοwχυάzσΚ’*yόΏ_Ζÿ
πφί]τΥΌίλ³ς»Α<68ΙΟδ>³ϊt¦QEλ[-νηΫΟΧ·K…ίgψi¶ϊώ_πεQRεvkVΏω\.ϋ[ΦέΧgΪÿ
ΦEUsώ>ώΎ¶ÿ
ƒ΅'ψQE{EΫϊώ―ύ=Λςÿ
0Ά)sΏιΑώΎz+ΎΟπÿ
?λσ(ΆNmΫ¥»__]HnWΫΏG·ΙΫόΎπΆ(rΎ½~k·—εεcΛψ?σ
(Ά“wώΌ’ύΝ.±ϋ—§υ­(Ά„μΣϋύ
Nκφ‡—[χΠ(Ά·>ΛοώΏ―…ίoΛΛΟΧϊάΆ*mωμKζΊ·OψϋΪΫε―“
(Ά†οo/_σό‡yvνΡςL(Ά“?ηλΣσόÿ
1H‡);n½.®-QZ)¤’·υ§όΓΎ•Ν%k―Α½4σί{ίΘ(Ά|λ³ÿ
¥οσΫτΈΉ¥όΏƒÿ
0Ά)sω~½½<ϊτσ)_ªόW—«Τ(¥ σώΞzJÿ
­|»·ύz»•Φ—ο§ÿ
lÿ
•Β(§Ξ»??-Ώ/λp»μÿ
Ϊ
(Ά2}ϊz“ούώKΙkύ~(Ά|ΛΟξδ=nώkΛΟ{uαψφÿ
=ϋRQE'8χΏήZΏ_λo>ώeQPη~‹ϊiχςΧÒώH»μÿ
σ
(Ά—3ΣΚΛ―FΊ_ΛϊÒΣΝ-4ό>ώΎ¶Nέ(ªηzi§§¦Ϊÿ
ZwΠζ–ο]t{iηλΎQEsωZzyÿ
OJΏ“ό?FQE'6ϊ/Εv}uψy‡ΙώηύYω\Ά*yΌ—γεηδ¶m=§[yϊφικQzΡO™νeΣΎ–·vϋ!έΫnΟ§—―ό¥QJÿ
πϊίϊ_ΧByÒ·®—Φώ»ωz…QEή_§§Ά+^ί—ω―ι? Ά*ΤÒ[vύ<ϋmίO’m®ξΏnΟΧπυ
(Ά›’ν®£ςύ/oA¦ϊ§χzyΏ?ιjQE<οΚέtϋϊ…όαώaESs]Ύύ{yλψtQEΫÿ
†τ}ίUύ_@(ΆMίΆό|Όό¬&ίEλ·ω―ΧόΚ(Ά…-΄Zy7ΫΟΛΣKz1xτ9ϊώ]Ύ””QWΟδοχλι~ώπ
Ά)sω~½½;ΏΓΈQPέÿ
§εζϋ	ίO]5ϊϊw(Ά.ÿ
«ωyω—KφόΌΌύ­Κ(Ά6‰/ΏgΣª~V~VΨ/δÿ
σώ½(΅I§ΥωyωZZy¥ΩύΟΛΝyώ"(§ΞόΎοψ λOKvξύ­(Ά;ςϋΏΰϊÿ
OKω~_ηύ[ÒεQIΙ>›ΐνςWςσΡ;τώΏQEMυΏ§~Χωο]6»ΐ½ϊnί›μQEίΧΛ]νΠiΛM?NοN»ύΫ…QλνEίυςÿ
$MlΝ_·gλψiΤ(¤Θυÿ
>-7&χύWnή‹ς²S—oΉ?/?5χ Ά(Ί};wςσμ­ηω&ζν£^JλολύiΤ(Ά/·ωvεσςιoΗAJ]µτ~^§ζQEMµεΫεηεέ|Ή»hΥ»'―¨QEάΫ[/Εv¶Ο½ÿ
“—UψzwkϊτaESηΣmαΌοί―η£m®§o/?^›ωQOΪ.Οϊώττ\ΟK­ό½?½¦ϋΏ-`τκ:ÿ
<ϊ©0}ψÒQOk«ϋΌ—λί―‘Jύ­Ίέί®½|Ί”QEC’½Φ–ςτσ·OΛδ|Ώ//?κέtΉEP¥®Λ[tτZkεΫΆΣ]εΫΧOM7γψob(¦ηεΫuθχΊυϋ»θ¥Ò?…ϋvΧίb(©ζμ•ώ}-n½ώ®Ζ›vΡο®ύ·γoRϋtλΤS¶gς?ηόύ)
“ΠtΟ<ƒιτπΖN*ο~[|χv³Wόmώ}Ιmωÿ
W]|ΟÿΩ
```

### `console/log.json`
```javascripton
[05:20 AM 28-07-25] []  random data RandomGuides.jsx 13
[05:20 AM 28-07-25] []  random data RandomGuides.jsx 13
[05:20 AM 28-07-25] [
  {
    "_id": "688527d2c78ef640a3f9389c",
    "status": "accepted",
    "createdAt": "2025-07-26T19:09:06.889Z",
    "user": {
      "_id": "68852645c78ef640a3f93875",
      "name": "Learning English",
      "email": "mdshahjalal512@gmail.com"
    }
  },
  {
    "_id": "6885e22ae5bd6ac36ce24fb4",
    "status": "accepted",
    "createdAt": "2025-07-27T08:24:10.178Z",
    "user": {
      "_id": "6885e18be5bd6ac36ce24fa0",
      "name": "Jamal Ahamed",
      "email": "tourguide@example.com"
    }
  },
  {
    "_id": "68851f1a48e669e21a93e85b",
    "status": "accepted",
    "createdAt": "2025-07-26T18:31:54.566Z",
    "user": {
      "_id": "68851af3606080f1804fcc36",
      "name": "Md. Shahjalal",
      "email": "dev.shahjalal@gmail.com"
    }
  },
  {
    "_id": "68852b14c78ef640a3f93929",
    "status": "accepted",
    "createdAt": "2025-07-26T19:23:00.489Z",
    "user": {
      "_id": "68852ad7c78ef640a3f9391d",
      "name": "Education Education",
      "email": "eeducation954@gmail.com"
    }
  },
  {
    "_id": "68852bc3c78ef640a3f9394c",
    "status": "accepted",
    "createdAt": "2025-07-26T19:25:55.283Z",
    "user": {
      "_id": "68852b90c78ef640a3f93940",
      "name": "ΰ¦—ΰ¦£ΰ¦Ώΰ¦¤ ΰ¦­ΰ¦Ύΰ¦²ΰ§‹ΰ¦¬ΰ¦Ύΰ¦Έΰ¦Ώ",
      "email": "gonitvalobasi@gmail.com"
    }
  },
  {
    "_id": "6885af7938458644e7af0c66",
    "status": "accepted",
    "createdAt": "2025-07-27T04:47:53.437Z",
    "user": {
      "_id": "6885aeac38458644e7af0c45",
      "name": "Abdullah Fahad",
      "email": "abdullahfahad@gmail.com"
    }
  }
]  random data RandomGuides.jsx 13
[05:20 AM 28-07-25] [
  {
    "_id": "688527d2c78ef640a3f9389c",
    "status": "accepted",
    "createdAt": "2025-07-26T19:09:06.889Z",
    "user": {
      "_id": "68852645c78ef640a3f93875",
      "name": "Learning English",
      "email": "mdshahjalal512@gmail.com"
    }
  },
  {
    "_id": "6885e22ae5bd6ac36ce24fb4",
    "status": "accepted",
    "createdAt": "2025-07-27T08:24:10.178Z",
    "user": {
      "_id": "6885e18be5bd6ac36ce24fa0",
      "name": "Jamal Ahamed",
      "email": "tourguide@example.com"
    }
  },
  {
    "_id": "68851f1a48e669e21a93e85b",
    "status": "accepted",
    "createdAt": "2025-07-26T18:31:54.566Z",
    "user": {
      "_id": "68851af3606080f1804fcc36",
      "name": "Md. Shahjalal",
      "email": "dev.shahjalal@gmail.com"
    }
  },
  {
    "_id": "68852b14c78ef640a3f93929",
    "status": "accepted",
    "createdAt": "2025-07-26T19:23:00.489Z",
    "user": {
      "_id": "68852ad7c78ef640a3f9391d",
      "name": "Education Education",
      "email": "eeducation954@gmail.com"
    }
  },
  {
    "_id": "68852bc3c78ef640a3f9394c",
    "status": "accepted",
    "createdAt": "2025-07-26T19:25:55.283Z",
    "user": {
      "_id": "68852b90c78ef640a3f93940",
      "name": "ΰ¦—ΰ¦£ΰ¦Ώΰ¦¤ ΰ¦­ΰ¦Ύΰ¦²ΰ§‹ΰ¦¬ΰ¦Ύΰ¦Έΰ¦Ώ",
      "email": "gonitvalobasi@gmail.com"
    }
  },
  {
    "_id": "6885af7938458644e7af0c66",
    "status": "accepted",
    "createdAt": "2025-07-27T04:47:53.437Z",
    "user": {
      "_id": "6885aeac38458644e7af0c45",
      "name": "Abdullah Fahad",
      "email": "abdullahfahad@gmail.com"
    }
  }
]  random data RandomGuides.jsx 13
[05:21 AM 28-07-25] [
  {
    "_id": "6885af7938458644e7af0c66",
    "status": "accepted",
    "createdAt": "2025-07-27T04:47:53.437Z",
    "user": {
      "_id": "6885aeac38458644e7af0c45",
      "name": "Abdullah Fahad",
      "email": "abdullahfahad@gmail.com"
    }
  },
  {
    "_id": "688527d2c78ef640a3f9389c",
    "status": "accepted",
    "createdAt": "2025-07-26T19:09:06.889Z",
    "user": {
      "_id": "68852645c78ef640a3f93875",
      "name": "Learning English",
      "email": "mdshahjalal512@gmail.com"
    }
  },
  {
    "_id": "68852b14c78ef640a3f93929",
    "status": "accepted",
    "createdAt": "2025-07-26T19:23:00.489Z",
    "user": {
      "_id": "68852ad7c78ef640a3f9391d",
      "name": "Education Education",
      "email": "eeducation954@gmail.com"
    }
  },
  {
    "_id": "68852bc3c78ef640a3f9394c",
    "status": "accepted",
    "createdAt": "2025-07-26T19:25:55.283Z",
    "user": {
      "_id": "68852b90c78ef640a3f93940",
      "name": "ΰ¦—ΰ¦£ΰ¦Ώΰ¦¤ ΰ¦­ΰ¦Ύΰ¦²ΰ§‹ΰ¦¬ΰ¦Ύΰ¦Έΰ¦Ώ",
      "email": "gonitvalobasi@gmail.com"
    }
  },
  {
    "_id": "6885e22ae5bd6ac36ce24fb4",
    "status": "accepted",
    "createdAt": "2025-07-27T08:24:10.178Z",
    "user": {
      "_id": "6885e18be5bd6ac36ce24fa0",
      "name": "Jamal Ahamed",
      "email": "tourguide@example.com"
    }
  },
  {
    "_id": "68851f1a48e669e21a93e85b",
    "status": "accepted",
    "createdAt": "2025-07-26T18:31:54.566Z",
    "user": {
      "_id": "68851af3606080f1804fcc36",
      "name": "Md. Shahjalal",
      "email": "dev.shahjalal@gmail.com"
    }
  }
]  random data RandomGuides.jsx 13
[05:21 AM 28-07-25] [
  {
    "_id": "6885af7938458644e7af0c66",
    "status": "accepted",
    "createdAt": "2025-07-27T04:47:53.437Z",
    "user": {
      "_id": "6885aeac38458644e7af0c45",
      "name": "Abdullah Fahad",
      "email": "abdullahfahad@gmail.com"
    }
  },
  {
    "_id": "688527d2c78ef640a3f9389c",
    "status": "accepted",
    "createdAt": "2025-07-26T19:09:06.889Z",
    "user": {
      "_id": "68852645c78ef640a3f93875",
      "name": "Learning English",
      "email": "mdshahjalal512@gmail.com"
    }
  },
  {
    "_id": "68852b14c78ef640a3f93929",
    "status": "accepted",
    "createdAt": "2025-07-26T19:23:00.489Z",
    "user": {
      "_id": "68852ad7c78ef640a3f9391d",
      "name": "Education Education",
      "email": "eeducation954@gmail.com"
    }
  },
  {
    "_id": "68852bc3c78ef640a3f9394c",
    "status": "accepted",
    "createdAt": "2025-07-26T19:25:55.283Z",
    "user": {
      "_id": "68852b90c78ef640a3f93940",
      "name": "ΰ¦—ΰ¦£ΰ¦Ώΰ¦¤ ΰ¦­ΰ¦Ύΰ¦²ΰ§‹ΰ¦¬ΰ¦Ύΰ¦Έΰ¦Ώ",
      "email": "gonitvalobasi@gmail.com"
    }
  },
  {
    "_id": "6885e22ae5bd6ac36ce24fb4",
    "status": "accepted",
    "createdAt": "2025-07-27T08:24:10.178Z",
    "user": {
      "_id": "6885e18be5bd6ac36ce24fa0",
      "name": "Jamal Ahamed",
      "email": "tourguide@example.com"
    }
  },
  {
    "_id": "68851f1a48e669e21a93e85b",
    "status": "accepted",
    "createdAt": "2025-07-26T18:31:54.566Z",
    "user": {
      "_id": "68851af3606080f1804fcc36",
      "name": "Md. Shahjalal",
      "email": "dev.shahjalal@gmail.com"
    }
  }
]  random data RandomGuides.jsx 13
```

### `contexts/AuthContext/AuthContext.jsx`
```javascript
import { createContext } from "react";

export const AuthContext = createContext(null);
```

### `contexts/AuthContext/AuthProvider.jsx`
```javascript
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../../firebase/firebase.init";
import axios from "axios";

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const googleProvder = new GoogleAuthProvider();

  const githubProvider = new GithubAuthProvider();

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvder);
  };
  const githubSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };
  // π”Ή Email-password sign-up
  const signupUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // β… Login with Email & Password
  const signinUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // π”Ή Update Firebase User Profile (displayName & photoURL)
  const updateUser = async (name, photoURL) => {
    if (!auth.currentUser) return;
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL,
    });
  };
  const authInfo = {
    googleSignIn,
    githubSignIn,
    loading,
    user,
    signoutUser,
    signinUser,
    signupUser,
    updateUser,
  };

  useEffect(() => {
    const cleanUp = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      setLoading(false);

      /* if (currentUser?.email) {
        axios
          .post(
            "http://localhost:5000/api/v1/auth/create-jwt",
            { email: currentUser.email },
            { withCredentials: true },
          )
          .then((res) => console.log(res.data))
          .catch((error) => console.log(error));
      } */
    });

    return () => cleanUp();
  }, []);
  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
```

### `docs/note.md`
```md
random imageapi https://avatar.iran.liara.run/public => it's take time to load
https://avatar.iran.liara.run/public
random api image need to change image number like, 39 to 40, 0, 1=>
https://xsgames.co/randomusers/assets/avatars/male/39.jpg
design philosophy
DeshGuide follows a night-themed, glow-pulse infused, and developer-optimized design philosophy. The UI is built to feel futuristic, animated, and intuitively navigable, using technologies like Tailwind CSS + DaisyUI, Framer Motion, AOS (Animate on Scroll), and custom glow effects. The experience aims to balance aesthetic polish with practical UX β€” ensuring information is accessible, layouts are responsive, and all interactions feel alive with smooth transitions and hover feedback. The project uses React + TanStack Query with a fully modular architecture, and prioritizes privacy-respecting, CLI-first workflows (Neovim, Tmux, Hyprland). Pages and components are structured for scalability, reusability, and clean separation of concerns, while the UI conveys a confident, hacker-style vibe inspired by modern terminal UIs, blending tech appeal with user clarity. Every visual element has intention: from pulse-hover buttons to blurred glowing cards β€” nothing feels static or dull.
```

### `docs/prompt.md`
```md
mashaallh bro, it's perfect currently it's the edit button take me to the edit page but i want
this will open a daisy ui modal and allow me to update the story data, i will give you next my update endpoint
```

### `firebase/firebase.init.js`
```javascript
// src/firebase/firebase.init.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
/* 
// Your web app's Firebase configuration
const firebaseConfig = {
  // import.meta.env
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
}; */

//healthcare32q@gmail.com // DeshGuide
const firebaseConfig = {

  apiKey: "AIzaSyB-ldVpHa1554RClJBfUCKC3K7hXMEZ9e8",

  authDomain: "deshguide.firebaseapp.com",

  projectId: "deshguide",

  storageBucket: "deshguide.firebasestorage.app",

  messagingSenderId: "879108306480",

  appId: "1:879108306480:web:7e6b06ddc96ed3a9125ff5"

};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
```

### `hooks/useAuth.jsx`
```javascript
import { use } from "react";
import { AuthContext } from "../contexts/AuthContext/AuthContext";

const useAuth = () => {
  const authInfo = use(AuthContext);
  return authInfo;
};

export default useAuth;
```

### `hooks/useAxiosSecure.jsx`
```javascript
import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router";
import React from "react";

// Create a single axios instance
export const axiosInstance = axios.create({
  // baseURL: `http://localhost:5000/api/v1/`,
  baseURL: "https://deshguide-server.vercel.app/api/v1/",
});

// Request interceptor: dynamically set Authorization header
const setupInterceptors = (getAccessToken, logOut, navigate) => {
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = getAccessToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error),
  );

  axiosInstance.interceptors.response.use(
    (res) => res,
    (error) => {
      const status = error.response?.status;
      if (status === 403) {
        navigate("/forbidden");
      } else if (status === 401) {
        logOut()
          .then(() => navigate("/login"))
          .catch(() => {});
      }
      return Promise.reject(error);
    },
  );
};

const useAxiosSecure = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  // Setup interceptors only once per hook usage
  React.useEffect(() => {
    setupInterceptors(() => user?.accessToken, logOut, navigate);
    // Cleanup: remove interceptors if needed (not shown for brevity)
    // eslint-disable-next-line
  }, [user, logOut, navigate]);

  return axiosInstance;
};

export default useAxiosSecure;
```

### `hooks/useFetchData.js`
```javascript
// src/hooks/useFetchData.jsx
import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useFetchData = (endpoint, query = {}) => {
  const axiosSecure = useAxiosSecure();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const res = await axiosSecure.get(endpoint, {
          params: query,
          signal: controller.signal,
        });
        setData(res.data?.data);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    return () => controller.abort();
  }, [endpoint, JSON.stringify(query), axiosSecure]);

  return { data, loading };
};

export default useFetchData;
```

### `hooks/useHelmet.jsx`
```javascript
import { Helmet } from "react-helmet-async";

const UseHelmet = ({ title }) => {
  return (
    <Helmet>
      <title>{title} || DeshGuide</title>
    </Helmet>
  );
};

export default UseHelmet;
```

### `hooks/usePostData.jsx`
```javascript
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import Swal from "sweetalert2";

export const darkSwal = Swal.mixin({
  background: "#111827",
  color: "#E5E7EB",
  confirmButtonColor: "#6366F1",
  cancelButtonColor: "#EF4444",
  customClass: {
    popup: "glow-border ",
  },
});

const usePostData = (customHandlers = {}) => {
  const axiosSecure = useAxiosSecure();

  const {
    mutateAsync: postData,
    isPending,
    isSuccess,
    isError,
    error,
    data,
    reset,
  } = useMutation({
    mutationFn: async ({ url, payload }) => {
      const res = await axiosSecure.post(url, payload);
      return res.data;
    },
    onError: (err) => {
      if (customHandlers?.onError) {
        customHandlers.onError(err);
      } else {
        darkSwal.fire({
          icon: "error",
          title: "Failed to Submit",
          text: err?.response?.data?.message || err.message,
        });
      }
    },
    onSuccess: (data) => {
      if (customHandlers?.onSuccess) {
        customHandlers.onSuccess(data);
      } else {
        darkSwal.fire({
          icon: "success",
          title: "Submitted!",
          text: data?.message || "Successfully posted!",
        });
      }
    },
  });

  return { postData, isPending, isSuccess, isError, error, data, reset };
};

export default usePostData;
```

### `hooks/useSecureQuery.jsx`
```javascript
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useSecureQuery = (queryKey, url, config = {}) => {
  const axiosSecure = useAxiosSecure();

  return useQuery({
    queryKey: Array.isArray(queryKey) ? queryKey : [queryKey],
    queryFn: async () => {
      const res = await axiosSecure.get(url, {
        params: config?.params || {}, // support query ?param=value
      });
      return res.data;
    },
    ...config,
  });
};

export default useSecureQuery;
```

### `hooks/useSecureUpdate.js`
```javascript
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useSecureUpdate = (url, config = {}) => {
  const axiosSecure = useAxiosSecure();

  return useMutation({
    mutationFn: async (data) => {
      const res = await axiosSecure.patch(url, data, {
        params: config?.params || {}, // support optional query params
      });
      return res.data;
    },
    ...config,
  });
};

export default useSecureUpdate;
```

### `hooks/useUserRole.jsx`
```javascript
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useUserRole = () => {
  const { user, loading: authLoading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: userData = null,
    isLoading: roleLoading,
    refetch,
  } = useQuery({
    queryKey: ["userRole", user?.email],
    enabled: !authLoading && !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`users/email/${user?.email}`);
      return res.data.data; // should be the full user object
    },
  });

  const role = userData?.role || "user";

  return {
    role,
    userData,
    roleLoading: authLoading || roleLoading,
    refetch,
  };
};

export default useUserRole;
```

### `index.css`
```css
@import url("https://fonts.googleapis.com/css2?family=Courgette&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Kaushan+Script&display=swap");

@import "tailwindcss";
@plugin "daisyui";
@plugin "@tailwindcss/typography";

@theme {
  --font-inter: "Inter", sans-serif;
  --font-kaushan: "Kaushan Script", cursive;
  --font-courgette: "Courgette", cursive;
}

/* body { */
/*   font-family: "Inter", sans-serif; */
/*   color: #6a7282; */
/*   background-color: black; */
/* } */

body {
  font-family: "Inter", sans-serif;
  color: #cbd5e1; /* slate-300 */
  background-color: #0f172a; /* slate-900 from Tailwind */
}
.flex-container {
  @apply flex  items-center justify-center;
}
.max-container {
  @apply max-w-7xl mx-auto;
}
.banner-container {
  @apply lg:flex flex-row-reverse items-center   justify-center mx-auto gap-8  p-4   rounded-md;
}
.hover-effect {
  @apply hover:shadow-lg hover:border hover:border-amber-500 transition-all duration-200 ease-in-out;
}

.flex-center {
  @apply flex items-center justify-center;
}

.pulse-glow {
  animation: pulse-glow 2s infinite;
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
}

.glow-border {
  @apply border border-indigo-500 rounded-lg shadow-lg;
  box-shadow: 0 0 20px rgba(99, 102, 241, 0.6);
}

/* Add this to your CSS or Tailwind layer */
.glow-text {
  text-shadow:
    0 0 4px #6366f1,
    0 0 8px #6366f1;
}

@keyframes jhilimili {
  0% {
    box-shadow: 0 0 5px #7f5af0;
  }
  50% {
    box-shadow: 0 0 10px #7f5af0;
  }
  100% {
    box-shadow: 0 0 5px #7f5af0;
  }
}

.jhilimili-glow {
  animation: jhilimili 1.5s infinite ease-in-out;
}

/* tailwind.css or a component style file */
.glow-effect {
  box-shadow:
    0 0 10px rgba(34, 211, 238, 0.7),
    0 0 20px rgba(34, 211, 238, 0.5);
}
.hover\:glow-effect:hover {
  box-shadow:
    0 0 15px rgba(255, 255, 255, 0.8),
    0 0 25px rgba(255, 255, 255, 0.3);
}
```

### `loggerClient.js`
```javascript
// src/loggerClient.js

export function setupClientLogging() {
  window.addEventListener("error", (event) => {
    if (import.meta.env.DEV) {
      fetch("/__error", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          args: [event.message, event.filename, event.lineno, event.colno],
        }),
      }).catch(() => {});
    }
  });

  window.addEventListener("unhandledrejection", (event) => {
    if (import.meta.env.DEV) {
      fetch("/__error", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          args: ["Unhandled Promise Rejection:", event.reason],
        }),
      }).catch(() => {});
    }
  });

  const originalLog = console.log;
  console.log = (...args) => {
    originalLog(...args); // still show in browser console

    if (import.meta.env.DEV) {
      fetch("/__log", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ args }),
      }).catch(() => {});
    }
  };
}
```

### `main.jsx`
```javascript
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { setupClientLogging } from "./loggerClient.js";

setupClientLogging();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

### `modules/Auth/AuthLayout.jsx`
```javascript
import { Outlet } from "react-router";
import { Navbar } from "../shared/Layout";
import AuthSidebar from "./components/AuthSidebar";

const AuthLayout = () => {
  return (
    <div className="mx-auto max-w-[1800px] p-4">
      {/* <Navbar /> */}
      <div className="xl:grid grid-cols-12 gap-10 order">
        <div className="col-span-9">
          <Outlet />
        </div>
        <div className="max-xl:hidden col-span-3 order border-red-500 mt-10 sticky top-[7rem] max-h-[calc(100vh-9rem)] overflow-y-auto">
          <AuthSidebar />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
```

### `modules/Auth/AuthRoute.jsx`
```javascript
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
```

### `modules/Auth/components/AuthSidebar.jsx`
```javascript
import { motion } from "framer-motion";
import { sidebarDatas } from "./constant";
import SideBarCard from "./SideBarCard";
import { bottomToTop } from "../../../animation/motion";

const AuthSidebar = () => {
  return (
    <motion.div
      className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] p-4 md:p-6 rounded-xl shadow-xl backdrop-blur-md border border-[#334155]/40 flex flex-col gap-6"
      {...bottomToTop}
    >
      <h2 className="text-2xl md:text-3xl font-extrabold text-center tracking-wide bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-indigo-400 bg-clip-text text-transparent">
        Why Join DeshGuide?
      </h2>

      <div className="flex flex-col gap-4">
        {sidebarDatas.map((sidebar, idx) => (
          <SideBarCard sideBar={sidebar} key={idx} />
        ))}
      </div>
    </motion.div>
  );
};

export default AuthSidebar;

/* import { bottomToTop } from "../../../animation/motion";
import { motion } from "motion/react";
import { sidebarDatas } from "./constant";
import SideBarCard from "./SideBarCard";

const AuthSidebar = () => {
  return (
    <motion.div
      className="bg-base-200 p-3 flex flex-col gap-8 rounded-md mb-5"
      {...bottomToTop}
    >
      <h2 className="text-xl font-bold text-purple-900 text-center">
        Why Sign In to EduVerse?
      </h2>

      {sidebarDatas.map((sidebar, idx) => (
        <SideBarCard sideBar={sidebar} key={idx} />
      ))}
    </motion.div>
  );
};

export default AuthSidebar; */
```

### `modules/Auth/components/constant.js`
```javascript
export const sidebarDatas = [
  {
    title: "π Discover Handpicked Tours",
    description:
      "Explore curated travel packages tailored to your mood, region, and vibe β€” from serene nature escapes to cultural deep-dives.",
  },
  {
    title: "π§­ Book With Confidence",
    description:
      "Securely book verified guides and trusted trips with real-time availability and transparent pricing β€” no surprises.",
  },
  {
    title: "β¨ Tell Your Travel Stories",
    description:
      "Share magical memories and photos from your journeys. Inspire others while keeping your travel timeline alive.",
  },
  {
    title: "π§‘β€βοΈ Join as a Tour Guide",
    description:
      "Turn your passion into profession. Apply as a tour guide, manage bookings, and get discovered by global travelers.",
  },
  {
    title: "π€ Real-Time Tour Management",
    description:
      "Track all your bookings, tours, and earnings in one sleek dashboard built for speed and clarity.",
  },
  {
    title: "π“… Instant Booking Updates",
    description:
      "Get notified when someone books, cancels, or reviews a trip β€” stay one step ahead of your itinerary.",
  },
  {
    title: "π” Search Local Experiences",
    description:
      "Dive into authentic experiences hosted by locals β€” from hidden gems to trending hotspots, all within a click.",
  },
  {
    title: "π’΅ Glow Mode Interface",
    description:
      "Experience a dark, immersive UI with glowing animations and pulse effects designed for late-night explorers.",
  },
  {
    title: "π¤ Connect With Fellow Travelers",
    description:
      "Find companions, plan group trips, or just exchange tips with passionate globetrotters like you.",
  },
  {
    title: "π–οΈ Verified Reviews & Stories",
    description:
      "Read genuine stories and ratings from past travelers to make informed decisions on your next adventure.",
  },
];
```

### `modules/Auth/components/SideBarCard.jsx`
```javascript
const SideBarCard = ({ sideBar }) => {
  const { title, description } = sideBar;

  return (
    <div
      className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] 
                 p-4 rounded-2xl shadow-md transition-all duration-300 
                 hover:scale-[1.02] hover:shadow-purple-500 
                 hover:glow-border hover:pulse-glow hover:bg-[#1e1b37]/50 cursor-default"
    >
      <h3 className="text-lg font-semibold bg-gradient-to-r from-[#302b63] via-purple-400 to-indigo-400 bg-clip-text text-transparent">
        {title}
      </h3>
      <p className="mt-1 text-sm text-gray-300">{description}</p>
    </div>
  );
};

export default SideBarCard;
```

### `modules/Auth/components/SigninForm.jsx`
```javascript
import { Link, useLocation, useNavigate } from "react-router";
import { useState } from "react";
import SocialLogin from "./SocialLogin";
import useAuth from "../../../hooks/useAuth";
import { swalErrorToast, swalSuccessToast } from "../../shared/ui/swalToast";

const SigninForm = () => {
  const { signinUser } = useAuth();
  const navigate = useNavigate();

  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      await signinUser(email, password);
      swalSuccessToast({ text: "You have signed in!" });
      setTimeout(() => {
        navigate(from, { replace: true });
      }, 2000);
    } catch (err) {
      setErrorMsg(err.message || "Failed to sign in");
      swalErrorToast({ text: "Invalid email or password!" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto bg-gradient-to-br from-[#0e0c2b] via-[#1a1843] to-[#121229] 
                 rounded-2xl border border-[#2f2b5c] p-6 shadow-md
                 backdrop-blur-md"
    >
      <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-indigo-400 via-purple-500 to-blue-400 bg-clip-text text-transparent mb-4">
        Sign In Now
      </h2>

      <fieldset className="space-y-4">
        {errorMsg && (
          <p className="text-sm text-red-500 text-center">{errorMsg}</p>
        )}

        <div>
          <label htmlFor="email" className="text-sm text-gray-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Write your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-full bg-[#1e1c3a] text-gray-200 placeholder-gray-500 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="text-sm text-gray-300">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Write your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-full bg-[#1e1c3a] text-gray-200 placeholder-gray-500 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            required
          />
        </div>

        <div className="text-right">
          <Link
            to="/auth/forgot-pass"
            className="text-sm text-blue-400 hover:underline"
          >
            Forgot your password?
          </Link>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 rounded-full bg-blue-600 hover:bg-blue-700 
                     text-white font-semibold transition-all duration-200 
                     hover:shadow-md hover:shadow-blue-500/30 pulse-glow
                     disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>

        <p className="text-sm text-center text-gray-400 mt-2">
          Not a member?{" "}
          <Link to="/auth/signup" className="text-blue-400 hover:underline">
            Sign Up
          </Link>
        </p>

        <SocialLogin />
      </fieldset>
    </form>
  );
};

export default SigninForm;
```

### `modules/Auth/components/Signout.jsx`
```javascript
import useAuth from "../../../hooks/useAuth";
import { swalSuccessToast } from "../../shared/ui/swalToast";

const Signout = ({ children }) => {
  const { signoutUser } = useAuth();

  const handleSignout = async () => {
    await signoutUser();

    swalSuccessToast({ text: "You have signed out!" });
  };
  return (
    <div onClick={handleSignout}>
      {children || <button className="btn">Sign Out</button>}
    </div>
  );
};

export default Signout;
```

### `modules/Auth/components/SignUpForm.jsx`
```javascript
import { Link, useLocation, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { Button, Input } from "../../shared/ui";
import SocialLogin from "./SocialLogin";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { darkSwal } from "../../../hooks/usePostData";
import { updateProfile } from "firebase/auth";
import { auth } from "../../../firebase/firebase.init";
import { swalErrorToast, swalSuccessToast } from "../../shared/ui/swalToast";

const SignUpForm = () => {
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const { signupUser } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, email, password, confirmPassword, photoURL } = data;

    if (password !== confirmPassword) {
      return swalErrorToast({
        title: "Password Mismatch",
        text: "Passwords do not match!",
      });
    }

    try {
      const res = await signupUser(email, password);
      console.log(res, "SignUpForm.jsx", 35);
      // β… Directly update Firebase user profile
      await updateProfile(auth?.currentUser, {
        displayName: name,
        photoURL: photoURL,
      });

      // Save to database
      const newUser = {
        name,
        email,
        photo: photoURL,
      };

      await axiosSecure.post("/users", newUser);

      swalSuccessToast({ text: "Account created successfully!" });

      reset();
      setTimeout(() => {
        navigate(from, { replace: true });
      }, 1500);
    } catch (err) {
      darkSwal.fire({
        icon: "error",
        title: "Signup Failed",
        text: err.message || "Something went wrong",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex-1 bg-base-200  border rounded-box w-fit p-4
      border-[#5f5f9f] rounded-2xl shadow-xl glow-border pulse-glow"
    >
      <h2 className="text-gray-500 text-2xl text-center font-bold">
        Sign Up Now
      </h2>

      <fieldset className="w-xs p-4 fieldset">
        <Input
          label="Name"
          placeholder="Write your name"
          className="mb-2 w-full sm:min-w-[400px] input-info rounded-full"
          {...register("name", { required: "Name is required" })}
        />
        <Input
          type="email"
          label="Email"
          placeholder="Write your email"
          className="mb-2 w-full sm:min-w-[400px] input-info rounded-full"
          {...register("email", { required: "Email is required" })}
        />
        <Input
          type="password"
          label="Password"
          placeholder="Write your password"
          className="mb-2 w-full sm:min-w-[400px] rounded-full input-info"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Minimum 6 characters required",
            },
          })}
        />
        <Input
          type="password"
          label="Confirm Password"
          placeholder="Write your password again"
          className="mb-2 w-full sm:min-w-[400px] rounded-full input-info"
          {...register("confirmPassword", {
            required: "Confirm your password",
            validate: (val) =>
              val === watch("password") || "Passwords do not match",
          })}
        />
        <Input
          type="text"
          label="Photo URL"
          placeholder="Provide your photo URL"
          className="w-full sm:min-w-[400px] rounded-full input-info"
          {...register("photoURL", { required: "Photo URL is required" })}
        />

        <Button className="btn-block btn-info rounded-full mt-3" variant="info">
          Sign Up
        </Button>
        <p className="mt-3 text-sm text-center">
          Already a member?{" "}
          <Link to="/auth/signin" className="text-blue-400 underline">
            Sign In
          </Link>
        </p>
        <SocialLogin />
      </fieldset>
    </form>
  );
};

export default SignUpForm;
```

### `modules/Auth/components/SocialLogin.jsx`
```javascript
import { Github, Facebook } from "lucide-react";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { darkSwal } from "../../../hooks/usePostData";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { swalSuccessToast } from "../../shared/ui/swalToast";

const SocialLogin = () => {
  const { googleSignIn, githubSignIn } = useAuth(); // Make sure githubSignIn is added in useAuth.js
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(false);

  const from = location?.state?.from?.pathname || "/";

  const handleSocialSignIn = async (providerFunc, providerName) => {
    if (loading) return;
    setLoading(true);
    try {
      const userCred = await providerFunc();
      const user = userCred?.user;

      await axiosSecure.post("/users", {
        name: user?.displayName || `${providerName} User`,
        email: user?.email,
        photoURL: user?.photoURL || "",
      });

      swalSuccessToast({ text: "You have signed in!" });

      setTimeout(() => {
        navigate(from, { replace: true });
      }, 2000);
    } catch (err) {
      console.error(`${providerName} Sign-in failed`, err);
      darkSwal.fire("Error", `${providerName} Sign-in failed`, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full mt-6">
      <div className="divider text-gray-400">Or continue with</div>
      <div className="flex max-sm:flex-wrap justify-center gap-4 mt-4">
        {/* Google */}
        <button
          onClick={() => handleSocialSignIn(googleSignIn, "Google")}
          disabled={loading}
          className="flex items-center gap-2 px-4 py-2 w-full max-w-[180px] bg-white text-gray-800 border border-gray-300 rounded-full hover:shadow-md transition duration-200 disabled:opacity-50"
        >
          <svg
            aria-label="Google logo"
            width="18"
            height="18"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="M0 0h512v512H0z" fill="#fff" />
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              />
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              />
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              />
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              />
            </g>
          </svg>
          <span className="text-sm font-medium">Google</span>
        </button>

        {/* GitHub */}
        <button
          onClick={() => handleSocialSignIn(githubSignIn, "GitHub")}
          disabled={loading}
          className="flex items-center gap-2 px-4 py-2 w-full max-w-[180px] bg-neutral text-white rounded-full hover:bg-neutral-focus transition duration-200 disabled:opacity-50"
        >
          <Github size={18} />
          <span className="text-sm font-medium">GitHub</span>
        </button>

        {/* Facebook (Optional placeholder only) */}
        <button
          disabled
          className="flex items-center gap-2 px-4 py-2 w-full max-w-[180px] bg-blue-600 text-white rounded-full cursor-not-allowed opacity-50"
        >
          <Facebook size={18} />
          <span className="text-sm font-medium">Facebook</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;

// import { Github, Facebook } from "lucide-react";
// import Swal from "sweetalert2";
// import { useLocation, useNavigate } from "react-router";
// import useAuth from "../../../hooks/useAuth";
// import { darkSwal } from "../../../hooks/usePostData";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
//
// const SocialLogin = () => {
//   const { googleSignIn } = useAuth();
//   const navigate = useNavigate();
//   const location = useLocation();
//
//   const axiosSecure = useAxiosSecure();
//
//   const handleGoogleSignIn = async (e) => {
//     e.preventDefault();
//     try {
//       const user = await googleSignIn();
//
//       await axiosSecure.post("users", {
//         name: user?.displayName,
//         email: user?.email,
//         photoURL: user?.photoURL,
//       });
//
//       darkSwal.fire({
//         position: "center",
//         icon: "success",
//         title: "Sign in Success!",
//         text: "You have successfully signed in",
//         showConfirmButton: false,
//         timer: 2000,
//       });
//
//       setTimeout(() => {
//         navigate("/");
//       }, 3000);
//     } catch (err) {
//       console.error("Google Sign-in failed", err);
//       darkSwal.fire("Error", "Google Sign-in failed", "error");
//     }
//   };
//
//   return (
//     <div className="w-full mt-6">
//       <div className="divider text-gray-400">Or continue with</div>
//       <div className="flex max-sm:flex-wrap justify-center gap-4 mt-4">
//         {/* Google */}
//         <button
//           onClick={handleGoogleSignIn}
//           className="flex items-center gap-2 px-4 py-2 w-full max-w-[180px] bg-white text-gray-800 border border-gray-300 rounded-full hover:shadow-md transition duration-200"
//         >
//           <svg
//             aria-label="Google logo"
//             width="18"
//             height="18"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 512 512"
//           >
//             <g>
//               <path d="M0 0h512v512H0z" fill="#fff" />
//               <path
//                 fill="#34a853"
//                 d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
//               />
//               <path
//                 fill="#4285f4"
//                 d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
//               />
//               <path
//                 fill="#fbbc02"
//                 d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
//               />
//               <path
//                 fill="#ea4335"
//                 d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
//               />
//             </g>
//           </svg>
//           <span className="text-sm font-medium">Google</span>
//         </button>
//
//         {/* GitHub */}
//         <button className="flex items-center gap-2 px-4 py-2 w-full max-w-[180px] bg-neutral text-white rounded-full hover:bg-neutral-focus transition duration-200">
//           <Github size={18} />
//           <span className="text-sm font-medium">GitHub</span>
//         </button>
//
//         {/* Facebook */}
//         <button className="flex items-center gap-2 px-4 py-2 w-full max-w-[180px] bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-200">
//           <Facebook size={18} />
//           <span className="text-sm font-medium">Facebook</span>
//         </button>
//       </div>
//     </div>
//   );
// };
//
// export default SocialLogin;
```

### `modules/Auth/index.js`
```javascript
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";
import SocialLogin from "./components/SocialLogin";
import AuthSidebar from "./components/AuthSidebar";
import SigninForm from "./components/SigninForm";
import AuthLayoout from "./AuthLayout";
export { Signin, SignUp, SocialLogin, AuthSidebar, SigninForm, AuthLayoout };
```

### `modules/Auth/pages/ForgotPass.jsx`
```javascript
import { motion } from "motion/react";
import { Link } from "react-router";
import { Input } from "../../shared/ui";
import { useMediaQuery } from "react-responsive";
import { animate } from "motion";
import { leftToRight, rightToLeft } from "../../../animation/motion";

const ForgotPassword = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-80px)] p-4 gap-15 max-lg:flex-col-reverse">
      <motion.div className="flex-1 max-w-[400px]" {...leftToRight}>
        <img
          className="rounded-lg shadow-lg"
          src="https://images.deepai.org/art-image/3a37098281184deeb6636ac5c7b47257/a-calm-and-hopeful-scene-of-a-person-sitting-at-a-des.jpg"
        />
      </motion.div>
      <motion.div
        className="flex justify-center  rounded py-7 px-2"
        {...rightToLeft}
      >
        <form className="flex-1 card w-full max-w-sm h-fit hadow-sm bg-gray-50 sm:p-8 max-sm:p-4 ">
          <h2 className=" text-2xl max-sm:text-xl font-semibold mb-4 text-center">
            Forgot Password?
          </h2>
          <p className="text-sm text-center text-gray-600 mb-6">
            Enter your email address and we'll send you a link to reset your
            password.
          </p>

          {/* Email Input Field */}
          <Input
            label="Email"
            // In a real component, these would be connected to state:
            // value={''}
            // onChange={() => {}}
            // error={''}
            required
          />

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn btn-primary"
              // In a real component, this would be disabled based on loading state:
              // disabled={false}
            >
              Send Reset Link
            </button>
          </div>

          {/* Back to Sign In Link */}
          <p className="text-center mt-6 text-sm">
            Remember your password?{" "}
            {/* Use Link component if you are using React Router */}
            {/* <Link to="/signin" className="link link-primary">Sign In</Link> */}
            <Link to="/auth/signin" className="link link-primary">
              Sign In
            </Link>
            {/* Fallback if not using Link */}
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
```

### `modules/Auth/pages/Signin.jsx`
```javascript
import { Link } from "react-router";
import { motion } from "framer-motion";
import SigninForm from "../components/SigninForm";
import LottieAnimation from "../../../animation/LottieAnimation";
import { authLottie } from "../../../animation";
import {
  leftToRight,
  rightToLeft,
  topToBottom,
} from "../../../animation/motion";
import UseHelmet from "../../../hooks/useHelmet";

const Signin = () => {
  return (
    <div className="min-h-[85vh] mt-10 px-4 py-12 bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] rounded-2xl shadow-xl glow-border pulse-glow">
      <UseHelmet title="Sign in" />

      {/* Heading */}
      <motion.div
        className="max-w-xl mx-auto text-center mb-10"
        {...topToBottom}
      >
        <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-400 via-purple-500 to-blue-400 bg-clip-text text-transparent drop-shadow-md">
          DeshGuide connects explorers with unforgettable journeys.
        </h2>
        <p className="mt-3 text-sm text-gray-300">
          Discover breathtaking destinations, trusted tour guides, and tailored
          travel experiences β€” all in one platform.
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-around gap-10">
        {/* Lottie */}
        <motion.div
          className="max-w-[480px] bg-gradient-to-br from-[#1e1e3f] via-[#2e2e5e] to-[#1e1e3f] rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.015] hover:shadow-purple-500/20 glow-border"
          {...leftToRight}
        >
          <LottieAnimation anime={authLottie} />
        </motion.div>

        {/* Signin Form */}
        <motion.div
          className="max-w-[480px] w-full bg-base-10  hover:shadow-purple-500/10 transition-all duration-300"
          {...rightToLeft}
        >
          <SigninForm />
        </motion.div>
      </div>
    </div>
  );
};

export default Signin;
```

### `modules/Auth/pages/SignUp.jsx`
```javascript
import { authLottie } from "../../../animation";
import LottieAnimation from "../../../animation/LottieAnimation";
import SignUpForm from "../components/SignUpForm";
import UseHelmet from "../../../hooks/useHelmet";
import { motion } from "framer-motion";
import {
  bottomToTop,
  leftToRight,
  rightToLeft,
} from "../../../animation/motion";

const SignUp = () => {
  return (
    <div className="min-h-[85vh] mt-10 px-4 py-12 rounded-2xl bg-gradient-to-br from-[#0e0e1c] via-[#11111f] to-[#0e0e1c] shadow-xl border border-[#1d1d2f] relative z-10">
      <UseHelmet title="Sign up - DeshGuide" />

      <motion.div className="max-w-xl mx-auto text-center" {...bottomToTop}>
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent drop-shadow-sm">
          DeshGuide empowers your travel journey.
        </h2>
        <p className="text-gray-400 text-sm mt-2">
          Sign up to explore exciting destinations, connect with local guides,
          and experience Bangladesh like never before.
        </p>
      </motion.div>

      <div className="flex flex-col-reverse lg:flex-row items-center justify-around gap-10 mt-10">
        {/* Left side animation */}
        <motion.div
          className="w-full max-w-md bg-[#141423] rounded-2xl border border-[#262637] p-5 shadow hover:shadow-xl hover:glow-border transition-all duration-300"
          {...rightToLeft}
        >
          <LottieAnimation anime={authLottie} />
        </motion.div>

        {/* Right side form */}
        <motion.div
          className=" hover:shadow-lg hover:glow-border"
          {...leftToRight}
        >
          <SignUpForm />
        </motion.div>
      </div>
    </div>
  );
};

export default SignUp;
```

### `modules/Dashbaord/AddStories/AddStories.jsx`
```javascript
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useUserRole from "../../../hooks/useUserRole";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { darkSwal } from "../../../hooks/usePostData";

const AddStories = () => {
  const { user } = useAuth();
  const { userData } = useUserRole();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Mutation to post story
  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (payload) => {
      const res = await axiosSecure.post("/stories", payload);
      return res.data;
    },
    onSuccess: () => {
      darkSwal.fire("Success!", "Your story has been posted.", "success");
      // navigate("/stories"); // redirect to stories page
      setTimeout(() => {
        navigate("/dashboard/manage-stories");
      }, 2000);
    },
    onError: (err) => {
      console.error(err);
      toast.error("Failed to post story.");
      darkSwal.fire("Error!", err.message || "Failed to post story.", "error");
    },
  });

  const onSubmit = async (data) => {
    const payload = {
      title: data.title,
      description: data.description,
      images: data.images.split(",").map((url) => url.trim()),
      userId: userData?._id,
      userName: userData?.name,
      userPhoto: user?.photoURL,
    };

    await mutateAsync(payload);
  };

  return (
    <div
      className="max-w-4xl mx-auto px-4 py-10 glow-border"
      data-aos="fade-up"
    >
      <h2 className="text-3xl font-bold mb-6 text-white">Share Your Story</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-white mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            {...register("title", { required: "Title is required" })}
            className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="description" className="block text-white mb-1">
            Description
          </label>
          <textarea
            id="description"
            rows={4}
            {...register("description", {
              required: "Description is required",
            })}
            className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="images" className="block text-white mb-1">
            Image URLs (comma separated)
          </label>
          <input
            type="text"
            id="images"
            {...register("images", {
              required: "At least one image URL is required",
            })}
            className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          {errors.images && (
            <p className="text-red-500 text-sm">{errors.images.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-full shadow-md transition disabled:opacity-50 jhilimili-glow glow-effect"
        >
          {isPending ? "Posting..." : "Post Story"}
        </button>
      </form>
    </div>
  );
};

export default AddStories;
```

### `modules/Dashbaord/Admin/AddPackage/AddPackage.jsx`
```javascript
import { useForm, useFieldArray, useWatch } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { darkSwal } from "../../../../hooks/usePostData";

const AddPackage = () => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      price: "",
      days: 1,
      tripType: "Adventure",
      location: "",
      gallery: ["", ""],
      tourPlan: [{ day: 1, activities: "" }],
    },
  });

  const { fields, append, remove, replace } = useFieldArray({
    control,
    name: "tourPlan",
  });

  const days = useWatch({ control, name: "days" });

  // Auto-adjust tourPlan array based on days
  useEffect(() => {
    const numDays = Number(days) || 1;
    const currentPlans = getValues("tourPlan") || [];
    const newPlans = [];

    for (let i = 1; i <= numDays; i++) {
      newPlans.push(currentPlans[i - 1] || { day: i, activities: "" });
    }
    replace(newPlans);
  }, [days, replace, getValues]);

  // Mutation for POST
  const mutation = useMutation({
    mutationFn: async (data) => {
      const res = await axiosSecure.post("/packages", data);
      return res.data;
    },
    onSuccess: () => {
      darkSwal.fire({
        icon: "success",
        title: "Package Added",
        text: "Your travel package has been successfully posted!",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
      });
      setTimeout(() => navigate("/all-trips"), 500);
    },
    onError: (error) => {
      darkSwal.fire({
        icon: "error",
        title: "Failed",
        text: error?.response?.data?.message || "Something went wrong!",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
      });
    },
  });

  // Validate TourPlan
  const validateTourPlan = () => {
    const numDays = Number(getValues("days"));
    const requiredDays = Math.min(numDays, 4); // First 4 days required
    const plans = getValues("tourPlan");

    for (let i = 0; i < requiredDays; i++) {
      if (!plans[i]?.activities?.trim()) return false;
    }
    return true;
  };

  const onSubmit = (data) => {
    data.price = Number(data.price);
    data.days = Number(data.days);
    data.tourPlan.forEach((plan, i) => {
      plan.day = i + 1;
    });

    if (!validateTourPlan()) {
      darkSwal.fire({
        icon: "warning",
        title: "Incomplete Tour Plan",
        text: `Please fill activities for Day 1 to Day ${Math.min(data.days, 4)}.`,
        background: "#0f172a",
        color: "#fff",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
      });
      return;
    }

    mutation.mutate(data);
  };

  return (
    <motion.div
      className="max-w-4xl mx-auto p-6 rounded-2xl bg-[#0f172a] text-white shadow-2xl border border-[#1f2937] mt-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      data-aos="fade-up"
    >
      <h1 className="text-3xl font-bold mb-6 text-center glow-text">
        Add New Travel Package
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Title */}
        <div>
          <label className="label">Title</label>
          <input
            {...register("title", { required: "Title is required" })}
            className="input input-bordered w-full bg-[#1e293b] text-white focus:input-accent"
            placeholder="Sajek Adventure"
          />
          {errors.title && (
            <p className="text-red-400 mt-1">{errors.title.message}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="label">Description</label>
          <textarea
            {...register("description", {
              required: "Description is required",
              minLength: {
                value: 10,
                message: "At least 10 characters required",
              },
            })}
            className="textarea textarea-bordered w-full bg-[#1e293b] text-white focus:textarea-accent"
            placeholder="A trip to the scenic Sajek Valley"
          />
          {errors.description && (
            <p className="text-red-400 mt-1">{errors.description.message}</p>
          )}
        </div>

        {/* Price + Days */}
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="label">Price (ΰ§³)</label>
            <input
              type="number"
              {...register("price", {
                required: "Price is required",
                min: { value: 1, message: "Price must be positive" },
              })}
              className="input input-bordered w-full bg-[#1e293b] text-white focus:input-accent"
              placeholder="4500"
            />
            {errors.price && (
              <p className="text-red-400 mt-1">{errors.price.message}</p>
            )}
          </div>
          <div className="flex-1">
            <label className="label">Days</label>
            <input
              type="number"
              {...register("days", {
                required: "Days required",
                min: { value: 1, message: "At least 1 day" },
              })}
              className="input input-bordered w-full bg-[#1e293b] text-white focus:input-accent"
              placeholder="3"
            />
            {errors.days && (
              <p className="text-red-400 mt-1">{errors.days.message}</p>
            )}
          </div>
        </div>

        {/* Trip Type */}
        <div>
          <label className="label">Trip Type</label>
          <select
            {...register("tripType", { required: true })}
            className="select select-bordered w-full bg-[#1e293b] text-white focus:select-accent"
          >
            <option value="Adventure">Adventure</option>
            <option value="Relaxation">Relaxation</option>
            <option value="Cultural">Cultural</option>
            <option value="Nature">Nature</option>
            <option value="Historical">Historical</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="label">Location</label>
          <input
            {...register("location", { required: "Location is required" })}
            className="input input-bordered w-full bg-[#1e293b] text-white focus:input-accent"
            placeholder="Sajek"
          />
          {errors.location && (
            <p className="text-red-400 mt-1">{errors.location.message}</p>
          )}
        </div>

        {/* Gallery URLs */}
        <div>
          <label className="label">Gallery URLs</label>
          {["gallery.0", "gallery.1"].map((field, idx) => (
            <div key={idx} className="mb-2">
              <input
                {...register(field, {
                  required: `Image ${idx + 1} URL required`,
                  pattern: {
                    value: /^https?:\/\/.*\.(jpg|jpeg|png|webp|gif)$/i,
                    message: "Must be a valid image URL",
                  },
                })}
                className="input input-bordered bg-[#1e293b] text-white w-full focus:input-accent"
                placeholder={`https://img.url/${idx + 1}.jpg`}
              />
              {errors.gallery?.[idx] && (
                <p className="text-red-400 mt-1">
                  {errors.gallery[idx].message}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Tour Plan */}
        <div>
          <label className="label">Tour Plan</label>
          {fields.map((item, index) => (
            <div
              key={item.id}
              className="grid grid-cols-12 gap-2 items-center mb-2"
            >
              <input
                type="number"
                {...register(`tourPlan.${index}.day`)}
                className="input input-sm col-span-2 input-bordered bg-[#1e293b] text-white"
                readOnly
              />
              <input
                {...register(`tourPlan.${index}.activities`, {
                  required:
                    index < 4
                      ? `Activities for Day ${index + 1} required`
                      : false,
                })}
                className="input input-sm col-span-9 input-bordered bg-[#1e293b] text-white"
                placeholder="Activities"
              />
              {fields.length > 1 && index >= 4 && (
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="btn btn-sm btn-error col-span-1"
                >
                  β•
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={() => append({ day: fields.length + 1, activities: "" })}
            className="btn btn-outline btn-accent mt-2 hover:shadow-[0_0_10px_#38bdf8] hover:scale-105 transition-all"
          >
            β• Add Day
          </button>
        </div>

        {/* Submit */}
        <div className="text-center mt-6">
          <button
            type="submit"
            className="btn btn-primary px-10 text-lg tracking-wide transition hover:scale-105 hover:shadow-[0_0_15px_#3b82f6] duration-300 rounded-full"
          >
            π€ Add Package
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default AddPackage;
```

### `modules/Dashbaord/Admin/Bookings/AllBookings.jsx`
```javascript
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { Link } from "react-router";
const AllBookings = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["all-bookings"],
    queryFn: async () => {
      const res = await axiosSecure.get("/bookings");
      return res.data.data;
    },
  });

  const updateStatus = useMutation({
    mutationFn: async ({ id, status }) => {
      await axiosSecure.patch(`/bookings/${id}`, { status });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["all-bookings"]);
      Swal.fire("Success", "Booking status updated!", "success");
    },
    onError: () => {
      Swal.fire("Error", "Failed to update booking", "error");
    },
  });

  const handleUpdateStatus = (id, status) => {
    Swal.fire({
      title: `Confirm ${status}?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
      background: "#111",
      color: "#eee",
    }).then((result) => {
      if (result.isConfirmed) {
        updateStatus.mutate({ id, status });
      }
    });
  };

  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-bold mb-4 text-center glow-text">
        π“¦ All Bookings
      </h2>

      {isLoading ? (
        <div className="text-center text-lg animate-pulse">
          Loading bookings...
        </div>
      ) : bookings.length === 0 ? (
        <div className="text-center text-gray-400 mt-10">No bookings found</div>
      ) : (
        <div className="overflow-x-auto shadow-lg glow-border rounded-xl">
          <table className="table table-zebra table-sm w-full text-sm">
            <thead className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white">
              <tr>
                <th>#</th>
                <th>Tourist</th>
                <th>Package</th>
                <th>Tour Date</th>
                <th>Price</th>
                <th>Status</th>
                <th>Payment</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody data-aos="fade-up-left">
              {bookings.map((booking, index) => (
                <motion.tr
                  key={booking._id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03 }}
                  className="hover:bg-[#1f2937]/60 transition duration-200"
                >
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <img
                        src={booking.touristPhoto}
                        alt={booking.touristName}
                        className="w-8 h-8 rounded-full border-2 border-white"
                      />
                      <span>{booking.touristName}</span>
                    </div>
                  </td>
                  <td>{booking.packageName}</td>
                  <td>{new Date(booking.tourDate).toLocaleDateString()}</td>
                  <td className="text-green-400">${booking.price}</td>
                  <td>
                    <span
                      className={`badge badge-sm ${
                        booking.status === "completed"
                          ? "badge-success"
                          : booking.status === "canceled"
                            ? "badge-error"
                            : "badge-warning"
                      }`}
                    >
                      {booking.status}
                    </span>
                  </td>
                  <td>
                    <span
                      className={`badge badge-outline ${
                        booking.paymentStatus === "paid"
                          ? "text-green-300"
                          : "text-red-400"
                      }`}
                    >
                      {booking.paymentStatus}
                    </span>
                  </td>
                  <td className="flex gap-2">
                    <Link
                      className="badge badge-sm badge-info"
                      to={`/dashboard/bookings/${booking._id}`}
                    >
                      Details
                    </Link>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllBookings;
```

### `modules/Dashbaord/Admin/Bookings/BookingDetails.jsx`
```javascript
// src/pages/BookingDetails.jsx
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Spinner from "../../../shared/Layout/Spinner";

const BookingDetails = () => {
  const { bookingId } = useParams();
  const axiosSecure = useAxiosSecure();

  const { data, isLoading } = useQuery({
    queryKey: ["booking-details", bookingId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookings/${bookingId}`);
      return res.data?.data;
    },
    enabled: !!bookingId,
  });

  console.log(bookingId, "bookingId BookingDetails.jsx", 14);
  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-xl text-white animate-pulse">
        Loading booking details...
        <Spinner />
      </div>
    );
  }

  const {
    packageId,
    touristId,
    guideId,
    price,
    status,
    paymentStatus,
    tourDate,
    createdAt,
  } = data || {};

  return (
    <motion.div
      className="max-w-5xl mx-auto px-4 py-10 text-white space-y-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2
        className="text-3xl font-bold text-center glow-text uppercase"
        data-aos="zoom-in"
      >
        Booking Details
      </h2>

      {/* Package Details */}
      <div
        className="bg-[#101010] rounded-2xl p-6 border glow-border space-y-3"
        data-aos="fade-up-right"
      >
        <h3 className="text-xl font-semibold">Package Information</h3>
        <p>
          <span className="font-medium">Title:</span> {packageId?.title}
        </p>
        <p>
          <span className="font-medium">Location:</span> {packageId?.location}
        </p>
        <p>
          <span className="font-medium">Price:</span> ΰ§³{packageId?.price}
        </p>
        <p>
          <span className="font-medium">Days:</span> {packageId?.days}
        </p>
        <div>
          <span className="font-medium">Gallery:</span>
          <div className="flex gap-2 mt-2">
            {packageId?.gallery?.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`gallery-${idx}`}
                className="w-20 h-20 object-cover rounded-lg border border-white/20 hover:scale-105 transition"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Tourist Info */}
      <div
        className="bg-[#101010] rounded-2xl p-6 border glow-border space-y-3"
        data-aos="fade-up-left"
      >
        <h3 className="text-xl font-semibold">Tourist Info</h3>
        <div className="flex items-center gap-4">
          <img
            src={touristId?.photoURL}
            className="w-16 h-16 rounded-full border"
            alt="Tourist"
          />
          <div>
            <p>
              <span className="font-medium">Name:</span> {touristId?.name}
            </p>
            <p>
              <span className="font-medium">Email:</span> {touristId?.email}
            </p>
          </div>
        </div>
      </div>

      {/* Guide Info */}
      <div
        className="bg-[#101010] rounded-2xl p-6 border glow-border space-y-3"
        data-aos="fade-up-right"
      >
        <h3 className="text-xl font-semibold">Guide Info</h3>
        <div className="flex items-center gap-4">
          <img
            src={guideId?.photoURL}
            className="w-16 h-16 rounded-full border"
            alt="Guide"
          />
          <div>
            <p>
              <span className="font-medium">Name:</span> {guideId?.name}
            </p>
            <p>
              <span className="font-medium">Email:</span> {guideId?.email}
            </p>
          </div>
        </div>
      </div>

      {/* Booking Meta Info */}
      <div
        className="bg-[#101010] rounded-2xl p-6 border glow-border space-y-3"
        data-aos="fade-up-left"
      >
        <h3 className="text-xl font-semibold">Booking Summary</h3>
        <p>
          <span className="font-medium">Booking ID:</span> {data?._id}
        </p>
        <p>
          <span className="font-medium">Tour Date:</span>{" "}
          {new Date(tourDate).toLocaleDateString()}
        </p>
        <p>
          <span className="font-medium">Created At:</span>{" "}
          {new Date(createdAt).toLocaleString()}
        </p>
        <p>
          <span className="font-medium">Status:</span>
          <span
            className={`ml-2 badge ${status === "accepted" ? "badge-success" : "badge-warning"}`}
          >
            {status}
          </span>
        </p>
        <p>
          <span className="font-medium">Payment:</span>
          <span
            className={`ml-2 badge ${paymentStatus === "paid" ? "badge-accent" : "badge-secondary"}`}
          >
            {paymentStatus}
          </span>
        </p>
        <p>
          <span className="font-medium">Price Paid:</span> ΰ§³{price}
        </p>
      </div>
    </motion.div>
  );
};

export default BookingDetails;
```

### `modules/Dashbaord/Admin/ManageCandidate/CandidateCard.jsx`
```javascript
const CandidateCard = ({
  candidate,
  processedRequests,
  acceptMutation,
  rejectMutation,
}) => {
  const status = processedRequests[candidate._id] || candidate.status;
  const isDisabled = status === "accepted" || status === "rejected";

  return (
    <div
      key={candidate._id}
      className="bg-[#1e293b] rounded-xl p-4 border border-indigo-600 jhilimili-glow"
      data-aos="fade-up-right"
    >
      <div className="flex justify-between sm:items-center mb-2 max-sm:flex-col">
        <div>
          <h2 className="text-xl max-sm:text-sm font-semibold text-cyan-300 text-wrap">
            {candidate.userId.name} ({candidate.userId.email})
          </h2>
          <p className="text-sm text-indigo-400">{candidate.title}</p>
        </div>
        <span
          className={`badge ${
            status === "accepted"
              ? "badge-success"
              : status === "rejected"
                ? "badge-error"
                : "badge-warning"
          }`}
        >
          {status}
        </span>
      </div>

      <p className="mb-1 text-slate-300">
        <span className="font-medium">Reason:</span> {candidate.reason}
      </p>
      <p className="mb-3 text-sky-400 underline">
        <a href={candidate.cvLink} target="_blank" rel="noreferrer">
          View CV
        </a>
      </p>

      <div className="flex gap-4">
        <button
          disabled={isDisabled}
          onClick={() => acceptMutation.mutate({ requestId: candidate._id })}
          className={`btn btn-sm glow-effect transition ${
            status === "accepted" ? "btn-success" : "btn-outline btn-success"
          }`}
        >
          {status === "accepted" ? "β… Accepted" : "β… Accept"}
        </button>

        <button
          disabled={isDisabled}
          onClick={() => rejectMutation.mutate(candidate._id)}
          className={`btn btn-sm glow-effect transition ${
            status === "rejected" ? "btn-error" : "btn-outline btn-error"
          }`}
        >
          {status === "rejected" ? "β Rejected" : "β Reject"}
        </button>
      </div>
    </div>
  );
};

export default CandidateCard;
```

### `modules/Dashbaord/Admin/ManageCandidate/ManageCandidate.jsx`
```javascript
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { useState } from "react";
import CandidateCard from "./CandidateCard";

const ManageCandidate = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const [processedRequests, setProcessedRequests] = useState({});

  // Fetch candidates
  const { data: candidateData = [], isLoading } = useQuery({
    queryKey: ["tour-guide-requests"],
    queryFn: async () => {
      const res = await axiosSecure.get("/tour-guide-requests");
      return res.data?.data || [];
    },
  });

  // Accept mutation
  const acceptMutation = useMutation({
    mutationFn: async ({ requestId }) => {
      await axiosSecure.patch(`tour-guide-requests/${requestId}`, {
        status: "accepted",
      });
    },
    onSuccess: (_, { requestId }) => {
      setProcessedRequests((prev) => ({
        ...prev,
        [requestId]: "accepted",
      }));
      queryClient.invalidateQueries(["tour-guide-requests"]);
      Swal.fire({
        icon: "success",
        title: "Accepted!",
        text: "User is now a tour guide.",
        toast: true,
        timer: 2000,
        background: "#0f172a",
        color: "#fff",
        showConfirmButton: false,
      });
    },
  });

  // Reject mutation
  const rejectMutation = useMutation({
    mutationFn: async (requestId) => {
      await axiosSecure.delete(`/tour-guide-requests/${requestId}`);
    },
    onSuccess: (_, requestId) => {
      setProcessedRequests((prev) => ({
        ...prev,
        [requestId]: "rejected",
      }));
      queryClient.invalidateQueries(["tour-guide-requests"]);
      Swal.fire({
        icon: "info",
        title: "Rejected",
        text: "Application removed.",
        toast: true,
        timer: 2000,
        background: "#0f172a",
        color: "#fff",
        showConfirmButton: false,
      });
    },
  });

  return (
    <motion.div
      className="max-w-5xl mx-auto mt-10 p-6 bg-[#0f172a] text-white rounded-xl border border-indigo-800 glow-border shadow-2xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h1 className="sm:text-3xl text-xl font-bold text-center mb-8 glow-text pulse-glow">
        Manage Tour Guide Candidates
      </h1>

      {isLoading ? (
        <p className="text-center text-indigo-300">Loading candidates...</p>
      ) : candidateData.length === 0 ? (
        <p className="text-center text-gray-400">No candidates found.</p>
      ) : (
        <div className="space-y-6">
          {candidateData.map((candidate) => {
            return (
              <CandidateCard
                key={candidate._id}
                candidate={candidate}
                processedRequests={processedRequests}
                acceptMutation={acceptMutation}
                rejectMutation={rejectMutation}
              />
            );
          })}
        </div>
      )}
    </motion.div>
  );
};

export default ManageCandidate;
```

### `modules/Dashbaord/Admin/ManageUsers/ManageUsers.jsx`
```javascript
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useState } from "react";
import Select from "react-select";
import UsersRow from "./UsersRow";

const roleOptions = [
  { value: "", label: "All Roles" },
  { value: "tourist", label: "Tourist" },
  { value: "tour-guide", label: "Tour Guide" },
  { value: "admin", label: "Admin" },
];

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("");

  const {
    data: users = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["users", search, role],
    queryFn: async () => {
      const params = {};
      if (search) params.search = search;
      if (role) params.role = role;
      const res = await axiosSecure.get("/users", { params });
      return res.data?.data || [];
    },
  });

  return (
    <div className="p-4 text-white">
      <h1 className="text-3xl font-bold mb-6 text-white glow-text">
        Manage Users
      </h1>

      <div className="flex flex-col md:flex-row gap-4 mb-6 items-start md:items-center">
        <input
          type="text"
          placeholder="Search by name or email"
          className="bg-[#1e1e2e] border border-gray-600 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 w-full md:w-1/2 hover:glow-border transition"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="w-full md:w-1/3">
          <Select
            options={roleOptions}
            defaultValue={roleOptions[0]}
            onChange={(selected) => setRole(selected.value)}
            className="text-black"
            classNames={{
              control: () =>
                "!bg-[#1e1e2e] !border-gray-600 !text-white !rounded-md",
              menu: () => "!bg-[#1e1e2e]",
              singleValue: () => "!text-white",
              option: ({ isFocused }) =>
                isFocused ? "!bg-purple-700 !text-white" : "!text-white",
            }}
          />
        </div>
      </div>

      {isLoading ? (
        <p className="text-white animate-pulse">Loading users...</p>
      ) : isError ? (
        <p className="text-red-500">Failed to load users.</p>
      ) : (
        <div className="overflow-x-auto glow-border rounded-xl">
          <table className="table-auto w-full border border-gray-700 text-white text-sm md:text-base">
            <thead>
              <tr className="bg-gradient-to-r from-[#1e1e2e] to-[#2a2a40] text-purple-400">
                <th className="p-2 border">#</th>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Email</th>
                <th className="p-2 border">Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <UsersRow user={user} idx={idx} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageUsers;
```

### `modules/Dashbaord/Admin/ManageUsers/UsersRow.jsx`
```javascript
const UsersRow = ({ user, idx }) => {
  return (
    <tr
      key={user._id}
      className="text-center border-t border-gray-700 hover:bg-[#2a2a40] transition-all duration-200"
    >
      <td className="p-2 border">{idx + 1}</td>
      <td className="p-2 border">{user.name}</td>
      <td className="p-2 border">{user.email}</td>
      <td className="p-2 border capitalize">{user.role}</td>
    </tr>
  );
};

export default UsersRow;
```

### `modules/Dashbaord/Admin/Payments/AllPayments.jsx`
```javascript
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import PaymentCard from "./PaymentCard";

const AllPayments = () => {
  const axiosSecure = useAxiosSecure();

  const { data: payments = [], isLoading } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await axiosSecure.get("/payments");
      return res.data?.data || [];
    },
  });

  if (isLoading)
    return (
      <div className="text-center py-10 text-white">Loading payments...</div>
    );

  return (
    <div className="p-4 md:p-8 text-white">
      <h2 className="text-3xl font-bold mb-6 glow-text">All Payments</h2>
      <div className="grid gap-4 md:grid-cols-2 ">
        {payments.length > 0 ? (
          payments.map((payment, index) => (
            <PaymentCard payment={payment} key={payment._id} index={index} />
          ))
        ) : (
          <h2 className="text-xl sm:text-3xl text-gray-400">
            No payments found.
          </h2>
        )}
      </div>
    </div>
  );
};

export default AllPayments;
```

### `modules/Dashbaord/Admin/Payments/PaymentCard.jsx`
```javascript
import { format } from "date-fns";
import { motion } from "framer-motion";
import { Link } from "react-router";

const PaymentCard = ({ payment, index }) => {
  return (
    <motion.div
      key={payment._id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="relative overflow-hidden bg-gradient-to-br from-[#0f172a]/80 to-[#1e293b]/90 
                 p-5 rounded-2xl border border-slate-700 shadow-lg 
                 hover:shadow-glow pulse-glow hover:scale-[1.02] transition-all duration-300"
    >
      {/* glowing aura effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 via-pink-500/10 to-indigo-500/20 blur-xl rounded-2xl opacity-30 pointer-events-none animate-tilt" />

      <div
        className="relative z-10 space-y-2 text-slate-100"
        data-aos="fade-up-right"
      >
        <p>
          <span className="font-medium text-slate-400">Email:</span>{" "}
          <span className="text-white glow-text">{payment.email}</span>
        </p>
        <p>
          <span className="font-medium text-slate-400">Transaction ID:</span>{" "}
          <span className="text-pink-400 glow-text">
            {payment.transactionId}
          </span>
        </p>
        <p>
          <span className="font-medium text-slate-400">Booking ID:</span>{" "}
          <span className="text-blue-400 glow-text">{payment.bookingId}</span>
        </p>
        <p>
          <span className="font-medium text-slate-400">Amount:</span>{" "}
          <span className="text-green-400 font-semibold glow-text">
            ${payment.amount.toFixed(2)}
          </span>
        </p>
        <p>
          <span className="font-medium text-slate-400">Date:</span>{" "}
          <span className="text-slate-200 glow-text">
            {format(new Date(payment.date), "PPPpp")}
          </span>
        </p>
        <Link
          className="btn btn-outline btn-info rounded-full mt-2"
          to={`/dashboard/bookings/${payment.bookingId}`}
        >
          See Booking
        </Link>
      </div>
    </motion.div>
  );
};

export default PaymentCard;
```

### `modules/Dashbaord/DashboardLayout.jsx`
```javascript
import { CommonFooter } from "../shared/Layout";
import NavbarDrawer from "../shared/Layout/NavbarDrawer";

const DashboardLayout = () => {
  return (
    <div className="max-container">
      <NavbarDrawer />
      <CommonFooter />
    </div>
  );
};

export default DashboardLayout;
```

### `modules/Dashbaord/dashbourdRoutes.jsx`
```javascript
import ProtectedRoute from "../../router/ProtectedRoute";
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
      element: <AssignedTour />,
    },

    // admin routes
    {
      path: "admin/add-package",
      element: <AddPackage />,
    },
    {
      path: "admin/candidates",
      element: <ManageCandidate />,
    },
    {
      path: "admin/manage-users",
      element: <ManageUsers />,
    },
    {
      path: "admin/bookings",
      element: <AllBookings />,
    },
    {
      path: "admin/payments",
      element: <AllPayments />,
    },
    {
      path: "bookings/:bookingId",
      element: <BookingDetails />,
    },
  ],
};

export default dashbourdRoutes;
```

### `modules/Dashbaord/ManageProfile/ManageProfile.jsx`
```javascript
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
// import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Spinner from "../../shared/Layout/Spinner";
import { useState } from "react";
import "dayjs/locale/en";
import { Link } from "react-router";
import useUserRole from "../../../hooks/useUserRole";
dayjs.extend(relativeTime);

const ManageProfile = () => {
  // const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [showModal, setShowModal] = useState(false);
  const { userData } = useUserRole();

  const { data: userInfo = {}, isPending } = useQuery({
    queryKey: ["manage-profile", userData?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/email/${userData?.email}`);
      // const res = await axiosSecure.get(`/users/email/tourist4@example.com`); emaile for tourist
      // const res = await axiosSecure.get(`/users/email/4@example.com`); // email for tour guide

      return res.data?.data;
    },
    enabled: !!userData?.email,
  });

  if (isPending)
    return (
      <div className="text-center mt-10">
        <Spinner />
      </div>
    );

  const { name, email, photoURL, role, createdAt, last_loggedIn } =
    userInfo || {};

  const completeness =
    ([name, email, photoURL].filter(Boolean).length / 3) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto p-6 md:p-10 rounded-xl bg-gradient-to-br from-[#0f1328] to-[#1a1f3b] shadow-xl text-white space-y-6"
      data-aos="fade-up"
    >
      <h1 className="text-xl sm:text-3xl font-bold text-cyan-400 mb-4 text-center">
        π‘‹ Welcome back,{" "}
        <span className="text-white">{name || "Explorer"}</span>
      </h1>

      <div className="flex flex-col md:flex-rw gap-6 items-center">
        <img
          src={photoURL || "https://avatar.iran.liara.run/public"}
          alt="User"
          className="w-32 h-32 rounded-full border-4 border-cyan-500 shadow-cyan-700"
          data-aos="zoom-in"
        />

        <div className="flex-1 space-y-2">
          <p className="text-lg text-cyan-300 font-medium">π“§ {email}</p>
          <p className="text-md text-gray-300">
            π” Role: <span className="font-semibold text-cyan-400">{role}</span>
          </p>
          <p className="text-md text-gray-400">
            π•“ Account Created:{" "}
            <span className="text-green-400">
              {dayjs(createdAt).format("MMM D, YYYY")} (
              {dayjs(createdAt).fromNow()})
            </span>
          </p>
          <p className="text-md text-gray-400">
            π• Last Logged In:{" "}
            <span className="text-yellow-300">
              {dayjs(last_loggedIn).format("MMM D, YYYY h:mm A")} (
              {dayjs(last_loggedIn).fromNow()})
            </span>
          </p>
          <p className="text-md text-gray-400">
            π‘¥ Profile Completeness:{" "}
            <span
              className={`font-bold ${
                completeness >= 100
                  ? "text-green-400"
                  : completeness >= 60
                    ? "text-yellow-400"
                    : "text-red-400"
              }`}
            >
              {Math.round(completeness)}%
            </span>
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div
        className="flex flex-col md:flex-row md:justify-center gap-4 mt-6 *:rounded-full *:max-md:max-w-[300px] max-md:*:mx-auto"
        data-aos="fade-up"
      >
        <button
          className="btn btn-outline btn-block md:btn-wide border-cyan-500 text-cyan-300 hover:bg-cyan-600 hover:text-white pulse-glow"
          onClick={() => setShowModal(true)}
        >
          βοΈ Update Profile
        </button>

        {role === "tourist" && (
          <Link
            to="/dashboard/tourist/join-tour-guide"
            className="btn btn-outline btn-block md:btn-wide border-emerald-500 text-emerald-300 hover:bg-emerald-600 hover:text-white pulse-glow"
          >
            β¨ Join as Tour Guide
          </Link>
        )}
      </div>

      {/* DaisyUI Modal */}
      {showModal && (
        <dialog
          id="update_modal"
          className="modal modal-open"
          data-aos="zoom-in"
        >
          <div className="modal-box bg-[#1c233d] text-white border border-cyan-600 shadow-xl">
            <h3 className="font-bold text-lg mb-4">Update Profile Info</h3>
            <form
              method="dialog"
              className="space-y-4"
              // onSubmit={handleUpdateProfile} // future logic
            >
              <input
                type="text"
                defaultValue={name}
                placeholder="Name"
                className="input input-bordered input-md w-full bg-[#0f1328] text-white"
              />
              <input
                type="text"
                defaultValue={photoURL}
                placeholder="Photo URL"
                className="input input-bordered input-md w-full bg-[#0f1328] text-white"
              />
              <div className="modal-action">
                <button
                  className="btn bg-cyan-600 text-white hover:bg-cyan-700"
                  onClick={() => setShowModal(false)}
                >
                  Save
                </button>
                <button
                  className="btn btn-ghost text-gray-300"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </motion.div>
  );
};

export default ManageProfile;
```

### `modules/Dashbaord/ManageStories/components/EditStoryModal.jsx`
```javascript
import { useForm } from "react-hook-form";
import { darkSwal } from "../../../../hooks/usePostData";
import useSecureUpdate from "../../../../hooks/useSecureUpdate";

const EditStoryModal = ({ story, onClose, refetch }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: story?.title,
      description: story?.description,
    },
  });

  const { mutate: updateStory, isPending } = useSecureUpdate(
    `/stories/${story._id}`,
    // stories/687e509abf17c8a9265b66dd
  );

  const onSubmit = (data) => {
    updateStory(data, {
      onSuccess: (res) => {
        if (res?.success) {
          darkSwal.fire("Updated!", "Your story has been updated.", "success");
          refetch();
          onClose();
        }
      },
      onError: (err) => {
        darkSwal.fire("Error!", err.message || "Failed to update.", "error");
      },
    });
  };

  return (
    <dialog id="edit_modal" className="modal  modal-start" open>
      <div className="modal-box bg-base-200" data-aos="zoom-in-right">
        <h3 className="font-bold text-lg">Edit Story</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <input
            {...register("title", { required: true })}
            className="input input-bordered w-full"
            placeholder="Title"
          />
          <textarea
            {...register("description", { required: true })}
            className="textarea textarea-bordered w-full"
            placeholder="Description"
            rows={4}
          />
          <div className="modal-action">
            <button
              type="submit"
              className="btn btn-success btn-sm"
              disabled={isPending}
            >
              {isPending ? "Updating..." : "Update"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="btn btn-ghost btn-sm"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default EditStoryModal;
```

### `modules/Dashbaord/ManageStories/components/StoryCard.jsx`
```javascript
const StoryCard = ({ story, setSelectedStory, handleDelete }) => {
  return (
    <div
      className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-xl shadow-lg border border-gray-700 hover:shadow-purple-500/30 transition duration-300 relative"
      data-aos="zoom-in"
    >
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-2">{story.title}</h3>
        <p className="text-sm text-gray-300 line-clamp-3">
          {story.description}
        </p>
      </div>

      {story.images?.length > 0 && (
        <img
          src={story.images[0]}
          alt="Story Preview"
          className="w-full h-40 object-cover rounded-b-xl border-t border-gray-600"
        />
      )}

      <div className="flex justify-between items-center px-4 py-2 mt-1">
        <button
          onClick={() => setSelectedStory(story)}
          className="text-xs font-semibold text-blue-400 hover:text-blue-300"
        >
          βοΈ Edit
        </button>
        <button
          onClick={() => handleDelete(story._id)}
          className="text-xs text-red-400 hover:text-red-300"
        >
          π—‘ Delete
        </button>
      </div>
    </div>
  );
};

export default StoryCard;
```

### `modules/Dashbaord/ManageStories/ManageStories.jsx`
```javascript
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { useState } from "react";
// import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import EditStoryModal from "./components/EditStoryModal";
import StoryCard from "./components/StoryCard";
import { darkSwal } from "../../../hooks/usePostData";
import useUserRole from "../../../hooks/useUserRole";
import { Link } from "react-router";

const ManageStories = () => {
  // const { user } = useAuth();

  const { userData } = useUserRole();
  const axiosSecure = useAxiosSecure();
  const [selectedStory, setSelectedStory] = useState(null);

  const {
    data: stories = [],
    refetch,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["userStories", userData?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/stories/user/${userData._id}`);
      return res.data?.data;
    },
    enabled: !!userData?.email,
  });

  console.log(userData, "userdata ManageStories.jsx", 33);
  console.log(stories, "stories ManageStories.jsx", 34);
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Delete this story?",
      text: "You won't be able to recover it!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e11d48",
      cancelButtonColor: "#374151",
      confirmButtonText: "Yes, delete it!",
      background: "#0f172a",
      color: "#f1f5f9",
    });

    if (result.isConfirmed) {
      try {
        const res = await axiosSecure.delete(`/stories/${id}`);
        if (res.data.success) {
          darkSwal.fire("Deleted!", "Your story has been deleted.", "success");
          refetch();
        }
      } catch (err) {
        darkSwal.fire("Error!", err?.response?.data?.message, "error");
      }
    }
  };

  if (isLoading)
    return <div className="text-center py-10 text-info">Loading...</div>;
  if (isError)
    return (
      <div className="text-error text-center py-10">
        Failed to fetch stories.
      </div>
    );

  return (
    <section className="p-4 md:p-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-accent">
        π“ Manage Your Stories
      </h2>

      {stories.length === 0 ? (
        <div className="flex flex-col items-center justify-center">
          <p className="text-center text-gray-400 mt-10">
            You haven't shared any stories yet.
          </p>
          <Link
            to="/dashboard/add-stories"
            className="btn btn-primary glow-border px-6 py-2 mt-3 "
          >
            Share your story
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-2  gap-6">
          {stories.map((story) => (
            <StoryCard
              key={story._id}
              story={story}
              setSelectedStory={setSelectedStory}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      )}

      {selectedStory && (
        <EditStoryModal
          story={selectedStory}
          onClose={() => setSelectedStory(null)}
          refetch={refetch}
        />
      )}
    </section>
  );
};

export default ManageStories;
```

### `modules/Dashbaord/TourGuides/AssignedTour/AssignedTour.jsx`
```javascript
import { useState, useEffect } from "react";
import useSecureQuery from "../../../../hooks/useSecureQuery";
import useSecureUpdate from "../../../../hooks/useSecureUpdate";
import AssignedTourCard from "./AssignedTourCard";
import { darkSwal } from "../../../../hooks/usePostData";
import Spinner from "../../../shared/Layout/Spinner";
import useUserRole from "../../../../hooks/useUserRole";

const AssignedTour = () => {
  const { userData } = useUserRole();
  const { data, isLoading, error, refetch } = useSecureQuery(
    ["guideBookings", "687cff8d095a1d459861b897"],
    `/bookings/guide/${userData?._id}`,
  );

  console.log(data, "aasigned tour book AssignedTour.jsx", 10);
  // π§  Keep track of which booking to update
  const [bookingIdToUpdate, setBookingIdToUpdate] = useState(null);
  const [statusToUpdate, setStatusToUpdate] = useState(null);

  // β… Always keep hook at top level
  const {
    mutateAsync: patchBooking,
    isPending,
    isSuccess,
    isError,
    error: patchError,
  } = useSecureUpdate(
    bookingIdToUpdate ? `/bookings/${bookingIdToUpdate}` : "/bookings/empty",
  );

  // β… Watch for update trigger
  useEffect(() => {
    const update = async () => {
      if (!bookingIdToUpdate || !statusToUpdate) return;
      try {
        const res = await patchBooking({ status: statusToUpdate });
        if (res?.success) {
          darkSwal.fire("Success", `Booking ${statusToUpdate}`, "success");
          refetch();
        }
      } catch (err) {
        darkSwal.fire("Error", patchError?.message || "Failed", "error");
      } finally {
        setBookingIdToUpdate(null);
        setStatusToUpdate(null);
      }
    };
    update();
  }, [bookingIdToUpdate, statusToUpdate]);

  // β… Called from card/button
  const handleAction = (bookingId, status) => {
    setBookingIdToUpdate(bookingId);
    setStatusToUpdate(status);
  };

  if (isLoading) return <Spinner />;

  if (error)
    return <p className="text-center text-red-400">Failed to load bookings.</p>;

  return (
    <div className="min-h-screen px-4 py-10 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8 bg-gradient-to-r from-cyan-400 via-violet-700 to-indigo-400 bg-clip-text text-transparent drop-shadow-md">
        Assigned Tours
      </h1>
      {data?.data?.length === 0 && (
        <div className="text-center text-gray-400 py-20">
          <h2 className="text-2xl"> You haven't assigned any tours yet.</h2>
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        {data?.data.length > 0 &&
          data?.data?.map((booking) => (
            <div
              key={booking._id}
              className="rounded-xl shadow-md border border-gray-700 bg-base-200 bg-opacity-80 p-4 backdrop-blur-md hover:shadow-xl transition duration-300 ease-in-out"
            >
              <AssignedTourCard
                booking={booking}
                handleAction={handleAction}
                isPending={isPending && booking._id === bookingIdToUpdate}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default AssignedTour;
```

### `modules/Dashbaord/TourGuides/AssignedTour/AssignedTourCard.jsx`
```javascript
import { motion } from "framer-motion";
import { Link } from "react-router";

const AssignedTourCard = ({ booking, handleAction }) => {
  const {
    touristName,
    touristEmail,
    touristPhoto,
    packageName,
    price,
    tourDate,
    status,
    paymentStatus,
  } = booking;

  const formattedDate = new Date(tourDate).toLocaleDateString();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      data-aos="fade-up"
      className="bg-gradient-to-br from-indigo-950 to-purple-900 bg-opacity-80 rounded-2xl p-6 shadow-xl border border-indigo-700 
                 transition-all duration-300 hover:shadow-purple-600 min-h-[330px] flex flex-col justify-between"
    >
      {/* Tourist Info */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src={touristPhoto}
          alt={touristName}
          className="w-16 h-16 rounded-full ring-2 ring-indigo-500 shadow-md"
        />
        <div>
          <h2 className="text-lg font-semibold text-white">{touristName}</h2>
          <p className="text-sm text-gray-400">{touristEmail}</p>
        </div>
      </div>

      {/* Booking Details */}
      <div className="text-sm space-y-2 text-gray-300">
        <p>
          <span className="text-purple-300 font-medium">π“¦ Package:</span>{" "}
          {packageName}
        </p>
        <p>
          <span className="text-purple-300 font-medium">π’° Price:</span> ΰ§³
          {price}
        </p>
        <p>
          <span className="text-purple-300 font-medium">π“… Tour Date:</span>{" "}
          {formattedDate}
        </p>
      </div>

      {/* Status Badges */}
      <div className="mt-4 flex justify-between items-center">
        <span
          className={`badge border-none ${
            status === "accepted"
              ? "bg-green-600 text-white"
              : status === "rejected"
                ? "bg-red-700 text-white"
                : "bg-gray-800 text-purple-300"
          }`}
        >
          {status}
        </span>
        <span
          className={`badge border-none ${
            paymentStatus === "paid"
              ? "bg-blue-600 text-white"
              : "bg-yellow-700 text-white"
          }`}
        >
          {paymentStatus}
        </span>
      </div>

      {/* Action Buttons or Placeholder */}
      <div className="mt-6">
        {status === "in-review" ? (
          <div className="flex justify-end gap-4 *:rounded-full">
            <button
              onClick={() => handleAction(booking._id, "accepted")}
              className="btn btn-sm bg-green-600 text-white hover:shadow-green-400 hover:brightness-110 transition duration-200"
            >
              Accept
            </button>
            <button
              onClick={() => handleAction(booking._id, "rejected")}
              className="btn btn-sm bg-red-700 text-white hover:shadow-red-400 hover:brightness-110 transition duration-200"
            >
              Reject
            </button>
          </div>
        ) : (
          // Reserve space to maintain height
          <div className="h-10"></div>
        )}
        <Link
          className="btn btn-sm btn-active btn-primary text-white hover:bg-white hover:text-black transition duration-200 rounded-full"
          to={`/dashboard/bookings/${booking._id}`}
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
};

export default AssignedTourCard;
```

### `modules/Dashbaord/TourGuides/AssignedTour/refractorAssignedTourPrompt.md`
```md
You are a **senior full-stack developer**.

## π“ Task

You are given a real-world code module located at:

```
/run/media/sj/developer/web/L1B11/12mi/ass/DeshGuide/DeshGuide-client/src/modules/Dashbaord/TourGuides/AssignedTour
```

Refactor the entire codebase **without modifying any UI or changing behavior**. Instead, improve it using:

- β… Clear separation of concerns
- β… Consistent, semantic naming conventions
- β… Modular architecture (hooks, services, utils, components)
- β… Scalable file/folder structure
- β… Industry-standard project layout and architecture
- β… Readable, testable, production-grade code
- β… 100% behavior and API compatibility

π‘‰ Output the refactored code to a new folder: `AssignedTour_refactored`

Also return a `.sh` script that will:

- Create that folder
- Write all refactored files
- Run `git add` and `git commit` with message: `refactor: added improved AssignedTour version`

---

## π² Full Project Structure (cwd)

```bash
/run/media/sj/developer/web/L1B11/12mi/ass/DeshGuide/DeshGuide-client
β”β”€β”€ bun.lock
β”β”€β”€ eslint.config.js
β”β”€β”€ index.html
β”β”€β”€ package.json
β”β”€β”€ public
β”‚Β Β  β””β”€β”€ CNAME
β”β”€β”€ README.md
β”β”€β”€ src
β”‚Β Β  β”β”€β”€ animation
β”‚Β Β  β”‚Β Β  β”β”€β”€ auth-lottie.json
β”‚Β Β  β”‚Β Β  β”β”€β”€ index.js
β”‚Β Β  β”‚Β Β  β”β”€β”€ LottieAnimation.jsx
β”‚Β Β  β”‚Β Β  β””β”€β”€ motion.js
β”‚Β Β  β”β”€β”€ App.jsx
β”‚Β Β  β”β”€β”€ console
β”‚Β Β  β”‚Β Β  β”β”€β”€ error.json
β”‚Β Β  β”‚Β Β  β””β”€β”€ log.json
β”‚Β Β  β”β”€β”€ contexts
β”‚Β Β  β”‚Β Β  β””β”€β”€ AuthContext
β”‚Β Β  β”‚Β Β      β”β”€β”€ AuthContext.jsx
β”‚Β Β  β”‚Β Β      β””β”€β”€ AuthProvider.jsx
β”‚Β Β  β”β”€β”€ docs
β”‚Β Β  β”‚Β Β  β”β”€β”€ note.md
β”‚Β Β  β”‚Β Β  β””β”€β”€ prompt.md
β”‚Β Β  β”β”€β”€ firebase
β”‚Β Β  β”‚Β Β  β””β”€β”€ firebase.init.js
β”‚Β Β  β”β”€β”€ hooks
β”‚Β Β  β”‚Β Β  β”β”€β”€ useAuth.jsx
β”‚Β Β  β”‚Β Β  β”β”€β”€ useAxiosSecure.jsx
β”‚Β Β  β”‚Β Β  β”β”€β”€ useFetchData.js
β”‚Β Β  β”‚Β Β  β”β”€β”€ useHelmet.jsx
β”‚Β Β  β”‚Β Β  β”β”€β”€ usePostData.jsx
β”‚Β Β  β”‚Β Β  β”β”€β”€ useSecureQuery.jsx
β”‚Β Β  β”‚Β Β  β”β”€β”€ useSecureUpdate.js
β”‚Β Β  β”‚Β Β  β””β”€β”€ useUserRole.jsx
β”‚Β Β  β”β”€β”€ index.css
β”‚Β Β  β”β”€β”€ loggerClient.js
β”‚Β Β  β”β”€β”€ main.jsx
β”‚Β Β  β”β”€β”€ modules
β”‚Β Β  β”‚Β Β  β”β”€β”€ Auth
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ AuthLayout.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ AuthRoute.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ components
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ AuthSidebar.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ constant.js
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ SideBarCard.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ SigninForm.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ Signout.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ SignUpForm.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ SocialLogin.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ index.js
β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ pages
β”‚Β Β  β”‚Β Β  β”‚Β Β      β”β”€β”€ ForgotPass.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β      β”β”€β”€ Signin.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β      β””β”€β”€ SignUp.jsx
β”‚Β Β  β”‚Β Β  β”β”€β”€ Dashbaord
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ AddStories
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ AddStories.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ DashboardLayout.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ ManageProfile
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ ManageProfile.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ ManageStories
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ components
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ EditStoryModal.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ StoryCard.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ ManageStories.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ TourGuides
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ AssignedTour
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ AssignedTourCard.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ AssignedTour.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ GuideProfile
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ GuideProfile.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ TourGuides.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ Tourist
β”‚Β Β  β”‚Β Β  β”‚Β Β      β”β”€β”€ Bookings
β”‚Β Β  β”‚Β Β  β”‚Β Β      β”‚Β Β  β”β”€β”€ BookingCard.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β      β”‚Β Β  β””β”€β”€ MyBookings.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β      β”β”€β”€ JoinTourGuide
β”‚Β Β  β”‚Β Β  β”‚Β Β      β”‚Β Β  β””β”€β”€ JoinTourGuide.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β      β””β”€β”€ PaymentBooking
β”‚Β Β  β”‚Β Β  β”‚Β Β          β”β”€β”€ PaymentBooking.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β          β”β”€β”€ PaymentForm.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β          β””β”€β”€ refractorPaymentBookingPrompt.md
β”‚Β Β  β”‚Β Β  β”β”€β”€ landing
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ home
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ Bannnerr
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ Banner.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ CallToActionFull
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ CallToActionFull.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ Home.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ HowItWorks
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ HowItWorks.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ LiveStats
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ LiveStats.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ NewsletterSignup
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ NewsletterSignup.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ Overview
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ Overview.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ Stories
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β      β”β”€β”€ Stories.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β      β””β”€β”€ StoryCard.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ PartnerWithUs
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ PartnerWithUs.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ RandomGuides
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ RandomGuides.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ Testimonials
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ TestimonialCard.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ Testimonials.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ TourismAndGuides.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ TrendingDestinations
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ TrendingDestinations.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ WhyChooseUs
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β      β””β”€β”€ WhyChooseUs.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ index.js
β”‚Β Β  β”‚Β Β  β”β”€β”€ Packages
β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ PackageDetails
β”‚Β Β  β”‚Β Β  β”‚Β Β      β””β”€β”€ PackageDetails.jsx
β”‚Β Β  β”‚Β Β  β””β”€β”€ shared
β”‚Β Β  β”‚Β Β      β”β”€β”€ Layout
β”‚Β Β  β”‚Β Β      β”‚Β Β  β”β”€β”€ CommonFooter.jsx
β”‚Β Β  β”‚Β Β      β”‚Β Β  β”β”€β”€ index.js
β”‚Β Β  β”‚Β Β      β”‚Β Β  β”β”€β”€ NavbarDrawer.jsx
β”‚Β Β  β”‚Β Β      β”‚Β Β  β”β”€β”€ Navbar.jsx
β”‚Β Β  β”‚Β Β      β”‚Β Β  β”β”€β”€ navbarLinksConstant.jsx
β”‚Β Β  β”‚Β Β      β”‚Β Β  β”β”€β”€ RootLayout.jsx
β”‚Β Β  β”‚Β Β      β”‚Β Β  β”β”€β”€ SidebarLink.jsx
β”‚Β Β  β”‚Β Β      β”‚Β Β  β”β”€β”€ sidebarLinks.js
β”‚Β Β  β”‚Β Β      β”‚Β Β  β””β”€β”€ Spinner.jsx
β”‚Β Β  β”‚Β Β      β””β”€β”€ ui
β”‚Β Β  β”‚Β Β          β”β”€β”€ Avatar.jsx
β”‚Β Β  β”‚Β Β          β”β”€β”€ Brand.jsx
β”‚Β Β  β”‚Β Β          β”β”€β”€ Button.jsx
β”‚Β Β  β”‚Β Β          β”β”€β”€ DropDown.jsx
β”‚Β Β  β”‚Β Β          β”β”€β”€ index.js
β”‚Β Β  β”‚Β Β          β””β”€β”€ Input.jsx
β”‚Β Β  β”β”€β”€ pages
β”‚Β Β  β”‚Β Β  β”β”€β”€ Community
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ CommunityPage.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ components
β”‚Β Β  β”‚Β Β  β””β”€β”€ faq
β”‚Β Β  β”‚Β Β      β”β”€β”€ faq.constant.js
β”‚Β Β  β”‚Β Β      β””β”€β”€ FAQ.jsx
β”‚Β Β  β”β”€β”€ router
β”‚Β Β  β”‚Β Β  β”β”€β”€ ErrorPage.jsx
β”‚Β Β  β”‚Β Β  β”β”€β”€ ProtectedRoute.jsx
β”‚Β Β  β”‚Β Β  β””β”€β”€ router.jsx
β”‚Β Β  β””β”€β”€ utils
β”‚Β Β      β”β”€β”€ axiosInstance.js
β”‚Β Β      β”β”€β”€ customAlert.js
β”‚Β Β      β”β”€β”€ deleteData.js
β”‚Β Β      β”β”€β”€ ErrorMessage.jsx
β”‚Β Β      β”β”€β”€ fetchData.js
β”‚Β Β      β”β”€β”€ PageIntro.jsx
β”‚Β Β      β”β”€β”€ postData.js
β”‚Β Β      β”β”€β”€ TypeWriterEffect.jsx
β”‚Β Β      β””β”€β”€ updateData.js
β”β”€β”€ structure.md
β”β”€β”€ tmuxShow03_25_ΰ¦…ΰ¦ªΰ¦°ΰ¦Ύΰ¦Ήΰ§ΰ¦£_19_07_25.mp4
β”β”€β”€ vite.config.js
β””β”€β”€ vite.logger.plugin.js

51 directories, 110 files
```

## π“ Target Module Tree (AssignedTour)

```bash
/run/media/sj/developer/web/L1B11/12mi/ass/DeshGuide/DeshGuide-client/src/modules/Dashbaord/TourGuides/AssignedTour
β”β”€β”€ AssignedTourCard.jsx
β””β”€β”€ AssignedTour.jsx

1 directory, 2 files
```

## π“„ Module Files & Contents

### `AssignedTour.jsx`

```javascript
// AssignedTour.jsx
import useSecureQuery from "../../../../hooks/useSecureQuery";
import useSecureUpdate from "../../../../hooks/useSecureUpdate";
import AssignedTourCard from "./AssignedTourCard";
import { darkSwal } from "../../../../hooks/usePostData";

const AssignedTour = () => {
  const { data, isLoading, error, refetch } = useSecureQuery(
    ["guideBookings", "687cff8d095a1d459861b897"],
    "/bookings/guide/687cff8d095a1d459861b897",
  );

  const handleAction = async (bookingId, status) => {
    try {
      const res = await useSecureUpdate(`/bookings/${bookingId}`, { status });
      if (res?.data?.success) {
        darkSwal.fire("Success", `Booking ${status}`, "success");
        refetch();
      }
    } catch (err) {
      darkSwal.fire("Error", err.message, "error");
    }
  };

  if (isLoading)
    return (
      <p className="text-center text-lg text-accent animate-pulse">
        Loading tours...
      </p>
    );

  if (error)
    return <p className="text-center text-red-400">Failed to load bookings.</p>;

  return (
    <div className="min-h-screen px-4 py-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-md">
        Assigned Tours
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        {data?.data?.map((booking) => (
          <div
            key={booking._id}
            className="rounded-xl shadow-lg border border-gray-700 bg-base-200 bg-opacity-80 p-4 backdrop-blur-md hover:shadow-xl transition duration-300 ease-in-out"
          >
            <AssignedTourCard booking={booking} handelAction={handleAction} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssignedTour;
```

### `AssignedTourCard.jsx`

```javascript
const AssignedTourCard = ({ booking, handleAction }) => {
  const {
    touristName,
    touristEmail,
    touristPhoto,
    packageName,
    price,
    tourDate,
    status,
    paymentStatus,
  } = booking;

  const formattedDate = new Date(tourDate).toLocaleDateString();

  return (
    <div className="bg-purple-950 bg-opacity-60 rounded-xl p-5 shadow-lg border border-gray-700 hover:shadow-fuchsia-600 transition-all duration-300">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={touristPhoto}
          alt={touristName}
          className="w-14 h-14 rounded-full ring-2 ring-fuchsia-500 shadow-md"
        />
        <div>
          <h2 className="text-lg font-semibold text-white">{touristName}</h2>
          <p className="text-sm text-gray-400">{touristEmail}</p>
        </div>
      </div>

      <div className="text-sm space-y-1 text-gray-300">
        <p>
          <span className="text-fuchsia-400 font-semibold">Package:</span>{" "}
          {packageName}
        </p>
        <p>
          <span className="text-fuchsia-400 font-semibold">Price:</span> ΰ§³
          {price}
        </p>
        <p>
          <span className="text-fuchsia-400 font-semibold">Tour Date:</span>{" "}
          {formattedDate}
        </p>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <span
          className={`badge ${
            status === "accepted"
              ? "badge-success"
              : status === "rejected"
                ? "badge-error"
                : "badge-ghost"
          }`}
        >
          {status}
        </span>
        <span
          className={`badge ${
            paymentStatus === "paid"
              ? "badge-info"
              : "badge-outline badge-warning"
          }`}
        >
          {paymentStatus}
        </span>
      </div>

      {booking.status === "in-review" && (
        <div className="flex justify-end gap-4 mt-4">
          <button
            onClick={() => handleAction(booking._id, "accepted")}
            className="btn btn-success btn-sm hover:brightness-110 transition"
          >
            Accept
          </button>
          <button
            onClick={() => handleAction(booking._id, "rejected")}
            className="btn btn-error btn-sm hover:brightness-110 transition"
          >
            Reject
          </button>
        </div>
      )}
    </div>
  );
};

export default AssignedTourCard;
```
```

### `modules/Dashbaord/TourGuides/GuideProfile/GuideProfile.jsx`
```javascript
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../../../hooks/useAxiosSecure";

const fetchGuideDetails = async (id) => {
  console.log(id, "id GuideProfile.jsx", 6);
  const res = await axiosInstance.get(`tour-guide-requests/user/${id}`);
  return res.data?.data;
};

export default function GuideProfile() {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["guideDetails", id],
    queryFn: () => fetchGuideDetails(id),
  });

  if (isLoading) {
    return (
      <div className="text-center mt-20 text-primary text-xl">
        Loading profile...
      </div>
    );
  }

  console.log(data, "data GuideProfile.jsx", 15);
  if (isError || !data) {
    console.log(`error`, error);
    return (
      <div className="text-center mt-20 text-error text-xl">
        Failed to load guide profile.
      </div>
    );
  }

  const {
    title,
    reason,
    cvLink,
    status,
    createdAt,
    userId: { name, email, photoURL, role, last_loggedIn },
  } = data;

  return (
    <section className="min-h-[70vh] py-16 bg-[#0f0f11] text-white">
      <div className="max-w-4xl mx-auto px-4 relative">
        {/* Background Glow */}
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-indigo-500 opacity-20 blur-3xl animate-pulse rounded-full pointer-events-none" />

        <div className="relative z-10 bg-gradient-to-br from-[#1a1a1c] to-[#0e0e11] border border-gray-800 rounded-2xl p-8 shadow-xl transition-all duration-300 hover:shadow-purple-500/30">
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <img
              src={photoURL}
              className="w-32 h-32 object-cover rounded-full border-4 border-indigo-500 shadow-inner shadow-indigo-600"
            />
            <div>
              <h2 className="text-3xl font-bold mb-2 text-accent">{name}</h2>
              <p className="text-gray-400 text-sm mb-1">{email}</p>
              <p className="text-sm text-success capitalize">Role: {role}</p>
              <p className="text-sm mt-1">
                π•“ Last Login: {new Date(last_loggedIn).toLocaleString()}
              </p>
              <p className="text-sm mt-1">
                π“… Joined: {new Date(createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>

          <div className="divider my-6"></div>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-white">πªª Title:</h3>
              <p className="text-gray-300">{title}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">
                π§­ Why a Tour Guide?
              </h3>
              <p className="text-gray-300">{reason}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">
                π“ CV / Resume:
              </h3>
              <a
                href={cvLink}
                target="_blank"
                rel="noreferrer"
                className="link link-accent hover:underline"
              >
                View CV
              </a>
            </div>
            <div>
              <span
                className={`badge px-4 py-2 text-sm ${status === "accepted" ? "badge-success" : "badge-warning"}`}
              >
                {status}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

### `modules/Dashbaord/TourGuides/TourGuides.jsx`
```javascript
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import { axiosInstance } from "../../../hooks/useAxiosSecure";
import Spinner from "../../shared/Layout/Spinner.jsx";

const fetchAllGuides = async () => {
  const res = await axiosInstance.get(
    "tour-guide-requests/random-accepted?limit=all",
  );
  return res.data?.data || [];
};

export default function TourGuides() {
  const {
    data = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["allAcceptedGuides"],
    queryFn: fetchAllGuides,
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <ErrorMessage />;
  }

  return (
    <section className="py-16 bg-base-100 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 drop-shadow-glow">
          π§­ Explore All Our Tour Guides
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((guide) => (
            <div
              key={guide._id}
              className="group relative bg-gradient-to-br from-[#141416] to-[#1e1e21] border border-[#333] rounded-xl p-6 shadow-lg overflow-hidden
              hover:shadow-glow transition duration-300"
            >
              <div className="absolute -top-5 -right-5 w-32 h-32 bg-accent opacity-10 rounded-full blur-2xl animate-pulse pointer-events-none" />

              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-accent mb-2 group-hover:scale-105 transition-transform duration-200">
                  {guide?.user?.name}
                </h3>
                <p className="text-sm text-gray-400 mb-2">
                  {guide?.user?.email}
                </p>
                <span className="badge badge-success badge-outline mb-4">
                  Accepted
                </span>

                <div className="mt-3">
                  <Link
                    to={`/guides/${guide._id}`}
                    className="btn btn-sm btn-outline text-white border-white hover:bg-white hover:text-black"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {data.length === 0 && (
          <div className="text-center text-warning mt-12">
            No tour guides found.
          </div>
        )}
      </div>
    </section>
  );
}
```

### `modules/Dashbaord/Tourist/Bookings/BookingCard.jsx`
```javascript
import { FaCheckCircle } from "react-icons/fa";
import { MdPending } from "react-icons/md";
import { Link } from "react-router";

const BookingCard = ({ booking }) => {
  return (
    <div
      key={booking._id}
      className="relative p-6 rounded-2xl bg-gradient-to-br from-[#111827] to-[#1f2937] border border-indigo-700 shadow-[0_0_25px_#6366f1aa] glow-border pulse-glow transition-transform duration-300 hover:scale-[1.04] cursor-default"
      data-aos="fade-right"
    >
      {/* Status Badge */}
      <div
        className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full select-none ${
          booking.status === "pending"
            ? "bg-yellow-700 text-yellow-300"
            : "bg-green-700 text-green-300"
        }`}
      >
        {booking.status === "pending" ? (
          <>
            <MdPending className="inline-block mr-1 text-yellow-300" />
            Pending
          </>
        ) : (
          <>
            <FaCheckCircle className="inline-block mr-1 text-green-300" />
            Confirmed
          </>
        )}
      </div>

      <h3 className="text-2xl font-semibold mb-3 text-indigo-300 glow-border">
        {booking.packageName}
      </h3>

      <p className="text-gray-400 mb-1">
        <span className="font-medium text-indigo-400">Date:</span>{" "}
        {new Date(booking.tourDate).toLocaleDateString()}
      </p>
      <p className="text-gray-400 mb-1">
        <span className="font-medium text-indigo-400">Guide:</span>{" "}
        {booking.guideName}
      </p>
      <p className="text-gray-400 mb-4">
        <span className="font-medium text-indigo-400">Price:</span>{" "}
        <span className="text-green-400">${booking.price}</span>
      </p>

      <div className="flex items-center gap-3">
        <span
          className={`text-sm px-3 py-1 rounded-full border font-semibold select-none ${
            booking.paymentStatus === "paid"
              ? "bg-green-900 text-green-400 border-green-500"
              : "bg-red-900 text-red-400 border-red-500"
          }`}
        >
          Payment: {booking.paymentStatus === "paid" ? "Paid" : "Unpaid"}
        </span>
      </div>

      <div className="mt-6 text-right space-x-2">
        <Link
          to={`/dashboard/bookings/${booking._id}`}
          className="btn btn-sm bg-purple-700 hover:bg-purple-500 text-white rounded-md glow-border px-5 py-2 font-semibold transition-shadow shadow-indigo-600"
        >
          Details
        </Link>
        {booking.status === "pending" && (
          <Link
            to={`/dashboard/payment-booking/${booking._id}`}
            className="btn btn-sm bg-indigo-700 hover:bg-indigo-500 text-white rounded-md glow-border px-5 py-2 font-semibold transition-shadow shadow-indigo-600"
          >
            Confirm Now
          </Link>
        )}
      </div>
    </div>
  );
};

export default BookingCard;
```

### `modules/Dashbaord/Tourist/Bookings/MyBookings.jsx`
```javascript
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router"; // react-router-dom, NOT react-router
import BookingCard from "./BookingCard";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import useUserRole from "../../../../hooks/useUserRole";

const MyBookings = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { userData } = useUserRole();

  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["myBookings", userData?._id],
    enabled: !!userData?._id,
    queryFn: async () => {
      const res = await axiosSecure.get(`bookings/tourist/${userData._id}`);
      return res.data?.data || [];
    },
  });

  if (isLoading) {
    return (
      <div className="text-center text-xl py-20 text-indigo-400 animate-pulse">
        Loading your bookings...
      </div>
    );
  }

  if (!bookings.length) {
    return (
      <div className="text-center py-20 text-gray-400">
        <h2 className="text-2xl font-bold mb-4">No bookings found</h2>
        <Link to="/all-trips" className="btn btn-primary glow-border px-6 py-2">
          Browse Packages
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-gray-200">
      <h2 className="text-3xl font-bold mb-8 text-center text-indigo-400 tracking-wide">
        π“ My Bookings
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {bookings.map((booking) => (
          <BookingCard key={booking._id} booking={booking} />
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
```

### `modules/Dashbaord/Tourist/JoinTourGuide/JoinTourGuide.jsx`
```javascript
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useUserRole from "../../../../hooks/useUserRole";
import { darkSwal } from "../../../../hooks/usePostData";

const JoinTourGuide = () => {
  const { userData } = useUserRole();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  console.log(`userData?._id`, userData?._id);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Mutation: POST request to JoinTourGuide
  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (payload) => {
      const res = await axiosSecure.post("tour-guide-requests", payload);
      return res.data;
    },
    onSuccess: () => {
      darkSwal.fire(
        "Request Sent!",
        "We'll review your application shortly.",
        "success",
      );
      setTimeout(() => navigate("/dashboard"), 2000);
      reset();
    },
    onError: (err) => {
      console.error(err);
      toast.error("Failed to submit application.");
      darkSwal.fire(
        "Error!",
        err?.response?.data?.message || "Submission failed.",
        "error",
      );
    },
  });

  const onSubmit = async (data) => {
    const payload = {
      userId: userData?._id,
      title: data.title,
      reason: data.reason,
      cvLink: data.cvLink,
    };
    await mutateAsync(payload);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-[#0f172a] to-black text-white px-4 py-16">
      {/* Bold confident intro */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 drop-shadow-lg">
          Ready to Guide the World?
        </h1>
        <p className="mt-4 text-lg text-gray-300 leading-relaxed">
          Join DeshGuide as a certified tour guide and lead unforgettable
          journeys. Submit your profile below β€” passion and authenticity matter
          most.
        </p>
      </motion.div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        data-aos="fade-up"
        className="max-w-2xl mx-auto bg-base-200 p-8 rounded-xl shadow-xl border border-gray-700 space-y-6"
      >
        {/* Title */}
        <div>
          <label className="label font-semibold text-white">Title</label>
          <input
            type="text"
            placeholder="e.g., Veteran Nature Explorer"
            {...register("title", {
              required: "Title is required",
              maxLength: { value: 100, message: "Max 100 characters allowed" },
            })}
            className="input input-bordered w-full bg-black/40 text-white backdrop-blur hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all duration-300"
          />
          {errors.title && (
            <p className="text-red-400 mt-1">{errors.title.message}</p>
          )}
        </div>

        {/* Reason */}
        <div>
          <label className="label font-semibold text-white">
            Why do you want to be a guide?
          </label>
          <textarea
            rows={4}
            placeholder="Your passion, knowledge, and story..."
            {...register("reason", {
              required: "This field is required",
              minLength: { value: 20, message: "Minimum 20 characters" },
            })}
            className="textarea textarea-bordered w-full bg-black/40 text-white hover:shadow-indigo-500/40 hover:scale-[1.02] transition-all duration-300"
          />
          {errors.reason && (
            <p className="text-red-400 mt-1">{errors.reason.message}</p>
          )}
        </div>

        {/* CV Link */}
        <div>
          <label className="label font-semibold text-white">
            CV Link (PDF)
          </label>
          <input
            type="url"
            placeholder="https://yourcvlink.com/cv.pdf"
            {...register("cvLink", {
              required: "CV link is required",
              pattern: {
                value: /^https?:\/\/.+/,
                message: "Enter a valid URL",
              },
            })}
            className="input input-bordered w-full bg-black/40 text-white hover:shadow-purple-500/40 hover:scale-[1.02] transition-all duration-300"
          />
          {errors.cvLink && (
            <p className="text-red-400 mt-1">{errors.cvLink.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="text-right">
          <button
            type="submit"
            disabled={isPending}
            className="btn btn-accent btn-sm px-6 text-white tracking-wider shadow hover:shadow-lg transition-all duration-300 disabled:opacity-50"
          >
            {isPending ? "Submitting..." : "Submit Application"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default JoinTourGuide;
```

### `modules/Dashbaord/Tourist/PaymentBooking/PaymentBooking.jsx`
```javascript
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

const stripePromise = loadStripe(import.meta.env.VITE_payment_Key);

const Payment = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm></PaymentForm>
    </Elements>
  );
};

export default Payment;
```

### `modules/Dashbaord/Tourist/PaymentBooking/PaymentForm.jsx`
```javascript
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { darkSwal } from "../../../../hooks/usePostData";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { bookingId } = useParams();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const { isPending, data: bookingInfo = {} } = useQuery({
    queryKey: ["booking", bookingId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookings/${bookingId}`);
      return res.data?.data;
    },
  });

  if (isPending) {
    return (
      <div className="text-center text-indigo-400 py-20 animate-pulse">
        Loading Booking Info...
      </div>
    );
  }

  const amount = bookingInfo.price;
  const amountInCents = amount * 100;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    if (!card) return;

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
      return;
    }

    setError("");

    const res = await axiosSecure.post("/payments/create-payment-intent", {
      amountInCents,
      bookingId,
    });

    const clientSecret = res?.data?.data?.clientSecret;

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card,
        billing_details: {
          name: user.displayName,
          email: user.email,
        },
      },
    });

    if (result.error) {
      setError(result.error.message);
    } else {
      setError("");
      if (result.paymentIntent.status === "succeeded") {
        const transactionId = result.paymentIntent.id;

        const paymentData = {
          bookingId,
          amount,
          email: user?.email,
          transactionId,
          paymentMethod: result.paymentIntent.payment_method_types,
        };

        const paymentRes = await axiosSecure.post("/payments", paymentData);

        if (paymentRes?.data?.data?._id) {
          await darkSwal.fire({
            icon: "success",
            title: "Payment Successful!",
            html: `<strong>Transaction ID:</strong> <code>${transactionId}</code>`,
            confirmButtonText: "Go to My Bookings",
          });

          await axiosSecure.patch(`bookings/${bookingId}`, {
            status: "in-review",
            paymentStatus: "paid",
            transactionId,
          });

          navigate("/dashboard/my-bookings");
        }
      }
    }
  };

  return (
    <div
      className="max-w-4xl mx-auto p-6 md:p-10 rounded-2xl bg-gradient-to-br from-[#0f172a] to-[#1e293b] shadow-2xl border border-indigo-800"
      data-aos="fade-up"
    >
      <h2
        className="text-3xl font-bold text-center text-indigo-400 mb-6"
        data-aos="zoom-in"
      >
        Complete Your Payment
      </h2>

      <div className="grid md:grid-cols-2 gap-6 items-center mb-8">
        <div className="space-y-3 text-gray-300" data-aos="fade-right">
          <p>
            <span className="text-indigo-400 font-semibold">Package:</span>{" "}
            {bookingInfo.packageId?.title}
          </p>
          <p>
            <span className="text-indigo-400 font-semibold">Location:</span>{" "}
            {bookingInfo.packageId?.location}
          </p>
          <p>
            <span className="text-indigo-400 font-semibold">Tour Date:</span>{" "}
            {new Date(bookingInfo.tourDate).toLocaleDateString()}
          </p>
          <p>
            <span className="text-indigo-400 font-semibold">Days:</span>{" "}
            {bookingInfo.packageId?.days}
          </p>
          <p>
            <span className="text-indigo-400 font-semibold">Trip Type:</span>{" "}
            {bookingInfo.packageId?.tripType}
          </p>
          <p>
            <span className="text-indigo-400 font-semibold">Guide:</span>{" "}
            {bookingInfo.guideName}
          </p>
          <p>
            <span className="text-indigo-400 font-semibold">Tourist:</span>{" "}
            {bookingInfo.touristName}
          </p>
        </div>

        <div data-aos="fade-left">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-gray-800 p-6 rounded-xl shadow-xl"
          >
            {/* <CardElement className="p-3 border border-indigo-700 rounded bg-sky-900 text-white" /> */}
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#e0e0ff", // Light text
                    backgroundColor: "#0f172a", // Night blue background
                    iconColor: "#7dd3fc", // Tailwind sky-400 for icon
                    "::placeholder": {
                      color: "#94a3b8", // slate-400
                    },
                  },
                  invalid: {
                    color: "#f87171", // Tailwind red-400
                    iconColor: "#f87171",
                  },
                },
              }}
              className="p-4 border border-indigo-700 rounded bg-[#0f172a]"
            />

            <button
              type="submit"
              disabled={!stripe}
              className="btn w-full py-3 rounded-md font-semibold text-lg transition-all duration-300 bg-indigo-600 text-white hover:bg-indigo-500 hover:shadow-indigo-400 shadow-sm hover:scale-105"
              data-aos="zoom-in"
            >
              Pay ${amount}
            </button>
            {error && (
              <p className="text-red-500 mt-2 text-sm" data-aos="fade-in">
                {error}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;

/* import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { darkSwal } from "../../../../hooks/usePostData";
const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { bookingId } = useParams();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const { isPending, data: bookingInfo = {} } = useQuery({
    queryKey: ["booking", "payment booking", bookingId],
    queryFn: async () => {
      const res = await axiosSecure.get(`bookings/${bookingId}`);
      return res.data?.data;
    },
  });

  if (isPending) {
    return <div>...loading</div>;
  }

  const amount = bookingInfo.price;
  const amountInCents = amount * 100;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (!card) {
      return;
    }

    // step- 1: validate the card
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
    } else {
      setError("");

      // step-2: create payment intent
      const res = await axiosSecure.post("payments/create-payment-intent", {
        amountInCents,
        bookingId,
      });

      const clientSecret = res?.data?.data?.clientSecret;

      // step-3: confirm payment
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: user.displayName,
            email: user.email,
          },
        },
      });

      if (result.error) {
        setError(result.error.message);
      } else {
        setError("");
        if (result.paymentIntent.status === "succeeded") {
          console.log("Payment succeeded!");
          const transactionId = result.paymentIntent.id;

          const paymentData = {
            bookingId,
            amount,
            email: user?.email,
            transactionId,
            paymentMethod: result.paymentIntent.payment_method_types,
          };

          const paymentRes = await axiosSecure.post("/payments", paymentData);
          // console.log(paymentRes.data., "checking");
          console.log(paymentRes?.data?.data?._id, "PaymentForm.jsx", 93);
          if (paymentRes?.data?.data?._id) {
            // β… Show SweetAlert with transaction ID
            await darkSwal.fire({
              icon: "success",
              title: "Payment Successful!",
              html: `<strong>Transaction ID:</strong> <code>${transactionId}</code>`,
              confirmButtonText: "Go to My Bookings",
            });
            const paymentHistory = await axiosSecure.post("payments", {
              bookingId,
              email: user?.email,
              amount,
              transactionId,
              paymentMethod: result.paymentIntent.payment_method_types,
            });

            console.log(paymentHistory, "PaymentForm.jsx", 103);
            // β… Redirect to /myParcels
            navigate("/dashboard/my-bookings");
          }
        }
      }
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded-xl shadow-md w-full max-w-md mx-auto"
      >
        <CardElement className="p-2 border rounded"></CardElement>
        <button
          type="submit"
          className="btn btn-primary text-black w-full"
          disabled={!stripe}
        >
          Pay ${amount}
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default PaymentForm; */
```

### `modules/Dashbaord/Tourist/PaymentBooking/refractorPaymentBookingPrompt.md`
```md
You are a **senior full-stack developer**.

## π“ Task

You are given a real-world code module located at:

```
/run/media/sj/developer/web/L1B11/12mi/ass/DeshGuide/DeshGuide-client/src/modules/Dashbaord/Tourist/PaymentBooking
```

Refactor the entire codebase **without modifying any UI or changing behavior**. Instead, improve it using:

- β… Clear separation of concerns
- β… Consistent, semantic naming conventions
- β… Modular architecture (hooks, services, utils, components)
- β… Scalable file/folder structure
- β… Industry-standard project layout and architecture
- β… Readable, testable, production-grade code
- β… 100% behavior and API compatibility

π‘‰ Output the refactored code to a new folder: `PaymentBooking_refactored`

Also return a `.sh` script that will:
- Create that folder
- Write all refactored files
- Run `git add` and `git commit` with message: `refactor: added improved PaymentBooking version`

---

## π² Full Project Structure (cwd)

```bash
/run/media/sj/developer/web/L1B11/12mi/ass/DeshGuide/DeshGuide-client
β”β”€β”€ bun.lock
β”β”€β”€ eslint.config.js
β”β”€β”€ index.html
β”β”€β”€ note.md
β”β”€β”€ package.json
β”β”€β”€ public
β”‚Β Β  β””β”€β”€ CNAME
β”β”€β”€ README.md
β”β”€β”€ src
β”‚Β Β  β”β”€β”€ animation
β”‚Β Β  β”‚Β Β  β”β”€β”€ auth-lottie.json
β”‚Β Β  β”‚Β Β  β”β”€β”€ index.js
β”‚Β Β  β”‚Β Β  β”β”€β”€ LottieAnimation.jsx
β”‚Β Β  β”‚Β Β  β””β”€β”€ motion.js
β”‚Β Β  β”β”€β”€ App.jsx
β”‚Β Β  β”β”€β”€ console
β”‚Β Β  β”‚Β Β  β”β”€β”€ error.json
β”‚Β Β  β”‚Β Β  β””β”€β”€ log.json
β”‚Β Β  β”β”€β”€ contexts
β”‚Β Β  β”‚Β Β  β””β”€β”€ AuthContext
β”‚Β Β  β”‚Β Β      β”β”€β”€ AuthContext.jsx
β”‚Β Β  β”‚Β Β      β””β”€β”€ AuthProvider.jsx
β”‚Β Β  β”β”€β”€ firebase
β”‚Β Β  β”‚Β Β  β””β”€β”€ firebase.init.js
β”‚Β Β  β”β”€β”€ hooks
β”‚Β Β  β”‚Β Β  β”β”€β”€ useAuth.jsx
β”‚Β Β  β”‚Β Β  β”β”€β”€ useAxiosSecure.jsx
β”‚Β Β  β”‚Β Β  β”β”€β”€ useFetchData.js
β”‚Β Β  β”‚Β Β  β”β”€β”€ useHelmet.jsx
β”‚Β Β  β”‚Β Β  β”β”€β”€ usePostData.jsx
β”‚Β Β  β”‚Β Β  β””β”€β”€ useUserRole.jsx
β”‚Β Β  β”β”€β”€ index.css
β”‚Β Β  β”β”€β”€ loggerClient.js
β”‚Β Β  β”β”€β”€ main.jsx
β”‚Β Β  β”β”€β”€ modules
β”‚Β Β  β”‚Β Β  β”β”€β”€ Auth
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ AuthLayout.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ AuthRoute.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ components
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ AuthSidebar.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ constant.js
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ SideBarCard.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ SigninForm.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ Signout.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ SignUpForm.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ SocialLogin.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ index.js
β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ pages
β”‚Β Β  β”‚Β Β  β”‚Β Β      β”β”€β”€ ForgotPass.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β      β”β”€β”€ Signin.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β      β””β”€β”€ SignUp.jsx
β”‚Β Β  β”‚Β Β  β”β”€β”€ Dashbaord
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ DashboardLayout.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ TourGuides
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ GuideProfile
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ GuideProfile.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ TourGuides.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ Tourist
β”‚Β Β  β”‚Β Β  β”‚Β Β      β”β”€β”€ Bookings
β”‚Β Β  β”‚Β Β  β”‚Β Β      β”‚Β Β  β”β”€β”€ BookingCard.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β      β”‚Β Β  β””β”€β”€ MyBookings.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β      β””β”€β”€ PaymentBooking
β”‚Β Β  β”‚Β Β  β”‚Β Β          β”β”€β”€ PaymentBooking.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β          β””β”€β”€ PaymentForm.jsx
β”‚Β Β  β”‚Β Β  β”β”€β”€ landing
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ home
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ Bannnerr
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ Banner.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ CallToActionFull
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ CallToActionFull.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ Home.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ HowItWorks
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ HowItWorks.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ LiveStats
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ LiveStats.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ NewsletterSignup
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ NewsletterSignup.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ Overview
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ Overview.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ Stories
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β      β”β”€β”€ Stories.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β      β””β”€β”€ StoryCard.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ PartnerWithUs
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ PartnerWithUs.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ RandomGuides
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ RandomGuides.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ Testimonials
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ TestimonialCard.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ Testimonials.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ TourismAndGuides.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”β”€β”€ TrendingDestinations
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ TrendingDestinations.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ WhyChooseUs
β”‚Β Β  β”‚Β Β  β”‚Β Β  β”‚Β Β      β””β”€β”€ WhyChooseUs.jsx
β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ index.js
β”‚Β Β  β”‚Β Β  β”β”€β”€ Packages
β”‚Β Β  β”‚Β Β  β”‚Β Β  β””β”€β”€ PackageDetails
β”‚Β Β  β”‚Β Β  β”‚Β Β      β””β”€β”€ PackageDetails.jsx
β”‚Β Β  β”‚Β Β  β””β”€β”€ shared
β”‚Β Β  β”‚Β Β      β”β”€β”€ Layout
β”‚Β Β  β”‚Β Β      β”‚Β Β  β”β”€β”€ CommonFooter.jsx
β”‚Β Β  β”‚Β Β      β”‚Β Β  β”β”€β”€ index.js
β”‚Β Β  β”‚Β Β      β”‚Β Β  β”β”€β”€ navbarDrawer
β”‚Β Β  β”‚Β Β      β”‚Β Β  β”‚Β Β  β”β”€β”€ Navdrawer.jsx
β”‚Β Β  β”‚Β Β      β”‚Β Β  β”‚Β Β  β””β”€β”€ NavdrawerStart.jsx
β”‚Β Β  β”‚Β Β      β”‚Β Β  β”β”€β”€ NavbarDrawer.jsx
β”‚Β Β  β”‚Β Β      β”‚Β Β  β”β”€β”€ Navbar.jsx
β”‚Β Β  β”‚Β Β      β”‚Β Β  β”β”€β”€ navbarLinksConstant.jsx
β”‚Β Β  β”‚Β Β      β”‚Β Β  β”β”€β”€ RootLayout.jsx
β”‚Β Β  β”‚Β Β      β”‚Β Β  β”β”€β”€ SidebarLink.jsx
β”‚Β Β  β”‚Β Β      β”‚Β Β  β”β”€β”€ sidebarLinks.js
β”‚Β Β  β”‚Β Β      β”‚Β Β  β””β”€β”€ Spinner.jsx
β”‚Β Β  β”‚Β Β      β””β”€β”€ ui
β”‚Β Β  β”‚Β Β          β”β”€β”€ Avatar.jsx
β”‚Β Β  β”‚Β Β          β”β”€β”€ Brand.jsx
β”‚Β Β  β”‚Β Β          β”β”€β”€ Button.jsx
β”‚Β Β  β”‚Β Β          β”β”€β”€ DropDown.jsx
β”‚Β Β  β”‚Β Β          β”β”€β”€ index.js
β”‚Β Β  β”‚Β Β          β””β”€β”€ Input.jsx
β”‚Β Β  β”β”€β”€ pages
β”‚Β Β  β”‚Β Β  β””β”€β”€ faq
β”‚Β Β  β”‚Β Β      β”β”€β”€ faq.constant.js
β”‚Β Β  β”‚Β Β      β””β”€β”€ FAQ.jsx
β”‚Β Β  β”β”€β”€ router
β”‚Β Β  β”‚Β Β  β”β”€β”€ ErrorPage.jsx
β”‚Β Β  β”‚Β Β  β”β”€β”€ ProtectedRoute.jsx
β”‚Β Β  β”‚Β Β  β””β”€β”€ router.jsx
β”‚Β Β  β””β”€β”€ utils
β”‚Β Β      β”β”€β”€ axiosInstance.js
β”‚Β Β      β”β”€β”€ customAlert.js
β”‚Β Β      β”β”€β”€ deleteData.js
β”‚Β Β      β”β”€β”€ ErrorMessage.jsx
β”‚Β Β      β”β”€β”€ fetchData.js
β”‚Β Β      β”β”€β”€ PageIntro.jsx
β”‚Β Β      β”β”€β”€ postData.js
β”‚Β Β      β”β”€β”€ TypeWriterEffect.jsx
β”‚Β Β      β””β”€β”€ updateData.js
β”β”€β”€ structure.md
β”β”€β”€ tmuxShow03_25_ΰ¦…ΰ¦ªΰ¦°ΰ¦Ύΰ¦Ήΰ§ΰ¦£_19_07_25.mp4
β”β”€β”€ vite.config.js
β””β”€β”€ vite.logger.plugin.js

43 directories, 99 files
```

## π“ Target Module Tree (PaymentBooking)

```bash
/run/media/sj/developer/web/L1B11/12mi/ass/DeshGuide/DeshGuide-client/src/modules/Dashbaord/Tourist/PaymentBooking
β”β”€β”€ PaymentBooking.jsx
β””β”€β”€ PaymentForm.jsx

1 directory, 2 files
```

## π“„ Module Files & Contents

### `PaymentBooking.jsx`
```javascript
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

const stripePromise = loadStripe(import.meta.env.VITE_payment_Key);

const Payment = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm></PaymentForm>
    </Elements>
  );
};

export default Payment;
```

### `PaymentForm.jsx`
```javascript
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { darkSwal } from "../../../../hooks/usePostData";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { bookingId } = useParams();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const { isPending, data: bookingInfo = {} } = useQuery({
    queryKey: ["booking", bookingId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookings/${bookingId}`);
      return res.data?.data;
    },
  });

  if (isPending) {
    return (
      <div className="text-center text-indigo-400 py-20 animate-pulse">
        Loading Booking Info...
      </div>
    );
  }

  const amount = bookingInfo.price;
  const amountInCents = amount * 100;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    if (!card) return;

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
      return;
    }

    setError("");

    const res = await axiosSecure.post("/payments/create-payment-intent", {
      amountInCents,
      bookingId,
    });

    const clientSecret = res?.data?.data?.clientSecret;

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card,
        billing_details: {
          name: user.displayName,
          email: user.email,
        },
      },
    });

    if (result.error) {
      setError(result.error.message);
    } else {
      setError("");
      if (result.paymentIntent.status === "succeeded") {
        const transactionId = result.paymentIntent.id;

        const paymentData = {
          bookingId,
          amount,
          email: user?.email,
          transactionId,
          paymentMethod: result.paymentIntent.payment_method_types,
        };

        const paymentRes = await axiosSecure.post("/payments", paymentData);

        if (paymentRes?.data?.data?._id) {
          await darkSwal.fire({
            icon: "success",
            title: "Payment Successful!",
            html: `<strong>Transaction ID:</strong> <code>${transactionId}</code>`,
            confirmButtonText: "Go to My Bookings",
          });
          navigate("/dashboard/my-bookings");
        }
      }
    }
  };

  return (
    <div
      className="max-w-4xl mx-auto p-6 md:p-10 rounded-2xl bg-gradient-to-br from-[#0f172a] to-[#1e293b] shadow-2xl border border-indigo-800"
      data-aos="fade-up"
    >
      <h2
        className="text-3xl font-bold text-center text-indigo-400 mb-6"
        data-aos="zoom-in"
      >
        Complete Your Payment
      </h2>

      <div className="grid md:grid-cols-2 gap-6 items-center mb-8">
        <div className="space-y-3 text-gray-300" data-aos="fade-right">
          <p>
            <span className="text-indigo-400 font-semibold">Package:</span>{" "}
            {bookingInfo.packageId?.title}
          </p>
          <p>
            <span className="text-indigo-400 font-semibold">Location:</span>{" "}
            {bookingInfo.packageId?.location}
          </p>
          <p>
            <span className="text-indigo-400 font-semibold">Tour Date:</span>{" "}
            {new Date(bookingInfo.tourDate).toLocaleDateString()}
          </p>
          <p>
            <span className="text-indigo-400 font-semibold">Days:</span>{" "}
            {bookingInfo.packageId?.days}
          </p>
          <p>
            <span className="text-indigo-400 font-semibold">Trip Type:</span>{" "}
            {bookingInfo.packageId?.tripType}
          </p>
          <p>
            <span className="text-indigo-400 font-semibold">Guide:</span>{" "}
            {bookingInfo.guideName}
          </p>
          <p>
            <span className="text-indigo-400 font-semibold">Tourist:</span>{" "}
            {bookingInfo.touristName}
          </p>
        </div>

        <div data-aos="fade-left">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-gray-800 p-6 rounded-xl shadow-xl"
          >
            {/* <CardElement className="p-3 border border-indigo-700 rounded bg-sky-900 text-white" /> */}
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#e0e0ff", // Light text
                    backgroundColor: "#0f172a", // Night blue background
                    iconColor: "#7dd3fc", // Tailwind sky-400 for icon
                    "::placeholder": {
                      color: "#94a3b8", // slate-400
                    },
                  },
                  invalid: {
                    color: "#f87171", // Tailwind red-400
                    iconColor: "#f87171",
                  },
                },
              }}
              className="p-4 border border-indigo-700 rounded bg-[#0f172a]"
            />

            <button
              type="submit"
              disabled={!stripe}
              className="btn w-full py-3 rounded-md font-semibold text-lg transition-all duration-300 bg-indigo-600 text-white hover:bg-indigo-500 hover:shadow-indigo-400 shadow-sm hover:scale-105"
              data-aos="zoom-in"
            >
              Pay ${amount}
            </button>
            {error && (
              <p className="text-red-500 mt-2 text-sm" data-aos="fade-in">
                {error}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;

/* import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { darkSwal } from "../../../../hooks/usePostData";
const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { bookingId } = useParams();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const { isPending, data: bookingInfo = {} } = useQuery({
    queryKey: ["booking", "payment booking", bookingId],
    queryFn: async () => {
      const res = await axiosSecure.get(`bookings/${bookingId}`);
      return res.data?.data;
    },
  });

  if (isPending) {
    return <div>...loading</div>;
  }

  const amount = bookingInfo.price;
  const amountInCents = amount * 100;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (!card) {
      return;
    }

    // step- 1: validate the card
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
    } else {
      setError("");

      // step-2: create payment intent
      const res = await axiosSecure.post("payments/create-payment-intent", {
        amountInCents,
        bookingId,
      });

      const clientSecret = res?.data?.data?.clientSecret;

      // step-3: confirm payment
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: user.displayName,
            email: user.email,
          },
        },
      });

      if (result.error) {
        setError(result.error.message);
      } else {
        setError("");
        if (result.paymentIntent.status === "succeeded") {
          console.log("Payment succeeded!");
          const transactionId = result.paymentIntent.id;

          const paymentData = {
            bookingId,
            amount,
            email: user?.email,
            transactionId,
            paymentMethod: result.paymentIntent.payment_method_types,
          };

          const paymentRes = await axiosSecure.post("/payments", paymentData);
          // console.log(paymentRes.data., "checking");
          console.log(paymentRes?.data?.data?._id, "PaymentForm.jsx", 93);
          if (paymentRes?.data?.data?._id) {
            // β… Show SweetAlert with transaction ID
            await darkSwal.fire({
              icon: "success",
              title: "Payment Successful!",
              html: `<strong>Transaction ID:</strong> <code>${transactionId}</code>`,
              confirmButtonText: "Go to My Bookings",
            });
            const paymentHistory = await axiosSecure.post("payments", {
              bookingId,
              email: user?.email,
              amount,
              transactionId,
              paymentMethod: result.paymentIntent.payment_method_types,
            });

            console.log(paymentHistory, "PaymentForm.jsx", 103);
            // β… Redirect to /myParcels
            navigate("/dashboard/my-bookings");
          }
        }
      }
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded-xl shadow-md w-full max-w-md mx-auto"
      >
        <CardElement className="p-2 border rounded"></CardElement>
        <button
          type="submit"
          className="btn btn-primary text-black w-full"
          disabled={!stripe}
        >
          Pay ${amount}
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default PaymentForm; */
```
```

### `modules/landing/home/Bannnerr/Banner.jsx`
```javascript
export default function Banner() {
  return (
    <div className="mt-5 hero min-h-[60vh] bg-[#0F172A] relative overflow-hidden rounded-3xl">
      {/* Background glow or gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] opacity-70"></div>
      <div className="absolute -top-10 left-1/2 w-[600px] h-[600px] bg-purple-500 opacity-20 rounded-full blur-3xl transform -translate-x-1/2"></div>

      {/* Overlay */}
      <div className="hero-content text-center text-neutral-content z-10">
        <div className="max-w-2xl px-4">
          <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Discover{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#22d3ee] to-[#a78bfa]">
              Bangladesh
            </span>{" "}
            with DeshGuide
          </h1>
          <p className="mb-8 text-lg text-gray-300">
            Your digital travel companion for authentic adventures, local
            guides, and unforgettable memories β€” all in one place.
          </p>
          <div className="flex flex-wrap justify-center gap-4 *:rounded-full *:hover:scale-104 *:hover:shadow-2xl">
            <button className="btn bg-gradient-to-r from-[#22d3ee] to-[#a78bfa] border-0 text-white shadow-lg hover:opacity-90 transition-all duration-200 text-lg px-6">
              π Explore Now
            </button>
            <button className="btn btn-outline text-white border-white hover:bg-white hover:text-black transition-all duration-200 text-lg px-6">
              π“ Share Your Story
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
```

### `modules/landing/home/CallToActionFull/CallToActionFull.jsx`
```javascript
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { Link } from "react-router";

const CallToActionFull = () => {
  return (
    <section className="bg-[#0f172a] py-20 px-4 text-white relative overflow-hidden">
      {/* Marquee Heading */}
      <div className="opacity-10 absolute top-0 left-0 w-full z-0 pointer-events-none">
        <Marquee gradient={false} speed={50}>
          <h1 className="text-[100px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-sky-400 to-indigo-400 whitespace-nowrap">
            DeshGuide β€Ά Explore β€Ά Discover β€Ά Travel β€Ά
          </h1>
        </Marquee>
      </div>

      {/* Main CTA */}
      <div
        className="relative z-10 max-w-5xl mx-auto text-center space-y-6"
        data-aos="fade-up-right"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-md"
        >
          Ready to explore Bangladesh like never before?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="text-gray-300 max-w-xl mx-auto"
        >
          βοΈ Discover hidden gems, connect with trusted guides, and create
          unforgettable journeys with DeshGuide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <Link
            to="/all-trips"
            className="inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:scale-105 hover:shadow-[0_0_25px_#7c3aedaa] transition-all duration-300"
          >
            π Start Your Journey
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionFull;
```

### `modules/landing/home/Home.jsx`
```javascript
import UseHelmet from "../../../hooks/useHelmet";
import Banner from "./Bannnerr/Banner";
import Overview from "./Overview/Overview";
import TourismAndGuides from "./TourismAndGuides";
import Faqs from "../../../pages/faq/FAQ.jsx";
import Stories from "./Overview/Stories/Stories.jsx";
import LiveStats from "./LiveStats/LiveStats.jsx";
import NewsletterSignup from "./NewsletterSignup/NewsletterSignup.jsx";
import Testimonials from "./Testimonials/Testimonials.jsx";
import PartnerWithUs from "./PartnerWithUs/PartnerWithUs.jsx";
import HowItWorks from "./HowItWorks/HowItWorks.jsx";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs.jsx";
import CallToActionFull from "./CallToActionFull/CallToActionFull.jsx";
import TrendingDestinations from "./TrendingDestinations/TrendingDestinations.jsx";
import Packages from "../../Packages/Packages/Packages.jsx";
import RandomGuides from "./RandomGuides/RandomGuides.jsx";

const Home = () => {
  return (
    <div>
      <UseHelmet title="Home" />

      <Banner />
      <Overview />
      {/* <TourismAndGuides /> */}
      <Packages apiEndpoint="packages/random" />
      <RandomGuides />
      <TrendingDestinations />
      <Stories apiEndpoint="stories" />
      <LiveStats />
      <Testimonials />
      <HowItWorks />
      <WhyChooseUs />
      <Faqs />
      <CallToActionFull />
      <PartnerWithUs />
      <NewsletterSignup />
    </div>
  );
};

export default Home;
```

### `modules/landing/home/HowItWorks/HowItWorks.jsx`
```javascript
import { motion } from "framer-motion";
import {
  FaUserCheck,
  FaSearchLocation,
  FaCalendarCheck,
  FaSmileBeam,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaSearchLocation className="text-3xl text-sky-400" />,
    title: "Explore Packages",
    description:
      "Browse handpicked tours across Bangladesh with detailed insights and local charm.",
  },
  {
    icon: <FaUserCheck className="text-3xl text-purple-400" />,
    title: "Select a Guide",
    description:
      "Choose from verified, traveler-rated guides based on your preferences and needs.",
  },
  {
    icon: <FaCalendarCheck className="text-3xl text-indigo-400" />,
    title: "Book Instantly",
    description:
      "Secure your guide and package with instant booking using our seamless platform.",
  },
  {
    icon: <FaSmileBeam className="text-3xl text-pink-400" />,
    title: "Enjoy Your Trip",
    description:
      "Meet your guide, follow your itinerary, and experience a worry-free journey!",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-[#0f172a] text-white py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-14 bg-gradient-to-r from-sky-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-xl animate-pulse">
        π€ How DeshGuide Works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {steps.map((step, i) => (
          <div data-aos="zoom-in-right" key={i}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-gradient-to-br from-[#1e293b] to-[#111827] border border-purple-700 hover:border-sky-500 p-6 text-center shadow-[0_0_20px_#7c3aed33] hover:scale-[1.03] transition-all duration-300"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-indigo-300 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm">{step.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
```

### `modules/landing/home/LiveStats/LiveStats.jsx`
```javascript
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  { label: "Packages", value: 100, suffix: "+" },
  { label: "Guides", value: 50, suffix: "+" },
  { label: "Districts", value: 25, suffix: "+" },
  { label: "Bookings", value: 5000, suffix: "k+" },
];

const LiveStats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // count only once
    threshold: 0.3, // trigger when 30% visible
  });

  return (
    <section
      ref={ref}
      className="max-w-6xl mx-auto px-4 py-16 bg-[#0f172a] text-white rounded-3xl shadow-lg shadow-purple-900/50"
    >
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
      >
        {stats.map(({ label, value, suffix }, i) => (
          <div key={label} className="space-y-2" data-aos="flip-right">
            <p className="text-5xl font-extrabold bg-gradient-to-r from-sky-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg">
              {inView ? (
                <CountUp
                  end={value}
                  duration={4}
                  suffix={suffix}
                  separator=","
                />
              ) : (
                `0${suffix}`
              )}
            </p>
            <p className="text-lg text-indigo-300 font-semibold tracking-wider">
              {label}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default LiveStats;
```

### `modules/landing/home/NewsletterSignup/NewsletterSignup.jsx`
```javascript
import { useState } from "react";
import { darkSwal } from "../../../../hooks/usePostData";
import { swalErrorToast, swalSuccessToast } from "../../../shared/ui/swalToast";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      /*       darkSwal.fire({
        icon: "warning",
        title: "Please enter your email",
      }); */

      swalErrorToast({
        title: "Please enter your email",
        icon: "warning",
        text: "You have to enter your email address",
      });
      return;
    }
    setLoading(true);
    try {
      await new Promise((res) => setTimeout(res, 1500));
      /*       darkSwal.fire({
        icon: "success",
        title: "Subscribed!",
        text: "You will get insider deals and travel hacks in your inbox.",
      }); */
      swalSuccessToast({
        title: "Subscribed!",
        text: "You will get insider deals and travel hacks in your inbox.",
      });
      setEmail("");
    } catch {
      /*       darkSwal.fire({
        icon: "error",
        title: "Subscription failed",
        text: "Please try again later.",
      }); */

      swalErrorToast({
        title: "Subscription failed",
        text: "Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-8 py-16 bg-[#0f172a] rounded-3xl shadow-lg shadow-purple-900/50 text-white">
      <div
        className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto"
        data-aos="fade-up-right"
      >
        {/* Left: Incentive Text */}
        <div className="md:flex-1 text-center md:text-left">
          <h3
            className="text-3xl md:text-4xl font-extrabold
            bg-gradient-to-r from-sky-400 via-purple-500 to-indigo-400
            bg-clip-text text-transparent drop-shadow-xl"
          >
            π“¬ Get insider deals and travel hacks!
          </h3>
        </div>

        {/* Right: Form */}
        <form
          onSubmit={handleSubmit}
          className="md:flex-1 flex flex-col sm:flex-row items-center gap-6 w-full"
          noValidate
        >
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow bg-[#1e293b] placeholder-indigo-400 text-white rounded-full py-4 px-6
              border-2 border-transparent
              focus:outline-none focus:border-gradient-to-r focus:border-sky-400 focus:ring-2 focus:ring-purple-500
              transition-all duration-300
              shadow-md shadow-indigo-700/50
              placeholder-opacity-70
              focus:placeholder-opacity-40"
            required
            aria-label="Email Address"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto bg-gradient-to-r from-sky-500 to-purple-600 hover:from-sky-400 hover:to-purple-500
              text-white font-semibold rounded-full py-4 px-10
              shadow-lg shadow-purple-700/70
              transition-all duration-300
              disabled:opacity-50 disabled:cursor-not-allowed
              glow-pulse"
          >
            {loading ? "Submitting..." : "Subscribe"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;
```

### `modules/landing/home/Overview/Overview.jsx`
```javascript
import { motion } from "framer-motion";
import {
  LucideGlobe,
  Users,
  BookOpen,
  CreditCard,
  LayoutDashboard,
  MonitorSmartphone,
} from "lucide-react";

const features = [
  {
    icon: <LucideGlobe size={28} />,
    title: "Discover Destinations",
    description:
      "Explore breathtaking locations with photos, maps, and details.",
  },
  {
    icon: <Users size={28} />,
    title: "Hire Trusted Guides",
    description: "Connect with verified local guides for personalized tours.",
  },
  {
    icon: <BookOpen size={28} />,
    title: "Share Travel Stories",
    description: "Post your real travel experiences with photos and tips.",
  },
  {
    icon: <CreditCard size={28} />,
    title: "Secure Stripe Payments",
    description: "Book and pay seamlessly using Stripe β€” fast and reliable.",
  },
  {
    icon: <LayoutDashboard size={28} />,
    title: "Smart Dashboards",
    description: "Role-based control panels for users, guides, and admins.",
  },
  {
    icon: <MonitorSmartphone size={28} />,
    title: "Fully Responsive UI",
    description:
      "Smooth on mobile, tablet, and desktop with a night-themed aesthetic.",
  },
];

export default function Overview() {
  return (
    <section className="bg-[#0e0f1a] text-white py-20 px-4 sm:px-6 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#00FFC6] drop-shadow-lg">
          What is DeshGuide?
        </h2>
        <p className="text-gray-400 text-lg mb-12 max-w-3xl mx-auto">
          <span className="text-white font-semibold">DeshGuide</span> is a
          modern tourism platform connecting travelers, guides, and
          storytellersβ€”crafted for seamless discovery, booking, and sharing.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative overflow-hidden p-6 bg-gradient-to-br from-[#1a1c2b] to-[#11131f] border border-[#2d2f43] rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              data-aos="fade-up-right"
            >
              <div className="absolute inset-0 bg-[#00FFC6] opacity-0 group-hover:opacity-10 blur-xl rounded-2xl pointer-events-none transition-all" />
              <div className="group flex flex-col items-center">
                <div className="mb-4 p-4 rounded-full bg-[#1e293b] text-[#00FFC6] group-hover:animate-pulse">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
```

### `modules/landing/home/Overview/Stories/Stories.jsx`
```javascript
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../../../../hooks/useAxiosSecure";
import StoryCard from "./StoryCard";
import Spinner from "../../../../shared/Layout/Spinner";
import { Link, useLocation } from "react-router";

const Stories = ({ apiEndpoint }) => {
  const location = useLocation();
  const isStoriesPage = location.pathname.toLowerCase().includes("all-stories");
  const { data: stories = [], isLoading } = useQuery({
    queryKey: ["stories"],
    queryFn: async () => {
      const res = await axiosInstance.get(apiEndpoint);
      return res.data.data;
    },
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section
      className="px-4 py-16 bg-[#0f172a] text-white"
      data-aos="fade-up-left"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-sky-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-xl animate-pulse">
        π Traveler Stories
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {stories.map((story) => (
          <StoryCard key={story._id} story={story} />
        ))}
      </div>
      {isStoriesPage || (
        <div className="flex-container mt-8">
          <Link
            className="btn btn-soft btn-info rounded-full mt-3 "
            to="/all-stories"
          >
            View All Stories
          </Link>
        </div>
      )}
    </section>
  );
};

export default Stories;
```

### `modules/landing/home/Overview/Stories/StoryCard.jsx`
```javascript
import { motion } from "framer-motion";
import { Link } from "react-router";

const StoryCard = ({ story }) => {
  return (
    <div>
      <motion.div
        key={story._id}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col justify-between h-full min-h-[440px] rounded-3xl overflow-hidden bg-gradient-to-br from-[#1e1b2d] to-[#0f172a] border border-indigo-600 shadow-[0_0_25px_#6366f180] hover:scale-[1.02] hover:shadow-[0_0_40px_#7c3aed88] transition-all duration-300 backdrop-blur-md"
      >
        <div className="relative group">
          <img
            src={story.images?.[0]}
            alt={story.title}
            className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105 border-b-[4px] border-indigo-400 shadow-[0_4px_30px_rgba(99,102,241,0.6)]"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <h3 className="text-xl font-semibold text-sky-300 group-hover:text-indigo-300 transition-colors">
              {story.title}
            </h3>
          </div>
        </div>

        <div className="flex flex-col justify-between flex-1 p-5 space-y-3">
          <p className="text-sm text-gray-300 line-clamp-4 leading-relaxed">
            {story.description}
          </p>

          <div className="flex items-center gap-3 pt-4 mt-auto">
            <img
              src={story?.userPhoto || "https://avatar.iran.liara.run/public"}
              className="w-11 h-11 rounded-full border-[2px] border-purple-500 shadow-md"
            />
            <div>
              <p className="font-semibold text-violet-300 hover:text-sky-400 transition-colors duration-200">
                {story.userName}
              </p>
              <p className="text-xs text-gray-400">
                {new Date(story.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default StoryCard;
```

### `modules/landing/home/Overview/Stories/StoryCard.jsx~`
```javascript~
import { motion } from "framer-motion";
import { Link } from "react-router";

const StoryCard = ({ story }) => {
  return (
    <div data-aos="zoom-in-down">
      <motion.div
        key={story._id}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col justify-between h-full min-h-[440px] rounded-3xl overflow-hidden bg-gradient-to-br from-[#1e1b2d] to-[#0f172a] border border-indigo-600 shadow-[0_0_25px_#6366f180] hover:scale-[1.02] hover:shadow-[0_0_40px_#7c3aed88] transition-all duration-300 backdrop-blur-md"
      >
        <div className="relative group">
          <img
            src={story.images?.[0]}
            alt={story.title}
            className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105 border-b-[4px] border-indigo-400 shadow-[0_4px_30px_rgba(99,102,241,0.6)]"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <h3 className="text-xl font-semibold text-sky-300 group-hover:text-indigo-300 transition-colors">
              {story.title}
            </h3>
          </div>
        </div>

        <div className="flex flex-col justify-between flex-1 p-5 space-y-3">
          <p className="text-sm text-gray-300 line-clamp-4 leading-relaxed">
            {story.description}
          </p>

          <div className="flex items-center gap-3 pt-4 mt-auto">
            <img
              src={story.userPhoto}
              alt={story.userName}
              className="w-11 h-11 rounded-full border-[2px] border-purple-500 shadow-md"
            />
            <div>
              <p className="font-semibold text-violet-300 hover:text-sky-400 transition-colors duration-200">
                {story.userName}
              </p>
              <p className="text-xs text-gray-400">
                {new Date(story.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
          <Link>Details</Link>
        </div>
      </motion.div>
    </div>
  );
};

export default StoryCard;

/* import { motion } from "framer-motion";
const StoryCard = ({ story }) => {
  return (
    <div data-aos="zoom-in-down">
      <motion.div
        key={story._id}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl overflow-hidden bg-gradient-to-br from-[#1e1b2d] to-[#0f172a] border border-indigo-600 shadow-[0_0_25px_#6366f180] hover:scale-[1.02] hover:shadow-[0_0_40px_#7c3aed88] transition-all duration-300 backdrop-blur-md"
      >
        <div className="relative group">
          <img
            src={story.images?.[0]}
            alt={story.title}
            className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105 border-b-[4px] border-indigo-400 shadow-[0_4px_30px_rgba(99,102,241,0.6)]"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <h3 className="text-xl font-semibold text-sky-300 group-hover:text-indigo-300 transition-colors">
              {story.title}
            </h3>
          </div>
        </div>

        <div className="p-5 space-y-3">
          <p className="text-sm text-gray-300 line-clamp-4 leading-relaxed">
            {story.description}
          </p>

          <div className="flex items-center gap-3 pt-4">
            <img
              src={story.userPhoto}
              alt={story.userName}
              className="w-11 h-11 rounded-full border-[2px] border-purple-500 shadow-md"
            />
            <div>
              <p className="font-semibold text-violet-300 hover:text-sky-400 transition-colors duration-200">
                {story.userName}
              </p>
              <p className="text-xs text-gray-400">
                {new Date(story.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default StoryCard; */
```

### `modules/landing/home/PartnerWithUs/PartnerWithUs.jsx`
```javascript
import { motion } from "framer-motion";
import { Link } from "react-router";

const PartnerWithUs = () => {
  return (
    <div
      className="bg-[#0f172a] py-20 px-6 text-white"
      data-aos="fade-down-right"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center bg-gradient-to-br from-[#1f2937] to-[#111827] rounded-3xl p-10 shadow-[0_0_30px_#9333ea55] border border-purple-700"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-sky-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-xl animate-pulse">
          π¤ Partner With Us
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Are you a tour guide, travel agency, or hospitality provider? Join the
          DeshGuide platform and reach thousands of travelers looking for
          trusted experiences.
        </p>
        <Link
          to="/partner-signup"
          className="inline-block bg-gradient-to-r from-purple-600 to-sky-500 hover:from-purple-500 hover:to-sky-400 text-white font-semibold py-3 px-8 rounded-full shadow-md shadow-purple-800/50 transition-all duration-300"
        >
          Become a Partner
        </Link>
      </motion.div>
    </div>
  );
};

export default PartnerWithUs;
```

### `modules/landing/home/RandomGuides/RandomGuides.jsx`
```javascript
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import { axiosInstance } from "../../../../hooks/useAxiosSecure";

const fetchRandomGuides = async () => {
  const res = await axiosInstance.get("tour-guide-requests/random-accepted");
  return res.data?.data || [];
};

export default function RandomGuides() {
  const {
    data = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["randomAcceptedGuides"],
    queryFn: fetchRandomGuides,
  });

  console.log(data, " random data RandomGuides.jsx", 13);
  if (isLoading) {
    return (
      <div className="text-center text-primary text-xl mt-10">
        Loading tour guides...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center text-error text-xl mt-10">
        Failed to load guides.
      </div>
    );
  }

  return (
    <section className="py-16 bg-base-00 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 drop-shadow-glow">
          π Meet Our Verified Tour Guides
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((guide) => (
            <div
              key={guide._id}
              className="group relative bg-gradient-to-br from-[#1c1c1e] to-[#2a2a2d] border border-[#2f2f30] rounded-xl p-6 shadow-lg overflow-hidden
              hover:shadow-glow transition duration-300"
              data-aos="fade-up-right"
            >
              <div className="absolute -top-5 -left-5 w-40 h-40 bg-primary opacity-10 rounded-full blur-2xl animate-pulse pointer-events-none" />

              <div className="relative z-10">
                <h3 className="text-2xl font-semibold text-primary mb-2 group-hover:scale-105 transition-transform duration-200">
                  {guide?.user?.name}
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  {guide?.user?.email}
                </p>

                <span className="badge badge-accent badge-outline mb-4">
                  Accepted
                </span>

                <div className="mt-4">
                  <Link
                    to={`/guides/${guide?.user._id}`}
                    className="btn btn-sm btn-outline text-white border-white hover:bg-white hover:text-black transition duration-200"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### `modules/landing/home/Testimonials/TestimonialCard.jsx`
```javascript
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
const stagger = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const TestimonialCard = ({ testimonial, i }) => {
  return (
    <div data-aos="fade-up-left">
      <motion.div
        custom={i}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="rounded-2xl border border-purple-700 bg-gradient-to-br from-[#1e293b] to-[#111827] shadow-[0_0_25px_#7c3aed44] p-6 hover:scale-[1.03] transition-all duration-300"
      >
        <div className="flex items-center gap-4 mb-4">
          <img
            src={testimonial.photo}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full border border-purple-500"
          />
          <div>
            <h4 className="text-lg font-semibold text-sky-300">
              {testimonial.name}
            </h4>
            <div className="flex gap-1 text-yellow-400 text-sm">
              {[...Array(testimonial.rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>
        </div>
        <p className="text-gray-300">{testimonial.text}</p>
      </motion.div>
    </div>
  );
};

export default TestimonialCard;
```

### `modules/landing/home/Testimonials/Testimonials.jsx`
```javascript
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Shamim Ahmed",
    photo: "https://xsgames.co/randomusers/assets/avatars/male/3.jpg",
    text: "DeshGuide made our family trip unforgettable. The tour guide was super friendly and helpful!",
    rating: 5,
  },
  {
    name: "Hriday Ahmed",
    photo: "https://xsgames.co/randomusers/assets/avatars/male/4.jpg",
    text: "Booking was fast, simple, and secure. I highly recommend DeshGuide for any traveler.",
    rating: 4,
  },
  {
    name: "Tanvir Hasan",
    photo: "https://xsgames.co/randomusers/assets/avatars/male/5.jpg",
    text: "I was amazed by the personalized guide recommendations. Truly next-level service!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#0f172a] py-20 px-4 text-white">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-14 bg-gradient-to-r from-sky-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-xl animate-pulse">
        π’¬ What Our Users Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {testimonials.map((testimonial, i) => (
          <TestimonialCard
            key={testimonial.name}
            testimonial={testimonial}
            i={i}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
```

### `modules/landing/home/TourismAndGuides.jsx`
```javascript
// src/modules/landing/home/TourismAndGuides.jsx

import useFetchData from "../../../hooks/useFetchData";
import Spinner from "../../shared/Layout/Spinner";
import PackageCard from "../../Packages/Packages/PackageCard";
import { Link } from "react-router";

const TourismAndGuides = () => {
  const { data: packages = [], loading } = useFetchData("packages/random");

  console.log(packages, "TourismAndGuides.jsx", 7);
  return (
    <section className="px-4 py-10 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary">
        Our Featured Packages
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {loading ? (
          <Spinner />
        ) : (
          packages.map((pkg) => <PackageCard key={pkg._id} pkg={pkg} />)
        )}
      </div>
      <div className="flex-container mt-8">
        <Link
          className="btn btn-soft btn-info rounded-full mt-3 "
          to="/all-trips"
        >
          View All Packages
        </Link>
      </div>

      <div className="divider my-6"></div>
    </section>
  );
};

export default TourismAndGuides;
```

### `modules/landing/home/TrendingDestinations/TrendingDestinations.jsx`
```javascript
import { motion } from "framer-motion";

const trendingSpots = [
  {
    name: "π Saint Martin",
    image:
      "https://images.deepai.org/art-image/6d1242776af24b29989fcb1f05e2a9f7/colorful-paddle-boat-floating-on-small-forest-lake-in.jpg",
    description:
      "A serene island in the Bay of Bengal, famous for crystal clear water, coral reefs, and calm vibes.",
  },
  {
    name: "ποΈ Sajek Valley",
    image:
      "https://images.deepai.org/art-image/3be7075b97b143d19ca910a9c7621cac/aerial-view-of-saint-martins-turquoise-coast-with-cor.jpg",
    description:
      "A dreamy mountain valley in Rangamati with endless green, cloud-kissed mornings, and cottage.",
  },
  {
    name: "π–οΈ Coxβ€™s Bazar",
    image:
      "https://images.deepai.org/art-image/72bca9114b0941e89cdb0ea0a22f5553/cox-s-bazar-sea-beach-during-sunset-with-silhouettes-.jpg",
    description:
      "Home to the worldβ€™s longest sea beach, perfect for beach lovers, surfers, and seafood enthusiasts.",
  },
  {
    name: "π² Bandarban",
    image:
      "https://images.deepai.org/art-image/b34dc26354ae436595ba69b3a982f9c5/a-river-and-forest-scenic-beauty-with-the-sunset-thum.jpg",
    description:
      "Adventure-packed hills, waterfalls, tribal villages, and peaceful trekking through natureβ€™s best.",
  },
];

const TrendingDestinations = () => {
  return (
    <section className="bg-[#0b1120] py-20 px-4 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-r from-fuchsia-400 via-sky-400 to-purple-500 bg-clip-text text-transparent animate-pulse drop-shadow-lg"
        >
          π”¥ Trending Destinations
        </motion.h2>
        <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto">
          Discover the most loved destinations by our travelers this week.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {trendingSpots.map((spot, i) => (
            <div data-aos="flip-left" key={spot.name}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative overflow-hidden group rounded-2xl border border-sky-700 bg-gradient-to-br from-[#111827] to-[#0f172a] shadow-[0_0_30px_#0ea5e944] hover:shadow-[0_0_40px_#38bdf8aa] transition-all duration-300"
              >
                <img
                  src={spot.image}
                  alt={spot.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300" />
                <div className="absolute top-3 left-3 bg-sky-700/90 px-3 py-1 text-xs rounded-full font-semibold shadow shadow-cyan-800">
                  π€ Hot Spot
                </div>
                <div className="relative z-10 p-4 bg-black/60 backdrop-blur-md">
                  <h3 className="text-lg font-bold text-sky-300">
                    {spot.name}
                  </h3>
                  <p className="text-sm text-gray-300 mt-1">
                    {spot.description}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingDestinations;
```

### `modules/landing/home/WhyChooseUs/WhyChooseUs.jsx`
```javascript
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaRocket,
  FaRegHandshake,
  FaRegSmile,
} from "react-icons/fa";

const reasons = [
  {
    icon: <FaShieldAlt className="text-3xl text-sky-400" />,
    title: "Verified & Trusted",
    description:
      "Every tour guide is manually verified to ensure safety, trust, and local authenticity.",
  },
  {
    icon: <FaRocket className="text-3xl text-purple-400" />,
    title: "Fast & Flexible",
    description:
      "Instant booking, live updates, and a wide range of destinations to fit your travel style.",
  },
  {
    icon: <FaRegHandshake className="text-3xl text-pink-400" />,
    title: "Local Partnerships",
    description:
      "We collaborate with local businesses and guides to boost the regional economy.",
  },
  {
    icon: <FaRegSmile className="text-3xl text-indigo-400" />,
    title: "Satisfaction First",
    description:
      "Transparent pricing, real reviews, and human support ensure a smooth experience.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#0f172a] text-white py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-14 bg-gradient-to-r from-sky-400 via-purple-500 to-pink-400 bg-clip-text text-transparent drop-shadow-xl animate-pulse">
        π Why Choose DeshGuide?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {reasons.map((reason, index) => (
          <div data-aos="zoom-out-left"              key={index}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-gradient-to-br from-[#1e293b] to-[#111827] border border-purple-700 hover:border-sky-500 p-6 text-center shadow-[0_0_20px_#7c3aed33] hover:scale-[1.03] transition-all duration-300"
            >
              <div className="mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-indigo-300 mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-400 text-sm">{reason.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
```

### `modules/landing/index.js`
```javascript

```

### `modules/Packages/PackageDetails/PackageDetails.jsx`
```javascript
import { useParams, useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { axiosInstance } from "../../../hooks/useAxiosSecure";
import useUserRole from "../../../hooks/useUserRole";
import usePostData from "../../../hooks/usePostData";
import Spinner from "../../shared/Layout/Spinner";

const PackageDetails = () => {
  const { postData, isPending } = usePostData();

  const { id } = useParams();
  const navigate = useNavigate();
  const { userData } = useUserRole();

  const [guideMode, setGuideMode] = useState("dropdown"); // or 'list'

  const { data: packageData, isLoading: isPackageLoading } = useQuery({
    queryKey: ["package", id],
    queryFn: async () => {
      const res = await axiosInstance.get(`/packages/${id}`);
      return res.data.data;
    },
  });

  const { data: tourGuides, isLoading: isGuidesLoading } = useQuery({
    queryKey: ["acceptedGuides"],
    queryFn: async () => {
      const res = await axiosInstance.get(`users/tour-guides`);
      return res.data.data;
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    if (!userData) {
      Swal.fire({
        icon: "warning",
        title: "Please login first to book a tour.",
      });
      return;
    }

    const selectedGuide = tourGuides.find(
      (guide) => guide._id === formData.guideId,
    );

    if (!selectedGuide) {
      Swal.fire({
        icon: "error",
        title: "Invalid guide selected.",
      });
      return;
    }

    const bookingPayload = {
      packageId: id,
      packageName: title,
      touristId: userData._id,
      touristName: userData.name,
      touristEmail: userData.email,
      touristPhoto: userData.photoURL,
      guideId: selectedGuide._id,
      guideName: selectedGuide.name,
      price: parseFloat(formData.price),
      tourDate: new Date(formData.tourDate).toISOString(),
      status: "pending",
      paymentStatus: "unpaid",
      transactionId: "",
    };

    try {
      const res = await postData({
        url: "/bookings",
        payload: bookingPayload,
      });

      console.log(res, "booking PackageDetails.jsx", 81);
      Swal.fire({
        icon: "success",
        title: "Booking Submitted!",
        text: "Your booking is pending approval.",
        showCancelButton: true,
        confirmButtonText: "Go to My Bookings",
        cancelButtonText: "Stay Here",
        background: "#111827",
        color: "#E5E7EB",
        confirmButtonColor: "#6366F1",
        cancelButtonColor: "#EF4444",
        customClass: {
          popup: "glow-border",
          confirmButton: "glow-border pulse-glow px-4 py-2 text-white",
          cancelButton: "bg-gray-700 px-4 py-2 text-white",
        },
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/dashboard/my-bookings");
        }
      });
    } catch (err) {
      // already handled by usePostData
    }
  };

  if (isPackageLoading || isGuidesLoading)
    return <div className="text-center py-10 text-white">Loading...</div>;

  const {
    title,
    description,
    price,
    days,
    tripType,
    location,
    gallery,
    tourPlan,
  } = packageData;

  return (
    <div className="text-white px-4 md:px-10 py-10 space-y-12 animate-fade-in">
      {isPending && <Spinner />}
      {/* Gallery Section */}
      <div className="grid grid-cols-3 border p-1 border-[#5f5f9f] rounded-2xl shadow-xl glow-border pulse-glow">
        {gallery.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt="Tour Gallery"
            className="rounded-lg border border-gray-800 shadow-md hover:scale-105 transition-all duration-300 "
          />
        ))}
      </div>

      <div className="glow-border pulse-glow p-4">
        {/* About Section */}
        <div className="space-y-2">
          <h2 className="text-4xl max-sm:text-2xl font-bold glow-pulse text-purple-400">
            {title}
          </h2>
          <p className="text-lg text-gray-300">{description}</p>
          <div className="text-sm text-gray-400">
            Location: {location} | Days: {days} | Type: {tripType}
          </div>
        </div>

        {/* Tour Plan */}
        <div className="mt-5">
          <h3 className="text-2xl font-semibold mb-4">π—“οΈ Tour Plan</h3>
          <div className="space-y-3">
            {tourPlan.map((plan, i) => (
              <div
                key={i}
                className="p-4 bg-[#111827] border-l-4 border-purple-500 rounded-md hover:shadow-purple-md transition-all"
              >
                <h4 className="font-semibold text-lg">Day {plan.day}</h4>
                <p className="text-gray-300">{plan.activities}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Guide Mode Toggle */}
      <div className="flex gap-4 items-center">
        <button
          onClick={() => setGuideMode("dropdown")}
          className={`btn ${guideMode === "dropdown" ? "btn-primary" : "btn-outline"} rounded-full`}
        >
          Select Guide
        </button>
        <button
          onClick={() => setGuideMode("list")}
          className={`btn ${guideMode === "list" ? "btn-primary" : "btn-outline"} rounded-full`}
        >
          See Guide List
        </button>
      </div>

      {/* Guide Dropdown OR List */}
      {guideMode === "list" ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {tourGuides.map((guide) => (
            <div
              key={guide._id}
              className="p-4 bg-[#0f172a] border border-purple-700 rounded-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              onClick={() => navigate(`/guides/${guide._id}`)}
            >
              <h4 className="text-lg font-semibold">{guide.name}</h4>
              <p className="text-sm text-gray-400">{guide.email}</p>
            </div>
          ))}
        </div>
      ) : null}

      {/* Booking Form */}
      <div className="bg-[#0f172a] rounded-lg p-6 md:p-10 border border-purple-700 shadow-lg shadow-purple-900 text-gray-100">
        <h3 className="text-2xl font-bold mb-6 text-purple-400">
          π“ Book This Tour
        </h3>

        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5">
          {/* Package Name */}
          <div>
            <label className="label-text text-sm text-purple-300 mb-1 block">
              Package Name
            </label>
            <input
              type="text"
              readOnly
              className="input input-bordered w-full bg-[#1e293b] text-white placeholder-gray-500"
              placeholder="Package Name"
              value={title}
              {...register("packageName")}
            />
          </div>

          {/* Tourist Info */}
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="label-text text-sm text-purple-300 mb-1 block">
                Your Name
              </label>
              <input
                type="text"
                readOnly
                className="input input-bordered w-full bg-[#1e293b] text-white placeholder-gray-500"
                placeholder="Your Name"
                value={userData?.name || ""}
              />
            </div>
            <div>
              <label className="label-text text-sm text-purple-300 mb-1 block">
                Your Email
              </label>
              <input
                type="email"
                readOnly
                className="input input-bordered w-full bg-[#1e293b] text-white placeholder-gray-500"
                placeholder="Your Email"
                value={userData?.email || ""}
              />
            </div>
            <div>
              <label className="label-text text-sm text-purple-300 mb-1 block">
                Your Photo URL
              </label>
              <input
                type="text"
                readOnly
                className="input input-bordered w-full bg-[#1e293b] text-white placeholder-gray-500"
                placeholder="Your Photo URL"
                value={userData?.photoURL || ""}
              />
            </div>
          </div>

          {/* Price */}
          <div>
            <label className="label-text text-sm text-purple-300 mb-1 block">
              Price (ΰ§³)
            </label>
            <input
              type="number"
              className="input input-bordered w-full bg-[#1e293b] text-white"
              defaultValue={price}
              {...register("price", { required: true, min: 0 })}
              readOnly
            />
            {errors.price && (
              <p className="text-red-400 text-sm mt-1">Valid price required</p>
            )}
          </div>

          {/* Tour Date */}
          <div>
            <label className="label-text text-sm text-purple-300 mb-1 block">
              Tour Date
            </label>
            <input
              type="date"
              className="input input-bordered w-full bg-[#1e293b] text-white"
              {...register("tourDate", { required: true })}
            />
            {errors.tourDate && (
              <p className="text-red-400 text-sm mt-1">Please select a date</p>
            )}
          </div>

          {/* Guide Dropdown */}
          {guideMode === "dropdown" && (
            <div>
              <label className="label-text text-sm text-purple-300 mb-1 block">
                Select a Tour Guide
              </label>
              <select
                className="select select-bordered w-full bg-[#1e293b] text-white"
                {...register("guideId", { required: true })}
              >
                <option value="">Choose a guide</option>
                {tourGuides.map((guide) => (
                  <option key={guide._id} value={guide._id}>
                    {guide.name} ({guide.email})
                  </option>
                ))}
              </select>
              {errors.guideId && (
                <p className="text-red-400 text-sm mt-1">
                  Please select a guide
                </p>
              )}
            </div>
          )}

          {/* Submit */}
          <button
            className="btn btn-accent mt-4 shadow-lg hover:shadow-purple-500/50 transition-all duration-300 glow-pulse rounded-full"
            type="submit"
          >
            π€ Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default PackageDetails;
```

### `modules/Packages/Packages/PackageCard.jsx`
```javascript
import { Link } from "react-router";

const PackageCard = ({ pkg }) => {
  return (
    <div
      key={pkg._id}
      className="card bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white border border-primary shadow-2xl transform transition-all duration-300 hover:scale-101 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] pulse-glow"
      data-aos="fade-up-left"
    >
      <figure>
        <img
          src={pkg.gallery?.[0]}
          alt={pkg.title}
          className="h-48 w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h3 className="text-xl font-bold">{pkg.title}</h3>
        <p className="text-sm text-gray-300">{pkg.description}</p>
        <div className="flex flex-wrap gap-3 text-sm my-2">
          <span className="badge badge-accent">{pkg.tripType}</span>
          <span className="badge badge-secondary">{pkg.days} Days</span>
          <span className="badge badge-outline text-white border-white">
            {pkg.location}
          </span>
        </div>
        <div className="text-lg font-semibold text-secondary">
          ΰ§³ {pkg.price.toLocaleString()}
        </div>
        <div className="card-actions justify-end mt-2">
          <Link to={`/packages/${pkg._id}`} className="btn btn-primary btn-sm">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
```

### `modules/Packages/Packages/Packages.jsx`
```javascript
import { Link, useLocation } from "react-router";
import useFetchData from "../../../hooks/useFetchData";
import Spinner from "../../shared/Layout/Spinner";
import PackageCard from "./PackageCard";

const Packages = ({ apiEndpoint }) => {
  const { data: packages = [], loading } = useFetchData(apiEndpoint);

  const location = useLocation();
  const isAllTripPage = location.pathname.toLowerCase().includes("all-trips");

  return (
    <section className="px-4 py-10 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary">
        Our Featured Packages
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 p-4">
        {loading ? (
          <Spinner />
        ) : (
          packages.map((pkg) => <PackageCard key={pkg._id} pkg={pkg} />)
        )}
      </div>

      {isAllTripPage || (
        <div className="flex-container mt-8">
          <Link
            className="btn btn-soft btn-info rounded-full mt-3 "
            to="/all-trips"
          >
            View All Packages
          </Link>
        </div>
      )}
    </section>
  );
};

export default Packages;
```

### `modules/shared/Layout/CommonFooter.jsx`
```javascript
const CommonFooter = () => {
  return (
    <div className="max-container" data-aos="flip-down">
      <footer className="bg-gradient-to-b from-[#0e0e0e] to-[#1a1a1a] text-gray-300 px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h6 className="footer-title text-cyan-400 mb-2">Services</h6>
            <ul className="space-y-1">
              {["Branding", "Design", "Marketing", "Advertisement"].map(
                (item) => (
                  <li
                    key={item}
                    className="transition hover:translate-x-1 hover:text-cyan-400 duration-200 cursor-pointer"
                  >
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>
          <div>
            <h6 className="footer-title text-cyan-400 mb-2">Company</h6>
            <ul className="space-y-1">
              {["About us", "Contact", "Jobs", "Press kit"].map((item) => (
                <li
                  key={item}
                  className="transition hover:translate-x-1 hover:text-cyan-400 duration-200 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h6 className="footer-title text-cyan-400 mb-2">Legal</h6>
            <ul className="space-y-1">
              {["Terms of use", "Privacy policy", "Cookie policy"].map(
                (item) => (
                  <li
                    key={item}
                    className="transition hover:translate-x-1 hover:text-cyan-400 duration-200 cursor-pointer"
                  >
                    {item}
                  </li>
                ),
              )}
            </ul>
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
            <span className="text-cyan-300 font-semibold">DeshGuide</span> β€”
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

### `modules/shared/Layout/index.js`
```javascript
import RootLayout from "./RootLayout";
import CommonFooter from "./CommonFooter";
import Navbar from "./Navbar";

export { RootLayout, CommonFooter, Navbar };
```

### `modules/shared/Layout/Navbar.jsx`
```javascript
import { motion } from "motion/react";
import { Link } from "react-router";
import { topToBottom } from "../../../animation/motion";
import useAuth from "../../../hooks/useAuth";
import Signout from "../../Auth/components/Signout";
import Brand from "../ui/Brand";
import Avatar from "../ui/Avatar";
import navbarLinks from "./navbarLinksConstant";
import DropDown from "../ui/DropDown";

const Navbar = () => {
  const { user } = useAuth();

  return (
    <motion.nav {...topToBottom} className="navbar max-container ">
      {/* Left Section */}
      <div className="navbar-start">
        <div className="dropdown dropdown-right lg:hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle hover:bg-[#1a1a1a]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#00FF9C]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content mt-3 p-2 shadow-xl 
            bg-[#1a1a2e] text-white rounded-xl border border-[#333] min-w-[180px] z-[999]"
          >
            {navbarLinks()}
          </ul>
        </div>
        <Brand />
      </div>

      {/* Center Section */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2 text-white">
          {navbarLinks()}
        </ul>
      </div>

      {/* Right Section */}
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-4">
            <DropDown>
              <Avatar />
            </DropDown>
            <Signout>
              <button className="px-4 py-2 rounded-full bg-[#00FF9C]/50 text-black font-semibold hover:scale-105 hover:shadow-[0_0_12px_#00FF9C] transition-all duration-200">
                Sign Out
              </button>
            </Signout>
          </div>
        ) : (
          <Link
            to="/auth/signin"
            className="px-4 py-2 rounded-lg bg-[#00BFFF] text-black font-semibold hover:scale-105 hover:shadow-[0_0_12px_#00BFFF] transition-all duration-200"
          >
            Sign In
          </Link>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
```

### `modules/shared/Layout/NavbarDrawer.jsx`
```javascript
import { Outlet, useLocation } from "react-router";
import { motion } from "framer-motion";
import SidebarLink from "./SidebarLink";
import { adminLinks, guideLinks, touristLinks } from "./sidebarLinks";
import useUserRole from "../../../hooks/useUserRole";

const NavbarDrawer = () => {
  const { role } = useUserRole(); // example: { role: 'tourist' }

  // const role = "admin";
  // const role = "tourist";
  // const role = "tour-guide";
  const location = useLocation();

  const links =
    role === "admin"
      ? adminLinks
      : role === "tour-guide"
        ? guideLinks
        : touristLinks;

  return (
    <div className="drawer lg:drawer-open bg-gray-950 text-gray-200">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

      {/* Top Navbar */}
      <div className="drawer-content flex flex-col">
        <div className="w-full p-4 border-b border-gray-700 flex justify-between items-center bg-gray-900 shadow-lg shadow-indigo-800/20 sticky top-0 z-40">
          <label
            htmlFor="my-drawer-3"
            className="btn btn-sm bg-indigo-700 text-white lg:hidden border border-indigo-500 hover:bg-indigo-600"
          >
            β° Menu
          </label>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-xl font-bold tracking-wider text-indigo-400 animate-pulse"
          >
            Dashboard
          </motion.h1>
        </div>

        {/* Page content */}
        <div
          className="min-h-[60vh] p-4"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <Outlet />
        </div>
      </div>

      {/* Sidebar */}
      <div className="drawer-side z-50" data-aos="fade-down-right">
        <label htmlFor="my-drawer-3" className="drawer-overlay" />
        <ul className="menu p-4 w-80 min-h-full bg-gray-900 border-r border-indigo-800 space-y-3 overflow-y-auto">
          {/* Home Link */}
          <li data-aos="fade-right" data-aos-delay="100">
            <SidebarLink
              to="/"
              text="Home"
              active={location.pathname === "/"}
            />
          </li>

          {/* Role-based Links */}
          {links.map((link, i) => (
            <li
              key={link.path}
              data-aos="fade-right"
              data-aos-delay={150 + i * 70}
            >
              <SidebarLink
                to={link.path}
                text={link.name}
                active={location.pathname === link.path}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavbarDrawer;
```

### `modules/shared/Layout/navbarLinksConstant.jsx`
```javascript
import { Link } from "react-router";

export const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Dashboard",
    path: "/dashboard",
  },
  {
    name: "All Trips",
    path: "/all-trips",
  },

  {
    name: "Community",
    path: "/community",
  },
  {
    name: "About Us",
    path: "/about-us",
  },
];

const navbarLinks = () => {
  return navItems.map((item) => {
    return (
      <li key={item.path}>
        <Link to={item.path}>{item.name}</Link>
      </li>
    );
  });
};

export default navbarLinks;
```

### `modules/shared/Layout/RootLayout.jsx`
```javascript
import { Outlet } from "react-router";
import Navbar from "./Navbar";
import CommonFooter from "./CommonFooter";
import NavbarDrawer from "./NavbarDrawer";

const RootLayout = () => {
  return (
    <div className="">
      <div
        className="sticky top-0 z-50   
              text-white shadow-xl border border-[#1f1f1f]
              bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]
              backdrop-blur-md"
      >
        <Navbar />
      </div>
      {/* <NavbarDrawer /> */}
      <div className="min-h-[60vh] max-container">
        <Outlet />
      </div>
      <div className="bg-gradient-to-b from-[#0e0e0e] to-[#1a1a1a]">
        <CommonFooter />
      </div>
    </div>
  );
};

export default RootLayout;
```

### `modules/shared/Layout/SidebarLink.jsx`
```javascript
import { Link } from "react-router";
import { motion } from "framer-motion";

const SidebarLink = ({ to, text, active }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{
        scale: 1.04,
        boxShadow: "0 0 15px rgba(99,102,241,0.7)",
        transition: { duration: 0.4 },
      }}
    >
      <Link
        to={to}
        className={`  px-4 py-2 rounded-md font-semibold text-center transition-all duration-300 group ${
          active
            ? "bg-indigo-700 text-white border border-indigo-400 shadow-lg animate-pulse"
            : "bg-gray-800 text-indigo-300 hover:bg-indigo-700 hover:text-white border border-transparent hover:border-indigo-500"
        }`}
      >
        <span className="relative">
          {text}
          {/* Lighting dot effect for active */}
          {active && (
            <span className="absolute -top-2 -right-2 h-2 w-2 bg-indigo-400 rounded-full animate-ping" />
          )}
        </span>
      </Link>
    </motion.div>
  );
};

export default SidebarLink;
```

### `modules/shared/Layout/sidebarLinks.js`
```javascript
// β… Role-based sidebar links
export const adminLinks = [
  { name: "Manage Profile", path: "/dashboard/manage-profile" },
  { name: "Manage Users", path: "/dashboard/admin/manage-users" },
  { name: "Add Package", path: "/dashboard/admin/add-package" },
  { name: "Manage Candidates", path: "/dashboard/admin/candidates" },
  { name: "All Bookings", path: "/dashboard/admin/bookings" },
  { name: "Payments", path: "/dashboard/admin/payments" },
];

export const guideLinks = [
  { name: "Manage Profile", path: "/dashboard/manage-profile" },
  { name: "My Assigned Tours", path: "/dashboard/guide/my-assigned-tours" },
  {
    name: "Add Stories",
    path: "/dashboard/add-stories",
  },
  { name: "Manage Stories", path: "/dashboard/manage-stories" },
];

export const touristLinks = [
  { name: "Manage Profile", path: "/dashboard/manage-profile" },
  { name: "My Bookings", path: "/dashboard/my-bookings" },
  {
    name: "Add Stories",
    path: "/dashboard/add-stories",
  },
  { name: "Manage Stories", path: "/dashboard/manage-stories" },
  { name: "Join as Tour Guide", path: "/dashboard/tourist/join-tour-guide" },
];
```

### `modules/shared/Layout/Spinner.jsx`
```javascript
const Spinner = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <span className="loading loading-bars loading-xs"></span>
      <span className="loading loading-bars loading-sm"></span>
      <span className="loading loading-bars loading-md"></span>
      <span className="loading loading-bars loading-lg"></span>
      <span className="loading loading-bars loading-xl"></span>
    </div>
  );
};

export default Spinner;
```

### `modules/shared/ui/Avatar.jsx`
```javascript
import useAuth from "../../../hooks/useAuth";

const Avatar = () => {
  const { user } = useAuth();

  const img =
    user?.photoURL ||
    "https://img.daisyui.com/images/profile/demo/spiderperson@192.webp";
  return (
    <div className="avatar cursor-pointer" title={user?.displayName}>
      <div className="ring-primary ring-offset-base-100 w-7 rounded-full ring-2 ring-offset-2">
        <img src={img} alt="avatar" className="w-full rounded-full" />{" "}
      </div>
    </div>
  );
};

export default Avatar;
```

### `modules/shared/ui/Brand.jsx`
```javascript
import { motion } from "motion/react";
import { useNavigate } from "react-router";

const Brand = () => {
  const navigate = useNavigate();

  return (
    <div>
      <motion.button
        onClick={() => navigate("/")}
        className="text-xl ml-2"
        animate={{
          color: ["#ff5733", "#33ff33", "#8a33ff", "#ce9733"],
          transition: { duration: 9, repeat: Infinity },
        }}
      >
        DeshGuide
      </motion.button>
    </div>
  );
};

export default Brand;
```

### `modules/shared/ui/Button.jsx`
```javascript
import clsx from "clsx";

export const Button = ({ children, className, ...props }) => {
  return (
    <button className={clsx("btn", className)} {...props}>
      {children}
    </button>
  );
};
```

### `modules/shared/ui/DropDown.jsx`
```javascript
import { Link } from "react-router";
// import Avatar from "./Avatar";

const links = [
  {
    path: "assignments/create",
    name: "Create Assignment",
  },
  {
    path: "assignment/my-submit",
    name: "My Submitted Assignments",
  },
];

const DropDown = ({ children }) => {
  return (
    <div className="dropdown  w-fit dropdown-end ">
      <div tabIndex={0} role="button" className="bt m-1">
        {children}
        {/* <Avatar /> */}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-1 min-w-[225px] py-4 px-[1px] shadow-sm "
      >
        {links.map((link) => (
          <li key={link.path}>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDown;
```

### `modules/shared/ui/index.js`
```javascript
import { Button } from "./Button";
import { Input } from "./Input";

export { Button, Input };
```

### `modules/shared/ui/Input.jsx`
```javascript
import clsx from "clsx";

export const Input = ({
  type = "text",
  placeholder = "Type your Name",
  variant = "info",
  className = "",
  label,
  ...props
}) => {
  return (
    <>
      {label && <label className="label text-base">{label}</label>}
      <input
        type={type}
        className={clsx("input ", `input-${variant}`, className)}
        placeholder={placeholder}
        label={label}
        {...props}
      />
    </>
  );
};
```

### `modules/shared/ui/swalToast.js`
```javascript
import Swal from "sweetalert2";

export const swalSuccessToast = ({
  title = "Success!",
  text = "Successfully done!",
  toast = true,
  timer = 2000,
  background = "#0f172a",
  color = "#fff",
  showConfirmButton = false,
  icon = "success",
} = {}) => {
  Swal.fire({
    icon,
    title,
    text,
    toast,
    timer,
    background,
    color,
    showConfirmButton,
  });
};

export const swalErrorToast = ({
  title = "Oops!",
  text = "Something went wrong.",
  toast = true,
  timer = 2000,
  background = "#1e293b", // Slightly different dark shade
  color = "#fff",
  showConfirmButton = true,
  icon = "error",
} = {}) => {
  Swal.fire({
    icon,
    title,
    text,
    toast,
    timer,
    background,
    color,
    showConfirmButton,
  });
};
```

### `pages/AboutUs/AboutUs.jsx`
```javascript
import { motion } from "framer-motion";
import AboutIntro from "./components/AboutIntro";
import DesignPhilosophy from "./components/DesignPhilosophy";
import AboutDeveloper from "./components/AboutDeveloper";
import ContactCards from "./components/ContactCards";
import LiveProjects from "./components/LiveProjects";
import FooterNote from "./components/FooterNote";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-6 md:px-20 py-10">
      <AboutIntro />
      <DesignPhilosophy />
      <AboutDeveloper />
      <ContactCards />
      <LiveProjects />
      <FooterNote />
    </div>
  );
};

export default AboutUs;
```

### `pages/AboutUs/components/AboutDeveloper.jsx`
```javascript
const AboutDeveloper = () => (
  <div data-aos="fade-up" className="mt-16 space-y-8 max-w-5xl mx-auto">
    <div className="flex flex-col items-center">
      <img
        src="/assets/Banner.jpg"
        alt="mdshahjalal5"
        className="rounded-2xl shadow-xl border-4 border-blue-500 w-64 mb-4"
      />
      <h2 className="text-3xl font-bold text-white">
        π‘‹ Assalamu Alaikum, I'm Md. Shahjalal
      </h2>
      <p className="text-lg text-gray-400 max-w-3xl text-center mt-2">
        Experienced <span className="text-lime-400 font-medium">MERN Stack Developer</span> focused on building scalable,
        maintainable, and high-performance web apps using clean architecture and modern best practices.
      </p>
      <div className="mt-4 text-sm text-gray-400">
        Hyprland β€Ά Neovim β€Ά Zsh β€Ά Tmux β€Ά Terminal-first Linux workflow
      </div>
    </div>
  </div>
);

export default AboutDeveloper;
```

### `pages/AboutUs/components/AboutIntro.jsx`
```javascript
import { motion } from "framer-motion";

const AboutIntro = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    className="max-w-5xl mx-auto text-center"
  >
    <h1 className="text-4xl md:text-5xl font-bold glow-border pb-4">
      About DeshGuide & The Developer
    </h1>
    <p className="text-lg text-gray-300">
      Night-themed. Hacker-vibed. Built for clarity, speed, and immersive UX.
    </p>
  </motion.div>
);

export default AboutIntro;
```

### `pages/AboutUs/components/ContactCards.jsx`
```javascript
import { contactInfo } from "../constants/about.constants";

const ContactCards = () => (
  <div
    data-aos="zoom-in"
    className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm"
  >
    {contactInfo.map(({ label, value, link }) => (
      <div
        key={label}
        className="bg-[#1e293b] p-6 rounded-xl glow-border hover:scale-105 transition-all duration-300"
      >
        <h3 className="text-xl font-semibold">{label}</h3>
        {link ? (
          <a
            href={link}
            className="text-sky-400 hover:underline block mt-2 break-words"
            target="_blank"
            rel="noreferrer"
          >
            {value}
          </a>
        ) : (
          <p className="text-gray-300 mt-2 break-words">{value}</p>
        )}
      </div>
    ))}
  </div>
);

export default ContactCards;
```

### `pages/AboutUs/components/DesignPhilosophy.jsx`
```javascript
const DesignPhilosophy = () => (
  <div data-aos="fade-up" className="mt-16 space-y-6 max-w-5xl mx-auto">
    <h2 className="text-3xl font-semibold pulse-glow">π¨ Design Philosophy</h2>
    <p className="text-gray-400">
      DeshGuide follows a <span className="text-blue-400">glow-pulse infused</span>,
      terminal-inspired aesthetic powered by
      <span className="text-purple-400"> Tailwind CSS + DaisyUI</span>,
      <span className="text-green-400"> Framer Motion</span>, and
      <span className="text-pink-400"> AOS animations</span>.
    </p>
    <p className="text-gray-400">
      Inspired by modern terminal UIs and built for
      <span className="text-yellow-400"> CLI-first developers</span>,
      DeshGuide delivers a <span className="text-cyan-400">futuristic</span>,
      responsive, and expressive UI β€” ensuring performance and aesthetics work hand in hand.
    </p>
    <p className="text-gray-400">
      From blurred glowing cards to smooth hover feedbacks β€” nothing feels static or dull.
    </p>
  </div>
);

export default DesignPhilosophy;
```

### `pages/AboutUs/components/FooterNote.jsx`
```javascript
const FooterNote = () => (
  <div className="mt-20 text-center text-gray-500 text-sm">
    <p>
      &copy; {new Date().getFullYear()} DeshGuide by Md. Shahjalal β€” Built
      with π’» MERN, β™οΈ Neovim, β¨ Framer Motion
    </p>
  </div>
);

export default FooterNote;
```

### `pages/AboutUs/components/LiveProjects.jsx`
```javascript
import { liveProjects } from "../constants/about.constants";

const LiveProjects = () => (
  <div data-aos="fade-up" className="mt-24 max-w-6xl mx-auto">
    <h2 className="text-3xl font-semibold text-center mb-12 pulse-glow">
      π€ Live Projects
    </h2>
    <div className="grid gap-8 md:grid-cols-2">
      {liveProjects.map(({ title, desc, link, repo }) => (
        <div
          key={title}
          className="bg-[#1e293b] p-6 rounded-2xl glow-border hover:scale-[1.02] transition-all duration-300 shadow-lg"
        >
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-400 mb-4">{desc}</p>
          <div className="flex gap-4 text-sm">
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="text-sky-400 hover:underline"
            >
              π”— Live
            </a>
            <a
              href={repo}
              target="_blank"
              rel="noreferrer"
              className="text-purple-400 hover:underline"
            >
              π›  Code
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default LiveProjects;
```

### `pages/AboutUs/constants/about.constants.js`
```javascript
export const contactInfo = [
  { label: "π“§ Email", value: "muhommodshahjalal@gmail.com" },
  { label: "π“± Phone", value: "01540325659" },
  {
    label: "π’Ό LinkedIn",
    value: "linkedin.com/in/shahjalal-mern/",
    link: "https://www.linkedin.com/in/shahjalal-mern/",
  },
  {
    label: "π™ GitHub",
    value: "github.com/shahjalal-labs",
    link: "https://github.com/shahjalal-labs",
  },
];

export const liveProjects = [
  {
    title: "π shahjalal-portfolio-v2",
    desc: "Modern animated portfolio showcasing skills, workflow, and aesthetics.",
    link: "http://shahjalal-mern.surge.sh",
    repo: "https://github.com/shahjalal-labs/shahjalal-portfolio-v2",
  },
  {
    title: "π² FlavorBook",
    desc: "Recipe sharing, chef marketplace, and food blog β€” all in one.",
    link: "https://flavor-book.surge.sh",
    repo: "https://github.com/shahjalal-labs/flavor-book-client",
  },
  {
    title: "π“ EduVerse",
    desc: "Group assignment & peer evaluation platform for students and teachers.",
    link: "https://edu-verse.surge.sh",
    repo: "https://github.com/shahjalal-labs/eduverse-client",
  },
  {
    title: "π“¦ WorkElevate",
    desc: "Smart job portal for BD β€” fast, sleek, and employer-focused.",
    link: "https://workelevate.surge.sh",
    repo: "https://github.com/shahjalal-labs/WorkElebate/tree/main/client-WorkElebate",
  },
  {
    title: "π§­ Gontobbo (Ongoing)",
    desc: "Automated parcel infrastructure with real-time tracking.",
    link: "https://workelevate.surge.sh",
    repo: "https://github.com/yourname/codeverse",
  },
];
```

### `pages/AboutUs/index.js`
```javascript
export { default } from "./AboutUs";
```

### `pages/Community/CommunityPage.jsx`
```javascript
const CommunityPage = () => {
  return (
    <div>
      <h1>Community Page</h1>
    </div>
  );
};

export default CommunityPage;
```

### `pages/faq/faq.constant.js`
```javascript
export const faqs = [
  {
    question: "What is DeshGuide?",
    answer:
      "DeshGuide is a complete tour management platform focused on exploring the beauty of Bangladesh. It helps you discover packages, book trips, find certified local tour guides, and share your travel stories.",
  },
  {
    question: "How do I book a tour package?",
    answer:
      "To book a package, visit the Packages section, view details, and submit a booking request by selecting your preferred date and tour guide.",
  },
  {
    question: "Can I choose my own tour guide?",
    answer:
      "Yes! You can select from available certified tour guides using a dropdown or view mode in the booking form. Each guide has a detailed profile page.",
  },
  {
    question: "Is payment secure on DeshGuide?",
    answer:
      "Absolutely. We use Stripe for secure and encrypted transactions, ensuring your data is safe at all times.",
  },
  {
    question: "Can I become a tour guide?",
    answer:
      "Yes. Apply through the 'Become a Guide' section. Once verified by admins, your profile becomes available for tourists to select.",
  },
  {
    question: "How do I share my travel story?",
    answer:
      "After completing a trip, go to the 'Stories' section and share your experiences. Upload photos, write memories, and inspire others to explore!",
  },
];
```

### `pages/faq/FAQ.jsx`
```javascript
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "./faq.constant";
import TypewriterText from "../../utils/TypeWriterEffect"; // adjust path as needed

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-5xl mx-auto px-4 py-20 text-white space-y-12 animate-fade-in">
      <h2 className="text-2xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-sky-400 via-indigo-400 to-violet-500 bg-clip-text text-transparent drop-shadow-lg">
        <TypewriterText
          words={[
            "π’΅ Frequently Asked Questions",
            "π¤” What Tourists Often Ask",
            "π“ Your Curiosity, Answered",
          ]}
          loop
          delay={1500}
          speed={80}
        />
      </h2>

      <div className="space-y-5">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="border border-purple-700 bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-lg overflow-hidden shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
            data-aos="fade-down-left"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full flex justify-between items-center px-6 py-4 text-left hover:bg-[#1f2937] transition-colors duration-300 group"
            >
              <span className="text-lg md:text-xl font-semibold text-white group-hover:text-pink-400 transition-colors">
                {faq.question}
              </span>
              <motion.span
                animate={{ rotate: openIndex === idx ? 180 : 0 }}
                className="text-pink-400 text-2xl transition-transform"
              >
                β–Ύ
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === idx && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="px-6 pb-5 text-sm md:text-base text-gray-300 leading-relaxed"
                >
                  <p className="border-l-4 border-purple-500 pl-4">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
```

### `router/ErrorPage.jsx`
```javascript
import { useNavigate, useRouteError } from "react-router";
import { notfound3 } from "../assets/images";
import { CommonFooter, Navbar } from "../modules/shared/Layout";
import { motion } from "framer-motion";

const Errorpage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <main className="flex justify-center items-center min-h-[90vh] py-5 px-4 bg-[#0f172a] text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl w-full text-center bg-gradient-to-br from-[#1e293b] to-[#0f172a] border border-purple-600 rounded-3xl shadow-[0_0_20px_#7c3aed66]   p-8  space-y-6"
        >
          <h1 className="text-2xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-500 to-sky-400 drop-shadow-lg">
            π¨ Oops! Something Went Wrong
          </h1>

          <p className="text-lg text-gray-300">
            {error?.statusText || error?.message || "Unknown error occurred."}
          </p>

          <motion.img
            src={notfound3}
            alt="404 Error"
            className="w-full max-w-xs sm:max-w-sm mx-auto rounded-xl drop-shadow-lg hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
          />
          <div className="flex flex-col sm:flex-row gap-4 pt-6  max-w-[490px] mx-auto">
            <button
              onClick={() => navigate("/")}
              className="flex-1 btn btn-accent rounded-full bg-gradient-to-r from-sky-500 to-purple-600 text-white font-semibold shadow-lg hover:from-sky-400 hover:to-purple-500 transition-all duration-300"
            >
              π  Go Home
            </button>
            <button
              onClick={() => navigate(-1)}
              className="flex-1 btn rounded-full bg-gradient-to-r from-gray-600 to-gray-800 text-white font-semibold shadow-inner hover:from-gray-500 hover:to-gray-700 transition-all duration-300"
            >
              π”™ Go Back
            </button>
          </div>

          <p className="pt-4 text-sm text-gray-400">
            This page doesnβ€™t exist or the server is having a moment.
            <br />
            If the problem persists, please contact support.
          </p>
        </motion.div>
      </main>

      <CommonFooter />
    </>
  );
};

export default Errorpage;
```

### `router/ProtectedRoute.jsx`
```javascript
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
```

### `router/router.jsx`
```javascript
import { createBrowserRouter } from "react-router";
import { RootLayout } from "../modules/shared/Layout";
// import ProtectedRoute from "./ProtectedRoute";
import AuthRoute from "../modules/Auth/AuthRoute";
import Errorpage from "./ErrorPage";
import PackageDetails from "../modules/Packages/PackageDetails/PackageDetails";
import Home from "../modules/landing/home/Home";
import GuideProfile from "../modules/Dashbaord/TourGuides/GuideProfile/GuideProfile";
import TourGuides from "../modules/Dashbaord/TourGuides/TourGuides";
import CommunityPage from "../pages/Community/CommunityPage";
import dashbourdRoutes from "../modules/Dashbaord/dashbourdRoutes";
import ProtectedRoute from "./ProtectedRoute";
import Packages from "../modules/Packages/Packages/Packages";
import Stories from "../modules/landing/home/Overview/Stories/Stories";
import AboutUs from "../pages/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
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
        element: <GuideProfile />,
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
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "community",
        element: <CommunityPage />,
      },
      {
        path: "all-stories",
        element: <Stories apiEndpoint="stories?limit=0" />,
      },
    ],
  },

  dashbourdRoutes,
  AuthRoute,
]);

export default router;
```

### `utils/axiosInstance.js`
```javascript
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://deshguide-server.vercel.app/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
  // withCredentials: true,
});

export default axiosInstance;
```

### `utils/customAlert.js`
```javascript
import Swal from "sweetalert2";

const customAlert = ({
  title = "Success!",
  text = "You have successfully Submitted!",
  icon = "success",
  timer = 1500,
  showConfirmButton = false,
}) => {
  Swal.fire({
    title,
    text,
    icon,
    showConfirmButton,
    timer,
  });
};

export default customAlert;
```

### `utils/deleteData.js`
```javascript
import axiosInstance from "./axiosInstance";

export const deleteData = async (endpoint, body = {}) => {
  const { data } = await axiosInstance.delete(endpoint, {
    data: body,
  });
  return data;
};
```

### `utils/ErrorMessage.jsx`
```javascript
import { Link } from "react-router";

const ErrorMessage = ({ error }) => {
  return (
    <div className=" flex  items-center justify-center bg-gray-50 p-3  min-h-[60vh] my-10 rounded-xl">
      <div className="max-w-[500px] sm:min-w-[500px] pt-16 pb-4 space-y-3 bg-gray-100 rounded-xl p-6 shadow-lg">
        <h2> Something went wrong!!!</h2>
        <p className="text-red-500 text-2xl">{error?.message}</p>
        <p>{error?.response?.statusText}</p>
        <p>Please try again later.</p>
        <Link to="/" className="btn btn-soft btn-primary btn-block mt-8">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorMessage;
```

### `utils/fetchData.js`
```javascript
import axiosInstance from "./axiosInstance";

export const fetchData = async (endpoint, query = {}) => {
  const { data } = await axiosInstance.get(endpoint, {
    params: query,
  });
  return data;
};
```

### `utils/PageIntro.jsx`
```javascript
import { motion } from "motion/react";
import { bottomToTop } from "../animation/motion";
import TypewriterText from "./TypeWriterEffect";

const PageIntro = ({
  h1 = "Welcome to tha page ____",
  p = "This  page is for you to see the details of the job you applied for",
}) => {
  return (
    <div className="mt-10">
      <motion.div className="text-center mb-10" {...bottomToTop}>
        <h1 className="text-2xl md:text-3xl font-bold text-purple-600 mb-4">
          <TypewriterText words={[h1]} />
        </h1>
        <p className="text-gray-400 mx-auto lg:w-1/2 w-3/4 text-center">{p}</p>
      </motion.div>
    </div>
  );
};

export default PageIntro;
```

### `utils/postData.js`
```javascript
import axiosInstance from "./axiosInstance";

const postData = async ({ endpoint, body = {} }) => {
  const { data } = await axiosInstance.post(endpoint, body);
  return data;
};

export default postData;
```

### `utils/TypeWriterEffect.jsx`
```javascript
import { Typewriter } from "react-simple-typewriter";

export default function TypewriterText({
  words,
  loop = true,
  cursor = true,
  delay = 1000,
  speed = 100,
}) {
  return (
    <span style={{ whiteSpace: "pre" }}>
      <Typewriter
        words={words}
        loop={loop}
        cursor={cursor}
        cursorStyle="βοΈ "
        typeSpeed={speed}
        deleteSpeed={50}
        delaySpeed={delay}
      />
    </span>
  );
}
```

### `utils/updateData.js`
```javascript
import axiosInstance from "./axiosInstance";

const updateData = async ({ endpoint, body = {} }) => {
  const { data } = await axiosInstance.patch(endpoint, body);
  return data;
};

export default updateData;
```
