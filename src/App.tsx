import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Account, NetworkType } from 'symbol-sdk'


function App() {
  /* start block 01 */
  // replace with private key
  const privateKey =
    '0000000000000000000000000000000000000000000000000000000000000000'

  const account = Account.createFromPrivateKey(privateKey, NetworkType.TEST_NET)
  console.log(
    'Your account address is:',
    account.address.pretty(),
    'and its private key',
    account.privateKey
  )
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  )
}

export default App
