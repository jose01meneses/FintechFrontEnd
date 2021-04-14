import { Row } from "antd";
import React from "react";
import ChartWidget from "../../../../../components/shared-components/ChartWidget";

import DonutChartWidget from "../../../../../components/shared-components/DonutChartWidget";
import StatisticWidget from "../../../../../components/shared-components/StatisticWidget";

import Flex from "../../../../../components/shared-components/Flex";
import { Col, Badge } from "antd";

const generalBalance = () => {
  //Barrasdeingresosversusegresos

  const RevenueXExpenses = {
    series: [
      {
        name: "Ingresos",
        data: [950000, 750000, 820000, 500000],
      },
      {
        name: "Egresos",
        data: [680000, 560000, 900000, 450000],
      },
    ],
    categories: ["Enero", "Febrero", "Marzo", "Abril"],
  };

  const VisitorChartData = {
    series: [
      {
        name: "Session Duration",
        data: [950000, 750000, 820000, 500000],
      },
    ],
    categories: ["Enero", "Febrero", "Marzo", "Abril"],
  };

  const sessionColor = ["#ffc107", "#3e82f7", "#04d182"];
  const sessionData = [350000, 750000, 400000];
  const sessionLabels = ["Servicios Publicos", "Alquiler", "Universidad"];
  const jointSessionData = () => {
    let arr = [];
    for (let i = 0; i < sessionData.length; i++) {
      const data = sessionData[i];
      const label = sessionLabels[i];
      const color = sessionColor[i];
      arr = [
        ...arr,
        {
          data: data,
          label: label,
          color: color,
        },
      ];
    }
    return arr;
  };

  return (
    <div>
      <row>
        <div className="d-flex align-items-center">
          <div className="mr-5">
            <div style={{ maxWidth: 300 }}>
              <StatisticWidget title="Ingresos" value="₡2000000" />
            </div>
          </div>
          <div className="mr-5">
            <div style={{ maxWidth: 300 }}>
              <StatisticWidget title="Egresos" value="₡1500000" />
            </div>
          </div>
          <div className="mr-5">
            <div style={{ maxWidth: 300 }}>
              <StatisticWidget
                title="Disponible"
                value="₡500000                                     "
              />
            </div>
          </div>
        </div>
      </row>

      <row>
        <ChartWidget
          series={RevenueXExpenses.series}
          xAxis={RevenueXExpenses.categories}
          title="Ingresos Versus Egresos"
          height={410}
          type="bar"
          customOptions={{
            colors: ["#04d182", "#ff6b72"],
          }}
        />
      </row>
      <row>
        <DonutChartWidget
          series={sessionData}
          labels={sessionLabels}
          title="Egresos"
          customOptions={{ colors: sessionColor }}
          extra={
            <Row justify="center">
              <Col xs={20} sm={20} md={20} lg={24}>
                <div className="mt-4 mx-auto" style={{ maxWidth: 200 }}>
                  {jointSessionData().map((elm) => (
                    <Flex
                      alignItems="center"
                      justifyContent="between"
                      className="mb-3"
                      key={elm.label}
                    >
                      <div>
                        <Badge color={elm.color} />
                        <span className="text-gray-light">{elm.label}</span>
                      </div>
                      <span className="font-weight-bold text-dark">
                        {elm.data}
                      </span>
                    </Flex>
                  ))}
                </div>
              </Col>
            </Row>
          }
        />
      </row>
      <row>
        <ChartWidget
          title="Ingresos"
          series={VisitorChartData.series}
          xAxis={VisitorChartData.categories}
          height={"400px"}
        />
      </row>
    </div>
  );
};

export default generalBalance;
