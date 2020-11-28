import axios from "axios";

type Employee = {
  id: string;
  employee_name: string;
  employee_salary: string;
};

function isEmployee(data: any): data is Employee {
  return (
    typeof data.is === "string" &&
    typeof data.employee_name === "string" &&
    typeof data.employee_salary === "string"
  );
}

function assertIsEmployeeArray(data: any): asserts data is Employee[] {
  if (!Array.isArray(data)) {
    throw new TypeError("Expected Array but recieved " + JSON.stringify(data));
  }
  if (data.some((item) => !isEmployee(item))) {
    throw new TypeError(
      `Expected Employee but recieved ${JSON.stringify(data)}`
    );
  }
}

export const getEmployees = () => {
  return axios
    .get("http://dummy.restapiexample.com/api/v1/employees")
    .then((response) => {
      const responseFromAPI = response.data;
      assertIsEmployeeArray(responseFromAPI);
      return responseFromAPI;
    });
};
