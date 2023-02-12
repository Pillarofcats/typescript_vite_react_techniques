import React from 'react'

import { useLocalStorage } from './useLocalStorage'

function LocalStorage() {
  //Local Storage
  const [keyData, setKeyData] = useLocalStorage("textarea-auto-save", "")

  return (
    <>
      <h2>Local Storage</h2>
      <label htmlFor="ls-textarea">Auto-save textarea:</label>
      <br />
      <textarea id="ls-textarea" rows={10} cols={40} placeholder="Text will be auto-saved"
        value={keyData}
        onChange={e => setKeyData(e.target.value)}>
      </textarea>
      <br />
    </>
  )
}

export default React.memo(LocalStorage)