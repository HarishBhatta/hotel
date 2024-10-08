"use client";
import React, { useEffect, useState } from "react";
interface ClientOnlyProps {
  children: React.ReactNode;
}
const ClientsOnly: React.FC<ClientOnlyProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return <>{children}</>;
};

export default ClientsOnly;
