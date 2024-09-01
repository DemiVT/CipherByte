

# Online Quiz Web Application

A full-stack web application for creating and taking quizzes, with user authentication, quiz interface, and result display. Built with Node.js, Express, MongoDB, and React.

## Features

- **User Authentication**: Secure sign-up and login functionality.
- **Quiz Interface**: Display multiple-choice questions and collect user responses.
- **Result Display**: Show quiz results, including scores and correct answers.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Installation

### Backend Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/online-quiz-app.git
   cd online-quiz-app/backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Create a `.env` file** in the `backend` folder with the following content:
   ```plaintext
   MONGO_URI=mongodb://localhost:27017/online-quiz-app
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   ```

4. **Start the server**:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. **Navigate to the frontend directory**:
   ```bash
   cd ../frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the React development server**:
   ```bash
   npm start
   ```

## Usage

1. **Access the application**: Open your browser and navigate to `http://localhost:3000` for the frontend.

2. **User Authentication**: 
   - Sign up a new user or log in with existing credentials.

3. **Take a Quiz**: 
   - After logging in, navigate to the quiz page and answer the questions.

4. **View Results**: 
   - Submit the quiz to view your score and correct answers.

## Contributing

1. **Fork the repository** on GitHub.
2. **Create a new branch** for your changes:
   ```bash
   git checkout -b feature/your-feature
   ```
3. **Commit your changes**:
   ```bash
   git add .
   git commit -m "Add feature: your feature description"
   ```
4. **Push your changes**:
   ```bash
   git push origin feature/your-feature
   ```
5. **Create a pull request** on GitHub.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- **Your Name**: [your.email@example.com](mailto:your.email@example.com)
- **GitHub**: [https://github.com/yourusername](https://github.com/yourusername)

---
