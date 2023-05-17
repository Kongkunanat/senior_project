import React, { useState, forwardRef, useImperativeHandle } from "react";
import Modal from "react-modal";
import './Slider.css'
import BtnSlider from './BtnSlider'
import Axios from 'axios';

export const PopUp2 = forwardRef((props, ref) => {
  Modal.setAppElement("#root");


  const [isOpen, setIsOpen] = useState(false);

  const [data, setData] = useState([])



  Axios.get('https://happy-deer-beret.cyclic.app/getherb').then((response)  => {
      setData(response.data);
  });


  useImperativeHandle(ref, () => ({
    togMod() {
      setIsOpen(!isOpen);
    }
  }));

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const [slideIndex, setSlideIndex] = useState(1)

  const nextSlide = () => {
      if(slideIndex !== data.length){
          setSlideIndex(slideIndex + 1)
      } 
      else if (slideIndex === data.length){
          setSlideIndex(1)
      }
  }

  const prevSlide = () => {
      if(slideIndex !== 1){
          setSlideIndex(slideIndex - 1)
      }
      else if (slideIndex === 1){
          setSlideIndex(data.length)
      }
  }



  return (
    <Modal
      backdrop="static"
      isOpen={isOpen}
      onRequestClose={toggleModal}
      contentLabel="Survey Q 1"
    >
            <div className="container-slider">
                {data.map((item, index) => {
                    return (
                        <>
                        <div
                            key={item.forest_id}
                            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                        >
                       <center><p class ="title" >สมุนไพร</p> <img  
                            src={`https://virtualgallerymushroom.s3.amazonaws.com/${item.forest_image}`}  alt='some value'
                        />
                          <p class ="title" >{item.forest_title}</p>
                          <span class ="title_sciname">ชื่อวิทยาศาสตร์  </span>
                          <span class ="Sciname">{item.forest_sciname}</span><br/>
                          <span class ="title_Common">ชื่อท้องถิ่น  </span>
                          <span class ="Common">{item.forest_Common}</span><br/>
                          <span class ="title_desc">ลักษณะ  </span>
                          <span class ="desc">{item.forest_desc}</span><br/>
                          <span class ="title_benefit">ประโยชน์  </span>
                          <span class ="benefit">{item.forest_benefit}</span></center>
                        </div>
                    </>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            </div>
    </Modal>
  );
});
