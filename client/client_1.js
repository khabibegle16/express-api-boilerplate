const axios = require("axios");
const axiosRetry = require("axios-retry").default;
const { v4: uuidv4 } = require("uuid");

// Make a request for a user with a given ID
axiosRetry(axios, {
  retries: 3,
  retryDelay: (retryCount) => {
    return retryCount * 2000;
  },
  shouldResetTimeout: true,
  retryCondition: (_error) => true,
});
axios
  .get("http://localhost:3000/idempotancy_check?abc=demo", { 	headers: {  "Idempotency-Key": uuidv4() }})
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
