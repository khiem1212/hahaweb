import React from 'react'
import styled from 'styled-components'
// import { Search } from "@material-ui/icons";
import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { mobile } from '../responsive';



const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`

padding:0px 10px;
display:flex;
justifyy-content: space-between;
${mobile({ padding: "10px 0px" })}

`
const Left = styled.div`

flex:1;
display:flex;
align-items: center;
`
const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({ flex: 2, justifyContent: "center" })}
`
const Logo = styled.h1`

font-weight:bold;
`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const Center = styled.div`

flex: 1;
text-align: center;
`

const SearchContainer = styled.div`

border:1px solid lightgray;
margin-left:25px;
display:flex;
align-items: center;
padding: 5px;
`
const Language = styled.span`
font-size:30px;
cursor:pointer;
${mobile({ display: "none" })}

`

const Navbar = () => {
  return (
    <Container>
    <Wrapper>
    <Left>
        <Language>en</Language>
        <SearchContainer>
            <Input/>
            <SearchOutlined style={{marginLeft: '5px', color:'gray'}}/>
        </SearchContainer>
    </Left>

    <Center><Logo>LAMA.</Logo></Center>
    <Right><MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
          <ShoppingCartOutlined style={{fontSize: '16px'}}/>
          </MenuItem></Right>
   
   </Wrapper>
  </Container>
   
  )
}

export default Navbar