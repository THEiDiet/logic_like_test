import { FC } from 'react';
import Tag from './Tag';
import classes from './Tags.module.scss'

type Props = {
  tags: string[]
  chosenTag: string
  setChosenTags: (tag: string) => void
}

const TagPanel: FC<Props> = ({ tags, chosenTag, setChosenTags }) => {
  return (
    <div>
      <div data-testid="tag-panel" className={classes.panel} onClick={(e) => setChosenTags((e.target as HTMLButtonElement).innerText)}>
        {tags.map(tag => <Tag key={tag} tag={tag} isChosen={chosenTag === tag} />)}
      </div>
    </div>
  );
};

export default TagPanel;