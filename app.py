from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    data = request.json
    loan_amount = float(data.get('loan_amount'))
    interest_rate = float(data.get('interest_rate'))
    loan_tenure = int(data.get('loan_tenure'))

    monthly_interest_rate = interest_rate / 12 / 100
    emi = loan_amount * monthly_interest_rate * (1 + monthly_interest_rate) ** loan_tenure / ((1 + monthly_interest_rate) ** loan_tenure - 1)
    total_amount = emi * loan_tenure
    total_interest = total_amount - loan_amount

    response = {
        'emi': round(emi, 2),
        'total_amount': round(total_amount, 2),
        'total_interest': round(total_interest, 2)
    }
    return jsonify(response)

if __name__ == "__main__":
    app.run(debug=True)