import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";

const Login = React.memo(() => {
  const navigate = useNavigate()
  
  const handleSubmit = (evt) => {
    localStorage.setItem("token", JSON.stringify(evt))
    navigate("/")
  };

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="w-full max-w-[336px] p-8 rounded-md bg-white shadow-[rgba(145,158,171,0.2)_0px_0px_2px_0px,rgba(145,158,171,0.12)_0px_12px_24px_-4px]">
        <Link className="block mb-5" to={"/"}>
          <img
            className="mx-auto"
            src="Logo.svg"
            width={138}
            height={138}
            alt="site logo"
          />
        </Link>
        <Form
          layout={"vertical"}
          onFinish={handleSubmit}
          initialValues={{
            layout: "vertical",
            remember: false,
          }}
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item name="login" label="Login" rules={[{ required: true, message: "Bu yerga loginingizni yozing" }]}>
            <Input />
          </Form.Item>
          <Form.Item name="password" label="Parol" rules={[{ required: true, message: "Bu yerga parolingizni yozing" }]}>
            <Input.Password />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Meni eslab qol.</Checkbox>
          </Form.Item>
          <div className="flex flex-col gap-2">
            <Button
              style={{
                width: "100%",
                color: "white",
                padding: "7px 16px",
                background: "#0FB48C",
              }}
              htmlType="submit"
            >
              Kirish
            </Button>

            <Button
              type="link"
              style={{
                width: "100%",
                color: "#0FB48C",
              }}
            >
              <Link to={"/register"}>Ro'yxatdan o'tish</Link>
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
});

export default Login;
