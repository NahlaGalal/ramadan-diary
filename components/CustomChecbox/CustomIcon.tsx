import { Box } from "@chakra-ui/react";

const CustomIcon = ({ isChecked }: any) => (
  <Box
    as="span"
    w={isChecked ? 3 : 0}
    h={isChecked ? 3 : 0}
    bg="var(--chakra-colors-brand-secondary)"
    borderRadius={2}
    transitionDuration={"var(--chakra-transition-duration-normal)"}
    transitionProperty="all"
  ></Box>
);

export default CustomIcon;
