import useGetChannelList from '@/hooks/query/useGetChannelList';

function ChannelList() {
  const { data } = useGetChannelList();
  return (
    <div>
      {data?.map(({ fullName }: { fullName: string }, index: number) => (
        <div key={`${fullName}${index}`}>{fullName}</div>
      ))}
    </div>
  );
}

export default ChannelList;
