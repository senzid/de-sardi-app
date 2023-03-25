import React from 'react';
// import './CustomTable.scss';
import {Button} from '@senzid/de-sardi-lib/'
import { isDisabled } from '@testing-library/user-event/dist/utils';

type StringOrNumber = string | number
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

export const CustomTable =<TElement extends unknown>({
  keyExtractor,
  columnRender,
  dataSource,
  theme='white',
  loading,
  pagination
}: Props<TElement>) => {

  const isLoading = () => {
    let rows =[]
    const totalRows = pagination?pagination.numberResults: 10
    for (let i = 0; i < totalRows; i++) {
      rows.push(
      <tr key={`loading_${i}`}>
        <td colSpan={columnRender.length}>
        </td>
      </tr>)
    } 
    return rows
  }

  const previuousDisabled = () => {
    return pagination?.currentPage === 1 ? true : false
  }

  const nextDisabled = () => {
    return pagination?.currentPage === pagination?.total ? true : false
  }

  return (
    <table className="Table">
      <thead className="Head">
        <tr>
          {columnRender.map((col)=>{
            return(
              <th key={col.title}>{col.title}</th>
            )
          })}
        </tr>
      </thead>
      <tbody className="Body">
        {loading ? isLoading() :
        dataSource?.map((item)=>{
          return(
            <tr key={keyExtractor(item)}>
            {columnRender.map((col)=>{
              return <td key={keyExtractor(item)+col.title} >{col.renderItem(item)}</td>
            })}
            </tr>
            )
          })}
        
      </tbody>
      { pagination &&
        <tfoot className="Foot">
          <tr>
            <td colSpan={columnRender.length}>
              {pagination.filters} {`page ${pagination.currentPage}/${pagination.total}`} 
              <Button onClick={pagination.onBack} disabled={previuousDisabled()} style={{margin:'0 5px'}} className="outlined" color="black">previous</Button> 
              <Button onClick={pagination.onNext} disabled={nextDisabled()} style={{marginRight:'5px'}} className="outlined" color="black">next</Button>
            </td>
          </tr>
        </tfoot>
      }
      </table>
  );
}