import { useMemo, useState } from "react";

export const useValidateForm = (ruleset, value, setValue) => {
  const [isTouched, setIsTouched] = useState(false);

  const touch = () => {
    setIsTouched(true);
  };

  const { formErrors, hasErrors } = useMemo(() => {
    const rules = ruleset(value);
    if (rules === null) throw Error("Validation value is null");
    return rules;
  }, [value, ruleset]);

  const onChange = (e) => {
    touch();
    setValue(e);
  };

  return {
    handlers: {
      onChange,
      onBlur: touch,
    },
    isTouched,
    formErrors,
    hasErrors,
  };
};

export default useValidateForm;
