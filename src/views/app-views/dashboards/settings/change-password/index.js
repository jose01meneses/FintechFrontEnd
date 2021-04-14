import React from "react";
import { Form, Button, Input, Row, Col, message } from "antd";

const ChangePassword = () => {
  const changePasswordFormRef = () => {
    React.createRef();
  };

  const onFinish = () => {
    message.success({
      content: "Contraseña cambiada exitosamente!",
      duration: 2,
    });
    onReset();
  };

  const onReset = () => {
    changePasswordFormRef.current.resetFields();
  };

  return (
    <>
      <h2 className="mb-4">Cambiar Contraseña</h2>
      <Row>
        <Col xs={24} sm={24} md={24} lg={8}>
          <Form
            name="changePasswordForm"
            layout="vertical"
            ref={changePasswordFormRef}
            onFinish={onFinish}
          >
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
              label="Nueva Contraseña"
              name="newPassword"
              rules={[
                {
                  required: true,
                  message: "¡Por favor, introduzca su nueva contraseña!",
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
                    if (!value || getFieldValue("newPassword") === value) {
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
              Cambiar Contraseña
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default ChangePassword;
