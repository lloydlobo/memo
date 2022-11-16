import React from "react";
import { LoginForm } from "../components/auth/LoginForm";
import Layout from "../components/Layout";

export default function login() {
  return (
    <Layout>
      <LoginForm />
    </Layout>
  );
}
