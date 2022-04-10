const orders = [
  {
    orderId: '123',
    customerId: '123',
    deliveryDate: '01-01-2020',
    delivered: true,
    items: [
      { productId: '123', price: 55 },
      { productId: '234', price: 30 },
    ],
  },
  {
    orderId: '234',
    customerId: '234',
    deliveryDate: '01-02-2020',
    delivered: false,
    items: [{ productId: '234', price: 30 }],
  },
  {
    orderId: '345',
    customerId: '234',
    deliveryDate: '05-01-2020',
    delivered: true,
    items: [
      { productId: '567', price: 30 },
      { productId: '678', price: 80 },
    ],
  },
  {
    orderId: '456',
    customerId: '345',
    deliveryDate: '12-01-2020',
    delivered: true,
    items: [
      { productId: '789', price: 12 },
      { productId: '890', price: 90 },
    ],
  },
  {
    orderId: '578',
    customerId: '456',
    deliveryDate: '12-01-2020',
    delivered: true,
    items: [
      { productId: '901', price: 43 },
      { productId: '123', price: 55 },
    ],
  },
];

// 1)Get a list of the orders for the customer ID 234 that have not been delivered.
const result_1 = orders.filter(
  (item) => !item.delivered && item.orderId === '234'
);
console.log(result_1);

// 2)Create a new property on each order with the total price of items ordered.
const result_2 = orders.map((order) => {
  const totalPrice = order.items.reduce((acc, curr) => acc + curr.price, 0);
  return { ...order, totalPrice };
});
console.log(result_2);

// 3)Does all the orders have been delivered?
const result_3 = orders.every((order) => order.delivered);
console.log(result_3);

// 4)Has the customer with ID '123' made any orders?
const result_4 = orders.some((order) => order.customerId === '123');

console.log(result_4);
