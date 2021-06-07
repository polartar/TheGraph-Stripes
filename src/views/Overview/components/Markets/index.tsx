import style from './style.module.scss';
import DataGrid from 'components/DataGrid';
import MarketName from 'components/MarketName';
import Button from 'components/Button';
import { data } from './data';
import Signum from 'components/Signum';
import Label from 'components/Label';
import Currency from 'components/Currency';

interface Props {
  className?: string;
}

const Markets = ({ className }: Props) => {
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
        data={data.map((row) => [
          <MarketName market={row.market as any} />,
          row.name,
          row.marketRate.current,
          <Signum value={row.marketRate.change} />,
          row.oracleRate.current,
          <Signum value={row.oracleRate.change} />,
          <Currency amount={row.stakedLiquidity} code="BUSD" />,
          <Currency amount={row.turnover} code="BUSD" />,
          <Button size="small">Trade</Button>,
        ])}
      />
    </div>
  );
};

export default Markets;
