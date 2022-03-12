import React, { useState } from "react";

import "../styles/globals.scss";
import "antd/dist/antd.css";
import { QueryClient, QueryClientProvider } from "react-query";

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // disabling caching and background reloading during testing
            refetchIntervalInBackground: false,
            refetchOnWindowFocus: false,
            cacheTime: 0,
            retry: false,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
