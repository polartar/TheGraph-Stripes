import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tooltip from 'components/Tooltip';
import classes from 'utils/classes';
import style from './style.module.scss';

interface Props {
  label?: string;
  info?: any;
  children?: any;
  className?: string;
  join?: 'top' | 'bottom' | 'both';
  helpText?: string;
}

export type FieldWrapperProps = Omit<Props, 'children'>;

const FieldWrapper = ({
  label,
  info,
  children,
  className,
  join,
  helpText,
}: Props) => {
  return (
    <div
      className={classes(style.container, className, {
        [style.joinTop]: join === 'top',
        [style.joinBottom]: join === 'bottom',
        [style.joinBoth]: join === 'both',
      })}
    >
      <div className={style.labelWrapper}>
        <span className={style.label}>
          {label}
          {helpText && (
            <Tooltip content={helpText}>
              <span className={style.helpIcon}>
                <FontAwesomeIcon icon={faQuestionCircle} />
              </span>
            </Tooltip>
          )}
        </span>
        {info && <span className={style.info}>{info}</span>}
      </div>
      {children}
    </div>
  );
};

export default FieldWrapper;
