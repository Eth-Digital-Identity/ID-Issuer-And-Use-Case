import React from 'react'
import { Web3ReactProvider, useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected
} from '@web3-react/injected-connector'
import { UserRejectedRequestError as UserRejectedRequestErrorWalletConnect } from '@web3-react/walletconnect-connector'
import { UserRejectedRequestError as UserRejectedRequestErrorFrame } from '@web3-react/frame-connector'
import { Web3Provider } from '@ethersproject/providers'
import { formatEther } from '@ethersproject/units'
import { ethers, Wallet } from 'ethers';
import {readId, issueId, getIdNumber} from './callmethods.js';

import { useEagerConnect, useInactiveListener } from '../hooks'
import {
  injected
} from '../connectors'
import { Spinner } from '../components/Spinner'
import { KYC } from '../components/KYC'

enum ConnectorNames {
  Injected = 'Connect',
}

const connectorsByName: { [connectorName in ConnectorNames]: any } = {
  [ConnectorNames.Injected]: injected,
}

function getErrorMessage(error: Error) {
  if (error instanceof NoEthereumProviderError) {
    return 'No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.'
  } else if (error instanceof UnsupportedChainIdError) {
    return "You're connected to an unsupported network."
  } else if (
    error instanceof UserRejectedRequestErrorInjected ||
    error instanceof UserRejectedRequestErrorWalletConnect ||
    error instanceof UserRejectedRequestErrorFrame
  ) {
    return 'Please authorize this website to access your Ethereum account.'
  } else {
    console.error(error)
    return 'An unknown error occurred. Check the console for more details.'
  }
}

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider)
  library.pollingInterval = 12000
  return library
}

export default function() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <App />
    </Web3ReactProvider>
  )
}

function BlockNumber() {
  const { chainId, library } = useWeb3React()

  const [blockNumber, setBlockNumber] = React.useState<number>()
  React.useEffect((): any => {
    if (!!library) {
      let stale = false

      library
        .getBlockNumber()
        .then((blockNumber: number) => {
          if (!stale) {
            setBlockNumber(blockNumber)
          }
        })
        .catch(() => {
          if (!stale) {
            setBlockNumber(null)
          }
        })

      const updateBlockNumber = (blockNumber: number) => {
        setBlockNumber(blockNumber)
      }
      library.on('block', updateBlockNumber)

      return () => {
        stale = true
        library.removeListener('block', updateBlockNumber)
        setBlockNumber(undefined)
      }
    }
  }, [library, chainId]) // ensures refresh if referential identity of library doesn't change across chainIds

  return (
    <>
      <span>Block Number</span>
      <span role="img" aria-label="numbers">
        🔢
      </span>
      <span>{blockNumber === null ? 'Error' : blockNumber ?? ''}</span>
    </>
  )
}


function Account() {
  const { account } = useWeb3React()
  console.log("account: "+account);

  const [name, setName] = React.useState();
  const [idNumber, setIdNumber] = React.useState();

  if(account != null && name == null){
    getIdNumber(account,setName,setIdNumber);
  }
  
  const { active, error } = useWeb3React()
  return (
    <>
    <div>
      <p><span>Account: {name}</span>
      <span style={{ margin: '1rem', textAlign: 'right' }}>{active ? '' : error ? '🔴' : ''}</span>
      </p>
      <p><span>ID Number: {idNumber}</span>
      <span style={{ margin: '1rem', textAlign: 'right' }}>{active ? '' : error ? '🔴' : ''}</span>
      </p>
      {/* <span role="img" aria-label="robot">
        🤖
      </span> */}
      <p>
      <span>
        {account === null
          ? '-'
          : account
          ? `Address: ${ account.substring(0, 6)}...${account.substring(account.length - 4)}`
          : ''}
      </span>
      </p>
      </div>
    </>
  )
}

function Balance() {
  const { account, library, chainId } = useWeb3React()

  const [balance, setBalance] = React.useState()
  React.useEffect((): any => {
    if (!!account && !!library) {
      let stale = false

      library
        .getBalance(account)
        .then((balance: any) => {
          if (!stale) {
            setBalance(balance)
          }
        })
        .catch(() => {
          if (!stale) {
            setBalance(null)
          }
        })

      return () => {
        stale = true
        setBalance(undefined)
      }
    }
  }, [account, library, chainId]) // ensures refresh if referential identity of library doesn't change across chainIds

  return (
    <>
      <span>Balance</span>
      <span role="img" aria-label="gold">
        💰
      </span>
      <span>{balance === null ? 'Error' : balance ? `Ξ${formatEther(balance)}` : ''}</span>
    </>
  )
}

function Header() {
  const { active, error } = useWeb3React()

  return (
    <>
      {/* <h1 style={{ margin: '1rem', textAlign: 'right' }}>{active ? '🟢' : error ? '🔴' : '🟠'}</h1> */}
      {/* <h3
        style={{
          display: 'grid',
          gridGap: '1rem',
          gridTemplateColumns: '1fr min-content 1fr',
          maxWidth: '20rem',
          lineHeight: '2rem',
          margin: 'auto'
        }}
      > */}
      
        <Account />
      {/* </h3> */}
    </>
  )
}

function App() {
  const context = useWeb3React<Web3Provider>()
  const { connector, library, account, activate, deactivate, active, error } = context

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = React.useState<any>()
  React.useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined)
    }
  }, [activatingConnector, connector])

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect()

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector)

  return (
    <>
    <div className="account-Wrapper">
      <div>
    <span className="left"> Universal KYC Issuer </span>
    </div>
    <div className="right">
      <Header />
      {/* <hr style={{ margin: '2rem' }} /> */}
      <div  
      className="btn-container"
        // style={{
        //   display: 'grid',
        //   gridGap: '1rem',
        //   gridTemplateColumns: '1fr 1fr',
        //   maxWidth: '20rem',
        //   margin: 'auto'
        // }}
      >
        {Object.keys(connectorsByName).map(name => {
          const currentConnector = connectorsByName[name]
          const activating = currentConnector === activatingConnector
          const connected = currentConnector === connector
          const disabled = !triedEager || !!activatingConnector || connected || !!error

          return (
            <div> 
            <button
              // style={{
              //   height: '3rem',
              //   borderRadius: '1rem',
              //   borderColor: activating ? 'orange' : connected ? 'green' : 'unset',
              //   cursor: disabled ? 'unset' : 'pointer',
              //   position: 'relative'
              // }}
              className="SubmitButton"
              disabled={disabled}
              key={name}
              onClick={() => {
                setActivatingConnector(currentConnector)
                activate(connectorsByName[name])
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  color: 'black',
                  margin: '0 0 0 1rem'
                }}
              >
                {activating && <Spinner color={'black'} style={{ height: '25%', marginLeft: '-1rem' }} />}
                {connected}
              </div>
              {name}
            </button>
            </div>
            
          )
        })}
        <div
        // style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
        {(active || error) && (
          <button
          className="ResetButton"
            // style={{
            //   height: '3rem',
            //   marginTop: '0rem',
            //   borderRadius: '1rem',
            //   borderColor: 'red',
            //   cursor: 'pointer'
            // }}
            onClick={() => {
              deactivate()
            }}
          >
            Disconnect
          </button>
        )}

        {!!error && <h4 style={{ marginTop: '1rem', marginBottom: '0' }}>{getErrorMessage(error)}</h4>}
      </div>


      </div>
      
      {/* <hr style={{ margin: '2rem' }} /> */}
      </div>
      </div>
      <div
        style={{
          display: 'grid',
          gridGap: '1rem',
          gridTemplateColumns: 'fit-content',
          maxWidth: '20rem',
          margin: 'auto'
        }}
      >
        {!!(library && account) && (
          <>
          <KYC/>
          <div 
          className="btn-container"
          >
          <button
          className="SubmitButton"
            // style={{
            //   height: '3rem',
            //   borderRadius: '1rem',
            //   cursor: 'pointer'
            // }}
            onClick={() => {
              console.log('Issuing ID for.. Name: ' + fname + ' ' + lname  + ' Account: '+account);
              var fname = document.getElementById('fname').value;
              var lname = document.getElementById('lname').value;
              
              library
                .getSigner(account)
                .signMessage('Apply for Digital ID. If your information is valid a Digital ID will be sent to your account.')
                .then((signature: any) => {
                  issueId(account, fname + ' ' + lname);
                  window.alert(`Application recieved. If approved an ID will be sent to your account shortly. \n\nSignature:\n${signature}`)
                })
                .catch((error: any) => {
                  window.alert('Failure!' + (error && error.message ? `\n\n${error.message}` : ''))
                })
            }}
          >
            Sign Message
          </button>
          </div>
          </>
        )}
        
     
      </div>
    </>
  )
}
