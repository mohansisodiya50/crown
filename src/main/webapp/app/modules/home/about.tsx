import { Image } from 'react-bootstrap';
import React from 'react';
import { Col, Row } from 'reactstrap';

import './welcome.scss';

const container = {
  background: '#FFFFFF 0% 0% no-repeat padding-box',
  opacity: 1,
  padding: '50px',
  top: '40px'
};

const headingText = {
  font: 'Bold 55px/75px Montserrat',
  textAlign: 'left' as const,
  letterSpacing: '0px',
  color: '#FF7C48',
  textTransform: 'uppercase' as const,
  marginBottom: '20px',
  opacity: 1,
  lineHeight: '50px'
};

const headingTextCrew = {
  font: 'Bold 55px/75px Montserrat',
  textAlign: 'center' as const,
  letterSpacing: '0px',
  color: '#FF7C48',
  textTransform: 'uppercase' as const,
  marginBottom: '2px',
  opacity: 1,
  width: '100%',
  borderBottom: '0.1px solid grey',
  lineHeight: '0.1em',
  margin: '10px 0 70px'
};

const ImageStyle = {
  marginTop: '-120px',
  left: '786px',
  width: '589px',
  height: '589px'
};
const ImageStyle3 = {
  marginTop: '20px',
  marginBottom: '200px',
  left: '786px',
  width: '589px',
  height: '489px'
};

const headingSubText = {
  font: 'Regular 31px/50px Nunito',
  textAlign: 'left' as const,
  letterSpacing: '0px',
  lineHeight: '30px',
  color: '#333333',
  opacity: 1
};

const About = props => (
  <div style={container}>
    <Row>
      <Col span={8}>
        <p style={headingText}>
          KNOW SOMETHING
          <br />
          MORE ABOUT US!
        </p>

        <p style={headingSubText}>
          We are a medical supply marketplace designed to disrupt the current medical supply chain using advanced analytics to efficiently
          and dynamically match supply and demand to ensure we never have the shortage of 2020 again.
        </p>
      </Col>
      <Col span={16}>
        <Image src="../../../content/images/office-pane.svg" style={ImageStyle} />
      </Col>
    </Row>
    <Row>
      <Col span={16}>
        <Image src="../../../content/images/our-story.svg" style={ImageStyle} />
      </Col>
      <Col span={8}>
        <p style={headingText}>OUR STORY</p>
        <p style={headingSubText}>
          <p>
            <i>
              <strong>When Covid hit - we got anxious .. and instead of stirring we got busy! </strong>
            </i>
          </p>
          <p>
            After hours of late night web scrolling, we found ourselves in the citizen response (Plan C) group Open Source Medical Supplies
            (OSMS) - which lead us to Helpful Engineering and were working with a group of Canadians. We entered the WHO Hackathon in late
            March and partnered with a group of Americans and Europeans (CROWN), followed by the EUvsVirus Hackathon (the BIGGEST Hackathon
            ever!), then the MIT Hackathon, Helpful Engineering Hackathon and Taiwan Hackathon .. picking up new people all along the way.
            So here we are, 5 hackathons later and with a team of 30, we have built a supply-demand exchange platform - from manufacturer to
            consumer - we do any size, and specialize in large exchanges!
            <br /> Always keeping in mind helping people, making a difference, the future of product exchange and other people based needs
            that help - and put people first and put profit as an essential, and on equal footing to the environment and human needs. This
            for us is the new internet .. how to order, exchange and procure - and we’re doing it for the makers and buyers - so it’s easy,
            an anti-amazon for product exchange for medical supply - where YOU are in the driving seat! And thank you for being on this
            journey of having the world work with us!
          </p>
        </p>
      </Col>
    </Row>
    <Row style={{ marginTop: '100px' }}>
      <Col span={8}>
        <p style={headingText}>HOW WE DO IT?</p>

        <p style={headingSubText}>
          <p>
            We are an innovative medical supply marketplace that uses predictive analytics, Demand/Supply matching, quality matching, and a
            decentralized supply chain procurement and ordering model to combat inefficiency in medical supplies logistics networks.
          </p>
          <p style={{ color: '#FF7C48', textAlign: 'center' }}>
            <i>
              <b>MISSION</b> - Medical Supplies For All People, Forever.
            </i>
          </p>
          <p>
            We will match all manufacturers and brokers to purchasers by providing never before seen insights by using cutting edge
            predictive analytics and machine learning to get ahead of medical supply needs and flatten the biggest curves. Building off of
            the success we had bridging supply gaps during the COVID-19 pandemic, our team will become a worldwide leader in open data and
            decentralized medical supply chain management.
          </p>
        </p>
      </Col>
      <Col span={16}>
        <Image src="../../../content/images/why-us.svg" style={ImageStyle3} />
      </Col>
    </Row>

    <Row>
      <Col span={24}>
        <p style={headingTextCrew}>
          <span style={{ background: '#fff', padding: '0 10px' }}>THE CREW</span>
        </p>
      </Col>
    </Row>
    <Row>
      <Col span={3}>
        <Image
          width="200px"
          src="https://i.pinimg.com/originals/2c/d2/71/2cd271b9d89b22a3b2fc780f6a838567.jpg"
          style={{
            border: '1px solid #707070',
            opacity: 1
          }}
        />
      </Col>
      <Col span={3}>
        <Image
          width="200px"
          src="https://i.pinimg.com/originals/2c/d2/71/2cd271b9d89b22a3b2fc780f6a838567.jpg"
          style={{
            border: '1px solid #707070',
            opacity: 1
          }}
        />
      </Col>
      <Col span={3}>
        <Image
          width="200px"
          src="https://i.pinimg.com/originals/2c/d2/71/2cd271b9d89b22a3b2fc780f6a838567.jpg"
          style={{
            border: '1px solid #707070',
            opacity: 1
          }}
        />
      </Col>
      <Col span={3}>
        <Image
          width="200px"
          src="https://i.pinimg.com/originals/2c/d2/71/2cd271b9d89b22a3b2fc780f6a838567.jpg"
          style={{
            border: '1px solid #707070',
            opacity: 1
          }}
        />
      </Col>
      <Col span={3}>
        <Image
          width="200px"
          src="https://i.pinimg.com/originals/2c/d2/71/2cd271b9d89b22a3b2fc780f6a838567.jpg"
          style={{
            border: '1px solid #707070',
            opacity: 1
          }}
        />
      </Col>
    </Row>
    <br />
    <br />
    <Row>
      <Col span={3}>
        <Image
          width="200px"
          src="https://i.pinimg.com/originals/2c/d2/71/2cd271b9d89b22a3b2fc780f6a838567.jpg"
          style={{
            border: '1px solid #707070',
            opacity: 1
          }}
        />
      </Col>
      <Col span={3}>
        <Image
          width="200px"
          src="https://i.pinimg.com/originals/2c/d2/71/2cd271b9d89b22a3b2fc780f6a838567.jpg"
          style={{
            border: '1px solid #707070',
            opacity: 1
          }}
        />
      </Col>
      <Col span={3}>
        <Image
          width="200px"
          src="https://i.pinimg.com/originals/2c/d2/71/2cd271b9d89b22a3b2fc780f6a838567.jpg"
          style={{
            border: '1px solid #707070',
            opacity: 1
          }}
        />
      </Col>
      <Col span={3}>
        <Image
          width="200px"
          src="https://i.pinimg.com/originals/2c/d2/71/2cd271b9d89b22a3b2fc780f6a838567.jpg"
          style={{
            border: '1px solid #707070',
            opacity: 1
          }}
        />
      </Col>
      <Col span={3}>
        <Image
          width="200px"
          src="https://i.pinimg.com/originals/2c/d2/71/2cd271b9d89b22a3b2fc780f6a838567.jpg"
          style={{
            border: '1px solid #707070',
            opacity: 1
          }}
        />
      </Col>
    </Row>
  </div>
);

export default About;
