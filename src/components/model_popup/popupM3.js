import React, { useState, forwardRef, useImperativeHandle } from "react";
import Modal from "react-modal";
import Axios from 'axios';


export const PopUpM3 = forwardRef((props, ref) => {
  Modal.setAppElement("#root");

  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([])



Axios.get('http://localhost:3003/images/getmushroom3').then((response)  => {
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
  

  return (
    <>
      
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="Survey Q 1"
      >
        <div id="myModal" class="modal">
          <div class="modal-content">
            {data.map(item => (
              <>
                                     <center> <img   class="img"
                            src={`http://localhost:3003/images/${item.forest_image}`} alt='some value'
                        />
                          <p class ="title" >{item.forest_title}</p>
                          <span class ="title_sciname">ชื่อวิทยาศาสตร์  </span>
                          <span class ="Sciname">{item.forest_sciname}</span><br/>
                          <span class ="title_Common">ชื่อท้องถิ่น  </span>
                          <span class ="Common">{item.forest_Common}</span><br/>
                          <span class ="title_desc">ลักษณะ  </span>
                          <span class ="desc">{item.forest_desc}</span><br/>
                          <span class ="title_benefit">ประโยชน์  </span>
                          <span class ="benefit">{item.forest_benefit}</span><br/>
                          <span class ="habit">{item.habit_title}</span></center>
              </>
              ))}
          </div>
        </div>
      </Modal>
    </>
  );
});
