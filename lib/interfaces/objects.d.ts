export declare type UserType = 'User' | 'Admin';
export declare type TransactionType = 'DEPOSIT' | 'WITHDRAW' | 'TRANSFER' | 'RECEIVE';
export interface DBItem {
    pk: string;
    sk: string;
    sk2?: string;
    sk3?: string;
    entity: string;
}
export interface UserConnection {
    deviceId: string;
    connectionId: string;
    connectedAt: string;
}
export interface User extends DBItem {
    userId: string;
    firstName: string;
    lastName: string;
    avatar?: string;
    email: string;
    userType: UserType;
    confirmed: boolean;
    times: {
        confirmedAt?: string;
        createdAt: string;
        lastLogin?: string;
    };
    connections: UserConnection[];
    accountBalance: number;
    stripeCustomerId: string;
    searchText: string;
}
export interface Subscription extends DBItem {
    connectionId: string;
    subscriptionId: string;
    itemType: string;
    itemId: string;
    deviceId: string;
    userId?: string;
    times: {
        subscribedAt: string;
    };
}
export interface PaymentIntent extends DBItem {
    id: string;
    clientSecret: string;
    amount: number;
    transactionComplete: boolean;
    times: {
        createdAt: string;
        completeAt?: string;
    };
}
export interface Transaction extends DBItem {
    transactionId: string;
    type: TransactionType;
    text: string;
    amount: number;
    newBalance: number;
    accessKey: {
        pk: string;
        sk: string;
    };
    times: {
        createdAt: string;
    };
}
export interface Deposit extends DBItem {
    depositId: string;
    amount: number;
    times: {
        createdAt: string;
    };
}
export interface Withdrawal extends DBItem {
    withdrawalId: string;
    amount: number;
    times: {
        createdAt: string;
    };
}
export interface Transfer extends DBItem {
    transferId: string;
    amount: number;
    recipientUserId: string;
    message: string;
    times: {
        createdAt: string;
    };
}
export interface UserProfile {
    firstName: string;
    lastName: string;
    avatar: string;
    userType: UserType;
    times: {
        createdAt: string;
    };
}
export interface MyUserProfile extends UserProfile {
    email: string;
    accountBalance: number;
}
