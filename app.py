from flask import Flask, request, jsonify
import joblib

app = Flask(__name__)

# Load pre-trained model
model = joblib.load('iris_model.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json(force=True)
    prediction = model.predict([data['features']])
    return jsonify(prediction=int(prediction[0]))

if __name__ == '__main__':
    app.run(port=5000)
