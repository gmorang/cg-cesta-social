import React from "react";
import { Grid, Typography, Divider } from "@material-ui/core";
import FileCopyOutlined from "@material-ui/icons/FileCopyOutlined";
import InsertDriveFile from "@material-ui/icons/InsertDriveFileOutlined";
import Dropzone from "react-dropzone";
import "./index.css";

class Arquivos extends React.Component {
  render() {
    return (
      <div>
        <Grid container xs={12} style={{ paddingBottom: 10 }}>
          <FileCopyOutlined fontSize="large" style={{ marginRight: 10 }} />
          <Typography variant="h6" tyle={{ marginTop: 5 }}>
            Arquivos
          </Typography>
        </Grid>

        <Divider style={{ margin: 10 }} />
        <Dropzone onDropAccepted={this.handleUpload}>
          {({ getRootProps, getInputProps }) => (
            <div className="upload" {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Arraste Arquivos ou clique aqui</p>
            </div>
          )}
        </Dropzone>
        <Grid container xs={12} style={{ padding: 10 }}>
          <Typography variant="body1">Comprovante</Typography>
          <InsertDriveFile fontSize="small" style={{ marginRight: 10 }} />
        </Grid>
      </div>
    );
  }
}

export default Arquivos;
