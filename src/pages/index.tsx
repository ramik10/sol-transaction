import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
export default function AppBar(){
  const {publicKey} = useWallet()
  
  return (
    <>
      <div>
          <span>Wallet-Adapter Example</span>
          <WalletMultiButton/>
      </div>
      <div>
        {publicKey?.toString()}
      </div>
      </>
  )
}