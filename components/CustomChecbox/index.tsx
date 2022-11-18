import { Checkbox } from "@chakra-ui/react";
import React from "react";
import CustomIcon from "./CustomIcon";

type Props = {
  name: string;
  value: string;
};

const CustomCheckbox: React.FC<Props> = ({ name, value }) => {
  return (
    <Checkbox
      size={"lg"}
      bg="brand.main"
      borderColor={"brand.main"}
      borderRadius={2}
      colorScheme={"theme.checkbox"}
      icon={<CustomIcon />}
      name={name}
      aria-label={name}
      value={value}
    />
  );
};

export default CustomCheckbox;
