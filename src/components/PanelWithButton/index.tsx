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
}

const PanelWithButton = ({
  heading,
  subHeading,
  buttonName,
  children,
  className,
  actions,
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
                  <FontAwesomeIcon icon={action.icon} />
                </button>
              ))}
            </div>
          )}
        </div>
      <Button variant="primary" size="medium">
        {buttonName}
      </Button>
      </div>
      
      <div className={style.content}>{children}</div>
    </div>
  );
};

export default PanelWithButton;
