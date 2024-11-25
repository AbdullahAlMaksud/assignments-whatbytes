# Skill Test Dashboard

This project is a **Skill Test Dashboard**, developed as part of a job assignment for **WhatBytes**. The dashboard displays an analysis of user performance in a skill test using a pie chart to visualize the user's score.

---

## 🚀 Features

- **Responsive Design**: Ensures an optimal viewing experience across all devices.
- **Dynamic Pie Chart**: Visual representation of the user's test score with color-coded sections.
- **User Feedback**: Provides actionable insights for improvement based on the score.
- **Tooltip Support**: Hovering over the pie chart reveals detailed score information.

---

## 🛠️ Technologies Used

- **React**: For building the user interface.
- **Recharts**: For rendering the pie chart.
- **Tailwind CSS**: For styling and responsive design.
- **ShadCN**: For prebuilt component.

---

## 📂 Project Structure

public/<br/>
├── bullseye.svg<br/>
├── cup.svg<br/>
├── file.svg<br/>
├── globe.svg<br/>
├── html5.svg<br/>
├── next.svg<br/>
├── note.svg<br/>
├── tick.svg<br/>
├── vercel.svg<br/>
├── window.svg<br/>
<br/>
src/<br/>
├── app/<br/>
│   ├── dashboard/<br/>
│   ├── fonts/<br/>
│   ├── internship/<br/>
│   ├── globals.css<br/>
│   ├── icon.svg<br/>
│   ├── layout.js<br/>
│   ├── page.js<br/>
├── components/<br/>
│   ├── dashboard/<br/>
│   │   ├── Dashboard.jsx<br/>
│   │   ├── RighSidebar.jsx<br/>
│   ├── navbar/<br/>
│   │   ├── Navbar.jsx<br/>
│   ├── ui/<br/>
│       ├── CustomBarChart.jsx<br/>
│       ├── CustomLineChar.jsx<br/>
│       ├── CustomPieChart.jsx<br/>
│       ├── app-sidebar.jsx<br/>
│       ├── calendars.jsx<br/>
│       ├── date-picker.jsx<br/>
│       ├── nav-favorites.jsx<br/>
│       ├── nav-main.jsx<br/>
│       ├── nav-secondary.jsx<br/>
│       ├── nav-user.jsx<br/>
│       ├── nav-workspaces.jsx<br/>
│       ├── sidebar-left.jsx<br/>
│       ├── sidebar-right.jsx<br/>
│       ├── team-switcher.jsx<br/>
├── hooks/<br/>
├── lib/<br/>
<br/>
.eslintrc.json<br/>
.gitignore<br/>
README.md<br/>
components.json<br/>
jsconfig.json<br/>
next.config.mjs<br/>
package-lock.json<br/>
package.json<br/>
postcss.config.mjs<br/>
tailwind.config.js<br/>


---

## 📖 Usage

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/skill-test-dashboard.git
```
```
cd skill-test-dashboard
```

### 2. Install Dependencies
```
npm install
```

### 3. Start the Application

```
npm start
```
This will start the application and open it in your default web browser at http://localhost:3000.


## 🎯 Assignment Video Link
Watch the assignment video for more details on the requirements: `Skill Test Dashboard Assignment Video`

## 🤝 Acknowledgments
Special thanks to WhatBytes for providing this assignment as part of the job selection process.

## 💻 Developer Notes
If you'd like to customize the chart's total score, you can update the totalScore prop in the CustomPieChart component.
All styling can be adjusted in the index.css file, leveraging the power of Tailwind CSS.

## 📝 License
This project is for demonstration purposes only and is not intended for production use.