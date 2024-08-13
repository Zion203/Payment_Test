
// Simplified data structure
const paymentRequests = [
  {
    orderId: '1',
    amount: 100.0,
    currency: 'USD',
    paymentMethod: {
      type: 'CreditCard',
      cardNumber: '4111111111111111',
      expiryDate: '12/24',
    },
    redirectURLs: {
      successURL: 'https://example.com/success',
      failureURL: 'https://example.com/failure',
    },
    customerDetails: {
      name: 'John Doe',
      email: 'john.doe@example.com',
    },
  },
];

const paymentGatewayResponses = [
  {
    transactionStatus: 'Success',
    transactionId: 'txn_1',
    orderId: '1',
    amount: 100.0,
    authorizationCode: 'AUTH123',
    errorCodeMessage: null,
    customerInformation: {
      name: 'John Doe',
      email: 'john.doe@example.com',
    },
  },
];


export const resolvers = {
  Query: {
    paymentRequest: (parent: any, args: { id: string }) => {
      return paymentRequests.find(request => request.orderId === args.id);
    },
    paymentGatewayResponse: (parent: any, args: { id: string }) => {
      return paymentGatewayResponses.find(response => response.orderId === args.id);
    },
  },
};

