import React from "react";
import { Form, Avatar, Button, Input, Row, Col, message, Upload } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { ROW_GUTTER } from "constants/ThemeConstant";
import Flex from "components/shared-components/Flex";

const EditProfile = () => {
  const avatarEndpoint = "https://www.mocky.io/v2/5cc8019d300000980a055e76";
  const [form] = Form.useForm();

  const state = {
    avatarUrl: "/img/avatars/thumb-6.jpg",
    name: "Charlie",
    lastname1: "Howard",
    lastname2: "Wade",
    email: "charlie.howard@themenate.com",
  };

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("Cargando", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const onFinish = (values) => {
    const key = "updatable";
    message.loading({ content: "Cambiando...", key });
    setTimeout(() => {
      form.setFieldsValue({
        name: values.name,
        lastname1: values.lastname1,
        lastname2: values.lastname2,
        email: values.email,
      });
      message.success({ content: "¡Cambios Guardados Correctamente!", key, duration: 2 });
    }, 1000);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onUploadAavater = (info) => {
    const key = "updatable";
    if (info.file.status === "uploading") {
      message.loading({ content: "Cargando...", key, duration: 100 });
      return;
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj, (imageUrl) =>
        form.setFieldsValue({
          avatarUrl: imageUrl,
        })
      );
      message.success({ content: "Cargado!", key, duration: 1.5 });
    }
  };

  const onRemoveAvater = () => {
    form.setFieldsValue({
      avatarUrl: "",
    });
  };

  const { name, lastname1, lastname2, email, avatarUrl } = state;

  return (
    <>
      <Flex
        alignItems="center"
        mobileFlex={false}
        className="text-center text-md-left"
      >
        <Avatar size={90} src={avatarUrl} icon={<UserOutlined />} />
        <div className="ml-3 mt-md-0 mt-3">
          <Upload
            onChange={onUploadAavater}
            showUploadList={false}
            action={avatarEndpoint}
          >
            <Button type="primary">Cambiar Avatar</Button>
          </Upload>
          <Button className="ml-2" onClick={onRemoveAvater}>
            Quitar
          </Button>
        </div>
      </Flex>
      <div className="mt-4">
        <Form
          name="basicInformation"
          layout="vertical"
          initialValues={{
            name: name,
            email: email,
            lastname1: lastname1,
            lastname2: lastname2,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Row>
            <Col xs={24} sm={24} md={24} lg={16}>
              <Row gutter={ROW_GUTTER}>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label="Nombre"
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: "¡Por favor, introduzca su nombre!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label="Primer Apellido"
                    name="lastname1"
                    rules={[
                      {
                        required: true,
                        message: "¡Por favor, introduzca su primer apellido!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label="Segundo Apellido"
                    name="lastname2"
                    rules={[
                      {
                        required: true,
                        message: "¡Por favor, introduzca su segundo apellido!",
                      },
                    ]}
                  >
                    <Input/>
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label="Correo"
                    name="email"
                    rules={[
                      {
                        type: "email",
                        readOnly: true,
                      },
                    ]}
                  >
                    <Input readOnly />
                  </Form.Item>
                </Col>
              </Row>
              <Button type="primary" htmlType="submit">
                Guardar Cambios
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
};

export default EditProfile;
