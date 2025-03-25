import React from "react";
import CollapseItem from "../../Components/CollapseItem/CollapseItem";
import ResultsTable from "../../Components/ResultsTable/ResultsTable";
import "./Results.scss";

const Results = React.memo(() => {
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
      <CollapseItem title="Fundamental Psixologiya">
        <CollapseItem title="1-modul">
          <CollapseItem title="1-dars">
            <ResultsTable data={dataSource} />
          </CollapseItem>
        </CollapseItem>
      </CollapseItem>
    </section>
  );
});

export default Results;
