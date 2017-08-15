import React from 'react';
import { gql, graphql } from 'react-apollo';

import { channelsListQuery } from './ChannelsListWithData';

const AddChannel = ({ mutate }) => {
  const handleKeyUp = (evt) => {
    if (evt.keyCode === 13) {
      evt.persist();
      mutate({
        variables: { name: evt.target.value },
        refetchQueries: [ { query: channelsListQuery }],
      })
      .then(res => {
        evt.target.value = ''
      })
    }
  };

  return (
    <input type="text" placeholder="New Channel" onKeyUp={handleKeyUp} />
  )
}

const addChannelMutation = gql`
  mutation addChannel($name: String!) {
    addChannel(name: $name) {
      id
      name
    }
  }
`;

export default graphql(addChannelMutation)(AddChannel);
