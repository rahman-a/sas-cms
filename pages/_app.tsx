import { ReactBricks } from 'react-bricks/frontend'
import type { AppProps } from 'next/app'
import config from '../react-bricks/config'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

// import '../css/style.css'
import '@styles/globals.scss'

const queryClient = new QueryClient()

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactBricks {...config}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </ReactBricks>
    </QueryClientProvider>
  )
}

export default MyApp
