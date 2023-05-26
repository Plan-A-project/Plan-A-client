import { Text } from "@chakra-ui/react";
import Link from "next/link";

import RightArrowIcon from "@/components/icons/RightArrowIcon";

interface CertificationCategoryButtonProps {
  title: string;
  href: string;
}

const CertificationCategoryButton = ({
  title,
  href,
}: CertificationCategoryButtonProps) => {
  return (
    <Link
      href={href}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "72px",
        border: "1px solid #3F52E4",
        padding: "24px 12px",
        borderRadius: "16px",
      }}
    >
      <Text textStyle={"subtitle1"}>{title}</Text>
      <RightArrowIcon />
    </Link>
  );
};

export default CertificationCategoryButton;
