import React from "react";
import { Button, Form, Input, Card, Row, Col} from "antd";
import { MailOutlined } from '@ant-design/icons';

export const RestoreAccount = () => {

    const onRestore = values => {
    };
    
    const FormRestore = () => {
        return (
            <Form 
				layout="vertical" 
				name="restore-form"
				onFinish={onRestore}
			>
				<Form.Item 
					name="email" 
					label="Correo electrónico" 
					rules={[
						{ 
							required: true,
							message: 'Please input your email',
						},
						{ 
							type: 'email',
							message: 'Please enter a validate email!'
						}
					]}>
					<Input prefix={<MailOutlined className="text-primary" />}/>
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit" block>
						Tramitar recuperación
					</Button>
				</Form.Item>
			</Form>
        )
    }

    const backgroundStyle = {
        backgroundImage: 'url(/img/others/img-17.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }

    return (
		<>  
            <div className="h-100" style={backgroundStyle}>
                <div className="container d-flex flex-column justify-content-center h-100">
                    <Row justify="center">
                        <Col xs={20} sm={20} md={20} lg={10}>
                            <Card>
                                <h1>Recuperación de cuenta</h1>
                                <div className="my-4">
                                    <Row justify="center">
                                        <Col xs={24} sm={24} md={20} lg={20}>
                                            <FormRestore/>
                                        </Col>
                                    </Row>
                                </div>
                                <p>Se enviará un correo electrónico a la dirección digitada, favor seguir los pasos mencionados</p>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
		</>
	)
}


export default RestoreAccount