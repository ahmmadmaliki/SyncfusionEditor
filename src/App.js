import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Home from './views/Home'
import Tiny from './views/TinyMCE'
import Editor from './views/Editor'
import Prose from './views/ProseMirror'
import SyncFusion from './views/Syncfusion'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact name="Home" component={Home} />
        <Route path="/editor/tiny" name="Tiny" component={Tiny} />
        <Route path="/editor/editorjs" name="Editor" component={Editor} />
        <Route path="/editor/prose" name="Prose" component={Prose} />
        <Route
          path="/editor/syncfusion/:id"
          name="Prose"
          component={SyncFusion}
        />
      </Switch>
    </Router>
  )
}

export default App
