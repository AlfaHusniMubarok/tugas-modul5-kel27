import axios from "axios";
import { Modal } from "antd";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import 'antd/dist/antd.css';
import React, { useEffect, useState} from "react";
import Header from "./Header";

export const ListItemsContext = React.createContext({});

export default function ListItems() {
  const [isModalVisible, setIsModalVisible, listitems] = useState(false);
  const [db, setDb] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };


  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3000/data",
      headers: {
        accept: "/",
      },
    })
      .then((data) => {
        console.log('data',data.data);
        setDb(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ListItemsContext.Provider value={{ listitems }}>
    <Header />
    <>
    <div>
    <center>
            <h1 style={{ fontWeight: "bolder", fontSize: 50, color: 'black' }}>Daftar Anime</h1>
          </center>
    </div>
      <div className="margin" style={{ marginTop: 10, color: "transparent",
              Width: "100%" }}>
        <center><Grid
          container
          md={10}
          spacing={5}
          style={{ marginTop: "50px", marginLeft: "350px", marginRight: "3500px" }}
          
        >
          {db.length > 0 && db.map((results, index) => 
             (
              <Grid item key={results.id} md={7}>
                <Modal title="Tentang Anime"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleOk}
                width = {500}
              >
                  <div>
                  <center><img src={results.img_src} alt="anime" width="128px" />
                  <p style={{ fontSize: 20, fontWeight: 'bold', fontFamily: 'Time New Roman' }}>{results.judul}</p>
                <p style={{ fontSize: 16, fontWeight: 'bold', fontFamily: 'Time New Roman' }}>Rating : {results.rating}</p>
                <p style={{ fontSize: 15, fontFamily: 'Time New Roman' }}>Sinopsis : {results.sinopsis}</p></center>
              </div>
              </Modal>
                <Card>
                    <center><CardContent>
                    <img src={results.img_src} alt="anime" width="128px" />
                      <Typography>{results.judul}</Typography>
                      <Button onClick={showModal} variant="contained" color="primary">Tentang Anime</Button>
                    </CardContent></center>
                </Card>
              </Grid>
            )
          )}
        </Grid>
        </center>
      </div>
    </>
    </ListItemsContext.Provider>

  );
}