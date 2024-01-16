import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAtomValue } from 'jotai/react';
import Button from '@/components/Common/Button';
import ShortLogo from '@/components/Common/Logo/ShortLogo';
import SearchBar from '@/components/Common/SearchBar';
import useGetChannelList from '@/hooks/api/useGetChannelList';
import { PATH } from '@/constants/path';
import { channelNameAtom } from '@/store/auth';
import { darkAtom } from '@/store/theme';
import { Channel } from '@/types/ResponseType';
import { createChannelFromAnonymous } from '@/utils/anonymous';
import ChannelIcon from '../../components/ChannelList/ChannelIcon';
import { Body, ChannelIconList, Header, Img, Title } from './index.style';

function ChannelList() {
  const { data: channelList } = useGetChannelList();
  const userName = useAtomValue(channelNameAtom);
  const [channels, setChannels] = useState<Channel[]>(channelList);
  const navigator = useNavigate();
  const darkMode = useAtomValue(darkAtom);

  useEffect(() => {
    setChannels(channelList);
  }, [channelList]);

  const handleChangeKeyword = (keyword: string) => {
    const filteredChannels = channelList?.filter((channel: Channel) =>
      channel.name.includes(keyword)
    );
    setChannels(filteredChannels);
  };
  const handleClickCreateChannel = () => {
    if (!createChannelFromAnonymous(userName)) return;
    navigator(PATH.CHANNEL_CREATE);
  };
  return (
    <>
      <Header>
        <Title>
          <h1>공개 박 구경하기</h1>
          <span>친구들의 박을 구경하고 메시지를 남겨봐요.</span>
          <Button
            content="나의 박 만들기"
            size={'lg'}
            styleOption={{
              height: '2.5rem',
              'margin-top': '1rem'
            }}
            onClick={handleClickCreateChannel}
          />
        </Title>
        <Img>
          <ShortLogo darkMode={darkMode} />
        </Img>
      </Header>
      <Body>
        <SearchBar
          placeholder="채널명을 검색해주세요."
          handleChangeKeyword={handleChangeKeyword}
        />
        <ChannelIconList>
          {channels &&
            [...channels].reverse().map((channel: Channel) => (
              <div
                key={`channel-${channel._id}`}
                role="button">
                <Link to={`/channel/${channel.name}`}>
                  <ChannelIcon channel={channel} />
                </Link>
              </div>
            ))}
        </ChannelIconList>
      </Body>
    </>
  );
}

export default ChannelList;
