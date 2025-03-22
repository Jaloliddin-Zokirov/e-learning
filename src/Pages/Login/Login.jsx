import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
import _eri from "../../Components/Eri/Eri";

const Login = React.memo(() => {
  const [form] = Form.useForm();

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="w-full max-w-[336px] p-8 rounded-md bg-white shadow-[rgba(145,158,171,0.2)_0px_0px_2px_0px,rgba(145,158,171,0.12)_0px_12px_24px_-4px]">
        <Link className="block mb-5" to={"/"}>
          <img
            className="mx-auto"
            src="logo.svg"
            width={138}
            height={138}
            alt="site logo"
          />
        </Link>
        <Form
          layout={"vertical"}
          form={form}
          initialValues={{
            layout: "vertical",
          }}
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item name="login" label="Логин">
            <Input />
          </Form.Item>
          <Form.Item name="password" label="Парол">
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Checkbox>Эслаб қол?</Checkbox>
          </Form.Item>
          <div className="flex flex-col gap-2">
            <Button
              style={{
                width: "100%",
                color: "white",
                padding: "7px 16px",
                background: "#0FB48C",
              }}
            >
              Кириш
            </Button>
            <div className="flex items-center justify-between gap-6">
              <Button
                style={{
                  width: "100%",
                  padding: "0",
                  color: "white",
                  background: "#0FB48C",
                }}
              >
                <Link className="w-full px-4 py1.5" to={"/LoginByESign"}>ЭРИ</Link>
              </Button>
              <Button
                style={{
                  width: "100%",
                  padding: "0",
                  color: "white",
                  background: "#4825C2",
                }}
              >
                <Link
                  className="w-full px-4 py-1.5 text-center"
                  to={"https://id.egov.uz/"}
                >
                  <img
                    className="inline-block"
                    src="oneID.svg"
                    width={60}
                    height={19}
                    alt="oneId icon"
                  />
                </Link>
              </Button>
            </div>
            <Button
              style={{
                width: "100%",
                padding: "7px 16px",
                background: "#539BFF",
                color: "white",
              }}
            >
              Мобил иловани юклаш
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
});

export default Login;
