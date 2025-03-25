import { Button, Form, Input, Select } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = React.memo(() => {
  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    localStorage.setItem("token", JSON.stringify(evt));
    navigate("/");
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
          }}
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item name="fish" label="F.I.SH" rules={[{ required: true, message: "Iltimos bu yerga F.I.SH ingizni kiriting" }]}>
            <Input />
          </Form.Item>
          <Form.Item name="viloyat" label="Viloyat" rules={[{ required: true, message: "Iltimos bu yerga viloyatingizni kiriting" }]}>
            <Select
              showSearch
              placeholder="Viloyatingizni tanlang"
              optionFilterProp="label"
              options={[
                {
                  value: "Andijon",
                  label: "Andijon",
                },
                {
                  value: "Buxoro",
                  label: "Buxoro",
                },
                {
                  value: "Farg'ona",
                  label: "Farg'ona",
                },
                {
                  value: "Jizzax",
                  label: "Jizzax",
                },
                {
                  value: "Xorazm",
                  label: "Xorazm",
                },
                {
                  value: "Namangan",
                  label: "Namangan",
                },
                {
                  value: "Navoiy",
                  label: "Navoiy",
                },
                {
                  value: "Qashqadaryo",
                  label: "Qashqadaryo",
                },
                {
                  value: "Qoraqalpog'iston",
                  label: "Qoraqalpog'iston",
                },
                {
                  value: "Samarqand",
                  label: "Samarqand",
                },
                {
                  value: "Sirdaryo",
                  label: "Sirdaryo",
                },
                {
                  value: "Surxondaryo",
                  label: "Surxondaryo",
                },
                {
                  value: "Toshkent",
                  label: "Toshkent",
                },
              ]}
            />
          </Form.Item>
          <Form.Item name="shahar/tuman" label="Shahar / Tuman" rules={[{ required: true, message: "Iltimos bu yerga shahar/tumaningizni kiriting" }]}>
            <Input />
          </Form.Item>
          <Form.Item name="maktab" label="Maktab" rules={[{ required: true, message: "Iltimos bu yerga maktabingizni kiriting" }]}>
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
            htmlType="submit"
          >
            Ro'yxatdan o'tish
          </Button>
          <Button
            type="link"
            style={{
              width: "100%",
              color: "#0FB48C",
            }}
          >
            <Link to={"/login"}>Ortga qaytish</Link>
          </Button>
        </Form>
      </div>
    </div>
  );
});

export default Register;
