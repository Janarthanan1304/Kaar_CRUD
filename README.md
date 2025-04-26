🧩 Node.js Task API with MongoDB

A simple and efficient API built using Node.js, Express.js, and MongoDB (via Mongoose) for task management.

📦 Features

✅ Create a new task
📄 Get all tasks
🔍 Get task by ID
✏ Update a task
❌ Delete a task

🛠 Tech Stack

* Node.js
* Express.js
* MongoDB (with Mongoose)
* dotenv – for environment variable management
* nodemon – for hot-reloading during development

🚀 Getting Started

1. Clone the Repository
bash
git clone https://github.com/your-username/node-task-api.git
cd node-task-api

2. Install Dependencies

bash
npm install

3. Run the Server

bash
npm run dev

Server will start at: http://localhost:5000

📮 API Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | /api/tasks | Create a new task |
| GET | /api/tasks | Get all tasks |
| GET | /api/tasks/:id | Get task by ID |
| PUT | /api/tasks/:id | Update task by ID |
| DELETE | /api/tasks/:id | Delete task by ID |

🔗 Tools

- MongoDB Atlas – for database
- Postman – for testing the API

📁 Project Structure
The project structure is as follows:
├── data_base/

    │ └── task.js

├── api/

    │ └── routes.js

├── .env

├── .gitignore

├── server.js

├── package.json

└── README.md

Feel free to fork this repo, improve it, and create pull requests. Contributions are welcome!
