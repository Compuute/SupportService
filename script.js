import { User } from "./user.js";

const form = document.querySelector("form");

const initApp = () => {};

const handleSubmit = (event) => {
  event.preventDefault();
  console.log("Form submitted");

  const data = new FormData(form);
  const email = data.get("email");
  const caption = data.get("caption");
  const description = data.get("description");
  const user = new User(email, caption, description);

  console.log(user);
};

document.addEventListener("DOMContentLoaded", initApp);
form.addEventListener("submit", handleSubmit);
