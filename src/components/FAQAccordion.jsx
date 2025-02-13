import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const FAQAccordion = () => {
  const faqs = [
    {
      question: "When should I start?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      question: "Can individuals without advanced degrees or extraordinary awards qualify for EB-1A?",
      answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      question: "Why should I not directly approach a lawyer?",
      answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      question: "I'm in a unique/different field. How can this product benefit me?",
      answer: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      question: "Do you provide payment plans and discounts for groups?",
      answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
    }
  ];

  return (
    <Container className="py-5" style={{ maxWidth: '800px' }}>
      <h1 className="text-center mb-4 fw-bold">FAQ</h1>
      
      <Accordion>
        {faqs.map((faq, index) => (
          <Accordion.Item key={index} eventKey={index.toString()}>
            <Accordion.Header>
              <span className="fw-medium">{faq.question}</span>
            </Accordion.Header>
            <Accordion.Body className="text-secondary">
              {faq.answer}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>

      <style>
        {`
          .accordion-button:not(.collapsed) {
            background-color: white;
            color: black;
            box-shadow: none;
          }
          
          .accordion-button:focus {
            box-shadow: none;
            border-color: rgba(0,0,0,.125);
          }
          
          .accordion-button::after {
            transition: transform 0.3s ease;
          }
          
          .accordion {
            --bs-accordion-btn-focus-border-color: rgba(0,0,0,.125);
            --bs-accordion-active-color: black;
            --bs-accordion-active-bg: white;
          }
          
          .accordion-item {
            border-left: none;
            border-right: none;
            border-top: none;
            border-bottom: 1px solid rgba(0,0,0,.125);
          }
          
          .accordion-button {
            padding: 1.5rem 0;
          }
          
          .accordion-body {
            padding: 0 0 1.5rem 0;
          }
        `}
      </style>
    </Container>
  );
};

export default FAQAccordion;