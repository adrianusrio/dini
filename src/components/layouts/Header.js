import React from 'react';
import { Jumbotron, Container} from 'reactstrap';
import Assesment from '../../containers/Assesment';

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

export default Header