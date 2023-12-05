import type { FunctionComponent } from "react";
import React, { useMemo } from "react";
import { Hierarchy } from "types/commonTypes";

const getSizeClasses = (size: "small" | "medium" | "large") => {
  switch (size) {
    case "small": {
      return "px-4 py-2.5";
    }
    case "medium": {
      return "px-6 py-3";
    }
    case "large": {
      return "px-8 py-4";
    }
    default: {
      return "px-6 py-3";
    }
  }
};

const getModeClasses = (hierachy: Hierarchy) => {
  return `text-${hierachy} bg-${hierachy} border-${hierachy}`;
};

const BASE_BUTTON_CLASSES =
  "cursor-pointer rounded-full border-2 font-bold leading-none inline-block";

type ButtonProps = {
  hierarchy: Hierarchy;
  size: "small" | "medium" | "large";
  label: string;
};

export const Button: FunctionComponent<
  ButtonProps & JSX.IntrinsicElements["button"]
> = ({ hierarchy, size = "medium", label, ...props }) => {
  const computedClasses = useMemo(() => {
    const modeClass = getModeClasses(hierarchy);
    const sizeClass = getSizeClasses(size);

    return [modeClass, sizeClass].join(" ");
  }, [hierarchy, size]);

  return (
    <button
      type="button"
      className={`${BASE_BUTTON_CLASSES} ${computedClasses}`}
      {...props}
    >
      {label}
    </button>
  );
};
