import React from "react";
import { Collapse, Table } from "antd";
import "./Results.scss";

const Results = React.memo(() => {
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

  // 1-дарс	10	8	9	80.0%
  const dataSource = [
    {
      key: "1",
      lessons: "1-дарс",
      question: 10,
      answare: 8,
      attempts: 9,
      result: "80.0%",
    },
  ];

  return (
    <section className="mt-8">
      <Collapse
        size="large"
        className="my-collapse"
        expandIcon={({ isActive }) => {
          return isActive ? (
            <img
              src="arrowClose.svg"
              width={40}
              height={40}
              alt="close arrow icon"
            />
          ) : (
            <img
              src="arrowOpen.svg"
              width={40}
              height={40}
              alt="open arrow icon"
            />
          );
        }}
        items={[
          {
            key: "1",
            label:
              "«Саховат ва кўмак» жамғармаси маблағлари ҳисобидан ижтимоий ёрдам кўрсатиш тартиби бўйича ўқув курси",
            children: (
              <Collapse
                size="large"
                className="my-collapse"
                expandIcon={({ isActive }) => {
                  return isActive ? (
                    <img
                      src="arrowClose.svg"
                      width={40}
                      height={40}
                      alt="close arrow icon"
                    />
                  ) : (
                    <img
                      src="arrowOpen.svg"
                      width={40}
                      height={40}
                      alt="open arrow icon"
                    />
                  );
                }}
                items={[
                  {
                    key: "2",
                    label:
                      "«Саховат ва кўмак» жамғармаси маблағлари ҳисобидан ижтимоий ёрдам кўрсатиш тартиби бўйича ўқув курси",
                    children: (
                      <Collapse
                        size="large"
                        className="my-collapse"
                        expandIcon={({ isActive }) => {
                          return isActive ? (
                            <img
                              src="arrowClose.svg"
                              width={40}
                              height={40}
                              alt="close arrow icon"
                            />
                          ) : (
                            <img
                              src="arrowOpen.svg"
                              width={40}
                              height={40}
                              alt="open arrow icon"
                            />
                          );
                        }}
                        items={[
                          {
                            key: "3",
                            label: "1-кун",
                            children: (
                              <Table
                                dataSource={dataSource}
                                columns={columns}
                                pagination={false}
                                className="my-table"
                              />
                            ),
                          },
                        ]}
                      />
                    ),
                  },
                ]}
              />
            ),
          },
        ]}
      />
    </section>
  );
});

export default Results;
