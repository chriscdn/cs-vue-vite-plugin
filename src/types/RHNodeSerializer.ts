export type RHNodeSerializer = {
  readonly dataid: number
  readonly name: string
  readonly subtype: number
  readonly subtypename: string
  readonly comment: string | null
  readonly mimetype: string | null
  readonly parentid: number
  readonly createdate: string
  readonly modifydate: string
  readonly gif: string
  readonly gif32: string
  readonly giflarge: string
  readonly ownerid: number
  readonly groupid: number
  readonly version: number | null
  readonly versionnum: string | null
  readonly modifiedImageCallback: string
  readonly categories: object
  readonly url: string | null
}
