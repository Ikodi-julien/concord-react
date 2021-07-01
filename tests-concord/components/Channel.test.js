import React from 'react';
import {StaticRouter} from 'react-router-dom';
import { createMemoryHistory } from "history";
import {expect} from 'chai';
import {shallow} from 'enzyme';

import Channel from 'src/components/Channel/Channel';
import MyChannelsContainer from 'src/containers/MyChannelsContainer';
import UsersInChannelListContainer from 'src/containers/UsersInChannelListContainer';
import ChannelMessages from './ChannelMessages/Channel/ChannelMessages';
import ChannelForm from 'src/components/Channel/ChannelForm/ChannelForm';
import Navbar from 'src/containers/NavbarContainer';
import BigLoader from 'src/components/BigLoader/BigLoader';
import Error from 'src/components/Error/Error';
import StoreUrl from 'src/components/StoreUrl/StoreUrl';
import Footer from 'src/components/Footer/Footer';


describe('Channel component', () => {
  const fakeChannel = {
    id: 32,
    title: 'Channel de test',
    messages: [{
      id: 'A',
      avatar: 'chatBotAvatar',
      nickname: 'ConcordBot',
      content: {
        ops: [{ insert: `On parle` }],
      },
    }],
    users: [{
      id: 3,
      nickname: 'test',
    }],
    inputForm: '',
    isLoading: true,
    error: false,
    quill: null,
    quillContent: '',
    reinitQuill: false,
  };

  // Simulation du montage du composant.
  const wrapper = shallow(<Channel channel={fakeChannel} />);
  //
  test("redirects to channel page", () => {
    const history = createMemoryHistory()
    render(
      <MemoryRouter initialEntries={["/channel/32"]}>
        <Channel channel={fakeChannel}/>
      </MemoryRouter>
    );
    expect(history.location.pathname).toBe("/login"););
  });
  

  // Vérifier si Home renvoie trois composants Card avec les fakeRecipes
  it('Should return 3 Card components with fakeRecipes given', () => {

    expect(wrapper.find(Card).to.have.lengthOf(3));
  })
})
