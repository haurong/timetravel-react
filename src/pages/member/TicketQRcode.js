import React from 'react';
import '../../global.scss';
import NavBar from '../../layout/NavBar';
import Footer from '../../layout/Footer';
import SideBar from '../../layout/SideBar';
import Qrcode from '../../Component/QRcode/Qrcode';

import { MY_HOST } from '../../config';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

// import { QrCode } from '@mui/icons-material';

function TicketQRcode() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    height: 400,
    bgcolor: 'background.paper',
    boxShadow: 16,
    borderRadius: 3,
    // p: 4,
  };
  return (
    <>
      <NavBar />

      <div className="container  ">
        <div className="givePadding profile_padding d-flex">
          <SideBar />

          <div className="col-9 d-block CardListStyle ">
            <h1 className="ps-3 mb-4">我的票夾</h1>
            <div className="d-flex flex-wrap">
              <div className="p-3">
                <Card
                  className="col-3"
                  style={{
                    width: '300px',
                    height: '400px',
                    boxShadow: '0 0 18px 0 rgba(0,0,0,0.1)',
                  }}
                >
                  <div style={{ overflow: 'hidden' }}>
                    <Card.Img
                      variant="top"
                      className="foodCardImg1"
                      src={MY_HOST + `/uploads/A001.jpg`}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title
                      className="Card_Title"
                      style={{ paddingLeft: 0 }}
                    >
                      路徑行旅
                    </Card.Title>

                    <Card.Text className="Card_Text">
                      <div className="useTime">
                        <p className="useTimeDeadLine">
                          使用期限 <br />
                          2022/12/25 - 2022/12/26
                        </p>
                      </div>
                    </Card.Text>
                    <div
                      className="d-flex PriceAndCollect "
                      style={{ margin: 'auto', paddingTop: '20px' }}
                    >
                      <button
                        type="button"
                        className="buy_now BottomBar_Buy_Right "
                        style={{ backgroundColor: '#59d8a1' }}
                        onClick={handleOpen}
                      >
                        點我兌換
                      </button>
                    </div>
                  </Card.Body>
                </Card>
                <div>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Qrcode />
                    </Box>
                  </Modal>
                </div>
              </div>
              <div className="p-3">
                <Card
                  className="col-3"
                  style={{
                    width: '300px',
                    height: '400px',
                    boxShadow: '0 0 18px 0 rgba(0,0,0,0.1)',
                  }}
                >
                  <div style={{ overflow: 'hidden' }}>
                    <Card.Img
                      variant="top"
                      className="foodCardImg1"
                      src={MY_HOST + `/uploads/F116-1.jpg`}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title
                      className="Card_Title"
                      style={{ paddingLeft: 0 }}
                    >
                      萬祝號
                    </Card.Title>

                    <Card.Text className="Card_Text">
                      <div className="useTime">
                        <p className="useTimeDeadLine">
                          使用期限 <br />
                          2022/12/25 - 2023/01/25
                        </p>
                      </div>
                    </Card.Text>
                    <div
                      className="d-flex PriceAndCollect "
                      style={{ margin: 'auto', paddingTop: '20px' }}
                    >
                      <button
                        type="button"
                        className="buy_now BottomBar_Buy_Right "
                        style={{ backgroundColor: '#59d8a1' }}
                        onClick={handleOpen}
                      >
                        點我兌換
                      </button>
                    </div>
                  </Card.Body>
                </Card>
                <div>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Qrcode />
                    </Box>
                  </Modal>
                </div>
              </div>
              <div className="p-3">
                <Card
                  className="col-3"
                  style={{
                    width: '300px',
                    height: '400px',
                    boxShadow: '0 0 18px 0 rgba(0,0,0,0.1)',
                  }}
                >
                  <div style={{ overflow: 'hidden' }}>
                    <Card.Img
                      variant="top"
                      className="foodCardImg1"
                      src={MY_HOST + `/uploads/14-1.jpg`}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title
                      className="Card_Title"
                      style={{ paddingLeft: 0 }}
                    >
                      兒童新樂園
                    </Card.Title>

                    <Card.Text className="Card_Text">
                      <div className="useTime">
                        <p className="useTimeDeadLine">
                          使用期限 <br />
                          2022/12/25
                        </p>
                      </div>
                    </Card.Text>
                    <div
                      className="d-flex PriceAndCollect "
                      style={{ margin: 'auto', paddingTop: '20px' }}
                    >
                      <button
                        type="button"
                        className="buy_now BottomBar_Buy_Right "
                        style={{ backgroundColor: '#59d8a1' }}
                        onClick={handleOpen}
                      >
                        點我兌換
                      </button>
                    </div>
                  </Card.Body>
                </Card>
                <div>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Qrcode />
                    </Box>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <Footer />
    </>
  );
}

export default TicketQRcode;
