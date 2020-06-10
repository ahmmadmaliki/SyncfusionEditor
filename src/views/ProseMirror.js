import React from 'react'
import { Editor, Floater, MenuBar } from '@aeaton/react-prosemirror'
import { options, menu } from '@aeaton/react-prosemirror-config-default'

class Prose extends React.Component {
  handleChange = (doc) => {
    console.log(JSON.stringify(doc, null, 2))
  }

  render() {
    return (
      <Editor
        options={options}
        onChange={(doc) => this.handleChange(doc)}
        render={({ editor, view }) => (
          <>
            <MenuBar menu={menu} view={view} />

            <Floater view={view}>
              <MenuBar menu={{ marks: menu.marks }} view={view} />
            </Floater>

            {editor}
          </>
        )}
      />
    )
  }
}

export default Prose
