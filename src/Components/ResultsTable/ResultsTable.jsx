import React from "react";
import { Table } from "antd";

const ResultsTable = ({ data }) => {
  const columns = [
    {
      title: "Дарслар",
      dataIndex: "lessons",
      key: "lessons",
    },
    {
      title: "Умумий савол сони",
      dataIndex: "question",
      key: "question",
    },
    {
      title: "Тўғри жавоб",
      dataIndex: "answare",
      key: "answare",
    },
    {
      title: "Уринишлар сони",
      dataIndex: "attempts",
      key: "attempts",
    },
    {
      title: "Натижа",
      dataIndex: "result",
      key: "result",
    },
  ];

  return <Table dataSource={data} columns={columns} pagination={false} className="my-table" />;
};

export default ResultsTable;