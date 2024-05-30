import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Tag from './Tag';
import TagPanel from './TagPanel';

const testTag = 'Все темы'

describe('Tag Panel', () => {
  it('children amount should be equal 1', () => {
    const { getByTestId, unmount } = render(<TagPanel tags={[testTag]} chosenTag={testTag} setChosenTags={() => { }} />);

    expect(
      getByTestId('tag-panel').children.length
    ).toBe(1);

    unmount();
  });

  it(`component should render selected tag "${testTag}"`, () => {
    const { getByTestId, unmount } = render(<Tag tag={testTag} isChosen />);

    expect(getByTestId('tag-item').innerHTML).toEqual(testTag);

    expect(getByTestId('tag-item').className).toContain('active');

    unmount()
  });
})