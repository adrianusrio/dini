import React from 'react';
import Header from '../layouts/Header'
import { Jumbotron, Container, Col, Row, Card, CardHeader, CardBody } from 'reactstrap';

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
						{props.whoWheAre.text.map((object,i) => 
							<p className="text-justify" key={i}>
								{object[i]}
							</p>
						)}
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
				{props.whoWheAre.text.map((object,i) => 
					<p className="text-justify" key={i}>
						{object[i]}
					</p>
				)}
			</Container>
		)
	}
	// return(
	// 	<p>asd</p>
	// )
	
	
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

// const Timeline = () => {
// 	return(
// 		<Container fluid style={{ lineHeight:"18px"}}>
// 			<div className="col-md-12  text-center">
// 				<h3><b>PROGRAM STIMULASI SAMBIL BERMAIN DAN BELAJAR</b></h3>
// 				<p>
// 					Program stimulasi disusun dengan metode khusus yang dirancang oleh para profesional. Bermain dan belajar jadi menyenangkan dengan aktivitas playtime yang dikemas dalam bentuk aktivitas bermain. Terdapat 2 pilihan sesi, pagi (10:00-13:00) dan sesi siang (14:00-17:00).
// 				</p>
// 			</div>
// 			<div className="d-flex position-relative">
// 				<Card style={{ width: "50%" }} className="mx-4">
// 					<CardHeader style={{ backgroundColor: "#f16530" }}><h4 className="text-center text-white">Hi Hello Baby Class</h4></CardHeader>
// 					<CardBody className="pb-0">
// 						<p className="mb-0">
// 							<b>Usia 0-12 bulan:</b> Menstimulasi kebutuhan, kemampuan, dan sensitifitas pada bayi <b>|</b> Melatih bagaimana orang tua memiliki interaksi yang baik terhadap bayi, terutama eye contact dan respon <b>|</b> Melatih kemampuan motorik halus dan kasar <b>|</b> Memberikan stimulasi dini melalui pengalaman sensori pada bayi.
// 						</p>
// 						<table className="table table-borderless mb-0">
// 							<tbody>
// 								<tr>
// 									<td>
// 										<img src={require('../../images/foto-kelas/thumb/0-1.jpg')} className="img-fluid" alt="kelas 0_1" />
// 									</td>
// 									<td>
// 										<img src={require('../../images/foto-kelas/thumb/0-2.jpg')} className="img-fluid" alt="kelas 0_2" />
// 									</td>
// 									<td>
// 										<img src={require('../../images/foto-kelas/thumb/0-3.jpg')} className="img-fluid" alt="kelas 0_3" />
// 									</td>
// 								</tr>
// 							</tbody>
// 						</table>
// 					</CardBody>
// 				</Card>
// 				<div className="circle circle-0">
// 					<p>0</p>
// 				</div>
// 				<div className="link link-0"></div>
// 				<Card style={{ width: "50%", border:"none" }} className="mx-4">
// 					<CardBody>
// 						<h4>HARGA UNTUK 8x PERTEMUAN @3JAM <br/>MULAI DARI Rp. 1.200.000,-/BULAN</h4>
// 					</CardBody>
// 				</Card>
// 			</div>
// 			<div className="d-flex position-relative" style={{ top: "-150px"}}>
// 				<div style={{ width: "50%", border:"none" }} className="mx-4">

// 				</div>
// 				<div className="circle circle-1">
// 					<p>1</p>
// 				</div>
// 				<div className="link link-1"></div>
// 				<Card style={{ width: "50%" }} className="mx-4">
// 					<CardHeader style={{ backgroundColor: "#f16530" }}><h4 className="text-center text-white">Hi Hello Baby Class</h4></CardHeader>
// 					<CardBody className="pb-0">
// 						<p className="mb-0">
// 							<b>Usia 0-12 bulan:</b> Menstimulasi kebutuhan, kemampuan, dan sensitifitas pada bayi <b>|</b> Melatih bagaimana orang tua memiliki interaksi yang baik terhadap bayi, terutama eye contact dan respon <b>|</b> Melatih kemampuan motorik halus dan kasar <b>|</b> Memberikan stimulasi dini melalui pengalaman sensori pada bayi.
// 						</p>
// 						<table className="table table-borderless mb-0">
// 							<tbody>
// 								<tr>
// 									<td>
// 										<img src={require('../../images/foto-kelas/thumb/0-1.jpg')} className="img-fluid" alt="kelas 0_1" />
// 									</td>
// 									<td>
// 										<img src={require('../../images/foto-kelas/thumb/0-2.jpg')} className="img-fluid" alt="kelas 0_2" />
// 									</td>
// 									<td>
// 										<img src={require('../../images/foto-kelas/thumb/0-3.jpg')} className="img-fluid" alt="kelas 0_3" />
// 									</td>
// 								</tr>
// 							</tbody>
// 						</table>
// 					</CardBody>
// 				</Card>
// 			</div>
// 			<div className="d-flex position-relative" style={{ bottom: "255px"}}>
// 				<Card style={{ width: "50%" }} className="mx-4">
// 					<CardHeader style={{ backgroundColor: "#f16530" }}><h4 className="text-center text-white">Hi Hello Baby Class</h4></CardHeader>
// 					<CardBody className="pb-0">
// 						<p className="mb-0">
// 							<b>Usia 0-12 bulan:</b> Menstimulasi kebutuhan, kemampuan, dan sensitifitas pada bayi <b>|</b> Melatih bagaimana orang tua memiliki interaksi yang baik terhadap bayi, terutama eye contact dan respon <b>|</b> Melatih kemampuan motorik halus dan kasar <b>|</b> Memberikan stimulasi dini melalui pengalaman sensori pada bayi.
// 						</p>
// 						<table className="table table-borderless mb-0">
// 							<tbody>
// 								<tr>
// 									<td>
// 										<img src={require('../../images/foto-kelas/thumb/0-1.jpg')} className="img-fluid" alt="kelas 0_1" />
// 									</td>
// 									<td>
// 										<img src={require('../../images/foto-kelas/thumb/0-2.jpg')} className="img-fluid" alt="kelas 0_2" />
// 									</td>
// 									<td>
// 										<img src={require('../../images/foto-kelas/thumb/0-3.jpg')} className="img-fluid" alt="kelas 0_3" />
// 									</td>
// 								</tr>
// 							</tbody>
// 						</table>
// 					</CardBody>
// 				</Card>
// 				<div className="circle circle-2">
// 					<p>2</p>
// 				</div>
// 				<div className="link link-2"></div>
// 				<div style={{ width: "50%", border:"none" }} className="mx-4">

// 				</div>
// 			</div>
// 			<div className="d-flex position-relative" style={{ bottom: "410px"}}>
// 				<div style={{ width: "50%", border:"none" }} className="mx-4">

// 				</div>
// 				<div className="circle circle-3">
// 					<p>3</p>
// 				</div>
// 				<div className="link link-3"></div>
// 				<Card style={{ width: "50%" }} className="mx-4">
// 					<CardHeader style={{ backgroundColor: "#f16530" }}><h4 className="text-center text-white">Hi Hello Baby Class</h4></CardHeader>
// 					<CardBody className="pb-0">
// 						<p className="mb-0">
// 							<b>Usia 0-12 bulan:</b> Menstimulasi kebutuhan, kemampuan, dan sensitifitas pada bayi <b>|</b> Melatih bagaimana orang tua memiliki interaksi yang baik terhadap bayi, terutama eye contact dan respon <b>|</b> Melatih kemampuan motorik halus dan kasar <b>|</b> Memberikan stimulasi dini melalui pengalaman sensori pada bayi.
// 						</p>
// 						<table className="table table-borderless mb-0">
// 							<tbody>
// 								<tr>
// 									<td>
// 										<img src={require('../../images/foto-kelas/thumb/0-1.jpg')} className="img-fluid" alt="kelas 0_1" />
// 									</td>
// 									<td>
// 										<img src={require('../../images/foto-kelas/thumb/0-2.jpg')} className="img-fluid" alt="kelas 0_2" />
// 									</td>
// 									<td>
// 										<img src={require('../../images/foto-kelas/thumb/0-3.jpg')} className="img-fluid" alt="kelas 0_3" />
// 									</td>
// 								</tr>
// 							</tbody>
// 						</table>
// 					</CardBody>
// 				</Card>
// 			</div>
// 			<div className="d-flex position-relative" style={{ bottom: "510px"}}>
// 				<Card style={{ width: "50%" }} className="mx-4">
// 					<CardHeader style={{ backgroundColor: "#f16530" }}><h4 className="text-center text-white">Hi Hello Baby Class</h4></CardHeader>
// 					<CardBody className="pb-0">
// 						<p className="mb-0">
// 							<b>Usia 0-12 bulan:</b> Menstimulasi kebutuhan, kemampuan, dan sensitifitas pada bayi <b>|</b> Melatih bagaimana orang tua memiliki interaksi yang baik terhadap bayi, terutama eye contact dan respon <b>|</b> Melatih kemampuan motorik halus dan kasar <b>|</b> Memberikan stimulasi dini melalui pengalaman sensori pada bayi.
// 						</p>
// 						<table className="table table-borderless mb-0">
// 							<tbody>
// 								<tr>
// 									<td>
// 										<img src={require('../../images/foto-kelas/thumb/0-1.jpg')} className="img-fluid" alt="kelas 0_1" />
// 									</td>
// 									<td>
// 										<img src={require('../../images/foto-kelas/thumb/0-2.jpg')} className="img-fluid" alt="kelas 0_2" />
// 									</td>
// 									<td>
// 										<img src={require('../../images/foto-kelas/thumb/0-3.jpg')} className="img-fluid" alt="kelas 0_3" />
// 									</td>
// 								</tr>
// 							</tbody>
// 						</table>
// 					</CardBody>
// 				</Card>
// 				<div className="circle circle-4">
// 					<p>4</p>
// 				</div>
// 				<div className="link link-4"></div>
// 				<div style={{ width: "50%", border:"none" }} className="mx-4">

// 				</div>
// 			</div>
// 		</Container>
// 	)
// }


const Timeline = () => {
	return(
		<Container fluid style={{ lineHeight:"18px"}}>
			<div className="col-md-12  text-center">
				<h3><b>PROGRAM STIMULASI SAMBIL BERMAIN DAN BELAJAR</b></h3>
				<p>
					Program stimulasi disusun dengan metode khusus yang dirancang oleh para profesional. Bermain dan belajar jadi menyenangkan dengan aktivitas playtime yang dikemas dalam bentuk aktivitas bermain. Terdapat 2 pilihan sesi, pagi (10:00-13:00) dan sesi siang (14:00-17:00).
				</p>
			</div>
			<Row>
				<Col md={5} lg={5}>
					<Card>
						<CardHeader style={{ backgroundColor: "#f16530" }}><h4 className="text-center text-white">Hi Hello Baby Class</h4></CardHeader>
						<CardBody>
							<p className="mb-0">
								<b>Usia 0-12 bulan:</b> Menstimulasi kebutuhan, kemampuan, dan sensitifitas pada bayi <b>|</b> Melatih bagaimana orang tua memiliki interaksi yang baik terhadap bayi, terutama eye contact dan respon <b>|</b> Melatih kemampuan motorik halus dan kasar <b>|</b> Memberikan stimulasi dini melalui pengalaman sensori pada bayi.
							</p>
							<table className="table table-borderless mb-0">
								<tbody>
									<tr>
										<td>
											<img src={require('../../images/foto-kelas/thumb/0-1.jpg')} className="img-fluid" alt="kelas 0_1" />
										</td>
										<td>
											<img src={require('../../images/foto-kelas/thumb/0-2.jpg')} className="img-fluid" alt="kelas 0_2" />
										</td>
										<td>
											<img src={require('../../images/foto-kelas/thumb/0-3.jpg')} className="img-fluid" alt="kelas 0_3" />
										</td>
									</tr>
								</tbody>
							</table>
						</CardBody>
					</Card>
				</Col>
				<Col md={7} lg={7}>
					<div className="circle circle-0">
						<p>0</p>
					</div>
	 				<div className="link link-0"></div>
					<Card style={{ width: "50%", border:"none" }} className="mx-4">
	 					<CardBody>
	 						<h4>HARGA UNTUK 8x PERTEMUAN @3JAM <br/>MULAI DARI Rp. 1.200.000,-/BULAN</h4>
	 					</CardBody>
	 				</Card>
				</Col>
			</Row>
		</Container>
	)
}
const Activity = () => {
	return(
		<Container>
			<h3 className="text-center"><b>ASPEK DAN TEMA AKTIFITAS PLAYTIME</b></h3>
			<Row>
				<Col md={6} lg={6}>
					<img src={require('../../images/kelas-1.png')} alt="kelas 1" className="img-fluid"/>
				</Col>
				<Col md={6} lg={6}>
					<img src={require('../../images/kelas-1.png')} alt="kelas 1" className="img-fluid"/>
				</Col>
			</Row>
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
			<Timeline></Timeline>
			<Activity></Activity>
        </React.Fragment>
    )
}


export default Content