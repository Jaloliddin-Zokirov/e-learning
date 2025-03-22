import { Button, Form, Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Eri = React.memo(() => {
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
          <Form.Item name="ЭРИ" label="ЭРИ">
            <Input />
          </Form.Item>
          <Button
            style={{
              width: "100%",
              color: "white",
              marginBottom: "10px",
              padding: "7px 16px",
              background: "#0FB48C",
            }}
          >
            Кириш
          </Button>
          <Button
            type="link"
            style={{
              width: "100%",
              color: "#0FB48C",
            }}
          >
            <Link to={"/login"}>Орқага қайтиш</Link>
          </Button>
        </Form>
      </div>
    </div>
  );
});

export default Eri;
