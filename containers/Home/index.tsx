import { useMemo } from "react";
import { formatMoney, formatNumber } from "accounting";

import Table from "components/Table";

import { useGetCryptoListQuery } from "services";
import { CryptoListData } from "services/types";

import NameGroup from "./components/NameGroup";
import Delta from "components/Delta";

function Home() {
  const { data } = useGetCryptoListQuery(30);
  const columns = useMemo(
    () => [
      {
        key: "0",
        title: "#",
        dataIndex: "rank",
      },
      {
        key: "1",
        title: "Name",
        dataIndex: "name",
        render: (data: CryptoListData) => (
          <NameGroup iconUrl={data.iconUrl} name={data.name} />
        ),
      },
      {
        key: "2",
        title: "Price",
        dataIndex: "price",
      },
      {
        key: "3",
        title: "24%",
        dataIndex: "change",
        render: (data: CryptoListData) => (
          <Delta number={Number(data.change)} />
        ),
      },
      {
        key: "4",
        title: "Market Cap",
        dataIndex: "mcap",
      },
      {
        key: "5",
        title: "Volume(24h)",
        dataIndex: "volume",
      },
    ],
    []
  );
  let dataSource =
    data?.coins.map((coin) => ({
      rank: coin.rank,
      name: coin.name,
      iconUrl: coin.iconUrl,
      price: formatMoney(coin.price),
      mcap: formatMoney(coin.marketCap, undefined, 0),
      volume: formatMoney(coin["24hVolume"], undefined, 0),
      trade: coin.uuid,
      change: coin.change,
    })) || [];
  return (
    <Table columns={columns} dataSource={dataSource} skeletonOfRows={30} />
  );
}

export default Home;
