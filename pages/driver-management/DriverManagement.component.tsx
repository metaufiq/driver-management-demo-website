import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import Button from '../../components/Button';
import DriverCard from '../../components/DriverCard';
import TextInput from '../../components/TextInput';
import { PAGE } from '../../constants';
import useUsers from '../../hooks/useUsers';
import useUsersQuery from '../../hooks/useUsersQuery';
import { Container, HeaderContainer, HeaderDescription, HeaderTitle, ListUserContainer, PaginationContainer } from './DriverManagement.component.styles';
import { SetPageIndex, SetSearchInput } from './DriverManagement.component.types';

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
  const {users:initialValue} = useUsersQuery();
  const [pageIndex, setPageIndex] = useState(1);
  const [searchInput, setSearchInput]= useState<string>();
  const {users} = useUsers({initialValue, searchInput, pageIndex})

  return (
    <Container>
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
        <div>
          <TextInput
            placeholder='Cari Driver'
            onChange={_onInputSearch(setSearchInput)}
            type='text'
            leftIcon={<FaSearch/>}
          />
          <Button type='PRIMARY'>
            TAMBAH DRIVER
          </Button>
        </div>
      </HeaderContainer>

      <br/>

      <ListUserContainer>
        {users.map(user=>(<DriverCard user={user} key={user.username}/>))}
      </ListUserContainer>
      <PaginationContainer>
        <Button onClick={_onPrevPage(setPageIndex)} disabled={pageIndex===1} type='NAVIGATION'>
          Prev Page
        </Button>
        <Button onClick={_onNextPage(setPageIndex)} disabled={pageIndex===PAGE} type='NAVIGATION'>
          Next Page
        </Button>
      </PaginationContainer>
    </Container>
  )
}

export default DriverManagement
