const users = [];
const quizzes = [];

const registerUser = async (username, password) => {
    const user = users.find(u => u.username === username);
    if (user) throw new Error('User already exists');
    users.push({ username, password });
};

const loginUser = async (username, password) => {
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) throw new Error('Invalid credentials');
    return 'token'; // Simulated token
};

const createQuiz = async (quiz) => {
    quizzes.push(quiz);
};

const getQuizzes = async () => {
    return quizzes;
};

const getQuiz = async (id) => {
    return quizzes.find(q => q.id === id);
};

module.exports = { registerUser, loginUser, createQuiz, getQuizzes, getQuiz };