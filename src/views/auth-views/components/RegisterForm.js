import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, Input, Alert } from "antd";
import { showAuthMessage, showLoading, hideAuthMessage, authenticated } from 'redux/actions/Auth';
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion"

const rules = {
	email: [
		{ 
			required: true,
			message: 'Please input your email address'
		},
		{ 
			type: 'email',
			message: 'Please enter a validate email!'
		}
	],
	password: [
		{ 
			required: true,
			message: 'Please input your password'
		}
	],
	confirm: [
		{ 
			required: true,
			message: 'Please confirm your password!'
		},
		({ getFieldValue }) => ({
			validator(rule, value) {
				if (!value || getFieldValue('password') === value) {
					return Promise.resolve();
				}
				return Promise.reject('Passwords do not match!');
			},
		})
	]
}

export const RegisterForm = (props) => {

	const { showLoading, token, loading, redirect, message, showMessage, hideAuthMessage, authenticated, allowRedirect } = props
	const [form] = Form.useForm();
	let history = useHistory();

	const onSignUp = () => {
    	/*form.validateFields().then(values => {
			showLoading()
			const fakeToken = 'fakeToken'
			JwtAuthService.signUp(values).then(resp => {
				authenticated(fakeToken)
			}).then(e => {
				showAuthMessage(e)
			})
		}).catch(info => {
			console.log('Validate Failed:', info);
		});*/

		document.getElementById('terms-form').hidden = true;
	}

	useEffect(() => {
    	if (token !== null && allowRedirect) {
			history.push(redirect)
		}
		if(showMessage) {
				setTimeout(() => {
				hideAuthMessage();
			}, 3000);
		}
  });
	
	return (
		<>
			<motion.div 
				initial={{ opacity: 0, marginBottom: 0 }} 
				animate={{ 
					opacity: showMessage ? 1 : 0,
					marginBottom: showMessage ? 20 : 0 
				}}> 
				<Alert type="error" showIcon message={message}></Alert>
			</motion.div>
			<Form form={form} layout="vertical" name="register-form" onFinish={onSignUp}>
				<Form.Item 
					name="name" 
					label="Nombre" 
				>
					<Input className="text-primary"/>
				</Form.Item>
				<Form.Item 
					name="lastname" 
					label="Primer Apellido" 
				>
					<Input className="text-primary"/>
				</Form.Item>
				<Form.Item 
					name="secondlastname" 
					label="Segundo Apellido" 
				>
					<Input className="text-primary"/>
				</Form.Item>
				<Form.Item 
					name="email" 
					label="Correo electr??nico" 
					rules={rules.email}
					hasFeedback
				>
					<Input prefix={<MailOutlined className="text-primary" />}/>
				</Form.Item>
				<Form.Item 
					name="password" 
					label="Contrase??a" 
					rules={rules.password}
					hasFeedback
				>
					<Input.Password prefix={<LockOutlined className="text-primary" />}/>
				</Form.Item>
				<Form.Item 
					name="confirm" 
					label="Confirmar contrase??a" 
					rules={rules.confirm}
					hasFeedback
				>
					<Input.Password prefix={<LockOutlined className="text-primary" />}/>
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit" block loading={loading}>
						Registrarse
					</Button>
				</Form.Item>
			</Form>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<Form form={form} layout="vertical" id="terms-form">
				<h3>Aceptaci??n de t??rminos y condiciones</h3>
				<p>Es requisito necesario para la adquisici??n de los productos que se ofrecen en este sitio, que lea y acepte los siguientes T??rminos y Condiciones que a continuaci??n se redactan. El uso de nuestros servicios as?? como la compra de nuestros productos implicar?? que usted ha le??do y aceptado los T??rminos y Condiciones de Uso en el presente documento. Todas los productos  que son ofrecidos por nuestro sitio web pudieran ser creadas, cobradas, enviadas o presentadas por una p??gina web tercera y en tal caso estar??an sujetas a sus propios T??rminos y Condiciones. En algunos casos, para adquirir un producto, ser?? necesario el registro por parte del usuario, con ingreso de datos personales fidedignos y definici??n de una contrase??a.</p>
				<Form.Item>
					<Button type="primary" htmlType="submit" block loading={loading}>
						Aceptar
					</Button>
				</Form.Item>
			</Form>

		</>
	)
}

const mapStateToProps = ({auth}) => {
	const { loading, message, showMessage, token, redirect } = auth;
  return { loading, message, showMessage, token, redirect }
}

const mapDispatchToProps = {
	showAuthMessage,
	hideAuthMessage,
	showLoading,
	authenticated
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)
