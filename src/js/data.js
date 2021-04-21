/* eslint-disable no-mixed-operators */
const cashback = {
  regular: {
    bound: 1000,
    percent: 1,
  },
  silver: {
    bound: 10000,
    percent: 2,
  },
  gold: {
    bound: 100000,
    percent: 5,
  },
};

export default function calculateCashback(amount) {
  const discountType = Object.keys(cashback) // ['regular', 'silver', 'gold']
    .reverse() // ['gold', 'silver', 'regular']
    .find((key) => amount >= cashback[key].bound); // 'gold'

  if (!discountType) return 0;

  return Math.ceil(amount * cashback[discountType].percent / 100);
}

// export default function calculateCashback(amount) {
//   if (amount >= cashback.gold.bound) {
//     return Math.ceil(amount * cashback.gold.percent / 100);
//   }

//   if (amount >= cashback.silver.bound) {
//     return Math.ceil(amount * cashback.silver.percent / 100);
//   }

//   if (amount >= cashback.regular.bound) {
//     return Math.ceil(amount * cashback.regular.percent / 100);
//   }

//   return 0;
// }
