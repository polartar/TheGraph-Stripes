import style from './style.module.scss';

interface Props {
  columns: {
    label: string;
    colSpan?: number;
    sortable?: boolean;
    helpText?: string;
  }[][];
  data: (string | JSX.Element)[][];
}

const DataGrid = ({ columns, data }: Props) => {
  return (
    <table className={style.table} cellPadding="0" cellSpacing="2">
      <thead>
        {columns.map((row, i) => (
          <tr key={i}>
            {row.map((heading, j) => (
              <th key={j} className={style.heading} colSpan={heading.colSpan}>
                <span>{heading.label}</span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i} className={style.row}>
            {row.map((cell, j) => (
              <td key={j} className={style.cell}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default DataGrid;
