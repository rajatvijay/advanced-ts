import { Option } from ".";
import { expectAssignable, expectNotAssignable } from "tsd";

expectAssignable<Option>({ label: "label", value: "value" });
expectNotAssignable<Option>({ label: "label", value: 1 });
