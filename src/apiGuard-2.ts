type Employee = {
  id: string;
  employee_name: string;
  employee_salary: string;
  employee_age: string;
  profile_image: string;
};

function isEmployee(data: any): data is Employee {
  return (
    typeof data.id === "string" &&
    typeof data.employee_name === "string" &&
    typeof data.employee_salary === "string" &&
    typeof data.employee_age === "string" &&
    typeof data.profile_image === "string"
  );
}

function assertIsTypeArray<T>(
  data: any,
  check: (data: any) => data is T
): asserts data is T[] {
  if (!Array.isArray(data)) {
    throw new TypeError("Expected Array but recieved " + JSON.stringify(data));
  }

  if (data.some((item) => !check(data))) {
    throw new TypeError(
      `Unexpected data type recieved ${JSON.stringify(data)}`
    );
  }
}

function assertIsEmployeeArray(data: any): asserts data is Employee[] {
  return assertIsTypeArray(data, isEmployee);
}
