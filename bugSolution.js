```javascript
function calculateReward(amount) {
  amount = Math.max(0, amount); // Ensure amount is non-negative
  // ... rest of the reward calculation logic ...
}
```
The solution uses `Math.max(0, amount)` to ensure that the `amount` is always non-negative.  This prevents the error from being thrown.  Alternatively, more comprehensive error handling could be implemented to gracefully handle negative amounts, perhaps logging the error and returning a default value.