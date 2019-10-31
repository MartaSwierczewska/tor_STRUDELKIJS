import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { Row, Col, Button, Typography, Icon } from 'antd';

import './style.scss';

import mark from '../../assets/mark-with-glasses.png';

const { Title } = Typography;

class Main extends Component {
  render() {
    return (
      <Row type="flex" justify="center" align="middle" className="main-page">
        <Col span={24} style={{ textAlign: 'center' }}>
          <img className="main-page__icon" src={mark} alt="Mark" />
          <Title>Find your best collection point</Title>
          <Title level={3}>
            Based on your preferences and overall ranking <Icon type="smile" />
          </Title>

          <Link to="/select-point">
            <Button className="main-page__button" type="primary">
              <strong>Let's start!</strong>
            </Button>
          </Link>
        </Col>
      </Row>
    );
  }
}

export default Main;
