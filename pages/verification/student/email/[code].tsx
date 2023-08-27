import { useEffect } from "react";

import { useRouter } from "next/router";

import certificationApis from "@/api/certification";

const VerifyCode = () => {
  const {
    query: { code },
  } = useRouter();
  const router = useRouter();
  useEffect(() => {
    const certificateCode = async () => {
      const response = await certificationApis.verifyEmailCode(code);
      console.log("certif", response);
      if (response.ok) {
        router.push("./");
      }
    };
    certificateCode();
  }, []);
};

export default VerifyCode;
