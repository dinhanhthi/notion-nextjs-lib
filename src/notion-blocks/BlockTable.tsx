import {
  RichTextItemResponse,
  TableBlockObjectResponse,
  TableRowBlockObjectResponse
} from '@notionhq/client/build/src/api-endpoints'
import cn from 'classnames'

import BlockRichText from './BlockRichText'

export type BlockTableType = TableBlockObjectResponse & { children: TableRowBlockObjectResponse[] }

export default function BlockTable(props: { block: BlockTableType; className?: string }) {
  const { block, className } = props
  const bodyRows: TableRowBlockObjectResponse[] = block?.table.has_row_header
    ? block?.['children']?.slice(1)
    : block?.['children']
  return (
    <div className={cn(className, 'w-full overflow-auto md:overflow-visible')}>
      <table className="table-auto my-0">
        {block?.table?.has_row_header && (
          <thead>
            {trBlock({
              cells: block?.['children']?.[0]?.table_row?.cells,
              isRowHeader: true,
              key: 0
            })}
          </thead>
        )}
        <tbody>
          {bodyRows?.map((row, index) =>
            trBlock({
              cells: row?.table_row?.cells,
              isRowHeader: false,
              key: index,
              hasColumnHeader: block?.table?.has_column_header
            })
          )}
        </tbody>
      </table>
    </div>
  )
}

function trBlock(options: {
  cells: TableRowBlockObjectResponse['table_row']['cells']
  isRowHeader: boolean
  key: number
  hasColumnHeader?: boolean
}) {
  const { cells, isRowHeader, key, hasColumnHeader } = options
  if (!cells) return null
  return (
    <tr key={key}>
      {cells.map((cell, index, _cells) => {
        if (hasColumnHeader && index === 0) {
          return cellBlock({
            cell,
            key: index,
            isHeader: true,
            headerType: 'column'
            // hideBorder: index + 1 === cells.length
          })
        } else {
          return cellBlock({
            cell,
            key: index,
            isHeader: isRowHeader,
            headerType: 'row'
            // hideBorder: index + 1 === cells.length
          })
        }
      })}
    </tr>
  )
}

function cellBlock(options: {
  cell: RichTextItemResponse[]
  key: number
  isHeader: boolean
  headerType?: 'row' | 'column'
  hideBorder?: boolean
}) {
  const { cell, isHeader, key, headerType, hideBorder } = options
  const cellClass = { 'px-4 py-2': true, 'border border-slate-300': !hideBorder }
  if (isHeader) {
    const headerClass = {
      'bg-sky-100': headerType === 'row',
      'bg-gray-100': headerType === 'column'
    }
    return (
      <th className={cn(cellClass, headerClass)} key={key}>
        {cell.map((richText, index2) => (
          <BlockRichText key={index2} richText={richText} />
        ))}
      </th>
    )
  } else {
    return (
      <td className={cn(cellClass)} key={key}>
        {cell.map((richText, index2) => (
          <BlockRichText key={index2} richText={richText} />
        ))}
      </td>
    )
  }
}
