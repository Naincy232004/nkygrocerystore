# Backend Setup Instructions

This project uses a Python Flask backend with MySQL database connectivity.

## Prerequisites

- Python 3.x installed
- MySQL server running locally or accessible remotely
- Required Python packages installed (see `requirements.txt`)

## Installation

1. Install Python dependencies:

```
pip install -r requirements.txt
```

2. Update database connection details in `backend/app.py`:

```python
connection = create_connection("localhost", "your_username", "your_password", "your_database")
```

Replace `"your_username"`, `"your_password"`, and `"your_database"` with your MySQL credentials and database name.

3. Ensure the MySQL database has the required `users` table. You can run the `mysql_connector_example.py` script to create the table and insert sample data:

```
python mysql_connector_example.py
```

## Running the Backend Server

Run the Flask backend server with:

```
python backend/app.py
```

The backend will serve the frontend files and provide API endpoints at:

- `GET /api/users` - Get list of users
- `POST /api/users` - Add a new user (JSON body with `name`, `age`, `gender`, `nationality`)

The frontend files are served at the root URL `/`.

## Notes

- CORS is enabled to allow frontend-backend communication.
- Modify and extend the backend API as needed for your application.
