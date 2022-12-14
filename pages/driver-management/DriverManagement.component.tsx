import type { NextPage } from 'next'
import Head from 'next/head'
import { ReactElement, useState } from 'react';
import { FaSearch } from '@react-icons/all-files/fa/FaSearch';
import { HiOutlinePlus } from '@react-icons/all-files/hi/HiOutlinePlus';

import { PAGE } from '../../src/constants';
import useUsers from '../../src/hooks/useUsers';
import useUsersQuery from '../../src/hooks/useUsersQuery';
import TextInput from '../../src/components/TextInput';
import ListDriver from '../../src/components/ListDriver';
import PaginationBar from '../../src/components/PaginationBar';
import Button from '../../src/components/Button';
import { 
  HeaderContainer,
  HeaderDescription, 
  HeaderTitle, 
  HeaderUtilsContainer
} from './DriverManagement.component.styles';
import { SearchEventFunction, SetPageIndex, SetSearchInput } from './DriverManagement.component.types';

/**
 * trigered event when user changes search input
 * @param {SetSearchInput} setSearchInput setter search input state
 * @returns {SearchEventFunction} execute setSearchInput
 */
export const _onInputSearch = (setSearchInput: SetSearchInput): SearchEventFunction=>
(event: React.ChangeEvent<HTMLInputElement>)=>{
  setSearchInput(event.target.value)
}

/**
 * trigered event when user move to next page
 * @param {SetPageIndex} setPageIndex setter page state
 * @returns {VoidFunction} execute setPageIndex
 */
export const _onNextPage = (setPageIndex: SetPageIndex)=>()=>{
  setPageIndex(index=>index+1)
}

/**
 * trigered event when user move to previous page
 * @param {SetPageIndex} setPageIndex setter page state
 * @returns {VoidFunction} execute setPageIndex
 */
export const _onPrevPage = (setPageIndex: SetPageIndex): VoidFunction=>()=>{
  setPageIndex(index=>index-1)
}

/**
 * Driver Management page
 * @returns {ReactElement} Driver Management page
 */
const DriverManagement: NextPage = (): ReactElement => {
  const {users:initialValue, isLoading, isError, refetch} = useUsersQuery();
  const [pageIndex, setPageIndex] = useState(1);
  const [searchInput, setSearchInput]= useState<string>();
  const {users} = useUsers({initialValue, searchInput, pageIndex})

  return (
    <>
      <Head>
        <title>Driver Management</title>
        <meta name="description" content="Generated by metaufiq" />
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
          <Button textAlign='start' buttonType='PRIMARY'>
              TAMBAH DRIVER
              <HiOutlinePlus/>
          </Button>
        </HeaderUtilsContainer>
      </HeaderContainer>

      <br/>
      <ListDriver
        data={users}
        isLoading={isLoading}
        isError={isError}
        refetch={refetch}
      />

      <PaginationBar
        onNext={_onNextPage(setPageIndex)}
        onPrev={_onPrevPage(setPageIndex)}
        pageIndex={pageIndex}
        totalPages={PAGE}
      />
    </>
  )
}

export default DriverManagement
