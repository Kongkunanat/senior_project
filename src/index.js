import ReactDOM from 'react-dom';
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import './index.css';
import App from './components/App';
import {BrowserRouter , Route, Routes  } from "react-router-dom";
import { Modal, ModalHeader} from "reactstrap";
import Learn from "../src/image_control_startpage/Learn.png";

const Overlay = () => {
  const [goToContact, setGoToContact] = React.useState(false);
  const [modal, setModal] = React.useState(false);
  const toggle = () => setModal(!modal);
  if (goToContact) {
    return    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>;
  }

  return (
    <>
    
        <div class="container">
          <div class="left"></div>
            <div class="right">
              <h1 className="s1">Virtual Gallery</h1>
              <p className="s2">ยินดีต้อนรับเข้าสู่ แกลเลอรี่เสมือนจริง<br/>นี้เป็นแหล่งรวบรวมความรู้ข้อมูลเห็ด พรรณไม้ และสมุนไพรท้องถิ่น<br/>
                ที่อยู่โดยรอบเขาพลวง วิทยาลัยชัยบาดาลพิพัฒน์</p>
              <div class="btn-container">
              <Button color="white"
                onClick={toggle}>การใช้งาน</Button>
            <Modal isOpen={modal} toggle={toggle} backdrop="static">
                <ModalHeader
                    toggle={toggle}></ModalHeader>
                    <img   src={Learn} />
            </Modal> 
              <button
        onClick={() => {
          setGoToContact(true);
        }}
      > เข้าสู่แกลเลอรี่เสมือนจริง </button>   
   </div>
  </div>
 </div>

      </> 
  )
}

ReactDOM.render(<Overlay />, document.getElementById("root"))