// import styled from 'styled-components'
// import { colors } from '../../utils/style/colors'
// import { StyledLink } from '../../utils/style/Atoms'
import BasicCard from '../../components/Card'
import { useNavigate } from 'react-router-dom'


// const HomeWrapper = styled.div`
//   display: flex;
//   justify-content: center;
// `
// const HomerContainer = styled.div`
//   margin: 30px;
//   background-color: ${colors.background};
//   padding: 60px 90px;
//   display: flex;
//   flex-direction: row;
//   max-width: 1200px;
// `
// const LeftCol = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   flex: 1;
//   ${StyledLink} {
//     max-width: 250px;
//   }

// const StyledTitle = styled.h2`
//   padding-bottom: 30px;
//   max-width: 280px;
//   line-height: 50px;
// `


export const Home = () => {
  const navigate = useNavigate()
  const handleButton1Click = () => navigate('/etages')

  return (
    <BasicCard label="Oussema" title ="ENIM Vibration" label2="Specialité: Numérique" paragraph="Projet fin d'études" button="Nouveau projet" button2="Ouvrir un Projet" onButton1Click={handleButton1Click}/>
  )
}
