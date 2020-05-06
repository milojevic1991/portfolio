import React from 'react';
import Fade from 'react-reveal/Fade';
import Text from '../../UI/Text/text';
import Icons from '../Icon/icons';

import classes from './workItem.module.css';
const WorkItem = ({
  title,
  company,
  year,
  desc,
  reverse = false,
  iconStack,
  hideStack = false,
}) => {
  const reverseRow = reverse ? { alignItems: 'flex-end' } : null;
  const textReverse = reverse ? { textAlign: 'right' } : null;

  return (
    <div className={classes.aboutMeWorkItem} style={reverseRow}>
      <div className={classes.aboutMeWorkItemCircle}></div>

      <Text size="workTitle">
        <Fade bottom>{title} </Fade>
      </Text>

      <Text style={textReverse} size="workTitleMedium">
        {company}
      </Text>

      <Text style={textReverse} size="workTitleSmall">
        {year}
      </Text>

      {hideStack === true ? null : <Icons icons={iconStack} />}
      <Text styled={textReverse} size="textSecond">
        {desc}
      </Text>
    </div>
  );
};

export default WorkItem;
