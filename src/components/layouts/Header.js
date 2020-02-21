import React from 'react';
import { Jumbotron, Container, Col, Button, Form, FormGroup, Input } from 'reactstrap';

const Header = (props) =>{
	return(
		<Jumbotron fluid className={ props.heading.bannerClass }>
			<Container fluid className="text-center p-5" style={{     backgroundColor: "rgb(0,0,0, 0.2)" }}>
				<h1 className="text-white" style={{ fontSize: "2rem"}}>{ props.heading.h1 }</h1>
				<h2 className="text-white" style={{ fontSize: "1.5rem"}}>{ props.heading.h2 }</h2>
			</Container>
			<Assesment></Assesment>
		</Jumbotron>
	)
}

const Assesment = () => {
	return(
		<Container className="pt-2 text-center" style={{ backgroundColor: "rgb(0,0,0, 0.4)", position:"relative", top:"25%", borderRadius: "15px" }}>
			<h4 className="text-white" >Dapatkan Tumbuh Kembang Anak Gratis</h4>
			<Form className="assesment mt-4">
				<FormGroup row>
					<Col sm={3} md={3} lg={3}>
						<Input type="text" name="profile[Parent][Name]" id="parentName" placeholder="Nama Orang Tua" className="mb-2" />
						<Input type="text" name="profile[Child][Name]" id="childName" placeholder="Nama Anak" className="mb-2" />
					</Col>
					<Col sm={4} md={4} lg={4}>
						<Input type="number" name="profile[Parent][Phone]" id="phoneNumber" placeholder="No Telp Whatsapp" className="mb-2"/>
						<Col sm={4} md={4} lg={4} style={{ display:"inline-block"}} className="pl-0 pr-2">
							<Input type="text" name="tanggal" id="tanggal" placeholder="password placeholder" />
						</Col>
						<Col sm={4} md={4} lg={4} style={{ display:"inline-block"}} className="pl-0 pr-2">
							<Input type="text" name="bulan" id="bulan" placeholder="password placeholder" />
						</Col>
						<Col sm={4} md={4} lg={4} style={{ display:"inline-block"}} className="pl-0 pr-0">
							<Input type="text" name="tahun" id="tahun" placeholder="password placeholder" />
						</Col>
						
					</Col>
					<Col sm={5} md={5} lg={5}>
						<Col sm={6} md={6} lg={6} style={{ display:"inline-block"}} className="pl-0 pr-2 mb-2">
							<Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
						</Col>
						<Col sm={6} md={6} lg={6} style={{ display:"inline-block"}} className="pl-0 pr-2 mb-2">
							<Input type="email" name="email" id="exampleEmail1" placeholder="with a placeholder" />
						</Col>
						<Col sm={8} md={8} lg={8} style={{ display:"inline-block"}} className="pl-0">
							<FormGroup check inline className="ml-1">
								<Input type="radio" style={{ transform: "scale(2)" }} /> Laki - Laki
							</FormGroup>
							<FormGroup check inline className="ml-1">
								<Input type="radio" style={{ transform: "scale(2)" }}/> Perempuan
							</FormGroup>
						</Col>
						<Col sm={4} md={4} lg={4} style={{ display:"inline-block"}} className="text-right">
							<Button style={{backgroundColor: '#349896'}}>Submit</Button>	
						</Col>
					</Col>
				</FormGroup>
			</Form>
		</Container>
	)
}


export default Header