"use client";

import React, { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useRouter } from "next/navigation";
import CreditSection from "@/components/CreditsPage/CreditSection";
import { ICredits } from "@/interfaces";
import Loading from "./loading";
import Error from "./error";

export default function CreditsPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [creditsData, setCreditsData] = useState<
    ICredits[] | null | undefined
  >();
  const [errorStatus, setErrorStatus] = useState("");
  const [errorCode, setErrorCode] = useState(0);

  useEffect(() => {
    const fetchCreditsData = async () => {
      try {
        const res = await fetch("/api/firebase/credits");
        
        if (!res.ok) {
          setErrorStatus(res.statusText);
          setErrorCode(res.status);
          return;
        }
        
        const credits = await res.json();

        setCreditsData(credits);
      } catch (error) {
        console.error("Error fetching credits data:", error);
      } finally {
        setTimeout(() => setIsLoading(false), 100);
      }
    };

    fetchCreditsData();
  }, []);

  if (isLoading) return <Loading />;

  if (errorStatus != "") return <Error code={errorCode} status={errorStatus} />;

  return (
    <div className="flex flex-col justify-center w-full p-5 md:w-1/2 md:mx-auto">
      <FiArrowLeft
        className="mb-5 cursor-pointer"
        size={25}
        color="#ADADAD"
        onClick={() => {
          router.back();
        }}
      />
      <div className="text-center">Credits</div>
      <CreditSection credits={creditsData} />
    </div>
  );
}
