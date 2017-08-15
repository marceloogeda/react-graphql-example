import React from 'react';
import {
    gql,
    graphql,
} from 'react-apollo';

import AddChannelWithMudation from './AddChannelWithMudation';

const ChannelsList = ({ data: {loading, error, channels }}) => {
  if (loading) {
    return <p>Loading ...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div className="channelsList">
      <AddChannelWithMudation />
      { channels.map( ch => <li key={ch.id}>{ch.name}</li> ) }
    </div>
  )
};

export const channelsListQuery = gql`
  query ChannelsListQuery {
    channels {
      id
      name
    }
  }
`;

export default graphql(channelsListQuery, {
  options: { pollInterval: 5000 },
})(ChannelsList);
