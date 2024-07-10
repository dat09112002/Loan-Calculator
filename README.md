# Loan Calculator

## Project Overview

Loan Calculator is a web application that allows users to calculate their monthly loan payments based on the loan amount, interest rate, and loan term. It provides a detailed breakdown of the monthly payments, total interest paid, and the total amount paid over the term of the loan. The application also displays a pie chart for visual representation.

## Features

- Calculate monthly loan payments (EMI).
- Display total interest payable.
- Display the total amount payable over the loan term.
- Display an amortization schedule.
- Visual representation of principal and interest using a pie chart.
- Responsive design for mobile and desktop views.

## Technologies Used

- **Frontend:**
  - HTML
  - CSS
  - JavaScript
  - Chart.js for the pie chart
- **Backend:**
  - Python
  - Flask

## Screenshots

### Home Page

This screenshot shows the home page where users can enter the loan amount, interest rate, and loan term in years.

<img src="screenshots/home_page.png" alt="Home Page" width="600"/>

### Loan Calculation Result

This screenshot displays the results after the user has entered the loan details and clicked the "Calculate" button. It shows the EMI, total interest payable, and total amount payable, along with a pie chart for visual representation.

<img src="screenshots/result_page.png" alt="Result Page" width="600"/>

## Getting Started

### Prerequisites

- Python 3.x
- Flask
- Git

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/dat09112002/Loan-Calculator.git
   cd Loan-Calculator

2. **Create a virtual environment:**

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`

3. **Install the required packages:**

   ```bash
   pip install -r requirements.txt

### Running the Application

1. **Start the Flask server:**

   ```bash
   flask run

2. **Open your web browser and go to:**

   ```bash
   http://127.0.0.1:5000

## Usage

- Enter the loan amount, interest rate, and loan term in years.
- Click the "Calculate" button.
- View the monthly EMI, total interest payable, and total amount payable.
- View the pie chart for a visual representation.
