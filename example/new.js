function getIssPosition() {
  let data = fetch("http://api.open-notify.org/iss-now.json");
  console.log(data);
}
