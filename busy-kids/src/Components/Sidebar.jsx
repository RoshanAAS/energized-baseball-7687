import {
  Box,
  Input,
  InputLeftElement,
  InputGroup,
  Stack,
  Radio,
  RadioGroup,
  Checkbox,
  Text
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
// import styled from '@emotion/styled'
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Sidebar = ({page}) => {
  const [searchParma, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [role, Setrole] = useState("");
  const initLocation=searchParma.getAll('loaction')

  const [loaction,setLocation]=useState(initLocation||[])

  const [sort,setSort]=useState('')

  useEffect(() => {
    const serchparams = {};

    search && (serchparams.search = search);
    role && (serchparams.role = role);
    loaction && (serchparams.loaction=loaction)
     sort && (serchparams.sort=sort) 
     page && (serchparams.page=page) 
    setSearchParams(serchparams);
  }, [search, role,loaction,sort,page]);

  const handrole = (e) => {
    Setrole(e);
  };

  const handalCity=(e)=>{
     const{value}=(e.target)

     let newcity=[...loaction]

      if(newcity.includes(value)){
        newcity=newcity.filter((el)=> el!==value)
      }
      else{
        newcity.push(value)
      }
      setLocation(newcity)
  }

  const handalsort=(e)=>{
           
    setSort(e)
  }
  return (
    <Box
        >
      <Box
       style={{ boxShadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"}}>
          
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.20" />}
          />
          <Input
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Teacher"
            size="sm"
          />
        </InputGroup>
      </Box>

      <Box style={{ marginTop: "25px", width: "85%", margin: "25px auto" }}>
        <Box
          style={{
            height: "15vh",
            padding: "10px",
            boxShadow:
              "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
          }}
        >
          <RadioGroup onChange={handrole} value={role}>
            <Stack direction="column">
              <Radio size='sm' value="">All</Radio>
              <Radio size='sm' value="Full-Time">Full-Time</Radio>
              <Radio size='sm' value="Part-Time">Part-Time</Radio>
            </Stack>
          </RadioGroup>
        </Box>

        {/* ////////////////////////// */}

         <Box
           style={{
            height: "40vh",
            padding: "10px",
            boxShadow:
              "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
          }}>
            <Text fontWeight={600} marginBottom={'5'} fontSize={"sm"}  color={"gray.400"}>Filter By City</Text>
        <Stack spacing={[1, 5]} direction={["column"]}>
          <Checkbox onChange={handalCity}  value={'Mumbai'} size="sm" colorScheme="green" defaultChecked={loaction.includes('Mumbai')}>
             Mumbai
          </Checkbox>
          <Checkbox onChange={handalCity}  value={'Pune'} size="sm" colorScheme="green" defaultChecked={loaction.includes('Pune')}>
             Pune
          </Checkbox>
          <Checkbox   onChange={handalCity} value={'Kolkata'} size="sm" colorScheme="green" defaultChecked={loaction.includes('Kolkata')}>
            Kolkata
          </Checkbox>
          <Checkbox  onChange={handalCity}  value={'Bangalore'} size="sm" colorScheme="green" defaultChecked={loaction.includes('Bangalore')}>
            Bangalore
            Delhi
          </Checkbox>
          <Checkbox  onChange={handalCity} value={'Delhi'} size="sm" colorScheme="green" defaultChecked={loaction.includes('Delhi')}>
            Delhi
          </Checkbox>
        </Stack>
        </Box>



        <Box
          style={{
            height: "20vh",
            padding: "10px",
            boxShadow:
              "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
          }}
        >
            <Text fontWeight={600} marginBottom={'5'} fontSize={"sm"}  color={"gray.400"}>sort By Rating</Text>
          <RadioGroup onChange={handalsort} value={sort}>
            <Stack direction="column">
              <Radio size='sm' value="">All</Radio>
              <Radio size='sm' value="asc">Ascending</Radio>
              <Radio size='sm' value="desc">Descending</Radio>
            </Stack>
          </RadioGroup>
        </Box>


      </Box>
    </Box>
  );
};

export default Sidebar;

// const DIV=styled.div`
//   @media screen and (min-width:480px){
//      width:550px;
//   }
// `

{
  /* <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<PhoneIcon color='gray.300' />}
    />
    <Input type='tel' placeholder='Phone number' />
  </InputGroup> */
}
