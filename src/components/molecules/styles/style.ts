import styled from 'styled-components'

const TitleBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    justify-content: flex-end;
  }
`

const Hone = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 3.5rem;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
  line-height: 0.8;
  color: ${({ theme }) => theme.text};
  @media (min-width: 768px) {
    text-align: right;
    font-size: 5rem;
  }
  @media (min-width: 1024px) {
    font-size: 7rem;
  }
`

const Description = styled.p`
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
  font-weight: 500;
  text-align: left;
  font-style: italic;
  color: ${({ theme }) => theme.text};
  @media (min-width: 768px) {
    font-size: 1.75srem;
  }
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: max-content;
  grid-template-rows: max-content;
  grid-auto-flow: row;
  grid-template-areas:
    'Title'
    'SubTitle';
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: max-content max-content max-content;
    grid-template-rows: max-content max-content;
    grid-auto-flow: row;
    grid-template-areas:
      'Title Title Title'
      'SubTitle SubTitle .';
  }
`

const GridSubTitle = styled.div`
  grid-area: SubTitle;
`

const GridTitle = styled.div`
  grid-area: Title;
  text-align: right;
`

const Gridi1 = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 200px;
    grid-template-rows: 30% 70%;
    grid-auto-flow: row;
    grid-template-areas:
      'WorkName'
      'Specification';
  }
`

const WorkName = styled.div`
  display: none;
  @media (min-width: 768px) {
    grid-area: WorkName;
    display: flex;
    align-items: flex-start;
  }
`

const Specification = styled.div`
  display: none;
  @media (min-width: 768px) {
    grid-area: Specification;
    display: flex;
    align-items: flex-start;
  }
`

const CirculatContainer = styled.div`
  width: 180px;
  height: 180px;
  position: relative;
`

const SvgText = styled.textPath`
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.2rem;
`

const SvgContainer = styled.svg`
  width: 100%;
  height: 100%;
`

const SvgArrow = styled.a`
  position: absolute;
`

export {
  TitleBlock,
  Hone,
  Description,
  GridContainer,
  GridSubTitle,
  GridTitle,
  Gridi1,
  WorkName,
  Specification,
  CirculatContainer,
  SvgContainer,
  SvgText,
  SvgArrow,
}
