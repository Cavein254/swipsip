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
