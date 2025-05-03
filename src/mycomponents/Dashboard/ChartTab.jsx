import React from "react";
import useExcelStore from "../../dashboardDataStore";
import LineDataChart from "./LineDataChart";
import Stacked from "./Stacked";
import { Container, Row, Col } from "react-bootstrap";

const ChartTab = () => {
  const { excelData } = useExcelStore();

  return (
        <div>
          <h2>График данных</h2>
          <Container>
          <Row>
            <Col><LineDataChart data={excelData} /></Col>
            <Col><Stacked /></Col>
          </Row>
          </Container>
        </div> 
  );
};

export default ChartTab;
