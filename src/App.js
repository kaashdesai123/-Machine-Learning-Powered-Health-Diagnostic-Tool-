import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [features, setFeatures] = useState([5.1, 3.5, 1.4, 0.2]); // example default values
    const [prediction, setPrediction] = useState(null);

    const predict = async () => {
        try {
            const response = await axios.post('http://localhost:5000/predict', {
                features: features
            });
            setPrediction(response.data.prediction);
        } catch (error) {
            console.error("Error predicting:", error);
        }
    };

    return (
        <div className="App">
            <h1>Health Diagnostic Tool</h1>
            
            <div>
                {/* This is a simplified version. In a real-world scenario, you'd have forms/input fields for various symptoms. */}
                <button onClick={predict}>Predict Illness</button>
            </div>

            {prediction !== null && <p>Prediction: {prediction}</p>}
        </div>
    );
}

export default App;
