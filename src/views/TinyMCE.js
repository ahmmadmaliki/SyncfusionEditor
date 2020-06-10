import React from 'react'
import { Button, Row, Col, Spin } from 'antd'
import { Editor } from '@tinymce/tinymce-react'

const template = {
  '1': '<p>Hai</p>',
  '2': '<p>Hello</p>',
}
const feature = {
  height: 500,
  plugins: [
    'advlist autolink lists link image',
    'charmap print preview anchor help',
    'searchreplace visualblocks code',
    'insertdatetime media table paste wordcount',
  ],
  toolbar:
    'undo redo | formatselect | bold italic | \
    alignleft aligncenter alignright | \
    bullist numlist outdent indent | help',
}
class Home extends React.Component {
  state = {
    type: '',
  }

  handleEditorChange = (e) => {
    console.log('Content was updated:', e.target.getContent())
  }

  render() {
    const { history } = this.props
    const { type } = this.state
    return (
      <div>
        <Editor
          apiKey="eeh4tv5xzra7tbx9w0alueuebfw4mtc2batmpzurlrkgnqcg"
          initialValue={template['1']}
          onInit={(e) => this.setState({ type: e.type })}
          init={feature}
          onChange={this.handleEditorChange}
        />
        {!type && (
          <Row justify="center" style={{ marginTop: '20px' }}>
            <Col>
              <Spin size="large" />
            </Col>
          </Row>
        )}
        <Row justify="center" style={{ marginTop: '20px' }}>
          <Col>
            <Button
              type="primary"
              size="large"
              onClick={() => history.goBack()}
            >
              Kembali
            </Button>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Home
