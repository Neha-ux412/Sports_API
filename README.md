# ⚽ Upcoming Soccer Matches Web App(2024-25)

This is a simple web application that displays a list of upcoming 2024–25 Soccer matches using data fetched from a freely available API. The project consists of a basic frontend and an optional backend built using Node.js.
Output image: (https://github.com/user-attachments/assets/488b79b4-f00d-4b83-aa5a-8955ae22b7f7)
--------------------------------------------------------------
# project Structure
Football_matches(root directory)
├── backend/
│ ├── server.js
│ ├── package.json
│ └── package-lock.json
├── frontend/
│ ├── index.html
│ └── styles.css
--------------------------------------------------------------
## 🚀 Tech Stack

- **Frontend**: HTML5, CSS3
- **Backend**: Node.js (with Express)
--------------------------------------------------------------
## 🔗 API Used

Data Source: https://raw.githubusercontent.com/openfootball/football.json/master/2024-25/en.1.json
[OpenFootball 2024-25 English Premier League Matches JSON]

--------------------------------------------------------------
## 🛠️ Features

- Displays upcoming matches for the 2024–25 soccer season.
- Each card shows:
  - Team 1 vs Team 2
  - Scheduled date
- Clean and modern UI
- Optional backend handles API fetching
--------------------------------------------------------------
🧩 Setup Instructions

1. **Clone the repository**

   git clone <your-repo-url>
   cd Football_matches
2. **Install backend dependencies**

   cd backend
   npm install
3. **Run the backend server**
   node server.js
   you will find the server running at localhost:3000
--------------------------------------------------------------
📌 Notes
Make sure the backend is running before you open the frontend.

The frontend fetches match data through the backend endpoint served by server.js
