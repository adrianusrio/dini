import React from 'react';
import Header from '../layouts/Header'
import { Jumbotron, Container, Col, Row } from 'reactstrap';

const HowWeWork = () => {
	return(
		<Container fluid className="text-center" style={{ paddingTop:"5rem"}}>
			<Row>
				<Col md={2} lg={2} className="offset-md-1">
					<img 
					src='https://dini.id/images/how-we-work/assessment.png' 
					className="d-inline-block mb-3" 
					alt="React Bootstrap logo" 
					style= {{ maxWidth:"60px"}}
					/>
					<p className="mb-1"><b>Online Free Assessment</b></p>
					<p style={{lineHeight:'18px'}}>Untuk melihat apakah perkembangan anak secara umum telah mencapai tahap optimal sesuai dengan usianya</p>
				</Col>
				<Col md={2} lg={2}>
					<img 
					src='https://dini.id/images/how-we-work/observasi.png' 
					className="d-inline-block mb-3" 
					alt="React Bootstrap logo" 
					style= {{ maxWidth:"60px"}}
					/>
					<p className="mb-1"><b>Observasi Tim Ahli</b></p>
					<p style={{lineHeight:'18px'}}>Kunjungi playground terdekat yang telah bekerjasama dengan kami, untuk observasi lanjutan oleh tim ahli</p>
				</Col>
				<Col md={2} lg={2}>
					<img 
					src='https://dini.id/images/how-we-work/stimulasi.png' 
					className="d-inline-block mb-3" 
					alt="React Bootstrap logo" 
					style= {{ maxWidth:"60px"}}
					/>
					<p className="mb-1"><b>Program Stimulasi & Intervensi</b></p>
					<p style={{lineHeight:'18px'}}>Orang tua ikut terlibat langsung sehingga memiliki interaksi yang baik dengan anak dan dapat membangun ikatan yang kuat</p>
				</Col>
				<Col md={2} lg={2}>
					<img 
					src='https://dini.id/images/how-we-work/assessment-berkala.png' 
					className="d-inline-block mb-3" 
					alt="React Bootstrap logo" 
					style= {{ maxWidth:"60px"}}
					/>
					<p className="mb-1"><b>Assessment Berkala</b></p>
					<p style={{lineHeight:'18px'}}>Assessment dilakukan secara periodik sehingga hasil termonitor dan program lanjutan dapat disesuaikan</p>
				</Col>
				<Col md={2} lg={2}>
					<img 
					src='https://dini.id/images/how-we-work/program.png' 
					className="d-inline-block mb-3" 
					alt="React Bootstrap logo" 
					style= {{ maxWidth:"60px"}}
					/>
					<p className="mb-1"><b>Program Lanjutan </b></p>
					<p style={{lineHeight:'18px'}}>Assessment berkala akan ditidak lanjuti dengan program lanjutan yang disesuaikan dengan kebutuhan setiap individu anak</p>
				</Col>
			</Row>
		</Container>
	)
}

const WhoWeAre = (props) => {
	if(props.whoWheAre.video !== undefined){
		return(
			<Container>
				<Row>
					<Col md={8} lg={8}>
						<p className="text-justify" >
							{props.whoWheAre.text}
						</p>
					</Col>
					<Col md={4} lg={4}>
						<iframe width="auto" height="150"src={props.whoWheAre.video} title="video"></iframe>
					</Col>
				</Row>
			</Container>
		)
	}else{
		return(
			<Container>
				<p className="text-justify" >
					{props.whoWheAre.text}
				</p>
			</Container>
		)
	}
	
	
}

const OurTeam = () => {
	return(
		<Jumbotron fluid className="banner-team text-white py-4">
			<Container fluid className="px-5">
				<Row>
					<Col md={6} lg={6} sm={6}>
						<h4>DR. dr. Dwidjo Saputro, SpKJ (K)</h4>
						<ul className="pl-0">
							<li >International Member of American Academy of Child and Adolescent Psychiatry</li>
							<li >Executive Committee / President Asian Society for Child <br/>and Adolescent Psychiatry and Allied Professions (ASCAPAP)</li>
							<li >Founder/Past President of IACAMH/AKESWARI (Indonesian <br/> Association for Child and Adolescence Mental Health)</li>
							<li >Member of World Federation of Biological Psychiatry</li>
							<li >Member of IDI (Indonesian Medical Association)</li>
							<li >Member of PDSKJI (Indonesian Psychiatric Association)</li>
						</ul>
					</Col>
					<Col md={6} lg={6} sm={6} className="text-right profile-team">
						<Col>
							<h4>dr. Anggia Hapsari, SpKJ (K)</h4>
							<ul className="pl-0">
								<li>Subspecialist Child and Adolescents - Psychiatry Department University of Indonesia</li>
								<li>Psychiatry specialist (Child &amp; Adolescent Psychiatry Consultant)</li>
								<li>European College of Neuropsychopharmacology (ECNP) 26th Congress, Barcelona</li>
								<li>Training in Mood Disorder "Solving The Puzzle of The Brain", Seoul, Korea</li>
								<li>American Psychiatric Association Annual Meeting, New York, United States</li>
								<li>Managing Autism Spectrum Disorder, Speaker, Akeswari, Solo</li>
								<li>Author - Pendidikan Seksual Dini pada Anak</li>
								<li>Author - Psychopathology of Mother with ADHD Child's</li>
							</ul>
						</Col>
						<Col>
							<h4>Anggita Hapsari, BA, MPsi, Psikolog</h4>
							<ul className="pl-0">
								<li>Graduated Master of Child Clinical Psychology – University of Indonesia</li>
								<li>Graduated from Massey University – Bachelor of Arts, Major in Psychology</li>
								<li>Child &amp; Adolescent Clinical Psychologist at SmartKid Clinic</li>
								<li>Child &amp; Adolescent Clinical Psychologist at AP&amp;AP Clinic</li>
								<li>Founder &amp; Consultant LYFE – Life &amp; Youth Form Empowered Generation</li>
								<li>Certified Theraplay, EMDR, &amp; DIR Floor Time</li>
								<li>Founder &amp; Consultant Cedar World Academy Preschool</li>
							</ul>
						</Col>
					</Col>
				</Row>
			</Container>
		</Jumbotron>
	)
}

const Description = (props) => {
	return(
		<Container dangerouslySetInnerHTML={{__html: props.description.text}}>
			{/* <p>
				Jika Anda mencari cara sederhana dan menyenangkan untuk menghabiskan waktu bersama anak-anak Anda, sambil membantu mereka tumbuh dan belajar, Anda telah datang ke tempat yang tepat. Stimulasi dini ini telah dirancang untuk membantu perkembangan anak mencapai tahapan yang optimal dengan cara bermain dan belajar yang menyenangkan.
			</p>
			<p>
				Tim Dini.id berfokus pada aspek-aspek dasar dari penilaian perkembangan umum anak-anak pada setiap tahapan usianya. Tim kami akan memberikan stimulasi sesuai perkembangan usia anak dan mengamati bagaimana anak Anda tumbuh dan berubah seiring waktu dan apakah anak Anda memenuhi tonggak perkembangan yang khas dalam bermain, belajar, berbicara, berperilaku, dan bergerak.
			</p>
			<p>
				Penilaian perkembangan untuk anak di usia 0-6 tahun adalah upaya untuk menilai berbagai aspek fungsi anak, termasuk bidang-bidang seperti kognitif, komunikasi, perilaku, interaksi sosial, kemampuan motorik dan sensorik, dan keterampilan adaptif. Penilaian keluarga dan lingkungan anak juga memberikan informasi kontekstual yang penting. Untuk mempermudah para orangtua maka kami memberikan free assessment pada tahap awal berupa skrining perkembangan untuk melihat lebih dekat bagaimana perkembangan anak Anda.
			</p> */}
		</Container>
	)
}

const Content = (props) => {
    return(
        <React.Fragment>
			<Header heading={props.headingHeader}/>
            <HowWeWork />
            <WhoWeAre whoWheAre={props.whoWeAreContent}/>
            <OurTeam />
            <Description description={props.descContent}/>
        </React.Fragment>
    )
}

export default Content