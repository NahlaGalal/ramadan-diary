import {
  Radio,
  RadioGroup,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";

type Props = {
  name: string;
  values: string[];
};

const CustomRadio: React.FC<Props> = ({ name, values }) => {
  const [value, setValue] = React.useState("1");

  return (
    <RadioGroup onChange={setValue} value={value} name={name} aria-label={name}>
      <SimpleGrid columns={2} rowGap={1}>
        {values.map((val) => (
          <Radio
            value={val}
            key={val}
            size={"lg"}
            bg="brand.main"
            borderColor={"brand.secondary"}
            colorScheme={"brand.secondary"}
            _before={{
              width: `3 !important`,
              height: `3 !important`,
              background: "brand.secondary !important",
            }}
          >
            {value}
          </Radio>
        ))}
      </SimpleGrid>
    </RadioGroup>
  );
};

export default CustomRadio;
