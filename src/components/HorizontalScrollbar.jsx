import { useContext } from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import { Box, Typography } from '@mui/material'

import ExerciseCard from './ExerciseCard'
import BodyPart from './BodyPart'
import RightArrowIcon from '../assets/icons/right-arrow.png'
import LeftArrowIcon from '../assets/icons/left-arrow.png'

const Arrow = ({ onClick, className, imgSrc, alt }) => {
  return (
    <Typography onClick={onClick} className={className}>
      <img src={imgSrc} alt={alt} />
    </Typography>
  )
}

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext)

  return (
    <Arrow
      onClick={scrollPrev}
      className='right-arrow'
      imgSrc={LeftArrowIcon}
      alt='left-arrow'
    />
  )
}

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext)

  return (
    <Arrow
      onClick={scrollNext}
      className='left-arrow'
      imgSrc={RightArrowIcon}
      alt='right-arrow'
    />
  )
}

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    {data?.map((item) => (
      <Box
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        m='0 40px'
      >
        {bodyParts ? (
          <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
        ) : (
          <ExerciseCard exercise={item} />
        )}
      </Box>
    ))}
  </ScrollMenu>
)

export default HorizontalScrollbar
