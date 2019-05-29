import React from "react";
import { Grid, Typography, Divider, Button, Input } from "@material-ui/core";
import FileCopyOutlined from "@material-ui/icons/FileCopyOutlined";
import InsertDriveFile from "@material-ui/icons/InsertDriveFileOutlined";

import actions from "../actions/";

import "./index.css";

class Arquivos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      url: ""
    };
  }

  handleChange = e => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      this.setState({ file: file });
      console.log(this.state.file);
    }
  };
  handleUpload = () => {
    const { file } = this.state;
    actions.uploadFile(file);
  };

  render() {
    return (
      <div>
        <Grid container style={{ paddingBottom: 10 }}>
          <FileCopyOutlined fontSize="large" style={{ marginRight: 10 }} />
          <Typography variant="h6" tyle={{ marginTop: 5 }}>
            Arquivos
          </Typography>
        </Grid>

        <Divider style={{ margin: 10 }} />
        <Input type="file" onChange={this.handleChange} />
        <Button onClick={this.handleUpload}>Salvar</Button>
        <Grid container style={{ padding: 10 }}>
          <Typography variant="body1">Comprovante</Typography>
          <InsertDriveFile fontSize="small" style={{ marginRight: 10 }} />
        </Grid>
      </div>
    );
  }
}

export default Arquivos;
