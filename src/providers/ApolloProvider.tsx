import { ApolloClient, ApolloProvider as AP, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPH_API,
  cache: new InMemoryCache()
});

interface Props {
  children?: any;
}

const ApolloProvider = ({ children }: Props) => {
  return (
    <AP client={client}>
      {children}
    </AP>
  )
}

export default ApolloProvider;
