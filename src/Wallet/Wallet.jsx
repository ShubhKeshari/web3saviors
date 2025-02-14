import { createWeb3Modal } from '@web3modal/wagmi/react';
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config';
import { WagmiProvider } from 'wagmi';
import { arbitrum, mainnet } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const projectId = '0b282cc24fb143bc6955afec12d49bfa';

const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com', 
  icons: ['https://avatars.githubusercontent.com/u/37784886']
};

const chains = [mainnet, arbitrum];
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata
});

// 3. Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
});

function Web3ModalProvider({ children }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
export { Web3ModalProvider };