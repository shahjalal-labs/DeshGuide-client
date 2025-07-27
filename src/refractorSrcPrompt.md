You are a **senior full-stack developer**.

## 📌 Task

You are given a real-world code module located at:

```
/run/media/sj/developer/web/L1B11/12mi/ass/DeshGuide/DeshGuide-client/src
```

Refactor the entire codebase **without modifying any UI or changing behavior**. Instead, improve it using:

- ✅ Clear separation of concerns
- ✅ Consistent, semantic naming conventions
- ✅ Modular architecture (hooks, services, utils, components)
- ✅ Scalable file/folder structure
- ✅ Industry-standard project layout and architecture
- ✅ Readable, testable, production-grade code
- ✅ 100% behavior and API compatibility

👉 Output the refactored code to a new folder: `src_refactored`

Also return a `.sh` script that will:
- Create that folder
- Write all refactored files
- Run `git add` and `git commit` with message: `refactor: added improved src version`

---

## 🌲 Full Project Structure (cwd)

```bash
/run/media/sj/developer/web/L1B11/12mi/ass/DeshGuide/DeshGuide-client
├── bun.lock
├── eslint.config.js
├── generate_aboutus_refactor.sh
├── index.html
├── package.json
├── public
│   └── CNAME
├── README.md
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
│   │   ├── note.md
│   │   └── prompt.md
│   ├── firebase
│   │   └── firebase.init.js
│   ├── hooks
│   │   ├── useAuth.jsx
│   │   ├── useAxiosSecure.jsx
│   │   ├── useFetchData.js
│   │   ├── useHelmet.jsx
│   │   ├── usePostData.jsx
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
│   │   │   │   └── ManageStories.jsx
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
│   │   │   │   │       ├── Stories.jsx
│   │   │   │   │       ├── StoryCard.jsx
│   │   │   │   │       └── StoryCard.jsx~
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
│   │   └── faq
│   │       ├── faq.constant.js
│   │       └── FAQ.jsx
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

61 directories, 135 files
```

## 📁 Target Module Tree (src)

```bash
/run/media/sj/developer/web/L1B11/12mi/ass/DeshGuide/DeshGuide-client/src
├── animation
│   ├── auth-lottie.json
│   ├── index.js
│   ├── LottieAnimation.jsx
│   └── motion.js
├── App.jsx
├── assets
│   └── images
│       ├── index.js
│       └── notfound3.jpg
├── console
│   ├── error.json
│   └── log.json
├── contexts
│   └── AuthContext
│       ├── AuthContext.jsx
│       └── AuthProvider.jsx
├── docs
│   ├── note.md
│   └── prompt.md
├── firebase
│   └── firebase.init.js
├── hooks
│   ├── useAuth.jsx
│   ├── useAxiosSecure.jsx
│   ├── useFetchData.js
│   ├── useHelmet.jsx
│   ├── usePostData.jsx
│   ├── useSecureQuery.jsx
│   ├── useSecureUpdate.js
│   └── useUserRole.jsx
├── index.css
├── loggerClient.js
├── main.jsx
├── modules
│   ├── Auth
│   │   ├── AuthLayout.jsx
│   │   ├── AuthRoute.jsx
│   │   ├── components
│   │   │   ├── AuthSidebar.jsx
│   │   │   ├── constant.js
│   │   │   ├── SideBarCard.jsx
│   │   │   ├── SigninForm.jsx
│   │   │   ├── Signout.jsx
│   │   │   ├── SignUpForm.jsx
│   │   │   └── SocialLogin.jsx
│   │   ├── index.js
│   │   └── pages
│   │       ├── ForgotPass.jsx
│   │       ├── Signin.jsx
│   │       └── SignUp.jsx
│   ├── Dashbaord
│   │   ├── AddStories
│   │   │   └── AddStories.jsx
│   │   ├── Admin
│   │   │   ├── AddPackage
│   │   │   │   └── AddPackage.jsx
│   │   │   ├── Bookings
│   │   │   │   ├── AllBookings.jsx
│   │   │   │   └── BookingDetails.jsx
│   │   │   ├── ManageCandidate
│   │   │   │   ├── CandidateCard.jsx
│   │   │   │   └── ManageCandidate.jsx
│   │   │   ├── ManageUsers
│   │   │   │   ├── ManageUsers.jsx
│   │   │   │   └── UsersRow.jsx
│   │   │   └── Payments
│   │   │       ├── AllPayments.jsx
│   │   │       └── PaymentCard.jsx
│   │   ├── DashboardLayout.jsx
│   │   ├── dashbourdRoutes.jsx
│   │   ├── ManageProfile
│   │   │   └── ManageProfile.jsx
│   │   ├── ManageStories
│   │   │   ├── components
│   │   │   │   ├── EditStoryModal.jsx
│   │   │   │   └── StoryCard.jsx
│   │   │   └── ManageStories.jsx
│   │   ├── TourGuides
│   │   │   ├── AssignedTour
│   │   │   │   ├── AssignedTourCard.jsx
│   │   │   │   ├── AssignedTour.jsx
│   │   │   │   └── refractorAssignedTourPrompt.md
│   │   │   ├── GuideProfile
│   │   │   │   └── GuideProfile.jsx
│   │   │   └── TourGuides.jsx
│   │   └── Tourist
│   │       ├── Bookings
│   │       │   ├── BookingCard.jsx
│   │       │   └── MyBookings.jsx
│   │       ├── JoinTourGuide
│   │       │   └── JoinTourGuide.jsx
│   │       └── PaymentBooking
│   │           ├── PaymentBooking.jsx
│   │           ├── PaymentForm.jsx
│   │           └── refractorPaymentBookingPrompt.md
│   ├── landing
│   │   ├── home
│   │   │   ├── Bannnerr
│   │   │   │   └── Banner.jsx
│   │   │   ├── CallToActionFull
│   │   │   │   └── CallToActionFull.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── HowItWorks
│   │   │   │   └── HowItWorks.jsx
│   │   │   ├── LiveStats
│   │   │   │   └── LiveStats.jsx
│   │   │   ├── NewsletterSignup
│   │   │   │   └── NewsletterSignup.jsx
│   │   │   ├── Overview
│   │   │   │   ├── Overview.jsx
│   │   │   │   └── Stories
│   │   │   │       ├── Stories.jsx
│   │   │   │       ├── StoryCard.jsx
│   │   │   │       └── StoryCard.jsx~
│   │   │   ├── PartnerWithUs
│   │   │   │   └── PartnerWithUs.jsx
│   │   │   ├── RandomGuides
│   │   │   │   └── RandomGuides.jsx
│   │   │   ├── Testimonials
│   │   │   │   ├── TestimonialCard.jsx
│   │   │   │   └── Testimonials.jsx
│   │   │   ├── TourismAndGuides.jsx
│   │   │   ├── TrendingDestinations
│   │   │   │   └── TrendingDestinations.jsx
│   │   │   └── WhyChooseUs
│   │   │       └── WhyChooseUs.jsx
│   │   └── index.js
│   ├── Packages
│   │   ├── PackageDetails
│   │   │   └── PackageDetails.jsx
│   │   └── Packages
│   │       ├── PackageCard.jsx
│   │       └── Packages.jsx
│   └── shared
│       ├── Layout
│       │   ├── CommonFooter.jsx
│       │   ├── index.js
│       │   ├── NavbarDrawer.jsx
│       │   ├── Navbar.jsx
│       │   ├── navbarLinksConstant.jsx
│       │   ├── RootLayout.jsx
│       │   ├── SidebarLink.jsx
│       │   ├── sidebarLinks.js
│       │   └── Spinner.jsx
│       └── ui
│           ├── Avatar.jsx
│           ├── Brand.jsx
│           ├── Button.jsx
│           ├── DropDown.jsx
│           ├── index.js
│           ├── Input.jsx
│           └── swalToast.js
├── pages
│   ├── AboutUs
│   │   ├── AboutUs.jsx
│   │   ├── components
│   │   │   ├── AboutDeveloper.jsx
│   │   │   ├── AboutIntro.jsx
│   │   │   ├── ContactCards.jsx
│   │   │   ├── DesignPhilosophy.jsx
│   │   │   ├── FooterNote.jsx
│   │   │   └── LiveProjects.jsx
│   │   ├── constants
│   │   │   └── about.constants.js
│   │   └── index.js
│   ├── Community
│   │   ├── CommunityPage.jsx
│   │   └── components
│   └── faq
│       ├── faq.constant.js
│       └── FAQ.jsx
├── router
│   ├── ErrorPage.jsx
│   ├── ProtectedRoute.jsx
│   └── router.jsx
└── utils
    ├── axiosInstance.js
    ├── customAlert.js
    ├── deleteData.js
    ├── ErrorMessage.jsx
    ├── fetchData.js
    ├── PageIntro.jsx
    ├── postData.js
    ├── TypeWriterEffect.jsx
    └── updateData.js

61 directories, 126 files
```

## 📄 Module Files & Contents

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
����
JFIF





��
C
��
C��
``"
��










	
��
�


}
!1AQa"q2���#B��R��$3br�	
%&'()*456789:CDEFGHIJSTUVWXYZcdefghijstuvwxyz���������������������������������������������������������������������������







	
��
�

w
!1AQaq"2�B����	#3R�br�
$4�%�&'()*56789:CDEFGHIJSTUVWXYZcdefghijstuvwxyz��������������������������������������������������������������������������


?
�안�x�c�?�<s��y�'�\����
�H9�w��t�
d������&���K�
�_v�(�c�V����b�G<�pqM
sԟNOOÿ�����v�������V����ރ?�G�8Ϧx��P���uo��Л�tZ����4�
�A
���z~g�zw��s�9��
��+E
�����F�G��W4�i�O�
(����趷^����ߒ^� ��)6��/����(��5����z=�~v�
I=I?Ri(���^^��o�AI����񥢓R��]V�.��]��I���w�
(���J���
.�
����QEh�z��E���
K���
}�ݾ��?�?�zu-K��i��
֬j���������(��z_����KoT��_r�
.��(�����m��_����QE+�֭���V�����O�QN�MV�֛Y�����z�~��QUv쮞���Z��o���(�I���O�0���
#�QZ>d�k��
��]�|���+!�em-�E��5�A��ԏ��
�*���I铞s�����Z*�Ҷ��>�}�l���.�m+��+�_�QE!wkY}�����,QE�����?��KM�� ��)�����i��
��߈}��P<����g���ԴRW�����[����ܕ��ޟցEV�-�n�����������C�u�1I�9=������������
�g�P�Gd����������G��
?�QJ�M���e�省[/�o�(�
?���^�R�����l	�I����:QV���{om����˷��%������z(�&ﾝ,�}:~~cM'{'�������(��&���W_��5�[�|��c�O��I�z�d�
3KE+�⿒�{//!r}O�i(��m�[�o����ds��R)��$�N�$�ǥ:�W����Es-=�t����QE�oK迯��	7��}�}�֓����
�)h�_2�U~�o�`��*��Z�����������m��QC�����K����
_��(��-�v���:߲�=I��2GC�(�۾�ӽ��`�z�~��J(�w{���
I=I?ZJ(��_ר'mB�(�Z5���E�tף�
��(��ӧm4^���zؿO�~{�QR���
VAES�N�-~�
1�rh����i���~�yZ�]���
@��)�֖�����O��(<�?^�QO��Um:�6���p^������?0�
?��EU;����������:��e�]�ܻg��#�QEL���~N�_��
�����a1����y�ih���w_��y[�KVAEUr��5u{m����
��Z��_�'��QM���--�����AG����
[򢊂�Ik��O�
(��RKt���t���
(��R�^�%�����D#=�O��
�~��py$�r��
\�E;�[���~�W_�����O˶�I�h��5�׶��}�
(����׸Ӷ�_r�?N�AEU97o����}A;=��~��QK^�y�m�HW����>���(��w��߅����
<�'�ǿ����Oˀ)h�&�{�t���wo�iۢ~�>�>����
���
�zZ(�w݇6�/[/��
�QE'���~�i=R~L(�8��ڊ)ݻkv��?�J��/�����.���������
J�|���/��G�鞸�PJ���q����?�kTޗ���|���N�BiY����(�폯eӃߟJu0FH�Fa�q�Ïǧw�O�_���#ImO�QH���(��EU'g��v��^{�����+FՖ����u~�ۻӸQX�QE
QEI�������QE�g�
�����p
(���k�m��}Z��m��(�����]K��QEg)j�����;z�~��(��ݵ�v��ׯO��QEO[o��/u�^Z�>�QEg+�{��	�~^]�(���
(���������}�ET�QE���
�y�~�QE���
QE�(��w��߲��.�X
(��Q@QF���
QE��ݗ�(���&����
�߻
��*[��_��p
(��Q@QUwm���n�=?[ET�
_��t
��(
��(
��(
��(
��(
��(
��(
��(
��(
��(
��(
��(
��(
��(
��(
��(
��(
��(
��(
��)����2��(��@QE5��@QE[���oM_un���w�
��*�����QE 
(����������(�EPEQ�~_�?�EPEPEPEPESo��/7���ER
��(
��(
��
��
�`x'��*J�N��8���ޟ�
�h������̙;-4�~������Ls��
��
>jZ�G�:v���\���j�g�]6_E��
@��*QE;�
_r�?��(�n��u�Z���m
��*��I+�;y����QE@QWm����
�W��i`(����k���}�dQH�(�rzw_�����p
(��ޞ^�^~_��X
(���Z���|�QOUf�ѭow�����lQT���_�o��m��QEL��>K����QREPESV��m��
����(�_ף�PQH�(��(��(��(��(��(��(���U�/�tQM��W����
��ET�QEӳ���EU�$�����m}m�QP���?/��
QH�(�k5������|�(����~������QE�(��
(��z_/;w��@QE�(��
(��
(��
(��
(��
(��
(��
(��m[�^[k��
�@(��_נQO����t��QH�(��(�ߎ�QE��ES]��ER
��(
��(
��)�k�����E�EP�|�%��_��(�+���/��z~
��)�/O[[�����(���������(��@QE
QE
QE7�}���
V�@QE�(��
(��i�k~
��r28�t����x�~��zh���_�}ݾ!=��e���ЈuQ�?���_Ƨ�$q��^N�
����J��6�N#Z���QY�wn��[k�O�\�(�����̀QEKK;�������NߒZEP�zy���o=U�QEOU�O����QEh���$�uk]����ER�W�Wo���O�]�
��*^���t^n�ע�(�
��(
��*�KwZ|�}��]���
(��[����W����ـQE:�|��y����(��
�����`
(������}�
��)
QE﷯����
��`(���/���ݦ����W�
��)Y�|���u��o��(��Z������_pQEHQ@Q@QF�QEU�g���<����
(���
/�y�
_��(���.ݼ�����ET�QE
QE
QEҿ��w
��(i�y�ӷ��QEӷ_�Ow���zERn�QE 
(����y�
_�QE 
(��
(��
(��
(��
(���N���u�QH�(��(��^���EV����]��:sY[����(��(��
(��
(��
(���+5��-�������)7w��nER
��)�
_����ER
��)�_ 
(��Wv{uO�
��W�z�(�����~Z~
QE4������(��o�K~��QE�(��
(���+_��>~��
��*@(��?��_���(��(�Ii���������@QE=�����
?���21��)h# �ZmY'}V��N������2O#~�����������A��	�O^?
������~il����aEVR~�~�}ݺ|�QEHQW���
�>/���EP�}���
���
{n�Ymp
(���(����>�}�
�,���)_��
��*��zm�N��~]mu�QE�w���
����
��
(���I����
(��Z��|����~��QC����o��w�|���*���>��
m�����݁ER���[���wk_���
(���^i[����(�
��(_���ES��V�����lEU9'n��=<���nET�ߟ�������
(��Q@QM+�
K���jES���]���_��QE'�yu�^v�|� (��@QE4��
��)��[��r�{~
QEHQ@Q[Co��~]�QS)/>���?/�p
(��
��(
��(
��(
��(
��(
��)��n�m_xQE���y������)�&�O��^�/ (�����ih��]?�hQR���Yt��k�
��
(��QMn�W�EV�]Z�>�u斿��QX�QE
QE
QE
QE
QE��
����
�{ER
��(
��(
��(
��+D�I��_g}t�-���(�}�?%��
�� (��@QE
QE
QE5�m�y����QE>gѽ>]����QE QE?���
 
(���k��v��QO����|�u��(��Kuw�y��}�+
R1�&���t�
��m]Ǫ���'ʻ�����m��`z����=sߧJu0�
�g���\��}4�I颶���}N���(��RO���O=���݌(����_�����l���(����k�t�QE����ߦ�������)��Z��<�뭾^@QEv�W��_M�����(��Ϫ�~K����
QE���]�=5����QE_��\�(����}v٭�_֏�QB���E�mc�۶��Z�QEN�_����טQEd��۷˯3������(����
��ow�Z�
QE���/7�}�
(������i��~^�QEh�\������W���4QY�[�-�[
QE�(��i_������EQ������� (�������w���QE[V�]�k�
w}},�5@QEC������|�}
��)
QE޾�QE 
(��
(��
(��魵���U��􀢊*�^�N�m��y���ET?�r_���QH�(��(��(�v���
���}�W�`QE'�/���
]QE�$�u��������(��
(����K�d��
_u���(oͽ�
/7�n��QE
�
�����yJ�
(��w����m�(��@QEF�`
(���VM�ߦ���(������^~���QE�(��
(��
(��w�=|�����(�w������(��{��/?��j�QE 
(��
(������
��`
(���ת��(���eewm�����
����QE����EPEP�_��~h�(�oEm�}5��>V��QEHQ@Q@Q@QM?�_/5����)�y��9u���_��Pq����8��LsNOEgӧM��������;�=�?�N��sS�arrp:u��;t�z����y$�y_�������
7�QEWM��~k�(��Vw�z?�%wߪ��QQ�&�~J�l�_��QI�
����ylEQ{m��=�����
(����^�{mo=�{�4�EP���MڷE������QEh�^��
��)�QE�w�y�-�w��� (��j�};�
w�˧��ER�mk}��������(�m�m۲����k`(��}��_������(�k��]<��
�+;EU��.�u�gkt���QI��^�N�Q�_���}���*����O?'�}6@QED���
ᕺ������*@(��>ߒ�����(��k��� 
(��M���[���{ER������_����(�~^_���Q@QM&�
�O�@QEm�
�^o���
(��QO�������
(��m;_ӵ��?��(�]:m��y�/�$QH�(��(��(����@(��
(��w���mo?//.��(�w������(��
(��
(��w�}?%��~m�QE 
(��
(��
(��
(��
(��
(��
(��
(��
(��
(���;�
V���
(��-Ӯ��^~���QE����
/�
QE?����m�(�����ߜ�����QREPEPEPEV��^�;�[���h�����(��(��
(���O/??�[ER
��(
��(
�a����:��E�
�@
(���ӵ���[/E�[QI����W��v���QEl���ի�
�_xQS--����[����
(���+u���~�hQT�[O��_]6���vET���
e����
[EU���W����w�@
(��+Yzu�
��|�w
��(����[w������
 (����(�S�t�:ۮ�S�Ko�hES��w��u��فETK�o/�w�Ӣ��ET
QE�\R߷]��]����QE�i.몿N��_�{EVo��R
��*��Izv�
>ߏ�ET�wGo��[�
�z�
(���z��~���EU��]�_�ٷ]W�kX�(���~_?��QE
QET����/7��݀QEFޚ��U����
QE7gk~��+��y��EV�Y.�>��QY�'��}�7�u��@QE++;u_�k����ӠQE6֟r�M����^`QEM�7�[�
��^~_%�QET�K]t��R���{
QE�QM����o�dQH�(��(��
���@QE
QE
QE
QE5�o�u�~_pQE 
(��
(��
(��
(���Z
QE��%�y
QE�(��
(��
(��
(��
(�����,��{����
(������ٮ��@(��O�����|���(�m�,�;�
ZyEU]i��_w/������QEKww���(��@QE
QE?������@QE�-u���V��_-�QE'��~K��
���(�EU+i�O?_�`(��O����(��@QE
�����܂=q��=^v_��
��(��[/�a-��
(���j[�m:(��jOK�����m���(�q���]k�������ET�&�����=6[�ӸQI�̕��ѻ��[�禀QEI����������
QE6���_�
%����]���(�v��uw����@(���
(��
(�����6ZZ���
QE;���ן���QY�����y�z���QEHQG��lEUsm�m���}���
(��w��d�O^�QE^�yY���
]�
��(m�_E�_�
��)m�
QE\��o��(���
(��
(��
(���
���
��)���
=��]���
(���e~��׻���`(��i7g��]�]=,QIݽ5�g��޺�k���
(����/�n�~ii�耢�*���i����.��.QVEV2Vr��
��*@(��
(��
(��
(���[U����o??�D�(���
(��������@(��z+[�������
 (��O�_�e���� (��� 
(��QM�O�藟���
 (��?������(�EPEQ�EPES�����~ߢ�(�����U�
EQ�W��v���EP���^o���@QE�(��z;%�m��
�@
(���QE7�}���
]�@QE����
/�
QE����]�}��
(������?�ɭ
��*����?�]z�
��QE8�����]�W��
QS�|���
_��(�����%����QE��?����(��@QE4��<������P��4RL�����j��[��u-.�
�6�EV�Z�肊(�����k��_�QEEk�k��u}�/�EUJVi-�M�y�~�@QEd��
(����5�����
�ER������
��)�m4v����
��EUm���[�=:�릀QEM�O.�_��~[? (���
(��2�]���~�[���QEku���EV_����EQ�]v����`
(����k�~
(��
(��
(��{/%��i����]
��)>�/�y�
�耢�(��/?_�`(��@QE
QE����
��(
��(
��*���m��>�{ZX
(���W^^��g��~��QE]W���� 
(��
(�����(����2K�O=��b���
//�P��*ߪ^�
(������������QEN�~?���o^�QE������(��
(��
(��wzyy�.�
��)
QE
QE
QE
QEm'��k�V���W�QIů�yy���QEJѧ��(�����W�zlQH�(��(����^o���@QE�(�������@QE�(��
(��
(��
(��-�]_ד
��(
��*��}-ק��
�n�-��
��*_�~	y���
(����_pQV��m�۾�k�ߦ��(�Dҽ���=�tw��`
(��oMn���Ͽ��(��(��?��_��@QE���ӷ����
QE?�~^���
��(�뮾��릀S[��ޝMo�x��
�ک��Z���(��oew�M���
�8��
�Lc�x��TK���q��:��{Ե�v�{��~��l�����
(�����O����
(�����^�m������ESr��m<�i=u�
���QE$֎���
v�����QD���w�G���QJ+U�_-mm7��v�(��(��[���QP��e�ࣾ�}��PQEG��o>���QE��;��o��i`(��mZ�+~�����(��v���.�������)?�����lER
��(
��(
��(
��)��|����h�QE 
(��
(����ES}=����
��
QE�(��j�Z7��`
*SI�$q�pq�����c��:m�V[�g���ۿk����m�����˾�y�{o���.͚ʹ������]��=�{�~�����g�x�Г�gǨ$���G����-ϐ�glI��
1����BO�����k�9'��o��M?�n���
�����x���T4+����ʊ&a�+ɥ���>e��g���໰?.>��&R�.��$��8�rI�{ժR��_�my�Ik/��-s��
OBw��
3�d?�	��T'X�G���
�*��@��ɀ����y�KT�;n�����s��_r���������v���VP�㓞��8��J5]1���'����P�&��F��5�E���p�e;�V]4�e�z�=�&�|l�&$d�#�u�1���=��Q�$v�>�����#�#� �x9�*H��!l�sq��M ����s��9�t���O��
#X�Z�It���ש�tW�G�f"?�ZQ��*E&FV*rr~n�Z����J��I ��HQ�|������Yʜ�[m��~Z��[�ft�JV��7��>އ}Es��&�.Ww�s�3!�?��^��t<V�sC2��T�OFFƳq��Nˮ�_=�tƽ9m$�e��
=��$��U��0:~>���mCO���w��̟_ӷw���QE�w���g�QES���
���o�FQEO���QE
QE
QE
QEt���o�
��)��|��
(��KF�`
(����
�'��ۯ�tQR�
��y���@QE�(��
(��
(��
(�����
��*읬�׭�v_�����M��(��o�������(��^���}���
(��������(�g��߇��
(��맗����QF���W���`(���$���뾋��k�׸QR�ׯ���~��(�ESO����o�QE]Ӷ�����v��M�QEMl��N�em����EVMk�u^^o��m
��)
QE
QE
QE_��
���?縧S[��?��/{+���6��{��mn�-�������w8�q���
>��a~a�
qߦ?s�sRSi��.�+��n���-�����
(�����~+��vEU���e����/?��(�����ߒ��(�
��+E��v����
/��@(���ֿ׻}o���k0
(��vމ[O'��QEk���_���(���o]:�}�:-@(�����/�^����(��ۭ���
ᵰQE=l��m���M??@(���=���Ww���(��R����y/��ߺ�(�z]���`(��@QE
QE����QM�
_r��܀��(���?���(�EPEQ����Z�����}B�d��4�ȱƣ,ņ��<c��\V���KC� $�hq�s�Q	ۍ�2;�mm
\�/�����Ʈ&�$��]?�U��m��n.���q2D�g,�<c8Q�b`23��\��
��~M:&c��t��A��}p{|ݸ�漻��sq$�OF�'�\ރ���'���<�
/��~rk�4ҲѾ�4��˯K�����4�t];���}�WZ���E�̄����dγ��}O'�'�y<��
ץ��PK��߾�������j��O��K��a��=8����n���ӥ6�)��E�D7}�
���QE�QE
QE
QE&��\�N�}袓]��Zy���?AC�G��{԰�5�	�������Q�'����M4��}{t�cHԔZqvKD�����Y���-ʋ����r��'ߵu�Z�{�V�C+�R���ܒ$�
w8��^[I�a���2A�Pz���2���}�׫:��sj�{�?����g�b:�?*J�+�[Qٮ�� ���{����s�@=k����EG�*���O��� d�� ��q�O5��Z���-���U��R�B��̿�m4�߶�W��h��$c�%Iؚj��QS%�^k����aEV{~�����o��QEע�O�����@(��]~����
��(���R���
M�(���~K�
��)
QE
QE[�
_נQM�
_r�~ֈ
(���m�y����QE[O�d�
P
(�������i��
_�
(��o��(��������i`(��i_�޺ۥ�O��W]�ނ�(�Ӳ}�o=�|��/�fQETb��}�{;ko�y 
(��{��m�i����W��QP�_oO���m�w�QE5��o]�o�����KET�ޝ|����t��(�����ӗ����]���)Z�{v���
�t��QE��^�
ֿ�QU�ko���������)�;+ieo]��E����QCwK��tMy���QPEPEPEP�Vߠ1�N�~��S�8���������J�7�o�[��N�u��z�
�W���u�N�����~���0O__�-h�^���Z�e��u��
(��k�٧�������݅QEӶ������N��gm@��*e��׷_����z�@
(���
��ߟ���(�wu�oӥ���]��
(��i����
%�_�>ZhQMY=�_�O����X�(��v����g��ۭ�(���I;~>�v~[i��ET�
_��EU���}?���[�QZ5���
���(��ދ�e��
EU;�|��4����}��ET�{y%�/7�o�ER
��*���~����N�QEl���~K���<��
(���o�[�����Em
��(�����=��
�ER��/7�v��)	
1
(�'�
�I�(I�db�w}m�^�u���$g��>���;g5��떺j��&� ��X�݋��
d���{���S���d.
�r29��鷡���<nY�g$�Y�$�z�ORNO����O����众���[����m�]���]z��usP�.�6�Ą ?,@|��	Ӓ
�}k7i!}z�>��=9�{g�5ҡ��[|�]:�g���<�Nrm���~~AEV�_���(��(��(�}/�E�k�QE(��
(��
(��
(��
(��ɹ'���O�[o�
i����k�G{��wG �6e`��)��^�N���E�K��e�����̥'��K�����k�n��-��~�Xr�	2/b[��~�#��h. ��Mn��a�`s��ág<u�?�Q�����v:�Ν0xHۑ�,��)$G7C��$VR���ת[ݷ�O�V����(�U��
�_�u��O]����b�T��-�tͷs�S�*O��b
��+V�wN�?[i���_�؅H�&��ETJ=R�����hQEe{�
_/��(��(��(����躽?��ESk��[���
�m���*@(��{u�����t��
QE/����
��*���徻vm;�7��R���_�U./�-A3�`c;�g��\�?��q��e�����}m�
ké���-Q\��*ӣȅf�pz�����9��k�H��H�de�����Brqۆ�I�ӧ�O��2�~ק[��
߶��c��5��u@8%�
`rG~+�%��y���	9X����@1�1���j��7S\L�y�x�#<���]#J�~wK%���4�(�t��t�z_��^3ێ|�q�"}rq����Y�[�q��?�+�� +��'ܓ�s�;SB(��I������R�
����jf�7�����n��.��������
���
�T�n�'k�ϧ��/z������ع���g�\s��{>�
=5鷪����/�p��|��﮽��	$o�Ȍ=U��D6?�@{�����\3����2�
"*�__E�����ΐ���Y��<����տ��=#�F�[���o����N3�МN�
JJ�8<I��0gK��f@2mɵ�{�Mh<^A�՞3�p9#���� �1�=K�M�����Έc��ٻ=>�o^�mEb�x�I�
����
�T����~���H�P�:��
��V2S�Wn��oo�_ѝ1�Jj��O�ESWvmZ�>�~��-I7�O����(�((�����������~@QE�OoO��{��v
��)����
Ⱦ�����(�q�V���+���۾��(�m�Z��y����QE 
(��
(�����o�ER
��(
��(Z4H������KMn����F?��
��������/!7oӥ��hc�����FO%D-�c�n���
\Rկ����o_�`[/E�u��QE��w}���1�QMJޚw�oK�>׿��(���K[�
m�u�_>�EQ��]vZw~����
(����+u~�6@QE�(��k���U濥�@QERoK7�������T��QQ�}�QE
QET^�����M�
�
QE�2]��_?=�QP�o��߼v���}�QU&����m��u{hEV@QE
QE	��(�o������?�ERN�Հ(����J:�},�ۭ��(���Y݂"�Ā���?N(~����m���|���J*��H쪈731;��W���޳ZٱKPp�bx9�Ͱ@�7n�♯ko#Z�����f
f��p6�;�zs�۰�O\랹5�Nݲomu���ף��qX�w���gw��a�
��u98�c��}O�i�Q]	%����9�~���QLAEPERw�˪��.�QE0
(�����|��(��(��(��(��(��(��K{[����v{ۿ�7�QEE4���M6��t����y�A���斊t������5KwIawGF$BC��ݞ���h�"�䭭��G��d�|�c����rO@+�n��i�� ���z���9��t�rkÛum���i��Z?%����Rk������kg�{i�
�C�$��1�x&��MĆ=�Z�b���Nd��S��I$��t�2�RXH ��dt#�yEǥ��_����C
�4�Km4Zy|��ut-QY8kM>�?^���M���zy�??^�QP�������
]QF�����u��EP�i����~
QEmӪ���
���(���z�V�<ߧ���(��?�?��ܢ�$�ĥ�u�,��
=NH�
��u��+�"a���8$H�k�`��'��k
rn�%�����cSJ�m���u�{l�H�K"".K30
ߒ8�
��y���[e-���	e"�9�͑����q�ח䛫��g!~���\F�s��0�G�8��w��
�tF����W��G���yu�+�Yi��=:t7n�C�])@��2>�Y��?7�x�x��v��IbI�$�O'$���뒊���;=]�o�����8e^swm���[����l�(����I5u��ֶ��v\���>�l����(����c��(�����
QE&��}-����w���������(��e��
(��&�oK�
�����{
�@rqש'��y�C�o�Y����HO�,pzu^�t#���9ݯ������i��O��{~_�s���T�an�������7�F6�A�����u�6�Ir��R�-�v�b�N
�u�)����������
�����}|��
���u���W~��yo�[�{q�F{�\��x��}#�0�����l�q
��bH�>䜸#�2/R�;]?]��0�'�9��Gؓ���'ԁ��Q�U�ۯ��w��z�qP����}���wn���g�d{�8��z������
<�:�?O�BQE�����o�f(��~��Y.����QEC����=����Z��
��*:����׵���(��Z�
_��(��(�{-�/7�yZ�QE QE
QE���)�ӧ�;r?O�3O��B>�N��|Q�
�%�V"{.�M]�`z
(��[/O����Ke�QEe;_ϯ��

aET
QE��
��טQH�(��(����}�QERZ��5�˻���쀢�*����
����޿�@(����}�w�� (��@QE
QE=W���
/�
QE-?��`
(����{u�o?�|��QE7o�Ϸ����zER��z�
^[
QE?������l���)
QEI��m�y���
[EP�uo/M}��y/E.IJ��G���m�s�rG�3�N����^�=g�l-$Rg�u?�[��w���g=@8���X�2}��Ġ���A�����0q�����'��OL����Po���
-u������Z����-�hߞ���ۜߧa�jZ(�����!����QLAERi�ke}/�_�*���۷��N�QL���(
��:��]�QE
QE
?g�G��=:je.N1��`}8�^��
QE
QE
QE
QE5���=|��Ҋ(�4�v�
��
�QE
��ߏ�QE
(��ːy�?�|g�=�}#5����i��M��p���y(8'�#�"��6�X���?�t汚M��~���֚#ZUeN\�����=����Rx$WGPA�p�$���`�@5-x���w�L$���b7�I) ���pWd��^��x��PUGu���4R��[���a_$t�+��5������ߚ�������S{'�������kk��E
��2�4W+�z�_M�4�ע�f����/;�QH�(������B�(�\����K/=�쟓����_��E#�G�WX��b@��'����s�(��Yl�q7+��J�
	�$�� �֪2���o-u��M�N�8+�?$�
S�m��yQG�f!Tg%���g��\���Kux����%w��Jr
<��9��Nk����h��{F>H��F��灓�q�3�G`�rpr;q��o�
_^kHR���h��5�o{X�����h�{|�൯{�-�_��L�rNܐ��>UP
��zs����8�������Ҋ�Pi$���Z�����e��Nr�wm�����QEr˙7m-饴K�zQE_*}?�����(��Q��_��v^����M߫�f��;[����(���{~?���rB�(��(��(�,�_�_xQE
QE
P@=y��M&��
���!
����NS�F>� �����9�(�q��D�
U�:��'J.�m��k�=��+�@�ݙGS�
d
�qמ���_�_Ĳ�H��ן��~`GC�_L��!�-�n,�Y�� e�~���8*z�yJ
�+.�m����z8|[���j�;^�l�e����d��4�~�R��܌+F�*H�J�����
9'��
����ҳzٿ�uߦ��J�j���~��_�`��(5��/�^ߠQE�����K��
�0��)��_��ER
��*��Z�_��_/�~�QE���
�wM����dET
QE
QE��z���
m�}ϥ�C)��~������1STR�����Lg4չ�V���E�����S+]_��O��QER�_{+�l�QE�����
/?'����(���m6Z-:�ku�mZ
��*M]7�Gg�w��W���(����o?_�`(��O��/���`
(���|�(����7@(������kl��|�PQR��(��w}�����}:�
QE�(��������}�`(���I;^׾������QEbEUt��
\�o˧�M
��*@(��
(��w�/�o?+�
J�QE�(��
+7U�c�m$��vR����n�#�NO#�q��bY��U�x

rI��ּ�Y�R�vD�!PI�Ir8��9�J2|�[�����m��Uc�]R���i���[k��l��%��敋I#nv��3��䁞*:(�Ԭ��|���rn�����
�ʊ(�5g�ӭ��u�uw�V
(��B�(�k����QE��(��(��(�;�
V�Q@Q���(��(��(��Q@Q@Q@Q@���4QR�l3i=O�N9=x��׭1��8�@�������95���
?��ͧ}m�~�.��R�vmz�:�e�%�|�\�+��*�ܧ�����c���m��\�M��x�c��v�QI��W�^�[����w���.�l��^om/�u=J=wI�os�L�1�9�VWR�ۥ�=L�?BA�;��&\�����}��8�G\���NzVn�S�^ֶ����ו��Q�Z�����~5��g�������
���Y5�& K^����0���r�Z��=x�|����†g����@8�j���K[[ǲ�_庵��R��ߥ�^~_��i|W�ş%g�����2:s���?�`����b���';�����@c�q�AR98�+�������T��}�?i�*MYi��v��b�������;��H#��zwɪ��F2O'�=?Oǩ�El��O��_��iNr������QL���(
��(v��6�G�QE(��
�w�}Z����O=��
P��($(��>w�i��
�QE�(��Mj�ӧ}����=�R�=���Ӯ���`��(W��h����%ۣ���v
(����]@(�����?�zQ@QI��������C�`�C�U�=r:�g5�h�& ���ۆB���p������k���@8��^�}�z���2�;��Zn�Z����M�׽��k�_����c���R9=9���+δ-zK&KK�Z�,��r�NAluLz��М�:Ȫ�C+(e`A0��1\�R��'���_��և���ƴw���o�{��۷����[�}��#�(���Z?N�Ii����@
(���(�;
QEۿ���ER
��(�
��+Nm����u���M�P�28$z��S��L~H?_�{����(�̵�������6���>�W�
����
�?��s�u��ӏO�c<qKZ+����}l�QE����������FQE-z7�K���_�kt�QM���uս�>����QE@QM�����QF���e����lQH�(�k��yy����ESqj�'��O>�߈QK��[���ES���������f��(����G�i�|��
(���O]�zt���o��(�z����սQE 
(��
(��
(��Z��m�o����G�QQO:[A,�$.I���g���8�L���[�_�/>�~��J1m�Yns^(Ԍ-�LV[�L��*v� �q���p
`�q���ׯ5b���nd����1`	?*�v���;�t��
q��eo�j|�*��Q���e���QEhr�Q@~�EPEPRit�������Q@���QE(��
(��
(��
p�����
=)�Q@Q@Q@QY�ݫkg�}��͒\�Mj�z�QEhc�.�ցEPEPEPEPEPEPG<���z(����EPA����h��W��5��lQE0
(��
(��߲_u�w���(��QE
QE9ie���_]>�EPHQE
QE
QE
QE��}}_����EQe{�_����(��I���QE0
(��
(����
���zu����z�E�k�X�-n�{F$#�I���c��c>Þ�#?���
?���m�i�-���uޕYBq��5}���[D{P�Ȯ��\R:A#��L0i+���m�X]�abV		$��y�
t���8��w�A�Ѓ�#`�F;W,��[t��zѫ5��[]6I��aEVr���
���v���QEf��v]<��_��(�տ�$���
Z�QH�(��(��(�c��
m}��u�

�Â{��O��ҟH�#�̊V�Z�l�m˾�{?�"~��_���(�������QE��}?�w�T��QEBѫ����
���hլQW+5����ߺ�EV����(��
(���-����zk���ՐQG*����M-����dEUmku�躾���
(��N�u�m���Ko��QE�Q@QN�M}5�o=?��
(��QG��`QE7�[v^o���
(���
�v]_��QE 
(��vk}�
��ݾ���ԑG�<��>�z{�zdW���
*8���d��y�O'�� �+��ٙ8���X���
89�
a����^?��5��18-�����S�!s���]�������i����v:�,9onk��������0=���?�{�Ί(���O{ww
(������%.��p}���4��m��(��
(��
(��
(��
(��
(��
(��
(��Zߥ�5��(��`QE
QEKM���mW�m4ٶ]�#]o���[�QM�-���-4��/��VK����~:�QS��kv�ת���� ��*�(����Z�_M7���M���z�~_>�EU�(��N�<�5�\�(���ӽ�(��
(��
(������GO��4w��
/׷��E
QJA�~E&G��{4(�Ϸ��40�����{w���{�t��
����Z�~�^Zy~�˰E��:�9��{c߽_,��_K�漼����� �>d�ǎ��D��s
ϟ]�-�7ƕ��Q����e�>I�{�]W�������F��	��-ʂJɮi��@�=듼���f����7����┞��3��}�S����������9%�]�=��qH23��|z�c5��
����x+^���-��l��ke˸��ȗ�٭�!�`��j���c����B6��?��#y�1E�x�@���
UDj-0'#�t,�����J��J�[>��6��Jpw�����˱�?�����wmr�%����r�2�"��(�1���}�`�㞾���H$g�~Մ��O���}R�o���
�w_��:��QN�N@�����������g�<!xt�
��Dѯ|�����܈%�S���6�ۆ������Um}�h�
%뾃zj�_wD���
���G�� 
u�xU��+�F��=�&#8[T��bTdcɉ���� �����{�>�v�jD��o�q�82$Cq���޴T*4��_��t�ϧ��WU��OQ_�~����{�m��tp��l�t�$�ǽrן�w�!$Y�Kė`t--���%�N1��Ǿ-a�=~zy�_�庞x��w��=�t>���O�2h������L������0nu�8=������7u�|��|?Ӑ�j�R�g�X�8!��zv��I'k]v{7���}�<����z~����AA^+������Ik	�N��
�g8�y?kB088�����~߾1��F����ܑ��W�S(4�x�sЧ�)�J�o�O����*�}��=7��W���+�������-�5I�F������7��{�KT�%���-�� ���x���@���,2�
T�*FV����I�����ݥ�d�f�_qjQ��2�=�_�����"���_������N*���;��q��qߜ�>�u�9��}{���s�JI���{��v��W���
������(��8��>��
���|9����&�,���%Q�
������\$o%��w1����
�x�~8��*Aiӷ����	ه���I=6�g�����g�����;RVv����i��4(Y�����#�����Z5�՝��/���
S��]�붟�O@��*^�t[���_�]�(���u���뿗���QE�������(�����������ZER��^�>��
QE�]ջy��[߽�������t�Fz���%�~w·�V"{-m��
&-���q�KT���b���QJV�����_��k�aEQ����۷K�������+6ޚ�-ߥ�����
(���(��^��U��P
(��\���w���_���(�7�O�[uV��nEVw�j޿���[/�QE߯�e����dQH�(��(�u����_'ۧ�
(���^���
�k����QEN�z+�{GϷ��4(���QE
QET�zyt����ۧ~�QE�սH��jק_�o���Ktm��E;d�e�rA�yc�8
�y#����`c9��x��WK�{�=�Rv��0x.�3�s����s\�zT��M�o����|�6�����������
"�(�N ��(
��(
��P���
��
?ƒ�(��y|��(�AEPEPEQ�_�Q@Q@QI�K+�K�Px�qǸ#�P}��ZZ-��n�N�
א7������
Z�dt�r;�=�����1���3$� �y{���SQ��;�����B��t���쒊͗Y� ͪi���/mS�$��G��k��^	�ɺ�o�m�|�cNB\� ��qۡ��P��/��������Rg�����{�⼾��w�-<�|E�L2
�^�Fc#lr��J�n�i��V��>"h�=-���^�/��Ӯ=j�
�촿Ἲ�׿�r�ݯ�?���E|�s�\|	��<[-��m�jR��Z�48�a��3y�l|�ϕ/��O<[h������:r=x���IYY����ӧ�������
����������WE��<c9���M�[�FV�e�{c'�����*����Mvῃξ��}��<�8�j��*�T�����k�lO���KӮױ�F	�3_���P)@a��6�����]�xȂ�nFk�����r������C��[�R���F�5�lp8�U�:��N���~�鰽�<���O��w��!o?nϋ�n�.��;P�t>�}�92^�>� ��\������MoK�Rq��F�]�xS8� v䟮j��U��]u���iw�/Mw~���{/�'�V��lq�q�}{�����
�_���~^~�/x�
���ط�Ӡ�9^�Z/B>��q\���ߍ���q�7�L��A��A�L�?J�e����v۷k�娱4ݒR}_���k���������>d��
~H�ӻ09�������ī�V���.�V��}{R�zv!A?A���?/��Etٹ��pOS>�})�I9y۞O�ZG-o�_��/��Ӷog�]�<��~Z�DW�f��5�"�s���VP���d�G��\�����9^8�Ez�x�K��^�<w�_�Ỻ�u�Ԥ��.$����g���"�����x>����?N���֫����{����2oEk�u������?y�~:��Pn�!x]�1�˖�@�0�9;ppq\���K�"̲���
��oe�ܞ���b;��+�+���`����
 �L�?uI�Ns�s�S�:��
g�vռ��MZ��wZ��&��?����>߳W�
�g��-�5�R���.�zC�L�?���\�����r�g�x���஛mn�y�5�
�\��#]8�:c���Ǟ��������ץZ�����k�iw���h���y�Z�-��ݡ��w�~�)�x�l���X�1�zF�FGP}F;W3u�
����Ë���k�acR1�DP�Ǩ�3��]P�����ޜ�g��v�z��
���3KI輻��O��s7V�n�v쯯^�Wmt�����|S(ƛ��
B���N���nŊ����W9q�w�R�+m�xZ�p^��}��W7J8��߾3�.��r~���~��I��#��T���������
?4�U�w�Z_M���/S���W�e�"��g���#:4Σ�xȮ^�����tN���=�t�3��69g��_7�s�~��*��:~���^�Z>�B״U�k�~���o��^���v��궵�����o���>5��~"��$C4��(�=0x���_�����.�s��
mߢ�q�S(�0ּݜ��N:g��H��8���3��ؑ��qӿ�x�\�R�w^N�w�����vm6�]�o.�ۧ���O��2n�E�\�o�k���8�K����Yn�&f�n�e?��y��}K1�ԟN�EnP
Kw�I��9�q���;�\�:�s���>�?�z�,<w������v��8�gr���M�i�屢>�$��I?Ry4�+�x�ԁ�w�l��ޯ�02�	��>�8�<���$N��N��'�={`���
=aU9\wjֵ�|�w��8�*F�q]��[o}�
�?�
n��Ax�Q���1,r[����?xpA>��DK��q$�2)���$RAG��w����߷���J��i��Γg�G��}+�6�9�����{z}M}
0T��쵺ף�M�O�����[���z煾=|o�;D����3�B�$�<m�+Xcۜ�o�J�� Qӡ��|!�
E����;���n�;B����D�<l��y5}:���9��-�I��|,���U�A�����Z�)�������/x���
,[Þ/�4�h7Z��t	�4�f�+�>�[34��<��E+[�#� ��X�e�t�%Q��r��ݻW�km��p�lN%�4!9��*�^��/�Z����
�^���
�F�S�߅~:�=�<�����N�����/ͬN@<�=�?tb������ٺ=���o¶~�&_�R�R��h���s�mm2�̗L�7BS
y��_���
��j��χ�A9�Ծ Y�0W�[k)����dI���*�*�jσ-|�/�ϫ_RԮ%�<OՀ����o��"P���r	�G��̲:W�+�RJ�RV�Gt�g���2l�M'��$����ׯ4��3��c���ۊ�8$g�������}�i�
���6�<�����է���"�~}0������	��y��W��m��ߩLpNك��}kʖw�%u^=-䕵Z�/��\;��_�˦��~+�Z��V`
�==3�8�����Wn���'=A�>�t籯Ҙ?���5p�i����[r�:~�.�9ݍ�>�<��]%��Z]���S
8$Y����e�A�Q��=+��e�b��%�������Cx�g%eF�׻���_�c�8���
�犈J	��
_z����
�m�(��?\��e�4�pON��sׂGa[��
�N/�Q0�Y�����,!n�9+c2s随��.���v�|���ۻ�����k�wo_��C�:m9
�F{���u��J��p0A�#�O��#����-����4V�o^�0ZMi"$g������y ����~M+\և�.n$�����6�U�QSH�R���]CI8�qFR�pO��Gmw��k
�	�4)��7I&��n������I
��pOc��c��s���ߴ�íO~��
�]#������a����Hy��SI೻�m�l^��HLm.��k�C�j:U���i �ca�%_nҧ=����RHU��<c
��9��0z��
�����O+�ۥ�ӧ������b0�ӄ��ѵm�i�_Wө��<�
��Z���O���a��N����0�DR_�Z�E(��MS�7r��f��$iŔ���V��X�Z����b�a����~��B�ǅu4o�hw�ܬR�w��eޟ�[����{�wb���/�(G�kO|G���l �� A4��^!�1��
.o����iV���|��@���1~��
��
�6��nt�m��^����s��J�������+}B(L��j������VhZ{yzk�P�G���kD�i��.��t"8��w��]�����n�o�Ex������������h�yz.|?�-*+��w��4MV1�j���O���7�5��d
�5�3������J��%����Ԓ�Zi���h(��Ť�W��Zܥ&���f�����z�I0��9������r{`S�)ܤdЃ� ��8��Z��]��u&����Vm�|�<�d�1��
p���cf�v����_e��OW]]BWѭt��_}���R0���
���W=�(��tע��v}��}�QPEPEPEV��
>�_/뭴�)��z�\�m7��ށ�B��v'��n�OU��>�g���1��f�zZ����`QEO3m7����z.�QE7/>�_������
��(���tES��������QB�z��y��}�QE��^v]�z���`QEd�����O׷��ER����/?�o�ER��/���
��("R�V��^��5�>�(���]���;i�
�������
_{(��V������k�~eQH����z�
��
��)���
o�O��.�/��]�w�QE�g�2d�z_��������QE�r�v��{�Q[%��]�/=մ��R�~ޯ������ܦJ�R;F�s��B}G��>�|Gu�}2`���)�#q��
� �#�4S�����%����u���gg�����۩�3��3�;L�\��s��`c�棤Q����N�N9��-zVK���
#�f��������@��*�
(��<����RR��=��ƒ�����w��=u���QI_���kyn-5��[o��
�P��(���
�����u��QE�(����
��
�QE
QL~��_ç��hŀ8�?����3pf#<��'$q�{t�x��$g�?����P�,v��q4�P�H���#H�I�َQd�d��Z�n�k���}oakm��[_G��OϾ��Z��(�Y]!�5/,�0H�E�<�B���ē��d��g�����7:W���ƺ��G��[iʤ)C�m�m��d�9�75�o�/�Nj>=�o|��Fk/��=��}n�)|Is�G����?sݹ�
]0#�H�5Y�}ӓ�I=��\�s������乪I%�խ6���/S	N�ڌ$�Gg��o���>��n��һ/þ��1(&K��I 1{��0H\.V�[�L�Dw���с 3����A�z��.[#�t*r8�N�L�J$�����t�$s�{�5�찿���%n�����}����5%��^�3������a�
	x�#�n��s�
[�����|����
hύ7�,�u����ZW�?�% z�8�J�
*E+t�H��lS�ϿO��Z��|�7P���V=>��!9�sǱ����K}o(��o��o�b�\�T*z�{���
;��{�s�}�~����Fp5K��pG��t�y�}F+���o��O�g����FDڭ�NA����t���w�o�7��I8#���{��ǿ9���֤	~*ݕ6�|_8r�Яrx9h�`��}��A�
��k��,��{X|�������։Y~�B[۹����Jz�6�g��c��qڳ�%�X�︞{��
�z׵Z���
o�L
<X�kKe���{
����t���
�|@�ᶡ8�������͓����o1����Jڭ}6�����2��[`�+�wV�_���
��L��
��
�����m�x�:t�9�㜓���m`�
�:�)�Ú=�Fqw�+%۞���f��3�t�?�O������V��Ϫ�p9#>E�rx
s����s�E���m��Wӧ���r�텟M]����ֽ_D��>�H�$w���
�g9���^O#ӏÏ�bk�j��	��6P���^�$��j�`��B��N�ҺK_�&o���
↏q����s�^hϩ�{�t��Y����+�d��ϳ�7��9�i�gѴ�zh���~a�N@'#�~���G��ǩ'�����?J�c��
�hi���O�v݂,�uS�_�޹����=O@+���
�j�>�����⛡����hOc�� 1�=s��_e����\t���,ݴ�`���y~>G�7A������ۏ_�)�3��du��������T
��-�\`}h�@�J�j�3������������F�� K�}IW��D�I둚��n_�{l�Kl��M�Έ�vf޲�����'�=z���`/���@2z��?ʫ�P�8��q���g��x��l�b����@_
��k�cQ�=���=}O|w����������[�� ������l��#i���sYK����'�.�[���~V��p^)۞i>�kK[�޷�9��n�ϳ݈�{o~EKn�mF|�X��
A����V��/�l~�@>�ې0~f��88,rr3]���
�zh�a�?	Z��@�e�����N+��4��	����/ᮯ��tS����m5���:|���f#�od#e�ܙ��N�L,G>��k[�[�s�[xw]�v0"�o�����I����������m��дkp���� ��p���SZ���@���0���s�8�?N����t���ՒZY��u�V��Z��ӷ�Y��}������r���k�}��>0���~� ��	�\���^���_�kݦ���$��.��	�T�0F3�濤����
1�x9�7g���@8s��9��>���
����|��o�^���/���f��=�����o�����g�m��k�.|}�
'�û=�n�'>iNz��t�_�g�~���چ9{�X[69$;��s�=M~�
�>fb\�<{�N��4`��]�}�{�׷\�/�1�j	'���t�����#���!�I��٥��M���_«����_:��v%�qq�(�;J�d�n>RMn��
�:�5���j��S���+��9�V"H�I8�j��ޝ��(N�t�J��׸��Ea.,̟��My}7ս6��SX�[>W���wۺ�oݿ-��o�&�Ē�<}��pq���;�$r	��N;���g���
�g�e���4؀�E��<�� 5̅O#�`t<�����s�NI8�s��s֗'������rk)q6i(��.��k��k�����d7�����~�������
�M=��⎪�	��t����� ��Z���M�Ѱ7?�Ws�Yc�ҭ��Q��	\�烊�(?w�c8��}��n��*2O������U���&�뾛����ܪ;a���?����M�����J��\��1���xq��V���������O�
���է��%����<�#H���p�=�f��\c�`�_��`Zcc�oC��s���c,�1���۵���G'ˡ����m��
���zy�&��~͐}��q��i��i3�U�P�ߎ1�o�~����_�="V\mk�u	s�y�w���r=s_I��N?@1�
��)�d�_�
Vs�z��O3�N��OO��mkl��c�`����|���eoO���?g_���7�	!e��+q�9�g�����o�|�SbOپ�J3��h�n@�'&Dl��A��E=�9�_�O������\�
pq�~�t�ֹ���r��Q���z�6��m�C�K�ޚ��U��]_M��?�
��#Ѿ��>1ռ��^�7��S�/
蚾��i֚��5�����[��������I8IX`I�?��l�
���$�ű���C���O���
E�qEr��bVP�I�_�O�g�a�?�g���o7��
�mv�!(Ǔ��g���]h��C����}�1������ظR��e���nR�Z�~����Y=���ʸ�t���*1QJ�*KT��um��nzo�/����]��W����MF�����ɜ�+�@��,[�eF���F�򃃞8=�fr=I<��zT'>ݳ�{c��������tI��h|�\�I6�_��~�|�g�|h����>���
Ǿ=�χR6�߳]j�6�#1��#���0vٯ�����4�
�wA�Ƒl��W��}3E�m�[{=6�+[x��B�
����
��w�[�P���kG�S�^�!�k���Žĺ�si>e�BZ�`�_(�7�6I�rq�=�g��8�_�q�>��T�����'յ��ytױ����5�ԍ�������wѭ��D8���O9>���^I=3B�ʐ��s�98�<c���0�lv����>�Ї���������*��Sw�m-�����-��ir�-��/��p	��?��ϩ������'$��=�
C�/$M `��
��Ƈ��7�b��~��KM���Npy?�����
<
��z��Goӯ��*\������ޣ�|��>�}�
�zg>�E.���Ƥ�ս����[oӧMPwwa׷QǶ8���I��#���ߨ���STO���ǿ�֕�Yik?Kn�����8�U�՟�K��z:��F��n��������Ī�ۺ�'si^����Ϯ8��r3_�����cc��v����
�~Sx��kG�����;��};�UO��%e��6��v����u6R��I4�e����)sm�ysĒ����#��2�T��
3_x��Y��ĺu��vz��!R��H�k��Y�F8�^?CXdw�� �ǎ�����?�3ź��@�E�J�e�	������ݰ�T�S�g&�ۄ�^-��5�ݮ��e{'���X�n0��XZrQ�e�k�f��M4��n��࠾�Y����B�s�躄22���.�2�
v��#c=Qs��/�/q�'����$c�#������Z_��߇5�E�eͮ��w�`)����.��~R����0�(5���#�=1��^{��ذ��kY4�[��򷝏��G���ս���_����
��/|!���.����
�ĭ*��>���0�x����}V��3�?�t(縒8�] HIg9���`v�|}O�sڿλ�,���
�
k���ƶ���?|'ۣ�2i�������J�)�o�"�X�d���+�S��
�0py���zW��:��Is���o/���9{�=�k���?Q�QE|�inv�-���ڍ���L�U_ㅘ+��8R[��sڐq���5Za��y���pGjʹ���~����\֔�eu���rG,QKd@����#��Oc�RW-�;�qbl��e�a2~g��GP?ՐW=�ќ�]MsIY��?�I���S�[��_%�~�EVz۷�-���(����/�y�
���ER
��(�@(�����W�]<�/��!��
?�-rz_��+���G���>�׽MQ���;u�1�q�>������_�oO����
����
���EP�奞���|���ݿ�
(���
�����lESO������EQ~��
V�����(�EU)=5z?^�~_���(�{�>�^����-���)
QE���
0��	�p=M4�j�ߥ�e+��Zٿ��y��� �����.��E�^���\�ߌ�b�ej�0�|�X��w'�3[*sm_O5{���-��[r'���+�_M��������q����V��Au-�(;������}[R�'κ�.OȄ�`�
t.܎'8�sY�>|�g��'���=ry?�	�T���
=4���gL�]�����˭����f�>���m4�
G�y
�y�=:��泟���;Y�.�1����
�\M�iYin��˲������};%����u��O�����H�/�L%�>�f��\)���y:)8����+������v���]��뇌k���s�B3�p9����,��41q��d
��V��
J�����
=�4(�6�[��}v�
��6����M�i�_��=J-{H�n�I�(h�ӹ
q��2:�ъxf�X����ȟ�
_k�ʂ0FGZ|rK��,1�#a���?�:�d�'w�yk�V�'~����wJkN�
�ݺ���Ey����+p�6ۤQ�\�N�Á�8��l��?�� �C?�_��9�����5��������u<U9�ҳ�}�-�����ݮ��
�ZZ�����
\
�L��8����� ��s�G漯�2��Z� ��*B�#n	��͜�>�T�۽�g����Z���#Q:z5���k_���ML�g��h'��
OƓ?���EvQE
QEѯP��3�\vϭQSk�i��v��k�X���[�w��
���QEQ!EPEPEPEPQJp�������zT2��#���a�.s�x��ջ��Xi]��_��
C�Ѵ(�%��FPdu�r6�'$���}�=x���
|?��
��ե��ӵ�Y,oZ��.��b��q�E�w$��1F ^�����3$���c^��]�9�r/˷_q_��1�Ԅ*8�ܚ���/��fU���Z�ԥ$�ۻ'�k��>?����
g%@|)�]	�����$G,`�
��:�]%��y�:YGÛ)�G�|������o@��}Gj�q���{s�z~��^}����J�y�9���k3������*�E]a���z'Ӻߧ��6�/�!�����g%����l61�^������X��/�DW;H�l��8��ā��}��@���~}?�~����b��^���w��
��V�ఱ~�����Zm�k�~��������E	m��
B�6hZ`8^�jq�ܐFO^+f�Jѭ�
��H���ym�X�ˀc��A#�f�8��j�������-��A˚~ME&��{�j�j�H�N�$Lt�@��:��t�A�p}@�3�Lg#�u<�����oW�~O�
-��R�:khG�[��ߪ�V��c��,x�:v}��Q�$�>ܞ{t�*B��s��B�=9�o���S�&�ܾro�E����.*	[�-��f��뿞�C�q�����x�L�Gf��ӿ��q����������+�R�*�-﮽����Q�#�� �m �����pNI��9���t���h�v����}-{k�|Ʀ��t��o�o�滱�t�C��N�֘_�A�᏶y=���E:��<���
ӷ׌�z���oN�캧�����7�}�o[i�/��'�u�c�q���SQ�[�����8��T�
����(���Zv�e�W����+�t���{}�X�L~~�*�^r8�};�q��>�36}q�~_����mX�ڶ������o���:pGO�Ƿ��@�=L��۷|��	M�d��w�k�?N��
�j�1	�>��ҧ�
?�������
��23Aq���c�8��3לw�xϽ9y�'��I>��<s�4�g���۟��s��n#���A�u<{Ri>��ܟ�������

{/NO���{t��#��?ϵJ���O�=�랟�`�
��
g�s�,�/�h>gk_�ӱ]�	��c���Ԍ����������L ����i������9��
_^)ʠ��\~����l�|�
��}=.'$�O� <}.�_Κ܎I�>���'斚��<����օ��.{�-.ֿw���}"�d�������>��
��������ؑ����q�1��b��l����Z�ܒ��M^����<�d�rq�Sщ89?���������
�w�
O��
��
>�D�E�������bBI�`>��'ק
O ��1�r2}*�PG���=/n>�����GBGS��'���RQ�����U�?+�.�z��m|�������#����A�#�wou�������g��ķ�|RL�]���+�	��9?Ό�� {��z��q��޿M����/�����R���7��>
�m���]N�����,m}kt��X������[��^��}�����'���/Ȥ�ZV�%��v}]V�1Wv�4��>�o�q7}��Ɛ7|�����ۑ��/l�I�d`��3�1���׭^��k�wT��=2��jzƥg��[��^_\Gmo$�i6�xR�b{�J��K�[�W<|2�*���rVѽ�N���s������������,j6-m��c��Ɵ5�;.G��5�,�)1�����®����H��'?BI�:��S��x�����O���s�%�� �
�ދz�>���o6�1la�ڌ�2��Kv'������x�+��9���}Y�'�)-{6�עZ��V~�PX|<������Ϣ���J)q���?���(���
?��y6wf��z��,}z˿��q�� ==����*@���\c��@y��w�
�9�z���ק?��&gΕ�[}�5���6�G��or:�\�O�����S����Z�0��c�y�'�:���z��
��ϭgr��ŵ��c�F��K�ڮ�޷�g��kz�
�݅~��-.ۀ����Y7���{������^����25\>'��G]/y7��
z󲿞��5Ps��?2?�����������
��"`y�;n��U���V�z�8<\������[����'9�$����?��_��ʝ��
������|G'_�R�&��S�����g����(#���G��~~�������>����c�����zu�k����
�+�\?��enַC�j�Ӷ�/���=�����_��w<�
�B���f��������_�(��%`�F1�B� t�1�J�
8��!/�����?@��
��H89��:�
G�'�����^˝:={�?���ׁ�s�Eo�?����E�'k�w=���EYv_��2�]���0�N�$��Üs��zc$W��d�����s����G �}{W��wB���y(��tP��v#w~�W5h����Jޯ_�C�˪}����Kn����"�Q\�Z�-_����
#�
(��]��חm���
��+0
(��
(��
C���:��[��޵oE���^z}�
2d����:Ӿ����'�����KP��c�#ӧp8Ǯ8���2_��V��~{�5������
(���������Z(��@QE
QE
QE
QE
QEU�W�]7�w��۠QE>G�~�m�����(�g���6�y(�e��
�O���5�j~'����	Sq�G�����<cvG �Uƛ����{�
�ձ0��M����s��5�9XK!�`�c�rq�b�	������W�Œ'�<<��쬸�?\��i��<
�*Y��Ė$��$s�s���=i��N���������txձ���v^[n���_�`S�f,���s�S�=��8
:q�x
�����Zrm������i��߹�)9n�
���aESJ���}�O���$(���
(��,{/��(��M6���(�g�=q�g���`��9����$���t�(�q��]7�|�M�����~���_��c��}ҎrUwm$�Ź��k2�cqu=�D�I&� 1�@����,����K�ԹU���'u�[yi�j��(�3
(��
(��
(��
(��
(��
(��
(��
(���?J�)��
�8�
����qɫ5��3��?NG�o������^��=;��%��?��#�����W9Ⴭ�d`3��?������9����������1V�T}����Z���y��
�����z�Q�'9'����N�`�~ߐ�=?�3��'�ǚ�=+&��
O�B�����
��
֥��D'ˊhl���
,>�Ea�~�99���D:�����8����ő�w�==~���<v�ڕ:�~}x�����@�<s�z�
��zPM��6NÃ���
=j_4����:� ua��'^���
$�'��
����QQ1$�8�=G'���~סQ����RSM�y�]8v�晖�L���23�:r8�Ҕc£
�y�8��r:��[wwoKr��W�׶�����K^��K��		�599�����S�GD�8$
q�O8>��N=MB�s����}�==��־ΣWT��"��u��u�
T�<[�u��~?�̵�}�2}?�|{{���P�=2��S�s��OC�Ɯ�H8$�OL�r3�8�~�f�̚}n��6�WRMt��_z���Z?�����h�
�w�
?�
z��t�A!E)u���
���\g��ߥD�A����q���
�ܟ����&ݑ.N1�o|}}�}j&'=��A'��3����
cɴ'�_��*�c���+����?���W�q�����xc���{�ψ�|/����	�%w�i�"�a����nt�Wbk��G��i�^E�-݂˱y��0��Y+6�J��]���e[��.lD�=ZIj��k��/��l�����~8튐u�矯��!:����6@�<;�.�d�H�6��?	X+2�������:߿�����r^��o~��
	�
f�_�|�o���v��?Q:W�V��k~k�v�`7i��E�~^�
0���p�oB���øS�)7m���'��ܰͲ��T�׋�vI/�M��C���o���>��ނ������ۧ��`��q� �7LЎ����N?����Ҿ{g�Cg����O���ح�:q�L~]����<s���{u�i��ݿ���8��<�
_���ԣ�Q׷く�v����`���
��?������}��nG�@9�x�_C��㠣�������:�9��=�����ݝ�����
V��~�}�z����l�cۥI�
Ǳ�ӏ�?x�NW�����펾�����WP�Ҵ��R�E��N������G���N�A,I���kW�߷�(������)���+��`��:��.������B�rXqȮ�)V�P�۔���-�
N���S�a�Խ�iO_����
<���5���?��7������
|U��Y�3�w��K�I,Z2�l�1�+ȚL����O��OL�t�R��7�vi��c#;��A$���"�0�?���O�q����a�S{Ɯ^�~����.*~�Z�RO_6=	�'�9��1�?�U�g�
��/�ۓ��sn.4_�|F�x�h>��kq5����T�J[Ku��{d~e��
���G^�t������
�|�&����Ԡ*������$j��v���u�v�����T�������g����*n)���n�-7���p�bq�b��SRz'{r��o.��ӻ�(
�����Tp
p
��\;�?�A���9�,�8�x�q��#�)Tp:��@3�?��_�T�����s�5��U��
�z3���S������I-,������ȅ�9�'��R?��A���?�U�����O5?��
����S}��[ס(�>q����
�q���
���s��(2��Ͽ���\g�O���*A��On�O�gێ�8gួ=���B�8�?��=@�s�&��׏���Ҧ��q�����#�ׁ�zp���
���,/P-g'>ѷ��
���[:��Ü������Ǫ1�Ͼ�w9=x�'�\q��q_���2�c�^'$��{2\����me{���vW��û'k_k�U~Ͽ�S<��9�\��v����|�z����x��G�ˋ���޿���?U�E=?��'����o]~B5<~c�s_g�*���
ז��/�>/���6v��e��+����Ż׏��G�w{���� {������z���o���v��
�?όu��AHҿb�t�:|���c�z���ߖ��Oo���i�h����Y~2�6A��
��J#�W�8W������O�b3��/ÇT�V����W�2w#Б�=?ϷҾ�v���[��}m��t�oy�f�uV���Q_.z!EP]��n�.��&�gd�r>T�}y�Ulx~�j��I�.�[�7*0�>�8��+�����xIrԏ����-P���zRW!��wK�\(���]w�����Ko�v(������_�ER
��)�ת�޼���
M��)�������ח[٫���܉�U����ǡ�����ܗQ�)������W_w̥��
(��QW߶�_���D�mQEJ����_���|��(�OU���}/�}{��
(�����
אQW��}m��>���ET�&�������ӭ��`(��9�q�^������q�Ü�N�k�m�L�������?�j�9�:�����j����2�2f���8K��A$`��GN)k~ K%k[O�锩|�C�L.��� ��>u+�4�4��H�31�=0A'��v�k
m�=�6��_C���9�ݬ�k�m|�z��F[��n�9<��US��
��
H���s��
��=3���>�ӿϥ��V���
��SƝIMݿ�@��+B�(��(��(��(���Vv��
���׶�QEPQ@Q@Q@Q@Q�L�z
(���;�ꯦ�E�ߧ�m�/Y����In��QEY���QE
QE
QE
QE
QE
S$8F����u�
}E7�?QI����
Hku�3�|23����ߍtjN������
\⹿4ka�CH1�
m��s]*����
W�k��{oY=�������?Z�[����e�W_���ݎ:��1�<�i�+(��g�����ңϨ����
�k��~^_���m>���
�ý
@��N�;~?���ǵF�-��
�����Z
i�8?�ơ{��;�����)����'��z����k鮽��SJ}~_����g���q�-b���𦑨k�!�5)㶰Ҵ�*�K��۹�`���2JĐ@F�q��u��:#�	Y��\�����F���I��� Ԟ�f�����֭�X�Դr�Щ�r+�?�:#�
_'�<'��
�>�k�<G�m>��_���\b�J���e�����%cյ�y�4x�m�yZ�����?�U�z�3� �rO'�j��8&9�b���"��]����;]Y�O���y�}J���P��敞�I=zݭ<�����z��m�
���yt�
~���Hl�h֬������]��7
�����V��|�Z�ϟ�
h�
i�����O�:o�ᳶ�l�$���A��ay�Y�t�[kۘ�!D����lE!���N��nO@���
��R#���0@�%��H������둑���#�ҭC�R�&���w���}o�mrL�eVP�`�UݴKN��G�1br8�;��
֙�QHN=�<�
�H�I��?K[%�{.�
�s�QW迯�"�����n�=J���N��滾���m�mmm�2�\\�#$P�J�I$�� $�,?�Q_�9�
�������W�u����v�5ƛ�x�R������(�����k)�Լk4��t���-]w�݇dO�?��O�,&�}���
�O�ٳœ�z��g�Fx�÷�+�gTu�a�O�meY!�,E�����x�9m�58��uES�pONC��<�I�$rpI��8S�"�q��d�]:r�䝵i[�ߦ����R�af�����k����~��q�
���O~8_�\j_��
�<��;�xg᭖���&�2��M2�uG�lY.������a�����
ӮE͏��H[̮]Y~*���6xo��( 
�vq��k��{�oq��������b����;�G������O'�)(�Xz/�VME��+�kn���>2y�c99{Z��Ӎ�l�ꬴ��6~��Ϳ�qw�����|TӾ?x:ѢMCtk���E*$���d6^"��a�˸���5's������
���]/�o�
=�o��������|]�C4>!Xcuy��Ć;K_ۦ�,�s[�k6���e<a�k��@WCӡ8�#�3��9��/���,��O�~3�e��gĺ-ܖ:���X\-ť��%Y|��&9�-�ѻ�����ѥUT[�*J�$մ��E��z9b�Ԃ�'(9$�ե��vN�?����Ӿq�3�{������|w�O�_���D��)u��{�N�u�]XC��
�y���Mт}�T�=�_��-�t�YF��Eb��e�,���l���pI'�������f�~&�����I�e�tg�t+S�P�^�����h����9���lz
�����s�
�ԕ�h8�
c�?��ϯ󀌾99#��3��<�J�Ͼ�x=�O�=+�h�����W�Ǐ�Zն��o�^�׵[��<빠�N����TկZ��N��t�7s�`9�
1�N�\�6������B�HR�:�v�n��d���
���
���M,?`O�~���֡�������yko:5�
��bk/x��%a%��b��z#�U�Y�7B�g:���^��_�Oyw<�7W3�qss<�4�73���\K#�,�K,�i�f.�_g��߶��O�������C|B���x���ᩮ$���~��H|;���8R���"�ª���ơ{ i���������y�Ls��ֿ��W�(�X(N�"��J�I)Y=[}��m+��ʸ�6x��9/e�ki$����~���L	 }����+�k����
��)�#X���?��'?L~�GA�J���
�|w���V�eu/1����A�؜�~�W��P��q�1J�i_n��7���K��{��
;j޿��#�M튝>�����xPz�'��ߞ�����o� r;v��?��_̒����]����g��5����~��3��'$�ZQ�Oo����
�����&}Oӏʘ�����q�	�~?	)1�r�=�P��_ք�#���_���#���
[���пxu�?�O_jJF}��օ�����ih���?��'�;y�t�[}O⏏�+�{Hъ�4��_��Ɉ[�{e������'��r:�0~��r3�������1��~Ǘ�O�|A��.J�ww|t2"Qoot����.	j�>�<FkGK�T�z_d����y9�u���zs�J��4�ݧs�� m��@�@sϱ#��׊~��Z�����ӯS��Q�NAϯ_����1�謕��^}����\ԛ��������O̍�b��%2pt
�d�#��u��Ko�߱�¯�������{O����<i�_x�L�ԣ��R�a�]A�?yowu�H�I U�"V8��XU'��߿��ڬ.g$��NA$r�=pH�ߓ^y�����j�muZ/���{�6l�ʾג3q�i�=R�]�뵏� �<C��
[Gy�kz6�g"��HԬ�%�R[I�B;������	9���āԜ��䎽M�O�>/|T�,7�����F��F���*r�m��HFF�a����e��
��
�|m�H��|S�Y[2���]���h$��f�4��d��
HVl�����#��p��5#>�6ֶ[�?�饾��e^��~�&���ӿ��A ���m<��=1�H2��9��w�+���w�
~վT��/ï�`Xk�;mC���~��ͨ�y���b�H��}����@�/�-�_>|C��ąV���ZƉ��r��/����@�HT��
�p+��p�o�z���훶�꿫�[���6Q��a^ʹ�Z�����O�Xz���y�v�;z�=�N��
d��{�?�����W�Z�>�����Դ)t��Mn�����!���d[9�h�/.�1*4����6s�;p{t���_=Z�J%J�\'i'ў�9ӫԧ.xI]8��u���o;)ʞ��
?��%��
?��RC��޳*�{iܜ�q�3�ӶO��FNO<��ן\�9�
<�L��ߏ���%z/��'�iw����.��������DǷoO�<���f�쎆�~;s#}9��Md�
ģT禝y�~�O�
_nk�Z盋��4��1�Ho����tPZ7�ko�Z�]�=���
?�<�
�����@��+�^=V8��s_������Ӛ�w�i&������c�?_�
Vs_m��xڋ��5��_�]����ե���:�NUk�������.ýl�3ٌ�
��Y���NI�=?��
��
�_u|fl|>ջ���u���ǟ���+�p0I���_�a���E�[��y�'��R�o�n�
y��O�P~�p�<ό�W���v;�������H�'�����?�ߵo���?�
pq�> �=��������s�^��m���
�7_�n�ni��
��(���
��_,w�QY���[yv���F�]�G�m���*�a�);��q�*���9�)*9N�g��:y8���/[_{����+;k�
�7�'����W~�|�kY���C�
�{�q�KY�D�n�e&rL
�����{c�գ\�VmIE�	�E���
�QEg'�_�4�u�驰QE��
/�
QE
QEӷO����������S_���}��)�ۏ��<�
�
$��5���QEl�^������(����5z?��]���h(�}�k_�g�{�}ݬET
QE
QE��}����]w
(��[�`(�<��s���}���u�m��с�pU��A�c9��2�9��ɳ�����������<��

�Cdz�����݉fbrY�S��y=:�<��M4��}�����<|V/��������׶��)br�w3d�f%���n�9�L����
?��I����
�Eu$������99;��QE�QE
QE
QE
QE
QE-�}�m����(��q��ǷN��ϰ晜�8�~��OOn)���Ԗ�0O
��c�
���8f˻-:q�_Y�@�sM{s�k�w�DU�I
{V5+Ѥ��U�Mw��׻m%k��gV���Tpx\F&���B�J�wvI(FM�D��%�~?|��z��_Yʄ��� ��ԂVKi'a�9��<~�����/&[�b��ͅY5�h>�raQג[����,�)��%���.�O����ھߖ�����6�M֧����[��9v)�������QX��|)�V��A�a`
ɥj�7��
�5��1�Bs��z�x�\Ԍc9�#��8�6#Z�Ut���F[�
������6k�˓���Z��(U������E&G���*Z�<��
_��QE
QE
QE
QE
QE
QE�/��(�����:t�׭.������O�綟-Ţ�)�*9~��
=�IL��7��
�C��n���z����g����?Y�ʺE�9�A�}��l~�+���Αj���
�=��L?,q��E~y�錭�$~��;�0��A~I~��z�|�t
�=ϥE��jF�<��=�۱�G\Gq01������q��"�3�u��Ǹ���3wz��A��H��
8��;�'8�������
�_�w���/�[���Bx������"{�y�E���u(d��χ�#,F��7��<�����
[r�WW�C-�ĩ��4���4�(��y�;QUr�F�Е�_�{�
�LG��S��Ꮍ-����;^_�sA6s��|i�9��O�ȆF����H��4+���km{*�%����M<�0�^�9)V��J1i�}����knm��_��ܭRqq����H�g�zuvM���gƿ��=���-x�
�g�n�_���j^(��u#�7���2�[��66Q�,-��v�v��ƪ��<��r�����?~+־���������}��
��-��-��G�+5��CW�X��h�twz��(����cÐg�f�ҿfoڗ�w�X�����3o&��G7z�ޟ�i�jwR��q,�����%\Gn�)w`X�
Aa�
X:N)�qQ�%w��o�Kݟ�VU��x�ݧ-d��;h��~V�|�q�����AS�����_�S�
_Q�
���;�SES럵j��S���W�*Ȭcot`=q������l?����	k�G�|р�n��~�=@��_�3����;=�d����ӹ���������w^�ߡ�S��?�~|�S?k�o�k�����)��źn�'�~���E���H���5l��:��3���]�U��BB��;c����q�
�$W�g�
y�{�Ӽ7�(���v�4V� ռi�G�|N��xrC���P~m�k���2�����xs����=`�'+���_��g������1vjE��m����[�?��x�[�n��x�ĺ�޵�꺎��j��Iq{�����ڎ�w<������yg�ً����~�5���D�4ۭc�#�t�C�,c2�j�ƭw���Z�9�{����$�,��	5�������ןn���������6���?�SO�Z������O�~��mYe�I�c��H��|�L�|K���BwI������T���*IZ�PN)++�)+���k����Ȱ�x�\�s�U]��k��ݴ�?��
�&o���-��c�/��>	�����]�-umH׮o$�}�Y/�Y��:^�����j��Ե}T]��ę���-��ߥ_��?�L��~��ֹ�(�4���ei�_i#�>'���,�]���n�$C8�6*��@�ԭŕIdA �����L`}	�=�����8������q�E���T�UX�˚6�I$��4�mg���(���F��x�fҽ�W���_}��
���5�U�
�����]-���~��M����oyI�����_h��D���/^;QcTK�.4�N8��QG�\�'��O��^���_�uO�K���Om�D:j��?��
�υuX��}ݷ��e#�C�V�T��K��Q���7L�B7Ź�d�:����G������ڸK6��e4�Ui֧h�OW-�׭�]���<�/��:tauJ^��o����޻����
�x�
k��
�k�
?�÷����:������k��u=P<��g�;Mŗ���v�X�k�@�
P���~
�ld�'$��dq��
�o�<a��?���}��$:��|]�i�B�T�^xwZ���J0Q��5
Wb	�5��
�kg�'�ß�v,�~;�G�<[l�w���:���`p@[�ӎs_�����,U\R^�56�W~��
s>����Z�&�O[ﵕ��w����<q���z�>���9�:�=?��R`��֐�9>�~����>�������%��
t}�b��KV�����$(!y$eH�K���UQ0����B�I�� ��
9��9�
���G�!�$|�4����2��:M�:g������%����x?uō����j�r��D��y�
�S-�
b/��o��
��a���<��F�%��C���.!k=sœ*I���7���v��`����Q�U-�iS���5���qq<�Mq=Į�\M+��i]�<��+fr�X��ƿN�N�Rq��4߲��E5�-&�k�v�����l�4԰4j{�MTqzF�=������d�81�=�I=��pۉ¯�W��A�
����#��_����u�x����5�k@�И��í3I����u�1RD��Bڝ���>S�X�P\w4����
�
�
�+���><���4;�����ze��Vnt߈�<�+}�x&�c��ґm�_����gh��w"��w��ig�迱~�eV��Gǰ�Y�m���H�8�TUQk
"!cD
���LF}Mf�2�.w^��^NenU�D�������:YEIe�q���U�.�{��]ZK�w���l(
����k������=��X?��
�{��/��
�W�
Q��8��~��
��p��
����x����<��zq�O��/�qw{���/�i/��9�����޴}������J>P�v�~�1�
׫@���g����V=<|��w7��
�zU�)�9�Nzq�j�h�k�z��{i���~��P�_�[v��=�� ��IY�X�����=�=��:���
�=}Fi�ӡ������tm/��^~~�[�n�	==�}�ɨ�r>����}*_ç=q�����@�s���z{}h�n�z��^��֖���g��᎝�?ƀ�=���$t�<��s�_���#�l_ࠟ4�k�e��m��	�	RRQ�6�w���mF�\jK�
�#b�'5��9��lu
���`������������k�g]��+�>:���w�/�G�a���U�c�O���ڍ������$1GqD�}?�x\���om-d����量�x�C�bs,$(��wk��-�of����(�0�s�<��d���8�2[�9�F=�nz��+���_�}�b�9[�ߴ'ĝ&l�Ǯ����L�Y���3�8��k�o�
�����W�/���Y ��/h��̼�̗LMN=��;b#$�N~�G�2��Σ��ս-{yu���3���(��5���=�=��*��3錌�
��x�~�����7������H��A�L�]3ŗ�rɝ���Y���|�i ��+��
�࢞<���s���'�̊O+n5{i�T
F��I W�K��ʖ_[���9r��V�
�L��A�S���qWIi���~��L�����z~\�
H��5��?bo���x��e�ۧ��2�N�|M}h�-��7O���
�&d d1ʚ���^�G��[_xw]��ۖ�k�>��\9BC�Q����������G��8�5�NM�%$�F�룿����XUz�j�����K�����a�F??����R��g��X��b
\|��)�@Nsߌ�s�f���
�k~�s~�_��o�76�M�;Xx�ǒ����|*��W0JHأU���M@H�]�Pp����b'nXS���d��������ӋNsKE��7�n�����1�
���S�g��~iڞ��^7��i�o��%�w�!�;�7K���f�l��w?��y�a����>����"�������$������Q#��(�0�(APJԟ������ֿ�sK�b�Wn��^���쟭�~�����Z4�]�쯵����#$���
�u����9s��=zs��s�֟�?�<{{Δg���¸��՚J�[|Šw�׿���M��^��
���
^�/��/��������E�Ϧ�{�
����_�7#N}g�������-|�����6��q�y3��1_��_�f?���N�c�*��o����jRi%�o��
�!~�ߎ���~5��~�7��g��-_�
�`�����$'��������k���6�Q'�����t��$�y����_s�����])���
��\j��aӺ����V���Ɓ������
/��
��?^����p1�l�
�k�o�'�-������~w��
�O�|.�N:����
����S[�-��
��?)��R^vz>���<�k�پ5�d���5�kV��8��q_��ށ��M���P���3���_��_���2GB2A����P�9��O־s�~*+�R���;p;T�k?�/�Њ�(��;(���#�ק=;A���0�c�)�=Њ�{���7�V���VC&�<�r�$�~_7
q��]r^|����
<�#�(�'߃�=�W[\�����G��$�(�{-���
���eQX�K��敼�O�i�{�QP�
��z��
���(�ES������
)p~����ӽ �(��K�m��v%��AETJVnۯ/O?��<�aEVo_����
��)�
_����(�EQ�[�rV�N�j�_Ӧ���3�z`�β��B-.������8�H��)���i��O#���,�pn	���瓃��=[P�T�yI";aLp��.�	`�CP
�4��E�V�W����͊�����m,�����B��=į<��$;������H�=�1QQEv�<����i�O�>~�����]��ۦ�Yt
(����M������{y��j�Z�j�KM�>�ER���N����
��%�][��_��QE�����?�LRQ�(.)n�
����aEPL�}6�
$��P��(R���KQ�����F:�@{�<P'{{��o�F9����Ͽ�\��<q�����g�u��O\�_��;��wOyu1`���k�X�8X�����>����x��-?A������u!��V$��g�1��ȋ�7̇�)�Jx����ι���XxSN�h<�%���KӋ7�y<*DW��
�w�땅
Ċ���=�'�c(�_0�}Z�֍%y�ڨ��u{Z����:����*��ù}H<��ړ���н���/�*�Og�_�O�*��\]�_tX�M63,�?��s�^*��=���Kk<��鮦*Ad���K�_~&�C�����;�7����/uk�f��%`��D��<E"��
�ط�;��r0@�@y'��h��c9=��
��w�%g�s����W��ɮZTg*t�M%�Wv�����<4��/��˸{.�zp���1t)���Q�R���M��e���-�g' �0N2O �ŉ'��
��Dc�n�����g�d��?�$k�|� 9>�w#�n}���#��2�q����};�:f�NU�i�����r�zY�;�����c�zQ���h���%og�암b���߫FΗ�j���P�5mSE����y��Z}�n0r��ʒd�uls�9����D>,�3���~$\�|M�c�Er����
�M�@YQ�ӵB�K��I?e��$�͡f��>���d�F��~�����r�^x���^/�rLU:�l}{BI�S��	j�+�oM_��	�xyǙV+/��U�J�B�*x�S��jS�N
��+5�YuV��s�9����^�|o�]b_C��3����3���ę�/�X��	QXgz"dy;u�NݽG~x�Ƿ_~?�Oس���~|S�l����ߌ�m4O��)6�r\J��� ��}>iWϑ6�,�9s�6_�`2:�*0t�Q�D9V��*��?)����c�/�x�1�4��h~�E�{�+T���Z���k�A�Fx��_����ϊ�si�ʱ����ZTg�������ml���s����
�ik�O�`��(
��(
��(
��(
��(
��(
��(
�I��
O^�S�r���52�_�Ԩ�Q�
��O����N�}����:WI\ׅ�4{v�8�
������]-~}���+���?X�o�7nK����
�!a����{���M��s��<s�~�~��;��W%�2rq��9=
�z��֤n��G���ӹ�y/�/�
��~|A���?Y�м���Z����F�DM��6�H����~�{pa���F�nn����"��*U+U�(A�S�b����ַ�v��R��F�ݢ�}4Z�������]�
�K��[�/���
�z����h�7Q���-�ʮ�����?�x��lcq=���s�
b�0o...���,?�Pn���]��V.�X�wf����1f��ZL�����
���������Q�K���ssu%զ��^�4�I����4>�m#iql���|����R����JO��?�Q���_,�/S�փui�ߌ�$�cм����v"�
��%�F���D��S������_C�򨹸ӭ:2�Zr�mmd�}m��۾�
�渪��c*t��j\�m��ֶ�d����?��
�6+�	�i�_������k�ѷ�~ [�h?mu+U����h5�F�G�$�m�q��J�Γ�%�Nb��?�O�r���R�ۙ��	�L|K�A�:��c��e����/�|ᯇ�߀|��h^�����{@�, ���NҴ�8�l�m�R4�xc���r=O�*�
�T�/��������&M�ˬ�+��י�Y��s|mU+�ZSKnNkG���H��p�a)�g9�g���ջt����|0��0��q�RϠ�E����*�
�/?b����6��w�v8ǩ'��M�O���7#�]���:�
Z��#�l�
�`��)�?���`z�
��y�$�k?���T��;i������V�85�b�?�[_%}�����b��u�w��sӒH>�f��_����q���)��"�t���7�+�+r���R��׵�E�"6����<�Q�}���k�(wp�󁞝�N	�{q�Z�
�qm����W?�Y%ݍ:�ᕔA����-��w n�`
��r+�?�ϛ)?�%��w������������ݗ�d�������:#ߑ���8�����=�Ϗ�lψr�k�7��l�8�KP��r�q���}�+�n�	���
"�u���{��	������m:�~��������=���V���ڋƤ���% rǿ5��Tt�|D�~�b�-�Sv۫G�p�a,ƌZVS�O�o�j�/���9���C���}���������ڙ_ΏYI����]ӿ�[~G�ݭ����ˏ�-����[�
���4��D�?�z����4�OL��o(�X7�T�A�O�i�%������q���=pk�v�
૩��M��.Q�xܶ}#��F�p8NQ�95�C�
b����23��ӯ���7�����b�kG���z�Y��qrKJ�{in]��
�In�%��7�{����9�ӭ�W���2x��	����v2Oy�:|4�i�Z]?���s��6��������(��AP2{|�9>���=��h����T�
�[~ıH
e�����/O��T�=�|K��=4�ҿ�-�]U��ׄu��M;t�;���
����͍���v8���Ƕ3_.~�ߵg�/ط�v���B�W�����tK��-<H�n��*�O������[P0��e���0��雙����g����	n��$�od�Y�o�4DVff*�A���
4��8C�
�/���D����#���l���i�sY�˧������+C}��	4����$q��Q|��0����:��6�e��潫��)��K��:�W��1�a�7/޸�Ǽ������Mu?�kړ�w��@�F���,jS�x��������<�>�bw�C𮌳��3H�[D�I"�p�I;g��1|H���
h��?����.�Q��Vz[^�Oi��J��&�T�Zn���ٚFA)�-�-$���9��+kx����X������3��(�3I,��#E$��M����
�?�_��hO�����;�������_��1�ޛ��|������=����L]bj��7�p�;�J0Q��O��!�r��imw��k�Jߜ��Zپ9�i�JJueo5t�ek=����o� �ʟ?b��������L�����`����_���7G� �>�*"��O\��{뉜U�;t�1*$��w�n�
c�7}�<{ \�5���N�����o,H���
��9�H~\}ɯ���$뿱r���w�l�Yf���1���F+��V�q<D�*��UΣz5~�7{F�k��~�����'N	F1��������[����ŸV�0FH��9�>��N��g�
��
�Z?f5�8��$g�Z�b��<���C&{���O���_��o�v��V��x��y�!�����{�,K���r
<�������#��_b��j�ޗ鵮~i����5��Z-%v�iz�]����
R]�zt+���c�A���~Y*0
�����C�(%���=A�c-�88�:rMIϧ'�rG8���^:��_��S�i���V��i���$֯Uk�t��ۢ����V �~�Ol#���L9�׌�
��
^�T�=����S
�矧�ڠ������$P:��z�z�rs�B���Oǁ�A���������zR���^����]<����>1���H���3��r:q�����4�)���;��?�drNAҟPd��O�n�(b��q��~?
�P��NG8��'�y��
�Ms����oƁ�ٯ_/�T�*�#�s����ΐ����y��ԏ��
��??Ҙ���;z�
���������
��l�K�m��v�艏��ݜg� n�9��8��O^Ks�A�@��/��;�
���.q�֢���p	
���}}):��kK��K5�^�,$���׻�_�~o���mo�0�HS�8۝��py�b�
��t�~�_~h�����	ͮx�[hm����ŲF�gu4jfO'M���3|�v@@j��5�V�C�5�r��-4}:�S�b@	�o%��K��|����h����k����������c񯎵�KLy
�op�Z
s� ҭ��TT�H$��a��1.��'
KW{��im�߽ό����}��=^T��7��f�3�p�I�B�g��޸��Ӝc�&�
�wf��G�ߴǈ�Ƿ�~-j_��x0�E�a�W�����A*	#�Y���f\$�a	��+��|�_��j�����G����~ x�E𶞱#�"�V���[�%a��I.g����NG�e��a�߂�
>�$�m��
���|-�"aL��vQ[Kq1
n���7��L)yev��}���KZɫm�V��ӽ�g���k��x�ۖ����[mo/U���^�c=��r3����*����q�zqH���O�L~����'��
n��;�>�
�׿���J��{m���(����v�>�ט�)���=q���'��<v˩����?�C������[[�v��o?��f�����d��i�ܟ��o�
_5�;t{'^do�u���՟1�2?�o��>���z��Z������{ִ���6��O�M��QVO��Z����O23�G����};�3�O=��Z��Ẽױ���D-�?�
�w>;d�c��Oo�˜������C�_s���uR��t�rL�~4ma�������������
��G$��/
w�A��?��k��}��W���>�~�Q����
5Rk��~��W��k��.�g�u����Z_�m�s�oؒ3/��3�1�|e�1�jз����R�{?Z�
<�m���?f3��/?������C���
���V'����$���ݸ==9z߾�^�^v���n�p�(��U�K[��
��QL����=���?��k����Q5{>�����C�����s�_�X����x��]�q>��������G�ֻj���_����X'zK�5��k~��(���w���ן��(����(��(�Ko]m�??[�
RA���7C�4���e�/�E�h�����
�Ke肊(����aER
��*ܴI]Y/ӳ�ET�ׯ��~k��*���v6�\�x�	���
�$rX�׾{�G�Iz?��
ח���[g7�Gˍ4�\o��� �b�2'�͓�{�ǚ�Ig��Y'����X�=2NS�
��Tu�ӲV�]-�Z����MgR��ַ�Kk���;QE]�ӵ���m]����z=N{�omw��ok/�;�tQEV�5��
���k���[۾���QE1QI�i����}TS�~zy�ï�p��)���V�����QE����Wv�����0��(��O��
io?����
!�g����T���$t�Ƿ=���9�0$q�9��i�����ӿ$��0>��Z�;_~���뿚����);7(�������
���V����|�/�Iq���<�:�͞�g0R�a��kˉ#9V6�y#��UnH���rs׿^n���
���sj�
�/�m�tZ��M�7n���u�v]�W�`��O�󃎝�<�����3j��f1��&��N)��8论��mu��o�
�&���|�_�т�f�7����)խ�|�����_�'����h-m-�����k[[X�[����X���Y��8�Ufgp �/���	yc��:��?꺲����|;z�lJ�"��r���yֺD�ڸd��;>d�
�s�3J��)�O���ym�-V�-�3��K�ۛ{;�F]�Z��!$|�GɇEe��Z@�28�$w��s���>p[��g�����jF��R|�O�z�+��ߦ��8?6���'���9`i�s}	8be��P�Fw��R��g�KDϘ�����\ѬM��'�;�uP��m=j��B�˨j�w{#���rX�$�s_;�g�
�^~����߇:}������M�|/{|�{��u\�Oe=�����
`���9 )�wo��n�
�}�F��p	�2Fx�^��y�3ׯ��C��a*ag�a9%M�5F
Q����k}����ɼl�)�!�����xVU����R$��8NN2�٧t����C�{���|q�_�?��ӼW�Y�imݤ��m:�!>��iWL���?Q�+4sF��M�Ẕ���r',H�^{G��5���
p�啿�~
��8�o�Ok���v�f�ү��mc���S�~V	
$l�
�%���d��x�p@#�=y���4�)d\G���ҝ)�SM+���IZ�4�v�����b�F�χx�MG_��_IV��'4�I�eٻ]�;a�i�Я9<�$�d�?���OƓx�
�z�W�K�Z��_�i��w���EĎrI�Sf%b�1ic��b�v<�1��������9���2ǅ�䀞"�_��
˳�+"?(���s����i��2rt�aܤ��4kE���
����A��.#�2,���͕*R��q�Oߍ�ݽ��k�}�E�������
���
���ES
��(
��(
��(
��(
��(
��(
�?O��}1��
~'�3I��ٕ�7ۙ~g�x`�ka���?���t�ϥr�?�'�>��8���olv��Q_�f�u�i>�Z-l~���
����;O�K���
������x�y�3�j��2U�'
�#?O��
�s����F���	�w���?n��Ϗ:��r~˭��n4oK<2�W6�IS�audM^]>ݱ>�r���
(��<G�+���
ǯ[�q�5��
���x��"�t�Na�<zU��b$,�e�\lv#��|C�Mwź����jך��|M�������-����j�2^_�^]L�$�7R�,�#3f'����c�3��9�#IA�[�K;�{/M�>g��Ia�B�$��Eŷ�q�߲����ܧ�����Z�5����Z�Z��<�Ww$p[A`���+�Eh]؅PK
��O�
߲��d-
���Tq|}��o�������'��1wi��w��&�~��z�H���ƣ)R�5_�q��~=i��G�O��5���q��]��.���j��״�m#P�N"��t���u��:[��V���G	�O������+���
�:�[�_��P���R�-�������)�fx�+��U)�Q�ZW�Moe���
S�~�Rx�MOy;�:+5k��������K��G���NF={�8�
"��*l�o�(���[�����z����|���85�-���?���:��
g=��
��>�J>��X��pF	#�?�����Q�����~5�M�ſ|_�x�đh�\[iq�����c����6�|�����D\+J������)�թ��#
�ӖWz4��[�
�j�_g\u*Q��)A�v����6�yy�͈%c�)~�#��_�G«�
���v�6~�X���$�G9Rv���d��uu��
��������������
�ῄ>�7���#x7��4x4/
�gB����[�Egm)њ�ƅ����I	's^�dU���Q�>�JM�7�-�
��<�̨eէ:��K��J����K�ָ|�8����xc�
���9錃_���
#h3��W�sOE��-����Ķ��m/NiU�e��XΛ��Ѱ����
�g�
jo������
h����
|_�w�^�ۦh����o/4}���e��o�,��|������%���
��>��ۿ������;?�_����ƫ�oj6��K�a�i�	%�W'�^>�psʳ��U������ٻuz;���G�qe��a��u%en��Ku{�?�p����9������#�
���_��~fk��wýl'96�ZN�j[�d
d`�������1�g����ҿ���4{�Ο������A�]$?�i^%Э�'�/��$Z�q�@yb��ᔅ��8��6�~��4�L��/�&����]^���>G"��>��⼕�|�[�?�� �o�G��T�01��I�s�9�G�=j%�'�׹8���9
zc�+��j\��ꯦ�yi��w?aJ�{Zz��z�����G��|�
���5��I7�=oCW$/�@��=��i./cE
�����KʻFx1�i����� ��
I��:;㭟��&�����]{����
�2�в��xr���^�H��>���P
����.ͤǗf$�K����c�H��Z��Ú��կ4�jϖ=4V��~�̸��'��5f���6�=��
�����9���9�b=���
_��&w�e�{�~��Si?���X����xr��H�q��]0�x ����L�S��U���;����
�k�g���#��:�-$�>(���
��v�����Tf��Ξ�嗃�%�	��6����XĜ$v�E���(�u�@���x�������NnJ���]5kױ��4�*��ߺ���~�?�m���
4~��8��d�	��]s{�x�����|%y�9�>�>�ii/�R�d+4Z��m�E��O�9.eR!���O'q,�ı$�<�͖$�$��	5����mh��A'���$��H�<$�L���px
�+�tG�O�c>��{\��O)�YF*U���ծ����[l六��4���c����MuZ�k��U~�?����~�c���R����
�z�(��톷e����Jqs��
j__�ڬ/��j�wwf���^Lp�������
���q����G��h�Ku��1N��)Zm��;E
,A@Q�F
��z����u��jtd��=;۷a�W��4�7�\��U�����׭��b�q�d��t���޺��b��
�w�Ɲ�i����s���������p[������{b��
�?�WO�?�U�7?�x#�r|%�_�I�����>�5��y��&�T)��. �4Q������KeJ���:q�׿n=�ь��#���H�s��_��>_�X�5Z�w�������7k-�K��+;�qTeF�YJ��wZl�׷�R�>��=>��'�=�s^��>����0�[����
�>#_
�F�M��ׇu���ԅ����3���g��=�ĉ�� g�x�9���ެ&�2@��
s�>�s�󯡯N�Zr�X�Pi'k�ѧ�N�/$y4jօHΜ�\Zpi�uk[g��->G�'����V=Ud�~�:���t��W��j��m@�H�G^5������u�����
��W�>����c�oj�������7F�5+�$X�%��"�ic�gon-�	�����0�F�;�������+���
b����߲�>U����T3��q������g�_P?��4���BS���;;�6����S��c1���2��cs'}ַj����}E����8���u��E/ܨ#��#�}s�JA�_�����ˏ���}�}�Q��
?翵8�烞��z/�<r(;��<�_Ҁ$�8��
?�F�ݞ?����d=�����D��8?�������	�0q�o��S�-����n(Ǯ?��}�h'?N�����}�
�Ԕ�[�{�
L����
�׾i�g�9ǯ˧~��h��}���
���AV*���%}�0S�I��4һH�u�������WO�M������]}�Ğ8���φ|�|���<VZ�{�
���V�N�p@%r��nF+�9 ��~�q�\�@�:pk�~�
��~<.���
���Ɨ{��7R���h����j�3A��+`lྐྵ��,.�u\�5��2�rwy9�=O^	�Ns������U���K��Ymkߧ��G�W���b��w�'ik��E{-�Ӧݏ����������~����o�"��|)$����>%��������F���O29�;W���W�-'�s�y���I�{��>�
�@���F��3��
�������c\׼m��w��>1:���o�+G-��o`l���p�}2{2���h.'����^�~`b��1����8�҄�M�%t��O�+�����=*yd)�JJ�I�{+&����
����^�N��.�RO�l����?Ζ��O�����
=��K�/����{|����A����
��D�3�������511��z�)�y�9ϯ_A�o��(�_�~=Ta��;�끌q�����R��zw����6y����p8��N3I�t������*);�։v���������Z�gi������
�|��PH
��z;����X�|��=��c�-߯=�
¿'�l���O����i���k����
�ҕҵ�i���m���#t?Bk����s��a�ƾ #>��s��@��Dn�R;��������K�S���#0�w��@3��p?�לw����
��>��S���~^g�q�n��u]�*��
S�ώ����n��[�r~���G�
�5�}��Ň� 7���P�>Ӗ���_c��:`~$c?������g(���yY_�?(��Q��鮪������T�±��
mق5�?��D��R
�A���}����_�������d��\u��r�?����u?S���8��ا�K����w�~>����(��n�~�֟3�(������#��-5��s�?���
*R�y����
M7�8�W�v������
-����Fy�ι(W&����\{��ON�뫎o��M������<mIy��[}�EW<�w��;�[/����
(���(�n���
��*��ɿ��n����{H������2_��R`�����p=qןs-F���=�Aӏ��IW'gD�[w��@�_�o7�uaET
QE
QE��i����k`(��@����^H�$�D�
p����s�2J����k��U�frČ�8�Ӟ9>����ח���䐹�x<�2s�M����u�Z'����������r���۶�.�o�A�qߟ��~ih��,�
�Ң՚z��4}w��],xm������]�Vz0��+BB�(��(��(��wWN��-�����Bݔl������{�QEh@QE
QE
��G�4Dx�6���{�}�d�qҖ���L�	#�x>���
�����[+?]<�]b�%E�줶�j��|����
i��[�5
5Ν�K�ڥpntq�=��
���qھ);I�I=�G-�<����9�@_����#ⶓ��>*�|8����/�
lC}<�f�qx�W�QY�R�Y-/V�h��c�l�9��x�	C�J�$���Ş,�³��QY�WOf%I+�j{����
_�<I�Wf�K�b��)}W��Xԩ;{��kD��F�w���
d<%�Y�S��p�]���f�vU#.�a�V��(��5�"����
��&n�c���6zu��q�O�U��@7�� �"�
,�i.%�\�!�O���~#���w��k�߆�w���v��Y�/Í*�����5;��{[�FG�I`�u���m���Z�Ge
)���!��#�:���$��N�����5��l�v:P�X�Դq��Ҿ��?#���J������u8�"�Ⱈ5�����r�u%�֩�.��u����q�>ޞ��዁�cp�8%����Oc�Q�i��{p3ס�q��=};��k�
ڻH���'&���m�|V��ˠi��a�[�3�R Ĥv���[JڧQ�hM�A�f�,����*8j4�9^IJN�э��m�$��.��������dx*��V2�(�J2�)�R����+BWm������*��3Ɵ�3�m"�+�o����"��u�"���:��lm��p�K;F�Ld̢��8�ǧ�O�jj����j:���_\jZ��{q�jZ�ԏ-���w+�uw4�K4�H�Ibq�aq�W$w�q��l^2q������(��癆d��k�~�=d���;���l�O����Oß��\�n���F�z�J�Zki���L��v�,��"�K1e*�X�(�O`s��o�7x~|�k���=ݏ��˝R6]�u]N�/�# �;������
�7+_��
���y�����j�[��?���|E<�Z�R��\i^F!D�w4i=�LGc��h�JO�
p���.

c��
�s_о��|��i�n�%,/2��=��+������m��\�bcW�.U������"iS�J\��t��'��Z_Q�����B������/�o�ۥ�����m���f�m�������QE|��?��QI��j�
��QE!
�ۧ��
?�&�q]�v��z�h���
(��
(��
(���95�m� jR21�QJ�&:���
Ͽ�霛��I�}��y?�mu���O.�=7���$��
G�
ѹ���P9��q�[rK�����+��z�.������Z��p�
�_��
5�N5��O=>���S7Cߧ��
���FFA���ڸ��z�gzvi���?�!�
�S����P]���oF	��'8����rUG\*�ǿ��q�3�k��i������W�+�7���Z-^o����à�r�ڳ���Q�
A��Ym'� C*)&-�F��D�����%e��$�O��D �����|��$9�q��V�ֿA��%�dT��E�k%$����'��]���� �kfuiʕ��i��ͽ����
6�S������l�����lMᐣ��u랙 �;���
P�/���
�Jiq"��=k:�L~�V��㛖ls�	�8���u�i�
�o�
�sK��~�z��!�|E����n�f�:78�����cS�,���Ĺn����c��ع;*�]m�K��ß�2
���_�:����Ӟ��
�C�b��L�
�'�
�.th���	/A�Uۭh0j�KF���Kn �'p�Cg��[�.��xc�������Lм=��F��i�1�:v����W�����r"����+[h�>\1"g�׹��GC<�HR���v��V������<��"�e*�S�2i&��5��k~���s��'�2G�ϥO�j�T��#�w%�$pA8�AI���#���#�\�=���+�T�
�����[�'?�m�8�|)�����j:��n~�F�]���f���P�'���o.&���,�2H��H�{���U�5V�PQ�v髷��
��'ʿ�+ʔj{;G����-��vN�3�g�!I�
ᙿj�1KK��MI�+��	���5?ȫ�w��v�u��Ǩ�J���~�:�������I-|Y<1����`�F��m����|Ko�����4�(Vj��4O�{�����{@�tk�I��]*�I�i#A<��An��F<�wR�ڸW�|~�)���/���?,���|��7Z��G0A��Ko��l���Z�I>W���)��G��3��<�9�N���j�6���=^�}�*e_��M�ʜ+��E[�WJ��?�dT�w����9�����
���C�~��i��}V
x���O���I�O��i*�U���O�]Mq�}��=V��{��	��ڿ�Ŀ�w�����8�T��ּ��4cˑ4�x6�F��,�f�������F��w�yap��X��066����:��9����k���_h�zui���6�I�mv��������ԩM���җG������b��?i���
���_�f��}��&�k|$�/ �R��&�&�мG�$�w�k�\�����|���R2ŶG��������x�H��=cq��z�5]'KӬ-#3O=����[��Hꄎz���|+���6|�mK������^	�N��I!R�|�Ӯ�\�	�,۲I�_�c����><���d���3�I�#����|E�����T��`���d��9�~e_�|D���O���i��+�������}�>3ì-�BJ�I+��ײ�O���/���E�
����zn���k���
�5����������R��>-�v��od��Ӵ#$k4�U��e�� ��A����v���ڑ�G^��p
�Nq�=G�r+��o��U�ž��tG�4�c��xsI�{�GZֵ)�����U�٥u�HX�I$���0�'����|h&�)B��=���v��|>+[1�ʺ��+F:�+�������^ݏ�o�6��F���?�>�������/ْ�_�:��G�ѼL�f��M*W�ϴM����E��-"gJ����'*>��<xo��y��W�{�	���8�
d���!���
�ĩm�s�\�U��+�@������7�t#w�q~ڎ�Q~�?_�p\�	�08zg
�:��/��X�X�F�x�D�Օ����~��`�/�:��ZR��gmt�����Oğ�,G���*֝�"Ѿ4O��O�w�4�y���~!mn�Ű葘�9n��٭[H-�0�2π�m~0i��g��C��
m9��F;gc\3�$n�9$��Ԙc�I�q�s������$�bp�P��{��9Ƀ�l�����(�T߻�����vZ���|����ԍ���m7o��G��a�
����G����t�����f:��O�#=��?J�4��4k�6�)�������B��<��	���'p�Ǉ�U`8;�:�8�Y�0�'<�pN@�:q��:u�!b�z���w?��[K��y[��>�i'kw��u�B�r��
."���{_u�n����
�M'�L�
�s�B�����δ�|�/��w��H�)��y�;W��
��
���
�u~���;����g��i�7�_k���R�ڸ��=>�ʽ�v��ɵ�d;�`�Xm�=�Q�v����+���
��ԏ���}�C�7i��
c�����rx�_S��A�cszT����(;��=t][ӣ�-lx�A�`��uZ�((I%i-i��IuO��+�ڧ����_���B߁�

?h��)7������D�}�i�7��|'�+w��������}��^?5`��9�����~E��O=������������yk�
i�
����ߊy�� ګ.Q�g�����~��eG.�N�q�'t�N�����\��e���q�]H�V����/�N����K��'G�<��?b����X��I�

��ȋ�S�sa1l�*w������J���L��=��K��k=/J�� ���N�t�hl�ll�T��������U"�$ETU�0=�c���
!�O�{T���cq�#��9�k�����g%^�J�I��˕�^�N�����tp�0ѽ*q�i]���Z�}�����T��zgӌ���JS���oRzg?�%p�(���t�<z�cޝ�1���O�:����s�ʪ�3�N?� ��L��
����ӿz�W������������
[�����`�z������J�ώ���FI�9���_�P <��J��# �Z`O_���?}��I�s��}�U���j������
[���_�O��
�@*8�'�y��
��ӎ��UH �����i��:u�>���ޜg�
F�.p2A}{}:c9��P���������`���k���uXෂ3,�;�*"F�\�q��W�]u8 �׌}}��{�F��Xx�H�tZ>��i��N���c�[���Dtd�-�pZ6����vS�z�$޽.���m��ťxM/�����h���
���
9�(�V���k?�����ڗ�/t]���>�ÝG��r�]YXCv�X��y���0��ns�ߟ�O�o�*����_�νw�s�5������Z���ys^�u;ٙ������e�.�}�V�6���W�;�i5��B��9��ppy��Q�����b0���+(�EJ)�Ӳ�j���_������f��_�6��^7�m�K��z�O�~7�;��J�q�����:�����4S[����(VQsey�[�)�Eqm$�H�X����
�2�?n��O�a�����|_�x&k�����<M��3��,$$5��{���Ap����W<}s��C�~5��Ǿ2�[�O|B�{�-O�~1�m�h���q%��ݴ�(u�y�����P������H�y����f�o�ׂvi+�m��z�VC���kFMМ�2nֻI�[Y.�|��#��:I�Lv<g���#�O��t8�q����
�	��
L���;ox��N����>5׼2��me�k[X�xE��'��t�/6�3��	,Z)#��c��zg
g��7��r?�0����֍���k6�]������c���'FI_Uu�v�B��8玜g�;���#��t��&��׮q�t{�C�z�Ny��2I?�^}�W�q���׿���M�����������������Tt�O��W��Te�~�9_q�O�6����}���
c��5�I 
�:�O����k�o�o��P�����
��(����2I?R�}��OA[Ah��]>����Y�{t^}մ��Ց�����⿜ߌ���y�>4�'�կ08��F1={�$c��z{���|������~&�۫ތ��W��Z���
z����MZW۷�2��ixУ�Q����}���[�(K�}B�����ާ�޾����z������ݩZ��ێ?�S��BrA�;����~��Қ���>K���c�Ѽ����J���m�g��
�M'��.����>��n�.:��7�������?�������
e�y��7N跒r?�5����?S���x�MΒ}���i�
��^�
�9y4��]�z;y�J(��a������
յAEPMlt�\t���l�x�Q�����ϸ�
"�i��^�
;"��$��
��x^0�TL<ב��q���=�9�9�EY�T^N�gq;�q?^��օy���u]Wo�u�O��-(�����]{QY�Q@QM]:�5���
��(o�e�V_��X�s��#�����QI��O�;s�Ϸ�N�'��y����.��
?��ES�V���zw��e��v
(��aESV�U��
Ϫ�(��n�K��_wM�(���W�T&��s>,�X�����ݳ�pzt�'���j�F=�>�
���+������$@���#��x�ְ�Хo~���y���c&�Q��ݥ���EV�QE
QE
QE
QE�QE
QE
QE
�?�������#<Pӓ�����A��s��
����~��������
�C���O##�N��?ʘ2@1��~x=�*R��t����,`�A9��s��NqϮ
R���io奴��O�S��U��ܔR��m��_+���ڗ��ѿg/�w~)�8o�S���^�%p>ݬM���`�]?LB.�ی�.��e��x�Ğ<�6����:׈�˩.�B��g���۫���V��6���8�U�k�~|^�����_ӭ�y��$!x��FmoP
?t�RY"
	���n8�|<͂O�8=pO>��z���9�?�^.q�';���Z�8����ŵ֌�gQ�ڕ�h�d���?��
��9g�Y����N"�5,mJ� �S��:T)���xZS���=1���Py������'����
>	x����|�]=��v��Y��F���ޑ$�ڶ�2�$q�ok������#	-���s�Gx�x*5����s�\���xcM�M��u<빂K����t���rJ���ρ~��|g��i�M��w)�ǈ5?,Gq�jw!U����������E�'��b��O�����f�%g�pv�w��W�_r>��
I��ܯ�\=Z�+�1t%ԡ�ӜyUZ�6����g��߂��������
��m�cY�=NU_��Z�Ȣ�
T��F^[��!%-��DP��T'�O_\u�
==�^Fc���;d�=8
��`<�03��s��_ظ<�J�Єa����/+�S�Gϳ�ˈ�<Vm�b����EZ��V�4�*��m���D��N��E�yEPEPER����ӧ�wѫ-z�AESQE
QE
QE
Tr���
����Ө�RS$8Q�������վc����_����(��p���]%s~��E�'���>ޕ���u�
ߚ��0�
{��+���?Y��p�
��?�lz����={v�Dqۮz��z��>���Ƕs���g󦎼���	�ϵq��,:����=*0���
��
�Y�q��'�c�c�a�Jq���_ʂ��VEf���8>�>��0�{�ēVO �GCǡ����.9�����=�OLb��}����.2��n�]4��M=>��-'~~X�m�wU'�Ǳ�����'�#�@2�M�
>(ɸ/��<i�9o|���9�1_����4R
b�YI*6��8#�$�y�~j_�n�^��<m�/�>6���S�&�u?������5���BH���_N��)��fd�"������:���S~�YF��V[++��6�C�ϲ�ٝQ�h�S���V�nז���".�J8ܤ��ha���h'$�������G�����,����'±0 ��>���|'�x��
��!��x�O���7!TI�x��~�+`���Ʋ�$�G$g�5����w��
��|��W��<���:-���!�]-��C��K��{qwt�#I#��i�����^:�B�J<��rI'{>��_]t9���b':�J2�I�����oV��.�9��������i9��\������׵M���q��
���(,	瞟�
���ɯ�D��zo�j��o[|�}O2�ދm���Kݮ�������	���
�����������k��U#����"y</� +6��mJ�(Ċ�nt٘��bO6)΋���
�W��_����Y|x�#�h<)gw46_<%k/��j֨� ��_�R�4\ƢT��O��%�Xb�א��t>�@�y鞝9���4�/Z��N���_O�2�a���js�0���9beu�X#��q_a�q�3*P�eV�wNM�i�K'��1�p���5�Nov����[[E�j�C�K��6�@ۈ*�Q�	a��02q�FqM��бSsnls4`d�
���1�NN3��
a�9`������d?�^$�.ݞ��Q�q�ֺ�ݙ��x��,�͐W�8#�|=�
�n~�_
�WR���
�栎����
4��וx����ce$(�T������|7��.��k�;Gek��Nͣ��3o�%�M<�׹�^߲o�������;�w���Z�³�B����{���I�x�n�U�L[���@X�d,���?�$��g�����|^���Y�f��.,$��K��>Cx�����\���������T�E+�}���~�
�i:V�i����iv6���M�����

kD��(
*�
��Wv����'^s�����Q�5�Y��3
r�O�P�Zj��kYYi}/�c���{	��jO����Yn��;i��dG��i9���
:�i������3��U9>��
�
_��'��g�+�rnRw��o�߫�MO�v�^Im�bC�x�C��}Q߁צ=~��7ZhP���?�qܫ_���Q����
�A������P��}:�}��ES���?�q���<R��������NxV[�_���[6�ev��'��n9�#���>_�U��!��
@��<!��W��u��xSᵇ��1�x+N׾�m5�WW�T�T�����1���م�[�2��� �9����u<��=�������t�~�,mLhס�ԍ�Zm5�n���^ۑ��KEѭ�/u-o�˧M��u�_�h����c����t��(��!�+4~FDb�������23_z~�?�n��o�#���_�5�<y�i�#���;�{OY�72x�G��e���J�-n���v�Ʃ0�"&�TD����z2:c�}��l��0H��`��3^�+��\U9Q�V��eI��$��s[G��魼�y6]Fp�
1憩�kh������Ԫr@�J��~��z�z�:�zԀ`��.:�}x��_����m���W��e+�K[��=T�?���{�)�pp9��z��4I����~}G�����9�?�OZ��r1���:g�ZE\{{�
��^���袏����
X
��(
���
:(���n�u>����ӑ�P��zg�LS�|��$�����(d3�'���c��*9'w\���^�Ւ2?/_������Nrs���_O�;v��?~����O�<9��>�v��x��^!Ӯ��kEխ����>�'������<E$R2�����
�!�
V�
�I���L�5O�����
��:���{cS�j.�vn�@y'��;��_-��F0�/���Q���'��qϧz����Z.����Zփ���i����[�yaayAukum8�	a�'e�7R���=̟;�eU�������{.[����Ǐ��sJRS�,�_,����˫?�<�����NL`���� ���s�:���~��
�X�
��z�����|��t[���t��#�ՒM}�|)������\^x>Gl�xCˣ��-뵸���c��bF��=�����d���fk��hB��g�.���t��~9��u�ڲ�x;sh�N7Ѧ����[u:�x�ş�W�x��� ��)��
�Vھ����2Z_���,�I���?�d��	�/��-q_�K��*�l�i��'�����4:8�.F��I��mkY<E��^����h!��g3I5��d�a�c��N�מps�޺/
���>	����	j���/����MZҮe��4��I[{�[��&GPX�l� �qC�ͨ_�*�S�V�K~>_����\��Sr�Ҕnޗ^{^��Vr:�~�uG'�㎣#�$ �>��
��
[?ˠ�4�
�V�
�Z</�W�ZW�O�z����G���^;=/❝�{�4�� ��6�ߩ�!��X�݊�3����I��ԑ��\n����=����-�e��N�lڋoI$լ�������n��Z2�mE���i;i��Ra����s�}9\�4����
zt���SVRx�㧮?��֔�A�����럮k������z�ӣ����4ӷS����
�3�
�BԆG^md��������Ĝ���Ͽ^�
οW�|�|�� �z�ϱ�q���(�2=���Ӟ��RIy��W��M;($�g߻���&~\��?�8�
Ho��[�|e�s����|�+�8e"1߁��
�g����P��/�	�O�|H	��
!{���q�k�8?�淝(�z��:�������]?�����>U��ℐ�R��
��?������_���$L9�Q��ñ���P���k��;j���
������
�����n��|�N�ϲ�
���d���e��V�6���ME��b��V����	Ĺ���e���[I��i��9��ֿ�6�o�~:^q=���:p[M>��MQ_2w����(�ݚ���6��l
N?O׊u�i���u�dQ��؜q���g������ma$#r[���ۜG8�u����"o��Zi��[�7�3jR�����%������N
�
�=p���KA��Ep�]_��V�����<�K�~H(��İ��(
��(����(����'�޸�=;Z���wc����}��}j��A;u���z�$����
�z)'��
�<�
���֍^�립:����y�z/�@��+.�v�?��aER
��(
��
��
bs���
>�i՗��a�/|�A���^���~��5y�����3�.Zr~Zz�aq+\\M;��H͟f ����$�5Fד���W�e�����ܦ�}~���QTG��ER�����}��%����i���aES$(����4����4z�QJ���������n��Y��קO/7�`��)�QE
QE
QE
QE
�n�5� %��R�Oͼ!*
�I��:R��rO��� �$�8��Ӛ�R�H'f��-m�-��7�G��N4�,I�(�BrM]8Ƭ$��V��s��
�u��Gux��W�Ӵ��ҝB�w�I$��$�I�x��C���8�ޡ��W�|sП��)xn@�����
��v��kw�ڸ��i$!�e#�"�~Y�L�	;G9�c��緯���4�Qϱ𚔤�؋�]����]ow�

�
���x<W��/��8S�<��f�|%$��I��D~��%��>�P����-Zo�1F�s=ūhva����0����|�����N?V��ns�c;u:�W�
�G��#�|g�s�Mk�?Z�Nr�ɫi���
9��3�J�+����~��o������3��!�r�Pq��5ʣ(�-��i���v��j��WҿW	�?S�Q�U1�J�?<}�Zp�Q��F�)+��Ci
�������B?�B�(��(��(�mo�}����(�ڽw�����_6����^w
(����(��(��?1���KL
��t�ǰ������ȟʢ��q��?����
F'8<c�3�?�4�@Ov^���ܹ�Kg����M�-E�WיYo�[�z����
c[�
�Ƕ_?�J�cn����2I=q\�3��l=����]c��q�q��k�3����}�/���c-��0��#�r���G9<c�����Q��u8=����N:c�aL�#��t�
<}=�)�9�3ϩ�8����ד�G
d���
�SU������q��,�2������k�+�M^Č8���'�t�J���
�O����i������Lu���c�z�b~a�����8�#�E1�Y��k[�G���
)$�?��t��Q23�ǯN����#ޗ[Y�yi���4�{�v��
����R���}����Q�
�����_��k�����Z�~����}0{��z��Go�����鞙��p}8�ϯq�̊}��3���:����˪M}�j��~�%�.�[�^���b�����>��C��ԎA�q�t��O�����z�̟����6~��<a�K|X���ox�V�B������"j���������N�������z"��X�E3�>Ji�RVI-o���
��W,�Ҿ�v�^�u�
�\�P9A������}?���`&_����;sƟ�]���.����ӭq:��S�
��Ve��5Gh��;�狧g�Uk<��}�^��s]a+5erW������U����_�S���iv?pC���c�
�������d�~�������_س�
���@<W�O~̞9��u�
i:v��k}k�������k��;mn5{xb�ig��WK_1��]�l{�F20���^8>���V�J3p�	FIm��OT�]o��+Bt�ǚi�ҋMm����1�H� c�'�#�)GO���ǧ��)�S�����)�#�#�q�bx��������������u��U�n�
-	����
���SA�#�=�q��>�Jn�A������ӭ"u�o\w���O˷҂y]���eg�?Ĵ���
��N��sK�c�s���
�C��lz������=��ퟭ+��]��g����{��\�׌czc����J�z��c�����MFXzq�By~=��~���F�����a�I��l�@���
<}?ϵFX���q�8���4�N1�u�s��}��Қx<�Ԍq׎:v�K�/Ki�پ�譪����wgt�/�/1���rI$����zg������3��0>��==M+s�����j"#���"���1�����S�"�f��[-/d��v׵���d�W���KYi�v|��'�����x�V�W��{ශ�_�\�Mk�~"�懦�Z]юŭ��5��m�h&�UI�C庸l֯��k�H���K�x?�/��⿊tm9u}W���f��j�v��?m�������e��e�v��_��#?şkߵ���~6xCU�����z�|/M^���:w����XiN����Y.KZ�ŗ�eZ�/�4�ܷ���RI�?���K��xv;rr�prK`r9a_b�sS-������N
N��z6���z���i8b㆕8�Ҳi�򷣳m�5�{ߣ?��@#�l����c'����8�1�t皚�<�����
?������
(��
(���t����뮻w�b7�
������q��9�����)��z����K�
��;{��������`�A��:O~��8�v�I��=�9��&�G=8����2?�x��s�ש��G�۩&�s��~G�F:����2?��
[��T'��P�
�_��e����~H�}��j�uZZjZ^�i=������se{is�umsk:�SA4N�K��o0e!�ƿ���	{�"�
Z���f��^|���Q��������d�S���Iqq��ل�B��Bf`O�sF���~GLg��{�c�A�l���u������������h�
Ҵ���[WO��2E��og(o�+���o�I,���Aù�/���757�Ww�&���
+%�珝�Ln�ĵ�Q�oy5ki�i�������`ˌ��>��$c�<��8�f pH9$~m���Cڽ����oï|l�����O
�;���-K�V�=+J�LF[�7r���c�5��5��m����N9��O|�>�������up��N.3�Sq}I����ӧZ�8;�M�I+������-�����kL��umCD��kȯ��cL���Q���u��K�&�h������_�?�_�
���v��?�������L�����&�hl�߉��1���V�1��L�v����L�M�V���jV�6���]�EkgikMqwqq"��F�M+:�Q ,�@Uc���$'�oG���m���󡋿�͈��ׇu$�{o�zF�n��V�#_]�8[��U'���O�8n���\b����g�˴�Ͳե��]{��xA�~�e*��W��ںI�-���[];�
@ ���9�U��GC��"�X��#��=?<�JNr��d�����G~G���ڿ����G��Ӯ��C�������
/N�#����<��:R�g�~W����s�PA������_Ķ��/���j�L���
9�dX���1ӑ�~���� �$<ֽ�Z��~��Q�*7vM߶��cې����+������������$=;�^������@y6������
�����Ib�>�d���^�����������jY��
^�����=�f�
u�����{�켿�/�w8�+���j�\�#����|Pq������
֯�~<�����jz�/`9�x�y���
#v��k���iy_�G�sn�=��yi�����r'������9'⦜����:̍��
�����������	���{~ˮFB�L��t=iA����q_��$��S�}�x�g��z����E���e��+���^�fi���K�O�J��E�);+�z�����=
��(w����K���0s��\�g���wv��c����RI�W��ǵq��[�x���^��ڋM6�20΂Y9�- s�3�ߎO�Zi���Z��
�;����5����O��Q\�z��u�h}�z ��+5k���������QERI%k������QE@QN�������{Ms�?���)��Pæj����Ϸ�W�5bd�^��U��G��u���
�}}z��G^�q�<������4�jV���~K��W�e-���(����w�

(��Q@J��S.�1��e�dw?�S���5�W%���;e������=��
#�֏�����S��NO��u]�S���+�Z���^�������[_w��/�m?�QEFaET�$���n���
{�mj��V�ګ'ۺ_����*�
(��I�$�WV��.�N�0��(m+h�����ӭ�Gf者���}�oo��EUQE
QE
QE
QE
,M��Ͼ;�N�s�z�������R�ھ��>��M*p�e�&�ZvwMZ���������
��7��
��,����E�>�i�B�P��z&����[�����u�.�Ԓ�-�~-��������L�_@
ڧ��I�	�@2x��Z���Ľ���T9ܸ9R���g�~2�׀|5�x���Ů�����F�]�����y��p[�$�yJ�n�)�����wB���m~�7���إd�W���_�#BA�>��'l�2�y�
�"����,����%�Ͱ�b��U+EU�76���޲{���S�߀s����E���,�
�e�!������a��IF����J)h�&մ�~��6��~����~|>��#��Y�
g����rn��4�����$^rE(�ĆPs�k֘�O\�����cҿ6�
�
�K>|D֬<1��o���:[Yj�j)�xjk�*��uz�ZϦ�1#d��-�<MuW?��$I,l$�EWI����U���VJ��s�k�o6�s,��agJJ���j��W�������׊<�/�2��3*X�B�����{��-�5d���HuQ_H~VQE
QE
QE
QE
QE
QE
QE
���J(�����o�?��
յB���qQ��f_�u>��j9>����Ȥ��Ok��V�~��
uE�h�IY|����5�L��3�+|t�:z~���`xtĖ��7��q�~��9���k����Z�m�������m-�~J*�
=���>�
������5�N�
?��c�<�#@�z��{v�s��n��>�~���ĵiw;V�.��\���υ?<ci�������[k��D�ԭ�1����VL����3�U~ɟ�uW��~�
>~П�xS�ǎ�gi����O�$��.����V��w�_�j�u��-����
Bk���/ ��ʿi��9�w���o�@>��)-Y��~�Z�
�#�ϋ�M�x��>�n�=Ὥ�����mI��C�e�̀�KD�.쭤�@�m%�.�Q���,�	�S�}a$���nV��W�_u���Dx��>�TT4���+>�j�-��ճ���u�%�f��K���}�$r��=�
���
�O!�

p�+?����\ۿ���
���O�]���|7���(���^Xxk���:����5ٴo6��7��9�-�w�#Y�,
�N\?�������
`���\���������%��~����t���*�6w�h�m(��/�w���^d�l�g��"��^o	��/�?�Z`�
�H�Oj��!z��Z�rjTg��ZQ��d�ھ�j);>�^���1��j2�R*VV�K�[��k���7A�NF2��l�>��y�nƘ�N2zGPH9�݁��ҿ1�
��R߇��L���ⷈ4�|]��73xs�ö�6����H���Y��oh��{�O
4�Ƕ��ί�w�
.�
���ݞ,�|c�g����mG���g����K�v�M2YN�%���Q�
5Kۋː�!˜�x>�c��7;I5un�Oew��u�3<>J1|Ҳ�������������
NE
�O8��ی�������G�����@|]Ѯ�l�χ?�!��C���9��t
�z��,�O�n#MF�ؼ
ʁ�`C�����	K�
�Ҟ���٫�
z�5�W�<I�d������s�/�_�^�2���;hm ������Y�mu-Y�縸�H����
%|$�
���I������/��
��~
���m�ß4��&{��I�صm�v��!���qyi�\�xa��s�8j�J�&P�s���(�x��n�}ｼ�?�����t��ݷ��K�=����
��b�n/۳�
��*������ù~��
ċ��zG�-�Z�G]:駴Aq7��\����2fT����28܅H��=H ����
 ��e���
j�H�[�$j�z'�;����m�gw��?úzڶ��� ��;���嶍�R9�ӹ��I����
�0�����'�l/�x���
�Y�KR��w�
��g�Ǧ�.��,w1�wV��,J*A+��+*�<Y���4�΃����V�5��]mm�ӷI���ʢ�4�ږ�,ݭ��o����K�����ӿ�~<�l�`�����
����
k�%������?>/�_�h������]Fd��Ỷ��a9�m��	`�%iJ���+�U
���Ͽ�|��e���7�I���
�w�������G�~�+㲺��3IFթ����J�;����-l{����u��;o�V��kk���~�����L�)���_i��>)�7Z5��5k�-;M��M����6v��ѕ�d&&���c��z��
�D�00D�?l���ёȰ�s���A
g���'��u���	��R�G�8����ў5е��gឿ�j�Əᦲ�ڻ��H�4���jS�Y��-�e��īw�0��>��
l���v�K����
�K��,-��M�v]�'�uiב�b>FNF9�o8��T���B
�5Y*q�H��W��������	<L��:��/=�������s��#��U�
�\�P���V��e�u�&x7E��XZxA�8�<�>�s|n��jf�;���=�8�Ջ08_�O�ߴ��_�o��
h���W��%ǫx�X��E��)t��`�U���d
�-,a��e,D�r?f��I���f_�_��^��>����������]ZK|�_���i4�A�g�5�1e���)�
�����
�
૟�P��
�cPյ�W�������"�_�=H�:���m ���Sx�����$W>\�=���Q|N.��bk��O��+{Y�
-�k��w��Z3�kbi唩Ӥ�sI�_^�^���Z�c�h��
��?���Z��ⷎ�&��B�|Z�g!����;�l�eaq��˩+�����iO�?�G��>$~Ͽ|#�S��G�mc�����H�'��m�qu�_�91�iy3� 
�9�8~!�
�����s\�G��h}w_��<;�K����X[�>���;I/n�9�`f1$�������uYd�S(??�����ؗ�
���3�:������t��
�=��ik}��K��[�ſr����C$1����Z�	�����ᬾ�
��Vu*R���ko};��9����Ղ�Sq����W��5~�O�?���
�
������/��
͡�A�U߄t%�f��x����.�!��[��٭�dYQ�s�tPٮ�	��
?���ॺG�{����:���o���Htig��%��{d�zA{�E:s����S$AA%��?������.�FD_�U,%�e�}D`t�����&���Ů>E���Y��9�|3� ݇C��'������㤤��n�_�$��}ӷm��cUft�E�	��׶���M�O�?���)��S���L�
������x��&���:È4OjZv��[�k:/���ԞmIZ�K{x�<�<
�#��21���v�
�W�
�d>�
�Q�U����E�������-f����Α�ŭ'�o��(m���r�5��<��$��x�4�v�
��H$�
�s�>n��Ox�7x7�4g� |�s�z�t��*����d�Ǆ~)#�V�9l�c��^�xl�<��'օIEk{�ֶ�u׮���U�e4%�MFZ�k[��C�
#�
0�~�_��ƿ�W�߳����k�O��k�|F�M��.�h�!���m�;,�e�Yk��Bs#ٳ��E�����
�7���1�П����x�᷌�<!��
���&�?�)�mj�d�z���mQn���W��/�iv��
h��if��O�
��c�ٿ¿�׈�i��"�_�>9�������_�:V���|P����鲮�� 2ί�����hIR�)_�JO�'?�?�?���<I�<��
x��g��yچ��HuK,�hv��f׵�۸�,��}��1=��g��M�`2����MZr��j3oD���u�t�[�n/���2��IB�VR릷��zۡ�������5�
��|�G�c᷃"����x�O��{��l�3#j���=d&��Ŧ�
Ff@�aM~��
�?���o��>1xKC���
xs���F�?
��¶�v���gqwy��E��jf�x���)�d	�O����C/�c�x�
�e�j���O�����
���<e�x��Y�5?�I��:u��k�=��Wjz}��RZ������KZ�
�
�i/�t��+G���ݣMc��
��*�
%��.��cd䏴Y@���)�2:�e�&a�bg����A�Է�t���u���FTqx�>cF�*�5:�Z��d������
����_�?�_�/�n���K_
�>�}��k���r�u��ʳ��S�^�:����g	3���Co
4�(?���o�
N��_|k�Z~�z�~|2����\����k(�_j�kmM�t!���B��^LW�?�_�v�ǯ�o����;�Z�Ŗ��7�#��-`�H�����v�=��(��5]\�7�����̀�?�؏�&G��>���b|w�N���_����)�2�X�Ν�ize������G�"���=Q_Q������O�nn��g�%N�'�ar�f��9�RW��SJ)+i����wӘf�c'��i(���������~����/��U�V~��c��OE����> �ዝ▋i�5�x{�Zf�֚��ae&��[����Ym�L��VL�
Wٿ�i���t�f
7	f�H��a�˞�Ɍ��
pǠ���r?�G�2A�
����
���>&�'�W�����:��n��KT��4[;E�����i.�ņx��Pۍ~/�
���%��>6�O�f���
�z��Ϩq�ϡ$���W[!�%��"O���K����y���if�Xb%�){�m���wv�������N
�
?��s뎆`s�
����
�q�5s����?z������0O��V��g��'�����܊B�}}?�o���o#��==O���֐
I�=q�{z�>�\�
l���g`3�s��zg���֜�#�3��
�����!k���N��ѿM~C袊
�V�è�/��
�j����S���=.j 9��oc����
�PdHFTq�s�?�n�(�x#�����>���t�ۮ\�y��ӷ�����p=�����}��1$�y���r0zc9��9�N|�� c8�1�c�o�C�R|"���j�~/x�'L�W�G��)��k����i�$O}yt�U�d��"�7�[[D�h��b*F�(9�RQQ�m��������~����ҕZ�P�M�=,����v�9�3���k�
�,x�������M=�䪳�\0?e�t�5&�P�oeK;X丞B8�2?���(��{�G���uy�|/�W�W�'�<
�
$���<K�Q�������2[�09��i$k���'���
���W���"I�����A�{�\܏|8����}�BQ//QJ����v-�,HIg��-�����rA�N����88����3�RP���v��YAiw-�oV���x��g����i[9������}4���-��� �Nr@���
8����Z�[�uwu,v����3��8��$��#�
�;
cZ��ƽ�kL�ׅ�}G_����t�+H�,��uB�v�ⶵ����gl�EBK�#���
�R� �)7��h��wH��O��:��~�A����&KMk^-���x�$�%���l�Igig�V1a�Y�}��p�S�]Uv�I'��+��w<,�(��W�9.j�n��o����m�
�D�#l~�xs������~.j��>����%�ËIU��V�m��_���m"��J�
�D1���z��
��:�u�81��h���8
�I�ӮH�'�0y�O�9=y��ï�O�~���,D�Ԩ�\��~��ˢW��<��r��Ҍ(�&��mZ����v�EӰ��g'��
_�1�zz�Q`�29�s�g�S��
^��
?���
<Tm�=���aӜc����Եi�V�������o]B�kk��p�y��̞����r���_������
o��_����XA���z��v<����~W�p>���w��D|�Vѧ��˺�{��5ח]Z��]�	$]��o��������s����uk��~���#�"6� ���q�����x�񷋏M�%�2:g:������E}��W���V�J�����>�n��^r��O-l|����
���:���
�f?�n8��+��~=�<��Z�o���{�k��S��8��
��z���8t�4�v���?���Z߻�uu�M}~�S��&j3�������P��]\c�(�y���A�������_�_�$���e�8�����B֗����
�_��u?S���8�kE��7]v^�s�����+�4vK���

J(��`��(��Ӷ���i����6P5��
	�&En:&�[9�|����H��@P0
���8�zW��V�Oy4�>Ke
�r<��	P��8�GZ�.��\����랣�z��_��֯������p��+�z���w�֧�QEF�O�Ѯ���QE��v
��)
QE�ҵ����������ϸ�=O�ө�
W�q�H�
?��Z�o^��
W&[k�j�������
y �;��#��
g�O���=�>���?�e�I{���-�o���z ��*f�����^�(�
��(
�K����i��>y��o�]mr�-����t���H���<�E%ku���n���X��
^K�[�
]�(��V�Km5Z�?�r���0��*�iF�w�E�zj���B9��+_�^_�p��*e�����Muf��__��
_��p��+c
��(
��(
��(
��(
�?��f�iݐd������x>����T���Mǈ4MZ�@��t�MwR�I���R��V����Yi�L�wQE��I2$�W5���'�S��?�=������A����.��+�?W�ϋm���^5�̞��Xì|}�%��:�2�N�\�V�m^�K90�.��)��
��]k��%S�ݯ�������g����^�t�?��L(���4Z���
d�� 1��A�{�U�A<|�}3��=	��8��S%�����V�
���?Ŀ3��
�
��cRԼs�_�����wE��o�,�������ť-ʡ_54�Y$�]J����r�# �A瓎H�lrq���_���U�ڧ��2�k�JZL��l�T�Z��iѬ���I.4�Y����V;���NG��L�Щ�
���ێ0s�2F0+���y�O����9��Q��>EE(�r&Ҵ��k�����4|��W���a��
������?�{[{�I����]l\
�@b
.}
9�؎��q�	���'G�M[�7�84�~�k�W���s�_�\�K=Ɣ�[��Y\�y-�n͎�$�6�I$��g�W�1��^3���@G\q޿���&�
��_����
����g��G�/<]���Hkx4��
����uʍ��G�_W��<��z���x9,F��|�iE�RO��u��������<2������iE�֜~����8��������2qIA#?�y�/�+Ğ!��#��x��7�i���MW�Z�9�����ϩjwr����y�
IT8���c)�0������]�
3�\��o��٤�Q�zg��5�K�Q�
��|}o�{Q��7���G�Ο�=��|]�k�:��זu'��L�N�w<��mg������qrP��g~�?��?l�������;�O�BҮ'm+Qh�R�5�.��J��@�J5֕�Y��y�&�"�EU�(��e،4#R��d���E��K���e4ں�����.����n�(�(��(��}1����Q��z���
QE
����������
(��I��6
�������u%G'��/󩛵��������?��Q���
�-��
��s�D��?�?�A�����?��
=��g:=��n�
���D�����q���d�
��[�����g�m���MZ����u�������ǌ�c��53�ߏo|�����Ƽ7=��zz�!�x�� �߳��la�|IV�7��������ב�u�
�n'���������^�o���G���?�%�.�I"�Ӯ�;32�XGw`�Y] �qAs$����J��_
��� �9�3�WWR8���ׁ_��
�����S�i�|+��&��%Ŝ@~�dR02[�95�<+9S��h��t�ʖ���{�9��\�5E��w���
�ս�#���?�C��,g���K�5;�?�^|$�����Zi�+�G�ID�
��Б�{���}�x�/Z7x�Z��m�0���60i�pև���d�������	A#ʹ�Vr�۲�G�8(��"��?�:���������?�|E�ĩt�7\�_�Kͫ�y!Zc�Zq~�Sy�[iw��v�
��a������,/쭯k���ꚟ�<g=�t���Ko���q����i�x-�͐�I,�d�����n]Z�;Vw���7�e&��,z>��y���1t+�qt"��%QJ6{'%��%f����(�
��� j�������2��7��$6��YRM_�0�a��tް��m�Y@����r0��P�
�>�/����S��aiy㟆�o�jV�ƗZ��<a$�����p�%�{xe��+0�����j+�������I�;�7��m&�Q��)e�|��5���G�5[���j׍��`5��NєK�B�2�d��;�+���
e�
�����_�i�ψ6�"�+�]x�����E�};ƞK���M�":��΅�iB�i2O2˦��Emt.m���^*�U���7&���j�-o�V��/3�J�3�H�J��].�߾�W���/�9C�_�~�
�N�o�x��D����,����(|Y|����jQ�Am6��M�䌑 7-�c$�k�1����~#�
��C�}jI�mO������c%����
�����|�s5�;�m�|�9��(�Y����-���O
�#W/����4?[y�
��}��m[�:�1��N�M�b��5���կ����
�k���5[��
�<�*~��
��������
���G���};��i�l ̍-�ͺa��(bF�l¼(���Q�m���w��ۤ����B�z���.I$�t��Vw�k�?��5�l��R�r�g���C�,w.�Ã�.�8������S�Hڠ���
�s�;�F�
�v~�~7�
�a��V�����>��?ſ|k��_���w�Z�M?V�����\iڎ�wa��%��d�0��9j�
D��$G�"��
�����
�Gø�^�5���xb
�b]v��wU�������ZX�$�:�:�m�c�Eb6��K�*�:�����*q��2rn��'}ݚ}��:����Bt�9��kYy��+��z���21��{c��=x��?lt�d�ڂ>�~�?�Ѿ��q���{�_H7
�G9�s�ps�����̺[/����s�����1Hǰ��$�%��9���k����j�^����v鮟�}"-���I-/��˳�}7?���	��,x�����~�_�?�
���j�~��{�}?_��L�ֳ�*���vz���>�R<�s��rw/��k�
��
�7����~���i~'iY9
1+�#\��0�u�k�:�
�D&�
��~ǎ�����Y6+9A�

�
�-��	�P8$���O�p��?ը8�c��9�q�1��@�l��XZxJ�������^1Ӫۭ�_#�2��#RX�6���}5��zh����R?�Z��؛[��~K�\��x����X���[�j6Zs_^[��E=ܒ2+��!����^_�I�oM����IԼL�[�m�EhU����������o$۔ᢾ����g|g����F��$��SF�ʎ�Ցԣ�)0ef����p�U�
��
����
������W�K��~'|�ϊ�>#�Y|7�����?]��
kj3h�X�T���d��5�9V���E���$���1��O��8ӫ���)4�����}]�moלѝ��i��-RM鶫���D�_�u�'Þ�G�5{�{-#E�泫�W�RE�����quss<ҟ��
���I��RNZ��;�~�u��R��֞
������F��h��	�4�K���K�U���ӴS5���#�Fʄ5�g�?��Z��7�p���C��ž֬���+��k��"�:�|G��bv���6��,�=�'˿��6p�п�#�U�;�s���~��
��kῈ:.�w�τ2Mޭ���^�[+������m�����'����K�����Jh�6V~�<���R�9:�qI5gt���y���8Ӕ\\�V�+��}���
=[=�܉��5��n
�%���HW 4��A9
��x���^�
���L����|1%ݪꏬ|$���"7�dt�Y,�
g�歸�6C>��J��_ڿ�/�-�/����g�>i2�~��C����
@��/|C}��ݮ��Y+IIy�hڅ�ZF��Q�f
?������
8�+�Zko�??k�?f�}�|����峸�]>���E����I�7�d�[5}�E"�{NWS��q87Zꪼ����uk_�_�'O�ͨV�9Ԅh�nV�խ��������_���D|0����~͖�/�o�*��4���~����TҼ#��6�k�H�i��Z����׫ۤ�H��K��8���A?�?n'FE�_|�D�!��Q�o�3F&� �Cdg$�����Pߍ�>/��ߴO���o��@���y��ĺ��į�,2M�<C>�sg�׸�Y��tx��/c�p/�
�"�����6?��_�Vς�G��
��>|j�M�-?�íW➹e�=;ºEς4M~��V�Ķ�W�#>#Ң�7�t��[՘O2�n�Vβ��O[	]'V�SqNM��gk��7n�x��0��7ҺN�Mj���Ӿ������Hտ��Z��/ǟ��ϩ�_C�	�rH'A���
����R~լc������,3��S�p�8Ck�>�
��~��
l�'���{�s���%\|X�m�A�5}D��"�P�U��
_��4�㴊D.Ǜ'��r1"�1���O�&G��|t���u�P�%�ᧇ�q�þ�̿�xW�wZ��c��.�{ojڌ���f�`��$N�
�F,_�ѧ�chN�=���_Y+��[�#��a�TͰ��$�����٫��϶���~��jb��
����=�E�����e�>�#�������~��
g��?��W�I���.�b?��ד������_|}�E���
��
�/�:]����O��s���n�]*��W�DQA���%��ED��J�Wi�k�Z�
� �
��ࠟ�������������~�k�x�J�ot�
���5X����i�`�L��y'�ʩ)Y��L�i�#�(P˳
ukF3���;�,�����i��_��8>JrN����-��_������i��Ƌ;+��3���H�{�^G{}?Q�W��և��2z�:�qAw�fI�>W�
��
�Sf�����/�C�����|#�V���G�q��4���i�zo��;���#U���l�-�9-a� ����RMo,C����d�?�/������F���u����i�c�> ��O�ti�F_i�$H��D�@��#c�H���
��޾����ſ�)�M@���C��>��ӝݠmsA�t��7PE��GK��b�P�+�O+�2�vT��Ѡ�NN/�.eu���kkd��Ǎ�c0ً�Ђ��i��VQ[����?M�
��O�+?��G�K���'�6��ǟ�C�WZ�|	yo�x7�7�u�jA�k�H�څ������M{������I���
�~�?���%�X|T���Ix�x#�'�%s��7Z�ο�����S���i��S��sK#"�D^FO��g����k�Z���F���k�Z֋�x5�O�#���qma�gX�M7X�6��ܴZ�Cc��qIJ�S&��o�4�T�������	%2��4�U��ld�2\k6�� L��"���WB��XL+���D��n�Ӯ����mU��/�W�P�:W��]�i�e��kS���?���>��-x5x���O�tEcx�������i�k�d�\Z\�.�Ue�(#�W���z�	>�.�Xڒk�׀<)࣪��Z��|3�Yi�-�ݠK�h%XK��6��
kԫ�G'���mÙ�W���[X��s8G���\�ⶻ��?^�;�O�LGoZ���^q�
����0:�
��n��(�j� ���zc��MC�?���s�4�{7u�8ק�=n(U9����==�|c�P>���o�������QE��s�qҘ����O��3�ߎ��3���>�g���s�'ҀJ�$�Z��s����n�/l�^F3��+M�h�Yft�8�w��F� ������2s��q ��{���[��^�;�.O���
��b�Oּr�%q���;v�M���6Vd[;9S72L���ߗ帜ʴia��W~���b�V��߿m�͍�a��2���V^����}~��~��ޟ�R?��ǃ�jV�)���XK'�~�W�&��L������?0��4R��wsy�x�b�\��?k��?��.�
�/��\^7�<~����im)x��M2�P��_�\���Sκ�Y���!��⟋���E�>���
���k�_\�n强��Vfح#7�kJ[Z�#��%X�EEQ\�
��w�:ޛ��h����j�qXi�F�eq�j:���k;;h��W'j".��|���Ya2:^��:�
J��+F�ouuӶ��y���f�QRTe+F�4�֍y�]m��#'�@�L�y�pǂpp�#�r~���O�����e������X�.��+�J�m�m|��wfa�݃�[SN��sKt����"&d�������ǊF��?�ϸ����N��|Ѯz�ı����YΕi8	�h�A7�6%�m%W����x�W��|;���	h���>�l���,��]�RD�8_2[�L�1�YV2?<�:8g,>��]{T�w��뺵��u��d�)Z��|dy`�j�Z�K�����χ�b_�&����h� ��G�H�$���\��E����'�R!��+p�7�����E� c�ב�3�N�"��	#�ߞr{��PH��>���
��_��1��}WV��+����h���u_�ap40TcN�!�Z%����|��0˓�޼u�	����(+�z��q���RQ��?�y��Y��ݾ�wV��Ŷ������)�8�=��S�v�H��p�]:�B��^���
�
�}�g߶���
!���~zV�y��S��ߊ�:M�$�?��=z�
������v���=k����ߊ�%O�l�	'r�}Nq������
�rG���?���z�T%ʶ�[i}m;�ۍ4�J���]�����X�U	:+�ײ1?��_͗�X7�<Xr��G���.������&��L�����J�j<h�������r=�������V���_'�}o�_˩�e����������
�>
����d�Ȑ��އ���������
*�G�����j�'��h$~�
�ȡ���<}?�J�b���~V���9��[.o6�oe�u#��&$Fo���b^�~#��?k���?�~�����_����?�?�f]���ӓ��ח�
g���?S�_;�?�/�?�u�~�
�~_�􄢊+�ਥr��8�?���s��R�f6�h L�X�����=�`��R�־����_r��$��K�Ũ�Ңr�Kt�<���~@F3��2��y�:��P���U
c
�1�1��&��:�W������
�>�
qK������(��W�Z��#p��)�����
�ע�(��
��y����(�ES����5�o�
�R7C��`H {:�%�[]]�[mn��	��_�Brz�vǯ|zc=�]M����?O��:g�uK{Y�W�������/E�4�{�_0��*@(��
(��
+��\{�ꥅ���x�r{WKY��?hү�����O�w���ַ�+�/E��;�]���a��5)y/��lyH ��Z�<㑁�=��I��RWr��ۗ���􏘒���{QVHQE<����m-��W6�����_-�hQEQ!EPEPEPEPLo���1�}
�p3�q۸�t4��4'��g��K���
��
�g��:���
ګK'���������9�+���;���������g���#��ԗL�
���
�$OF���
i�5rH���h�l�=]���9��ʂ:�3�$�{��==
�K��h7ux�?�Z��i��o��h�jO�K���(���E�K��$�_ϭ  ��px�9�'׿�\����Ƕ1���
Ɩ�}�޿����5��{��?�φ~
����O�^?��ּ=���.-.�?f���B������H'���|�����Ax��	��
j��
�0�Y�Cg���q���\�!�t{�K{�DT�K�+6fgi���㜎1�_�����$��s�u��P}�Q��|�}��?�R�L�MX(�To�i&���f֏�{>�?_����/�Z<)�b0XjϚXY�[��N^Ƣ�T���Ͻ�˯���K���
�{�W�4��].��?A�����ܯ{e-��歲A�ɹ���@�γ�_���E�����X��%	QF�(�@�h��@���
*X���pNz��<�9�T�|w�>��}s�we?��T�	K	O�E)M�f�k�F�����^$f�<W��sJ��#VMQ���hSO���WЍ������ҹ�>Ѿ*|8�����Oq���^'�.�5��w�i^+�/t+�me�e�V��Iq Rr�m����
&�M�㌑��#�w�\W�J\�!=�_�}?�?���۳��ke��������
���
���
I��94/x#��a���|;񖣫O�xkW�6��j�%ҼQ���RԴ+���mJMWC�O����kM)5��,n�?��	��E��ȟ�f��$~-��(�ַ���E-�����Ś�ι�>�o8[�4kk����kr�u%��\�ҼQ�
5�s��
��߆~T�4	|
>rB\��>j��@Aw�)���9����|��PH�d��:��5���&s�a���r�Mt[ﮚk�Y�s>gt��.��k[篛zt���������Ϯ)~����EPEPEP��	<~\�}�1���dt�����#���?���~>7¿?��v|]�xWǱi�������*k��a��Y �A���eGX��f�S���n�����
ao������q�{�_��x��:�����ۛ�a�i���7���Nկ��b�A��Y�}����n��K�~7]{붿"[��M=��������_��ST��'���
<v�VQ@G!3�9��
\����p���?���j%�w�mV��o�o�����
ko��O���
�WG\�yѭ{�X�����;�G_���
���
��G�Yw����C�
IAQ���O_ǯQ����*J+��9xJ�Ǟ
���;��Kxo\���ݠ��m`֬.t�n f'���#Y�e
���S�	��
���������~|a������Mo�Q�/�𵮅��5��WAt�6���C%��s���\�'�RC/��
����0�������W]v'Nt��p�O�+Y��뷙�J4���)Sw�z��{���9�/�?<�ox�L��|)��P��
�t�أ��R�5;Y-o��I�㸆F���NN�l�?d�
�7����?h/��?
.>1\x����}�|M��mO�����>��݋�*������܋x�Ҙ���,��?���l�8�^���)�4�(ӭ8);�4����������tiT���(|-���/M��x��^���s�<�։��
x���H���E��j�6���!���P��a���r�G�J�9E#���'�7�
���&�5���^���^\xk���nyL����jp���֎�BZ��[��T�cB�
@d���圑�Ja$�
���A�}�+JY�6�Q�^q�����{����&xz5�v���m�����3���?bM��٧�ǅ���vڿ��MW�Z�Q�*�ߊ�Io5�B0���g�k)2Gm5��1�;�\d��J��p�Rl�$��
]F@�8���Q߷&�����*F�Z����-��kf�[��U��Nc(ӊ\ڻZ�u��������	S�
���|yy�3�'�����9��[�[�f�T�ouy�����ާ�Ǫ�x�^�.�I��ɯ�>~Ͽ?g/��U�_����Y�xoL�!��%d�}J["���#Y$	s�Msp���;g�~�OO��������
_���qELn&�*U��M���J݅
T���0�o��d�~w���'ԃ�N2s�g9�nƆ��i���YY�zf�ksa�i���7��7Q<Vw��	%�խ�<S�<o��#�+Z�1��
��>�
�jer�mU��N���nk}j��_�|��
�xs����jV�τ��5�ֱa�a���Ƒ���kK�2�f�x�A$lcfBJ�Ӷ�܌ds�:q׎� �����
����4����{Uά�[�NVV\ͻ-4I�[M����������-?&�t<{c���>�
Zhl����O9�G�y��� 3g �F:~y����Ҕ&�.h�YwZv���B���O�h���["!e`��[_4�|ł=���O^���g
m@�pp��������͜�	�;���?����
����kI�j�(�r�]�WӿM6��S5E�B)��Jݺ��$����4|���g�9## d:��?J��n/�K��q�ߴ���qӡ��%G$ߦ>�s�~c��E�����b��I�~��ו�[o�*�mstٵ��O_�@r��ez���t�N�9��3�8��F3��\p1��3֧T�r9��:�
,B)�@�z�
������n��][z��WpVJ�i�7{m�O��w�Q��A�'��<v>�ґc���������z����.W�ѭ��m<�R�I�k�
�W믮���l}yg9���������_��s�cVA�^��۞�#��I�8�����V�Ͽ��JMv~mk��J̬䑜s�<����^���Y ��_�����n9��
[��o<��Oo�$�9�i�Il�
�?��l�n���[��v���wϦ���8'�4)�u����j��Ӝ���O��.3�?^ܞM����OM�̕����]7�ϸ�h���p{�:c�z�����4T�d�m��;����˞}��2s��}�
Z�n����
�F=s�F�N��z�_�
KI�~�����֖�
)����s�
���O�'�鞝�
�H�*���
����8'���4��QM��ՏM[j)ue���
��
���.�5��_�'�_�����o$�z��yP���k(�n��R+{t�y�3�?7�
n��+����!�j�����ŏ�1$����)����_kv��X������;!C;���h~տ����c��O�]����.���9���i�}3LYLUFU����{>�ie|
>�(�l^`�V��0�����������}�=�q.zT���Քa�[+�l����~��J�
ാ>���5�_�������y��E$�7���������<;s�����<�}*�i��I;���K,���伓3b��K3��,	˖���_�g�	��W����u�ß�����{��w?<_��a�$���x�β�2����ל�Z=���e��
�f٨i>.��ak��⍪�p��)���'F�F�$�|-3�A#[���w�=����G9 }���9�Th(N�b����&�w)h�}m������C9��ֳ�)��T�QQ���������
6_�_�����eӼGq����5��$�|mcs���8��Oí�}C_�D
�v�c��|�@�#?���u�
����b�*	~�M<E�[T�V�����O�HP}�4�)i��=�%���P���遑�������l�����{kh�+x �v�0F��G.5U
t��:��.2?.8�zc�u�8���x��Iҧ9Q��Q�7ʛ����v�������Ylc)�U����|���K2>Oc�)��2@��ă�c�m���B{�]:w�c����C�S��_˧�5�Ns��嫳�n�v���
}ZI(�1K��n�E�������׿R,P8�lR�w��:�z���Q�$�_=wۮ��̋��_˸���nN0Go�;������g��߯�ҘB��O9'����ӊ��V_�n����k�f���Z��V�Iwq��=?�$O�����	f^3�1�y�=�l���]����3�F	 �;����ה��^vdC���F�����Ns�:ؘA^/��_[y_��u}�p�^{;]u��խ;+}�Z�s?5_�^$�O[ Kg�<��
���k�]�'�q��#��8���_}|Q�w��@	��章�d��+�	�{�*?��nGJ�	Wڶ�
�}}V��.�(�r�����v���?;��-��0�s�S�
��=������DFu�\�gP���z¿��`�g�&Q�l?���������O���_?�s����~��zԫ~��~��~3V����������>h��O�!�Ìl[�~��|y_a|w�
�:�?����
�s����k��;��V������������}�?3��%�?o�
٭W�<kz��y�c]s�-{�ی|͏�M_�J��
���	������:�{�ב�{��=I��
_��_7�?��꿯�ف�*�~AEW̻���_����F�X��	i�{�A���9����J!���?�
\��G;��`�z����h�U���~:>ߡ���
��QE�=mw��
-_�}4����ӠQE������QE 
(����y%�
QE�(��
)O����֖����
�����
�s@�(:c��ڊ�[Y�{>�j��?N��[/E�QE@(��(��"	b�6�$l����~CO����?�\��������(�EǺ<n�o<��H��C��{�t�)��=�3�
����Xcw�9=s�\�ҽ(;���|������>^�*;�W�y ��*�B�(�ݭ�w����(�EPERoe��������ES
��(
��>�?��
)U���9�
>������@~�G/>��
o�
�6\��~;X?��e�r��sӯl
���O�
ɬb�
�S?��jP�O�*DKt�
J��-�Q�}�!�ON�W�Y���sذ �O_[a���I��
;n�w���3��-�sz�n��u�t�Y;Q^Q�Q֊(
��(
=^����
�p�L�?�n��Jy�Q�1<qϧ�9>�<�Rz�ɷ�����z艇_��~=*�@�����I����ª��60p2A������i�w�iچ�*�O�����
#�����
�I�1��:U%V��$�$������)4����n޿����|5��^.�
���?�1������_�b������[%BF4�-
$
�M�ԋ�������������������?�_�u�1����_N�����{�R�y��V��H ��
P	>�
��9���z�߃�t���	ҡ�����+ǯ���z�e�ov��w����U���Z)H#9�?��撾Y�nlQE
QE
QEC�m���m6{�T\V�u���t����Xj-�~�?����#{��.U؀E��i�9�rq�q^�
�_+�	��
f���9'/�=�ｮK�{��v�
����7�+�\�,������E�-����bO��BF;�r�
�M���'��b�mo�f��nW����6Lc���A&�z7t��o�kn��������1��K7��OF����#=��9?���
�O���,)23��
�l����z��G>�
���ǩ�
�X�
J���g��Ӝ����ғ�I۽���馞C���~g��`�F�>��1]%s^�F��t?�tj��
?��_�c�
����g-�
r��
׸�HuQ\gpR�O�����P�������U�ï^�积�8���O���1�暣����z�����ǡ�
�T�
��g�^�
���S�6r�s�_Lc�
>��
���Q�w3����x�(���z���ފ(�s�t�ۧ��n�`
�FF8�#�}G劓��Ӱ��g�PO<zc���
A���8����O__���;�57n��q�{���j0�##���~^��E
 Ry�����(_������9�R�@	�1�~�L{}��'���~���O�����������3�d���v��3�<�'��W�����ۯ=����I����@��
����<ѐz���8�������x�ǹ��~X�:c���8�������GS���]>��pH8��o��
r�:�s����_�jq=����A��

ZLw���
�4
�	c��z�
S�S���=�<~}��nx�����;�o���B�����v�{~)E 9�n�-;^C�Ԏ?s��ӑ��>��Qׯ^y��|{g����
>�.�
�H����?�?����҂G����M
<���~��:�
)3����;c�c�x���s�����x��}x�
����X����9�s�i�!�㏊�/�O
h�T�O��8��+����,4�yfW�%����fRyv�_��
������m�?
x�����'��F�����R��#kx�%��H���Z�I��0���]�1���
|PO	~Ǟ�������'D��	�H�g�`�\�W�2����t��T�8V���j�
���,�8~���i6�χ�u��x����.���	�\��E}o"4R�Ou������e��k�>����0�O�t�2R�D�m�[��c�����j����˗�m_m�����
f�'�o�`��j��6�k�-R��Ŀ��o
DB���v�w�H�	0�����@����>�
�~͟���c������7+i�Z����&�96>Fy5O)�T�Z���ED���~��X��Vv�:u�����Q�migo���1���P�h#H�* 
�8���O|��N�g��|�ϊ�u':o�R���凌�$���z���<7���_���nZ�ݯ{��)��i:V�ak���u�����v}�v6��T����8��4\� 
��C��s���=s�z�A9<�8<���׊2:��
�k���*ן4�JR{����V�录Ϥ�!�Ir�$�Է����Z�_K��y�9��l��jSی�\v�
8��
�c�
�)��q�ֲi�I]������pk-m{if��__�&�~��Г�;�
�FI�
~|�'��?I)\pr;���
^1���1�H�g��	�I{�;-[v]/g�w�ZÍ����-}]���<�l�:�ۭ0���C��玪A��v=�@�ߧ�T����N]K��^;���=F�"*V�%yI=��t��v~�zX�Rr�����I������e�2�
GP9�q�I'{c5���P��|���=1�p9��Y��������	�g���'�N���1'oRO?^���ۿZ�18�v�uZ-խ�U�W�
�=z;$������z�g��rK`g88�y�{q�<��5@���Þ0A#�B=���W�*�������ڮ��}�G�
j�J�]�Oϱ���<��~ȧӃ<c����j�	�?�^�_��_|T?�A�����P��+�'���:��;{��e)J��{ik]t�}�
���5����O�����y�98��kg����4�+���םgW�������ҿ����i�EI�?��k���3���k����q���ӭ~���u+[NU�]�����?/�]���|����u�=u�py�����
��0#�?l�_^�;W�?��)E�Mf~�͜�
?�k�#׿�����_������ޝ�S��NI�^������П�%Bo�
��~�aFv��X~��º���������=�8��
�(��w`p���s�xWY^���L���H%������o�~:_��:�/ݚ����Q_2w�v\��z{t��	�>��Ǟ�ߏ��]��Fm.��3'��c��O�V4�}���������/ާ{�����ʊ(�>N���}v^��
(��(��(��(��(���t�
��Q��1����}{�9qWk��
/�Q=�����~#�\�����KH:��;u��{c<g4�Z�7��u緢�Al���(����Q@Q@QBѧ�?��5�PL��L
��Â:��[�@y� ��:���8�U�%Uѣ�"���~^���rJ��B٬/��n��gi�L��H��Rnϫ�.�ڿ��>>��rK{�mn��t�
2
(�����s�
(��
(��
(��
(��W����ES
��(
��
��z��ZN29�r���2{.�_rk����
���GK�
���
�n2b1|U�Tm6p����m����Yی��ۥN�~Q����3�W��
	j�A�����Z��
-�>'x����BC�Nr;ǎ�O��ZFCE(�h�`=���k����C'�������
��;r���w����-��(��S@��{,�
QXǊ4꺕���F�fPpJ�gaӠ=FFF)k������Hzq�_��}+Ư�8�J�r�C�_8�`X#b1��ppy�x�q�_��E����yxOC��1��xp�9
�u�����M���+�{�O���I��/��h�'�l&�<C��V�N��YB�n�n��$.HH"Re�VHb��tS�����u���kZσ?cO�������/��o/<5����&?��~�U�I���7��
�xº�}����
-�5X�
�H��C�7�߈�9�u���&o�~�m6�h<a��hl���+�^�Qk�m%��N�DHV��[�RIa�h(���7O�#�l�x�㮬E�ľ�P0y�e�� �J���2a^�],���N��4���I5e羶�2��$��z+;;w�-�{���?�8��
}��Y�ߌ�[a.Ji��v��!�"^���_��
	%�2��5�ƻ�
��
������N�k��wW��W�Ey���5��O�L,��
���"v�@#�%��������#��9�8 p�^s�T��k���
�x�
c��4��9F��;��}ۿ	�ߗ��Nk�p��EK�Ǒ8�ץ'��ݭ���y�˭��۔n��7w���=5������Ŀ����o�~��������1���k��4��ۖ��[�m���R�hđ���s�O���
�u'Ľ.{;����tX����kh��<�����&���(u+Er[iL�L׿�������~$�g?��<5�mX�{��H8�<d�o�g���h�d�?��MI���m|Q��OL��A�Ms�j�q&�9qj@��8��Fa���:�ax���i;]m�����X�k;�i��k����V߱�������ͣ�(��g�|E�T��,#��>������ye\���ue�̸�Q_����#���#��Z�
4��
�����|����:%�_隟ß�k��]Z2�Ay�ǩ����)!W��;�,����S�}�e~�~4�|[�*�����;ភo�|?����O��!�4�K@׵ۈ`��|E����g���i�}.�V�{��>K�~[2�pq���+)�����M��[_#�^���H5}9�mW~��
?+�
C�R)VPU�@z�2�� �?L�ik�@(��
(��
���
��k���MO�3U24[~
k�~�����杢F�g'͓QX����y����o�=�!���m�8���0F<��v!����T�
��k�A�
�V��sd)Դ�'nWQ�߆�2y91( }�1_j~Ɩ���H��-
-�|%�

��h\�z[�muo�ӥ���}���&��KN�$����o��
JQE�Q@G)|�
"?�%A7�#��+Y�m��
�@[�45��O��5����9/��?ֺ?�s^?�&��<�
�3�׿^+�$r:g܏j����W�o�_�~���᝭zq��ck_6z�sۯN�
���b�q��y�����Oo��g�
���y�<w�����8=q���c={��;Ih�n�OB=�3�?��3�<��g$�RMK�M.�
��b�Nr��IZ����bB9��������?���8 ��=)7��L�
?�@�����V�k�����h���v�{w����P����1�on���ZM�@��u���}��
��d��趕�OEmw�<=U�?�%���}������r����(���(���_��A�z���~^^yb�by�q�^ߗ瞔�:c��,�#�ǧZ�͏?}~���������"��m{|J�:+��R��{S��/�b�9
���������O �_��P��5����������p8��)�k�NL����;�
�){H��M����)`�jS�켿��MK��t9'�;����
a<�������~x���ж����<��|{t�[S�Rw]ێ�����W��T��ⵝ5�
o�˯���-e���
�*U���[���f=�{���=A��
��<�?.�c����w�I��wl��Q֪���=��t�����7�G֨+޵n��S��w�u�9Na+r�1��B��N���
�m�����
M���Ooo\v?��*�4�Y2x�E��ڝ��z�7�T%����eᘹ�
��暇�
��i<no����h%�Ͽ����E�K�˱���}�R�w�kܓ� ���dc��?�`����q۰�����^c?�_�6��G�?E���
i#�7ۿ�c��B��?����X�'��.�#����f%��c�/��Z��������O�'̧���b��ӓځ�#�v�?��M,	�r=������ړ�|�$M�{������ޟܹ�~N=+��h�$K��9$jͺؘ��2}�7���|n�

!����P�*���3y-5Yv-����$�}�qʞ�������Xg��㷾95򜟶��
~1x<����?@1�,8����+���C�_��x�z���}P��`�
L	�$3
��9R7
�̪�P��8��tqXz�j�0�7��7������Y�M��(6ҭ_^�;�}g:q��Lz-���x���0�
�q��rx�8��{s���3�`�#=GA�=:�y���M��Uu~�L0OQ�O��
9��n���})1���P!d���@��>��4�P;�o;�
_�ߨS��8�>��x���!����9����}3Ϯ?_��
��'ש������<�l��ϡ��
����4׃����z��1�$�z�B{c�}9�*&e�$������l��**���i�uq��m�$��
���y�O�m�E5�����>��W�N���x-�#�0��a�T�!7.
,���τ���3�d��Ak���x+L����mO�ڇ�����\Cg���w��%��c�
��_������S��[�?����y��~��F��܇dH�5K}F�bp^ᘓ����'�����p���7��
���u�H!��t��S�
�
c�d'�H!���8�<��)ƛ�jqN�/�*�V���u����:�Zƌ�{�ӏ~��n�?m�$��QׂH�H푃�~E5[?\��N����q��I���{��'q�/�?_~��Kߔ��i߯3Z����4�u���{%�}�i�y�q�랜`�8���@��ۧ�
\zg8�O�?BGa��۟�=z����W���t��oM��������T{	'�s�ӷ~LT`����{�瞾��6�9=
=H�I����8�����$���Un���y�'{�j�ѽ;O��ڃ�	����=��?^�����g>� ����QOs)�lr	��������:sW���V%¶FO?�N22sϧ�㯌�Qk�ھ���
w�tvQ�T���徯�ݧ_˹��j��|��G��뜌c�Vi���;��� s�^n}�
c?�NNrs鞾��{��ҁ�r
�W�_*���K7定tk��k��$��w�k�^�w�F��QЎs��'��^��4�A}y�\��Ԕ��A��1���
�\�mj�
>�O����W��]����l����
�����T�2���J�8�u�
��ޜw��~kTZmū7���q�����g��Xb��I��S�x��������^1ϯ
��_��<����G��F?��}Tҋi蕭�;=zu�
4�x��j��o������KR���n������=~��5������u�Ū��������EL��67���.�A����y��_]%�}U��uH����}�
�Ӟ���]�뵢傷E����8��a���������+Cж����<��5��}���
3_b|�IX�α���A��5�
�A=��?�<W�Xk�oK�?����O#��������+�
�C7��yC�]gĒ������q������zf��O�$r��
�������5?zu�n��鎼W�zy$��3_3�?/��x���[^�Y%���פּ��+�O@+��{��.:L��p}���
�\Eu��o�������Ǧ>��'�ƪ���.�'���'�ԟ��o����Q\N+]5��ך��w��-�MQE�(��(��(��(���w�����S��KMq�?��Qvk�װ1������q�\�=���J`l��8���|~���%�>o�o�_�[/E�u��QE�(��(��(��?�h�oaζ?�
2^��;	z�<�R���++ �A㞾��3���Iŭ4}��߃�ӷ��n�6�����O��x���8�קn��09����ִ��n�0?q)i +��I�C�2qױ�Y�_�����_�>j�%g�����AEU��Q@QG]�_�Q@Q@Q@�c��CǷ�x�^��?�'k��x�ә�_��|��z�i�����N�k�?��/|'?���=Ͻ_Zd�~������x ���px#8⿍�
�:�ag��	�~Sg'�ی�`�¹T�s���ש���;���x>� ������&m*�RrI<�'�������
	�H���4�U�^FT�Ԥ���6�|K���6��sz���tyn&����i(�P2���*��$�9<G�[⏄>x;S�u�Ҵ�+ ����1��t�7+\]�2�X�
U�G)r:�|Q��~,���8�|���x[�:������&x�Xn-޹uG�v����~�F0¯���i��5��������f�/[n����������-*�)��
�6��ǖ�~��k8�L��iӡh�d�Eey�2D�J������7�<�w��!,�N�$����gf'����hZ5���;G��Xl��Hm��F
X�&I����6Y��MkW4һ�n�]|�>�oN�B6K���
�~��!�9<矦?n{����`����������w�8O�۵GY�ٶ޺Z�}j�
qi[DҠ�?���4�P3����
�m��}׽���?�Ќ��=ǿ����pi��6:^�
��������~���9���K|W�Yn��V���@�C���
=�w^��3��(RF{s�����\��I7�V��m���Ē�߇���U%y��8 �F=�G�)�T�7	l
�\�;�͐:��<.y$
zg�8�?ϭ6��rV�կ��z_�o�*��6�����������Eu}3X����	�ho�wG��O��5�^��}n�[����ŕW��	���?,O� �|�
�*+;��W�־�k�g�}-d�g���#��
��þ'�K��O&ܽ���^�H%	'\��R�����"1�y�v>���kywc<w6W3Z\D��	9�9VR�0pyW�>��#�o�����(��e$��m�Fݤ7�<k��2!Ȕ���k�uvj/f��}t�|�j�v�}J�G֙��M�b���U���U���*WH�8�z���㊯ӧ��j$��5}U��Kw��~���������ՙO�<}�DT8���_2���C�H9
F0H�O������i��m�mX~
|,�FA§��% �s� �+�+���Ο�
��$to����dB
�;����Ut��
�1��?��
��i�o��"�X��8�/<�� �/��^�El=>(�������w���{/�n�����(���(������=�皞����~���������A�?����P��?ض��������]��ᇮ1ǩ�ۏ~k������	��e��u��Ҁ?<������+�{�
k��s��m���c����
Q�v�q��,o�rG���};{�E�ל��pyN��������AP�Ñ�������W����n���}{�ѧ�z�}�-��'�B|o����
��Y���7��Ag��!�ƫ�^���O�Rp�3�w9�q.#���$�੟�m��{q���-M��g�ӛGk�mw&9n���M�g�R5.HUU��
�#|�d+�F�
�� 
���2o�C�o穓�����'��#�?1���\S�噤0C�IP��5u9������J�O�c��.�9�U�u����9�*�c��S�)sR�J��nHt��m�ߦ�K�o�)��H�v����_�-	�XdÜc�7������_�����m,��h��߹�k�6A�����{w⛏ǟ�3_�>/�'�g��[*���5�����\|	�\���+�A��V߷ܾ���
)�YJ8��gc�^є��f؏L���Ǜ�������R�1����_K�?�x��s�8�9�^����q�in���
�����f��>���,F�$�i&�Ӣ���>�eNK��vD��W��}���׫}��ZM�t��sg��e?���F�ӎ4�ʗ����.����22#M21��l�w���������`UG`>���1�{d�D��;���.��ו�/�[Y#��uJ�'�^=��>�kExt��ӡ������-:���G�0z���Lg�1�/��<�
�'�9>o�o79�5y##yH�����^@H���w�����
��
Ջ���2��k�i�����]��KuS�׀�i�#��2�5�������_.	�~/|@|��<G�FG̼
�#<zVD��1�������ݜ��Z��n����^ZH�
��
��48?Ӟ�>���������+�w�;t��y|��\��p�K��
��[��o�������B�����|G�烟�d���O�
��n> �@��;�0��Cx�\9�s��>���.w���
=�g��1�)�'��C��y�c$����h��7u���������!�8w)���
a�Y�/e�������o�'O�͞�MWq�9�.�<�rҪI�k2�ɬj�}[U�c���?���q��Ƿl���i#��
ן��9<�4���5��_����
;�N����p����q]��tT��
�+\{��}KRn�:����nx���U���-qr�?�upߎO��B8枤�r9��'�y?Ϗl�3�ψ�םI5o��tC!� ��U��[N\%�5�i}5ۤ��o��ۿNI��ڣh��Q����8�����בO��?��?�Q��
]Y�����y]��mu[�׵��Y�ӓ�r�����������ЇɌ�$�v/���
��QJDQ�P?��'9<������M�W�k�I����w�U���Q��ya�����т�Ϸ���C���

H���#�9��>2���G�7���֯��|A��~*�V��i����j�\�j���3����V��
�FU�c��m���r�>�W�9u����� ��
%�ǩX�x�U���3C5�:u�+Պ~�[8��[궷���+d�V3���x��?��qR���I�I5�5t����[m8���b2���Ϊ�88��9���t��<z�Ú��24��~���L����d�|��p��ל�:��
�_��yJP�o�E�F����������:u�F�RJ��N�)����O0=�O�
UQ�'����]���yĪ����
���^��>��OR�$s����
������ր ?L��.��� ��
�/o��4w�׿���M
u8����@Y����N����u�K?�/Ş+��;{/�g_�.��-�2��B�~UP��z�º��i#�2;~y�\��~k�
�[�)��_���gt�ڟ�<9��&Do������G�IQ��'������.GnWE��j+^j�Zmk���W���ڪ��V�\b���6�o���x�����/��,�T�%֫��
�:��g�[�k��(Y�}∇xU�������Z���>
�1����
�^Ү�8�>~��n��܈�"[�Ǟya�Fb{����
�=���_�����/�-Մ��U����
bx>u�&���1M�֬>�闝���FH�a��%TEQ�QPmUQ�

�q����5����`�-!I9.��խd�j���8*��f.[�h�[��N��d@���g߹�
�~A��S�A�}����׽B�'����1��~g���˾�[�[���诽������6'��c>�$��{pqL�	����
����)�9�<�vϰ��v��\�o�̣� ���Ǹ��*N��wv���o��ظ�r~�nޞ]�[؀���������
����UXr���2

<�ܟ�s�n��\�`}����1�'��
sX&�ĂI9$���g ��>>'.W�.�vV��妪�g���Z��]ދW�mu��N����)�>An�����c���Nq؜:`��y=q�����C�=s�����
�<�9+듓���Ҽ�T��~��]�ZKc��䍬��ӯG{�
��v?`�A��=:P�O~?�O��4�VcmY$�Z��O���Rg�c��>�ޜ��K�
/���?ק�Q��v�1�<v=���d�� w���9�
�S[�׿���~�E���
$��
���y��2�5�ܽ��f��������
?�}���Q� �Y��(߮�¾=���#��
�u���բ�i��k~��<|oƿ����)�Gn��7�l�������e@��<���
��nd��_���t�P������i�
=9濙�M����
O����ć?˽~��.���~�����?-�-]��
����7|����B��[ˎ��|���F~9���oÊ�����o^u��
������
�}I���ְ�ԗ�_���Wz�����
���C�
�������⾇����t���wC�����+�	��
�
8�[�q�
B^�y�{�v޸�ן��x����Jj�(/]-�o�\���?Ŀ �����4W̝�[���Ռ���ߪ�>�NA�aԶ3MJ�pp�t�
#��I��0����01�JJ�>�����ӹц�%E.�k�]�c��@#��֖�$�d����{�����E��e�QP����^}u���((��-�i�k��`QER�]yy�
%��;�
K@
(���(���=)i�#�S���_��l
:��:�;�Җ��c�u�{{�sK[k�{~���׺[/E�u��QE���aEPEPEU&���w���'�
QENI��U���v����a�j�?������˂����y_���yD�I�A2��&*�}ry
F t ��5�����F���u���2J1�%�m9��O
�S�j��OF��_�g���q�U5x��e�~��=���̬��X���T�9�А3���WJ��[����=<�)EŴ�h(���Q@Q@Q@Q@
�ө���23�~�	�����]��ۙm�]{%m�n�]�g�_�
gj��O�(��6zŻ�l�o�H>H��hKg�=+��O����
�k�MV�+��SS���A�E��)�'�W�Qh��H�c���
��o��?c-�J���q�8d�|���N
 7Z�����OM7��5�&𮤱�⏁�<E�k�iTH�w�Ӛ�H�H�$�R~h5l,�+�*Su��H-�f��V{i��}�m�\����VZ;����U��������������K��|��,<%����W\��0�k]�F%h���Z�aP%�D�I� xmu� �wG�h�U��/5	�2�땷�e$�Y2+�&$�8�1��>��s��o�:�ſ���e��z�ګ��l��)��`z�r:�?��RI�RkkY��W���H�������V��۵ϲB�w�3�C��߁Ϡ�{���?.��9�lc����R�@����W���Z�]~W�K~z��ܻ-���?\RR�q�z�ׯ$�;��|R�$�Ԍ~�擌�kv�
.�w�z�g������9�'J���?� ���R@�
'���pwN�k{'���Kۧ�8Y���:���p}?3ۮ1��M����~�ӯ#��}�Ϸ��Zk���M'���tc��s�N�I?��7;��9�"<g��}���_���
פ�wd�{�}��}u���n����{���;�����t�j�B1�����:������W��7}t׷A�QS�Y
�__��ސǎ����
>��u^����!��
>����}������ӎ��Sʃ�o�����.�m8�}O���Ei����O�o�r�]�]{_kS�iS�b����	d?*�w���yǖHn���S���e9x926�Gr9���,Tp29玼�r����࿌��ˠ��d�4ts���ٶ�I�m���u�r���ky[C5�צ�{m�ߦ��C���
��u�c�$~;�o���Sߘ{����EY���ڊy�[�5�"|����Mlz�������g�m)����
�ھ 	�oس�i7�(�����w�5����!x��Lrx$c�X?#0�0�o��/�=�{N_�^�"}?���KOW�ژ٩k���e�y�n���(����(
���:�5b������������ƕ�R�h�h��h������\v���]�{ӯ�C�������
�%�?����u��j���qϯ����U��=�[��j���1��]�a���_/v6�;�@#׏�Uq��H��Gۏ��<b�t>�=��Vc�T��c���מ~�ɮ�go��v�g|7���c�
a��(������<��|@?�>�����?S������q_З�����`�|Eӳ�h��;�x��oO�^��s�����_����j��jM]k��}w�����Dׅ���������v���
�YH��~�9
�jf8�Z���m��o.���Sm[��)#���矯�ҡv�{c g����t�Rr}pA^��+xI���E|)�n��h���~Ө�0�.�4k�bkI9ʻf���%`:�ӗa'��ᰐiʽZt��*��}n�w��o7��7Ù�y^t����� ��,=)Uq�����o��lx�=���#�0x���5I�K��k+�J�O�V��{X5[�K���S�����)3d�o�ş<G}�/h����P��ڌF'�����A0&�Y��"��淔��9\���y��~3~�z��c�9�ηZ��m�iW�
�~��J�ծ���S�Y��]>�����+� ��]���B�ƿ�_�ǯ�<5���Z_���.�q��[�?�n�^(��Z��5��u=���d�Z|3���9Rx�d���y��������b3,-ZT*T��R��OD���I)9J�Z#�c�<k�Zؼoŵ�S�پ_��(�c����Fu���\�Zt۔(Ӄ��%)(򟛅�<�Ђ'�~���&=��'���y�n�_����u�;�Ҿ-i��^��^O�ך����I/�G�.��o��:�Z�~^�=�mx��i����±��+�T�
�1x��|��[�7K�^�d��u;H�t��/�]!��rA�9�����ɰ��5q4kRs�8�FRU�YK�TN�2I6��F�~���:p�fX��	��yf2|�<�fT(�8�PX�3S��Y�V�RW�7�g�^	�?�?���i#��3����#��g��a��	.-ͺ�n��0�R8f@�2J����|y���|k�K�7᎜����sq��Iau��ؤ6���6r�<#8��$~�E�<[~�?�'�_	?�4�����Ú�k��1�Z�
��o%�W��A4��2�?6�H���
��|?�7|����'↕�.����g�භ�I6^���O#Q����G]�P�*�5��o)V�a*�se�ru����5)�g�R����y����u~���e���p�.oJ�t���U2�c��<"�i��þz����%�RN~�>w̒mD�iV�:���(n��]��s���<c�Ven����C�9�L��k��C�7���/J��>;�>o�ڏ�n ����������O��Ki�KI.�R�{����9U8�D+�����[�|����߶?��	�xf��_�>��{=G��>(��5�v�įao�Y܇�Ym�[_Aq��$a~f>��Q�p��J��99ʼp��J���*��n�/���i}'�Y��u2ή_OS*Y�8S��\�AJ�0��_z��(��PSV涫�����2nQ�1�r9�8q�z�d'ۓϰ?Ӡ��������}�?x�����|ӵ]g������6�n��C�i6��֕��g]���������=��{��e�7���+���?���ڋ�ѵ�|i�m�?��ZǢhW�4�>}I4��.�Ē�P�v�K:���
����$cʦ}����[Ҩ�N^M9�����i|��)G�sCSO��wV�.�.�<U�,���B�a')]�[&��}$g#<s��n� 23�1��z2IU0XR2������N0{�_�_�
cφ(����?�4H<7����^9񞕣����M�Ke��4��.�ɳ��[�B��j���޿�O������F���4x,��;P�����6��������Zi����G��m5�Oq5��7�Ʉ�Y���6�8ѫ*4%s��5Ԍ��N�'�Wi�(�iљ�/�sG$��ȱؙf8JX�~�"������X��t��(���]�]_���ノ=�z��>�J���G����s]���X�:�����]�^��v��i�M2O$�6wn��4����m�~qH�Q)a�y�?G���.�`����M�:5%JM;��i6�f�g�k�yFi��2��8©F�c�����G�j�xFpN/T��Okk�+��ǵCS��~���
��O_�hix�:�_�F���߂^�����_���y��']�-�vq��;>9'��"��#�3��Eq6g�/��A���^\��{�N���l��s���*��ֵa����%���{Q�|�Og�����3��we���i���돳�9��r?01�t�b⏙������=�:�����V��
�ze>�U��l�w<q��9���_�������+�WM���O^�ִݟ��Ӷ��
S��=?Ơ��Q��z~e���{�=�E�g���
�ӧ_z�<�4��������t���\���R�����gҌg�q��jB@�@��@�����~:ST���<ç�
�ҷ#���8Py�
��@�W,�������9#���^�/R�+��ݷ�n�_n�	�
���
��e�O�����9��x����&�6���{�E��Ϩ��X�Ѭ�TR�Z{��#�PN7�0	#?��O��
�7�4/��jڿ��y��?D �ս�L]��Q�ld�%F6-M�%
e5ه˱x�gBr�{��Ӯ��};ۯ5ln��ֆ�o--�]�Oل\����� ��<�c�rq܏��9�ϧ�?
�	����}K�~6��~��[]��Z�~�|�)uH�2ē�����2l���1�hN?3�h�-������ÿ
o��1���Z�+ᦟ.��	��f�8��Cs|'�2 lR���`�ǀ|0�
�j�
�B�k�|x��៎�F��[�
���-G@I�BX������Z�w���ۨ�|*�e��6K��,v2�(�4�����շm�i��<�8���<&R�6�i;4�~�O�۽O��
�ޏ�1x�����ī�e����y���	�\�^�o��	��N�`>[oC2�!w5i����	,G��O�
���G���	�{�
����)��|S�4-S_��t��/A�Ь.mmt:����^��Ky-���yr-���\�s��������O�sσ�y�1��T���IF��$�����=~�K	�J�d�M�Kf���m�n�2	,3����MB�p�������횎��b��p��8 r00=��@�sz��YbfT�F`2;����__�і�j������?;�[C)��.����
~��f������c�s�x��
��b��I��ORI'���
��9�<�X����=O\���=��1u��� ������j��T�Ke{;﷚�_5��Q�F2IF�^���]?��['����Gsӌ�מ���{`g$��O_��s�~�?�.�ָy�i�������]Q�k]oկ���w���B3��~�9�8��\vSW��
?��{Ԥ���
�_sQ��q뎞��n����{^�RW����n�ս<��D�R��ӿ�ii���/Q��n��
?��������_zF�NGORq�����J���}��O��`?98����?�S�#���
��
?΢�[=q��t���P�^����M6�{u}6��yO�ӷ�W��7�Y���s�g�X���G~�#��۟y�%�������[�����$���W�e��������ӿ�x�����䌭s�#WoM*��i69�3�ҿ�O���ws�Q�\�_�=k�\�����}?�u3��g9�����
�����x�����?�~��#��w^����?/�/����v��Kn�
�p��F<)����z{��_Ϧ}����s�9�2s�ϜW��
�!'�:P��B�
��o��Wȑ�>��Ϸ_��_�a�
���|���/;���$��������-�
�P��Gu�hǩ��+]�~�+��=Oj����+�jdWƸ�z/�uӟ���|�8�5�\A�JN����7�����?�/�J(��d�
�^��r;��~Y�g�R��{z�z�J�?�����iԨ�������ש��=����Y���lq�
������������S>��a4�' ���!z��8��j��++��OON��{�I��=5w�����t��n�ETj�~WZoh��.�4uQW~���M7���QE�zh�y/������v�ET
QE
RA���2�
��N���N�o�
��z���?.sKG��I��D��^_5����_����QE
QE
QE���@
(��
(��
>���
>��QZ��I=l�v���G�RWV�������4t�{h�\(>d*0&
���/<�䜓�5�!9*��/!���r8�9z�k�_Z�#�sl�҂p0�0
a_�n��=9�aS['����e�
c����4�����+�{����_?��4s[9��6�@@*�Gd�
���5`{�������3�:��{h����
צǑ(J����:�(� (��
(��
)B������$d�J������~�?��
�?h?�:��þ��iz-�ƺǌ|Ot����8�e�[�^�,!�0��./.
�n浣F�z�������_%o��F�N�
+~:u�Ϣ�O�o	�@��O��M�xC�zTs���&�4�F��5,��j:�ŵ�*�Y�g��_����
�K�����-���omeh�[ᗄ�U�:L��kJ��s���m/�*�g?���
E����?5=o��
�/4�vד��?���/��	�[#}�MfeQ��H_�k��4��V�;H�<U�
E@�`(��$�1���k���Zju�ԚM�j��ٽu��:w�1Y��U�P���;�g��zv�~����P�٧�����1k��g�����u�'���_]𶡤�Z�t[�[W��--L�{=_̶��J3�O�����O��~��Zݮ�|�Iskwس�G�ml�L����ؘ�3���$.���x?����e���{�[k�[��H�@��	S��NG͵���"���K�@�D^7�i���>��������ͣ�V��sN��+k%��U�%ݱڷ=�Iz��������PQ���Z�mwv�K��wa3*X�N��R���9;Z?ݓ{toC��Rלz�#��W����d,~xp�U�fԯ$'��ד<���q�{g���C�?�>:�8��Ŀ^���+@��L����.�����}�Ȭ
$
�)��O�v���_�a��k����3��#�ۓ_��q�Sѻ+kn�rӧm=5ex�r������X�`�����
��
:�'�;u��
�?�;�M���-G���z��ϊZ{�|���.u��ĳ����H����3}��r_O���
�b?k�[�L���w�V�&��?���x�������m� i|C��0!����Đ�L��ws���6���P���������ig����������I縚B�K4��<�#�331$�k|�(�.
�T�ok-����V������}���
�/��_n�.����ý'M��O���Z�ဖط�[�3��ck�*s�\H�
��j����?�`B�q���H�������n3��+�����
���?�־��I��IQ[-���G���>��d�֝/��V�v����k�
(~�(�~�_&��6�ύ"$�	.\��$��?�]��Ѫ��~���{�y�J�Ɨw�2���_�1�<=���
=i)�����[Y颿]4��:��MI��=���V��s<!Aֿd�'�ͦ|JPz�.�%�v��]ƙ�
1|(�D]c�`��f��M������]���0�C��� ɸ��:�b6�<��ns�z�|��g��or+f�����tOmK�"iY;�[�޻%nި�ӴO�9�Q�T:����$+�O�a2['n���#��x8�
ׯ�?�pW��
U(����3�m!Q�K�Z��!?�}6��
2�0�N��,���,G��
��Q�y�Sד�
��3\���$��v�>��N��	�I�;����Yi��A���-���*�h}Fgو�E��h��������Ť
;�׾�k�
!�x������>	�4�q.|u�i��@Pc�f�tbO!�#���F#����?�G�t?yW�?uO�?0<����'�T>��~�-�]��;�-V�M�W�.�
��ԓ��>��8�����$�A�}�^Մ�
���Q�$�:�����4QL*Ѳȭ��P���>��U�qf�K9���~e��im��
�,�@ ���g������o����C��@Ҽw�k8��>\C�b*�aL{x�BEsK���S�Ek�����>����t�[�����O��C����9>��{�ژ�T�#���^��t�
9���G�?�
�/������v�x����L�F��l/�ԀCd��=~�~���p�
Ưj�v��J�3C���y$��
�6�?���"�Z��"9WA�v+�x�i�3/�)�G~�R��\ge�///�[�4U��kt��������O_�+���$�ϊ�MX�"�-�� +�ܰ�`��;CPF =��G�t���~Կ��
�?�e�x������%��-OE��m/\���隕�m������,FH9_�8�,��#מgu`���KV�^I�ū7}.��I$��]�t��׵�^�[���k�?�o�;7^��a�C*<_����Y
��[T񷆴�]���G
)������_�2��}|%�o��YG�m��_�����/�Ll�
�sK7i�
	�]>�4���w_�-���AKH}ܬ�%N{~��������&��0>Ku#�F1ߓ�+�Ƶ,��]�5��w�n�IY�SK�6����q{���[_�آ�+��QE�?���@�u}���TS}��c�?�5!8���QK����������dܓwק[t�cD��k'̗����߹�>�D����
Q ��V�`�8������1��`xx�
Ė�<��8�
��8�Uѩ?�_���ҿ>�?ޫ-}���Y'��u�꼿X˿�p��
$����{�'� �8�g���T� �c��
��`�?�Ul�R�}9q��\m����Q�Y_e��jzz�7���?*�
ଭ��>=����9�
�>�O�?�"���:��2?��_�7��]�|���]�}2��O^8��
ׯ���=z���z���4����\��,=���=�u��
Z>�п����c��
������9�S�O�
_J��}�9펽�#Ҭ
�����<�t�
��
����)����K_��g��j�v������d���ױ�����_>"?�o������/��Ci���D�.�Y^�P�$`ʒIaq:ǜ�r���5������

�l� �#�=2��	��.xMU'j�z�����'	FI����]�ŝ�8\�'�2|d[�fZ�J���W��M.׌���OV�?�/����kƞ���
fώ^�'�@�I�N��r[��e�K�HK�i���<�W�:�Q�4p�x���O�_�Fx�Z�심it�����ǷSx�T�u�gP��/�/�j��6SI���jW�j� �I��i*k�b����%���e�*A4�,�����C���!OQ�E��v�Rܓ��I#�' ������K^�U0�tp��G��&����Bt�sB�<Ҧ���w�Io����*�fxU��E\~I�Q�a���h�����Z���1�|��EVN��b�m������
>x�������?G�6�J�dТ��c�MGH��Ӭ�U7�`�0ʒ�Y�j%Y�h�FI��g��gK���Cx�Ǟ7÷e��8e�v��ۋ(�HVU���4a�V�d��_:�;v�U	���b
�u'����/d��g

��#��8�7���0�	����C��38�s�"���vk�I��ﮧ�xm�;��s��':���C�S���Ae�k��])r�j1s�I(������^��
�q��}��t��Xk��f�o�ZI�������4��7�~d^c4aȊ��
���
<�߃?���_�@��|+2iv�Ϋ��rj3��u�e��;��k�L�$b(�ib¿*A��B�*88��㷷n)�8��m�<�H��dn0�zu����7���ꂚ�����?���(��F�������9��G���g9,�|ٷ����/kA��!�XT�\�VpsR��wKK��>"|��?c�'�[����?�^1�W��^���kmk�Ŧ��w�j^�kmx��4��<Η0ȟh
дd�ߴ�
�߂��
g
~��
<Io�
��ό<Qep�ze�V�!���;�uS5��]^�h�m��Z@�\��r&Z(��YG# `1���$
x�4��H8p��0p9�22zq�N�
��8���p4#��`�N\�
U���[�vS�v�-W���943Yb��ٜ�7���Q�cQ�O5�Ö�'ۨ�YAIʬ)I�3{����
��
�?�~?��p_��A����"����*������sl�ʐ�`�<��AR+3�������7ğٳ_���t?��խ.<Aq�]}�t�cִ;�$��V�?F|D�+�:A�������^E1��7/Nsո��Iz���u�D�W�*oF/���ɨ��ev�7,o{�Koc/�7�8
9'.m���(�)�ӡק�󺎢QmJ�;P�d�����?����s�ڃ�/�O�o��7�x��>.�B����L�f��c�G^B$ֶ�RZy%�H%N��ߎ�a�z���O��_ĳ��h�r�9�<}��Xc�k5���|+�F�%���g��.H�.��'.�B�$

��
8
�ߧׯ_���0	*���2H8
�;������:��k��W��q��T�E58S�yf��QO�NQ��������e����_�ʰ�[Aa}�?��(V�Z)ө	Tq�J��[W�t�!�C���φ�
�G��5�Bmj��گ�D�R6�u)71{�jb�Ig9�9�Ǧ&q��tt���H}ֿ7�_������Ԕ��ϯ*�D�饑�C�`!�e�L�%V:�B�T���N	^V����$��D���t��}�)'��rz.���}�Tz�c׾ÿץ)������}�����CMim�}/o��U`I?�ӌ�����qzx�
����s��
	���=9�
��ɇNz��rG8�~$���k��c'��
�ࠖ>4�8�ռIf?�Z��y5��Ҵ}>(�����x���� ��X����/U����G�%��Yڎ���}>�}�����ѐN2x�>�{�9����_��m����c����2zg������s_����n���+���Z�'�a�J����{$��緮���
�N}��xǯN;��w�T�q��8�^O�_��85l��w1��y'=��ov��ҿܝ�oV�߮�τSz�g���t%�i8$��RO�=��QY������O�k7�Z>�j�K�GU��O����l���I0��%��I�?���T/�)�
�'�x�M�e������Y��N��ÿ<_{��5Ŷx��#��
��[;�.Y��5۹���JtԂX����O�����Ph���t���
'��
Z�jz|�3� ���G�"����H�o�t[&[i��յX�e�27�A�=�.KR�b+�T�J�6�m;mwٯ�}��٭(�'��J���]��Mik[�n��������
ୟ�����:��8~"x��͎/
|0�>)���0�}Z"���܅�5x���_��
��O�?/.�1�6�4�>��f��Xՠ��>8�2��%���)�i���+[jl�.|��ￃ_�o���ርo�6�G���W�G%֟�\[���dx�k{�Onή0ڜ.�T�d��k�5��˟
-��������@��qhpj�A.����I�%C4�i��ǧ�N�O�z�u����M]�_��h�K3�?v^�٫�������_�V���P�
o�F?��L���j�}�|E������++�ˤ蚣�vֱ��z~�aX���0���7O�zT�f��I|h��\�2O{�o�{h�K0��m7���P��:���i6FM�b��鰐
UUU^B�U�@~Q�2sL'<�y듞�$s�y��OV���ӆ��8E]���ߦ�҇�~�%ʴ�voݽӷ��oe��/|���
f��O���U�{�~��P��w|z׈��M&����+�G�Xr�@P�(�t
0�098
N8�n@=t�� g ˷��
"�\��
�`[8
d��x��9�z`|�+3��|�k�M�rv��o+]u��_w��GݣJ1���n�ӯ�~��Z.#R��9`{w�OS�A�؊ż�!�ƛ� 9���8 ~U�y�<�A�T�dH�ӎy���ǥf�x,}X�oRO?_ˑ^'��o�޾��[_O����P��As-w���?M?�lM=��Ĝ�8'�GL�:�Oj���6<�'��3�����83�~:�)��5�Ԩ�����_��F1�\�+Z�z=���������� �����T���i�FRrNG����j�h�ޛ鿕�v��[sD��잶K_U�d�ﰪ0ORy��
2~���oN99�N��x�=�@��<�s��矯�~_�C4�zY���
���aԝy�����h��z;���e�
�
��
2C���dR�M��h���km-���߇�SN3��'�L����S�3���3�?�${{�[��uK�&����Ӻ�m?CȾ6�x��֝�vǯ����%9-�2X������k�O�L����c��?ʾ*��|�����_O�+�V�;��\�_��b�5[��>���1��F��1��d:�
���Q@..��
��͘c׿���J$m��?���Y\g�ҿ�;Ӻ[��2�3�o�_�pZW�[MR۪���~���k�L;�������]��I���ߥ����\��j�N:{�ǐO_˚����9�֐}\�G�z��u�����k��?���ѯÿ��}_�K��+��_�F��?��
�t�����ǂ�����~����#4y�
���|�I��߁�v�?��⿹Z�~!�--v������N�����
���(��;��(��՘'m�V7Meyot��܋�f6 8��<pk��EY�W��A29���OZ��5���M�[�%�`g�c~��!�rԋi5}�k��k�3��UQ�$���ݯ����#���+��������
��(��{��D�%�0
(���(��(���'��
Z)Lz��
��
=�;��@����*��]Ҷ�_�}4�
'���� ��*
(��
(��
(��
(���(����d����
F]�������=�F}sJx�
�Rd`����Ԟ^�Q�j��u.ߑ��v��Z�1�A�r�+#
@ �u�d�5�Z��6����X��+�� :ds����k�ռM�0؅��x%�����0`u<�g������ΚF��8,p�F�L
�^;�v���W�ݦ�f�7�}3*M5����;y|�m:�E��?:+t�˧M�
{���<��
?��V��CJFA�����N����㸪�QE
>5fa�d�{s���s���ڿ��9����~,��Z_����fY|�<h�v�����y���Exږ�m�D�g���2����L�7�]��d��ikwy3���[��8�w��$
�����
#ګ��
�o۷����yu%ͯğ��:%�Ȓh�曥[c.;m6��8
?"��p8?]�t#S�5���Mh���k��
����>F�,e'������Z���)�9�����ރrb1����U�VVJ�t ����>����Z��ڍ��zY�OYQ��=z���:׮��&�N9�!<��N~��,W�T�����-����l��R�c$���{�����=��D���WJ^-�	R]�j��� �t9��=*�{�EΛv��Ȼ�{Y��,d2wq�0Fr+��m"%��d|���S�����	�O�-Ɨ���Ig6��ϖ���q�:��H�qz-U��wѷ��#���\]���i�խ�}��_�Hψw����?�x�.��I��oxZX췺ӊG~ �}��X����9��k���mi�/xBԂ��+��gN�����g�m�G�+�
�G���som��v>�
�Q:_�6�s���Esm�~�
�
H?@-�=�aҴȀ#�Gi�O@A=q�c������V4�,C�v���Z��$�ע�~�J���Q�J�U)�&���Q����_ս���q�
(x�{��_�o���ž��x�{]����GY�M���;K��O�dq�1�L�#��:
�����M@��^�,���;�<+�x�^��GP=3��}6�OL�8�9�k�:i`i�+�����k��׽�9������@_~}��N1��.�L�z,��r2)
��r䓓�u$��w�~���?�COۋ���v���H��o붉�xwU��}�i���cp�%�叆�M/V�b���������P���h$�C��o�Oxy��3���S��匱5��[�ӥwRn���Vݭ��|1��Z���\G���I��Sz/-ב��T�����_�����ڿR�
l��#���xr��ú7�O�v9:ύ~O���>^�}{J�4�/YӬ����l&�# ���� �D��s�1�1���p{� ��j�/�N����p��2P�L=jrt�p�MZ�T�����2�x4�1��xZ�y�*I�-E���'�v��`!x���
����x��ӷ���c�J� �
�'�׿��EB9�m$֪�W�/��O?���x������nݶ�0Q�ݽ����h��0?䞧����MIWd�[躿��&��k����n&�{��e��ǩ���N��R��
�ߏ�npsOD��ޝ-���	ߦ�Deq�:zu�X��T�9�ق�à_BI�g���t�.��-݀n�1�IOLdf�����qU����X�I��l��J�7k__��:5*&�Ns����-���������?�SOP9�y�=�}�K����1�8'=l�ӵ*��;uϷ������#:Ub�f�e���;r뮍��g��(���]>��z���>���m�?��/|I�{7���tω�����	<ꗡ�wS[ҭ�{�P&��Zݝ���"��<��^���3�C�x�.��躄$�o4�Z�+�+�n���hߓ��9ɯ���r9���؟_�k���
�+|H�|�
��<uK�.�|q�o
er��/kWQi�,I�6�-�+�Dq�c?)ĘH�4�$�R��T�oT��tf��o�[i�i�c�c�6ӵ�;�����e�E�i��o�c��6R�>�������4rI�{h�":1B�d�
bO�9��K�����b�u��e�E�'�w�z�å�G�r�ZE�6���c&�6�	u�x�3\}����9����_�eWq�
����a�
"֦��$~�)�=�7�d�.!���NN#�u���k����Sx�Q6�򭒲�d������c�(֍5+(ݫ$�y_]5Zl�#�w�7�=���ko�|9����z6���A�i���w�kyeyl�Aqo<l��D�8����A��*ο�9|M�����s�
~'�qi�]j��?
|o��"�������|M�J�Ic$�/U�nm�Es:���� �rO�y�G=N}k�󜲦]U'rM�˾��z-�K4va1q�F�Mn�]:>�EW�vC1�����\��T����s�~����x�f��]m~��oo����^��=C��5�������<�?�l~'��bx�@�����
����
?���U��a��W�r�����?[˿�p����0���0?�ǧ���7#؞ޟ���qR�HRy8=3����\j������Z����)�u��������W�?�ʪJ/ċdv�B��{](	wm~�8�������@��A�g�c�oLW����_�?hO���
�W"�[�5:��o#Pҵ[Q"�jR�uF�M�����O���W��
���������F��G�~+𢺶��j^#mU�ف!59�飊�"v;Aq$2��(��A���o�����Bt���j�RN��-���V?����|	��#>�L�>3���[��^�"Q�Tf����\]�J�=���coq�?��g�j3׷<��>�qǭ~���
����>���ԑ��x�i0?햝�c8�<�/����,wG��
9�x����@N9<�=�'?�&��Ϩ���d������%��A�
�=��+���R}�����j~|���O���P0a�~�rO��׭~������~^���y�֯�x�F�`��8�:T��
����o��
��j��>>��=s�������]Q�{��{y����K+��
��x?w��u앓�v�d����Z���#����)F	��t#��g��~�'�K��`L�0�J�`��<K�s���g�v<w���
�#�i|��;�C:�q�=@*�?^z�l������ ��G'��?#���W��>o����
-:�VӢ�^�s�~f P#�����攀���ϸ�QS�	�B���'®�b$�;c���W#��U��
��_Y���B	ac�y��e��ק�G�C�$�
�8���i��wv�ۣ�s	}'<�o�j�6��������wm�ɟ�&3�??��4G�@n��=���NX��		�2�^�x�"��e
�*_����	�x���ЌuO
kr�=ڌ��<g�;�N�4�g�Zo����ז�3�Rx?o�(���
u��]+��m����
��;��׮?�4/�px�	����ۦk�����S?�O�g�'�7���8ߪ������5n/�#ώ�~��ֈ��x� u?�
ێO�Z���J�k��
����;�'��s	})� I_=sK~\.%i�콖��y�?�*00H��y9��}�)
3��$t�?�
��_�#���o����O��^B{���2O=F[�G=\[����0<��5����8�\|8�k��jK��N���/�ͯ<�ҿ����B�_�b$��h~l�[h�<�v�����MX��C�2�C�^+�����R������^��_X����YO�#}���|z��2�xSK��^^�R:����
�o���
��[+������^zD����{��.v����"�oxY'wf����@`�����NiFr>�q۾>����_�G_����*b;šhi��?~x=�FGPkJ?�#ǂ��|p��f����N[f��;u�U�
ǈ�t�'��M�ڿ[�u���r��]xMu����`�5m/�����~��8��x����
Y�KGO^}{q�����
���}����W�
�K����M|p8Ϸ�j?�#�
�De�~*|O`�ބ��A3�r?��
�/�m0�O��
6����
Wg$�����V����U��i�n�[�?�����4d�
��]�T	-�Bx��|(����
�S�{E�b���į��$�/�c����L��Ɇ8�]�&"-��H��.��
��ͮ��ϊ�Q��<C�Ď��$0`�z�g�o��?gOهS��>����
����
���:�k�����g����+M=!]��U
�I"����8�0X�>'�rR�����vIG[������/��\7�e�~'��աI֣�i�ԃ��ܟoDޗ{��^�
[������@�
q��~������t<���GLt���恞��
�n����qj*=���mm�%��������)�$�Q�G��ݖ�i�
�z�g����
�8���`�<�n�Q�׏� � ����Ob?���Ü�ٲ
�j���'��=Z��
�h�h5ku���[����
|?����>�L����~(æ���
G�<a��o@H���x{M
���˜���?�wĿ���t�vc72|0��z�;�����
�b���\,�>�����p��ڸ
y��c���
`_�#Jk?�]�>>5��M焮�ե�QՄ^��p�'?+��|�,��l|9,������
�
�c:���bP��P/����#��%�28��^��_ɭS��mm��F���i.xh�uk[v�������aԓ�p�x�y<��=��:G�Ҝ\�8���zPH�,@U�G�$�����_/9�]���O��|��C�V���k��
%q��P{c����|TS\G��9��s�n�ڳ�u8�VTb�Np	 ���~�\^�3�� ��9�y�z���3�K�Z���
�y��W;p�Yɫ�G�yo���w:�]J�
�@wd��ӎ��j�d��vff#'��Q�{8�J�6F~���=����@ ��oz��'Q�^��6���أ�����]�Z_��ah��}��
��v�z����|΄��J��i���Z3���R@8��c��棑���4gnpA�I�7S�GZvJͽ���kh�����a�NsP�o&⢒�m��^n��T��z�G~9�Q�nBx�n��z`v#�+����
��k�
��q࿆ZN���W�����J��ѐot�:��T�%��&�q2���ad���������m�iᯈ�`���I-�8g���V������̵��h�B�Xċ�t�3�e��M\�e��&��m4���릏k��{��Gdyf��ӡ�氌�%��(ƤZ�7(>d��vG�3�����H�d�y�|����
��0����;Î�\��
�z������w��I�M�{]�k_�7����?>nWi咽z;��g�
�(���#����?���I�o_����5�A�
?���S��C�?ϥ<�:�uu����
�)�s����;���
?�?-�`����
����QE��N?L�d�<q����_\w⤨[?���偟�}�����$��;�4�<o�c��q��~?+�ی�<秷Ŏ�?A��c�?��W���|�t�յ�����+�{k��)����}]����e��w�m�z~:�0�Nq��MW=}4ۖ�:c������2p��ےs�����#ş�*���4=\�
�>�?�2~���\$��d��鞇���U����4��/��?/�mgC�/E�o��1�7�Ǉta�����H{c�$c����|�ך����8���S�J?�Y��$<���f�W�=����n���>9y�۩���
_���
���)o��|A���oГ׳N���_�'�]��
��|2��~!�1t1�濷������{Z~PV����ǡ�V�.�I���}�EW�;��]_�^]��^gz峿���կ���aEU���5���%��< �'�yR�=+2�pU��$H�2��\xGz�P�K[{;��y���:(TQ���o��O���ۨ���_i�M�4�9��	Pa��N}�
ѮF���}))E4������
(�����B�(�
��(
��(
�e8לu�;�y��MPH	������?ή��
���=QS����O��ދoOW��QH�(��(��(��(�o���
2ekk����
(��WP�@���#�e���
tg�N*�������lDڂ�kD�^]����
�M4PF��� ���

�Oa�O8�8�g�r�9��-�8g
��H��c<dt�[Y�U����`p�g��s� d(����`��GR9��N
�玽�溡N�ml�.�V�_k�z��bqr�E�=4j�%���v��ڀ9u'�9{u=���.���j��ߧ��
[��1�'v��
(������{_�QE�(��s��
h����|\�4C�
<{�W�G��3��wr1�J�
-:�[�iڌ�^k�z���%ƪ%wn~�	�'��_���u,��~թD��?|QU*pF|%��ǯ�[���Bz�����H����"�":�F=�}�i
�J������}4�׶���oi�;ꭿ]����z�+qo�=~�{ ���'�b�xM�h����*��w��s�:�7�c?�5���}0l��$��tN:�xCR�m��G2H� 8��pI
�qӞ{��
;_�n�z-������ݵ�.�
�>G��W:>�� �ܪ3����v�i�8�zM>O^��Hg�4���7
Ĩ'�8���+�n=20}�F
�׏�Ld�1���x���p=+e$�Iݭ������s��][Kk�MiW翡�c1����Sݱ�,�J"���]���vp	�>�W�sx~1&����='Ko��"s������[H��i����O�^*����՚��H�=s�_���ġ�	�0tm(�{8�_`=���w��ni�_��,SW�����r�
��2w�U�'=��M�?���8�m߷?�m�qk�K�ͬ������ֿو=;������
������jX���G���������{:{��N�8��=sׯ=;����s(o�>��m&�����^�M]-_K�����~��f�	~��
�&�k�F���>�ST����z�Kq�j��U���xn���M��Z&���_Kk:�+f�̭e�Ϥ��oo��h�B**(U�0��
�0��UB�1�t��C?�����ǡY����I��Əj	�u[�����u]^�O��3<��%�sk�]��f-�7�N�����n�|B��?<F���׍��aK2�7dd	�
�h_g�~;��xr�I��I[��L$j��bۊ�=�=�Ҕ�w����(���Ur�ѫ�GZ8�G�۪iG٭��V��ou}�ƞ�|K�=sL�t�=R��M������;�[�;�Z����	U�kk�$h��Օ��y��������2���xf�;/	Yx�?xJ�,�z�|_a���6=��zj߾���yv��C���"��o6�x����6�M}w*E���%�Gb#�$�oid`�A��?���φ�
i�_�_��ܭ���[��5�`�t��A�5KwRC����^�H%���L�����s�������u�R?O�Juiԧ��g*����2P���D�W7/C��@eTr���}:t�:���JN�X��%�)$�Qri+��g���v����}��� �z�
RO���������>�+��v�����
��
��Oo/]���
	?�J�A�<�
A�u�����4������b�j�_�N�O���ַϯ�Zi��&�?�7x �����ӭ@[�=q�sڑ�Sߎ����T��}}���w��ZYr�7y$�}�{�^���A�
�Z�
�;���(g�Y�'{�^�s�'�-��ߊ~+��h�c<���I��=s_��๞)a�����H�x�O�������	��O��_ٛᶹn�kgs���Io�׀�K���O�-Ը�Zx.�(��-�����
��hzw������jO���Sl/�[M���M���H!7�jK
�V)1D$1������9T���Oe���9�
v�G��w���q�3q_�
����#��ap,&2x�{L=:�q��Q�s�zF1�^����˂2��y��a���֓�ׯZ�j�2�*�������ݴ�X��"'��|>ֿi��f�S�<)�ɼ�
�&{�^�I�'���j�i��L�iDw�W�t�!Y�E���ǻ
�9�lq�`�'9���W���þ-�5�W���\�Z�Ïi��\kw��G�Y��3)���P�ʂ?���(������XX`�D%q�s��r[ �����������Oq&mW��0�+��IT�W��5,=J�՝ԤܜZZ�~O�	�9�<�.����6�]�0��Q����E���M.��b�&O`r=rq��{濶?�7���?a�bٜ������������y/P2K7����m�+�GOp?>�#>ƿ���7�7��*�K�!_�_�Yr:���P�q�#���vq#�
c�h���ʖ��t�W?
���'�V{尿Z����ʿ��8���sԎ�,~'x��qRd_�oP�v����*1����f�c?��������K�9
]��J�A,
�0q_�O�D��٧�����_�0���
�a쒱�������xT��;�g`�9�kbπH�+��� 
�<�W�o/�z��/�뮟�v|�h��Q��ڿ-��e�]�O,�s����Kn�ʗ�U�.��o<	��xϛ������2�����K��X�֟������v��%߃m|-�f�O2��/1��5�`-�ňԎ@;/�,ś�Ҿ#�\%�+�'�s"�B��
\���'�Mk�kߌ��?b���	�8x3㶯soH�m�|M�i7���h��O$j�)c#�5���X�����Q{�m����i��4���~Y6�+�}m{m�e�oVKQ���H3�s_�N-V���y�#�*� d���Uy:1������\pqԌ��ێ��Ӯ���o���V���s�|:3�Z�fO���8�c�=��V��'�?3�=?:���:-��
�G?�����Ѓ�?c�¾��[�n�=�|�ֲ��2�
�q|c�e�?/�#`g����#����
���3g#�v�
8���R)
�������T�	� p
<c���Ϧx��C䞄����c�>�U���G�_��
רN?��-���m�yvV�.p|��߯�����A��dt���?�~���IJ���T{8*�J��/�i���uN���3�Nx����z���c���?ZS׮x˷���R �?Ӟ��ҟ,{/��俦��Iu{u~���5���韩?���i��
>cӷ'�t��$����}�^�
O_�
V_,{/�^�W��N�����X��2��H� �G�Ҙs�����
?�Va�y��?����L�x烏_�qE�D���A�%g�=�_Mv�J��9`��>���3J	<�c�?����3������	��
�_��{Ӵ�_����~/�I5k�
Z_u�z.�,21���O�~ߏ^j59��׮{qۿ=�ղ���=������������8��-k'����U$���Y饾Z��eϩ�~��y�����~?�y���R�?^}_\�
��IF?ʴVZ%��m<�G�'�������
�H����2}O�R8������
�AM@9�zU�M���N�7i馝7�-O���}�
�E�! g9�8�s�'�����i3�89��= ���
/oJ�G�///_��j��ۛo���9�A�^�z��!�q�q��ӊ}����I����I�v۠{Ywk�����x<co}
 �?N�����#����zT�d�ˡ�{�
���R�;&�Wz.�ko=��n�睛Rk���k����h"�~g��q��d�s�Jz�~������<(��'�<�?�g�ݩF
������~=�Q~f����^���z]������O!�Y���rG#��㊰z���ޫ7Q�N��8�1��[�	���v�u�]>w�V�_�g�O�#�
Q�*�,�O����7���5ox��S�/�v��ͣj���y�,���ϓ�E�qw��w7ϱ����r>F�
�x|?�@�Q��OxW�:�u�x^�F���W�\&i���]V�K[��g�6��.�eU�PIn��7��
�z�D�o��O�W�?4�Fm[�l�%�񟀭�{+��/ึ�{-[U���3�xRE(����2�L��������0"������1¬0@�H
P����#��kS˲�R��5�%�����K��}	������ӊW��k��wn��c��h�A����:��v<v�u2CG�p	#�A��9���eOu$�,��c�zs��{rs�T`���ӏ�y��_S��'�7�ێ���ۧD����1JM7%k��_��e�V�K�9<��u'99''?�z�Q(�G\䞿�i��s��z�>���]���A��zw�ּ�JRm�^��D��;;IY$��~_!W����<z��㑂x#�=�
8<������_��F
��S��׫�
/�&�j��z�u�G����A���旷��1���\�u��ӟ���[[O7�M��^�wQI.��k�����۷v��ۏQ�3�v���/�k�����wY���/�K�E���I侼����*�0æ@�t�`�H�b��>��������yc�{y.f�V8�Y����%����H�Ym��
����=Zm.�I���nt?	G���yvj:�P@&��0!�iͲF>S�su�e�����ޖ�+NVM�n��m&�����\uŸz���Q�8���|��))Q���N��i+6ऴџ(=����s;��O#�\O+3�4�1�Ydv���p[ �c�r?T���
�O�!�7��+�+���᧞@��x�8\YFz,Z��*Ѡ<^Z�*�.؟���[�7�w�7x3��'�/�|W�x�CMcS�|E���7(o��Y�y����"[p�nb͂?�j�i?�
j���}��~$�5/�WH�uܺn���&YY�X���o*?�\1����1�m�,��q8�s���R������R�Ԝ�v�~�I�L������������dX\R�c��?a*�l�R���MӬ��w�������p�}�a��0���9����Z	 �8�#�n�9���{����N��a�@���
�Ѣ�_���#�x�����a�콶�2mnc<�����
���=�
��z�9�5��O����.hU��m��]u�]�����>ɱ�k����eG��աZ2�|������^�-��㞼�
:Nr:�<c�������߿�ǌg�_�KWc���?΀�v�
?�_zZ(
��(i4����
���e��
��
�>���HN)���PI����N�4��_�JOe�kjխ{.�������
"h�N�o�C�LqׯC�L�Ǝ�G����~<xB�t/�C����\��#�w����ھ�.MRO秤uݯ�M�F�i��e~�9�|��9à���A�d����_���I
� ��k�F���*$���q��.�t={��k�����B:oa���8'מ���_���]����/�_�����0�$�z[���>i����=��9:�������
,�
>z|����?��_`~ч���
�^v���#�¾E�O��
�}G��Z)r$�������?.���饽4^���"�bO��
��1xK��<�a$�����_ć�A@��|
Gx/���th��+�o# �Q���!�4�v�k_�o�>ǡ������{���>��Q_4wQ@7$率׮n���
�:��6�V�_������W��,d�tK���q��2����W����1H���q;�\~��v��G�A2\A�r���?Q�;����Ӝr�Z�k_����_V�Ž���Z'oM���%Q\���uo�m��
(���(���(�vvK�~�>o�[hLp8'=��g���t�B2(�/.�{�~����u��
_���Eih����u����������(������@
(��Q@QN;�U�o�v
��B�Af!UAfc�P:�{Z��4�O?��	2�������4V��4���f<@99��9�W�j�j�)j��א\�e��@���u�w����h�-al���68+�=��9υ�s�t�c�~$��tB6IY��_t����x��Km�-%���k�wm}t�@�r3��
��֝E�y�J�ݾ����
�fy�w{�E�k��QZ(��
(��
(��������
�,�6����D�K⏄�t8`|�,ڗ��;XclrCK"��tW��xj�H|i��d���mg( ���E*��
t91��Y򦍡�+�24#��"e`A2�>�����;_~��
�Po�{�ë́�O�~-��_�w�c���^?��/=�}�$M���P'�07E�
V�~냪G��&�v�n���8q�*�����M^�Yu{��|_⛓u�r���]��:	�
O���5φe`yV!ԕa��poǥX���qq+�,�H�ՙ�g<��<�:t3c�9��cֿ@���V�k�G����<�+E5���Oo�궨;�e�9V^p2�q��'����z��k^��؈��q�\�א}a$c��{c�v��s��#������Q�)����~~�帽�[VZ�O���=��w��<c�Q���Uy�O�z��ϗc}���U-쥐�ݹ�
�������)t+6��d��l����
L�W���*�?��jټ{4^n������^~�Ц��@�.��T��s�0;�����
�椚��/]n%Ⱆ�@�-����c�)
�1������j����^_>T�o��n��c��RT0� �\��}-&ԝ��ӷ[�����
�i�m�3Q`<�_�W�Jz�����W�m��J�'���8��?��}1���?��m)m�h���Y����1��4�q������Ԣ^d����_����}���
Z����SI�6V����E��4�^�*NIZ�ޯN���n���#,�<�����4r#����2��YNA�Z�����྿���?	��������։e�������> i�v�,�w~+��[��- �1���\�
C��D�"S��=�
�X��R�Q�ϯn�?��_�O��x����q�`��d�JX�iע�N�|Bq�J���egmS>��x׈�B���9�|���I(TZ|T��~������?i�l��.'�-�Ux?V�c�?h_
�k��Xx�N�����Zl��z���c�Z�L��l��K���.�i-�&��Y!o�r��`�æ޼�GlqC��O���q���3�����z���
#�{�?��-�VO�y&'�Jju!��R�K�~�mjT�J˝������N.�8���c��WK�>�rp���~X��m�]	F�����=��:Sh�8�<z��O��W�v�O-�����I�~Z��?��ub�GJJ(���K�䬗o�����v��S�珦1۞�A�g�?�4#|�����p:�_��n�k��vM+�+[�[M���j���]۷^���$�����Ӫéj�'�Yh�>��P�]�WvS?�/��AV��G7���|R$ךu�Ѕ��4o�7���I�⯅l|_���g�<M���X�!���~�j��4J���uo{�OG6��[��K�9�?�\��@�?��Rz������
���
��X�0��0����=�~�A>��(q������ҡ��a)�C1�MF4爡)S�"�t�Ӓj�Q���'��=�\�<����r�I�
���t9�4�4��+toM��
��
b�_���,���
x����m7�<Y�o^���

�ft��������$�!f��-4�&�k���m�;h�?�Fb�@�qМc�NH��sɨT��X�X�I�<��� {R#��0�<�|�}��ϣ��)�	.��k��b&�晦)G�X�G//<��aN1�iӎ�N][g����?��c�ta���N\%-iЦ��]��i+�z����;��C������
���{�~�Kt��
!/��5���%�eg�ؕkb=s��e����<��qֿ��"O����Nσ�����<@��V�^��X����Cl�=�	�ո��.	F��5�׏~�[�}���6���Mik�^������8��C�G��H{�SP�H
���oC����.�3�Z�\�/�i�����D��t�#(�
��f���9���~��)xzy�Kw�|E֊��;K?i�#hCvTd8�8�\�լd ��
��t���و��w��8g���4�qu���[{/^��ϟ̣'��Q������zY=���%�t�Ԋ���*���2��B���Ć{��=�
�y��?k0��⏁�D����^�̫��3c���������)i.��ʂ��s�p� ��j���
��/�i����Ol��x�
�֪�]ă`�Ӽ/��K2ŐD������PK�	e OT�
��Cm]�6������������.�&"�i�|���ӳ��C�k$�JZny<�Ǹ�1��<�N���w��k}u��;ym���
Rą�������^:b��'��}�
�?�R�JK�I_��W���w^��=S�Y�Ŵ����?��}�n�<4�-��To������N9�s�
���w��W���
����?Z˿ܰ�
���J#����E)�qI\ghP2x���u��րW'�ۯ�<�?�����܌�˗�� g���8�
��r9���
w鎸���#w\�{�~�9��������=��<[�x��rNy�ONy��x�w`����pO����@ӷ��q��r{�ocM��������?�e
��[��
(�Q�3���D���t=��T��:��~^�
�jZ
)	��?����KHFx����ݨ���HO�Ӝ�
���u���_ӯO�Ԭ�����4�~�m嵿_�W��>����
u�T\������~�=D��{�ǯ~���#4���Jߐ��Q���ӟ΀�$��S�������+�`���
��޴k�yy|�}�~������翦G�
U9��q�c�N�Нs������z��(�{���
���Ӳ��MH�-���׷��㨤'
�J�su��=^�������_;ۦ��*?_�Cc�>�����J�6�#��?����rH�S�#'
t��z��0X�1�9�y������F���-���ڭ���B���f������l��{�`~=ǧ^�~5Ni��|ʹ�A����01�I�
'�ź�
ec�Xd�����x�r8��5��^Y$
#����Y�9!B�K1Td�
���]HF�(���K[���m���ܴ�'t�wmmm��~��X�H?�ڽ�����

<Q
,����R�.&�q���?@��,̫�,��@F,@�[M/���*�	��,��I�bs�*px��Ks���
�
��H�-�߁e��#Ism(f��k�5�+�[E�jgND�t?%ήIv?�8�㳶���v�k6�#1vH��b�A$�aF[�99'����K��}R���u��+�l�xf��|d��g$�KF�����)�u�;�8�K�����
��W�w����ӷ^����'�����Ϧ�c��E"���5�������E ���{{~~�һ���r��~V������t�d�����z�=N	�}�g�aס�2���'�y
.��8�5�|A����� 񗈯"��46����B�"Al)9˹wuQ�`�J��%Q���K��Y/y�V��]����c���0��S��
��]�u%���m�-OϏ�)7�>�;�ᗅ�'�~?�X���g��.�Ǩ]3+	"���cm�b�튿��
)q�AڈUs����A%���0H�Iϭ�k���|m���/�z��%֯e:e�SL���C��F��A���U
M���77HI瓑랧����=9���*ϧ���R��
��$�������1��x%�.
����8�4�p�^�*��9U�F���7-h$��]����p.�
d���gg��`ls��I�nz��3�����ݗ�j_���눈d�Ķ�d��K#O���ԉ#!�1�'��K�
����=�^�ml5;6�8k}V�
�8�@l������e�hߍڜm�.>$x����ڄ�����t�j��ĜB|�vvua��v�0�WK����G�'у(���D�Z��L��#3��i�����Or���h>�]�ӵKƇ�>;��Bףy[Y_��4�gh*��7�K���K�i2`��5��7v�\BD�̂Du�J���X���[���n��X�aJ����X0`�+��_�9����	��F��φ���]������}�M&�])��S*�3ɲ/�]��<�.Xy�W��q�S�	e��q�xf�ٴ�OW���l����Y�R�F}��Z�7>qP�9YRĴ���	�ܽ�ќ���{�
�w�&q�~����R7S�rÎ���y���M4|��0x�
'Ӷ+����gu����K�w�����k5�kߵ�Z����@��zzg߸�b�H0zs����
�{R�=?�c1��
8�G�8�x��q�
����
u����u?�=��={c��u��뜜u����
���#6l�~���j0I=�x����i�r�z����GӞ���FA�
���B�߶���-���~��|z'�;S�j��s��y�ӿ><$��_`|z�
�b�2~mIO��M���־@a���8����
��۷�u�W���qW�����>K��
#���l�W�[��z�ם6�q_��ܒ�?ֿ�_ȓ�����p3��.�+���8������
!�_�pF��z�oNU��~c��
k��[mu߽��
#��?����-R�?�c�
��+丰1������k�_�,gD��
����#<ǰ�}?�|��?��3��U��4��狀��?.���{�g���~��
�Sw���s��^���
��M����x���g��o����
���H����͍�=��}����+���h�
�z�Z��[3����4��%kvIh��i�(���ô(���{連[Ͻ�{�
W)r��~�WZ/=�؟~����~A��	>�?O���oF�]�Vk�� n.�V������
yz�y�k�2�K'#|4d���Bx��1�8���M�5yw0�\�2�Ӟ:0�A�<�S�ݞ����w����ϒpkD�~}���=R�2#�9�~��\N-ɯ=����Et�t��QE'|ݒ��<�
_�FQEHQM]?������:��t�
��
���U{��ڷm���
[>�[��~#����
�(�ˮ����AEVR��
_���0��*@(��4���
(���[��������Tf�Y@3�yH����s����#5��YZ�s!bR@8�8�Tv$�Ӓ{
�)����[�Y���I�I!q�B����+�{�t��??��O3_�8��_4��oW�Dx�=�q��������Z+v��l���
(����(��(�߽�(��
(��
�6 �p+�L.s�������F���
�&Ǌ�!�v�?�/]�zυ�o
�xѴkY.o��n��O���mm����@̶��G�o�Mo ����x�
�/_~%�P_[�eyo՝�2[][\ē[�[ʍ�M��)�fIԫ�|�"��0�_YT��o^����-���c^����{^.�G��Ͽ�u���:����YJ�<�2�H#������\g<�
�_��k���
�����:k�������Z/�j�\����b���k���$�\��y����.�q�Z���Z(E����I$�̿�?�!w�+���'�_�Q��V��_�}��_�^���d[�.�֡����f��i��x5��;�bi¢�"�U����e�����ﯔ��7���ɽ쯵�m���\��l�z�����lW?��kajѩ?i�(@��`1
��Nzk�O�o�	��l~��=����>x�����;mFXi-�x��Қ�_���x:�]���[d���].��o���"�Lc�?���	��_��I���H����=�Z�������ݬ�[G�bV�,4te������#e��B;��MF������,U�m�/m��C���i�^�� �Q��6���e�۲��{���
�0�g��~�Zw��Chm|e�N��P�[��1�{O�U�����	
�%�V������k+��2��A�拮��ɸ��;�ۓ��� ����MoP[[���$Q�ڑ���D����
����_�?�bӼg��N�m���O���7lo��<Ƒc��G-���X�+�s'�ce~X�5vݵ_~���[N��sn�JJ�W��
֝������k�Kǉ�����.���@���g�?d�tL���@�&���l�F9��L�;����9�
���uڟ�,�e��t�5/|(��~)�:�
�w&�k{g��E>dמ�Ԅ��pڅ��_��,��<3C,�M��o��,�ȭ�##�R�0Fr{�h����kK��m7��ݎɩI[�u��۾ݵ뽯lw�9�
\q�\�G�=x�����s��C����8ǽH���ߎ����w��9n����O��$a�F3�y�3_z|�
�s|j���_�^Լ/���W7v��5���5}4������K{[�k8�2�۵Ċ���"�
�,�������O�)�
�H~!�����Z���_�:[̶12����̗3���R�^��=ľ^�e5û�k}K�v�VUZ�������=5{���Ƶx��Q:�)K[1�8�ү%��qm��-���KY.�[_䏈�����S[x�����bg�V�l��� ��t����
��ѕP��<2[k���h�BU�H�B�ep�~R:�J����
;��<s1�֫�k��y�~,ЦkU��S��o�����o��܊O����+����ĭ�?�|��o��&R�`]�n���!�t'����Z�Y��g��&��M��iY$��]�~;��(��ϸ1s������՗4UZu[�i[�g�
��t�
9���?֤���X��i��*�Jһ1�P6s�������t������<�0ۀ���k��c��n��
�7䜬�>�t*2
���p�6�aI���<�������{��{���Z��v�~=c*Z~�'U��R��ڵ�0�v�m�G����ٿ���	-��
|q��s�*�/�Xm9!��n!���lI=�!��6A����
�o����]w�F��h���O��
	ŭ%׊M�1�U�v��M���"W��3�	�Q��7}�߷^-�
��~Ⱦ�E����
	%�.��Z�~(b�'����k��}��q�k௎�V�M�>$��o�7ϯ�W�/�$�0�����Q�K[��tK ��>\��5���F�Y�(���p��匍Z��FQZ�k(�����l�˸��<�2��/	C�ʴ=�L\k�j�q�n�gN2ikxC������ld��� ��<�rF2z�r�����S�b����n071%�`s���#,~��g���
�_0�ot��m�I[k��|��G�]'5F��Q�����I��^Z�޾����#�?�oJ]�c�s����:�I���~eK'������y
q�$�1޿�'�	����W�
�/��ᇈ�=��/_�F뱅޻du˝��ͩ88�A��
�?��#{��x;��ls�xsÖ�"����:���hA'q�Q�F:����v�i�o�_���V~�ޅ��D��Ҵ�k��+��8�7��)Bm�Km��~6����AY7ӗ�{���j��r?��X���x)��|(�5K����]x��2�Pp��t�NHP6�H�If��$cӦ�x�~��
�d~.[|Z�
��|u����^����'ᾛ"ȲB���l5	^a�8�\�@#�t��}
��O��O<
����-©[�T�e��/���2�\�ͷu}�E����-���=?O���P�.m�,�by��n�Hm--�Ug�{��#�(�<�2�+
�
�����^��B���
go����ؼW�x&��~:������7�<Ok#�WT��Ԝ���@��*���?�&~��U~Һ�3�#Ó�����gy��7�<}�SJ�;�x{O�v>��u�vt�����Nf�K���\���
aA�@'..8�2N>w�q��Xh;轢��Y����߉xJ-�u%�U��ݛz���O�D%r=9��
��t�(��𥢾	ݿ�����QE/�S�
�5KP�0��;�����L���v�^W�ת��W�����2���
l�ҷ�
=��ӏ÷�axw?����\��;��'`����bs�ON�+����o�k�-��~����Xv�҃�
�P����
?�֓����;�(�
=���z�;�FH���
==i)�s������
KH8��1���}:b���}�
Ͽ
�px?�~�����Q��>���؜����֤#9����1���R�'�NO��錜�
P�1ܟ�3��o�ޙ��?�<��3��)�g���?�S�Q�'��3��:�(����
�	?_~����4��=�ϯSڤ�9�~OL��
�=i�}�����;g$��
�Q��8���
(�x�=}};��֔�y��
8�?*A������';A�Z
u��	��
~^��^)�ܑ�>�ק�:s@##�?�~��B�:u����
멉�A@B�����?����SS
����<q�{z��9���6�o���?�?N(^������^8�$�lu�s�ޚ�G���
?��
�!�5�j�]����Sw��^٧�@'����B�@������玴�%y4���7�뾈s1�dI��~���Fj�#��<�1�ԑϦ^�*���P�7cnCq�}�'t���W9s�I1`��I铌�N��t�<��pW�F�7�����m馛�wP�Jr�Z_��k��m��F
�~`3،w�ϡ
c��9�oe��%��=p3�8�$`��#��5��$�=i�Ӯ9������NM���_W����iaaN���{;m�]���s��'�����?����n��?�7�����Z�����OJ$X��
��ġt-���X/o���弸�X��
>Q���v���
���=����ϺU�%ϊ�Cy��
��YL�Z	��~�u�ȯu]^�P���I � 5���X��9 �Z�Q����.�����ϱ1�e�e��
��I�k���g���
��O��y��
h�Z�]�m,<	����pZ���m}���*��lc�X�o23�x���p2@��@�O�q_�
�;~/���|�5Œ����x��I�d���0��r�Q���k;-��?px�T�9���5�ĸ��q�Qw�5�R���Kk7�m�Ȱ��I�iՏ<�]e���u��a:w��'ܟ��Ґ����_�8$
k`c���s�&�ߧ�=��Wɽ����m���h��(�%gb����O�o��>��F:����
�d�y9�=��?O_nh�9=s�c����4�X9۞�@\q�3��ӭM���^�6�koq�M�ދ�۶��n9����8;���{���o�*?���Z�/޿�jm����d��$�4Y�UO�ۨ]J��~����o��
�M��M�y�l^-�Y9u=f�4v:|@�K�mߴ�cWn6%~-�.��_k�/���׈�;�[P����{�ZC�'l0�@��H�
1�����
�0K���|W�9[�I4�]ڶ����O��q'ˋ3<3�W�;a\��Wǵ�TS澩N�����:zp88�׃Ԏ	=i�� d�:r{s�\z��h����?¥
���$�G?��z��T����wnjW}^�-�OO#�9�5
���R}�l�[.�m~��ԟ��VY�c�+2�N��Wfۛ�,��2�8ӥ5?oF��C�U��{��w	';^7��Q��
�<�'9���v��> ~�|M��ú���kw7�W7�wp���"�[hm�d�H�fe��T'~3���'73�r��-Բ�+1,�,��!fbY��;��6X��_���nᬾ�+F��X�NP�!N<�k�M'+��?�|��6�/<P�t����a,���!V��T�SQԄ[�)Aԍ>Y$���Ҹ�@=8�{{J�������3⷇�w���
c��+Oةo/P�.%D����h���Չ*�Ĥ��x�a�l��x�Oʔ`���t�s���C����[��_����'ҫFͦ�J�=S�Z����>"ȳ�F8�&;R�XM'u8Y5}9�Ғ�U���>)�<k��:�W�^��[j6w0�d���e#��=�G&:����
A�ߞ?�����k���E�
,���&�v�b��CD��92Bů-�S\��������2�'����=�W�6E�����X�rN|�T���VIﵝ��������.*̲\U)ƕ:󩂫(���YɺRW��^2��O������nԴP:���M����eoW�]���+[}������f#t=��������ƣ�����\���v��֤ ���O~8�`�A=s�=^��s��it��ֻz��Rq�OO��~)i9��:��
*��&�����_��~Vo��C�~?���mL�K�?,�{��d����
����?�O��	�jr���?��ߒk�z�\���z%���
C���ڻwv��������o�pG�5���
�u��8=ۏz�pf���矯�;�j��>"������
�g[����_�3�@�?�?������8�������
�?0�F�J}�:٫[���]�6�����4_�Z��@�kB{}~�?Z�[��?�?����i6��es�
1���j�����*2?������+�jN���D�.�m}}�?/������������-�
�������~O����dW��_�W�� o�?w��ǭ���ғ��¿�Z�\��Z+�u�6�������r����r���
�QE�g`QE
QE
Q�a�Ha��^���gPy�
�����g$ܟ�V�_�[jk	5k[�i�����kw�g��&���bAg�C�:eOL�D�:U��!s���Ѿ�2�RO%\�q��L���{Wc\�-�ޖ���XZ����%T���
(������G붏^�]~�(��������
(��
k�?��
?�:����)�Z�t����	���@N0
�=�M��C����;t��N�bދ��$�w�j0��+9Z��րQEHQM+�
_�u��@R��֒���[A,�@Xћ�`�8<g$}zj��Nɦ�
=7_�}	��"��J�l�Y~������I�y$U8�l�=91�>�$�=����Iw���P�w��Q�s�dS+���Z����}u��[X��L��6��ݻt�y~w]�(�����[���i��_���O�EU
QE
QE
QE
QE
R�����▓�#����JOf����.� �^� �`��{�Q�+���r=A�:�`rz�1̔V��R����'���
D|�
�j|s�=]�6�|��ýr��v����q�E>��5�2��%���s�D6nNB��r)��'�I=s�s�%�S��W�'�iv���hz��wzf�cw�_�ʻ�����K{�d�$�FW�;I濗��[�F���f���K���˫��	j�F�F���1kt3�c�e�:[��Ht�S!A�<���f�ܣv�{�_�CH��%�V����N���gϨ�Q�O|����WQ���7Ś�4�d�ѵn�)�� �'���9�/�8�I<W3�G�����ǵ*�
##����
_�
W�4��V�[�w'u�O�����~�~��X�D�qe��oh�D̥n-'PHYbr�ʬ�K��V?ͧ�#��~+kz����OҴo�u�x��*��'���mk�[M'W�]�y���O��+s�wR\�����i���Cu����CG�B�Ƀ��
�	�8&7��@��?�8��L0������Ty�5�[�p��b�7
��i0
g���O*������u����]����s6�K��oM��k��o��|B�U�K�
�H�_�<�}6g��E�6��^�ѻFY#��/:`�]�^d2�)0ǐB���Fx
�N8�秮3׶+�G>$��=�K:O�/����R^'�����Yw-ݼ�!
�Z6�Woˏ�|q�
_�
�ux�ek���>�b�n<�/xM��rc�J�!�\�T�QO$`⾆��劫).�����{k��frû�����캟��[�
g?�ǿ���
@��'�$g��9N3��?�O�
����V�$��o��%���+oizմ$�.����"�@���6ı5�?�گ������
��t�H�/x3CԱ�6�%��Dc<�f���$����};w]n��^�\}[I�n�
w��?�i>`H#=	�z�0:�]ꈈ ��9��=����~����s����������z�q�k>������I�v�$W�k�m��j]���`*.u�n�G�^��ߜ��l��,�����%����[u�E��,:j��;������~^���q/�i@��� S��F��ߊ�y��3H<g9�ϯ�5�����߷Ŏ���mSh���u�`�7~�(=�G|�3\-�
�g�
'h��x#������/��>`�mX��<J�g�i7Q$��������c�h%hӂo����-|����T2N��
,�s�\s�����{~y��{��!�
���9�����<��w�C��#� ��_���
��߳��c�~-�{�=
��O���W���z����F��������4f��5N���]��
����p2
�OLo��P����?�?���L_�#�i���x����xU{��Ա���Z��D�(ơ"'�)�:�HB���y�b@O&B�����)��W��ݺ�����Z����淶ڣOfޮ-�kw齗K���[~PS�䁃�p
y��@�_���
�
~��đ.�a���p�R�����\����4����`''5�w�.��^�v��x�����~&Mf�]��*��A�ӡ��m_Y�s�ꖡ��!��H��2ўj��+B�$�w�ï�e��4$ں}��ϯ���?as����;���փ4?>]�߄翷� �G�����b%U6~P��/�mb��kiR/�������5�c���>ֵ�o2_�X�\Oe�ۢyg��H�-�ZIf�4.@2˩|*��<��oH��|)�hv1i��ooj��[&�{-?N�X�Q�����cA�,��c��)�.������7ƚyO����?��;t�-���I~���Ћ��x
��ź�$U+c�X����sv�M���b�}:�����tڋ���=/���o��]��!��/����k�N�u�x��:��ymaey��^k:��5���[��N��b�S`a����
�s��ߵ��U�x������gO��)��MkS�e�i�g���3h���.���F(�#׬��-��\Y[j��
E-�7��
��
jx{�ýU�|�i~�펢n7������j]��G,�|�c����SH�
8��
t
�
���S�z5��R�Xx&�X�;;h�J˭����u9^r��Z�鬚��Km��{�1�S��O��ᗄ>�"��
�H��4J�X ���6����Q��5֡��4��ג�us4�J�^�����t��p3�S��@G��
���sM����g��)ԗ4����u��t:#e��QX�	�8���j���
x#C���������~g��q��[g���8�܎O�[�3������}OZ��<�Sjy�~-��J��
?���q��U�������ֲ�
�<?�z�������������S���'����������r�ɴ��(���/S�T�����
_�=8�Ns��� �q����O�<<q�~�\N}�������{�}��;��|s�Ҁ~��oϿo^�
�E���sװ��c��HO�$�����GL{P��#�O���
�pz�
V$�����ޢ^���
�j���c����j 	#?����	�QE
T\�2>�z��
g��<ԵL�3������>���
��d�������L���9=�?O���$����4ͫ�D8��:T=�^_��T�#$���s�~��
3����;���G9䜊�I;�}�_ӹ%dc�?�ӟǏ�#'�ۜg�>㧷4��wv&1�v��8�?�ק=�Z��Ӓ@
��~�rx�֡��GU'8�Ns۞�{���֦����	��Я�
��������i��g�����4���w{��oۧ��S���7
ˑ��v����#9&���ZWb�:����S�x�oCYRJ��$�
�����֣$��O���漪�������v���Z��,)�6��mt�-��K[�s�>K�瞼�=0x�q�4�s�l��ښs���������
���'=����מ�JZ����W�
�uB1�����n�mv��Wn�@��N>�錏_�Hs��끒q�SC0Nz���{��ȥd������[����;o��k��u���;2`
RH�@ �8�z���������O�x�
�a4[5γ�o
|GѼ9pTy�Yx7�/�M"�>JA�Y�J%I6���`)�W��h���<�;_x�GѾ$���gR�_��n<�SV�e��&Ktu��}�'����qɑ����

��kz��_���67�����R�-O��K}v5okV�S��Q���Oi�K-�rC���>���b��':N�'m՛�]<�s�s��0�a0���U��k�+N��i���m����U#�D�$LH�A���P

�8Q�Pu�'�nߦs�qRH~n8�l�'��
���s�L~y�v�k��5\��M�ܮ����O=�G�Q���ǢI%},�~���+�q�����=�<�W}�����}�i��n����ߺ
(��D�kM��v����b~>�z�Θ�]��Ug?����A�bz�/<�=:�����f��-#V�"���MCL����5�][M
������{:��қ� �SsQn+�m+h����|4LMU$eR
sը�R\�J��cv�i���?���(���
�r�÷���qq=�he�W�I����1���b��kRA�̪߽��ƹ�I��;�$�l�t�'��+����o����Ʒ�-ĿcԟS���Y�-��2�L7�I(,N�u���	��K�ȳ�
q��X'����>�5��d�G��5�50UەI(���I(Akd�m�׹��xi�7�\��VE�✫,>��'R��J��%*��:��om�h��d
u
����i�����׃��pz����T��L��s���[�#[n��6�y����
�c������$��&n��ݴ'��s��C���s��Y���N����$�mo���z��㇅u!(ǌr��i?o��E���c�;�	Ӧ~�2~�:u�־��7K���������K��jf�4�g��-��)
�y:����|{����~([|8����L^3��Òٔ:�|��G�yy���.L�X���Z<��O'������C/����WQ���Dvݞ��� �
�[��HF��Jc�����`zX瞞�����%���U�Æ�yr�6*�;T�hF/��S�S��rM���q��W���v�k'�R�2�MY:>z;�5Q�o�P�5
V�Os��g����'�## 
S���'���
�������@��^����ס냎�"�.�
iL��<�u?�����n�}�P+���B�_�~"�M~�O�{�>^��p��¨�>0�[Z�V-imյ{o��>�����E�w���ּ=���|�
�m*�W��0)�8W��V�����
go�:O����֕,Fk��լ��˧�F�}i(�h�QX�h�7������
�-?h�'����z����y
����'<���O�1뿳/����z������[�ۻ[�4�9͝��Y�y�]�y&I%1�^I3��5��`�̷V�/R��~�%���6n��T���3�'�C�>�K��9u��q�BT�:�Z����$�����z�}�H9��	���#8�~�������q���;~)'���n�翿J�a��]kkiw������F�{i��4�u!P����3��
������?����]������]-�?M�
5��_��z�<Zg$:9#���=î��^�����������/�^�[;w�zjx��:	[S��O�?�|�Nq�?�?־�����$�A��/�E��O�K�����˿�X�K�����Go����G�� 5=ǅu�E�n	�__J�q��zu�}O�5��J||>��<�'��*�^0~���6�L6:������ո-^�t�ו[��7n�_��~a�O��o��6����0~�:w�ϥ��
�o|��?���G򯬿h���w������0Aۧ�
98�#<��?���tn��$�k}��S������������S�ӧ�?��-�ۓ���i�e�~����W�u�
.��7M����7��_�h''�>����W?��Kk�>�$�
�硁�$�2��o�o�@��+�NТ�(
��(�_��QE)Z��i���kU�z���jh��n� ��RG��yz]x��N:�,g9����}k�Ճ*�9������
_��\uct�ﯥ�����eӽ�}/o[k�!h���jͮ��z�ER
��(
��C�
����֝L~��G����"��u��o��]�Re��J��
|݇�㎞��O���t8
��:r��ih���^��[kk_�]�I�AEV#
(��
(��vi���8�?_�{z��׊�[s�YEn����8D�ϧ I�WP=?_L��z������?jԞ ~[UX�3��k1����{q]T����N���+o���'�KKk�{��~�S�;zQE����w{�����QE%��j�~�Y[��������z�w������EUQE
QE.��
�׭�m���(�EPERzk��M?�~/@
(����o��k����{�U��ah��4�.�h5TUo���L���;n��0^�4��)Y_f�=4�m���9�y��?�]:��%(�Y�
N�vzz�����?�����Z�/���g����M2.tK�70�/e�X�W��ٯ�&L���:|�爸?Pq�x<~����_�n���:��u��Z}���^D�\��[�uo,n6ȯ����#z�5���s�	���W�ÍR��Ωq+��	nڟ��BY�Y4�%�NV�U�3������q��iot��[�N��Vz�5�����o��_^�?��	淕.-��	�`���������C) ���}���&��ᦞm�@�3�O�j��^I������R9� ��s_-���{���%�_�U���^u�����rEՔS�W��a�Z��BvI��������u�����[�����o���?iO�~Hm��#��p��i�A��E�m��1��
c<�К�7����#���n4�D��+os���}A��i����u-6���{iqh�FI'���N
'
�PD�A8l��m#$g�GQ�~<t�XHT��[�n���:rM��}��_�o4�Ս+���]z��k�����'U=�{i���N�ڻ�?���?���V�����M����	=r8=z~<�*���yB�?ˎ�Y���L�Lt�LN��˛�_d��Z6��R]������
��{��
��6^0����[$|u
����;u�9��|C�\���ZT��+Q�|�{LNx���ഗ#�O��}��Ig=�⚗·�T�9�I���?���	��il��u[߷����B�����K=�o��������a�n��u��F��a�7���e��(�����ǭ~'��x�T�b�{s��0��:`����uq�^��A��+�L�boϧ�O�1�m6��巪K�\��������E���{�tj}�P2:�-�9���I����6�ri�q����1��k����^~��8���H���
/�"�5�VbK�w�nH�rs�?Đq�>�Y+�GE��~]<�m�P���I[�]5��|�|���[H�.��£<�yn�u�����F=y���/O�
������l��6��$�׀@5�����ss!9ᦕ��d<��L�y�"�r7rx����rOA��?���K���Ѵ�]�u��B�VR��V{~֧꿈h߅�H#�ƫ0����%�#h�lv�'+�p
������9���O��=�����9l��Ѻd��ʑ���krN6\��*����Þ�_�/O���~��W��4��R�h�-�F3�_8�N	��_��
�M�����[��z<���w�l�+���@"WR��RH�#���_�)���8�^���[=��^��[}����.�W��ϒ~����Mx�-6�}B��ς_��Q3Ok��'�&��b|ۖ
��iк�4���@�O����׆��3B�?�,Ş����m;Z��`���������<��w;�@EE<����<;m��vZ�l46�:�}�����Owu*�d�i��B�Ř�yȮ,Ex�ʖ���u�W߾�Z����iI�]-���i����mQ\oWw������m_���QE
(��׮z��n�_�����
���	������K�vw^��=KÇ�$�_�c�o���[������?�|V�~w��
{��#������
��W��
[�)G__������F�?Z�;Iz����'��9�(������F8�}s��Oj\����
�
��t����z��TC��ϧ�$c��jR21��?�������C��=8�?Z
�lc�����M/��
?�3�^��ӟ����u��c�`n�����MpGN����랝r)����
_��D#�^0!�8���@Ta�q�烜�~_�)$s������2{�C����@*"ݰG<�N�c��r�H��<�>���y�j"�G�����o�����
�Q�ϭ9���^pG��)�������Z����#�Z��
_/�bl�qǦx��H�>�� �I8��#�<������ƭ�i��@'
��N�^���j��Cq
�H<u����W\\`�K��Mtz/�}��:(�g&�So�n����M�������e�A����=}3������`F�9`H�}7c�{�L��4��9n�k`�{�S����"H�3��^8���_�漊��>d���oe��
V�i`��4��ۭ��ݴ�B���.K$���Go��}!8=@�v�
>�
_Z(�kϝG7��
��-�;#х:qQJ)i�w����Bp3��
�~}�22y�����t�����ݿ�nZ�[M^����Z�5E  �-�����}���A�]��z;���R
	a���㎟2�^޽{���
����a�A�O(�=�^������k�~���f�*�kw��]-N��ڿ�������o�Cg�������o�υ�H�Mmu��XB��� �<m6mѻo>E#�+�h���
���V�^��h��|	��cOӴKm?L���Ӡ��Z�ZG�{�$�˱2�<~j�
�w ����3���?�-��
��Ed1䓖��Vn2\dW��L�����!�C%����Y��uh�Y�`�N	+��\��W�Y[s�5mj��߭����H���|�*�w�)%��V�m:�q�I�S�y�y������=�q���sE|L�n�V���
�o��q�3�d���]�
�pQEI�k���5���R���c��(�kd�
Z��M�n�~F:���pq�ߧ�zt�<��*�{y�����"��	n����c�#$�ݰ�s܎��z��)U�J4��&��������X�t�V�8GIM�
ͦܝ�u~���K6�Q��ڣ#Չ��pr9��ٵ��}F�3�U�-ב����ܑ�~O|Q����
j����7�/�㸚;->�w��D*v%��ѕw�`�d����gq��޿k�[]]������Iy(/,������$�q8��z��o3�oC<.X��js���&��z�g�|�g�<*��������S��Qp�q��w��Kn���O������`:z�=:}q�}�����c�t��P�yd�IA�9�8�+�Vo٫��V��-��%C�uև��<Ϋ���I 9�/�'��i�[����}[E�0��nf�|��Hc�"�$�8 ��gs
U"���h�99(�f���n����k�|��g�^&�W�څ>G+�&ҳ��������X��ޥ
����S�+��x8_jƗS�홖K�H�����OV��n�?�o�o�*��Ko�6?	�G,�+׼A7�����R��E���zn���5ԋuesr��߲�-�u��h�	���k�GQ�������B@i�y%�N��8���}ni�R���u!�������䬟�d���Z�g���,m\Jx��8z���Od׾����饏����F�J��Cu���(ϾO�d�^�I]���q��BOc󜌑�p�c�~-�W����_��]�
�D�>2�I^G$
=Ob[=_O��v.��@�GVPz�����+�^"bNYg,`�[r�\�v��t��k�_�^өQS�k>U%]�m{k����7���u�"���*H	�зN�rG�1�>R��9
���;K���G�W�gǯ�7]���x�⭏��^h���I�.g�Y_k�����ެn�5���It���U��2�������
�'�:Ԟ.���x+S�L������I�-u(��G���n���;������}�V3�l#�
�������8�>NX�2n��_�]�_-��J�l֞_<eJ�ԥe(���}:���F��
-*�C:���
{�\`{t�]Z��D9�7�oo~zW�Pxc�������,�+�;Ǹ�r����l`�ޠ��<Y�Dn.�ob�yy��p���f#'$��>��!����r%w&�gm�}�~�J�
��N���QVn�h�{�kt^{}��D��9
2�<����s�AJ�
�H<玼��?�
g�|'i���$����.��"y�У1��	�M}���z��q&����:�^��$���+�
HP:c8c�r;�,��օ��R��W��[|����ə�|X�uV�l��Ii��o.��v%@�ׯ?Oʝ�~�g�3ۨ���?�#�����H$�
�>�M5����3��{t<�����kUdֽ,�h��Y�ֶ-4���>w��������>�y���.��=�p}k����
<�տ�F?��43�
/��I���5��O�
W���_U���E�����
����5���8���ǎXu��{����ڿ�0r�=
��
�g���k�&���?��<bq�
k�?]>q���[<~���1��~5���ӯ�'���~G��iwZ�����[�
_y���w�C�۾�t�=���z�3�������⾲���-�� ﹼ���@������oS۞�:�A�¿Q���M��ӿ{w��Ko��O�j��z�Z~+��4~��
�
Կ��n��
W��Ǥ����˟�=��H?����k���
�D��o�9���s��8��!�=�ۊ����s�+��x+}�|����K~I��I/�
(��t�
(���t���y}���v�5m}4���
�QEP����}����������޽<��ӷ��_��/��~u�=���m$8�P��N9'��5��������kм%/��<g9��������2O�a�¢Iiv՝�km��zY|���٭;����+/�C���+�[�[}��QE�(��
*N=x�|w���MQJ2�3��ӯ��\tj�V�od�
_�R���~���KE �����֖��}����z ��+�Q@Q@����Tf9�E��=��Ǯ��E�������9��j�MRQo�^K�m��~/�_N����^B��?�C��+���M�km���������'{A?��>�t}�EV��엕�����&QIv�_淶�EV�_����(���
�Ί
(��
(��
?�����΀
(��
(��
Ns����
=�ZBp�O�{���o�Z�Kvվ�
��n�����
Q��8�3�s�r�0�ς~�k�=�<�[�3�*״�O� ,��5K�kt�$���޿�
ಟ�Z��<46�G�'�ߵ7�t�����.�/��}�[l|C���i/nL�6��,�Oy5���X������ƿ������Yy������O�� �'��=wX�>��s-�����-G��R!��L��O)G�]����WWƥ:��6��]������%���c*N���Z��m���v�?Ӊ�
��Ohu6ѥ���
g�ԖS@�4Y�g��^�M%���S��T�$�վ�����v���Ï�O�z<����?�z��+
���2��5�B�����
!/�ڪyg�`�v�JW
�g��
��������-��K����o��x�L���bj7�ښF���4	�M#YӧQ$ww����#�>}����V�KDӵ���o����s�8%v���K�
V~g�ެ�98`�� �lc�K�L1����t�Nsӌ~X��K�d�
���i����_�U��|2��>��Kⶕ�x���?޷�4놷��D�C�ڕƳ�_O���O�/�l��CR���
��f$����g�~���5H��
d���Y>#7	�g��{������CۥVd�Ԓz=5K��N���Hjwϧ'==ϭ<e���c�ۨ#�����N���
j]cP���>+����;{x��^iH�6�I,I��
q�W����|��c��ք�v����,d�R_3NX��K'9��*R��rzk���ￖތ茣uV�O���[��?��h�@�
�I��*�U4�#�S���*Yk6p���
F����R�Xom����fM�;�\���i��.�(�7�?�v�0#�W���P�Fzq��������O���O���[��K�/Þ8������]'�T���gZ�֬�e��Ԥ�V��0�ђ#(H#���
�[�$������ц�a�s�{rW �����;1��߂�ҥx�j����[]���[t���XZ�eJQ��m�I��{-�쯫��s�L���?h+P>���|
|i���@�6=��k���
l?ړL �|y��q�7ėw�@�.���q�Ӝ}k����
�^?gE	���S�����lQ����)�)������l�
��8cB���Wn��>��M�L`�X��l�����٣��;)�QZ;�&�l���.��q��Ђ^ʓ��x����mi���?��3�
�iY��U|��_�����Ԟ��]ŗ���״����/UH���[��V0��=�Fz��kfK#���W�_Q�=0~ϭ&�=}1���C����!���M�b��V�
�z� ���'y8S�{
�l�򷌊k����^O��m>Xڏl;[y5w���m��/�{O�*��i��\�_0�~��Y��r-o��s��
u����
��MA�
^�cp��kp�|���c�|_������J*�Ҿ8|�
ݲ;�/��s8�2�ߪ�	���j��
��?�u���P��
�m#ƺ��t��u�YD��H,
��򦚆*��^�i���k|��dt����w7�~���G����?�����?����?��ݎH;5R@ �q��k����?���������|D�}���/ែ|y�h�.��[��uϊ�;a�O��Mt��r[�Ix�E,�$e@Π�+�@���
F�
���-g�����E�¥�|-���I9 �6��w��
��7|˜f��7�G�4/~�����}F�H�|-�SᏇu�'Q��隶���O�l.��'�=��[ȣ :1�w5�N�J�JRK�����
;w���}j�R�F��W�RM7eY_Ϧ���y.��
����ҍq�i���]��6��66� 
�;��|9���>x��Y������}��e�&Kۉ`b�+��k�u]6��u++��0�C.�O��g����^�er[��r=z�{����G�KQ��.�{��O/�}:o�*W�c��{l�}6����Ѽ9��[%���-C��B%���ZXF��
KX�V�
��2zV�����\��9 u�CZ�4�iw�爵}3B�t�$��u}f��L��-�S$�������1�%�TD�@�ȯ���]�
�&W��z��W�
���Ο9��/���/�t�yQ����{&��Ύm�y@!�r9ޖ�NT�N�[�4��l�M�w9�T�J�r���~��g���?/A��z��i8'��S�������
��\o�&�
�=~����x|���:u�������R�BA��&��I�n/�'c9��=;Q��,m�M*��R�o����P��a�����C�=�ջ��H�rI���H9�_��$�R�W\ɯ���&���Rke}Sz����o՗(���4
(��
(��
�rp�ܐ?#V*������\��G�*e��㬣n��=SÜhvg�#���s�7+Ù:-����ӷ���C�?�o����;�c���?�����r�|} ���_v���Z)�1����tN?Jg��
?��
��w���
��'?\�㗯nנ����O�jg=q�qNC�O�����c�
�������9��?�i�P���>�O�(��}j*s�?��
���y�Gր��C��w�8��z�q���O_�Ҝ�1�;���׶{t�W;S�b<z�>c�Ǟ���8������in]ֶ����Zc��|z~��z�J�����t�:s��s���s���p�2y�#<
O\���u�s�;�c w��89$��w䫋�S���o7�m~GuݛWZ=�W_�~�7F�ơ#�X�y������5�q�3g�l.がv��x�#��=k!�w$�I�S��5������n����JZE��;�O�����K	ٸ��KM-��o��O-Ē���Glz瓎}���Ul`�$`c�s��ӹ�/�
=i7����3�zg��NS{����~V��]Q�`��~�ޚ+i��W��
� ��#�g�}����Ozg$�'�ק���F�x��x#�NO~�Vm����i�7�e+[U��K�[�VwZ��C����h��4у�ۑ�������{�v�
�����-;���OUm6�z���Q��
y�/_n��d�~?�g�Lg�NqR��NO=�R0���y���-���K��m����l�mt����U��y$���}z��o9�3����
��H�L��=zz�Ԝ��{��<~��9���;�k��~Zzy�ץ��릫^ā}q�p�#ׂ*)2s�9���;g<s��љ?��z{�zxu2y;H��y�Ӧ}i�f����7�^�v�&�Q�v����m/>�]??��/?�Y�e��f+�O�6�(����͂��<ˈ���9���#x`�'�a��'@�h�
���͗D�����%�l�dc&��
��]H�~���ٮx�V�"s���4�¨
i/
�~�#<�
A�����@������c��閶�q����S�Y��<�-�ѨM���%%���އ���s���J4���KOG�[_��3���=��;8�?JJkӹ������E������������'mTR^�|���(�
����ڊaA����rQ-��O�߆�覆�l/�}{ӨZ4T��/�i�w+���;Z�;񬫐��z�
���ל�<���8�����
���_2��h
�>ԺvX�
	�+��Yf6���խ�jr�z�J�a�M+�j��5�ow�k�1Ƕ5�9�zrNG�}�zWi���ǅ˩#�n��
��v��=x�F6�w�G\�����.c�W�^0��a�����_q�����v�9�)].\\$���
�W�}z��h��e�΄RjXj���٭z�ϩ���mUՎ��n������׈7����㪑�0#��~�1���a3yCR��5�,�����i.����b�(e_� 0�>=x�^�_�t+��Z\�j+o4�(�/�H�1*�P�8�{_x�ƞ#񅴳k��Ƣ-a�����Q1�h�M��`�U���o�e�j�0M9�k{'(�X�(��ޖӳ����
���c���1�a��T�+��VMY��7{�i�?��	����;�J��]	�d�����ztr	9$濱o�0	|_���,��㇊�R:�0ۃ_�φ�����;|G�W��T[�}2{~5���31��4����.�<|��s�c�Q�a^�g8ʶL��R��{j�ޖ��}n�.<��8<��W�wf����������kx���]/�NC�`�w��-����=ANp��d�
���O~�{|�#|D
�]
�0��n���x��O�T��#"T�~E���Q��K	[�Y�
��{�M&���m;���?9�7'ˇ��Ѥ����z;�?-?���b��u���9�>�}6�uۺ%��|���EV2|R��g!�k.��	6,ciSבK&p~Y~c����1��21'�u)!E���+������3��FO�˿�E`����-:w��GX��(���b:
q��Q|1f�p�^KK��eo?=O��YN<_I���Yr������k�v 





/
c
`
3Ϡ��W��uiq��I)<dg
�x���qۀ*БAR*�#���#���L�{�㷳���QR'$�q��NI��'9��X�TMBʓW�^��m�w�w�a��q0J3Ru۾��n����|ut�����$�:����^����m���'<��d�<cH���t�v4���$v����?.8�k��a�|a`�H���m�R�H�ׯLd~s�&���Q��{_��t�|�ӳW�b9�n�]�ߕ&���W����䓌z�
��珮9�)�{�G�N_�o|�������ڦ�t�uoe{=���C�Y���s���1�����P'�*@?��޾Rf���
?Z�k���V��ޞ�wCiwt��Rg�p3�^��=k�@	$t8<{�
^߇z��mF;y~	�O��sî�<��m��k_��0>�B'
�!�[��xM��^q��5��2zt�۞}���
�_�_�����#�Q��d�[M�I#̓R�,��-��n߁eq�
��R��z��
,W�|	S�]��ѿE���g�|_%<U(��K��_���K��ږ^Q�7��s� Nq�?ӭ|��}�ϾO�ɯ��i�k�@z�5zm�I�
�#��>��ğOϊ�:�~�)�[�[O.����4�]���_����
�&m�@�
w�ߍT�gY�?Q���f5�m���hk��c�kŭ��5��_Ìu��LNI>�5��
�������?�=,���!(����(���{���g�o�ހQEW��Z�QE��~��G����SKh������;��5��`�����_G�2��|�'�}?�]7��m��g�ۜ�k���==�b�i��KN�_��
�u�ZUa��~[���=
�(�I���
N�G�-R}�
(��QEH����?ϧ�C���#���۝���k�+y�_w�ɖߋ�]��k�_Q�d��������pwt�H��*j%}-�����k~�=:�ڂ�(������
_xQH�(�O>�&Q�
=#9c!�϶�� �� `����
�޽�M�65�g�#_��?�y�z4�j�l�]ޏ~�<���Un�/����(����[���������2��K[�~���QEjfQE
QE
QG=���@QG�Q���@|��i��^��?e���w��9���6�S�t�dH�Z�5�Ǥ�[H�{(y5z��ܬ{�XL҄a��85���Ҟ7�|1�
��χt����	�M]|e�ǥh�)�=�j�C�Z5�ps���2��chBWK�E˳Z?.�~�O*ͪm�ߧ����_���9���o�?>'kw�&��Oy�jw�4��]��5����XEim�k+xȊ��(-�T�5Q�i7��6q�ø/+�#z��	�;`�R+¶��'�|ǟ��=s^���Vт���@�##'�����ǧҿc�RT���H�)�%�i_���?���;�n��O��Y�����^]En���s����1�-�gW�[x?D�O��h�Y�Ďv�G'$��#
3ϒ�xƚͰ��ȓF��r���q�Nz⾈�YM��#cك�ʖR�x�\p+Ղ���m>�]��k�'�4�����Ӣ��|���~�����.l5�uMT���ue�Xʗ��4dH��2D�T��0�_�#�O��3�Z�Z�p|B�U�xK��U�V��I,��t궺�.U@+���'�����i$xl)�&�6#8�0Q�
}n#N�R=��	c����W���ܷ4�����1���"�6��
ȶ7���\1
_5�Js���r�{�w���z=R�ӧ��՛R���J��➚�ZM��m���c��Ծ#��F$M/K��]�q��lr01���Aۊ� U��;q�NG���{�o��d7Ğ.�<��F��[��E�c�\������_�c���_E�H�����k����ZZ��Tl���olq���
֩(�5ɶ��Oÿ���h"�	����Ζ��K��������
��u����
���R^�ۏ��u<u4�z�g�<z��M(�=u�Mt�t�K_��rI��
_��М�q�
����=	�����U�=���qN5���Z��v�߅���^���筺om{�@<c��}}{0�\�;��
�F>�h ����yh�}u�����!۳�~��=�
�f;�!��i�#��Y��ʰ���/x�Je{�1����1�����r%���z2����Y�ѲK]��[��XkO�'�G��
�Y���o_�:��+�xg��|�?��<=��ka�O�m_W��c�5�Ei��j�6�i$o<b�{�g��/���|�ƫ���w��ox�C�w��l���v+�����X܏�Z�Z�=��ed��d%��2�x�}z�����?�)������Ƶ�i�]�����5�������"�^�a���JH�^�L�Z/�G�>�X�`�U���w;�	��׊T�8�{j�ʻ.�vzv<l�:�Ԧ�I��}�}>���'�}a�D��>��$� ��*���P�������	_�
����
��ލ��↩��˚Ρ��/j�Sjz����`�&{�[Hl�G��ѕ��ym��)Dn?<<%w4�{�jQIm��s˧�V���[�[~��Ul0�\28�C�@��%�z����P0�c)����Jȇa�@�YN	���'��fzi�8�6��[�6���}z5N��U���������wv�h����k�O���Ǐ������1�4�
xs\�g[�-SH�-�����U$$R.�8h�tn��:z�F�
��/ۦ�ĺ��`�
���W����?��	������(�|V/�C��uM>l����(�,*��F	��鏯��_���)`�u)[�M�tI~#��^������~�}t�QEyg^�EPQJ^x珮_o�KLp
����{c�s�+9{��������ӳO���x;S��4�-�G�J�6w���3F�1����!�7\�A�=b���ۀB=>�C����)�n'������V�X��O>�w�y�
�U���x�@x�sfeeE$���%k�(=1�Q�rx$�d`g���5�ʖ"��k�Mߣ�oߪ�ܺ~��b![J*I�
�i�5�����a��_�=���ڣP	����}��ӹe��`���oN0*?~�8?_C��=q�
�G'��~���4u�������y9=���`	����B'�o���(�8�Ϲ����R.q�\�
���;b��F
緷A�
��0�q��<zpx��>� R������O�ڐ�
Xs�;�q���*|� �gq��1���I�/��Z�F._ק��y�̀K}�@��t�#��E1AnY���I�z{����r0Uߕ#��ǮI�9���j�
S�Nȟ�	$��ױ�
c�k��)SZ5�{�Z�Zk�ϡ�G}Z���}>W��,m]��n�n���g���=+��R�R�|��=H<�z�9��Y�+���KA��	'��_ךE���u�*�kc%9YI���[Gm��[o�Cף��RrWk�˥�-�%��\n9����s��y=j!�}�	=�I��#�>�圧%��t�����
�;��R��m����o�y�����>��8��KHs�9?���
�R�k��F�ѽ�k��
&֭�NI�s�I�:���t�矡��ɨ�OQ�G�=��0zS�I��^�BK}{Y�m�ۧ]z��z��ק9�
�s�ԃ����1���������<w�_�O��n�{w=�~�Q�o]��n�Y��vOn��+�����m�g��e䭭�48��bG
�=1����4�r;g�����Zf�g�~�_�3�8�@9>����h���hލi���Vvۣ�����!Ԙ��}:u����>��1JI���w�M:릟�P�j�]�f���
M
ן��-!�����AK��OJV�ߨ(�����m5�f�
:��8���?�fӔGמq�z��u>��֐��.ܣo�?�[��T��wM7m�'gu��_���ͷ���.�w�	�V�d��
���u߬�����Im�.A!JXc�#�(p@�`
�¿�?�S�į�/7�];Où<)г�H[C�%׋e�,����K62K�G�����b県�x�}njxL���æ���^�������d��b����QM��z�����NH�O��ۨ�G�KQ����
����Zp�u㎇�
�?�\��Z�_�Y��Em�ϣP�9����~z�
>�5E�$�H�y�'=x?�>�U��]�o5ӿ[yy�����~�
^޽G�4�~c��܁������:q�z�?_�F_\~�1������}.�T���
=����}�������*-oF����lZ��yb���K�Z��s�GZ�$(��'���������?��1�8��PX�s�%x�2�g���w���B��Z�h�z��Q=U�����:{�'x��#�}��h���5��$�c~G�� �Dw�C�LlD��C@5�hw�
ٚƗ��fU��-�,��RC�+�\n`@A�_��ƃ�����Z�,�+v4wp��8# 888$dy'$ד_~�_5	G𥥳�]���6៾U&U�#�\dg#��xM��:�/-�J*SU!�����[���L��*�g���̰�e/e�:M5(���v��m����~��6������cX��3\�p�<��*�° �N�^�k�&�����T�$(��x#<��\�
�b�B��F�\g�}J�
��`t��V����������n�#�`��wt2��"g��=�ɮ'�v��G����~Ϛm���$���n��c\?��;��j�0�<W��ghI��m�ݮ�g��]���o����ڏDKO��|7�|o��G����o��3V]Ya���d������!�y���B���:�
@WV����HѴ�W�sHU�+"66����U�c=~�i�6��Z%��akcilKk[x��5� U�I'��5�k?�)�\5ޡ��5Ò$�Y�f���I��	'��f<��P��5�a�Ej�qQ���$���<��0���kFS��j9E=d��{tO}~�_��9���/[�Z���n$�kf-*)
H#
��)
c9��Y����ֱu}RF��#2�+nd	
8�ӜW؟�|
�
7�[`���K�`8��:�?�~���'r�p���u���x�
�>{8�r�E�S�z�_��ݿi��E	�jX:���iFJ�ѭ���_S������uo�g��>h>!�m���3qw�l���u���u<j�k�m��q.�˾��
�o�'��7�g�O��u��v6�?�|}��'�6��[�qi����X4���=���M}ws$p;�l���|���";O��A�1���]��$�r���#ȿ����g����A��A ^ �%x�A��'�r�����9b�yZ\���M�K_����Ê����`��B�}���).�;�tZ�h|ak��
ZE1js�D���*�Q�Wn��%{b�j>'�5��Bi!o�ڊ���؃�pAw��d��.��-����M�6H0>�{U�V�
����y�?�3s��ו>�ڔV1:{5��Zh�
�v�oR<Y�s�<Nm�����_��V�ݏ�_��xϩ�:�#���=���
�n��f�&��+{l�:lI]�#�-�	���0G8��x>ՖHtkM�Aā��cĬ�0y�q�F���"�� �@�q*�.=�(Q�<~��2~�N"���ԒW�VV���C�8�x�$��j.�Qn%oE���.	H>�����DX�z��8��b�*8{����=:w�C�:׋�`��k�-m.����D�*F�ϳ�~$�p0c.l{��e�S_����PJ���OK�}��g����m�����|��cĉ�Oj�P6�;6]>ї�Gh<�u ,��v��l�%<�H�:�g�'
�q��L�a�X�?$�w6I'q��C����
����<3�x�ķ����t o�y9��v�1k���jAf;����r�4�����O�Kh�w�贿E�M>��N3�F��ڻ���W��5�������6�׀-��u�@�:�
�zf�H�̣��'��yq�r?(�$�zg'�
՞��Z�ߋ?���8�|c�f��b�������,���uC�N�PIs$�m_3`�WdDi�*#318UX�$�
$�� ��ː����i�JҒ\�=v{_]��?��tqxʓ�����+~�{�ݏ��i��R�Ɯ��-�/.�\��O8�;I1
�;��Q���������&_x�Y�`r��J�6D���`E�rpWV���_8�9>�����E}�8���^���_��
��{]��G�G��������� �㕌I�O�����
����8��׏�_˷���v־?|d���-���7��G�ee�i&��^��C��1����l�Q��S_�}m���
zx5jM묟ݦ߈QE�aEPEPERi6����!��iu�
��~a�ڶ�0���#|L�
����=;t�J����
����*�c��x�:�
�V�����
t��Ӿ��V�k�����=J�(�Im�|�Z|Ϥ����;jQE`PQEN���v���?.��Vc�� �?�?QVj	
�q���g�)�w����'��V��������9�=ǩ�S��% �1����R֋t��˻����l����aEP�~�{_��(��O���%��������)-ת���V� �?��#�O��y�z���z�\g�ۀ?^zq����M�+�kvӣ�k��9^��ۧ{Y~_pQE�y�EPEQ�^���s����*y��V���
&���k��EU
QE
Rc���{u�
?�ih�����@Q��?�O�+�#�����	�
���wa2ǯ�
�4O��,rJ�E{��헉,d�GH�I�=g]��R�k�[d#�5�l����H��t$��
$���5�1�
�ʟ�V�<k�S�	��?x�7�<9s��<Q��O���xn���y��H����wⵌ���ž�!���{9%�1��N>�9�)v�����!M�U����u~�
=�v����AWR��VVC�n�9��@`I#�1�y���Z�i��A)͍�#	;$�8±�O�yy��e�J��	�
����䌩��ha�3�(��x<c���c:��8��־�Yi��ߒ���Q���rzJ)����~�[/F���]�9�|��G"���l�N>�v�U�|k��X㻕��HuY�Ԍ�����C_ ��#��@X�K
�%�g��<������Y|��������>�?�z1�(�'k�u}����c��a�I���o4�����W=��� �P!-�i��ʐ
�n��ӧ�[��&�$_���V����es��3�kV����
)c��q�g�����)Kx����g*F���`�y���K?	\������h��4��SXԮ.�fU��"�G�ȸU�Q-쐂r���^s[�<�z�E��%/^���7=��8�ӝҌ���)�����
����6�5�ے�]�~�G��x��n>��|q��O��OtH&}~q�|HF;d��u�=~E�ֽEwm�����H�u.��7�(����jKM����u�
��b�����q��T�~���
��"�����'?��`OA���c���?�Td��k&Ҿ���Lߺ�
����5{��S�/-t�;O�k����⵴���G��{���!��Vy$��8�K�*�_�]|C��w���
�����w���L�[[�h�+��
��y� ��ψV+MH����o*���x�=v��n��Poڏ��5��ȿe/ٖ�I?��:�kA���hi_��WIG�|1_�(��E}R��}�4���7��g�
�~���#�{|B�����>�
��<)��Z|Z�ݭ��zϲi�z}��FRW���H���`�Υ,>,n"�-����Z�F����y��f�[C��s,چM��g*?\�%�V�?�Pm?r�7f���~T�����
���*�mg�o���~�Ynn�|!���߰�ĭ+Ius�iz��Dc�H�pd
����q�
��~����]�:�����m��?�t����%�F����w+.�Ksm�1Ve�q���G�
���@��-��/������/ڬ��_6��8Vhe����wXd[8�d�g�[z��
�e�ث�
��Z���:�����ڽͶ�ecm��>&H$��4��`����]�����%�d���y xS�q?��P��)�5czx�+������mc���~?����fy�z\3Ř|�t\�,�K���ӎ�	V��ZKef�
�pTnF�*A�9�����:�<������=k��	��N�B�u��_��ڬ�h��wz<����|]�6qf/��7������PV��}?QH��W�`�s����cל�0|Fa�OZP���fQѩG��Iw�~���3lM4�Nv�*G�W�4�[�DP���
��
����7�Ӓ9��Ղ?�lg9��ێ*����
\��[մ�����=t=����� �[�A�3�F{s�Mq����~z�����t�t�u����y4��~�~����2�
�F~����'��c�o�A��8Ԉ`��A��d�@
"��?�,�\X��|m�V�]E�2<��$B7I��ﺥ���#qq�~���~��~3~�~2�V�o��&��	����z��v
��Ǯ�[H��?�.���+x�;��q Xgʋ#
�a�#��=s_�d��S*ù��&�����T���|N.��2P���M^�lޞN�߆��o��7��
���̭��$c_��ԅ�ׅ�Hn��<��(1�=��ڔ�����G��>�'�����
������)��!K��{េ~�w���I�Xk���w����#2���7rB��~�#�
��ܶ�H铁��	�8�<
0G�|?��n��nN7�i��io3�ʣh�w��Q_���}��~BQE�g�QE
��_l�
��
Y�N��U�L�� �
.0i�ת����~2~�)�x'����A��\i������H��R��(��x�����
�k@9��٣����ō;O�׋o��=��� �����\h�)��gb#3��Ii�(bLK"S��۷�֯���^�nf��y�5Չ�Ү��it�G�]��'`/��ʎk��Z9h%heB�G*;#�)܅XaԨ�ܧ�q�����0��Uc��N�u���w�u噽\��tӻ���_[m�M�c��R�w��F��%p��w)#��3�s�`
g9��'����⿜�
~տ<o����J��T��YX��d���y�q�*ʪGQ������*���������}7�g�
�+��p�:2j�S�[�]��=>뾞G�P�ܾq\�A�^.���k��m��̠�����z�d��G��v���6࠿�^2�x/��<?/�Q��_��#?�P?�4䋟����G���s��k�37�
.�M�]�}˳��>U֧mR[Yy۪]m�G�E@��A�z�����
�I��o�&��<;�]�1�3T�����\�j�Q��9o錏�^��
���k�]t����_>�v�ӕZʪ��kn�������G����>����EQ����=�o��<~��}�ӛ~]w�(}�3h��r�����?n��rc��_�@�ՠ��1Ürzp=*jp�g$҅�]��Z��_].<[�F˙�u��e��劣��GRf%"o�-�`rA��q�q�a��͖ ���u�rpG��
���m��l2���2|;i�=�u�n*�~�ߴx9MË�?�����8��yux'7��1����U�����5�`��V��t�n���?vud7�^�c�pqϾis���x9��<�S���~O�_����?�z�;n1�g��ӿ_L���
���=�|O���!|=nG��݆:����6��4�W�����۷Cu�YF�Ro�Ϸ}���W�ב�?1FW=FO����k�U�
moڇ
�
�S��N:�jП~	��	mڡ�+���o��H'wl���pm{rSV����^Zuw������OyKF�[��w�e����A�O�y�x�8��l����s�ߟ���߶g�T�q�O�����ތ�zv�U���
j��/����i�{�=�t��?�vq���In��������[��U�����;y��e���
�}W�������
	���8#úx����˨��l�͈�
�����Aӗ��O瑑����
P3N���
���|�\y��y%~�|����o���#�B�jO�_�k�׿���?�dX���+�q��FO����r�,�U?�hV\��o����3v|���駞��]��|��ɿE�M�u�/���>����
i pH��;�����q��T�N;h���~]�UW��k�9@�
wH�F=�,ϯ��\�#����%e��l��������Et�N������)#q����L{�4�:���
��l�?�'�O�W��ظ���~�_��G����N�O�G6$��q�5��d��ۯ���{����o�r䜬�N˖���u���G9���
�(�����8��K~օp�
���lt�����_��g�����|b�@�
j�N'�%sb}8��>ǧ��w����o?F��
���%�%}-~]4W��{w?���Yq�?���)˷�
�~02r8�}x㌏��?�G��P�b�01�Zi�=���~>��ޢ�������>��*R��y\ؕ�b
ʑ�5�.�FQrI$�.]zk�ߣ�ˏ�2��z��V��.ݯ���~���
fd�������\L�~Y%ʘ�HӴ����a�/*��95�42��9�$���r��oO���<u��?��-x�w��/>��(�M���3��z5H]��*���.�mtR��B�
����ٷ���n��^���px�_5��n9Дe�Ҍ\[�]RZ�6v�ǝ�q�_��^e.z�\�이�^�h���E��;L}y�?�4���aǩ�=��
����?�
i����'�P����ܞ�g��Nj��k��݁�(��[���ɀg
�9�=���
�}�^��+Ku�~}����/rȥ��uk/Gw�K��_?�_�������T�^���OO���T~4��d`|e�^1����p �~������	���������d}!Ǧx��֟�C�s��"ݴV����E�M�/2�f�>�5k��_��W�����	�r?��Tμ����;u8��5��
h�s����
�s�g'�U�����������7����Ͽ�v�;���o����f�lJ�+f����ݽ5�/����0��q�u�|z}y�i���*=��?�z�x��_�	���C��|i�p8:����a*7���B����d�BRH�(;gڮ>�UӪ�}�P��9s�a7�E~�����L��b?1J�q�zu�ӡ=82��W�
���Ɲ:hʙ�Wi����Q��A�J�m񪓃��.T�q�09��=�U�;Ʒ�X�n��{��뾈���Yz�ҫe��]���?#�x����~������Sq�����y��� �~?�~6x�O����JB1֣�
��㔌��1��t����	�뿗�U�
��
?!�+���o.�-fd�E�ݭN�������+�p��ʧ݀���� �3�Dy�'�q�#����k`�<x����>����Q������W����#�F��G`
�0}�9�5kì\���n��n���wѵ~�x���Ni7�������ɟ�b|��铁�)���C֐�����n_ϖ랇�OZ�[�����
���ĺ�{u[���t��5Tk���7�߈��%���}ǭ5��.6\�^�+�e�_]���Օ*�����٧��kM��p��a���_Á�~�M�Y3�Y���5���
n�Y(�-߈������W���Z�u��?|{���.�s��k����K��U��A7m.�v��K����~��/a%��}���#���#=08�5�d�z~=)�l9 �>��=�Ϸ�_����'�K�Z�����=O�?��=���A�8|sψu,�ӓ�����!�-��������뮾�K���jU4�}W���
;Q^u���g3"
{gs_�e�^&�ΏM��M�j7Q�I
I��{1�@
��v<�.Y|e4e'���iG�g�Z���'>��V$�.�q ����*���iu��s�;N[��zu��>׊���ݲ����^L��KJS[n�[��N�������X[�e���)�n[ʵ�$`�Q13�CL�~a�?k�6�����|E�����\���G���"�
"aUTa@
W����6���Fu����NJq��#�ߛ��[��6ouMn�w���]��l�9�z�砮�7{;:�R��ѫۮ��
L��0������Gko��Wz#�_����[\[�z�~.���Nљf�2���M��o{�Q�s��lFG�ů��/����
޴Z}���^�l�f���$n"{��kO)g�؍��|�	��q�̟�%�>�I g g4���G#͛Pa����98ȏ8��<c���r>���$���m5���t>c2�:�����-.�^J���>@`
�J��<�@9=3�`�$��/�_a�4���r��jp��dl=���{����(�9��
�O����	|�f�-��(��}n�F��߼�leR#�5�!�ֱ"a���]�O6x��sR�.�}�j�	�u	�iJ�H���a�>�K�8�p����'�0�v��j�־�O�ַm5�|��ɨ��n���{����|m���NO,sԃߜ����U���h"i��X�Vw�iX$qF�;��
,@\��r7�{������_��
�F��'���>��K|O�Y>|;����6���b��tف�0�2�
�h^��n�� �u����G~�t�F�;�Ov�W�K��}S0�)NVK��_���?���'��?f?�#ᗁ5�񆵦/�<q�J܏x�WP�����~�f��YF9Cf@�0��8��|�ׯ�q�)Kn��!GM���
x�S���.��VR���������N*0�V�Z���
�zQ\��QRԯuoG�go��ֹR�k�T�Z�ww]�(�V�Ӿ�];�QG��}�m��[>Vm^:ry�Rz�����<6�1
���7Lu ��zzVSѷ�����O���4�So�ҿ�Oo?��(���m���{���m��},v��z+�!EVO���w��QE 
�A�����<
O=*Z�O����}���n��������e�m��v���?�/|�訐�����q���2֋K'�w����>z�iY%�X(���oW��HaET�QEi�w�}�W����[Y�3�'O����3��?Q^{^��(��T��e$�g�
H���
"������
�Wu+?�}���KC��]Tom�h����(��(��(��(�]?�
QE
/n�
��
���)xUgb��*��'$�
�$�k��+�
A�3~ǿ�(x�
[������~����x�~����H
�i>����.�Kss���Oc*�zz]jW46nz8Z��F4�&��m&�M�N�DJ�!�I'�˥���ß�^�*]����u����=j�~���GG��G-�<- k-w�5�!�[�h��w��qs�JnBIo��F��W�n�qw{yw���������^�5������=�ys3<��O<�M<���,��;3���u�R|e���?����ƍB�P�ώu/�m)E��^�af�C�w�mn���[B����-É�.�K˫�_�^M����W�n7!��'<G�20�H�+�<�+X:0���j2���z'�
�v]�����#F<ɧ&�"OkY7�m.�����x~����mo��x�2�吝�;�|��d��

0�
�
��1���pA^���fӯ�d���TFu8���un'����?�`��>)�k���?k^;��⫵��t�"٥X" 4ږ�xJ�i:E�L%���	���̓L��^�W1��I+�Ed������i��r��{�������E@\u9��<g���Wf��
���s�ߧ��S_�_�U�%��o�%�?$�4O����U�m΃gq.��_Z��ׄF�.è�Ib�ͧj�Ch��ڬQ[��i.uk�㉮6��H��'�	�w�8�>Y���㵝�n��[��}&�V1����M�R��z=t��:MsZKTkkfY.$IC�%[���o
�P���F�
�H?����#���ݛZ���&Ҍ���]	'������o/�u9�|�퍼�pe5�q�"��^%��~,�ӭ�!�5�����K��l��\��u-P���¬d�\h�5���_C��+���:�v��i�:F�am�[->�;h"�F
Qcg#'$�^?�������E���Ek�hS�҅
z�ө%���ߪK��T���U�w���/\�}�[A۷͑����ھB��._���C�>%�#��Yڑ��ny�ǽ}|���w���� ��z��D�'�0H����@#?���
�k������Q>N��9��}G�_«\I��#�HنFz�
~d��s`������'������r����L�N2xa�
�RNi?5x��mz�:�N��>.W˥��4��~g�_�g���7�)�iڂc��޹��w�.g�G$�^3ּao��
}��c-��y&�p���[���[m�S����^7�y�x�^�7�ι��S^�������Mq5���~��eن:�������W�#�
����@�/�~|L�Gŏ�;q{�|<��]��f����
���)ᛉf1eb}f�����$x'ޤ�����'Nx�
݅�#5��a���Q��jx�M��^˒�]�ժ�i6�?��j�f5�����j�^u*��:���ՅiԊvri��K^[l}�`�Pz������9��e��"��?h/�>?��	��+�h����&+c��;Ě������!�2\�oq��I&<����<�ߟ���k�v��3��o-��fU\fd�����,ᘹ�ڧ9�>�W>5�!�c�{�Ǌ�%x3K2�in�7����bV)1�q��l��6s�f{S,��c}��:~�r�*���Ǜ��Ir��������¹Fw�q6_WKJ�~�*�^s�5_�2W�w�N��'���4~ۿ���ਿ�GğY�/��m�����i�qv��-χuI��I���l���+���9 ���R3�ӧ�|��
��m�/�������{�����*��	4��n%�6��kS!PNJ�_KZۘ �& �6�BH���~I�#p�'��\��F�9k%� ��wԜb޻��mk�Ҟ2��y\Th��o�5�iΪQ�?h碵��kD�=����P����S�z��*=��
���
����Jɻ�o�{Z��{l���V˦����9�㎼ԛ��~����
�qϯ���i��߷������o3�u�
���|%�(�(���-Xg{��w�oLc$o����_�dHe�F�,N
�Ns�
�����_�G���e�2W�o�C.2<�
�O�A9�[��G���_��s��t#
�
�d0�8�~��u/��􍯪�g{[}-���*�U'8�Z����h�ww��~��'�G�����
����>0xJ��E�^�|O��Ao�	�8�Ha�tu����i�4k�R�],�J��Z����[��>~׿�1������G�O���[��-gú�����M�$�^�����iw+���Kqk,��NU����h��ȇ`�p\`$	�s�_���N?�(��_�'O�{?xRK��/�ŝ����_<:o��U�c:��}����&yt}L�$�~�|�gr��A�C0��zp��8�5v�VӾ��_];?3����BR����k�W����_�?�3��������q�N�����M�|	��\~�~�l�g���Z�:��)҅�n�L��cgw{���S,����J1,2^h��~���D|��� �:��?��
<2Yb�Լ-�Cx�}�)qi�i�c�t���7�u;KY��eN��u\�E�:5#O��m}�볿��\�8b)T���ݚM��W������R��pA������V���lQE *j�^���������w�j�W}��&�����6s�!�����_�/���/�^ �������}>�/Y�o�	���ڮ���0�\>ȮԖB�	a������}9��T���uKY�5;KmB��+�+�c���909a�tN�ve F:��.%Ж���n�K~�zYU��Z�Il�M������1�p p{����>�ۮy����~��`���%��%��k��j]��uūj����p���^Y
ĳ}��#Q��d)���?��������~)i�Ȗ�ž �Ʀ�2B���Y�j�W٨8%��׵OFvNIm�量{�<���*5S�Oe���=n�{�m��0?ǮG'�A�۽2����Naa����Ŋy��C�n!�s�)X���ӯ'���S��/�K zM��<�������u)���C^���3���T���[}7��_�-�A���9�*�
d�8�'�����_�
z��eO��<�������4��T,��ཾ��/KS�B����T�Mm(=�[w{>���pT�����4��k�d���t�Ã�N�9�=z�>�w�=��_��S�L��ǃ��}�瓙������O�+�
�Ę�e�
'���^@�	�N���O���pV�^����+f��[������[_ɝ�6G@�Q���
��ޙ���g׽p-�'�
�����|���������J�}=~���G�(�����=����6��נc�i����y&�O[o��r�	m��zv[���z~���؀p
�s�����+��
��
He%�
f?
+q�~#Y7pH8+�2s��S[�z�
�����_á�p�
lO�-��Ϸ�T��v���e����붻�{:�YG���߯C�$�;�oo_��ME\#~Ͽ�U(�_�e�{ �>_�m0��`�t�z��b�o��Urq����w&_�zZ}8�Cݳ�s�ҕ��<���i�����8Ӓ����--������o��*-��@����������\��
�GÑ�8O�[�<q��ߓ�!��?ૄ�+�n�l�|H�=�e=ϸ�T�����Kkk��Wm:w��=��
��W���K��o~ǡ�n8��
�׿jLs�>�s�k�_���
�C�8�+��ZB1�
����W�|g��
��~ϺF���Y���Π�V�sm�mno�/q�,Vj�&){�N:��N3v�#~Q�z/;;%�����'��5�=_Kok��ԛx��=���?��
Zp��u�
={�ο6?�?iV�-�
����
���s�f�`�㞝�9i��O�����
OS�W�>��>�*K��ߦ�߯��Z���g�
�_��֫���LW#��<����Dm��yN�
�5�Y�O�;�υ����<�9nb3A���0����^k���䷇�%���}A{`u�9�y�T�}�����i6K�����OM:�N���s��!
�1��d^��Ɠ�q�����o�ߴ��E�C|FѾ|%��5���+���-F��{3�l�w��}yx�D!�Y���F��_���
^^���o�>O�-9�y���v�=랳�I���6���;5�_=��7�wi_�{m�W��y�gR����O�P(��{�
���I�+�
�Y��~�������׾ُ�8���R�
����������և�
A�v������+|qM�o�*Ӿ����n�E�_��k�]��u������d����HH�|{�
�θ_�e�+'*���xx��oO_5���q�i���_�V��_>��1/���_�r{c�������W��h���W�l�
�5;k������2py�
�����Q3����8�8�
ߏ?e�+J���M�@�8��d �
�
w>�*���
�
�/��RK��@���μ�C��{ZM_�;/��Ӧ�
s[h��c6����w���vǠmq����������=��9�>�ǥp��V�
����>����g�9��QHd��+Sr�~	�<��
	��3�zg�_ҫ��V|���o7m=>v�{)�u�����xU@�}�oO�څ
���^��
?����
jU%��c����
��\~U~��
�V���	��y1���ݮ?,��T:���T��w��W����?eQ����t�X���_�҈A�?C��A��^���)$��۷8���|�������~�\>*�6�Y�xe�k-O�k�����:��ֱ�{k�p�-����L
NH�S�J~��<7���K����^����QN�٦��v�3�����W�
;Yi~�O�L��gc���Zy����3�c��
�W���4��BFSÞQ�a�.~��5���֟���t�uMWB�lV������!���ݹ'��J�����۷��z�U�Zj�馟����ճ���ǧ��1�c��eo���C���i�
p����*�O���>k�����6~�R�5/O��r�%��nb����o6F%��4.�*�,q�j�M-ֵ���OG�
�DJ~v����y�;���N�����숪=2O?����+�����
�W���#�����\�(�"�7*��`�=����
�Z���K�w��-���tߞ=����5*�Z�f�z[���g����R���~�+~j�
��y��ǿ?�jo˞���OQ׷^y�5?b��+Y�+|^��5�g=����_N)��*�
��1�<;�*23̞.�
����oN����V��;����m5���j�
#��?��gq�g<�i�;uǸ��l
�z�����

��K�
uaΝ�>�_Z��>H���
��~���WW��>�<��$�
�m����:�U��A��V������,ױ����{i�ٽ|��0�:�}�
O�
Uq���
��*��d#�G�kL��ڧׯ�Ba��+n�~��8��(���s�ǥ7_��;��{y~��{�~�4]o{o��]@H�=}�~���0�������+������)�:��
��Nb:�Ksہ�D߰����)?�������,�v��օZ���-���Z�߭����5�{Y'䴷�����v��׌}3�qH
'?��
��p���
������
�T��
$y�i$��8<c5���
�d�kS����,�k���Y����"�����z_�����j�en���n����ש�
ےF2z�>���ܠ�O~���c��8�>���
�����[��Ķ�*��X+Y.p3�\�'�:���
��9Y|��c���m|~�j�Iܣ��_���;�u"�kQ���V�龫��aҚ�?��z]�M�g�x��^�N�&��I��!tڍ����
\G��W
Ei���~u|l���6׾�?c ��A7�5D vҬIi%'�
&,�zα�
F�
���F�^��{�\�~i��7���$���Z���;@���m?��߶��Qs{��s�k���
}Ҷ�Ŏyn�V�q8T���˯m���{z��T��.�ou��M;���oƝoX�<A�]��Ρs��7��=����O<������f9g$���Tzc1A,x��d�ױ#1�����
�|xծ�_�?�xCM���ӵ�jFK�	t��H˝�,������O�{���"~ͷ�o���|e�����[���J[_i�7��t��|+oz$�7�o=�7�PF�d|�髚a�C�rRkV�mRi������aj���7��l���
����?�'����+���
�9����ρIo}��R�+��a ��m�E����Q��Ң4�KYdsso��x/��u�M������O��e���hz]�����u�b!�$'`,�L��^Ydi�yY�$q�Gj�q��h�
��UQNB��Z?��ӊ�lviS촍��
y}��e>�j���v�k���o��=0>��KG�����R����Q@(�.��Q@]�~�EP6��~?0��&uP�?,r1�q�����X5�xQ3};v��.1�O��a>����׳���mN�:N�4��/Kj��?��EW�|�
C裲�_�QE�(�o�O/??�k;QH�=?���
u�������
��j�~e�]���u���^~�)��q�q��<��-D��pG=;�c�ݏ��Rֽ�?��Q��]��(����o맟�(�
��(��^u��x�h$��
H�k�A>��}r	��8�\u�ha����9���q�J�ۘL7wq�Gq"�=p��^��85�A��{o��_����̕�zk{����
��kb*(��O$(��
(��
)	���qKE
QE
9ls����=��3�=@����In<�p;�ϰ�N6u#�k�݆��_?N���N?����*��~�����
��
��<'�xf�f�w-��<?�Y�C�v�m$Wf��8!����x�-�e���h��4������U�O�[���SXdw����y���i��Wi$ff-#Hř�~c������k���[����&�ϴ񗇬tĹ,Lz���2�0�1 Z�hb��ڡڿ8<�t�C�O!Y��$ą}�r�	9� (
3�k�����({�S���[�o}o}w���%>iԊo[���n��kn�_&��Z�M�����m�
{媑,{T��p,rH�N_a;�����g!�`����\���
�](�yn�v���C�dm�U�1�a����I
p���㿊����3�w��#�;�z��f�%ޙ�x��zv��[���y�-od��d3$[dܤ�����2����s����zu���')^�w�[�=/���ݟB�Ɵ���}|U��W��/u��O㯈:�SCே%������Av�9X�N�,��Ʊ$�Z�7S��
�'���	��;�
�9>��/��?���z��o�?u�c��~5�����u,��m�y��|;��ZY���d�/��P���T���~��?�c�?�,|3�*��o�i6���nX�o�M�]�]�ΠQZK��)o�eg�����IF�b[����㯶ry>���~s�Uq5]*7��z�uem/���}F]����5��Z�H�l��gk�}��o�1�O�d��������]W��v�vW����/Y.l.�[�y�;�[�}����Ȭ���R��
�,�=oK{m����k�2h#Út��Z36۲�-��U��h��ᑷ3[��T��.���>ö���oA�sڿ3������a���pէ:Pr���~���
[k��)V�8�N*�z�k��%�{u�x����>
�>��_�tm*��\�O���vI�j�[˩
�m�4�6��
�c�#�8�x���z�
*��#���i����=?�cU)�uv�-�z�R����{�{_��G�_��
�t�F�5]:����&�XG$���'�����_�_�6��x���;���Y]ć����el�v\��~��
���@��Q��}}ϯ5���ڬ��ֽz.��vi��~-����
/<�����
��6��ׯ��}}8�����q�PpA�=�u�k��k�ef83�ʢ^9�=z8���z�֦p0F~���z����D��oC�q�~^����[K=�Z��
�Ɂ���U�/���>��>xj�ž$��7�?h/��t[����3Q
������<3m�P�D�$�����w	�Gg?��?���_����V�:�]+����.�q��M������b���W��R�$WUԯ����Y�u�q_�-���
C쑺:H��u*��u9%H=�8�s���^0���o|I��:����C�2�[֮~���+AE�~�E�Y7��û����ěV]B��9c=��o%y���<MS-|��:ÖI��j黤v�V���w���V|���K�8��J�K{�h�����Ѵ����
i߰��}�j��6����IuYg�e_
x��9wlm���d��h�Eü��j���
���HK�
٫�~�����/ň��/x-.-�o��]��{��p,n�U5��X�k�]�K�#���u{=?	���Uo�G���
���6��-�[��!�W��RU/&�ܚ���m�P��ƀ��t'��牿ࢿ�xc���~��	�����?g�5[�x�M�XM���G��K��ts�hV��M�
� W:���5�Kφ�ag�J��J�Y��8��+Y4��&��|�.I��>g^�c�fg�0Ա8jt0�j+rJ��>x�٭�2O���K�����|��B�=k�o�2�ڧ�|Kd��C�G��t����o"���'O���X�	Z�FK2A#w�k�	?x�x�R8�@����9�=�g������|?�s��x_D�����1y������r��Z��{1k��N�i�/n��grq��C�۞q�����t��U~e
pmҥXi��Y|��Z�ݏ��̺��'ZQ���T��d��Jܔ��+���c�`=���T-�F\��l��G�*RI�?N~�N��0���#��?L�Z�ӳ��L
37��=�
�ל������?� \#��y�:Ìu��vj�4�?K�
V۳��ދ�8o�?�O���~�=�~�Ҟ���f��
��旫_�$�?�5il���,g�5�XV5{]F�P��+���J�"�
�_�A��o�	��|C�E�����g�K���#xgJ�oxM�EğX$�i��[����9<='��]>��Ek_��#
u���6;�Ӑ��ס�_Cܤv����ݥ�Oͭ�q�[��RXf�P�K�*����Hl�A�,�8�����ҽ�[}m��wq�R�g������V�T���՟��c�Mm$s�J����r�!�z�8�:z����1Z�~�ª�L0�$��$[�T��#0#5���o��
����?��챦'�o�?�=S�7�o�zH���o�]ě���6���M��RX���E��9c�K��寏��Hb���8&�ɮVV�̸a�R�rH;��H����
xir�����Z7���hyS��Ue�4䖚�vW��7�}�?O�-����i�fJ7��e� >��
�?�H���4~�_�o��|Ayj�m����3���|}�*}�þ!ӣc�{r�N�h�Ɨvb��dx���׭ty��2�J��1ʕʀi,0Oln�0<[�.Z�
S��X�U8]��I���0�}1^�#F�p��.;����k�wmv<.z��Qr���I�m�_�����~:�G�����߁��~)x;I�^�m,�-Ι5��:��zc%E���%�z�6�⽶���M7���
�=ǋb���Z��}{�q_��<!�k��RZ���asq�ݶ�帝�L�~�+1��N�
�'�����3*1���
f��
;v��>�9N�7/���}�m�M��W�%��
ע��(��
v�3�ӊny�z�����M�ե}m�Z��v�1�o�ߵ�un�y�\�de��s�{
<����
��֣��T����=�
^��_��_�Jd���NF8��֣�9�>��
,��O�J(u*_���K��_P�?�����w�Z�M����|���?���k=Ϯ���
>ئ�MT�~���_��_��)v켇oq�o�
}7�ѹ����
}�?,�E/iR�
����C����
���
��,Os���d�h��'��/�Y]?����`=2��I�?�3�֒�~֧������8��~}i��ׯ��
�?_ƊF`��kS�����~\s���0;�������
��|!�L���������WDG^;z�_����z�x�
��
~|&$t��?89��ON��s�OC-�Q�"��K��]t���3���y[_�_���[��X/���� ��Ny�<�vӢ	w8�������?+����
���=+�/{m��c�rv��s��z��|���M�Ɖ��Kf>�u{��3�+��z��߷l�M{�ǆW��=t��
/�t�?/j�=�}x#ӧo����I7��K���K���?O���m��(�
7i�>�z�m�=�g���_��9''���'${���濇��#�#�
	�s�N����
f��Ϳ�J�������5i��5{/+o�W�_&������ ���㿯\�is��:���)(���oY�im]��_����������?�&O���%��_�v��yۢ��r}O�FO���%^֧�����/�nlc'S�8���ϱ'�i����9��ZZ�kR�ҕ�[����ZߧɄ�g=;��_���;�����
&�E7R}d�-�Ka��n�_��_#�;�
�����7|G��q������ӧ�ϧ��|�2z�
>y��>��9�
�[�o�o���G�?��S��_�
_J�b�ϡ#�O¾�+���&�V�M��qՌUZ�k�[������4��P<��5���&���5����'n?�N��@:Ü��Ҽ����-`��V��7	�}���ֽjRm��k��}���M49&�{-��v�o���>(����<u�}��w����ZH䏈~	�8��}+��Bx�������}r1��ߧ���ZT|R�f�8<���5�/�����o��[���_������Y���q��1�p����u����I�?
?£�s�o	���}O�
��O��qj{y�Mj���K����Bܑ����#Üc���ǧa�ПO�Ϡ�ƙEc�'���.�
֛i����
p���p?��
?��1N�EO��m$���Km�۾��}�o_�+��z��x�pq�v���y��?��j**��N�����
M�e�jߟo�O�QI�=�H2:���sE{I�
31��z��P��������Q�'��b1���pOq�����p�A�s��@8��ϵ-{I�>g����
]
�Hù���$=:��<�y9�Ns���~���E{I�
3ۛ��Sh�����QE QE
QE
QE
QE
QE
�xI>{�0xX�8<��
��
?��n���1�a,��͘��'j�Fs��8��x�oG��[��
��w��a���
����:�(��&�^[o�޽�
+wG�Ge� ��*6QEi엓�/�K>�%�Mq���
N���?�T��tk�ݥ���=����
O���
���R������鏢�[%��^�~��^�(���_�~HaER��������
(��y�����NG
�D�c@�	���y��W!��r�[]/&)LL
�l�rNz)A��7L��'ͯK[���i���u>jm��ۯG�5Q^���EPEPEPEP����
��~��
O������I`�py���4Z�]�ot������n�t����ƫ��(g��
^��n���_�њv�i-Σ����'�~#�Y�F�g�3�!�Dcc��qpc�I������wu�}��(��@
��A��眑_���
,�
��~��N?�֐�j�����O��f�k��:5����
���F������Z�I�M!���PG[�k{KK�"�#�
0ό�o����'�J�/Ëo��5_xOᆏ�\�6
��)~к5����d�9�ic��(����i��-��'������$�NRn:um�ޝ4����9k<�
Rƪ��\�tb�'���i;����zy�>5H`X�^�UU�Ao5��p�G=NW��:���
�U���
�nO�+�'�����^�_�|9㟉~8���<!�jp�m>���komw�\٭��e����Ȇ)�/���X�%Ӓ2	��J�ݟz�
C_�7�����o�
e��?����?�_	�hh�7�<&�]����\�l��n�w��xy<c���,W�7�j�`��8��-�~�o���p���挣�.F�}]��{�^z��^m%�Ԛ�u�����#�:)5��������1�m��ǂ�%	�;��x��4�ftn���q��0G rN{b���ɪ]���'}��j�l�]:⋊J�$��d���G���>"��!>Y��ê��a�W�`q�������k�s�
�l��;���3�&�3��|�N6#7�J��#�r:}k�ûҋZ]%�-4KBc��ߪ��k���\���
�R�1������A���{��$w��
��ST��z��z�kb��?f���~.�fGm��ϢJ��
���,���3��+�X�������~�ڌ�N�a�[1Y���K��$2�d�q��A�#���s|+�[x��z'�mZ[M��R�kK
�#$I�[Њ��o�K���
s���
2�������
�GO���ӯ�
^���J8�����Jw����
?��%���V����s[�7��
��������
_��Q՗NA�~��:Uj��J�5{_U�������:.NH��H���=�
qLl7<�px=�鑃��#�Ju�c�ۓ���?�1S���]=zk~�Z�?M��տ�/��ǯ����.��q�a�9'�L{
e|�j���z��Ӻd�Et_5����%f99�u��}�
�გ
8����4�*l���/�m�I-36?/����|T9����4R�T|�q������9�ӏo�x�$gӡ��ȼ�
�o��:���е��e�͜9�#�Lc� �O��$1�3���ק�xO�Hv�Ը�MV!�vK`=�s�|��{�\[J�v��^��F���p�~h>�G�W�Y|7�+�)�.��eߥ��G���v�c��x]Cr]W�+���nؓ��	��Ŀ�-�gSџE�������?�B��;i��uo)lok��GMY��K�2��C��Nx���=O
���t>-�A|6��~!|4�,ߴw��<�}�]V��čC��.�K������� ��� i�&
�G8�o$�e���e5Q�%�+���z�[~t��ӲJ=m���ۭ��]l�L5x|���%�WW�Ec�~��I98
zp1��.���_���/�4OxCĞ1�4���^��I�</�^j0G�k���(! Ӵ�qr��F�h�(��Dg���>#|X���MD�|��x��Z煼�ٴg��?�k��z>��E=��o����Z�oy��`��WQ��^��[;D�A�0��v�!Nz0@6���3_�C��5�{
s��ݝ��i���#[�n4��j��n��`�Z��މ;j�����u������q�oٛƾ�����<��G�ڽ��a���[Z���H��D\%�qL�H�˖$����s�qێ0=8��ϧ���
�)?h�ۋ�G��}�7�q���7��c�ˠ����<Eg��*�H�Ƴoe5���hwfK�]B5a-��ݬ��܂��_��Z|���/��E~�m�3x�B���
�gI>;�|h�,�.��k�Ǌ�{�
�H��n-��T�KԞ�D�=ż��x%F��
Ѩ��.d�r��]��7��U)�2�+ӥ����wk���g��~�����?�����;ӳN˫z�U�l-Q@(��
ÀQElET�ݫ6����ky��Y}�QEPQI����ӷn���QE�
M����AEPHFF)h�

?L���_���V�8�O��OѦ����Ǘ7R}�G�J)�P�8�$�1�$=k�F���7�|ޞ+��?��O�zz�fmWV�D�k������֜���
�/��	�����g�u��I��w?�鎜���O�g/�������
�.�䁏��`s�Cھ�c��O�5	by�Fy�
�J�m$��$��v��~h�WMm询K����������爬o�&Եm:)e��kT�YgYs!e��!���YC�'����-'��.l��˸��H&C�/��O��W�P���۱ӵ!�?j����?J�y����~$�Ԕ�v�q��
�z���%���뾝=m��̒�W��w�����
�8�$�
����]#����53����
_�7����
���%''�
	�
k�wˏ�?��_��|�{�jwKJm�;[������w�>�������QE��XQE
Rg=:z��N�3�Fy��g�fޣ8�?����Y�I7�|��o?!����
�[����<��g����UE��_�O��[)2rz

�_����FA��r8Ǩ���
Q$���^�v������*?�5��̐�Z'�����Ố�3P�W���.����?�z~��
�
玔N;�H9�z�߯O�_�'����ک�/i_�wG�^�~5�
"
����=�
�1ھ�.�TR]����zz�5_�e��%�}�
����QPV �O�T����zט�[��/��k)aod�Z�f��"�u�Φ3�{�q�#���~�1 ��;���W��Ў�X�}��c������!Q�-��_����/MU�y��o�U��w��o�?
�U�[�
	�)azUđ���G�M,�ǧ� ��뜛_�o����z�
�ͦJ�g:��y�N��ϩ�3�^k���������X>
��x�L�

�ԯFW����}v��0J:;o�u���Wo�c�(�?���t�c�E�>�?f���m���
�\��
�i���)/oR�_O��=�|�

���(�

(��
(�������(��(��(��(��(�w��n�E�O]w��Ri}����ޟ��(��̷�e�����}�T�{+u��_��(�
?�&3�~�"����?�'��
�Ѕ��(
��(
��(
��(�������n��q��^95�z�L�F1R��7�F^�u�Ƿ�C�{x@'͞$��O�ϵ{(DD^(P8����t�]��{�]�Z�
����S.��v������vm�
�EW�[�_��w�������*@(������.����
�����?��S$��'��q�ۿ�z������g�����{/���Lp=
�
#���?R���{�?o��}ihZ[�Z�ZYw�����z ��+9|M�~HaEU]YwI-_���mO�@(���/�O���
_pf���lӮ�
ٽ3������c�O�+J���#�c���]6ԯ~���C:��%k�i~��o\�4V��i�;���<�r

�>���#������a'(��
Z#�E�m5mE��QESvi[�K�����Y��.�ESQE
QE
W���?m>�.־"�hs����kk'B���O��|��:��\-��dw��[[��4>]�s=��?�ʾ�
������3��?!\��x�#
���yΔR�X'Ѧ��
���Z���{�^���������߳��ਿ���C���kO�+��u�)�?|;��
G�މ�j-$ڦ�zo�}N��b��r��4Q-���,+sE�
�v�;YO��-�{x�2[�o�1ř�Yc4�C.��\�3_b�!G�%kd��y��̙ ��Oq�{c��2ďKl�����/q��?@E{�6��)Ɲh��;|:��uz2~�B�\j'5mwqwZ��N޾v�����
�6����\�G��׭7�4�~	��"q�
˧_ZH����2z�_6]�
�m���
�z'�?���g����:�����t�/��u=6�&��O�=��"ܴf������i'����¿����՛���FC�s�����=�

G�\]3�+�+�$�ۧ8��޵��kR�UZ�Wy^��d����Rʰ��qN-�i6���o�K�ǿ��~>|X����o�w�V?~9���O�wO���,���u{�7_�m/R�,��&����j����۱��>�^��ϸ��x�x���k��
�Ȼ�z�����g!q�H�p+�
�:���c����nJ|���=6���שS�\��m�wVV��y�?�V[]�#�?���/���0\i���C�6z�:�_��s�
}0A��������+M�mඥ�mMKŖ&Nr�kMuN
w����p+�AG���W����+kh��
�k��N�iy?[��{۵��{�
��ґ���ϯC���@�ֺ@��x8=y�?�9�=+���9����_x�p/4M��JH�t�mß�C=E��-��D�
��89������6�>��G�f�O�4���A����$��դ��4$���$?pW>&��NϦ�o��ރNϭ�����|g������ߊZ��=#Ǟ�<M�ܤ�z�
�w6��`Oi:Ls�)(�Gd|�Y�����N���ק�����Bn2�h����1��w_�[t�/��t�+�2s�G��
<U@2q�?���N{�;�
_j�03����z}3��1m)yj�����1�`c��
��sLr:qׯ>��׮x�)6���
Ռc��
Z��ww}~`BAi*v���pG��\q�Z��M]n�%)A��>�{�C�QU
QE
��t'���*J)@���~��{;;[����ρ�y^�V��:��29�Ң��89<�⽎���E���.���q����9i&c���@�A���j��I�ߺO��
�n߫�4�'�����@�w������
���.~��O����mu�c�Z���~>\�_Qv��Ro��'��,�i�m�Pj�ށyr&���s�cu�h����a^���9�qӌ�z���q�
n�6�>?x��H��M�<_>/�[G�.ouI']V�Ys�Y���s+9b�ѯL�2����gc���]_Q��h�X�����ˣ?���D���u?��V� ���ß�褒|o�>#�<��(2�i�7����
�c�	o��3��R��
�Ox�_�0��$�
�x�\�7$�k��v�!]�mm�ے�
�>jCT���t�d�j��."|K@�
1\��x��	��G�{F<]�W�&�b��.��<1;}2}l^m���RN��R�7I[�������hʧ7$\��Z+ٷ��o{�^�yq��N�tI�#������Y���Z���dH�s�U�;O�~���z[e����]�Ȼ"�����2F	U'�^�p�qgs2%�D#��B8��3�$W�p�[^�r����s��q��O�x�*Nn���?Nֶ�}J�A%k��+�%o�[�<q�`�F=#����Z+����5�h��`�ua	���M���:�n=zWE\mY��[��Kw�ߨQE�QE�_xQE
QE
QE
QE
QE
QE
QE
W�������8��}���p}�_�@��P^=�
�-��2��
����|��k����U����
ҕ��8^?CP���{r;�z�}�)��ϥ}溿W�����zv����W���$����><�����ɲ�=�Ok۩�y��r��x�I��8��
=�~�~�@5�����z��y����ǯ�
	����ӓ�Q���O9�+��?ݥ��K�G�Km��3{�R�{��
�s������o���c#F����1y��{��o5�E��o�������3��
���8��־w>�4�jvѭ�^������3�
���(��:��(��
���y�Qk��{u���QE&����߱�QE(��
��(���f���~�`�����-�Gy���;u�{��%~�~�L཰?��(�!.���f���y�x���޽����t��%���8k�ROge�]-��F
����ÿhf��SE݇�f#�+ہ$翿|�
��k�?h�ᆪA��q<������
=�
O�_��I>Gկ���S�[�w��4#�
NW�N}����pq��
��
���s������>�ĺ`'9��^���f�B�|g���_�^a�ؕ������> �'���(c�5�h�����
[�m(�����j�Z����))T�a�
L"8�;��%~y_Z�5��ik�
W��C��c� ��+��(��(�_/2��Z�}>v�
/�
(��i���Vz���
=l�AEP�{;_'��in����@��)E���^���ۯa����{���E�}�ESm����/��
�a�����]�����
(���������՛]��(� ��(���4������QE'{i��M��
Z�
_֌��(W��i�
����?_[w�n�[�n�
(��Z����QE���������k����zz����T��6������*�7�lb�2��
	ڔ���5�(��@K���^q�¸�������o������կ{y.��/R�(�'��/?Ϲ�QEfEPM���zө�ӧ������z�U�[��
�&�����{w�Gn�>�O"�U� ���緸�֬V�+'������������QYI���﷞�]QE QE
QE5��@s>(��c��s$'l��lq���[��I#�y�{4��F��$�Q��9���Ly��]�[�G�+l��c'�l0O���<�u)5�wg~��m�ϻ�:�$��{߿�}���+�E�y�EPEPEP_�GI�
�qe���4�28������E}�_�H����{?�4%��E���8���u���v�_o][��I?&����s��ǈ�O�3��{�U���WE����쾟��ֿ-�"q���%�q�3�0~��t��4�?�N�#�0!�ׯ�+���W���-{i�hkM�-}l�+}��Qis,^
I��Ҧ �Q��02x�����+��
y�=>�>�=��-B�
C"�k��X��6���䎿ʼ\)b�{�L��a��:�)4��w}^����ޫ�`֩|�O���>����_�D���9�[�I���!��b}?�D*�p@$���8�^�8ų�7R���瞸E�Ga�k�հ��y
��w��?*�'+%{Y����[[��wkF�M>����7�~c�
�Ut���1�-]cb4�y2H��^���P�h
=28�_�� �ׂx��{?L`����xc���k��8̷�F�,
�IƝ���q�)���;�@؇<��&��z�G��x�w/�T��i��tZ���L�IE��Iw��=���SG����
9���Uٮ�
֖�
4'f�{~����-������~����Pq�C�^�q�:R�
�\�_��J�ӹ���[]�����\���/�k��Ou�Zh�Z�C���J��d��I��2)�¯�DM�G�|Q�x�K��tJ�T��ͳ���I��R��"�RD'�q_��2�9��
9�����|T��T_xkQ+l�l��I����XI�>2X�&�'�sÉ����]륯m���G��'ek��5d��
����8���G���7h��1�z��?OJ����w��,^+�o	jr�I�-w��#���4B��m�¨����X�S�j�f�m��i���7Esg4s� 9�$����z��Oxz�ۺiywV�}�
�y��ow����}6W�q<���ߏ�H:�ǿ��i�q�����
>�
\�����=�������kv�Z��b���~\c?��zS�}�
��q��'�Rn8��__~�
����Oǿ�Z��-�]#n�}4���\K^�'q��������(�n�j������������8����8JPq��S(�G���Jv쿭��
�~���
��kH���p	��zz}+��O�<3��	�j��|#>�]Zy����&Y�B�3��M���o��φ?|".��
���M�ԥ@c�5}?G���
l�݅����s��G/4M�w��"�'See���_��M���ף�}t��C��-��kC�p���Q"��V�4���rr��~�B�*�UU
�(�Q׮;��i�b�
%��>b���J���
��|>��<�*�ݚ��ڤ��%r�����-Z\tXo-<vFa�����ߴ�����k�'��5�������������C4��@r$cj��w�^���/���K��ӧ�2?�σ:������c�jV�b���)=�1���ۊ��ᆯ.��<Q�9a��8dp�w�X��8�7<?}6��=6ff���;��ʢ_&�u����_t��d�,��q�J���R����
�@���ʩ�������.�R�ӵ�
.����N�ӫi���+���4)"�]Cc#<���I�|��G�j��8}p
�a4��=s�q���N�������{DKx�&�st�°�4a�复F=:��⿎��n'���
��y$�H�xZ��g��e���0�p�hdX{6��R~^�������m]�Ek{y뭯{�km�ϯ����
���	�iN���N�ܶ׊d�
Nv��A�c'5�����g����+�%�W�zw���Ž��l��m��H��42J�,����x�2���H�T�������~�x'�,��]{z���<�v�}�_o��(���
(���O��}>��ן�kQE&��y��\AERR�������3�(��z���
QE�(���_���
0��(
��(
���X�
�����l��
)�������+�
x�-��2��b��Ǐ�����_�?*i�z��=r}���S����־��S��Z����v�y���n�o�|y�Po|�&�Sa�$	m�=:�_�~:���ƞ"��jr���*3���
��_��
��-��,�Q��֧��
<��ߎ�1��S���
���s��_
�-�׮�_�c.��k�^_���~��
����>��H<~��~��_���F����Ol�T{�
�-v@��}}OL��޼,�9U��׭��i��v;���ͷ�/�^���?@��+����<�[�g��
(��Q@Q@z~#�;���ږ�Ls�����*%}�;-{�_'��ܿ�Fm:�
�ץ���v�&����{F=?C�?��qc�ݦ{��L�����_�̘c�˒�~���nv����q�[Z�[5m~jߗn��@q���^�F�/���wOk��{�A���zt�៴`�
�_��
��O��@'����R��_wߧ��[\��}ڽ�G����
N�G�\�v J�>�{��y�����E=�'��|S�c��ڽ��}���ctG����/��_���������l:�
�U����+ݎ�e����ʯ�_s�V�����U{��T���
J��
So�
\c�
�iG����-�s���
���P:~'�����
Qy��==Or*ч�"���-QX�QE
QE
QEJM=�K.����m4�[w�[zX(���B�(��(�����k��~���ݻ.��M����QE�5Zm�y�
���u�QE0
(��
(�����L�(��(�������M�]�
C�
Y�QG�b=����dv�y��3޵4;Sy�[&7G	��*�^�ߧQ���Z[MhE�I-�4z>�h�VV��pB~�vnq����Nn�1Ǧ>����6��n�����HF+[%� ��+�wf�EP�
�����T���)
S[��ޝH�y��Z���i�_~�������'e�_����������~\�����1��TU ���zz{�X��:zS���}?���
(���z��
?>��QE QE
QE
���O$&�;������Ns�9��
p
�iQMO�8�!Fr����9��s[R�����z]�4�s�)�H5eN�_֬��*��b�}ܖ�/%�c��'�c�=�;�֨�|%��]y������p���>�(����(��(����Q_
�C|?����$I��:�Ҽ_�j��[��
aҠ��c��d�C����Y��qU����4�POkus�\F���M�,�$N�]	X��t��UO��5�[��ӯ�6��E�_�oOO����^�-�������bV%b�b�d`��(�O;�
W���K>���L�A���ܴJ��E� g���OL��鿌?`?��.���`ӵ}�v�m;Fզ�Ӄ�L��m����ID���P�ǎ�ಿ��7�7����2�����<_����v�Y�>"Դ�X��U�� �E��"�Zp�"�U�)a����v�H�_F���u-ٽ5*s���D����I�{��v�m��j?�o�^P�H��x��wZ���@�U�ԓ�$�К���
h�ڝ�Zǯ�I�!_�\Z�Y��3�y
N��������o�
w���7�W�o���~�9�����uϊ.�<I�-7G��^��t���#��@��땯�R�U�~���u�|/?���sE}���!��S*mt�6�nI^�I��|�k<NaU�I�>���;.�/��Ljө	rI>iY��J�h�[�t=[�~����t쌱�����~�Ŭ��D�)UCG"�YyV#��~R[��Î�����$Kx#H��|��#D\�DU¨Q�
	���������O~e��k首�E�-��'��v��[����
����V^4�w��#~��~$�u]�z��֥e5�2��H%ܧ<0w����
�^%��-�F`�|=�jZ5�D��N�������2�p2�NI9��X>Ӄ�9�ߨ8�2zq�x��
������S�q�h���x�[����П��>%��B�2���V��7%�����n�W���IJ:%�tO�{��v3��[OMﮚk���4��z���Ι�>�~��>3��x�x��~��4�����
�����qv����R�
���bV�w�ߥ���_9� v▕����ϵI�d�����
>�F2N��������N�[k�
��w�B܃��*�&�9��
'�����_\t�(��m:�����+�ֿn���I������q��������\x{_�tyr2��ۆ��H�`��I�湀��qϿ�z�Q��U ����
��
�TΌgk�=��˷��Zu>���
�k�[F�y����27OO�'d
���ͭ\������]ҿm�P�����.�����6�y��rk�8�
��=��^~��<-6�e��G�i��ZY������G�����`��G�-�8��5��S�n�u�9�h���k�
��� =0�E������۰�s_��8��J����(�U��R~^�v��F��˿��ß�~֟�w�WUa����������
�8�_�?�HA��;�ZbĤ��SL�����ȮF�u��叧&��A��N�����%���;z��[|�}Y;�
_ծ~��������2���DrjZ�V�x���I��3�W��x��?j�������
���(�c"��{)�tX����˱��==������s��:v�˜���P�K�U�������ݗ�6�
w��Y��k�ιq%浩�ꗒgu��̳�A�Y�mSЀ�]�
��bu���*��ylM���s�i�:�N����F����4�oV@T]�[b������~0���o�����^��i�+I$�W;aQw�؄DVv�Rk����>��
>�s�����
�>%��
ڏ�o�F����@Um-�d���$�3T)���(�������
��ry�V�+k��յ�ݞ��=y=���C���2�����)+�m�w����
����Zj�$�GXr ��
�ps���
4�C�����y����i��OKz����*/^�}���~L�u�
j?������⁢�;^��:��>���f�y�,W���${(���-�y;g�̈�R��v���
���cA�4�E~!�t��X���仈E�m�GAȯ����*𧃼7�x�ƚ֗���wN����{\���IҴ�>������>\6�Afe'
*�`����
���
�����Ǐ������~	�'��	~!xsU�m�śg�|�{R�kMsI��K�wXх��rYi_�6���O^��|e�(9�Z�7���o���5��F�s{�Y5mWo�}w%���s���
��?h?
=��%�<5�k��O�
��xE:�մ��$j��.�$j��;�
��
�����'���?��~��h�0�K��;�a6��}L��ii����-��?����(�����@'�nY��M����'<r~�zeNA8W�|2���wZѼK��zΑ�}:�+�.�
J�������"�k�G��)nR�*��D���?KK �Z0ji;�=�6�����r�8��紩ʹRm٥�m/��ތ�
f��ൂ+[hb���� �#�`�$qA`"D�D�B�
j	3����߷�{����,�
�7?ྟ>
k��]�bj���߁w�6:,ob�E;�mo{s����v^h�]��aiKiu$I�S��xw�>��O�WU��|5�=2�Yе�:x�,u-3R�;�+�y�.����U�l��l�'�e�^�sE褖������a��N�v�է�N�v����nmQE�aEPEP��
��)Y+i���0
(��Q@QP�̬����h�
?����]�z��(� (��
+��(	ǀ<?�lb��e����W��?���N#����w���W^~�/�/���3��9u�~h�����GC�z�}})�����8�rs�_�p�����Βշ�i뢷���|{�P\�D�u��8�������?�~<����ME��|����k����/<��j��2[�
��
�~>x�G�&>"
���/~��1���{p+�å�վv�m����V�o�~��=�������|%Pp���H?�*_`~?�J��+���
�7��
���Js�h�>��N���?�5��W����S�jw_����m�C���K�AEW�AE�?����
(����O��EP
��
��
 h�
?���
������ק<����Y���_��ۈ�
Ŝ��5�c�
!]������9�A���85��
�q���ic�
CxO���+����������ݩ�V?���e���
�A����(n�c���z��
Ѡ�
��׹)����01��x�6�0՟�ڬ�>������h��D��w��J�f2�2V��Z��m�׽����
�������*��?5�^H�������L?�>'҈�
�W�|u�t�E��}�\�
!�zy����S�q����t������ҽ��Qw_a�����N�Mڷɯ_��?Ү�kS�D�-2?
}Ensmn=!��
@_ӧ��H:���
Z���j���
#ݦ�.Њ��QEbXQE?-@(����{i�▟ҸQTEPEPEPEPEPERn���k����8���ep��)�(��
(��Rv^wV]����ݿ!wapH��<�pz�s�K?.	oYp�,20�\y����ё��s<6�2f�T�3����<d�#�m�K{x`�b�Tc=�9��'#��9[^�m:�w�w�
3��S曓����ӽ�MEW#�n��Y�:���(����(��
��y���@QE�*):c�N8��?A�=�Z�S�N:c���ߐs�W�/%�X�v������G�<c�s�q�=x��jZ�~�B=�8�q���ޥ�;m��m��K��k����-��޷�(���N�M����n�^c
(���(��(��
��ES[�wWMw0<A�B��������e��$�3�y���|���� ���F3�:���^�?���u�$����mЋi��B���F	8��02:}k����v�K5ۮ�ݞV;
����
>��C���z���z��Jw�
�k�<f�vz4QE1Q@Eqsogm=���6����suss2�oomm-����V(����*"��R���_���_��~#��
����xKV�мA��+��T���^Z���S�&�-�B%���;k�?6"%Ācs
�������C��->˲��{/-���%f����׿���
o�
���*���>*���
��!>�/��/�7���K������?dԡ�ԛ���?h�x`אI�jf4������i���C�F��OP�/�|Nn��r��R�o/}GQ��of{����$�qwuq,�Oq#�M4�����[�[d��8�ł�#e�ZR
�Pz�� ��W#&��ó�Iuo�]9���r�L��$�#��_���|.	
j6m��]��������U�1tj�i(ig)'&�����-�KS�|-��Z�w�o������<�-�Z4������m���5�D�6�#�{�U���y���:��=�����O�F��xGY�;i�/|/�T��÷�V(���_-�_��8k���D��f2Ǧ�C�8��?M�\�דiJE����Pp2x�`e���1��?l�+ᾏ��O���_�E�����
�6^�u_�h��ǫɫi�^�cI&I��#BV_�l�q��|�j�圜c	Y��d�����f8���W������[�9k{-v�G����\�
�y|8�����o�-@��Mׁ�.t]�	R��^3��^�[m��I�%q����
�@�g��(ÍG��
�������ZW���kH���?R�KXu}5..�{;��M3S�����X�X��<����KipӔF�iT��Ť��bA]�͹�[���
U��l���?n���sq���
��Q�u�8�qk5��=�x�T3�u������V��f9�
�J
j�5v��˼Z}^��n�O��x�ѯ'x�ɦ﫲��g��[޳�X����^���};��i��A�Ư��
ivڮ����g}mr��)U�"�1Mw�*�x���۹��Ԯ�����u=?�)�����>k�t���O�i�խ��Cպ~j��j��
#�����c|�nu����n���~�'��FY����ءB��ʐ^�\��4R��[���
n����q��D�X�|Q��>�ֱ8dK��Y��A���N��͠����H>5���?�g�W�{N���Լ�{�sh�ݬr[���Z�Fyb�^9OR���a
7s_�ksh5�F�Z���u�Rf��5=F�k���B��"�y�v,�ӻ�I'�l����*�]$��}/e��okv��"��ԥ/m�%5��Z����W�X�����D�i�5;�Ubm��<O��(����p�~@���,Cp1�o�-̫r[�#��m;œ�q��;�ޗ�烂����W�������|Y�[n�~b]��X�ק����@�%��q��L�>
��[`�3��Ց�{8/Um����w��̲�vS�4��7�������������,��ⷷ��f��\���^Ei�X@Y��yl�[�ʳ2Z9
���O��~�UӓU�y�x�ѢY�i:����H� \��[�f��xє�
���g�~�}���4��&���,��8�d����_>Ѽ%�྽��x�Qӯ�ɖ[{�&�K�16�
.kc&ɐ�c��@���q��q4���s�^����M�o>�NQ�V��T�'�+$���˙.�������`m9��C�3��_�_�O����
�������=tό����>��{k+w���Q����m�i���n�ql��Xc�V���ݙ%���Еe���C(���c����M��Ǜk����k�[Ӧ�/ݓ�2���i��}ӳ���ԩ����s���R?�׏�J�E��P�
�U{��l��Q9��c��P:��'�ߥg��w�ڽ��_�*I��
�~�i�������z��u���h���
�y�#|F𿆝A+as�C>�6���ϤZ����q�$V�0��d������
��C�����x/��
uޖ����<<T�m�I�O��2ˌH��j�JZ�KT�e���f�۱�)J{.�6�W��o��
�~Ů�~���������#�҅��ls��2G__q_����*O�w�
I�<-�i�n	H�|'�Aq~��UTj��Z��p1�!k�� ��7�?k/Nn�ߌ?#�c���}jА�8�s�/�P�6�k���F�:S���d�N���=z�Ӓ�=q�4ӵ�3��}[k�'�?�x�R��1�G��z��Һox3��8״��GF��u�Z�-lt��I����>!�,��g�Ss�" .?��	]�Ԟ��Z����>�[v!��^"��b�����u�a�I��1*
#"���7;�
A���$���;�~���4�|3��g���z���� ,�#����$H��t�i�V�/,V{�6�P���.����q�~/BU�EǕm&���e{�u�5�8>xӣ]T��iI%�xŻߪӫ?���0�g�>/x����=F�	���t�r��D.�T^Pa�o��x'
�NO$��t=;S�y8��z�=�N;p=*/�k�kՕY{�?�{���N���?�7
(��Q���?ӟ�ۚ+��
i�����g�
�_�7�"����_�^1�쬂��K�2ܵ��d$dCu�޽���;,k5�!A�)S�YƜSnM-=W�۾����������/S�a�
����}scq��^�yu=���i������Z;�V���"T3���m&��w��?�|a�Zx_�z���,�Oм;�^kz��[��3}�Mӡ����-�y�1A �8ݘ�Rk���
5�
����
ॺ<�
�����o���)��~�Q�T��O��K�]�[��"]O]�ml��#�i���O#�i��ʫ�9�
���ڿ��
k����m��
�J��z4v�<����&Xym�+G�|3ixgg*���$`��}�
2ɰ.�Hs9E4�I4�M���o�̠�VrN\��$��ֺ�%w�o��
5�	����ot�M��\�e��kJ�kK�[�$h�m.l�U&����q,3F��d:)m�V׶�I��H��"lG!v�9�Ӟ��o�U�
)���$�=���m�
�Z���㿇t|\����������}"�Eǆ��J�էK�2�l��̖�L��2��B����]��\4��9@pۉ��9,ÌW��9�B��K��[S����Z����g����U�V0s��k��]�����g�o|64h�y��2�L�EcP����n	#a!�������6����>0��Z��-Q�Qտg�����d�s%��;^���>����a�y�+(Kp�[�(P�o���b�in�X@�bg#i�`��y�G�O9s����
��;�	��W�w�4���¯C�i�
~�v,�W��^o��ZE�I������٤�L76�%��
�G.���ӌ���ݬ����W���[Iџ3�M���Z����뭵��N�c����Q_�_���&?�oXx�Z���

uya��o�A�ψa�����Cӵk�#s�����7�y��j���7~��
�'�uw�i�����I�4T3�Z�ws�x�0�?���-��bM<��/����?��+�O����].iJ��So���۽�}�{���:��~������ڊV{���ퟧ�4���lQE
QE-o���o�ϸQL�(��(��(��(�?�������
��������\�;��ۮ��c��򯂿o��x u�
����zO�{��[�+���5�~_���;R������
��#�R=��~���Tn8ϧ����՜cs���MBˎ�
���%-�^ޏ[?M���]���U�ҷ���J��~*9�5l㌁-��<_�~8'��`�Ra�������Q��^'����5�~;��c�>$�:��w�b���^���_m7���ז莿��o믪���
�8�
��� ?���x�������������
gL���

s���~'���~����W�g�ŋ��W����k^�~����DQE|��QEK濖��w�-��v������K%�w�QEQ!ER�{/�����`w������G��
?�L�g��~����߷'����x�L�
���_�Ҝ��xQ�����OO�/ۘc�Չ��^��A}_�o��3����
�^�\�ݾ��z;z�U�$�
��[���q����϶q^'�Da���9�
H���n���`���
?c�
֯��p>j��k?\�Q�9���+Ӥ�Ӿ�m�yꌦҋ��o?�_��W������;�c�H��y��%�
����
g��1�zx�L�����K��
�����������
<f��ጛ>*|4=��/�8�6��{J��O�*_�����I�vzn�K���y��K
�
E���G�
���ja�O�����'������qƩ�/�=�|�

���(�J
(�����
 
(��
(��
(���Z]�
?��(��̗�_�e߷��l������6���EP ��(
��(
��(
��(�_k��S��!�wI#*(����9���dc&��v����5��ay�i뢵���O��ZI$��|��9�['���r	�'
w��{����~j���Y[En�;#��@.�����9=�����Y�k=��n�����mOI҆�ͭ����(����(
��)���/���(��@^a������b���~=�#���ݪ�������e���}�3ۧ8�'���{�2�
��@8�;�#�>���մݵ��ۮ�o~�����/DQEd�~�O�(����.�{~? 
(��Q@Q@G<1�F�L��A���G�z�"������K�K[d�ߦ�.�&QRM5t�
��
3ʵ]2M2��&Z29RI@��޹�fW��61j��o91?x�qГ���3��˫il�{y���<��Rx`FQһaS�v򷗦�k~ǃ��ʔ���m��i�7����Q���Eny�
s��
��
?��J\���
?�|��Q��_�
c�z�Ɵ��1����t�"��1��(�c�xoG�{�k:�GH,-�`�$�(#�X��F�z��I79|)+���]=�Rս�~����s�\�FrG�8��{⿗O�:���пg۟���/�>/x�7�,�c�׏�|1�u=wU��w�M�[�xm&�-�Ԃ+e��)���
iO�:g���5�/�^��<}�=R)��x��ľ��|>��I�t�k�Χul�$�ў��)$�..�"�)?�ϋ�>,����_�}gſ�0�K�G���y���^ֵ{���H�4��F�|��i:M�$p����
W���&�H�?��v����w�-�
O�B��J�����}l���v�Vg�����$���	,g�z'2�@
�3�H�I�>�e�M�.��v���p
�'�q���g����i�O�^�'��;ox���t߉:.��c�����V�����-$w��X/4�.쮀eزF���!���Z�b��
�[N����Y�
h-�ɴ[�C$v�s�t�1� �2y�,��i�1��'�%{�{�g�d��l�5r9W�B�UZk�\�Z��Vw]ֶ�~�~����ۓ�F��/�y�ܾ+�V���� �ig�x7���n��x�[����8�]R�J����&��������8��V�|#������i�����w�O��9�a6�����t�'��eh?Ӎ�O4l����?�o�-{��~��
ηq>#��
f�^��v��巷�߃�Z8�y%�,��e���dc���r���ےq���9ϧ�C�s:ҩF�y���"�r�vo�KU�6��t04�S�q���K�-���&ު׵�s��
��b���p�������K�u����>��gï�Cg�S���&��%���o��:���q�������?��-������
ǿ�E_۳��'�I?��(xr}[�_�+g����!�pu?X��Z�>&��hMB�;�x�Y��p�	��I`�d�'���k�;M����g�t�^���
���x�zʥĺ����Śǉ4i%]ֶz�����Z�I(�MB%xL�K�3���x�P�|)�iW:׈u��C�t{y�5M_U�g��N�ll�Id�����( �1�Y�j�c���FQ(ש��M�9�V�^�_�������9W���l羚V����o�{n��-�u�3�^��h��jZF����]���-��wvwpȤ��qo2M/�U����>��>~�_��Ï��x���~x_�&G2:k�/���J����-�M��1$W��k�TcEXA�ͨ�i[��{����W��#�?�(���U��?����
���_��z���1��)�ZkðM  �7ƙgo#d(YX�
���u�k����?i���/�j^�����k���y.�����Ҫ�ݥ�2�,l��\�I������r	��s�rOrFG������+�����ɪ�ߴ'���i	?i۫7��,7v�|�v{;U��|Ckl��v��^)�I~�kZ~�c����^�!���WHJI��h�������JR������e{y/Mtg��p0ˎ1��ONq׿�ֺ�+Ʒ�Q%��-�	$N�r
f' u
c����
ƿ>+���ōO
�C�y��xk�:<���Ci��C}j�o<F���<eRH%BU�"9����B��q����z��ҩ�(����ef��,��_��Ul5K�jr�k�>뵴���g�>����[q�^ZF����
w����$;To��R�w�-�'$�������{p2yV�T%A
���n��A�~}�ŵ���ݽ��������[����5����̩���*�\M+�$Pƭ$�UF ��F��֏���vݤ՞�lp}Z1���f�e���k�۲}t?B����z���
��5/y��7�
�G��Um͒mZ����2)b��
��W�\g�G$�������x;�[Q�ރ|����=���ē��w9�$�NI=A?�O���
x���o������x��H���?��[�ƕ�g5����:l���}B}.w��?��%��i桨�[G+��?�D�#�O9��{�S�+�n&��ui�]4��z�߭�ݞ��{{�O��7gk'k�mӯ�����N��|;�LĞKxgFl�ԓ�<�<�t��{�S��^I��㵹�ه�tVe�H$h�qd�2HWh$�=	�Y�J
c�Ӝ�0s�8�M|�,UH�.Rn*QoWk+_�~��=+l���m���h�7�	����ŝc�O<ީ�7��Z���,Omx�(��F'�m��E�#�
�BF"ڡ@��YIj��Lx���,
��U�0rxn���?���/G�����_�^>��g�j�7���(j~1񭏅4��=W�'��O��Gմ{8���
�C[�3붚��2Y�77�:��r%����q\��"���?8\l�3�<c*�Fܓ�#�T�jaq)J2q���9]�ӫ�������R�|��v�䭵����-"xLV�Gm�*F�YJd\drF�y��W��kW��y�.�E˒��"�+�s�,�t��>T__
�
�m,Qry�s�y#�8�!ׯ$8k���}��x��ی׷��Q�|)/'��������ѭ9JR�]$ܹ�l���ϫ�U��2C��y��wb�Dq9%��v-�(�=03��
%��I�o�*���/�㹞��z�=�l����/k�j3��Iqml^R�4Q���T��;����֗�������Q�<Q�h��59b�I�T��E���Frnu=Z����5y..cEg�I�
N�
�A��'g�u��_���{�����Z�z���ᗅL��h��(���.�����ͺ�guqimc�	lm��癕:XZ����(�;�*ɭ�������ӵӔ�Ֆ�7����j~�~X���<�=3Ҋ9���t���E~G6���͟N��]�QE#
�'����&��c�
��r�����T�q��B��&;"G�xzi�e&�kv�P��`[8�����XI9� ��s���mB���
��$�^wW���>v������U���}���|�����^���U�{��:M�ڮ�R���M��p���-E�}6�M����Ky�f�
A��6��H���/��+��O
j��G�_����3�Z�-g�i~��4���zƛ$q\�W��[�_�
g]��������mt�@Z��|��V:ֵ�?�Κ��v���U��a"dG%��ݤ�V�b��K�f ��I� *�����(�
0
��J�<~{��2��F��V��>�Zt��({��굾���l����򿎾����#�Gû�g㏅�>𤠮�Ʒ�}SOS�,��ݠ��u�2�?�w��Wv��P��i�_�=�Ėν1�t�@m�qȯ�3��~;xC�h��>5�i�i�h�	��;�&��-�ۭ�i���zU��{�GS�����?2y$ݡ��L>��C��_�ms�#���[���_��4���H"H���T��O�!UQ�5���m�ٶ���Ҫb0�cj�m���^�O]��n���x��~)�6����5�
kW6��A���J���	�?i�����Gk}36��i��چ�x��&�h]�`��q�3�5�{�
+�
����jث�:W�Ϗ2�,�4_���n���7������U���=Ωa4�p�cv�P�{n�I�{�
f~�z?���
eo�#��5���d��wğ��!�/�Y[O��1��-%K���<�-S�6������7��
�g���Q��>;jr��Ο�{mW��+��[�_���!��]]�bO#�~)H��戬z]�����]K�S_��'�єg�殥��wR�W�qI��3��Z�3JO�V\�V����kYꝏ�'��> �͟|W����)���>��kkK�R#q��K�r�VV�-�嬰O����߰��S����|[��/�_��Oxo��C���G���-^�nm�Gua}����qk:��& �����
t�
�|1�
������|G�>�l��,t}gēh_��K�G�"���$�m���;��+��X��v���m�!�8m�<��	�
�|(���-X�П>(��
�3���������	��y�w^"����u{�s��g,��n�{-�����Pio��K�7_9���Z��*8�Xw�$�{�d�Z릧�<5h����Օ�ml������l~d���r䜱�9�=�*Rų�~9���ׯ�x���*�J��l�m�N����
�z�VI=l�z�kW
(���M}|��~�
(��QE�~����(��(����.�oӶ�w�_�QE-R}�
(������+����O�8�L����t:���G����?o�x#?��A�tۯ��u����_�_�Fu��/����?+��;�
��ڠs�ӦG���
��1��ϽB�g9��
��_|Q^��{_D��eo�ǚ��{++~}�><��J����Ո�뇴<u�'��
����#>1���0����s�}k���ɾ�`>Ǫ����c�1�����G��G�
aI����
?��^���G���o�;y^ȓ���й�������A�k�z�����ο�?�#0�}�-'>���8�c�;�:�ש��_�i�q�t�+���h/�v����ܾV���-�geo{m�!(����(��
(��[۶�[0
(��QS-���@|i�s���v��v�����cۜ�_����=�����`�
nQ��V����$���Q_��8��ϱ���t���`4�v�
�������U��K�?�$�u�s�o�O�^�E�

�V���˧8q�>��u�Z�1Ӱ�?C�s^�D���RG�E�C�z�����ԥ��
���M5�c)|/��
��
�?>9�n�?�iq���\{z�
J�߆��Q�lGo�#��*]3��
�z��1�����c������0�l���R�G�?��|Q����׶�����?���[|�z��~��?Ҳ�;C�����Px���-2~�k�ϓ=��	��~�����z�����#ئ��o�~*�
���X(������(
��(
��(
��(������~�E��
(��[���(��
(��Z���}��m����]:�
���ࢊ)�(��Z�un�z^W�=<�����
�($��S���}�]��t�0��:�Lv�� �Vq��8#���l�P���1���Ã��O���#���Ekv���ƻ@�^ŏ�M�G�N�6�vv}<�~��˧s��Ps���yzv�w���E�>�?��։.�ET[�����
�@(��@QE
QE
����󚒢�pO�^���=�~�P��2{.���?�k=��R:c����Ͼ�P��8�##9�:�=;�Φ�n������ݍm�}ޯ�~�EVRw����(�
��(�v
��(
��(
��(��X����>����&
�XpYI������(��+5v���{v����Υ5R6�����O�	m�h�C�~e=�8 �F3�y�k���"-Jʪ�Q�a|`���� ��\q����9���V�th�C�W9u�L�`�<vF���OEf��_�����ʜ�I������Ztzi�#?^y�~��9���vէ�c��s�ٮ��l|[�&�VxS�C�+�+C���߲�%��J��vh.跩'v��������~����_�㟆��^�}�$�[�}WD�m$:O�4��~��^�WV�(�X��p�ZO<z�N.8Lf5x¢mt���?�ly�!έmu[�tֿ����a��Ɩ4�{��^I�+:�pM��+�
��S���Q�
��
�0�|6����l|R�n��O��#�Ğ���������nm4#�{�����xιw��$7GJ����g[t�{�5�U�
�~ξ��i⯉����/��4�\jV���'��:�X��q$:7�|ak�jw��Ҫ�5�Xh��*H���q��O�����S�
�����'������
?g�
�6*������D�Kx<���߆��S�j����Y�1��Oo�̳��C���97'�G�[-��}N&�T�K�J��Gg���Ѥ���Q�
��?,~3�Y~%h�L��g��
�;�bUIZ����
	6�
 �Ya�<K$s!
����_�?�	���؟�m��<)�ig�L�~+|s�k��cl�����>)������n�^"�xnw����R�F)�*�>0x�ǟ�&k��|B���_��0�&�>ۮ���j���[���{KH�
skg�$q���m�
�~�4ȿ����V
�ω�_��-���N�JC�ѕ���'�����2�T�Z��v�Y{�nܩ$������&��P��R��z�+�m~��|���
;��O��������
hO���'��x��s�O%�^!ѦC�����y-R��-���Civ����e���_�������K��X���Wϲ�o�&���<i��]� ���v��=͍�7,vw�Y��-�o4니d��
�����^��,�S�j�h��׼z�|'cn�]����?M��٭a*���:������-#���A��k�V���X��>�`�O�-S�ڕ���)�x�N��f�Ӽi�=K]���|/�:'[MSO�Ӧ�8ὊQkr`��][�(�~]C4ˡY�,E8%-⭭��k�7�*�*G'�T攮�h�'h�k�w߯���|t��k���m��$������
��m�~���Wv��Z_��H��iz���kk�	��b�%
��ٛ�	�
���|f�>
~�z��w�����R�<k��}f�|97�o5���ҭ�o�xd�x���G�ıE2�X�ES�TH���@9��9�wRs��>�
s��7����F����㭤�O}W���8�j2�욺W��_��w�wg��Oñ�M
���KEy�nR�i6����Р�#b��{���f��'�ߧ׏�
]kE�R6v���W���A٧}�l�g����
�_���h~=x�������w�QU
8�̣�*9��h�����b:}op?O�
��.�
�_����/�(I�e5$��델#��tM>��"���UVH�91��
�G<��W�3�����8���������:ق�ϕ^*��oM�l�~G�m�
B�
�?~�����������l~%x�W�����u_����~��moF�m���Xi����1K$�R���F$��I�+�	��~�W���
f��
׭<K������ʼ>!��uh��Q?\�����B|?�
�����J���'Ϝ���#�e���eLg�

�|8#��������fٖ*�E׫Bn1��I$��ig筊�VJ����]���Zl8��
:``�
u=
�t�Q_=9ʣ�m�gJJ*�YP:���R=��(�"x��)��Y%�x�he�Ճ$��(�ÆVJ�H ���d����
�^��~��
t���ះ~5�G��<m��B���5�A�M.�MV��Cc���K-�3���dܠc��X�9 ���
���_�
�V�O�
�����s�8|L�#��L:����G��b14�TcN��N)�M-��ݣ�T�׽�����i5m��km�v?�ѿ�F���*:��<��=����y�
i������
�����7�㯆�+�����u��}?W:o�u�[M���.m.^�5++I��.;���8����ú=�����\!e�.ܩdH�m��m�v�;�w�
@�����R�d��,�A��i
�x�9y۷b
���uJU^�e6�iJI���}�Ӿ��918�Q�.H�ͤ����$����/]?џ�����n��x_�?��
��
tM�̲�W�t��X<���X��R	f���iY��l�kٽ���9�=�
��$�nq�
m~Y��֯R^Ҥ�m.�w���|��Ψ�1V���z��QEq�(��
(��
PH�zv?QA'�N�q�M%�?O��)��ӵ����\w{&�_���N��5�
`��>9��߳7�e����
�����?i�M4~)�߈��5�.���K��=e���i��ou�K0.���x���^2��|-�|I�ox/�ZP][R�<C���*G��4)�`���?���
��
����ᯅ�~$����/���?�� ���t���^H&��%����F��������X�-�K<w76��$��?�kߍ|�����kO���7ÿ��"��E����z����T�n#��!�&��Ae��Խ���S��on�4C`nl"����چ.P�X�'�ŭ[v��m��䮏��Rt�o�����7um��k���K�
��|	{�w���cēY����G��� ���6�/�͞�T��B;\�lH��GXd�����`�--%"��\��i
|��}��VM�*�'����׀>?|����6������w����O�e��t�Vɭ�|�k{���{�L�����	�1�'����
�ү��|A�����g��|+:�kWU�_����>y��[��X��Z�fX��;K��K��b��7��UܚQ���ik�N��۲6�a�J�mɨ;������[MZ��������I�B��`-6���6��|���H�o^I�5�:v���K<����N���M��G�����%�5����ǧ=��:�c'��NNq��M��,��g���?	`��D���u�{S�%�<_�Sd��
����H�7���h"��8�4�>-2�m,�S�������_)��)ԯRTZJRm����g׶��;0�:Q�m���oE��>�
g�?�-W���ߏ�Q@Q@Q@Q@Q@_��
(�}G���T4�kkm��u�/-�n�
�^��-QV ����
����L��o��?�3_}W���P���
c\�]6��}��x��n��],g[�s�T�4~V�q�;�rwg��j�����}=�ğ�H� ���մN׾��}l�z�cMo�=/��|��O k�z�]T~r�7�?���r3�/��uY����߿�>�������O_�mLg�2������j�y���M�J{Z��j�ӽz�gh+o�խ���ۧR�.�w����}�O��#Z����
?����Eo?��_�m_�F���|�-�O�� ��
�b��ο�c��M|�}����jݬ��;�O��_�J��
/�J(��t�
(��
(��v���]�(��a�������~?�jZLs�N1����/�꿯�@����'�բ���'��7g���
����x'���U���tc�݉�'�:@������_��W��M���m�O���i�~H����#���
_����?�^9��G�
��
c�>�y�=���
_��ׇ��
���Tn���_N��?Aӟç�KIٽ������S��ƀI���8u���^c�ȃ�C��
���ԏ�gw���M��Gڴ��S���^}O__μ�ᣲ|P�p�rW����3i��^�_����%�O���ퟝ�燐�������.��
�jӞ޴��H6�ަ�
������x��T�
��5hG}���-���(�K
(��
(������ �_��QE
QE
QE
QE
QE
QE
QE
QK���z���ICW�i������p��3������
w�����WۮM��>�nF��Y��n!��w;�FX���M?�~��5�MԚ�������wMv�y7#{�������c9\�^���
O��2}��
��c�\3�������
�_]mc�(S�t�������-QX���I�_�lQE���/�KER
��(
��)�
_���
]
��H��
����U�\���d}x�'Ҫ�O��'���ׯ��/$�9����j�Qm;����\��:s߬��v���w�F�^��W��P��+1�QOm���G���@(��@QE
QE5�������ER
��(
�]_I�S���
�
dpx|`������c�TU�n-v����gR�f��_w�w�V�<z��{)���Hu�Ry�
�@
�s�p�j
��CO�����@=RLᑀ 2�~�<z�^q�iw:l��H�)�eXg��
;�^�!=t�~Mi�}������{�z-��
���	��_����_�'���'�g�>���|%�j���>�����[L�{���4Ҵ[}��0�)a֏q��w$o��D]��B���
��ۏ��G�>�J��i:O�4��Z�t�cH��Դ�b��P�5I��5�ݍ�r�OїY"�7����@}l�<*�dԔZn-�v��+=?�Q�rI���l�������5�
�ZG�<7g�kzֿ�X�z7��kY��=[T�'�>��y�n���8`���$d���k�c�w��
~��!�Cm���:��<ec.��x�\�<Wu�;�c{�=^&�hɊK�)�&B}�����!��~˿��湚�<]��@�׭$�e{Al�}4�K*���#F�_YK n����t�@�c�M{��}uЧ{�M�-R�������9�aa��+��ۣ���g��

�
��4~�>-��T��~����x\x�W�����g�>��޻�M�Og�\�/�/���:���{�)l�4��Lߒ��L�7����W�1����q��V�3�O�w��k:o�/ty<I��W@�MGI�ƍ�i��,:T�����α�h���٥���6��4�T�q����~��eln�v�9����Ӂ�9�sQ�M,?��t��k��{-uI����̴�-�����K�].D0TT�TaW��
G�94QEx3��NS����ߙ�o$�ܬ��(�
����O����[XT��7�1[@�34�J�@V���[h��G�z�
8��8������I�+��"�|(�G�>[���
k�w�l�uo���������\^�]^�-��Ŭ���F%TDU�r|��G�F\�յ{YY��K2g.H�4ݕ��k�����
)�t��
�El=B�-�]V��� �iڕ��=����ϵ�6x�����#��`�m�g���+98�P�98�Ӯ3��?ºn�q����)n2L�0|�Igb�ݝ�]�b�'!�W���
�F����M��I�� yH��:��`_�`��Ƅi�+BM�D�׿��|�3�T�i�Y=�;kn�o�t��6�Z��
��߲"[M�����Dtf��W�	g�E����RT�~����q��z���M�
�K��?��Bf?�>����>+�w��8�U��w'��E�k2Ki{k��~y.4�������/�$S-��R3=����81�r:�O�5�Oe��c�NRO��Ԋ�i$���>�z�[^5h(�M>����_���f�E�z�mn�����D(����گ������]�&�H��8�����qֿ,?౟~|3�
�y~����ox{��2�#��S�ڟ�4�O��]��M���A7?�ڌ��O�����D�,�Ja���u���l�9��
-��.����V��F���4���f��Gws5�Z~�i�/G��R���ZD�VH U�;���O�ø���9|R�ݷ�Z�:k���̱`��Izie�}��d~X�2h�Aq8h�Kg�����3���G#��c�
�P|z�Y��
�8�W���h�%���"��
��Kqeyyi����]oH��������:��3N�2�����$r>�&�c���#����e%��dT��'�<��E�<9�+�������68uR�ݜ�H�R[��w����,4���8J7].��_gn�:)����FMI٦��F���o_��
U��_�|t𭿎>|B�ď	ܝ�k�֬��!!
����%v��E`d��X��p����/?�՝N��_��ks<Z��e~�jM �]B�X�U��[P��{i|��T�0��Ȫ��B�=2q���s�p�QR沽�������l-ooIOkh���kW�
qh���ΐ��(
��*n��+����Zv��ZZ۷�^�~�op��(j���ko=?/�tHG�
��ϡ��qL�=�x'�����#�x��
}��D�T�OK]����l�s�g��>��3���8�=GO�S��R��Ml��t��~�����;~�
�q�S��)G��Ӝ��
���Q+��eս����_��(��i�����_��A�&����[��ߏ����*y��Y�۶������ٕe��}m���l���
�QEdQ@��������J�
��x���O����A'�m��L}}��ԇ�x��?J
Z@1������PEP_���w�����+t�Ӧ���k������O����T���7_ƻ0_�^��3��9i}��N�
��ZP
NOC�TD��VN��o�==���X��=k�M�z��~It���k/_������L��G��96����%������|t����&��
�}����	/\[jğ�����
�_�>:��^"n�T���<�����ߕ_k~?S&���w�}��������0�?�E��Ǆ���
�ڏS�S_ğ��w~��
Oe�> ���+��
ٽ+�k����ד�W��=/�?�~�(����(��N�-��t�����@��*d��ݧ�Zt����p
(��V��mzy��
�
0
(��W�z��V�]�@�����
�5c�_�+�mu�����c ���ҿ`n����_����5�
���@��?�Oν�X����ݭ6�qV_���e�������}Exw�H�c���؏�V=9����H'��ׇ~ј?u:}�O�x��篰�N��ޗ��[�����_?>9�����
B��^]��g�Ür�?�a�%�?�:ר�s�x|������י|3~'�8>�>����E��
��ֽ�ڣ-4�~��=40�N>�'�����V�6��
��3��e��Ӄ��fZ���=��Ba��
��sS}k�G���G��?�䂊(�J
(��
(��
(��
(��R�ۻ[�_���ܨ��vK����u�lQE=R~���i�ޝ��"�z�ӿ��хQJO�k%�
��%kj���o�k��EU�QE
QE/������zi��/���
�3p���EC�	�9'�z�x?)'�׹�1�})9&�8�R�#�P<�G?C�N�
�+������-:[�ݔ���]RW�+���
K�.ͅ����[������$���X��m�b��+hF!����c�nu�3T4m6=:�G�3�7\I�K���E�h��
�뒬�}u���Ӷ�=:Z�o��0�1�]5}6�N�ק{�FF?Ϸ��S��
���=*J+�6�]��hz[QH�(��(��(��(������#���*Z�Q���9��ľ�2���;z?�fKE4�B:����d�
�ӫU����z ��*%nd��O˧��K��(�����k�_]=UtQKO����m�o@(���
(������W���QEmn�k�D�^�ZER
��(d��~=��QP�71�3��`�a�����G9#=q��ֺi�i�;�^����_S�5o�g���l2YA��2I�u��23�5̆��~�>�?^�k�H���}����1��z���(��8̀z�
+��9��5�����Nݿ�^���`�(?;y+m���
����
'ԏ�ʒ���[Y+�����g �==�:�-�~���o�<ʉ��q{h�~��P��+c��(
��(
�O�\w�s��g�q_�[�
�O�+���HS��$d%H�
�k���I�o�]r��A��
M,��ϯQڿ-o��#��o�
i�M�c�W������|h���.���Wm��m,w?�4�7����lg����^ن,=܃0���sTM�����kev���3:�s�I��컽=�~���|x{[D�[���d:�\s�R�T���Lw��U�Eqb��+E ��3�Q��8�?k�
������K���u�ıx���u����,���vz]�[=Fk/:qiq=����	4����B���еo��ö7�u���k�>�qD��m��ֲ�m��,q��u1o
>T�_�RƩҼ#'	�e$���}to��_�^��V�`�M�뭼������$\/�O�)��sai+Z|a�5w1DȆ=#O�ԙ�0'b���#�v��j�
Q���
���~X����I_د�������nu?���������R��H5[('ԗNi|�é~Ͷ�?�zY��Ҽ�1C���
���8��8�0���ǒ�ҏ#�[Y�ׯ��C��JI�TQj�K$��g�ON�QE�'xQE
�續g�����=�����
���C���
��~�7�#�5�M�g����gRԴ��=?�Z��M��4KˈR�R����\Z�4Q]��Z��<"�e~s�
�T>|���~ҍ�o�k7�>|G񯂵_M��X�<?�=[P�����?�t��nፘ��̀�p�B�{�?�X�4��V������zj�9E�{]i�D�~-�u�C��m�Y��v3.C&�W�RP����V�x�h�1�}9mekɕX|�n=z�G@s�W�C��Jݱ�\�b��s�y#�$cҿq����g�O�g�
�|z�s��B�wi�x���^"Y��nu.�ҧ���H��n\c�f�G(�M��rS���݄9ޯ�$�zow�]v��*�(��;��&�iy;]�O��~����w�~�>5^���?�O��ip4��N;�
�^閺�Ķ��v�gqyo�}�7��*l������-�q�{�w���#���!���i������Z=�� �Ӡ��q+�&d�dm�Ff;����3�j�b�U+'m�ݗE��ǫ���)�ۻ]�����/�QE�EPEPEPET6�v�ˢ}�I$ܷ��>����QEYEVRR��=�I����w5���$�[k{/����?��>��S��V�mmk�k���2n�EP�ݕ�������2Ik�����ݰ��*���m��%�u��(�
?��
�E!8�
?��z�Kv����qs�~_�}?:bgw�z�{�
�I�r?�
Q��� ��
/a��~�w��m5m���g�}}7��'d��O��EU�QE
QE
�'���^�|Ktz�"�_�(�����

��D|?��=���#�=��G�
\�V��+�_���3:������
�~W���g��I@��#t?C_@�v��}�뿩滻�i�o/��;�>E��\C�C�6���ζ�?��_��9l��ă�T���x�����p��/c
}�S'܉���v�B:��|����#?���#�可��ڽl7��[k�}�?K���_���b9�<5���[�����m�M�0oφg��R�
?��
�(_���S�ׁ�kVgɾ�-�o>��w����
肊(��:��(�
�x4QE'���������QE0
A��0��zR�Q7���
��ۼ�Szi�9�]�f�R� s��~��^���_���V��8��q�m�q����ҿ��8�5�e�*Mk~[k��;v}��5�Y>yo��l�W�ka+¿h��Z_�Po���o4���{�x?�������X~�'�
[�+ԧ~u��O���
�-��_�T~6�qL��|�w?�~�'��y�n>&�8�S��~�$�3�O˥z����A�-.z�K���yg����3��^��<��m/{c�x�u�
�������iig�_�y~�[v?Ң�?c�'kx��T_��T���y���}��
�H�K_��?�S�_�=�|�
$QEc�����PQE
QE
S@l�G\�
������(
��*.�Z5���Wm;���d�ӽ�K��m�|��(�#��y��QR�^�vKM�����m�ee�����(��n�Y_�����(�E���KV4�i.����Q���8
u'�s��޻�
��1{r����#!C�)<p�ߌu���Õ��BW�oq���5�\�7����:}?��
^�jԶ�ϭ��K?�w����0�II-�W����W���������m�����V�edQE!�Q@Q@Q@QB����
(����N��
��L|q��
8�
?\S�):�=���w�i�Y//�o����
+��=���G�06X�B県���T3�#�����{d�\�����C[+m�(��ͻ�=5�.�{w߿�QE�g�ϲ^������)
QE
QE�c��m�g����
QEGmt�}v��i}5��QKM-��ۭ�뮟�QC���ER
��)�����K�I��W�}��F)���<�񞜃�p+���ؖx���YGθ�(�@9�r2+�����RPz��ׯz�T�����Oû۪H孆�Ҳ��[���	�yA���G�-z6���[��[�[\�A�X��J1�ǩ\cגOya}��.!b�8�pce�� ��;�L*�-����
/��G�_:R�t��v��u�Ky���?�Ҋ��O=�w�ӹ�QE?�����S����20O��N	�1����, ��#�=G��
�j���i�+��t�Uo��O"dڋkt��}�
������T�4�:���bAQ��{w �����wdz�����b�<8!�~!��͠�kx�`FӌWӟ�U�X�
৿�q�����N	'�6K�y�`��Nq�|�e,Q��FT��'b��5;Fl�F
�Y��՗9<�>����
+jͽ���>w0�)V�m٫>���/-����>g9s��
$�o�{<���j꾵�x���$WWW����WVR���l�l���Վ@#�zr:�u��6X�Cqv��I٫�kݫ?+t=�����ZA-�%�h(��׏�W)�QE
W���P!��W��'��
���d8�����x?R�ې}���#�

A���
ku$q�>�R'w@�5&9����u�u��[^�Wϙ?�Gr*;BK���[~[��瀭�����H\[��C:�([�����8��O��uo�(�i�K�_�C߈���{��W�g��uv���"'���x8����_�!���������_�9���:w¿����<Mq5��.�kX��Ȇy����TAo3I)V���_Nr�k*q攨4�M�x-������b�6�S�{7��{��d֛j�a~H�ܓ���ӷ'�u~x��#�
�gxB�k=3�W��|b��7�a���6��-ֵe��,d��ѱV �1���9�	��^�g�|d��Jʍ��'��%�.�_G��.�0Hf)h� c�#����{�U�]b�
=��=���ݧQ-t�Mi���
���W�?��W�8���?h��/�nR7���C�9i2V��C�kFbAB�dH�8��A�{��3�pFA�k���v�Jp~i����7�Ju>	�]ti�w���QEr���n�ܰ��(����qW�����)s�z_���H�F��^��t���aEU^�~�馺u�]=Hjͮ�ERm��-����k��(����(�?�@��)].��C�{&�AER��}տ1Y�
B3��w�>ԴVk�wz�zv�E�
P�TR�G��
�U��]�K�����6~��S��?����S@�'�ב��=��b�IE������n�:�(�
��*]ۍ�]�]�@+���
ς>�<Sw�{��~���W�%~|�B	���7X�
�d�?L�k��"+��7m����o��K���?����{u��s���
�H�w���q�~�C��8�>���^�wm�<�����|��N�����U��E�J�z��?�0��9G���'�<	��v:-W?_�[���
�x��W�^"?�k7�6G��?��p�E��Ed�����
c�Y~Q�
��������~�_��/��
���?ˊ����{��/�
[ �ߟ��JX}���������1����
^���|�|׵�k�2_}�����C���W�M���g�]�QE|�[��(��wq�s����~�zf�2�I�?_���
�(���
���C{w��W�M����
����}�����_�
�d�q���A�����z��ӷ\�
�i�����rNG�׹=�m��t���~�5����|[�w|ҁ$�-1}pM����_ο!,{����?��}����Y�,�
��}����r}�_�U�iߺW׭��n�Uj������xO������������?�k�d������/������t�
�s�lνJ_�W�]���������������A��[��k�#_n���?>����?������?Q^���n��q�
>������W��:R��7t��m��H�Ƕ:���n�����4�^�t�NZ�%��ߊ�;m���
Ks��i�����
E�Ҥ�����'����bC��1RW�8���4ݶ�����Zyi����%���%0��+&�꿧��ק�_���(��������ץ�(�����CC�M.�
���h���6��M?K���QWu���k�[�~���
�QE0
(����o�U��Z�կ���Ւwߥ���ӣ
(��%u�ɫk�ϧ�tHQE�9;v��h���Esi��|��
���xD{���J��w"�=�$p�q�]�d`.����-��em
��i��O���xo\�W�*�*�(D@T8����3\�]u�����0�W6�+Yt���O��P@UUFF
P:


qEW����
�Ş�J)%�
(��aEPEPEPES�망��
O@(��@QEU�mo�me�o$���
�N�9���n����
ש�9
+�3��9��?�%���O�re����כ]�(�g{u���8����0�vx����?��ך���g��{�io�i�R�~��_��ٰ��*5���[���}?�EP���7D��
[�ER
��(
��+d���z����
��EVOW�_����ER��
 
(��jֶۮ�
��
V�k (���U��o?-wpQY5gn�QE#)���
0�e�9ѣ�5tl�W؂;g�#=���5�s�[-5���ߠ���R�wݽފ�
ֶ�g�xaFfӈ\�M��rB��m��1$�A�͍�;#ZϹN
��9�^��q��A�{!Py#'ֺGk5?�w���ugL9��w�������_���1azq�Y�����
>����'����8���
�zW�?˜�_ϟO��mgY�<?��Z�{m��=�橪jw������ao%����ěc�x#yd�WTERĨTe)�F1���}tI%k�C	�a9�iF+[t�W�_���_���hm���=E�m����b�7KӬ�R��^�]����(��4�q���rG��`�
�ʟ����gY����-K���Γ-͍�
���&��-+R�I t������~)[i�m���4i�*�kn���?�,����?���3����T��y�}j�A�t}�]?T��t��m$�G����'�����4��#t�[#��쑭��_���:4�|��븶�$pq�y$���HȸiN�1ۧ&�`����]/߷��|��oz�h�O�&�}{O~Пu���"�7�tO�U�n��/C���7�Vږ��^8kW���+";����n<f�_�g`f�Ee`�-�,��n�u�Ao¸X��TA�oN�d�/�� ��r����]���\��<t�}�*��*wPIF�U����^[�����Rr��m�5�����G�_?�߷��'��j�6V:h�-t]kY_��V��^$�S��/��*��`�A�_�����V�|#�lxO�>�p����U�q�Ǥ�Z��cQ�|)��Ԡ�_}��YӧQ�H�`������G���2��UOC�Ny�5������x�]��,Q
ʘ�p+���[F��������V�4��{��wﯭ��Q�ե(�v���h�z;�[����?>3�-��~h_�	x�E���o۬�~��\��,�5��Z~�hي���nm��^1������,�:g�S�񑎧���
1��%g����_㾛���j�%����M?��q$����]!o�z����x���Z��� ��[�q�_��9m�
�����|f�w�ߊ�5�_x#Ǿ�|O�n���_�:��\�K����ys��I���^2+��
(�Y^�NT&�����~����l��jQr娒n=����u����çޏ�u���>G׏q�4-��<�Nrba���ߟ��P�%�8�\v�}N����zw'�z��;^���5�����S��k�~ݵ�_͞bt�Ò-fێ�\�v�u�۾k���q�
���e��?���x�����Ɵ�~%�g���zH�OZ���\^ �,6���^�9e���noJ4v\˹W�?�,���K�
�m~ɚ���F�u��
'��w�_�2J�k�ۆ�|W{f�4�7��P�^"���L�e�?�
���~'�O�����'���K����y�=Z�[�'�<A�\_���{+�>���El�-�+om
G�q@��������8���	'�޵��v��ۺm����\(��w}_���$���S�u;��L�ݵ��!v��&
`�.&s#9�c[+	���+���x�tz���4����H�G�?�~�����b�'��y�=0=�
�����k[P�嶰��w<`�lx��C��
p+�$����YY薫�^����D�=�߫鲵�I����
�����;u�c�?Lcӵ `�#�ζ��mZ�]
�5�	�����X
N��wg#��b�Z$�����N����-���m���R�����-�>��O�-$I�/�����h�rKmw�<2�cG"�������
���_o�
5?|���]g��+��}7O��4���������%�̆K�xZݝ^xnZMWK�G{)n-�����
E���b�B�a=�(��
���W�x�Ò�2��Z�B��c���GAq�.7-��)8ԥ]4��׳N�O�
�d��T�5%'̒W�]'�_�d����+ƾ��_�F�Ğ�6�a�x]���
Nմ}N�.luK�H嶹�U�)�!�<�D4���
.���o�������RMN=^��
���	/4�-/�I�;�z��yt�-�K�|5�y�<�M��xjر�#E�X�L����*�����q�����:g<����]��JJ���]b����E}��2�KATS���֛�=�>��=�gM���9�F�
�G�u�
��O�
~��+ր���;�`z�W���۶���v��\����d��wg��������].?���)���iq�
~��
��]���A�O�];�d�w���O/��>�[��|��
��`��
�K���'�
I��������ǥz����@�?�T*�c����
?���^���k�]ך�[}���O�������
�/�W�qI������
�2�5���ڧ��
��t��/�j��/+��}|�G��
g�ϥ����}��86���*��A�Q�zʏmg����˷޻w�j����?���k�y�I��}��%�����h�Ͼ$�\s�
Ld
}~_���z��������[k��O�?安e�ۛg�>q�|���ٷ���7����
>�������?����
��Z���P6���b��o[]�����[��Yzj���~/;I��}�
>����
�������
�O������d/��pG$����
Z^��T��k?%�_�򼼾���ޞ�~�����o�_ϥ�����
��}��
�K����^��'h#��=���������
�W;褶��^{���/���yv�[�ۮ�ўQ��}�
>����
����s�
~d�
�k�BA� g?�?N��)B���?�#��G��i����_��?�I~/˺^{����>�˥��C'�
I�����
��5�8�U��_Z��p�!�?2����a�?h�{K}�O�_�O.�v���z��&y7�/������I�
���ޟd���d�
�k�KG���\9�q�_�=;�f{uk�P9��@z��
QT�'g�[{i�������G�n���<��>��}.?���
� ��=-n?���
�z[�Z\\˩��3����c�o4�������%��!=sf;u�c���u���M��u]������T��^]l����
�׹�ӌ�
�'�EG�z�_��
�Q&��gñ,RG���oB���nN29 ���q��9<c�(�-�=`d��+^�p%�sߏoo̯�)��-w���5]?Q�jR̶wP���t�Pα�쫻�H�c���]X�b"�u�~Mo��./P��Z->�����?(
�>����ڣ�S;@8��?��z�
�������5����-6��
�C�o�wy��z��V�G�-��7nk��ǜ���,]No�A�ӌ~U��ODZ���g�-X{�ŧ�������,�$�R��+�>�zw�=k����n��N�[W��N���謿�?M?��Q5���
���|� �@Y�_ɓ܀�zdW���u�#���
�m�x�_�w�3X��5��?����4�6�J�k���
5Ǉp�b˿
}q������_����͞�&��OEC����|�}6��QWJ�����Ec��p��)I������n���ѕN�z?�����
��֘ln�
��q�f&���U3|j�X2?�1�����V�
������\d��y=#�?�-���;_;.f۳��Gկ=��
/����+>g{��o�w�Ւ������
�4}�󡶘}ca�*����t�u����9��[�/�B�y�P	����}�P#>ٵ>�׾:��i�z%��W����MU�`)�W�j�5�����l.�����#�?�'�o?��o����U_���e$�Ye��>������1~>�(���>{{�>��$c�{}*o$��n˿Ϩ���~6������~�w�
>���}���}��
����UOǯ�dx���
�@g�	�
v��4���������y0��ȳ#��Ҫ�G�ۿ�t����4���%����׷��ex?������T}�� }�a��f��U�ǟ���=L���
�1۽7���0A�q�[����]\�qJ�U��ۣK���Wԡk�oo��۾���������cH2F�?�4Ӕ�FmoOR0r�8���Ds�'���r9'��~���
�y�J�G�>h�W���}N�?i�rA
��V�;-H<�ͅ�;ƻw��R? Q��<`z�����˿��
�:�>���#��R��n���7ߧ_"�g>��
#�5��
����;��:���H���^�O���
���W�~�`³�'��jg�-$��G�R����;m�W8g�/�
~3�mPnt_���
���
?J�?�@���
9��ׄ��I?�Pi�߿���z�Ƶ�΃��e���
X�~G����~��/�H�#����I	�R8��9݉�G9��i�{����~G*^Ӗ:�4�ޭ�?˵�
������,�[NCYڰ>S�0��Ԟpi�
���8��$s��>S�j��~#|?�J�6��ìN�fx�-�&�>0$$�T�pkj?�&^c�V��zjv��s<s�z~�ש/kQ�y}�k�t������M�_܋�f�[���K��/�������
�)?��i��mn?�ӟ�+�-��
�����]FՁ�1�
-}�9��j-wD���}.L���[����_��\����t�������������O՞~t��3�[��>���t�������c'�
��^�50��
?�]��}1(��S�����wl��X�lm����@��=7Ӧ�]��_����o뮺5}7O����az?�����K�PR+�p-g'��?�
^�$���a>���r��t�c�?_OҔ�-�]��
ҿ�%��?�m���{i�vyW�u���\ߩ?��g�o?�����?�
^��w�$��ϭ4������'z������-��ڽ7���־����v]m��v��ccz:���d�
�H,�K[�����^�����g��}:@��}r��=s���U)����;���v��O�zmrɾ�zv���뫹�_�����q�
~_�8�6��������
��X��~��
��9�0?����<�
��EkY������������i��޾V���a���q�
~d���'��;�\�M���H
zd����ׯ��"��q������Qλ~���Kˣme�U�������ǒ����n1��?�
I�+������?�
^��}?�.����y��%�F�
}z�t��~�}���4�
��N>�.?�u���~K�{Ԓte"']�JT����y �OnEw��򥩔���7�u��uo�c��1wzۣ�in������UUF�Q�(������JMٶ�ߢ��{~G|b����^�ET=��
Z�%QH�(��(��(��(��(���
����
EV�����
������Ө���}9��{S�?�x�:��
�§yE�/�>��
��M]_��(��'~�|�����e�QET����뾱]��vQE[T���յ�=���@QEG];���������(���^�����(m�����u��ESN�z�o��t���(�-���%���(�6��]���
��\Oo�
_�m{�7v�m�0�\q�������=�>�T�,�7z����I��:��:u���}?��
�{t����ӹ~����#��w��a�BW�+_�Xuڮ͜�8�k�������Oi�pDq7N���l�dzq�*�'u��n�O�~D�����ߥ�
���Ex]��#���!u뫌|�'P~~�k�<�F@�Xw�7��Cy-�ܐF6iM�
�2��9��NROݓ�_����'�E��������n}!E|�?�m���ٴ/�c�屄��#ס��"_��D݋	j���/m<�o
�0p:=�I8�/Ko���%Ο�5�����^���Fx���
[�����
+~�W�
���U�}�=Vm+��A�[o��L���w6�6�k/Sc�ȓh6�����/��A �i�k�J��gLڴ�B[7S��砯�#����_��
����
�&Ӵ�?$��
�����'�}C�w���.n��hя1�)hĄ���R��P���ӗ;V��
�4��<����ʽ�[e�N����Y���E
(
�
�
`)�1��zg#�=o�5%��m:S��o�$�,�!�#����J��k�6����$���MD&x�Icb��H0$����0O����%�*�+��=6��t��
��Uc��{��Wmo�^�o��
u�c#�y��?���㞇�W�k6W�.�I
>HIABFs����u�^q���jv뼅��UgBq�2yW�'��A=rn������8����q]0i�5v��$���~���84ڽ���y��4�}im5��a�p��ݎ��*����
��G"�x"ue������J�r� t�9�9��4�jZR,+�Uivp���NF��\�d(ѹ����E���L�	d� �P�	���
�־�-mk[w�M����]�>�}ֿ����}>]r��
1�6t�_P��v��1�n��k7�}����
cOj�y��)�?�_E���e�7�.��_�-��q����Q�Eo��c��J���I&�\��۲]��I8�	�
����;㮽��
#�sZЦ�Yx������i{���ֱ�G��,Z��i,)�2���r>o��p��+�˚��z|V���i��}�o'����NM�)E5���/{h���f�	�#<�`�����0O���pGP0I�O�
[����
M��o�hNG�n������:E�
������<="�ASor��G�0���~1�giGᖶ���kw��ҽ�9[��ߦ�����zX�?���OU���
#׾ũ�?�g?�S��V�%&���^!�m�g���W0��i5�6��`�#&�n�q���	�<g=�
Lu?�sڿ��
��
�w�/�������L�7����=�_��(��z��<]�+���2��,�#�ӵ�/P��V+R3q�;D22�F#�o�
���+4�ö_>"ڮ���i����
�k�^�Q�H�H$q_�dy��
�hS�KI�.�t��Kn|v7^u�>W$��^�o+��n��+���c���
*p%H ���GPs��|��_�?���P�
F��0���8Kn����F��&6��	E ���
r
�/~��w��~�������Ὴ�
�HlOk�\B��$�@�8��cp���JR��kɿ+Y�g�ǟ*R��%��՗O^�
����-��L�l
���F2F�ׯu�]]	�!�S���F8����p��.Y�-��?�6���[�x�ف<y�J�Ì�x���c�ߊ:N#��G�&�@&������� q���M&�s��KG����
CΫ������i�t��m��}��<��:�FfPL��<c�px'8+�
�s^�u��Cs=�m�$k���^P� �����z_��W�x��K��c
�Ol�#�	!x�߷�W�n�[_���e����K�Ĝ�u�^����>[*��e����߳o��S��/g-;�}��n��|Γ��������7�����o��d���y�MF�m]�s�P����ʒe�@U�?��s�6���Oï���'�>#�#��6�$VY��
�Z͠,���ꬃ9�c'��<)�'���
�8|�>�]�ġJN�
���]�-��V���/S��
ps�'�?������?�O����'���������w��Ѯ��R��д�wT�
�Yn.4��m�h�9&�ډ]��+�*~uƱ���J�)BU �d�mS��E~��w����ۭF��Ԅ�
�vo�Vq��v����::�鏧��RׇG�D�)�5������m��9
�3ߎ��Vͷ���X	�9	�t�����Px��������N����~G�6��4��W~Ko-�{ks�(���W�/
�7��I�
�mюq�����뢷״K��m������Lg�v�z��
:�I�o��
/��;4�2��_���kQMWG]����e!��=T���
Jq u }i�i[�mպmw��O*�$�
��~���u��:�Qg�뷙qM=�My������}�R�w��׶y��z��$�[t�m����R�I$p�K4�����(�,�
9��p�����.���&n��l�]���	�u������uM[P��V��N�$�=���~��ilY�(�I��DT�G&�3�A?4�>�>�#G�hZ���l����A�Ho�Ǵ����q�k�4ԭ�n��ڽ=;���iԕ��ն�v�n�����?i��$�j���+g�ܰ��F���|�z�}�Z�"
V�B���+gl�ӓ<����q�|
�Dʺ��T��lu���A���{����8>��E8��gv�:z��e����v�����ܼ�>޺���@?`�eĄ�u�������8;�������L��'�4�x'3�]JGa�prq��װ�8=�Q���q�z�#�?�
��Z�Q�wz���m���{�O�����Ym}t~_��}Cq�S�At�͖�nI�+e4�'�̗Lx�g��;q�J|T�$.�gh3��ӭ�O�I:u#�<�ׂ.�q�N��Ӹ�
"���?^���?�Z*0��ϳ�<�^�:Ҷ����y.��k����>�W�s�˘�9��
`�XG���g���Jr|�k
t�ŏa�.����^m�����Q��U����
"%Zj����E}�鶇u/�_��
$�`���L��f���e���M�3ž |��uK���9�ϯA�g��H��G�Z�i����~~�֩R��i[������`�il�{��_��+v��N��*�,�2k�۞2_T�9<�����~�����#6�ORn���$�;�?O|f���0s�����qޡ��ݞ݆FN8��
_5J�.��������'��u'f��Z4�nݻi��i����]]>�������
ҫ4�6�C��drOԖ���������GT�$�KO�K~���i�
rkY_Ѿ˿_���x������$�z�}My7ů�"�t�4�f����Y��|jR3ƻD�3����k�)���_�?\�y�:MBi�����eQ{h8s4�����>���|�
�#�����^pC�=��Vt��LLC�z��wa�s������=y��O^9�=;���wG�z[Kzh�
�X�y|~��K�_�t��?!�
h?�>?֮<-.���jqA��a�]�,/$��(�)f@alT�8��8a/ڋ��)֮��W�F�{�\Ko�x���B�h\�K��+^���V՛i&q��!P�p��ی�����8du9���1��8�?
맙J�m'g��鮺��+-�]�'ӧuپ�������
`/�>*i_<k�O��W��������mZ�[(k���̧i�9Rs�뚳urH�<ex����x4�ϰ�x�מy���f#���zzcv�:�p⫼DԚ�i%��wj��ݫ�a��^0��m�mn�䖯^��'9?��
'�v��
�a�O��r��w�ӷ^��֢�o��
�D\��˟��(
�9�1���57�=M'������Ke���N�[����뵏i;�y���� c�?NF?��ӡ��'�����������=���JWd��=v��o���-#)4�3���Y��w�a����b����4�(�d�%o-�NVvn�V�?��!88Ǹ�
���i��?uI���۠�u!S�GO���
������e��;Z�[w^KM:m�

�/�:V���P�閏u,w���D�p�c�g�7�瑑�|�|�'v����=	����zc��킠��
���y���%�ku�}�_/��c���;�����_���>!�Ú�8hڌ8�w�I�ל�1Ϡ�nk���3������k;W��:�� �����b���P�#���$/��^hպ�������4$j����<����z���jVM���}U����N��ӝ������k���^�g�/~�?n�D��o�kW*��iV�nx��.�_�[&G9iG���?�_�J�
�6�
\е�O��YXj�f�=���&��4vw�ݼB"�0�lɾX��:H1�a�<z`r
��@��$q'�
_���k��mRQpJ	5gw�����t���i�$��׳�ϿB���P��b@�=8�̾Z�
�?�M���X6F?���~��TIɶ��{��-zz��o��J�%���(���
}��a���H$�t�a�8�@<���P�����X�
�~jg���ӟ�;~=
ϒ=����R��͒y�Js��s�۩�I�1�;ԋ�)u=I=6�\�~R��?����
�����˻���?�m�(��r!��5��<jw�~��a�w�a��ĺ�`t۩�����8鏭s�S��+���/�9䭪~�����_�w_�|F
�N��
����߭^���ĘNb�9r����?O���QIӃ�+�]-�Bud�I�{=�^�����=j�_!��:���$6n�4�������j�$�(�I���Б����^'EK�������R�Y����ϡ���~)D�s���2iq�>��"r}@㷾��?�e2���Fw���7��9���fEs�8�
>���
\T��c��9����Ȩ�i%m{k�������5ew~��~��6�
����7�����_��BAxf��8
���k�<`^x:��mJ	��$�N=���l�^�3��B?�8��3�\���0{�
��>�6��O�[�����1ƴމ�v���w�n��}�k�Y�L}�D��8�Բ���C����WOe�M|+�1��ꖎ�~ӥ��Iʿ�?�5��@=@<����N8zt�
?^���tc��z���i��������o���a�ឣ���v����ԍg�Ā3r��r3��o���D�T6��i��z;�{��#�T���~�����!�
3��"�Ǧv�?A�ֺ�?�)��?�x�y
�XZު��A3B�2������&��
Z.���K�eRZ�=����4V�����2>�8ϧ^{�_0|��}�I�V�/-��=T��P�3�T�J�s=���̲N����,~_��5����Si�]ߟ�(������jPQE�(��{Y��
������(��v
��(
��(
��*�m6��㫼���/�QU)[o'���G箚�-@)������s��ktǯNG�N����E�㻳_��re��~hp�q�)��
���KZ����ke肊(����Ϸ��
(��QX���;kt�+��

(���]#��t�QE 
(��
(��������=�g��
(��#���N�Zm�ŷ�u2��f[V���tRC7��58����ƚ��+�#Wb�7��!���X�����y��ɰ�I��?Hnmm/a{k�hn���Hn"I�e�4R��q��g<ה�_���$��j9��<�|�ض�ռ�$X:���y�
u=t��S}���N�KmzԄ��i�k|�y�:������m���qd��a t@3��q霊�潽��O{w;�-���s#�A��׊��R��|;��kY�\�����F��� W#'����'�<E��z��
f���nE���:nx�aϴj0IϮ�/%o'�ޏ��]:�m��}�d���|lH9|�
������9���Ңn@t�'�?,�������
d��X�k��_���l��w�@�N����5w�.�V�˶�/'I"t�@
y��R��q���u��>�2p�k�oN�?��{|���q��y<G֢/��?���^�u�;�`�$
���������'9��
���{@L�����a���ԏ�y��ZF�RZ�����
�����]�-�W�
�m������
(C���1�'?^G<���޻���
-r.<�(��H��\u��8�>�����O@ؓ�> B?����^��=:�=���﮷���Ei�it�?+m����8�ǧ���{f�o��#����c��
�[�>&�i�J�
H�4����G�]R�l��s�L�7��Ej��e�ƌ��w�~Ҿ���Ě.�
?>�~?_���r
�֗��,/�'��kp���x�?�nk�	�xJ��9�2KF�e~�[�ӿC
�}�%�Z���[u�����u��
�7���<����x���-���;�(���M�m��AC~����k����yG�(yu���'��|'�$�7E�յ����)9Px�����2��#���^8
w�XJ?���M�`���ӡ5�4x���9��v�ˢ����:��)��f�'n�m������
��
��xro6��mbe�� ����u���8�pq�Vr~�?�V�vk��V1������H�ȱ�g��=k��?WV��g� �p1���.�?1�2�${~��k�_Q+{8��'̷�V���{�]��J��-��;�}��
?C�����K}�f�0>U�x� ��LPpO|��kZ��Y��o�%�����r�
/Ï��8�[O
dw$�ҿ�Y�m����
F'���C��@?�/�l/��Ւ��N�[�&�;켟�>�K I+G��:����}w���
t/�'���vD�?f���.���=	�R���s��:�~�~��J�������ߌ�|!���_|Uo�MR[�W� �����/��i�9��͞IQK��ڪ&�	.6��]�
��n�#�>�Th�;v��{��}�R:8�1OR�)��	N6�[��_Һ{����<iN3i�ӽ�}�׷M<�& �s�O�S��1�����6N@�큟\�O��T����/��:�c���~��#R���$�m��^_/_T����|�)_D��],1��H�rN1�#�����͜���?�O�?Z�����;�G����
�LǦ~����ǽ8֒����E����E�1v������
??�x|
0�22�8�q�q�J���N29���~?��'�c�錎�<���<#OL�����UGR.�rV�U����5�^�B/Wߣ����o��Ys���c|��8Ϯ�
*��~����t���Y۱<������xE1�
�2�
߶'�
�Τ[K�8���ϵ��p�O�Z�
hW�^�ke����}��^�����
��{-�����-3Ɵ��N�~�6��d����T����+O�Lr��C��#�~���SG��?&����[�?O�#V���#��ֹ&���zA'��3�>�/0�֬����[���
�t,%&�
��y_���6�i2�*��*���� `�cP �@���<�y$�Ǿk���ߏf����#rq���\�F:�Ƀ�:��o��y>
��<e� O8���ǿsY��Υ���-=������}{�k:���$���KN�km-��I=����M8'�\d������׮����8xB�	�_>��!���#���^��-�
f��nѬ���ZmV�*�ق3��
0Nk��F��ٿMzi��箪�W��˿���]��C#=?��
�������	fC�)#��0C_�����e?���Ͻ��88��y<��$��2kv��E����&�w��n'8��C�����9��NT����V_wM����o/5��s�;?��L*l�I����ǩ]*���� ���k���=|MҞ-�&��H�<���r2�fG�\g�������4ʝS�z��%l���S8�9��w��ϡh߳W��-����VD۸���e���<rH#8� ��Oou�4���U��
�[�F�U�?�K}�
3�~��:�����k�ofH�M��!�.m�2yQ�]�e����=ah���"�Z.���
iiR8RH�eT˂�5n�-G薖�ߦ�Z;~-ٳ�
I+��_+V�QEd���GN����)"�`Vx�U'dT�J�C�#<~ޥ��sI�k�_��zk���<#���tK��
|ɧ[nlz�"�999�H��|�U~X��1M��ǿ���I���U��Vj�mm�m.��ĸE�eoE���[��7_�7�k��V���3w���8Ϡ��8���'���Hs��x:��9g�Z�gu=���4V����'���}u��oI�T��_���u��%����9��v�nyȻ����?�:�w���
pI���-�h�Jp8<n�?~�s�px��h���-9�˥�B]
ONE�����������&
��ź���e�����@;��=��X���?P���q��� n��l�o~����Q8�
?���<SAc���'��_�=@�Vײ�z��t���zXOM�#���{r�������%���E���Ӂ���GN݄�i؎��ȓ�h��4�6|t��kP	�O�*~���Ш#?���
��G����z{z*��J�k�N����xH=�����}g���~_��:|\�I�
�e���j�s���3�n};s�Y|���|x��sd������q��z�@ǿ���i��8�}NH�<��~uK'�M��u�]�
Y��F�]SwV��}�}4?(e��b!���Y��ٜ�q������Γ����x�C|�E����L���� �G�}>��
,�4pI��������r쿫'��]�
$S��n�������[�@I���,@��G���ܟ䇌s�ӑT��^8�>g�<D��Ү���D�����'�#��lt��I�v�ϯ��~hX���%����������m��������&w�c�
Gc�_�}3�c�g����*�ú�g���2�A#��Ӟ1�EH@=@?P����=m�ۿݾ�����m�M��~/[��F����;���x���Jh��$�m2�s�m�#�A���~�F�dRPT�r*?���ȇ��c=������En��Wo����'���N�/'�
�]���A�
�}��#&�a�~�^���Ԍ�]v0J9��>�}
��_�f�ن�܏CD�ϱYs�;C���h��#������K�GԷ���_��������E�6��a�~�=�
>)�)���Q���n:�9Z��60�6${����ZY��ǜ�cj}=a��
<a�ZI^��K}���vw����N����/���
�?��生���F��������G����S���+M�
�C�nb�7�C�i<�
{N�=O�q?����m{��///_��o��Kid�^�w���jbv���t�����\��n����Lt��_��@�[�`�G?����1ӥ7��
�
�H��
�2��
��
_֟� ֗��������a%����>�v�
��ӆ�>\���v��H���j-�Ln;��J��>����c��2�������9дbx �
eXdc������)�\V�F�{����]���p�us�M�o?�7���D�9��
��)�?q���f�g?����
�o���
�p�4
04-g�J����
���O�c������o�T������������e0ɀD2���G��(X%'����܇��𧧦=��~�ah��a:b��Ӭ�ng�����
�]�+M�?����C�z��f��#k�~_���q�N[s[o[;m��������9q��l�G/�
QH��g?f��y2ds��du�f��������$g�
۶zb?~���J4�9FO�Q�͝���q4<lok?�M����ֻ�N�o����{�ݵ�z��g�5�_����
A)�8�OKK��X^�<�x�|�<�
���el�����/���=��/�h H">�P�zi��k�����O	�N�.��y��Qӵ&
.�|}6��zu�
�}?ϳ�E�d��N��K���5�$!�t��N"�g�߿���:"`�����O��^K��������o�����Z����8�~���M2�����4~�	�O�zm�oO�a��Nk��F0:灎��
��T�^ڷ���Z�=}:jTM��{v{��>��D�ß�.���W�\��*�\�09O~��Z��_�Ɏ#�7�Oo������ֿ[)9�rG'%�\�w�{�i<]��uo�=<��pxH�]��
%��ߗ^�k�B�>,J
O�c=7G
�3������ub�?$eσo��e�@I�s?�W���ӎ�N8��M��z��#��_qU��������
�v���R
�{꼗U�����ȇ�t��*��
�0���t��~�{ޜU����,9Pt�&"H>�n@�=vC'Ld���+���
��ӊ#�>��'����?J��K��i��~��
M�N��ӲV�O%������X���2���BU��9 �GfO˶x:V�
��\��
Y�ո��Ӟx<-������5�I=I?ZJ>�;�ݳ��[]7׶�55���������G�H�
I�f����'�Z,��8�[~�
�O�H9����=�in����~Т�b'%k�{;迕v��Z]��?����}v��v>L��L��]��+�f$� �������1�#�9�]�_�_��e|���`����r����
�ߧ�tT:�Kd����M��mW��R��h�۶���xM�����3E��a�Z�W�9Ǩ��=���������<����k����3]��O"�I�<�r8'�Ө�u_w�鶊�}?���p[E}˥�z#���Ӏ���<�>�8
�	� ��H�kubcU�G�^�~�
t�JZ*e>ھ��m
�[$�$���~���IE�m�0��)��?��
��)�~^}�����(�EPEPEPES_w��
��(o��/7��� *)9��<�
?�
_�S-C(��:���=�Ɯw������TnME `x��z���R�_{+�
���}U��W삊(�孮�u��W���O�(�we��{ߗ�����-���*7j�K�K.�]רQC�7}����ER
��)���
W��(���薫n�����_���(����u
��(
��(s�;d�@ǭ>�󤢟3����`�ԓ���Q�s�?��
�QE59-������V]��.N1��c���
�����c��z�E?i?�ae�vۧa�8�;���`�5?����gd����|�
~�&��Cׯn@�V��w}����k���(���7���?۲�o�1���Ud�������޹�l��
�5�EG��};}�w���X�_q��
���_hm���d{c�ңxBA�xW���o�O�"
z�ֺ*+E9=n�M�Y>��r\ ��9s���O�|<O��,O���0��g9�Nz�G���������^��Zߗ��h����Qȟ
���GÇ����b���
��O�l}4m<(?�>���)��}��
����t�����p�Tr_����
�C�_�%���
����~	S�������h�x���o]e)7���}�]?����#��ײK�9����𷇀�
�>��
�����
	���Ǉ���O���GEM[W���rC�W���Kש���ʌ/�4 ?�c�
�)��^+��G)��)�q�Br�tT:������i�!�ǲ�M��ѴtM+MO�lm��"튔i��,��R��g�������*]I���/�@�[$�4��H��a �Gm��?����;rO1�(��.�
��$�
��'�<{�R��8���QO�K�����?�c���֓�2q�(��M�ɽ�������(���������������1��~�QE+��qQ@Q@Q@Q@Q@P���
h�����D$�^���u�jT�n~�>}:~<.�}==?>=~���N����>��
�|��l����/�F;[]>��
�huQY>�J�'�׿oO�w��RQM6�����m���1�}=����{z��9��;���Q��
%�����o]�����F���{��^��Ͼ9��
��>�����ފ��/��O���m�k�?#���
^�H���ׯ �
<u�9�#�~�����ר��g>ݱ��}���T�y[vo������i;��VI�=5��{.��8�Ϸq�ϿҘ$��9���'�lv��(���Zkׯ���)���%����
�g���~��?��Z)駢���-祿��EPH��88?����}j.s�==��3t�~��=����Qm?^oN08��{��|���O�
�����~�:�Q�����}<?Ni
'��ǿ�{���
;�8�?���g�D�Wٿ5��z����n:�(��(����
�O�
(���O�~{�Q@��n� ��(QE�N޽}�(��Eg�m6}�u��c���EQ@Q@Q@QN���M/�7���րQE;t�˧����(��@QE
QE
QE
QE����
��(
��*�Nީ~_޿��n�QE/��/���`
(��
(��
(��
�LO�O���ӹ��-1�0玃?R?OÎ�㿮����㿠�s�;t?L�?�J���-�����Ǯ;tϭMV�j6��@�]�o����QEJVz�?5���?.�QEn[|����]o���.���*�;���W�
װQE&�������]
QE�(��vۯ��(�/t�];�
u�j�[�
Z�ER��������� 
(�������EPESI���m��R��
��;u��KE���o??�[ER
��)�ߥ����(��@QEU��tK��۽���*@(���o��aES����[��QE��]�~I?�ۀQE����QE=��~K����(��O��EPEPEPEPEPEPEPEPEPEPEPEPEPEPEPEPEPEPEPׯ��>�⛷�x�Ǿx�ӮI��覛[_ט?����M-R
��(
��(
��(
��(
��(
��(
��(
��(
��(
��(
��(
��(
��(
��)���~���t��
(��n�����

(��Q@Q@QG��k������)�ׯ��~k��(������ww�Kw�@(����(��(����
8��:��nx�3�����M+���
�����_��'�9����+e��@�^�(����-U��?ӧ�(��j�M:�vI�vߺ�
(��of�e����;��(����k;Y.����_.���QEHQN�
־^~_֖�(�=W��?�}�QE\��_��g{�_Ӿ���(����}�Ͽ��@QE�(��������M�������(��O���~]���
��*��y�
�]�@QE�(���O/??�[ER
��(
��(
��(
��(
��)�o?N�����EQ����|�]}>���(����-?

(��
(��
(��
(��V����@(��@QE
QE
QE
QEV�_�o�������
(���(��(��(��(��(��(��(��(��(��(�J��������ET�QE
QE
QE
QE���/7�}�
(���������QH�(��(��(��(��(��(��(��(��
���EPEPES����;�t�
��QC�O/�~������(oK[/7��Ӳ�(�o���QM��7�W�]_�
��*@(��?���(��|���@*>���s���
����I�8>�����zUCw���=]����H3����ӏOƖ�W���t�������+�ڿ���EU�k=������
-W��(�wѾ��»��k��QE-Z���u���@QEI[��K����
��)[T���
��+^U��wk���
��+)od�}��(�t쟒�[y�;�
V�(��}mo��.�ծ���*�_��ES]>]�����[@(��OM=?%�ˠQB�z�QEM�מ�;y��_^�QE�]w����QE'���Y[���<���)
QE�
�[�
^@QE5�^V{��M��m
��(n�_�;���|���)��l���/���+�(����
����� (��@QE
QEU���������
QERKE��
�v���]��EV`QE
QE4�ׯ�)�� 
(���_�����
(��Q@Q@Q@Q@Q@Q@Q@Q@QB�_���
(��w������`
(���
_u��hER
��(
��(
��(
��(
��(
��(
��(
��(
��(
��(
��(
��(
��(
��(
��(
��(
��)��MPQU%kzo�e��KE�ET
QE
QE�
��������)�v��Eo?_��
(��ZY|�Ӧ��
��.���*�i;���~��N��f�*'����ӷ�
����QH;��ǯ��1�?��+I.�J�
%�oϧ�2v���/U��m��8Ǿ;{t��x���Ti�p9>��F1ۯ~y��[k���QEL�k����u���ET-�ˮ�����KhQW.��������p
(���_����_.�QEW�����|�g�N׸QR�^��@QEnEVww����
��)
QE�v�?���(��K�����U��
��(����[[�
�� (�������
QE�(��
(��w���m�+]
��)
QE
QE
QE���K����@QE�(���n�}?y�;��
(��־^o���@QE֭_��Ky�>�v�(��M%ѫ��<��ym�QE'�Ϸ_%����QERj�{��G�m���(�n��
���QH�(����4�����
ÀQE;���^o���QE 
(��
(��
(��
(��
(��
(��
(������(�}<������ER
��(
��(
��(
��(
��(
��(
��(
��(
��*���-�=4�����`(���
(�����u_��QM-W˷����
�k`(����ߒ�}�
�M���)v���v���O�ESj�������K���
(���(��(��(��(�W*K]m��������(��N�����]m_ (���
(��
(��
(��2�]��������
(���{Y����ͯ��
(��5���
��g�J��S[���S�������������ߚ����)+��z��
"!�Ï�����g񩩊;��������֟B~����{�_���ke�
QEhER��彗G��QJZ����|ח���ET5k+��忽��쮀��(}<��
�t���
4QS��m�w����QM�����z����
(���(��
������
��([�U�
QEs{Y�����է��ET-���ӭ�
�>@QE��t��|�+�.��
QEd�
����
]�
��(
��(
��(
��)߷�ky���@QEo�
躿��
QEJ�M�߇/��k��ERi+uz}�^~�~V`QEHQ@QZ�d��w��E�u��
QE���
+�/;�]@(������W�w]zk�QP��?`
(��k��;
QE;tw�~K��
��lER
��*�VIv�#����-.ET�QE
QE��
�+�
��)
QE����(��Mk�ͥ�K��ߦ�X
(�����w��� (��@QE��/���`
(��
(��
(��
(��
(��
(��
(��
(��
(��
(��wK����� (��@QE��EU'���Ouw]����(�'��-�����o�}�QEJ���
�
��)�7�ߧnϺ���QEHQ@Q@Q@Q@Q@Q@QN�
�W����
e`(��.���y�?�`(��@QE?�e�y�
V_ (��@�<}NG'�ǯ�;Ӫ=1������u��UE]���������5B��8�q�s��鎤�sޥ��>�Ƕ?���5b��J>��,���o���z ��*�QE
QEK�k]��.�i��{٠
(��u����
���
7�].QCvK^���w��QQ-����>�m�߰QEK����t��QH�(��(��(����u��lQN;�U��i���EV�QEa-[�u�N��QH�(���mv�
�U�{�]������)Z�_����u��QC��t^o��QE>����
%��ߧ��
(��o�o������
QE?��@QE 
(�����u_��QM�k�d��e�m�
��*@(��
(��
(��
(��7
��)���_�_ϳ
��)
QE
QE
QE
QE
QE
QE
QE
QE
QE
QE��
�-�|�
QE�(��
(��
(��
(��
(��
(��
(��
(��
(��ku��_U�EUI��w�~^������QE+u�EP����l�/�QE 
(��
(��
(��
(��
(��
(��W��ן���
(��Q@Q@Q@Q@Q@QM�
_r��܀�_�C�A�;>s�&��wǮOӯ�������
�&Mm�5�����#Q��=	�^GQלU��W��q��z��9
��%T��}���zZ�]���ӭ�
��E���Mi�AE8��7���]�
m
QE&����n�.�;ߠQI�;&��+���n���
QE���
?.�
��(qM�_��}�t��(���E���K^������p�8��қC���I�h�-~`QEf�oӲ��܀��(�ݗ��6EV�+O/U���
QE-+�?;z5�ӷG�$QVEV2��ݮ����(���~�QEi�zY_�Ӱ����Z5붠QEd익���>k����(��勵.T֒�
���(���?��>k��QZr�o����w}��QEK�饽/������(��d��}��5m�>��QE�W��|�g��$�(��9W��������(�����m������)r�>�=?+���`(��9_�N��궿�����*�������w�@
(��������ie����
QE.7j�m�V���~�-@(��|���_�/[���^��(�k�Zu�=ߛ�˶�QE QE;W^^~k��QB��o��_����(�EU[�On���ϥ��(�m���������QE�Zv��m��\�(��ݿ�m��u��
QE4����+���
��(��yy�
_z@QE%v��o/?]��QE7�yyy�往QE�]���m5媷`
(���}����QEۦߒ�w���EP���m�����(������W�۰QE7y'�
�ﭷ���QE-���W�WW�
��(�mm�ۭ���
��QE4����{i��}�Ⱥ��MQI�m��w�_��EU$����o>�����QEJ)[��}����
QE
QE;m�o���ESI.��~q}�w}րQE��|�����
��QEG-��u��Yo��ˠQT�6��ߢ�QJQ����~���`(��ϯ����
_[
QE����z��Ϧ�t�QM����e�n���t�(V�;�n�����
KM
��C�x�
?��S���
?��چ��mooӭ�
'�}�2Zzm��u�-��x?��y��������^��B�q��o�_��肊(�S�^K��R��}:i�����:�<�{R`���~t�S�Zo�zy�
���}>_��>�QK�Ue�����?=��|����[�QEs]��_�����k�-�M?��oP�����(�RO�}���V�i�ky_�w�n/0s����׀�'�q����s�}���
���r2s-7��G������5���^�w�w����z�ʒ�*y��_��
���]�ռ����<68���>���t�QE�[-����׷K��g�i���_��QR�v�kV��\.�[���g��
ցEUs��>����
��'��QE{E�����=���
0��)s�����z+����
?��(��Nmۥ�__]HnWۿG������(r��~k�����c���?�
(��w�����.���������(������
N�����[��(���>��������o�����ܢ�*m��K溷O����寓
(���o/_���yv���L(��?������
1H�);n�.�-QZ)������þ��%k���4��{��(��|��
�������������
0��)s�~��<���)_��W����(� ����zJ�
�|���z��֗��
l�
�(�λ??-�/�p���
��
(��2}�z����K�k�~(��|�����=n�k��{u����
=�RQE'8���Z�_�o>���eQP�~��i�����H���
�
(��3��˯F�_�����-4�>���N��(��zi�����
Zw�斞�]t{i�뾟�QEs�Zzy�
OJ���?FQE'6�/�v}u�y�����Y�\��*y������m=���[y����Q�z�O��eӾ��v�!��nϧ�����QJ�
����_�By�ҷ�������z�QEޞ_���+^ߗ���? ��*��[v�<�m�O�m���n����
(�������/oA����zy�?�jQE<���t�������aESs]��{y��tQE���
��}�U�_@(��Mߢ�|���&�E������(��-�Zy7����Kz1x�9��]���QW������~��
��)s�~��;�øQP��
����	�O]5��w(��.�
��y��K�������(��6�/�gӪ~V~V�/��
����(�I���y�ZZy������y�"�(������ ���OKv����(��;������
OK�~_��[��QI�>����W���;���QEM���~����]6�����nߛ�QE���]��i�M?N�N��ۅQ��E����
$Ml��_�g��i�(�����
>��-7&��Wnޟ��S�o�?/?5����(�};w�����&��^J����i�(��/��v����o�AJ]��~^��QEM�������|���hջ'��QE��[/�v�Ͻ�
��U�zwk��aES��m��߯�m���o/?^��QO�.������\�K���?����-`���:�
<��0}��QO�k�����߯�J����߮�|��QEC��֖���O��|�//?��t�EP���[t�Zk�ۢ�]���OM�7��ob�(����u������蜥�?��v��b�(����}-n���ƛv�ﮟ���o�R��t��S��g�?���)
��t�<�����N*�~[|�v�W�m�}�m��
W]|���
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
      "name": "গণিত ভালোবাসি",
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
      "name": "গণিত ভালোবাসি",
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
      "name": "গণিত ভালোবাসি",
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
      "name": "গণিত ভালোবাসি",
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
  // 🔹 Email-password sign-up
  const signupUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // ✅ Login with Email & Password
  const signinUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // 🔹 Update Firebase User Profile (displayName & photoURL)
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
DeshGuide follows a night-themed, glow-pulse infused, and developer-optimized design philosophy. The UI is built to feel futuristic, animated, and intuitively navigable, using technologies like Tailwind CSS + DaisyUI, Framer Motion, AOS (Animate on Scroll), and custom glow effects. The experience aims to balance aesthetic polish with practical UX — ensuring information is accessible, layouts are responsive, and all interactions feel alive with smooth transitions and hover feedback. The project uses React + TanStack Query with a fully modular architecture, and prioritizes privacy-respecting, CLI-first workflows (Neovim, Tmux, Hyprland). Pages and components are structured for scalability, reusability, and clean separation of concerns, while the UI conveys a confident, hacker-style vibe inspired by modern terminal UIs, blending tech appeal with user clarity. Every visual element has intention: from pulse-hover buttons to blurred glowing cards — nothing feels static or dull.
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
    title: "🌍 Discover Handpicked Tours",
    description:
      "Explore curated travel packages tailored to your mood, region, and vibe — from serene nature escapes to cultural deep-dives.",
  },
  {
    title: "🧭 Book With Confidence",
    description:
      "Securely book verified guides and trusted trips with real-time availability and transparent pricing — no surprises.",
  },
  {
    title: "✨ Tell Your Travel Stories",
    description:
      "Share magical memories and photos from your journeys. Inspire others while keeping your travel timeline alive.",
  },
  {
    title: "🧑‍✈️ Join as a Tour Guide",
    description:
      "Turn your passion into profession. Apply as a tour guide, manage bookings, and get discovered by global travelers.",
  },
  {
    title: "🚀 Real-Time Tour Management",
    description:
      "Track all your bookings, tours, and earnings in one sleek dashboard built for speed and clarity.",
  },
  {
    title: "📅 Instant Booking Updates",
    description:
      "Get notified when someone books, cancels, or reviews a trip — stay one step ahead of your itinerary.",
  },
  {
    title: "🔍 Search Local Experiences",
    description:
      "Dive into authentic experiences hosted by locals — from hidden gems to trending hotspots, all within a click.",
  },
  {
    title: "💡 Glow Mode Interface",
    description:
      "Experience a dark, immersive UI with glowing animations and pulse effects designed for late-night explorers.",
  },
  {
    title: "🤝 Connect With Fellow Travelers",
    description:
      "Find companions, plan group trips, or just exchange tips with passionate globetrotters like you.",
  },
  {
    title: "🎖️ Verified Reviews & Stories",
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
      // ✅ Directly update Firebase user profile
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
          travel experiences — all in one platform.
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
            <label className="label">Price (৳)</label>
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
                  ✕
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={() => append({ day: fields.length + 1, activities: "" })}
            className="btn btn-outline btn-accent mt-2 hover:shadow-[0_0_10px_#38bdf8] hover:scale-105 transition-all"
          >
            ➕ Add Day
          </button>
        </div>

        {/* Submit */}
        <div className="text-center mt-6">
          <button
            type="submit"
            className="btn btn-primary px-10 text-lg tracking-wide transition hover:scale-105 hover:shadow-[0_0_15px_#3b82f6] duration-300 rounded-full"
          >
            🚀 Add Package
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
        📦 All Bookings
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
          <span className="font-medium">Price:</span> ৳{packageId?.price}
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
          <span className="font-medium">Price Paid:</span> ৳{price}
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
          {status === "accepted" ? "✅ Accepted" : "✅ Accept"}
        </button>

        <button
          disabled={isDisabled}
          onClick={() => rejectMutation.mutate(candidate._id)}
          className={`btn btn-sm glow-effect transition ${
            status === "rejected" ? "btn-error" : "btn-outline btn-error"
          }`}
        >
          {status === "rejected" ? "❌ Rejected" : "❌ Reject"}
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
        👋 Welcome back,{" "}
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
          <p className="text-lg text-cyan-300 font-medium">📧 {email}</p>
          <p className="text-md text-gray-300">
            🔐 Role: <span className="font-semibold text-cyan-400">{role}</span>
          </p>
          <p className="text-md text-gray-400">
            🕓 Account Created:{" "}
            <span className="text-green-400">
              {dayjs(createdAt).format("MMM D, YYYY")} (
              {dayjs(createdAt).fromNow()})
            </span>
          </p>
          <p className="text-md text-gray-400">
            🕘 Last Logged In:{" "}
            <span className="text-yellow-300">
              {dayjs(last_loggedIn).format("MMM D, YYYY h:mm A")} (
              {dayjs(last_loggedIn).fromNow()})
            </span>
          </p>
          <p className="text-md text-gray-400">
            👥 Profile Completeness:{" "}
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
          ✏️ Update Profile
        </button>

        {role === "tourist" && (
          <Link
            to="/dashboard/tourist/join-tour-guide"
            className="btn btn-outline btn-block md:btn-wide border-emerald-500 text-emerald-300 hover:bg-emerald-600 hover:text-white pulse-glow"
          >
            ✨ Join as Tour Guide
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
          ✏️ Edit
        </button>
        <button
          onClick={() => handleDelete(story._id)}
          className="text-xs text-red-400 hover:text-red-300"
        >
          🗑 Delete
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
        📝 Manage Your Stories
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
  // 🧠 Keep track of which booking to update
  const [bookingIdToUpdate, setBookingIdToUpdate] = useState(null);
  const [statusToUpdate, setStatusToUpdate] = useState(null);

  // ✅ Always keep hook at top level
  const {
    mutateAsync: patchBooking,
    isPending,
    isSuccess,
    isError,
    error: patchError,
  } = useSecureUpdate(
    bookingIdToUpdate ? `/bookings/${bookingIdToUpdate}` : "/bookings/empty",
  );

  // ✅ Watch for update trigger
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

  // ✅ Called from card/button
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
          <span className="text-purple-300 font-medium">📦 Package:</span>{" "}
          {packageName}
        </p>
        <p>
          <span className="text-purple-300 font-medium">💰 Price:</span> ৳
          {price}
        </p>
        <p>
          <span className="text-purple-300 font-medium">📅 Tour Date:</span>{" "}
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

## 📌 Task

You are given a real-world code module located at:

```
/run/media/sj/developer/web/L1B11/12mi/ass/DeshGuide/DeshGuide-client/src/modules/Dashbaord/TourGuides/AssignedTour
```

Refactor the entire codebase **without modifying any UI or changing behavior**. Instead, improve it using:

- ✅ Clear separation of concerns
- ✅ Consistent, semantic naming conventions
- ✅ Modular architecture (hooks, services, utils, components)
- ✅ Scalable file/folder structure
- ✅ Industry-standard project layout and architecture
- ✅ Readable, testable, production-grade code
- ✅ 100% behavior and API compatibility

👉 Output the refactored code to a new folder: `AssignedTour_refactored`

Also return a `.sh` script that will:

- Create that folder
- Write all refactored files
- Run `git add` and `git commit` with message: `refactor: added improved AssignedTour version`

---

## 🌲 Full Project Structure (cwd)

```bash
/run/media/sj/developer/web/L1B11/12mi/ass/DeshGuide/DeshGuide-client
├── bun.lock
├── eslint.config.js
├── index.html
├── package.json
├── public
│   └── CNAME
├── README.md
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
│   │   ├── note.md
│   │   └── prompt.md
│   ├── firebase
│   │   └── firebase.init.js
│   ├── hooks
│   │   ├── useAuth.jsx
│   │   ├── useAxiosSecure.jsx
│   │   ├── useFetchData.js
│   │   ├── useHelmet.jsx
│   │   ├── usePostData.jsx
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
│   │   │   ├── DashboardLayout.jsx
│   │   │   ├── ManageProfile
│   │   │   │   └── ManageProfile.jsx
│   │   │   ├── ManageStories
│   │   │   │   ├── components
│   │   │   │   │   ├── EditStoryModal.jsx
│   │   │   │   │   └── StoryCard.jsx
│   │   │   │   └── ManageStories.jsx
│   │   │   ├── TourGuides
│   │   │   │   ├── AssignedTour
│   │   │   │   │   ├── AssignedTourCard.jsx
│   │   │   │   │   └── AssignedTour.jsx
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
│   │   │   └── PackageDetails
│   │   │       └── PackageDetails.jsx
│   │   └── shared
│   │       ├── Layout
│   │       │   ├── CommonFooter.jsx
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
│   │           └── Input.jsx
│   ├── pages
│   │   ├── Community
│   │   │   ├── CommunityPage.jsx
│   │   │   └── components
│   │   └── faq
│   │       ├── faq.constant.js
│   │       └── FAQ.jsx
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

51 directories, 110 files
```

## 📁 Target Module Tree (AssignedTour)

```bash
/run/media/sj/developer/web/L1B11/12mi/ass/DeshGuide/DeshGuide-client/src/modules/Dashbaord/TourGuides/AssignedTour
├── AssignedTourCard.jsx
└── AssignedTour.jsx

1 directory, 2 files
```

## 📄 Module Files & Contents

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
          <span className="text-fuchsia-400 font-semibold">Price:</span> ৳
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
                🕓 Last Login: {new Date(last_loggedIn).toLocaleString()}
              </p>
              <p className="text-sm mt-1">
                📅 Joined: {new Date(createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>

          <div className="divider my-6"></div>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-white">🪪 Title:</h3>
              <p className="text-gray-300">{title}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">
                🧭 Why a Tour Guide?
              </h3>
              <p className="text-gray-300">{reason}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">
                📎 CV / Resume:
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
          🧭 Explore All Our Tour Guides
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
        📚 My Bookings
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
          journeys. Submit your profile below — passion and authenticity matter
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
            // ✅ Show SweetAlert with transaction ID
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
            // ✅ Redirect to /myParcels
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

## 📌 Task

You are given a real-world code module located at:

```
/run/media/sj/developer/web/L1B11/12mi/ass/DeshGuide/DeshGuide-client/src/modules/Dashbaord/Tourist/PaymentBooking
```

Refactor the entire codebase **without modifying any UI or changing behavior**. Instead, improve it using:

- ✅ Clear separation of concerns
- ✅ Consistent, semantic naming conventions
- ✅ Modular architecture (hooks, services, utils, components)
- ✅ Scalable file/folder structure
- ✅ Industry-standard project layout and architecture
- ✅ Readable, testable, production-grade code
- ✅ 100% behavior and API compatibility

👉 Output the refactored code to a new folder: `PaymentBooking_refactored`

Also return a `.sh` script that will:
- Create that folder
- Write all refactored files
- Run `git add` and `git commit` with message: `refactor: added improved PaymentBooking version`

---

## 🌲 Full Project Structure (cwd)

```bash
/run/media/sj/developer/web/L1B11/12mi/ass/DeshGuide/DeshGuide-client
├── bun.lock
├── eslint.config.js
├── index.html
├── note.md
├── package.json
├── public
│   └── CNAME
├── README.md
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
│   ├── firebase
│   │   └── firebase.init.js
│   ├── hooks
│   │   ├── useAuth.jsx
│   │   ├── useAxiosSecure.jsx
│   │   ├── useFetchData.js
│   │   ├── useHelmet.jsx
│   │   ├── usePostData.jsx
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
│   │   │   ├── DashboardLayout.jsx
│   │   │   ├── TourGuides
│   │   │   │   ├── GuideProfile
│   │   │   │   │   └── GuideProfile.jsx
│   │   │   │   └── TourGuides.jsx
│   │   │   └── Tourist
│   │   │       ├── Bookings
│   │   │       │   ├── BookingCard.jsx
│   │   │       │   └── MyBookings.jsx
│   │   │       └── PaymentBooking
│   │   │           ├── PaymentBooking.jsx
│   │   │           └── PaymentForm.jsx
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
│   │   │   └── PackageDetails
│   │   │       └── PackageDetails.jsx
│   │   └── shared
│   │       ├── Layout
│   │       │   ├── CommonFooter.jsx
│   │       │   ├── index.js
│   │       │   ├── navbarDrawer
│   │       │   │   ├── Navdrawer.jsx
│   │       │   │   └── NavdrawerStart.jsx
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
│   │           └── Input.jsx
│   ├── pages
│   │   └── faq
│   │       ├── faq.constant.js
│   │       └── FAQ.jsx
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

43 directories, 99 files
```

## 📁 Target Module Tree (PaymentBooking)

```bash
/run/media/sj/developer/web/L1B11/12mi/ass/DeshGuide/DeshGuide-client/src/modules/Dashbaord/Tourist/PaymentBooking
├── PaymentBooking.jsx
└── PaymentForm.jsx

1 directory, 2 files
```

## 📄 Module Files & Contents

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
            // ✅ Show SweetAlert with transaction ID
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
            // ✅ Redirect to /myParcels
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
            guides, and unforgettable memories — all in one place.
          </p>
          <div className="flex flex-wrap justify-center gap-4 *:rounded-full *:hover:scale-104 *:hover:shadow-2xl">
            <button className="btn bg-gradient-to-r from-[#22d3ee] to-[#a78bfa] border-0 text-white shadow-lg hover:opacity-90 transition-all duration-200 text-lg px-6">
              🌏 Explore Now
            </button>
            <button className="btn btn-outline text-white border-white hover:bg-white hover:text-black transition-all duration-200 text-lg px-6">
              📝 Share Your Story
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
            DeshGuide • Explore • Discover • Travel •
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
          ✈️ Discover hidden gems, connect with trusted guides, and create
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
            🌍 Start Your Journey
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
        🚀 How DeshGuide Works
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
            📬 Get insider deals and travel hacks!
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
    description: "Book and pay seamlessly using Stripe — fast and reliable.",
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
          storytellers—crafted for seamless discovery, booking, and sharing.
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
        🌌 Traveler Stories
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
          🤝 Partner With Us
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
          🌟 Meet Our Verified Tour Guides
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
        💬 What Our Users Say
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
    name: "🌊 Saint Martin",
    image:
      "https://images.deepai.org/art-image/6d1242776af24b29989fcb1f05e2a9f7/colorful-paddle-boat-floating-on-small-forest-lake-in.jpg",
    description:
      "A serene island in the Bay of Bengal, famous for crystal clear water, coral reefs, and calm vibes.",
  },
  {
    name: "🏞️ Sajek Valley",
    image:
      "https://images.deepai.org/art-image/3be7075b97b143d19ca910a9c7621cac/aerial-view-of-saint-martins-turquoise-coast-with-cor.jpg",
    description:
      "A dreamy mountain valley in Rangamati with endless green, cloud-kissed mornings, and cottage.",
  },
  {
    name: "🏖️ Cox’s Bazar",
    image:
      "https://images.deepai.org/art-image/72bca9114b0941e89cdb0ea0a22f5553/cox-s-bazar-sea-beach-during-sunset-with-silhouettes-.jpg",
    description:
      "Home to the world’s longest sea beach, perfect for beach lovers, surfers, and seafood enthusiasts.",
  },
  {
    name: "🌲 Bandarban",
    image:
      "https://images.deepai.org/art-image/b34dc26354ae436595ba69b3a982f9c5/a-river-and-forest-scenic-beauty-with-the-sunset-thum.jpg",
    description:
      "Adventure-packed hills, waterfalls, tribal villages, and peaceful trekking through nature’s best.",
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
          🔥 Trending Destinations
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
                  🚀 Hot Spot
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
        🌟 Why Choose DeshGuide?
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
          <h3 className="text-2xl font-semibold mb-4">🗓️ Tour Plan</h3>
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
          📝 Book This Tour
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
              Price (৳)
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
            🚀 Book Now
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
          ৳ {pkg.price.toLocaleString()}
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
            ☰ Menu
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
// ✅ Role-based sidebar links
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
        👋 Assalamu Alaikum, I'm Md. Shahjalal
      </h2>
      <p className="text-lg text-gray-400 max-w-3xl text-center mt-2">
        Experienced <span className="text-lime-400 font-medium">MERN Stack Developer</span> focused on building scalable,
        maintainable, and high-performance web apps using clean architecture and modern best practices.
      </p>
      <div className="mt-4 text-sm text-gray-400">
        Hyprland • Neovim • Zsh • Tmux • Terminal-first Linux workflow
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
    <h2 className="text-3xl font-semibold pulse-glow">🎨 Design Philosophy</h2>
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
      responsive, and expressive UI — ensuring performance and aesthetics work hand in hand.
    </p>
    <p className="text-gray-400">
      From blurred glowing cards to smooth hover feedbacks — nothing feels static or dull.
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
      &copy; {new Date().getFullYear()} DeshGuide by Md. Shahjalal — Built
      with 💻 MERN, ⚙️ Neovim, ✨ Framer Motion
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
      🚀 Live Projects
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
              🔗 Live
            </a>
            <a
              href={repo}
              target="_blank"
              rel="noreferrer"
              className="text-purple-400 hover:underline"
            >
              🛠 Code
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
  { label: "📧 Email", value: "muhommodshahjalal@gmail.com" },
  { label: "📱 Phone", value: "01540325659" },
  {
    label: "💼 LinkedIn",
    value: "linkedin.com/in/shahjalal-mern/",
    link: "https://www.linkedin.com/in/shahjalal-mern/",
  },
  {
    label: "🐙 GitHub",
    value: "github.com/shahjalal-labs",
    link: "https://github.com/shahjalal-labs",
  },
];

export const liveProjects = [
  {
    title: "🌐 shahjalal-portfolio-v2",
    desc: "Modern animated portfolio showcasing skills, workflow, and aesthetics.",
    link: "http://shahjalal-mern.surge.sh",
    repo: "https://github.com/shahjalal-labs/shahjalal-portfolio-v2",
  },
  {
    title: "🍲 FlavorBook",
    desc: "Recipe sharing, chef marketplace, and food blog — all in one.",
    link: "https://flavor-book.surge.sh",
    repo: "https://github.com/shahjalal-labs/flavor-book-client",
  },
  {
    title: "🎓 EduVerse",
    desc: "Group assignment & peer evaluation platform for students and teachers.",
    link: "https://edu-verse.surge.sh",
    repo: "https://github.com/shahjalal-labs/eduverse-client",
  },
  {
    title: "📦 WorkElevate",
    desc: "Smart job portal for BD — fast, sleek, and employer-focused.",
    link: "https://workelevate.surge.sh",
    repo: "https://github.com/shahjalal-labs/WorkElebate/tree/main/client-WorkElebate",
  },
  {
    title: "🧭 Gontobbo (Ongoing)",
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
            "💡 Frequently Asked Questions",
            "🤔 What Tourists Often Ask",
            "📌 Your Curiosity, Answered",
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
                ▾
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
            🚨 Oops! Something Went Wrong
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
              🏠 Go Home
            </button>
            <button
              onClick={() => navigate(-1)}
              className="flex-1 btn rounded-full bg-gradient-to-r from-gray-600 to-gray-800 text-white font-semibold shadow-inner hover:from-gray-500 hover:to-gray-700 transition-all duration-300"
            >
              🔙 Go Back
            </button>
          </div>

          <p className="pt-4 text-sm text-gray-400">
            This page doesn’t exist or the server is having a moment.
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
        cursorStyle="✍️ "
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
