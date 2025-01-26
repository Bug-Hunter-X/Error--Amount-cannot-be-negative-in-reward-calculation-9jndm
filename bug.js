```javascript
function calculateReward(amount) {
  if (amount < 0) {
    throw new Error('Amount cannot be negative');
  }
  // ... rest of the reward calculation logic ...
}
```
The `calculateReward` function throws an error if the input amount is negative, which can happen if there's a bug elsewhere in the Dapp that provides a negative amount.