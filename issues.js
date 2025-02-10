const initApp = () => {
  listAllIssues();
};

const listAllIssues = async () => {
  const url = "https://support-586e.restdb.io/rest/issues";

  const response = await fetch(url, {
    headers: {
      "x-apikey": "67a9efe4020c067e22e653b9",
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    const data = await response.json();
    console.log(data);
  } else {
    console.log(respons);
  }
};

document.addEventListener("DOMContentLoaded", initApp);
