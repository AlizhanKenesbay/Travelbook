import React from 'react'
import Slider from 'react-slick'
import ava01 from "../../assets/images/ava-1.jpg"
import ava02 from "../../assets/images/ava-2.jpg"
import ava03 from "../../assets/images/ava-3.jpg"
import ava04 from "../../assets/images/ava-4.jpg"
import ava05 from "../../assets/images/ava-5.jpg"

const Testimonials = () => {

    const settings = {
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
                breakpoint: 992,
                settings:{
                    slidesToShow:2,
                    slideToScroll:1,
                    dots:true,
                    infinite:true,
                },
            },
            {
                breakpoint:576,
                settings: {
                    slidesToShow:1,
                    slideToScroll:2,
                },
            }
        ]
    }

  return (
    <Slider {...settings}>
        <div className="testimonials py-4 px-3">
            <p>Поездка была хорошо организована. Мы посетили множество интересных мест. В целом, остались довольны.
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Айбек Сейдулла</h6>
                    <p>Клиент</p>
                </div>
            </div>
        </div>
        <div className="testimonials py-4 px-3">
            <p>Хороший сервис. Путешествие прошло гладко. Гиды были профессиональны и вежливы. Рекомендую.
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Алия Кусманова</h6>
                    <p>Клиент</p>
                </div>
            </div>
        </div>
        <div className="testimonials py-4 px-3">
            <p>Отличная организация поездки. Мы увидели много красивых мест и получили массу положительных впечатлений.
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Бекжан Тлеубаев</h6>
                    <p>Клиент</p>
                </div>
            </div>
        </div>
        <div className="testimonials py-4 px-3">
            <p>Поездка прошла хорошо. Гид был знающим и приятным в общении. В общем, все понравилось.
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava04} className="w-25 h-25 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Жанар Жумабекова</h6>
                    <p>Клиент</p>
                </div>
            </div>
        </div>
        <div className="testimonials py-4 px-3">
            <p>Хороший выбор для путешествий. Экскурсии были интересными, а проживание - комфортным. Остались довольны.
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava05} className="w-25 h-25 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Данияр Сагадиев</h6>
                    <p>Клиент</p>
                </div>
            </div>
        </div>
    </Slider>
  )
}

export default Testimonials