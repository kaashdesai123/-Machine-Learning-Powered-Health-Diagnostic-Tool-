Machine Learning Powered Health Diagnostic Tool
This tool allows users to input symptoms and get predictions for potential illnesses using a machine learning model.


Technologies Used:
Backend: Python, Flask
Machine Learning: scikit-learn
Frontend: React.js
Getting Started:
Prerequisites:
Python
pip
Node.js
npm
Installation:
Backend Setup:

Navigate to the project root directory.
Install the required Python packages:
bash
Copy code
pip install Flask scikit-learn joblib
Run the model.py script to train and save the machine learning model:
bash
Copy code
python model.py
Start the Flask API:
bash
Copy code
python app.py
Frontend Setup:

Navigate to the frontend directory.
Install the required npm packages:
bash
Copy code
npm install
Start the React application:
bash
Copy code
npm start
Open a browser and visit http://localhost:3000 to access the web interface.

Usage:
On the web interface, enter the symptoms (this example uses default values from the Iris dataset for simplicity).
Click on the "Predict Illness" button.
The system will display a prediction based on the provided input. Remember, this prediction is based on the Iris dataset and is not a real medical diagnosis.
