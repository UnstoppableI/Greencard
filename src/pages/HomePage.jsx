import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPhoneAlt, FaEnvelope, FaCalendarAlt, FaShieldAlt, FaSyncAlt, FaUserAlt } from 'react-icons/fa'
import BuilderPageImage from '../assets/builder-page.png';
import '../styles/HomePage.css';
import LibertyImage from '../assets/liberty-bg.webp';
import CapsuleSection from '../components/CapsuleSection';
import PricingPlans from '../components/PricingPlans';
import FAQAccordion from '../components/FAQAccordion';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <Container className='bg-img'>
        < CapsuleSection />
          <div className='mask  d-flex justify-content-center flex-column text-center'>
            {/* <img src={LibertyImage} alt="" className='w-100' /> */}
            <h1 style={{fontSize:'60px'}}>Your Green Card Dream,<br /> Now Within Reach</h1>
            <p>Self-sponsor Your EB-1A Extraordinary Ability Green Card<br></br> With AI-Powered Expertise</p>
          </div>
            <div style={{ margin: '20px 0' }}>
            <Button variant="primary" style={{ margin: '0 10px' , backgroundColor:'#098938'}}>Get Started</Button>
            <Button variant="secondary" style={{ margin: '0 10px' }}>Book A Free Consultation</Button>
          </div>
        </Container>
      </section>

      {/* Cards Section */}
      <section className="cards-section" style={{ padding: '50px 0' }}>
        <Container>
            <div className='card-title' style={{textAlign:'center'}}>Problem</div>
            <h1 style={{textAlign: 'center'}}>Don't Let Outdated Processes and Employer<br/> Dependence Hold You Back.</h1>
          <Row style={{padding: '24px'}}>
            <Col md={4}>
              <Card style={{ textAlign: 'center', marginBottom: '30px' }}>
                <Card.Body>
                <FaShieldAlt size={40} style={{ color: '#098938', position: 'absolute', left: 5, top: 5, opacity:0.5 }} />
                  <Card.Title>Decades-Long Wait Times</Card.Title>
                  <Card.Text>Reach out to our team for personalized support and guidance.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card style={{ textAlign: 'center', marginBottom: '30px' }}>
                <Card.Body>
                  <FaEnvelope size={40} style={{ color: '#098938', position: 'absolute', left: 5, top: 5, opacity:0.5 }} />
                  <Card.Title>Employer Dependency</Card.Title>
                  <Card.Text>Send us an email with your queries and we'll get back to you promptly.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card style={{ textAlign: 'center', marginBottom: '30px' }}>
                <Card.Body>
                  <FaCalendarAlt size={40} style={{ color: '#098938', position: 'absolute', left: 5, top: 5, opacity:0.5 }} />
                  <Card.Title>Job Security Anxiety</Card.Title>
                  <Card.Text>Schedule a consultation with our experts to discuss your case.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

        {/* Two Column Section */}
      <section className="two-column-section" style={{ padding: '50px 0' }}>
         <div style={{padding:'50px'}}>   
            <div className='card-title' style={{textAlign:'center'}}>Solution</div>
            <h1 style={{textAlign: 'center'}}>Empower Your American Dream</h1>
            <p style={{textAlign: 'center'}}>We analyze your profile and streamline application processes, empowering you to qualify for the EB1-A Green Card and secure your future in the U.S.</p>
          </div>
        <Container>
          <Row>
            <Col md={8}>
              <Row>
                
                <Col md={6}>
                  <Card style={{ textAlign: 'center', marginBottom: '30px' }}>
                    <Card.Body>
                      <Card.Title>Professional Support</Card.Title>
                      <Card.Text>Meet our dedicated team of immigration experts and innovators, committed to reshaping the EB-1A landscape with cutting-edge AI. Discover our journey and vision for revolutionizing immigration processes.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card style={{ textAlign: 'center', marginBottom: '30px' }}>
                    <Card.Body>
                      <Card.Title>Secure Data Handling</Card.Title>
                      <Card.Text>We prioritize your data security with state-of-the-art encryption and strict privacy protocols, ensuring your information remains confidential.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Card style={{ textAlign: 'center', marginBottom: '30px' }}>
                <Card.Body>
                  <Card.Title>Seamless Integration</Card.Title>
                  <Card.Text>Easily integrate our AI solutions into your existing workflows and systems for a smooth and efficient operation.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card style={{ textAlign: 'center', marginBottom: '30px' }}>
                <Card.Body>
                  <Card.Title>Personalized AI Assistant</Card.Title>
                  <Card.Text>Tailored AI Assistant to your specific profile with flexible customization options, allowing you to get the most out of our platform.</Card.Text>
                </Card.Body>
              </Card>
              <img src={BuilderPageImage} alt="Descriptive Alt Text" style={{ width: '100%', marginTop: '20px' }} />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <Container>
        <div className='card-title' style={{textAlign:'center'}}>How It Works</div>
          <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Just 3 steps to get started</h1>
          <Row>
            <Col md={6}>
              <Card style={{ textAlign: 'left', marginBottom: '30px' }}>
                <Card.Body>
                  <div style={{ position: 'relative' }}>
                    <FaShieldAlt size={40} style={{ color: '#098938', position: 'absolute', left: 0, top: 0, opacity: 0.2 }} />
                    <Card.Title>1. Onboarding</Card.Title>
                  </div>
                  <Card.Text>Start by completing our easy-to-follow questionnaire and securely upload your documents. Our platform ensures accountability and smooth integration for your existing evidence and evidence which you will be building with us, so you can kick off your EB-1A journey effortlessly.</Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ textAlign: 'left', marginBottom: '30px' }}>
                <Card.Body>
                  <div style={{ position: 'relative' }}>
                    <FaShieldAlt size={40} style={{ color: '#098938', position: 'absolute', left: 0, top: 0, opacity: 0.2 }} />
                    <Card.Title>2. Setup a free consulation</Card.Title>
                  </div>
                  <Card.Text>Schedule a free consultation call with our experts. During the call, we'll walk you through the process, discuss your qualifications, and guide you on how to best prepare for your EB-1A application.</Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ textAlign:'left', marginBottom: '30px' }}>
                <Card.Body>
                  <div style={{ position: 'relative' }}>
                    <FaSyncAlt size={40} style={{ color: '#098938', position: 'absolute', left: 0, top: 0, opacity: 0.2 }} />
                    <Card.Title>3. Build your EB-1A profile</Card.Title>
                  </div>
                  <Card.Text>Use our platform’s intuitive tools to create a compelling EB-1A profile. Our professnial expert recommendations will guide you in organizing your achievements, helping you stay on track throughout the process.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <img src={BuilderPageImage} alt="Descriptive Alt Text" style={{ width: '100%' }} />
            </Col>
          </Row>
        </Container>
      </section>

       {/* Customer Reviews Section */}
       <section className="customer-reviews-section" style={{ padding: '50px 0', backgroundColor: '#f8f9fa' }}>
        <Container>
          <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Customer Reviews</h2>
          <Row>
            <Col md={6}>
              <div className="upside-reviews" style={{ height: '200px', overflow: 'hidden', position: 'relative', animation: 'upside-scroll 2s linear infinite' }}>
              <Card style={{ textAlign: 'left', marginBottom: '30px' }}>
                <Card.Body>
                  <div style={{ position: 'relative' }}>
                    <FaShieldAlt size={40} style={{ color: '#098938', position: 'absolute', left: 0, top: 0, opacity: 0.2 }} />
                    <Card.Title>Hitesh K.</Card.Title>
                  </div>
                  <Card.Text>The biggest thing I got from the community was the belief that I could actually qualify for the O-1A. It wasn’t this giant, monolithic thing meant only for a select few. As long as I was doing good and strategically building my case, it was possible for me to get the visa. Since getting it, I’ve had the peace of mind I needed to get back to what actually mattered: building my company.</Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ textAlign: 'left', marginBottom: '30px' }}>
                <Card.Body>
                  <div style={{ position: 'relative' }}>
                    <FaShieldAlt size={40} style={{ color: '#098938', position: 'absolute', left: 0, top: 0, opacity: 0.2 }} />
                    <Card.Title>2. Setup a free consulation</Card.Title>
                  </div>
                  <Card.Text>The biggest thing I got from the community was the belief that I could actually qualify for the O-1A. It wasn’t this giant, monolithic thing meant only for a select few. As long as I was doing good and strategically building my case, it was possible for me to get the visa. Since getting it, I’ve had the peace of mind I needed to get back to what actually mattered: building my company.</Card.Text>
                </Card.Body>
              </Card>
            </div>
            </Col>
            <Col md={6}>
              <div className="downside-reviews" style={{ height: '200px', overflow: 'hidden', position: 'relative', animation: 'downside-scroll 10s linear infinite' }}>
              <Card style={{ textAlign: 'left', marginBottom: '30px' }}>
                <Card.Body>
                  <div style={{ position: 'relative' }}>
                    <FaShieldAlt size={40} style={{ position: 'absolute', left: 0, top: 0, opacity: 0.2 }} />
                    <Card.Title>Zoya B.</Card.Title>
                  </div>
                  <Card.Text>To me, Unshackled was the starting point of discovering a wealth of community, experiences, and resources that have been a friend through a pretty complex process. From simple tips to accessing others who were in similar boats to always having someone willing to help, the community has been unmatched.</Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ textAlign: 'left', marginBottom: '30px' }}>
                <Card.Body>
                  <div style={{ position: 'relative' }}>
                    <FaShieldAlt size={40} style={{ color: '#098938', position: 'absolute', left: 0, top: 0, opacity: 0.2 }} />
                    <Card.Title>2. Setup a free consulation</Card.Title>
                  </div>
                  <Card.Text>The biggest thing I got from the community was the belief that I could actually qualify for the O-1A. It wasn’t this giant, monolithic thing meant only for a select few. As long as I was doing good and strategically building my case, it was possible for me to get the visa. Since getting it, I’ve had the peace of mind I needed to get back to what actually mattered: building my company.</Card.Text>
                </Card.Body>
              </Card>
            </div>
            </Col>
          </Row>
        </Container>
      </section>

       {/* Pricing Plans Section */}
       <PricingPlans />

       {/* FAQ */}
       <FAQAccordion />
    </div>
  );
};

export default HomePage;
