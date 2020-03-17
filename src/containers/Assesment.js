import React from 'react';
import { Container, Col, Button, Form, FormGroup, Input } from 'reactstrap';
import axios from 'axios';

class Assesment extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dataAssesment : {
                ParentName : '',
                ChildName : '',
                Phone : '',
                BirthDate : '',
                BirthMonth : '',
                BirthYear : '',
                City : '',
                Email : '',
                Sex : ''
            }
        }
    }

    handleChange = (event) => {
        const value = event.target.value;
        this.setState({
            dataAssesment: {
                ...this.state.dataAssesment,
                [event.target.name]: value
            }
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const data = this.state.dataAssesment;
        const token = '101-token';
        const headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With',
            'Access-Control-Allow-Methods': 'GET, PUT, POST',
            // 'Authorization': `Bearer ${token}`
        }
        axios.post(`http://localhost/yiirestapi/v1/user`, { data }, {headers})
        .then(res => {
            console.log(res.data);
            alert('success');
            this.setState({
                dataAssesment: {
                    ParentName : '',
                    ChildName : '',
                    Phone : '',
                    BirthDate : '',
                    BirthMonth : '',
                    BirthYear : '',
                    City : '',
                    Email : '',
                    Sex : ''
                }
            });
        })
        .catch(error => {
            console.log(error)
        });
    }

    render(){
        return(
            <Container className="pt-2 text-center" style={{ backgroundColor: "rgb(0,0,0, 0.4)", position:"relative", top:"25%", borderRadius: "15px" }}>
                <h4 className="text-white" >Dapatkan Tumbuh Kembang Anak Gratis</h4>
                <Form className="assesment mt-4" onSubmit={this.handleSubmit}>
                    <FormGroup row>
                        <Col sm={3} md={3} lg={3}>
                            <Input type="text" name="ParentName" id="parentName" placeholder="Nama Orang Tua" className="mb-2" onChange={this.handleChange} value={this.state.dataAssesment.ParentName} />
                            <Input type="text" name="ChildName" id="childName" placeholder="Nama Anak" className="mb-2" onChange={this.handleChange} value={this.state.dataAssesment.ChildName} />
                        </Col>
                        <Col sm={4} md={4} lg={4}>
                            <Input type="number" name="Phone" id="phoneNumber" placeholder="No Telp Whatsapp" className="mb-2" onChange={this.handleChange} value={this.state.dataAssesment.Phone} />
                            <Col sm={4} md={4} lg={4} style={{ display:"inline-block"}} className="pl-0 pr-2">
                                <Input type="select" name="BirthDate" id="birthdaydate" onChange={this.handleChange} value={this.state.dataAssesment.BirthDate} >
                                    <option value="">Tanggal Lahir</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </Input>
                            </Col>
                            <Col sm={4} md={4} lg={4} style={{ display:"inline-block"}} className="pl-0 pr-2">
                                <Input type="select" name="BirthMonth" id="birthdaymonth" onChange={this.handleChange} value={this.state.dataAssesment.BirthMonth} >
                                    <option value="">Bulan</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </Input>
                            </Col>
                            <Col sm={4} md={4} lg={4} style={{ display:"inline-block"}} className="pl-0 pr-0">
                            <Input type="select" name="BirthYear" id="birthdayyear" onChange={this.handleChange} value={this.state.dataAssesment.BirthYear} >
                                    <option value="">Tahun</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </Input>
                            </Col>
                            
                        </Col>
                        <Col sm={5} md={5} lg={5}>
                            <Col sm={6} md={6} lg={6} style={{ display:"inline-block"}} className="pl-0 pr-2 mb-2">
                                <Input type="text" name="City" id="city" placeholder="Kota" onChange={this.handleChange} value={this.state.dataAssesment.City}/>
                            </Col>
                            <Col sm={6} md={6} lg={6} style={{ display:"inline-block"}} className="pl-0 pr-2 mb-2">
                                <Input type="email" name="Email" id="email" placeholder="Email" onChange={this.handleChange} value={this.state.dataAssesment.Email} />
                            </Col>
                            <Col sm={8} md={8} lg={8} style={{ display:"inline-block"}} className="pl-0">
                                <FormGroup check inline className="ml-1">
                                    <Input type="radio" style={{ transform: "scale(2)" }} name="Sex" value="L" onChange={this.handleChange} checked={this.state.dataAssesment.Sex === 'L'}  /> Laki - Laki
                                </FormGroup>
                                <FormGroup check inline className="ml-1">
                                    <Input type="radio" style={{ transform: "scale(2)" }} name="Sex" value="P" onChange={this.handleChange} checked={this.state.dataAssesment.Sex === 'P'} /> Perempuan
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
}

export default Assesment;