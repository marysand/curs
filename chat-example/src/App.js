import React from 'react';
import { Chat, Channel, ChannelList, Window } from 'stream-chat-react';
import { ChannelHeader, MessageList } from 'stream-chat-react';
import { MessageInput, Thread } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';

import 'stream-chat-react/dist/css/index.css';

const chatClient = new StreamChat('rdysn5pq9nah');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoic3RpbGwtdGh1bmRlci0zIn0.1QQNjg_Ob7hSFNZzzUQecyAQE5cCtdi9qRsDX2DdZVk';

chatClient.setUser(
  {
    id: 'still-thunder-3',
    name: 'Still thunder',
    image: 'https://getstream.io/random_svg/?id=still-thunder-3&name=Still+thunder'
  },
  userToken,
);

const filters = { type: 'messaging', members: { $in: ['still-thunder-3'] } };
const sort = { last_message_at: -1 };
const channels = chatClient.queryChannels(filters, sort);

const App = () => (
  <Chat client={chatClient} theme={'messaging light'}>
    <ChannelList
      filters={filters}
      sort={sort}
    />
    <Channel>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
);

export default App; 
