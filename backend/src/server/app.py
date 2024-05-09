from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/dates', methods=['POST', 'OPTIONS'])
def receive_dates():
    if request.method == 'OPTIONS':
        response = jsonify({'message': 'Preflight request successful'})
        response.headers.add('Access-Control-Allow-Origin', '*')
        response.headers.add('Access-Control-Allow-Methods', 'POST') 
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type')  
        return response
    elif request.method == 'POST':
        data = request.json
        print(data)
        return jsonify({'message': 'Dates received successfully'})

if __name__ == '__main__':
    app.run(debug=True)
