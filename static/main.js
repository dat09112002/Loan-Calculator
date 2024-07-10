document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('loan-form');
  const calculateBtn = document.getElementById('calculate-btn');
  
  form.addEventListener('submit', function (event) {
      event.preventDefault();
      calculateLoan();
  });

  function calculateLoan() {
      const loanAmount = parseFloat(document.getElementById('loan-amount').value);
      const interestRate = parseFloat(document.getElementById('interest-rate').value);
      const loanYears = parseInt(document.getElementById('loan-years').value, 10);

      // Convert years to months
      const loanMonths = loanYears * 12;
      document.getElementById('loan-months').value = loanMonths;

      fetch('/calculate', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              loan_amount: loanAmount,
              interest_rate: interestRate,
              loan_tenure: loanMonths
          })
      })
      .then(response => response.json())
      .then(data => {
          document.getElementById('loan-emi').textContent = `$${data.emi}`;
          document.getElementById('total-amount').textContent = `$${data.total_amount}`;
          document.getElementById('total-interest').textContent = `$${data.total_interest}`;

          // Calculate expected end date
          const today = new Date();
          const endDate = new Date(today.setMonth(today.getMonth() + loanMonths));
          const formattedDate = endDate.toISOString().split('T')[0];
          document.getElementById('expected-date').textContent = formattedDate;

          if (myChart) {
              updateChart(data.total_interest);
          } else {
              displayChart(data.total_interest);
          }
      })
      .catch(error => console.error('Error:', error));
  }

  let myChart;

  function displayChart(totalInterestPayableValue) {
      const ctx = document.getElementById("myChart").getContext("2d");
      myChart = new Chart(ctx, {
          type: "pie",
          data: {
              labels: ["Total Interest", "Principal Loan Amount"],
              datasets: [
                  {
                      data: [totalInterestPayableValue, parseFloat(document.getElementById('loan-amount').value)],
                      backgroundColor: ["#e63946", "#14213d"],
                      borderWidth: 0,
                  },
              ],
          },
      });
  }

  function updateChart(totalInterestPayableValue) {
      myChart.data.datasets[0].data[0] = totalInterestPayableValue;
      myChart.data.datasets[0].data[1] = parseFloat(document.getElementById('loan-amount').value);
      myChart.update();
  }
});
