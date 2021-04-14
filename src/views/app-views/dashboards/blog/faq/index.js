import React, { Component } from "react";
import PageHeaderAlt from "components/layout-components/PageHeaderAlt";
import { Input, Row, Col, Card, Collapse } from "antd";
import { SearchOutlined, RightOutlined } from "@ant-design/icons";
import { faqCategories, faqList } from "./faqData";
import YouTube from "react-youtube";
const { Panel } = Collapse;

const newTheme = () => {
  window.location.href = '/app/dashboards/add-blog'
};

export class Faq extends Component {
  state = {
    curentCategory: "faq-1",
  };

  

  render() {
    const { curentCategory } = this.state;
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };
    return (
      <>
        <PageHeaderAlt className="bg-primary" overlap>
          <div className="container text-center">
            <div className="py-lg-4">
              <h1 className="text-white display-4">Blog Informativo</h1>
              <Row type="flex" justify="center">
                <Col xs={24} sm={24} md={12}>
                  <p className="text-white w-75 text-center mt-2 mb-4 mx-auto">
                    Aqui se encuentran temas de ayuda para el uso de esta
                    aplicacion, asi como asuntos sobre educacion financiera.
                  </p>
                </Col>
              </Row>
              <Row type="flex" justify="center" className="mb-5">
                <Col xs={24} sm={24} md={12}>
                  <Input
                    placeholder="Search"
                    prefix={<SearchOutlined type="search" />}
                  />
                </Col>
              </Row>
			  <Row type="flex" justify="center" className="mb-5">
                <Col xs={24} sm={24} md={12}>
				<button type="submit" class="ant-btn mr-2" onClick={() => newTheme()}>
                <span>Nuevo tema</span>
              </button>
			  <button type="submit" class="ant-btn mr-2">
                <span>Editar tema</span>
              </button>
                </Col>
              </Row>
            </div>
          </div>
        </PageHeaderAlt>
        <div className="container my-4">
          <Row gutter={16}>
            {faqCategories.map((elm) => (
              <Col xs={24} sm={24} md={8} key={elm.key}>
                <Card
                  hoverable
                  onClick={() => {
                    this.setState({
                      curentCategory: elm.key,
                    });
                  }}
                >
                  <div className="text-center">
                    <h3 className="mt-4">{elm.title}</h3>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
          <Card className="mt-4">
            <Collapse
              accordion
              defaultActiveKey={"faq-1-1"}
              bordered={false}
              expandIcon={({ isActive }) => (
                <RightOutlined
                  className="text-primary"
                  type="right"
                  rotate={isActive ? 90 : 0}
                />
              )}
            >
              {faqList
                .filter((elm) => elm.id === curentCategory)[0]
                .data.map((elm) => (
                  <Panel header={elm.title} key={elm.key}>
                    <p>{elm.desc}</p>
                  </Panel>
                ))}
            </Collapse>

            <div class="ant-form-item-control-input-content" style={{ width: "75%" }}>
              <YouTube
                videoId="LXb3EKWsInQ"
                opts={opts}
                onReady={this._onReady}
              />
              
            </div>
            <div class="ant-form-item-control-input-content">
              <textarea
                rows="4"
                id="advanced_search_description"
                class="ant-input"
                defaultValue="Hola, gracias por el desarrollo..."
              ></textarea>
            </div>

            <div class="d-md-flex py-2 flex-row align-items-center justify-content-between">
              <button type="submit" class="ant-btn ant-btn-primary">
                <span>Publicar</span>
              </button>
              <button type="button" class="ant-btn mr-2">
                <span>Cancelar</span>
              </button>
            </div>
          </Card>
        </div>
      </>
    );
  }
}

export default Faq;
