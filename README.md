# Error: Amount cannot be negative in reward calculation

This repository demonstrates a common error in Dapps where a function throws an error due to invalid input.  The specific error is encountered in the `calculateReward` function, which throws an exception if a negative amount is provided. This can occur if there's a flaw in the data handling or validation process upstream in the Dapp.

The `bug.js` file contains the faulty code, while `bugSolution.js` presents the corrected version. The solution focuses on robust input validation and handling of unexpected values.