# Product Store - A Full-Stack MERN Application

This is a simple but complete full-stack web application that allows users to manage a list of products. It demonstrates CRUD (Create, Read, Update, Delete) functionality with a modern tech stack, featuring a responsive design and a clean user interface.

## ✨ Features

- **View Products**: Display a grid of all products from the database.
- **Create Products**: A dedicated page with a form to add new products.
- **Update Products**: Edit product details through an in-place dialog modal.
- **Delete Products**: Remove products from the database.
- **Responsive Design**: The layout is fully responsive and works on various screen sizes.
- **Light/Dark Mode**: Toggle between light and dark themes, with styles adapting accordingly.
- **Toast Notifications**: User-friendly feedback for actions like creating, updating, or deleting products.

## 🛠️ Tech Stack

- **Frontend**:

  - **Framework**: [React](https://react.dev/)
  - **Build Tool**: [Vite](https://vitejs.dev/)
  - **UI Library**: [Chakra UI](https://chakra-ui.com/)
  - **Routing**: [React Router](https://reactrouter.com/)
  - **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)

- **Backend**:
  - **Runtime**: [Node.js](https://nodejs.org/)
  - **Framework**: [Express.js](https://expressjs.com/)
  - **Database**: [MongoDB](https://www.mongodb.com/) (with Mongoose)

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v18 or newer)
- `npm` or your favorite package manager
- MongoDB installed and running, or a MongoDB Atlas connection string.

### Backend Setup

1.  **Navigate to the backend directory**:

    ```bash
    cd backend
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    ```

3.  **Create an environment file**:
    Create a `.env` file in the `backend` directory and add your MongoDB connection string:

    ```
    MONGO_URI=your_mongodb_connection_string
    ```

4.  **Run the backend server**:
    ```bash
    npm run dev
    ```
    The server will start on `http://localhost:5000`.

### Frontend Setup

1.  **Navigate to the frontend directory** (in a new terminal):

    ```bash
    cd frontend
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    ```

3.  **Run the frontend development server**:
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or another port if 5173 is in use).


## 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Vite](https://vitejs.dev/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [React Router](https://reactrouter.com/)
- [Mongoose](https://mongoosejs.com/)

Thank you for checking out this project! Happy coding! 🚀

