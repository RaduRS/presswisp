"use client";
import React, { ReactNode } from "react";
import { ClerkProvider, SignedIn, UserButton } from "@clerk/nextjs";
import { ApolloProvider } from "@apollo/client";
import client from "@/lib/apolloClient";

interface ClientProvidersProps {
  children: ReactNode;
}
const ClientProviders = ({ children }: ClientProvidersProps) => {
  return (
    <ClerkProvider>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </ClerkProvider>
  );
};

export default ClientProviders;
