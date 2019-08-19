import React from 'react'
import { Button } from 'semantic-ui-react'
import styled from 'styled-components';

const PageButtonContainer = styled.span`
  padding-top: 50px;

`;

const PageButtons = (props) => {

  const { api, info, prevPage, nextPage } = props

  const getPageNum = () => {

    const charArr = api.split('/')
    let pageNum = "1"
    let pageQuery = charArr[charArr.length - 1]

    if (pageQuery === '') {
      return pageNum

    } else {
      return pageNum = pageQuery.split('=')[pageQuery.split('=').length - 1]
    }

  }

  const pageCount = info.pages
  const pageNum = getPageNum()
  const prevDisabled = (pageNum === '1')
  const nextDisabled = (pageNum == pageCount)
  return (
    <PageButtonContainer>
      <Button.Group widths='3'>
        <Button
          fluid
          content='Prev'
          icon='left arrow'
          labelPosition='left'
          onClick={prevPage}
          disabled={prevDisabled}
        />
        <Button
          fluid
          content={`Page ${pageNum} of ${pageCount}`}
        />
        <Button
          fluid
          content='Next'
          icon='right arrow'
          labelPosition='right'
          onClick={nextPage}
          disabled={nextDisabled} />
      </Button.Group>
    </PageButtonContainer>
  )
}

export default PageButtons