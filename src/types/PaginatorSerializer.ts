export type PaginatorSerializer = {
  readonly pageCount: number
  readonly hasNext: boolean
  readonly hasPrevious: boolean
  readonly hasOtherPages: boolean
  readonly pageSize: number
  readonly pageNumber: number
  readonly pageRange: Array<number>
  readonly count: number
  readonly startIndex: number
  readonly endIndex: number
  readonly pageSizes: Array<number>
}
