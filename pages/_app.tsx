import "../styles/globals.css";
import "antd/dist/antd.css";

import "containers/Footer/Footer.css";
import Head from "next/head";
import { useState } from "react";
import { Button, Input } from "antd";
import { delay } from "utils";
import AuthProvider from "hooks/AuthContext";

function MyApp({ Component, pageProps }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");

  const handleAppCheckPassword = async () => {
    setLoading(true);
    try {
      await delay(1000);
      const response = await fetch("/api/validate-session", {
        method: "POST",
        body: JSON.stringify({ password }),
      });
      const { authenticated } = await response.json();

      setAuthenticated(authenticated);
      setLoading(false);
    } catch (error: any) {
      console.log(error);
      setLoading(false);
    }
  };

  if (!authenticated) {
    return (
      <div
        className="flex flex-col items-center justify-center h-screen"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/9509654/pexels-photo-9509654.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')`,
        }}
      >
        <p className="text-2xl text-white">Opening Soon</p>
        <div className="max-w-xl">
          <Input
            type="password"
            placeholder="Input page password"
            className="!max-w-xl !bg-transparent !p-5 text-center !text-white"
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
          />
          <Button
            type="primary"
            className="mt-2 !p-7 w-full !flex !items-center !justify-center !text-black !border-white !bg-white"
            onClick={() => handleAppCheckPassword()}
            loading={loading}
          >
            Submit
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
        ></link>
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.0/css/solid.css"
        ></link>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      <AuthProvider state={{ authenticated }}>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}

export default MyApp;
