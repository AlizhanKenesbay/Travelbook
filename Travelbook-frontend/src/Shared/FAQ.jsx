import React, { useState } from 'react';
import './FAQ.css';
import { Container, Row, Col } from 'reactstrap';
import Newsletter from './Newsletter';

const FAQ = () => {
  const faqData = [
    {
      question: 'Какое лучшее время для посещения этого места?',
      answer:
        'Лучшее время для посещения этого места - это Лето. Погода приятная, и вы можете наслаждаться различными видами активного отдыха без экстремальной жары или холода.',
    },
    {
      question: 'Как забронировать поездку?',
      answer:
        'Вы можете либо посетить наш веб-сайт и забронировать онлайн, либо связаться с нашей службой поддержки клиентов, и они помогут вам с процессом бронирования.',
    },
    {
      question: 'Есть ли специальные скидки для групповых бронирований?',
      answer:
        'Да, мы предлагаем специальные скидки для групповых бронирований. Если вы планируете путешествовать с группой, пожалуйста, свяжитесь с нашей службой поддержки клиентов, чтобы получить скидки для групп.',
    },
    {
      question: 'Какое жилье вы предоставляете?',
      answer:
        'Мы не предлагаем варианты для жилья, на нашем сайте вы можете найти только интересные места и события, однако не исключено, что в будушем может появится и такая возможность :)',
    },
    {
      question: 'Предлагаете ли вы страховку?',
      answer:
        'Да, мы предлагаем страховку для наших клиентов. Туристическая страховка покрывает медицинские чрезвычайные ситуации, отмену поездки и другие непредвиденные события во время вашего путешествия.',
    },
  ];

  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    if (activeQuestion === index) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(index);
    }
  };

  return (
    <><section>
          <Container>
              <Row>
                  <Col>
                      <h2 className="text-center">Часто задаваемые вопросы</h2>
                      <div className="faq__wrapper">
                          {faqData.map((item, index) => (
                              <div
                                  className={`faq__item ${activeQuestion === index ? 'active' : ''}`}
                                  key={index}
                                  onClick={() => toggleQuestion(index)}
                              >
                                  <div className="faq__question">
                                      <h4>{item.question} <span>{activeQuestion === index ? <i className="ri-arrow-drop-up-line"></i> : <i className="ri-arrow-drop-down-line"></i>}</span>
                                      </h4>
                                  </div>
                                  {activeQuestion === index && <p>{item.answer}</p>}
                              </div>
                          ))}
                      </div>
                  </Col>
              </Row>
          </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default FAQ;
