import React from "react";
import { Form, Button, Input, Row, Col, message } from "antd";


const ChangeMail = () => {

  const changeMailFormRef = () => {
    React.createRef();
  };

 const onFinish = () => {
    message.success({ content: "Correo cambiado exitosamente. Requerimos la verificación de tu correo electrónico. Por favor revisa tu buzón de correo y sigue las instrucciones enviadas, de lo contrario no se tomaran los cambios realizados",
    duration: 20 });
    onReset();
  };
  
  const onReset = () => {
    changeMailFormRef.current.resetFields();
  };

  return (
    <>
      <h2 className="mb-4">Cambiar Correo</h2>
      <Row>
        <Col xs={24} sm={24} md={24} lg={8}>
          <Form
            name="changeMailForm"
            layout="vertical"
            ref={changeMailFormRef}
            onFinish={onFinish}
          >
            <Form.Item
              label="Nuevo correo"
              name="newMail"
              rules={[
                {
                  type: "email",
                  required: true,
                  message: "¡Por favor, introduzca su correo nuevo! ",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Contraseña Actual"
              name="currentPassword"
              rules={[
                {
                  required: true,
                  message: "¡Por favor, introduzca su contraseña actual!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="Confirme su Contraseña"
              name="confirmPassword"
              rules={[
                {
                  required: true,
                  message: "¡Por favor, confirme su contraseña!",
                },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue("currentPassword") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject("¡La contraseña no coincide!");
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Button type="primary" htmlType="submit">
              Cambiar Correo
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default ChangeMail;