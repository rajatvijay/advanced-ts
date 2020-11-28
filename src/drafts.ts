import axios from "axios";

function fetchCount() {
  return axios
    .get("API_URL")
    .then((response) => response.data)
    .then((response) => {
      // Inferred type as any
      response;

      assertIsNumber(response);

      // Inferred type as number
      return response;
    });
}

//////////////////
function assertIsNumber(data: any): asserts data is number {
  if (typeof data !== "number") {
    throw new TypeError(`Expected number got: ${data}`);
  }
}

let data: any;

// Inferred type is any
data;

if (typeof data === "number") {
  // Inferred type is number
  data;
}
