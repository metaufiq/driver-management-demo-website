import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { HiOutlinePlus } from 'react-icons/hi';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { NavigationButton, PrimaryButton } from '../../components/Button';
import DriverCard from '../../components/DriverCard';
import TextInput from '../../components/TextInput';
import { PAGE } from '../../constants';
import useUsers from '../../hooks/useUsers';
import useUsersQuery from '../../hooks/useUsersQuery';
import { 
  HeaderContainer,
  HeaderDescription, 
  HeaderTitle, 
  HeaderUtilsContainer, 
  ListUserContainer, 
  PaginationContainer, 
  SpinnerContainer
} from './DriverManagement.component.styles';
import { SetPageIndex, SetSearchInput } from './DriverManagement.component.types';
import Spinner from '../../components/Spinner';

const _onInputSearch = (setSearchInput: SetSearchInput)=>(event: React.ChangeEvent<HTMLInputElement>)=>{
  setSearchInput(event.target.value)
}

const _onNextPage = (setPageIndex: SetPageIndex)=>()=>{
  setPageIndex(index=>index+1)
}

const _onPrevPage = (setPageIndex: SetPageIndex)=>()=>{
  setPageIndex(index=>index-1)
}

const DriverManagement: NextPage = (props) => {
  const {users:initialValue, error, loading} = useUsersQuery();
  const [pageIndex, setPageIndex] = useState(1);
  const [searchInput, setSearchInput]= useState<string>();
  const {users} = useUsers({initialValue, searchInput, pageIndex})

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderContainer>
        <div>
          <HeaderTitle>DRIVER MANAGEMENT</HeaderTitle>
          <HeaderDescription>Data Driver bekerja dengan Anda.</HeaderDescription>
        </div>
        <HeaderUtilsContainer>
          <TextInput
            placeholder='Cari Driver'
            onChange={_onInputSearch(setSearchInput)}
            type='text'
            leftIcon={<FaSearch/>}
          />
          <PrimaryButton textAlign='start'>
              TAMBAH DRIVER
              <HiOutlinePlus/>
          </PrimaryButton>
        </HeaderUtilsContainer>
      </HeaderContainer>

      <br/>
      {
        loading ? (
          <SpinnerContainer>
            <Spinner size='4rem'/>
          </SpinnerContainer>
        ):
        (
          <ListUserContainer>
           {users.map(user=>(<DriverCard user={user} key={user.username}/>))}
          </ListUserContainer>
        )
      }

      <PaginationContainer>
        <NavigationButton 
          onClick={_onPrevPage(setPageIndex)} 
          disabled={pageIndex===1}
        >
          <FiChevronLeft/>
          Prev Page
         
        </NavigationButton>
        <NavigationButton 
          onClick={_onNextPage(setPageIndex)} 
          disabled={pageIndex===PAGE}
        >
          Next Page
          <FiChevronRight/>
        </NavigationButton>
      </PaginationContainer>
    </>
  )
}

export default DriverManagement
