# 📈 Stocks Dashboard - DevOps Mini Project

A beginner-friendly project demonstrating core DevOps concepts: **Git, Docker, and CI/CD (GitHub Actions).**

## 🎯 Project Overview

This project is a simple web application that displays real-time (static) stock prices. It's built to demonstrate how modern developers package and deliver software reliably.

### Key Concepts Demonstrated:
1.  **Application Development**: Node.js + Express.
2.  **Containerization**: Packaging the app with Docker.
3.  **Continuous Integration (CI)**: Automating builds using GitHub Actions.

---

## 📂 Project Structure

```text
stocks-dashboard/
├── .github/workflows/
│   └── deploy.yml      <-- CI/CD Configuration
├── public/
│   ├── index.html     <-- Dashboard UI
│   ├── about.html     <-- About Page
│   └── style.css      <-- Premium Styling
├── app.js             <-- Node.js Server Logic
├── package.json       <-- Dependencies & Metadata
├── Dockerfile         <-- Container Instructions
└── README.md          <-- You are here!
```

---

## 🚀 How to Run Locally

### Prerequisites:
- [Node.js](https://nodejs.org/) (v16 or higher)

### Steps:
1.  **Install dependencies**:
    ```bash
    npm install
    ```
2.  **Start the server**:
    ```bash
    npm start
    ```
3.  **Open in browser**: [http://localhost:5500](http://localhost:5500)

---

## 🐳 How to Run using Docker

### Prerequisites:
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running.

### Steps:
1.  **Build the Docker Image**:
    ```bash
    docker build -t stocks-dashboard .
    ```
2.  **Run the Container**:
    ```bash
    docker run -p 5500:5500 stocks-dashboard
    ```
3.  **Access the app**: [http://localhost:5500](http://localhost:5500)

---

## ⚙️ GitHub Setup (GitOps Flow)

To use this project as a proper DevOps demonstration, follow these steps:

1.  **Initialize Git**:
    ```bash
    git init
    ```
2.  **Add all files**:
    ```bash
    git add .
    ```
3.  **Commit changes**:
    ```bash
    git commit -m "Initial commit: Stocks Dashboard with Docker & CI/CD"
    ```
4.  **Create a Repository on GitHub** and push your code:
    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/stocks-dashboard.git
    git branch -M main
    git push -u origin main
    ```

---

## 🛠️ CI/CD Explanation (GitHub Actions)

The file `.github/workflows/deploy.yml` automates the following every time you push code to GitHub:
-   **Checkout**: Downloads your latest code onto a virtual runner.
-   **Install**: Runs `npm install` to check if dependencies are correct.
-   **Docker Build**: Verifies that the application can still be successfully containerized.

This ensures that "it works on my machine" translates to "it works everywhere"!

---

## 🛠️ GitOps: Local Auto-Deployment Setup

To make your system automatically update when you push code, follow these steps to set up a **Self-hosted Runner**:

### Step 1: Create Runner on GitHub
1.  Go to your GitHub Repository.
2.  Click **Settings** (top tab) -> **Actions** (left sidebar) -> **Runners**.
3.  Click **New self-hosted runner**.
4.  Select your OS (**Windows**).

### Step 2: Configure the Runner on your PC
GitHub will give you a list of commands. Open **PowerShell** (as Administrator) and run them one by one:
1.  **Download**: Copy and paste the `Invoke-WebRequest` command.
2.  **Extract**: Copy and paste the `Add-Type` and `Expand-Archive` commands.
3.  **Configure**: Run `./config.cmd --url https://github.com/YOUR_USER/YOUR_REPO --token YOUR_TOKEN`.
    *   *Press Enter for default values when it asks for names/labels.*
4.  **Run**: Execute `./run.cmd`.

### Step 3: Test the Magic!
1.  Keep the `./run.cmd` terminal open.
2.  Change something in `index.html` (e.g., change "Market Overview" to "Live Market").
3.  `git add .`, `git commit -m "Testing GitOps"`, and `git push origin main`.
4.  Watch your terminal and GitHub Actions tab.
5.  Refresh [http://localhost:5500](http://localhost:5500) to see the change!

---

## 👨‍💻 Credits
Built for academic and practical DevOps demonstration.
