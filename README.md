# 🚖 Get A Yatri – Cab Booking App (Next.js + Redux + Mapbox)

A modern cab booking web app built with **Next.js 13+, Redux Toolkit, and Mapbox APIs**.  
This project provides users with a smooth booking flow: selecting pickup & drop locations with autocomplete, choosing a ride, and completing the booking.

---
Loom Link -  https://www.loom.com/share/d02d0e0e7dde498dbec4942c6a01c5b0


github link - https://github.com/lakshrajkumar26/Frontend-yatriCabs
## ✨ Features

- 🌍 **Mapbox Autocomplete** for pickup & drop location search  
- 🗺️ **Map integration** to display source → destination route  
- ⚡ **Redux Toolkit state management** for storing coordinates & addresses  
- 🚘 **Ride selection** (cars with dynamic pricing)  
- 💳 **Payment methods UI** (Visa, MasterCard, GPay, ApplePay, Cash)  
- 📱 **Responsive design** for mobile and desktop  
- 🔄 **Data persistence** → User inputs carry over between pages  

---

## 🛠️ Tech Stack

- **Frontend:** Next.js 13+, React 18, TypeScript  
- **State Management:** Redux Toolkit  
- **Styling:** CSS Modules  
- **Map & Autocomplete:** Mapbox Search API + Mapbox GL  
- **Icons & Images:** Next.js Image Optimization  

---

## 📂 Project Structure

/src
├── app
│ ├── booking/BookingPage.tsx # Main booking page
│ ├── Map/Map.tsx # Map rendering with Mapbox
│ ├── Map/DistanceTime.tsx # Distance & time display
│ ├── Cars/Cars.tsx # Car selection component
│ └── Form/Form.tsx # Landing page search form
│
├── redux
│ ├── store.ts # Redux store setup
│ ├── SourceCoordinatesSlice.ts # Pickup coordinates state
│ └── DestinationCoordinates.ts # Drop coordinates state
│
└── public # Static assets (cars, payment icons)

yaml
Copy code

---

## ⚙️ Setup & Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/get-a-yatri.git
   cd get-a-yatri
Install dependencies

bash
Copy code
npm install
# or
yarn install
Setup environment variables

Create a .env.local file in the root:

env
Copy code
NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=your_mapbox_access_token_here
👉 Get your Mapbox token from Mapbox Account.

Run the development server

bash
Copy code
npm run dev
Open 👉 http://localhost:3000

🚀 Usage Flow
Landing Page Form

Enter "From" & "To" locations

Autocomplete powered by Mapbox

Selected addresses are stored in Redux

Booking Page

Pre-filled inputs (values from Redux)

Map displays the route

Choose a ride & payment method

Book button enabled only when all required data is set

Payment Page

Redirect after booking

Future scope: integrate Stripe, Razorpay, or PayPal

📱 Responsiveness
Mobile-first UI with adaptive layout

Collapsible panels for smaller screens

Optimized suggestions dropdown for usability

🔮 Future Improvements
✅ Real-time fare calculation based on distance & time

✅ Authentication & user profiles

✅ Booking history with MongoDB (MERN integration)

✅ Live driver tracking (Socket.IO)

🤝 Contributing
Pull requests are welcome! Please open an issue for any major changes.
Make sure to update tests as appropriate.

