module.exports = {
  mongoURI: "mongodb://localhost:27017/wines3",
  token:
    "fecd3ea548501ee9474ddc4d3af36e52fff9fc22addb2ffb5fa5f4032b9aa7a5016b1f4e0aa51debed6aa6af8758fec7318f913f245ed43565b458c1a41b98a8",
  consumerKey: "YMYA169f5C14ArG5OOMbgjQBK7LbARlJ",
  consumerSecret: "qgiiFCOEzxGmrMC5",
  CallBackURL: "https://85d95c05.ngrok.io/api/user/payments",
  PhoneNumber: "254712632223",
  salt:'a775e088f1a6f0a67908f0cb62f98d7b2a3b9800ec5c51b042c01f8e1894ec85'
};

// salt generated with
// crypto.randomBytes(32).toString('hex')
