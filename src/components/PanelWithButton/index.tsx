import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/Button';
import classes from 'utils/classes';
import style from './style.module.scss';

interface Props {
  heading: string;
  subHeading?: string;
  buttonName?: string;
  children?: any;
  className?: string;
  actions?: {
    icon: IconProp;
    onClick: () => void;
  }[];
  addLiquidity: Function
  initLiquidity: Function
}

const PanelWithButton = ({
  heading,
  subHeading,
  buttonName,
  children,
  className,
  actions,
  addLiquidity,
  initLiquidity
}: Props) => {
  return (
    <div className={classes(style.panel, className)}>
      <div className={style.header}>
        <div className={style.headerLabel}>
          <h2 className={style.heading}>
            {heading}
            {subHeading && <small>{subHeading}</small>}
          </h2>
          {actions && (
            <div className={style.actions}>
              {actions.map((action, i) => (
                <button className={style.action} onClick={action.onClick} key={i}>
                  <FontAwesomeIcon icon={action.icon}  onClick={() => initLiquidity()}/>
                </button>
              ))}
            </div>
          )}
        </div>

        <Button variant="primary" size="medium" onClick={() => addLiquidity()}>
          {buttonName}
        </Button>
      </div>
      
      <div className={style.content}>{children}</div>
    </div>
  );
};

export default PanelWithButton;
