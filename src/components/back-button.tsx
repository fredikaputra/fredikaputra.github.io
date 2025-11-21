"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function BackButton() {
  const router = useRouter();
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    // Check if there's history to go back to
    if (typeof window !== 'undefined') {
      setCanGoBack(window.history.length > 1);
    }
  }, []);

  const handleBack = () => {
    if (canGoBack) {
      router.back();
    } else {
      // Fallback to home if no history
      router.push('/');
    }
  };

  return (
    <Button variant="ghost" className="mb-6" onClick={handleBack}>
      <ArrowLeft className="mr-2 h-4 w-4" />
      Back
    </Button>
  );
}