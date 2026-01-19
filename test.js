
const utils = {
  randomId() {
    return Math.random().toString(36).substring(2, 10);
  },

  delay(ms = 500) {
    return new Promise(resolve => setTimeout(resolve, ms));
  },

  log(message = "Placeholder log") {
    console.log(`[LOG]: ${message}`);
  }
};

function generateFakeUsers(count = 5) {
  return Array.from({ length: count }, (_, i) => ({
    id: utils.randomId(),
    name: `User_${i + 1}`,
    active: Math.random() > 0.5,
    createdAt: new Date().toISOString()
  }));
}

async function fetchSomething() {
  utils.log("Fetching something...");
  await utils.delay(800);

  return {
    status: "ok",
    data: generateFakeUsers(3)
  };
}

(async () => {
  const response = await fetchSomething();
  console.table(response.data);
})();

export default {
  utils,
  generateFakeUsers,
  fetchSomething
};
