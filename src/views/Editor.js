import React, { Component } from 'react'

import EditorJs from 'react-editor-js'

import Tools from './template/tools'

class ReactEditor extends Component {
  render() {
    return (
      <EditorJs
        tools={Tools}
        onChange={(e) => console.log(e)}
        data={{
          time: 1556098174501,
          blocks: [
            {
              type: 'header',
              data: {
                text: 'Editor.js',
                level: 1,
              },
            },
            {
              type: 'paragraph',
              data: {
                text: 'Selamat Datang. Selamat Berbelanja',
              },
            },
            {
              type: 'header',
              data: {
                text: 'Profile',
                level: 3,
              },
            },
            {
              type: 'list',
              data: {
                style: 'unordered',
                items: ['Ahmmad Maliki', 'Magetan, Jawa Timur', '23 tahun'],
              },
            },

            {
              type: 'delimiter',
              data: {},
            },

            {
              type: 'image',
              data: {
                file: {
                  url:
                    'https://codex.so/upload/redactor_images/o_e48549d1855c7fc1807308dd14990126.jpg',
                },
                caption: '',
                withBorder: true,
                stretched: false,
                withBackground: false,
              },
            },
          ],
          version: '2.12.4',
        }}
      />
    )
  }
}

export default ReactEditor
