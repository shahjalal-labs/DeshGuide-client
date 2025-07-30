# 📁 Project Structure

```bash
.
├── 03_37_অপরাহ্ণ_28_07_25.mp4
├── bun.lock
├── eslint.config.js
├── generate_aboutus_refactor.sh
├── index.html
├── package.json
├── public
│   ├── CNAME
│   ├── google4b54b9926d2c85b8.html
│   ├── refractorPublicPrompt.md
│   ├── robots.txt
│   └── sitemap.xml
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
│   │           ├── Desktop
│   │           │   ├── AboutUs
│   │           │   │   └── AboutUs2.png
│   │           │   ├── Home
│   │           │   │   └── HomePage1.png
│   │           │   └── ProjectInfo
│   │           │       └── ProjectInfo.png
│   │           ├── Laptop
│   │           └── Mobile
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
│   │   ├── readmeGenerateFull.md
│   │   ├── readmeGenerate.md
│   │   ├── READMEPREV.md
│   │   ├── Requirement.md
│   │   └── taskRemained.md
│   ├── firebase
│   │   └── firebase.init.js
│   ├── hooks
│   │   ├── useAdminStats.jsx
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
│   │   │   │   ├── AdminHome.jsx
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
│   │   │   │   │   ├── Banner.jsx
│   │   │   │   │   └── Slider
│   │   │   │   │       └── Slider.jsx
│   │   │   │   ├── CallToActionFull
│   │   │   │   │   └── CallToActionFull.jsx
│   │   │   │   ├── ExploreTabs
│   │   │   │   │   └── ExploreTabs.jsx
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
│   │       │   ├── Footer
│   │       │   │   ├── components
│   │       │   │   │   ├── FooterColumns.jsx
│   │       │   │   │   ├── FooterCopyright.jsx
│   │       │   │   │   └── SocialIcons.jsx
│   │       │   │   ├── constants
│   │       │   │   │   ├── footerLinks.js
│   │       │   │   │   └── socialIcons.js
│   │       │   │   └── Footer.jsx
│   │       │   ├── index.js
│   │       │   ├── NavbarDrawer.jsx
│   │       │   ├── Navbar.jsx
│   │       │   ├── navbarLinksConstant.jsx
│   │       │   ├── refactor_footer.sh
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
│   │           ├── InversionToggle.jsx
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
│   │   ├── Forbidden
│   │   │   └── Forbidden.jsx
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
├── vite.config.js
└── vite.logger.plugin.js

88 directories, 190 files

```
