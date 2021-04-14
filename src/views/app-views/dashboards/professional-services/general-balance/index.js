import { Row } from "antd";
import React from "react";
import ChartWidget from "../../../../../components/shared-components/ChartWidget";
import DonutChartWidget from "../../../../../components/shared-components/DonutChartWidget";
import Flex from "../../../../../components/shared-components/Flex";
import { Col, Tabs,  } from "antd";
import {
  BarChartOutlined,
  FileDoneOutlined,
  BankOutlined ,
  TeamOutlined ,
  CarOutlined   ,
  WalletOutlined  ,
} from "@ant-design/icons";
import DataDisplayWidget from "components/shared-components/DataDisplayWidget";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const generalBalance = () => {
  //Barrasdeingresosversusegresos
  const uniqueVisitorsData = {
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

  const uniqueVisitorsData2 = {
    series: [
      {
        name: "Ingresos",
        data: [950000, 750000, 820000, 500000],
      },
    ],
    categories: ["Enero", "Febrero", "Marzo", "Abril"],
  };

  const sessionColor = ["#ffc107", "#3e82f7", "#04d182"];
  const sessionData = [3500000, 5700000, 2400000];
  const sessionLabels = ["SG&A", "COGS", "Planilla"];
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
        <div className="ant-row">
          <div className="ant-col ant-col-24">
            <Tabs onChange={callback} type="card">
              <TabPane tab="Enero 2021" key="1">
                
                <Row>
                  <Col xs={8}>
                    <DataDisplayWidget
                      icon={<FileDoneOutlined />}
                      value="950.000"
                      title="Ingresos"
                      color="cyan"
                      vertical={true}
                      avatarSize={50}
                      
                    />
                  </Col>
                  <Col xs={8}>
                    <DataDisplayWidget
                      icon={<BarChartOutlined />}
                      value="130.000"
                      title="COGS"
                      color="volcano"
                      vertical={true}
                      avatarSize={50}
                    />
                  </Col>
                  <Col xs={8}>
                    <DataDisplayWidget
                      icon={<TeamOutlined  />}
                      value="300.000"
                      title="Planilla"
                      color="orange"
                      vertical={true}
                      avatarSize={50}
                    />
                  </Col>
                  <Col xs={8}>
                    <DataDisplayWidget
                      icon={<BankOutlined  />}
                      value="250.000"
                      title="SG&A"
                      color="geekblue"
                      vertical={true}
                      avatarSize={50}
                    />
                  </Col>
                  <Col xs={8}>
                    <DataDisplayWidget
                      icon={<CarOutlined   />}
                      value="0.00"
                      title="CAPEX"
                      color="purple"
                      vertical={true}
                      avatarSize={50}
                    />
                  </Col>
                  <Col xs={8}>
                    <DataDisplayWidget
                      icon={<WalletOutlined  />}
                      value="270.000"
                      title="Ganancia Bruta"
                      color="lime"
                      vertical={true}
                      avatarSize={50}
                    />
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab="Febrero 2021" key="2">
              <Row>
                  <Col xs={8}>
                    <DataDisplayWidget
                      icon={<FileDoneOutlined />}
                      value="750.000"
                      title="Ingresos"
                      color="cyan"
                      vertical={true}
                      avatarSize={50}
                      
                    />
                  </Col>
                  <Col xs={8}>
                    <DataDisplayWidget
                      icon={<BarChartOutlined />}
                      value="140.000"
                      title="COGS"
                      color="volcano"
                      vertical={true}
                      avatarSize={50}
                    />
                  </Col>
                  <Col xs={8}>
                    <DataDisplayWidget
                      icon={<TeamOutlined  />}
                      value="300.000"
                      title="Planilla"
                      color="orange"
                      vertical={true}
                      avatarSize={50}
                    />
                  </Col>
                  <Col xs={8}>
                    <DataDisplayWidget
                      icon={<BankOutlined  />}
                      value="120.000"
                      title="SG&A"
                      color="geekblue"
                      vertical={true}
                      avatarSize={50}
                    />
                  </Col>
                  <Col xs={8}>
                    <DataDisplayWidget
                      icon={<CarOutlined   />}
                      value="0.00"
                      title="CAPEX"
                      color="purple"
                      vertical={true}
                      avatarSize={50}
                    />
                  </Col>
                  <Col xs={8}>
                    <DataDisplayWidget
                      icon={<WalletOutlined  />}
                      value="190.000"
                      title="Ganancia Bruta"
                      color="lime"
                      vertical={true}
                      avatarSize={50}
                    />
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab="Marzo 2021" key="3">
              <Row>
                  <Col xs={8}>
                    <DataDisplayWidget
                      icon={<FileDoneOutlined />}
                      value="820.000"
                      title="Ingresos"
                      color="cyan"
                      vertical={true}
                      avatarSize={50}
                      
                    />
                  </Col>
                  <Col xs={8}>
                    <DataDisplayWidget
                      icon={<BarChartOutlined />}
                      value="$6,922"
                      title="COGS"
                      color="volcano"
                      vertical={true}
                      avatarSize={50}
                    />
                  </Col>
                  <Col xs={8}>
                    <DataDisplayWidget
                      icon={<TeamOutlined  />}
                      value="300.000"
                      title="Planilla"
                      color="orange"
                      vertical={true}
                      avatarSize={50}
                    />
                  </Col>
                  <Col xs={8}>
                    <DataDisplayWidget
                      icon={<BankOutlined  />}
                      value="160.000"
                      title="SG&A"
                      color="geekblue"
                      vertical={true}
                      avatarSize={50}
                    />
                  </Col>
                  <Col xs={8}>
                    <DataDisplayWidget
                      icon={<CarOutlined   />}
                      value="140.000"
                      title="CAPEX"
                      color="purple"
                      vertical={true}
                      avatarSize={50}
                    />
                  </Col>
                  <Col xs={8}>
                    <DataDisplayWidget
                      icon={<WalletOutlined  />}
                      value="-80.000"
                      title="Ganancia Bruta"
                      color="lime"
                      vertical={true}
                      avatarSize={50}
                    />
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab="Abril 2021" key="4">
              <Row>
                  <Col xs={8}>
                    <DataDisplayWidget
                      icon={<FileDoneOutlined />}
                      value="460.000"
                      title="Ingresos"
                      color="cyan"
                      vertical={true}
                      avatarSize={50}
                      
                    />
                  </Col>
                  <Col xs={8}>
                    <DataDisplayWidget
                      icon={<BarChartOutlined />}
                      value="150.000"
                      title="COGS"
                      color="volcano"
                      vertical={true}
                      avatarSize={50}
                    />
                  </Col>
                  <Col xs={8}>
                    <DataDisplayWidget
                      icon={<TeamOutlined  />}
                      value="300.000"
                      title="Planilla"
                      color="orange"
                      vertical={true}
                      avatarSize={50}
                    />
                  </Col>
                  <Col xs={8}>
                    <DataDisplayWidget
                      icon={<BankOutlined  />}
                      value="0.00"
                      title="SG&A"
                      color="geekblue"
                      vertical={true}
                      avatarSize={50}
                    />
                  </Col>
                  <Col xs={8}>
                    <DataDisplayWidget
                      icon={<CarOutlined   />}
                      value="0.00"
                      title="CAPEX"
                      color="purple"
                      vertical={true}
                      avatarSize={50}
                    />
                  </Col>
                  <Col xs={8}>
                    <DataDisplayWidget
                      icon={<WalletOutlined  />}
                      value="50.000"
                      title="Ganancia Bruta"
                      color="lime"
                      vertical={true}
                      avatarSize={50}
                    />
                  </Col>
                </Row>
              </TabPane>
            </Tabs>
          </div>
        </div>
      </row>

      <row>
        <ChartWidget
          series={uniqueVisitorsData.series}
          xAxis={uniqueVisitorsData.categories}
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
          series={uniqueVisitorsData2.series}
          xAxis={uniqueVisitorsData2.categories}
          title="Ingresos"
          height={410}
          type="bar"
          customOptions={{
            colors: ["#04d182"],
          }}
        />
      </row>
    </div>
  );
};

export default generalBalance;
