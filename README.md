# Binomial Simulator

## Description

This project is a simple web-based Binomial Simulator for statistics. It allows users to input parameters for a binomial distribution and simulates the probability of a certain number of successes over a number of trials. The simulator provides a user-friendly interface to input the number of trials (N), probability of success (P), number of successes (successes), and the number of trials for the simulation. It then calculates the probability of achieving the specified number of successes across the given trials and displays the result in percentage.

## Features

- Input fields for the number of trials (N), probability of success (P in decimal form, not percentage), number of successes, and number of trials for the simulation.
- A 'Simulate' button to run the simulation based on the input values.
- A 'Clear' button to reset all input fields and clear the results.
- Responsive design that adapts to different screen sizes.

## How to Use

1. Enter the number of trials (N) in the corresponding input field.
2. Input the probability of success (P) in its respective field. Ensure that the probability is entered in decimal form, not as a percentage.
3. Specify the number of successes you're interested in.
4. Enter the number of trials to simulate.
5. Click the 'Simulate' button to view the probability of achieving the specified number of successes.
6. If needed, click the 'Clear' button to reset all inputs and clear the displayed results.

## Technical Details

- The simulation is performed using a straightforward iterative approach that counts the number of successes in each trial and aggregates the results to calculate the overall probability.
- The probability is displayed as a percentage to provide an intuitive understanding of the simulation's outcome.
- The front end is built with HTML and CSS, providing a clean and straightforward user interface.
- JavaScript is used for the simulation logic and interactivity of the webpage.

## Setup and Installation

1. Clone the repository or download the source code.
2. Open the `index.html` file in a web browser to launch the simulator.
3. No additional installation or dependencies are required to run the simulator.

## Contributing

Contributions to enhance the functionality or improve the interface of the Binomial Simulator are welcome. Please feel free to fork the repository, make your changes, and submit a pull request.

## License

This project is open-sourced under the MIT License. See the LICENSE file for more details.

This updated README includes the important note regarding the input of the probability value in decimal form.
