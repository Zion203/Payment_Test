import { gql } from 'apollo-server';

export const typeDefs = gql`
  type PaymentMethod {
    type: String
    cardNumber: String
    expiryDate: String
  }

  type RedirectURLs {
    successURL: String
    failureURL: String
  }

  type CustomerDetails {
    name: String
    email: String
  }

  type PaymentRequest {
    orderId: String
    amount: Float
    currency: String
    paymentMethod: PaymentMethod
    redirectURLs: RedirectURLs
    customerDetails: CustomerDetails
  }

  type PaymentGatewayResponse {
    transactionStatus: String
    transactionId: String
    orderId: String
    amount: Float
    authorizationCode: String
    errorCodeMessage: String
    customerInformation: CustomerDetails
  }

  type Query {
    paymentRequest(id: String!): PaymentRequest
    paymentGatewayResponse(id: String!): PaymentGatewayResponse
  }
`;
