import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import prism from "prismjs"
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from 'axios'
import './App.css'

function App() {
  // const [ count, setCount ] = useState(0)
  const [ prompt, setprompt ] = useState(` function sum() {
  return 1 + 1
}`)

  const [ review, setReview ] = useState(``)

  useEffect(() => {
    prism.highlightAll()
  }, [])

  async function reviewprompt() {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}`, { prompt })
    setReview(response.data)
  }

  return (
    <>
      <main>
        <div className="left">
          <div className="prompt">
            <Editor
              value={prompt}
              onValueChange={prompt => setprompt(prompt)}
              highlight={prompt => prism.highlight(prompt, prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira prompt", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%"
              }}
            />
          </div>
          <div
            onClick={reviewprompt}
            className="review">Review</div>
        </div>
        <div className="right">
          <Markdown

            rehypePlugins={[ rehypeHighlight ]}

          >{review}</Markdown>
        </div>
      </main>
    </>
  )
}



export default App
