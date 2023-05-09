import React, { useEffect } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import TeacherCard from "./TeacherCard";
import { useDispatch, useSelector } from "react-redux";
import { getTeacherData } from "../redux/hireReducer/action";
import { Progress,Box } from '@chakra-ui/react'
import { useLocation, useSearchParams } from "react-router-dom";

const TeacherList = () => {
  const [searchParams]=useSearchParams()
  const data = useSelector((store) => store.teacherReducer.teacherData);
  const isLoading = useSelector((store) => store.teacherReducer.isLoading);
 
  const location =useLocation()

  const dispatch = useDispatch();

  const paramObj = {

    params: {
      role:searchParams.get('role'),
       q:searchParams.get('search'),
       location:searchParams.getAll('loaction'),
       _sort:searchParams.get('sort') && 'rating',
       _order:searchParams.get('sort'),
       _limit:15,
       _page:searchParams.get('page')
      },
    };
    
    useEffect(() => {
    dispatch(getTeacherData(paramObj));
  }, [location.key]);

  console.log(data);
  console.log(isLoading)
  return isLoading ? (<Box>
    <Progress size='xs' isIndeterminate />
    <br/>
    <br/>
    <br/>
    <Progress size='xs' isIndeterminate />
    <br/>
    <br/>
    <br/>
   
    <Progress size='xs' isIndeterminate />
    </Box>
  ) : (

     <Box> 
    <SimpleGrid style={{margin:'auto'}} columns={{ sm: 2, md: 3, lg: 5, base: 1 }} spacing="8px">
      {data.map((item) => {
        return <TeacherCard key={item.id} {...item} />;
      })}

    </SimpleGrid>

    </Box> 
   
  );
};

export default TeacherList;
