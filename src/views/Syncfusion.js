import React from 'react'
import {
  DocumentEditorContainerComponent,
  Toolbar,
  SfdtExport,
  Selection,
  TextExport,
  WordExport,
  Editor,
  Print,
} from '@syncfusion/ej2-react-documenteditor'
import { Button, Row, Col, Dropdown, Menu, Typography } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
import NotaDinas from './template/notadinas'
import Pengumuman from './template/pengumuman'
import Undangan from './template/undangan'
import SuratKeterangan from './template/suratketerangan'
import './style.css'

const { Title } = Typography
DocumentEditorContainerComponent.Inject(
  Toolbar,
  SfdtExport,
  Selection,
  WordExport,
  Editor,
  Print,
  TextExport,
)

const template = {
  '1': NotaDinas,
  '2': Pengumuman,
  '3': Undangan,
  '4': SuratKeterangan,
}

const title = {
  '1': 'Nota Dinas',
  '2': 'Pengumuman',
  '3': 'Undangan',
  '4': 'Surat Keterangan',
}
const print = {
  '1': 'Docx',
  '2': 'Sfdt',
  '3': 'Txt',
}
class Default extends React.Component {
  state = {
    doc: {},
  }

  componentDidMount() {
    const { match } = this.props
    const { params } = match
    const { id } = params
    setTimeout(() => {
      this.container.documentEditor.open(JSON.stringify(template[`${id}`]))
    })
  }

  onDownload = (e) => {
    this.container.documentEditor.save('sample', print[`${e.key}`])
  }

  onSave = () => {
    this.container.documentEditor
      .saveAsBlob('Docx')
      .then((doc) => console.log(doc))
  }

  onPrint = () => {
    this.container.documentEditor.print()
  }

  render() {
    const { match } = this.props
    const { params } = match
    const { id } = params
    const menu = (
      <Menu onClick={(e) => this.onDownload(e)}>
        <Menu.Item key="1">Microsoft Word (.docx)</Menu.Item>
        <Menu.Item key="2">Syncfusion Document Text (.sfdt)</Menu.Item>
        <Menu.Item key="3">Text Document (.txt)</Menu.Item>
      </Menu>
    )
    return (
      <div className="editorContainer">
        <Row gutter={16} style={{ paddingTop: '1%', paddingLeft: '1%' }}>
          <Col md={6}>
            <Title level={3}>{title[`${id}`]}</Title>
          </Col>
          <Col md={{ span: 3, offset: 12 }}>
            <Dropdown overlay={menu} trigger={['click']}>
              <Button
                type="primary"
                icon={<DownloadOutlined />}
                style={{ width: '100%' }}
              >
                Download
              </Button>
            </Dropdown>
          </Col>
          <Col md={2}>
            <Button
              type="primary"
              onClick={this.onPrint}
              style={{ width: '100%' }}
            >
              Cetak
            </Button>
          </Col>
        </Row>

        <DocumentEditorContainerComponent
          serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/"
          ref={(scope) => {
            this.container = scope
          }}
          enableToolbar
          height="83%"
          isReadOnly={false}
          enableSelection
          enableEditor
          enableWordExport
          enableSfdtExport
          enableTextExport
        />
        <Row gutter={32} justify="center" style={{ padding: '1%' }}>
          <Col>
            <Button
              type="primary"
              style={{ width: '100%' }}
              onClick={this.onSave}
            >
              Simpan
            </Button>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Default
