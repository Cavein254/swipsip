export const Login = {
  user1: {
    email: "test@test.com",
    password: "test",
  },
};

export const LoginSuccess = {
  data1: {
    success: true,
    user: {
      isAdmin: false,
      email: "test@test.com",
      token: "abcd",
      createdAt: 12334,
      lastLogin: 56666,
    },
  },
  data2: {
    success: false,
    user: {
      isAdmin: false,
      email: "test1@test.com",
      token: "abcd",
      createdAt: 12334,
      lastLogin: 56666,
    },
  },
};

export const Products = [
  {
    id: 1,
    type: "wine",
    name: "South African Wine",
    price: 234,
    inCart: false,
  },
  {
    id: 2,
    type: "wine",
    name: "Table Wine",
    price: 234,
    inCart: false,
  },
  {
    id: 3,
    type: "wine",
    name: "Church Wine",
    price: 2323,
    inCart: false,
  },
  {
    id: 4,
    type: "beer",
    name: "South African Wine",
    price: 234,
    inCart: false,
  },
  {
    id: 5,
    type: "beer",
    name: "Table Wine",
    price: 234,
    inCart: false,
  },
  {
    id: 6,
    type: "beer",
    name: "Church Wine",
    price: 2323,
    inCart: false,
  },
  {
    id: 7,
    type: "liquor",
    name: "South African Wine",
    price: 234,
    inCart: false,
  },
  {
    id: 8,
    type: "liquor",
    name: "Table Wine",
    price: 234,
    inCart: false,
  },
  {
    id: 9,
    type: "liquor",
    name: "Church Wine",
    price: 2323,
    inCart: false,
  },
  {
    id: 10,
    type: "extras",
    name: "South African Wine",
    price: 234,
    inCart: false,
  },
  {
    id: 11,
    type: "extras",
    name: "Table Wine",
    price: 234,
    inCart: false,
  },
  {
    id: 12,
    type: "extras",
    name: "Church Wine",
    price: 2323,
    inCart: false,
  },
];
