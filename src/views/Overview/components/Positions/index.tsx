import style from './style.module.scss';
import Currency from 'components/Currency';
import DataGrid from 'components/DataGrid';
import MarketName from 'components/MarketName';
import Button from 'components/Button';
import { data } from './data';
import { useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

interface Props {
  className?: string;
}

const Positions = ({ className }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const rows = useMemo(() => {
    if (!expanded) {
      return [data[0]];
    } else {
      return data;
    }
  }, [expanded]);

  return (
    <div className={className}>
      <div className={style.header}>
        <h2 className={style.heading}>
          Open Positions
          <small>(10)</small>
        </h2>
        <Button className={style.closeAll} size="small">Close All</Button>
      </div>
      <DataGrid
        columns={[
          [
            { label: 'Market' },
            { label: 'Name' },
            {
              label: 'Position',
              sortable: true,
              helpText:
                'This is your total notional exposure (collateral * leverage).',
            },
            { label: 'Leverage', sortable: true },
            { label: 'Market Rate', sortable: true },
            { label: 'Oracle Rate', sortable: true },
            { label: 'Margin Ratio', sortable: true },
            { label: 'P&L', sortable: true },
            { label: '' },
          ],
        ]}
        data={rows.map(position => ([
          <MarketName market={position.marketName as any} />,
          position.name,
          <Currency amount={position.position} code="BUSD" showChange />,
          position.leverage,
          position.marketRate,
          position.oracleRate,
          position.marginRatio,
          <Currency amount={position.pnl} code="BUSD" showChange />,
          <Button size="small">Close</Button>
        ]))}
      />
      <div className={style.expand}>
        <div className={style.control} onClick={() => setExpanded(!expanded)}>
          {expanded ? (
            <span>Collapse Positions</span>
          ) : (
            <span>View All Positions</span>
          )}
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
      </div>
    </div>
  );
};

export default Positions;
