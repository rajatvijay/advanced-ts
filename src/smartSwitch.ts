type FieldType = "single_select" | "checkbox";

class UnreachableError extends Error {
  constructor(val: never, message: string) {
    super(`Unreachable code reached: ${message}`);
  }
}

function getFieldCmpStr(fieldType: FieldType) {
  switch (fieldType) {
    case "single_select":
      return "Select";
    case "checkbox":
      return "Checkbox";
    default:
      throw new UnreachableError(
        fieldType,
        "Unexpected field type found!: " + fieldType
      );
  }
}
