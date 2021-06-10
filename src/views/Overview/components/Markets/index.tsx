import style from './style.module.scss';
import DataGrid from 'components/DataGrid';
import MarketName from 'components/MarketName';
import Button from 'components/Button';
import Signum from 'components/Signum';
import Currency from 'components/Currency';
import useMarkets from 'hooks/useMarkets';
import { toCurrency, toPercent } from 'utils/formatters';

interface Props {
  className?: string;
}

const Markets = ({ className }: Props) => {
  const { loading, data } = useMarkets();

  if (loading) {
    return <>Loading...</>
  }

  return (
    <div className={className}>
      <div className={style.header}>
        <h2 className={style.heading}>Markets</h2>
      </div>
      <DataGrid
        columns={[
          [
            { label: 'Market' },
            { label: 'Name' },
            { label: 'Market Rate', colSpan: 2 },
            { label: 'Oracle Rate', colSpan: 2 },
            { label: 'Staked Liquidity', sortable: true },
            { label: '24h Turnover', sortable: true },
            { label: '' },
          ],
          [
            { label: '' },
            { label: '' },
            { label: 'Current' },
            { label: '24h Change' },
            { label: 'Current' },
            { label: '24h Change' },
            { label: '' },
            { label: '' },
            { label: '' }
          ]
        ]}
        data={data.markets.map((market) => [
          <MarketName market={market.name as any} />,
          market.assetSymbol,
          toPercent(market.currentPrice),
          <Signum value={toPercent(market.currentPrice24Change)} />,
          toPercent(market.oraclePrice),
          <Signum value={toPercent(market.oraclePrice24Change)} />,
          <Currency amount={toCurrency(market.pool.stackedLiquidity)} code="BUSD" />,
          <Currency amount={toCurrency(market.turnover24)} code="BUSD" />,
          <Button size="small">Trade</Button>,
        ])}
      />
    </div>
  );
};

export default Markets;
