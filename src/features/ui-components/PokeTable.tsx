import React from 'react';
import { Table } from '@senzid/de-sardi-lib/';

interface Props<TElement> {
  keyExtractor:(item:TElement)=> number|string;
  columnRender: Array<{title:string,renderItem:(item:TElement)=>React.ReactNode;}>;
  dataSource?: TElement[];
  theme?: string;
  loading: boolean
  pagination?: {
    currentPage : number,
    numberResults: number,
    onNext: ()=>void,
    onBack: ()=>void,
    filters?: Array<any>,
    total: number
  }
}

export const PokeTable =<TElement extends unknown>({
  keyExtractor,
  columnRender,
  dataSource,
  theme='white',
  loading,
  pagination
}: Props<TElement>) => {

  return <Table 
    keyExtractor={keyExtractor} 
    loading={loading}
    columnRender={columnRender}
    dataSource={dataSource}
    pagination={pagination}
  />

}