import { useEffect, useRef, useState } from "react";

const useScrollTo = <T extends Element>() => {
  const ref = useRef<T>(null);
  const [shouldScrollTo, setShouldScrollTo] = useState(false);

  useEffect(() => {
    if (ref.current && shouldScrollTo) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setShouldScrollTo(false);
    }
  }, [shouldScrollTo]);

  // Explicitly define the return type of the hook
  type ReturnValue = [
    React.RefObject<T>,
    React.Dispatch<React.SetStateAction<boolean>>,
  ];

  // Use 'as' to cast the RefObject to LegacyRef
  return [ref as React.LegacyRef<T>, setShouldScrollTo] as ReturnValue;
};

export default useScrollTo;
