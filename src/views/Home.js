import React from 'react'
import { Row, Col, Button, Typography } from 'antd'
import { Link } from 'react-router-dom'
import 'antd/dist/antd.css'
import './style.css'

const { Title } = Typography
function Home() {
  return (
    <div className="container">
      <Row>
        <Title>Selamat Datang</Title>
      </Row>
      <Row>
        <Title level={4}>Pilih template</Title>
      </Row>
      <Row style={{ width: '100%' }} justify="center" gutter={32}>
        <Col md={5}>
          <Link to="/editor/syncfusion/1">
            <Button
              type="primary"
              size="large"
              style={{ width: '100%', height: '100px' }}
            >
              Nota Dinas
            </Button>
          </Link>
        </Col>
        <Col md={5}>
          <Link to="/editor/syncfusion/2">
            <Button
              type="primary"
              size="large"
              style={{ width: '100%', height: '100px' }}
            >
              Pengumuman
            </Button>
          </Link>
        </Col>
        <Col md={5}>
          <Link to="/editor/syncfusion/3">
            <Button
              type="primary"
              size="large"
              style={{ width: '100%', height: '100px' }}
            >
              Undangan
            </Button>
          </Link>
        </Col>
        <Col md={5}>
          <Link to="/editor/syncfusion/4">
            <Button
              type="primary"
              size="large"
              style={{ width: '100%', height: '100px' }}
            >
              Surat Keterangan
            </Button>
          </Link>
        </Col>
      </Row>
    </div>
  )
}

export default Home
