import React from 'react'
import styled from 'styled-components'
import { bgColor2, fontSize2} from '../styles/Styles'

const SearchContainer = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: 200px 1fr;
  align-items: center;
  grid-gap: 20px;
`
const SearchInput = styled.input`
  width: 200px;
  ${bgColor2}
  color: #52CE99;
  box-shadow: 0px 0px 1px 1px #52CE99;
  border: 1px solid;
  border-radius: 3px;
  ${fontSize2}
  margin: -75px;
  height: 25px;
  outline: none;
`

export default function () {
  return (
    <SearchContainer>
      <h3>Search all coins</h3>
      <SearchInput onKeyUp={this.filterCoins} />
    </SearchContainer>
  )
}