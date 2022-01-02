import { useRouter } from "next/router";
import { getCookie } from "cookies-next";
import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Row from "../../components/row/Row";
import axios from "axios";
import Footer from '../../components/footer/Footer'

export default function index() {
  const router = useRouter();
  useEffect(() => {
    if (!getCookie("user")) {
      router.push("/");
    }
  }, []);
  const data = getCookie("user");
  const user = data && JSON.parse(data);
  const [userDB, setUserDB] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        const rsp = await axios.post("/api/auth/getUser", {
          email: user?.email,
        });
        setUserDB(rsp.data.data);
      } catch (error) {
        console.log(error);
        return;
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      <Header userDB={userDB} />
      <Row userDB={userDB} />
      <Footer bgColor="black" logo={true} />
    </div>
  );
}
