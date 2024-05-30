import { FC } from 'react';
import classes from './Tags.module.scss'
import clsx from 'clsx';

type Props = {
  tag: string
  isChosen: boolean
}

const Tag: FC<Props> = ({ tag, isChosen }) => {
  return (
    <button data-testid="tag-item" className={clsx(classes.tag, isChosen && classes.tag_active)}>
      {tag}
    </button>
  );
};

export default Tag;