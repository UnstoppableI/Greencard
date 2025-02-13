import React from "react";
import { Button, Row, Col, Card } from 'react-bootstrap';

const PricingPlans = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <p className="text-green-600 text-sm uppercase font-medium mb-2">PRICING</p>
        <h1 className="text-4xl font-bold mb-4">Choose the plan that's right for you</h1>
        <p className="text-gray-600">Flexible payment plans</p>
      </div>

      <Row xs={1} md={3} className="g-4">
        {/* EB1 Copilot */}
        <Col>
          <Card className="rounded-2xl border border-gray-200 p-6 bg-white">
            <Card.Body>
              <Card.Title className="text-xl font-semibold text-center">EB1 Copilot</Card.Title>
              <Card.Subtitle className="text-green-600 text-sm mb-6 text-center">
                Group and Student Discount Available
              </Card.Subtitle>
              
              <ul className="space-y-4 mb-8">
                <li className="d-flex align-items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Filing discount of $1999 [ft. Lodestone]</span>
                </li>
                <li className="d-flex align-items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>EB1 roadmapping call with attorney</span>
                </li>
                <li className="d-flex align-items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Personalized recommendations</span>
                </li>
                <li className="d-flex align-items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Dedicated accountability manager</span>
                </li>
                <li className="d-flex align-items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Progress management dashboard</span>
                </li>
                <li className="d-flex align-items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Lifetime access to Unshackled community</span>
                </li>
                <li className="d-flex align-items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>30-day refund policy</span>
                </li>
              </ul>

              <Button className="me-2" variant="secondary">
                Contact Us
              </Button>

              <p className="text-sm text-gray-600 mt-4 text-center">
                Best for highly experienced professionals who want 1:1 support from past recipients & a roadmap to get your talent visa within the next 6-12 months.
              </p>
            </Card.Body>
          </Card>
        </Col>

        {/* EB1 Autopilot - Popular */}
        <Col>
          <Card className="rounded-2xl border-2 border-green-600 p-6 bg-white position-relative">
            <div className="position-absolute top-0 end-0 bg-green-600 text-white px-3 py-1 rounded-full text-sm">
              Popular
            </div>
            <Card.Body>
              <Card.Title className="text-xl font-semibold text-center">EB1 Autopilot</Card.Title>
              <Card.Subtitle className="text-green-600 text-sm mb-6">
                Group Discount Available
              </Card.Subtitle>

              <ul className="space-y-4 mb-8">
                <li className="d-flex align-items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Includes attorney filing fee</span>
                </li>
                <li className="d-flex align-items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Unlimited attorney consults</span>
                </li>
                <li className="d-flex align-items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Press coverage across international outlets</span>
                </li>
                <li className="d-flex align-items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>File patents for your work</span>
                </li>
                <li className="d-flex align-items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Publish papers based on your research</span>
                </li>
                <li className="d-flex align-items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Secure review opportunities</span>
                </li>
                <li className="d-flex align-items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Apply for selective memberships</span>
                </li>
                <li className="d-flex align-items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Contribute to technical books</span>
                </li>
                <li className="d-flex align-items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Dedicated program manager</span>
                </li>
                <li className="d-flex align-items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>End-to-end case management</span>
                </li>
              </ul>

              <Button variant="success">
                Contact Us
              </Button>

              <p className="text-sm text-gray-600 mt-4 text-center">
                Best for experienced professionals who want an end to end solution until they get their Green Card. Includes a thorough evaluation process to assess profiles and provide a final quote estimate.
              </p>

              <p className="text-sm text-gray-600 mt-4 text-center">
                Payment plans available
              </p>
            </Card.Body>
          </Card>
        </Col>

        {/* Enterprise */}
        <Col>
          <Card className="rounded-2xl border border-gray-200 p-6 bg-white">
            <Card.Body>
              <Card.Title className="text-xl font-semibold text-center">Enterprise</Card.Title>
              <div className="mb-6"></div>

              <ul className="space-y-4 mb-8">
                <li className="d-flex align-items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>No annual filing cap</span>
                </li>
                <li className="d-flex align-items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Reduce sponsorship costs</span>
                </li>
                <li className="d-flex align-items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Incentivise Executives</span>
                </li>
                <li className="d-flex align-items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Retain tenured employees</span>
                </li>
                <li className="d-flex align-items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Custom Integrations</span>
                </li>
                <li className="d-flex align-items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Dedicated 24 × 7 Support</span>
                </li>
              </ul>

              <Button variant="secondary">
                Contact Us
              </Button>

              <p className="text-sm text-gray-600 mt-4 text-center">
                If you're looking for immigration support for your team, or company, reach out to us!
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default PricingPlans;
